import {
  AdminApiService
} from "./chunk-I4FVVWEF.js";
import {
  HasPermissionDirective,
  P
} from "./chunk-77VDFDZ3.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
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
  ɵɵpropertyInterpolate,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6KLI64HZ.js";

// src/app/features/dashboard/pages/organizations-page/organizations-page.component.ts
var _c0 = (a0, a1, a2) => [a0, a1, a2];
var _c1 = (a0, a1) => [a0, a1];
var _forTrack0 = ($index, $item) => $item.id;
function OrganizationsPageComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function OrganizationsPageComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275text(1, " Nuevo ");
    \u0275\u0275elementEnd();
  }
}
function OrganizationsPageComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.loadError());
  }
}
function OrganizationsPageComponent_For_37_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "Activa");
    \u0275\u0275elementEnd();
  }
}
function OrganizationsPageComponent_For_37_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "Inactiva");
    \u0275\u0275elementEnd();
  }
}
function OrganizationsPageComponent_For_37_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function OrganizationsPageComponent_For_37_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const o_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openManagerModal(o_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 27);
    \u0275\u0275element(2, "path", 28);
    \u0275\u0275elementEnd()();
  }
}
function OrganizationsPageComponent_For_37_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function OrganizationsPageComponent_For_37_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const o_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openUsers(o_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 27);
    \u0275\u0275element(2, "path", 30)(3, "circle", 31)(4, "path", 32)(5, "path", 33);
    \u0275\u0275elementEnd()();
  }
}
function OrganizationsPageComponent_For_37_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function OrganizationsPageComponent_For_37_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const o_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openLocations(o_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 27);
    \u0275\u0275element(2, "path", 35)(3, "circle", 36);
    \u0275\u0275elementEnd()();
  }
}
function OrganizationsPageComponent_For_37_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function OrganizationsPageComponent_For_37_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const o_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEdit(o_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 27);
    \u0275\u0275element(2, "path", 38)(3, "path", 39);
    \u0275\u0275elementEnd()();
  }
}
function OrganizationsPageComponent_For_37_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function OrganizationsPageComponent_For_37_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const o_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete(o_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 27);
    \u0275\u0275element(2, "polyline", 41)(3, "path", 42)(4, "path", 43)(5, "path", 44)(6, "path", 45);
    \u0275\u0275elementEnd()();
  }
}
function OrganizationsPageComponent_For_37_label_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 46)(1, "input", 47);
    \u0275\u0275listener("click", function OrganizationsPageComponent_For_37_label_18_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const o_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleOrgActive($event, o_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", o_r4.active ? "Desactivar organizacion" : "Activar organizacion");
    \u0275\u0275advance();
    \u0275\u0275property("checked", o_r4.active);
  }
}
function OrganizationsPageComponent_For_37_Template(rf, ctx) {
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
    \u0275\u0275elementStart(7, "td", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275template(10, OrganizationsPageComponent_For_37_Conditional_10_Template, 2, 0, "span", 17)(11, OrganizationsPageComponent_For_37_Conditional_11_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 19);
    \u0275\u0275template(13, OrganizationsPageComponent_For_37_button_13_Template, 3, 0, "button", 20)(14, OrganizationsPageComponent_For_37_button_14_Template, 6, 0, "button", 21)(15, OrganizationsPageComponent_For_37_button_15_Template, 4, 0, "button", 22)(16, OrganizationsPageComponent_For_37_button_16_Template, 4, 0, "button", 23)(17, OrganizationsPageComponent_For_37_button_17_Template, 7, 0, "button", 24)(18, OrganizationsPageComponent_For_37_label_18_Template, 3, 2, "label", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("row-inactive", !o_r4.active);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r4.taxId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.creatorLabel(o_r4));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(o_r4.active ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275property("hasPermission", ctx_r1.P.USERS_UPDATE_ROLES);
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", \u0275\u0275pureFunction3(13, _c0, ctx_r1.P.USERS_LIST, ctx_r1.P.USERS_MY_ORGANIZATION, ctx_r1.P.USERS_CREATE));
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", \u0275\u0275pureFunction2(17, _c1, ctx_r1.P.LOCATION_BY_ORG, ctx_r1.P.LOCATION_LIST));
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", ctx_r1.P.ORG_UPDATE);
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", ctx_r1.P.ORG_DELETE);
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", o_r4.active ? ctx_r1.P.ORG_DEACTIVATE : ctx_r1.P.ORG_ACTIVATE);
  }
}
function OrganizationsPageComponent_ForEmpty_38_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Cargando organizaciones... ");
  }
}
function OrganizationsPageComponent_ForEmpty_38_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Sin organizaciones registradas. ");
  }
}
function OrganizationsPageComponent_ForEmpty_38_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Ninguna organizacion coincide con los filtros. ");
  }
}
function OrganizationsPageComponent_ForEmpty_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 49);
    \u0275\u0275template(2, OrganizationsPageComponent_ForEmpty_38_Conditional_2_Template, 1, 0)(3, OrganizationsPageComponent_ForEmpty_38_Conditional_3_Template, 1, 0)(4, OrganizationsPageComponent_ForEmpty_38_Conditional_4_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.loading() ? 2 : ctx_r1.orgs().length === 0 ? 3 : 4);
  }
}
function OrganizationsPageComponent_Conditional_39_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 61);
    \u0275\u0275text(1, "Cargando manager actual...");
    \u0275\u0275elementEnd();
  }
}
function OrganizationsPageComponent_Conditional_39_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", m_r11.name, " ", m_r11.lastname, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", m_r11.username, " \xB7 ", m_r11.email, "");
  }
}
function OrganizationsPageComponent_Conditional_39_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275repeaterCreate(1, OrganizationsPageComponent_Conditional_39_Conditional_18_For_2_Template, 5, 4, "div", 71, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.activeManagerModalUsers());
  }
}
function OrganizationsPageComponent_Conditional_39_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 63);
    \u0275\u0275text(1, "La organizacion no tiene manager activo configurado.");
    \u0275\u0275elementEnd();
  }
}
function OrganizationsPageComponent_Conditional_39_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.managerModalError());
  }
}
function OrganizationsPageComponent_Conditional_39_Conditional_25_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_39_Conditional_25_For_2_Template_button_click_0_listener() {
      const u_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectManagerModalCandidate(u_r13));
    });
    \u0275\u0275elementStart(1, "span", 74);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 75);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", u_r13.name, " ", u_r13.lastname, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", u_r13.username, " \xB7 ", u_r13.email, "", u_r13.organizationId != null ? " \xB7 org #" + u_r13.organizationId : "", " ");
  }
}
function OrganizationsPageComponent_Conditional_39_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275repeaterCreate(1, OrganizationsPageComponent_Conditional_39_Conditional_25_For_2_Template, 5, 5, "button", 72, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.managerModalSuggestions());
  }
}
function OrganizationsPageComponent_Conditional_39_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 63);
    \u0275\u0275text(1, "No hay candidatos disponibles para manager.");
    \u0275\u0275elementEnd();
  }
}
function OrganizationsPageComponent_Conditional_39_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Candidato seleccionado: ", ctx_r1.managerModalSearchSig(), "");
  }
}
function OrganizationsPageComponent_Conditional_39_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Guardando... ");
  }
}
function OrganizationsPageComponent_Conditional_39_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Guardar manager ");
  }
}
function OrganizationsPageComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_39_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeManagerModal());
    });
    \u0275\u0275elementStart(1, "div", 51);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_39_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 52)(3, "div", 53);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 54);
    \u0275\u0275element(5, "path", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div")(7, "h2", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 56);
    \u0275\u0275text(10, " Asigna o reemplaza el manager unico de la organizacion directamente desde la tabla. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 57)(12, "div", 58)(13, "h3", 59);
    \u0275\u0275text(14, "Manager actual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 60);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, OrganizationsPageComponent_Conditional_39_Conditional_17_Template, 2, 0, "p", 61)(18, OrganizationsPageComponent_Conditional_39_Conditional_18_Template, 3, 0, "div", 62)(19, OrganizationsPageComponent_Conditional_39_Conditional_19_Template, 2, 0, "p", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, OrganizationsPageComponent_Conditional_39_Conditional_20_Template, 2, 1, "p", 11);
    \u0275\u0275elementStart(21, "label", 64)(22, "span");
    \u0275\u0275text(23, "Buscar candidato a manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 65);
    \u0275\u0275listener("ngModelChange", function OrganizationsPageComponent_Conditional_39_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setManagerModalSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, OrganizationsPageComponent_Conditional_39_Conditional_25_Template, 3, 0, "div", 66)(26, OrganizationsPageComponent_Conditional_39_Conditional_26_Template, 2, 0, "p", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, OrganizationsPageComponent_Conditional_39_Conditional_27_Template, 2, 1, "p", 67);
    \u0275\u0275elementStart(28, "div", 68)(29, "button", 69);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_39_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeManagerModal());
    });
    \u0275\u0275text(30, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 70);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_39_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmManagerModalAssign());
    });
    \u0275\u0275template(32, OrganizationsPageComponent_Conditional_39_Conditional_32_Template, 1, 0)(33, OrganizationsPageComponent_Conditional_39_Conditional_33_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(' Manager de "', ctx.name, '" ');
    \u0275\u0275advance(7);
    \u0275\u0275classProp("status-pill--active", !ctx_r1.managerModalLoading() && ctx_r1.activeManagerModalUsers().length === 1)("status-pill--inactive", !ctx_r1.managerModalLoading() && ctx_r1.activeManagerModalUsers().length !== 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.managerModalLoading() ? "Cargando" : ctx_r1.activeManagerModalUsers().length === 1 ? "Valido" : ctx_r1.activeManagerModalUsers().length === 0 ? "Vacante" : "Conflicto", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.managerModalLoading() ? 17 : ctx_r1.activeManagerModalUsers().length > 0 ? 18 : 19);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.managerModalError() ? 20 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.managerModalSearchSig());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.managerModalSuggestions().length > 0 ? 25 : ctx_r1.managerModalSearchSig().trim() ? 26 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.managerModalSelectedUserId() != null ? 27 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.managerModalSaving() || ctx_r1.managerModalSelectedUserId() == null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.managerModalSaving() ? 32 : 33);
  }
}
function OrganizationsPageComponent_Conditional_40_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 61);
    \u0275\u0275text(1, "Resolviendo manager activo...");
    \u0275\u0275elementEnd();
  }
}
function OrganizationsPageComponent_Conditional_40_Conditional_21_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r15 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", m_r15.name, " ", m_r15.lastname, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", m_r15.username, " \xB7 ", m_r15.email, "");
  }
}
function OrganizationsPageComponent_Conditional_40_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275repeaterCreate(1, OrganizationsPageComponent_Conditional_40_Conditional_21_For_2_Template, 5, 4, "div", 71, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.activeOrgManagers());
  }
}
function OrganizationsPageComponent_Conditional_40_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 63);
    \u0275\u0275text(1, " Esta organizacion no tiene manager activo. Debes asignar uno para mantener la integridad operativa. ");
    \u0275\u0275elementEnd();
  }
}
function OrganizationsPageComponent_Conditional_40_Conditional_23_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_40_Conditional_23_Conditional_5_For_2_Template_button_click_0_listener() {
      const u_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectAssociateCandidate(u_r18));
    });
    \u0275\u0275elementStart(1, "span", 74);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 75);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r18 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", u_r18.name, " ", u_r18.lastname, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", u_r18.username, " \xB7 ", u_r18.email, "");
  }
}
function OrganizationsPageComponent_Conditional_40_Conditional_23_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275repeaterCreate(1, OrganizationsPageComponent_Conditional_40_Conditional_23_Conditional_5_For_2_Template, 5, 4, "button", 72, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.associateSuggestions());
  }
}
function OrganizationsPageComponent_Conditional_40_Conditional_23_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 63);
    \u0275\u0275text(1, "No hay coincidencias para asociar.");
    \u0275\u0275elementEnd();
  }
}
function OrganizationsPageComponent_Conditional_40_Conditional_23_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Usuario seleccionado: ", ctx_r1.associateSearchSig(), "");
  }
}
function OrganizationsPageComponent_Conditional_40_Conditional_23_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Asociando... ");
  }
}
function OrganizationsPageComponent_Conditional_40_Conditional_23_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Asociar ");
  }
}
function OrganizationsPageComponent_Conditional_40_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "label", 82)(2, "span");
    \u0275\u0275text(3, "Asociar usuario existente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 65);
    \u0275\u0275listener("ngModelChange", function OrganizationsPageComponent_Conditional_40_Conditional_23_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setAssociateSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, OrganizationsPageComponent_Conditional_40_Conditional_23_Conditional_5_Template, 3, 0, "div", 83)(6, OrganizationsPageComponent_Conditional_40_Conditional_23_Conditional_6_Template, 2, 0, "p", 63)(7, OrganizationsPageComponent_Conditional_40_Conditional_23_Conditional_7_Template, 2, 1, "p", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 70);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_40_Conditional_23_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.associateExistingUser());
    });
    \u0275\u0275template(9, OrganizationsPageComponent_Conditional_40_Conditional_23_Conditional_9_Template, 1, 0)(10, OrganizationsPageComponent_Conditional_40_Conditional_23_Conditional_10_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.associateSearchSig());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.associateSuggestions().length > 0 ? 5 : ctx_r1.associateSearchSig().trim() ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.associateUserId() != null ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.associateSaving() || ctx_r1.associateUserId() == null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.associateSaving() ? 9 : 10);
  }
}
function OrganizationsPageComponent_Conditional_40_div_24_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.inviteError());
  }
}
function OrganizationsPageComponent_Conditional_40_div_24_Conditional_10_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Invitando... ");
  }
}
function OrganizationsPageComponent_Conditional_40_div_24_Conditional_10_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Invitar usuario ");
  }
}
function OrganizationsPageComponent_Conditional_40_div_24_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275template(1, OrganizationsPageComponent_Conditional_40_div_24_Conditional_10_Conditional_1_Template, 2, 1, "p", 11);
    \u0275\u0275elementStart(2, "div", 92)(3, "div")(4, "label", 93);
    \u0275\u0275text(5, "Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizationsPageComponent_Conditional_40_div_24_Conditional_10_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.inviteForm.username, $event) || (ctx_r1.inviteForm.username = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "label", 95);
    \u0275\u0275text(9, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizationsPageComponent_Conditional_40_div_24_Conditional_10_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.inviteForm.email, $event) || (ctx_r1.inviteForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "label", 97);
    \u0275\u0275text(13, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 98);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizationsPageComponent_Conditional_40_div_24_Conditional_10_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.inviteForm.name, $event) || (ctx_r1.inviteForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "label", 99);
    \u0275\u0275text(17, "Apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizationsPageComponent_Conditional_40_div_24_Conditional_10_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.inviteForm.lastname, $event) || (ctx_r1.inviteForm.lastname = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 101)(20, "label", 102);
    \u0275\u0275text(21, "Contrasena temporal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 103);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizationsPageComponent_Conditional_40_div_24_Conditional_10_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.inviteForm.password, $event) || (ctx_r1.inviteForm.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 104)(24, "button", 70);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_40_div_24_Conditional_10_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveInvitedUser());
    });
    \u0275\u0275template(25, OrganizationsPageComponent_Conditional_40_div_24_Conditional_10_Conditional_25_Template, 1, 0)(26, OrganizationsPageComponent_Conditional_40_div_24_Conditional_10_Conditional_26_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.inviteError() ? 1 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.inviteForm.username);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.inviteForm.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.inviteForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.inviteForm.lastname);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.inviteForm.password);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.inviteSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.inviteSaving() ? 25 : 26);
  }
}
function OrganizationsPageComponent_Conditional_40_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "button", 85);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_40_div_24_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleInviteDisclosure());
    });
    \u0275\u0275elementStart(2, "span", 86)(3, "span", 59);
    \u0275\u0275text(4, "Invitar nuevo usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 87);
    \u0275\u0275text(6, " Despliega el formulario solo cuando necesites registrar un invitado. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 88);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 89);
    \u0275\u0275element(9, "polyline", 90);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, OrganizationsPageComponent_Conditional_40_div_24_Conditional_10_Template, 27, 8, "div", 91);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r1.inviteDisclosureOpen());
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-open", ctx_r1.inviteDisclosureOpen());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.inviteDisclosureOpen() ? 10 : -1);
  }
}
function OrganizationsPageComponent_Conditional_40_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 61);
    \u0275\u0275text(1, "Cargando usuarios...");
    \u0275\u0275elementEnd();
  }
}
function OrganizationsPageComponent_Conditional_40_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.orgUsersError());
  }
}
function OrganizationsPageComponent_Conditional_40_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 61);
    \u0275\u0275text(1, "No hay usuarios asociados a esta organizacion.");
    \u0275\u0275elementEnd();
  }
}
function OrganizationsPageComponent_Conditional_40_Conditional_29_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Acciones");
    \u0275\u0275elementEnd();
  }
}
function OrganizationsPageComponent_Conditional_40_Conditional_29_For_17_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "Activo");
    \u0275\u0275elementEnd();
  }
}
function OrganizationsPageComponent_Conditional_40_Conditional_29_For_17_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "Inactivo");
    \u0275\u0275elementEnd();
  }
}
function OrganizationsPageComponent_Conditional_40_Conditional_29_For_17_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 19)(1, "button", 105);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_40_Conditional_29_For_17_Conditional_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r21);
      const u_r22 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.assignOrganizationManager(u_r22));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 27);
    \u0275\u0275element(3, "path", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "button", 106);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_40_Conditional_29_For_17_Conditional_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r21);
      const u_r22 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirmDetachUser(u_r22));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 27);
    \u0275\u0275element(6, "path", 107)(7, "polyline", 108)(8, "line", 109);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r22 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("title", ctx_r1.isOrgManager(u_r22) ? "Dejar como manager oficial" : "Asignar como manager");
    \u0275\u0275property("disabled", !u_r22.enabled);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.isOnlyActiveManager(u_r22));
  }
}
function OrganizationsPageComponent_Conditional_40_Conditional_29_For_17_Template(rf, ctx) {
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
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275template(10, OrganizationsPageComponent_Conditional_40_Conditional_29_For_17_Conditional_10_Template, 2, 0, "span", 17)(11, OrganizationsPageComponent_Conditional_40_Conditional_29_For_17_Conditional_11_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, OrganizationsPageComponent_Conditional_40_Conditional_29_For_17_Conditional_12_Template, 9, 3, "td", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r22 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("row-inactive", !u_r22.enabled);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r22.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r22.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", u_r22.name, " ", u_r22.lastname, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r22.email);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(u_r22.enabled ? 10 : 11);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.authService.isAdmin() ? 12 : -1);
  }
}
function OrganizationsPageComponent_Conditional_40_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, OrganizationsPageComponent_Conditional_40_Conditional_29_Conditional_14_Template, 2, 0, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, OrganizationsPageComponent_Conditional_40_Conditional_29_For_17_Template, 13, 9, "tr", 13, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275conditional(ctx_r1.authService.isAdmin() ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.orgUsers());
  }
}
function OrganizationsPageComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_40_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUsers());
    });
    \u0275\u0275elementStart(1, "div", 76);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_40_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 52)(3, "div", 53);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 54);
    \u0275\u0275element(5, "path", 30)(6, "circle", 31)(7, "path", 32)(8, "path", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div")(10, "h2", 77);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 56);
    \u0275\u0275text(13, " Invita usuarios y, si eres admin, asocia o desasocia usuarios existentes. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 57)(15, "div", 58)(16, "h3", 59);
    \u0275\u0275text(17, "Manager activo de la organizacion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 60);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, OrganizationsPageComponent_Conditional_40_Conditional_20_Template, 2, 0, "p", 61)(21, OrganizationsPageComponent_Conditional_40_Conditional_21_Template, 3, 0, "div", 62)(22, OrganizationsPageComponent_Conditional_40_Conditional_22_Template, 2, 0, "p", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, OrganizationsPageComponent_Conditional_40_Conditional_23_Template, 11, 5, "div", 78)(24, OrganizationsPageComponent_Conditional_40_div_24_Template, 11, 4, "div", 79);
    \u0275\u0275elementStart(25, "div", 80);
    \u0275\u0275template(26, OrganizationsPageComponent_Conditional_40_Conditional_26_Template, 2, 0, "p", 61)(27, OrganizationsPageComponent_Conditional_40_Conditional_27_Template, 2, 1, "p", 11)(28, OrganizationsPageComponent_Conditional_40_Conditional_28_Template, 2, 0, "p", 61)(29, OrganizationsPageComponent_Conditional_40_Conditional_29_Template, 18, 1, "div", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 68)(31, "button", 69);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_40_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUsers());
    });
    \u0275\u0275text(32, "Cerrar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(' Usuarios de "', ctx.name, '" ');
    \u0275\u0275advance(7);
    \u0275\u0275classProp("status-pill--active", !ctx_r1.orgUsersLoading() && ctx_r1.activeOrgManagers().length === 1)("status-pill--inactive", !ctx_r1.orgUsersLoading() && ctx_r1.activeOrgManagers().length !== 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.orgUsersLoading() ? "Cargando" : ctx_r1.activeOrgManagers().length === 1 ? "Valido" : ctx_r1.activeOrgManagers().length === 0 ? "Vacante" : "Conflicto", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.orgUsersLoading() ? 20 : ctx_r1.activeOrgManagers().length > 0 ? 21 : 22);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.authService.isAdmin() ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", ctx_r1.P.USERS_CREATE);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.orgUsersLoading() ? 26 : ctx_r1.orgUsersError() ? 27 : ctx_r1.orgUsers().length === 0 ? 28 : 29);
  }
}
function OrganizationsPageComponent_Conditional_41_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" Editando sede #", ctx_r1.editingLocationId(), ". ");
  }
}
function OrganizationsPageComponent_Conditional_41_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Lista, crea y administra las sedes asociadas a esta organizacion. ");
  }
}
function OrganizationsPageComponent_Conditional_41_div_13_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 123);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_41_div_13_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelEditLocation());
    });
    \u0275\u0275text(1, " Cancelar ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.locationSaving());
  }
}
function OrganizationsPageComponent_Conditional_41_div_13_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Guardando... ");
  }
}
function OrganizationsPageComponent_Conditional_41_div_13_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Actualizar sede ");
  }
}
function OrganizationsPageComponent_Conditional_41_div_13_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Crear sede ");
  }
}
function OrganizationsPageComponent_Conditional_41_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 114)(1, "label", 115)(2, "span");
    \u0275\u0275text(3, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 116);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizationsPageComponent_Conditional_41_div_13_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.locationForm.name, $event) || (ctx_r1.locationForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "label", 117)(6, "span");
    \u0275\u0275text(7, "Ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 118);
    \u0275\u0275listener("ngModelChange", function OrganizationsPageComponent_Conditional_41_div_13_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.locationForm.city = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "label", 119)(10, "span");
    \u0275\u0275text(11, "Direccion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 120);
    \u0275\u0275listener("ngModelChange", function OrganizationsPageComponent_Conditional_41_div_13_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.locationForm.address = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 121);
    \u0275\u0275template(14, OrganizationsPageComponent_Conditional_41_div_13_Conditional_14_Template, 2, 1, "button", 122);
    \u0275\u0275elementStart(15, "button", 70);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_41_div_13_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitLocation());
    });
    \u0275\u0275template(16, OrganizationsPageComponent_Conditional_41_div_13_Conditional_16_Template, 1, 0)(17, OrganizationsPageComponent_Conditional_41_div_13_Conditional_17_Template, 1, 0)(18, OrganizationsPageComponent_Conditional_41_div_13_Conditional_18_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.locationForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.locationForm.city);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.locationForm.address);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.editingLocationId() != null ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.locationSaving() || !ctx_r1.locationForm.name.trim());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.locationSaving() ? 16 : ctx_r1.editingLocationId() != null ? 17 : 18);
  }
}
function OrganizationsPageComponent_Conditional_41_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 61);
    \u0275\u0275text(1, "Cargando sedes...");
    \u0275\u0275elementEnd();
  }
}
function OrganizationsPageComponent_Conditional_41_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.locationsError());
  }
}
function OrganizationsPageComponent_Conditional_41_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 61);
    \u0275\u0275text(1, "Aun no hay sedes registradas para esta organizacion.");
    \u0275\u0275elementEnd();
  }
}
function OrganizationsPageComponent_Conditional_41_Conditional_18_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Acciones");
    \u0275\u0275elementEnd();
  }
}
function OrganizationsPageComponent_Conditional_41_Conditional_18_For_15_Conditional_9_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 127);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_41_Conditional_18_For_15_Conditional_9_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const loc_r27 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startEditLocation(loc_r27));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 27);
    \u0275\u0275element(2, "path", 38)(3, "path", 39);
    \u0275\u0275elementEnd()();
  }
}
function OrganizationsPageComponent_Conditional_41_Conditional_18_For_15_Conditional_9_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 128);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_41_Conditional_18_For_15_Conditional_9_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const loc_r27 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirmDeleteLocation(loc_r27));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 27);
    \u0275\u0275element(2, "polyline", 41)(3, "path", 42)(4, "path", 43)(5, "path", 44)(6, "path", 45);
    \u0275\u0275elementEnd()();
  }
}
function OrganizationsPageComponent_Conditional_41_Conditional_18_For_15_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 19);
    \u0275\u0275template(1, OrganizationsPageComponent_Conditional_41_Conditional_18_For_15_Conditional_9_button_1_Template, 4, 0, "button", 125)(2, OrganizationsPageComponent_Conditional_41_Conditional_18_For_15_Conditional_9_button_2_Template, 7, 0, "button", 126);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", ctx_r1.P.LOCATION_UPDATE);
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", ctx_r1.P.LOCATION_DELETE);
  }
}
function OrganizationsPageComponent_Conditional_41_Conditional_18_For_15_Template(rf, ctx) {
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
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, OrganizationsPageComponent_Conditional_41_Conditional_18_For_15_Conditional_9_Template, 3, 2, "td", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r27 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("row-editing", ctx_r1.editingLocationId() === loc_r27.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(loc_r27.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(loc_r27.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(loc_r27.city || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(loc_r27.address || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.authService.hasPermission(ctx_r1.P.LOCATION_UPDATE) || ctx_r1.authService.hasPermission(ctx_r1.P.LOCATION_DELETE) ? 9 : -1);
  }
}
function OrganizationsPageComponent_Conditional_41_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Direccion");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, OrganizationsPageComponent_Conditional_41_Conditional_18_Conditional_12_Template, 2, 0, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, OrganizationsPageComponent_Conditional_41_Conditional_18_For_15_Template, 10, 7, "tr", 124, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx_r1.authService.hasPermission(ctx_r1.P.LOCATION_UPDATE) || ctx_r1.authService.hasPermission(ctx_r1.P.LOCATION_DELETE) ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.locations());
  }
}
function OrganizationsPageComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_41_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLocations());
    });
    \u0275\u0275elementStart(1, "div", 110);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_41_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r23);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 52)(3, "div", 53);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 54);
    \u0275\u0275element(5, "path", 35)(6, "circle", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div")(8, "h2", 111);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 56);
    \u0275\u0275template(11, OrganizationsPageComponent_Conditional_41_Conditional_11_Template, 1, 1)(12, OrganizationsPageComponent_Conditional_41_Conditional_12_Template, 1, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, OrganizationsPageComponent_Conditional_41_div_13_Template, 19, 6, "div", 112);
    \u0275\u0275elementStart(14, "div", 113);
    \u0275\u0275template(15, OrganizationsPageComponent_Conditional_41_Conditional_15_Template, 2, 0, "p", 61)(16, OrganizationsPageComponent_Conditional_41_Conditional_16_Template, 2, 1, "p", 11)(17, OrganizationsPageComponent_Conditional_41_Conditional_17_Template, 2, 0, "p", 61)(18, OrganizationsPageComponent_Conditional_41_Conditional_18_Template, 16, 1, "div", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 68)(20, "button", 69);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_41_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLocations());
    });
    \u0275\u0275text(21, "Cerrar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(' Sedes de "', ctx.name, '" ');
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.editingLocationId() != null ? 11 : 12);
    \u0275\u0275advance(2);
    \u0275\u0275property("hasPermission", ctx_r1.editingLocationId() != null ? ctx_r1.P.LOCATION_UPDATE : ctx_r1.P.LOCATION_CREATE);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.locationsLoading() ? 15 : ctx_r1.locationsError() ? 16 : ctx_r1.locations().length === 0 ? 17 : 18);
  }
}
function OrganizationsPageComponent_Conditional_42_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Nueva organizacion ");
  }
}
function OrganizationsPageComponent_Conditional_42_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" Editar #", ctx_r1.editingId(), " ");
  }
}
function OrganizationsPageComponent_Conditional_42_Conditional_39_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.createOrgError());
  }
}
function OrganizationsPageComponent_Conditional_42_Conditional_39_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_42_Conditional_39_Conditional_12_For_2_Template_button_click_0_listener() {
      const u_r32 = \u0275\u0275restoreView(_r31).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectManagerCandidate(u_r32));
    });
    \u0275\u0275elementStart(1, "span", 74);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 75);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r32 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", u_r32.name, " ", u_r32.lastname, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", u_r32.username, " \xB7 ", u_r32.email, "", u_r32.organizationId != null ? " \xB7 org #" + u_r32.organizationId : "", " ");
  }
}
function OrganizationsPageComponent_Conditional_42_Conditional_39_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147);
    \u0275\u0275repeaterCreate(1, OrganizationsPageComponent_Conditional_42_Conditional_39_Conditional_12_For_2_Template, 5, 5, "button", 72, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.managerSuggestions());
  }
}
function OrganizationsPageComponent_Conditional_42_Conditional_39_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 63);
    \u0275\u0275text(1, "No hay coincidencias para manager.");
    \u0275\u0275elementEnd();
  }
}
function OrganizationsPageComponent_Conditional_42_Conditional_39_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Manager seleccionado: ", ctx_r1.managerSearchSig(), "");
  }
}
function OrganizationsPageComponent_Conditional_42_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 143)(1, "div", 144)(2, "div")(3, "h3", 145);
    \u0275\u0275text(4, "Asignar manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 146);
    \u0275\u0275text(6, " La creacion de la organizacion requiere seleccionar desde el inicio un usuario activo que no sea manager actual de otra organizacion. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, OrganizationsPageComponent_Conditional_42_Conditional_39_Conditional_7_Template, 2, 1, "p", 11);
    \u0275\u0275elementStart(8, "label", 64)(9, "span");
    \u0275\u0275text(10, "Buscar manager existente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 65);
    \u0275\u0275listener("ngModelChange", function OrganizationsPageComponent_Conditional_42_Conditional_39_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setManagerSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, OrganizationsPageComponent_Conditional_42_Conditional_39_Conditional_12_Template, 3, 0, "div", 147)(13, OrganizationsPageComponent_Conditional_42_Conditional_39_Conditional_13_Template, 2, 0, "p", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, OrganizationsPageComponent_Conditional_42_Conditional_39_Conditional_14_Template, 2, 1, "p", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.createOrgError() ? 7 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.managerSearchSig());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.managerSuggestions().length > 0 ? 12 : ctx_r1.managerSearchSig().trim() ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selectedManagerUserId() != null ? 14 : -1);
  }
}
function OrganizationsPageComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_42_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModals());
    });
    \u0275\u0275elementStart(1, "div", 129);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_42_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r29);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 52)(3, "div", 53);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 54);
    \u0275\u0275element(5, "rect", 130)(6, "path", 131);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h2", 132);
    \u0275\u0275template(8, OrganizationsPageComponent_Conditional_42_Conditional_8_Template, 1, 0)(9, OrganizationsPageComponent_Conditional_42_Conditional_9_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 133)(11, "label", 64)(12, "span");
    \u0275\u0275text(13, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 134);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizationsPageComponent_Conditional_42_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "label", 135)(16, "span");
    \u0275\u0275text(17, "Tax ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 136);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizationsPageComponent_Conditional_42_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.taxId, $event) || (ctx_r1.form.taxId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "label", 135)(20, "span");
    \u0275\u0275text(21, "Plan limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 137);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizationsPageComponent_Conditional_42_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.planLimit, $event) || (ctx_r1.form.planLimit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "label", 135)(24, "span");
    \u0275\u0275text(25, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 138);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizationsPageComponent_Conditional_42_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.email, $event) || (ctx_r1.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "label", 135)(28, "span");
    \u0275\u0275text(29, "Telefono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 139);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizationsPageComponent_Conditional_42_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.phone, $event) || (ctx_r1.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "label", 64)(32, "span");
    \u0275\u0275text(33, "Direccion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 140);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizationsPageComponent_Conditional_42_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.address, $event) || (ctx_r1.form.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "label", 141)(36, "input", 142);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizationsPageComponent_Conditional_42_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.active, $event) || (ctx_r1.form.active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38, "Organizacion activa");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(39, OrganizationsPageComponent_Conditional_42_Conditional_39_Template, 15, 4, "div", 143);
    \u0275\u0275elementStart(40, "div", 68)(41, "button", 69);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_42_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModals());
    });
    \u0275\u0275text(42, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 70);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_42_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.modalCreate() ? ctx_r1.submitCreate() : ctx_r1.submitEdit());
    });
    \u0275\u0275text(44, " Guardar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.modalCreate() ? 8 : 9);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.taxId);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.planLimit);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.address);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.active);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.modalCreate() ? 39 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.loading() || (ctx_r1.modalCreate() ? !ctx_r1.canSubmitCreate() : !ctx_r1.form.name.trim()));
  }
}
function OrganizationsPageComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_43_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelConfirm());
    });
    \u0275\u0275elementStart(1, "div", 148);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_43_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r33);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 52)(3, "div", 149);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 54);
    \u0275\u0275element(5, "path", 150)(6, "line", 151)(7, "line", 152);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h2", 153);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 154);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 68)(13, "button", 69);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_43_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelConfirm());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 69);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_43_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.acceptConfirm());
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cfg_r34 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275classProp("modal__icon--warning", !cfg_r34.danger)("modal__icon--error", cfg_r34.danger);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(cfg_r34.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cfg_r34.message);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", cfg_r34.cancelLabel || "Cancelar", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("danger", cfg_r34.danger)("primary", !cfg_r34.danger);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cfg_r34.confirmLabel || "Confirmar", " ");
  }
}
function OrganizationsPageComponent_Conditional_44_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 156);
    \u0275\u0275element(1, "polyline", 159);
    \u0275\u0275elementEnd();
  }
}
function OrganizationsPageComponent_Conditional_44_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 54);
    \u0275\u0275element(1, "circle", 160)(2, "line", 161)(3, "line", 162);
    \u0275\u0275elementEnd();
  }
}
function OrganizationsPageComponent_Conditional_44_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 54);
    \u0275\u0275element(1, "path", 150)(2, "line", 151)(3, "line", 152);
    \u0275\u0275elementEnd();
  }
}
function OrganizationsPageComponent_Conditional_44_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 54);
    \u0275\u0275element(1, "circle", 160)(2, "line", 163)(3, "line", 164);
    \u0275\u0275elementEnd();
  }
}
function OrganizationsPageComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_44_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeNotice());
    });
    \u0275\u0275elementStart(1, "div", 155);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_44_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r35);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 52)(3, "div", 149);
    \u0275\u0275template(4, OrganizationsPageComponent_Conditional_44_Case_4_Template, 2, 0, ":svg:svg", 156)(5, OrganizationsPageComponent_Conditional_44_Case_5_Template, 4, 0, ":svg:svg", 54)(6, OrganizationsPageComponent_Conditional_44_Case_6_Template, 4, 0, ":svg:svg", 54)(7, OrganizationsPageComponent_Conditional_44_Case_7_Template, 4, 0, ":svg:svg", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h2", 157);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 158);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 68)(13, "button", 15);
    \u0275\u0275listener("click", function OrganizationsPageComponent_Conditional_44_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeNotice());
    });
    \u0275\u0275text(14, "Entendido");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const n_r36 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275classProp("modal__icon--success", n_r36.kind === "success")("modal__icon--error", n_r36.kind === "error")("modal__icon--warning", n_r36.kind === "warning")("modal__icon--info", n_r36.kind === "info");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_6_0 = n_r36.kind) === "success" ? 4 : tmp_6_0 === "error" ? 5 : tmp_6_0 === "warning" ? 6 : 7);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(n_r36.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r36.message);
  }
}
function emptyInviteUserForm() {
  return { username: "", email: "", password: "", name: "", lastname: "" };
}
var OrganizationsPageComponent = class _OrganizationsPageComponent {
  adminApi;
  authService;
  P = P;
  /** Lista normalizada para la tabla. Tipo permisivo porque mezcla {@code OrganizationDto} y
   *  {@code OrganizationMineDto} dependiendo del endpoint usado. */
  orgs = signal([]);
  loadError = signal(null);
  loading = signal(false);
  // Filtros
  idFilterSig = signal("");
  nameFilterSig = signal("");
  // ---------------------------------------------------------------------------
  // Modal de localizaciones (sedes) por organizacion
  // ---------------------------------------------------------------------------
  locationsModalOrg = signal(null);
  locations = signal([]);
  locationsLoading = signal(false);
  locationsError = signal(null);
  locationSaving = signal(false);
  /** Id de la sede en edicion. `null` => formulario en modo creacion. */
  editingLocationId = signal(null);
  /** Form del modal de sedes. `organizationId` se sincroniza con la org abierta. */
  locationForm = this.emptyLocationForm();
  // Modales CRUD
  modalCreate = signal(false);
  modalEdit = signal(false);
  editingId = signal(null);
  notice = signal(null);
  confirmReq = signal(null);
  // ---------------------------------------------------------------------------
  // Modal de usuarios por organizacion
  // ---------------------------------------------------------------------------
  usersModalOrg = signal(null);
  orgUsers = signal([]);
  orgUsersLoading = signal(false);
  orgUsersError = signal(null);
  allUsersCatalog = signal([]);
  associateUserId = signal(null);
  associateSearchSig = signal("");
  inviteSaving = signal(false);
  associateSaving = signal(false);
  inviteError = signal(null);
  inviteDisclosureOpen = signal(false);
  inviteForm = emptyInviteUserForm();
  createOrgError = signal(null);
  managerModalOrg = signal(null);
  managerModalUsers = signal([]);
  managerModalLoading = signal(false);
  managerModalError = signal(null);
  managerModalSearchSig = signal("");
  managerModalSelectedUserId = signal(null);
  managerModalSaving = signal(false);
  managerAssignmentMode = signal("existing");
  selectedManagerUserId = signal(null);
  managerSearchSig = signal("");
  managerInviteForm = emptyInviteUserForm();
  availableUsersToAssociate = computed(() => {
    const org = this.usersModalOrg();
    if (!org)
      return [];
    const currentIds = new Set(this.orgUsers().map((u) => u.id));
    const myId = this.authService.currentUser()?.id ?? null;
    return this.allUsersCatalog().filter((u) => !currentIds.has(u.id) && u.id !== myId && !u.roles.includes("ROLE_ADMIN")).sort((a, b) => (a.username || "").localeCompare(b.username || "", "es", { sensitivity: "base" }));
  });
  associateSuggestions = computed(() => {
    const q = this.associateSearchSig().trim().toLowerCase();
    if (!q)
      return [];
    return this.availableUsersToAssociate().filter((u) => (u.username || "").toLowerCase().includes(q) || (u.email || "").toLowerCase().includes(q) || (u.name || "").toLowerCase().includes(q) || (u.lastname || "").toLowerCase().includes(q)).slice(0, 8);
  });
  availableManagerCandidates = computed(() => {
    return this.allUsersCatalog().filter((u) => this.isEligibleManagerCandidate(u, null)).sort((a, b) => (a.username || "").localeCompare(b.username || "", "es", { sensitivity: "base" }));
  });
  managerSuggestions = computed(() => {
    const q = this.managerSearchSig().trim().toLowerCase();
    if (!q)
      return [];
    return this.availableManagerCandidates().filter((u) => (u.username || "").toLowerCase().includes(q) || (u.email || "").toLowerCase().includes(q) || (u.name || "").toLowerCase().includes(q) || (u.lastname || "").toLowerCase().includes(q)).slice(0, 8);
  });
  managerModalCandidates = computed(() => {
    const org = this.managerModalOrg();
    if (!org)
      return [];
    return this.allUsersCatalog().filter((u) => this.isEligibleManagerCandidate(u, org.id)).sort((a, b) => (a.username || "").localeCompare(b.username || "", "es", { sensitivity: "base" }));
  });
  managerModalSuggestions = computed(() => {
    const q = this.managerModalSearchSig().trim().toLowerCase();
    if (!q)
      return [];
    return this.managerModalCandidates().filter((u) => (u.username || "").toLowerCase().includes(q) || (u.email || "").toLowerCase().includes(q) || (u.name || "").toLowerCase().includes(q) || (u.lastname || "").toLowerCase().includes(q)).slice(0, 8);
  });
  /** Modelo del formulario de crear/editar. Inicializa con valores neutros. */
  form = this.emptyForm();
  /** Vista filtrada por ID y nombre. */
  filteredOrgs = computed(() => {
    const idQ = this.idFilterSig().trim();
    const nameQ = this.nameFilterSig().trim().toLowerCase();
    let list = this.orgs();
    if (idQ) {
      list = list.filter((o) => String(o.id).includes(idQ));
    }
    if (nameQ) {
      list = list.filter((o) => (o.name || "").toLowerCase().includes(nameQ));
    }
    return list;
  });
  activeOrgManagers = computed(() => this.orgUsers().filter((u) => u.enabled && u.roles.includes("ROLE_MANAGER")).sort((a, b) => `${a.name} ${a.lastname}`.localeCompare(`${b.name} ${b.lastname}`, "es", { sensitivity: "base" })));
  activeManagerModalUsers = computed(() => this.managerModalUsers().filter((u) => u.enabled && u.roles.includes("ROLE_MANAGER")).sort((a, b) => `${a.name} ${a.lastname}`.localeCompare(`${b.name} ${b.lastname}`, "es", { sensitivity: "base" })));
  constructor(adminApi, authService) {
    this.adminApi = adminApi;
    this.authService = authService;
  }
  ngOnInit() {
    this.reload();
  }
  // ---------------------------------------------------------------------------
  // Carga
  // ---------------------------------------------------------------------------
  reload() {
    this.loadError.set(null);
    this.loading.set(true);
    this.adminApi.myOrganizations().subscribe({
      next: (rows) => {
        this.orgs.set(rows.map(this.toDto));
        this.loading.set(false);
      },
      error: (e) => {
        this.loading.set(false);
        this.loadError.set(e?.error?.message || e?.message || "No se pudo cargar la vista de organizacion.");
      }
    });
  }
  /** Normaliza los DTO del endpoint /mine al shape completo de OrganizationDto. */
  toDto = (o) => ({
    id: o.id,
    name: o.name,
    taxId: o.taxId,
    address: o.address ?? "",
    email: o.email ?? "",
    phone: o.phone ?? "",
    active: o.active ?? false,
    planLimit: o.planLimit ?? 0,
    createdAt: o.createdAt ?? null,
    createdByUserId: o.createdByUserId ?? null,
    createdByName: o.createdByName ?? null,
    createdByLastname: o.createdByLastname ?? null,
    createdByFullName: o.createdByFullName ?? o.createdByFullName ?? null
  });
  /**
   * Texto que se muestra en la columna "Creado por". Prioriza nombre+apellido (resueltos
   * via Feign al auth-service) y cae al userId si la llamada no logro enriquecerlos.
   */
  creatorLabel(o) {
    const explicitFull = (o.createdByFullName || "").trim();
    if (explicitFull)
      return explicitFull;
    const full = [o.createdByName, o.createdByLastname].filter((s) => s != null && s.trim().length > 0).join(" ").trim();
    if (full)
      return full;
    if (o.createdByUserId != null)
      return `#${o.createdByUserId}`;
    return "\u2014";
  }
  isEligibleManagerCandidate(u, orgId) {
    const myId = this.authService.currentUser()?.id ?? null;
    return u.id !== myId && u.enabled && !u.roles.includes("ROLE_ADMIN") && !(u.roles.includes("ROLE_MANAGER") && u.organizationId != null && u.organizationId !== orgId);
  }
  loadAllUsersCatalog() {
    if (!this.authService.isAdmin()) {
      this.allUsersCatalog.set([]);
      return;
    }
    this.adminApi.listUsers().subscribe({
      next: (rows) => this.allUsersCatalog.set(rows ?? []),
      error: () => this.allUsersCatalog.set([])
    });
  }
  userLookupLabel(u) {
    const full = `${u.name || ""} ${u.lastname || ""}`.trim();
    const main = full || u.username;
    return `${main} - ${u.email}`;
  }
  setAssociateSearch(value) {
    this.associateSearchSig.set(value);
    this.associateUserId.set(null);
  }
  selectAssociateCandidate(u) {
    this.associateUserId.set(u.id);
    this.associateSearchSig.set(this.userLookupLabel(u));
  }
  setManagerSearch(value) {
    this.managerSearchSig.set(value);
    this.selectedManagerUserId.set(null);
  }
  setManagerModalSearch(value) {
    this.managerModalSearchSig.set(value);
    this.managerModalSelectedUserId.set(null);
  }
  selectManagerCandidate(u) {
    this.selectedManagerUserId.set(u.id);
    this.managerSearchSig.set(this.userLookupLabel(u));
    this.createOrgError.set(null);
  }
  selectManagerModalCandidate(u) {
    this.managerModalSelectedUserId.set(u.id);
    this.managerModalSearchSig.set(this.userLookupLabel(u));
    this.managerModalError.set(null);
  }
  useExistingManagerMode() {
    this.managerAssignmentMode.set("existing");
    this.createOrgError.set(null);
  }
  useNewManagerMode() {
    this.managerAssignmentMode.set("new");
    this.createOrgError.set(null);
  }
  openUsers(o) {
    this.closeManagerModal();
    this.usersModalOrg.set(o);
    this.orgUsers.set([]);
    this.orgUsersError.set(null);
    this.orgUsersLoading.set(true);
    this.inviteError.set(null);
    this.inviteDisclosureOpen.set(false);
    this.associateUserId.set(null);
    this.associateSearchSig.set("");
    this.inviteForm = emptyInviteUserForm();
    this.fetchOrganizationUsers(o.id);
    this.loadAllUsersCatalog();
  }
  openManagerModal(o) {
    this.closeUsers();
    this.managerModalOrg.set(o);
    this.managerModalUsers.set([]);
    this.managerModalError.set(null);
    this.managerModalSearchSig.set("");
    this.managerModalSelectedUserId.set(null);
    this.managerModalSaving.set(false);
    this.managerModalLoading.set(true);
    this.loadAllUsersCatalog();
    this.adminApi.listUsersByOrganization(o.id).subscribe({
      next: (rows) => {
        this.managerModalUsers.set(rows ?? []);
        this.managerModalLoading.set(false);
      },
      error: (e) => {
        this.managerModalLoading.set(false);
        this.managerModalError.set(e?.error?.message || e?.message || "No se pudo cargar la configuracion de manager.");
      }
    });
  }
  closeUsers() {
    this.usersModalOrg.set(null);
    this.orgUsers.set([]);
    this.orgUsersError.set(null);
    this.associateUserId.set(null);
    this.associateSearchSig.set("");
    this.inviteError.set(null);
    this.inviteDisclosureOpen.set(false);
    this.inviteForm = emptyInviteUserForm();
  }
  closeManagerModal() {
    this.managerModalOrg.set(null);
    this.managerModalUsers.set([]);
    this.managerModalError.set(null);
    this.managerModalSearchSig.set("");
    this.managerModalSelectedUserId.set(null);
    this.managerModalSaving.set(false);
    this.managerModalLoading.set(false);
  }
  toggleInviteDisclosure() {
    this.inviteDisclosureOpen.update((v) => !v);
  }
  isOrgManager(u) {
    return u.roles.includes("ROLE_MANAGER");
  }
  isOnlyActiveManager(u) {
    const managers = this.activeOrgManagers();
    return managers.length === 1 && managers[0].id === u.id;
  }
  assignOrganizationManager(u) {
    const org = this.usersModalOrg();
    if (!org || !this.authService.isAdmin())
      return;
    if (!u.enabled) {
      this.showWarning("Solo puedes asignar como manager a un usuario activo.");
      return;
    }
    this.openConfirm({
      title: this.isOrgManager(u) ? "Establecer manager oficial" : "Asignar manager",
      message: this.isOrgManager(u) ? `Se mantendra a ${u.name} ${u.lastname} como manager oficial de "${org.name}" y cualquier otro manager sera degradado automaticamente.` : `Se asignara a ${u.name} ${u.lastname} como manager activo de "${org.name}".`,
      confirmLabel: "Confirmar",
      onConfirm: () => this.executeAssignOrganizationManager(org.id, u)
    });
  }
  executeAssignOrganizationManager(orgId, u) {
    this.adminApi.assignOrganizationManager(orgId, u.id).subscribe({
      next: () => {
        this.fetchOrganizationUsers(orgId);
        this.loadAllUsersCatalog();
        this.showSuccess(`${u.name} ${u.lastname} ahora es el manager activo de la organizacion.`);
      },
      error: (e) => this.showApiError(e)
    });
  }
  confirmManagerModalAssign() {
    const org = this.managerModalOrg();
    const userId = this.managerModalSelectedUserId();
    if (!org || userId == null) {
      this.managerModalError.set("Selecciona un usuario para asignarlo como manager.");
      return;
    }
    const candidate = this.allUsersCatalog().find((u) => u.id === userId);
    if (!candidate) {
      this.managerModalError.set("El usuario seleccionado no es valido.");
      return;
    }
    this.managerModalSaving.set(true);
    this.adminApi.assignOrganizationManager(org.id, userId).subscribe({
      next: () => {
        this.managerModalSaving.set(false);
        this.closeManagerModal();
        this.reload();
        this.loadAllUsersCatalog();
        this.showSuccess(`Manager actualizado para "${org.name}".`);
      },
      error: (e) => {
        this.managerModalSaving.set(false);
        this.managerModalError.set(e?.error?.message || e?.message || "No se pudo actualizar el manager.");
      }
    });
  }
  fetchOrganizationUsers(orgId) {
    this.adminApi.listUsersByOrganization(orgId).subscribe({
      next: (rows) => {
        this.orgUsers.set(rows ?? []);
        this.orgUsersLoading.set(false);
      },
      error: (e) => {
        this.orgUsersLoading.set(false);
        this.orgUsersError.set(e?.error?.message || e?.message || "No se pudieron cargar los usuarios de la organizacion.");
      }
    });
  }
  saveInvitedUser() {
    const org = this.usersModalOrg();
    if (!org)
      return;
    const f = this.inviteForm;
    if (!f.username.trim() || !f.email.trim() || !f.password || !f.name.trim() || !f.lastname.trim()) {
      this.inviteError.set("Completa todos los campos del invitado.");
      return;
    }
    if (f.password.length < 6) {
      this.inviteError.set("La contrasena temporal debe tener al menos 6 caracteres.");
      return;
    }
    const body = {
      username: f.username.trim(),
      email: f.email.trim(),
      password: f.password,
      name: f.name.trim(),
      lastname: f.lastname.trim(),
      roles: ["ROLE_USER"],
      organizationId: org.id
    };
    this.inviteSaving.set(true);
    this.adminApi.createUser(body).subscribe({
      next: (created) => {
        this.inviteSaving.set(false);
        this.inviteForm = emptyInviteUserForm();
        this.inviteError.set(null);
        this.fetchOrganizationUsers(org.id);
        this.showSuccess(`Usuario ${created.username} invitado a "${org.name}".`);
      },
      error: (e) => {
        this.inviteSaving.set(false);
        this.inviteError.set(e?.error?.message || e?.message || "No se pudo invitar al usuario.");
      }
    });
  }
  associateExistingUser() {
    const org = this.usersModalOrg();
    const userId = this.associateUserId();
    if (!org || userId == null || !this.authService.isAdmin())
      return;
    const body = { organizationId: org.id };
    this.associateSaving.set(true);
    this.adminApi.updateUser(userId, body).subscribe({
      next: () => {
        this.associateSaving.set(false);
        this.associateUserId.set(null);
        this.associateSearchSig.set("");
        this.fetchOrganizationUsers(org.id);
        this.loadAllUsersCatalog();
        this.showSuccess("Usuario asociado correctamente a la organizacion.");
      },
      error: (e) => {
        this.associateSaving.set(false);
        this.showApiError(e);
      }
    });
  }
  confirmDetachUser(u) {
    const org = this.usersModalOrg();
    if (!org || !this.authService.isAdmin())
      return;
    this.openConfirm({
      title: "Desasociar usuario",
      message: `Se quitara a ${u.username} de la organizacion "${org.name}".`,
      confirmLabel: "Desasociar",
      danger: true,
      onConfirm: () => this.detachUser(u)
    });
  }
  detachUser(u) {
    const org = this.usersModalOrg();
    if (!org)
      return;
    const body = { organizationId: null };
    this.adminApi.updateUser(u.id, body).subscribe({
      next: () => {
        this.fetchOrganizationUsers(org.id);
        this.loadAllUsersCatalog();
        this.showSuccess(`Usuario ${u.username} desasociado.`);
      },
      error: (e) => this.showApiError(e)
    });
  }
  // ---------------------------------------------------------------------------
  // Locations modal (sedes)
  // ---------------------------------------------------------------------------
  /** Abre el modal en modo "listar + crear". */
  openLocations(o) {
    this.locationsModalOrg.set(o);
    this.locations.set([]);
    this.locationsError.set(null);
    this.locationsLoading.set(true);
    this.editingLocationId.set(null);
    this.locationForm = this.emptyLocationForm(o.id);
    this.fetchLocations(o.id);
  }
  closeLocations() {
    this.locationsModalOrg.set(null);
    this.locations.set([]);
    this.locationsError.set(null);
    this.editingLocationId.set(null);
    this.locationForm = this.emptyLocationForm();
  }
  fetchLocations(orgId) {
    this.adminApi.listLocationsByOrganization(orgId).subscribe({
      next: (rows) => {
        this.locations.set(rows);
        this.locationsLoading.set(false);
      },
      error: (e) => {
        this.locationsLoading.set(false);
        this.locationsError.set(e?.error?.message || e?.message || "Error al cargar sedes");
      }
    });
  }
  /** Pasa el formulario al modo edicion para una sede existente. */
  startEditLocation(loc) {
    this.editingLocationId.set(loc.id);
    this.locationForm = {
      name: loc.name,
      address: loc.address ?? "",
      city: loc.city ?? "",
      organizationId: loc.organizationId
    };
  }
  /** Cancela la edicion y vuelve al estado "crear sede". */
  cancelEditLocation() {
    const org = this.locationsModalOrg();
    this.editingLocationId.set(null);
    this.locationForm = this.emptyLocationForm(org?.id);
  }
  /** Decide si crea o actualiza segun haya editingLocationId. */
  submitLocation() {
    const org = this.locationsModalOrg();
    if (!org)
      return;
    const name = (this.locationForm.name || "").trim();
    if (!name) {
      this.showWarning("El nombre de la sede es obligatorio.");
      return;
    }
    const body = {
      name,
      address: (this.locationForm.address || "").trim() || null,
      city: (this.locationForm.city || "").trim() || null,
      organizationId: org.id
    };
    const editingId = this.editingLocationId();
    this.locationSaving.set(true);
    const op$ = editingId == null ? this.adminApi.createLocation(body) : this.adminApi.updateLocation(editingId, body);
    op$.subscribe({
      next: () => {
        this.locationSaving.set(false);
        this.editingLocationId.set(null);
        this.locationForm = this.emptyLocationForm(org.id);
        this.fetchLocations(org.id);
        this.showSuccess(editingId == null ? `Sede "${name}" creada en "${org.name}".` : `Sede #${editingId} actualizada.`);
      },
      error: (e) => {
        this.locationSaving.set(false);
        this.showApiError(e);
      }
    });
  }
  confirmDeleteLocation(loc) {
    this.openConfirm({
      title: "Eliminar sede",
      message: `Se eliminara la sede "${loc.name}" (id ${loc.id}). Esta accion no se puede deshacer.`,
      confirmLabel: "Eliminar",
      danger: true,
      onConfirm: () => this.executeDeleteLocation(loc)
    });
  }
  executeDeleteLocation(loc) {
    const org = this.locationsModalOrg();
    if (!org)
      return;
    this.adminApi.deleteLocation(loc.id).subscribe({
      next: () => {
        if (this.editingLocationId() === loc.id) {
          this.cancelEditLocation();
        }
        this.fetchLocations(org.id);
        this.showSuccess(`Sede "${loc.name}" eliminada.`);
      },
      error: (e) => this.showApiError(e)
    });
  }
  // ---------------------------------------------------------------------------
  // Activate / deactivate
  // ---------------------------------------------------------------------------
  /**
   * Handler del {@code <input type="checkbox">} del switch.
   *
   * <p>Estrategia: usamos {@code preventDefault} para que el browser NO mueva el switch hasta
   * que el usuario confirme en el modal. Esto evita el "rebote" visual cuando el usuario
   * cancela. Una vez que el usuario confirma, en {@link #executeSetActive} aplicamos un
   * optimistic update local INMEDIATAMENTE (la fila + el switch cambian al estado destino) y,
   * si el backend rechaza, revertimos.
   */
  toggleOrgActive(event, o) {
    event.preventDefault();
    this.confirmToggleActive(o);
  }
  confirmToggleActive(o) {
    const willActivate = !o.active;
    this.openConfirm({
      title: willActivate ? "Activar organizacion" : "Desactivar organizacion",
      message: willActivate ? `Se reactivara "${o.name}". Los usuarios podran operar de nuevo.` : `Se desactivara "${o.name}". Los usuarios no podran operar hasta reactivarla.`,
      confirmLabel: willActivate ? "Activar" : "Desactivar",
      danger: !willActivate,
      onConfirm: () => this.executeSetActive(o, willActivate)
    });
  }
  /**
   * Optimistic update + llamada al backend.
   *
   * <ol>
   *   <li>Cambia {@code active} en la fila de inmediato (el switch se mueve antes que el
   *       backend responda → feedback instantaneo).</li>
   *   <li>Lanza la llamada al backend.</li>
   *   <li>En exito: re-sincroniza la fila con lo que devuelve el servidor (por si quedaron
   *       campos desactualizados como {@code createdByName}).</li>
   *   <li>En error: REVIERTE el flag {@code active} a su valor original y muestra el
   *       mensaje de error.</li>
   * </ol>
   */
  executeSetActive(o, active) {
    const previousActive = o.active;
    this.orgs.update((list) => list.map((x) => x.id === o.id ? __spreadProps(__spreadValues({}, x), { active }) : x));
    const op$ = active ? this.adminApi.activateOrganization(o.id) : this.adminApi.deactivateOrganization(o.id);
    op$.subscribe({
      next: (updated) => {
        this.orgs.update((list) => list.map((x) => x.id === o.id ? this.toDto(updated) : x));
        this.showSuccess(active ? `"${o.name}" activada.` : `"${o.name}" desactivada.`);
      },
      error: (e) => {
        this.orgs.update((list) => list.map((x) => x.id === o.id ? __spreadProps(__spreadValues({}, x), { active: previousActive }) : x));
        this.showApiError(e);
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Crear / Editar
  // ---------------------------------------------------------------------------
  openCreate() {
    this.form = this.emptyForm();
    this.createOrgError.set(null);
    this.selectedManagerUserId.set(null);
    this.managerSearchSig.set("");
    this.loadAllUsersCatalog();
    this.modalCreate.set(true);
  }
  openEdit(o) {
    this.editingId.set(o.id);
    this.form = {
      name: o.name,
      taxId: o.taxId,
      address: o.address,
      email: o.email,
      phone: o.phone,
      active: !!o.active,
      planLimit: o.planLimit ?? 0
    };
    this.modalEdit.set(true);
  }
  closeModals() {
    this.modalCreate.set(false);
    this.modalEdit.set(false);
    this.editingId.set(null);
    this.createOrgError.set(null);
    this.selectedManagerUserId.set(null);
    this.managerSearchSig.set("");
  }
  submitCreate() {
    const name = this.form.name.trim();
    if (!name) {
      this.createOrgError.set("El nombre de la organizacion es obligatorio.");
      return;
    }
    const managerUserId = this.selectedManagerUserId();
    if (managerUserId == null) {
      this.createOrgError.set("Debes seleccionar un manager inicial para la organizacion.");
      return;
    }
    this.loading.set(true);
    this.adminApi.createOrganization(__spreadProps(__spreadValues({}, this.form), { name, managerUserId })).subscribe({
      next: (created) => {
        this.loading.set(false);
        this.closeModals();
        this.reload();
        this.showSuccess(`Organizacion "${created.name}" creada con su manager inicial.`);
      },
      error: (e) => {
        this.loading.set(false);
        this.showApiError(e);
      }
    });
  }
  submitEdit() {
    const id = this.editingId();
    if (id == null || !this.form.name.trim())
      return;
    this.loading.set(true);
    this.adminApi.updateOrganization(id, this.form).subscribe({
      next: () => {
        this.loading.set(false);
        this.closeModals();
        this.reload();
        this.showSuccess(`Organizacion #${id} actualizada.`);
      },
      error: (e) => {
        this.loading.set(false);
        this.showApiError(e);
      }
    });
  }
  canSubmitCreate() {
    return !!(this.form.name.trim() && this.selectedManagerUserId() != null);
  }
  // ---------------------------------------------------------------------------
  // Delete
  // ---------------------------------------------------------------------------
  confirmDelete(o) {
    this.openConfirm({
      title: "Eliminar organizacion",
      message: `Se eliminara "${o.name}" (id ${o.id}). Esta accion no se puede deshacer.`,
      confirmLabel: "Eliminar",
      danger: true,
      onConfirm: () => this.executeDelete(o)
    });
  }
  executeDelete(o) {
    this.adminApi.deleteOrganization(o.id).subscribe({
      next: () => {
        this.reload();
        this.showSuccess(`Organizacion "${o.name}" eliminada.`);
      },
      error: (e) => this.showApiError(e)
    });
  }
  // ---------------------------------------------------------------------------
  // Confirm + Notice modals
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
  validateInitialManagerAssignment() {
    if (this.managerAssignmentMode() === "existing") {
      if (this.selectedManagerUserId() == null) {
        this.createOrgError.set("Debes seleccionar un manager inicial para la organizacion.");
        return false;
      }
      return true;
    }
    const f = this.managerInviteForm;
    if (!f.username.trim() || !f.email.trim() || !f.password || !f.name.trim() || !f.lastname.trim()) {
      this.createOrgError.set("Completa todos los datos del manager inicial.");
      return false;
    }
    if (f.password.length < 6) {
      this.createOrgError.set("La contrasena temporal del manager debe tener al menos 6 caracteres.");
      return false;
    }
    return true;
  }
  completeInitialManagerAssignment(org) {
    if (this.managerAssignmentMode() === "existing") {
      this.assignExistingManager(org);
      return;
    }
    this.inviteInitialManager(org);
  }
  assignExistingManager(org) {
    const userId = this.selectedManagerUserId();
    const selected = this.allUsersCatalog().find((u) => u.id === userId);
    if (userId == null || !selected) {
      this.loading.set(false);
      this.createOrgError.set("Selecciona un manager valido.");
      return;
    }
    this.adminApi.updateUser(userId, { organizationId: org.id }).subscribe({
      next: () => {
        const roles = this.managerRolesFor(selected);
        this.adminApi.setUserRoles(userId, roles).subscribe({
          next: () => this.finishCreateOrganization(org, `Organizacion "${org.name}" creada y manager asignado.`),
          error: (e) => this.handleInitialManagerFailure(org, e)
        });
      },
      error: (e) => this.handleInitialManagerFailure(org, e)
    });
  }
  inviteInitialManager(org) {
    const f = this.managerInviteForm;
    const body = {
      username: f.username.trim(),
      email: f.email.trim(),
      password: f.password,
      name: f.name.trim(),
      lastname: f.lastname.trim(),
      organizationId: org.id,
      roles: ["ROLE_MANAGER", "ROLE_USER"]
    };
    this.adminApi.createUser(body).subscribe({
      next: () => this.finishCreateOrganization(org, `Organizacion "${org.name}" creada y manager invitado.`),
      error: (e) => this.handleInitialManagerFailure(org, e)
    });
  }
  managerRolesFor(user) {
    const merged = new Set((user.roles || []).filter((r) => r !== "ROLE_ADMIN"));
    merged.add("ROLE_MANAGER");
    merged.add("ROLE_USER");
    return Array.from(merged);
  }
  finishCreateOrganization(org, message) {
    this.loading.set(false);
    this.closeModals();
    this.reload();
    this.showSuccess(message);
  }
  handleInitialManagerFailure(org, e) {
    this.loading.set(false);
    const msg = e?.error?.message || e?.message || "No se pudo asignar el manager inicial.";
    this.closeModals();
    this.reload();
    this.openUsers(org);
    this.showWarning(`La organizacion "${org.name}" se creo, pero la asignacion inicial del manager fallo. ${msg}`, "Asignacion de manager pendiente");
  }
  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------
  emptyForm() {
    return {
      name: "",
      taxId: "",
      address: "",
      email: "",
      phone: "",
      active: true,
      planLimit: 5
    };
  }
  /**
   * Formulario inicial para crear sedes. `organizationId` se rellena con la org abierta
   * en el modal; cuando se llama sin contexto (p. ej. al cerrar) cae a 0 como placeholder
   * inocuo, ya que el form no se renderiza sin una org seleccionada.
   */
  emptyLocationForm(organizationId) {
    return {
      name: "",
      address: "",
      city: "",
      organizationId: organizationId ?? 0
    };
  }
  static \u0275fac = function OrganizationsPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrganizationsPageComponent)(\u0275\u0275directiveInject(AdminApiService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrganizationsPageComponent, selectors: [["app-organizations-page"]], decls: 45, vars: 11, consts: [[1, "page"], [1, "page-head"], [1, "page-title"], [1, "page-sub"], [1, "head-actions"], ["type", "button", "class", "btn primary", 3, "click", 4, "hasPermission"], [1, "toolbar"], [1, "filter"], ["type", "text", "placeholder", "ej. 1", 3, "ngModelChange", "ngModel"], [1, "filter", "filter--grow"], ["type", "search", "placeholder", "Acme S.A.S", "autocomplete", "off", 3, "ngModelChange", "ngModel"], [1, "err"], [1, "table-wrap"], [3, "row-inactive"], ["role", "presentation", 1, "modal-backdrop"], ["type", "button", 1, "btn", "primary", 3, "click"], [1, "creator-cell"], [1, "status-pill", "status-pill--active"], [1, "status-pill", "status-pill--inactive"], [1, "actions"], ["type", "button", "class", "icon-btn", "title", "Asignar o cambiar manager", "aria-label", "Asignar o cambiar manager", 3, "click", 4, "hasPermission"], ["type", "button", "class", "icon-btn", "title", "Asociar usuarios", "aria-label", "Asociar usuarios", 3, "click", 4, "hasPermission"], ["type", "button", "class", "icon-btn", "title", "Gestionar sedes", "aria-label", "Gestionar sedes", 3, "click", 4, "hasPermission"], ["type", "button", "class", "icon-btn", "title", "Editar organizacion", "aria-label", "Editar organizacion", 3, "click", 4, "hasPermission"], ["type", "button", "class", "icon-btn warn", "title", "Eliminar organizacion", "aria-label", "Eliminar organizacion", 3, "click", 4, "hasPermission"], ["class", "switch", 3, "title", 4, "hasPermission"], ["type", "button", "title", "Asignar o cambiar manager", "aria-label", "Asignar o cambiar manager", 1, "icon-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "width", "18", "height", "18", "aria-hidden", "true"], ["d", "m12 3 2.5 5 5.5.8-4 3.9.9 5.5L12 15.8 7.1 18.2 8 12.7 4 8.8 9.5 8z"], ["type", "button", "title", "Asociar usuarios", "aria-label", "Asociar usuarios", 1, "icon-btn", 3, "click"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], ["type", "button", "title", "Gestionar sedes", "aria-label", "Gestionar sedes", 1, "icon-btn", 3, "click"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"], ["cx", "12", "cy", "10", "r", "3"], ["type", "button", "title", "Editar organizacion", "aria-label", "Editar organizacion", 1, "icon-btn", 3, "click"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], ["type", "button", "title", "Eliminar organizacion", "aria-label", "Eliminar organizacion", 1, "icon-btn", "warn", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"], ["d", "M10 11v6"], ["d", "M14 11v6"], ["d", "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"], [1, "switch", 3, "title"], ["type", "checkbox", 3, "click", "checked"], [1, "slider", "round"], ["colspan", "6"], ["role", "presentation", 1, "modal-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "org-manager-modal-title", 1, "modal", "modal--wide", "org-manager-assign-modal", 3, "click"], [1, "modal__header"], ["aria-hidden", "true", 1, "modal__icon", "modal__icon--info"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "org-manager-modal-title", 1, "modal__title"], [1, "locations-modal__subtitle"], ["aria-live", "polite", 1, "org-users-modal__manager-summary"], [1, "org-users-modal__manager-summary-head"], [1, "org-users-modal__section-title"], [1, "status-pill"], [1, "loading-msg"], [1, "org-users-modal__manager-list"], [1, "lookup-empty"], [1, "org-form__field", "org-form__field--full"], ["type", "search", "placeholder", "Escribe nombre, usuario o email", "autocomplete", "off", 3, "ngModelChange", "ngModel"], ["role", "listbox", "aria-label", "Sugerencias para manager", 1, "lookup-list"], [1, "lookup-selected"], [1, "modal__actions"], ["type", "button", 1, "btn", 3, "click"], ["type", "button", 1, "btn", "primary", 3, "click", "disabled"], [1, "org-users-modal__manager-card"], ["type", "button", 1, "lookup-item"], ["type", "button", 1, "lookup-item", 3, "click"], [1, "lookup-item__main"], [1, "lookup-item__sub"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "org-users-modal-title", 1, "modal", "modal--xwide", "org-users-modal", 3, "click"], ["id", "org-users-modal-title", 1, "modal__title"], [1, "org-users-modal__associate"], ["class", "org-users-modal__invite", 4, "hasPermission"], [1, "org-users-modal__body"], [1, "table-wrap", "inner"], [1, "org-users-modal__field"], ["role", "listbox", "aria-label", "Sugerencias de usuarios", 1, "lookup-list"], [1, "org-users-modal__invite"], ["type", "button", "aria-controls", "org-users-invite-panel", 1, "org-users-modal__disclosure", 3, "click"], [1, "org-users-modal__disclosure-main"], [1, "org-users-modal__disclosure-subtitle"], ["aria-hidden", "true", 1, "org-users-modal__disclosure-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "6 9 12 15 18 9"], ["id", "org-users-invite-panel", 1, "org-users-modal__invite-panel"], [1, "form-grid"], ["for", "org-invite-username"], ["id", "org-invite-username", "type", "text", 3, "ngModelChange", "ngModel"], ["for", "org-invite-email"], ["id", "org-invite-email", "type", "email", 3, "ngModelChange", "ngModel"], ["for", "org-invite-name"], ["id", "org-invite-name", "type", "text", 3, "ngModelChange", "ngModel"], ["for", "org-invite-lastname"], ["id", "org-invite-lastname", "type", "text", 3, "ngModelChange", "ngModel"], [1, "form-grid__full"], ["for", "org-invite-password"], ["id", "org-invite-password", "type", "password", 3, "ngModelChange", "ngModel"], [1, "org-users-modal__invite-actions"], ["type", "button", "aria-label", "Asignar como manager", 1, "icon-btn", 3, "click", "title", "disabled"], ["type", "button", "title", "Desasociar usuario", "aria-label", "Desasociar usuario", 1, "icon-btn", "warn", 3, "click", "disabled"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "17 8 12 3 7 8"], ["x1", "12", "y1", "3", "x2", "12", "y2", "15"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "locations-modal-title", 1, "modal", "modal--wide", "locations-modal", 3, "click"], ["id", "locations-modal-title", 1, "modal__title"], ["class", "locations-modal__form", 4, "hasPermission"], [1, "locations-modal__body"], [1, "locations-modal__form"], [1, "locations-modal__field", "locations-modal__field--name"], ["type", "text", "placeholder", "Sede principal", "autocomplete", "off", 3, "ngModelChange", "ngModel"], [1, "locations-modal__field"], ["type", "text", "placeholder", "Bogota", "autocomplete", "off", 3, "ngModelChange", "ngModel"], [1, "locations-modal__field", "locations-modal__field--full"], ["type", "text", "placeholder", "Calle 123 # 4-56", "autocomplete", "off", 3, "ngModelChange", "ngModel"], [1, "locations-modal__form-actions"], ["type", "button", 1, "btn", 3, "disabled"], ["type", "button", 1, "btn", 3, "click", "disabled"], [3, "row-editing"], ["type", "button", "class", "icon-btn", "title", "Editar sede", "aria-label", "Editar sede", 3, "click", 4, "hasPermission"], ["type", "button", "class", "icon-btn warn", "title", "Eliminar sede", "aria-label", "Eliminar sede", 3, "click", 4, "hasPermission"], ["type", "button", "title", "Editar sede", "aria-label", "Editar sede", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Eliminar sede", "aria-label", "Eliminar sede", 1, "icon-btn", "warn", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "org-form-title", 1, "modal", "modal--xwide", 3, "click"], ["x", "2", "y", "7", "width", "20", "height", "14", "rx", "2"], ["d", "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"], ["id", "org-form-title", 1, "modal__title"], [1, "org-form"], ["type", "text", "placeholder", "Acme S.A.S", 3, "ngModelChange", "ngModel"], [1, "org-form__field"], ["type", "text", "placeholder", "900123456-7", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "contacto@acme.com", 3, "ngModelChange", "ngModel"], ["type", "tel", "placeholder", "+57 ...", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Calle 123 # 4-56", 3, "ngModelChange", "ngModel"], [1, "org-form__check"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "org-manager-panel"], [1, "org-manager-panel__header"], [1, "org-manager-panel__title"], [1, "org-manager-panel__hint"], ["role", "listbox", "aria-label", "Sugerencias de managers", 1, "lookup-list"], ["role", "alertdialog", "aria-modal", "true", "aria-labelledby", "org-confirm-title", "aria-describedby", "org-confirm-message", 1, "modal", 3, "click"], ["aria-hidden", "true", 1, "modal__icon"], ["d", "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86 a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], ["id", "org-confirm-title", 1, "modal__title"], ["id", "org-confirm-message", 1, "modal__message"], ["role", "alertdialog", "aria-modal", "true", "aria-labelledby", "org-notice-title", "aria-describedby", "org-notice-message", 1, "modal", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "org-notice-title", 1, "modal__title"], ["id", "org-notice-message", 1, "modal__message"], ["points", "20 6 9 17 4 12"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], ["x1", "12", "y1", "16", "x2", "12", "y2", "12"], ["x1", "12", "y1", "8", "x2", "12.01", "y2", "8"]], template: function OrganizationsPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Organizacion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, " Vista unificada de organizaciones, sedes y usuarios segun el rol logueado. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275template(8, OrganizationsPageComponent_button_8_Template, 2, 0, "button", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6)(10, "label", 7)(11, "span");
      \u0275\u0275text(12, "Filtrar por ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 8);
      \u0275\u0275listener("ngModelChange", function OrganizationsPageComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.idFilterSig.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "label", 9)(15, "span");
      \u0275\u0275text(16, "Buscar por nombre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "input", 10);
      \u0275\u0275listener("ngModelChange", function OrganizationsPageComponent_Template_input_ngModelChange_17_listener($event) {
        return ctx.nameFilterSig.set($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(18, OrganizationsPageComponent_Conditional_18_Template, 2, 1, "p", 11);
      \u0275\u0275elementStart(19, "div", 12)(20, "table")(21, "thead")(22, "tr")(23, "th");
      \u0275\u0275text(24, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th");
      \u0275\u0275text(26, "Nombre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th");
      \u0275\u0275text(28, "Tax ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th");
      \u0275\u0275text(30, "Creado por");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32, "Estado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "Acciones");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "tbody");
      \u0275\u0275repeaterCreate(36, OrganizationsPageComponent_For_37_Template, 19, 20, "tr", 13, _forTrack0, false, OrganizationsPageComponent_ForEmpty_38_Template, 5, 1, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(39, OrganizationsPageComponent_Conditional_39_Template, 34, 13, "div", 14)(40, OrganizationsPageComponent_Conditional_40_Template, 33, 10, "div", 14)(41, OrganizationsPageComponent_Conditional_41_Template, 22, 4, "div", 14)(42, OrganizationsPageComponent_Conditional_42_Template, 45, 10, "div", 14)(43, OrganizationsPageComponent_Conditional_43_Template, 17, 12, "div", 14)(44, OrganizationsPageComponent_Conditional_44_Template, 15, 11, "div", 14);
    }
    if (rf & 2) {
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_9_0;
      let tmp_10_0;
      \u0275\u0275advance(8);
      \u0275\u0275property("hasPermission", ctx.P.ORG_CREATE);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.idFilterSig());
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.nameFilterSig());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loadError() ? 18 : -1);
      \u0275\u0275advance(18);
      \u0275\u0275repeater(ctx.filteredOrgs());
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_5_0 = ctx.managerModalOrg()) ? 39 : -1, tmp_5_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_6_0 = ctx.usersModalOrg()) ? 40 : -1, tmp_6_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_7_0 = ctx.locationsModalOrg()) ? 41 : -1, tmp_7_0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modalCreate() || ctx.modalEdit() ? 42 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_9_0 = ctx.confirmReq()) ? 43 : -1, tmp_9_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_10_0 = ctx.notice()) ? 44 : -1, tmp_10_0);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MinValidator, NgModel, HasPermissionDirective], styles: ['\n\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.65rem;\n  font-weight: 700;\n  margin: 0;\n  letter-spacing: -0.02em;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-800) 0%,\n      var(--primary-500) 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.page-sub[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: var(--gray-600);\n  font-size: 0.9rem;\n  max-width: 720px;\n  line-height: 1.45;\n}\n.page-sub[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  background: var(--gray-100);\n  padding: 0.1rem 0.3rem;\n  border-radius: 4px;\n}\n.toolbar[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.filter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  font-size: 0.8rem;\n  color: var(--gray-600);\n}\n.filter--grow[_ngcontent-%COMP%] {\n  flex: 0 1 320px;\n  min-width: 200px;\n}\n.filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.6rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  background: white;\n}\n.filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n  min-width: 120px;\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.status-pill--active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5 0%,\n      #a7f3d0 100%);\n  color: #065f46;\n  border: 1px solid rgba(16, 185, 129, 0.45);\n}\n.status-pill--inactive[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  color: #ffffff;\n  border: 1px solid #b91c1c;\n  box-shadow: 0 1px 2px rgba(220, 38, 38, 0.25);\n  text-transform: uppercase;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border-radius: var(--radius-lg);\n  border: 1px solid rgba(59, 130, 246, 0.18);\n  overflow: auto;\n  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.06);\n}\n.table-wrap.inner[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8125rem;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.85rem;\n  text-align: left;\n  border-bottom: 1px solid rgba(226, 232, 240, 0.9);\n  vertical-align: middle;\n}\nth[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #eff6ff 0%,\n      #e0e7ff 100%);\n  font-weight: 700;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--primary-900);\n}\n.sortable-header[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: color 0.2s ease;\n}\n.sortable-header[_ngcontent-%COMP%]:hover {\n  color: var(--primary-600);\n}\n.sort-icon[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.sort-icon.active[_ngcontent-%COMP%] {\n  color: var(--primary-600);\n}\n.sort-icon.inactive[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  font-size: 0.85rem;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 246, 255, 0.65);\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  box-shadow: inset 4px 0 0 0 #dc2626;\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%]:hover {\n  background-color: #fecaca;\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #991b1b;\n  font-weight: 500;\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.18);\n}\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 38px;\n  height: 22px;\n  margin-right: 0.25rem;\n  flex-shrink: 0;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #10b981;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]::before {\n  transform: translateX(16px);\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .slider[_ngcontent-%COMP%] {\n  background-color: #fca5a5;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    + .slider[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  inset: 0;\n  background-color: #cbd5e1;\n  transition: 0.3s;\n}\n.slider[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: "";\n  height: 16px;\n  width: 16px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.3s;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.slider.round[_ngcontent-%COMP%] {\n  border-radius: 34px;\n}\n.slider.round[_ngcontent-%COMP%]::before {\n  border-radius: 50%;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  white-space: nowrap;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--gray-500);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.35rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  color: var(--primary-600);\n  background: rgba(37, 99, 235, 0.1);\n}\n.icon-btn.warn[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n  background: #fee2e2;\n}\n.icon-btn--success[_ngcontent-%COMP%] {\n  color: #047857;\n}\n.icon-btn--success[_ngcontent-%COMP%]:hover {\n  color: #065f46;\n  background: rgba(16, 185, 129, 0.12);\n}\n.icon-btn--muted[_ngcontent-%COMP%] {\n  color: var(--gray-300);\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n.icon-btn--muted[_ngcontent-%COMP%]:hover {\n  color: var(--gray-300);\n  background: transparent;\n}\n.btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--primary-600);\n  cursor: pointer;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  transition: all 0.15s ease;\n}\n.btn-link[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.08);\n  color: var(--primary-700);\n}\n.btn-link.danger[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.btn-link.danger[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.08);\n  color: #991b1b;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  border: 1px solid var(--gray-300);\n  background: white;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  height: fit-content;\n  transition: all 0.15s ease;\n}\n.btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--gray-50);\n  border-color: var(--gray-400);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-600),\n      var(--primary-700));\n  color: white;\n  border-color: var(--primary-600);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.25);\n}\n.btn.primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-700),\n      var(--primary-800));\n}\n.btn.danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626,\n      #b91c1c);\n  color: white;\n  border-color: #b91c1c;\n  box-shadow: 0 2px 8px rgba(220, 38, 38, 0.25);\n}\n.btn.danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #b91c1c,\n      #991b1b);\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n  padding: 1rem;\n  animation: _ngcontent-%COMP%_admin-backdrop-in 0.18s ease-out;\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 14px;\n  padding: 1.5rem;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);\n  animation: _ngcontent-%COMP%_admin-modal-in 0.22s ease-out;\n  max-height: calc(100vh - 2rem);\n  overflow-y: auto;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  max-width: 520px;\n}\n.modal--xwide[_ngcontent-%COMP%] {\n  max-width: 720px;\n}\n.modal[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin-bottom: 0.35rem;\n  color: var(--gray-700);\n}\n.modal[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type]), \n.modal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  margin-bottom: 1rem;\n  font-size: 0.875rem;\n  background: white;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.modal[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type]):focus, \n.modal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.modal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 1rem;\n}\n.form-grid[_ngcontent-%COMP%]   .form-grid__full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n@media (max-width: 640px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.modal__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.modal__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.modal__icon--info[_ngcontent-%COMP%] {\n  background: var(--primary-100);\n  color: var(--primary-700);\n}\n.modal__icon--success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.modal__icon--warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.modal__icon--error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.modal__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  letter-spacing: -0.01em;\n}\n.modal__message[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem;\n  font-size: 0.9rem;\n  color: var(--gray-700);\n  line-height: 1.55;\n}\n.modal__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--gray-600);\n  margin: 0 0 1rem;\n}\n.modal__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.err[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  font-size: 0.875rem;\n  margin: 0 0 1rem;\n}\n@keyframes _ngcontent-%COMP%_admin-backdrop-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_admin-modal-in {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.loading-msg[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--gray-600);\n  margin: 0;\n  padding: 0.75rem 0;\n  text-align: center;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.page-sub[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: var(--gray-600);\n  font-size: 0.9rem;\n}\n.creator-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--gray-900);\n}\n.locations-modal[_ngcontent-%COMP%] {\n  max-width: 760px;\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 2rem);\n  overflow: hidden;\n}\n.locations-modal[_ngcontent-%COMP%]    > .modal__header[_ngcontent-%COMP%], \n.locations-modal__form[_ngcontent-%COMP%], \n.locations-modal[_ngcontent-%COMP%]    > .modal__actions[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.locations-modal__subtitle[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0;\n  font-size: 0.8125rem;\n  color: var(--gray-600);\n  line-height: 1.4;\n}\n.locations-modal__form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.65rem 0.85rem;\n  padding: 0.95rem 1rem;\n  margin: 0.6rem 0 0.85rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #eff6ff 100%);\n  border: 1px solid rgba(59, 130, 246, 0.18);\n  border-radius: 10px;\n}\n.locations-modal__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  font-size: 0.75rem;\n  color: var(--gray-700);\n  font-weight: 600;\n  margin: 0;\n}\n.locations-modal__field--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.locations-modal__field--name[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.locations-modal__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.65rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 400;\n  color: var(--gray-900);\n  margin-bottom: 0;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.locations-modal__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.locations-modal__form-actions[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n  margin-top: 0.15rem;\n}\n.locations-modal__body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin-bottom: 1rem;\n  scrollbar-width: thin;\n  scrollbar-color: var(--gray-300) transparent;\n}\n.locations-modal__body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.locations-modal__body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.locations-modal__body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--gray-300);\n  border-radius: 999px;\n}\n.locations-modal__body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--gray-400);\n}\n.org-users-modal[_ngcontent-%COMP%] {\n  max-width: 920px;\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 2rem);\n  overflow: hidden;\n}\n.org-users-modal[_ngcontent-%COMP%]    > .modal__header[_ngcontent-%COMP%], \n.org-users-modal[_ngcontent-%COMP%]    > .modal__actions[_ngcontent-%COMP%], \n.org-users-modal__associate[_ngcontent-%COMP%], \n.org-users-modal__invite[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.org-users-modal__associate[_ngcontent-%COMP%], \n.org-users-modal__invite[_ngcontent-%COMP%] {\n  padding: 0.95rem 1rem;\n  border: 1px solid rgba(59, 130, 246, 0.14);\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #eff6ff 100%);\n  margin-bottom: 0.9rem;\n}\n.org-users-modal__associate[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 0.75rem;\n  align-items: end;\n}\n.org-users-modal__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  font-size: 0.8rem;\n  color: var(--gray-700);\n  font-weight: 600;\n  margin: 0;\n}\n.org-users-modal__section-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  color: var(--gray-800);\n}\n.org-users-modal__disclosure[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  background: transparent;\n  padding: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.85rem;\n  text-align: left;\n  cursor: pointer;\n  color: inherit;\n}\n.org-users-modal__disclosure-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  min-width: 0;\n}\n.org-users-modal__disclosure-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--gray-600);\n  font-weight: 500;\n  line-height: 1.4;\n}\n.org-users-modal__disclosure-icon[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  flex: 0 0 2rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--primary-700);\n  transition: transform 0.18s ease, background-color 0.18s ease;\n}\n.org-users-modal__disclosure-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.org-users-modal__disclosure-icon.is-open[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  background: rgba(59, 130, 246, 0.18);\n}\n.org-users-modal__invite-panel[_ngcontent-%COMP%] {\n  margin-top: 0.95rem;\n  padding-top: 0.95rem;\n  border-top: 1px solid rgba(59, 130, 246, 0.14);\n}\n.org-users-modal__invite-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 0.3rem;\n}\n.org-users-modal__manager-summary[_ngcontent-%COMP%] {\n  padding: 0.95rem 1rem;\n  border: 1px solid rgba(59, 130, 246, 0.14);\n  border-radius: 10px;\n  background: #fff;\n  margin-bottom: 0.9rem;\n}\n.org-users-modal__manager-summary-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.org-users-modal__manager-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 0.65rem;\n}\n.org-users-modal__manager-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  padding: 0.75rem 0.8rem;\n  border-radius: 10px;\n  background: rgba(59, 130, 246, 0.06);\n  border: 1px solid rgba(59, 130, 246, 0.12);\n}\n.org-users-modal__manager-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--gray-900);\n  font-size: 0.9rem;\n}\n.org-users-modal__manager-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--gray-600);\n  font-size: 0.8rem;\n}\n.org-users-modal__body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  margin-bottom: 1rem;\n}\n.org-manager-assign-modal[_ngcontent-%COMP%] {\n  max-width: 760px;\n}\n.lookup-list[_ngcontent-%COMP%] {\n  margin-top: 0.45rem;\n  border: 1px solid var(--gray-200);\n  border-radius: 10px;\n  background: #fff;\n  overflow: hidden;\n}\n.lookup-item[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  background: transparent;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.15rem;\n  padding: 0.7rem 0.8rem;\n  text-align: left;\n  cursor: pointer;\n  transition: background-color 0.15s ease;\n}\n.lookup-item[_ngcontent-%COMP%]:hover, \n.lookup-item[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(59, 130, 246, 0.08);\n  outline: none;\n}\n.lookup-item[_ngcontent-%COMP%]    + .lookup-item[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--gray-100);\n}\n.lookup-item__main[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--gray-900);\n}\n.lookup-item__sub[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--gray-600);\n}\n.lookup-empty[_ngcontent-%COMP%], \n.lookup-selected[_ngcontent-%COMP%] {\n  margin: 0.45rem 0 0;\n  font-size: 0.8rem;\n}\n.lookup-empty[_ngcontent-%COMP%] {\n  color: var(--gray-600);\n}\n.lookup-selected[_ngcontent-%COMP%] {\n  color: var(--primary-700);\n  font-weight: 600;\n}\ntbody[_ngcontent-%COMP%]   tr.row-editing[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.08) !important;\n  outline: 2px solid rgba(59, 130, 246, 0.35);\n  outline-offset: -2px;\n}\n@media (max-width: 600px) {\n  .locations-modal__form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .org-users-modal__associate[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.org-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.85rem;\n  margin-bottom: 1.25rem;\n}\n.org-form__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  font-size: 0.8rem;\n  color: var(--gray-700);\n  font-weight: 600;\n}\n.org-form__field--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.org-form__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.55rem 0.7rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 400;\n  color: var(--gray-900);\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.org-form__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.org-form__check[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  font-size: 0.875rem;\n  color: var(--gray-800);\n  cursor: pointer;\n  padding: 0.5rem 0;\n}\n.org-form__check[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  accent-color: var(--primary-600);\n  width: 1.05rem;\n  height: 1.05rem;\n}\n.org-manager-panel[_ngcontent-%COMP%] {\n  padding: 0.95rem 1rem;\n  border: 1px solid rgba(59, 130, 246, 0.16);\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #eff6ff 100%);\n  margin-bottom: 1.15rem;\n}\n.org-manager-panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 0.8rem;\n  margin-bottom: 0.9rem;\n}\n.org-manager-panel__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  color: var(--gray-900);\n}\n.org-manager-panel__hint[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  font-size: 0.82rem;\n  color: var(--gray-600);\n}\n.org-manager-panel__modes[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n@media (max-width: 540px) {\n  .org-form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .org-manager-panel__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=organizations-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationsPageComponent, [{
    type: Component,
    args: [{ selector: "app-organizations-page", standalone: true, imports: [CommonModule, FormsModule, HasPermissionDirective], template: `<div class="page">\r
  <div class="page-head">\r
    <div>\r
      <h1 class="page-title">Organizacion</h1>\r
      <p class="page-sub">\r
        Vista unificada de organizaciones, sedes y usuarios segun el rol logueado.\r
      </p>\r
    </div>\r
\r
    <div class="head-actions">\r
      <button\r
        *hasPermission="P.ORG_CREATE"\r
        type="button"\r
        class="btn primary"\r
        (click)="openCreate()"\r
      >\r
        Nuevo\r
      </button>\r
    </div>\r
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
        placeholder="Acme S.A.S"\r
        autocomplete="off"\r
      />\r
    </label>\r
  </div>\r
\r
  @if (loadError()) {\r
    <p class="err">{{ loadError() }}</p>\r
  }\r
\r
  <div class="table-wrap">\r
    <table>\r
      <thead>\r
        <tr>\r
          <th>ID</th>\r
          <th>Nombre</th>\r
          <th>Tax ID</th>\r
          <th>Creado por</th>\r
          <th>Estado</th>\r
          <th>Acciones</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        @for (o of filteredOrgs(); track o.id) {\r
          <tr [class.row-inactive]="!o.active">\r
            <td>{{ o.id }}</td>\r
            <td>{{ o.name }}</td>\r
            <td>{{ o.taxId }}</td>\r
            <td class="creator-cell">{{ creatorLabel(o) }}</td>\r
            <td>\r
              @if (o.active) {\r
                <span class="status-pill status-pill--active">Activa</span>\r
              } @else {\r
                <span class="status-pill status-pill--inactive">Inactiva</span>\r
              }\r
            </td>\r
            <td class="actions">\r
              <button\r
                *hasPermission="P.USERS_UPDATE_ROLES"\r
                type="button"\r
                class="icon-btn"\r
                (click)="openManagerModal(o)"\r
                title="Asignar o cambiar manager"\r
                aria-label="Asignar o cambiar manager"\r
              >\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"\r
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                  width="18" height="18" aria-hidden="true">\r
                  <path d="m12 3 2.5 5 5.5.8-4 3.9.9 5.5L12 15.8 7.1 18.2 8 12.7 4 8.8 9.5 8z" />\r
                </svg>\r
              </button>\r
              <button\r
                *hasPermission="[P.USERS_LIST, P.USERS_MY_ORGANIZATION, P.USERS_CREATE]"\r
                type="button"\r
                class="icon-btn"\r
                (click)="openUsers(o)"\r
                title="Asociar usuarios"\r
                aria-label="Asociar usuarios"\r
              >\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"\r
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                  width="18" height="18" aria-hidden="true">\r
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />\r
                  <circle cx="9" cy="7" r="4" />\r
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />\r
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />\r
                </svg>\r
              </button>\r
              <button\r
                *hasPermission="[P.LOCATION_BY_ORG, P.LOCATION_LIST]"\r
                type="button"\r
                class="icon-btn"\r
                (click)="openLocations(o)"\r
                title="Gestionar sedes"\r
                aria-label="Gestionar sedes"\r
              >\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"\r
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                  width="18" height="18" aria-hidden="true">\r
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />\r
                  <circle cx="12" cy="10" r="3" />\r
                </svg>\r
              </button>\r
\r
              \r
\r
              <button\r
                *hasPermission="P.ORG_UPDATE"\r
                type="button"\r
                class="icon-btn"\r
                (click)="openEdit(o)"\r
                title="Editar organizacion"\r
                aria-label="Editar organizacion"\r
              >\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"\r
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                  width="18" height="18" aria-hidden="true">\r
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />\r
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />\r
                </svg>\r
              </button>\r
\r
              <button\r
                *hasPermission="P.ORG_DELETE"\r
                type="button"\r
                class="icon-btn warn"\r
                (click)="confirmDelete(o)"\r
                title="Eliminar organizacion"\r
                aria-label="Eliminar organizacion"\r
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
              <label\r
                *hasPermission="o.active ? P.ORG_DEACTIVATE : P.ORG_ACTIVATE"\r
                class="switch"\r
                [title]="o.active ? 'Desactivar organizacion' : 'Activar organizacion'"\r
              >\r
                <input\r
                  type="checkbox"\r
                  [checked]="o.active"\r
                  (click)="toggleOrgActive($event, o)"\r
                />\r
                <span class="slider round"></span>\r
              </label>\r
            </td>\r
          </tr>\r
        } @empty {\r
          <tr>\r
            <td colspan="6">\r
              @if (loading()) {\r
                Cargando organizaciones...\r
              } @else if (orgs().length === 0) {\r
                Sin organizaciones registradas.\r
              } @else {\r
                Ninguna organizacion coincide con los filtros.\r
              }\r
            </td>\r
          </tr>\r
        }\r
      </tbody>\r
    </table>\r
  </div>\r
</div>\r
\r
<!-- =================================================================== -->\r
<!-- Manager modal                                                       -->\r
<!-- =================================================================== -->\r
@if (managerModalOrg(); as org) {\r
  <div class="modal-backdrop" (click)="closeManagerModal()" role="presentation">\r
    <div\r
      class="modal modal--wide org-manager-assign-modal"\r
      role="dialog"\r
      aria-modal="true"\r
      aria-labelledby="org-manager-modal-title"\r
      (click)="$event.stopPropagation()"\r
    >\r
      <div class="modal__header">\r
        <div class="modal__icon modal__icon--info" aria-hidden="true">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\r
            stroke-linecap="round" stroke-linejoin="round">\r
            <path d="m12 3 2.5 5 5.5.8-4 3.9.9 5.5L12 15.8 7.1 18.2 8 12.7 4 8.8 9.5 8z" />\r
          </svg>\r
        </div>\r
        <div>\r
          <h2 id="org-manager-modal-title" class="modal__title">\r
            Manager de "{{ org.name }}"\r
          </h2>\r
          <p class="locations-modal__subtitle">\r
            Asigna o reemplaza el manager unico de la organizacion directamente desde la tabla.\r
          </p>\r
        </div>\r
      </div>\r
\r
      <div class="org-users-modal__manager-summary" aria-live="polite">\r
        <div class="org-users-modal__manager-summary-head">\r
          <h3 class="org-users-modal__section-title">Manager actual</h3>\r
          <span class="status-pill"\r
            [class.status-pill--active]="!managerModalLoading() && activeManagerModalUsers().length === 1"\r
            [class.status-pill--inactive]="!managerModalLoading() && activeManagerModalUsers().length !== 1">\r
            {{\r
              managerModalLoading()\r
                ? 'Cargando'\r
                : (activeManagerModalUsers().length === 1 ? 'Valido' : (activeManagerModalUsers().length === 0 ? 'Vacante' : 'Conflicto'))\r
            }}\r
          </span>\r
        </div>\r
\r
        @if (managerModalLoading()) {\r
          <p class="loading-msg">Cargando manager actual...</p>\r
        } @else if (activeManagerModalUsers().length > 0) {\r
          <div class="org-users-modal__manager-list">\r
            @for (m of activeManagerModalUsers(); track m.id) {\r
              <div class="org-users-modal__manager-card">\r
                <strong>{{ m.name }} {{ m.lastname }}</strong>\r
                <span>{{ m.username }} \xB7 {{ m.email }}</span>\r
              </div>\r
            }\r
          </div>\r
        } @else {\r
          <p class="lookup-empty">La organizacion no tiene manager activo configurado.</p>\r
        }\r
      </div>\r
\r
      @if (managerModalError()) {\r
        <p class="err">{{ managerModalError() }}</p>\r
      }\r
\r
      <label class="org-form__field org-form__field--full">\r
        <span>Buscar candidato a manager</span>\r
        <input\r
          type="search"\r
          [ngModel]="managerModalSearchSig()"\r
          (ngModelChange)="setManagerModalSearch($event)"\r
          placeholder="Escribe nombre, usuario o email"\r
          autocomplete="off"\r
        />\r
        @if (managerModalSuggestions().length > 0) {\r
          <div class="lookup-list" role="listbox" aria-label="Sugerencias para manager">\r
            @for (u of managerModalSuggestions(); track u.id) {\r
              <button\r
                type="button"\r
                class="lookup-item"\r
                (click)="selectManagerModalCandidate(u)"\r
              >\r
                <span class="lookup-item__main">{{ u.name }} {{ u.lastname }}</span>\r
                <span class="lookup-item__sub">\r
                  {{ u.username }} \xB7 {{ u.email }}{{ u.organizationId != null ? ' \xB7 org #' + u.organizationId : '' }}\r
                </span>\r
              </button>\r
            }\r
          </div>\r
        } @else if (managerModalSearchSig().trim()) {\r
          <p class="lookup-empty">No hay candidatos disponibles para manager.</p>\r
        }\r
      </label>\r
\r
      @if (managerModalSelectedUserId() != null) {\r
        <p class="lookup-selected">Candidato seleccionado: {{ managerModalSearchSig() }}</p>\r
      }\r
\r
      <div class="modal__actions">\r
        <button type="button" class="btn" (click)="closeManagerModal()">Cancelar</button>\r
        <button\r
          type="button"\r
          class="btn primary"\r
          (click)="confirmManagerModalAssign()"\r
          [disabled]="managerModalSaving() || managerModalSelectedUserId() == null"\r
        >\r
          @if (managerModalSaving()) { Guardando... } @else { Guardar manager }\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<!-- =================================================================== -->\r
<!-- Users modal                                                         -->\r
<!-- =================================================================== -->\r
@if (usersModalOrg(); as org) {\r
  <div class="modal-backdrop" (click)="closeUsers()" role="presentation">\r
    <div\r
      class="modal modal--xwide org-users-modal"\r
      role="dialog"\r
      aria-modal="true"\r
      aria-labelledby="org-users-modal-title"\r
      (click)="$event.stopPropagation()"\r
    >\r
      <div class="modal__header">\r
        <div class="modal__icon modal__icon--info" aria-hidden="true">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\r
            stroke-linecap="round" stroke-linejoin="round">\r
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />\r
            <circle cx="9" cy="7" r="4" />\r
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />\r
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />\r
          </svg>\r
        </div>\r
        <div>\r
          <h2 id="org-users-modal-title" class="modal__title">\r
            Usuarios de "{{ org.name }}"\r
          </h2>\r
          <p class="locations-modal__subtitle">\r
            Invita usuarios y, si eres admin, asocia o desasocia usuarios existentes.\r
          </p>\r
        </div>\r
      </div>\r
\r
      <div class="org-users-modal__manager-summary" aria-live="polite">\r
        <div class="org-users-modal__manager-summary-head">\r
          <h3 class="org-users-modal__section-title">Manager activo de la organizacion</h3>\r
          <span class="status-pill"\r
            [class.status-pill--active]="!orgUsersLoading() && activeOrgManagers().length === 1"\r
            [class.status-pill--inactive]="!orgUsersLoading() && activeOrgManagers().length !== 1">\r
            {{\r
              orgUsersLoading()\r
                ? 'Cargando'\r
                : (activeOrgManagers().length === 1 ? 'Valido' : (activeOrgManagers().length === 0 ? 'Vacante' : 'Conflicto'))\r
            }}\r
          </span>\r
        </div>\r
\r
        @if (orgUsersLoading()) {\r
          <p class="loading-msg">Resolviendo manager activo...</p>\r
        } @else if (activeOrgManagers().length > 0) {\r
          <div class="org-users-modal__manager-list">\r
            @for (m of activeOrgManagers(); track m.id) {\r
              <div class="org-users-modal__manager-card">\r
                <strong>{{ m.name }} {{ m.lastname }}</strong>\r
                <span>{{ m.username }} \xB7 {{ m.email }}</span>\r
              </div>\r
            }\r
          </div>\r
        } @else {\r
          <p class="lookup-empty">\r
            Esta organizacion no tiene manager activo. Debes asignar uno para mantener la integridad operativa.\r
          </p>\r
        }\r
      </div>\r
\r
      @if (authService.isAdmin()) {\r
        <div class="org-users-modal__associate">\r
          <label class="org-users-modal__field">\r
            <span>Asociar usuario existente</span>\r
            <input\r
              type="search"\r
              [ngModel]="associateSearchSig()"\r
              (ngModelChange)="setAssociateSearch($event)"\r
              placeholder="Escribe nombre, usuario o email"\r
              autocomplete="off"\r
            />\r
            @if (associateSuggestions().length > 0) {\r
              <div class="lookup-list" role="listbox" aria-label="Sugerencias de usuarios">\r
                @for (u of associateSuggestions(); track u.id) {\r
                  <button\r
                    type="button"\r
                    class="lookup-item"\r
                    (click)="selectAssociateCandidate(u)"\r
                  >\r
                    <span class="lookup-item__main">{{ u.name }} {{ u.lastname }}</span>\r
                    <span class="lookup-item__sub">{{ u.username }} \xB7 {{ u.email }}</span>\r
                  </button>\r
                }\r
              </div>\r
            } @else if (associateSearchSig().trim()) {\r
              <p class="lookup-empty">No hay coincidencias para asociar.</p>\r
            }\r
            @if (associateUserId() != null) {\r
              <p class="lookup-selected">Usuario seleccionado: {{ associateSearchSig() }}</p>\r
            }\r
          </label>\r
          <button\r
            type="button"\r
            class="btn primary"\r
            (click)="associateExistingUser()"\r
            [disabled]="associateSaving() || associateUserId() == null"\r
          >\r
            @if (associateSaving()) { Asociando... } @else { Asociar }\r
          </button>\r
        </div>\r
      }\r
\r
      <div *hasPermission="P.USERS_CREATE" class="org-users-modal__invite">\r
        <button\r
          type="button"\r
          class="org-users-modal__disclosure"\r
          (click)="toggleInviteDisclosure()"\r
          [attr.aria-expanded]="inviteDisclosureOpen()"\r
          aria-controls="org-users-invite-panel"\r
        >\r
          <span class="org-users-modal__disclosure-main">\r
            <span class="org-users-modal__section-title">Invitar nuevo usuario</span>\r
            <span class="org-users-modal__disclosure-subtitle">\r
              Despliega el formulario solo cuando necesites registrar un invitado.\r
            </span>\r
          </span>\r
          <span class="org-users-modal__disclosure-icon" [class.is-open]="inviteDisclosureOpen()" aria-hidden="true">\r
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"\r
              stroke-linecap="round" stroke-linejoin="round">\r
              <polyline points="6 9 12 15 18 9" />\r
            </svg>\r
          </span>\r
        </button>\r
\r
        @if (inviteDisclosureOpen()) {\r
          <div id="org-users-invite-panel" class="org-users-modal__invite-panel">\r
            @if (inviteError()) {\r
              <p class="err">{{ inviteError() }}</p>\r
            }\r
            <div class="form-grid">\r
              <div>\r
                <label for="org-invite-username">Usuario</label>\r
                <input id="org-invite-username" type="text" [(ngModel)]="inviteForm.username" />\r
              </div>\r
              <div>\r
                <label for="org-invite-email">Email</label>\r
                <input id="org-invite-email" type="email" [(ngModel)]="inviteForm.email" />\r
              </div>\r
              <div>\r
                <label for="org-invite-name">Nombre</label>\r
                <input id="org-invite-name" type="text" [(ngModel)]="inviteForm.name" />\r
              </div>\r
              <div>\r
                <label for="org-invite-lastname">Apellido</label>\r
                <input id="org-invite-lastname" type="text" [(ngModel)]="inviteForm.lastname" />\r
              </div>\r
              <div class="form-grid__full">\r
                <label for="org-invite-password">Contrasena temporal</label>\r
                <input id="org-invite-password" type="password" [(ngModel)]="inviteForm.password" />\r
              </div>\r
            </div>\r
            <div class="org-users-modal__invite-actions">\r
              <button\r
                type="button"\r
                class="btn primary"\r
                (click)="saveInvitedUser()"\r
                [disabled]="inviteSaving()"\r
              >\r
                @if (inviteSaving()) { Invitando... } @else { Invitar usuario }\r
              </button>\r
            </div>\r
          </div>\r
        }\r
      </div>\r
\r
      <div class="org-users-modal__body">\r
        @if (orgUsersLoading()) {\r
          <p class="loading-msg">Cargando usuarios...</p>\r
        } @else if (orgUsersError()) {\r
          <p class="err">{{ orgUsersError() }}</p>\r
        } @else if (orgUsers().length === 0) {\r
          <p class="loading-msg">No hay usuarios asociados a esta organizacion.</p>\r
        } @else {\r
          <div class="table-wrap inner">\r
            <table>\r
              <thead>\r
                <tr>\r
                  <th>ID</th>\r
                  <th>Usuario</th>\r
                  <th>Nombre</th>\r
                  <th>Email</th>\r
                  <th>Estado</th>\r
                  @if (authService.isAdmin()) {\r
                    <th>Acciones</th>\r
                  }\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @for (u of orgUsers(); track u.id) {\r
                  <tr [class.row-inactive]="!u.enabled">\r
                    <td>{{ u.id }}</td>\r
                    <td>{{ u.username }}</td>\r
                    <td>{{ u.name }} {{ u.lastname }}</td>\r
                    <td>{{ u.email }}</td>\r
                    <td>\r
                      @if (u.enabled) {\r
                        <span class="status-pill status-pill--active">Activo</span>\r
                      } @else {\r
                        <span class="status-pill status-pill--inactive">Inactivo</span>\r
                      }\r
                    </td>\r
                    @if (authService.isAdmin()) {\r
                      <td class="actions">\r
                        <button\r
                          type="button"\r
                          class="icon-btn"\r
                          (click)="assignOrganizationManager(u)"\r
                          title="{{ isOrgManager(u) ? 'Dejar como manager oficial' : 'Asignar como manager' }}"\r
                          aria-label="Asignar como manager"\r
                          [disabled]="!u.enabled"\r
                        >\r
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"\r
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                            width="18" height="18" aria-hidden="true">\r
                            <path d="m12 3 2.5 5 5.5.8-4 3.9.9 5.5L12 15.8 7.1 18.2 8 12.7 4 8.8 9.5 8z" />\r
                          </svg>\r
                        </button>\r
                        <button\r
                          type="button"\r
                          class="icon-btn warn"\r
                          (click)="confirmDetachUser(u)"\r
                          title="Desasociar usuario"\r
                          aria-label="Desasociar usuario"\r
                          [disabled]="isOnlyActiveManager(u)"\r
                        >\r
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"\r
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                            width="18" height="18" aria-hidden="true">\r
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />\r
                            <polyline points="17 8 12 3 7 8" />\r
                            <line x1="12" y1="3" x2="12" y2="15" />\r
                          </svg>\r
                        </button>\r
                      </td>\r
                    }\r
                  </tr>\r
                }\r
              </tbody>\r
            </table>\r
          </div>\r
        }\r
      </div>\r
\r
      <div class="modal__actions">\r
        <button type="button" class="btn" (click)="closeUsers()">Cerrar</button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<!-- =================================================================== -->\r
<!-- Locations modal (sedes)                                             -->\r
<!-- =================================================================== -->\r
@if (locationsModalOrg(); as org) {\r
  <div class="modal-backdrop" (click)="closeLocations()" role="presentation">\r
    <div\r
      class="modal modal--wide locations-modal"\r
      role="dialog"\r
      aria-modal="true"\r
      aria-labelledby="locations-modal-title"\r
      (click)="$event.stopPropagation()"\r
    >\r
      <div class="modal__header">\r
        <div class="modal__icon modal__icon--info" aria-hidden="true">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\r
            stroke-linecap="round" stroke-linejoin="round">\r
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />\r
            <circle cx="12" cy="10" r="3" />\r
          </svg>\r
        </div>\r
        <div>\r
          <h2 id="locations-modal-title" class="modal__title">\r
            Sedes de "{{ org.name }}"\r
          </h2>\r
          <p class="locations-modal__subtitle">\r
            @if (editingLocationId() != null) {\r
              Editando sede #{{ editingLocationId() }}.\r
            } @else {\r
              Lista, crea y administra las sedes asociadas a esta organizacion.\r
            }\r
          </p>\r
        </div>\r
      </div>\r
\r
      <!-- Form crear/editar sede (gateado por permiso correspondiente) -->\r
      <div\r
        *hasPermission="editingLocationId() != null ? P.LOCATION_UPDATE : P.LOCATION_CREATE"\r
        class="locations-modal__form"\r
      >\r
        <label class="locations-modal__field locations-modal__field--name">\r
          <span>Nombre</span>\r
          <input\r
            type="text"\r
            [(ngModel)]="locationForm.name"\r
            placeholder="Sede principal"\r
            autocomplete="off"\r
          />\r
        </label>\r
        <label class="locations-modal__field">\r
          <span>Ciudad</span>\r
          <input\r
            type="text"\r
            [ngModel]="locationForm.city"\r
            (ngModelChange)="locationForm.city = $event"\r
            placeholder="Bogota"\r
            autocomplete="off"\r
          />\r
        </label>\r
        <label class="locations-modal__field locations-modal__field--full">\r
          <span>Direccion</span>\r
          <input\r
            type="text"\r
            [ngModel]="locationForm.address"\r
            (ngModelChange)="locationForm.address = $event"\r
            placeholder="Calle 123 # 4-56"\r
            autocomplete="off"\r
          />\r
        </label>\r
        <div class="locations-modal__form-actions">\r
          @if (editingLocationId() != null) {\r
            <button\r
              type="button"\r
              class="btn"\r
              (click)="cancelEditLocation()"\r
              [disabled]="locationSaving()"\r
            >\r
              Cancelar\r
            </button>\r
          }\r
          <button\r
            type="button"\r
            class="btn primary"\r
            (click)="submitLocation()"\r
            [disabled]="locationSaving() || !locationForm.name.trim()"\r
          >\r
            @if (locationSaving()) {\r
              Guardando...\r
            } @else if (editingLocationId() != null) {\r
              Actualizar sede\r
            } @else {\r
              Crear sede\r
            }\r
          </button>\r
        </div>\r
      </div>\r
\r
      <div class="locations-modal__body">\r
        @if (locationsLoading()) {\r
          <p class="loading-msg">Cargando sedes...</p>\r
        } @else if (locationsError()) {\r
          <p class="err">{{ locationsError() }}</p>\r
        } @else if (locations().length === 0) {\r
          <p class="loading-msg">Aun no hay sedes registradas para esta organizacion.</p>\r
        } @else {\r
          <div class="table-wrap inner">\r
            <table>\r
              <thead>\r
                <tr>\r
                  <th>ID</th>\r
                  <th>Nombre</th>\r
                  <th>Ciudad</th>\r
                  <th>Direccion</th>\r
                  @if (\r
                    authService.hasPermission(P.LOCATION_UPDATE) ||\r
                    authService.hasPermission(P.LOCATION_DELETE)\r
                  ) {\r
                    <th>Acciones</th>\r
                  }\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @for (loc of locations(); track loc.id) {\r
                  <tr [class.row-editing]="editingLocationId() === loc.id">\r
                    <td>{{ loc.id }}</td>\r
                    <td>{{ loc.name }}</td>\r
                    <td>{{ loc.city || '\u2014' }}</td>\r
                    <td>{{ loc.address || '\u2014' }}</td>\r
                    @if (\r
                      authService.hasPermission(P.LOCATION_UPDATE) ||\r
                      authService.hasPermission(P.LOCATION_DELETE)\r
                    ) {\r
                      <td class="actions">\r
                        <button\r
                          *hasPermission="P.LOCATION_UPDATE"\r
                          type="button"\r
                          class="icon-btn"\r
                          (click)="startEditLocation(loc)"\r
                          title="Editar sede"\r
                          aria-label="Editar sede"\r
                        >\r
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"\r
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                            width="18" height="18" aria-hidden="true">\r
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />\r
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />\r
                          </svg>\r
                        </button>\r
                        <button\r
                          *hasPermission="P.LOCATION_DELETE"\r
                          type="button"\r
                          class="icon-btn warn"\r
                          (click)="confirmDeleteLocation(loc)"\r
                          title="Eliminar sede"\r
                          aria-label="Eliminar sede"\r
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
                    }\r
                  </tr>\r
                }\r
              </tbody>\r
            </table>\r
          </div>\r
        }\r
      </div>\r
\r
      <div class="modal__actions">\r
        <button type="button" class="btn" (click)="closeLocations()">Cerrar</button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<!-- =================================================================== -->\r
<!-- Create / Edit modal                                                 -->\r
<!-- =================================================================== -->\r
@if (modalCreate() || modalEdit()) {\r
  <div class="modal-backdrop" (click)="closeModals()" role="presentation">\r
    <div\r
      class="modal modal--xwide"\r
      role="dialog"\r
      aria-modal="true"\r
      aria-labelledby="org-form-title"\r
      (click)="$event.stopPropagation()"\r
    >\r
      <div class="modal__header">\r
        <div class="modal__icon modal__icon--info" aria-hidden="true">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\r
            stroke-linecap="round" stroke-linejoin="round">\r
            <rect x="2" y="7" width="20" height="14" rx="2" />\r
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />\r
          </svg>\r
        </div>\r
        <h2 id="org-form-title" class="modal__title">\r
          @if (modalCreate()) { Nueva organizacion } @else { Editar #{{ editingId() }} }\r
        </h2>\r
      </div>\r
\r
      <div class="org-form">\r
        <label class="org-form__field org-form__field--full">\r
          <span>Nombre</span>\r
          <input type="text" [(ngModel)]="form.name" placeholder="Acme S.A.S" />\r
        </label>\r
\r
        <label class="org-form__field">\r
          <span>Tax ID</span>\r
          <input type="text" [(ngModel)]="form.taxId" placeholder="900123456-7" />\r
        </label>\r
\r
        <label class="org-form__field">\r
          <span>Plan limit</span>\r
          <input type="number" min="1" [(ngModel)]="form.planLimit" />\r
        </label>\r
\r
        <label class="org-form__field">\r
          <span>Email</span>\r
          <input type="email" [(ngModel)]="form.email" placeholder="contacto@acme.com" />\r
        </label>\r
\r
        <label class="org-form__field">\r
          <span>Telefono</span>\r
          <input type="tel" [(ngModel)]="form.phone" placeholder="+57 ..." />\r
        </label>\r
\r
        <label class="org-form__field org-form__field--full">\r
          <span>Direccion</span>\r
          <input type="text" [(ngModel)]="form.address" placeholder="Calle 123 # 4-56" />\r
        </label>\r
\r
        <label class="org-form__check">\r
          <input type="checkbox" [(ngModel)]="form.active" />\r
          <span>Organizacion activa</span>\r
        </label>\r
      </div>\r
\r
      @if (modalCreate()) {\r
        <div class="org-manager-panel">\r
          <div class="org-manager-panel__header">\r
            <div>\r
              <h3 class="org-manager-panel__title">Asignar manager</h3>\r
              <p class="org-manager-panel__hint">\r
                La creacion de la organizacion requiere seleccionar desde el inicio un usuario activo que no sea manager actual de otra organizacion.\r
              </p>\r
            </div>\r
          </div>\r
\r
          @if (createOrgError()) {\r
            <p class="err">{{ createOrgError() }}</p>\r
          }\r
\r
          <label class="org-form__field org-form__field--full">\r
            <span>Buscar manager existente</span>\r
            <input\r
              type="search"\r
              [ngModel]="managerSearchSig()"\r
              (ngModelChange)="setManagerSearch($event)"\r
              placeholder="Escribe nombre, usuario o email"\r
              autocomplete="off"\r
            />\r
            @if (managerSuggestions().length > 0) {\r
              <div class="lookup-list" role="listbox" aria-label="Sugerencias de managers">\r
                @for (u of managerSuggestions(); track u.id) {\r
                  <button\r
                    type="button"\r
                    class="lookup-item"\r
                    (click)="selectManagerCandidate(u)"\r
                  >\r
                    <span class="lookup-item__main">{{ u.name }} {{ u.lastname }}</span>\r
                    <span class="lookup-item__sub">\r
                      {{ u.username }} \xB7 {{ u.email }}{{ u.organizationId != null ? ' \xB7 org #' + u.organizationId : '' }}\r
                    </span>\r
                  </button>\r
                }\r
              </div>\r
            } @else if (managerSearchSig().trim()) {\r
              <p class="lookup-empty">No hay coincidencias para manager.</p>\r
            }\r
          </label>\r
          @if (selectedManagerUserId() != null) {\r
            <p class="lookup-selected">Manager seleccionado: {{ managerSearchSig() }}</p>\r
          }\r
        </div>\r
      }\r
\r
      <div class="modal__actions">\r
        <button type="button" class="btn" (click)="closeModals()">Cancelar</button>\r
        <button\r
          type="button"\r
          class="btn primary"\r
          (click)="modalCreate() ? submitCreate() : submitEdit()"\r
          [disabled]="loading() || (modalCreate() ? !canSubmitCreate() : !form.name.trim())"\r
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
      aria-labelledby="org-confirm-title"\r
      aria-describedby="org-confirm-message"\r
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
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86 a2 2 0 0 0-3.42 0z" />\r
            <line x1="12" y1="9" x2="12" y2="13" />\r
            <line x1="12" y1="17" x2="12.01" y2="17" />\r
          </svg>\r
        </div>\r
        <h2 id="org-confirm-title" class="modal__title">{{ cfg.title }}</h2>\r
      </div>\r
\r
      <p id="org-confirm-message" class="modal__message">{{ cfg.message }}</p>\r
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
<!-- Notice modal                                                        -->\r
<!-- =================================================================== -->\r
@if (notice(); as n) {\r
  <div class="modal-backdrop" (click)="closeNotice()" role="presentation">\r
    <div\r
      class="modal"\r
      role="alertdialog"\r
      aria-modal="true"\r
      aria-labelledby="org-notice-title"\r
      aria-describedby="org-notice-message"\r
      (click)="$event.stopPropagation()"\r
    >\r
      <div class="modal__header">\r
        <div\r
          class="modal__icon"\r
          [class.modal__icon--success]="n.kind === 'success'"\r
          [class.modal__icon--error]="n.kind === 'error'"\r
          [class.modal__icon--warning]="n.kind === 'warning'"\r
          [class.modal__icon--info]="n.kind === 'info'"\r
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
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86 a2 2 0 0 0-3.42 0z" />\r
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
        <h2 id="org-notice-title" class="modal__title">{{ n.title }}</h2>\r
      </div>\r
\r
      <p id="org-notice-message" class="modal__message">{{ n.message }}</p>\r
\r
      <div class="modal__actions">\r
        <button type="button" class="btn primary" (click)="closeNotice()">Entendido</button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
`, styles: ['/* src/app/features/dashboard/pages/organizations-page/organizations-page.component.scss */\n.page-head {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.page-title {\n  font-size: 1.65rem;\n  font-weight: 700;\n  margin: 0;\n  letter-spacing: -0.02em;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-800) 0%,\n      var(--primary-500) 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.page-sub {\n  margin: 0.35rem 0 0;\n  color: var(--gray-600);\n  font-size: 0.9rem;\n  max-width: 720px;\n  line-height: 1.45;\n}\n.page-sub code {\n  font-size: 0.75rem;\n  background: var(--gray-100);\n  padding: 0.1rem 0.3rem;\n  border-radius: 4px;\n}\n.toolbar {\n  margin-bottom: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.filter {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  font-size: 0.8rem;\n  color: var(--gray-600);\n}\n.filter--grow {\n  flex: 0 1 320px;\n  min-width: 200px;\n}\n.filter input,\n.filter select {\n  padding: 0.45rem 0.6rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  background: white;\n}\n.filter select {\n  cursor: pointer;\n  min-width: 120px;\n}\n.status-pill {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.status-pill--active {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5 0%,\n      #a7f3d0 100%);\n  color: #065f46;\n  border: 1px solid rgba(16, 185, 129, 0.45);\n}\n.status-pill--inactive {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  color: #ffffff;\n  border: 1px solid #b91c1c;\n  box-shadow: 0 1px 2px rgba(220, 38, 38, 0.25);\n  text-transform: uppercase;\n}\n.table-wrap {\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border-radius: var(--radius-lg);\n  border: 1px solid rgba(59, 130, 246, 0.18);\n  overflow: auto;\n  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.06);\n}\n.table-wrap.inner {\n  margin-bottom: 0;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8125rem;\n}\nth,\ntd {\n  padding: 0.65rem 0.85rem;\n  text-align: left;\n  border-bottom: 1px solid rgba(226, 232, 240, 0.9);\n  vertical-align: middle;\n}\nth {\n  background:\n    linear-gradient(\n      180deg,\n      #eff6ff 0%,\n      #e0e7ff 100%);\n  font-weight: 700;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--primary-900);\n}\n.sortable-header {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: color 0.2s ease;\n}\n.sortable-header:hover {\n  color: var(--primary-600);\n}\n.sort-icon {\n  font-size: 0.7rem;\n}\n.sort-icon.active {\n  color: var(--primary-600);\n}\n.sort-icon.inactive {\n  opacity: 0.3;\n  font-size: 0.85rem;\n}\ntbody tr:hover {\n  background: rgba(239, 246, 255, 0.65);\n}\ntbody tr.row-inactive {\n  background-color: #fee2e2;\n  box-shadow: inset 4px 0 0 0 #dc2626;\n}\ntbody tr.row-inactive:hover {\n  background-color: #fecaca;\n}\ntbody tr.row-inactive td {\n  color: #991b1b;\n  font-weight: 500;\n}\ntbody tr.row-inactive .icon-btn {\n  color: #b91c1c;\n}\ntbody tr.row-inactive .icon-btn:hover {\n  background: rgba(220, 38, 38, 0.18);\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 38px;\n  height: 22px;\n  margin-right: 0.25rem;\n  flex-shrink: 0;\n}\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.switch input:checked + .slider {\n  background-color: #10b981;\n}\n.switch input:checked + .slider::before {\n  transform: translateX(16px);\n}\n.switch input:not(:checked) + .slider {\n  background-color: #fca5a5;\n}\n.switch input:disabled + .slider {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  inset: 0;\n  background-color: #cbd5e1;\n  transition: 0.3s;\n}\n.slider::before {\n  position: absolute;\n  content: "";\n  height: 16px;\n  width: 16px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.3s;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.slider.round {\n  border-radius: 34px;\n}\n.slider.round::before {\n  border-radius: 50%;\n}\n.actions {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  white-space: nowrap;\n}\n.icon-btn {\n  background: none;\n  border: none;\n  color: var(--gray-500);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.35rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.icon-btn:hover {\n  color: var(--primary-600);\n  background: rgba(37, 99, 235, 0.1);\n}\n.icon-btn.warn:hover {\n  color: #dc2626;\n  background: #fee2e2;\n}\n.icon-btn--success {\n  color: #047857;\n}\n.icon-btn--success:hover {\n  color: #065f46;\n  background: rgba(16, 185, 129, 0.12);\n}\n.icon-btn--muted {\n  color: var(--gray-300);\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n.icon-btn--muted:hover {\n  color: var(--gray-300);\n  background: transparent;\n}\n.btn-link {\n  background: none;\n  border: none;\n  color: var(--primary-600);\n  cursor: pointer;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  transition: all 0.15s ease;\n}\n.btn-link:hover {\n  background: rgba(37, 99, 235, 0.08);\n  color: var(--primary-700);\n}\n.btn-link.danger {\n  color: #b91c1c;\n}\n.btn-link.danger:hover {\n  background: rgba(220, 38, 38, 0.08);\n  color: #991b1b;\n}\n.btn {\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  border: 1px solid var(--gray-300);\n  background: white;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  height: fit-content;\n  transition: all 0.15s ease;\n}\n.btn:hover:not(:disabled) {\n  background: var(--gray-50);\n  border-color: var(--gray-400);\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.primary {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-600),\n      var(--primary-700));\n  color: white;\n  border-color: var(--primary-600);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.25);\n}\n.btn.primary:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-700),\n      var(--primary-800));\n}\n.btn.danger {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626,\n      #b91c1c);\n  color: white;\n  border-color: #b91c1c;\n  box-shadow: 0 2px 8px rgba(220, 38, 38, 0.25);\n}\n.btn.danger:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #b91c1c,\n      #991b1b);\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n  padding: 1rem;\n  animation: admin-backdrop-in 0.18s ease-out;\n}\n.modal {\n  background: white;\n  border-radius: 14px;\n  padding: 1.5rem;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);\n  animation: admin-modal-in 0.22s ease-out;\n  max-height: calc(100vh - 2rem);\n  overflow-y: auto;\n}\n.modal--wide {\n  max-width: 520px;\n}\n.modal--xwide {\n  max-width: 720px;\n}\n.modal label {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin-bottom: 0.35rem;\n  color: var(--gray-700);\n}\n.modal input[type=text],\n.modal input[type=email],\n.modal input[type=password],\n.modal input[type=search],\n.modal input[type=number],\n.modal input:not([type]),\n.modal select {\n  width: 100%;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  margin-bottom: 1rem;\n  font-size: 0.875rem;\n  background: white;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.modal input[type=text]:focus,\n.modal input[type=email]:focus,\n.modal input[type=password]:focus,\n.modal input[type=search]:focus,\n.modal input[type=number]:focus,\n.modal input:not([type]):focus,\n.modal select:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.modal select {\n  cursor: pointer;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 1rem;\n}\n.form-grid .form-grid__full {\n  grid-column: 1/-1;\n}\n@media (max-width: 640px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.modal__header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.modal__icon {\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal__icon svg {\n  width: 22px;\n  height: 22px;\n}\n.modal__icon--info {\n  background: var(--primary-100);\n  color: var(--primary-700);\n}\n.modal__icon--success {\n  background: #d1fae5;\n  color: #065f46;\n}\n.modal__icon--warning {\n  background: #fef3c7;\n  color: #92400e;\n}\n.modal__icon--error {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.modal__title {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  letter-spacing: -0.01em;\n}\n.modal__message {\n  margin: 0 0 1.25rem;\n  font-size: 0.9rem;\n  color: var(--gray-700);\n  line-height: 1.55;\n}\n.modal__hint {\n  font-size: 0.8125rem;\n  color: var(--gray-600);\n  margin: 0 0 1rem;\n}\n.modal__actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.err {\n  color: #b91c1c;\n  font-size: 0.875rem;\n  margin: 0 0 1rem;\n}\n@keyframes admin-backdrop-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes admin-modal-in {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.loading-msg {\n  font-size: 0.875rem;\n  color: var(--gray-600);\n  margin: 0;\n  padding: 0.75rem 0;\n  text-align: center;\n}\n.head-actions {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.page-sub {\n  margin: 0.35rem 0 0;\n  color: var(--gray-600);\n  font-size: 0.9rem;\n}\n.creator-cell {\n  font-weight: 600;\n  color: var(--gray-900);\n}\n.locations-modal {\n  max-width: 760px;\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 2rem);\n  overflow: hidden;\n}\n.locations-modal > .modal__header,\n.locations-modal__form,\n.locations-modal > .modal__actions {\n  flex-shrink: 0;\n}\n.locations-modal__subtitle {\n  margin: 0.15rem 0 0;\n  font-size: 0.8125rem;\n  color: var(--gray-600);\n  line-height: 1.4;\n}\n.locations-modal__form {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.65rem 0.85rem;\n  padding: 0.95rem 1rem;\n  margin: 0.6rem 0 0.85rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #eff6ff 100%);\n  border: 1px solid rgba(59, 130, 246, 0.18);\n  border-radius: 10px;\n}\n.locations-modal__field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  font-size: 0.75rem;\n  color: var(--gray-700);\n  font-weight: 600;\n  margin: 0;\n}\n.locations-modal__field--full {\n  grid-column: 1/-1;\n}\n.locations-modal__field--name {\n  grid-column: 1/-1;\n}\n.locations-modal__field input {\n  padding: 0.5rem 0.65rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 400;\n  color: var(--gray-900);\n  margin-bottom: 0;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.locations-modal__field input:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.locations-modal__form-actions {\n  grid-column: 1/-1;\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n  margin-top: 0.15rem;\n}\n.locations-modal__body {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin-bottom: 1rem;\n  scrollbar-width: thin;\n  scrollbar-color: var(--gray-300) transparent;\n}\n.locations-modal__body::-webkit-scrollbar {\n  width: 8px;\n}\n.locations-modal__body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.locations-modal__body::-webkit-scrollbar-thumb {\n  background: var(--gray-300);\n  border-radius: 999px;\n}\n.locations-modal__body::-webkit-scrollbar-thumb:hover {\n  background: var(--gray-400);\n}\n.org-users-modal {\n  max-width: 920px;\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 2rem);\n  overflow: hidden;\n}\n.org-users-modal > .modal__header,\n.org-users-modal > .modal__actions,\n.org-users-modal__associate,\n.org-users-modal__invite {\n  flex-shrink: 0;\n}\n.org-users-modal__associate,\n.org-users-modal__invite {\n  padding: 0.95rem 1rem;\n  border: 1px solid rgba(59, 130, 246, 0.14);\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #eff6ff 100%);\n  margin-bottom: 0.9rem;\n}\n.org-users-modal__associate {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 0.75rem;\n  align-items: end;\n}\n.org-users-modal__field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  font-size: 0.8rem;\n  color: var(--gray-700);\n  font-weight: 600;\n  margin: 0;\n}\n.org-users-modal__section-title {\n  margin: 0;\n  font-size: 0.95rem;\n  color: var(--gray-800);\n}\n.org-users-modal__disclosure {\n  width: 100%;\n  border: 0;\n  background: transparent;\n  padding: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.85rem;\n  text-align: left;\n  cursor: pointer;\n  color: inherit;\n}\n.org-users-modal__disclosure-main {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  min-width: 0;\n}\n.org-users-modal__disclosure-subtitle {\n  font-size: 0.8rem;\n  color: var(--gray-600);\n  font-weight: 500;\n  line-height: 1.4;\n}\n.org-users-modal__disclosure-icon {\n  width: 2rem;\n  height: 2rem;\n  flex: 0 0 2rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--primary-700);\n  transition: transform 0.18s ease, background-color 0.18s ease;\n}\n.org-users-modal__disclosure-icon svg {\n  width: 1rem;\n  height: 1rem;\n}\n.org-users-modal__disclosure-icon.is-open {\n  transform: rotate(180deg);\n  background: rgba(59, 130, 246, 0.18);\n}\n.org-users-modal__invite-panel {\n  margin-top: 0.95rem;\n  padding-top: 0.95rem;\n  border-top: 1px solid rgba(59, 130, 246, 0.14);\n}\n.org-users-modal__invite-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 0.3rem;\n}\n.org-users-modal__manager-summary {\n  padding: 0.95rem 1rem;\n  border: 1px solid rgba(59, 130, 246, 0.14);\n  border-radius: 10px;\n  background: #fff;\n  margin-bottom: 0.9rem;\n}\n.org-users-modal__manager-summary-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.org-users-modal__manager-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 0.65rem;\n}\n.org-users-modal__manager-card {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  padding: 0.75rem 0.8rem;\n  border-radius: 10px;\n  background: rgba(59, 130, 246, 0.06);\n  border: 1px solid rgba(59, 130, 246, 0.12);\n}\n.org-users-modal__manager-card strong {\n  color: var(--gray-900);\n  font-size: 0.9rem;\n}\n.org-users-modal__manager-card span {\n  color: var(--gray-600);\n  font-size: 0.8rem;\n}\n.org-users-modal__body {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  margin-bottom: 1rem;\n}\n.org-manager-assign-modal {\n  max-width: 760px;\n}\n.lookup-list {\n  margin-top: 0.45rem;\n  border: 1px solid var(--gray-200);\n  border-radius: 10px;\n  background: #fff;\n  overflow: hidden;\n}\n.lookup-item {\n  width: 100%;\n  border: 0;\n  background: transparent;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.15rem;\n  padding: 0.7rem 0.8rem;\n  text-align: left;\n  cursor: pointer;\n  transition: background-color 0.15s ease;\n}\n.lookup-item:hover,\n.lookup-item:focus-visible {\n  background: rgba(59, 130, 246, 0.08);\n  outline: none;\n}\n.lookup-item + .lookup-item {\n  border-top: 1px solid var(--gray-100);\n}\n.lookup-item__main {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--gray-900);\n}\n.lookup-item__sub {\n  font-size: 0.78rem;\n  color: var(--gray-600);\n}\n.lookup-empty,\n.lookup-selected {\n  margin: 0.45rem 0 0;\n  font-size: 0.8rem;\n}\n.lookup-empty {\n  color: var(--gray-600);\n}\n.lookup-selected {\n  color: var(--primary-700);\n  font-weight: 600;\n}\ntbody tr.row-editing {\n  background: rgba(59, 130, 246, 0.08) !important;\n  outline: 2px solid rgba(59, 130, 246, 0.35);\n  outline-offset: -2px;\n}\n@media (max-width: 600px) {\n  .locations-modal__form {\n    grid-template-columns: 1fr;\n  }\n  .org-users-modal__associate {\n    grid-template-columns: 1fr;\n  }\n}\n.org-form {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.85rem;\n  margin-bottom: 1.25rem;\n}\n.org-form__field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  font-size: 0.8rem;\n  color: var(--gray-700);\n  font-weight: 600;\n}\n.org-form__field--full {\n  grid-column: 1/-1;\n}\n.org-form__field input {\n  padding: 0.55rem 0.7rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 400;\n  color: var(--gray-900);\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.org-form__field input:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.org-form__check {\n  grid-column: 1/-1;\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  font-size: 0.875rem;\n  color: var(--gray-800);\n  cursor: pointer;\n  padding: 0.5rem 0;\n}\n.org-form__check input[type=checkbox] {\n  accent-color: var(--primary-600);\n  width: 1.05rem;\n  height: 1.05rem;\n}\n.org-manager-panel {\n  padding: 0.95rem 1rem;\n  border: 1px solid rgba(59, 130, 246, 0.16);\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #eff6ff 100%);\n  margin-bottom: 1.15rem;\n}\n.org-manager-panel__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 0.8rem;\n  margin-bottom: 0.9rem;\n}\n.org-manager-panel__title {\n  margin: 0;\n  font-size: 1rem;\n  color: var(--gray-900);\n}\n.org-manager-panel__hint {\n  margin: 0.25rem 0 0;\n  font-size: 0.82rem;\n  color: var(--gray-600);\n}\n.org-manager-panel__modes {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n@media (max-width: 540px) {\n  .org-form {\n    grid-template-columns: 1fr;\n  }\n  .org-manager-panel__header {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=organizations-page.component.css.map */\n'] }]
  }], () => [{ type: AdminApiService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrganizationsPageComponent, { className: "OrganizationsPageComponent", filePath: "src/app/features/dashboard/pages/organizations-page/organizations-page.component.ts", lineNumber: 73 });
})();
export {
  OrganizationsPageComponent
};
//# sourceMappingURL=chunk-D6Z7G4BU.js.map
