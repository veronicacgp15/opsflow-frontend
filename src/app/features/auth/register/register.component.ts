import { Component, HostListener, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Subscription, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '@features/auth/infrastructure/session/auth.service';
import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';

const USERNAME_MIN_CHECK = 3;

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, AuthLayoutComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  host: { class: 'register-page' }
})
export class RegisterComponent implements OnDestroy {
  registerForm: FormGroup;
  showPassword = signal(false);
  passwordHintsOpen = signal(false);
  usernameChecking = signal(false);
  usernameUnavailable = signal(false);
  errorMessage = signal<string | null>(null);
  successMessage = signal<string | null>(null);
  isLoading = signal(false);
  passwordStrength = signal(0);

  private usernameCheckSub?: Subscription;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        username: ['', [Validators.required, Validators.minLength(USERNAME_MIN_CHECK)]],
        email: ['', [Validators.required, Validators.email]],
        phone: [''],
        password: ['', [Validators.required, Validators.minLength(6)]],
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

    this.setupUsernameAvailabilityCheck();
  }

  ngOnDestroy(): void {
    this.usernameCheckSub?.unsubscribe();
  }

  private setupUsernameAvailabilityCheck(): void {
    const usernameCtrl = this.registerForm.get('username');
    if (!usernameCtrl) {
      return;
    }

    this.usernameCheckSub = usernameCtrl.valueChanges
      .pipe(
        debounceTime(450),
        distinctUntilChanged(),
        tap(() => {
          this.clearUsernameTaken();
          this.usernameChecking.set(false);
        }),
        filter((value): value is string => typeof value === 'string' && value.trim().length >= USERNAME_MIN_CHECK),
        tap(() => this.usernameChecking.set(true)),
        switchMap(value =>
          this.authService.checkUsernameAvailable(value).pipe(
            catchError(() => of(true))
          )
        )
      )
      .subscribe(available => {
        this.usernameChecking.set(false);
        const current = (usernameCtrl.value as string)?.trim() ?? '';
        if (current.length < USERNAME_MIN_CHECK) {
          return;
        }
        if (!available) {
          this.setUsernameTaken(true);
        } else {
          this.clearUsernameTaken();
        }
      });
  }

  private setUsernameTaken(taken: boolean): void {
    const ctrl = this.registerForm.get('username');
    if (!ctrl) {
      return;
    }
    this.usernameUnavailable.set(taken);
    if (!taken) {
      return;
    }
    const errors = { ...(ctrl.errors ?? {}), usernameTaken: true };
    ctrl.setErrors(errors);
  }

  private clearUsernameTaken(): void {
    const ctrl = this.registerForm.get('username');
    if (!ctrl) {
      return;
    }
    this.usernameUnavailable.set(false);
    if (!ctrl.errors?.['usernameTaken']) {
      return;
    }
    const errors = { ...ctrl.errors };
    delete errors['usernameTaken'];
    ctrl.setErrors(Object.keys(errors).length ? errors : null);
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
    if (password.length >= 6) strength++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) strength++;
    this.passwordStrength.set(strength);
  }

  togglePassword(): void {
    this.showPassword.update(value => !value);
  }

  togglePasswordHints(): void {
    this.passwordHintsOpen.update(v => !v);
  }

  openPasswordHints(): void {
    this.passwordHintsOpen.set(true);
  }

  closePasswordHints(): void {
    this.passwordHintsOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.password-hints-anchor')) {
      this.closePasswordHints();
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.registerForm.get(fieldName);
    if (fieldName === 'username' && this.usernameUnavailable()) {
      return !!(field && (field.dirty || field.touched));
    }
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  isFieldValid(fieldName: string): boolean {
    const field = this.registerForm.get(fieldName);
    if (fieldName === 'username') {
      return !!(
        field &&
        field.valid &&
        !this.usernameChecking() &&
        !this.usernameUnavailable() &&
        (field.dirty || field.touched)
      );
    }
    return !!(field && field.valid && (field.dirty || field.touched));
  }

  showUsernameUnavailablePopover(): boolean {
    const field = this.registerForm.get('username');
    return (
      this.usernameUnavailable() &&
      !this.usernameChecking() &&
      !!(field && (field.dirty || field.touched))
    );
  }

  canSubmit(): boolean {
    return (
      this.registerForm.valid &&
      !this.isLoading() &&
      !this.usernameChecking() &&
      !this.usernameUnavailable()
    );
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
    if (!this.canSubmit()) {
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
          const msg = error.message ?? '';
          if (msg.toLowerCase().includes('username') && msg.toLowerCase().includes('taken')) {
            this.setUsernameTaken(true);
            this.registerForm.get('username')?.markAsTouched();
          } else {
            this.errorMessage.set(msg);
          }
          this.isLoading.set(false);
        }
      });
  }
}
