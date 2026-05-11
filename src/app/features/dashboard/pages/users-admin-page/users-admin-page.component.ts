import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminApiService } from '@core/services/admin-api.service';
import { AuthService } from '@core/services/auth.service';
import {
  BackendRole,
  CreateUserBody,
  OrganizationDto,
  UpdateUserBody,
  UserAdminDto
} from '@core/models/admin.models';
import { HasPermissionDirective } from '@core/directives/has-permission.directive';
import { P } from '@core/constants/permissions';

type UserListSort = 'id_asc' | 'id_desc' | 'user_asc' | 'user_desc';
type StatusFilter = 'all' | 'active' | 'inactive';
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

/** Modelo de formulario para "Crear usuario". Roles se eligen como CSV simple para no inflar la UI. */
interface CreateUserFormModel {
  username: string;
  email: string;
  password: string;
  name: string;
  lastname: string;
  organizationId: number | null;
  /** Conjunto de nombres de rol seleccionados (ROLE_*). */
  roleNames: Set<string>;
}

interface EditUserFormModel {
  email: string;
  name: string;
  lastname: string;
  organizationId: number | null;
}

function emptyCreateForm(): CreateUserFormModel {
  return {
    username: '',
    email: '',
    password: '',
    name: '',
    lastname: '',
    organizationId: null,
    roleNames: new Set<string>(['ROLE_USER'])
  };
}

function emptyEditForm(): EditUserFormModel {
  return { email: '', name: '', lastname: '', organizationId: null };
}

@Component({
  selector: 'app-users-admin-page',
  standalone: true,
  imports: [CommonModule, FormsModule, HasPermissionDirective],
  templateUrl: './users-admin-page.component.html',
  styleUrl: './users-admin-page.component.scss'
})
export class UsersAdminPageComponent implements OnInit {
  /** Codes de permisos expuestos al template para usar con *hasPermission. */
  protected readonly P = P;

  readonly users = signal<UserAdminDto[]>([]);
  readonly roleCatalog = signal<BackendRole[]>([]);
  /**
   * Catalogo de organizaciones para los selectores de los modales Crear/Editar.
   * Se carga al iniciar; si la llamada falla (p. ej. el admin no tiene permiso de
   * listar todas) se queda como array vacio y los selects mostraran "Sin organizacion".
   */
  readonly organizations = signal<OrganizationDto[]>([]);
  readonly searchSig = signal('');
  readonly statusFilterSig = signal<StatusFilter>('all');
  readonly sortSig = signal<UserListSort>('id_asc');
  readonly loading = signal(false);

  readonly rolesModalUser = signal<UserAdminDto | null>(null);
  readonly selectedRoleNames = signal<Set<string>>(new Set());

  // ---------------------------------------------------------------------------
  // Create user modal state
  // ---------------------------------------------------------------------------
  /** True cuando el modal "Crear usuario" esta abierto. */
  readonly createOpen = signal(false);
  /** Modelo del formulario de creacion. Vinculado con [(ngModel)] en el template. */
  readonly createForm = signal<CreateUserFormModel>(emptyCreateForm());
  readonly createError = signal<string | null>(null);

  // ---------------------------------------------------------------------------
  // Edit user modal state
  // ---------------------------------------------------------------------------
  /** Usuario en edicion; null si el modal esta cerrado. */
  readonly editingUser = signal<UserAdminDto | null>(null);
  readonly editForm = signal<EditUserFormModel>(emptyEditForm());
  readonly editError = signal<string | null>(null);

  readonly notice = signal<NoticeMessage | null>(null);
  readonly confirmReq = signal<ConfirmRequest | null>(null);

  readonly filteredUsers = computed(() => {
    const raw = this.searchSig().trim();
    const qLower = raw.toLowerCase();
    const status = this.statusFilterSig();
    // Ocultamos al usuario logueado: no tiene sentido que aparezca en la lista de "gestionar
    // a otros usuarios" (no debe poder desactivarse ni revocar su propia sesion desde aqui).
    const myId = this.authService.currentUser()?.id ?? null;

    const filtered = this.users().filter(u => {
      if (myId != null && u.id === myId) return false;

      if (status === 'active' && !u.enabled) return false;
      if (status === 'inactive' && u.enabled) return false;

      if (!raw) return true;
      return (
        String(u.id).includes(raw) ||
        (u.username || '').toLowerCase().includes(qLower) ||
        (u.email || '').toLowerCase().includes(qLower)
      );
    });

    const sort = this.sortSig();
    return [...filtered].sort((a, b) => {
      switch (sort) {
        case 'id_asc':
          return a.id - b.id;
        case 'id_desc':
          return b.id - a.id;
        case 'user_asc':
          return (a.username || '').localeCompare(b.username || '', 'es', { sensitivity: 'base' });
        case 'user_desc':
          return (b.username || '').localeCompare(a.username || '', 'es', { sensitivity: 'base' });
        default:
          return 0;
      }
    });
  });

