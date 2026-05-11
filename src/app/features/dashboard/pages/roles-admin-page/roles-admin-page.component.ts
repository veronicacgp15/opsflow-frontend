import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminApiService } from '@core/services/admin-api.service';
import { BackendRole, PermissionDto } from '@core/models/admin.models';
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

interface PermissionGroup {
  service: string;
  label: string;
  items: PermissionDto[];
}

const SERVICE_LABELS: Record<string, string> = {
  auth: 'Auth',
  org: 'Organizaciones',
  document: 'Documentos'
};

@Component({
  selector: 'app-roles-admin-page',
  standalone: true,
  imports: [CommonModule, FormsModule, HasPermissionDirective],
  templateUrl: './roles-admin-page.component.html',
  styleUrl: './roles-admin-page.component.scss'
})
export class RolesAdminPageComponent implements OnInit {
  /** Codes de permisos expuestos al template para usar con *hasPermission. */
  protected readonly P = P;

  readonly roles = signal<BackendRole[]>([]);
  readonly idFilterSig = signal('');
  readonly nameFilterSig = signal('');
  readonly loading = signal(false);

  readonly modalCreate = signal(false);
  readonly modalEdit = signal(false);
  readonly editingId = signal<number | null>(null);
  formName = '';

  readonly notice = signal<NoticeMessage | null>(null);
  readonly confirmReq = signal<ConfirmRequest | null>(null);

  // ---------------------------------------------------------------------------
  // Permissions modal state
  // ---------------------------------------------------------------------------
  readonly permissionsCatalog = signal<PermissionDto[]>([]);
  readonly permissionsModalRole = signal<BackendRole | null>(null);
  readonly selectedPermissionIds = signal<Set<number>>(new Set());
  readonly permissionsSearchSig = signal('');
  readonly permissionsLoading = signal(false);
  readonly permissionsSaving = signal(false);
  /**
   * Set de `service` keys que el usuario expandio explicitamente. Default vacio = todo
   * colapsado para que el modal se vea compacto. Al buscar se fuerza expandido para que
   * los matches sean siempre visibles.
   */
  readonly expandedGroups = signal<Set<string>>(new Set());

  /** Catalogo agrupado y filtrado, ordenado por servicio (auth → org → document → otros). */
  readonly filteredPermissionGroups = computed<PermissionGroup[]>(() => {
    const q = this.permissionsSearchSig().trim().toLowerCase();
    const matches = (p: PermissionDto): boolean => {
      if (!q) return true;
      return (
        p.urlPattern.toLowerCase().includes(q) ||
        p.httpMethod.toLowerCase().includes(q) ||
        (p.description || '').toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q)
      );
    };

    const order: Record<string, number> = { auth: 0, org: 1, document: 2 };
    const buckets = new Map<string, PermissionDto[]>();
    for (const p of this.permissionsCatalog()) {
      if (!matches(p)) continue;
      const key = p.service;
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key)!.push(p);
    }

