import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-6KLI64HZ.js";

// src/app/features/auth/auth-layout/auth-layout.component.ts
var _c0 = [[["", "auth-branding", ""]], [["", "auth-form", ""]]];
var _c1 = ["[auth-branding]", "[auth-form]"];
var AuthLayoutComponent = class _AuthLayoutComponent {
  static \u0275fac = function AuthLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthLayoutComponent, selectors: [["app-auth-layout"]], ngContentSelectors: _c1, decls: 7, vars: 0, consts: [[1, "auth-page"], [1, "auth-card"], [1, "auth-shell"], [1, "auth-branding"], [1, "auth-form-panel"]], template: function AuthLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "aside", 3);
      \u0275\u0275projection(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "section", 4);
      \u0275\u0275projection(6, 1);
      \u0275\u0275elementEnd()()()();
    }
  }, styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: clamp(1rem, 4vw, 2.5rem);\n  background:\n    radial-gradient(\n      ellipse 120% 80% at 50% 0%,\n      #1e293b 0%,\n      #0f172a 55%,\n      #020617 100%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1120px;\n  border-radius: 1.5rem;\n  overflow: hidden;\n  background: rgba(255, 255, 255, 0.03);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  box-shadow:\n    0 25px 50px -12px rgba(0, 0, 0, 0.5),\n    0 0 0 1px rgba(255, 255, 255, 0.08),\n    inset 0 1px 0 rgba(255, 255, 255, 0.06);\n}\n.auth-shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: min(640px, 100vh - 5rem);\n  width: 100%;\n}\n.auth-branding[_ngcontent-%COMP%] {\n  flex: 1 1 50%;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-700) 0%,\n      var(--primary-900) 100%);\n  padding: 2.75rem 3rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  color: white;\n}\n@media (max-width: 1024px) {\n  .auth-branding[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.auth-form-panel[_ngcontent-%COMP%] {\n  flex: 1 1 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2.75rem 3rem;\n  background: #ffffff;\n  overflow-y: auto;\n}\n@media (max-width: 1024px) {\n  .auth-shell[_ngcontent-%COMP%] {\n    min-height: auto;\n  }\n  .auth-form-panel[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem;\n  }\n}\n/*# sourceMappingURL=auth-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-auth-layout", standalone: true, template: '<div class="auth-page">\r\n  <div class="auth-card">\r\n    <div class="auth-shell">\r\n      <aside class="auth-branding">\r\n        <ng-content select="[auth-branding]"></ng-content>\r\n      </aside>\r\n      <section class="auth-form-panel">\r\n        <ng-content select="[auth-form]"></ng-content>\r\n      </section>\r\n    </div>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/features/auth/auth-layout/auth-layout.component.scss */\n.auth-page {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: clamp(1rem, 4vw, 2.5rem);\n  background:\n    radial-gradient(\n      ellipse 120% 80% at 50% 0%,\n      #1e293b 0%,\n      #0f172a 55%,\n      #020617 100%);\n}\n.auth-card {\n  width: 100%;\n  max-width: 1120px;\n  border-radius: 1.5rem;\n  overflow: hidden;\n  background: rgba(255, 255, 255, 0.03);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  box-shadow:\n    0 25px 50px -12px rgba(0, 0, 0, 0.5),\n    0 0 0 1px rgba(255, 255, 255, 0.08),\n    inset 0 1px 0 rgba(255, 255, 255, 0.06);\n}\n.auth-shell {\n  display: flex;\n  min-height: min(640px, 100vh - 5rem);\n  width: 100%;\n}\n.auth-branding {\n  flex: 1 1 50%;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-700) 0%,\n      var(--primary-900) 100%);\n  padding: 2.75rem 3rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  color: white;\n}\n@media (max-width: 1024px) {\n  .auth-branding {\n    display: none;\n  }\n}\n.auth-form-panel {\n  flex: 1 1 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2.75rem 3rem;\n  background: #ffffff;\n  overflow-y: auto;\n}\n@media (max-width: 1024px) {\n  .auth-shell {\n    min-height: auto;\n  }\n  .auth-form-panel {\n    padding: 2rem 1.5rem;\n  }\n}\n/*# sourceMappingURL=auth-layout.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthLayoutComponent, { className: "AuthLayoutComponent", filePath: "src/app/features/auth/auth-layout/auth-layout.component.ts", lineNumber: 9 });
})();

export {
  AuthLayoutComponent
};
//# sourceMappingURL=chunk-SUORE4NG.js.map
