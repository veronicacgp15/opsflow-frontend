import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { AdminApiService } from '@core/services/admin-api.service';
import { AuthService } from '@core/services/auth.service';
import {
  DocumentCreatePayload,
  DocumentDto,
  DocumentStatus,
  DocumentTypeDto,
  DocumentVersionDto,
  OrganizationDto,
  OrganizationMineDto,
  UserProfileDto
} from '@core/models/admin.models';
import { HasPermissionDirective } from '@core/directives/has-permission.directive';
import { P } from '@core/constants/permissions';

type NoticeKind = 'info' | 'success' | 'warning' | 'error';

interface NoticeMessage {
  kind: NoticeKind;
  title: string;
  message: string;
}

interface ConfirmRequest {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  danger?: boolean;
  onConfirm: () => void;
}

interface ApiErrorLike {
  error?: { message?: string };
  message?: string;
}

interface DocumentForm {
  name: string;
  documentTypeId: number;
  expirationDate: string;
  file: File | null;
}

/** Identificador de columna ordenable. */
type SortColumn =
  | 'id'
  | 'name'
  | 'status'
  | 'type'
  | 'org'
  | 'owner'
  | 'expiration'
  | 'versions';

type SortDir = 'asc' | 'desc';

const STATUS_OPTIONS: DocumentStatus[] = ['ACTIVE', 'EXPIRING', 'EXPIRED', 'ARCHIVED'];

/**
 * Limite de versiones por documento. Debe coincidir con
 */
const MAX_VERSIONS_PER_DOCUMENT = 3;

/**
 * Listado de documentos. Ademas de la tabla basica, se enriquece la vista resolviendo:

 */
@Component({
  selector: 'app-documents-page',
  standalone: true,
  imports: [CommonModule, FormsModule, HasPermissionDirective],
  templateUrl: './documents-page.component.html',
  styleUrl: './documents-page.component.scss'
})
export class DocumentsPageComponent implements OnInit {
  protected readonly P = P;
  protected readonly STATUS_OPTIONS = STATUS_OPTIONS;
  protected readonly MAX_VERSIONS = MAX_VERSIONS_PER_DOCUMENT;

  readonly docs = signal<DocumentDto[]>([]);
  readonly loading = signal(false);
  readonly loadError = signal<string | null>(null);

  // Catalogos auxiliares para mapear IDs -> nombres legibles.
  private readonly docTypesById = signal<Record<number, DocumentTypeDto>>({});
  private readonly orgsById = signal<Record<number, string>>({});
  private readonly ownersById = signal<Record<number, UserProfileDto>>({});

  // Filtros
  readonly idFilterSig = signal('');
  readonly nameFilterSig = signal('');
  readonly statusFilterSig = signal<'all' | DocumentStatus>('all');

  // Sort
  readonly sortColumn = signal<SortColumn>('id');
  readonly sortDir = signal<SortDir>('asc');

  // Modales
  readonly modalCreate = signal(false);
  readonly modalForceState = signal<DocumentDto | null>(null);
  readonly forceStateValue = signal<DocumentStatus>('ACTIVE');
  readonly notice = signal<NoticeMessage | null>(null);
  readonly confirmReq = signal<ConfirmRequest | null>(null);

  // Modal de historial de versiones (visible para todos los roles autenticados).
  // El backend gestiona si el rol concreto puede subir/descargar para este doc en particular.
  readonly versionsModalDoc = signal<DocumentDto | null>(null);
  readonly versionsUploadFile = signal<File | null>(null);
  readonly versionsUploadLoading = signal(false);

  form: DocumentForm = this.emptyForm();

  /** Aplica filtros y luego ordena. */
  readonly filteredDocs = computed(() => {
    const idQ = this.idFilterSig().trim();
    const nameQ = this.nameFilterSig().trim().toLowerCase();
    const status = this.statusFilterSig();
    let list = this.docs();

    if (idQ) list = list.filter(d => String(d.id).includes(idQ));
    if (nameQ) list = list.filter(d => (d.name || '').toLowerCase().includes(nameQ));
    if (status !== 'all') list = list.filter(d => d.status === status);

    return [...list].sort((a, b) => this.compareForSort(a, b));
  });

