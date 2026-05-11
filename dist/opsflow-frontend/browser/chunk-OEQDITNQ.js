import {
  Component,
  RouterLink,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-6KLI64HZ.js";

// src/app/features/unauthorized/unauthorized.component.ts
var UnauthorizedComponent = class _UnauthorizedComponent {
  static \u0275fac = function UnauthorizedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnauthorizedComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnauthorizedComponent, selectors: [["app-unauthorized"]], decls: 12, vars: 0, consts: [[1, "unauthorized-container"], [1, "unauthorized-card"], [1, "icon-wrapper"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "4.93", "y1", "4.93", "x2", "19.07", "y2", "19.07"], ["routerLink", "/dashboard", 1, "btn", "btn-primary"]], template: function UnauthorizedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "circle", 4)(5, "line", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7, "Acceso denegado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, "No tienes permisos para acceder a esta pagina. Contacta a tu administrador si crees que esto es un error.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "a", 6);
      \u0275\u0275text(11, "Volver al dashboard");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [RouterLink], styles: ["\n\n.unauthorized-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  background: var(--gray-50);\n}\n.unauthorized-card[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 400px;\n}\n.icon-wrapper[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: #fef2f2;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.5rem;\n}\n.icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: #dc2626;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  margin-bottom: 0.75rem;\n}\np[_ngcontent-%COMP%] {\n  color: var(--gray-600);\n  margin-bottom: 2rem;\n  line-height: 1.5;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.75rem 1.5rem;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  border-radius: var(--radius);\n  text-decoration: none;\n  transition: all var(--transition-fast);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary-600);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-700);\n}\n/*# sourceMappingURL=unauthorized.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnauthorizedComponent, [{
    type: Component,
    args: [{ selector: "app-unauthorized", standalone: true, imports: [RouterLink], template: `
    <div class="unauthorized-container">
      <div class="unauthorized-card">
        <div class="icon-wrapper">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
          </svg>
        </div>
        <h1>Acceso denegado</h1>
        <p>No tienes permisos para acceder a esta pagina. Contacta a tu administrador si crees que esto es un error.</p>
        <a routerLink="/dashboard" class="btn btn-primary">Volver al dashboard</a>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;03c83e4cda96d0b58b93988b228a1c555e660464627f790b5427111222727f10;C:/Cursos/Java/opsflow/opsflow-frontend/src/app/features/unauthorized/unauthorized.component.ts */\n.unauthorized-container {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  background: var(--gray-50);\n}\n.unauthorized-card {\n  text-align: center;\n  max-width: 400px;\n}\n.icon-wrapper {\n  width: 80px;\n  height: 80px;\n  background: #fef2f2;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.5rem;\n}\n.icon-wrapper svg {\n  width: 40px;\n  height: 40px;\n  color: #dc2626;\n}\nh1 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  margin-bottom: 0.75rem;\n}\np {\n  color: var(--gray-600);\n  margin-bottom: 2rem;\n  line-height: 1.5;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.75rem 1.5rem;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  border-radius: var(--radius);\n  text-decoration: none;\n  transition: all var(--transition-fast);\n}\n.btn-primary {\n  background: var(--primary-600);\n  color: white;\n}\n.btn-primary:hover {\n  background: var(--primary-700);\n}\n/*# sourceMappingURL=unauthorized.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnauthorizedComponent, { className: "UnauthorizedComponent", filePath: "src/app/features/unauthorized/unauthorized.component.ts", lineNumber: 90 });
})();
export {
  UnauthorizedComponent
};
//# sourceMappingURL=chunk-OEQDITNQ.js.map
