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
  ActivatedRoute,
  CommonModule,
  Component,
  EventEmitter,
  HostListener,
  Output,
  Router,
  RouterLink,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6KLI64HZ.js";

// src/app/features/auth/forgot-password-modal/forgot-password-modal.component.ts
function ForgotPasswordModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 9);
    \u0275\u0275text(1, "Correo enviado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 10);
    \u0275\u0275text(3, " Hemos enviado las instrucciones a ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ". Revisa tu bandeja de entrada. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 11);
    \u0275\u0275listener("click", function ForgotPasswordModalComponent_Conditional_10_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(8, "Entendido");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.submittedEmail());
  }
}
function ForgotPasswordModalComponent_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 27);
    \u0275\u0275element(2, "circle", 28)(3, "line", 29)(4, "line", 30);
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
function ForgotPasswordModalComponent_Conditional_11_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 31);
    \u0275\u0275element(2, "polyline", 32);
    \u0275\u0275elementEnd()();
  }
}
function ForgotPasswordModalComponent_Conditional_11_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 33);
    \u0275\u0275element(2, "circle", 28)(3, "line", 29)(4, "line", 30);
    \u0275\u0275elementEnd()();
  }
}
function ForgotPasswordModalComponent_Conditional_11_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El correo es requerido ");
  }
}
function ForgotPasswordModalComponent_Conditional_11_Conditional_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Ingresa un correo valido ");
  }
}
function ForgotPasswordModalComponent_Conditional_11_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275template(1, ForgotPasswordModalComponent_Conditional_11_Conditional_16_Conditional_1_Template, 1, 0)(2, ForgotPasswordModalComponent_Conditional_11_Conditional_16_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r1.forgotForm.get("email")) == null ? null : tmp_2_0.hasError("required")) ? 1 : ((tmp_2_0 = ctx_r1.forgotForm.get("email")) == null ? null : tmp_2_0.hasError("email")) ? 2 : -1);
  }
}
function ForgotPasswordModalComponent_Conditional_11_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 34);
    \u0275\u0275element(1, "circle", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Enviando... ");
  }
}
function ForgotPasswordModalComponent_Conditional_11_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enviar instrucciones ");
  }
}
function ForgotPasswordModalComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 9);
    \u0275\u0275text(1, "Recuperar contrasena");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 10);
    \u0275\u0275text(3, " Ingresa tu correo y te enviaremos instrucciones para restablecer tu contrasena. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ForgotPasswordModalComponent_Conditional_11_Conditional_4_Template, 7, 1, "div", 12);
    \u0275\u0275elementStart(5, "form", 13);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordModalComponent_Conditional_11_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(6, "div", 14)(7, "label", 15);
    \u0275\u0275text(8, "Correo electronico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 17);
    \u0275\u0275element(11, "path", 18)(12, "polyline", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(13, "input", 20);
    \u0275\u0275template(14, ForgotPasswordModalComponent_Conditional_11_Conditional_14_Template, 3, 0, "span", 21)(15, ForgotPasswordModalComponent_Conditional_11_Conditional_15_Template, 5, 0, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ForgotPasswordModalComponent_Conditional_11_Conditional_16_Template, 3, 1, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 24)(18, "button", 25);
    \u0275\u0275listener("click", function ForgotPasswordModalComponent_Conditional_11_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(19, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 26);
    \u0275\u0275template(21, ForgotPasswordModalComponent_Conditional_11_Conditional_21_Template, 3, 0)(22, ForgotPasswordModalComponent_Conditional_11_Conditional_22_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.errorMessage() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.forgotForm);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("input-error", ctx_r1.isFieldInvalid("email"))("input-valid", ctx_r1.isFieldValid("email"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-invalid", ctx_r1.isFieldInvalid("email"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldValid("email") ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("email") ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("email") ? 16 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.forgotForm.invalid || ctx_r1.isLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLoading() ? 21 : 22);
  }
}
var ForgotPasswordModalComponent = class _ForgotPasswordModalComponent {
  fb;
  authService;
  closed = new EventEmitter();
  forgotForm;
  isLoading = signal(false);
  isSuccess = signal(false);
  errorMessage = signal(null);
  submittedEmail = signal("");
  constructor(fb, authService) {
    this.fb = fb;
    this.authService = authService;
    this.forgotForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  onEscape() {
    this.close();
  }
  close() {
    this.closed.emit();
  }
  onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
  isFieldInvalid(fieldName) {
    const field = this.forgotForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  isFieldValid(fieldName) {
    const field = this.forgotForm.get(fieldName);
    return !!(field && field.valid && (field.dirty || field.touched));
  }
  onSubmit() {
    if (this.forgotForm.invalid) {
      this.forgotForm.get("email")?.markAsTouched();
      return;
    }
    this.errorMessage.set(null);
    this.isLoading.set(true);
    const email = this.forgotForm.value.email;
    this.authService.requestPasswordReset(email).subscribe({
      next: () => {
        this.submittedEmail.set(email);
        this.isSuccess.set(true);
        this.isLoading.set(false);
      },
      error: (error) => {
        this.errorMessage.set(error.message);
        this.isLoading.set(false);
      }
    });
  }
  static \u0275fac = function ForgotPasswordModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordModalComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordModalComponent, selectors: [["app-forgot-password-modal"]], hostBindings: function ForgotPasswordModalComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.escape", function ForgotPasswordModalComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscape();
      }, false, \u0275\u0275resolveDocument);
    }
  }, outputs: { closed: "closed" }, decls: 12, vars: 1, consts: [["role", "presentation", 1, "auth-modal-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "forgot-modal-title", 1, "auth-modal", 3, "click"], ["type", "button", "aria-label", "Cerrar", 1, "auth-modal__close", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "auth-modal__icon"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], ["id", "forgot-modal-title", 1, "auth-modal__title"], [1, "auth-modal__text"], ["type", "button", 1, "btn", "btn-primary", "auth-modal__action", 3, "click"], ["role", "alert", "aria-live", "polite", 1, "alert", "alert-error"], [1, "auth-modal__form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "forgot-email", 1, "form-label"], [1, "input-wrapper"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "input-icon"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], ["type", "email", "id", "forgot-email", "formControlName", "email", "placeholder", "correo@ejemplo.com", "autocomplete", "email", 1, "form-input", "form-input--has-status"], ["aria-hidden", "true", 1, "input-status", "input-status--valid"], ["aria-hidden", "true", 1, "input-status", "input-status--invalid"], [1, "field-error"], [1, "auth-modal__actions"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "alert-icon"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["points", "20 6 9 17 4 12"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "spinner"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "3", "fill", "none", "stroke-dasharray", "32", "stroke-linecap", "round"]], template: function ForgotPasswordModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function ForgotPasswordModalComponent_Template_div_click_0_listener($event) {
        return ctx.onBackdropClick($event);
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function ForgotPasswordModalComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "button", 2);
      \u0275\u0275listener("click", function ForgotPasswordModalComponent_Template_button_click_2_listener() {
        return ctx.close();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "line", 4)(5, "line", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 3);
      \u0275\u0275element(8, "rect", 7)(9, "path", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, ForgotPasswordModalComponent_Conditional_10_Template, 9, 1)(11, ForgotPasswordModalComponent_Conditional_11_Template, 23, 12);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.isSuccess() ? 10 : 11);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n@keyframes _ngcontent-%COMP%_auth-field-message-in {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_auth-alert-in {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  text-align: center;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  margin-bottom: 0.5rem;\n  line-height: 1.2;\n  letter-spacing: -0.02em;\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--gray-500);\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n.form-header--register[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.social-auth[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.social-auth__divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin: 0 0 1rem;\n  font-size: 0.8125rem;\n  color: var(--gray-500);\n}\n.social-auth__divider[_ngcontent-%COMP%]::before, \n.social-auth__divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--gray-200);\n}\n.social-auth__divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.social-auth__buttons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.btn-social[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.65rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--gray-700);\n  background: var(--gray-50);\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius);\n  cursor: not-allowed;\n  opacity: 0.85;\n  transition: border-color var(--transition-fast), background var(--transition-fast);\n}\n.btn-social[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  border-radius: var(--radius);\n  margin-bottom: 1.5rem;\n  font-size: 0.875rem;\n  animation: _ngcontent-%COMP%_auth-alert-in 0.25s ease-out;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #166534;\n}\n.alert-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--gray-700);\n}\n.form-label[_ngcontent-%COMP%]   .optional[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: var(--gray-400);\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  width: 20px;\n  height: 20px;\n  color: var(--gray-400);\n  pointer-events: none;\n  z-index: 1;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem 1rem 1rem 3rem;\n  font-size: 0.9375rem;\n  border: 1px solid var(--gray-300);\n  border-radius: var(--radius);\n  background: #fff;\n  color: var(--gray-900);\n  transition:\n    border-color var(--transition-fast),\n    box-shadow var(--transition-fast),\n    background var(--transition-fast);\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--gray-400);\n}\n.form-input[_ngcontent-%COMP%]:hover {\n  border-color: var(--gray-400);\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 4px rgba(var(--primary-500-rgb), 0.12);\n  background: #fff;\n}\n.form-input--has-status[_ngcontent-%COMP%] {\n  padding-right: 2.75rem;\n}\n.form-input--password[_ngcontent-%COMP%] {\n  padding-right: 5.25rem;\n}\n.input-valid[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:not(.form-input--password) {\n  border-color: var(--success);\n}\n.input-valid[_ngcontent-%COMP%]   .form-input.form-input--password[_ngcontent-%COMP%] {\n  border-color: var(--success);\n}\n.input-valid[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  color: var(--gray-400);\n}\n.input-error[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  border-color: var(--error);\n}\n.input-error[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.12);\n}\n.input-error[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  color: var(--error);\n}\n.input-status[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n  z-index: 2;\n}\n.input-status[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.input-status--valid[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.input-status--invalid[_ngcontent-%COMP%] {\n  color: var(--error);\n}\n.input-wrapper[_ngcontent-%COMP%]:has(.toggle-password)   .input-status[_ngcontent-%COMP%] {\n  right: 3rem;\n}\n.toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  background: none;\n  border: none;\n  padding: 0;\n  color: var(--gray-400);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color var(--transition-fast);\n  z-index: 2;\n}\n.toggle-password[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.toggle-password[_ngcontent-%COMP%]:hover {\n  color: var(--gray-600);\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--error);\n  animation: _ngcontent-%COMP%_auth-field-message-in 0.2s ease-out;\n}\n.form-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.checkbox-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n}\n.checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: var(--primary-600);\n  cursor: pointer;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--gray-600);\n}\n.forgot-link[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--primary-600);\n  font-weight: 500;\n}\n.forgot-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-700);\n  text-decoration: underline;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 1rem 1.5rem;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  border-radius: var(--radius);\n  border: none;\n  cursor: pointer;\n  transition: all var(--transition-fast);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary-600);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-700);\n  transform: translateY(-1px);\n}\n.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-footer[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: center;\n}\n.form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--gray-600);\n}\n.auth-link[_ngcontent-%COMP%] {\n  color: var(--primary-600);\n  font-weight: 600;\n}\n.auth-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 480px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.password-strength[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.strength-bars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.bar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 4px;\n  background: var(--gray-200);\n  border-radius: 2px;\n  transition: all var(--transition-fast);\n}\n.bar.active.weak[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.bar.active.medium[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.bar.active.strong[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.strength-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--gray-500);\n}\n.password-requirements[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0.5rem 0 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.password-requirements[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n  color: var(--gray-500);\n  transition: color var(--transition-fast);\n}\n.password-requirements[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--gray-300);\n  flex-shrink: 0;\n  transition: background var(--transition-fast);\n}\n.password-requirements[_ngcontent-%COMP%]   li.password-requirements__met[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.password-requirements[_ngcontent-%COMP%]   li.password-requirements__met[_ngcontent-%COMP%]::before {\n  background: var(--success);\n}\n.terms-wrapper[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n.terms-wrapper[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  margin-top: 2px;\n  accent-color: var(--primary-600);\n  cursor: pointer;\n}\n.terms-wrapper[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--gray-600);\n  line-height: 1.5;\n}\n.terms-wrapper[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary-600);\n  font-weight: 500;\n}\n.terms-wrapper[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.terms-wrapper[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  margin-left: 26px;\n}\n.btn-register-submit[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.auth-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n  animation: _ngcontent-%COMP%_auth-modal-backdrop-in 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_auth-modal-backdrop-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.auth-modal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 420px;\n  background: #fff;\n  border-radius: var(--radius-lg);\n  padding: 2rem 2rem 1.75rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_auth-modal-in 0.25s ease-out;\n}\n@keyframes _ngcontent-%COMP%_auth-modal-in {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.auth-modal__close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.25rem;\n  height: 2.25rem;\n  padding: 0;\n  border: none;\n  border-radius: var(--radius);\n  background: var(--gray-100);\n  color: var(--gray-600);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.auth-modal__close[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.auth-modal__close[_ngcontent-%COMP%]:hover {\n  background: var(--gray-200);\n  color: var(--gray-900);\n}\n.auth-modal__icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  margin: 0 auto 1.25rem;\n  border-radius: 50%;\n  background: var(--primary-100);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.auth-modal__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  color: var(--primary-600);\n}\n.auth-modal__title[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1.375rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  text-align: center;\n  line-height: 1.2;\n  letter-spacing: -0.02em;\n  padding-right: 2rem;\n  padding-left: 2rem;\n}\n.auth-modal__text[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem;\n  font-size: 0.9375rem;\n  color: var(--gray-600);\n  text-align: center;\n  line-height: 1.55;\n}\n.auth-modal__text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--gray-900);\n  word-break: break-all;\n}\n.auth-modal__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.auth-modal__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  justify-content: flex-end;\n  margin-top: 0.25rem;\n}\n.auth-modal__action[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0.5rem;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--gray-700);\n  border: 1px solid var(--gray-200);\n}\n.btn-ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--gray-50);\n  border-color: var(--gray-300);\n}\n/*# sourceMappingURL=forgot-password-modal.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordModalComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password-modal", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div\r
  class="auth-modal-backdrop"\r
  (click)="onBackdropClick($event)"\r
  role="presentation"\r
>\r
  <div\r
    class="auth-modal"\r
    role="dialog"\r
    aria-modal="true"\r
    aria-labelledby="forgot-modal-title"\r
    (click)="$event.stopPropagation()"\r
  >\r
    <button type="button" class="auth-modal__close" (click)="close()" aria-label="Cerrar">\r
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
        <line x1="18" y1="6" x2="6" y2="18" />\r
        <line x1="6" y1="6" x2="18" y2="18" />\r
      </svg>\r
    </button>\r
\r
    <div class="auth-modal__icon">\r
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />\r
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />\r
      </svg>\r
    </div>\r
\r
    @if (isSuccess()) {\r
      <h2 id="forgot-modal-title" class="auth-modal__title">Correo enviado</h2>\r
      <p class="auth-modal__text">\r
        Hemos enviado las instrucciones a <strong>{{ submittedEmail() }}</strong>. Revisa tu bandeja de entrada.\r
      </p>\r
      <button type="button" class="btn btn-primary auth-modal__action" (click)="close()">Entendido</button>\r
    } @else {\r
      <h2 id="forgot-modal-title" class="auth-modal__title">Recuperar contrasena</h2>\r
      <p class="auth-modal__text">\r
        Ingresa tu correo y te enviaremos instrucciones para restablecer tu contrasena.\r
      </p>\r
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
      <form [formGroup]="forgotForm" (ngSubmit)="onSubmit()" class="auth-modal__form">\r
        <div class="form-group">\r
          <label for="forgot-email" class="form-label">Correo electronico</label>\r
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
              id="forgot-email"\r
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
              @if (forgotForm.get('email')?.hasError('required')) {\r
                El correo es requerido\r
              } @else if (forgotForm.get('email')?.hasError('email')) {\r
                Ingresa un correo valido\r
              }\r
            </span>\r
          }\r
        </div>\r
\r
        <div class="auth-modal__actions">\r
          <button type="button" class="btn btn-ghost" (click)="close()">Cancelar</button>\r
          <button type="submit" class="btn btn-primary" [disabled]="forgotForm.invalid || isLoading()">\r
            @if (isLoading()) {\r
              <svg class="spinner" viewBox="0 0 24 24" aria-hidden="true">\r
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="32" stroke-linecap="round" />\r
              </svg>\r
              Enviando...\r
            } @else {\r
              Enviar instrucciones\r
            }\r
          </button>\r
        </div>\r
      </form>\r
    }\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/auth/forgot-password-modal/forgot-password-modal.component.scss */\n@keyframes auth-field-message-in {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes auth-alert-in {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-header {\n  margin-bottom: 1.5rem;\n  text-align: center;\n}\n.form-header h2 {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  margin-bottom: 0.5rem;\n  line-height: 1.2;\n  letter-spacing: -0.02em;\n}\n.form-header p {\n  color: var(--gray-500);\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n.form-header--register h2 {\n  font-size: 1.5rem;\n}\n.social-auth {\n  margin-bottom: 1.5rem;\n}\n.social-auth__divider {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin: 0 0 1rem;\n  font-size: 0.8125rem;\n  color: var(--gray-500);\n}\n.social-auth__divider::before,\n.social-auth__divider::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--gray-200);\n}\n.social-auth__divider span {\n  white-space: nowrap;\n}\n.social-auth__buttons {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.btn-social {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.65rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--gray-700);\n  background: var(--gray-50);\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius);\n  cursor: not-allowed;\n  opacity: 0.85;\n  transition: border-color var(--transition-fast), background var(--transition-fast);\n}\n.btn-social:disabled {\n  cursor: not-allowed;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  border-radius: var(--radius);\n  margin-bottom: 1.5rem;\n  font-size: 0.875rem;\n  animation: auth-alert-in 0.25s ease-out;\n}\n.alert-error {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n}\n.alert-success {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #166534;\n}\n.alert-icon {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.auth-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--gray-700);\n}\n.form-label .optional {\n  font-weight: 400;\n  color: var(--gray-400);\n}\n.input-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-icon {\n  position: absolute;\n  left: 1rem;\n  width: 20px;\n  height: 20px;\n  color: var(--gray-400);\n  pointer-events: none;\n  z-index: 1;\n}\n.form-input {\n  width: 100%;\n  padding: 1rem 1rem 1rem 3rem;\n  font-size: 0.9375rem;\n  border: 1px solid var(--gray-300);\n  border-radius: var(--radius);\n  background: #fff;\n  color: var(--gray-900);\n  transition:\n    border-color var(--transition-fast),\n    box-shadow var(--transition-fast),\n    background var(--transition-fast);\n}\n.form-input::placeholder {\n  color: var(--gray-400);\n}\n.form-input:hover {\n  border-color: var(--gray-400);\n}\n.form-input:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 4px rgba(var(--primary-500-rgb), 0.12);\n  background: #fff;\n}\n.form-input--has-status {\n  padding-right: 2.75rem;\n}\n.form-input--password {\n  padding-right: 5.25rem;\n}\n.input-valid .form-input:not(.form-input--password) {\n  border-color: var(--success);\n}\n.input-valid .form-input.form-input--password {\n  border-color: var(--success);\n}\n.input-valid .input-icon {\n  color: var(--gray-400);\n}\n.input-error .form-input {\n  border-color: var(--error);\n}\n.input-error .form-input:focus {\n  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.12);\n}\n.input-error .input-icon {\n  color: var(--error);\n}\n.input-status {\n  position: absolute;\n  right: 0.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n  z-index: 2;\n}\n.input-status svg {\n  width: 18px;\n  height: 18px;\n}\n.input-status--valid {\n  color: var(--success);\n}\n.input-status--invalid {\n  color: var(--error);\n}\n.input-wrapper:has(.toggle-password) .input-status {\n  right: 3rem;\n}\n.toggle-password {\n  position: absolute;\n  right: 1rem;\n  background: none;\n  border: none;\n  padding: 0;\n  color: var(--gray-400);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color var(--transition-fast);\n  z-index: 2;\n}\n.toggle-password svg {\n  width: 20px;\n  height: 20px;\n}\n.toggle-password:hover {\n  color: var(--gray-600);\n}\n.field-error {\n  font-size: 0.8125rem;\n  color: var(--error);\n  animation: auth-field-message-in 0.2s ease-out;\n}\n.form-options {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.checkbox-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n}\n.checkbox-wrapper input[type=checkbox] {\n  width: 18px;\n  height: 18px;\n  accent-color: var(--primary-600);\n  cursor: pointer;\n}\n.checkbox-label {\n  font-size: 0.875rem;\n  color: var(--gray-600);\n}\n.forgot-link {\n  font-size: 0.875rem;\n  color: var(--primary-600);\n  font-weight: 500;\n}\n.forgot-link:hover {\n  color: var(--primary-700);\n  text-decoration: underline;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 1rem 1.5rem;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  border-radius: var(--radius);\n  border: none;\n  cursor: pointer;\n  transition: all var(--transition-fast);\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: var(--primary-600);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: var(--primary-700);\n  transform: translateY(-1px);\n}\n.btn-primary:active:not(:disabled) {\n  transform: translateY(0);\n}\n.spinner {\n  width: 20px;\n  height: 20px;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-footer {\n  margin-top: 2rem;\n  text-align: center;\n}\n.form-footer p {\n  font-size: 0.875rem;\n  color: var(--gray-600);\n}\n.auth-link {\n  color: var(--primary-600);\n  font-weight: 600;\n}\n.auth-link:hover {\n  text-decoration: underline;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 480px) {\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n}\n.password-strength {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.strength-bars {\n  display: flex;\n  gap: 4px;\n}\n.bar {\n  width: 48px;\n  height: 4px;\n  background: var(--gray-200);\n  border-radius: 2px;\n  transition: all var(--transition-fast);\n}\n.bar.active.weak {\n  background: #ef4444;\n}\n.bar.active.medium {\n  background: #f59e0b;\n}\n.bar.active.strong {\n  background: #10b981;\n}\n.strength-text {\n  font-size: 0.75rem;\n  color: var(--gray-500);\n}\n.password-requirements {\n  list-style: none;\n  margin: 0.5rem 0 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.password-requirements li {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n  color: var(--gray-500);\n  transition: color var(--transition-fast);\n}\n.password-requirements li::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--gray-300);\n  flex-shrink: 0;\n  transition: background var(--transition-fast);\n}\n.password-requirements li.password-requirements__met {\n  color: var(--success);\n}\n.password-requirements li.password-requirements__met::before {\n  background: var(--success);\n}\n.terms-wrapper .checkbox-wrapper {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n.terms-wrapper .checkbox-wrapper input[type=checkbox] {\n  width: 18px;\n  height: 18px;\n  margin-top: 2px;\n  accent-color: var(--primary-600);\n  cursor: pointer;\n}\n.terms-wrapper .checkbox-label {\n  font-size: 0.8125rem;\n  color: var(--gray-600);\n  line-height: 1.5;\n}\n.terms-wrapper .checkbox-label a {\n  color: var(--primary-600);\n  font-weight: 500;\n}\n.terms-wrapper .checkbox-label a:hover {\n  text-decoration: underline;\n}\n.terms-wrapper .field-error {\n  margin-top: 0.25rem;\n  margin-left: 26px;\n}\n.btn-register-submit {\n  margin-top: 0.5rem;\n}\n.auth-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n  animation: auth-modal-backdrop-in 0.2s ease-out;\n}\n@keyframes auth-modal-backdrop-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.auth-modal {\n  position: relative;\n  width: 100%;\n  max-width: 420px;\n  background: #fff;\n  border-radius: var(--radius-lg);\n  padding: 2rem 2rem 1.75rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.04);\n  animation: auth-modal-in 0.25s ease-out;\n}\n@keyframes auth-modal-in {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.auth-modal__close {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.25rem;\n  height: 2.25rem;\n  padding: 0;\n  border: none;\n  border-radius: var(--radius);\n  background: var(--gray-100);\n  color: var(--gray-600);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.auth-modal__close svg {\n  width: 18px;\n  height: 18px;\n}\n.auth-modal__close:hover {\n  background: var(--gray-200);\n  color: var(--gray-900);\n}\n.auth-modal__icon {\n  width: 56px;\n  height: 56px;\n  margin: 0 auto 1.25rem;\n  border-radius: 50%;\n  background: var(--primary-100);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.auth-modal__icon svg {\n  width: 26px;\n  height: 26px;\n  color: var(--primary-600);\n}\n.auth-modal__title {\n  margin: 0 0 0.5rem;\n  font-size: 1.375rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  text-align: center;\n  line-height: 1.2;\n  letter-spacing: -0.02em;\n  padding-right: 2rem;\n  padding-left: 2rem;\n}\n.auth-modal__text {\n  margin: 0 0 1.5rem;\n  font-size: 0.9375rem;\n  color: var(--gray-600);\n  text-align: center;\n  line-height: 1.55;\n}\n.auth-modal__text strong {\n  color: var(--gray-900);\n  word-break: break-all;\n}\n.auth-modal__form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.auth-modal__actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  justify-content: flex-end;\n  margin-top: 0.25rem;\n}\n.auth-modal__action {\n  width: 100%;\n  margin-top: 0.5rem;\n}\n.btn-ghost {\n  background: transparent;\n  color: var(--gray-700);\n  border: 1px solid var(--gray-200);\n}\n.btn-ghost:hover:not(:disabled) {\n  background: var(--gray-50);\n  border-color: var(--gray-300);\n}\n/*# sourceMappingURL=forgot-password-modal.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }], { closed: [{
    type: Output
  }], onEscape: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordModalComponent, { className: "ForgotPasswordModalComponent", filePath: "src/app/features/auth/forgot-password-modal/forgot-password-modal.component.ts", lineNumber: 13 });
})();

