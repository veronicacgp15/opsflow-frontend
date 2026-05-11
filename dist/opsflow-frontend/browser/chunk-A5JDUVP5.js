import {
  AdminApiService
} from "./chunk-I4FVVWEF.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MinLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-KPJXXM46.js";
import {
  AuthService
} from "./chunk-BSOZ4HA7.js";
import {
  CommonModule,
  Component,
  Router,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6KLI64HZ.js";

// src/app/features/dashboard/pages/change-password-page/change-password-page.component.ts
function ChangePasswordPageComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg());
  }
}
function ChangePasswordPageComponent_Conditional_21_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 18);
    \u0275\u0275element(1, "polyline", 24);
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordPageComponent_Conditional_21_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "circle", 25)(2, "line", 26)(3, "line", 27);
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordPageComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "div", 17);
    \u0275\u0275template(4, ChangePasswordPageComponent_Conditional_21_Conditional_4_Template, 2, 0, ":svg:svg", 18)(5, ChangePasswordPageComponent_Conditional_21_Conditional_5_Template, 4, 0, ":svg:svg", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 21);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 22)(11, "button", 23);
    \u0275\u0275listener("click", function ChangePasswordPageComponent_Conditional_21_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.acceptNoticeAndLogout());
    });
    \u0275\u0275text(12, " Cerrar sesion ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const n_r3 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275classProp("modal__icon--success", n_r3.kind === "success")("modal__icon--error", n_r3.kind === "error");
    \u0275\u0275advance();
    \u0275\u0275conditional(n_r3.kind === "success" ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(n_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r3.message);
  }
}
var ChangePasswordPageComponent = class _ChangePasswordPageComponent {
  adminApi;
  authService;
  router;
  currentPassword = signal("");
  newPassword = signal("");
  confirmPassword = signal("");
  loading = signal(false);
  errorMsg = signal(null);
  notice = signal(null);
  constructor(adminApi, authService, router) {
    this.adminApi = adminApi;
    this.authService = authService;
    this.router = router;
  }
  submit() {
    this.errorMsg.set(null);
    const cur = this.currentPassword();
    const np = this.newPassword();
    const cp = this.confirmPassword();
    if (!cur || !np || !cp) {
      this.errorMsg.set("Completa los tres campos.");
      return;
    }
    if (np.length < 6) {
      this.errorMsg.set("La nueva contrasena debe tener al menos 6 caracteres.");
      return;
    }
    if (np !== cp) {
      this.errorMsg.set("La confirmacion no coincide con la nueva contrasena.");
      return;
    }
    if (cur === np) {
      this.errorMsg.set("La nueva contrasena debe ser diferente a la actual.");
      return;
    }
    this.loading.set(true);
    this.adminApi.changeMyPassword({ currentPassword: cur, newPassword: np }).subscribe({
      next: () => {
        this.loading.set(false);
        this.notice.set({
          kind: "success",
          title: "Contrasena actualizada",
          message: "Tu contrasena se cambio correctamente. Por seguridad cerraremos tu sesion, tendras que iniciar sesion otra vez con la nueva contrasena."
        });
      },
      error: (e) => {
        this.loading.set(false);
        const msg = e?.error?.message || e?.message;
        this.errorMsg.set(msg || "No se pudo actualizar la contrasena.");
      }
    });
  }
  /**
   * Cierra el aviso de exito y dispara el logout. El AuthService.logout() ya navega a
   * /auth/login al terminar; usamos una pequena defensa redirigiendo manualmente por si la
   * llamada a /auth/logout falla (igual queremos sacar al usuario de la app).
   */
  acceptNoticeAndLogout() {
    this.notice.set(null);
    this.authService.logout();
    setTimeout(() => {
      if (this.authService.isAuthenticated()) {
        this.router.navigate(["/auth/login"]);
      }
    }, 1500);
  }
  closeError() {
    this.errorMsg.set(null);
  }
  static \u0275fac = function ChangePasswordPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChangePasswordPageComponent)(\u0275\u0275directiveInject(AdminApiService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChangePasswordPageComponent, selectors: [["app-change-password-page"]], decls: 22, vars: 6, consts: [[1, "page"], [1, "page-head"], [1, "page-title"], [1, "page-sub"], [1, "card"], [1, "err"], ["for", "cp-current"], ["id", "cp-current", "type", "password", "autocomplete", "current-password", 3, "ngModelChange", "ngModel"], ["for", "cp-new"], ["id", "cp-new", "type", "password", "minlength", "6", "maxlength", "40", "autocomplete", "new-password", 3, "ngModelChange", "ngModel"], ["for", "cp-confirm"], ["id", "cp-confirm", "type", "password", "autocomplete", "new-password", 3, "ngModelChange", "ngModel"], [1, "actions-row"], ["type", "button", 1, "btn", "primary", 3, "click", "disabled"], ["role", "presentation", 1, "modal-backdrop"], ["role", "alertdialog", "aria-modal", "true", "aria-labelledby", "notice-title", "aria-describedby", "notice-msg", 1, "modal"], [1, "modal__header"], ["aria-hidden", "true", 1, "modal__icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "notice-title", 1, "modal__title"], ["id", "notice-msg", 1, "modal__message"], [1, "modal__actions"], ["type", "button", 1, "btn", "primary", 3, "click"], ["points", "20 6 9 17 4 12"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"]], template: function ChangePasswordPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Cambiar contrasena");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, " Actualiza tu contrasena. Necesitaras tu contrasena actual y elegir una nueva. Por seguridad cerraremos tu sesion al terminar. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275template(8, ChangePasswordPageComponent_Conditional_8_Template, 2, 1, "p", 5);
      \u0275\u0275elementStart(9, "label", 6);
      \u0275\u0275text(10, "Contrasena actual");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 7);
      \u0275\u0275listener("ngModelChange", function ChangePasswordPageComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.currentPassword.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "label", 8);
      \u0275\u0275text(13, "Nueva contrasena");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 9);
      \u0275\u0275listener("ngModelChange", function ChangePasswordPageComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.newPassword.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "label", 10);
      \u0275\u0275text(16, "Confirmar nueva contrasena");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "input", 11);
      \u0275\u0275listener("ngModelChange", function ChangePasswordPageComponent_Template_input_ngModelChange_17_listener($event) {
        return ctx.confirmPassword.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 12)(19, "button", 13);
      \u0275\u0275listener("click", function ChangePasswordPageComponent_Template_button_click_19_listener() {
        return ctx.submit();
      });
      \u0275\u0275text(20, " Cambiar contrasena ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(21, ChangePasswordPageComponent_Conditional_21_Template, 13, 7, "div", 14);
    }
    if (rf & 2) {
      let tmp_5_0;
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.errorMsg() ? 8 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.currentPassword());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.newPassword());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.confirmPassword());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_5_0 = ctx.notice()) ? 21 : -1, tmp_5_0);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, MinLengthValidator, MaxLengthValidator, NgModel], styles: ['\n\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.65rem;\n  font-weight: 700;\n  margin: 0;\n  letter-spacing: -0.02em;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-800) 0%,\n      var(--primary-500) 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.page-sub[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: var(--gray-600);\n  font-size: 0.9rem;\n  max-width: 720px;\n  line-height: 1.45;\n}\n.page-sub[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  background: var(--gray-100);\n  padding: 0.1rem 0.3rem;\n  border-radius: 4px;\n}\n.toolbar[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.filter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  font-size: 0.8rem;\n  color: var(--gray-600);\n}\n.filter--grow[_ngcontent-%COMP%] {\n  flex: 0 1 320px;\n  min-width: 200px;\n}\n.filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.6rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  background: white;\n}\n.filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n  min-width: 120px;\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.status-pill--active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5 0%,\n      #a7f3d0 100%);\n  color: #065f46;\n  border: 1px solid rgba(16, 185, 129, 0.45);\n}\n.status-pill--inactive[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  color: #ffffff;\n  border: 1px solid #b91c1c;\n  box-shadow: 0 1px 2px rgba(220, 38, 38, 0.25);\n  text-transform: uppercase;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border-radius: var(--radius-lg);\n  border: 1px solid rgba(59, 130, 246, 0.18);\n  overflow: auto;\n  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.06);\n}\n.table-wrap.inner[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8125rem;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.85rem;\n  text-align: left;\n  border-bottom: 1px solid rgba(226, 232, 240, 0.9);\n  vertical-align: middle;\n}\nth[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #eff6ff 0%,\n      #e0e7ff 100%);\n  font-weight: 700;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--primary-900);\n}\n.sortable-header[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: color 0.2s ease;\n}\n.sortable-header[_ngcontent-%COMP%]:hover {\n  color: var(--primary-600);\n}\n.sort-icon[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.sort-icon.active[_ngcontent-%COMP%] {\n  color: var(--primary-600);\n}\n.sort-icon.inactive[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  font-size: 0.85rem;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 246, 255, 0.65);\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  box-shadow: inset 4px 0 0 0 #dc2626;\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%]:hover {\n  background-color: #fecaca;\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #991b1b;\n  font-weight: 500;\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.18);\n}\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 38px;\n  height: 22px;\n  margin-right: 0.25rem;\n  flex-shrink: 0;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #10b981;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]::before {\n  transform: translateX(16px);\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .slider[_ngcontent-%COMP%] {\n  background-color: #fca5a5;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    + .slider[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  inset: 0;\n  background-color: #cbd5e1;\n  transition: 0.3s;\n}\n.slider[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: "";\n  height: 16px;\n  width: 16px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.3s;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.slider.round[_ngcontent-%COMP%] {\n  border-radius: 34px;\n}\n.slider.round[_ngcontent-%COMP%]::before {\n  border-radius: 50%;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  white-space: nowrap;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--gray-500);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.35rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  color: var(--primary-600);\n  background: rgba(37, 99, 235, 0.1);\n}\n.icon-btn.warn[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n  background: #fee2e2;\n}\n.icon-btn--success[_ngcontent-%COMP%] {\n  color: #047857;\n}\n.icon-btn--success[_ngcontent-%COMP%]:hover {\n  color: #065f46;\n  background: rgba(16, 185, 129, 0.12);\n}\n.icon-btn--muted[_ngcontent-%COMP%] {\n  color: var(--gray-300);\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n.icon-btn--muted[_ngcontent-%COMP%]:hover {\n  color: var(--gray-300);\n  background: transparent;\n}\n.btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--primary-600);\n  cursor: pointer;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  transition: all 0.15s ease;\n}\n.btn-link[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.08);\n  color: var(--primary-700);\n}\n.btn-link.danger[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.btn-link.danger[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.08);\n  color: #991b1b;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  border: 1px solid var(--gray-300);\n  background: white;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  height: fit-content;\n  transition: all 0.15s ease;\n}\n.btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--gray-50);\n  border-color: var(--gray-400);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-600),\n      var(--primary-700));\n  color: white;\n  border-color: var(--primary-600);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.25);\n}\n.btn.primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-700),\n      var(--primary-800));\n}\n.btn.danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626,\n      #b91c1c);\n  color: white;\n  border-color: #b91c1c;\n  box-shadow: 0 2px 8px rgba(220, 38, 38, 0.25);\n}\n.btn.danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #b91c1c,\n      #991b1b);\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n  padding: 1rem;\n  animation: _ngcontent-%COMP%_admin-backdrop-in 0.18s ease-out;\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 14px;\n  padding: 1.5rem;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);\n  animation: _ngcontent-%COMP%_admin-modal-in 0.22s ease-out;\n  max-height: calc(100vh - 2rem);\n  overflow-y: auto;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  max-width: 520px;\n}\n.modal--xwide[_ngcontent-%COMP%] {\n  max-width: 720px;\n}\n.modal[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin-bottom: 0.35rem;\n  color: var(--gray-700);\n}\n.modal[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type]), \n.modal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  margin-bottom: 1rem;\n  font-size: 0.875rem;\n  background: white;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.modal[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type]):focus, \n.modal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.modal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 1rem;\n}\n.form-grid[_ngcontent-%COMP%]   .form-grid__full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n@media (max-width: 640px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.modal__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.modal__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.modal__icon--info[_ngcontent-%COMP%] {\n  background: var(--primary-100);\n  color: var(--primary-700);\n}\n.modal__icon--success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.modal__icon--warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.modal__icon--error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.modal__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  letter-spacing: -0.01em;\n}\n.modal__message[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem;\n  font-size: 0.9rem;\n  color: var(--gray-700);\n  line-height: 1.55;\n}\n.modal__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--gray-600);\n  margin: 0 0 1rem;\n}\n.modal__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.err[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  font-size: 0.875rem;\n  margin: 0 0 1rem;\n}\n@keyframes _ngcontent-%COMP%_admin-backdrop-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_admin-modal-in {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border: 1px solid rgba(59, 130, 246, 0.18);\n  border-radius: var(--radius-lg);\n  padding: 1.5rem;\n  max-width: 520px;\n  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.06);\n}\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin-bottom: 0.35rem;\n  color: var(--gray-700);\n}\n.card[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  margin-bottom: 1rem;\n  font-size: 0.875rem;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.card[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.actions-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=change-password-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChangePasswordPageComponent, [{
    type: Component,
    args: [{ selector: "app-change-password-page", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page">\r
  <div class="page-head">\r
    <div>\r
      <h1 class="page-title">Cambiar contrasena</h1>\r
      <p class="page-sub">\r
        Actualiza tu contrasena. Necesitaras tu contrasena actual y elegir una nueva. Por\r
        seguridad cerraremos tu sesion al terminar.\r
      </p>\r
    </div>\r
  </div>\r
\r
  <div class="card">\r
    @if (errorMsg()) {\r
      <p class="err">{{ errorMsg() }}</p>\r
    }\r
\r
    <label for="cp-current">Contrasena actual</label>\r
    <input\r
      id="cp-current"\r
      type="password"\r
      autocomplete="current-password"\r
      [ngModel]="currentPassword()"\r
      (ngModelChange)="currentPassword.set($event)"\r
    />\r
\r
    <label for="cp-new">Nueva contrasena</label>\r
    <input\r
      id="cp-new"\r
      type="password"\r
      minlength="6"\r
      maxlength="40"\r
      autocomplete="new-password"\r
      [ngModel]="newPassword()"\r
      (ngModelChange)="newPassword.set($event)"\r
    />\r
\r
    <label for="cp-confirm">Confirmar nueva contrasena</label>\r
    <input\r
      id="cp-confirm"\r
      type="password"\r
      autocomplete="new-password"\r
      [ngModel]="confirmPassword()"\r
      (ngModelChange)="confirmPassword.set($event)"\r
    />\r
\r
    <div class="actions-row">\r
      <button type="button" class="btn primary" (click)="submit()" [disabled]="loading()">\r
        Cambiar contrasena\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Success notice -->\r
@if (notice(); as n) {\r
  <div class="modal-backdrop" role="presentation">\r
    <div\r
      class="modal"\r
      role="alertdialog"\r
      aria-modal="true"\r
      aria-labelledby="notice-title"\r
      aria-describedby="notice-msg"\r
    >\r
      <div class="modal__header">\r
        <div\r
          class="modal__icon"\r
          [class.modal__icon--success]="n.kind === 'success'"\r
          [class.modal__icon--error]="n.kind === 'error'"\r
          aria-hidden="true"\r
        >\r
          @if (n.kind === 'success') {\r
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"\r
              stroke-linecap="round" stroke-linejoin="round">\r
              <polyline points="20 6 9 17 4 12" />\r
            </svg>\r
          } @else {\r
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\r
              stroke-linecap="round" stroke-linejoin="round">\r
              <circle cx="12" cy="12" r="10" />\r
              <line x1="15" y1="9" x2="9" y2="15" />\r
              <line x1="9" y1="9" x2="15" y2="15" />\r
            </svg>\r
          }\r
        </div>\r
        <h2 id="notice-title" class="modal__title">{{ n.title }}</h2>\r
      </div>\r
      <p id="notice-msg" class="modal__message">{{ n.message }}</p>\r
      <div class="modal__actions">\r
        <button type="button" class="btn primary" (click)="acceptNoticeAndLogout()">\r
          Cerrar sesion\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
`, styles: ['/* src/app/features/dashboard/pages/change-password-page/change-password-page.component.scss */\n.page-head {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.page-title {\n  font-size: 1.65rem;\n  font-weight: 700;\n  margin: 0;\n  letter-spacing: -0.02em;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-800) 0%,\n      var(--primary-500) 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.page-sub {\n  margin: 0.35rem 0 0;\n  color: var(--gray-600);\n  font-size: 0.9rem;\n  max-width: 720px;\n  line-height: 1.45;\n}\n.page-sub code {\n  font-size: 0.75rem;\n  background: var(--gray-100);\n  padding: 0.1rem 0.3rem;\n  border-radius: 4px;\n}\n.toolbar {\n  margin-bottom: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.filter {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  font-size: 0.8rem;\n  color: var(--gray-600);\n}\n.filter--grow {\n  flex: 0 1 320px;\n  min-width: 200px;\n}\n.filter input,\n.filter select {\n  padding: 0.45rem 0.6rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  background: white;\n}\n.filter select {\n  cursor: pointer;\n  min-width: 120px;\n}\n.status-pill {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.status-pill--active {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5 0%,\n      #a7f3d0 100%);\n  color: #065f46;\n  border: 1px solid rgba(16, 185, 129, 0.45);\n}\n.status-pill--inactive {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  color: #ffffff;\n  border: 1px solid #b91c1c;\n  box-shadow: 0 1px 2px rgba(220, 38, 38, 0.25);\n  text-transform: uppercase;\n}\n.table-wrap {\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border-radius: var(--radius-lg);\n  border: 1px solid rgba(59, 130, 246, 0.18);\n  overflow: auto;\n  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.06);\n}\n.table-wrap.inner {\n  margin-bottom: 0;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8125rem;\n}\nth,\ntd {\n  padding: 0.65rem 0.85rem;\n  text-align: left;\n  border-bottom: 1px solid rgba(226, 232, 240, 0.9);\n  vertical-align: middle;\n}\nth {\n  background:\n    linear-gradient(\n      180deg,\n      #eff6ff 0%,\n      #e0e7ff 100%);\n  font-weight: 700;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--primary-900);\n}\n.sortable-header {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: color 0.2s ease;\n}\n.sortable-header:hover {\n  color: var(--primary-600);\n}\n.sort-icon {\n  font-size: 0.7rem;\n}\n.sort-icon.active {\n  color: var(--primary-600);\n}\n.sort-icon.inactive {\n  opacity: 0.3;\n  font-size: 0.85rem;\n}\ntbody tr:hover {\n  background: rgba(239, 246, 255, 0.65);\n}\ntbody tr.row-inactive {\n  background-color: #fee2e2;\n  box-shadow: inset 4px 0 0 0 #dc2626;\n}\ntbody tr.row-inactive:hover {\n  background-color: #fecaca;\n}\ntbody tr.row-inactive td {\n  color: #991b1b;\n  font-weight: 500;\n}\ntbody tr.row-inactive .icon-btn {\n  color: #b91c1c;\n}\ntbody tr.row-inactive .icon-btn:hover {\n  background: rgba(220, 38, 38, 0.18);\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 38px;\n  height: 22px;\n  margin-right: 0.25rem;\n  flex-shrink: 0;\n}\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.switch input:checked + .slider {\n  background-color: #10b981;\n}\n.switch input:checked + .slider::before {\n  transform: translateX(16px);\n}\n.switch input:not(:checked) + .slider {\n  background-color: #fca5a5;\n}\n.switch input:disabled + .slider {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  inset: 0;\n  background-color: #cbd5e1;\n  transition: 0.3s;\n}\n.slider::before {\n  position: absolute;\n  content: "";\n  height: 16px;\n  width: 16px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.3s;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.slider.round {\n  border-radius: 34px;\n}\n.slider.round::before {\n  border-radius: 50%;\n}\n.actions {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  white-space: nowrap;\n}\n.icon-btn {\n  background: none;\n  border: none;\n  color: var(--gray-500);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.35rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.icon-btn:hover {\n  color: var(--primary-600);\n  background: rgba(37, 99, 235, 0.1);\n}\n.icon-btn.warn:hover {\n  color: #dc2626;\n  background: #fee2e2;\n}\n.icon-btn--success {\n  color: #047857;\n}\n.icon-btn--success:hover {\n  color: #065f46;\n  background: rgba(16, 185, 129, 0.12);\n}\n.icon-btn--muted {\n  color: var(--gray-300);\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n.icon-btn--muted:hover {\n  color: var(--gray-300);\n  background: transparent;\n}\n.btn-link {\n  background: none;\n  border: none;\n  color: var(--primary-600);\n  cursor: pointer;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  transition: all 0.15s ease;\n}\n.btn-link:hover {\n  background: rgba(37, 99, 235, 0.08);\n  color: var(--primary-700);\n}\n.btn-link.danger {\n  color: #b91c1c;\n}\n.btn-link.danger:hover {\n  background: rgba(220, 38, 38, 0.08);\n  color: #991b1b;\n}\n.btn {\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  border: 1px solid var(--gray-300);\n  background: white;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  height: fit-content;\n  transition: all 0.15s ease;\n}\n.btn:hover:not(:disabled) {\n  background: var(--gray-50);\n  border-color: var(--gray-400);\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.primary {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-600),\n      var(--primary-700));\n  color: white;\n  border-color: var(--primary-600);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.25);\n}\n.btn.primary:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-700),\n      var(--primary-800));\n}\n.btn.danger {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626,\n      #b91c1c);\n  color: white;\n  border-color: #b91c1c;\n  box-shadow: 0 2px 8px rgba(220, 38, 38, 0.25);\n}\n.btn.danger:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #b91c1c,\n      #991b1b);\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n  padding: 1rem;\n  animation: admin-backdrop-in 0.18s ease-out;\n}\n.modal {\n  background: white;\n  border-radius: 14px;\n  padding: 1.5rem;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);\n  animation: admin-modal-in 0.22s ease-out;\n  max-height: calc(100vh - 2rem);\n  overflow-y: auto;\n}\n.modal--wide {\n  max-width: 520px;\n}\n.modal--xwide {\n  max-width: 720px;\n}\n.modal label {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin-bottom: 0.35rem;\n  color: var(--gray-700);\n}\n.modal input[type=text],\n.modal input[type=email],\n.modal input[type=password],\n.modal input[type=search],\n.modal input[type=number],\n.modal input:not([type]),\n.modal select {\n  width: 100%;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  margin-bottom: 1rem;\n  font-size: 0.875rem;\n  background: white;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.modal input[type=text]:focus,\n.modal input[type=email]:focus,\n.modal input[type=password]:focus,\n.modal input[type=search]:focus,\n.modal input[type=number]:focus,\n.modal input:not([type]):focus,\n.modal select:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.modal select {\n  cursor: pointer;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 1rem;\n}\n.form-grid .form-grid__full {\n  grid-column: 1/-1;\n}\n@media (max-width: 640px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.modal__header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.modal__icon {\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal__icon svg {\n  width: 22px;\n  height: 22px;\n}\n.modal__icon--info {\n  background: var(--primary-100);\n  color: var(--primary-700);\n}\n.modal__icon--success {\n  background: #d1fae5;\n  color: #065f46;\n}\n.modal__icon--warning {\n  background: #fef3c7;\n  color: #92400e;\n}\n.modal__icon--error {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.modal__title {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  letter-spacing: -0.01em;\n}\n.modal__message {\n  margin: 0 0 1.25rem;\n  font-size: 0.9rem;\n  color: var(--gray-700);\n  line-height: 1.55;\n}\n.modal__hint {\n  font-size: 0.8125rem;\n  color: var(--gray-600);\n  margin: 0 0 1rem;\n}\n.modal__actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.err {\n  color: #b91c1c;\n  font-size: 0.875rem;\n  margin: 0 0 1rem;\n}\n@keyframes admin-backdrop-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes admin-modal-in {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.card {\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border: 1px solid rgba(59, 130, 246, 0.18);\n  border-radius: var(--radius-lg);\n  padding: 1.5rem;\n  max-width: 520px;\n  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.06);\n}\n.card label {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin-bottom: 0.35rem;\n  color: var(--gray-700);\n}\n.card input[type=password] {\n  width: 100%;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  margin-bottom: 1rem;\n  font-size: 0.875rem;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.card input[type=password]:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.actions-row {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=change-password-page.component.css.map */\n'] }]
  }], () => [{ type: AdminApiService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangePasswordPageComponent, { className: "ChangePasswordPageComponent", filePath: "src/app/features/dashboard/pages/change-password-page/change-password-page.component.ts", lineNumber: 35 });
})();
export {
  ChangePasswordPageComponent
};
//# sourceMappingURL=chunk-A5JDUVP5.js.map
