import {
  AdminApiService
} from "./chunk-I4FVVWEF.js";
import {
  HasPermissionDirective,
  P
} from "./chunk-77VDFDZ3.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MinLengthValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-KPJXXM46.js";
import {
  AuthService
} from "./chunk-BSOZ4HA7.js";
import {
  CommonModule,
  Component,
  __spreadProps,
  __spreadValues,
  computed,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-6KLI64HZ.js";

// src/app/features/dashboard/pages/users-admin-page/users-admin-page.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function UsersAdminPageComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function UsersAdminPageComponent_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275text(1, " Nuevo usuario ");
    \u0275\u0275elementEnd();
  }
}
function UsersAdminPageComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "\u25B2");
    \u0275\u0275elementEnd();
  }
}
function UsersAdminPageComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "\u25BC");
    \u0275\u0275elementEnd();
  }
}
function UsersAdminPageComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "\u2195");
    \u0275\u0275elementEnd();
  }
}
function UsersAdminPageComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "\u25B2");
    \u0275\u0275elementEnd();
  }
}
function UsersAdminPageComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "\u25BC");
    \u0275\u0275elementEnd();
  }
}
function UsersAdminPageComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "\u2195");
    \u0275\u0275elementEnd();
  }
}
function UsersAdminPageComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 20);
    \u0275\u0275text(2, "Sin datos. Pulsa Actualizar o revisa la API.");
    \u0275\u0275elementEnd()();
  }
}
function UsersAdminPageComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 20);
    \u0275\u0275text(2, "Ningun usuario coincide con los filtros.");
    \u0275\u0275elementEnd()();
  }
}
function UsersAdminPageComponent_Conditional_49_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "Activo");
    \u0275\u0275elementEnd();
  }
}
function UsersAdminPageComponent_Conditional_49_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "Inactivo");
    \u0275\u0275elementEnd();
  }
}
function UsersAdminPageComponent_Conditional_49_For_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function UsersAdminPageComponent_Conditional_49_For_1_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const u_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRolesModal(u_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 31);
    \u0275\u0275element(2, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("roles-btn--empty", !u_r4.roles.length);
    \u0275\u0275property("title", u_r4.roles.length + " rol(es) - clic para gestionar");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(u_r4.roles.length);
  }
}
function UsersAdminPageComponent_Conditional_49_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 31);
    \u0275\u0275element(2, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", u_r4.roles.length + " rol(es) (sin permiso para editar)");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(u_r4.roles.length);
  }
}
function UsersAdminPageComponent_Conditional_49_For_1_label_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 34)(1, "input", 35);
    \u0275\u0275listener("click", function UsersAdminPageComponent_Conditional_49_For_1_label_14_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const u_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleUserStatus($event, u_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", u_r4.enabled ? "Desactivar usuario" : "Activar usuario");
    \u0275\u0275advance();
    \u0275\u0275property("checked", u_r4.enabled);
  }
}
function UsersAdminPageComponent_Conditional_49_For_1_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function UsersAdminPageComponent_Conditional_49_For_1_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const u_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(u_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 38);
    \u0275\u0275element(2, "path", 39)(3, "path", 40);
    \u0275\u0275elementEnd()();
  }
}
function UsersAdminPageComponent_Conditional_49_For_1_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function UsersAdminPageComponent_Conditional_49_For_1_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const u_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.doRevoke(u_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 38);
    \u0275\u0275element(2, "path", 42)(3, "line", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("warn", u_r4.hasActiveSession)("icon-btn--muted", !u_r4.hasActiveSession);
    \u0275\u0275property("disabled", !u_r4.hasActiveSession)("title", u_r4.hasActiveSession ? "Revocar sesion activa" : "Sin sesion activa que revocar");
    \u0275\u0275attribute("aria-label", u_r4.hasActiveSession ? "Revocar sesion activa" : "Sin sesion activa que revocar");
  }
}
function UsersAdminPageComponent_Conditional_49_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275template(8, UsersAdminPageComponent_Conditional_49_For_1_Conditional_8_Template, 2, 0, "span", 22)(9, UsersAdminPageComponent_Conditional_49_For_1_Conditional_9_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275template(11, UsersAdminPageComponent_Conditional_49_For_1_Conditional_11_Template, 7, 4, "button", 24)(12, UsersAdminPageComponent_Conditional_49_For_1_Conditional_12_Template, 7, 2, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 26);
    \u0275\u0275template(14, UsersAdminPageComponent_Conditional_49_For_1_label_14_Template, 3, 2, "label", 27)(15, UsersAdminPageComponent_Conditional_49_For_1_button_15_Template, 4, 0, "button", 28)(16, UsersAdminPageComponent_Conditional_49_For_1_button_16_Template, 4, 7, "button", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("row-inactive", !u_r4.enabled);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r4.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r4.email);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(u_r4.enabled ? 8 : 9);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.authService.hasPermission(ctx_r1.P.USERS_UPDATE_ROLES) ? 11 : 12);
    \u0275\u0275advance(3);
    \u0275\u0275property("hasPermission", ctx_r1.P.USERS_DEACTIVATE);
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", ctx_r1.P.USERS_UPDATE);
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", ctx_r1.P.USERS_REVOKE_SESSIONS);
  }
}
function UsersAdminPageComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, UsersAdminPageComponent_Conditional_49_For_1_Template, 17, 10, "tr", 21, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.filteredUsers());
  }
}
function UsersAdminPageComponent_Conditional_50_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.createError());
  }
}
function UsersAdminPageComponent_Conditional_50_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r9 = ctx.$implicit;
    \u0275\u0275property("value", o_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", o_r9.name, " (#", o_r9.id, ")");
  }
}
function UsersAdminPageComponent_Conditional_50_For_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 73)(1, "input", 77);
    \u0275\u0275listener("change", function UsersAdminPageComponent_Conditional_50_For_48_Template_input_change_1_listener($event) {
      const r_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCreateRole(r_r11.name, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isCreateRoleChecked(r_r11.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r11.name);
  }
}
function UsersAdminPageComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("click", function UsersAdminPageComponent_Conditional_50_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275elementStart(1, "div", 45);
    \u0275\u0275listener("click", function UsersAdminPageComponent_Conditional_50_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 46)(3, "div", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 48);
    \u0275\u0275element(5, "path", 49)(6, "circle", 50)(7, "line", 51)(8, "line", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "h2", 53);
    \u0275\u0275text(10, "Nuevo usuario");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 54);
    \u0275\u0275text(12, " Se enviara un correo al destinatario para que verifique la cuenta antes de poder iniciar sesion. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, UsersAdminPageComponent_Conditional_50_Conditional_13_Template, 2, 1, "p", 55);
    \u0275\u0275elementStart(14, "div", 56)(15, "div")(16, "label", 57);
    \u0275\u0275text(17, "Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 58);
    \u0275\u0275listener("ngModelChange", function UsersAdminPageComponent_Conditional_50_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCreateField("username", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "label", 59);
    \u0275\u0275text(21, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 60);
    \u0275\u0275listener("ngModelChange", function UsersAdminPageComponent_Conditional_50_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCreateField("email", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "label", 61);
    \u0275\u0275text(25, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 62);
    \u0275\u0275listener("ngModelChange", function UsersAdminPageComponent_Conditional_50_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCreateField("name", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div")(28, "label", 63);
    \u0275\u0275text(29, "Apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 64);
    \u0275\u0275listener("ngModelChange", function UsersAdminPageComponent_Conditional_50_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCreateField("lastname", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 65)(32, "label", 66);
    \u0275\u0275text(33, "Contrasena temporal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 67);
    \u0275\u0275listener("ngModelChange", function UsersAdminPageComponent_Conditional_50_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCreateField("password", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 65)(36, "label", 68);
    \u0275\u0275text(37, "Organizacion (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "select", 69);
    \u0275\u0275listener("ngModelChange", function UsersAdminPageComponent_Conditional_50_Template_select_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCreateField("organizationId", $event === "" ? null : +$event));
    });
    \u0275\u0275elementStart(39, "option", 70);
    \u0275\u0275text(40, "\u2014 Sin organizacion (usa la del admin) \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(41, UsersAdminPageComponent_Conditional_50_For_42_Template, 2, 3, "option", 71, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 65)(44, "label");
    \u0275\u0275text(45, "Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 72);
    \u0275\u0275repeaterCreate(47, UsersAdminPageComponent_Conditional_50_For_48_Template, 4, 2, "label", 73, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 74)(50, "button", 75);
    \u0275\u0275listener("click", function UsersAdminPageComponent_Conditional_50_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275text(51, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 76);
    \u0275\u0275listener("click", function UsersAdminPageComponent_Conditional_50_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCreate());
    });
    \u0275\u0275text(53, " Crear usuario ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx_r1.createError() ? 13 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.createForm().username);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.createForm().email);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.createForm().name);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.createForm().lastname);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.createForm().password);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", (tmp_7_0 = ctx_r1.createForm().organizationId) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : "");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.organizations());
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.roleCatalog());
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.loading());
  }
}
function UsersAdminPageComponent_Conditional_51_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.editError());
  }
}
function UsersAdminPageComponent_Conditional_51_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r13 = ctx.$implicit;
    \u0275\u0275property("value", o_r13.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", o_r13.name, " (#", o_r13.id, ")");
  }
}
function UsersAdminPageComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("click", function UsersAdminPageComponent_Conditional_51_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEdit());
    });
    \u0275\u0275elementStart(1, "div", 78);
    \u0275\u0275listener("click", function UsersAdminPageComponent_Conditional_51_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 46)(3, "div", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 48);
    \u0275\u0275element(5, "path", 39)(6, "path", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h2", 79);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 54);
    \u0275\u0275text(10, " Se actualizan datos basicos del usuario. Para password, roles o estado usa los botones especificos de la tabla. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, UsersAdminPageComponent_Conditional_51_Conditional_11_Template, 2, 1, "p", 55);
    \u0275\u0275elementStart(12, "div", 56)(13, "div", 65)(14, "label", 80);
    \u0275\u0275text(15, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 81);
    \u0275\u0275listener("ngModelChange", function UsersAdminPageComponent_Conditional_51_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setEditField("email", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "label", 82);
    \u0275\u0275text(19, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 83);
    \u0275\u0275listener("ngModelChange", function UsersAdminPageComponent_Conditional_51_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setEditField("name", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div")(22, "label", 84);
    \u0275\u0275text(23, "Apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 85);
    \u0275\u0275listener("ngModelChange", function UsersAdminPageComponent_Conditional_51_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setEditField("lastname", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 65)(26, "label", 86);
    \u0275\u0275text(27, "Organizacion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 87);
    \u0275\u0275listener("ngModelChange", function UsersAdminPageComponent_Conditional_51_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setEditField("organizationId", $event === "" ? null : +$event));
    });
    \u0275\u0275elementStart(29, "option", 70);
    \u0275\u0275text(30, "\u2014 Sin organizacion \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(31, UsersAdminPageComponent_Conditional_51_For_32_Template, 2, 3, "option", 71, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 74)(34, "button", 75);
    \u0275\u0275listener("click", function UsersAdminPageComponent_Conditional_51_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEdit());
    });
    \u0275\u0275text(35, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 76);
    \u0275\u0275listener("click", function UsersAdminPageComponent_Conditional_51_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    });
    \u0275\u0275text(37, " Guardar cambios ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("Editar ", ctx.username, "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.editError() ? 11 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.editForm().email);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.editForm().name);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.editForm().lastname);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", (tmp_7_0 = ctx_r1.editForm().organizationId) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : "");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.organizations());
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.loading());
  }
}
function UsersAdminPageComponent_Conditional_52_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 73)(1, "input", 77);
    \u0275\u0275listener("change", function UsersAdminPageComponent_Conditional_52_For_12_Template_input_change_1_listener($event) {
      const r_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRole(r_r16.name, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.selectedRoleNames().has(r_r16.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r16.name);
  }
}
function UsersAdminPageComponent_Conditional_52_ForEmpty_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 54);
    \u0275\u0275text(1, "No hay roles disponibles en el catalogo.");
    \u0275\u0275elementEnd();
  }
}
function UsersAdminPageComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("click", function UsersAdminPageComponent_Conditional_52_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRolesModal());
    });
    \u0275\u0275elementStart(1, "div", 88);
    \u0275\u0275listener("click", function UsersAdminPageComponent_Conditional_52_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 46)(3, "div", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 48);
    \u0275\u0275element(5, "path", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h2", 89);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 54);
    \u0275\u0275text(9, " Selecciona uno o varios roles. Al guardar se reemplaza la lista completa en el servidor. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 72);
    \u0275\u0275repeaterCreate(11, UsersAdminPageComponent_Conditional_52_For_12_Template, 4, 2, "label", 73, _forTrack0, false, UsersAdminPageComponent_Conditional_52_ForEmpty_13_Template, 2, 0, "p", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 74)(15, "button", 75);
    \u0275\u0275listener("click", function UsersAdminPageComponent_Conditional_52_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRolesModal());
    });
    \u0275\u0275text(16, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 76);
    \u0275\u0275listener("click", function UsersAdminPageComponent_Conditional_52_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveRoles());
    });
    \u0275\u0275text(18, " Guardar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Roles de ", ctx.username, "");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.roleCatalog());
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.loading());
  }
}
function UsersAdminPageComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("click", function UsersAdminPageComponent_Conditional_53_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelConfirm());
    });
    \u0275\u0275elementStart(1, "div", 90);
    \u0275\u0275listener("click", function UsersAdminPageComponent_Conditional_53_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 46)(3, "div", 91);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 48);
    \u0275\u0275element(5, "path", 92)(6, "line", 93)(7, "line", 94);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h2", 95);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 96);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 74)(13, "button", 75);
    \u0275\u0275listener("click", function UsersAdminPageComponent_Conditional_53_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelConfirm());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 75);
    \u0275\u0275listener("click", function UsersAdminPageComponent_Conditional_53_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.acceptConfirm());
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cfg_r18 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275classProp("modal__icon--warning", !cfg_r18.danger)("modal__icon--error", cfg_r18.danger);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(cfg_r18.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cfg_r18.message);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", cfg_r18.cancelLabel || "Cancelar", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("danger", cfg_r18.danger)("primary", !cfg_r18.danger);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cfg_r18.confirmLabel || "Confirmar", " ");
  }
}
function UsersAdminPageComponent_Conditional_54_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 98);
    \u0275\u0275element(1, "polyline", 102);
    \u0275\u0275elementEnd();
  }
}
function UsersAdminPageComponent_Conditional_54_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 48);
    \u0275\u0275element(1, "circle", 103)(2, "line", 104)(3, "line", 105);
    \u0275\u0275elementEnd();
  }
}
function UsersAdminPageComponent_Conditional_54_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 48);
    \u0275\u0275element(1, "path", 92)(2, "line", 93)(3, "line", 94);
    \u0275\u0275elementEnd();
  }
}
function UsersAdminPageComponent_Conditional_54_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 48);
    \u0275\u0275element(1, "circle", 103)(2, "line", 106)(3, "line", 107);
    \u0275\u0275elementEnd();
  }
}
function UsersAdminPageComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("click", function UsersAdminPageComponent_Conditional_54_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeNotice());
    });
    \u0275\u0275elementStart(1, "div", 97);
    \u0275\u0275listener("click", function UsersAdminPageComponent_Conditional_54_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r19);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 46)(3, "div", 91);
    \u0275\u0275template(4, UsersAdminPageComponent_Conditional_54_Case_4_Template, 2, 0, ":svg:svg", 98)(5, UsersAdminPageComponent_Conditional_54_Case_5_Template, 4, 0, ":svg:svg", 48)(6, UsersAdminPageComponent_Conditional_54_Case_6_Template, 4, 0, ":svg:svg", 48)(7, UsersAdminPageComponent_Conditional_54_Case_7_Template, 4, 0, ":svg:svg", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h2", 99);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 100);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 74)(13, "button", 101);
    \u0275\u0275listener("click", function UsersAdminPageComponent_Conditional_54_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeNotice());
    });
    \u0275\u0275text(14, "Entendido");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const n_r20 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275classProp("modal__icon--info", n_r20.kind === "info")("modal__icon--success", n_r20.kind === "success")("modal__icon--warning", n_r20.kind === "warning")("modal__icon--error", n_r20.kind === "error");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_6_0 = n_r20.kind) === "success" ? 4 : tmp_6_0 === "error" ? 5 : tmp_6_0 === "warning" ? 6 : 7);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(n_r20.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r20.message);
  }
}
function emptyCreateForm() {
  return {
    username: "",
    email: "",
    password: "",
    name: "",
    lastname: "",
    organizationId: null,
    roleNames: /* @__PURE__ */ new Set(["ROLE_USER"])
  };
}
function emptyEditForm() {
  return { email: "", name: "", lastname: "", organizationId: null };
}
var UsersAdminPageComponent = class _UsersAdminPageComponent {
  adminApi;
  authService;
  /** Codes de permisos expuestos al template para usar con *hasPermission. */
  P = P;
  users = signal([]);
  roleCatalog = signal([]);
  /**
   * Catalogo de organizaciones para los selectores de los modales Crear/Editar.
   * Se carga al iniciar; si la llamada falla (p. ej. el admin no tiene permiso de
   * listar todas) se queda como array vacio y los selects mostraran "Sin organizacion".
   */
  organizations = signal([]);
  searchSig = signal("");
  statusFilterSig = signal("all");
  sortSig = signal("id_asc");
  loading = signal(false);
  rolesModalUser = signal(null);
  selectedRoleNames = signal(/* @__PURE__ */ new Set());
  // ---------------------------------------------------------------------------
  // Create user modal state
  // ---------------------------------------------------------------------------
  /** True cuando el modal "Crear usuario" esta abierto. */
  createOpen = signal(false);
  /** Modelo del formulario de creacion. Vinculado con [(ngModel)] en el template. */
  createForm = signal(emptyCreateForm());
  createError = signal(null);
  // ---------------------------------------------------------------------------
  // Edit user modal state
  // ---------------------------------------------------------------------------
  /** Usuario en edicion; null si el modal esta cerrado. */
  editingUser = signal(null);
  editForm = signal(emptyEditForm());
  editError = signal(null);
  notice = signal(null);
  confirmReq = signal(null);
  filteredUsers = computed(() => {
    const raw = this.searchSig().trim();
    const qLower = raw.toLowerCase();
    const status = this.statusFilterSig();
    const myId = this.authService.currentUser()?.id ?? null;
    const filtered = this.users().filter((u) => {
      if (myId != null && u.id === myId)
        return false;
      if (status === "active" && !u.enabled)
        return false;
      if (status === "inactive" && u.enabled)
        return false;
      if (!raw)
        return true;
      return String(u.id).includes(raw) || (u.username || "").toLowerCase().includes(qLower) || (u.email || "").toLowerCase().includes(qLower);
    });
    const sort = this.sortSig();
    return [...filtered].sort((a, b) => {
      switch (sort) {
        case "id_asc":
          return a.id - b.id;
        case "id_desc":
          return b.id - a.id;
        case "user_asc":
          return (a.username || "").localeCompare(b.username || "", "es", { sensitivity: "base" });
        case "user_desc":
          return (b.username || "").localeCompare(a.username || "", "es", { sensitivity: "base" });
        default:
          return 0;
      }
    });
  });
  constructor(adminApi, authService) {
    this.adminApi = adminApi;
    this.authService = authService;
  }
  ngOnInit() {
    this.reload();
    this.adminApi.listRoles().subscribe({
      next: (r) => this.roleCatalog.set(r),
      error: () => this.roleCatalog.set([])
    });
    this.adminApi.listAllOrganizations().subscribe({
      next: (orgs) => this.organizations.set(orgs),
      error: () => this.organizations.set([])
    });
  }
  // ---------------------------------------------------------------------------
  // Sorting & data load
  // ---------------------------------------------------------------------------
  toggleSort(column) {
    const current = this.sortSig();
    if (column === "id") {
      this.sortSig.set(current === "id_asc" ? "id_desc" : "id_asc");
    } else if (column === "user") {
      this.sortSig.set(current === "user_asc" ? "user_desc" : "user_asc");
    }
  }
  reload() {
    this.adminApi.listUsers().subscribe({
      next: (rows) => this.users.set(rows),
      error: (e) => this.showApiError(e, "No se pudieron cargar los usuarios")
    });
  }
  // ---------------------------------------------------------------------------
  // User status (activate / deactivate / revoke)
  // ---------------------------------------------------------------------------
  toggleUserStatus(event, u) {
    event.preventDefault();
    if (u.enabled) {
      this.requestDeactivate(u);
    } else {
      this.requestActivate(u);
    }
  }
  doRevoke(u) {
    this.openConfirm({
      title: "Revocar sesion",
      message: `Se cerrara la sesion activa de ${u.username}. Tendra que volver a iniciar sesion.`,
      confirmLabel: "Revocar",
      danger: true,
      onConfirm: () => this.executeRevoke(u)
    });
  }
  requestDeactivate(u) {
    this.openConfirm({
      title: "Desactivar usuario",
      message: `${u.username} no podra iniciar sesion hasta que se reactive la cuenta.`,
      confirmLabel: "Desactivar",
      danger: true,
      onConfirm: () => this.executeDeactivate(u)
    });
  }
  requestActivate(u) {
    this.openConfirm({
      title: "Activar usuario",
      message: `Se reactivara la cuenta de ${u.username}.`,
      confirmLabel: "Activar",
      onConfirm: () => this.executeActivate(u)
    });
  }
  executeDeactivate(u) {
    this.adminApi.deactivateUser(u.id).subscribe({
      next: () => {
        this.reload();
        this.showSuccess(`Usuario ${u.username} desactivado.`);
      },
      error: (e) => this.showApiError(e)
    });
  }
  executeActivate(u) {
    this.adminApi.activateUser(u.id).subscribe({
      next: () => {
        this.reload();
        this.showSuccess(`Usuario ${u.username} activado.`);
      },
      error: (e) => this.showApiError(e)
    });
  }
  executeRevoke(u) {
    this.adminApi.revokeUserSession(u.id).subscribe({
      next: () => {
        this.users.update((list) => list.map((x) => x.id === u.id ? __spreadProps(__spreadValues({}, x), { hasActiveSession: false }) : x));
        this.showSuccess(`Sesion de ${u.username} revocada.`);
      },
      error: (e) => this.showApiError(e)
    });
  }
  // ---------------------------------------------------------------------------
  // Create user modal
  // ---------------------------------------------------------------------------
  openCreate() {
    this.createForm.set(emptyCreateForm());
    this.createError.set(null);
    this.createOpen.set(true);
  }
  closeCreate() {
    this.createOpen.set(false);
  }
  /**
   * Setter generico para los campos del formulario de creacion.
   * El parser de templates de Angular no admite spread ({@code ...createForm()}) ni
   * computed-property shorthand, asi que la actualizacion la hacemos en el TS.
   */
  setCreateField(field, value) {
    this.createForm.update((f) => __spreadProps(__spreadValues({}, f), { [field]: value }));
  }
  toggleCreateRole(name, checked) {
    const f = this.createForm();
    const next = new Set(f.roleNames);
    if (checked)
      next.add(name);
    else
      next.delete(name);
    this.createForm.set(__spreadProps(__spreadValues({}, f), { roleNames: next }));
  }
  isCreateRoleChecked(name) {
    return this.createForm().roleNames.has(name);
  }
  saveCreate() {
    const f = this.createForm();
    if (!f.username || !f.email || !f.password || !f.name || !f.lastname) {
      this.createError.set("Completa todos los campos obligatorios.");
      return;
    }
    if (f.password.length < 6) {
      this.createError.set("La contrasena debe tener al menos 6 caracteres.");
      return;
    }
    const body = {
      username: f.username.trim(),
      email: f.email.trim(),
      password: f.password,
      name: f.name.trim(),
      lastname: f.lastname.trim(),
      roles: Array.from(f.roleNames),
      organizationId: f.organizationId
    };
    this.loading.set(true);
    this.adminApi.createUser(body).subscribe({
      next: (created) => {
        this.loading.set(false);
        this.closeCreate();
        this.reload();
        this.showSuccess(`Usuario ${created.username} creado. Recibira un correo para verificar la cuenta.`);
      },
      error: (e) => {
        this.loading.set(false);
        const msg = e?.error?.message || e?.message;
        this.createError.set(msg || "No se pudo crear el usuario.");
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Edit user modal
  // ---------------------------------------------------------------------------
  openEdit(u) {
    this.editingUser.set(u);
    this.editForm.set({
      email: u.email || "",
      name: u.name || "",
      lastname: u.lastname || "",
      organizationId: u.organizationId
    });
    this.editError.set(null);
  }
  closeEdit() {
    this.editingUser.set(null);
  }
  /** Setter generico para campos del formulario de edicion. Mismo motivo que setCreateField. */
  setEditField(field, value) {
    this.editForm.update((f) => __spreadProps(__spreadValues({}, f), { [field]: value }));
  }
  saveEdit() {
    const u = this.editingUser();
    if (!u)
      return;
    const f = this.editForm();
    if (!f.email || !f.name || !f.lastname) {
      this.editError.set("Email, nombre y apellido son obligatorios.");
      return;
    }
    const body = {
      email: f.email.trim(),
      name: f.name.trim(),
      lastname: f.lastname.trim(),
      organizationId: f.organizationId
    };
    this.loading.set(true);
    this.adminApi.updateUser(u.id, body).subscribe({
      next: () => {
        this.loading.set(false);
        this.closeEdit();
        this.reload();
        this.showSuccess("Datos del usuario actualizados.");
      },
      error: (e) => {
        this.loading.set(false);
        const msg = e?.error?.message || e?.message;
        this.editError.set(msg || "No se pudo actualizar el usuario.");
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Roles modal
  // ---------------------------------------------------------------------------
  openRolesModal(u) {
    this.rolesModalUser.set(u);
    this.selectedRoleNames.set(new Set(u.roles || []));
  }
  closeRolesModal() {
    this.rolesModalUser.set(null);
  }
  toggleRole(name, checked) {
    const next = new Set(this.selectedRoleNames());
    if (checked)
      next.add(name);
    else
      next.delete(name);
    this.selectedRoleNames.set(next);
  }
  saveRoles() {
    const u = this.rolesModalUser();
    if (!u)
      return;
    const names = Array.from(this.selectedRoleNames());
    if (!names.length) {
      this.showWarning("Selecciona al menos un rol.");
      return;
    }
    this.loading.set(true);
    this.adminApi.setUserRoles(u.id, names).subscribe({
      next: () => {
        this.loading.set(false);
        this.closeRolesModal();
        this.reload();
        this.showSuccess("Roles actualizados correctamente.");
      },
      error: (e) => {
        this.loading.set(false);
        this.showApiError(e);
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Confirm modal (replaces window.confirm)
  // ---------------------------------------------------------------------------
  openConfirm(req) {
    this.confirmReq.set(req);
  }
  cancelConfirm() {
    this.confirmReq.set(null);
  }
  acceptConfirm() {
    const req = this.confirmReq();
    if (!req)
      return;
    this.confirmReq.set(null);
    req.onConfirm();
  }
  // ---------------------------------------------------------------------------
  // Notice modal (replaces window.alert)
  // ---------------------------------------------------------------------------
  closeNotice() {
    this.notice.set(null);
  }
  showSuccess(message, title = "Listo") {
    this.notice.set({ kind: "success", title, message });
  }
  showWarning(message, title = "Atencion") {
    this.notice.set({ kind: "warning", title, message });
  }
  showApiError(e, fallback = "Ocurrio un error inesperado") {
    const message = e?.error?.message || e?.message || fallback;
    this.notice.set({ kind: "error", title: "Error", message });
  }
  static \u0275fac = function UsersAdminPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersAdminPageComponent)(\u0275\u0275directiveInject(AdminApiService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersAdminPageComponent, selectors: [["app-users-admin-page"]], decls: 55, vars: 11, consts: [[1, "page"], [1, "page-head"], [1, "page-title"], [1, "head-actions"], ["type", "button", "class", "btn primary", "title", "Crear/invitar un usuario nuevo", 3, "click", 4, "hasPermission"], [1, "toolbar"], [1, "filter"], [3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "active"], ["value", "inactive"], [1, "filter", "filter--grow"], ["type", "search", "placeholder", "ID, nombre de usuario o correo", "autocomplete", "off", 3, "ngModelChange", "ngModel"], [1, "table-wrap"], ["title", "Ordenar por ID", 1, "sortable-header", 3, "click"], [1, "sort-icon", "active"], [1, "sort-icon", "inactive"], ["title", "Ordenar por Usuario", 1, "sortable-header", 3, "click"], ["role", "presentation", 1, "modal-backdrop"], ["type", "button", "title", "Crear/invitar un usuario nuevo", 1, "btn", "primary", 3, "click"], ["colspan", "6"], [3, "row-inactive"], [1, "status-pill", "status-pill--active"], [1, "status-pill", "status-pill--inactive"], ["type", "button", 1, "roles-btn", 3, "roles-btn--empty", "title"], [1, "roles-btn", "roles-btn--empty", 3, "title"], [1, "actions"], ["class", "switch", 3, "title", 4, "hasPermission"], ["type", "button", "class", "icon-btn", "title", "Editar datos del usuario", "aria-label", "Editar usuario", 3, "click", 4, "hasPermission"], ["type", "button", "class", "icon-btn", 3, "warn", "icon-btn--muted", "disabled", "title", "click", 4, "hasPermission"], ["type", "button", 1, "roles-btn", 3, "click", "title"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], [1, "roles-btn__count"], [1, "switch", 3, "title"], ["type", "checkbox", 3, "click", "checked"], [1, "slider", "round"], ["type", "button", "title", "Editar datos del usuario", "aria-label", "Editar usuario", 1, "icon-btn", 3, "click"], ["viewBox", "0 0 24 24", "width", "18", "height", "18", "stroke", "currentColor", "stroke-width", "2", "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], ["type", "button", 1, "icon-btn", 3, "click", "disabled", "title"], ["d", "M18.36 6.64a9 9 0 1 1-12.73 0"], ["x1", "12", "y1", "2", "x2", "12", "y2", "12"], ["role", "presentation", 1, "modal-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "create-user-title", 1, "modal", "modal--xwide", 3, "click"], [1, "modal__header"], ["aria-hidden", "true", 1, "modal__icon", "modal__icon--info"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["x1", "20", "y1", "8", "x2", "20", "y2", "14"], ["x1", "23", "y1", "11", "x2", "17", "y2", "11"], ["id", "create-user-title", 1, "modal__title"], [1, "modal__hint"], [1, "err"], [1, "form-grid"], ["for", "cu-username"], ["id", "cu-username", "type", "text", "maxlength", "20", "autocomplete", "off", 3, "ngModelChange", "ngModel"], ["for", "cu-email"], ["id", "cu-email", "type", "email", "maxlength", "50", "autocomplete", "off", 3, "ngModelChange", "ngModel"], ["for", "cu-name"], ["id", "cu-name", "type", "text", "maxlength", "50", 3, "ngModelChange", "ngModel"], ["for", "cu-lastname"], ["id", "cu-lastname", "type", "text", "maxlength", "50", 3, "ngModelChange", "ngModel"], [1, "form-grid__full"], ["for", "cu-password"], ["id", "cu-password", "type", "password", "minlength", "6", "maxlength", "40", "autocomplete", "new-password", 3, "ngModelChange", "ngModel"], ["for", "cu-orgid"], ["id", "cu-orgid", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "role-grid"], [1, "chk"], [1, "modal__actions"], ["type", "button", 1, "btn", 3, "click"], ["type", "button", 1, "btn", "primary", 3, "click", "disabled"], ["type", "checkbox", 3, "change", "checked"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "edit-user-title", 1, "modal", "modal--xwide", 3, "click"], ["id", "edit-user-title", 1, "modal__title"], ["for", "eu-email"], ["id", "eu-email", "type", "email", "maxlength", "50", 3, "ngModelChange", "ngModel"], ["for", "eu-name"], ["id", "eu-name", "type", "text", "maxlength", "50", 3, "ngModelChange", "ngModel"], ["for", "eu-lastname"], ["id", "eu-lastname", "type", "text", "maxlength", "50", 3, "ngModelChange", "ngModel"], ["for", "eu-orgid"], ["id", "eu-orgid", 3, "ngModelChange", "ngModel"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "roles-modal-title", 1, "modal", "modal--wide", 3, "click"], ["id", "roles-modal-title", 1, "modal__title"], ["role", "alertdialog", "aria-modal", "true", "aria-labelledby", "confirm-modal-title", "aria-describedby", "confirm-modal-message", 1, "modal", 3, "click"], ["aria-hidden", "true", 1, "modal__icon"], ["d", "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], ["id", "confirm-modal-title", 1, "modal__title"], ["id", "confirm-modal-message", 1, "modal__message"], ["role", "alertdialog", "aria-modal", "true", "aria-labelledby", "notice-modal-title", "aria-describedby", "notice-modal-message", 1, "modal", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "notice-modal-title", 1, "modal__title"], ["id", "notice-modal-message", 1, "modal__message"], ["type", "button", 1, "btn", "primary", 3, "click"], ["points", "20 6 9 17 4 12"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], ["x1", "12", "y1", "16", "x2", "12", "y2", "12"], ["x1", "12", "y1", "8", "x2", "12.01", "y2", "8"]], template: function UsersAdminPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Usuarios");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275template(6, UsersAdminPageComponent_button_6_Template, 2, 0, "button", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "label", 6)(9, "span");
      \u0275\u0275text(10, "Estado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 7);
      \u0275\u0275listener("ngModelChange", function UsersAdminPageComponent_Template_select_ngModelChange_11_listener($event) {
        return ctx.statusFilterSig.set($event);
      });
      \u0275\u0275elementStart(12, "option", 8);
      \u0275\u0275text(13, "Todos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 9);
      \u0275\u0275text(15, "Activos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 10);
      \u0275\u0275text(17, "Inactivos");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "label", 11)(19, "span");
      \u0275\u0275text(20, "Buscar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "input", 12);
      \u0275\u0275listener("ngModelChange", function UsersAdminPageComponent_Template_input_ngModelChange_21_listener($event) {
        return ctx.searchSig.set($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 13)(23, "table")(24, "thead")(25, "tr")(26, "th")(27, "div", 14);
      \u0275\u0275listener("click", function UsersAdminPageComponent_Template_div_click_27_listener() {
        return ctx.toggleSort("id");
      });
      \u0275\u0275text(28, " ID ");
      \u0275\u0275template(29, UsersAdminPageComponent_Conditional_29_Template, 2, 0, "span", 15)(30, UsersAdminPageComponent_Conditional_30_Template, 2, 0, "span", 15)(31, UsersAdminPageComponent_Conditional_31_Template, 2, 0, "span", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "th")(33, "div", 17);
      \u0275\u0275listener("click", function UsersAdminPageComponent_Template_div_click_33_listener() {
        return ctx.toggleSort("user");
      });
      \u0275\u0275text(34, " Usuario ");
      \u0275\u0275template(35, UsersAdminPageComponent_Conditional_35_Template, 2, 0, "span", 15)(36, UsersAdminPageComponent_Conditional_36_Template, 2, 0, "span", 15)(37, UsersAdminPageComponent_Conditional_37_Template, 2, 0, "span", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "th");
      \u0275\u0275text(39, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "th");
      \u0275\u0275text(41, "Activo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "th");
      \u0275\u0275text(43, "Roles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "th");
      \u0275\u0275text(45, "Acciones");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "tbody");
      \u0275\u0275template(47, UsersAdminPageComponent_Conditional_47_Template, 3, 0, "tr")(48, UsersAdminPageComponent_Conditional_48_Template, 3, 0, "tr")(49, UsersAdminPageComponent_Conditional_49_Template, 2, 0);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(50, UsersAdminPageComponent_Conditional_50_Template, 54, 8, "div", 18)(51, UsersAdminPageComponent_Conditional_51_Template, 38, 7, "div", 18)(52, UsersAdminPageComponent_Conditional_52_Template, 19, 3, "div", 18)(53, UsersAdminPageComponent_Conditional_53_Template, 17, 12, "div", 18)(54, UsersAdminPageComponent_Conditional_54_Template, 15, 11, "div", 18);
    }
    if (rf & 2) {
      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_10_0;
      \u0275\u0275advance(6);
      \u0275\u0275property("hasPermission", ctx.P.USERS_CREATE);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.statusFilterSig());
      \u0275\u0275advance(10);
      \u0275\u0275property("ngModel", ctx.searchSig());
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.sortSig() === "id_asc" ? 29 : ctx.sortSig() === "id_desc" ? 30 : 31);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.sortSig() === "user_asc" ? 35 : ctx.sortSig() === "user_desc" ? 36 : 37);
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.users().length === 0 ? 47 : ctx.filteredUsers().length === 0 ? 48 : 49);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.createOpen() ? 50 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_7_0 = ctx.editingUser()) ? 51 : -1, tmp_7_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_8_0 = ctx.rolesModalUser()) ? 52 : -1, tmp_8_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_9_0 = ctx.confirmReq()) ? 53 : -1, tmp_9_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_10_0 = ctx.notice()) ? 54 : -1, tmp_10_0);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, MinLengthValidator, MaxLengthValidator, NgModel, HasPermissionDirective], styles: ['\n\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.65rem;\n  font-weight: 700;\n  margin: 0;\n  letter-spacing: -0.02em;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-800) 0%,\n      var(--primary-500) 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.page-sub[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: var(--gray-600);\n  font-size: 0.9rem;\n  max-width: 720px;\n  line-height: 1.45;\n}\n.page-sub[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  background: var(--gray-100);\n  padding: 0.1rem 0.3rem;\n  border-radius: 4px;\n}\n.toolbar[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.filter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  font-size: 0.8rem;\n  color: var(--gray-600);\n}\n.filter--grow[_ngcontent-%COMP%] {\n  flex: 0 1 320px;\n  min-width: 200px;\n}\n.filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.6rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  background: white;\n}\n.filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n  min-width: 120px;\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.status-pill--active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5 0%,\n      #a7f3d0 100%);\n  color: #065f46;\n  border: 1px solid rgba(16, 185, 129, 0.45);\n}\n.status-pill--inactive[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  color: #ffffff;\n  border: 1px solid #b91c1c;\n  box-shadow: 0 1px 2px rgba(220, 38, 38, 0.25);\n  text-transform: uppercase;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border-radius: var(--radius-lg);\n  border: 1px solid rgba(59, 130, 246, 0.18);\n  overflow: auto;\n  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.06);\n}\n.table-wrap.inner[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8125rem;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.85rem;\n  text-align: left;\n  border-bottom: 1px solid rgba(226, 232, 240, 0.9);\n  vertical-align: middle;\n}\nth[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #eff6ff 0%,\n      #e0e7ff 100%);\n  font-weight: 700;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--primary-900);\n}\n.sortable-header[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: color 0.2s ease;\n}\n.sortable-header[_ngcontent-%COMP%]:hover {\n  color: var(--primary-600);\n}\n.sort-icon[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.sort-icon.active[_ngcontent-%COMP%] {\n  color: var(--primary-600);\n}\n.sort-icon.inactive[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  font-size: 0.85rem;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 246, 255, 0.65);\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  box-shadow: inset 4px 0 0 0 #dc2626;\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%]:hover {\n  background-color: #fecaca;\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #991b1b;\n  font-weight: 500;\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.18);\n}\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 38px;\n  height: 22px;\n  margin-right: 0.25rem;\n  flex-shrink: 0;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #10b981;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]::before {\n  transform: translateX(16px);\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .slider[_ngcontent-%COMP%] {\n  background-color: #fca5a5;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    + .slider[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  inset: 0;\n  background-color: #cbd5e1;\n  transition: 0.3s;\n}\n.slider[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: "";\n  height: 16px;\n  width: 16px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.3s;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.slider.round[_ngcontent-%COMP%] {\n  border-radius: 34px;\n}\n.slider.round[_ngcontent-%COMP%]::before {\n  border-radius: 50%;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  white-space: nowrap;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--gray-500);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.35rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  color: var(--primary-600);\n  background: rgba(37, 99, 235, 0.1);\n}\n.icon-btn.warn[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n  background: #fee2e2;\n}\n.icon-btn--success[_ngcontent-%COMP%] {\n  color: #047857;\n}\n.icon-btn--success[_ngcontent-%COMP%]:hover {\n  color: #065f46;\n  background: rgba(16, 185, 129, 0.12);\n}\n.icon-btn--muted[_ngcontent-%COMP%] {\n  color: var(--gray-300);\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n.icon-btn--muted[_ngcontent-%COMP%]:hover {\n  color: var(--gray-300);\n  background: transparent;\n}\n.btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--primary-600);\n  cursor: pointer;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  transition: all 0.15s ease;\n}\n.btn-link[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.08);\n  color: var(--primary-700);\n}\n.btn-link.danger[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.btn-link.danger[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.08);\n  color: #991b1b;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  border: 1px solid var(--gray-300);\n  background: white;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  height: fit-content;\n  transition: all 0.15s ease;\n}\n.btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--gray-50);\n  border-color: var(--gray-400);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-600),\n      var(--primary-700));\n  color: white;\n  border-color: var(--primary-600);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.25);\n}\n.btn.primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-700),\n      var(--primary-800));\n}\n.btn.danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626,\n      #b91c1c);\n  color: white;\n  border-color: #b91c1c;\n  box-shadow: 0 2px 8px rgba(220, 38, 38, 0.25);\n}\n.btn.danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #b91c1c,\n      #991b1b);\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n  padding: 1rem;\n  animation: _ngcontent-%COMP%_admin-backdrop-in 0.18s ease-out;\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 14px;\n  padding: 1.5rem;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);\n  animation: _ngcontent-%COMP%_admin-modal-in 0.22s ease-out;\n  max-height: calc(100vh - 2rem);\n  overflow-y: auto;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  max-width: 520px;\n}\n.modal--xwide[_ngcontent-%COMP%] {\n  max-width: 720px;\n}\n.modal[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin-bottom: 0.35rem;\n  color: var(--gray-700);\n}\n.modal[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type]), \n.modal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  margin-bottom: 1rem;\n  font-size: 0.875rem;\n  background: white;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.modal[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type]):focus, \n.modal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.modal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 1rem;\n}\n.form-grid[_ngcontent-%COMP%]   .form-grid__full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n@media (max-width: 640px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.modal__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.modal__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.modal__icon--info[_ngcontent-%COMP%] {\n  background: var(--primary-100);\n  color: var(--primary-700);\n}\n.modal__icon--success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.modal__icon--warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.modal__icon--error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.modal__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  letter-spacing: -0.01em;\n}\n.modal__message[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem;\n  font-size: 0.9rem;\n  color: var(--gray-700);\n  line-height: 1.55;\n}\n.modal__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--gray-600);\n  margin: 0 0 1rem;\n}\n.modal__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.err[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  font-size: 0.875rem;\n  margin: 0 0 1rem;\n}\n@keyframes _ngcontent-%COMP%_admin-backdrop-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_admin-modal-in {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.roles-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.3rem 0.65rem;\n  border-radius: 999px;\n  border: 1px solid rgba(59, 130, 246, 0.3);\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #e0e7ff 100%);\n  color: var(--primary-800);\n  cursor: pointer;\n  font-size: 0.75rem;\n  font-weight: 600;\n  transition: all 0.2s ease;\n}\n.roles-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-500);\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe 0%,\n      #c7d2fe 100%);\n  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.18);\n}\n.roles-btn--empty[_ngcontent-%COMP%] {\n  background: var(--gray-50);\n  color: var(--gray-500);\n  border-color: var(--gray-200);\n}\n.roles-btn--empty[_ngcontent-%COMP%]:hover {\n  background: var(--gray-100);\n  color: var(--gray-700);\n  border-color: var(--gray-300);\n}\n.roles-btn__count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 1.25rem;\n  height: 1.25rem;\n  padding: 0 0.35rem;\n  border-radius: 999px;\n  background: rgba(37, 99, 235, 0.18);\n  color: var(--primary-900);\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n.roles-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.role-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n  max-height: 280px;\n  overflow-y: auto;\n  padding-right: 0.25rem;\n}\n.chk[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  padding: 0.5rem 0.65rem;\n  border: 1px solid var(--gray-200);\n  border-radius: 8px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.chk[_ngcontent-%COMP%]:hover {\n  background: var(--gray-50);\n  border-color: var(--gray-300);\n}\n.chk[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  accent-color: var(--primary-600);\n}\n/*# sourceMappingURL=users-admin-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersAdminPageComponent, [{
    type: Component,
    args: [{ selector: "app-users-admin-page", standalone: true, imports: [CommonModule, FormsModule, HasPermissionDirective], template: `<div class="page">\r
  <div class="page-head">\r
    <div>\r
      <h1 class="page-title">Usuarios</h1>\r
    </div>\r
    <div class="head-actions">\r
      <button\r
        *hasPermission="P.USERS_CREATE"\r
        type="button"\r
        class="btn primary"\r
        (click)="openCreate()"\r
        title="Crear/invitar un usuario nuevo"\r
      >\r
        Nuevo usuario\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div class="toolbar">\r
    <label class="filter">\r
      <span>Estado</span>\r
      <select [ngModel]="statusFilterSig()" (ngModelChange)="statusFilterSig.set($event)">\r
        <option value="all">Todos</option>\r
        <option value="active">Activos</option>\r
        <option value="inactive">Inactivos</option>\r
      </select>\r
    </label>\r
\r
    <label class="filter filter--grow">\r
      <span>Buscar</span>\r
      <input\r
        type="search"\r
        [ngModel]="searchSig()"\r
        (ngModelChange)="searchSig.set($event)"\r
        placeholder="ID, nombre de usuario o correo"\r
        autocomplete="off"\r
      />\r
    </label>\r
  </div>\r
\r
  <div class="table-wrap">\r
    <table>\r
      <thead>\r
        <tr>\r
          <th>\r
            <div class="sortable-header" (click)="toggleSort('id')" title="Ordenar por ID">\r
              ID\r
              @if (sortSig() === 'id_asc') {\r
                <span class="sort-icon active">&#9650;</span>\r
              } @else if (sortSig() === 'id_desc') {\r
                <span class="sort-icon active">&#9660;</span>\r
              } @else {\r
                <span class="sort-icon inactive">&#8597;</span>\r
              }\r
            </div>\r
          </th>\r
          <th>\r
            <div class="sortable-header" (click)="toggleSort('user')" title="Ordenar por Usuario">\r
              Usuario\r
              @if (sortSig() === 'user_asc') {\r
                <span class="sort-icon active">&#9650;</span>\r
              } @else if (sortSig() === 'user_desc') {\r
                <span class="sort-icon active">&#9660;</span>\r
              } @else {\r
                <span class="sort-icon inactive">&#8597;</span>\r
              }\r
            </div>\r
          </th>\r
          <th>Email</th>\r
          <th>Activo</th>\r
          <th>Roles</th>\r
          <th>Acciones</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        @if (users().length === 0) {\r
          <tr><td colspan="6">Sin datos. Pulsa Actualizar o revisa la API.</td></tr>\r
        } @else if (filteredUsers().length === 0) {\r
          <tr><td colspan="6">Ningun usuario coincide con los filtros.</td></tr>\r
        } @else {\r
          @for (u of filteredUsers(); track u.id) {\r
            <tr [class.row-inactive]="!u.enabled">\r
              <td>{{ u.id }}</td>\r
              <td>{{ u.username }}</td>\r
              <td>{{ u.email }}</td>\r
              <td>\r
                @if (u.enabled) {\r
                  <span class="status-pill status-pill--active">Activo</span>\r
                } @else {\r
                  <span class="status-pill status-pill--inactive">Inactivo</span>\r
                }\r
              </td>\r
              <td>\r
                <!-- Si no hay permiso para editar roles, mostramos un badge informativo. -->\r
                @if (authService.hasPermission(P.USERS_UPDATE_ROLES)) {\r
                  <button\r
                    type="button"\r
                    class="roles-btn"\r
                    [class.roles-btn--empty]="!u.roles.length"\r
                    (click)="openRolesModal(u)"\r
                    [title]="u.roles.length + ' rol(es) - clic para gestionar'"\r
                  >\r
                    <svg\r
                      viewBox="0 0 24 24"\r
                      fill="none"\r
                      stroke="currentColor"\r
                      stroke-width="2"\r
                      stroke-linecap="round"\r
                      stroke-linejoin="round"\r
                      aria-hidden="true"\r
                    >\r
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />\r
                    </svg>\r
                    <span>Roles</span>\r
                    <span class="roles-btn__count">{{ u.roles.length }}</span>\r
                  </button>\r
                } @else {\r
                  <span\r
                    class="roles-btn roles-btn--empty"\r
                    [title]="u.roles.length + ' rol(es) (sin permiso para editar)'"\r
                  >\r
                    <svg\r
                      viewBox="0 0 24 24"\r
                      fill="none"\r
                      stroke="currentColor"\r
                      stroke-width="2"\r
                      stroke-linecap="round"\r
                      stroke-linejoin="round"\r
                      aria-hidden="true"\r
                    >\r
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />\r
                    </svg>\r
                    <span>Roles</span>\r
                    <span class="roles-btn__count">{{ u.roles.length }}</span>\r
                  </span>\r
                }\r
              </td>\r
              <td class="actions">\r
                <label\r
                  *hasPermission="P.USERS_DEACTIVATE"\r
                  class="switch"\r
                  [title]="u.enabled ? 'Desactivar usuario' : 'Activar usuario'"\r
                >\r
                  <input\r
                    type="checkbox"\r
                    [checked]="u.enabled"\r
                    (click)="toggleUserStatus($event, u)"\r
                  />\r
                  <span class="slider round"></span>\r
                </label>\r
\r
                <button\r
                  *hasPermission="P.USERS_UPDATE"\r
                  type="button"\r
                  class="icon-btn"\r
                  (click)="openEdit(u)"\r
                  title="Editar datos del usuario"\r
                  aria-label="Editar usuario"\r
                >\r
                  <svg\r
                    viewBox="0 0 24 24"\r
                    width="18"\r
                    height="18"\r
                    stroke="currentColor"\r
                    stroke-width="2"\r
                    fill="none"\r
                    stroke-linecap="round"\r
                    stroke-linejoin="round"\r
                    aria-hidden="true"\r
                  >\r
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />\r
                    <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />\r
                  </svg>\r
                </button>\r
\r
                <button\r
                  *hasPermission="P.USERS_REVOKE_SESSIONS"\r
                  type="button"\r
                  class="icon-btn"\r
                  [class.warn]="u.hasActiveSession"\r
                  [class.icon-btn--muted]="!u.hasActiveSession"\r
                  (click)="doRevoke(u)"\r
                  [disabled]="!u.hasActiveSession"\r
                  [title]="u.hasActiveSession ? 'Revocar sesion activa' : 'Sin sesion activa que revocar'"\r
                  [attr.aria-label]="u.hasActiveSession ? 'Revocar sesion activa' : 'Sin sesion activa que revocar'"\r
                >\r
                  <svg\r
                    viewBox="0 0 24 24"\r
                    width="18"\r
                    height="18"\r
                    stroke="currentColor"\r
                    stroke-width="2"\r
                    fill="none"\r
                    stroke-linecap="round"\r
                    stroke-linejoin="round"\r
                    aria-hidden="true"\r
                  >\r
                    <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />\r
                    <line x1="12" y1="2" x2="12" y2="12" />\r
                  </svg>\r
                </button>\r
              </td>\r
            </tr>\r
          }\r
        }\r
      </tbody>\r
    </table>\r
  </div>\r
</div>\r
\r
<!-- =================================================================== -->\r
<!-- Create user modal                                                   -->\r
<!-- =================================================================== -->\r
@if (createOpen()) {\r
  <div class="modal-backdrop" (click)="closeCreate()" role="presentation">\r
    <div\r
      class="modal modal--xwide"\r
      role="dialog"\r
      aria-modal="true"\r
      aria-labelledby="create-user-title"\r
      (click)="$event.stopPropagation()"\r
    >\r
      <div class="modal__header">\r
        <div class="modal__icon modal__icon--info" aria-hidden="true">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\r
            stroke-linecap="round" stroke-linejoin="round">\r
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />\r
            <circle cx="9" cy="7" r="4" />\r
            <line x1="20" y1="8" x2="20" y2="14" />\r
            <line x1="23" y1="11" x2="17" y2="11" />\r
          </svg>\r
        </div>\r
        <h2 id="create-user-title" class="modal__title">Nuevo usuario</h2>\r
      </div>\r
\r
      <p class="modal__hint">\r
        Se enviara un correo al destinatario para que verifique la cuenta antes de poder iniciar sesion.\r
      </p>\r
\r
      @if (createError()) {\r
        <p class="err">{{ createError() }}</p>\r
      }\r
\r
      <!--\r
        Distribuimos los campos cortos en 2 columnas para aprovechar el ancho del modal\r
        (modal--xwide). Los campos largos (contrasena, organizacion y roles) ocupan toda\r
        la fila con form-grid__full para no apretarlos.\r
      -->\r
      <div class="form-grid">\r
        <div>\r
          <label for="cu-username">Usuario</label>\r
          <input id="cu-username" type="text" maxlength="20" autocomplete="off"\r
            [ngModel]="createForm().username"\r
            (ngModelChange)="setCreateField('username', $event)" />\r
        </div>\r
\r
        <div>\r
          <label for="cu-email">Email</label>\r
          <input id="cu-email" type="email" maxlength="50" autocomplete="off"\r
            [ngModel]="createForm().email"\r
            (ngModelChange)="setCreateField('email', $event)" />\r
        </div>\r
\r
        <div>\r
          <label for="cu-name">Nombre</label>\r
          <input id="cu-name" type="text" maxlength="50"\r
            [ngModel]="createForm().name"\r
            (ngModelChange)="setCreateField('name', $event)" />\r
        </div>\r
\r
        <div>\r
          <label for="cu-lastname">Apellido</label>\r
          <input id="cu-lastname" type="text" maxlength="50"\r
            [ngModel]="createForm().lastname"\r
            (ngModelChange)="setCreateField('lastname', $event)" />\r
        </div>\r
\r
        <div class="form-grid__full">\r
          <label for="cu-password">Contrasena temporal</label>\r
          <input id="cu-password" type="password" minlength="6" maxlength="40" autocomplete="new-password"\r
            [ngModel]="createForm().password"\r
            (ngModelChange)="setCreateField('password', $event)" />\r
        </div>\r
\r
        <div class="form-grid__full">\r
          <label for="cu-orgid">Organizacion (opcional)</label>\r
          <select id="cu-orgid"\r
            [ngModel]="createForm().organizationId ?? ''"\r
            (ngModelChange)="setCreateField('organizationId', $event === '' ? null : +$event)">\r
            <option value="">\u2014 Sin organizacion (usa la del admin) \u2014</option>\r
            @for (o of organizations(); track o.id) {\r
              <option [value]="o.id">{{ o.name }} (#{{ o.id }})</option>\r
            }\r
          </select>\r
        </div>\r
\r
        <div class="form-grid__full">\r
          <label>Roles</label>\r
          <div class="role-grid">\r
            @for (r of roleCatalog(); track r.id) {\r
              <label class="chk">\r
                <input\r
                  type="checkbox"\r
                  [checked]="isCreateRoleChecked(r.name)"\r
                  (change)="toggleCreateRole(r.name, $any($event.target).checked)"\r
                />\r
                <span>{{ r.name }}</span>\r
              </label>\r
            }\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="modal__actions">\r
        <button type="button" class="btn" (click)="closeCreate()">Cancelar</button>\r
        <button type="button" class="btn primary" (click)="saveCreate()" [disabled]="loading()">\r
          Crear usuario\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<!-- =================================================================== -->\r
<!-- Edit user modal                                                     -->\r
<!-- =================================================================== -->\r
@if (editingUser(); as eu) {\r
  <div class="modal-backdrop" (click)="closeEdit()" role="presentation">\r
    <div\r
      class="modal modal--xwide"\r
      role="dialog"\r
      aria-modal="true"\r
      aria-labelledby="edit-user-title"\r
      (click)="$event.stopPropagation()"\r
    >\r
      <div class="modal__header">\r
        <div class="modal__icon modal__icon--info" aria-hidden="true">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\r
            stroke-linecap="round" stroke-linejoin="round">\r
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />\r
            <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />\r
          </svg>\r
        </div>\r
        <h2 id="edit-user-title" class="modal__title">Editar {{ eu.username }}</h2>\r
      </div>\r
\r
      <p class="modal__hint">\r
        Se actualizan datos basicos del usuario. Para password, roles o estado usa los botones\r
        especificos de la tabla.\r
      </p>\r
\r
      @if (editError()) {\r
        <p class="err">{{ editError() }}</p>\r
      }\r
\r
      <div class="form-grid">\r
        <div class="form-grid__full">\r
          <label for="eu-email">Email</label>\r
          <input id="eu-email" type="email" maxlength="50"\r
            [ngModel]="editForm().email"\r
            (ngModelChange)="setEditField('email', $event)" />\r
        </div>\r
\r
        <div>\r
          <label for="eu-name">Nombre</label>\r
          <input id="eu-name" type="text" maxlength="50"\r
            [ngModel]="editForm().name"\r
            (ngModelChange)="setEditField('name', $event)" />\r
        </div>\r
\r
        <div>\r
          <label for="eu-lastname">Apellido</label>\r
          <input id="eu-lastname" type="text" maxlength="50"\r
            [ngModel]="editForm().lastname"\r
            (ngModelChange)="setEditField('lastname', $event)" />\r
        </div>\r
\r
        <div class="form-grid__full">\r
          <label for="eu-orgid">Organizacion</label>\r
          <select id="eu-orgid"\r
            [ngModel]="editForm().organizationId ?? ''"\r
            (ngModelChange)="setEditField('organizationId', $event === '' ? null : +$event)">\r
            <option value="">\u2014 Sin organizacion \u2014</option>\r
            @for (o of organizations(); track o.id) {\r
              <option [value]="o.id">{{ o.name }} (#{{ o.id }})</option>\r
            }\r
          </select>\r
        </div>\r
      </div>\r
\r
      <div class="modal__actions">\r
        <button type="button" class="btn" (click)="closeEdit()">Cancelar</button>\r
        <button type="button" class="btn primary" (click)="saveEdit()" [disabled]="loading()">\r
          Guardar cambios\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<!-- =================================================================== -->\r
<!-- Roles modal: view + edit                                            -->\r
<!-- =================================================================== -->\r
@if (rolesModalUser(); as modalUser) {\r
  <div class="modal-backdrop" (click)="closeRolesModal()" role="presentation">\r
    <div\r
      class="modal modal--wide"\r
      role="dialog"\r
      aria-modal="true"\r
      aria-labelledby="roles-modal-title"\r
      (click)="$event.stopPropagation()"\r
    >\r
      <div class="modal__header">\r
        <div class="modal__icon modal__icon--info" aria-hidden="true">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\r
            stroke-linecap="round" stroke-linejoin="round">\r
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />\r
          </svg>\r
        </div>\r
        <h2 id="roles-modal-title" class="modal__title">Roles de {{ modalUser.username }}</h2>\r
      </div>\r
\r
      <p class="modal__hint">\r
        Selecciona uno o varios roles. Al guardar se reemplaza la lista completa en el servidor.\r
      </p>\r
\r
      <div class="role-grid">\r
        @for (r of roleCatalog(); track r.id) {\r
          <label class="chk">\r
            <input\r
              type="checkbox"\r
              [checked]="selectedRoleNames().has(r.name)"\r
              (change)="toggleRole(r.name, $any($event.target).checked)"\r
            />\r
            <span>{{ r.name }}</span>\r
          </label>\r
        } @empty {\r
          <p class="modal__hint">No hay roles disponibles en el catalogo.</p>\r
        }\r
      </div>\r
\r
      <div class="modal__actions">\r
        <button type="button" class="btn" (click)="closeRolesModal()">Cancelar</button>\r
        <button\r
          type="button"\r
          class="btn primary"\r
          (click)="saveRoles()"\r
          [disabled]="loading()"\r
        >\r
          Guardar\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<!-- =================================================================== -->\r
<!-- Confirm modal (replaces native confirm)                             -->\r
<!-- =================================================================== -->\r
@if (confirmReq(); as cfg) {\r
  <div class="modal-backdrop" (click)="cancelConfirm()" role="presentation">\r
    <div\r
      class="modal"\r
      role="alertdialog"\r
      aria-modal="true"\r
      aria-labelledby="confirm-modal-title"\r
      aria-describedby="confirm-modal-message"\r
      (click)="$event.stopPropagation()"\r
    >\r
      <div class="modal__header">\r
        <div\r
          class="modal__icon"\r
          [class.modal__icon--warning]="!cfg.danger"\r
          [class.modal__icon--error]="cfg.danger"\r
          aria-hidden="true"\r
        >\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\r
            stroke-linecap="round" stroke-linejoin="round">\r
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />\r
            <line x1="12" y1="9" x2="12" y2="13" />\r
            <line x1="12" y1="17" x2="12.01" y2="17" />\r
          </svg>\r
        </div>\r
        <h2 id="confirm-modal-title" class="modal__title">{{ cfg.title }}</h2>\r
      </div>\r
\r
      <p id="confirm-modal-message" class="modal__message">{{ cfg.message }}</p>\r
\r
      <div class="modal__actions">\r
        <button type="button" class="btn" (click)="cancelConfirm()">\r
          {{ cfg.cancelLabel || 'Cancelar' }}\r
        </button>\r
        <button\r
          type="button"\r
          class="btn"\r
          [class.danger]="cfg.danger"\r
          [class.primary]="!cfg.danger"\r
          (click)="acceptConfirm()"\r
        >\r
          {{ cfg.confirmLabel || 'Confirmar' }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<!-- =================================================================== -->\r
<!-- Notice modal (replaces native alert: success / info / warning / error) -->\r
<!-- =================================================================== -->\r
@if (notice(); as n) {\r
  <div class="modal-backdrop" (click)="closeNotice()" role="presentation">\r
    <div\r
      class="modal"\r
      role="alertdialog"\r
      aria-modal="true"\r
      aria-labelledby="notice-modal-title"\r
      aria-describedby="notice-modal-message"\r
      (click)="$event.stopPropagation()"\r
    >\r
      <div class="modal__header">\r
        <div\r
          class="modal__icon"\r
          [class.modal__icon--info]="n.kind === 'info'"\r
          [class.modal__icon--success]="n.kind === 'success'"\r
          [class.modal__icon--warning]="n.kind === 'warning'"\r
          [class.modal__icon--error]="n.kind === 'error'"\r
          aria-hidden="true"\r
        >\r
          @switch (n.kind) {\r
            @case ('success') {\r
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"\r
                stroke-linecap="round" stroke-linejoin="round">\r
                <polyline points="20 6 9 17 4 12" />\r
              </svg>\r
            }\r
            @case ('error') {\r
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\r
                stroke-linecap="round" stroke-linejoin="round">\r
                <circle cx="12" cy="12" r="10" />\r
                <line x1="15" y1="9" x2="9" y2="15" />\r
                <line x1="9" y1="9" x2="15" y2="15" />\r
              </svg>\r
            }\r
            @case ('warning') {\r
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\r
                stroke-linecap="round" stroke-linejoin="round">\r
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />\r
                <line x1="12" y1="9" x2="12" y2="13" />\r
                <line x1="12" y1="17" x2="12.01" y2="17" />\r
              </svg>\r
            }\r
            @default {\r
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\r
                stroke-linecap="round" stroke-linejoin="round">\r
                <circle cx="12" cy="12" r="10" />\r
                <line x1="12" y1="16" x2="12" y2="12" />\r
                <line x1="12" y1="8" x2="12.01" y2="8" />\r
              </svg>\r
            }\r
          }\r
        </div>\r
        <h2 id="notice-modal-title" class="modal__title">{{ n.title }}</h2>\r
      </div>\r
\r
      <p id="notice-modal-message" class="modal__message">{{ n.message }}</p>\r
\r
      <div class="modal__actions">\r
        <button type="button" class="btn primary" (click)="closeNotice()">Entendido</button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
`, styles: ['/* src/app/features/dashboard/pages/users-admin-page/users-admin-page.component.scss */\n.page-head {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.page-title {\n  font-size: 1.65rem;\n  font-weight: 700;\n  margin: 0;\n  letter-spacing: -0.02em;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-800) 0%,\n      var(--primary-500) 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.page-sub {\n  margin: 0.35rem 0 0;\n  color: var(--gray-600);\n  font-size: 0.9rem;\n  max-width: 720px;\n  line-height: 1.45;\n}\n.page-sub code {\n  font-size: 0.75rem;\n  background: var(--gray-100);\n  padding: 0.1rem 0.3rem;\n  border-radius: 4px;\n}\n.toolbar {\n  margin-bottom: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.filter {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  font-size: 0.8rem;\n  color: var(--gray-600);\n}\n.filter--grow {\n  flex: 0 1 320px;\n  min-width: 200px;\n}\n.filter input,\n.filter select {\n  padding: 0.45rem 0.6rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  background: white;\n}\n.filter select {\n  cursor: pointer;\n  min-width: 120px;\n}\n.status-pill {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.status-pill--active {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5 0%,\n      #a7f3d0 100%);\n  color: #065f46;\n  border: 1px solid rgba(16, 185, 129, 0.45);\n}\n.status-pill--inactive {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  color: #ffffff;\n  border: 1px solid #b91c1c;\n  box-shadow: 0 1px 2px rgba(220, 38, 38, 0.25);\n  text-transform: uppercase;\n}\n.table-wrap {\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border-radius: var(--radius-lg);\n  border: 1px solid rgba(59, 130, 246, 0.18);\n  overflow: auto;\n  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.06);\n}\n.table-wrap.inner {\n  margin-bottom: 0;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8125rem;\n}\nth,\ntd {\n  padding: 0.65rem 0.85rem;\n  text-align: left;\n  border-bottom: 1px solid rgba(226, 232, 240, 0.9);\n  vertical-align: middle;\n}\nth {\n  background:\n    linear-gradient(\n      180deg,\n      #eff6ff 0%,\n      #e0e7ff 100%);\n  font-weight: 700;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--primary-900);\n}\n.sortable-header {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: color 0.2s ease;\n}\n.sortable-header:hover {\n  color: var(--primary-600);\n}\n.sort-icon {\n  font-size: 0.7rem;\n}\n.sort-icon.active {\n  color: var(--primary-600);\n}\n.sort-icon.inactive {\n  opacity: 0.3;\n  font-size: 0.85rem;\n}\ntbody tr:hover {\n  background: rgba(239, 246, 255, 0.65);\n}\ntbody tr.row-inactive {\n  background-color: #fee2e2;\n  box-shadow: inset 4px 0 0 0 #dc2626;\n}\ntbody tr.row-inactive:hover {\n  background-color: #fecaca;\n}\ntbody tr.row-inactive td {\n  color: #991b1b;\n  font-weight: 500;\n}\ntbody tr.row-inactive .icon-btn {\n  color: #b91c1c;\n}\ntbody tr.row-inactive .icon-btn:hover {\n  background: rgba(220, 38, 38, 0.18);\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 38px;\n  height: 22px;\n  margin-right: 0.25rem;\n  flex-shrink: 0;\n}\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.switch input:checked + .slider {\n  background-color: #10b981;\n}\n.switch input:checked + .slider::before {\n  transform: translateX(16px);\n}\n.switch input:not(:checked) + .slider {\n  background-color: #fca5a5;\n}\n.switch input:disabled + .slider {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  inset: 0;\n  background-color: #cbd5e1;\n  transition: 0.3s;\n}\n.slider::before {\n  position: absolute;\n  content: "";\n  height: 16px;\n  width: 16px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.3s;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.slider.round {\n  border-radius: 34px;\n}\n.slider.round::before {\n  border-radius: 50%;\n}\n.actions {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  white-space: nowrap;\n}\n.icon-btn {\n  background: none;\n  border: none;\n  color: var(--gray-500);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.35rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.icon-btn:hover {\n  color: var(--primary-600);\n  background: rgba(37, 99, 235, 0.1);\n}\n.icon-btn.warn:hover {\n  color: #dc2626;\n  background: #fee2e2;\n}\n.icon-btn--success {\n  color: #047857;\n}\n.icon-btn--success:hover {\n  color: #065f46;\n  background: rgba(16, 185, 129, 0.12);\n}\n.icon-btn--muted {\n  color: var(--gray-300);\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n.icon-btn--muted:hover {\n  color: var(--gray-300);\n  background: transparent;\n}\n.btn-link {\n  background: none;\n  border: none;\n  color: var(--primary-600);\n  cursor: pointer;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  transition: all 0.15s ease;\n}\n.btn-link:hover {\n  background: rgba(37, 99, 235, 0.08);\n  color: var(--primary-700);\n}\n.btn-link.danger {\n  color: #b91c1c;\n}\n.btn-link.danger:hover {\n  background: rgba(220, 38, 38, 0.08);\n  color: #991b1b;\n}\n.btn {\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  border: 1px solid var(--gray-300);\n  background: white;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  height: fit-content;\n  transition: all 0.15s ease;\n}\n.btn:hover:not(:disabled) {\n  background: var(--gray-50);\n  border-color: var(--gray-400);\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.primary {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-600),\n      var(--primary-700));\n  color: white;\n  border-color: var(--primary-600);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.25);\n}\n.btn.primary:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-700),\n      var(--primary-800));\n}\n.btn.danger {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626,\n      #b91c1c);\n  color: white;\n  border-color: #b91c1c;\n  box-shadow: 0 2px 8px rgba(220, 38, 38, 0.25);\n}\n.btn.danger:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #b91c1c,\n      #991b1b);\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n  padding: 1rem;\n  animation: admin-backdrop-in 0.18s ease-out;\n}\n.modal {\n  background: white;\n  border-radius: 14px;\n  padding: 1.5rem;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);\n  animation: admin-modal-in 0.22s ease-out;\n  max-height: calc(100vh - 2rem);\n  overflow-y: auto;\n}\n.modal--wide {\n  max-width: 520px;\n}\n.modal--xwide {\n  max-width: 720px;\n}\n.modal label {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin-bottom: 0.35rem;\n  color: var(--gray-700);\n}\n.modal input[type=text],\n.modal input[type=email],\n.modal input[type=password],\n.modal input[type=search],\n.modal input[type=number],\n.modal input:not([type]),\n.modal select {\n  width: 100%;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  margin-bottom: 1rem;\n  font-size: 0.875rem;\n  background: white;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.modal input[type=text]:focus,\n.modal input[type=email]:focus,\n.modal input[type=password]:focus,\n.modal input[type=search]:focus,\n.modal input[type=number]:focus,\n.modal input:not([type]):focus,\n.modal select:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.modal select {\n  cursor: pointer;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 1rem;\n}\n.form-grid .form-grid__full {\n  grid-column: 1/-1;\n}\n@media (max-width: 640px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.modal__header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.modal__icon {\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal__icon svg {\n  width: 22px;\n  height: 22px;\n}\n.modal__icon--info {\n  background: var(--primary-100);\n  color: var(--primary-700);\n}\n.modal__icon--success {\n  background: #d1fae5;\n  color: #065f46;\n}\n.modal__icon--warning {\n  background: #fef3c7;\n  color: #92400e;\n}\n.modal__icon--error {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.modal__title {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  letter-spacing: -0.01em;\n}\n.modal__message {\n  margin: 0 0 1.25rem;\n  font-size: 0.9rem;\n  color: var(--gray-700);\n  line-height: 1.55;\n}\n.modal__hint {\n  font-size: 0.8125rem;\n  color: var(--gray-600);\n  margin: 0 0 1rem;\n}\n.modal__actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.err {\n  color: #b91c1c;\n  font-size: 0.875rem;\n  margin: 0 0 1rem;\n}\n@keyframes admin-backdrop-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes admin-modal-in {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.roles-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.3rem 0.65rem;\n  border-radius: 999px;\n  border: 1px solid rgba(59, 130, 246, 0.3);\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #e0e7ff 100%);\n  color: var(--primary-800);\n  cursor: pointer;\n  font-size: 0.75rem;\n  font-weight: 600;\n  transition: all 0.2s ease;\n}\n.roles-btn:hover {\n  border-color: var(--primary-500);\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe 0%,\n      #c7d2fe 100%);\n  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.18);\n}\n.roles-btn--empty {\n  background: var(--gray-50);\n  color: var(--gray-500);\n  border-color: var(--gray-200);\n}\n.roles-btn--empty:hover {\n  background: var(--gray-100);\n  color: var(--gray-700);\n  border-color: var(--gray-300);\n}\n.roles-btn__count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 1.25rem;\n  height: 1.25rem;\n  padding: 0 0.35rem;\n  border-radius: 999px;\n  background: rgba(37, 99, 235, 0.18);\n  color: var(--primary-900);\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n.roles-btn svg {\n  width: 14px;\n  height: 14px;\n}\n.role-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n  max-height: 280px;\n  overflow-y: auto;\n  padding-right: 0.25rem;\n}\n.chk {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  padding: 0.5rem 0.65rem;\n  border: 1px solid var(--gray-200);\n  border-radius: 8px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.chk:hover {\n  background: var(--gray-50);\n  border-color: var(--gray-300);\n}\n.chk input[type=checkbox] {\n  accent-color: var(--primary-600);\n}\n/*# sourceMappingURL=users-admin-page.component.css.map */\n'] }]
  }], () => [{ type: AdminApiService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersAdminPageComponent, { className: "UsersAdminPageComponent", filePath: "src/app/features/dashboard/pages/users-admin-page/users-admin-page.component.ts", lineNumber: 82 });
})();
export {
  UsersAdminPageComponent
};
//# sourceMappingURL=chunk-IWTNEUXB.js.map
