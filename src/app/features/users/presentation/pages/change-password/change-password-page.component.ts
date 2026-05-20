import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@features/auth/infrastructure/session/auth.service';
import { USER_REPOSITORY } from '@features/users/infrastructure/tokens';

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

/**
 * Pagina de auto-servicio "Cambiar mi contrasena".
 *
 */
@Component({
  selector: 'app-change-password-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './change-password-page.component.html',
  styleUrls: ['./change-password-page.component.scss']
})
export class ChangePasswordPageComponent {
  readonly currentPassword = signal('');
  readonly newPassword = signal('');
  readonly confirmPassword = signal('');

  readonly loading = signal(false);
  readonly errorMsg = signal<string | null>(null);
  readonly notice = signal<NoticeMessage | null>(null);

  private readonly userRepo = inject(USER_REPOSITORY);

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  submit(): void {
    this.errorMsg.set(null);

    const cur = this.currentPassword();
    const np = this.newPassword();
    const cp = this.confirmPassword();

    if (!cur || !np || !cp) {
      this.errorMsg.set('Completa los tres campos.');
      return;
    }
    if (np.length < 6) {
      this.errorMsg.set('La nueva contrasena debe tener al menos 6 caracteres.');
      return;
    }
    if (np !== cp) {
      this.errorMsg.set('La confirmacion no coincide con la nueva contrasena.');
      return;
    }
    if (cur === np) {
      this.errorMsg.set('La nueva contrasena debe ser diferente a la actual.');
      return;
    }

    this.loading.set(true);
    this.userRepo.changeMyPassword(cur, np).subscribe({
        next: () => {
          this.loading.set(false);
          this.notice.set({
            kind: 'success',
            title: 'Contrasena actualizada',
            message:
              'Tu contrasena se cambio correctamente. Por seguridad cerraremos tu sesion, ' +
              'tendras que iniciar sesion otra vez con la nueva contrasena.'
          });
        },
        error: (e: ApiErrorLike) => {
          this.loading.set(false);
          const msg = e?.error?.message || e?.message;
          this.errorMsg.set(msg || 'No se pudo actualizar la contrasena.');
        }
      });
  }

  acceptNoticeAndLogout(): void {
    this.notice.set(null);
    this.authService.logout();
    setTimeout(() => {
      if (this.authService.isAuthenticated()) {
        this.router.navigate(['/auth/login']);
      }
    }, 1500);
  }

  closeError(): void {
    this.errorMsg.set(null);
  }
}
