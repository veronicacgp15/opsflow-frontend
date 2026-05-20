import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AdminApiService } from '@core/services/admin-api.service';
import { DocumentTypeDto, DocumentTypeUpsertRequest } from '@core/models/admin.models';

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

@Component({
  selector: 'app-document-types-admin-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './document-types-admin-page.component.html',
  styleUrl: './document-types-admin-page.component.scss'
})
export class DocumentTypesAdminPageComponent implements OnInit {
  readonly types = signal<DocumentTypeDto[]>([]);
  readonly loading = signal(false);
  readonly loadError = signal<string | null>(null);
  readonly togglingId = signal<number | null>(null);
  readonly modalCreate = signal(false);
  readonly modalEdit = signal(false);
  readonly editingId = signal<number | null>(null);
  readonly notice = signal<NoticeMessage | null>(null);
  readonly confirmReq = signal<ConfirmRequest | null>(null);

  formName = '';
  formDescription = '';

  readonly nameFilter = signal('');

  readonly filteredTypes = computed(() => {
    const q = this.nameFilter().trim().toLowerCase();
    let list = this.types();
    if (q) {
      list = list.filter(
        t =>
          (t.name || '').toLowerCase().includes(q) ||
          (t.description || '').toLowerCase().includes(q) ||
          String(t.id).includes(q)
      );
    }
    return list;
  });

  constructor(private readonly adminApi: AdminApiService) {}

  ngOnInit(): void {
    this.reload();
  }

  reload(): void {
    this.loading.set(true);
    this.loadError.set(null);
    this.adminApi.listAllDocumentTypesAdmin().subscribe({
      next: rows => {
        this.types.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.loadError.set('No se pudo cargar el catalogo de tipos de documento.');
      }
    });
  }

  openCreate(): void {
    this.modalEdit.set(false);
    this.editingId.set(null);
    this.formName = '';
    this.formDescription = '';
    this.modalCreate.set(true);
  }

  openEdit(t: DocumentTypeDto): void {
    this.modalCreate.set(false);
    this.editingId.set(t.id);
    this.formName = t.name;
    this.formDescription = t.description ?? '';
    this.modalEdit.set(true);
  }

  closeModals(): void {
    this.modalCreate.set(false);
    this.modalEdit.set(false);
    this.editingId.set(null);
  }

  submitCreate(): void {
    const name = this.formName.trim();
    if (!name) {
      this.showWarning('Indica un nombre para el tipo.');
      return;
    }
    this.loading.set(true);
    const body: DocumentTypeUpsertRequest = {
      name,
      description: this.trimDescription()
    };
    this.adminApi.createDocumentType(body).subscribe({
      next: created => {
        this.loading.set(false);
        this.types.update(list => [...list, created].sort((a, b) => a.name.localeCompare(b.name)));
        this.closeModals();
        this.showSuccess('Tipo de documento creado correctamente.');
      },
      error: e => {
        this.loading.set(false);
        this.showApiError(e);
      }
    });
  }

  submitEdit(): void {
    const id = this.editingId();
    if (id == null) {
      return;
    }
    const name = this.formName.trim();
    if (!name) {
      this.showWarning('Indica un nombre para el tipo.');
      return;
    }
    this.loading.set(true);
    const body: DocumentTypeUpsertRequest = {
      name,
      description: this.trimDescription()
    };
    this.adminApi.updateDocumentType(id, body).subscribe({
      next: updated => {
        this.loading.set(false);
        this.types.update(list => list.map(row => (row.id === updated.id ? { ...row, ...updated } : row)));
        this.closeModals();
        this.showSuccess('Tipo actualizado correctamente.');
      },
      error: e => {
        this.loading.set(false);
        this.showApiError(e);
      }
    });
  }

  isRowActive(t: DocumentTypeDto): boolean {
    return t.active !== false;
  }

  onToggleActive(t: DocumentTypeDto, ev: Event): void {
    const input = ev.target as HTMLInputElement;
    const wantActive = input.checked;
    if (wantActive === this.isRowActive(t)) {
      return;
    }
    this.togglingId.set(t.id);
    this.adminApi.patchDocumentTypeActive(t.id, wantActive).subscribe({
      next: updated => {
        this.togglingId.set(null);
        this.types.update(list => list.map(row => (row.id === updated.id ? { ...row, ...updated } : row)));
        this.showSuccess(wantActive ? 'Tipo activado.' : 'Tipo desactivado.');
      },
      error: e => {
        this.togglingId.set(null);
        input.checked = this.isRowActive(t);
        this.showApiError(e);
      }
    });
  }

  openDeleteConfirm(t: DocumentTypeDto): void {
    this.confirmReq.set({
      title: 'Desactivar tipo',
      message: `Se marcara como inactivo el tipo "${t.name}". Si hay documentos que lo usan, el servidor rechazara la operacion (409).`,
      confirmLabel: 'Desactivar',
      cancelLabel: 'Cancelar',
      danger: true,
      onConfirm: () => this.runDelete(t)
    });
  }

  cancelConfirm(): void {
    this.confirmReq.set(null);
  }

  acceptConfirm(): void {
    const req = this.confirmReq();
    if (!req) {
      return;
    }
    this.confirmReq.set(null);
    req.onConfirm();
  }

  private runDelete(t: DocumentTypeDto): void {
    this.loading.set(true);
    this.adminApi.deleteDocumentType(t.id).subscribe({
      next: dto => {
        this.loading.set(false);
        this.types.update(list => list.map(row => (row.id === dto.id ? { ...row, ...dto } : row)));
        this.showSuccess('Tipo desactivado (borrado logico).');
      },
      error: e => {
        this.loading.set(false);
        this.showApiError(e);
      }
    });
  }

  closeNotice(): void {
    this.notice.set(null);
  }

  private trimDescription(): string | null {
    const d = this.formDescription.trim();
    return d.length ? d : null;
  }

  private showSuccess(message: string, title = 'Listo'): void {
    this.notice.set({ kind: 'success', title, message });
  }

  private showWarning(message: string, title = 'Atencion'): void {
    this.notice.set({ kind: 'warning', title, message });
  }

  private showApiError(e: unknown, fallback = 'Ocurrio un error inesperado'): void {
    let message = fallback;
    if (e instanceof HttpErrorResponse) {
      const body = e.error as { message?: string } | undefined;
      message = body?.message || e.message || fallback;
    } else if (e && typeof e === 'object' && 'message' in e) {
      message = String((e as { message: string }).message);
    }
    this.notice.set({ kind: 'error', title: 'Error', message });
  }
}