// src/app/features/auth/login/login.component.ts
function LoginComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 59);
    \u0275\u0275element(2, "circle", 60)(3, "line", 61)(4, "line", 62);
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
function LoginComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 63);
    \u0275\u0275element(2, "polyline", 64);
    \u0275\u0275elementEnd()();
  }
}
function LoginComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 65);
    \u0275\u0275element(2, "circle", 60)(3, "line", 61)(4, "line", 62);
    \u0275\u0275elementEnd()();
  }
}
function LoginComponent_Conditional_70_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El usuario es requerido ");
  }
}
function LoginComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275template(1, LoginComponent_Conditional_70_Conditional_1_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.loginForm.get("username")) == null ? null : tmp_1_0.hasError("required")) ? 1 : -1);
  }
}
function LoginComponent_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 63);
    \u0275\u0275element(2, "polyline", 64);
    \u0275\u0275elementEnd()();
  }
}
function LoginComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 65);
    \u0275\u0275element(2, "circle", 60)(3, "line", 61)(4, "line", 62);
    \u0275\u0275elementEnd()();
  }
}
function LoginComponent_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 49);
    \u0275\u0275element(1, "path", 66)(2, "line", 67);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 49);
    \u0275\u0275element(1, "path", 68)(2, "circle", 69);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_84_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " La contrasena es requerida ");
  }
}
function LoginComponent_Conditional_84_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " La contrasena debe tener al menos 6 caracteres ");
  }
}
function LoginComponent_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275template(1, LoginComponent_Conditional_84_Conditional_1_Template, 1, 0)(2, LoginComponent_Conditional_84_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.loginForm.get("password")) == null ? null : tmp_1_0.hasError("required")) ? 1 : ((tmp_1_0 = ctx_r0.loginForm.get("password")) == null ? null : tmp_1_0.hasError("minlength")) ? 2 : -1);
  }
}
function LoginComponent_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 70);
    \u0275\u0275element(1, "circle", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Iniciando sesion... ");
  }
}
function LoginComponent_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Iniciar sesion ");
  }
}
function LoginComponent_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-forgot-password-modal", 72);
    \u0275\u0275listener("closed", function LoginComponent_Conditional_100_Template_app_forgot_password_modal_closed_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onForgotPasswordModalClosed());
    });
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  fb;
  authService;
  router;
  route;
  loginForm;
  showPassword = signal(false);
  errorMessage = signal(null);
  isLoading = signal(false);
  showForgotPasswordModal = signal(false);
  constructor(fb, authService, router, route) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.loginForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }
  togglePassword() {
    this.showPassword.update((value) => !value);
  }
  openForgotPasswordModal() {
    this.showForgotPasswordModal.set(true);
  }
  onForgotPasswordModalClosed() {
    this.showForgotPasswordModal.set(false);
  }
  isFieldInvalid(fieldName) {
    const field = this.loginForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  isFieldValid(fieldName) {
    const field = this.loginForm.get(fieldName);
    return !!(field && field.valid && (field.dirty || field.touched));
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      Object.keys(this.loginForm.controls).forEach((key) => {
        this.loginForm.get(key)?.markAsTouched();
      });
      return;
    }
    this.errorMessage.set(null);
    this.isLoading.set(true);
    const { username, password } = this.loginForm.value;
    this.authService.login({ username, password }).subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/dashboard";
        this.router.navigateByUrl(returnUrl);
      },
      error: (error) => {
        this.errorMessage.set(error.message);
        this.isLoading.set(false);
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 101, vars: 24, consts: [["auth-branding", "", 1, "branding-panel"], [1, "branding-content"], [1, "logo"], ["width", "48", "height", "48", "viewBox", "0 0 48 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "aria-hidden", "true", 1, "logo-mark"], ["id", "opsflow-login-logo-grad", "x1", "8", "y1", "4", "x2", "40", "y2", "44", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#93c5fd"], ["offset", "1", "stop-color", "#2563eb"], ["width", "48", "height", "48", "rx", "12", "fill", "url(#opsflow-login-logo-grad)"], ["d", "M14 24L22 32L34 16", "stroke", "white", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "logo-text"], [1, "branding-title"], [1, "branding-description"], [1, "features-list"], [1, "feature-item"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "feature-icon"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], ["x1", "18", "y1", "20", "x2", "18", "y2", "10"], ["x1", "12", "y1", "20", "x2", "12", "y2", "4"], ["x1", "6", "y1", "20", "x2", "6", "y2", "14"], [1, "branding-footer"], ["auth-form", ""], [1, "form-container"], [1, "form-header"], ["aria-label", "Acceso con proveedores externos", 1, "social-auth"], [1, "social-auth__divider"], [1, "social-auth__buttons"], ["type", "button", "disabled", "", "title", "Proximamente", 1, "btn-social"], ["role", "alert", "aria-live", "polite", 1, "alert", "alert-error"], [1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "username", 1, "form-label"], [1, "input-wrapper"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "input-icon"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], ["type", "text", "id", "username", "formControlName", "username", "placeholder", "tu_usuario", "autocomplete", "username", 1, "form-input", "form-input--has-status"], ["aria-hidden", "true", 1, "input-status", "input-status--valid"], ["aria-hidden", "true", 1, "input-status", "input-status--invalid"], ["id", "username-error", 1, "field-error"], ["for", "password", 1, "form-label"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], ["id", "password", "formControlName", "password", "placeholder", "Ingresa tu contrasena", "autocomplete", "current-password", 1, "form-input", "form-input--password", 3, "type"], ["type", "button", 1, "toggle-password", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["id", "password-error", 1, "field-error"], [1, "form-options"], [1, "checkbox-wrapper"], ["type", "checkbox", "formControlName", "rememberMe"], [1, "checkbox-label"], ["type", "button", 1, "forgot-link", "forgot-link--button", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "form-footer"], ["routerLink", "/auth/register", 1, "auth-link"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "alert-icon"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["points", "20 6 9 17 4 12"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "spinner"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "3", "fill", "none", "stroke-dasharray", "32", "stroke-linecap", "round"], [3, "closed"]], template: function LoginComponent_Template(rf, ctx) {
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
      \u0275\u0275text(46, "Bienvenido de nuevo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "p");
      \u0275\u0275text(48, "Ingresa tus credenciales para acceder a tu cuenta");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 28)(50, "p", 29)(51, "span");
      \u0275\u0275text(52, "O continua con");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 30)(54, "button", 31);
      \u0275\u0275text(55, "Google");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "button", 31);
      \u0275\u0275text(57, "GitHub");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(58, LoginComponent_Conditional_58_Template, 7, 1, "div", 32);
      \u0275\u0275elementStart(59, "form", 33);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_59_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(60, "div", 34)(61, "label", 35);
      \u0275\u0275text(62, "Usuario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 36);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(64, "svg", 37);
      \u0275\u0275element(65, "path", 38)(66, "polyline", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(67, "input", 40);
      \u0275\u0275template(68, LoginComponent_Conditional_68_Template, 3, 0, "span", 41)(69, LoginComponent_Conditional_69_Template, 5, 0, "span", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275template(70, LoginComponent_Conditional_70_Template, 2, 1, "span", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 34)(72, "label", 44);
      \u0275\u0275text(73, "Contrasena");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 36);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(75, "svg", 37);
      \u0275\u0275element(76, "rect", 45)(77, "path", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(78, "input", 47);
      \u0275\u0275template(79, LoginComponent_Conditional_79_Template, 3, 0, "span", 41)(80, LoginComponent_Conditional_80_Template, 5, 0, "span", 42);
      \u0275\u0275elementStart(81, "button", 48);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_81_listener() {
        return ctx.togglePassword();
      });
      \u0275\u0275template(82, LoginComponent_Conditional_82_Template, 3, 0, ":svg:svg", 49)(83, LoginComponent_Conditional_83_Template, 3, 0, ":svg:svg", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(84, LoginComponent_Conditional_84_Template, 3, 1, "span", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 51)(86, "label", 52);
      \u0275\u0275element(87, "input", 53);
      \u0275\u0275elementStart(88, "span", 54);
      \u0275\u0275text(89, "Recordarme");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "button", 55);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_90_listener() {
        return ctx.openForgotPasswordModal();
      });
      \u0275\u0275text(91, " Olvidaste tu contrasena? ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "button", 56);
      \u0275\u0275template(93, LoginComponent_Conditional_93_Template, 3, 0)(94, LoginComponent_Conditional_94_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 57)(96, "p");
      \u0275\u0275text(97, " No tienes una cuenta? ");
      \u0275\u0275elementStart(98, "a", 58);
      \u0275\u0275text(99, "Registrate aqui");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(100, LoginComponent_Conditional_100_Template, 1, 0, "app-forgot-password-modal");
    }
    if (rf & 2) {
      \u0275\u0275advance(58);
      \u0275\u0275conditional(ctx.errorMessage() ? 58 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("input-error", ctx.isFieldInvalid("username"))("input-valid", ctx.isFieldValid("username"));
      \u0275\u0275advance(4);
      \u0275\u0275attribute("aria-invalid", ctx.isFieldInvalid("username"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldValid("username") ? 68 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldInvalid("username") ? 69 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldInvalid("username") ? 70 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("input-error", ctx.isFieldInvalid("password"))("input-valid", ctx.isFieldValid("password"));
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
      \u0275\u0275attribute("aria-invalid", ctx.isFieldInvalid("password"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldValid("password") ? 79 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldInvalid("password") ? 80 : -1);
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showPassword() ? "Ocultar contrasena" : "Mostrar contrasena");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showPassword() ? 82 : 83);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isFieldInvalid("password") ? 84 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 93 : 94);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.showForgotPasswordModal() ? 100 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, AuthLayoutComponent, ForgotPasswordModalComponent], styles: ['\n\n.branding-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100%;\n  flex: 1;\n}\n.branding-content[_ngcontent-%COMP%] {\n  max-width: 420px;\n  padding: 0;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 2.25rem;\n}\n.logo-mark[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  border-radius: 12px;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.12);\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28), 0 2px 10px rgba(0, 0, 0, 0.2);\n}\n.branding-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n  line-height: 1.12;\n  margin-bottom: 1.5rem;\n  color: #ffffff;\n  text-shadow:\n    0 1px 2px rgba(0, 0, 0, 0.35),\n    0 2px 12px rgba(0, 0, 0, 0.25),\n    0 0 1px rgba(0, 0, 0, 0.5);\n}\n.branding-title--compact[_ngcontent-%COMP%] {\n  font-size: 2.75rem;\n  margin-bottom: 1.25rem;\n}\n.branding-description[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: rgba(255, 255, 255, 0.95);\n  margin-bottom: 2.25rem;\n  line-height: 1.65;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);\n}\n.branding-description--register[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n}\n.features-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-size: 1rem;\n  color: #f0f4ff;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);\n}\n.feature-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4));\n}\n.benefits-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.benefit-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n}\n.benefit-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.35));\n}\n.benefit-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.benefit-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n  color: #f0f4ff;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);\n}\n.benefit-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: rgba(255, 255, 255, 0.9);\n  line-height: 1.45;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);\n}\n.branding-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  align-self: flex-start;\n  margin-top: auto;\n  padding-top: 3rem;\n  padding-bottom: 0.25rem;\n  color: rgb(255, 255, 255);\n  font-size: 0.8125rem;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  text-shadow: 0 1px 2px rgb(255, 255, 255);\n}\n.branding-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n@keyframes _ngcontent-%COMP%_auth-field-message-in {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_auth-alert-in {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  text-align: center;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  margin-bottom: 0.5rem;\n  line-height: 1.2;\n  letter-spacing: -0.02em;\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--gray-500);\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n.form-header--register[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.social-auth[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.social-auth__divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin: 0 0 1rem;\n  font-size: 0.8125rem;\n  color: var(--gray-500);\n}\n.social-auth__divider[_ngcontent-%COMP%]::before, \n.social-auth__divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--gray-200);\n}\n.social-auth__divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.social-auth__buttons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.btn-social[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.65rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--gray-700);\n  background: var(--gray-50);\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius);\n  cursor: not-allowed;\n  opacity: 0.85;\n  transition: border-color var(--transition-fast), background var(--transition-fast);\n}\n.btn-social[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  border-radius: var(--radius);\n  margin-bottom: 1.5rem;\n  font-size: 0.875rem;\n  animation: _ngcontent-%COMP%_auth-alert-in 0.25s ease-out;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #166534;\n}\n.alert-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--gray-700);\n}\n.form-label[_ngcontent-%COMP%]   .optional[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: var(--gray-400);\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  width: 20px;\n  height: 20px;\n  color: var(--gray-400);\n  pointer-events: none;\n  z-index: 1;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem 1rem 1rem 3rem;\n  font-size: 0.9375rem;\n  border: 1px solid var(--gray-300);\n  border-radius: var(--radius);\n  background: #fff;\n  color: var(--gray-900);\n  transition:\n    border-color var(--transition-fast),\n    box-shadow var(--transition-fast),\n    background var(--transition-fast);\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--gray-400);\n}\n.form-input[_ngcontent-%COMP%]:hover {\n  border-color: var(--gray-400);\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 4px rgba(var(--primary-500-rgb), 0.12);\n  background: #fff;\n}\n.form-input--has-status[_ngcontent-%COMP%] {\n  padding-right: 2.75rem;\n}\n.form-input--password[_ngcontent-%COMP%] {\n  padding-right: 5.25rem;\n}\n.input-valid[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:not(.form-input--password) {\n  border-color: var(--success);\n}\n.input-valid[_ngcontent-%COMP%]   .form-input.form-input--password[_ngcontent-%COMP%] {\n  border-color: var(--success);\n}\n.input-valid[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  color: var(--gray-400);\n}\n.input-error[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  border-color: var(--error);\n}\n.input-error[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.12);\n}\n.input-error[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  color: var(--error);\n}\n.input-status[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n  z-index: 2;\n}\n.input-status[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.input-status--valid[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.input-status--invalid[_ngcontent-%COMP%] {\n  color: var(--error);\n}\n.input-wrapper[_ngcontent-%COMP%]:has(.toggle-password)   .input-status[_ngcontent-%COMP%] {\n  right: 3rem;\n}\n.toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  background: none;\n  border: none;\n  padding: 0;\n  color: var(--gray-400);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color var(--transition-fast);\n  z-index: 2;\n}\n.toggle-password[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.toggle-password[_ngcontent-%COMP%]:hover {\n  color: var(--gray-600);\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--error);\n  animation: _ngcontent-%COMP%_auth-field-message-in 0.2s ease-out;\n}\n.form-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.checkbox-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n}\n.checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: var(--primary-600);\n  cursor: pointer;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--gray-600);\n}\n.forgot-link[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--primary-600);\n  font-weight: 500;\n}\n.forgot-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-700);\n  text-decoration: underline;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 1rem 1.5rem;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  border-radius: var(--radius);\n  border: none;\n  cursor: pointer;\n  transition: all var(--transition-fast);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary-600);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-700);\n  transform: translateY(-1px);\n}\n.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-footer[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: center;\n}\n.form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--gray-600);\n}\n.auth-link[_ngcontent-%COMP%] {\n  color: var(--primary-600);\n  font-weight: 600;\n}\n.auth-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 480px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.password-strength[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.strength-bars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.bar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 4px;\n  background: var(--gray-200);\n  border-radius: 2px;\n  transition: all var(--transition-fast);\n}\n.bar.active.weak[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.bar.active.medium[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.bar.active.strong[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.strength-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--gray-500);\n}\n.password-requirements[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0.5rem 0 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.password-requirements[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n  color: var(--gray-500);\n  transition: color var(--transition-fast);\n}\n.password-requirements[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--gray-300);\n  flex-shrink: 0;\n  transition: background var(--transition-fast);\n}\n.password-requirements[_ngcontent-%COMP%]   li.password-requirements__met[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.password-requirements[_ngcontent-%COMP%]   li.password-requirements__met[_ngcontent-%COMP%]::before {\n  background: var(--success);\n}\n.terms-wrapper[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n.terms-wrapper[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  margin-top: 2px;\n  accent-color: var(--primary-600);\n  cursor: pointer;\n}\n.terms-wrapper[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--gray-600);\n  line-height: 1.5;\n}\n.terms-wrapper[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary-600);\n  font-weight: 500;\n}\n.terms-wrapper[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.terms-wrapper[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  margin-left: 26px;\n}\n.btn-register-submit[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n}\n.forgot-link--button[_ngcontent-%COMP%] {\n  font: inherit;\n  background: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  text-align: right;\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink, AuthLayoutComponent, ForgotPasswordModalComponent], template: `<app-auth-layout>\r
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
            <linearGradient id="opsflow-login-logo-grad" x1="8" y1="4" x2="40" y2="44" gradientUnits="userSpaceOnUse">\r
              <stop stop-color="#93c5fd" />\r
              <stop offset="1" stop-color="#2563eb" />\r
            </linearGradient>\r
          </defs>\r
          <rect width="48" height="48" rx="12" fill="url(#opsflow-login-logo-grad)" />\r
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
    <div class="form-container">\r
      <div class="form-header">\r
        <h2>Bienvenido de nuevo</h2>\r
        <p>Ingresa tus credenciales para acceder a tu cuenta</p>\r
      </div>\r
\r
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
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="auth-form">\r
        <div class="form-group">\r
          <label for="username" class="form-label">Usuario</label>\r
          <div\r
            class="input-wrapper"\r
            [class.input-error]="isFieldInvalid('username')"\r
            [class.input-valid]="isFieldValid('username')"\r
          >\r
            <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />\r
              <polyline points="22,6 12,13 2,6" />\r
            </svg>\r
            <input\r
              type="text"\r
              id="username"\r
              formControlName="username"\r
              class="form-input form-input--has-status"\r
              placeholder="tu_usuario"\r
              autocomplete="username"\r
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
            <span class="field-error" id="username-error">\r
              @if (loginForm.get('username')?.hasError('required')) {\r
                El usuario es requerido\r
              }\r
            </span>\r
          }\r
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
              placeholder="Ingresa tu contrasena"\r
              autocomplete="current-password"\r
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
            <span class="field-error" id="password-error">\r
              @if (loginForm.get('password')?.hasError('required')) {\r
                La contrasena es requerida\r
              } @else if (loginForm.get('password')?.hasError('minlength')) {\r
                La contrasena debe tener al menos 6 caracteres\r
              }\r
            </span>\r
          }\r
        </div>\r
\r
        <div class="form-options">\r
          <label class="checkbox-wrapper">\r
            <input type="checkbox" formControlName="rememberMe" />\r
            <span class="checkbox-label">Recordarme</span>\r
          </label>\r
          <button type="button" class="forgot-link forgot-link--button" (click)="openForgotPasswordModal()">\r
            Olvidaste tu contrasena?\r
          </button>\r
        </div>\r
\r
        <button type="submit" class="btn btn-primary" [disabled]="loginForm.invalid || isLoading()">\r
          @if (isLoading()) {\r
            <svg class="spinner" viewBox="0 0 24 24" aria-hidden="true">\r
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="32" stroke-linecap="round" />\r
            </svg>\r
            Iniciando sesion...\r
          } @else {\r
            Iniciar sesion\r
          }\r
        </button>\r
      </form>\r
\r
      <div class="form-footer">\r
        <p>\r
          No tienes una cuenta?\r
          <a routerLink="/auth/register" class="auth-link">Registrate aqui</a>\r
        </p>\r
      </div>\r
    </div>\r
  </div>\r
</app-auth-layout>\r
\r
@if (showForgotPasswordModal()) {\r
  <app-forgot-password-modal (closed)="onForgotPasswordModalClosed()" />\r
}\r
`, styles: ['/* src/app/features/auth/login/login.component.scss */\n.branding-panel {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100%;\n  flex: 1;\n}\n.branding-content {\n  max-width: 420px;\n  padding: 0;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 2.25rem;\n}\n.logo-mark {\n  flex-shrink: 0;\n  border-radius: 12px;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.12);\n}\n.logo-text {\n  font-size: 1.75rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28), 0 2px 10px rgba(0, 0, 0, 0.2);\n}\n.branding-title {\n  font-size: 3rem;\n  font-weight: 700;\n  line-height: 1.12;\n  margin-bottom: 1.5rem;\n  color: #ffffff;\n  text-shadow:\n    0 1px 2px rgba(0, 0, 0, 0.35),\n    0 2px 12px rgba(0, 0, 0, 0.25),\n    0 0 1px rgba(0, 0, 0, 0.5);\n}\n.branding-title--compact {\n  font-size: 2.75rem;\n  margin-bottom: 1.25rem;\n}\n.branding-description {\n  font-size: 1.125rem;\n  color: rgba(255, 255, 255, 0.95);\n  margin-bottom: 2.25rem;\n  line-height: 1.65;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);\n}\n.branding-description--register {\n  font-size: 1.0625rem;\n}\n.features-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.feature-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-size: 1rem;\n  color: #f0f4ff;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);\n}\n.feature-icon {\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4));\n}\n.benefits-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.benefit-item {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n}\n.benefit-icon {\n  width: 32px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.35));\n}\n.benefit-icon svg {\n  width: 16px;\n  height: 16px;\n}\n.benefit-content h4 {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n  color: #f0f4ff;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);\n}\n.benefit-content p {\n  font-size: 0.8125rem;\n  color: rgba(255, 255, 255, 0.9);\n  line-height: 1.45;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);\n}\n.branding-footer {\n  width: 100%;\n  max-width: 420px;\n  align-self: flex-start;\n  margin-top: auto;\n  padding-top: 3rem;\n  padding-bottom: 0.25rem;\n  color: rgb(255, 255, 255);\n  font-size: 0.8125rem;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  text-shadow: 0 1px 2px rgb(255, 255, 255);\n}\n.branding-footer p {\n  margin: 0;\n}\n@keyframes auth-field-message-in {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes auth-alert-in {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-header {\n  margin-bottom: 1.5rem;\n  text-align: center;\n}\n.form-header h2 {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  margin-bottom: 0.5rem;\n  line-height: 1.2;\n  letter-spacing: -0.02em;\n}\n.form-header p {\n  color: var(--gray-500);\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n.form-header--register h2 {\n  font-size: 1.5rem;\n}\n.social-auth {\n  margin-bottom: 1.5rem;\n}\n.social-auth__divider {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin: 0 0 1rem;\n  font-size: 0.8125rem;\n  color: var(--gray-500);\n}\n.social-auth__divider::before,\n.social-auth__divider::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--gray-200);\n}\n.social-auth__divider span {\n  white-space: nowrap;\n}\n.social-auth__buttons {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.btn-social {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.65rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--gray-700);\n  background: var(--gray-50);\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius);\n  cursor: not-allowed;\n  opacity: 0.85;\n  transition: border-color var(--transition-fast), background var(--transition-fast);\n}\n.btn-social:disabled {\n  cursor: not-allowed;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  border-radius: var(--radius);\n  margin-bottom: 1.5rem;\n  font-size: 0.875rem;\n  animation: auth-alert-in 0.25s ease-out;\n}\n.alert-error {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n}\n.alert-success {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #166534;\n}\n.alert-icon {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.auth-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--gray-700);\n}\n.form-label .optional {\n  font-weight: 400;\n  color: var(--gray-400);\n}\n.input-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-icon {\n  position: absolute;\n  left: 1rem;\n  width: 20px;\n  height: 20px;\n  color: var(--gray-400);\n  pointer-events: none;\n  z-index: 1;\n}\n.form-input {\n  width: 100%;\n  padding: 1rem 1rem 1rem 3rem;\n  font-size: 0.9375rem;\n  border: 1px solid var(--gray-300);\n  border-radius: var(--radius);\n  background: #fff;\n  color: var(--gray-900);\n  transition:\n    border-color var(--transition-fast),\n    box-shadow var(--transition-fast),\n    background var(--transition-fast);\n}\n.form-input::placeholder {\n  color: var(--gray-400);\n}\n.form-input:hover {\n  border-color: var(--gray-400);\n}\n.form-input:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 4px rgba(var(--primary-500-rgb), 0.12);\n  background: #fff;\n}\n.form-input--has-status {\n  padding-right: 2.75rem;\n}\n.form-input--password {\n  padding-right: 5.25rem;\n}\n.input-valid .form-input:not(.form-input--password) {\n  border-color: var(--success);\n}\n.input-valid .form-input.form-input--password {\n  border-color: var(--success);\n}\n.input-valid .input-icon {\n  color: var(--gray-400);\n}\n.input-error .form-input {\n  border-color: var(--error);\n}\n.input-error .form-input:focus {\n  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.12);\n}\n.input-error .input-icon {\n  color: var(--error);\n}\n.input-status {\n  position: absolute;\n  right: 0.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n  z-index: 2;\n}\n.input-status svg {\n  width: 18px;\n  height: 18px;\n}\n.input-status--valid {\n  color: var(--success);\n}\n.input-status--invalid {\n  color: var(--error);\n}\n.input-wrapper:has(.toggle-password) .input-status {\n  right: 3rem;\n}\n.toggle-password {\n  position: absolute;\n  right: 1rem;\n  background: none;\n  border: none;\n  padding: 0;\n  color: var(--gray-400);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color var(--transition-fast);\n  z-index: 2;\n}\n.toggle-password svg {\n  width: 20px;\n  height: 20px;\n}\n.toggle-password:hover {\n  color: var(--gray-600);\n}\n.field-error {\n  font-size: 0.8125rem;\n  color: var(--error);\n  animation: auth-field-message-in 0.2s ease-out;\n}\n.form-options {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.checkbox-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n}\n.checkbox-wrapper input[type=checkbox] {\n  width: 18px;\n  height: 18px;\n  accent-color: var(--primary-600);\n  cursor: pointer;\n}\n.checkbox-label {\n  font-size: 0.875rem;\n  color: var(--gray-600);\n}\n.forgot-link {\n  font-size: 0.875rem;\n  color: var(--primary-600);\n  font-weight: 500;\n}\n.forgot-link:hover {\n  color: var(--primary-700);\n  text-decoration: underline;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 1rem 1.5rem;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  border-radius: var(--radius);\n  border: none;\n  cursor: pointer;\n  transition: all var(--transition-fast);\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: var(--primary-600);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: var(--primary-700);\n  transform: translateY(-1px);\n}\n.btn-primary:active:not(:disabled) {\n  transform: translateY(0);\n}\n.spinner {\n  width: 20px;\n  height: 20px;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-footer {\n  margin-top: 2rem;\n  text-align: center;\n}\n.form-footer p {\n  font-size: 0.875rem;\n  color: var(--gray-600);\n}\n.auth-link {\n  color: var(--primary-600);\n  font-weight: 600;\n}\n.auth-link:hover {\n  text-decoration: underline;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 480px) {\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n}\n.password-strength {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.strength-bars {\n  display: flex;\n  gap: 4px;\n}\n.bar {\n  width: 48px;\n  height: 4px;\n  background: var(--gray-200);\n  border-radius: 2px;\n  transition: all var(--transition-fast);\n}\n.bar.active.weak {\n  background: #ef4444;\n}\n.bar.active.medium {\n  background: #f59e0b;\n}\n.bar.active.strong {\n  background: #10b981;\n}\n.strength-text {\n  font-size: 0.75rem;\n  color: var(--gray-500);\n}\n.password-requirements {\n  list-style: none;\n  margin: 0.5rem 0 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.password-requirements li {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n  color: var(--gray-500);\n  transition: color var(--transition-fast);\n}\n.password-requirements li::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--gray-300);\n  flex-shrink: 0;\n  transition: background var(--transition-fast);\n}\n.password-requirements li.password-requirements__met {\n  color: var(--success);\n}\n.password-requirements li.password-requirements__met::before {\n  background: var(--success);\n}\n.terms-wrapper .checkbox-wrapper {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n.terms-wrapper .checkbox-wrapper input[type=checkbox] {\n  width: 18px;\n  height: 18px;\n  margin-top: 2px;\n  accent-color: var(--primary-600);\n  cursor: pointer;\n}\n.terms-wrapper .checkbox-label {\n  font-size: 0.8125rem;\n  color: var(--gray-600);\n  line-height: 1.5;\n}\n.terms-wrapper .checkbox-label a {\n  color: var(--primary-600);\n  font-weight: 500;\n}\n.terms-wrapper .checkbox-label a:hover {\n  text-decoration: underline;\n}\n.terms-wrapper .field-error {\n  margin-top: 0.25rem;\n  margin-left: 26px;\n}\n.btn-register-submit {\n  margin-top: 0.5rem;\n}\n.form-container {\n  width: 100%;\n  max-width: 420px;\n}\n.forgot-link--button {\n  font: inherit;\n  background: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  text-align: right;\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login/login.component.ts", lineNumber: 16 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-G5X22FMH.js.map
