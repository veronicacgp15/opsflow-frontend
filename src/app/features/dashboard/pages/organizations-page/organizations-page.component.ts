import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminApiService } from '@core/services/admin-api.service';
import { AuthService } from '@core/services/auth.service';
import {
  CreateUserBody,
  LocationDto,
  LocationRequest,
  OrganizationDto,
  OrganizationMineDto,
  OrganizationRequest,
  UpdateUserBody,
  UserAdminDto
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

interface InviteUserFormModel {
  username: string;
  email: string;
  password: string;
  name: string;
  lastname: string;
}

type ManagerAssignmentMode = 'existing' | 'new';

function emptyInviteUserForm(): InviteUserFormModel {
  return { username: '', email: '', password: '', name: '', lastname: '' };
}

/**
 * Pantalla unica de Organizacion. La fuente de datos se unifica en {@code GET /org/mine}:
 *  - ADMIN   -> organizaciones creadas por el usuario autenticado.
 *  - MANAGER -> la organizacion a la que pertenece (JWT organizationId).
 *  - USER    -> la organizacion a la que pertenece (solo lectura).
 *
 * <p>La pagina concentra:
 *  - datos de organizacion,
 *  - gestion de sedes,
 *  - gestion de usuarios/invitados por organizacion.
 */
@Component({
  selector: 'app-organizations-page',
  standalone: true,
  imports: [CommonModule, FormsModule, HasPermissionDirective],
  templateUrl: './organizations-page.component.html',
  styleUrl: './organizations-page.component.scss'
})
export class OrganizationsPageComponent implements OnInit {
  protected readonly P = P;

  /** Lista normalizada para la tabla. Tipo permisivo porque mezcla {@code OrganizationDto} y
   *  {@code OrganizationMineDto} dependiendo del endpoint usado. */
  readonly orgs = signal<OrganizationDto[]>([]);
  readonly loadError = signal<string | null>(null);
  readonly loading = signal(false);

  // Filtros
  readonly idFilterSig = signal('');
  readonly nameFilterSig = signal('');

  // ---------------------------------------------------------------------------
  // Modal de localizaciones (sedes) por organizacion
  // ---------------------------------------------------------------------------
  readonly locationsModalOrg = signal<OrganizationDto | null>(null);
  readonly locations = signal<LocationDto[]>([]);
  readonly locationsLoading = signal(false);
  readonly locationsError = signal<string | null>(null);
  readonly locationSaving = signal(false);
  /** Id de la sede en edicion. `null` => formulario en modo creacion. */
  readonly editingLocationId = signal<number | null>(null);
  /** Form del modal de sedes. `organizationId` se sincroniza con la org abierta. */
  locationForm: LocationRequest = this.emptyLocationForm();

  // Modales CRUD
  readonly modalCreate = signal(false);
  readonly modalEdit = signal(false);
  readonly editingId = signal<number | null>(null);
  readonly notice = signal<NoticeMessage | null>(null);
  readonly confirmReq = signal<ConfirmRequest | null>(null);

  // ---------------------------------------------------------------------------
  // Modal de usuarios por organizacion
  // ---------------------------------------------------------------------------
  readonly usersModalOrg = signal<OrganizationDto | null>(null);
  readonly orgUsers = signal<UserAdminDto[]>([]);
  readonly orgUsersLoading = signal(false);
  readonly orgUsersError = signal<string | null>(null);
  readonly allUsersCatalog = signal<UserAdminDto[]>([]);
  readonly associateUserId = signal<number | null>(null);
  readonly associateSearchSig = signal('');
  readonly inviteSaving = signal(false);
  readonly associateSaving = signal(false);
  readonly inviteError = signal<string | null>(null);
  readonly inviteDisclosureOpen = signal(false);
  inviteForm: InviteUserFormModel = emptyInviteUserForm();

  readonly createOrgError = signal<string | null>(null);
  readonly managerModalOrg = signal<OrganizationDto | null>(null);
  readonly managerModalUsers = signal<UserAdminDto[]>([]);
  readonly managerModalLoading = signal(false);
  readonly managerModalError = signal<string | null>(null);
  readonly managerModalSearchSig = signal('');
  readonly managerModalSelectedUserId = signal<number | null>(null);
  readonly managerModalSaving = signal(false);
  readonly managerAssignmentMode = signal<ManagerAssignmentMode>('existing');
  readonly selectedManagerUserId = signal<number | null>(null);
  readonly managerSearchSig = signal('');
  managerInviteForm: InviteUserFormModel = emptyInviteUserForm();

  readonly availableUsersToAssociate = computed(() => {
    const org = this.usersModalOrg();
    if (!org) return [];
    const currentIds = new Set(this.orgUsers().map(u => u.id));
    const myId = this.authService.currentUser()?.id ?? null;
    return this.allUsersCatalog()
      .filter(u => !currentIds.has(u.id) && u.id !== myId && !u.roles.includes('ROLE_ADMIN'))
      .sort((a, b) => (a.username || '').localeCompare(b.username || '', 'es', { sensitivity: 'base' }));
  });

  readonly associateSuggestions = computed(() => {
    const q = this.associateSearchSig().trim().toLowerCase();
    if (!q) return [];
    return this.availableUsersToAssociate()
      .filter(u =>
        (u.username || '').toLowerCase().includes(q) ||
        (u.email || '').toLowerCase().includes(q) ||
        (u.name || '').toLowerCase().includes(q) ||
        (u.lastname || '').toLowerCase().includes(q)
      )
      .slice(0, 8);
  });

  readonly availableManagerCandidates = computed(() => {
    return this.allUsersCatalog()
      .filter(u => this.isEligibleManagerCandidate(u, null))
      .sort((a, b) => (a.username || '').localeCompare(b.username || '', 'es', { sensitivity: 'base' }));
  });

  readonly managerSuggestions = computed(() => {
    const q = this.managerSearchSig().trim().toLowerCase();
    if (!q) return [];
    return this.availableManagerCandidates()
      .filter(u =>
        (u.username || '').toLowerCase().includes(q) ||
        (u.email || '').toLowerCase().includes(q) ||
        (u.name || '').toLowerCase().includes(q) ||
        (u.lastname || '').toLowerCase().includes(q)
      )
      .slice(0, 8);
  });

  readonly managerModalCandidates = computed(() => {
    const org = this.managerModalOrg();
    if (!org) return [];
    return this.allUsersCatalog()
      .filter(u => this.isEligibleManagerCandidate(u, org.id))
      .sort((a, b) => (a.username || '').localeCompare(b.username || '', 'es', { sensitivity: 'base' }));
  });

  readonly managerModalSuggestions = computed(() => {
    const q = this.managerModalSearchSig().trim().toLowerCase();
    if (!q) return [];
    return this.managerModalCandidates()
      .filter(u =>
        (u.username || '').toLowerCase().includes(q) ||
        (u.email || '').toLowerCase().includes(q) ||
        (u.name || '').toLowerCase().includes(q) ||
        (u.lastname || '').toLowerCase().includes(q)
      )
      .slice(0, 8);
  });

  /** Modelo del formulario de crear/editar. Inicializa con valores neutros. */
  form: OrganizationRequest = this.emptyForm();

  /** Vista filtrada por ID y nombre. */
  readonly filteredOrgs = computed(() => {
    const idQ = this.idFilterSig().trim();
    const nameQ = this.nameFilterSig().trim().toLowerCase();
    let list = this.orgs();
    if (idQ) {
      list = list.filter(o => String(o.id).includes(idQ));
    }
    if (nameQ) {
      list = list.filter(o => (o.name || '').toLowerCase().includes(nameQ));
    }
    return list;
  });

  readonly activeOrgManagers = computed(() =>
    this.orgUsers()
      .filter(u => u.enabled && u.roles.includes('ROLE_MANAGER'))
      .sort((a, b) => `${a.name} ${a.lastname}`.localeCompare(`${b.name} ${b.lastname}`, 'es', { sensitivity: 'base' }))
  );

  readonly activeManagerModalUsers = computed(() =>
    this.managerModalUsers()
      .filter(u => u.enabled && u.roles.includes('ROLE_MANAGER'))
      .sort((a, b) => `${a.name} ${a.lastname}`.localeCompare(`${b.name} ${b.lastname}`, 'es', { sensitivity: 'base' }))
  );

  constructor(
    private readonly adminApi: AdminApiService,
    public readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.reload();
  }

  // ---------------------------------------------------------------------------
  // Carga
  // ---------------------------------------------------------------------------
  reload(): void {
    this.loadError.set(null);
    this.loading.set(true);
    this.adminApi.myOrganizations().subscribe({
      next: rows => {
        this.orgs.set(rows.map(this.toDto));
        this.loading.set(false);
      },
      error: e => {
        this.loading.set(false);
        this.loadError.set(
          e?.error?.message ||
            e?.message ||
            'No se pudo cargar la vista de organizacion.'
        );
      }
    });
  }

  /** Normaliza los DTO del endpoint /mine al shape completo de OrganizationDto. */
  private readonly toDto = (
    o: OrganizationDto | OrganizationMineDto
  ): OrganizationDto => ({
    id: o.id,
    name: o.name,
    taxId: o.taxId,
    address: (o as OrganizationDto).address ?? '',
    email: (o as OrganizationDto).email ?? '',
    phone: (o as OrganizationDto).phone ?? '',
    active: o.active ?? false,
    planLimit: (o as OrganizationDto).planLimit ?? 0,
    createdAt: (o as OrganizationDto).createdAt ?? null,
    createdByUserId: o.createdByUserId ?? null,
    createdByName: o.createdByName ?? null,
    createdByLastname: o.createdByLastname ?? null,
    createdByFullName: (o as OrganizationDto).createdByFullName ?? (o as OrganizationMineDto).createdByFullName ?? null
  });

  /**
   * Texto que se muestra en la columna "Creado por". Prioriza nombre+apellido (resueltos
   * via Feign al auth-service) y cae al userId si la llamada no logro enriquecerlos.
   */
  creatorLabel(o: OrganizationDto): string {
    const explicitFull = (o.createdByFullName || '').trim();
    if (explicitFull) return explicitFull;
    const full = [o.createdByName, o.createdByLastname]
      .filter(s => s != null && s.trim().length > 0)
      .join(' ')
      .trim();
    if (full) return full;
    if (o.createdByUserId != null) return `#${o.createdByUserId}`;
    return '—';
  }

  private isEligibleManagerCandidate(u: UserAdminDto, orgId: number | null): boolean {
    const myId = this.authService.currentUser()?.id ?? null;
    return (
      u.id !== myId &&
      u.enabled &&
      !u.roles.includes('ROLE_ADMIN') &&
      !(u.roles.includes('ROLE_MANAGER') && u.organizationId != null && u.organizationId !== orgId)
    );
  }

  private loadAllUsersCatalog(): void {
    if (!this.authService.isAdmin()) {
      this.allUsersCatalog.set([]);
      return;
    }
    this.adminApi.listUsers().subscribe({
      next: rows => this.allUsersCatalog.set(rows ?? []),
      error: () => this.allUsersCatalog.set([])
    });
  }

  userLookupLabel(u: UserAdminDto): string {
    const full = `${u.name || ''} ${u.lastname || ''}`.trim();
    const main = full || u.username;
    return `${main} - ${u.email}`;
  }

  setAssociateSearch(value: string): void {
    this.associateSearchSig.set(value);
    this.associateUserId.set(null);
  }

  selectAssociateCandidate(u: UserAdminDto): void {
    this.associateUserId.set(u.id);
    this.associateSearchSig.set(this.userLookupLabel(u));
  }

  setManagerSearch(value: string): void {
    this.managerSearchSig.set(value);
    this.selectedManagerUserId.set(null);
  }

  setManagerModalSearch(value: string): void {
    this.managerModalSearchSig.set(value);
    this.managerModalSelectedUserId.set(null);
  }

  selectManagerCandidate(u: UserAdminDto): void {
    this.selectedManagerUserId.set(u.id);
    this.managerSearchSig.set(this.userLookupLabel(u));
    this.createOrgError.set(null);
  }

  selectManagerModalCandidate(u: UserAdminDto): void {
    this.managerModalSelectedUserId.set(u.id);
    this.managerModalSearchSig.set(this.userLookupLabel(u));
    this.managerModalError.set(null);
  }

  useExistingManagerMode(): void {
    this.managerAssignmentMode.set('existing');
    this.createOrgError.set(null);
  }

  useNewManagerMode(): void {
    this.managerAssignmentMode.set('new');
    this.createOrgError.set(null);
  }

  openUsers(o: OrganizationDto): void {
    this.closeManagerModal();
    this.usersModalOrg.set(o);
    this.orgUsers.set([]);
    this.orgUsersError.set(null);
    this.orgUsersLoading.set(true);
    this.inviteError.set(null);
    this.inviteDisclosureOpen.set(false);
    this.associateUserId.set(null);
    this.associateSearchSig.set('');
    this.inviteForm = emptyInviteUserForm();
    this.fetchOrganizationUsers(o.id);
    this.loadAllUsersCatalog();
  }

  openManagerModal(o: OrganizationDto): void {
    this.closeUsers();
    this.managerModalOrg.set(o);
    this.managerModalUsers.set([]);
    this.managerModalError.set(null);
    this.managerModalSearchSig.set('');
    this.managerModalSelectedUserId.set(null);
    this.managerModalSaving.set(false);
    this.managerModalLoading.set(true);
    this.loadAllUsersCatalog();
    this.adminApi.listUsersByOrganization(o.id).subscribe({
      next: rows => {
        this.managerModalUsers.set(rows ?? []);
        this.managerModalLoading.set(false);
      },
      error: e => {
        this.managerModalLoading.set(false);
        this.managerModalError.set(
          e?.error?.message || e?.message || 'No se pudo cargar la configuracion de manager.'
        );
      }
    });
  }

  closeUsers(): void {
    this.usersModalOrg.set(null);
    this.orgUsers.set([]);
    this.orgUsersError.set(null);
    this.associateUserId.set(null);
    this.associateSearchSig.set('');
    this.inviteError.set(null);
    this.inviteDisclosureOpen.set(false);
    this.inviteForm = emptyInviteUserForm();
  }

  closeManagerModal(): void {
    this.managerModalOrg.set(null);
    this.managerModalUsers.set([]);
    this.managerModalError.set(null);
    this.managerModalSearchSig.set('');
    this.managerModalSelectedUserId.set(null);
    this.managerModalSaving.set(false);
    this.managerModalLoading.set(false);
  }

  toggleInviteDisclosure(): void {
    this.inviteDisclosureOpen.update(v => !v);
  }

  isOrgManager(u: UserAdminDto): boolean {
    return u.roles.includes('ROLE_MANAGER');
  }

  isOnlyActiveManager(u: UserAdminDto): boolean {
    const managers = this.activeOrgManagers();
    return managers.length === 1 && managers[0].id === u.id;
  }

  assignOrganizationManager(u: UserAdminDto): void {
    const org = this.usersModalOrg();
    if (!org || !this.authService.isAdmin()) return;
    if (!u.enabled) {
      this.showWarning('Solo puedes asignar como manager a un usuario activo.');
      return;
    }

    this.openConfirm({
      title: this.isOrgManager(u) ? 'Establecer manager oficial' : 'Asignar manager',
      message: this.isOrgManager(u)
        ? `Se mantendra a ${u.name} ${u.lastname} como manager oficial de "${org.name}" y cualquier otro manager sera degradado automaticamente.`
        : `Se asignara a ${u.name} ${u.lastname} como manager activo de "${org.name}".`,
      confirmLabel: 'Confirmar',
      onConfirm: () => this.executeAssignOrganizationManager(org.id, u)
    });
  }

  private executeAssignOrganizationManager(orgId: number, u: UserAdminDto): void {
    this.adminApi.assignOrganizationManager(orgId, u.id).subscribe({
      next: () => {
        this.fetchOrganizationUsers(orgId);
        this.loadAllUsersCatalog();
        this.showSuccess(`${u.name} ${u.lastname} ahora es el manager activo de la organizacion.`);
      },
      error: e => this.showApiError(e)
    });
  }

  confirmManagerModalAssign(): void {
    const org = this.managerModalOrg();
    const userId = this.managerModalSelectedUserId();
    if (!org || userId == null) {
      this.managerModalError.set('Selecciona un usuario para asignarlo como manager.');
      return;
    }
    const candidate = this.allUsersCatalog().find(u => u.id === userId);
    if (!candidate) {
      this.managerModalError.set('El usuario seleccionado no es valido.');
      return;
    }

    this.managerModalSaving.set(true);
    this.adminApi.assignOrganizationManager(org.id, userId).subscribe({
      next: () => {
        this.managerModalSaving.set(false);
        this.closeManagerModal();
        this.reload();
        this.loadAllUsersCatalog();
        this.showSuccess(`Manager actualizado para "${org.name}".`);
      },
      error: e => {
        this.managerModalSaving.set(false);
        this.managerModalError.set(
          e?.error?.message || e?.message || 'No se pudo actualizar el manager.'
        );
      }
    });
  }

  private fetchOrganizationUsers(orgId: number): void {
    this.adminApi.listUsersByOrganization(orgId).subscribe({
      next: rows => {
        this.orgUsers.set(rows ?? []);
        this.orgUsersLoading.set(false);
      },
      error: e => {
        this.orgUsersLoading.set(false);
        this.orgUsersError.set(
          e?.error?.message || e?.message || 'No se pudieron cargar los usuarios de la organizacion.'
        );
      }
    });
  }

  saveInvitedUser(): void {
    const org = this.usersModalOrg();
    if (!org) return;

    const f = this.inviteForm;
    if (!f.username.trim() || !f.email.trim() || !f.password || !f.name.trim() || !f.lastname.trim()) {
      this.inviteError.set('Completa todos los campos del invitado.');
      return;
    }
    if (f.password.length < 6) {
      this.inviteError.set('La contrasena temporal debe tener al menos 6 caracteres.');
      return;
    }

    const body: CreateUserBody = {
      username: f.username.trim(),
      email: f.email.trim(),
      password: f.password,
      name: f.name.trim(),
      lastname: f.lastname.trim(),
      roles: ['ROLE_USER'],
      organizationId: org.id
    };

    this.inviteSaving.set(true);
    this.adminApi.createUser(body).subscribe({
      next: created => {
        this.inviteSaving.set(false);
        this.inviteForm = emptyInviteUserForm();
        this.inviteError.set(null);
        this.fetchOrganizationUsers(org.id);
        this.showSuccess(
          `Usuario ${created.username} invitado a "${org.name}".`
        );
      },
      error: e => {
        this.inviteSaving.set(false);
        this.inviteError.set(e?.error?.message || e?.message || 'No se pudo invitar al usuario.');
      }
    });
  }

  associateExistingUser(): void {
    const org = this.usersModalOrg();
    const userId = this.associateUserId();
    if (!org || userId == null || !this.authService.isAdmin()) return;

    const body: UpdateUserBody = { organizationId: org.id };
    this.associateSaving.set(true);
    this.adminApi.updateUser(userId, body).subscribe({
      next: () => {
        this.associateSaving.set(false);
        this.associateUserId.set(null);
        this.associateSearchSig.set('');
        this.fetchOrganizationUsers(org.id);
        this.loadAllUsersCatalog();
        this.showSuccess('Usuario asociado correctamente a la organizacion.');
      },
      error: e => {
        this.associateSaving.set(false);
        this.showApiError(e);
      }
    });
  }

  confirmDetachUser(u: UserAdminDto): void {
    const org = this.usersModalOrg();
    if (!org || !this.authService.isAdmin()) return;
    this.openConfirm({
      title: 'Desasociar usuario',
      message: `Se quitara a ${u.username} de la organizacion "${org.name}".`,
      confirmLabel: 'Desasociar',
      danger: true,
      onConfirm: () => this.detachUser(u)
    });
  }

  private detachUser(u: UserAdminDto): void {
    const org = this.usersModalOrg();
    if (!org) return;
    const body: UpdateUserBody = { organizationId: null };
    this.adminApi.updateUser(u.id, body).subscribe({
      next: () => {
        this.fetchOrganizationUsers(org.id);
        this.loadAllUsersCatalog();
        this.showSuccess(`Usuario ${u.username} desasociado.`);
      },
      error: e => this.showApiError(e)
    });
  }

  // ---------------------------------------------------------------------------
  // Locations modal (sedes)
  // ---------------------------------------------------------------------------

  /** Abre el modal en modo "listar + crear". */
  openLocations(o: OrganizationDto): void {
    this.locationsModalOrg.set(o);
    this.locations.set([]);
    this.locationsError.set(null);
    this.locationsLoading.set(true);
    this.editingLocationId.set(null);
    this.locationForm = this.emptyLocationForm(o.id);
    this.fetchLocations(o.id);
  }

  closeLocations(): void {
    this.locationsModalOrg.set(null);
    this.locations.set([]);
    this.locationsError.set(null);
    this.editingLocationId.set(null);
    this.locationForm = this.emptyLocationForm();
  }

  private fetchLocations(orgId: number): void {
    this.adminApi.listLocationsByOrganization(orgId).subscribe({
      next: rows => {
        this.locations.set(rows);
        this.locationsLoading.set(false);
      },
      error: e => {
        this.locationsLoading.set(false);
        this.locationsError.set(
          e?.error?.message || e?.message || 'Error al cargar sedes'
        );
      }
    });
  }

  /** Pasa el formulario al modo edicion para una sede existente. */
  startEditLocation(loc: LocationDto): void {
    this.editingLocationId.set(loc.id);
    this.locationForm = {
      name: loc.name,
      address: loc.address ?? '',
      city: loc.city ?? '',
      organizationId: loc.organizationId
    };
  }

  /** Cancela la edicion y vuelve al estado "crear sede". */
  cancelEditLocation(): void {
    const org = this.locationsModalOrg();
    this.editingLocationId.set(null);
    this.locationForm = this.emptyLocationForm(org?.id);
  }

  /** Decide si crea o actualiza segun haya editingLocationId. */
  submitLocation(): void {
    const org = this.locationsModalOrg();
    if (!org) return;

    const name = (this.locationForm.name || '').trim();
    if (!name) {
      this.showWarning('El nombre de la sede es obligatorio.');
      return;
    }

    const body: LocationRequest = {
      name,
      address: (this.locationForm.address || '').trim() || null,
      city: (this.locationForm.city || '').trim() || null,
      organizationId: org.id
    };

    const editingId = this.editingLocationId();
    this.locationSaving.set(true);

    const op$ = editingId == null
      ? this.adminApi.createLocation(body)
      : this.adminApi.updateLocation(editingId, body);

    op$.subscribe({
      next: () => {
        this.locationSaving.set(false);
        this.editingLocationId.set(null);
        this.locationForm = this.emptyLocationForm(org.id);
        this.fetchLocations(org.id);
        this.showSuccess(
          editingId == null
            ? `Sede "${name}" creada en "${org.name}".`
            : `Sede #${editingId} actualizada.`
        );
      },
      error: e => {
        this.locationSaving.set(false);
        this.showApiError(e);
      }
    });
  }

  confirmDeleteLocation(loc: LocationDto): void {
    this.openConfirm({
      title: 'Eliminar sede',
      message: `Se eliminara la sede "${loc.name}" (id ${loc.id}). Esta accion no se puede deshacer.`,
      confirmLabel: 'Eliminar',
      danger: true,
      onConfirm: () => this.executeDeleteLocation(loc)
    });
  }

  private executeDeleteLocation(loc: LocationDto): void {
    const org = this.locationsModalOrg();
    if (!org) return;
    this.adminApi.deleteLocation(loc.id).subscribe({
      next: () => {
        // Si la sede borrada estaba en edicion, salimos del modo edicion.
        if (this.editingLocationId() === loc.id) {
          this.cancelEditLocation();
        }
        this.fetchLocations(org.id);
        this.showSuccess(`Sede "${loc.name}" eliminada.`);
      },
      error: e => this.showApiError(e)
    });
  }

  // ---------------------------------------------------------------------------
  // Activate / deactivate
  // ---------------------------------------------------------------------------

  /**
   * Handler del {@code <input type="checkbox">} del switch.
   *
   * <p>Estrategia: usamos {@code preventDefault} para que el browser NO mueva el switch hasta
   * que el usuario confirme en el modal. Esto evita el "rebote" visual cuando el usuario
   * cancela. Una vez que el usuario confirma, en {@link #executeSetActive} aplicamos un
   * optimistic update local INMEDIATAMENTE (la fila + el switch cambian al estado destino) y,
   * si el backend rechaza, revertimos.
   */
  toggleOrgActive(event: Event, o: OrganizationDto): void {
    event.preventDefault();
    this.confirmToggleActive(o);
  }

  confirmToggleActive(o: OrganizationDto): void {
    const willActivate = !o.active;
    this.openConfirm({
      title: willActivate ? 'Activar organizacion' : 'Desactivar organizacion',
      message: willActivate
        ? `Se reactivara "${o.name}". Los usuarios podran operar de nuevo.`
        : `Se desactivara "${o.name}". Los usuarios no podran operar hasta reactivarla.`,
      confirmLabel: willActivate ? 'Activar' : 'Desactivar',
      danger: !willActivate,
      onConfirm: () => this.executeSetActive(o, willActivate)
    });
  }

  /**
   * Optimistic update + llamada al backend.
   *
   * <ol>
   *   <li>Cambia {@code active} en la fila de inmediato (el switch se mueve antes que el
   *       backend responda → feedback instantaneo).</li>
   *   <li>Lanza la llamada al backend.</li>
   *   <li>En exito: re-sincroniza la fila con lo que devuelve el servidor (por si quedaron
   *       campos desactualizados como {@code createdByName}).</li>
   *   <li>En error: REVIERTE el flag {@code active} a su valor original y muestra el
   *       mensaje de error.</li>
   * </ol>
   */
  private executeSetActive(o: OrganizationDto, active: boolean): void {
    const previousActive = o.active;

    this.orgs.update(list =>
      list.map(x => (x.id === o.id ? { ...x, active } : x))
    );

    const op$ = active
      ? this.adminApi.activateOrganization(o.id)
      : this.adminApi.deactivateOrganization(o.id);

    op$.subscribe({
      next: updated => {
        this.orgs.update(list =>
          list.map(x => (x.id === o.id ? this.toDto(updated) : x))
        );
        this.showSuccess(
          active
            ? `"${o.name}" activada.`
            : `"${o.name}" desactivada.`
        );
      },
      error: e => {
        this.orgs.update(list =>
          list.map(x => (x.id === o.id ? { ...x, active: previousActive } : x))
        );
        this.showApiError(e);
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Crear / Editar
  // ---------------------------------------------------------------------------
  openCreate(): void {
    this.form = this.emptyForm();
    this.createOrgError.set(null);
    this.selectedManagerUserId.set(null);
    this.managerSearchSig.set('');
    this.loadAllUsersCatalog();
    this.modalCreate.set(true);
  }

  openEdit(o: OrganizationDto): void {
    this.editingId.set(o.id);
    this.form = {
      name: o.name,
      taxId: o.taxId,
      address: o.address,
      email: o.email,
      phone: o.phone,
      active: !!o.active,
      planLimit: o.planLimit ?? 0
    };
    this.modalEdit.set(true);
  }

  closeModals(): void {
    this.modalCreate.set(false);
    this.modalEdit.set(false);
    this.editingId.set(null);
    this.createOrgError.set(null);
    this.selectedManagerUserId.set(null);
    this.managerSearchSig.set('');
  }

  submitCreate(): void {
    const name = this.form.name.trim();
    if (!name) {
      this.createOrgError.set('El nombre de la organizacion es obligatorio.');
      return;
    }
    const managerUserId = this.selectedManagerUserId();
    if (managerUserId == null) {
      this.createOrgError.set('Debes seleccionar un manager inicial para la organizacion.');
      return;
    }

    this.loading.set(true);
    this.adminApi.createOrganization({ ...this.form, name, managerUserId }).subscribe({
      next: created => {
        this.loading.set(false);
        this.closeModals();
        this.reload();
        this.showSuccess(`Organizacion "${created.name}" creada con su manager inicial.`);
      },
      error: e => {
        this.loading.set(false);
        this.showApiError(e);
      }
    });
  }

  submitEdit(): void {
    const id = this.editingId();
    if (id == null || !this.form.name.trim()) return;
    this.loading.set(true);
    this.adminApi.updateOrganization(id, this.form).subscribe({
      next: () => {
        this.loading.set(false);
        this.closeModals();
        this.reload();
        this.showSuccess(`Organizacion #${id} actualizada.`);
      },
      error: e => {
        this.loading.set(false);
        this.showApiError(e);
      }
    });
  }

  canSubmitCreate(): boolean {
    return !!(this.form.name.trim() && this.selectedManagerUserId() != null);
  }

  // ---------------------------------------------------------------------------
  // Delete
  // ---------------------------------------------------------------------------
  confirmDelete(o: OrganizationDto): void {
    this.openConfirm({
      title: 'Eliminar organizacion',
      message: `Se eliminara "${o.name}" (id ${o.id}). Esta accion no se puede deshacer.`,
      confirmLabel: 'Eliminar',
      danger: true,
      onConfirm: () => this.executeDelete(o)
    });
  }

  private executeDelete(o: OrganizationDto): void {
    this.adminApi.deleteOrganization(o.id).subscribe({
      next: () => {
        this.reload();
        this.showSuccess(`Organizacion "${o.name}" eliminada.`);
      },
      error: e => this.showApiError(e)
    });
  }

  // ---------------------------------------------------------------------------
  // Confirm + Notice modals
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

  private validateInitialManagerAssignment(): boolean {
    if (this.managerAssignmentMode() === 'existing') {
      if (this.selectedManagerUserId() == null) {
        this.createOrgError.set('Debes seleccionar un manager inicial para la organizacion.');
        return false;
      }
      return true;
    }

    const f = this.managerInviteForm;
    if (!f.username.trim() || !f.email.trim() || !f.password || !f.name.trim() || !f.lastname.trim()) {
      this.createOrgError.set('Completa todos los datos del manager inicial.');
      return false;
    }
    if (f.password.length < 6) {
      this.createOrgError.set('La contrasena temporal del manager debe tener al menos 6 caracteres.');
      return false;
    }
    return true;
  }

  private completeInitialManagerAssignment(org: OrganizationDto): void {
    if (this.managerAssignmentMode() === 'existing') {
      this.assignExistingManager(org);
      return;
    }
    this.inviteInitialManager(org);
  }

  private assignExistingManager(org: OrganizationDto): void {
    const userId = this.selectedManagerUserId();
    const selected = this.allUsersCatalog().find(u => u.id === userId);
    if (userId == null || !selected) {
      this.loading.set(false);
      this.createOrgError.set('Selecciona un manager valido.');
      return;
    }

    this.adminApi.updateUser(userId, { organizationId: org.id }).subscribe({
      next: () => {
        const roles = this.managerRolesFor(selected);
        this.adminApi.setUserRoles(userId, roles).subscribe({
          next: () => this.finishCreateOrganization(org, `Organizacion "${org.name}" creada y manager asignado.`),
          error: e => this.handleInitialManagerFailure(org, e)
        });
      },
      error: e => this.handleInitialManagerFailure(org, e)
    });
  }

  private inviteInitialManager(org: OrganizationDto): void {
    const f = this.managerInviteForm;
    const body: CreateUserBody = {
      username: f.username.trim(),
      email: f.email.trim(),
      password: f.password,
      name: f.name.trim(),
      lastname: f.lastname.trim(),
      organizationId: org.id,
      roles: ['ROLE_MANAGER', 'ROLE_USER']
    };

    this.adminApi.createUser(body).subscribe({
      next: () => this.finishCreateOrganization(org, `Organizacion "${org.name}" creada y manager invitado.`),
      error: e => this.handleInitialManagerFailure(org, e)
    });
  }

  private managerRolesFor(user: UserAdminDto): string[] {
    const merged = new Set((user.roles || []).filter(r => r !== 'ROLE_ADMIN'));
    merged.add('ROLE_MANAGER');
    merged.add('ROLE_USER');
    return Array.from(merged);
  }

  private finishCreateOrganization(org: OrganizationDto, message: string): void {
    this.loading.set(false);
    this.closeModals();
    this.reload();
    this.showSuccess(message);
  }

  private handleInitialManagerFailure(org: OrganizationDto, e: ApiErrorLike): void {
    this.loading.set(false);
    const msg = e?.error?.message || e?.message || 'No se pudo asignar el manager inicial.';
    this.closeModals();
    this.reload();
    this.openUsers(org);
    this.showWarning(
      `La organizacion "${org.name}" se creo, pero la asignacion inicial del manager fallo. ${msg}`,
      'Asignacion de manager pendiente'
    );
  }

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------
  private emptyForm(): OrganizationRequest {
    return {
      name: '',
      taxId: '',
      address: '',
      email: '',
      phone: '',
      active: true,
      planLimit: 5
    };
  }

  /**
   * Formulario inicial para crear sedes. `organizationId` se rellena con la org abierta
   * en el modal; cuando se llama sin contexto (p. ej. al cerrar) cae a 0 como placeholder
   * inocuo, ya que el form no se renderiza sin una org seleccionada.
   */
  private emptyLocationForm(organizationId?: number): LocationRequest {
    return {
      name: '',
      address: '',
      city: '',
      organizationId: organizationId ?? 0
    };
  }
}
