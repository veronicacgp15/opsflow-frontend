import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, AuthLayoutComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;
  showPassword = signal(false);
  errorMessage = signal<string | null>(null);
  successMessage = signal<string | null>(null);
  isLoading = signal(false);
  passwordStrength = signal(0);

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: [''],
        password: ['', [Validators.required, Validators.minLength(4)]],
        confirmPassword: ['', [Validators.required]],
        acceptTerms: [false, [Validators.requiredTrue]]
      },
      {
        validators: this.passwordMatchValidator
      }
    );

    this.registerForm.get('password')?.valueChanges.subscribe(value => {
      this.calculatePasswordStrength(value);
    });
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (!password || !confirmPassword) return null;

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({
        ...(confirmPassword.errors || {}),
        passwordMismatch: true
      });
      return { passwordMismatch: true };
    }

    if (confirmPassword.errors?.['passwordMismatch']) {
      const next: ValidationErrors = { ...confirmPassword.errors };
      delete next['passwordMismatch'];
      confirmPassword.setErrors(Object.keys(next).length ? next : null);
    }

    return null;
  }

  calculatePasswordStrength(password: string): void {
    let strength = 0;
    if (password.length >= 4) strength++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) strength++;
    this.passwordStrength.set(strength);
  }

  togglePassword(): void {
    this.showPassword.update(value => !value);
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.registerForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  isFieldValid(fieldName: string): boolean {
    const field = this.registerForm.get(fieldName);
    return !!(field && field.valid && (field.dirty || field.touched));
  }

  pwdReqMinLength(): boolean {
    const v = this.registerForm.get('password')?.value ?? '';
    return v.length >= 6;
  }

  pwdReqMixedCase(): boolean {
    const v = this.registerForm.get('password')?.value ?? '';
    return /[A-Z]/.test(v) && /[a-z]/.test(v);
  }

  pwdReqNumber(): boolean {
    const v = this.registerForm.get('password')?.value ?? '';
    return /[0-9]/.test(v);
  }

  pwdReqSpecial(): boolean {
    const v = this.registerForm.get('password')?.value ?? '';
    return /[^A-Za-z0-9]/.test(v);
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      Object.keys(this.registerForm.controls).forEach(key => {
        this.registerForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.errorMessage.set(null);
    this.successMessage.set(null);
    this.isLoading.set(true);

    const { firstName, lastName, username, email, password } = this.registerForm.value;

    this.authService
      .register({
        username,
        email,
        password,
        name: firstName,
        lastname: lastName
      } as any)
      .subscribe({
        next: () => {
          this.successMessage.set(
            'Registro exitoso. Revisa tu correo para verificar tu cuenta antes de iniciar sesion.'
          );
          this.isLoading.set(false);
          setTimeout(() => {
            this.router.navigate(['/auth/login']);
          }, 3000);
        },
        error: (error: Error) => {
          this.errorMessage.set(error.message);
          this.isLoading.set(false);
        }
      });
  }
}