  constructor(
    private readonly adminApi: AdminApiService,
    public readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.reload();
    this.adminApi.listRoles().subscribe({
      next: r => this.roleCatalog.set(r),
      error: () => this.roleCatalog.set([])
    });
    // Cargamos el catalogo de organizaciones para los selectores. Solo ADMIN deberia
    // poder llegar aqui (la pagina esta gateada con adminGuard), asi que listAllOrganizations
    // resuelve. Si falla, dejamos el array vacio: los selects ofreceran solo "Sin organizacion".
    this.adminApi.listAllOrganizations().subscribe({
      next: orgs => this.organizations.set(orgs),
      error: () => this.organizations.set([])
    });
  }

  // ---------------------------------------------------------------------------
  // Sorting & data load
  // ---------------------------------------------------------------------------
  toggleSort(column: 'id' | 'user'): void {
    const current = this.sortSig();
    if (column === 'id') {
      this.sortSig.set(current === 'id_asc' ? 'id_desc' : 'id_asc');
    } else if (column === 'user') {
      this.sortSig.set(current === 'user_asc' ? 'user_desc' : 'user_asc');
    }
  }

  reload(): void {
    this.adminApi.listUsers().subscribe({
      next: rows => this.users.set(rows),
      error: e => this.showApiError(e, 'No se pudieron cargar los usuarios')
    });
  }

  // ---------------------------------------------------------------------------
  // User status (activate / deactivate / revoke)
  // ---------------------------------------------------------------------------
  toggleUserStatus(event: Event, u: UserAdminDto): void {
    // Avoids the visual switch flipping before the API confirms the change.
    event.preventDefault();

    if (u.enabled) {
      this.requestDeactivate(u);
    } else {
      this.requestActivate(u);
    }
  }

  doRevoke(u: UserAdminDto): void {
    this.openConfirm({
      title: 'Revocar sesion',
      message: `Se cerrara la sesion activa de ${u.username}. Tendra que volver a iniciar sesion.`,
      confirmLabel: 'Revocar',
      danger: true,
      onConfirm: () => this.executeRevoke(u)
    });
  }

  private requestDeactivate(u: UserAdminDto): void {
    this.openConfirm({
      title: 'Desactivar usuario',
      message: `${u.username} no podra iniciar sesion hasta que se reactive la cuenta.`,
      confirmLabel: 'Desactivar',
      danger: true,
      onConfirm: () => this.executeDeactivate(u)
    });
  }

  private requestActivate(u: UserAdminDto): void {
    this.openConfirm({
      title: 'Activar usuario',
      message: `Se reactivara la cuenta de ${u.username}.`,
      confirmLabel: 'Activar',
      onConfirm: () => this.executeActivate(u)
    });
  }

  private executeDeactivate(u: UserAdminDto): void {
    this.adminApi.deactivateUser(u.id).subscribe({
      next: () => {
        this.reload();
        this.showSuccess(`Usuario ${u.username} desactivado.`);
      },
      error: e => this.showApiError(e)
    });
  }

  private executeActivate(u: UserAdminDto): void {
    this.adminApi.activateUser(u.id).subscribe({
      next: () => {
        this.reload();
        this.showSuccess(`Usuario ${u.username} activado.`);
      },
      error: e => this.showApiError(e)
    });
  }

  private executeRevoke(u: UserAdminDto): void {
    this.adminApi.revokeUserSession(u.id).subscribe({
      next: () => {
        // Optimistic update local: el backend ya borro el refresh token, asi que la fila ya
        // no tiene sesion activa. Evitamos un reload completo y damos feedback inmediato:
        // el boton se "apaga" (desaturado) y el tooltip pasa a "sin sesion".
        this.users.update(list =>
          list.map(x => (x.id === u.id ? { ...x, hasActiveSession: false } : x))
        );
        this.showSuccess(`Sesion de ${u.username} revocada.`);
      },
      error: e => this.showApiError(e)
    });
  }

  // ---------------------------------------------------------------------------
  // Create user modal
  // ---------------------------------------------------------------------------
  openCreate(): void {
    this.createForm.set(emptyCreateForm());
    this.createError.set(null);
    this.createOpen.set(true);
  }

  closeCreate(): void {
    this.createOpen.set(false);
  }