    return Array.from(buckets.entries())
      .map(([service, items]) => ({
        service,
        label: SERVICE_LABELS[service] ?? service.toUpperCase(),
        items
      }))
      .sort((a, b) => (order[a.service] ?? 99) - (order[b.service] ?? 99));
  });

  readonly filteredRoles = computed(() => {
    const idQ = this.idFilterSig().trim();
    const nameQ = this.nameFilterSig().trim().toLowerCase();
    let list = this.roles();

    if (idQ) {
      list = list.filter(r => String(r.id).includes(idQ));
    }
    if (nameQ) {
      list = list.filter(r => (r.name || '').toLowerCase().includes(nameQ));
    }
    return list;
  });

  constructor(private readonly adminApi: AdminApiService) {}

  ngOnInit(): void {
    this.reload();
    this.loadPermissionsCatalog();
  }

  reload(): void {
    this.adminApi.listRoles().subscribe({
      next: rows => this.roles.set(rows),
      error: e => this.showApiError(e, 'Error al cargar roles')
    });
  }

  private loadPermissionsCatalog(): void {
    this.adminApi.listPermissions().subscribe({
      next: rows => this.permissionsCatalog.set(rows),
      error: () => this.permissionsCatalog.set([])
    });
  }

  // ---------------------------------------------------------------------------
  // Create / Edit
  // ---------------------------------------------------------------------------
  openCreate(): void {
    this.formName = '';
    this.modalCreate.set(true);
  }

  openEdit(r: BackendRole): void {
    this.editingId.set(r.id);
    this.formName = r.name;
    this.modalEdit.set(true);
  }

  closeModals(): void {
    this.modalCreate.set(false);
    this.modalEdit.set(false);
    this.editingId.set(null);
  }

  submitCreate(): void {
    const name = this.formName.trim();
    if (!name) return;

    this.loading.set(true);
    this.adminApi.createRole(name).subscribe({
      next: () => {
        this.loading.set(false);
        this.closeModals();
        this.reload();
        this.showSuccess(`Rol "${name}" creado correctamente.`);
      },
      error: e => {
        this.loading.set(false);
        this.showApiError(e);
      }
    });
  }

  submitEdit(): void {
    const id = this.editingId();
    const name = this.formName.trim();
    if (id == null || !name) return;

    this.loading.set(true);
    this.adminApi.updateRole(id, name).subscribe({
      next: () => {
        this.loading.set(false);
        this.closeModals();
        this.reload();
        this.showSuccess(`Rol #${id} actualizado.`);
      },
      error: e => {
        this.loading.set(false);
        this.showApiError(e);
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Delete (uses custom confirm modal instead of window.confirm)
  // ---------------------------------------------------------------------------
  confirmDelete(r: BackendRole): void {
    this.openConfirm({
      title: 'Eliminar rol',
      message: `Se eliminara el rol "${r.name}" (id ${r.id}). Esta accion no se puede deshacer.`,
      confirmLabel: 'Eliminar',
      danger: true,
      onConfirm: () => this.executeDelete(r)
    });
  }

  private executeDelete(r: BackendRole): void {
    this.adminApi.deleteRole(r.id).subscribe({
      next: () => {
        this.reload();
        this.showSuccess(`Rol "${r.name}" eliminado.`);
      },
      error: e => this.showApiError(e)
    });
  }

  // ---------------------------------------------------------------------------
  // Permissions modal
  // ---------------------------------------------------------------------------
  openPermissions(r: BackendRole): void {
    this.permissionsModalRole.set(r);
    this.permissionsSearchSig.set('');
    this.selectedPermissionIds.set(new Set());
    this.expandedGroups.set(new Set()); // default colapsado: vista compacta
    this.permissionsLoading.set(true);

    // Si el catalogo no cargo aun (p. ej. fallo silencioso al iniciar), reintenta.
    if (this.permissionsCatalog().length === 0) {
      this.adminApi.listPermissions().subscribe({
        next: rows => this.permissionsCatalog.set(rows),
        error: () => this.permissionsCatalog.set([])
      });
    }

    this.adminApi.getRolePermissions(r.id).subscribe({
      next: ids => {
        this.selectedPermissionIds.set(new Set(ids));
        this.permissionsLoading.set(false);
      },
      error: e => {
        this.permissionsLoading.set(false);
        this.showApiError(e, 'Error al cargar permisos del rol');
        this.closePermissions();
      }
    });
  }

  closePermissions(): void {
    this.permissionsModalRole.set(null);
    this.permissionsSearchSig.set('');
  }

  togglePermission(id: number, checked: boolean): void {
    const next = new Set(this.selectedPermissionIds());
    if (checked) next.add(id);
    else next.delete(id);
    this.selectedPermissionIds.set(next);
  }

  /** Marca/desmarca todos los items visibles de una seccion (respeta el filtro actual). */
  toggleAllInGroup(group: PermissionGroup, checked: boolean): void {
    const next = new Set(this.selectedPermissionIds());
    for (const p of group.items) {
      if (checked) next.add(p.id);
      else next.delete(p.id);
    }
    this.selectedPermissionIds.set(next);
  }

  /** True si todos los items visibles de la seccion estan seleccionados. */
  isGroupAllSelected(group: PermissionGroup): boolean {
    if (group.items.length === 0) return false;
    const sel = this.selectedPermissionIds();
    return group.items.every(p => sel.has(p.id));
  }

  /** True si algunos (no todos) los items visibles de la seccion estan seleccionados. */
  isGroupPartiallySelected(group: PermissionGroup): boolean {
    const sel = this.selectedPermissionIds();
    const count = group.items.filter(p => sel.has(p.id)).length;
    return count > 0 && count < group.items.length;
  }

  countSelectedInGroup(group: PermissionGroup): number {
    const sel = this.selectedPermissionIds();
    return group.items.filter(p => sel.has(p.id)).length;
  }

  // ---------------------------------------------------------------------------
  // Group collapse / expand (acordeon)
  // ---------------------------------------------------------------------------

  /**
   * True si el grupo debe renderizar su lista de permisos. Mientras el usuario tiene una
   * busqueda activa fuerza expandido para que cualquier match sea visible.
   */
  isGroupExpanded(service: string): boolean {
    if (this.permissionsSearchSig().trim()) return true;
    return this.expandedGroups().has(service);
  }

  toggleGroupExpanded(service: string): void {
    const next = new Set(this.expandedGroups());
    if (next.has(service)) next.delete(service);
    else next.add(service);
    this.expandedGroups.set(next);
  }

  /** True si todos los grupos visibles estan expandidos (para alternar el boton global). */
  allGroupsExpanded(): boolean {
    const groups = this.filteredPermissionGroups();
    if (groups.length === 0) return false;
    if (this.permissionsSearchSig().trim()) return true;
    const exp = this.expandedGroups();
    return groups.every(g => exp.has(g.service));
  }

  toggleAllGroupsExpanded(): void {
    if (this.allGroupsExpanded()) {
      this.expandedGroups.set(new Set());
    } else {
      const all = new Set(this.filteredPermissionGroups().map(g => g.service));
      this.expandedGroups.set(all);
    }
  }

  savePermissions(): void {
    const role = this.permissionsModalRole();
    if (!role) return;

    const ids = Array.from(this.selectedPermissionIds());
    this.permissionsSaving.set(true);
    this.adminApi.setRolePermissions(role.id, ids).subscribe({
      next: () => {
        this.permissionsSaving.set(false);
        this.closePermissions();
        this.showSuccess(`Permisos de "${role.name}" actualizados (${ids.length} asignados).`);
      },
      error: e => {
        this.permissionsSaving.set(false);
        this.showApiError(e);
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Confirm modal
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

  // ---------------------------------------------------------------------------
  // Notice modal
  // ---------------------------------------------------------------------------
  closeNotice(): void {
    this.notice.set(null);
  }

  private showSuccess(message: string, title = 'Listo'): void {
    this.notice.set({ kind: 'success', title, message });
  }

  private showApiError(e: ApiErrorLike, fallback = 'Ocurrio un error inesperado'): void {
    const message = e?.error?.message || e?.message || fallback;
    this.notice.set({ kind: 'error', title: 'Error', message });
  }
}
