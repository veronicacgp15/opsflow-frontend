import {
  AuthService
} from "./chunk-BSOZ4HA7.js";
import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  effect,
  inject,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-6KLI64HZ.js";

// src/app/core/directives/has-permission.directive.ts
var HasPermissionDirective = class _HasPermissionDirective {
  tpl = inject(TemplateRef);
  vcr = inject(ViewContainerRef);
  auth = inject(AuthService);
  required = [];
  rendered = false;
  constructor() {
    effect(() => {
      this.auth.permissions();
      this.update();
    });
  }
  set hasPermission(value) {
    if (value == null) {
      this.required = [];
    } else if (typeof value === "string") {
      this.required = [value];
    } else {
      this.required = [...value];
    }
    this.update();
  }
  update() {
    const allowed = this.required.length === 0 || this.auth.hasAnyPermission(this.required);
    if (allowed && !this.rendered) {
      this.vcr.createEmbeddedView(this.tpl);
      this.rendered = true;
    } else if (!allowed && this.rendered) {
      this.vcr.clear();
      this.rendered = false;
    }
  }
  static \u0275fac = function HasPermissionDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HasPermissionDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HasPermissionDirective, selectors: [["", "hasPermission", ""]], inputs: { hasPermission: "hasPermission" } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HasPermissionDirective, [{
    type: Directive,
    args: [{
      selector: "[hasPermission]",
      standalone: true
    }]
  }], () => [], { hasPermission: [{
    type: Input
  }] });
})();

// src/app/core/constants/permissions.ts
var P = {
  // AUTH — sesion
  AUTH_LOGOUT: "AUTH_LOGOUT",
  // AUTH — roles
  AUTH_ROLES_LIST: "AUTH_ROLES_LIST",
  AUTH_ROLES_GET: "AUTH_ROLES_GET",
  AUTH_ROLES_CREATE: "AUTH_ROLES_CREATE",
  AUTH_ROLES_UPDATE: "AUTH_ROLES_UPDATE",
  AUTH_ROLES_DELETE: "AUTH_ROLES_DELETE",
  AUTH_ROLES_CHANGE_USER: "AUTH_ROLES_CHANGE_USER",
  // AUTH — permisos
  AUTH_PERMISSIONS_LIST: "AUTH_PERMISSIONS_LIST",
  AUTH_ROLES_PERMISSIONS_GET: "AUTH_ROLES_PERMISSIONS_GET",
  AUTH_ROLES_PERMISSIONS_SET: "AUTH_ROLES_PERMISSIONS_SET",
  // AUTH — usuarios
  USERS_LIST: "USERS_LIST",
  USERS_GET: "USERS_GET",
  USERS_MY_ORGANIZATION: "USERS_MY_ORGANIZATION",
  USERS_CREATE: "USERS_CREATE",
  USERS_UPDATE: "USERS_UPDATE",
  USERS_UPDATE_ROLES: "USERS_UPDATE_ROLES",
  USERS_DEACTIVATE: "USERS_DEACTIVATE",
  USERS_ACTIVATE: "USERS_ACTIVATE",
  USERS_REVOKE_SESSIONS: "USERS_REVOKE_SESSIONS",
  USERS_CHANGE_PASSWORD: "USERS_CHANGE_PASSWORD",
  USERS_PROFILES_BATCH: "USERS_PROFILES_BATCH",
  // ORG — organizaciones
  ORG_CREATE: "ORG_CREATE",
  ORG_LIST: "ORG_LIST",
  ORG_GET: "ORG_GET",
  ORG_UPDATE: "ORG_UPDATE",
  ORG_DELETE: "ORG_DELETE",
  ORG_ACTIVATE: "ORG_ACTIVATE",
  ORG_DEACTIVATE: "ORG_DEACTIVATE",
  // ORG — sedes
  LOCATION_CREATE: "LOCATION_CREATE",
  LOCATION_LIST: "LOCATION_LIST",
  LOCATION_BY_ORG: "LOCATION_BY_ORG",
  LOCATION_GET: "LOCATION_GET",
  LOCATION_UPDATE: "LOCATION_UPDATE",
  LOCATION_DELETE: "LOCATION_DELETE",
  // DOCUMENTS
  DOC_CREATE: "DOC_CREATE",
  DOC_LIST: "DOC_LIST",
  DOC_GET: "DOC_GET",
  DOC_UPDATE: "DOC_UPDATE",
  DOC_DELETE: "DOC_DELETE",
  DOC_ADD_VERSION: "DOC_ADD_VERSION",
  DOC_FORCE_STATE: "DOC_FORCE_STATE"
};

export {
  HasPermissionDirective,
  P
};
//# sourceMappingURL=chunk-77VDFDZ3.js.map