  constructor(
    private readonly adminApi: AdminApiService,
    public readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.reload();
    this.loadDocumentTypes();
    this.loadOrganizations();
  }

  // ---------------------------------------------------------------------------
  // Carga de catalogos auxiliares
  // ---------------------------------------------------------------------------

  /**
   * Carga el catalogo de tipos de documento. 
   */
  private loadDocumentTypes(): void {
    this.adminApi.listDocumentTypes().subscribe({
      next: types => {
        const map: Record<number, DocumentTypeDto> = {};
        for (const t of types || []) {
          map[t.id] = t;
        }
        this.docTypesById.set(map);
      },
      error: () => {
        this.docTypesById.set({});
      }
    });
  }

  /**
   * Si el usuario es admin (puede listar TODAS las orgs) las traemos completas; si no,
   * traemos solo las propias. En ambos casos volcamos id -> name.
   */
  private loadOrganizations(): void {
    const useGlobal = this.authService.hasPermission(P.ORG_LIST);

    const obs = useGlobal
      ? this.adminApi.listAllOrganizations()
      : this.adminApi.myOrganizations();

    obs.subscribe({
      next: (rows: OrganizationDto[] | OrganizationMineDto[]) => {
        const map: Record<number, string> = {};
        for (const o of rows || []) {
          map[o.id] = o.name;
        }
        this.orgsById.set(map);
      },
      error: () => {
        this.orgsById.set({});
      }
    });
  }

