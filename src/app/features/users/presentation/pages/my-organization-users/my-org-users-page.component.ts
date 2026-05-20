import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '@features/auth/infrastructure/session/auth.service';
import { CreateUserCommand, User } from '@features/users/domain/entities/user.entity';
import { USER_REPOSITORY } from '@features/users/infrastructure/tokens';
import { P } from '@platform/config/permissions.registry';

type SortKey = 'id_asc' | 'id_desc' | 'user_asc' | 'user_desc';
type StatusFilter = 'all' | 'active' | 'inactive';
type NoticeKind = 'info' | 'success' | 'warning' | 'error';

interface NoticeMessage {
  kind: NoticeKind;
  title: string;
  message: string;
}

interface ApiErrorLike {
  error?: { message?: string };
  message?: string;
}

interface InviteFormModel {
  username: string;
  email: string;
  password: string;
  name: string;
  lastname: string;
}

function emptyInviteForm(): InviteFormModel {
  return { username: '', email: '', password: '', name: '', lastname: '' };
}

/**
 * Pagina "Usuarios de mi organizacion": lista los usuarios de la organizacion del JWT y permite
 * invitarlos. Pensada para MANAGER (y ADMIN, que tambien la puede usar).
 *
 * <p>El backend expone {@code GET /users/my-organization} y {@code POST /users}; este ultimo
 * fuerza la organizacion al JWT del MANAGER y limita los roles a {@code ROLE_USER}, asi que
 * el formulario solo pide los datos basicos del invitado.
 */
@Component({
  selector: 'app-my-org-users-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-org-users-page.component.html',
  styleUrls: ['./my-org-users-page.component.scss']
})
export class MyOrgUsersPageComponent implements OnInit {
  protected readonly P = P;

  readonly users = signal<User[]>([]);
  readonly searchSig = signal('');
  readonly statusFilterSig = signal<StatusFilter>('all');
  readonly sortSig = signal<SortKey>('id_asc');
  readonly loading = signal(false);

  readonly inviteOpen = signal(false);
  readonly inviteForm = signal<InviteFormModel>(emptyInviteForm());
  readonly inviteError = signal<string | null>(null);

  readonly notice = signal<NoticeMessage | null>(null);

  readonly filteredUsers = computed(() => {
    const raw = this.searchSig().trim();
    const qLower = raw.toLowerCase();
    const status = this.statusFilterSig();
    const myId = this.authService.currentUser()?.id ?? null;

    const filtered = this.users().filter(u => {
      if (myId != null && u.id === myId) return false;
      if (status === 'active' && !u.enabled) return false;
      if (status === 'inactive' && u.enabled) return false;
      if (!raw) return true;
      return (
        String(u.id).includes(raw) ||
        (u.username || '').toLowerCase().includes(qLower) ||
        (u.email || '').toLowerCase().includes(qLower) ||
        (u.name || '').toLowerCase().includes(qLower) ||
        (u.lastname || '').toLowerCase().includes(qLower)
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

  private readonly userRepo = inject(USER_REPOSITORY);

  constructor(public readonly authService: AuthService) {}

  ngOnInit(): void {
    this.reload();
  }

  reload(): void {
    this.userRepo.listMyOrganization().subscribe({
      next: rows => this.users.set(rows),
      error: e => this.showApiError(e, 'No se pudieron cargar los usuarios de tu organizacion.')
    });
  }

  toggleSort(column: 'id' | 'user'): void {
    const current = this.sortSig();
    if (column === 'id') {
      this.sortSig.set(current === 'id_asc' ? 'id_desc' : 'id_asc');
    } else if (column === 'user') {
      this.sortSig.set(current === 'user_asc' ? 'user_desc' : 'user_asc');
    }
  }

  // ---------------------------------------------------------------------------
  // Invite modal
  // ---------------------------------------------------------------------------
  openInvite(): void {
    this.inviteForm.set(emptyInviteForm());
    this.inviteError.set(null);
    this.inviteOpen.set(true);
  }

  closeInvite(): void {
    this.inviteOpen.set(false);
  }

  /**
   * Setter generico para los campos del formulario de invitacion. El parser de Angular
   * no admite spread ({@code ...inviteForm()}) en bindings, por eso lo encapsulamos aqui.
   */
  setInviteField<K extends keyof InviteFormModel>(field: K, value: InviteFormModel[K]): void {
    this.inviteForm.update(f => ({ ...f, [field]: value }));
  }

  saveInvite(): void {
    const f = this.inviteForm();
    if (!f.username || !f.email || !f.password || !f.name || !f.lastname) {
      this.inviteError.set('Completa todos los campos.');
      return;
    }
    if (f.password.length < 6) {
      this.inviteError.set('La contrasena debe tener al menos 6 caracteres.');
      return;
    }

    // Para MANAGER el backend ignora roles y organizationId. Aun asi enviamos ROLE_USER
    // explicito para que el comportamiento sea identico cuando el ADMIN use esta misma
    // pantalla (y ese ROLE_USER en el body sea consistente con lo que el backend va a aplicar).
    const body: CreateUserCommand = {
      username: f.username.trim(),
      email: f.email.trim(),
      password: f.password,
      name: f.name.trim(),
      lastname: f.lastname.trim(),
      roles: ['ROLE_USER']
    };

    this.loading.set(true);
    this.userRepo.create(body).subscribe({
      next: created => {
        this.loading.set(false);
        this.closeInvite();
        this.reload();
        this.showSuccess(
          `Usuario ${created.username} invitado. Recibira un correo para verificar la cuenta.`
        );
      },
      error: e => {
        this.loading.set(false);
        const msg = e?.error?.message || e?.message;
        this.inviteError.set(msg || 'No se pudo invitar al usuario.');
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Notice
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
