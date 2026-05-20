import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '@features/auth/infrastructure/session/auth.service';
import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';

@Component({
  selector: 'app-verify-email',
  standalone: true,
  imports: [CommonModule, RouterLink, AuthLayoutComponent],
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.scss'
})
export class VerifyEmailComponent implements OnInit {
  readonly isLoading = signal(true);
  readonly statusMessage = signal('Procesando verificacion...');
  readonly isError = signal(false);

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token');

    if (!token) {
      this.statusMessage.set('No se encontro el token de verificacion.');
      this.isError.set(true);
      this.isLoading.set(false);
      return;
    }

    this.authService.verifyEmail(token).subscribe({
      next: response => {
        this.statusMessage.set(response.message || 'Correo verificado correctamente.');
        this.isError.set(false);
        this.isLoading.set(false);
        setTimeout(() => this.router.navigate(['/auth/login']), 5000);
      },
      error: (error: Error) => {
        this.statusMessage.set(error.message || 'No fue posible verificar el correo.');
        this.isError.set(true);
        this.isLoading.set(false);
      }
    });
  }
}