  /**
   * Resuelve los nombres de los "Subido por" para los documentos cargados, en una sola
   * llamada batch. Filtra duplicados y se salta los ids que ya tenemos cacheados.
   */
  private loadOwnersFor(docs: DocumentDto[]): void {
    const cache = this.ownersById();
    const ids = Array.from(
      new Set(
        docs
          .map(d => d.userId)
          .filter((id): id is number => typeof id === 'number' && id > 0 && !cache[id])
      )
    );
    if (ids.length === 0) return;

    this.adminApi.getUserProfilesBatch(ids).subscribe({
      next: profiles => {
        const next = { ...this.ownersById() };
        for (const p of profiles || []) {
          next[p.id] = p;
        }
        this.ownersById.set(next);
      },
      error: () => {
        // Silencioso: si falla, mostraremos el id.
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Labels para columnas enriquecidas (id -> nombre)
  // ---------------------------------------------------------------------------

  /** Devuelve el nombre del tipo o el id si el catalogo aun no llego. */
  typeLabel(d: DocumentDto): string {
    const t = this.docTypesById()[d.documentTypeId];
    return t ? t.name : `#${d.documentTypeId}`;
  }

  /** Devuelve el nombre de la organizacion o el id; "—" si no hay org. */
  orgLabel(d: DocumentDto): string {
    if (d.organizationId == null) return '—';
    const name = this.orgsById()[d.organizationId];
    return name ? name : `#${d.organizationId}`;
  }

  /** Devuelve "Nombre Apellido" del usuario que subio el documento, o el id como fallback. */
  ownerLabel(d: DocumentDto): string {
    const p = this.ownersById()[d.userId];
    if (!p) return `#${d.userId}`;
    const full = `${p.name || ''} ${p.lastname || ''}`.trim();
    return full || p.username || `#${d.userId}`;
  }

  // ---------------------------------------------------------------------------
  // Carga del listado
  // ---------------------------------------------------------------------------
  reload(): void {
    this.loadError.set(null);
    this.loading.set(true);
    this.adminApi.listDocuments().subscribe({
      next: rows => {
        const list = rows ?? [];
        this.docs.set(list);
        this.loading.set(false);
        this.loadOwnersFor(list);
      },
      error: e => {
        this.loading.set(false);
        this.loadError.set(
          e?.error?.message || e?.message || 'No se pudieron cargar los documentos.'
        );
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Sort
  // ---------------------------------------------------------------------------

  /** Click sobre la cabecera: alterna asc/desc o cambia de columna. */
  setSort(col: SortColumn): void {
    if (this.sortColumn() === col) {
      this.sortDir.set(this.sortDir() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortColumn.set(col);
      this.sortDir.set('asc');
    }
  }

  /** Indicador visual usado en la cabecera (▲/▼ activo, "↕" inactivo). */
  sortIndicator(col: SortColumn): string {
    if (this.sortColumn() !== col) return '↕';
    return this.sortDir() === 'asc' ? '▲' : '▼';
  }

  isSortActive(col: SortColumn): boolean {
    return this.sortColumn() === col;
  }

  private compareForSort(a: DocumentDto, b: DocumentDto): number {
    const dir = this.sortDir() === 'asc' ? 1 : -1;
    const col = this.sortColumn();

    let va: string | number | null;
    let vb: string | number | null;

    switch (col) {
      case 'id':
        va = a.id;
        vb = b.id;
        break;
      case 'name':
        va = (a.name || '').toLowerCase();
        vb = (b.name || '').toLowerCase();
        break;
      case 'status':
        va = (a.status || '').toLowerCase();
        vb = (b.status || '').toLowerCase();
        break;
      case 'type':
        va = this.typeLabel(a).toLowerCase();
        vb = this.typeLabel(b).toLowerCase();
        break;
      case 'org':
        va = this.orgLabel(a).toLowerCase();
        vb = this.orgLabel(b).toLowerCase();
        break;
      case 'owner':
        va = this.ownerLabel(a).toLowerCase();
        vb = this.ownerLabel(b).toLowerCase();
        break;
      case 'expiration':
        // null al final independientemente de la direccion.
        va = a.expirationDate || '';
        vb = b.expirationDate || '';
        break;
      case 'versions':
        va = a.versions?.length ?? 0;
        vb = b.versions?.length ?? 0;
        break;
      default:
        va = 0;
        vb = 0;
    }

    if (va == null && vb == null) return 0;
    if (va == null) return 1;
    if (vb == null) return -1;

    if (typeof va === 'number' && typeof vb === 'number') {
      return (va - vb) * dir;
    }
    return String(va).localeCompare(String(vb)) * dir;
  }

  // ---------------------------------------------------------------------------
  // Visualizar/descargar archivo
  // ---------------------------------------------------------------------------


  viewDocument(d: DocumentDto): void {
    if (!d.versions || d.versions.length === 0) {
      this.showWarning('Este documento aun no tiene archivos asociados.');
      return;
    }
    this.adminApi.downloadDocumentLatest(d.id).subscribe({
      next: response => this.openBlobInNewTab(response, d),
      error: e => this.showApiError(e)
    });
  }

  private openBlobInNewTab(response: HttpResponse<Blob>, d: DocumentDto): void {
    const blob = response.body;
    if (!blob) {
      this.showApiError(
        { message: 'Respuesta vacia del servidor' } as ApiErrorLike,
        'No se pudo abrir el archivo'
      );
      return;
    }

    // Caso documento "externo": el backend responde JSON {"externalUrl":"..."} cuando el
    // archivo no esta en el storage local sino en una URL absoluta (S3, etc.). Lo detectamos
    // por el Content-Type y abrimos la URL en una pestana nueva en vez de tratarlo como blob.
    const contentType = (response.headers.get('Content-Type') || '').toLowerCase();
    if (contentType.includes('application/json')) {
      blob.text().then(text => {
        try {
          const data = JSON.parse(text) as { externalUrl?: string };
          if (data.externalUrl) {
            const opened = window.open(data.externalUrl, '_blank');
            if (!opened) {
              this.showWarning(
                'Tu navegador bloqueo la apertura de la pestana. Permitelo y vuelve a intentar.'
              );
            }
          } else {
            this.showApiError({ message: text } as ApiErrorLike);
          }
        } catch {
          this.showApiError({ message: 'Respuesta no reconocida' } as ApiErrorLike);
        }
      });
      return;
    }

    const url = URL.createObjectURL(blob);
    const filename = this.parseFilenameFromContentDisposition(
      response.headers.get('Content-Disposition')
    ) || `${d.name || 'documento_' + d.id}`;

    const newWindow = window.open(url, '_blank');
    if (!newWindow) {
      // El popup blocker puede impedir abrir la ventana; en ese caso forzamos descarga.
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  
    setTimeout(() => URL.revokeObjectURL(url), 60_000);
  }

  private parseFilenameFromContentDisposition(header: string | null): string | null {
    if (!header) return null;
    const utf8Match = /filename\*=UTF-8''([^;]+)/i.exec(header);
    if (utf8Match && utf8Match[1]) {
      try {
        return decodeURIComponent(utf8Match[1]);
      } catch {
        return utf8Match[1];
      }
    }
    const plainMatch = /filename="?([^";]+)"?/i.exec(header);
    return plainMatch && plainMatch[1] ? plainMatch[1] : null;
  }

  // ---------------------------------------------------------------------------
  // Crear documento
  // ---------------------------------------------------------------------------
  openCreate(): void {
    this.form = this.emptyForm();
    this.modalCreate.set(true);
  }

  closeCreate(): void {
    this.modalCreate.set(false);
  }

  onFileSelected(ev: Event): void {
    const input = ev.target as HTMLInputElement;
    this.form.file = input.files && input.files.length ? input.files[0] : null;
  }

  submitCreate(): void {
    if (!this.canSubmitCreate()) return;

    const payload: DocumentCreatePayload = {
      name: this.form.name.trim(),
      documentTypeId: this.form.documentTypeId,
      expirationDate: this.form.expirationDate || null
    };

    this.loading.set(true);
    this.adminApi.createDocument(payload, this.form.file!).subscribe({
      next: () => {
        this.loading.set(false);
        this.closeCreate();
        this.reload();
        this.showSuccess(`Documento "${payload.name}" creado.`);
      },
      error: e => {
        this.loading.set(false);
        this.showApiError(e);
      }
    });
  }

  canSubmitCreate(): boolean {
    return (
      !!this.form.name.trim() &&
      this.form.documentTypeId > 0 &&
      !!this.form.file &&
      !this.loading()
    );
  }

  /** Lista de tipos disponible para el select del modal. */
  documentTypeOptions(): DocumentTypeDto[] {
    return Object.values(this.docTypesById());
  }

  // ---------------------------------------------------------------------------
  // Eliminar documento
  // ---------------------------------------------------------------------------
  confirmDelete(d: DocumentDto): void {
    this.openConfirm({
      title: 'Eliminar documento',
      message: `Se eliminara "${d.name}" (id ${d.id}). Esta accion no se puede deshacer.`,
      confirmLabel: 'Eliminar',
      danger: true,
      onConfirm: () => this.executeDelete(d)
    });
  }

  private executeDelete(d: DocumentDto): void {
    this.adminApi.deleteDocument(d.id).subscribe({
      next: () => {
        this.reload();
        this.showSuccess(`Documento "${d.name}" eliminado.`);
      },
      error: e => this.showApiError(e)
    });
  }

  // ---------------------------------------------------------------------------
  // Forzar estado
  // ---------------------------------------------------------------------------
  openForceState(d: DocumentDto): void {
    this.modalForceState.set(d);
    this.forceStateValue.set(d.status as DocumentStatus);
  }

  closeForceState(): void {
    this.modalForceState.set(null);
  }

  submitForceState(): void {
    const d = this.modalForceState();
    if (!d) return;
    const state = this.forceStateValue();
    this.loading.set(true);
    this.adminApi.forceDocumentState(d.id, state).subscribe({
      next: () => {
        this.loading.set(false);
        this.closeForceState();
        this.reload();
        this.showSuccess(`Estado de "${d.name}" actualizado a ${state}.`);
      },
      error: e => {
        this.loading.set(false);
        this.showApiError(e);
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Versiones (resumen rapido)
  // ---------------------------------------------------------------------------
  versionsSummary(d: DocumentDto): string {
    const count = d.versions?.length ?? 0;
    if (count === 0) return '—';
    return `${count} version${count === 1 ? '' : 'es'}`;
  }

  // ---------------------------------------------------------------------------
  // Modal de historial de versiones: listado + descarga por version + upload
  // ---------------------------------------------------------------------------

  /** Abre el modal de versiones para un documento. Pre-carga los nombres de los autores. */
  openVersionsModal(d: DocumentDto): void {
    this.versionsModalDoc.set(d);
    this.versionsUploadFile.set(null);
    this.loadVersionUploadersFor(d);
  }

  private loadVersionUploadersFor(d: DocumentDto): void {
    // Aseguramos tener resueltos los nombres de los uploaders de cada version.
    const ids = (d.versions ?? [])
      .map(v => v.uploadedByUserId)
      .filter((id): id is number => typeof id === 'number' && id > 0);
    if (ids.length) {
      this.adminApi.getUserProfilesBatch(ids).subscribe({
        next: profiles => {
          const next = { ...this.ownersById() };
          for (const p of profiles || []) next[p.id] = p;
          this.ownersById.set(next);
        },
        error: () => { /* silencioso: caera al fallback "#id" */ }
      });
    }
  }

  closeVersionsModal(): void {
    this.versionsModalDoc.set(null);
    this.versionsUploadFile.set(null);
  }

  /** Devuelve las versiones ordenadas por versionNumber descendente para mostrar la mas nueva arriba. */
  sortedVersions(d: DocumentDto): DocumentVersionDto[] {
    return [...(d.versions ?? [])].sort(
      (a, b) => (b.versionNumber ?? 0) - (a.versionNumber ?? 0)
    );
  }

  /** Nombre + apellido del autor de una version, con fallback al id. */
  versionUploaderLabel(v: DocumentVersionDto): string {
    const p = this.ownersById()[v.uploadedByUserId];
    if (!p) return `#${v.uploadedByUserId}`;
    const full = `${p.name || ''} ${p.lastname || ''}`.trim();
    return full || p.username || `#${v.uploadedByUserId}`;
  }

  /** Tamano legible (KB/MB) para mostrarlo junto a cada version. */
  formatSize(bytes: number | null | undefined): string {
    if (!bytes || bytes <= 0) return '—';
    const kb = bytes / 1024;
    if (kb < 1024) return `${kb.toFixed(1)} KB`;
    return `${(kb / 1024).toFixed(2)} MB`;
  }

  /** Descarga una version concreta del documento abierto en el modal. */
  downloadVersion(v: DocumentVersionDto): void {
    const d = this.versionsModalDoc();
    if (!d || v.id == null) return;
    this.adminApi.downloadDocumentVersion(d.id, v.id).subscribe({
      next: response => this.openBlobInNewTab(response, d),
      error: e => this.showApiError(e)
    });
  }

  confirmDeleteVersion(v: DocumentVersionDto): void {
    const d = this.versionsModalDoc();
    if (!d || v.id == null) return;
    this.openConfirm({
      title: 'Eliminar version',
      message:
        `Se eliminara la version v${v.versionNumber} de "${d.name}". ` +
        'Esta accion no se puede deshacer.',
      confirmLabel: 'Eliminar',
      danger: true,
      onConfirm: () => this.executeDeleteVersion(d, v)
    });
  }

  private executeDeleteVersion(d: DocumentDto, v: DocumentVersionDto): void {
    if (v.id == null) return;
    this.adminApi.deleteDocumentVersion(d.id, v.id).subscribe({
      next: updated => {
        this.docs.update(rows => rows.map(r => (r.id === updated.id ? updated : r)));
        this.versionsModalDoc.set(updated);
        this.versionsUploadFile.set(null);
        this.loadVersionUploadersFor(updated);
        this.showSuccess(`Version v${v.versionNumber} eliminada correctamente.`);
      },
      error: e => this.showApiError(e)
    });
  }

  /** Capturador del file input de la zona "Subir nueva version" del modal. */
  onVersionFileSelected(ev: Event): void {
    const input = ev.target as HTMLInputElement;
    this.versionsUploadFile.set(
      input.files && input.files.length ? input.files[0] : null
    );
  }

  /**
   * Devuelve {@code true} cuando el documento abierto en el modal ya alcanzo el limite
   * de versiones y por tanto NO se puede subir una nueva. Lo usa la plantilla para
   * deshabilitar el input file y el boton "Subir version".
   */
  versionLimitReached(d: DocumentDto | null): boolean {
    if (!d) return false;
    return d.versions.length >= MAX_VERSIONS_PER_DOCUMENT;
  }

  /**
   * Envia la nueva version. El backend valida los permisos: ADMIN cualquier doc,
   * MANAGER solo en su org, USER solo si es el dueno. Si no aplica, devuelve 403 y
   * mostramos el mensaje del server al usuario.
   *
   * <p>Antes de llamar al backend comprobamos el limite local de
   * {@link MAX_VERSIONS_PER_DOCUMENT} para mostrar el mensaje de "elimina una version
   * primero" sin gastar una peticion ni esperar al 400. Esto tambien evita el bug por
   * el cual una RuntimeException no controlada en el server podia escalar a 401 y forzar
   * el logout del usuario.
   */
  submitNewVersion(): void {
    const d = this.versionsModalDoc();
    const file = this.versionsUploadFile();
    if (!d || !file || this.versionsUploadLoading()) return;

    if (this.versionLimitReached(d)) {
      this.showWarning(
        `Este documento ya tiene ${MAX_VERSIONS_PER_DOCUMENT} versiones, ` +
          `que es el maximo permitido. Para subir una nueva version elimina ` +
          `una version anterior primero.`,
        'Limite de versiones alcanzado'
      );
      return;
    }

    this.versionsUploadLoading.set(true);
    this.adminApi.uploadNewDocumentVersion(d.id, file).subscribe({
      next: updated => {
        this.versionsUploadLoading.set(false);
        // Actualizamos el documento en la lista y reabrimos el modal con los datos nuevos
        // para que el historial muestre la version recien subida sin recargar todo el listado.
        this.docs.update(rows => rows.map(r => (r.id === updated.id ? updated : r)));
        this.versionsModalDoc.set(updated);
        this.versionsUploadFile.set(null);
        this.loadVersionUploadersFor(updated);
        this.showSuccess(
          `Nueva version ${updated.versions?.length ?? ''} subida correctamente.`
        );
      },
      error: e => {
        this.versionsUploadLoading.set(false);
        this.showApiError(e);
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Confirm + Notice
  // ---------------------------------------------------------------------------
  openConfirm(req: ConfirmRequest): void {
    this.confirmReq.set(req);
  }

  cancelConfirm(): void {
    this.confirmReq.set(null);
  }

  acceptConfirm(): void {
    const req = this.confirmReq();
    if (!req) return;
    this.confirmReq.set(null);
    req.onConfirm();
  }

  closeNotice(): void {
    this.notice.set(null);
  }

  private showSuccess(message: string, title = 'Listo'): void {
    this.notice.set({ kind: 'success', title, message });
  }

  private showWarning(message: string, title = 'Atencion'): void {
    this.notice.set({ kind: 'warning', title, message });
  }

  private showApiError(e: ApiErrorLike, fallback = 'Ocurrio un error inesperado'): void {
    const message = e?.error?.message || e?.message || fallback;
    this.notice.set({ kind: 'error', title: 'Error', message });
  }

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------
  private emptyForm(): DocumentForm {
    return {
      name: '',
      documentTypeId: 1,
      expirationDate: '',
      file: null
    };
  }
}
