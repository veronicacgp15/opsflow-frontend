import { Component, DestroyRef, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '@features/auth/infrastructure/session/auth.service';
import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';

function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const newPassword = control.get('newPassword')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  if (confirmPassword == null || confirmPassword === '') {
    return null;
  }
  return newPassword === confirmPassword ? null : { mismatch: true };
}

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, AuthLayoutComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  private readonly destroyRef = inject(DestroyRef);

  resetForm: FormGroup;
  showPassword = signal(false);
  errorMessage = signal<string | null>(null);
  isLoading = signal(false);
  resetToken = signal<string | null>(null);
  missingToken = signal(false);
  isSuccess = signal(false);
  passwordStrength = signal(0);

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.resetForm = this.fb.group(
      {
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]]
      },
      { validators: passwordMatchValidator }
    );

    this.route.queryParamMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(params => {
      const token = params.get('token')?.trim() ?? '';
      if (!token) {
        this.missingToken.set(true);
        this.resetToken.set(null);
      } else {
        this.missingToken.set(false);
        this.resetToken.set(token);
      }
    });

    this.resetForm
      .get('newPassword')
      ?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(value => {
        this.calculatePasswordStrength(value ?? '');
      });
  }

  togglePassword(): void {
    this.showPassword.update(v => !v);
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.resetForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  isFieldValid(fieldName: string): boolean {
    const field = this.resetForm.get(fieldName);
    return !!(field && field.valid && (field.dirty || field.touched));
  }

  formHasMismatch(): boolean {
    return this.resetForm.hasError('mismatch') && this.resetForm.get('confirmPassword')?.touched === true;
  }

  calculatePasswordStrength(password: string): void {
    let strength = 0;
    if (password.length >= 4) strength++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) strength++;
    this.passwordStrength.set(strength);
  }

  pwdReqMinLength(): boolean {
    const v = this.resetForm.get('newPassword')?.value ?? '';
    return v.length >= 6;
  }

  pwdReqMixedCase(): boolean {
    const v = this.resetForm.get('newPassword')?.value ?? '';
    return /[A-Z]/.test(v) && /[a-z]/.test(v);
  }

  pwdReqNumber(): boolean {
    const v = this.resetForm.get('newPassword')?.value ?? '';
    return /[0-9]/.test(v);
  }

  pwdReqSpecial(): boolean {
    const v = this.resetForm.get('newPassword')?.value ?? '';
    return /[^A-Za-z0-9]/.test(v);
  }

  onSubmit(): void {
    const token = this.resetToken();
    if (!token) {
      return;
    }

    if (this.resetForm.invalid) {
      Object.keys(this.resetForm.controls).forEach(key => {
        this.resetForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.errorMessage.set(null);
    this.isLoading.set(true);

    const { newPassword } = this.resetForm.value as { newPassword: string };

    this.authService.resetPassword(token, newPassword).subscribe({
      next: () => {
        this.isSuccess.set(true);
        this.isLoading.set(false);
        setTimeout(() => this.router.navigate(['/auth/login']), 3000);
      },
      error: (error: Error) => {
        this.errorMessage.set(error.message);
        this.isLoading.set(false);
      }
    });
  }
}
