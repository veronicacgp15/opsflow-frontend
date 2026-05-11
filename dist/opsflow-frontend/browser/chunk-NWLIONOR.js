import {
  AuthLayoutComponent
} from "./chunk-SUORE4NG.js";
import {
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
  ActivatedRoute,
  CommonModule,
  Component,
  DestroyRef,
  Observable,
  Router,
  RouterLink,
  assertInInjectionContext,
  inject,
  setClassMetadata,
  signal,
  takeUntil,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6KLI64HZ.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((observer) => {
    const unregisterFn = destroyRef.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}

// src/app/features/auth/reset-password/reset-password.component.ts
function ResetPasswordComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "p", 30);
    \u0275\u0275text(2, " No hay un enlace valido en la URL. Solicita de nuevo el correo desde iniciar sesion, en Olvidaste tu contrasena. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 31);
    \u0275\u0275text(4, "Ir a iniciar sesion");
    \u0275\u0275elementEnd()();
  }
}
function ResetPasswordComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "p", 32);
    \u0275\u0275text(2, " Contrasena restablecida correctamente. Redirigiendo al inicio de sesion... ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 31);
    \u0275\u0275text(4, "Ir a iniciar sesion ahora");
    \u0275\u0275elementEnd()();
  }
}
function ResetPasswordComponent_Conditional_51_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 62);
    \u0275\u0275element(2, "circle", 63)(3, "line", 64)(4, "line", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage());
  }
}
function ResetPasswordComponent_Conditional_51_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 66);
    \u0275\u0275element(2, "polyline", 67);
    \u0275\u0275elementEnd()();
  }
}
function ResetPasswordComponent_Conditional_51_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 68);
    \u0275\u0275element(2, "circle", 63)(3, "line", 64)(4, "line", 65);
    \u0275\u0275elementEnd()();
  }
}
function ResetPasswordComponent_Conditional_51_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 49);
    \u0275\u0275element(1, "path", 69)(2, "line", 70);
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_Conditional_51_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 49);
    \u0275\u0275element(1, "path", 71)(2, "circle", 72);
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_Conditional_51_Conditional_24_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " La contrasena es requerida ");
  }
}
function ResetPasswordComponent_Conditional_51_Conditional_24_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " La contrasena debe tener al menos 6 caracteres ");
  }
}
function ResetPasswordComponent_Conditional_51_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275template(1, ResetPasswordComponent_Conditional_51_Conditional_24_Conditional_1_Template, 1, 0)(2, ResetPasswordComponent_Conditional_51_Conditional_24_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r1.resetForm.get("newPassword")) == null ? null : tmp_2_0.hasError("required")) ? 1 : ((tmp_2_0 = ctx_r1.resetForm.get("newPassword")) == null ? null : tmp_2_0.hasError("minlength")) ? 2 : -1);
  }
}
function ResetPasswordComponent_Conditional_51_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Debil ");
  }
}
function ResetPasswordComponent_Conditional_51_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Media ");
  }
}
function ResetPasswordComponent_Conditional_51_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Fuerte ");
  }
}
function ResetPasswordComponent_Conditional_51_Conditional_51_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Confirma tu contrasena ");
  }
}
function ResetPasswordComponent_Conditional_51_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275template(1, ResetPasswordComponent_Conditional_51_Conditional_51_Conditional_1_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r1.resetForm.get("confirmPassword")) == null ? null : tmp_2_0.hasError("required")) ? 1 : -1);
  }
}
function ResetPasswordComponent_Conditional_51_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1, "Las contrasenas no coinciden");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_Conditional_51_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 73);
    \u0275\u0275element(1, "circle", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Aplicando cambio... ");
  }
}
function ResetPasswordComponent_Conditional_51_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Guardar cambio de contrasena ");
  }
}
function ResetPasswordComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "p", 34)(2, "span");
    \u0275\u0275text(3, "O continua con");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 35)(5, "button", 36);
    \u0275\u0275text(6, "Google");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 36);
    \u0275\u0275text(8, "GitHub");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, ResetPasswordComponent_Conditional_51_Conditional_9_Template, 7, 1, "div", 37);
    \u0275\u0275elementStart(10, "form", 38);
    \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_Conditional_51_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(11, "div", 39)(12, "label", 40);
    \u0275\u0275text(13, "Nueva contrasena");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 42);
    \u0275\u0275element(16, "rect", 43)(17, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(18, "input", 45);
    \u0275\u0275template(19, ResetPasswordComponent_Conditional_51_Conditional_19_Template, 3, 0, "span", 46)(20, ResetPasswordComponent_Conditional_51_Conditional_20_Template, 5, 0, "span", 47);
    \u0275\u0275elementStart(21, "button", 48);
    \u0275\u0275listener("click", function ResetPasswordComponent_Conditional_51_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePassword());
    });
    \u0275\u0275template(22, ResetPasswordComponent_Conditional_51_Conditional_22_Template, 3, 0, ":svg:svg", 49)(23, ResetPasswordComponent_Conditional_51_Conditional_23_Template, 3, 0, ":svg:svg", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, ResetPasswordComponent_Conditional_51_Conditional_24_Template, 3, 1, "span", 50);
    \u0275\u0275elementStart(25, "div", 51)(26, "div", 52);
    \u0275\u0275element(27, "div", 53)(28, "div", 53)(29, "div", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 54);
    \u0275\u0275template(31, ResetPasswordComponent_Conditional_51_Conditional_31_Template, 1, 0)(32, ResetPasswordComponent_Conditional_51_Conditional_32_Template, 1, 0)(33, ResetPasswordComponent_Conditional_51_Conditional_33_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "ul", 55)(35, "li");
    \u0275\u0275text(36, "Al menos 6 caracteres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "li");
    \u0275\u0275text(38, "Mayuscula y minuscula");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "li");
    \u0275\u0275text(40, "Al menos un numero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "li");
    \u0275\u0275text(42, "Al menos un caracter especial");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 39)(44, "label", 56);
    \u0275\u0275text(45, "Confirmar nueva contrasena");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(47, "svg", 42);
    \u0275\u0275element(48, "rect", 43)(49, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(50, "input", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, ResetPasswordComponent_Conditional_51_Conditional_51_Template, 2, 1, "span", 58)(52, ResetPasswordComponent_Conditional_51_Conditional_52_Template, 2, 0, "span", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 59);
    \u0275\u0275template(54, ResetPasswordComponent_Conditional_51_Conditional_54_Template, 3, 0)(55, ResetPasswordComponent_Conditional_51_Conditional_55_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 60)(57, "p")(58, "a", 61);
    \u0275\u0275text(59, "Volver al inicio de sesion");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.errorMessage() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.resetForm);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("input-error", ctx_r1.isFieldInvalid("newPassword"))("input-valid", ctx_r1.isFieldValid("newPassword"));
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r1.showPassword() ? "text" : "password");
    \u0275\u0275attribute("aria-invalid", ctx_r1.isFieldInvalid("newPassword"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldValid("newPassword") ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("newPassword") ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.showPassword() ? "Ocultar contrasena" : "Mostrar contrasena");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showPassword() ? 22 : 23);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("newPassword") ? 24 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.passwordStrength() >= 1)("weak", ctx_r1.passwordStrength() === 1)("medium", ctx_r1.passwordStrength() === 2)("strong", ctx_r1.passwordStrength() >= 3);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.passwordStrength() >= 2)("medium", ctx_r1.passwordStrength() === 2)("strong", ctx_r1.passwordStrength() >= 3);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.passwordStrength() >= 3)("strong", ctx_r1.passwordStrength() >= 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.passwordStrength() === 1 ? 31 : ctx_r1.passwordStrength() === 2 ? 32 : ctx_r1.passwordStrength() >= 3 ? 33 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("password-requirements__met", ctx_r1.pwdReqMinLength());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("password-requirements__met", ctx_r1.pwdReqMixedCase());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("password-requirements__met", ctx_r1.pwdReqNumber());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("password-requirements__met", ctx_r1.pwdReqSpecial());
    \u0275\u0275advance(5);
    \u0275\u0275classProp("input-error", ctx_r1.isFieldInvalid("confirmPassword") || ctx_r1.formHasMismatch())("input-valid", ctx_r1.isFieldValid("confirmPassword") && !ctx_r1.formHasMismatch());
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r1.showPassword() ? "text" : "password");
    \u0275\u0275attribute("aria-invalid", ctx_r1.isFieldInvalid("confirmPassword") || ctx_r1.formHasMismatch());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("confirmPassword") ? 51 : ctx_r1.formHasMismatch() ? 52 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.resetForm.invalid || ctx_r1.isLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLoading() ? 54 : 55);
  }
}
function passwordMatchValidator(control) {
  const newPassword = control.get("newPassword")?.value;
  const confirmPassword = control.get("confirmPassword")?.value;
  if (confirmPassword == null || confirmPassword === "") {
    return null;
  }
  return newPassword === confirmPassword ? null : { mismatch: true };
}
var ResetPasswordComponent = class _ResetPasswordComponent {
  fb;
  route;
  router;
  authService;
  destroyRef = inject(DestroyRef);
  resetForm;
  showPassword = signal(false);
  errorMessage = signal(null);
  isLoading = signal(false);
  resetToken = signal(null);
  missingToken = signal(false);
  isSuccess = signal(false);
  passwordStrength = signal(0);
  constructor(fb, route, router, authService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.authService = authService;
    this.resetForm = this.fb.group({
      newPassword: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required]]
    }, { validators: passwordMatchValidator });
    this.route.queryParamMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const token = params.get("token")?.trim() ?? "";
      if (!token) {
        this.missingToken.set(true);
        this.resetToken.set(null);
      } else {
        this.missingToken.set(false);
        this.resetToken.set(token);
      }
    });
    this.resetForm.get("newPassword")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      this.calculatePasswordStrength(value ?? "");
    });
  }
  togglePassword() {
    this.showPassword.update((v) => !v);
  }
  isFieldInvalid(fieldName) {
    const field = this.resetForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  isFieldValid(fieldName) {
    const field = this.resetForm.get(fieldName);
    return !!(field && field.valid && (field.dirty || field.touched));
  }
  formHasMismatch() {
    return this.resetForm.hasError("mismatch") && this.resetForm.get("confirmPassword")?.touched === true;
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
  pwdReqMinLength() {
    const v = this.resetForm.get("newPassword")?.value ?? "";
    return v.length >= 6;
  }
  pwdReqMixedCase() {
    const v = this.resetForm.get("newPassword")?.value ?? "";
    return /[A-Z]/.test(v) && /[a-z]/.test(v);
  }
  pwdReqNumber() {
    const v = this.resetForm.get("newPassword")?.value ?? "";
    return /[0-9]/.test(v);
  }
  pwdReqSpecial() {
    const v = this.resetForm.get("newPassword")?.value ?? "";
    return /[^A-Za-z0-9]/.test(v);
  }
  onSubmit() {
    const token = this.resetToken();
    if (!token) {
      return;
    }
    if (this.resetForm.invalid) {
      Object.keys(this.resetForm.controls).forEach((key) => {
        this.resetForm.get(key)?.markAsTouched();
      });
      return;
    }
    this.errorMessage.set(null);
    this.isLoading.set(true);
    const { newPassword } = this.resetForm.value;
    this.authService.resetPassword(token, newPassword).subscribe({
      next: () => {
        this.isSuccess.set(true);
        this.isLoading.set(false);
        setTimeout(() => this.router.navigate(["/auth/login"]), 3e3);
      },
      error: (error) => {
        this.errorMessage.set(error.message);
        this.isLoading.set(false);
      }
    });
  }
  static \u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 52, vars: 1, consts: [["auth-branding", "", 1, "branding-panel"], [1, "branding-content"], [1, "logo"], ["width", "48", "height", "48", "viewBox", "0 0 48 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "aria-hidden", "true", 1, "logo-mark"], ["id", "opsflow-reset-logo-grad", "x1", "8", "y1", "4", "x2", "40", "y2", "44", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#93c5fd"], ["offset", "1", "stop-color", "#2563eb"], ["width", "48", "height", "48", "rx", "12", "fill", "url(#opsflow-reset-logo-grad)"], ["d", "M14 24L22 32L34 16", "stroke", "white", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "logo-text"], [1, "branding-title"], [1, "branding-description"], [1, "features-list"], [1, "feature-item"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "feature-icon"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], ["x1", "18", "y1", "20", "x2", "18", "y2", "10"], ["x1", "12", "y1", "20", "x2", "12", "y2", "4"], ["x1", "6", "y1", "20", "x2", "6", "y2", "14"], [1, "branding-footer"], ["auth-form", ""], [1, "form-container", "reset-password-panel"], [1, "form-header"], ["role", "alert", 1, "verify-card-inner"], ["role", "status", 1, "verify-card-inner"], [1, "verify-status-msg", "verify-status-msg--error"], ["routerLink", "/auth/login", 1, "btn", "btn-primary", "verify-cta"], [1, "verify-status-msg", "verify-status-msg--ok"], ["aria-label", "Acceso con proveedores externos", 1, "social-auth"], [1, "social-auth__divider"], [1, "social-auth__buttons"], ["type", "button", "disabled", "", "title", "Proximamente", 1, "btn-social"], ["role", "alert", "aria-live", "polite", 1, "alert", "alert-error"], [1, "auth-form", "reset-password-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "newPassword", 1, "form-label"], [1, "input-wrapper"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "input-icon"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], ["id", "newPassword", "formControlName", "newPassword", "placeholder", "Minimo 6 caracteres", "autocomplete", "new-password", 1, "form-input", "form-input--password", 3, "type"], ["aria-hidden", "true", 1, "input-status", "input-status--valid"], ["aria-hidden", "true", 1, "input-status", "input-status--invalid"], ["type", "button", 1, "toggle-password", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["id", "newPassword-error", 1, "field-error"], [1, "password-strength"], [1, "strength-bars"], [1, "bar"], [1, "strength-text"], ["aria-label", "Requisitos de contrasena", 1, "password-requirements"], ["for", "confirmPassword", 1, "form-label"], ["id", "confirmPassword", "formControlName", "confirmPassword", "placeholder", "Repite la nueva contrasena", "autocomplete", "new-password", 1, "form-input", "form-input--password", 3, "type"], [1, "field-error"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "form-footer"], ["routerLink", "/auth/login", 1, "auth-link"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "alert-icon"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["points", "20 6 9 17 4 12"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "spinner"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "3", "fill", "none", "stroke-dasharray", "32", "stroke-linecap", "round"]], template: function ResetPasswordComponent_Template(rf, ctx) {
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
      \u0275\u0275text(14, "Gestiona tu empresa de forma inteligente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 11);
      \u0275\u0275text(16, " Plataforma integral para la gestion de operaciones, equipos y proyectos empresariales. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 12)(18, "div", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 14);
      \u0275\u0275element(20, "path", 15)(21, "polyline", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(22, "span");
      \u0275\u0275text(23, "Control total de operaciones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(25, "svg", 14);
      \u0275\u0275element(26, "path", 17)(27, "circle", 18)(28, "path", 19)(29, "path", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(30, "span");
      \u0275\u0275text(31, "Gestion de equipos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(33, "svg", 14);
      \u0275\u0275element(34, "line", 21)(35, "line", 22)(36, "line", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(37, "span");
      \u0275\u0275text(38, "Reportes en tiempo real");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(39, "div", 24)(40, "p");
      \u0275\u0275text(41, "\xA9 2024 OpsFlow. Todos los derechos reservados.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 25)(43, "div", 26)(44, "div", 27)(45, "h2");
      \u0275\u0275text(46, "Restablecer contrasena");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "p");
      \u0275\u0275text(48, "Ingresa tu nueva contrasena");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(49, ResetPasswordComponent_Conditional_49_Template, 5, 0, "div", 28)(50, ResetPasswordComponent_Conditional_50_Template, 5, 0, "div", 29)(51, ResetPasswordComponent_Conditional_51_Template, 60, 49);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(49);
      \u0275\u0275conditional(ctx.missingToken() ? 49 : ctx.isSuccess() ? 50 : 51);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, AuthLayoutComponent], styles: ['\n\n.branding-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100%;\n  flex: 1;\n}\n.branding-content[_ngcontent-%COMP%] {\n  max-width: 420px;\n  padding: 0;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 2.25rem;\n}\n.logo-mark[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  border-radius: 12px;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.12);\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28), 0 2px 10px rgba(0, 0, 0, 0.2);\n}\n.branding-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n  line-height: 1.12;\n  margin-bottom: 1.5rem;\n  color: #ffffff;\n  text-shadow:\n    0 1px 2px rgba(0, 0, 0, 0.35),\n    0 2px 12px rgba(0, 0, 0, 0.25),\n    0 0 1px rgba(0, 0, 0, 0.5);\n}\n.branding-title--compact[_ngcontent-%COMP%] {\n  font-size: 2.75rem;\n  margin-bottom: 1.25rem;\n}\n.branding-description[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: rgba(255, 255, 255, 0.95);\n  margin-bottom: 2.25rem;\n  line-height: 1.65;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);\n}\n.branding-description--register[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n}\n.features-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-size: 1rem;\n  color: #f0f4ff;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);\n}\n.feature-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4));\n}\n.benefits-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.benefit-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n}\n.benefit-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.35));\n}\n.benefit-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.benefit-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n  color: #f0f4ff;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);\n}\n.benefit-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: rgba(255, 255, 255, 0.9);\n  line-height: 1.45;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);\n}\n.branding-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  align-self: flex-start;\n  margin-top: auto;\n  padding-top: 3rem;\n  padding-bottom: 0.25rem;\n  color: rgb(255, 255, 255);\n  font-size: 0.8125rem;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  text-shadow: 0 1px 2px rgb(255, 255, 255);\n}\n.branding-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n@keyframes _ngcontent-%COMP%_auth-field-message-in {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_auth-alert-in {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  text-align: center;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  margin-bottom: 0.5rem;\n  line-height: 1.2;\n  letter-spacing: -0.02em;\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--gray-500);\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n.form-header--register[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.social-auth[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.social-auth__divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin: 0 0 1rem;\n  font-size: 0.8125rem;\n  color: var(--gray-500);\n}\n.social-auth__divider[_ngcontent-%COMP%]::before, \n.social-auth__divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--gray-200);\n}\n.social-auth__divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.social-auth__buttons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.btn-social[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.65rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--gray-700);\n  background: var(--gray-50);\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius);\n  cursor: not-allowed;\n  opacity: 0.85;\n  transition: border-color var(--transition-fast), background var(--transition-fast);\n}\n.btn-social[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  border-radius: var(--radius);\n  margin-bottom: 1.5rem;\n  font-size: 0.875rem;\n  animation: _ngcontent-%COMP%_auth-alert-in 0.25s ease-out;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #166534;\n}\n.alert-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--gray-700);\n}\n.form-label[_ngcontent-%COMP%]   .optional[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: var(--gray-400);\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  width: 20px;\n  height: 20px;\n  color: var(--gray-400);\n  pointer-events: none;\n  z-index: 1;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem 1rem 1rem 3rem;\n  font-size: 0.9375rem;\n  border: 1px solid var(--gray-300);\n  border-radius: var(--radius);\n  background: #fff;\n  color: var(--gray-900);\n  transition:\n    border-color var(--transition-fast),\n    box-shadow var(--transition-fast),\n    background var(--transition-fast);\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--gray-400);\n}\n.form-input[_ngcontent-%COMP%]:hover {\n  border-color: var(--gray-400);\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 4px rgba(var(--primary-500-rgb), 0.12);\n  background: #fff;\n}\n.form-input--has-status[_ngcontent-%COMP%] {\n  padding-right: 2.75rem;\n}\n.form-input--password[_ngcontent-%COMP%] {\n  padding-right: 5.25rem;\n}\n.input-valid[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:not(.form-input--password) {\n  border-color: var(--success);\n}\n.input-valid[_ngcontent-%COMP%]   .form-input.form-input--password[_ngcontent-%COMP%] {\n  border-color: var(--success);\n}\n.input-valid[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  color: var(--gray-400);\n}\n.input-error[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  border-color: var(--error);\n}\n.input-error[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.12);\n}\n.input-error[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  color: var(--error);\n}\n.input-status[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n  z-index: 2;\n}\n.input-status[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.input-status--valid[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.input-status--invalid[_ngcontent-%COMP%] {\n  color: var(--error);\n}\n.input-wrapper[_ngcontent-%COMP%]:has(.toggle-password)   .input-status[_ngcontent-%COMP%] {\n  right: 3rem;\n}\n.toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  background: none;\n  border: none;\n  padding: 0;\n  color: var(--gray-400);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color var(--transition-fast);\n  z-index: 2;\n}\n.toggle-password[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.toggle-password[_ngcontent-%COMP%]:hover {\n  color: var(--gray-600);\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--error);\n  animation: _ngcontent-%COMP%_auth-field-message-in 0.2s ease-out;\n}\n.form-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.checkbox-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n}\n.checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: var(--primary-600);\n  cursor: pointer;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--gray-600);\n}\n.forgot-link[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--primary-600);\n  font-weight: 500;\n}\n.forgot-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-700);\n  text-decoration: underline;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 1rem 1.5rem;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  border-radius: var(--radius);\n  border: none;\n  cursor: pointer;\n  transition: all var(--transition-fast);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary-600);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-700);\n  transform: translateY(-1px);\n}\n.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-footer[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: center;\n}\n.form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--gray-600);\n}\n.auth-link[_ngcontent-%COMP%] {\n  color: var(--primary-600);\n  font-weight: 600;\n}\n.auth-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 480px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.password-strength[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.strength-bars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.bar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 4px;\n  background: var(--gray-200);\n  border-radius: 2px;\n  transition: all var(--transition-fast);\n}\n.bar.active.weak[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.bar.active.medium[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.bar.active.strong[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.strength-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--gray-500);\n}\n.password-requirements[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0.5rem 0 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.password-requirements[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n  color: var(--gray-500);\n  transition: color var(--transition-fast);\n}\n.password-requirements[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--gray-300);\n  flex-shrink: 0;\n  transition: background var(--transition-fast);\n}\n.password-requirements[_ngcontent-%COMP%]   li.password-requirements__met[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.password-requirements[_ngcontent-%COMP%]   li.password-requirements__met[_ngcontent-%COMP%]::before {\n  background: var(--success);\n}\n.terms-wrapper[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n.terms-wrapper[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  margin-top: 2px;\n  accent-color: var(--primary-600);\n  cursor: pointer;\n}\n.terms-wrapper[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--gray-600);\n  line-height: 1.5;\n}\n.terms-wrapper[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary-600);\n  font-weight: 500;\n}\n.terms-wrapper[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.terms-wrapper[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  margin-left: 26px;\n}\n.btn-register-submit[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.form-container.reset-password-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n}\n.reset-password-form[_ngcontent-%COMP%] {\n  gap: 1.25rem;\n}\n.reset-password-panel[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  gap: 0.375rem;\n}\n.verify-card-inner[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.5rem 0;\n}\n.verify-status-msg[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  color: var(--gray-700);\n  line-height: 1.55;\n}\n.verify-status-msg--ok[_ngcontent-%COMP%] {\n  color: var(--gray-800);\n}\n.verify-status-msg--error[_ngcontent-%COMP%] {\n  color: var(--error);\n}\n.verify-cta[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  width: 100%;\n  text-decoration: none;\n}\n/*# sourceMappingURL=reset-password.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-reset-password", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink, AuthLayoutComponent], template: `<app-auth-layout>\r
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
            <linearGradient id="opsflow-reset-logo-grad" x1="8" y1="4" x2="40" y2="44" gradientUnits="userSpaceOnUse">\r
              <stop stop-color="#93c5fd" />\r
              <stop offset="1" stop-color="#2563eb" />\r
            </linearGradient>\r
          </defs>\r
          <rect width="48" height="48" rx="12" fill="url(#opsflow-reset-logo-grad)" />\r
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
      <h1 class="branding-title">Gestiona tu empresa de forma inteligente</h1>\r
      <p class="branding-description">\r
        Plataforma integral para la gestion de operaciones, equipos y proyectos empresariales.\r
      </p>\r
\r
      <div class="features-list">\r
        <div class="feature-item">\r
          <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />\r
            <polyline points="22 4 12 14.01 9 11.01" />\r
          </svg>\r
          <span>Control total de operaciones</span>\r
        </div>\r
        <div class="feature-item">\r
          <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />\r
            <circle cx="9" cy="7" r="4" />\r
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />\r
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />\r
          </svg>\r
          <span>Gestion de equipos</span>\r
        </div>\r
        <div class="feature-item">\r
          <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
            <line x1="18" y1="20" x2="18" y2="10" />\r
            <line x1="12" y1="20" x2="12" y2="4" />\r
            <line x1="6" y1="20" x2="6" y2="14" />\r
          </svg>\r
          <span>Reportes en tiempo real</span>\r
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
    <div class="form-container reset-password-panel">\r
      <div class="form-header">\r
        <h2>Restablecer contrasena</h2>\r
        <p>Ingresa tu nueva contrasena</p>\r
      </div>\r
\r
      @if (missingToken()) {\r
        <div class="verify-card-inner" role="alert">\r
          <p class="verify-status-msg verify-status-msg--error">\r
            No hay un enlace valido en la URL. Solicita de nuevo el correo desde iniciar sesion, en Olvidaste tu contrasena.\r
          </p>\r
          <a routerLink="/auth/login" class="btn btn-primary verify-cta">Ir a iniciar sesion</a>\r
        </div>\r
      } @else if (isSuccess()) {\r
        <div class="verify-card-inner" role="status">\r
          <p class="verify-status-msg verify-status-msg--ok">\r
            Contrasena restablecida correctamente. Redirigiendo al inicio de sesion...\r
          </p>\r
          <a routerLink="/auth/login" class="btn btn-primary verify-cta">Ir a iniciar sesion ahora</a>\r
        </div>\r
      } @else {\r
        <div class="social-auth" aria-label="Acceso con proveedores externos">\r
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
        <form [formGroup]="resetForm" (ngSubmit)="onSubmit()" class="auth-form reset-password-form">\r
          <div class="form-group">\r
            <label for="newPassword" class="form-label">Nueva contrasena</label>\r
            <div\r
              class="input-wrapper"\r
              [class.input-error]="isFieldInvalid('newPassword')"\r
              [class.input-valid]="isFieldValid('newPassword')"\r
            >\r
              <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />\r
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />\r
              </svg>\r
              <input\r
                [type]="showPassword() ? 'text' : 'password'"\r
                id="newPassword"\r
                formControlName="newPassword"\r
                class="form-input form-input--password"\r
                placeholder="Minimo 6 caracteres"\r
                autocomplete="new-password"\r
                [attr.aria-invalid]="isFieldInvalid('newPassword')"\r
              />\r
              @if (isFieldValid('newPassword')) {\r
                <span class="input-status input-status--valid" aria-hidden="true">\r
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
                    <polyline points="20 6 9 17 4 12" />\r
                  </svg>\r
                </span>\r
              }\r
              @if (isFieldInvalid('newPassword')) {\r
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
            @if (isFieldInvalid('newPassword')) {\r
              <span class="field-error" id="newPassword-error">\r
                @if (resetForm.get('newPassword')?.hasError('required')) {\r
                  La contrasena es requerida\r
                } @else if (resetForm.get('newPassword')?.hasError('minlength')) {\r
                  La contrasena debe tener al menos 6 caracteres\r
                }\r
              </span>\r
            }\r
\r
            <div class="password-strength">\r
              <div class="strength-bars">\r
                <div\r
                  class="bar"\r
                  [class.active]="passwordStrength() >= 1"\r
                  [class.weak]="passwordStrength() === 1"\r
                  [class.medium]="passwordStrength() === 2"\r
                  [class.strong]="passwordStrength() >= 3"\r
                ></div>\r
                <div\r
                  class="bar"\r
                  [class.active]="passwordStrength() >= 2"\r
                  [class.medium]="passwordStrength() === 2"\r
                  [class.strong]="passwordStrength() >= 3"\r
                ></div>\r
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
            <label for="confirmPassword" class="form-label">Confirmar nueva contrasena</label>\r
            <div\r
              class="input-wrapper"\r
              [class.input-error]="isFieldInvalid('confirmPassword') || formHasMismatch()"\r
              [class.input-valid]="isFieldValid('confirmPassword') && !formHasMismatch()"\r
            >\r
              <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />\r
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />\r
              </svg>\r
              <input\r
                [type]="showPassword() ? 'text' : 'password'"\r
                id="confirmPassword"\r
                formControlName="confirmPassword"\r
                class="form-input form-input--password"\r
                placeholder="Repite la nueva contrasena"\r
                autocomplete="new-password"\r
                [attr.aria-invalid]="isFieldInvalid('confirmPassword') || formHasMismatch()"\r
              />\r
            </div>\r
            @if (isFieldInvalid('confirmPassword')) {\r
              <span class="field-error">\r
                @if (resetForm.get('confirmPassword')?.hasError('required')) {\r
                  Confirma tu contrasena\r
                }\r
              </span>\r
            } @else if (formHasMismatch()) {\r
              <span class="field-error">Las contrasenas no coinciden</span>\r
            }\r
          </div>\r
\r
          <button type="submit" class="btn btn-primary" [disabled]="resetForm.invalid || isLoading()">\r
            @if (isLoading()) {\r
              <svg class="spinner" viewBox="0 0 24 24" aria-hidden="true">\r
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="32" stroke-linecap="round" />\r
              </svg>\r
              Aplicando cambio...\r
            } @else {\r
              Guardar cambio de contrasena\r
            }\r
          </button>\r
        </form>\r
\r
        <div class="form-footer">\r
          <p>\r
            <a routerLink="/auth/login" class="auth-link">Volver al inicio de sesion</a>\r
          </p>\r
        </div>\r
      }\r
    </div>\r
  </div>\r
</app-auth-layout>\r
`, styles: ['/* src/app/features/auth/reset-password/reset-password.component.scss */\n.branding-panel {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100%;\n  flex: 1;\n}\n.branding-content {\n  max-width: 420px;\n  padding: 0;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 2.25rem;\n}\n.logo-mark {\n  flex-shrink: 0;\n  border-radius: 12px;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.12);\n}\n.logo-text {\n  font-size: 1.75rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28), 0 2px 10px rgba(0, 0, 0, 0.2);\n}\n.branding-title {\n  font-size: 3rem;\n  font-weight: 700;\n  line-height: 1.12;\n  margin-bottom: 1.5rem;\n  color: #ffffff;\n  text-shadow:\n    0 1px 2px rgba(0, 0, 0, 0.35),\n    0 2px 12px rgba(0, 0, 0, 0.25),\n    0 0 1px rgba(0, 0, 0, 0.5);\n}\n.branding-title--compact {\n  font-size: 2.75rem;\n  margin-bottom: 1.25rem;\n}\n.branding-description {\n  font-size: 1.125rem;\n  color: rgba(255, 255, 255, 0.95);\n  margin-bottom: 2.25rem;\n  line-height: 1.65;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);\n}\n.branding-description--register {\n  font-size: 1.0625rem;\n}\n.features-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.feature-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-size: 1rem;\n  color: #f0f4ff;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);\n}\n.feature-icon {\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4));\n}\n.benefits-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.benefit-item {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n}\n.benefit-icon {\n  width: 32px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.35));\n}\n.benefit-icon svg {\n  width: 16px;\n  height: 16px;\n}\n.benefit-content h4 {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n  color: #f0f4ff;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);\n}\n.benefit-content p {\n  font-size: 0.8125rem;\n  color: rgba(255, 255, 255, 0.9);\n  line-height: 1.45;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);\n}\n.branding-footer {\n  width: 100%;\n  max-width: 420px;\n  align-self: flex-start;\n  margin-top: auto;\n  padding-top: 3rem;\n  padding-bottom: 0.25rem;\n  color: rgb(255, 255, 255);\n  font-size: 0.8125rem;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  text-shadow: 0 1px 2px rgb(255, 255, 255);\n}\n.branding-footer p {\n  margin: 0;\n}\n@keyframes auth-field-message-in {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes auth-alert-in {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-header {\n  margin-bottom: 1.5rem;\n  text-align: center;\n}\n.form-header h2 {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  margin-bottom: 0.5rem;\n  line-height: 1.2;\n  letter-spacing: -0.02em;\n}\n.form-header p {\n  color: var(--gray-500);\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n.form-header--register h2 {\n  font-size: 1.5rem;\n}\n.social-auth {\n  margin-bottom: 1.5rem;\n}\n.social-auth__divider {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin: 0 0 1rem;\n  font-size: 0.8125rem;\n  color: var(--gray-500);\n}\n.social-auth__divider::before,\n.social-auth__divider::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--gray-200);\n}\n.social-auth__divider span {\n  white-space: nowrap;\n}\n.social-auth__buttons {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.btn-social {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.65rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--gray-700);\n  background: var(--gray-50);\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius);\n  cursor: not-allowed;\n  opacity: 0.85;\n  transition: border-color var(--transition-fast), background var(--transition-fast);\n}\n.btn-social:disabled {\n  cursor: not-allowed;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  border-radius: var(--radius);\n  margin-bottom: 1.5rem;\n  font-size: 0.875rem;\n  animation: auth-alert-in 0.25s ease-out;\n}\n.alert-error {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n}\n.alert-success {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #166534;\n}\n.alert-icon {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.auth-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--gray-700);\n}\n.form-label .optional {\n  font-weight: 400;\n  color: var(--gray-400);\n}\n.input-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-icon {\n  position: absolute;\n  left: 1rem;\n  width: 20px;\n  height: 20px;\n  color: var(--gray-400);\n  pointer-events: none;\n  z-index: 1;\n}\n.form-input {\n  width: 100%;\n  padding: 1rem 1rem 1rem 3rem;\n  font-size: 0.9375rem;\n  border: 1px solid var(--gray-300);\n  border-radius: var(--radius);\n  background: #fff;\n  color: var(--gray-900);\n  transition:\n    border-color var(--transition-fast),\n    box-shadow var(--transition-fast),\n    background var(--transition-fast);\n}\n.form-input::placeholder {\n  color: var(--gray-400);\n}\n.form-input:hover {\n  border-color: var(--gray-400);\n}\n.form-input:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 4px rgba(var(--primary-500-rgb), 0.12);\n  background: #fff;\n}\n.form-input--has-status {\n  padding-right: 2.75rem;\n}\n.form-input--password {\n  padding-right: 5.25rem;\n}\n.input-valid .form-input:not(.form-input--password) {\n  border-color: var(--success);\n}\n.input-valid .form-input.form-input--password {\n  border-color: var(--success);\n}\n.input-valid .input-icon {\n  color: var(--gray-400);\n}\n.input-error .form-input {\n  border-color: var(--error);\n}\n.input-error .form-input:focus {\n  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.12);\n}\n.input-error .input-icon {\n  color: var(--error);\n}\n.input-status {\n  position: absolute;\n  right: 0.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n  z-index: 2;\n}\n.input-status svg {\n  width: 18px;\n  height: 18px;\n}\n.input-status--valid {\n  color: var(--success);\n}\n.input-status--invalid {\n  color: var(--error);\n}\n.input-wrapper:has(.toggle-password) .input-status {\n  right: 3rem;\n}\n.toggle-password {\n  position: absolute;\n  right: 1rem;\n  background: none;\n  border: none;\n  padding: 0;\n  color: var(--gray-400);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color var(--transition-fast);\n  z-index: 2;\n}\n.toggle-password svg {\n  width: 20px;\n  height: 20px;\n}\n.toggle-password:hover {\n  color: var(--gray-600);\n}\n.field-error {\n  font-size: 0.8125rem;\n  color: var(--error);\n  animation: auth-field-message-in 0.2s ease-out;\n}\n.form-options {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.checkbox-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n}\n.checkbox-wrapper input[type=checkbox] {\n  width: 18px;\n  height: 18px;\n  accent-color: var(--primary-600);\n  cursor: pointer;\n}\n.checkbox-label {\n  font-size: 0.875rem;\n  color: var(--gray-600);\n}\n.forgot-link {\n  font-size: 0.875rem;\n  color: var(--primary-600);\n  font-weight: 500;\n}\n.forgot-link:hover {\n  color: var(--primary-700);\n  text-decoration: underline;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 1rem 1.5rem;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  border-radius: var(--radius);\n  border: none;\n  cursor: pointer;\n  transition: all var(--transition-fast);\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: var(--primary-600);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: var(--primary-700);\n  transform: translateY(-1px);\n}\n.btn-primary:active:not(:disabled) {\n  transform: translateY(0);\n}\n.spinner {\n  width: 20px;\n  height: 20px;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-footer {\n  margin-top: 2rem;\n  text-align: center;\n}\n.form-footer p {\n  font-size: 0.875rem;\n  color: var(--gray-600);\n}\n.auth-link {\n  color: var(--primary-600);\n  font-weight: 600;\n}\n.auth-link:hover {\n  text-decoration: underline;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 480px) {\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n}\n.password-strength {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.strength-bars {\n  display: flex;\n  gap: 4px;\n}\n.bar {\n  width: 48px;\n  height: 4px;\n  background: var(--gray-200);\n  border-radius: 2px;\n  transition: all var(--transition-fast);\n}\n.bar.active.weak {\n  background: #ef4444;\n}\n.bar.active.medium {\n  background: #f59e0b;\n}\n.bar.active.strong {\n  background: #10b981;\n}\n.strength-text {\n  font-size: 0.75rem;\n  color: var(--gray-500);\n}\n.password-requirements {\n  list-style: none;\n  margin: 0.5rem 0 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.password-requirements li {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n  color: var(--gray-500);\n  transition: color var(--transition-fast);\n}\n.password-requirements li::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--gray-300);\n  flex-shrink: 0;\n  transition: background var(--transition-fast);\n}\n.password-requirements li.password-requirements__met {\n  color: var(--success);\n}\n.password-requirements li.password-requirements__met::before {\n  background: var(--success);\n}\n.terms-wrapper .checkbox-wrapper {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n.terms-wrapper .checkbox-wrapper input[type=checkbox] {\n  width: 18px;\n  height: 18px;\n  margin-top: 2px;\n  accent-color: var(--primary-600);\n  cursor: pointer;\n}\n.terms-wrapper .checkbox-label {\n  font-size: 0.8125rem;\n  color: var(--gray-600);\n  line-height: 1.5;\n}\n.terms-wrapper .checkbox-label a {\n  color: var(--primary-600);\n  font-weight: 500;\n}\n.terms-wrapper .checkbox-label a:hover {\n  text-decoration: underline;\n}\n.terms-wrapper .field-error {\n  margin-top: 0.25rem;\n  margin-left: 26px;\n}\n.btn-register-submit {\n  margin-top: 0.5rem;\n}\n.form-container.reset-password-panel {\n  width: 100%;\n  max-width: 420px;\n}\n.reset-password-form {\n  gap: 1.25rem;\n}\n.reset-password-panel .form-group {\n  gap: 0.375rem;\n}\n.verify-card-inner {\n  text-align: center;\n  padding: 0.5rem 0;\n}\n.verify-status-msg {\n  margin: 0;\n  font-size: 1rem;\n  color: var(--gray-700);\n  line-height: 1.55;\n}\n.verify-status-msg--ok {\n  color: var(--gray-800);\n}\n.verify-status-msg--error {\n  color: var(--error);\n}\n.verify-cta {\n  margin-top: 1.5rem;\n  width: 100%;\n  text-decoration: none;\n}\n/*# sourceMappingURL=reset-password.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: ActivatedRoute }, { type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src/app/features/auth/reset-password/reset-password.component.ts", lineNumber: 32 });
})();
export {
  ResetPasswordComponent
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v19.2.21
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-NWLIONOR.js.map
