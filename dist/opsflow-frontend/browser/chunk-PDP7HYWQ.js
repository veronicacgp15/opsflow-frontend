import {
  HasPermissionDirective,
  P
} from "./chunk-77VDFDZ3.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-KPJXXM46.js";
import {
  AuthService
} from "./chunk-BSOZ4HA7.js";
import {
  CommonModule,
  Component,
  HostListener,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction5,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6KLI64HZ.js";

// src/app/features/dashboard/dashboard-layout.component.ts
var _c0 = (a0, a1, a2) => [a0, a1, a2];
var _c1 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
var _c2 = (a0, a1) => [a0, a1];
function DashboardLayoutComponent_Conditional_15_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 31)(1, "span", 7);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 8);
    \u0275\u0275element(3, "path", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Roles");
    \u0275\u0275elementEnd()();
  }
}
function DashboardLayoutComponent_Conditional_15_a_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 33)(1, "span", 7);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 8);
    \u0275\u0275element(3, "path", 34)(4, "circle", 35)(5, "path", 36)(6, "path", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Usuarios");
    \u0275\u0275elementEnd()();
  }
}
function DashboardLayoutComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1, "Administracion");
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, DashboardLayoutComponent_Conditional_15_a_2_Template, 6, 0, "a", 29)(3, DashboardLayoutComponent_Conditional_15_a_3_Template, 9, 0, "a", 30);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("hasPermission", ctx_r0.P.AUTH_ROLES_LIST);
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", ctx_r0.P.USERS_LIST);
  }
}
function DashboardLayoutComponent_Conditional_16_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 40)(1, "span", 7);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 8);
    \u0275\u0275element(3, "rect", 41)(4, "path", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Organizaciones");
    \u0275\u0275elementEnd()();
  }
}
function DashboardLayoutComponent_Conditional_16_a_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 43)(1, "span", 7);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 8);
    \u0275\u0275element(3, "path", 44)(4, "polyline", 45)(5, "line", 46)(6, "line", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Documentos");
    \u0275\u0275elementEnd()();
  }
}
function DashboardLayoutComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1, "Operacion");
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, DashboardLayoutComponent_Conditional_16_a_2_Template, 7, 0, "a", 38)(3, DashboardLayoutComponent_Conditional_16_a_3_Template, 9, 0, "a", 39);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("hasPermission", \u0275\u0275pureFunction3(2, _c0, ctx_r0.P.ORG_LIST, ctx_r0.P.ORG_GET, ctx_r0.P.ORG_CREATE));
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", \u0275\u0275pureFunction2(6, _c2, ctx_r0.P.DOC_LIST, ctx_r0.P.DOC_CREATE));
  }
}
function DashboardLayoutComponent_Conditional_34_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function DashboardLayoutComponent_Conditional_34_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openHashPanel());
    });
    \u0275\u0275text(1, " Generar hash de contrasena ");
    \u0275\u0275elementEnd();
  }
}
function DashboardLayoutComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275listener("click", function DashboardLayoutComponent_Conditional_34_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "button", 49);
    \u0275\u0275listener("click", function DashboardLayoutComponent_Conditional_34_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onRefreshToken());
    });
    \u0275\u0275text(2, " Renovar access token ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 50);
    \u0275\u0275listener("click", function DashboardLayoutComponent_Conditional_34_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.userMenuOpen.set(false));
    });
    \u0275\u0275text(4, " Cambiar contrasena ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, DashboardLayoutComponent_Conditional_34_Conditional_5_Template, 2, 0, "button", 51);
    \u0275\u0275elementStart(6, "button", 52);
    \u0275\u0275listener("click", function DashboardLayoutComponent_Conditional_34_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.authService.logout());
    });
    \u0275\u0275text(7, " Cerrar sesion ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.busy());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.authService.isAdmin() ? 5 : -1);
  }
}
function DashboardLayoutComponent_Conditional_35_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.hashResult());
  }
}
function DashboardLayoutComponent_Conditional_35_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.hashError());
  }
}
function DashboardLayoutComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 54)(2, "label");
    \u0275\u0275text(3, "Texto a hashear (BCrypt)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardLayoutComponent_Conditional_35_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.hashInput, $event) || (ctx_r0.hashInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 56)(6, "button", 57);
    \u0275\u0275listener("click", function DashboardLayoutComponent_Conditional_35_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.runHash());
    });
    \u0275\u0275text(7, "Generar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 58);
    \u0275\u0275listener("click", function DashboardLayoutComponent_Conditional_35_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hashPanelOpen.set(false));
    });
    \u0275\u0275text(9, "Cerrar");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, DashboardLayoutComponent_Conditional_35_Conditional_10_Template, 2, 1, "pre", 59)(11, DashboardLayoutComponent_Conditional_35_Conditional_11_Template, 2, 1, "p", 60);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.hashInput);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.busy() || !ctx_r0.hashInput);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.hashResult() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hashError() ? 11 : -1);
  }
}
function DashboardLayoutComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275listener("click", function DashboardLayoutComponent_Conditional_38_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sidebarOpen.set(false));
    });
    \u0275\u0275elementEnd();
  }
}
var DashboardLayoutComponent = class _DashboardLayoutComponent {
  authService;
  sidebarOpen = signal(false);
  userMenuOpen = signal(false);
  hashPanelOpen = signal(false);
  busy = signal(false);
  hashInput = "";
  hashResult = signal(null);
  hashError = signal(null);
  /** Codes de permisos expuestos al template para usar con *hasPermission. */
  P = P;
  constructor(authService) {
    this.authService = authService;
  }
  onDocumentClick(ev) {
    const t = ev.target;
    if (!t.closest(".topbar-user")) {
      this.userMenuOpen.set(false);
    }
  }
  toggleSidebar() {
    this.sidebarOpen.update((v) => !v);
  }
  toggleUserMenu(ev) {
    ev.stopPropagation();
    this.userMenuOpen.update((v) => !v);
  }
  initials() {
    const u = this.authService.currentUser();
    if (!u)
      return "?";
    const a = (u.name || u.username || "?")[0] || "?";
    const b = (u.lastname || "")[0] || "";
    return (a + b).toUpperCase();
  }
  rolesShort() {
    const r = this.authService.userRoles();
    return r.length ? r.map((x) => x.replace(/^ROLE_/, "")).join(" \xB7 ") : "";
  }
  onRefreshToken() {
    this.busy.set(true);
    this.userMenuOpen.set(false);
    this.authService.refreshAccessToken().subscribe({
      next: () => {
        this.busy.set(false);
        alert("Access token renovado.");
      },
      error: (err) => {
        this.busy.set(false);
        alert(err?.message || "No se pudo renovar el token");
      }
    });
  }
  openHashPanel() {
    this.userMenuOpen.set(false);
    this.hashResult.set(null);
    this.hashError.set(null);
    this.hashInput = "";
    this.hashPanelOpen.set(true);
  }
  runHash() {
    this.hashError.set(null);
    this.hashResult.set(null);
    this.busy.set(true);
    this.authService.generatePasswordHash(this.hashInput).subscribe({
      next: (h) => {
        this.busy.set(false);
        this.hashResult.set(h);
      },
      error: (err) => {
        this.busy.set(false);
        this.hashError.set(err?.message || "Error");
      }
    });
  }
  static \u0275fac = function DashboardLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardLayoutComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardLayoutComponent, selectors: [["app-dashboard-layout"]], hostBindings: function DashboardLayoutComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function DashboardLayoutComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, decls: 39, vars: 20, consts: [[1, "shell"], ["aria-label", "Navegacion principal", 1, "sidebar"], [1, "sidebar-brand"], [1, "brand-mark"], [1, "brand-text"], [1, "sidebar-nav"], ["routerLink", "/dashboard/inicio", "routerLinkActive", "active", 1, "nav-item"], ["aria-hidden", "true", 1, "nav-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9 22 9 12 15 12 15 22"], [1, "main-col"], [1, "topbar"], ["type", "button", "aria-label", "Abrir menu", 1, "btn-icon", "menu-toggle", 3, "click"], ["x1", "3", "y1", "12", "x2", "21", "y2", "12"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["x1", "3", "y1", "18", "x2", "21", "y2", "18"], [1, "topbar-user", 3, "click"], [1, "avatar"], [1, "user-text"], [1, "user-line1"], [1, "user-line2"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "chev"], ["points", "6 9 12 15 18 9"], [1, "user-dropdown"], [1, "hash-panel"], [1, "content"], ["aria-hidden", "true", 1, "backdrop"], [1, "nav-group-label"], ["routerLink", "/dashboard/roles", "routerLinkActive", "active", "class", "nav-item", 4, "hasPermission"], ["routerLink", "/dashboard/usuarios", "routerLinkActive", "active", "class", "nav-item", 4, "hasPermission"], ["routerLink", "/dashboard/roles", "routerLinkActive", "active", 1, "nav-item"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], ["routerLink", "/dashboard/usuarios", "routerLinkActive", "active", 1, "nav-item"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], ["routerLink", "/dashboard/organizaciones", "routerLinkActive", "active", "class", "nav-item", 4, "hasPermission"], ["routerLink", "/dashboard/documentos", "routerLinkActive", "active", "class", "nav-item", 4, "hasPermission"], ["routerLink", "/dashboard/organizaciones", "routerLinkActive", "active", 1, "nav-item"], ["x", "2", "y", "7", "width", "20", "height", "14", "rx", "2"], ["d", "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"], ["routerLink", "/dashboard/documentos", "routerLinkActive", "active", 1, "nav-item"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], [1, "user-dropdown", 3, "click"], ["type", "button", 1, "dd-item", 3, "click", "disabled"], ["routerLink", "/dashboard/mi-perfil/cambiar-password", 1, "dd-item", 3, "click"], ["type", "button", 1, "dd-item"], ["type", "button", 1, "dd-item", "danger", 3, "click"], ["type", "button", 1, "dd-item", 3, "click"], [1, "hash-inner"], ["type", "password", "placeholder", "Contrasena", 1, "hash-input", 3, "ngModelChange", "ngModel"], [1, "hash-actions"], ["type", "button", 1, "btn-sm", "primary", 3, "click", "disabled"], ["type", "button", 1, "btn-sm", 3, "click"], [1, "hash-out"], [1, "hash-err"], ["aria-hidden", "true", 1, "backdrop", 3, "click"]], template: function DashboardLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "O");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "OpsFlow");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "nav", 5)(8, "a", 6)(9, "span", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 8);
      \u0275\u0275element(11, "path", 9)(12, "polyline", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "span");
      \u0275\u0275text(14, "Inicio");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(15, DashboardLayoutComponent_Conditional_15_Template, 4, 2)(16, DashboardLayoutComponent_Conditional_16_Template, 4, 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 11)(18, "header", 12)(19, "button", 13);
      \u0275\u0275listener("click", function DashboardLayoutComponent_Template_button_click_19_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(20, "svg", 8);
      \u0275\u0275element(21, "line", 14)(22, "line", 15)(23, "line", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(24, "div", 17);
      \u0275\u0275listener("click", function DashboardLayoutComponent_Template_div_click_24_listener($event) {
        return ctx.toggleUserMenu($event);
      });
      \u0275\u0275elementStart(25, "div", 18);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 19)(28, "span", 20);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 21);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 22);
      \u0275\u0275element(33, "polyline", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275template(34, DashboardLayoutComponent_Conditional_34_Template, 8, 2, "div", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(35, DashboardLayoutComponent_Conditional_35_Template, 12, 4, "div", 25);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(36, "main", 26);
      \u0275\u0275element(37, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(38, DashboardLayoutComponent_Conditional_38_Template, 1, 0, "div", 27);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_4_0;
      \u0275\u0275classProp("sidebar-open", ctx.sidebarOpen());
      \u0275\u0275advance(15);
      \u0275\u0275conditional(ctx.authService.hasAnyPermission(\u0275\u0275pureFunction3(10, _c0, ctx.P.AUTH_ROLES_LIST, ctx.P.USERS_LIST, ctx.P.USERS_MY_ORGANIZATION)) ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.authService.hasAnyPermission(\u0275\u0275pureFunction5(14, _c1, ctx.P.ORG_LIST, ctx.P.ORG_GET, ctx.P.ORG_CREATE, ctx.P.DOC_LIST, ctx.P.DOC_CREATE)) ? 16 : -1);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.initials());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.authService.fullName() || ((tmp_4_0 = ctx.authService.currentUser()) == null ? null : tmp_4_0.username));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.rolesShort());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.userMenuOpen() ? 34 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hashPanelOpen() ? 35 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.sidebarOpen() ? 38 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    HasPermissionDirective
  ], styles: ["\n\n.shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background:\n    radial-gradient(\n      ellipse 90% 60% at 100% 0%,\n      rgba(59, 130, 246, 0.09) 0%,\n      transparent 55%),\n    radial-gradient(\n      ellipse 70% 50% at 0% 100%,\n      rgba(37, 99, 235, 0.06) 0%,\n      transparent 50%),\n    var(--gray-50);\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      180deg,\n      #0f172a 0%,\n      #1e293b 100%);\n  color: #e2e8f0;\n  display: flex;\n  flex-direction: column;\n  z-index: 40;\n  transition: transform 0.2s ease;\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1.25rem 1rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: var(--primary-500);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n}\n.brand-text[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  padding: 0.75rem 0;\n  flex: 1;\n  overflow-y: auto;\n}\n.nav-group-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n  padding: 1rem 1rem 0.35rem;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.65rem 1rem;\n  color: #cbd5e1;\n  text-decoration: none;\n  font-size: 0.9rem;\n  transition: background 0.15s, color 0.15s;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: white;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.25);\n  color: white;\n  border-right: 3px solid var(--primary-400);\n}\n.nav-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  opacity: 0.9;\n}\n.main-col[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.65rem 1.25rem;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border-bottom: 1px solid rgba(37, 99, 235, 0.12);\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.8) inset;\n  position: sticky;\n  top: 0;\n  z-index: 30;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  color: var(--gray-700);\n}\n.menu-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.topbar-user[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  cursor: pointer;\n  padding: 0.35rem 0.65rem 0.35rem 0.45rem;\n  border-radius: var(--radius-md);\n  margin-left: auto;\n  border: 1px solid rgba(59, 130, 246, 0.18);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(239, 246, 255, 0.95) 0%,\n      rgba(255, 255, 255, 0.98) 100%);\n  box-shadow: 0 1px 2px rgba(37, 99, 235, 0.08);\n}\n.topbar-user[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #ffffff 100%);\n  border-color: rgba(59, 130, 246, 0.35);\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-500) 0%,\n      var(--primary-700) 100%);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.85rem;\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);\n}\n.user-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.user-line1[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: var(--gray-900);\n}\n.user-line2[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--gray-500);\n}\n.chev[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  color: var(--gray-400);\n}\n.user-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 6px);\n  min-width: 220px;\n  background: white;\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-md);\n  padding: 0.35rem;\n  z-index: 50;\n}\n.dd-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: left;\n  padding: 0.55rem 0.75rem;\n  border: none;\n  background: none;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  color: var(--gray-800);\n}\n.dd-item[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--gray-100);\n}\n.dd-item[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.dd-item.danger[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1.25rem 1.5rem 2rem;\n  overflow-x: auto;\n}\n.backdrop[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 900px) {\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    transform: translateX(-100%);\n  }\n  .shell.sidebar-open[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .backdrop[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    inset: 0;\n    background: rgba(15, 23, 42, 0.45);\n    z-index: 35;\n  }\n}\n.hash-panel[_ngcontent-%COMP%] {\n  background: #fefce8;\n  border-bottom: 1px solid #fde047;\n  padding: 0.75rem 1.25rem;\n}\n.hash-inner[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 0 auto;\n}\n.hash-inner[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin-bottom: 0.35rem;\n}\n.hash-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem 0.65rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  margin-bottom: 0.5rem;\n}\n.hash-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.85rem;\n  border-radius: 6px;\n  border: 1px solid var(--gray-300);\n  background: white;\n  cursor: pointer;\n  font-size: 0.8125rem;\n}\n.btn-sm.primary[_ngcontent-%COMP%] {\n  background: var(--primary-600);\n  color: white;\n  border-color: var(--primary-600);\n}\n.hash-out[_ngcontent-%COMP%] {\n  background: #1e293b;\n  color: #e2e8f0;\n  padding: 0.75rem;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  overflow-x: auto;\n  margin: 0;\n}\n.hash-err[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  font-size: 0.875rem;\n  margin: 0;\n}\n/*# sourceMappingURL=dashboard-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard-layout", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterLink,
      RouterLinkActive,
      RouterOutlet,
      HasPermissionDirective
    ], template: `
    <div class="shell" [class.sidebar-open]="sidebarOpen()">
      <aside class="sidebar" aria-label="Navegacion principal">
        <div class="sidebar-brand">
          <span class="brand-mark">O</span>
          <span class="brand-text">OpsFlow</span>
        </div>

        <nav class="sidebar-nav">
          <a routerLink="/dashboard/inicio" routerLinkActive="active" class="nav-item">
            <span class="nav-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </span>
            <span>Inicio</span>
          </a>

          @if (
            authService.hasAnyPermission([
              P.AUTH_ROLES_LIST,
              P.USERS_LIST,
              P.USERS_MY_ORGANIZATION
            ])
          ) {
            <div class="nav-group-label">Administracion</div>
            <a
              *hasPermission="P.AUTH_ROLES_LIST"
              routerLink="/dashboard/roles"
              routerLinkActive="active"
              class="nav-item"
            >
              <span class="nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </span>
              <span>Roles</span>
            </a>
            <a
              *hasPermission="P.USERS_LIST"
              routerLink="/dashboard/usuarios"
              routerLinkActive="active"
              class="nav-item"
            >
              <span class="nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </span>
              <span>Usuarios</span>
            </a>
          }

          @if (
            authService.hasAnyPermission([
              P.ORG_LIST,
              P.ORG_GET,
              P.ORG_CREATE,
              P.DOC_LIST,
              P.DOC_CREATE
            ])
          ) {
            <div class="nav-group-label">Operacion</div>
            <a
              *hasPermission="[P.ORG_LIST, P.ORG_GET, P.ORG_CREATE]"
              routerLink="/dashboard/organizaciones"
              routerLinkActive="active"
              class="nav-item"
            >
              <span class="nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </span>
              <span>Organizaciones</span>
            </a>
            <a
              *hasPermission="[P.DOC_LIST, P.DOC_CREATE]"
              routerLink="/dashboard/documentos"
              routerLinkActive="active"
              class="nav-item"
            >
              <span class="nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              </span>
              <span>Documentos</span>
            </a>
          }
        </nav>
      </aside>

      <div class="main-col">
        <header class="topbar">
          <button type="button" class="btn-icon menu-toggle" (click)="toggleSidebar()" aria-label="Abrir menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>

          <div class="topbar-user" (click)="toggleUserMenu($event)">
            <div class="avatar">{{ initials() }}</div>
            <div class="user-text">
              <span class="user-line1">{{ authService.fullName() || authService.currentUser()?.username }}</span>
              <span class="user-line2">{{ rolesShort() }}</span>
            </div>
            <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>

            @if (userMenuOpen()) {
              <div class="user-dropdown" (click)="$event.stopPropagation()">
                <button type="button" class="dd-item" (click)="onRefreshToken()" [disabled]="busy()">
                  Renovar access token
                </button>
                <a
                  routerLink="/dashboard/mi-perfil/cambiar-password"
                  class="dd-item"
                  (click)="userMenuOpen.set(false)"
                >
                  Cambiar contrasena
                </a>
                @if (authService.isAdmin()) {
                  <button type="button" class="dd-item" (click)="openHashPanel()">
                    Generar hash de contrasena
                  </button>
                }
                <button type="button" class="dd-item danger" (click)="authService.logout()">
                  Cerrar sesion
                </button>
              </div>
            }
          </div>
        </header>

        @if (hashPanelOpen()) {
          <div class="hash-panel">
            <div class="hash-inner">
              <label>Texto a hashear (BCrypt)</label>
              <input type="password" [(ngModel)]="hashInput" class="hash-input" placeholder="Contrasena" />
              <div class="hash-actions">
                <button type="button" class="btn-sm primary" (click)="runHash()" [disabled]="busy() || !hashInput">Generar</button>
                <button type="button" class="btn-sm" (click)="hashPanelOpen.set(false)">Cerrar</button>
              </div>
              @if (hashResult()) {
                <pre class="hash-out">{{ hashResult() }}</pre>
              }
              @if (hashError()) {
                <p class="hash-err">{{ hashError() }}</p>
              }
            </div>
          </div>
        }

        <main class="content">
          <router-outlet />
        </main>
      </div>

      @if (sidebarOpen()) {
        <div class="backdrop" (click)="sidebarOpen.set(false)" aria-hidden="true"></div>
      }
    </div>
  `, styles: ["/* angular:styles/component:scss;5d012ac603225e478fc0139fa89231bc432568dc268f67f9f695cc73b9061db1;C:/Cursos/Java/opsflow/opsflow-frontend/src/app/features/dashboard/dashboard-layout.component.ts */\n.shell {\n  display: flex;\n  min-height: 100vh;\n  background:\n    radial-gradient(\n      ellipse 90% 60% at 100% 0%,\n      rgba(59, 130, 246, 0.09) 0%,\n      transparent 55%),\n    radial-gradient(\n      ellipse 70% 50% at 0% 100%,\n      rgba(37, 99, 235, 0.06) 0%,\n      transparent 50%),\n    var(--gray-50);\n}\n.sidebar {\n  width: 260px;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      180deg,\n      #0f172a 0%,\n      #1e293b 100%);\n  color: #e2e8f0;\n  display: flex;\n  flex-direction: column;\n  z-index: 40;\n  transition: transform 0.2s ease;\n}\n.sidebar-brand {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1.25rem 1rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.brand-mark {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: var(--primary-500);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n}\n.brand-text {\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n.sidebar-nav {\n  padding: 0.75rem 0;\n  flex: 1;\n  overflow-y: auto;\n}\n.nav-group-label {\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n  padding: 1rem 1rem 0.35rem;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.65rem 1rem;\n  color: #cbd5e1;\n  text-decoration: none;\n  font-size: 0.9rem;\n  transition: background 0.15s, color 0.15s;\n}\n.nav-item:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: white;\n}\n.nav-item.active {\n  background: rgba(59, 130, 246, 0.25);\n  color: white;\n  border-right: 3px solid var(--primary-400);\n}\n.nav-icon svg {\n  width: 20px;\n  height: 20px;\n  opacity: 0.9;\n}\n.main-col {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.topbar {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.65rem 1.25rem;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border-bottom: 1px solid rgba(37, 99, 235, 0.12);\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.8) inset;\n  position: sticky;\n  top: 0;\n  z-index: 30;\n}\n.menu-toggle {\n  display: none;\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  color: var(--gray-700);\n}\n.menu-toggle svg {\n  width: 22px;\n  height: 22px;\n}\n.topbar-user {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  cursor: pointer;\n  padding: 0.35rem 0.65rem 0.35rem 0.45rem;\n  border-radius: var(--radius-md);\n  margin-left: auto;\n  border: 1px solid rgba(59, 130, 246, 0.18);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(239, 246, 255, 0.95) 0%,\n      rgba(255, 255, 255, 0.98) 100%);\n  box-shadow: 0 1px 2px rgba(37, 99, 235, 0.08);\n}\n.topbar-user:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #ffffff 100%);\n  border-color: rgba(59, 130, 246, 0.35);\n}\n.avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-500) 0%,\n      var(--primary-700) 100%);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.85rem;\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);\n}\n.user-text {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.user-line1 {\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: var(--gray-900);\n}\n.user-line2 {\n  font-size: 0.72rem;\n  color: var(--gray-500);\n}\n.chev {\n  width: 18px;\n  height: 18px;\n  color: var(--gray-400);\n}\n.user-dropdown {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 6px);\n  min-width: 220px;\n  background: white;\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-md);\n  padding: 0.35rem;\n  z-index: 50;\n}\n.dd-item {\n  display: block;\n  width: 100%;\n  text-align: left;\n  padding: 0.55rem 0.75rem;\n  border: none;\n  background: none;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  color: var(--gray-800);\n}\n.dd-item:hover:not(:disabled) {\n  background: var(--gray-100);\n}\n.dd-item:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.dd-item.danger {\n  color: #b91c1c;\n}\n.content {\n  flex: 1;\n  padding: 1.25rem 1.5rem 2rem;\n  overflow-x: auto;\n}\n.backdrop {\n  display: none;\n}\n@media (max-width: 900px) {\n  .menu-toggle {\n    display: block;\n  }\n  .sidebar {\n    position: fixed;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    transform: translateX(-100%);\n  }\n  .shell.sidebar-open .sidebar {\n    transform: translateX(0);\n  }\n  .backdrop {\n    display: block;\n    position: fixed;\n    inset: 0;\n    background: rgba(15, 23, 42, 0.45);\n    z-index: 35;\n  }\n}\n.hash-panel {\n  background: #fefce8;\n  border-bottom: 1px solid #fde047;\n  padding: 0.75rem 1.25rem;\n}\n.hash-inner {\n  max-width: 640px;\n  margin: 0 auto;\n}\n.hash-inner label {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin-bottom: 0.35rem;\n}\n.hash-input {\n  width: 100%;\n  padding: 0.5rem 0.65rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  margin-bottom: 0.5rem;\n}\n.hash-actions {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.btn-sm {\n  padding: 0.4rem 0.85rem;\n  border-radius: 6px;\n  border: 1px solid var(--gray-300);\n  background: white;\n  cursor: pointer;\n  font-size: 0.8125rem;\n}\n.btn-sm.primary {\n  background: var(--primary-600);\n  color: white;\n  border-color: var(--primary-600);\n}\n.hash-out {\n  background: #1e293b;\n  color: #e2e8f0;\n  padding: 0.75rem;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  overflow-x: auto;\n  margin: 0;\n}\n.hash-err {\n  color: #b91c1c;\n  font-size: 0.875rem;\n  margin: 0;\n}\n/*# sourceMappingURL=dashboard-layout.component.css.map */\n"] }]
  }], () => [{ type: AuthService }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardLayoutComponent, { className: "DashboardLayoutComponent", filePath: "src/app/features/dashboard/dashboard-layout.component.ts", lineNumber: 450 });
})();
export {
  DashboardLayoutComponent
};
//# sourceMappingURL=chunk-PDP7HYWQ.js.map
