import {
  AuthService
} from "./chunk-BSOZ4HA7.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6KLI64HZ.js";

// src/app/features/dashboard/pages/dashboard-home.component.ts
var DashboardHomeComponent = class _DashboardHomeComponent {
  authService;
  constructor(authService) {
    this.authService = authService;
  }
  rolesLine() {
    const r = this.authService.userRoles();
    return r.length ? r.map((x) => x.replace(/^ROLE_/, "")).join(", ") : "\u2014";
  }
  static \u0275fac = function DashboardHomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardHomeComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardHomeComponent, selectors: [["app-dashboard-home"]], decls: 25, vars: 2, consts: [[1, "page"], [1, "page-title"], [1, "page-sub"], [1, "cards"], [1, "card", "card--user"], [1, "card-head"], ["aria-hidden", "true", 1, "card-icon", "card-icon--user"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "card-value"], [1, "card", "card--roles"], ["aria-hidden", "true", 1, "card-icon", "card-icon--roles"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"]], template: function DashboardHomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Inicio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, "Resumen de tu sesion en OpsFlow.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "article", 4)(7, "div", 5)(8, "span", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 7);
      \u0275\u0275element(10, "path", 8)(11, "circle", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "h3");
      \u0275\u0275text(13, "Usuario");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "p", 10);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "article", 11)(17, "div", 5)(18, "span", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 7);
      \u0275\u0275element(20, "path", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "h3");
      \u0275\u0275text(22, "Roles Asignados");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "p", 10);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate((tmp_0_0 = ctx.authService.currentUser()) == null ? null : tmp_0_0.username);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.rolesLine());
    }
  }, dependencies: [CommonModule], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  max-width: 960px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  margin: 0 0 0.35rem;\n  letter-spacing: -0.02em;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-800) 0%,\n      var(--primary-500) 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--gray-600);\n  margin: 0 0 1.75rem;\n  font-size: 0.9375rem;\n}\n.cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1.25rem;\n}\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border-radius: var(--radius-lg);\n  padding: 1.35rem 1.35rem 1.5rem;\n  border: 1px solid transparent;\n  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.12);\n}\n.card--user[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #eff6ff 0%,\n      #ffffff 45%,\n      #f8fafc 100%);\n  border-color: rgba(59, 130, 246, 0.25);\n}\n.card--user[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0 0 auto 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-500),\n      var(--primary-300));\n}\n.card--roles[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #ecfdf5 0%,\n      #ffffff 45%,\n      #f8fafc 100%);\n  border-color: rgba(16, 185, 129, 0.28);\n}\n.card--roles[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0 0 auto 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--accent-600),\n      #34d399);\n}\n.card-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.85rem;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.card-icon--user[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-500),\n      var(--primary-700));\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35);\n}\n.card-icon--roles[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #059669,\n      #10b981);\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: var(--gray-600);\n  margin: 0;\n  font-weight: 700;\n}\n.card-value[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  letter-spacing: -0.01em;\n}\n.card--roles[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  color: #065f46;\n}\n.card--user[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  color: var(--primary-900);\n}\n/*# sourceMappingURL=dashboard-home.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardHomeComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard-home", standalone: true, imports: [CommonModule], template: `
    <div class="page">
      <h1 class="page-title">Inicio</h1>
      <p class="page-sub">Resumen de tu sesion en OpsFlow.</p>
      <div class="cards">
        <article class="card card--user">
          <div class="card-head">
            <span class="card-icon card-icon--user" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <h3>Usuario</h3>
          </div>
          <p class="card-value">{{ authService.currentUser()?.username }}</p>
        </article>
        <article class="card card--roles">
          <div class="card-head">
            <span class="card-icon card-icon--roles" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            <h3>Roles Asignados</h3>
          </div>
          <p class="card-value">{{ rolesLine() }}</p>
        </article>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:scss;aed68b35e50400179c12062bdbf27d33d0e64d11fd4259dc5802889a714b9a24;C:/Cursos/Java/opsflow/opsflow-frontend/src/app/features/dashboard/pages/dashboard-home.component.ts */\n.page {\n  max-width: 960px;\n}\n.page-title {\n  font-size: 1.75rem;\n  font-weight: 700;\n  margin: 0 0 0.35rem;\n  letter-spacing: -0.02em;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-800) 0%,\n      var(--primary-500) 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.page-sub {\n  color: var(--gray-600);\n  margin: 0 0 1.75rem;\n  font-size: 0.9375rem;\n}\n.cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1.25rem;\n}\n.card {\n  position: relative;\n  overflow: hidden;\n  border-radius: var(--radius-lg);\n  padding: 1.35rem 1.35rem 1.5rem;\n  border: 1px solid transparent;\n  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.12);\n}\n.card--user {\n  background:\n    linear-gradient(\n      145deg,\n      #eff6ff 0%,\n      #ffffff 45%,\n      #f8fafc 100%);\n  border-color: rgba(59, 130, 246, 0.25);\n}\n.card--user::before {\n  content: "";\n  position: absolute;\n  inset: 0 0 auto 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-500),\n      var(--primary-300));\n}\n.card--roles {\n  background:\n    linear-gradient(\n      145deg,\n      #ecfdf5 0%,\n      #ffffff 45%,\n      #f8fafc 100%);\n  border-color: rgba(16, 185, 129, 0.28);\n}\n.card--roles::before {\n  content: "";\n  position: absolute;\n  inset: 0 0 auto 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--accent-600),\n      #34d399);\n}\n.card-head {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.85rem;\n}\n.card-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.card-icon svg {\n  width: 22px;\n  height: 22px;\n}\n.card-icon--user {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-500),\n      var(--primary-700));\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35);\n}\n.card-icon--roles {\n  background:\n    linear-gradient(\n      135deg,\n      #059669,\n      #10b981);\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);\n}\n.card h3 {\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: var(--gray-600);\n  margin: 0;\n  font-weight: 700;\n}\n.card-value {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  letter-spacing: -0.01em;\n}\n.card--roles .card-value {\n  color: #065f46;\n}\n.card--user .card-value {\n  color: var(--primary-900);\n}\n/*# sourceMappingURL=dashboard-home.component.css.map */\n'] }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardHomeComponent, { className: "DashboardHomeComponent", filePath: "src/app/features/dashboard/pages/dashboard-home.component.ts", lineNumber: 153 });
})();
export {
  DashboardHomeComponent
};
//# sourceMappingURL=chunk-YXNDA5YQ.js.map