  /**
   * Setter generico para los campos del formulario de creacion.
   * El parser de templates de Angular no admite spread ({@code ...createForm()}) ni
   * computed-property shorthand, asi que la actualizacion la hacemos en el TS.
   */
  setCreateField<K extends keyof CreateUserFormModel>(field: K, value: CreateUserFormModel[K]): void {
    this.createForm.update(f => ({ ...f, [field]: value }));
  }

  toggleCreateRole(name: string, checked: boolean): void {
    const f = this.createForm();
    const next = new Set(f.roleNames);
    if (checked) next.add(name);
    else next.delete(name);
    this.createForm.set({ ...f, roleNames: next });
  }

  isCreateRoleChecked(name: string): boolean {
    return this.createForm().roleNames.has(name);
  }

  saveCreate(): void {
    const f = this.createForm();
    if (!f.username || !f.email || !f.password || !f.name || !f.lastname) {
      this.createError.set('Completa todos los campos obligatorios.');
      return;
    }
    if (f.password.length < 6) {
      this.createError.set('La contrasena debe tener al menos 6 caracteres.');
      return;
    }

    const body: CreateUserBody = {
      username: f.username.trim(),
      email: f.email.trim(),
      password: f.password,
      name: f.name.trim(),
      lastname: f.lastname.trim(),
      roles: Array.from(f.roleNames),
      organizationId: f.organizationId
    };

    this.loading.set(true);
    this.adminApi.createUser(body).subscribe({
      next: created => {
        this.loading.set(false);
        this.closeCreate();
        this.reload();
        this.showSuccess(
          `Usuario ${created.username} creado. Recibira un correo para verificar la cuenta.`
        );
      },
      error: e => {
        this.loading.set(false);
        const msg = e?.error?.message || e?.message;
        this.createError.set(msg || 'No se pudo crear el usuario.');
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Edit user modal
  // ---------------------------------------------------------------------------
  openEdit(u: UserAdminDto): void {
    this.editingUser.set(u);
    this.editForm.set({
      email: u.email || '',
      name: u.name || '',
      lastname: u.lastname || '',
      organizationId: u.organizationId
    });
    this.editError.set(null);
  }

  closeEdit(): void {
    this.editingUser.set(null);
  }

  /** Setter generico para campos del formulario de edicion. Mismo motivo que setCreateField. */
  setEditField<K extends keyof EditUserFormModel>(field: K, value: EditUserFormModel[K]): void {
    this.editForm.update(f => ({ ...f, [field]: value }));
  }

  saveEdit(): void {
    const u = this.editingUser();
    if (!u) return;
    const f = this.editForm();
    if (!f.email || !f.name || !f.lastname) {
      this.editError.set('Email, nombre y apellido son obligatorios.');
      return;
    }

    const body: UpdateUserBody = {
      email: f.email.trim(),
      name: f.name.trim(),
      lastname: f.lastname.trim(),
      organizationId: f.organizationId
    };

    this.loading.set(true);
    this.adminApi.updateUser(u.id, body).subscribe({
      next: () => {
        this.loading.set(false);
        this.closeEdit();
        this.reload();
        this.showSuccess('Datos del usuario actualizados.');
      },
      error: e => {
        this.loading.set(false);
        const msg = e?.error?.message || e?.message;
        this.editError.set(msg || 'No se pudo actualizar el usuario.');
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Roles modal
  // ---------------------------------------------------------------------------
  openRolesModal(u: UserAdminDto): void {
    this.rolesModalUser.set(u);
    this.selectedRoleNames.set(new Set(u.roles || []));
  }

  closeRolesModal(): void {
    this.rolesModalUser.set(null);
  }

  toggleRole(name: string, checked: boolean): void {
    const next = new Set(this.selectedRoleNames());
    if (checked) next.add(name);
    else next.delete(name);
    this.selectedRoleNames.set(next);
  }

  saveRoles(): void {
    const u = this.rolesModalUser();
    if (!u) return;

    const names = Array.from(this.selectedRoleNames());
    if (!names.length) {
      this.showWarning('Selecciona al menos un rol.');
      return;
    }

    this.loading.set(true);
    this.adminApi.setUserRoles(u.id, names).subscribe({
      next: () => {
        this.loading.set(false);
        this.closeRolesModal();
        this.reload();
        this.showSuccess('Roles actualizados correctamente.');
      },
      error: e => {
        this.loading.set(false);
        this.showApiError(e);
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Confirm modal (replaces window.confirm)
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
  // Notice modal (replaces window.alert)
  // ---------------------------------------------------------------------------
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
}
