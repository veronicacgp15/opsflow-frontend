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
  NgControlStatus,
  NgModel
} from "./chunk-KPJXXM46.js";
import "./chunk-BSOZ4HA7.js";
import {
  CommonModule,
  Component,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdeclareLet,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6KLI64HZ.js";

// src/app/features/dashboard/pages/roles-admin-page/roles-admin-page.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.service;
function RolesAdminPageComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function RolesAdminPageComponent_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275text(1, " Nuevo ");
    \u0275\u0275elementEnd();
  }
}
function RolesAdminPageComponent_For_27_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function RolesAdminPageComponent_For_27_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPermissions(r_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 17);
    \u0275\u0275element(2, "path", 18)(3, "polyline", 19);
    \u0275\u0275elementEnd()();
  }
}
function RolesAdminPageComponent_For_27_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function RolesAdminPageComponent_For_27_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEdit(r_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 17);
    \u0275\u0275element(2, "path", 21)(3, "path", 22);
    \u0275\u0275elementEnd()();
  }
}
function RolesAdminPageComponent_For_27_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function RolesAdminPageComponent_For_27_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete(r_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 17);
    \u0275\u0275element(2, "polyline", 24)(3, "path", 25)(4, "path", 26)(5, "path", 27)(6, "path", 28);
    \u0275\u0275elementEnd()();
  }
}
function RolesAdminPageComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "code");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 12);
    \u0275\u0275template(7, RolesAdminPageComponent_For_27_button_7_Template, 4, 0, "button", 13)(8, RolesAdminPageComponent_For_27_button_8_Template, 4, 0, "button", 14)(9, RolesAdminPageComponent_For_27_button_9_Template, 7, 0, "button", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("hasPermission", ctx_r1.P.AUTH_ROLES_PERMISSIONS_SET);
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", ctx_r1.P.AUTH_ROLES_UPDATE);
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", ctx_r1.P.AUTH_ROLES_DELETE);
  }
}
function RolesAdminPageComponent_ForEmpty_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2, "Sin datos");
    \u0275\u0275elementEnd()();
  }
}
function RolesAdminPageComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function RolesAdminPageComponent_Conditional_29_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModals());
    });
    \u0275\u0275elementStart(1, "div", 31);
    \u0275\u0275listener("click", function RolesAdminPageComponent_Conditional_29_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 32)(3, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 34);
    \u0275\u0275element(5, "line", 35)(6, "line", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h2", 37);
    \u0275\u0275text(8, "Nuevo rol");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 38);
    \u0275\u0275text(10, "Usa el prefijo convencional ");
    \u0275\u0275elementStart(11, "code");
    \u0275\u0275text(12, "ROLE_");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " (ej. ROLE_AUDITOR).");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "label", 39);
    \u0275\u0275text(15, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function RolesAdminPageComponent_Conditional_29_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formName, $event) || (ctx_r1.formName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 41)(18, "button", 42);
    \u0275\u0275listener("click", function RolesAdminPageComponent_Conditional_29_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModals());
    });
    \u0275\u0275text(19, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 43);
    \u0275\u0275listener("click", function RolesAdminPageComponent_Conditional_29_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitCreate());
    });
    \u0275\u0275text(21, " Guardar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formName);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.loading() || !ctx_r1.formName.trim());
  }
}
function RolesAdminPageComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function RolesAdminPageComponent_Conditional_30_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModals());
    });
    \u0275\u0275elementStart(1, "div", 44);
    \u0275\u0275listener("click", function RolesAdminPageComponent_Conditional_30_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 32)(3, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 34);
    \u0275\u0275element(5, "path", 45)(6, "path", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h2", 47);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "label", 48);
    \u0275\u0275text(10, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function RolesAdminPageComponent_Conditional_30_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formName, $event) || (ctx_r1.formName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 41)(13, "button", 42);
    \u0275\u0275listener("click", function RolesAdminPageComponent_Conditional_30_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModals());
    });
    \u0275\u0275text(14, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 43);
    \u0275\u0275listener("click", function RolesAdminPageComponent_Conditional_30_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitEdit());
    });
    \u0275\u0275text(16, " Guardar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("Editar rol #", ctx_r1.editingId(), "");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formName);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.loading() || !ctx_r1.formName.trim());
  }
}
function RolesAdminPageComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function RolesAdminPageComponent_Conditional_31_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelConfirm());
    });
    \u0275\u0275elementStart(1, "div", 50);
    \u0275\u0275listener("click", function RolesAdminPageComponent_Conditional_31_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 32)(3, "div", 51);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 34);
    \u0275\u0275element(5, "path", 52)(6, "line", 53)(7, "line", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h2", 55);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 56);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 41)(13, "button", 42);
    \u0275\u0275listener("click", function RolesAdminPageComponent_Conditional_31_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelConfirm());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 42);
    \u0275\u0275listener("click", function RolesAdminPageComponent_Conditional_31_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.acceptConfirm());
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cfg_r10 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275classProp("modal__icon--warning", !cfg_r10.danger)("modal__icon--error", cfg_r10.danger);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(cfg_r10.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cfg_r10.message);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", cfg_r10.cancelLabel || "Cancelar", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("danger", cfg_r10.danger)("primary", !cfg_r10.danger);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cfg_r10.confirmLabel || "Confirmar", " ");
  }
}
function RolesAdminPageComponent_Conditional_32_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Colapsar todo ");
  }
}
function RolesAdminPageComponent_Conditional_32_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Expandir todo ");
  }
}
function RolesAdminPageComponent_Conditional_32_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 69);
    \u0275\u0275text(1, "Cargando permisos...");
    \u0275\u0275elementEnd();
  }
}
function RolesAdminPageComponent_Conditional_32_Conditional_25_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " No hay permisos en el catalogo. Reinicia auth-service para sembrarlos. ");
  }
}
function RolesAdminPageComponent_Conditional_32_Conditional_25_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Ningun permiso coincide con la busqueda. ");
  }
}
function RolesAdminPageComponent_Conditional_32_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 69);
    \u0275\u0275template(1, RolesAdminPageComponent_Conditional_32_Conditional_25_Conditional_1_Template, 1, 0)(2, RolesAdminPageComponent_Conditional_32_Conditional_25_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.permissionsCatalog().length === 0 ? 1 : 2);
  }
}
function RolesAdminPageComponent_Conditional_32_Conditional_26_For_1_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 81)(1, "label", 82)(2, "input", 83);
    \u0275\u0275listener("change", function RolesAdminPageComponent_Conditional_32_Conditional_26_For_1_Conditional_12_For_2_Template_input_change_2_listener($event) {
      const p_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.togglePermission(p_r15.id, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 84);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.selectedPermissionIds().has(p_r15.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", p_r15.description || p_r15.urlPattern, " ");
  }
}
function RolesAdminPageComponent_Conditional_32_Conditional_26_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 80);
    \u0275\u0275repeaterCreate(1, RolesAdminPageComponent_Conditional_32_Conditional_26_For_1_Conditional_12_For_2_Template, 5, 2, "li", 81, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(group_r13.items);
  }
}
function RolesAdminPageComponent_Conditional_32_Conditional_26_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "section", 71)(2, "header", 72)(3, "label", 73);
    \u0275\u0275listener("click", function RolesAdminPageComponent_Conditional_32_Conditional_26_For_1_Template_label_click_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "input", 74);
    \u0275\u0275listener("change", function RolesAdminPageComponent_Conditional_32_Conditional_26_For_1_Template_input_change_4_listener($event) {
      const group_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleAllInGroup(group_r13, $event.target.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 75);
    \u0275\u0275listener("click", function RolesAdminPageComponent_Conditional_32_Conditional_26_For_1_Template_button_click_5_listener() {
      const group_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleGroupExpanded(group_r13.service));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 76);
    \u0275\u0275element(7, "polyline", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "span", 78);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 79);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, RolesAdminPageComponent_Conditional_32_Conditional_26_For_1_Conditional_12_Template, 3, 0, "ul", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    const expanded_r16 = ctx_r1.isGroupExpanded(group_r13.service);
    \u0275\u0275advance();
    \u0275\u0275classProp("perm-group--expanded", expanded_r16);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.isGroupAllSelected(group_r13))("indeterminate", ctx_r1.isGroupPartiallySelected(group_r13));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", expanded_r16);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(group_r13.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.countSelectedInGroup(group_r13), " / ", group_r13.items.length, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(expanded_r16 ? 12 : -1);
  }
}
function RolesAdminPageComponent_Conditional_32_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, RolesAdminPageComponent_Conditional_32_Conditional_26_For_1_Template, 13, 9, "section", 70, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.filteredPermissionGroups());
  }
}
function RolesAdminPageComponent_Conditional_32_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Guardando... ");
  }
}
function RolesAdminPageComponent_Conditional_32_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Guardar ");
  }
}
function RolesAdminPageComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function RolesAdminPageComponent_Conditional_32_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePermissions());
    });
    \u0275\u0275elementStart(1, "div", 57);
    \u0275\u0275listener("click", function RolesAdminPageComponent_Conditional_32_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 32)(3, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 34);
    \u0275\u0275element(5, "path", 18)(6, "polyline", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div")(8, "h2", 58);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 59);
    \u0275\u0275text(11, " Define a que endpoints tiene acceso este rol. Selecciona endpoints individuales o usa el toggle por seccion. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 60)(13, "label", 61);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 62);
    \u0275\u0275element(15, "circle", 63)(16, "line", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "input", 65);
    \u0275\u0275listener("ngModelChange", function RolesAdminPageComponent_Conditional_32_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.permissionsSearchSig.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 66);
    \u0275\u0275listener("click", function RolesAdminPageComponent_Conditional_32_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAllGroupsExpanded());
    });
    \u0275\u0275template(19, RolesAdminPageComponent_Conditional_32_Conditional_19_Template, 1, 0)(20, RolesAdminPageComponent_Conditional_32_Conditional_20_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 67);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 68);
    \u0275\u0275template(24, RolesAdminPageComponent_Conditional_32_Conditional_24_Template, 2, 0, "p", 69)(25, RolesAdminPageComponent_Conditional_32_Conditional_25_Template, 3, 1, "p", 69)(26, RolesAdminPageComponent_Conditional_32_Conditional_26_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 41)(28, "button", 42);
    \u0275\u0275listener("click", function RolesAdminPageComponent_Conditional_32_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePermissions());
    });
    \u0275\u0275text(29, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 43);
    \u0275\u0275listener("click", function RolesAdminPageComponent_Conditional_32_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePermissions());
    });
    \u0275\u0275template(31, RolesAdminPageComponent_Conditional_32_Conditional_31_Template, 1, 0)(32, RolesAdminPageComponent_Conditional_32_Conditional_32_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" Permisos de ", ctx.name, " ");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngModel", ctx_r1.permissionsSearchSig());
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.allGroupsExpanded() ? "Colapsar todos los grupos" : "Expandir todos los grupos");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allGroupsExpanded() ? 19 : 20);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.selectedPermissionIds().size, " / ", ctx_r1.permissionsCatalog().length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.permissionsLoading() ? 24 : ctx_r1.filteredPermissionGroups().length === 0 ? 25 : 26);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.permissionsSaving() || ctx_r1.permissionsLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.permissionsSaving() ? 31 : 32);
  }
}
function RolesAdminPageComponent_Conditional_33_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 86);
    \u0275\u0275element(1, "polyline", 89);
    \u0275\u0275elementEnd();
  }
}
function RolesAdminPageComponent_Conditional_33_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 34);
    \u0275\u0275element(1, "circle", 90)(2, "line", 91)(3, "line", 92);
    \u0275\u0275elementEnd();
  }
}
function RolesAdminPageComponent_Conditional_33_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 34);
    \u0275\u0275element(1, "path", 52)(2, "line", 53)(3, "line", 54);
    \u0275\u0275elementEnd();
  }
}
function RolesAdminPageComponent_Conditional_33_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 34);
    \u0275\u0275element(1, "circle", 90)(2, "line", 93)(3, "line", 94);
    \u0275\u0275elementEnd();
  }
}
function RolesAdminPageComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function RolesAdminPageComponent_Conditional_33_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeNotice());
    });
    \u0275\u0275elementStart(1, "div", 85);
    \u0275\u0275listener("click", function RolesAdminPageComponent_Conditional_33_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 32)(3, "div", 51);
    \u0275\u0275template(4, RolesAdminPageComponent_Conditional_33_Case_4_Template, 2, 0, ":svg:svg", 86)(5, RolesAdminPageComponent_Conditional_33_Case_5_Template, 4, 0, ":svg:svg", 34)(6, RolesAdminPageComponent_Conditional_33_Case_6_Template, 4, 0, ":svg:svg", 34)(7, RolesAdminPageComponent_Conditional_33_Case_7_Template, 4, 0, ":svg:svg", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h2", 87);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 88);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 41)(13, "button", 11);
    \u0275\u0275listener("click", function RolesAdminPageComponent_Conditional_33_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeNotice());
    });
    \u0275\u0275text(14, "Entendido");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const n_r18 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275classProp("modal__icon--info", n_r18.kind === "info")("modal__icon--success", n_r18.kind === "success")("modal__icon--warning", n_r18.kind === "warning")("modal__icon--error", n_r18.kind === "error");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_6_0 = n_r18.kind) === "success" ? 4 : tmp_6_0 === "error" ? 5 : tmp_6_0 === "warning" ? 6 : 7);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(n_r18.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r18.message);
  }
}
var SERVICE_LABELS = {
  auth: "Auth",
  org: "Organizaciones",
  document: "Documentos"
};
var RolesAdminPageComponent = class _RolesAdminPageComponent {
  adminApi;
  /** Codes de permisos expuestos al template para usar con *hasPermission. */
  P = P;
  roles = signal([]);
  idFilterSig = signal("");
  nameFilterSig = signal("");
  loading = signal(false);
  modalCreate = signal(false);
  modalEdit = signal(false);
  editingId = signal(null);
  formName = "";
  notice = signal(null);
  confirmReq = signal(null);
  // ---------------------------------------------------------------------------
  // Permissions modal state
  // ---------------------------------------------------------------------------
  permissionsCatalog = signal([]);
  permissionsModalRole = signal(null);
  selectedPermissionIds = signal(/* @__PURE__ */ new Set());
  permissionsSearchSig = signal("");
  permissionsLoading = signal(false);
  permissionsSaving = signal(false);
  /**
   * Set de `service` keys que el usuario expandio explicitamente. Default vacio = todo
   * colapsado para que el modal se vea compacto. Al buscar se fuerza expandido para que
   * los matches sean siempre visibles.
   */
  expandedGroups = signal(/* @__PURE__ */ new Set());
  /** Catalogo agrupado y filtrado, ordenado por servicio (auth → org → document → otros). */
  filteredPermissionGroups = computed(() => {
    const q = this.permissionsSearchSig().trim().toLowerCase();
    const matches = (p) => {
      if (!q)
        return true;
      return p.urlPattern.toLowerCase().includes(q) || p.httpMethod.toLowerCase().includes(q) || (p.description || "").toLowerCase().includes(q) || p.code.toLowerCase().includes(q);
    };
    const order = { auth: 0, org: 1, document: 2 };
    const buckets = /* @__PURE__ */ new Map();
    for (const p of this.permissionsCatalog()) {
      if (!matches(p))
        continue;
      const key = p.service;
      if (!buckets.has(key))
        buckets.set(key, []);
      buckets.get(key).push(p);
    }
    return Array.from(buckets.entries()).map(([service, items]) => ({
      service,
      label: SERVICE_LABELS[service] ?? service.toUpperCase(),
      items
    })).sort((a, b) => (order[a.service] ?? 99) - (order[b.service] ?? 99));
  });
  filteredRoles = computed(() => {
    const idQ = this.idFilterSig().trim();
    const nameQ = this.nameFilterSig().trim().toLowerCase();
    let list = this.roles();
    if (idQ) {
      list = list.filter((r) => String(r.id).includes(idQ));
    }
    if (nameQ) {
      list = list.filter((r) => (r.name || "").toLowerCase().includes(nameQ));
    }
    return list;
  });
  constructor(adminApi) {
    this.adminApi = adminApi;
  }
  ngOnInit() {
    this.reload();
    this.loadPermissionsCatalog();
  }
  reload() {
    this.adminApi.listRoles().subscribe({
      next: (rows) => this.roles.set(rows),
      error: (e) => this.showApiError(e, "Error al cargar roles")
    });
  }
  loadPermissionsCatalog() {
    this.adminApi.listPermissions().subscribe({
      next: (rows) => this.permissionsCatalog.set(rows),
      error: () => this.permissionsCatalog.set([])
    });
  }
  // ---------------------------------------------------------------------------
  // Create / Edit
  // ---------------------------------------------------------------------------
  openCreate() {
    this.formName = "";
    this.modalCreate.set(true);
  }
  openEdit(r) {
    this.editingId.set(r.id);
    this.formName = r.name;
    this.modalEdit.set(true);
  }
  closeModals() {
    this.modalCreate.set(false);
    this.modalEdit.set(false);
    this.editingId.set(null);
  }
  submitCreate() {
    const name = this.formName.trim();
    if (!name)
      return;
    this.loading.set(true);
    this.adminApi.createRole(name).subscribe({
      next: () => {
        this.loading.set(false);
        this.closeModals();
        this.reload();
        this.showSuccess(`Rol "${name}" creado correctamente.`);
      },
      error: (e) => {
        this.loading.set(false);
        this.showApiError(e);
      }
    });
  }
  submitEdit() {
    const id = this.editingId();
    const name = this.formName.trim();
    if (id == null || !name)
      return;
    this.loading.set(true);
    this.adminApi.updateRole(id, name).subscribe({
      next: () => {
        this.loading.set(false);
        this.closeModals();
        this.reload();
        this.showSuccess(`Rol #${id} actualizado.`);
      },
      error: (e) => {
        this.loading.set(false);
        this.showApiError(e);
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Delete (uses custom confirm modal instead of window.confirm)
  // ---------------------------------------------------------------------------
  confirmDelete(r) {
    this.openConfirm({
      title: "Eliminar rol",
      message: `Se eliminara el rol "${r.name}" (id ${r.id}). Esta accion no se puede deshacer.`,
      confirmLabel: "Eliminar",
      danger: true,
      onConfirm: () => this.executeDelete(r)
    });
  }
  executeDelete(r) {
    this.adminApi.deleteRole(r.id).subscribe({
      next: () => {
        this.reload();
        this.showSuccess(`Rol "${r.name}" eliminado.`);
      },
      error: (e) => this.showApiError(e)
    });
  }
  // ---------------------------------------------------------------------------
  // Permissions modal
  // ---------------------------------------------------------------------------
  openPermissions(r) {
    this.permissionsModalRole.set(r);
    this.permissionsSearchSig.set("");
    this.selectedPermissionIds.set(/* @__PURE__ */ new Set());
    this.expandedGroups.set(/* @__PURE__ */ new Set());
    this.permissionsLoading.set(true);
    if (this.permissionsCatalog().length === 0) {
      this.adminApi.listPermissions().subscribe({
        next: (rows) => this.permissionsCatalog.set(rows),
        error: () => this.permissionsCatalog.set([])
      });
    }
    this.adminApi.getRolePermissions(r.id).subscribe({
      next: (ids) => {
        this.selectedPermissionIds.set(new Set(ids));
        this.permissionsLoading.set(false);
      },
      error: (e) => {
        this.permissionsLoading.set(false);
        this.showApiError(e, "Error al cargar permisos del rol");
        this.closePermissions();
      }
    });
  }
  closePermissions() {
    this.permissionsModalRole.set(null);
    this.permissionsSearchSig.set("");
  }
  togglePermission(id, checked) {
    const next = new Set(this.selectedPermissionIds());
    if (checked)
      next.add(id);
    else
      next.delete(id);
    this.selectedPermissionIds.set(next);
  }
  /** Marca/desmarca todos los items visibles de una seccion (respeta el filtro actual). */
  toggleAllInGroup(group, checked) {
    const next = new Set(this.selectedPermissionIds());
    for (const p of group.items) {
      if (checked)
        next.add(p.id);
      else
        next.delete(p.id);
    }
    this.selectedPermissionIds.set(next);
  }
  /** True si todos los items visibles de la seccion estan seleccionados. */
  isGroupAllSelected(group) {
    if (group.items.length === 0)
      return false;
    const sel = this.selectedPermissionIds();
    return group.items.every((p) => sel.has(p.id));
  }
  /** True si algunos (no todos) los items visibles de la seccion estan seleccionados. */
  isGroupPartiallySelected(group) {
    const sel = this.selectedPermissionIds();
    const count = group.items.filter((p) => sel.has(p.id)).length;
    return count > 0 && count < group.items.length;
  }
  countSelectedInGroup(group) {
    const sel = this.selectedPermissionIds();
    return group.items.filter((p) => sel.has(p.id)).length;
  }
  // ---------------------------------------------------------------------------
  // Group collapse / expand (acordeon)
  // ---------------------------------------------------------------------------
  /**
   * True si el grupo debe renderizar su lista de permisos. Mientras el usuario tiene una
   * busqueda activa fuerza expandido para que cualquier match sea visible.
   */
  isGroupExpanded(service) {
    if (this.permissionsSearchSig().trim())
      return true;
    return this.expandedGroups().has(service);
  }
  toggleGroupExpanded(service) {
    const next = new Set(this.expandedGroups());
    if (next.has(service))
      next.delete(service);
    else
      next.add(service);
    this.expandedGroups.set(next);
  }
  /** True si todos los grupos visibles estan expandidos (para alternar el boton global). */
  allGroupsExpanded() {
    const groups = this.filteredPermissionGroups();
    if (groups.length === 0)
      return false;
    if (this.permissionsSearchSig().trim())
      return true;
    const exp = this.expandedGroups();
    return groups.every((g) => exp.has(g.service));
  }
  toggleAllGroupsExpanded() {
    if (this.allGroupsExpanded()) {
      this.expandedGroups.set(/* @__PURE__ */ new Set());
    } else {
      const all = new Set(this.filteredPermissionGroups().map((g) => g.service));
      this.expandedGroups.set(all);
    }
  }
  savePermissions() {
    const role = this.permissionsModalRole();
    if (!role)
      return;
    const ids = Array.from(this.selectedPermissionIds());
    this.permissionsSaving.set(true);
    this.adminApi.setRolePermissions(role.id, ids).subscribe({
      next: () => {
        this.permissionsSaving.set(false);
        this.closePermissions();
        this.showSuccess(`Permisos de "${role.name}" actualizados (${ids.length} asignados).`);
      },
      error: (e) => {
        this.permissionsSaving.set(false);
        this.showApiError(e);
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Confirm modal
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
  // Notice modal
  // ---------------------------------------------------------------------------
  closeNotice() {
    this.notice.set(null);
  }
  showSuccess(message, title = "Listo") {
    this.notice.set({ kind: "success", title, message });
  }
  showApiError(e, fallback = "Ocurrio un error inesperado") {
    const message = e?.error?.message || e?.message || fallback;
    this.notice.set({ kind: "error", title: "Error", message });
  }
  static \u0275fac = function RolesAdminPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RolesAdminPageComponent)(\u0275\u0275directiveInject(AdminApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesAdminPageComponent, selectors: [["app-roles-admin-page"]], decls: 34, vars: 9, consts: [[1, "page"], [1, "page-head"], [1, "page-title"], ["type", "button", "class", "btn primary", 3, "click", 4, "hasPermission"], [1, "toolbar"], [1, "filter"], ["type", "text", "placeholder", "ej. 1", 3, "ngModelChange", "ngModel"], [1, "filter", "filter--grow"], ["type", "search", "placeholder", "ROLE_EJEMPLO", "autocomplete", "off", 3, "ngModelChange", "ngModel"], [1, "table-wrap"], ["role", "presentation", 1, "modal-backdrop"], ["type", "button", 1, "btn", "primary", 3, "click"], [1, "actions"], ["type", "button", "class", "icon-btn", "title", "Gestionar permisos", "aria-label", "Gestionar permisos", 3, "click", 4, "hasPermission"], ["type", "button", "class", "icon-btn", "title", "Editar rol", "aria-label", "Editar rol", 3, "click", 4, "hasPermission"], ["type", "button", "class", "icon-btn warn", "title", "Eliminar rol", "aria-label", "Eliminar rol", 3, "click", 4, "hasPermission"], ["type", "button", "title", "Gestionar permisos", "aria-label", "Gestionar permisos", 1, "icon-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "width", "18", "height", "18", "aria-hidden", "true"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], ["points", "9 12 11 14 15 10"], ["type", "button", "title", "Editar rol", "aria-label", "Editar rol", 1, "icon-btn", 3, "click"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], ["type", "button", "title", "Eliminar rol", "aria-label", "Eliminar rol", 1, "icon-btn", "warn", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"], ["d", "M10 11v6"], ["d", "M14 11v6"], ["d", "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"], ["colspan", "3"], ["role", "presentation", 1, "modal-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "role-create-title", 1, "modal", 3, "click"], [1, "modal__header"], ["aria-hidden", "true", 1, "modal__icon", "modal__icon--info"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["id", "role-create-title", 1, "modal__title"], [1, "modal__hint"], ["for", "role-create-name"], ["id", "role-create-name", "type", "text", "placeholder", "ROLE_AUDITOR", "autocomplete", "off", 3, "ngModelChange", "ngModel"], [1, "modal__actions"], ["type", "button", 1, "btn", 3, "click"], ["type", "button", 1, "btn", "primary", 3, "click", "disabled"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "role-edit-title", 1, "modal", 3, "click"], ["d", "M12 20h9"], ["d", "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z"], ["id", "role-edit-title", 1, "modal__title"], ["for", "role-edit-name"], ["id", "role-edit-name", "type", "text", "autocomplete", "off", 3, "ngModelChange", "ngModel"], ["role", "alertdialog", "aria-modal", "true", "aria-labelledby", "role-confirm-title", "aria-describedby", "role-confirm-message", 1, "modal", 3, "click"], ["aria-hidden", "true", 1, "modal__icon"], ["d", "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], ["id", "role-confirm-title", 1, "modal__title"], ["id", "role-confirm-message", 1, "modal__message"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "role-permissions-title", 1, "modal", "modal--wide", "perm-modal", 3, "click"], ["id", "role-permissions-title", 1, "modal__title"], [1, "perm-modal__subtitle"], [1, "perm-modal__toolbar"], [1, "perm-modal__search"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "perm-modal__search-icon"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["type", "search", "placeholder", "Buscar permiso...", "autocomplete", "off", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "perm-modal__toggle-all", 3, "click", "title"], [1, "perm-modal__counter"], [1, "perm-modal__body"], [1, "perm-modal__empty"], [1, "perm-group", 3, "perm-group--expanded"], [1, "perm-group"], [1, "perm-group__head"], [1, "perm-group__toggle", 3, "click"], ["type", "checkbox", 3, "change", "checked", "indeterminate"], ["type", "button", 1, "perm-group__expand", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true", 1, "perm-group__caret"], ["points", "9 18 15 12 9 6"], [1, "perm-group__title"], [1, "perm-group__count"], [1, "perm-list"], [1, "perm-row"], [1, "perm-row__label"], ["type", "checkbox", 3, "change", "checked"], [1, "perm-row__title"], ["role", "alertdialog", "aria-modal", "true", "aria-labelledby", "role-notice-title", "aria-describedby", "role-notice-message", 1, "modal", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "role-notice-title", 1, "modal__title"], ["id", "role-notice-message", 1, "modal__message"], ["points", "20 6 9 17 4 12"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], ["x1", "12", "y1", "16", "x2", "12", "y2", "12"], ["x1", "12", "y1", "8", "x2", "12.01", "y2", "8"]], template: function RolesAdminPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Roles");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, RolesAdminPageComponent_button_5_Template, 2, 0, "button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 4)(7, "label", 5)(8, "span");
      \u0275\u0275text(9, "Filtrar por ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "input", 6);
      \u0275\u0275listener("ngModelChange", function RolesAdminPageComponent_Template_input_ngModelChange_10_listener($event) {
        return ctx.idFilterSig.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "label", 7)(12, "span");
      \u0275\u0275text(13, "Buscar por nombre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 8);
      \u0275\u0275listener("ngModelChange", function RolesAdminPageComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.nameFilterSig.set($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 9)(16, "table")(17, "thead")(18, "tr")(19, "th");
      \u0275\u0275text(20, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "th");
      \u0275\u0275text(22, "Nombre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th");
      \u0275\u0275text(24, "Acciones");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "tbody");
      \u0275\u0275repeaterCreate(26, RolesAdminPageComponent_For_27_Template, 10, 5, "tr", null, _forTrack0, false, RolesAdminPageComponent_ForEmpty_28_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(29, RolesAdminPageComponent_Conditional_29_Template, 22, 2, "div", 10)(30, RolesAdminPageComponent_Conditional_30_Template, 17, 3, "div", 10)(31, RolesAdminPageComponent_Conditional_31_Template, 17, 12, "div", 10)(32, RolesAdminPageComponent_Conditional_32_Template, 33, 9, "div", 10)(33, RolesAdminPageComponent_Conditional_33_Template, 15, 11, "div", 10);
    }
    if (rf & 2) {
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      \u0275\u0275advance(5);
      \u0275\u0275property("hasPermission", ctx.P.AUTH_ROLES_CREATE);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.idFilterSig());
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.nameFilterSig());
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.filteredRoles());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.modalCreate() ? 29 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modalEdit() ? 30 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_6_0 = ctx.confirmReq()) ? 31 : -1, tmp_6_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_7_0 = ctx.permissionsModalRole()) ? 32 : -1, tmp_7_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_8_0 = ctx.notice()) ? 33 : -1, tmp_8_0);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, HasPermissionDirective], styles: ['\n\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.65rem;\n  font-weight: 700;\n  margin: 0;\n  letter-spacing: -0.02em;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-800) 0%,\n      var(--primary-500) 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.page-sub[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: var(--gray-600);\n  font-size: 0.9rem;\n  max-width: 720px;\n  line-height: 1.45;\n}\n.page-sub[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  background: var(--gray-100);\n  padding: 0.1rem 0.3rem;\n  border-radius: 4px;\n}\n.toolbar[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.filter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  font-size: 0.8rem;\n  color: var(--gray-600);\n}\n.filter--grow[_ngcontent-%COMP%] {\n  flex: 0 1 320px;\n  min-width: 200px;\n}\n.filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.6rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  background: white;\n}\n.filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n  min-width: 120px;\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.status-pill--active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5 0%,\n      #a7f3d0 100%);\n  color: #065f46;\n  border: 1px solid rgba(16, 185, 129, 0.45);\n}\n.status-pill--inactive[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  color: #ffffff;\n  border: 1px solid #b91c1c;\n  box-shadow: 0 1px 2px rgba(220, 38, 38, 0.25);\n  text-transform: uppercase;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border-radius: var(--radius-lg);\n  border: 1px solid rgba(59, 130, 246, 0.18);\n  overflow: auto;\n  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.06);\n}\n.table-wrap.inner[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8125rem;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.85rem;\n  text-align: left;\n  border-bottom: 1px solid rgba(226, 232, 240, 0.9);\n  vertical-align: middle;\n}\nth[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #eff6ff 0%,\n      #e0e7ff 100%);\n  font-weight: 700;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--primary-900);\n}\n.sortable-header[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: color 0.2s ease;\n}\n.sortable-header[_ngcontent-%COMP%]:hover {\n  color: var(--primary-600);\n}\n.sort-icon[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.sort-icon.active[_ngcontent-%COMP%] {\n  color: var(--primary-600);\n}\n.sort-icon.inactive[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  font-size: 0.85rem;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 246, 255, 0.65);\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  box-shadow: inset 4px 0 0 0 #dc2626;\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%]:hover {\n  background-color: #fecaca;\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #991b1b;\n  font-weight: 500;\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.18);\n}\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 38px;\n  height: 22px;\n  margin-right: 0.25rem;\n  flex-shrink: 0;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #10b981;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]::before {\n  transform: translateX(16px);\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .slider[_ngcontent-%COMP%] {\n  background-color: #fca5a5;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    + .slider[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  inset: 0;\n  background-color: #cbd5e1;\n  transition: 0.3s;\n}\n.slider[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: "";\n  height: 16px;\n  width: 16px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.3s;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.slider.round[_ngcontent-%COMP%] {\n  border-radius: 34px;\n}\n.slider.round[_ngcontent-%COMP%]::before {\n  border-radius: 50%;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  white-space: nowrap;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--gray-500);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.35rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  color: var(--primary-600);\n  background: rgba(37, 99, 235, 0.1);\n}\n.icon-btn.warn[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n  background: #fee2e2;\n}\n.icon-btn--success[_ngcontent-%COMP%] {\n  color: #047857;\n}\n.icon-btn--success[_ngcontent-%COMP%]:hover {\n  color: #065f46;\n  background: rgba(16, 185, 129, 0.12);\n}\n.icon-btn--muted[_ngcontent-%COMP%] {\n  color: var(--gray-300);\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n.icon-btn--muted[_ngcontent-%COMP%]:hover {\n  color: var(--gray-300);\n  background: transparent;\n}\n.btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--primary-600);\n  cursor: pointer;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  transition: all 0.15s ease;\n}\n.btn-link[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.08);\n  color: var(--primary-700);\n}\n.btn-link.danger[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.btn-link.danger[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.08);\n  color: #991b1b;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  border: 1px solid var(--gray-300);\n  background: white;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  height: fit-content;\n  transition: all 0.15s ease;\n}\n.btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--gray-50);\n  border-color: var(--gray-400);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-600),\n      var(--primary-700));\n  color: white;\n  border-color: var(--primary-600);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.25);\n}\n.btn.primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-700),\n      var(--primary-800));\n}\n.btn.danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626,\n      #b91c1c);\n  color: white;\n  border-color: #b91c1c;\n  box-shadow: 0 2px 8px rgba(220, 38, 38, 0.25);\n}\n.btn.danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #b91c1c,\n      #991b1b);\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n  padding: 1rem;\n  animation: _ngcontent-%COMP%_admin-backdrop-in 0.18s ease-out;\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 14px;\n  padding: 1.5rem;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);\n  animation: _ngcontent-%COMP%_admin-modal-in 0.22s ease-out;\n  max-height: calc(100vh - 2rem);\n  overflow-y: auto;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  max-width: 520px;\n}\n.modal--xwide[_ngcontent-%COMP%] {\n  max-width: 720px;\n}\n.modal[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin-bottom: 0.35rem;\n  color: var(--gray-700);\n}\n.modal[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type]), \n.modal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  margin-bottom: 1rem;\n  font-size: 0.875rem;\n  background: white;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.modal[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type]):focus, \n.modal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.modal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 1rem;\n}\n.form-grid[_ngcontent-%COMP%]   .form-grid__full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n@media (max-width: 640px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.modal__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.modal__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.modal__icon--info[_ngcontent-%COMP%] {\n  background: var(--primary-100);\n  color: var(--primary-700);\n}\n.modal__icon--success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.modal__icon--warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.modal__icon--error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.modal__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  letter-spacing: -0.01em;\n}\n.modal__message[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem;\n  font-size: 0.9rem;\n  color: var(--gray-700);\n  line-height: 1.55;\n}\n.modal__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--gray-600);\n  margin: 0 0 1rem;\n}\n.modal__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.err[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  font-size: 0.875rem;\n  margin: 0 0 1rem;\n}\n@keyframes _ngcontent-%COMP%_admin-backdrop-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_admin-modal-in {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\ntd[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  background: rgba(37, 99, 235, 0.08);\n  color: var(--primary-800);\n  padding: 0.15rem 0.45rem;\n  border-radius: 999px;\n  font-weight: 600;\n  font-family:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  letter-spacing: 0.01em;\n}\n.perm-modal[_ngcontent-%COMP%] {\n  max-width: 640px;\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 2rem);\n  overflow: hidden;\n}\n.perm-modal[_ngcontent-%COMP%]    > .modal__header[_ngcontent-%COMP%], \n.perm-modal__toolbar[_ngcontent-%COMP%], \n.perm-modal[_ngcontent-%COMP%]    > .modal__actions[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.perm-modal__subtitle[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0;\n  font-size: 0.8125rem;\n  color: var(--gray-600);\n  line-height: 1.4;\n}\n.perm-modal__toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0.5rem 0 0.75rem;\n  flex-wrap: wrap;\n}\n.perm-modal__toggle-all[_ngcontent-%COMP%] {\n  border: 1px solid var(--gray-300);\n  background: white;\n  color: var(--gray-700);\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.45rem 0.75rem;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    color 0.15s;\n}\n.perm-modal__toggle-all[_ngcontent-%COMP%]:hover {\n  background: var(--gray-100);\n  border-color: var(--gray-400);\n  color: var(--gray-900);\n}\n.perm-modal__search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1 1 220px;\n}\n.perm-modal__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.55rem 0.7rem 0.55rem 2.2rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: border-color 0.15s, box-shadow 0.15s;\n  background: white;\n  margin-bottom: 0;\n}\n.perm-modal__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.perm-modal__search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.7rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 16px;\n  height: 16px;\n  color: var(--gray-400);\n  pointer-events: none;\n}\n.perm-modal__counter[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--gray-600);\n  background: var(--gray-100);\n  padding: 0.35rem 0.7rem;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.perm-modal__body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding-right: 0.5rem;\n  margin: 0 -0.25rem 1rem 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  scrollbar-width: thin;\n  scrollbar-color: var(--gray-300) transparent;\n}\n.perm-modal__body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.perm-modal__body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.perm-modal__body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--gray-300);\n  border-radius: 999px;\n}\n.perm-modal__body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--gray-400);\n}\n.perm-modal__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--gray-500);\n  font-size: 0.875rem;\n  padding: 2rem 1rem;\n  margin: 0;\n}\n.perm-group[_ngcontent-%COMP%] {\n  border: 1px solid var(--gray-200);\n  border-radius: 10px;\n  overflow: hidden;\n  background: white;\n  flex-shrink: 0;\n}\n.perm-group__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  background:\n    linear-gradient(\n      180deg,\n      #eff6ff 0%,\n      #e0e7ff 100%);\n  border-bottom: 1px solid transparent;\n  transition: border-color 0.18s ease;\n}\n.perm-group--expanded[_ngcontent-%COMP%]    > .perm-group__head[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(59, 130, 246, 0.18);\n}\n.perm-group__toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 0.85rem 0 0.85rem;\n  cursor: pointer;\n  margin: 0;\n  border-right: 1px solid rgba(59, 130, 246, 0.12);\n}\n.perm-group__toggle[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  accent-color: var(--primary-600);\n  cursor: pointer;\n}\n.perm-group__expand[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0.6rem 0.85rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: inherit;\n  text-align: left;\n  font: inherit;\n  transition: background 0.12s ease;\n}\n.perm-group__expand[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.4);\n}\n.perm-group__caret[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 14px;\n  height: 14px;\n  color: var(--primary-700);\n  transition: transform 0.2s ease;\n}\n.perm-group--expanded[_ngcontent-%COMP%]   .perm-group__caret[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.perm-group__title[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  font-size: 0.825rem;\n  font-weight: 700;\n  color: var(--primary-900);\n  letter-spacing: 0.01em;\n  text-transform: uppercase;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.perm-group__count[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: var(--primary-800);\n  background: rgba(37, 99, 235, 0.15);\n  padding: 0.2rem 0.55rem;\n  border-radius: 999px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.perm-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.perm-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--gray-100);\n}\n.perm-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.perm-row__label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.5rem 0.85rem 0.5rem 1rem;\n  cursor: pointer;\n  transition: background 0.12s ease;\n  margin: 0;\n}\n.perm-row__label[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 246, 255, 0.7);\n}\n.perm-row__label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  accent-color: var(--primary-600);\n  cursor: pointer;\n}\n.perm-row__title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--gray-800);\n  line-height: 1.35;\n  flex: 1;\n  min-width: 0;\n}\n/*# sourceMappingURL=roles-admin-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesAdminPageComponent, [{
    type: Component,
    args: [{ selector: "app-roles-admin-page", standalone: true, imports: [CommonModule, FormsModule, HasPermissionDirective], template: `<div class="page">\r
  <div class="page-head">\r
    <div>\r
      <h1 class="page-title">Roles</h1>\r
    </div>\r
    <button\r
      *hasPermission="P.AUTH_ROLES_CREATE"\r
      type="button"\r
      class="btn primary"\r
      (click)="openCreate()"\r
    >\r
      Nuevo\r
    </button>\r
  </div>\r
\r
  <div class="toolbar">\r
    <label class="filter">\r
      <span>Filtrar por ID</span>\r
      <input\r
        type="text"\r
        [ngModel]="idFilterSig()"\r
        (ngModelChange)="idFilterSig.set($event)"\r
        placeholder="ej. 1"\r
      />\r
    </label>\r
\r
    <label class="filter filter--grow">\r
      <span>Buscar por nombre</span>\r
      <input\r
        type="search"\r
        [ngModel]="nameFilterSig()"\r
        (ngModelChange)="nameFilterSig.set($event)"\r
        placeholder="ROLE_EJEMPLO"\r
        autocomplete="off"\r
      />\r
    </label>\r
  </div>\r
\r
  <div class="table-wrap">\r
    <table>\r
      <thead>\r
        <tr>\r
          <th>ID</th>\r
          <th>Nombre</th>\r
          <th>Acciones</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        @for (r of filteredRoles(); track r.id) {\r
          <tr>\r
            <td>{{ r.id }}</td>\r
            <td><code>{{ r.name }}</code></td>\r
            <td class="actions">\r
              <button\r
                *hasPermission="P.AUTH_ROLES_PERMISSIONS_SET"\r
                type="button"\r
                class="icon-btn"\r
                (click)="openPermissions(r)"\r
                title="Gestionar permisos"\r
                aria-label="Gestionar permisos"\r
              >\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"\r
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                  width="18" height="18" aria-hidden="true">\r
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />\r
                  <polyline points="9 12 11 14 15 10" />\r
                </svg>\r
              </button>\r
              <button\r
                *hasPermission="P.AUTH_ROLES_UPDATE"\r
                type="button"\r
                class="icon-btn"\r
                (click)="openEdit(r)"\r
                title="Editar rol"\r
                aria-label="Editar rol"\r
              >\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"\r
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                  width="18" height="18" aria-hidden="true">\r
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />\r
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />\r
                </svg>\r
              </button>\r
              <button\r
                *hasPermission="P.AUTH_ROLES_DELETE"\r
                type="button"\r
                class="icon-btn warn"\r
                (click)="confirmDelete(r)"\r
                title="Eliminar rol"\r
                aria-label="Eliminar rol"\r
              >\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"\r
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                  width="18" height="18" aria-hidden="true">\r
                  <polyline points="3 6 5 6 21 6" />\r
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />\r
                  <path d="M10 11v6" />\r
                  <path d="M14 11v6" />\r
                  <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />\r
                </svg>\r
              </button>\r
            </td>\r
          </tr>\r
        } @empty {\r
          <tr><td colspan="3">Sin datos</td></tr>\r
        }\r
      </tbody>\r
    </table>\r
  </div>\r
</div>\r
\r
<!-- =================================================================== -->\r
<!-- Create role modal                                                   -->\r
<!-- =================================================================== -->\r
@if (modalCreate()) {\r
  <div class="modal-backdrop" (click)="closeModals()" role="presentation">\r
    <div\r
      class="modal"\r
      role="dialog"\r
      aria-modal="true"\r
      aria-labelledby="role-create-title"\r
      (click)="$event.stopPropagation()"\r
    >\r
      <div class="modal__header">\r
        <div class="modal__icon modal__icon--info" aria-hidden="true">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\r
            stroke-linecap="round" stroke-linejoin="round">\r
            <line x1="12" y1="5" x2="12" y2="19" />\r
            <line x1="5" y1="12" x2="19" y2="12" />\r
          </svg>\r
        </div>\r
        <h2 id="role-create-title" class="modal__title">Nuevo rol</h2>\r
      </div>\r
\r
      <p class="modal__hint">Usa el prefijo convencional <code>ROLE_</code> (ej. ROLE_AUDITOR).</p>\r
\r
      <label for="role-create-name">Nombre</label>\r
      <input\r
        id="role-create-name"\r
        type="text"\r
        [(ngModel)]="formName"\r
        placeholder="ROLE_AUDITOR"\r
        autocomplete="off"\r
      />\r
\r
      <div class="modal__actions">\r
        <button type="button" class="btn" (click)="closeModals()">Cancelar</button>\r
        <button\r
          type="button"\r
          class="btn primary"\r
          (click)="submitCreate()"\r
          [disabled]="loading() || !formName.trim()"\r
        >\r
          Guardar\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<!-- =================================================================== -->\r
<!-- Edit role modal                                                     -->\r
<!-- =================================================================== -->\r
@if (modalEdit()) {\r
  <div class="modal-backdrop" (click)="closeModals()" role="presentation">\r
    <div\r
      class="modal"\r
      role="dialog"\r
      aria-modal="true"\r
      aria-labelledby="role-edit-title"\r
      (click)="$event.stopPropagation()"\r
    >\r
      <div class="modal__header">\r
        <div class="modal__icon modal__icon--info" aria-hidden="true">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\r
            stroke-linecap="round" stroke-linejoin="round">\r
            <path d="M12 20h9" />\r
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z" />\r
          </svg>\r
        </div>\r
        <h2 id="role-edit-title" class="modal__title">Editar rol #{{ editingId() }}</h2>\r
      </div>\r
\r
      <label for="role-edit-name">Nombre</label>\r
      <input\r
        id="role-edit-name"\r
        type="text"\r
        [(ngModel)]="formName"\r
        autocomplete="off"\r
      />\r
\r
      <div class="modal__actions">\r
        <button type="button" class="btn" (click)="closeModals()">Cancelar</button>\r
        <button\r
          type="button"\r
          class="btn primary"\r
          (click)="submitEdit()"\r
          [disabled]="loading() || !formName.trim()"\r
        >\r
          Guardar\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<!-- =================================================================== -->\r
<!-- Confirm modal                                                       -->\r
<!-- =================================================================== -->\r
@if (confirmReq(); as cfg) {\r
  <div class="modal-backdrop" (click)="cancelConfirm()" role="presentation">\r
    <div\r
      class="modal"\r
      role="alertdialog"\r
      aria-modal="true"\r
      aria-labelledby="role-confirm-title"\r
      aria-describedby="role-confirm-message"\r
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
        <h2 id="role-confirm-title" class="modal__title">{{ cfg.title }}</h2>\r
      </div>\r
\r
      <p id="role-confirm-message" class="modal__message">{{ cfg.message }}</p>\r
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
<!-- Permissions modal                                                   -->\r
<!-- =================================================================== -->\r
@if (permissionsModalRole(); as role) {\r
  <div class="modal-backdrop" (click)="closePermissions()" role="presentation">\r
    <div\r
      class="modal modal--wide perm-modal"\r
      role="dialog"\r
      aria-modal="true"\r
      aria-labelledby="role-permissions-title"\r
      (click)="$event.stopPropagation()"\r
    >\r
      <div class="modal__header">\r
        <div class="modal__icon modal__icon--info" aria-hidden="true">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\r
            stroke-linecap="round" stroke-linejoin="round">\r
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />\r
            <polyline points="9 12 11 14 15 10" />\r
          </svg>\r
        </div>\r
        <div>\r
          <h2 id="role-permissions-title" class="modal__title">\r
            Permisos de {{ role.name }}\r
          </h2>\r
          <p class="perm-modal__subtitle">\r
            Define a que endpoints tiene acceso este rol. Selecciona endpoints individuales o\r
            usa el toggle por seccion.\r
          </p>\r
        </div>\r
      </div>\r
\r
      <div class="perm-modal__toolbar">\r
        <label class="perm-modal__search">\r
          <svg class="perm-modal__search-icon" viewBox="0 0 24 24" fill="none"\r
            stroke="currentColor" stroke-width="2" aria-hidden="true">\r
            <circle cx="11" cy="11" r="8" />\r
            <line x1="21" y1="21" x2="16.65" y2="16.65" />\r
          </svg>\r
          <input\r
            type="search"\r
            placeholder="Buscar permiso..."\r
            [ngModel]="permissionsSearchSig()"\r
            (ngModelChange)="permissionsSearchSig.set($event)"\r
            autocomplete="off"\r
          />\r
        </label>\r
        <button\r
          type="button"\r
          class="perm-modal__toggle-all"\r
          (click)="toggleAllGroupsExpanded()"\r
          [title]="allGroupsExpanded() ? 'Colapsar todos los grupos' : 'Expandir todos los grupos'"\r
        >\r
          @if (allGroupsExpanded()) {\r
            Colapsar todo\r
          } @else {\r
            Expandir todo\r
          }\r
        </button>\r
        <span class="perm-modal__counter">\r
          {{ selectedPermissionIds().size }} / {{ permissionsCatalog().length }}\r
        </span>\r
      </div>\r
\r
      <div class="perm-modal__body">\r
        @if (permissionsLoading()) {\r
          <p class="perm-modal__empty">Cargando permisos...</p>\r
        } @else if (filteredPermissionGroups().length === 0) {\r
          <p class="perm-modal__empty">\r
            @if (permissionsCatalog().length === 0) {\r
              No hay permisos en el catalogo. Reinicia auth-service para sembrarlos.\r
            } @else {\r
              Ningun permiso coincide con la busqueda.\r
            }\r
          </p>\r
        } @else {\r
          @for (group of filteredPermissionGroups(); track group.service) {\r
            @let expanded = isGroupExpanded(group.service);\r
            <section class="perm-group" [class.perm-group--expanded]="expanded">\r
              <header class="perm-group__head">\r
                <!-- Checkbox separado: clic en el checkbox toggle-a el grupo entero,\r
                     no debe colapsar/expandir. -->\r
                <label class="perm-group__toggle" (click)="$event.stopPropagation()">\r
                  <input\r
                    type="checkbox"\r
                    [checked]="isGroupAllSelected(group)"\r
                    [indeterminate]="isGroupPartiallySelected(group)"\r
                    (change)="toggleAllInGroup(group, $any($event.target).checked)"\r
                  />\r
                </label>\r
\r
                <!-- Bot\xF3n principal: el resto del header alterna expandido/colapsado. -->\r
                <button\r
                  type="button"\r
                  class="perm-group__expand"\r
                  (click)="toggleGroupExpanded(group.service)"\r
                  [attr.aria-expanded]="expanded"\r
                >\r
                  <svg\r
                    class="perm-group__caret"\r
                    viewBox="0 0 24 24"\r
                    fill="none"\r
                    stroke="currentColor"\r
                    stroke-width="2.5"\r
                    stroke-linecap="round"\r
                    stroke-linejoin="round"\r
                    aria-hidden="true"\r
                  >\r
                    <polyline points="9 18 15 12 9 6" />\r
                  </svg>\r
                  <span class="perm-group__title">{{ group.label }}</span>\r
                  <span class="perm-group__count">\r
                    {{ countSelectedInGroup(group) }} / {{ group.items.length }}\r
                  </span>\r
                </button>\r
              </header>\r
\r
              @if (expanded) {\r
                <ul class="perm-list">\r
                  @for (p of group.items; track p.id) {\r
                    <li class="perm-row">\r
                      <label class="perm-row__label">\r
                        <input\r
                          type="checkbox"\r
                          [checked]="selectedPermissionIds().has(p.id)"\r
                          (change)="togglePermission(p.id, $any($event.target).checked)"\r
                        />\r
                        <span class="perm-row__title">\r
                          {{ p.description || p.urlPattern }}\r
                        </span>\r
                      </label>\r
                    </li>\r
                  }\r
                </ul>\r
              }\r
            </section>\r
          }\r
        }\r
      </div>\r
\r
      <div class="modal__actions">\r
        <button type="button" class="btn" (click)="closePermissions()">Cancelar</button>\r
        <button\r
          type="button"\r
          class="btn primary"\r
          (click)="savePermissions()"\r
          [disabled]="permissionsSaving() || permissionsLoading()"\r
        >\r
          @if (permissionsSaving()) { Guardando... } @else { Guardar }\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<!-- =================================================================== -->\r
<!-- Notice modal                                                        -->\r
<!-- =================================================================== -->\r
@if (notice(); as n) {\r
  <div class="modal-backdrop" (click)="closeNotice()" role="presentation">\r
    <div\r
      class="modal"\r
      role="alertdialog"\r
      aria-modal="true"\r
      aria-labelledby="role-notice-title"\r
      aria-describedby="role-notice-message"\r
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
        <h2 id="role-notice-title" class="modal__title">{{ n.title }}</h2>\r
      </div>\r
\r
      <p id="role-notice-message" class="modal__message">{{ n.message }}</p>\r
\r
      <div class="modal__actions">\r
        <button type="button" class="btn primary" (click)="closeNotice()">Entendido</button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
`, styles: ['/* src/app/features/dashboard/pages/roles-admin-page/roles-admin-page.component.scss */\n.page-head {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.page-title {\n  font-size: 1.65rem;\n  font-weight: 700;\n  margin: 0;\n  letter-spacing: -0.02em;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-800) 0%,\n      var(--primary-500) 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.page-sub {\n  margin: 0.35rem 0 0;\n  color: var(--gray-600);\n  font-size: 0.9rem;\n  max-width: 720px;\n  line-height: 1.45;\n}\n.page-sub code {\n  font-size: 0.75rem;\n  background: var(--gray-100);\n  padding: 0.1rem 0.3rem;\n  border-radius: 4px;\n}\n.toolbar {\n  margin-bottom: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.filter {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  font-size: 0.8rem;\n  color: var(--gray-600);\n}\n.filter--grow {\n  flex: 0 1 320px;\n  min-width: 200px;\n}\n.filter input,\n.filter select {\n  padding: 0.45rem 0.6rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  background: white;\n}\n.filter select {\n  cursor: pointer;\n  min-width: 120px;\n}\n.status-pill {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.status-pill--active {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5 0%,\n      #a7f3d0 100%);\n  color: #065f46;\n  border: 1px solid rgba(16, 185, 129, 0.45);\n}\n.status-pill--inactive {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  color: #ffffff;\n  border: 1px solid #b91c1c;\n  box-shadow: 0 1px 2px rgba(220, 38, 38, 0.25);\n  text-transform: uppercase;\n}\n.table-wrap {\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border-radius: var(--radius-lg);\n  border: 1px solid rgba(59, 130, 246, 0.18);\n  overflow: auto;\n  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.06);\n}\n.table-wrap.inner {\n  margin-bottom: 0;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8125rem;\n}\nth,\ntd {\n  padding: 0.65rem 0.85rem;\n  text-align: left;\n  border-bottom: 1px solid rgba(226, 232, 240, 0.9);\n  vertical-align: middle;\n}\nth {\n  background:\n    linear-gradient(\n      180deg,\n      #eff6ff 0%,\n      #e0e7ff 100%);\n  font-weight: 700;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--primary-900);\n}\n.sortable-header {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: color 0.2s ease;\n}\n.sortable-header:hover {\n  color: var(--primary-600);\n}\n.sort-icon {\n  font-size: 0.7rem;\n}\n.sort-icon.active {\n  color: var(--primary-600);\n}\n.sort-icon.inactive {\n  opacity: 0.3;\n  font-size: 0.85rem;\n}\ntbody tr:hover {\n  background: rgba(239, 246, 255, 0.65);\n}\ntbody tr.row-inactive {\n  background-color: #fee2e2;\n  box-shadow: inset 4px 0 0 0 #dc2626;\n}\ntbody tr.row-inactive:hover {\n  background-color: #fecaca;\n}\ntbody tr.row-inactive td {\n  color: #991b1b;\n  font-weight: 500;\n}\ntbody tr.row-inactive .icon-btn {\n  color: #b91c1c;\n}\ntbody tr.row-inactive .icon-btn:hover {\n  background: rgba(220, 38, 38, 0.18);\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 38px;\n  height: 22px;\n  margin-right: 0.25rem;\n  flex-shrink: 0;\n}\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.switch input:checked + .slider {\n  background-color: #10b981;\n}\n.switch input:checked + .slider::before {\n  transform: translateX(16px);\n}\n.switch input:not(:checked) + .slider {\n  background-color: #fca5a5;\n}\n.switch input:disabled + .slider {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  inset: 0;\n  background-color: #cbd5e1;\n  transition: 0.3s;\n}\n.slider::before {\n  position: absolute;\n  content: "";\n  height: 16px;\n  width: 16px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.3s;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.slider.round {\n  border-radius: 34px;\n}\n.slider.round::before {\n  border-radius: 50%;\n}\n.actions {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  white-space: nowrap;\n}\n.icon-btn {\n  background: none;\n  border: none;\n  color: var(--gray-500);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.35rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.icon-btn:hover {\n  color: var(--primary-600);\n  background: rgba(37, 99, 235, 0.1);\n}\n.icon-btn.warn:hover {\n  color: #dc2626;\n  background: #fee2e2;\n}\n.icon-btn--success {\n  color: #047857;\n}\n.icon-btn--success:hover {\n  color: #065f46;\n  background: rgba(16, 185, 129, 0.12);\n}\n.icon-btn--muted {\n  color: var(--gray-300);\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n.icon-btn--muted:hover {\n  color: var(--gray-300);\n  background: transparent;\n}\n.btn-link {\n  background: none;\n  border: none;\n  color: var(--primary-600);\n  cursor: pointer;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  transition: all 0.15s ease;\n}\n.btn-link:hover {\n  background: rgba(37, 99, 235, 0.08);\n  color: var(--primary-700);\n}\n.btn-link.danger {\n  color: #b91c1c;\n}\n.btn-link.danger:hover {\n  background: rgba(220, 38, 38, 0.08);\n  color: #991b1b;\n}\n.btn {\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  border: 1px solid var(--gray-300);\n  background: white;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  height: fit-content;\n  transition: all 0.15s ease;\n}\n.btn:hover:not(:disabled) {\n  background: var(--gray-50);\n  border-color: var(--gray-400);\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.primary {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-600),\n      var(--primary-700));\n  color: white;\n  border-color: var(--primary-600);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.25);\n}\n.btn.primary:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-700),\n      var(--primary-800));\n}\n.btn.danger {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626,\n      #b91c1c);\n  color: white;\n  border-color: #b91c1c;\n  box-shadow: 0 2px 8px rgba(220, 38, 38, 0.25);\n}\n.btn.danger:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #b91c1c,\n      #991b1b);\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n  padding: 1rem;\n  animation: admin-backdrop-in 0.18s ease-out;\n}\n.modal {\n  background: white;\n  border-radius: 14px;\n  padding: 1.5rem;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);\n  animation: admin-modal-in 0.22s ease-out;\n  max-height: calc(100vh - 2rem);\n  overflow-y: auto;\n}\n.modal--wide {\n  max-width: 520px;\n}\n.modal--xwide {\n  max-width: 720px;\n}\n.modal label {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin-bottom: 0.35rem;\n  color: var(--gray-700);\n}\n.modal input[type=text],\n.modal input[type=email],\n.modal input[type=password],\n.modal input[type=search],\n.modal input[type=number],\n.modal input:not([type]),\n.modal select {\n  width: 100%;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  margin-bottom: 1rem;\n  font-size: 0.875rem;\n  background: white;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.modal input[type=text]:focus,\n.modal input[type=email]:focus,\n.modal input[type=password]:focus,\n.modal input[type=search]:focus,\n.modal input[type=number]:focus,\n.modal input:not([type]):focus,\n.modal select:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.modal select {\n  cursor: pointer;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 1rem;\n}\n.form-grid .form-grid__full {\n  grid-column: 1/-1;\n}\n@media (max-width: 640px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.modal__header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.modal__icon {\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal__icon svg {\n  width: 22px;\n  height: 22px;\n}\n.modal__icon--info {\n  background: var(--primary-100);\n  color: var(--primary-700);\n}\n.modal__icon--success {\n  background: #d1fae5;\n  color: #065f46;\n}\n.modal__icon--warning {\n  background: #fef3c7;\n  color: #92400e;\n}\n.modal__icon--error {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.modal__title {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  letter-spacing: -0.01em;\n}\n.modal__message {\n  margin: 0 0 1.25rem;\n  font-size: 0.9rem;\n  color: var(--gray-700);\n  line-height: 1.55;\n}\n.modal__hint {\n  font-size: 0.8125rem;\n  color: var(--gray-600);\n  margin: 0 0 1rem;\n}\n.modal__actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.err {\n  color: #b91c1c;\n  font-size: 0.875rem;\n  margin: 0 0 1rem;\n}\n@keyframes admin-backdrop-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes admin-modal-in {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\ntd code {\n  font-size: 0.78rem;\n  background: rgba(37, 99, 235, 0.08);\n  color: var(--primary-800);\n  padding: 0.15rem 0.45rem;\n  border-radius: 999px;\n  font-weight: 600;\n  font-family:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  letter-spacing: 0.01em;\n}\n.perm-modal {\n  max-width: 640px;\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 2rem);\n  overflow: hidden;\n}\n.perm-modal > .modal__header,\n.perm-modal__toolbar,\n.perm-modal > .modal__actions {\n  flex-shrink: 0;\n}\n.perm-modal__subtitle {\n  margin: 0.15rem 0 0;\n  font-size: 0.8125rem;\n  color: var(--gray-600);\n  line-height: 1.4;\n}\n.perm-modal__toolbar {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0.5rem 0 0.75rem;\n  flex-wrap: wrap;\n}\n.perm-modal__toggle-all {\n  border: 1px solid var(--gray-300);\n  background: white;\n  color: var(--gray-700);\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.45rem 0.75rem;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    color 0.15s;\n}\n.perm-modal__toggle-all:hover {\n  background: var(--gray-100);\n  border-color: var(--gray-400);\n  color: var(--gray-900);\n}\n.perm-modal__search {\n  position: relative;\n  flex: 1 1 220px;\n}\n.perm-modal__search input {\n  width: 100%;\n  padding: 0.55rem 0.7rem 0.55rem 2.2rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: border-color 0.15s, box-shadow 0.15s;\n  background: white;\n  margin-bottom: 0;\n}\n.perm-modal__search input:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.perm-modal__search-icon {\n  position: absolute;\n  left: 0.7rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 16px;\n  height: 16px;\n  color: var(--gray-400);\n  pointer-events: none;\n}\n.perm-modal__counter {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--gray-600);\n  background: var(--gray-100);\n  padding: 0.35rem 0.7rem;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.perm-modal__body {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding-right: 0.5rem;\n  margin: 0 -0.25rem 1rem 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  scrollbar-width: thin;\n  scrollbar-color: var(--gray-300) transparent;\n}\n.perm-modal__body::-webkit-scrollbar {\n  width: 8px;\n}\n.perm-modal__body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.perm-modal__body::-webkit-scrollbar-thumb {\n  background: var(--gray-300);\n  border-radius: 999px;\n}\n.perm-modal__body::-webkit-scrollbar-thumb:hover {\n  background: var(--gray-400);\n}\n.perm-modal__empty {\n  text-align: center;\n  color: var(--gray-500);\n  font-size: 0.875rem;\n  padding: 2rem 1rem;\n  margin: 0;\n}\n.perm-group {\n  border: 1px solid var(--gray-200);\n  border-radius: 10px;\n  overflow: hidden;\n  background: white;\n  flex-shrink: 0;\n}\n.perm-group__head {\n  display: flex;\n  align-items: stretch;\n  background:\n    linear-gradient(\n      180deg,\n      #eff6ff 0%,\n      #e0e7ff 100%);\n  border-bottom: 1px solid transparent;\n  transition: border-color 0.18s ease;\n}\n.perm-group--expanded > .perm-group__head {\n  border-bottom-color: rgba(59, 130, 246, 0.18);\n}\n.perm-group__toggle {\n  display: flex;\n  align-items: center;\n  padding: 0 0.85rem 0 0.85rem;\n  cursor: pointer;\n  margin: 0;\n  border-right: 1px solid rgba(59, 130, 246, 0.12);\n}\n.perm-group__toggle input[type=checkbox] {\n  width: 16px;\n  height: 16px;\n  accent-color: var(--primary-600);\n  cursor: pointer;\n}\n.perm-group__expand {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0.6rem 0.85rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: inherit;\n  text-align: left;\n  font: inherit;\n  transition: background 0.12s ease;\n}\n.perm-group__expand:hover {\n  background: rgba(255, 255, 255, 0.4);\n}\n.perm-group__caret {\n  flex-shrink: 0;\n  width: 14px;\n  height: 14px;\n  color: var(--primary-700);\n  transition: transform 0.2s ease;\n}\n.perm-group--expanded .perm-group__caret {\n  transform: rotate(90deg);\n}\n.perm-group__title {\n  flex: 1;\n  min-width: 0;\n  font-size: 0.825rem;\n  font-weight: 700;\n  color: var(--primary-900);\n  letter-spacing: 0.01em;\n  text-transform: uppercase;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.perm-group__count {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: var(--primary-800);\n  background: rgba(37, 99, 235, 0.15);\n  padding: 0.2rem 0.55rem;\n  border-radius: 999px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.perm-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.perm-row {\n  border-bottom: 1px solid var(--gray-100);\n}\n.perm-row:last-child {\n  border-bottom: none;\n}\n.perm-row__label {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.5rem 0.85rem 0.5rem 1rem;\n  cursor: pointer;\n  transition: background 0.12s ease;\n  margin: 0;\n}\n.perm-row__label:hover {\n  background: rgba(239, 246, 255, 0.7);\n}\n.perm-row__label input[type=checkbox] {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  accent-color: var(--primary-600);\n  cursor: pointer;\n}\n.perm-row__title {\n  font-size: 0.8rem;\n  color: var(--gray-800);\n  line-height: 1.35;\n  flex: 1;\n  min-width: 0;\n}\n/*# sourceMappingURL=roles-admin-page.component.css.map */\n'] }]
  }], () => [{ type: AdminApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesAdminPageComponent, { className: "RolesAdminPageComponent", filePath: "src/app/features/dashboard/pages/roles-admin-page/roles-admin-page.component.ts", lineNumber: 50 });
})();
export {
  RolesAdminPageComponent
};
//# sourceMappingURL=chunk-NCHEVGZV.js.map
