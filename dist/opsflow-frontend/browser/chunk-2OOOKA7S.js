import {
  AuthLayoutComponent
} from "./chunk-SUORE4NG.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-KPJXXM46.js";
import {
  AuthService
} from "./chunk-BSOZ4HA7.js";
import {
  CommonModule,
  Component,
  Router,
  RouterLink,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6KLI64HZ.js";

// src/app/features/auth/register/register.component.ts
function RegisterComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 73);
    \u0275\u0275element(2, "circle", 74)(3, "line", 75)(4, "line", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function RegisterComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 73);
    \u0275\u0275element(2, "path", 77)(3, "polyline", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.successMessage());
  }
}
function RegisterComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 79);
    \u0275\u0275element(2, "polyline", 16);
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 80);
    \u0275\u0275element(2, "circle", 74)(3, "line", 75)(4, "line", 76);
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "El nombre es requerido");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 79);
    \u0275\u0275element(2, "polyline", 16);
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 80);
    \u0275\u0275element(2, "circle", 74)(3, "line", 75)(4, "line", 76);
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "El apellido es requerido");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 79);
    \u0275\u0275element(2, "polyline", 16);
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 80);
    \u0275\u0275element(2, "circle", 74)(3, "line", 75)(4, "line", 76);
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "El username es requerido");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 79);
    \u0275\u0275element(2, "polyline", 16);
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_Conditional_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 80);
    \u0275\u0275element(2, "circle", 74)(3, "line", 75)(4, "line", 76);
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_Conditional_111_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El correo es requerido ");
  }
}
function RegisterComponent_Conditional_111_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Ingresa un correo valido ");
  }
}
function RegisterComponent_Conditional_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275template(1, RegisterComponent_Conditional_111_Conditional_1_Template, 1, 0)(2, RegisterComponent_Conditional_111_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.registerForm.get("email")) == null ? null : tmp_1_0.hasError("required")) ? 1 : ((tmp_1_0 = ctx_r0.registerForm.get("email")) == null ? null : tmp_1_0.hasError("email")) ? 2 : -1);
  }
}
function RegisterComponent_Conditional_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 79);
    \u0275\u0275element(2, "polyline", 16);
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_Conditional_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 80);
    \u0275\u0275element(2, "circle", 74)(3, "line", 75)(4, "line", 76);
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_Conditional_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 15);
    \u0275\u0275element(1, "path", 81)(2, "line", 82);
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 15);
    \u0275\u0275element(1, "path", 83)(2, "circle", 84);
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_134_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " La contrasena es requerida ");
  }
}
function RegisterComponent_Conditional_134_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " La contrasena debe tener al menos 6 caracteres ");
  }
}
function RegisterComponent_Conditional_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275template(1, RegisterComponent_Conditional_134_Conditional_1_Template, 1, 0)(2, RegisterComponent_Conditional_134_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.registerForm.get("password")) == null ? null : tmp_1_0.hasError("required")) ? 1 : ((tmp_1_0 = ctx_r0.registerForm.get("password")) == null ? null : tmp_1_0.hasError("minlength")) ? 2 : -1);
  }
}
function RegisterComponent_Conditional_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Debil ");
  }
}
function RegisterComponent_Conditional_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Media ");
  }
}
function RegisterComponent_Conditional_143_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Fuerte ");
  }
}
function RegisterComponent_Conditional_161_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 79);
    \u0275\u0275element(2, "polyline", 16);
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_Conditional_162_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 80);
    \u0275\u0275element(2, "circle", 74)(3, "line", 75)(4, "line", 76);
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_Conditional_163_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Confirma tu contrasena ");
  }
}
function RegisterComponent_Conditional_163_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Las contrasenas no coinciden ");
  }
}
function RegisterComponent_Conditional_163_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275template(1, RegisterComponent_Conditional_163_Conditional_1_Template, 1, 0)(2, RegisterComponent_Conditional_163_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.registerForm.get("confirmPassword")) == null ? null : tmp_1_0.hasError("required")) ? 1 : ((tmp_1_0 = ctx_r0.registerForm.get("confirmPassword")) == null ? null : tmp_1_0.hasError("passwordMismatch")) ? 2 : -1);
  }
}
function RegisterComponent_Conditional_174_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "Debes aceptar los terminos");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_176_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 85);
    \u0275\u0275element(1, "circle", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Creando cuenta... ");
  }
}
function RegisterComponent_Conditional_177_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Crear cuenta ");
  }
}
var RegisterComponent = class _RegisterComponent {
  fb;
  authService;
  router;
  registerForm;
  showPassword = signal(false);
  errorMessage = signal(null);
  successMessage = signal(null);
  isLoading = signal(false);
  passwordStrength = signal(0);
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.registerForm = this.fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      username: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      password: ["", [Validators.required, Validators.minLength(4)]],
      confirmPassword: ["", [Validators.required]],
      acceptTerms: [false, [Validators.requiredTrue]]
    }, {
      validators: this.passwordMatchValidator
    });
    this.registerForm.get("password")?.valueChanges.subscribe((value) => {
      this.calculatePasswordStrength(value);
    });
  }
  passwordMatchValidator(control) {
    const password = control.get("password");
    const confirmPassword = control.get("confirmPassword");
    if (!password || !confirmPassword)
      return null;
    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors(__spreadProps(__spreadValues({}, confirmPassword.errors || {}), {
        passwordMismatch: true
      }));
      return { passwordMismatch: true };
    }
    if (confirmPassword.errors?.["passwordMismatch"]) {
      const next = __spreadValues({}, confirmPassword.errors);
      delete next["passwordMismatch"];
      confirmPassword.setErrors(Object.keys(next).length ? next : null);
    }
    return null;
  }
  calculatePasswordStrength(password) {
    let strength = 0;
    if (password.length >= 4)
      strength++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password))
      strength++;
    if (/[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password))
      strength++;
    this.passwordStrength.set(strength);
  }
  togglePassword() {
    this.showPassword.update((value) => !value);
  }
  isFieldInvalid(fieldName) {
    const field = this.registerForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  isFieldValid(fieldName) {
    const field = this.registerForm.get(fieldName);
    return !!(field && field.valid && (field.dirty || field.touched));
  }
  pwdReqMinLength() {
    const v = this.registerForm.get("password")?.value ?? "";
    return v.length >= 6;
  }
  pwdReqMixedCase() {
    const v = this.registerForm.get("password")?.value ?? "";
    return /[A-Z]/.test(v) && /[a-z]/.test(v);
  }
  pwdReqNumber() {
    const v = this.registerForm.get("password")?.value ?? "";
    return /[0-9]/.test(v);
  }
  pwdReqSpecial() {
    const v = this.registerForm.get("password")?.value ?? "";
    return /[^A-Za-z0-9]/.test(v);
  }
  onSubmit() {
    if (this.registerForm.invalid) {
      Object.keys(this.registerForm.controls).forEach((key) => {
        this.registerForm.get(key)?.markAsTouched();
      });
      return;
    }
    this.errorMessage.set(null);
    this.successMessage.set(null);
    this.isLoading.set(true);
    const { firstName, lastName, username, email, password } = this.registerForm.value;
    this.authService.register({
      username,
      email,
      password,
      name: firstName,
      lastname: lastName
    }).subscribe({
      next: () => {
        this.successMessage.set("Registro exitoso. Revisa tu correo para verificar tu cuenta antes de iniciar sesion.");
        this.isLoading.set(false);
        setTimeout(() => {
          this.router.navigate(["/auth/login"]);
        }, 3e3);
      },
      error: (error) => {
        this.errorMessage.set(error.message);
        this.isLoading.set(false);
      }
    });
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 183, vars: 84, consts: [["auth-branding", "", 1, "branding-panel"], [1, "branding-content"], [1, "logo"], ["width", "48", "height", "48", "viewBox", "0 0 48 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "aria-hidden", "true", 1, "logo-mark"], ["id", "opsflow-register-logo-grad", "x1", "8", "y1", "4", "x2", "40", "y2", "44", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#93c5fd"], ["offset", "1", "stop-color", "#2563eb"], ["width", "48", "height", "48", "rx", "12", "fill", "url(#opsflow-register-logo-grad)"], ["d", "M14 24L22 32L34 16", "stroke", "white", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "logo-text"], [1, "branding-title", "branding-title--compact"], [1, "branding-description", "branding-description--register"], [1, "benefits-list"], [1, "benefit-item"], [1, "benefit-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["points", "20 6 9 17 4 12"], [1, "benefit-content"], [1, "branding-footer"], ["auth-form", ""], [1, "form-container"], [1, "form-header", "form-header--register"], ["aria-label", "Registro con proveedores externos", 1, "social-auth"], [1, "social-auth__divider"], [1, "social-auth__buttons"], ["type", "button", "disabled", "", "title", "Proximamente", 1, "btn-social"], ["role", "alert", "aria-live", "polite", 1, "alert", "alert-error"], ["role", "status", "aria-live", "polite", 1, "alert", "alert-success"], [1, "auth-form", "register-form", 3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["for", "firstName", 1, "form-label"], [1, "input-wrapper"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "input-icon"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["type", "text", "id", "firstName", "formControlName", "firstName", "placeholder", "Tu nombre", 1, "form-input", "form-input--has-status"], ["aria-hidden", "true", 1, "input-status", "input-status--valid"], ["aria-hidden", "true", 1, "input-status", "input-status--invalid"], [1, "field-error"], ["for", "lastName", 1, "form-label"], ["type", "text", "id", "lastName", "formControlName", "lastName", "placeholder", "Tu apellido", 1, "form-input", "form-input--has-status"], ["for", "username", 1, "form-label"], ["type", "text", "id", "username", "formControlName", "username", "placeholder", "Tu username", 1, "form-input", "form-input--has-status"], ["for", "email", 1, "form-label"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "correo@ejemplo.com", "autocomplete", "email", 1, "form-input", "form-input--has-status"], ["for", "phone", 1, "form-label"], [1, "optional"], ["d", "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"], ["type", "tel", "id", "phone", "formControlName", "phone", "placeholder", "+1 234 567 890", 1, "form-input"], ["for", "password", 1, "form-label"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], ["id", "password", "formControlName", "password", "placeholder", "Minimo 6 caracteres", "autocomplete", "new-password", 1, "form-input", "form-input--password", 3, "type"], ["type", "button", 1, "toggle-password", 3, "click"], [1, "password-strength"], [1, "strength-bars"], [1, "bar"], [1, "strength-text"], ["aria-label", "Requisitos de contrasena", 1, "password-requirements"], ["for", "confirmPassword", 1, "form-label"], ["type", "password", "id", "confirmPassword", "formControlName", "confirmPassword", "placeholder", "Repite tu contrasena", "autocomplete", "new-password", 1, "form-input", "form-input--has-status"], [1, "terms-wrapper"], [1, "checkbox-wrapper"], ["type", "checkbox", "formControlName", "acceptTerms"], [1, "checkbox-label"], ["href", "/terms", "target", "_blank"], ["href", "/privacy", "target", "_blank"], ["type", "submit", 1, "btn", "btn-primary", "btn-register-submit", 3, "disabled"], [1, "form-footer"], ["routerLink", "/auth/login", 1, "auth-link"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "alert-icon"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "spinner"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "3", "fill", "none", "stroke-dasharray", "32", "stroke-linecap", "round"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-auth-layout")(1, "div", 0)(2, "div", 1)(3, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 3)(5, "defs")(6, "linearGradient", 4);
      \u0275\u0275element(7, "stop", 5)(8, "stop", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(9, "rect", 7)(10, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "span", 9);
      \u0275\u0275text(12, "OpsFlow");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "h1", 10);
      \u0275\u0275text(14, "Comienza tu prueba gratuita");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 11);
      \u0275\u0275text(16, " Unete a miles de empresas que ya optimizan sus operaciones con OpsFlow. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(20, "svg", 15);
      \u0275\u0275element(21, "polyline", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(22, "div", 17)(23, "h4");
      \u0275\u0275text(24, "14 dias de prueba gratuita");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p");
      \u0275\u0275text(26, "Sin tarjeta de credito requerida");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 13)(28, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 15);
      \u0275\u0275element(30, "polyline", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(31, "div", 17)(32, "h4");
      \u0275\u0275text(33, "Soporte 24/7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "p");
      \u0275\u0275text(35, "Equipo de expertos a tu disposicion");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 13)(37, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(38, "svg", 15);
      \u0275\u0275element(39, "polyline", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(40, "div", 17)(41, "h4");
      \u0275\u0275text(42, "Configuracion rapida");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p");
      \u0275\u0275text(44, "Listo en menos de 5 minutos");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(45, "div", 18)(46, "p");
      \u0275\u0275text(47, "\xA9 2024 OpsFlow. Todos los derechos reservados.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 19)(49, "div", 20)(50, "div", 21)(51, "h2");
      \u0275\u0275text(52, "Crear cuenta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p");
      \u0275\u0275text(54, "Completa el formulario para comenzar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 22)(56, "p", 23)(57, "span");
      \u0275\u0275text(58, "O continua con");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 24)(60, "button", 25);
      \u0275\u0275text(61, "Google");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "button", 25);
      \u0275\u0275text(63, "GitHub");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(64, RegisterComponent_Conditional_64_Template, 7, 1, "div", 26)(65, RegisterComponent_Conditional_65_Template, 6, 1, "div", 27);
      \u0275\u0275elementStart(66, "form", 28);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_66_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(67, "div", 29)(68, "div", 30)(69, "label", 31);
      \u0275\u0275text(70, "Nombre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 32);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(72, "svg", 33);
      \u0275\u0275element(73, "path", 34)(74, "circle", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(75, "input", 36);
      \u0275\u0275template(76, RegisterComponent_Conditional_76_Template, 3, 0, "span", 37)(77, RegisterComponent_Conditional_77_Template, 5, 0, "span", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275template(78, RegisterComponent_Conditional_78_Template, 2, 0, "span", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 30)(80, "label", 40);
      \u0275\u0275text(81, "Apellido");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 32);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(83, "svg", 33);
      \u0275\u0275element(84, "path", 34)(85, "circle", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(86, "input", 41);
      \u0275\u0275template(87, RegisterComponent_Conditional_87_Template, 3, 0, "span", 37)(88, RegisterComponent_Conditional_88_Template, 5, 0, "span", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275template(89, RegisterComponent_Conditional_89_Template, 2, 0, "span", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "div", 30)(91, "label", 42);
      \u0275\u0275text(92, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "div", 32);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(94, "svg", 33);
      \u0275\u0275element(95, "path", 34)(96, "circle", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(97, "input", 43);
      \u0275\u0275template(98, RegisterComponent_Conditional_98_Template, 3, 0, "span", 37)(99, RegisterComponent_Conditional_99_Template, 5, 0, "span", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275template(100, RegisterComponent_Conditional_100_Template, 2, 0, "span", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div", 30)(102, "label", 44);
      \u0275\u0275text(103, "Correo electronico");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "div", 32);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(105, "svg", 33);
      \u0275\u0275element(106, "path", 45)(107, "polyline", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(108, "input", 47);
      \u0275\u0275template(109, RegisterComponent_Conditional_109_Template, 3, 0, "span", 37)(110, RegisterComponent_Conditional_110_Template, 5, 0, "span", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275template(111, RegisterComponent_Conditional_111_Template, 3, 1, "span", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "div", 30)(113, "label", 48);
      \u0275\u0275text(114, "Telefono ");
      \u0275\u0275elementStart(115, "span", 49);
      \u0275\u0275text(116, "(Opcional)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "div", 32);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(118, "svg", 33);
      \u0275\u0275element(119, "path", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(120, "input", 51);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "div", 30)(122, "label", 52);
      \u0275\u0275text(123, "Contrasena");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "div", 32);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(125, "svg", 33);
      \u0275\u0275element(126, "rect", 53)(127, "path", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(128, "input", 55);
      \u0275\u0275template(129, RegisterComponent_Conditional_129_Template, 3, 0, "span", 37)(130, RegisterComponent_Conditional_130_Template, 5, 0, "span", 38);
      \u0275\u0275elementStart(131, "button", 56);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_131_listener() {
        return ctx.togglePassword();
      });
      \u0275\u0275template(132, RegisterComponent_Conditional_132_Template, 3, 0, ":svg:svg", 15)(133, RegisterComponent_Conditional_133_Template, 3, 0, ":svg:svg", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(134, RegisterComponent_Conditional_134_Template, 3, 1, "span", 39);
      \u0275\u0275elementStart(135, "div", 57)(136, "div", 58);
      \u0275\u0275element(137, "div", 59)(138, "div", 59)(139, "div", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "span", 60);
      \u0275\u0275template(141, RegisterComponent_Conditional_141_Template, 1, 0)(142, RegisterComponent_Conditional_142_Template, 1, 0)(143, RegisterComponent_Conditional_143_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "ul", 61)(145, "li");
      \u0275\u0275text(146, "Al menos 6 caracteres");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "li");
      \u0275\u0275text(148, "Mayuscula y minuscula");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "li");
      \u0275\u0275text(150, "Al menos un numero");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "li");
      \u0275\u0275text(152, "Al menos un caracter especial");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(153, "div", 30)(154, "label", 62);
      \u0275\u0275text(155, "Confirmar contrasena");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "div", 32);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(157, "svg", 33);
      \u0275\u0275element(158, "rect", 53)(159, "path", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(160, "input", 63);
      \u0275\u0275template(161, RegisterComponent_Conditional_161_Template, 3, 0, "span", 37)(162, RegisterComponent_Conditional_162_Template, 5, 0, "span", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275template(163, RegisterComponent_Conditional_163_Template, 3, 1, "span", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "div", 64)(165, "label", 65);
      \u0275\u0275element(166, "input", 66);
      \u0275\u0275elementStart(167, "span", 67);
      \u0275\u0275text(168, " Acepto los ");
      \u0275\u0275elementStart(169, "a", 68);
      \u0275\u0275text(170, "Terminos de Servicio");
      \u0275\u0275elementEnd();
      \u0275\u0275text(171, " y la ");
      \u0275\u0275elementStart(172, "a", 69);
      \u0275\u0275text(173, "Politica de Privacidad");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(174, RegisterComponent_Conditional_174_Template, 2, 0, "span", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "button", 70);
      \u0275\u0275template(176, RegisterComponent_Conditional_176_Template, 3, 0)(177, RegisterComponent_Conditional_177_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "div", 71)(179, "p");
      \u0275\u0275text(180, " Ya tienes una cuenta? ");
      \u0275\u0275elementStart(181, "a", 72);
      \u0275\u0275text(182, "Inicia sesion");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(64);
      \u0275\u0275conditional(ctx.errorMessage() ? 64 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.successMessage() ? 65 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.registerForm);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("input-error", ctx.isFieldInvalid("firstName"))("input-valid", ctx.isFieldValid("firstName"));
      \u0275\u0275advance(4);
      \u0275\u0275attribute("aria-invalid", ctx.isFieldInvalid("firstName"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldValid("firstName") ? 76 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldInvalid("firstName") ? 77 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldInvalid("firstName") ? 78 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("input-error", ctx.isFieldInvalid("lastName"))("input-valid", ctx.isFieldValid("lastName"));
      \u0275\u0275advance(4);
      \u0275\u0275attribute("aria-invalid", ctx.isFieldInvalid("lastName"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldValid("lastName") ? 87 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldInvalid("lastName") ? 88 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldInvalid("lastName") ? 89 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("input-error", ctx.isFieldInvalid("username"))("input-valid", ctx.isFieldValid("username"));
      \u0275\u0275advance(4);
      \u0275\u0275attribute("aria-invalid", ctx.isFieldInvalid("username"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldValid("username") ? 98 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldInvalid("username") ? 99 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldInvalid("username") ? 100 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("input-error", ctx.isFieldInvalid("email"))("input-valid", ctx.isFieldValid("email"));
      \u0275\u0275advance(4);
      \u0275\u0275attribute("aria-invalid", ctx.isFieldInvalid("email"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldValid("email") ? 109 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldInvalid("email") ? 110 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldInvalid("email") ? 111 : -1);
      \u0275\u0275advance(13);
      \u0275\u0275classProp("input-error", ctx.isFieldInvalid("password"))("input-valid", ctx.isFieldValid("password"));
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
      \u0275\u0275attribute("aria-invalid", ctx.isFieldInvalid("password"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldValid("password") ? 129 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldInvalid("password") ? 130 : -1);
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showPassword() ? "Ocultar contrasena" : "Mostrar contrasena");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showPassword() ? 132 : 133);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isFieldInvalid("password") ? 134 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.passwordStrength() >= 1)("weak", ctx.passwordStrength() === 1)("medium", ctx.passwordStrength() === 2)("strong", ctx.passwordStrength() >= 3);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.passwordStrength() >= 2)("medium", ctx.passwordStrength() === 2)("strong", ctx.passwordStrength() >= 3);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.passwordStrength() >= 3)("strong", ctx.passwordStrength() >= 3);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.passwordStrength() === 1 ? 141 : ctx.passwordStrength() === 2 ? 142 : ctx.passwordStrength() >= 3 ? 143 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("password-requirements__met", ctx.pwdReqMinLength());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("password-requirements__met", ctx.pwdReqMixedCase());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("password-requirements__met", ctx.pwdReqNumber());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("password-requirements__met", ctx.pwdReqSpecial());
      \u0275\u0275advance(5);
      \u0275\u0275classProp("input-error", ctx.isFieldInvalid("confirmPassword"))("input-valid", ctx.isFieldValid("confirmPassword"));
      \u0275\u0275advance(4);
      \u0275\u0275attribute("aria-invalid", ctx.isFieldInvalid("confirmPassword"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldValid("confirmPassword") ? 161 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldInvalid("confirmPassword") ? 162 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldInvalid("confirmPassword") ? 163 : -1);
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.isFieldInvalid("acceptTerms") ? 174 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.registerForm.invalid || ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 176 : 177);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, AuthLayoutComponent], styles: ['\n\n.branding-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100%;\n  flex: 1;\n}\n.branding-content[_ngcontent-%COMP%] {\n  max-width: 420px;\n  padding: 0;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 2.25rem;\n}\n.logo-mark[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  border-radius: 12px;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.12);\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28), 0 2px 10px rgba(0, 0, 0, 0.2);\n}\n.branding-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n  line-height: 1.12;\n  margin-bottom: 1.5rem;\n  color: #ffffff;\n  text-shadow:\n    0 1px 2px rgba(0, 0, 0, 0.35),\n    0 2px 12px rgba(0, 0, 0, 0.25),\n    0 0 1px rgba(0, 0, 0, 0.5);\n}\n.branding-title--compact[_ngcontent-%COMP%] {\n  font-size: 2.75rem;\n  margin-bottom: 1.25rem;\n}\n.branding-description[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: rgba(255, 255, 255, 0.95);\n  margin-bottom: 2.25rem;\n  line-height: 1.65;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);\n}\n.branding-description--register[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n}\n.features-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-size: 1rem;\n  color: #f0f4ff;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);\n}\n.feature-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4));\n}\n.benefits-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.benefit-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n}\n.benefit-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.35));\n}\n.benefit-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.benefit-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n  color: #f0f4ff;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);\n}\n.benefit-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: rgba(255, 255, 255, 0.9);\n  line-height: 1.45;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);\n}\n.branding-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  align-self: flex-start;\n  margin-top: auto;\n  padding-top: 3rem;\n  padding-bottom: 0.25rem;\n  color: rgb(255, 255, 255);\n  font-size: 0.8125rem;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  text-shadow: 0 1px 2px rgb(255, 255, 255);\n}\n.branding-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n@keyframes _ngcontent-%COMP%_auth-field-message-in {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_auth-alert-in {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  text-align: center;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  margin-bottom: 0.5rem;\n  line-height: 1.2;\n  letter-spacing: -0.02em;\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--gray-500);\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n.form-header--register[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.social-auth[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.social-auth__divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin: 0 0 1rem;\n  font-size: 0.8125rem;\n  color: var(--gray-500);\n}\n.social-auth__divider[_ngcontent-%COMP%]::before, \n.social-auth__divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--gray-200);\n}\n.social-auth__divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.social-auth__buttons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.btn-social[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.65rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--gray-700);\n  background: var(--gray-50);\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius);\n  cursor: not-allowed;\n  opacity: 0.85;\n  transition: border-color var(--transition-fast), background var(--transition-fast);\n}\n.btn-social[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  border-radius: var(--radius);\n  margin-bottom: 1.5rem;\n  font-size: 0.875rem;\n  animation: _ngcontent-%COMP%_auth-alert-in 0.25s ease-out;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #166534;\n}\n.alert-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--gray-700);\n}\n.form-label[_ngcontent-%COMP%]   .optional[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: var(--gray-400);\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  width: 20px;\n  height: 20px;\n  color: var(--gray-400);\n  pointer-events: none;\n  z-index: 1;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem 1rem 1rem 3rem;\n  font-size: 0.9375rem;\n  border: 1px solid var(--gray-300);\n  border-radius: var(--radius);\n  background: #fff;\n  color: var(--gray-900);\n  transition:\n    border-color var(--transition-fast),\n    box-shadow var(--transition-fast),\n    background var(--transition-fast);\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--gray-400);\n}\n.form-input[_ngcontent-%COMP%]:hover {\n  border-color: var(--gray-400);\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 4px rgba(var(--primary-500-rgb), 0.12);\n  background: #fff;\n}\n.form-input--has-status[_ngcontent-%COMP%] {\n  padding-right: 2.75rem;\n}\n.form-input--password[_ngcontent-%COMP%] {\n  padding-right: 5.25rem;\n}\n.input-valid[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:not(.form-input--password) {\n  border-color: var(--success);\n}\n.input-valid[_ngcontent-%COMP%]   .form-input.form-input--password[_ngcontent-%COMP%] {\n  border-color: var(--success);\n}\n.input-valid[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  color: var(--gray-400);\n}\n.input-error[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  border-color: var(--error);\n}\n.input-error[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.12);\n}\n.input-error[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  color: var(--error);\n}\n.input-status[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n  z-index: 2;\n}\n.input-status[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.input-status--valid[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.input-status--invalid[_ngcontent-%COMP%] {\n  color: var(--error);\n}\n.input-wrapper[_ngcontent-%COMP%]:has(.toggle-password)   .input-status[_ngcontent-%COMP%] {\n  right: 3rem;\n}\n.toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  background: none;\n  border: none;\n  padding: 0;\n  color: var(--gray-400);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color var(--transition-fast);\n  z-index: 2;\n}\n.toggle-password[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.toggle-password[_ngcontent-%COMP%]:hover {\n  color: var(--gray-600);\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--error);\n  animation: _ngcontent-%COMP%_auth-field-message-in 0.2s ease-out;\n}\n.form-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.checkbox-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n}\n.checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: var(--primary-600);\n  cursor: pointer;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--gray-600);\n}\n.forgot-link[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--primary-600);\n  font-weight: 500;\n}\n.forgot-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-700);\n  text-decoration: underline;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 1rem 1.5rem;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  border-radius: var(--radius);\n  border: none;\n  cursor: pointer;\n  transition: all var(--transition-fast);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary-600);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-700);\n  transform: translateY(-1px);\n}\n.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-footer[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: center;\n}\n.form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--gray-600);\n}\n.auth-link[_ngcontent-%COMP%] {\n  color: var(--primary-600);\n  font-weight: 600;\n}\n.auth-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 480px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.password-strength[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.strength-bars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.bar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 4px;\n  background: var(--gray-200);\n  border-radius: 2px;\n  transition: all var(--transition-fast);\n}\n.bar.active.weak[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.bar.active.medium[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.bar.active.strong[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.strength-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--gray-500);\n}\n.password-requirements[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0.5rem 0 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.password-requirements[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n  color: var(--gray-500);\n  transition: color var(--transition-fast);\n}\n.password-requirements[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--gray-300);\n  flex-shrink: 0;\n  transition: background var(--transition-fast);\n}\n.password-requirements[_ngcontent-%COMP%]   li.password-requirements__met[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.password-requirements[_ngcontent-%COMP%]   li.password-requirements__met[_ngcontent-%COMP%]::before {\n  background: var(--success);\n}\n.terms-wrapper[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n.terms-wrapper[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  margin-top: 2px;\n  accent-color: var(--primary-600);\n  cursor: pointer;\n}\n.terms-wrapper[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--gray-600);\n  line-height: 1.5;\n}\n.terms-wrapper[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary-600);\n  font-weight: 500;\n}\n.terms-wrapper[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.terms-wrapper[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  margin-left: 26px;\n}\n.btn-register-submit[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  padding: 1rem 0;\n}\n.register-form[_ngcontent-%COMP%] {\n  gap: 1.25rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  gap: 0.375rem;\n}\n/*# sourceMappingURL=register.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink, AuthLayoutComponent], template: `<app-auth-layout>\r
  <div auth-branding class="branding-panel">\r
    <div class="branding-content">\r
      <div class="logo">\r
        <svg\r
          class="logo-mark"\r
          width="48"\r
          height="48"\r
          viewBox="0 0 48 48"\r
          fill="none"\r
          xmlns="http://www.w3.org/2000/svg"\r
          aria-hidden="true"\r
        >\r
          <defs>\r
            <linearGradient id="opsflow-register-logo-grad" x1="8" y1="4" x2="40" y2="44" gradientUnits="userSpaceOnUse">\r
              <stop stop-color="#93c5fd" />\r
              <stop offset="1" stop-color="#2563eb" />\r
            </linearGradient>\r
          </defs>\r
          <rect width="48" height="48" rx="12" fill="url(#opsflow-register-logo-grad)" />\r
          <path\r
            d="M14 24L22 32L34 16"\r
            stroke="white"\r
            stroke-width="3"\r
            stroke-linecap="round"\r
            stroke-linejoin="round"\r
          />\r
        </svg>\r
        <span class="logo-text">OpsFlow</span>\r
      </div>\r
\r
      <h1 class="branding-title branding-title--compact">Comienza tu prueba gratuita</h1>\r
      <p class="branding-description branding-description--register">\r
        Unete a miles de empresas que ya optimizan sus operaciones con OpsFlow.\r
      </p>\r
\r
      <div class="benefits-list">\r
        <div class="benefit-item">\r
          <div class="benefit-icon">\r
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
              <polyline points="20 6 9 17 4 12" />\r
            </svg>\r
          </div>\r
          <div class="benefit-content">\r
            <h4>14 dias de prueba gratuita</h4>\r
            <p>Sin tarjeta de credito requerida</p>\r
          </div>\r
        </div>\r
        <div class="benefit-item">\r
          <div class="benefit-icon">\r
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
              <polyline points="20 6 9 17 4 12" />\r
            </svg>\r
          </div>\r
          <div class="benefit-content">\r
            <h4>Soporte 24/7</h4>\r
            <p>Equipo de expertos a tu disposicion</p>\r
          </div>\r
        </div>\r
        <div class="benefit-item">\r
          <div class="benefit-icon">\r
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
              <polyline points="20 6 9 17 4 12" />\r
            </svg>\r
          </div>\r
          <div class="benefit-content">\r
            <h4>Configuracion rapida</h4>\r
            <p>Listo en menos de 5 minutos</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="branding-footer">\r
      <p>&copy; 2024 OpsFlow. Todos los derechos reservados.</p>\r
    </div>\r
  </div>\r
\r
  <div auth-form>\r
    <div class="form-container">\r
      <div class="form-header form-header--register">\r
        <h2>Crear cuenta</h2>\r
        <p>Completa el formulario para comenzar</p>\r
      </div>\r
\r
      <div class="social-auth" aria-label="Registro con proveedores externos">\r
        <p class="social-auth__divider"><span>O continua con</span></p>\r
        <div class="social-auth__buttons">\r
          <button type="button" class="btn-social" disabled title="Proximamente">Google</button>\r
          <button type="button" class="btn-social" disabled title="Proximamente">GitHub</button>\r
        </div>\r
      </div>\r
\r
      @if (errorMessage()) {\r
        <div class="alert alert-error" role="alert" aria-live="polite">\r
          <svg class="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
            <circle cx="12" cy="12" r="10" />\r
            <line x1="15" y1="9" x2="9" y2="15" />\r
            <line x1="9" y1="9" x2="15" y2="15" />\r
          </svg>\r
          <span>{{ errorMessage() }}</span>\r
        </div>\r
      }\r
\r
      @if (successMessage()) {\r
        <div class="alert alert-success" role="status" aria-live="polite">\r
          <svg class="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>\r
            <polyline points="22 4 12 14.01 9 11.01"></polyline>\r
          </svg>\r
          <span>{{ successMessage() }}</span>\r
        </div>\r
      }\r
\r
      <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" class="auth-form register-form">\r
        <div class="form-row">\r
          <div class="form-group">\r
            <label for="firstName" class="form-label">Nombre</label>\r
            <div\r
              class="input-wrapper"\r
              [class.input-error]="isFieldInvalid('firstName')"\r
              [class.input-valid]="isFieldValid('firstName')"\r
            >\r
              <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />\r
                <circle cx="12" cy="7" r="4" />\r
              </svg>\r
              <input\r
                type="text"\r
                id="firstName"\r
                formControlName="firstName"\r
                class="form-input form-input--has-status"\r
                placeholder="Tu nombre"\r
                [attr.aria-invalid]="isFieldInvalid('firstName')"\r
              />\r
              @if (isFieldValid('firstName')) {\r
                <span class="input-status input-status--valid" aria-hidden="true">\r
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
                    <polyline points="20 6 9 17 4 12" />\r
                  </svg>\r
                </span>\r
              }\r
              @if (isFieldInvalid('firstName')) {\r
                <span class="input-status input-status--invalid" aria-hidden="true">\r
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <circle cx="12" cy="12" r="10" />\r
                    <line x1="15" y1="9" x2="9" y2="15" />\r
                    <line x1="9" y1="9" x2="15" y2="15" />\r
                  </svg>\r
                </span>\r
              }\r
            </div>\r
            @if (isFieldInvalid('firstName')) {\r
              <span class="field-error">El nombre es requerido</span>\r
            }\r
          </div>\r
\r
          <div class="form-group">\r
            <label for="lastName" class="form-label">Apellido</label>\r
            <div\r
              class="input-wrapper"\r
              [class.input-error]="isFieldInvalid('lastName')"\r
              [class.input-valid]="isFieldValid('lastName')"\r
            >\r
              <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />\r
                <circle cx="12" cy="7" r="4" />\r
              </svg>\r
              <input\r
                type="text"\r
                id="lastName"\r
                formControlName="lastName"\r
                class="form-input form-input--has-status"\r
                placeholder="Tu apellido"\r
                [attr.aria-invalid]="isFieldInvalid('lastName')"\r
              />\r
              @if (isFieldValid('lastName')) {\r
                <span class="input-status input-status--valid" aria-hidden="true">\r
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
                    <polyline points="20 6 9 17 4 12" />\r
                  </svg>\r
                </span>\r
              }\r
              @if (isFieldInvalid('lastName')) {\r
                <span class="input-status input-status--invalid" aria-hidden="true">\r
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <circle cx="12" cy="12" r="10" />\r
                    <line x1="15" y1="9" x2="9" y2="15" />\r
                    <line x1="9" y1="9" x2="15" y2="15" />\r
                  </svg>\r
                </span>\r
              }\r
            </div>\r
            @if (isFieldInvalid('lastName')) {\r
              <span class="field-error">El apellido es requerido</span>\r
            }\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="username" class="form-label">Username</label>\r
          <div\r
            class="input-wrapper"\r
            [class.input-error]="isFieldInvalid('username')"\r
            [class.input-valid]="isFieldValid('username')"\r
          >\r
            <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />\r
              <circle cx="12" cy="7" r="4" />\r
            </svg>\r
            <input\r
              type="text"\r
              id="username"\r
              formControlName="username"\r
              class="form-input form-input--has-status"\r
              placeholder="Tu username"\r
              [attr.aria-invalid]="isFieldInvalid('username')"\r
            />\r
            @if (isFieldValid('username')) {\r
              <span class="input-status input-status--valid" aria-hidden="true">\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
                  <polyline points="20 6 9 17 4 12" />\r
                </svg>\r
              </span>\r
            }\r
            @if (isFieldInvalid('username')) {\r
              <span class="input-status input-status--invalid" aria-hidden="true">\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <circle cx="12" cy="12" r="10" />\r
                  <line x1="15" y1="9" x2="9" y2="15" />\r
                  <line x1="9" y1="9" x2="15" y2="15" />\r
                </svg>\r
              </span>\r
            }\r
          </div>\r
          @if (isFieldInvalid('username')) {\r
            <span class="field-error">El username es requerido</span>\r
          }\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="email" class="form-label">Correo electronico</label>\r
          <div\r
            class="input-wrapper"\r
            [class.input-error]="isFieldInvalid('email')"\r
            [class.input-valid]="isFieldValid('email')"\r
          >\r
            <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />\r
              <polyline points="22,6 12,13 2,6" />\r
            </svg>\r
            <input\r
              type="email"\r
              id="email"\r
              formControlName="email"\r
              class="form-input form-input--has-status"\r
              placeholder="correo@ejemplo.com"\r
              autocomplete="email"\r
              [attr.aria-invalid]="isFieldInvalid('email')"\r
            />\r
            @if (isFieldValid('email')) {\r
              <span class="input-status input-status--valid" aria-hidden="true">\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
                  <polyline points="20 6 9 17 4 12" />\r
                </svg>\r
              </span>\r
            }\r
            @if (isFieldInvalid('email')) {\r
              <span class="input-status input-status--invalid" aria-hidden="true">\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <circle cx="12" cy="12" r="10" />\r
                  <line x1="15" y1="9" x2="9" y2="15" />\r
                  <line x1="9" y1="9" x2="15" y2="15" />\r
                </svg>\r
              </span>\r
            }\r
          </div>\r
          @if (isFieldInvalid('email')) {\r
            <span class="field-error">\r
              @if (registerForm.get('email')?.hasError('required')) {\r
                El correo es requerido\r
              } @else if (registerForm.get('email')?.hasError('email')) {\r
                Ingresa un correo valido\r
              }\r
            </span>\r
          }\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="phone" class="form-label">Telefono <span class="optional">(Opcional)</span></label>\r
          <div class="input-wrapper">\r
            <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
              <path\r
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"\r
              />\r
            </svg>\r
            <input\r
              type="tel"\r
              id="phone"\r
              formControlName="phone"\r
              class="form-input"\r
              placeholder="+1 234 567 890"\r
            />\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="password" class="form-label">Contrasena</label>\r
          <div\r
            class="input-wrapper"\r
            [class.input-error]="isFieldInvalid('password')"\r
            [class.input-valid]="isFieldValid('password')"\r
          >\r
            <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />\r
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />\r
            </svg>\r
            <input\r
              [type]="showPassword() ? 'text' : 'password'"\r
              id="password"\r
              formControlName="password"\r
              class="form-input form-input--password"\r
              placeholder="Minimo 6 caracteres"\r
              autocomplete="new-password"\r
              [attr.aria-invalid]="isFieldInvalid('password')"\r
            />\r
            @if (isFieldValid('password')) {\r
              <span class="input-status input-status--valid" aria-hidden="true">\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
                  <polyline points="20 6 9 17 4 12" />\r
                </svg>\r
              </span>\r
            }\r
            @if (isFieldInvalid('password')) {\r
              <span class="input-status input-status--invalid" aria-hidden="true">\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <circle cx="12" cy="12" r="10" />\r
                  <line x1="15" y1="9" x2="9" y2="15" />\r
                  <line x1="9" y1="9" x2="15" y2="15" />\r
                </svg>\r
              </span>\r
            }\r
            <button\r
              type="button"\r
              class="toggle-password"\r
              (click)="togglePassword()"\r
              [attr.aria-label]="showPassword() ? 'Ocultar contrasena' : 'Mostrar contrasena'"\r
            >\r
              @if (showPassword()) {\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
                  <path\r
                    d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"\r
                  />\r
                  <line x1="1" y1="1" x2="23" y2="23" />\r
                </svg>\r
              } @else {\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />\r
                  <circle cx="12" cy="12" r="3" />\r
                </svg>\r
              }\r
            </button>\r
          </div>\r
          @if (isFieldInvalid('password')) {\r
            <span class="field-error">\r
              @if (registerForm.get('password')?.hasError('required')) {\r
                La contrasena es requerida\r
              } @else if (registerForm.get('password')?.hasError('minlength')) {\r
                La contrasena debe tener al menos 6 caracteres\r
              }\r
            </span>\r
          }\r
\r
          <div class="password-strength">\r
            <div class="strength-bars">\r
              <div class="bar" [class.active]="passwordStrength() >= 1" [class.weak]="passwordStrength() === 1" [class.medium]="passwordStrength() === 2" [class.strong]="passwordStrength() >= 3"></div>\r
              <div class="bar" [class.active]="passwordStrength() >= 2" [class.medium]="passwordStrength() === 2" [class.strong]="passwordStrength() >= 3"></div>\r
              <div class="bar" [class.active]="passwordStrength() >= 3" [class.strong]="passwordStrength() >= 3"></div>\r
            </div>\r
            <span class="strength-text">\r
              @if (passwordStrength() === 1) {\r
                Debil\r
              } @else if (passwordStrength() === 2) {\r
                Media\r
              } @else if (passwordStrength() >= 3) {\r
                Fuerte\r
              }\r
            </span>\r
          </div>\r
\r
          <ul class="password-requirements" aria-label="Requisitos de contrasena">\r
            <li [class.password-requirements__met]="pwdReqMinLength()">Al menos 6 caracteres</li>\r
            <li [class.password-requirements__met]="pwdReqMixedCase()">Mayuscula y minuscula</li>\r
            <li [class.password-requirements__met]="pwdReqNumber()">Al menos un numero</li>\r
            <li [class.password-requirements__met]="pwdReqSpecial()">Al menos un caracter especial</li>\r
          </ul>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="confirmPassword" class="form-label">Confirmar contrasena</label>\r
          <div\r
            class="input-wrapper"\r
            [class.input-error]="isFieldInvalid('confirmPassword')"\r
            [class.input-valid]="isFieldValid('confirmPassword')"\r
          >\r
            <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />\r
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />\r
            </svg>\r
            <input\r
              type="password"\r
              id="confirmPassword"\r
              formControlName="confirmPassword"\r
              class="form-input form-input--has-status"\r
              placeholder="Repite tu contrasena"\r
              autocomplete="new-password"\r
              [attr.aria-invalid]="isFieldInvalid('confirmPassword')"\r
            />\r
            @if (isFieldValid('confirmPassword')) {\r
              <span class="input-status input-status--valid" aria-hidden="true">\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
                  <polyline points="20 6 9 17 4 12" />\r
                </svg>\r
              </span>\r
            }\r
            @if (isFieldInvalid('confirmPassword')) {\r
              <span class="input-status input-status--invalid" aria-hidden="true">\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <circle cx="12" cy="12" r="10" />\r
                  <line x1="15" y1="9" x2="9" y2="15" />\r
                  <line x1="9" y1="9" x2="15" y2="15" />\r
                </svg>\r
              </span>\r
            }\r
          </div>\r
          @if (isFieldInvalid('confirmPassword')) {\r
            <span class="field-error">\r
              @if (registerForm.get('confirmPassword')?.hasError('required')) {\r
                Confirma tu contrasena\r
              } @else if (registerForm.get('confirmPassword')?.hasError('passwordMismatch')) {\r
                Las contrasenas no coinciden\r
              }\r
            </span>\r
          }\r
        </div>\r
\r
        <div class="terms-wrapper">\r
          <label class="checkbox-wrapper">\r
            <input type="checkbox" formControlName="acceptTerms" />\r
            <span class="checkbox-label">\r
              Acepto los <a href="/terms" target="_blank">Terminos de Servicio</a> y la\r
              <a href="/privacy" target="_blank">Politica de Privacidad</a>\r
            </span>\r
          </label>\r
          @if (isFieldInvalid('acceptTerms')) {\r
            <span class="field-error">Debes aceptar los terminos</span>\r
          }\r
        </div>\r
\r
        <button type="submit" class="btn btn-primary btn-register-submit" [disabled]="registerForm.invalid || isLoading()">\r
          @if (isLoading()) {\r
            <svg class="spinner" viewBox="0 0 24 24" aria-hidden="true">\r
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="32" stroke-linecap="round" />\r
            </svg>\r
            Creando cuenta...\r
          } @else {\r
            Crear cuenta\r
          }\r
        </button>\r
      </form>\r
\r
      <div class="form-footer">\r
        <p>\r
          Ya tienes una cuenta?\r
          <a routerLink="/auth/login" class="auth-link">Inicia sesion</a>\r
        </p>\r
      </div>\r
    </div>\r
  </div>\r
</app-auth-layout>\r
`, styles: ['/* src/app/features/auth/register/register.component.scss */\n.branding-panel {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100%;\n  flex: 1;\n}\n.branding-content {\n  max-width: 420px;\n  padding: 0;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 2.25rem;\n}\n.logo-mark {\n  flex-shrink: 0;\n  border-radius: 12px;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.12);\n}\n.logo-text {\n  font-size: 1.75rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28), 0 2px 10px rgba(0, 0, 0, 0.2);\n}\n.branding-title {\n  font-size: 3rem;\n  font-weight: 700;\n  line-height: 1.12;\n  margin-bottom: 1.5rem;\n  color: #ffffff;\n  text-shadow:\n    0 1px 2px rgba(0, 0, 0, 0.35),\n    0 2px 12px rgba(0, 0, 0, 0.25),\n    0 0 1px rgba(0, 0, 0, 0.5);\n}\n.branding-title--compact {\n  font-size: 2.75rem;\n  margin-bottom: 1.25rem;\n}\n.branding-description {\n  font-size: 1.125rem;\n  color: rgba(255, 255, 255, 0.95);\n  margin-bottom: 2.25rem;\n  line-height: 1.65;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);\n}\n.branding-description--register {\n  font-size: 1.0625rem;\n}\n.features-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.feature-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-size: 1rem;\n  color: #f0f4ff;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);\n}\n.feature-icon {\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4));\n}\n.benefits-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.benefit-item {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n}\n.benefit-icon {\n  width: 32px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.35));\n}\n.benefit-icon svg {\n  width: 16px;\n  height: 16px;\n}\n.benefit-content h4 {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n  color: #f0f4ff;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);\n}\n.benefit-content p {\n  font-size: 0.8125rem;\n  color: rgba(255, 255, 255, 0.9);\n  line-height: 1.45;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);\n}\n.branding-footer {\n  width: 100%;\n  max-width: 420px;\n  align-self: flex-start;\n  margin-top: auto;\n  padding-top: 3rem;\n  padding-bottom: 0.25rem;\n  color: rgb(255, 255, 255);\n  font-size: 0.8125rem;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  text-shadow: 0 1px 2px rgb(255, 255, 255);\n}\n.branding-footer p {\n  margin: 0;\n}\n@keyframes auth-field-message-in {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes auth-alert-in {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-header {\n  margin-bottom: 1.5rem;\n  text-align: center;\n}\n.form-header h2 {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  margin-bottom: 0.5rem;\n  line-height: 1.2;\n  letter-spacing: -0.02em;\n}\n.form-header p {\n  color: var(--gray-500);\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n.form-header--register h2 {\n  font-size: 1.5rem;\n}\n.social-auth {\n  margin-bottom: 1.5rem;\n}\n.social-auth__divider {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin: 0 0 1rem;\n  font-size: 0.8125rem;\n  color: var(--gray-500);\n}\n.social-auth__divider::before,\n.social-auth__divider::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--gray-200);\n}\n.social-auth__divider span {\n  white-space: nowrap;\n}\n.social-auth__buttons {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.btn-social {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.65rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--gray-700);\n  background: var(--gray-50);\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius);\n  cursor: not-allowed;\n  opacity: 0.85;\n  transition: border-color var(--transition-fast), background var(--transition-fast);\n}\n.btn-social:disabled {\n  cursor: not-allowed;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  border-radius: var(--radius);\n  margin-bottom: 1.5rem;\n  font-size: 0.875rem;\n  animation: auth-alert-in 0.25s ease-out;\n}\n.alert-error {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n}\n.alert-success {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #166534;\n}\n.alert-icon {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.auth-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--gray-700);\n}\n.form-label .optional {\n  font-weight: 400;\n  color: var(--gray-400);\n}\n.input-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-icon {\n  position: absolute;\n  left: 1rem;\n  width: 20px;\n  height: 20px;\n  color: var(--gray-400);\n  pointer-events: none;\n  z-index: 1;\n}\n.form-input {\n  width: 100%;\n  padding: 1rem 1rem 1rem 3rem;\n  font-size: 0.9375rem;\n  border: 1px solid var(--gray-300);\n  border-radius: var(--radius);\n  background: #fff;\n  color: var(--gray-900);\n  transition:\n    border-color var(--transition-fast),\n    box-shadow var(--transition-fast),\n    background var(--transition-fast);\n}\n.form-input::placeholder {\n  color: var(--gray-400);\n}\n.form-input:hover {\n  border-color: var(--gray-400);\n}\n.form-input:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 4px rgba(var(--primary-500-rgb), 0.12);\n  background: #fff;\n}\n.form-input--has-status {\n  padding-right: 2.75rem;\n}\n.form-input--password {\n  padding-right: 5.25rem;\n}\n.input-valid .form-input:not(.form-input--password) {\n  border-color: var(--success);\n}\n.input-valid .form-input.form-input--password {\n  border-color: var(--success);\n}\n.input-valid .input-icon {\n  color: var(--gray-400);\n}\n.input-error .form-input {\n  border-color: var(--error);\n}\n.input-error .form-input:focus {\n  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.12);\n}\n.input-error .input-icon {\n  color: var(--error);\n}\n.input-status {\n  position: absolute;\n  right: 0.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n  z-index: 2;\n}\n.input-status svg {\n  width: 18px;\n  height: 18px;\n}\n.input-status--valid {\n  color: var(--success);\n}\n.input-status--invalid {\n  color: var(--error);\n}\n.input-wrapper:has(.toggle-password) .input-status {\n  right: 3rem;\n}\n.toggle-password {\n  position: absolute;\n  right: 1rem;\n  background: none;\n  border: none;\n  padding: 0;\n  color: var(--gray-400);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color var(--transition-fast);\n  z-index: 2;\n}\n.toggle-password svg {\n  width: 20px;\n  height: 20px;\n}\n.toggle-password:hover {\n  color: var(--gray-600);\n}\n.field-error {\n  font-size: 0.8125rem;\n  color: var(--error);\n  animation: auth-field-message-in 0.2s ease-out;\n}\n.form-options {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.checkbox-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n}\n.checkbox-wrapper input[type=checkbox] {\n  width: 18px;\n  height: 18px;\n  accent-color: var(--primary-600);\n  cursor: pointer;\n}\n.checkbox-label {\n  font-size: 0.875rem;\n  color: var(--gray-600);\n}\n.forgot-link {\n  font-size: 0.875rem;\n  color: var(--primary-600);\n  font-weight: 500;\n}\n.forgot-link:hover {\n  color: var(--primary-700);\n  text-decoration: underline;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 1rem 1.5rem;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  border-radius: var(--radius);\n  border: none;\n  cursor: pointer;\n  transition: all var(--transition-fast);\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: var(--primary-600);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: var(--primary-700);\n  transform: translateY(-1px);\n}\n.btn-primary:active:not(:disabled) {\n  transform: translateY(0);\n}\n.spinner {\n  width: 20px;\n  height: 20px;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-footer {\n  margin-top: 2rem;\n  text-align: center;\n}\n.form-footer p {\n  font-size: 0.875rem;\n  color: var(--gray-600);\n}\n.auth-link {\n  color: var(--primary-600);\n  font-weight: 600;\n}\n.auth-link:hover {\n  text-decoration: underline;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 480px) {\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n}\n.password-strength {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.strength-bars {\n  display: flex;\n  gap: 4px;\n}\n.bar {\n  width: 48px;\n  height: 4px;\n  background: var(--gray-200);\n  border-radius: 2px;\n  transition: all var(--transition-fast);\n}\n.bar.active.weak {\n  background: #ef4444;\n}\n.bar.active.medium {\n  background: #f59e0b;\n}\n.bar.active.strong {\n  background: #10b981;\n}\n.strength-text {\n  font-size: 0.75rem;\n  color: var(--gray-500);\n}\n.password-requirements {\n  list-style: none;\n  margin: 0.5rem 0 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.password-requirements li {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n  color: var(--gray-500);\n  transition: color var(--transition-fast);\n}\n.password-requirements li::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--gray-300);\n  flex-shrink: 0;\n  transition: background var(--transition-fast);\n}\n.password-requirements li.password-requirements__met {\n  color: var(--success);\n}\n.password-requirements li.password-requirements__met::before {\n  background: var(--success);\n}\n.terms-wrapper .checkbox-wrapper {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n.terms-wrapper .checkbox-wrapper input[type=checkbox] {\n  width: 18px;\n  height: 18px;\n  margin-top: 2px;\n  accent-color: var(--primary-600);\n  cursor: pointer;\n}\n.terms-wrapper .checkbox-label {\n  font-size: 0.8125rem;\n  color: var(--gray-600);\n  line-height: 1.5;\n}\n.terms-wrapper .checkbox-label a {\n  color: var(--primary-600);\n  font-weight: 500;\n}\n.terms-wrapper .checkbox-label a:hover {\n  text-decoration: underline;\n}\n.terms-wrapper .field-error {\n  margin-top: 0.25rem;\n  margin-left: 26px;\n}\n.btn-register-submit {\n  margin-top: 0.5rem;\n}\n.form-container {\n  width: 100%;\n  max-width: 480px;\n  padding: 1rem 0;\n}\n.register-form {\n  gap: 1.25rem;\n}\n.form-group {\n  gap: 0.375rem;\n}\n/*# sourceMappingURL=register.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/features/auth/register/register.component.ts", lineNumber: 15 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-2OOOKA7S.js.map
