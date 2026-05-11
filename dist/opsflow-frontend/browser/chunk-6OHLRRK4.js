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
  DecimalPipe,
  __spreadValues,
  computed,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
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

// src/app/features/dashboard/pages/documents-page/documents-page.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DocumentsPageComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Vista global con todas las acciones administrativas habilitadas. ");
  }
}
function DocumentsPageComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Puedes crear y eliminar documentos de tu organizacion. ");
  }
}
function DocumentsPageComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Puedes ver y crear documentos. ");
  }
}
function DocumentsPageComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Vista de solo lectura. ");
  }
}
function DocumentsPageComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function DocumentsPageComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275text(1, " Nuevo ");
    \u0275\u0275elementEnd();
  }
}
function DocumentsPageComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275property("value", s_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r3);
  }
}
function DocumentsPageComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.loadError());
  }
}
function DocumentsPageComponent_For_78_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function DocumentsPageComponent_For_78_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const d_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openForceState(d_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 24);
    \u0275\u0275element(2, "path", 34)(3, "path", 35);
    \u0275\u0275elementEnd()();
  }
}
function DocumentsPageComponent_For_78_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function DocumentsPageComponent_For_78_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const d_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete(d_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 24);
    \u0275\u0275element(2, "polyline", 37)(3, "path", 38)(4, "path", 39)(5, "path", 40)(6, "path", 41);
    \u0275\u0275elementEnd()();
  }
}
function DocumentsPageComponent_For_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 22)(19, "button", 23);
    \u0275\u0275listener("click", function DocumentsPageComponent_For_78_Template_button_click_19_listener() {
      const d_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewDocument(d_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 24);
    \u0275\u0275element(21, "path", 25)(22, "circle", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "button", 27);
    \u0275\u0275listener("click", function DocumentsPageComponent_For_78_Template_button_click_23_listener() {
      const d_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openVersionsModal(d_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 24);
    \u0275\u0275element(25, "path", 28)(26, "polyline", 29)(27, "polyline", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, DocumentsPageComponent_For_78_button_28_Template, 4, 0, "button", 31)(29, DocumentsPageComponent_For_78_button_29_Template, 7, 0, "button", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("doc-status--active", d_r5.status === "ACTIVE")("doc-status--expiring", d_r5.status === "EXPIRING")("doc-status--expired", d_r5.status === "EXPIRED")("doc-status--archived", d_r5.status === "ARCHIVED");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r5.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.typeLabel(d_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.orgLabel(d_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.ownerLabel(d_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r5.expirationDate || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.versionsSummary(d_r5));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", d_r5.versions.length === 0 ? "Sin archivos" : "Ver/descargar archivo")("disabled", d_r5.versions.length === 0);
    \u0275\u0275advance(9);
    \u0275\u0275property("hasPermission", ctx_r1.P.DOC_FORCE_STATE);
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", ctx_r1.P.DOC_DELETE);
  }
}
function DocumentsPageComponent_ForEmpty_79_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Cargando documentos... ");
  }
}
function DocumentsPageComponent_ForEmpty_79_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, ' Sin documentos. Crea uno con "Nuevo documento" si tienes permiso. ');
  }
}
function DocumentsPageComponent_ForEmpty_79_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Ningun documento coincide con los filtros. ");
  }
}
function DocumentsPageComponent_ForEmpty_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 42);
    \u0275\u0275template(2, DocumentsPageComponent_ForEmpty_79_Conditional_2_Template, 1, 0)(3, DocumentsPageComponent_ForEmpty_79_Conditional_3_Template, 1, 0)(4, DocumentsPageComponent_ForEmpty_79_Conditional_4_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.loading() ? 2 : ctx_r1.docs().length === 0 ? 3 : 4);
  }
}
function DocumentsPageComponent_Conditional_80_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r9 = ctx.$implicit;
    \u0275\u0275property("ngValue", t_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r9.name);
  }
}
function DocumentsPageComponent_Conditional_80_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.form.file.name, " \xB7 ", \u0275\u0275pipeBind2(2, 2, ctx_r1.form.file.size / 1024, "1.0-1"), " KB ");
  }
}
function DocumentsPageComponent_Conditional_80_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Subiendo... ");
  }
}
function DocumentsPageComponent_Conditional_80_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Guardar ");
  }
}
function DocumentsPageComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275listener("click", function DocumentsPageComponent_Conditional_80_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275elementStart(1, "div", 44);
    \u0275\u0275listener("click", function DocumentsPageComponent_Conditional_80_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 45)(3, "div", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 47);
    \u0275\u0275element(5, "path", 48)(6, "polyline", 49)(7, "line", 50)(8, "line", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "h2", 52);
    \u0275\u0275text(10, "Nuevo documento");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 53)(12, "label", 54)(13, "span");
    \u0275\u0275text(14, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function DocumentsPageComponent_Conditional_80_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "label", 56)(17, "span");
    \u0275\u0275text(18, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 57);
    \u0275\u0275twoWayListener("ngModelChange", function DocumentsPageComponent_Conditional_80_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.documentTypeId, $event) || (ctx_r1.form.documentTypeId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(20, DocumentsPageComponent_Conditional_80_For_21_Template, 2, 2, "option", 58, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "label", 56)(23, "span");
    \u0275\u0275text(24, "Fecha de expiracion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function DocumentsPageComponent_Conditional_80_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.expirationDate, $event) || (ctx_r1.form.expirationDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "label", 54)(27, "span");
    \u0275\u0275text(28, "Archivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 60);
    \u0275\u0275listener("change", function DocumentsPageComponent_Conditional_80_Template_input_change_29_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, DocumentsPageComponent_Conditional_80_Conditional_30_Template, 3, 5, "span", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 62)(32, "button", 63);
    \u0275\u0275listener("click", function DocumentsPageComponent_Conditional_80_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275text(33, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 64);
    \u0275\u0275listener("click", function DocumentsPageComponent_Conditional_80_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitCreate());
    });
    \u0275\u0275template(35, DocumentsPageComponent_Conditional_80_Conditional_35_Template, 1, 0)(36, DocumentsPageComponent_Conditional_80_Conditional_36_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.documentTypeId);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.documentTypeOptions());
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.expirationDate);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.form.file ? 30 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.canSubmitCreate());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loading() ? 35 : 36);
  }
}
function DocumentsPageComponent_Conditional_81_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r11 = ctx.$implicit;
    \u0275\u0275property("value", s_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r11);
  }
}
function DocumentsPageComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275listener("click", function DocumentsPageComponent_Conditional_81_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForceState());
    });
    \u0275\u0275elementStart(1, "div", 65);
    \u0275\u0275listener("click", function DocumentsPageComponent_Conditional_81_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 45)(3, "div", 66);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 47);
    \u0275\u0275element(5, "circle", 67)(6, "polyline", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h2", 69);
    \u0275\u0275text(8, "Forzar estado");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 70);
    \u0275\u0275text(10, " Cambia manualmente el estado de ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, ". Solo administradores. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "label", 56)(15, "span");
    \u0275\u0275text(16, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 9);
    \u0275\u0275listener("ngModelChange", function DocumentsPageComponent_Conditional_81_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.forceStateValue.set($event));
    });
    \u0275\u0275repeaterCreate(18, DocumentsPageComponent_Conditional_81_For_19_Template, 2, 2, "option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 62)(21, "button", 63);
    \u0275\u0275listener("click", function DocumentsPageComponent_Conditional_81_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForceState());
    });
    \u0275\u0275text(22, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 64);
    \u0275\u0275listener("click", function DocumentsPageComponent_Conditional_81_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitForceState());
    });
    \u0275\u0275text(24, " Aplicar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx.name);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.forceStateValue());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.STATUS_OPTIONS);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.loading());
  }
}
function DocumentsPageComponent_Conditional_82_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 73);
    \u0275\u0275text(1, "Aun no hay archivos para este documento.");
    \u0275\u0275elementEnd();
  }
}
function DocumentsPageComponent_Conditional_82_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 77)(1, "div", 78)(2, "span", 79);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 80)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 81);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 82)(10, "button", 83);
    \u0275\u0275listener("click", function DocumentsPageComponent_Conditional_82_Conditional_16_For_2_Template_button_click_10_listener() {
      const v_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.downloadVersion(v_r14));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 24);
    \u0275\u0275element(12, "path", 84)(13, "polyline", 85)(14, "line", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "button", 87);
    \u0275\u0275listener("click", function DocumentsPageComponent_Conditional_82_Conditional_16_For_2_Template_button_click_15_listener() {
      const v_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirmDeleteVersion(v_r14));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 24);
    \u0275\u0275element(17, "polyline", 37)(18, "path", 38)(19, "path", 39)(20, "path", 40)(21, "path", 41);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const v_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("v", v_r14.versionNumber, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.versionUploaderLabel(v_r14));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", v_r14.createdAt || "\u2014", " \xB7 ", ctx_r1.formatSize(v_r14.fileSize), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", v_r14.id == null);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", v_r14.id == null);
  }
}
function DocumentsPageComponent_Conditional_82_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 74);
    \u0275\u0275repeaterCreate(1, DocumentsPageComponent_Conditional_82_Conditional_16_For_2_Template, 22, 6, "li", 77, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vd_r15 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.sortedVersions(vd_r15));
  }
}
function DocumentsPageComponent_Conditional_82_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 88);
    \u0275\u0275element(2, "path", 89)(3, "line", 90)(4, "line", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7, "Limite alcanzado.");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" Este documento ya tiene ", ctx_r1.MAX_VERSIONS, " versiones, que es el maximo permitido. Para subir una nueva version elimina una version anterior primero. ");
  }
}
function DocumentsPageComponent_Conditional_82_Conditional_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r17 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", f_r17.name, " \xB7 ", \u0275\u0275pipeBind2(2, 2, f_r17.size / 1024, "1.0-1"), " KB ");
  }
}
function DocumentsPageComponent_Conditional_82_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "label", 54)(2, "span");
    \u0275\u0275text(3, "Subir nueva version");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 60);
    \u0275\u0275listener("change", function DocumentsPageComponent_Conditional_82_Conditional_18_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onVersionFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, DocumentsPageComponent_Conditional_82_Conditional_18_Conditional_5_Template, 3, 5, "span", 61);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275conditional((tmp_3_0 = ctx_r1.versionsUploadFile()) ? 5 : -1, tmp_3_0);
  }
}
function DocumentsPageComponent_Conditional_82_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Subiendo... ");
  }
}
function DocumentsPageComponent_Conditional_82_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Subir version ");
  }
}
function DocumentsPageComponent_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275listener("click", function DocumentsPageComponent_Conditional_82_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeVersionsModal());
    });
    \u0275\u0275elementStart(1, "div", 71);
    \u0275\u0275listener("click", function DocumentsPageComponent_Conditional_82_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 45)(3, "div", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 47);
    \u0275\u0275element(5, "path", 28)(6, "polyline", 29)(7, "polyline", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h2", 72);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 70);
    \u0275\u0275text(11, " Cada vez que subes un archivo nuevo se guarda como una version. Se permiten hasta ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " versiones por documento. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, DocumentsPageComponent_Conditional_82_Conditional_15_Template, 2, 0, "p", 73)(16, DocumentsPageComponent_Conditional_82_Conditional_16_Template, 3, 0, "ul", 74)(17, DocumentsPageComponent_Conditional_82_Conditional_17_Template, 9, 1, "div", 75)(18, DocumentsPageComponent_Conditional_82_Conditional_18_Template, 6, 1, "div", 76);
    \u0275\u0275elementStart(19, "div", 62)(20, "button", 63);
    \u0275\u0275listener("click", function DocumentsPageComponent_Conditional_82_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeVersionsModal());
    });
    \u0275\u0275text(21, "Cerrar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 64);
    \u0275\u0275listener("click", function DocumentsPageComponent_Conditional_82_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitNewVersion());
    });
    \u0275\u0275template(23, DocumentsPageComponent_Conditional_82_Conditional_23_Template, 1, 0)(24, DocumentsPageComponent_Conditional_82_Conditional_24_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const vd_r15 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(' Historial de "', vd_r15.name, '" ');
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.MAX_VERSIONS);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(vd_r15.versions.length === 0 ? 15 : 16);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.versionLimitReached(vd_r15) ? 17 : 18);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r1.versionsUploadFile() || ctx_r1.versionsUploadLoading() || ctx_r1.versionLimitReached(vd_r15));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.versionsUploadLoading() ? 23 : 24);
  }
}
function DocumentsPageComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275listener("click", function DocumentsPageComponent_Conditional_83_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelConfirm());
    });
    \u0275\u0275elementStart(1, "div", 92);
    \u0275\u0275listener("click", function DocumentsPageComponent_Conditional_83_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 45)(3, "div", 93);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 47);
    \u0275\u0275element(5, "path", 89)(6, "line", 90)(7, "line", 91);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h2", 94);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 95);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 62)(13, "button", 63);
    \u0275\u0275listener("click", function DocumentsPageComponent_Conditional_83_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelConfirm());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 63);
    \u0275\u0275listener("click", function DocumentsPageComponent_Conditional_83_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.acceptConfirm());
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cfg_r19 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275classProp("modal__icon--warning", !cfg_r19.danger)("modal__icon--error", cfg_r19.danger);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(cfg_r19.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cfg_r19.message);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", cfg_r19.cancelLabel || "Cancelar", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("danger", cfg_r19.danger)("primary", !cfg_r19.danger);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cfg_r19.confirmLabel || "Confirmar", " ");
  }
}
function DocumentsPageComponent_Conditional_84_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 97);
    \u0275\u0275element(1, "polyline", 100);
    \u0275\u0275elementEnd();
  }
}
function DocumentsPageComponent_Conditional_84_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 47);
    \u0275\u0275element(1, "circle", 67)(2, "line", 101)(3, "line", 102);
    \u0275\u0275elementEnd();
  }
}
function DocumentsPageComponent_Conditional_84_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 47);
    \u0275\u0275element(1, "circle", 67)(2, "line", 103)(3, "line", 104);
    \u0275\u0275elementEnd();
  }
}
function DocumentsPageComponent_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275listener("click", function DocumentsPageComponent_Conditional_84_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeNotice());
    });
    \u0275\u0275elementStart(1, "div", 96);
    \u0275\u0275listener("click", function DocumentsPageComponent_Conditional_84_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 45)(3, "div", 93);
    \u0275\u0275template(4, DocumentsPageComponent_Conditional_84_Case_4_Template, 2, 0, ":svg:svg", 97)(5, DocumentsPageComponent_Conditional_84_Case_5_Template, 4, 0, ":svg:svg", 47)(6, DocumentsPageComponent_Conditional_84_Case_6_Template, 4, 0, ":svg:svg", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2", 98);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 99);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 62)(12, "button", 20);
    \u0275\u0275listener("click", function DocumentsPageComponent_Conditional_84_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeNotice());
    });
    \u0275\u0275text(13, "Entendido");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const n_r21 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275classProp("modal__icon--success", n_r21.kind === "success")("modal__icon--error", n_r21.kind === "error")("modal__icon--warning", n_r21.kind === "warning")("modal__icon--info", n_r21.kind === "info");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_6_0 = n_r21.kind) === "success" ? 4 : tmp_6_0 === "error" ? 5 : 6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(n_r21.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r21.message);
  }
}
var STATUS_OPTIONS = ["ACTIVE", "EXPIRING", "EXPIRED", "ARCHIVED"];
var MAX_VERSIONS_PER_DOCUMENT = 3;
var DocumentsPageComponent = class _DocumentsPageComponent {
  adminApi;
  authService;
  P = P;
  STATUS_OPTIONS = STATUS_OPTIONS;
  MAX_VERSIONS = MAX_VERSIONS_PER_DOCUMENT;
  docs = signal([]);
  loading = signal(false);
  loadError = signal(null);
  // Catalogos auxiliares para mapear IDs -> nombres legibles.
  docTypesById = signal({});
  orgsById = signal({});
  ownersById = signal({});
  // Filtros
  idFilterSig = signal("");
  nameFilterSig = signal("");
  statusFilterSig = signal("all");
  // Sort
  sortColumn = signal("id");
  sortDir = signal("asc");
  // Modales
  modalCreate = signal(false);
  modalForceState = signal(null);
  forceStateValue = signal("ACTIVE");
  notice = signal(null);
  confirmReq = signal(null);
  // Modal de historial de versiones (visible para todos los roles autenticados).
  // El backend gestiona si el rol concreto puede subir/descargar para este doc en particular.
  versionsModalDoc = signal(null);
  versionsUploadFile = signal(null);
  versionsUploadLoading = signal(false);
  form = this.emptyForm();
  /** Aplica filtros y luego ordena. */
  filteredDocs = computed(() => {
    const idQ = this.idFilterSig().trim();
    const nameQ = this.nameFilterSig().trim().toLowerCase();
    const status = this.statusFilterSig();
    let list = this.docs();
    if (idQ)
      list = list.filter((d) => String(d.id).includes(idQ));
    if (nameQ)
      list = list.filter((d) => (d.name || "").toLowerCase().includes(nameQ));
    if (status !== "all")
      list = list.filter((d) => d.status === status);
    return [...list].sort((a, b) => this.compareForSort(a, b));
  });
  constructor(adminApi, authService) {
    this.adminApi = adminApi;
    this.authService = authService;
  }
  ngOnInit() {
    this.reload();
    this.loadDocumentTypes();
    this.loadOrganizations();
  }
  // ---------------------------------------------------------------------------
  // Carga de catalogos auxiliares
  // ---------------------------------------------------------------------------
  /**
   * Carga el catalogo de tipos de documento. No bloquea la pagina ni muestra error si falla:
   * en el peor caso, la columna "Tipo" mostrara el id como fallback.
   */
  loadDocumentTypes() {
    this.adminApi.listDocumentTypes().subscribe({
      next: (types) => {
        const map = {};
        for (const t of types || []) {
          map[t.id] = t;
        }
        this.docTypesById.set(map);
      },
      error: () => {
        this.docTypesById.set({});
      }
    });
  }
  /**
   * Si el usuario es admin (puede listar TODAS las orgs) las traemos completas; si no,
   * traemos solo las propias. En ambos casos volcamos id -> name.
   */
  loadOrganizations() {
    const useGlobal = this.authService.hasPermission(P.ORG_LIST);
    const obs = useGlobal ? this.adminApi.listAllOrganizations() : this.adminApi.myOrganizations();
    obs.subscribe({
      next: (rows) => {
        const map = {};
        for (const o of rows || []) {
          map[o.id] = o.name;
        }
        this.orgsById.set(map);
      },
      error: () => {
        this.orgsById.set({});
      }
    });
  }
  /**
   * Resuelve los nombres de los "Subido por" para los documentos cargados, en una sola
   * llamada batch. Filtra duplicados y se salta los ids que ya tenemos cacheados.
   */
  loadOwnersFor(docs) {
    const cache = this.ownersById();
    const ids = Array.from(new Set(docs.map((d) => d.userId).filter((id) => typeof id === "number" && id > 0 && !cache[id])));
    if (ids.length === 0)
      return;
    this.adminApi.getUserProfilesBatch(ids).subscribe({
      next: (profiles) => {
        const next = __spreadValues({}, this.ownersById());
        for (const p of profiles || []) {
          next[p.id] = p;
        }
        this.ownersById.set(next);
      },
      error: () => {
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Labels para columnas enriquecidas (id -> nombre)
  // ---------------------------------------------------------------------------
  /** Devuelve el nombre del tipo o el id si el catalogo aun no llego. */
  typeLabel(d) {
    const t = this.docTypesById()[d.documentTypeId];
    return t ? t.name : `#${d.documentTypeId}`;
  }
  /** Devuelve el nombre de la organizacion o el id; "—" si no hay org. */
  orgLabel(d) {
    if (d.organizationId == null)
      return "\u2014";
    const name = this.orgsById()[d.organizationId];
    return name ? name : `#${d.organizationId}`;
  }
  /** Devuelve "Nombre Apellido" del usuario que subio el documento, o el id como fallback. */
  ownerLabel(d) {
    const p = this.ownersById()[d.userId];
    if (!p)
      return `#${d.userId}`;
    const full = `${p.name || ""} ${p.lastname || ""}`.trim();
    return full || p.username || `#${d.userId}`;
  }
  // ---------------------------------------------------------------------------
  // Carga del listado
  // ---------------------------------------------------------------------------
  reload() {
    this.loadError.set(null);
    this.loading.set(true);
    this.adminApi.listDocuments().subscribe({
      next: (rows) => {
        const list = rows ?? [];
        this.docs.set(list);
        this.loading.set(false);
        this.loadOwnersFor(list);
      },
      error: (e) => {
        this.loading.set(false);
        this.loadError.set(e?.error?.message || e?.message || "No se pudieron cargar los documentos.");
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Sort
  // ---------------------------------------------------------------------------
  /** Click sobre la cabecera: alterna asc/desc o cambia de columna. */
  setSort(col) {
    if (this.sortColumn() === col) {
      this.sortDir.set(this.sortDir() === "asc" ? "desc" : "asc");
    } else {
      this.sortColumn.set(col);
      this.sortDir.set("asc");
    }
  }
  /** Indicador visual usado en la cabecera (▲/▼ activo, "↕" inactivo). */
  sortIndicator(col) {
    if (this.sortColumn() !== col)
      return "\u2195";
    return this.sortDir() === "asc" ? "\u25B2" : "\u25BC";
  }
  isSortActive(col) {
    return this.sortColumn() === col;
  }
  compareForSort(a, b) {
    const dir = this.sortDir() === "asc" ? 1 : -1;
    const col = this.sortColumn();
    let va;
    let vb;
    switch (col) {
      case "id":
        va = a.id;
        vb = b.id;
        break;
      case "name":
        va = (a.name || "").toLowerCase();
        vb = (b.name || "").toLowerCase();
        break;
      case "status":
        va = (a.status || "").toLowerCase();
        vb = (b.status || "").toLowerCase();
        break;
      case "type":
        va = this.typeLabel(a).toLowerCase();
        vb = this.typeLabel(b).toLowerCase();
        break;
      case "org":
        va = this.orgLabel(a).toLowerCase();
        vb = this.orgLabel(b).toLowerCase();
        break;
      case "owner":
        va = this.ownerLabel(a).toLowerCase();
        vb = this.ownerLabel(b).toLowerCase();
        break;
      case "expiration":
        va = a.expirationDate || "";
        vb = b.expirationDate || "";
        break;
      case "versions":
        va = a.versions?.length ?? 0;
        vb = b.versions?.length ?? 0;
        break;
      default:
        va = 0;
        vb = 0;
    }
    if (va == null && vb == null)
      return 0;
    if (va == null)
      return 1;
    if (vb == null)
      return -1;
    if (typeof va === "number" && typeof vb === "number") {
      return (va - vb) * dir;
    }
    return String(va).localeCompare(String(vb)) * dir;
  }
  // ---------------------------------------------------------------------------
  // Visualizar/descargar archivo
  // ---------------------------------------------------------------------------
  /**
   * Abre el archivo de la ultima version en una nueva pestana. PDFs e imagenes se
   * previsualizan inline en el navegador; otros formatos se descargaran segun la
   * configuracion del navegador del usuario.
   *
   * <p>El backend responde con {@code Content-Disposition: inline; filename=...}, asi que
   * leemos ese header para forzar el nombre del archivo en la descarga si fuera necesario.
   */
  viewDocument(d) {
    if (!d.versions || d.versions.length === 0) {
      this.showWarning("Este documento aun no tiene archivos asociados.");
      return;
    }
    this.adminApi.downloadDocumentLatest(d.id).subscribe({
      next: (response) => this.openBlobInNewTab(response, d),
      error: (e) => this.showApiError(e)
    });
  }
  openBlobInNewTab(response, d) {
    const blob = response.body;
    if (!blob) {
      this.showApiError({ message: "Respuesta vacia del servidor" }, "No se pudo abrir el archivo");
      return;
    }
    const contentType = (response.headers.get("Content-Type") || "").toLowerCase();
    if (contentType.includes("application/json")) {
      blob.text().then((text) => {
        try {
          const data = JSON.parse(text);
          if (data.externalUrl) {
            const opened = window.open(data.externalUrl, "_blank");
            if (!opened) {
              this.showWarning("Tu navegador bloqueo la apertura de la pestana. Permitelo y vuelve a intentar.");
            }
          } else {
            this.showApiError({ message: text });
          }
        } catch {
          this.showApiError({ message: "Respuesta no reconocida" });
        }
      });
      return;
    }
    const url = URL.createObjectURL(blob);
    const filename = this.parseFilenameFromContentDisposition(response.headers.get("Content-Disposition")) || `${d.name || "documento_" + d.id}`;
    const newWindow = window.open(url, "_blank");
    if (!newWindow) {
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
    setTimeout(() => URL.revokeObjectURL(url), 6e4);
  }
  /**
   * Extrae el {@code filename} de un header {@code Content-Disposition} estilo
   * {@code attachment; filename="x.pdf"} o {@code inline; filename*=UTF-8''x.pdf}.
   */
  parseFilenameFromContentDisposition(header) {
    if (!header)
      return null;
    const utf8Match = /filename\*=UTF-8''([^;]+)/i.exec(header);
    if (utf8Match && utf8Match[1]) {
      try {
        return decodeURIComponent(utf8Match[1]);
      } catch {
        return utf8Match[1];
      }
    }
    const plainMatch = /filename="?([^";]+)"?/i.exec(header);
    return plainMatch && plainMatch[1] ? plainMatch[1] : null;
  }
  // ---------------------------------------------------------------------------
  // Crear documento
  // ---------------------------------------------------------------------------
  openCreate() {
    this.form = this.emptyForm();
    this.modalCreate.set(true);
  }
  closeCreate() {
    this.modalCreate.set(false);
  }
  onFileSelected(ev) {
    const input = ev.target;
    this.form.file = input.files && input.files.length ? input.files[0] : null;
  }
  submitCreate() {
    if (!this.canSubmitCreate())
      return;
    const payload = {
      name: this.form.name.trim(),
      documentTypeId: this.form.documentTypeId,
      expirationDate: this.form.expirationDate || null
    };
    this.loading.set(true);
    this.adminApi.createDocument(payload, this.form.file).subscribe({
      next: () => {
        this.loading.set(false);
        this.closeCreate();
        this.reload();
        this.showSuccess(`Documento "${payload.name}" creado.`);
      },
      error: (e) => {
        this.loading.set(false);
        this.showApiError(e);
      }
    });
  }
  canSubmitCreate() {
    return !!this.form.name.trim() && this.form.documentTypeId > 0 && !!this.form.file && !this.loading();
  }
  /** Lista de tipos disponible para el select del modal. */
  documentTypeOptions() {
    return Object.values(this.docTypesById());
  }
  // ---------------------------------------------------------------------------
  // Eliminar documento
  // ---------------------------------------------------------------------------
  confirmDelete(d) {
    this.openConfirm({
      title: "Eliminar documento",
      message: `Se eliminara "${d.name}" (id ${d.id}). Esta accion no se puede deshacer.`,
      confirmLabel: "Eliminar",
      danger: true,
      onConfirm: () => this.executeDelete(d)
    });
  }
  executeDelete(d) {
    this.adminApi.deleteDocument(d.id).subscribe({
      next: () => {
        this.reload();
        this.showSuccess(`Documento "${d.name}" eliminado.`);
      },
      error: (e) => this.showApiError(e)
    });
  }
  // ---------------------------------------------------------------------------
  // Forzar estado
  // ---------------------------------------------------------------------------
  openForceState(d) {
    this.modalForceState.set(d);
    this.forceStateValue.set(d.status);
  }
  closeForceState() {
    this.modalForceState.set(null);
  }
  submitForceState() {
    const d = this.modalForceState();
    if (!d)
      return;
    const state = this.forceStateValue();
    this.loading.set(true);
    this.adminApi.forceDocumentState(d.id, state).subscribe({
      next: () => {
        this.loading.set(false);
        this.closeForceState();
        this.reload();
        this.showSuccess(`Estado de "${d.name}" actualizado a ${state}.`);
      },
      error: (e) => {
        this.loading.set(false);
        this.showApiError(e);
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Versiones (resumen rapido)
  // ---------------------------------------------------------------------------
  versionsSummary(d) {
    const count = d.versions?.length ?? 0;
    if (count === 0)
      return "\u2014";
    return `${count} version${count === 1 ? "" : "es"}`;
  }
  // ---------------------------------------------------------------------------
  // Modal de historial de versiones: listado + descarga por version + upload
  // ---------------------------------------------------------------------------
  /** Abre el modal de versiones para un documento. Pre-carga los nombres de los autores. */
  openVersionsModal(d) {
    this.versionsModalDoc.set(d);
    this.versionsUploadFile.set(null);
    this.loadVersionUploadersFor(d);
  }
  loadVersionUploadersFor(d) {
    const ids = (d.versions ?? []).map((v) => v.uploadedByUserId).filter((id) => typeof id === "number" && id > 0);
    if (ids.length) {
      this.adminApi.getUserProfilesBatch(ids).subscribe({
        next: (profiles) => {
          const next = __spreadValues({}, this.ownersById());
          for (const p of profiles || [])
            next[p.id] = p;
          this.ownersById.set(next);
        },
        error: () => {
        }
      });
    }
  }
  closeVersionsModal() {
    this.versionsModalDoc.set(null);
    this.versionsUploadFile.set(null);
  }
  /** Devuelve las versiones ordenadas por versionNumber descendente para mostrar la mas nueva arriba. */
  sortedVersions(d) {
    return [...d.versions ?? []].sort((a, b) => (b.versionNumber ?? 0) - (a.versionNumber ?? 0));
  }
  /** Nombre + apellido del autor de una version, con fallback al id. */
  versionUploaderLabel(v) {
    const p = this.ownersById()[v.uploadedByUserId];
    if (!p)
      return `#${v.uploadedByUserId}`;
    const full = `${p.name || ""} ${p.lastname || ""}`.trim();
    return full || p.username || `#${v.uploadedByUserId}`;
  }
  /** Tamano legible (KB/MB) para mostrarlo junto a cada version. */
  formatSize(bytes) {
    if (!bytes || bytes <= 0)
      return "\u2014";
    const kb = bytes / 1024;
    if (kb < 1024)
      return `${kb.toFixed(1)} KB`;
    return `${(kb / 1024).toFixed(2)} MB`;
  }
  /** Descarga una version concreta del documento abierto en el modal. */
  downloadVersion(v) {
    const d = this.versionsModalDoc();
    if (!d || v.id == null)
      return;
    this.adminApi.downloadDocumentVersion(d.id, v.id).subscribe({
      next: (response) => this.openBlobInNewTab(response, d),
      error: (e) => this.showApiError(e)
    });
  }
  confirmDeleteVersion(v) {
    const d = this.versionsModalDoc();
    if (!d || v.id == null)
      return;
    this.openConfirm({
      title: "Eliminar version",
      message: `Se eliminara la version v${v.versionNumber} de "${d.name}". Esta accion no se puede deshacer.`,
      confirmLabel: "Eliminar",
      danger: true,
      onConfirm: () => this.executeDeleteVersion(d, v)
    });
  }
  executeDeleteVersion(d, v) {
    if (v.id == null)
      return;
    this.adminApi.deleteDocumentVersion(d.id, v.id).subscribe({
      next: (updated) => {
        this.docs.update((rows) => rows.map((r) => r.id === updated.id ? updated : r));
        this.versionsModalDoc.set(updated);
        this.versionsUploadFile.set(null);
        this.loadVersionUploadersFor(updated);
        this.showSuccess(`Version v${v.versionNumber} eliminada correctamente.`);
      },
      error: (e) => this.showApiError(e)
    });
  }
  /** Capturador del file input de la zona "Subir nueva version" del modal. */
  onVersionFileSelected(ev) {
    const input = ev.target;
    this.versionsUploadFile.set(input.files && input.files.length ? input.files[0] : null);
  }
  /**
   * Devuelve {@code true} cuando el documento abierto en el modal ya alcanzo el limite
   * de versiones y por tanto NO se puede subir una nueva. Lo usa la plantilla para
   * deshabilitar el input file y el boton "Subir version".
   */
  versionLimitReached(d) {
    if (!d)
      return false;
    return d.versions.length >= MAX_VERSIONS_PER_DOCUMENT;
  }
  /**
   * Envia la nueva version. El backend valida los permisos: ADMIN cualquier doc,
   * MANAGER solo en su org, USER solo si es el dueno. Si no aplica, devuelve 403 y
   * mostramos el mensaje del server al usuario.
   *
   * <p>Antes de llamar al backend comprobamos el limite local de
   * {@link MAX_VERSIONS_PER_DOCUMENT} para mostrar el mensaje de "elimina una version
   * primero" sin gastar una peticion ni esperar al 400. Esto tambien evita el bug por
   * el cual una RuntimeException no controlada en el server podia escalar a 401 y forzar
   * el logout del usuario.
   */
  submitNewVersion() {
    const d = this.versionsModalDoc();
    const file = this.versionsUploadFile();
    if (!d || !file || this.versionsUploadLoading())
      return;
    if (this.versionLimitReached(d)) {
      this.showWarning(`Este documento ya tiene ${MAX_VERSIONS_PER_DOCUMENT} versiones, que es el maximo permitido. Para subir una nueva version elimina una version anterior primero.`, "Limite de versiones alcanzado");
      return;
    }
    this.versionsUploadLoading.set(true);
    this.adminApi.uploadNewDocumentVersion(d.id, file).subscribe({
      next: (updated) => {
        this.versionsUploadLoading.set(false);
        this.docs.update((rows) => rows.map((r) => r.id === updated.id ? updated : r));
        this.versionsModalDoc.set(updated);
        this.versionsUploadFile.set(null);
        this.loadVersionUploadersFor(updated);
        this.showSuccess(`Nueva version ${updated.versions?.length ?? ""} subida correctamente.`);
      },
      error: (e) => {
        this.versionsUploadLoading.set(false);
        this.showApiError(e);
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Confirm + Notice
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
  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------
  emptyForm() {
    return {
      name: "",
      documentTypeId: 1,
      expirationDate: "",
      file: null
    };
  }
  static \u0275fac = function DocumentsPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentsPageComponent)(\u0275\u0275directiveInject(AdminApiService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentsPageComponent, selectors: [["app-documents-page"]], decls: 85, vars: 52, consts: [[1, "page"], [1, "page-head"], [1, "page-title"], [1, "page-sub"], [1, "head-actions"], ["type", "button", "class", "btn primary", 3, "click", 4, "hasPermission"], [1, "toolbar"], [1, "filter"], ["type", "text", "placeholder", "ej. 12", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", "all"], [3, "value"], [1, "filter", "filter--grow"], ["type", "search", "placeholder", "Contrato, factura...", "autocomplete", "off", 3, "ngModelChange", "ngModel"], [1, "err"], [1, "table-wrap"], [1, "sortable-header", 3, "click"], [1, "sort-icon"], ["title", "Usuario que subio el documento", 1, "sortable-header", 3, "click"], ["role", "presentation", 1, "modal-backdrop"], ["type", "button", 1, "btn", "primary", 3, "click"], [1, "doc-status"], [1, "actions"], ["type", "button", 1, "icon-btn", 3, "click", "title", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "width", "18", "height", "18", "aria-hidden", "true"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["type", "button", "title", "Ver historial de versiones / subir nueva version", "aria-label", "Ver historial de versiones", 1, "icon-btn", 3, "click"], ["d", "M3 12a9 9 0 1 0 3-6.7L3 8"], ["points", "3 3 3 8 8 8"], ["points", "12 7 12 12 15 14"], ["type", "button", "class", "icon-btn", "title", "Forzar estado", 3, "click", 4, "hasPermission"], ["type", "button", "class", "icon-btn warn", "title", "Eliminar documento", 3, "click", 4, "hasPermission"], ["type", "button", "title", "Forzar estado", 1, "icon-btn", 3, "click"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], ["type", "button", "title", "Eliminar documento", 1, "icon-btn", "warn", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"], ["d", "M10 11v6"], ["d", "M14 11v6"], ["d", "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"], ["colspan", "9"], ["role", "presentation", 1, "modal-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "doc-create-title", 1, "modal", "modal--wide", 3, "click"], [1, "modal__header"], ["aria-hidden", "true", 1, "modal__icon", "modal__icon--info"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "12", "y1", "18", "x2", "12", "y2", "12"], ["x1", "9", "y1", "15", "x2", "15", "y2", "15"], ["id", "doc-create-title", 1, "modal__title"], [1, "doc-form"], [1, "doc-form__field", "doc-form__field--full"], ["type", "text", "placeholder", "Contrato Acme - 2026", "autocomplete", "off", 3, "ngModelChange", "ngModel"], [1, "doc-form__field"], ["name", "documentTypeId", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "date", 3, "ngModelChange", "ngModel"], ["type", "file", 3, "change"], [1, "doc-form__file-info"], [1, "modal__actions"], ["type", "button", 1, "btn", 3, "click"], ["type", "button", 1, "btn", "primary", 3, "click", "disabled"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "doc-state-title", 1, "modal", 3, "click"], ["aria-hidden", "true", 1, "modal__icon", "modal__icon--warning"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], ["id", "doc-state-title", 1, "modal__title"], [1, "modal__hint"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "doc-versions-title", 1, "modal", "modal--xwide", 3, "click"], ["id", "doc-versions-title", 1, "modal__title"], [1, "modal__hint", "version-empty"], [1, "version-list"], ["role", "alert", 1, "version-limit-alert"], [1, "version-upload"], [1, "version-item"], [1, "version-item__main"], [1, "version-item__number"], [1, "version-item__meta"], [1, "version-item__sub"], [1, "version-item__actions"], ["type", "button", "title", "Descargar / visualizar esta version", "aria-label", "Descargar version", 1, "icon-btn", 3, "click", "disabled"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], ["type", "button", "title", "Eliminar esta version", "aria-label", "Eliminar version", 1, "icon-btn", "warn", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "width", "20", "height", "20", "aria-hidden", "true"], ["d", "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], ["role", "alertdialog", "aria-modal", "true", "aria-labelledby", "doc-confirm-title", "aria-describedby", "doc-confirm-message", 1, "modal", 3, "click"], ["aria-hidden", "true", 1, "modal__icon"], ["id", "doc-confirm-title", 1, "modal__title"], ["id", "doc-confirm-message", 1, "modal__message"], ["role", "alertdialog", "aria-modal", "true", "aria-labelledby", "doc-notice-title", "aria-describedby", "doc-notice-message", 1, "modal", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "doc-notice-title", 1, "modal__title"], ["id", "doc-notice-message", 1, "modal__message"], ["points", "20 6 9 17 4 12"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], ["x1", "12", "y1", "16", "x2", "12", "y2", "12"], ["x1", "12", "y1", "8", "x2", "12.01", "y2", "8"]], template: function DocumentsPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Documentos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275template(6, DocumentsPageComponent_Conditional_6_Template, 1, 0)(7, DocumentsPageComponent_Conditional_7_Template, 1, 0)(8, DocumentsPageComponent_Conditional_8_Template, 1, 0)(9, DocumentsPageComponent_Conditional_9_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 4);
      \u0275\u0275template(11, DocumentsPageComponent_button_11_Template, 2, 0, "button", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 6)(13, "label", 7)(14, "span");
      \u0275\u0275text(15, "Filtrar por ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 8);
      \u0275\u0275listener("ngModelChange", function DocumentsPageComponent_Template_input_ngModelChange_16_listener($event) {
        return ctx.idFilterSig.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "label", 7)(18, "span");
      \u0275\u0275text(19, "Estado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "select", 9);
      \u0275\u0275listener("ngModelChange", function DocumentsPageComponent_Template_select_ngModelChange_20_listener($event) {
        return ctx.statusFilterSig.set($event);
      });
      \u0275\u0275elementStart(21, "option", 10);
      \u0275\u0275text(22, "Todos");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(23, DocumentsPageComponent_For_24_Template, 2, 2, "option", 11, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "label", 12)(26, "span");
      \u0275\u0275text(27, "Buscar por nombre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "input", 13);
      \u0275\u0275listener("ngModelChange", function DocumentsPageComponent_Template_input_ngModelChange_28_listener($event) {
        return ctx.nameFilterSig.set($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(29, DocumentsPageComponent_Conditional_29_Template, 2, 1, "p", 14);
      \u0275\u0275elementStart(30, "div", 15)(31, "table")(32, "thead")(33, "tr")(34, "th")(35, "span", 16);
      \u0275\u0275listener("click", function DocumentsPageComponent_Template_span_click_35_listener() {
        return ctx.setSort("id");
      });
      \u0275\u0275text(36, " ID ");
      \u0275\u0275elementStart(37, "span", 17);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "th")(40, "span", 16);
      \u0275\u0275listener("click", function DocumentsPageComponent_Template_span_click_40_listener() {
        return ctx.setSort("name");
      });
      \u0275\u0275text(41, " Nombre ");
      \u0275\u0275elementStart(42, "span", 17);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "th")(45, "span", 16);
      \u0275\u0275listener("click", function DocumentsPageComponent_Template_span_click_45_listener() {
        return ctx.setSort("status");
      });
      \u0275\u0275text(46, " Estado ");
      \u0275\u0275elementStart(47, "span", 17);
      \u0275\u0275text(48);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "th")(50, "span", 16);
      \u0275\u0275listener("click", function DocumentsPageComponent_Template_span_click_50_listener() {
        return ctx.setSort("type");
      });
      \u0275\u0275text(51, " Tipo ");
      \u0275\u0275elementStart(52, "span", 17);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "th")(55, "span", 16);
      \u0275\u0275listener("click", function DocumentsPageComponent_Template_span_click_55_listener() {
        return ctx.setSort("org");
      });
      \u0275\u0275text(56, " Organizacion ");
      \u0275\u0275elementStart(57, "span", 17);
      \u0275\u0275text(58);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "th")(60, "span", 18);
      \u0275\u0275listener("click", function DocumentsPageComponent_Template_span_click_60_listener() {
        return ctx.setSort("owner");
      });
      \u0275\u0275text(61, " Subido por ");
      \u0275\u0275elementStart(62, "span", 17);
      \u0275\u0275text(63);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "th")(65, "span", 16);
      \u0275\u0275listener("click", function DocumentsPageComponent_Template_span_click_65_listener() {
        return ctx.setSort("expiration");
      });
      \u0275\u0275text(66, " Vence ");
      \u0275\u0275elementStart(67, "span", 17);
      \u0275\u0275text(68);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "th")(70, "span", 16);
      \u0275\u0275listener("click", function DocumentsPageComponent_Template_span_click_70_listener() {
        return ctx.setSort("versions");
      });
      \u0275\u0275text(71, " Versiones ");
      \u0275\u0275elementStart(72, "span", 17);
      \u0275\u0275text(73);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(74, "th");
      \u0275\u0275text(75, "Acciones");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "tbody");
      \u0275\u0275repeaterCreate(77, DocumentsPageComponent_For_78_Template, 30, 20, "tr", null, _forTrack0, false, DocumentsPageComponent_ForEmpty_79_Template, 5, 1, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(80, DocumentsPageComponent_Conditional_80_Template, 37, 6, "div", 19)(81, DocumentsPageComponent_Conditional_81_Template, 25, 3, "div", 19)(82, DocumentsPageComponent_Conditional_82_Template, 25, 6, "div", 19)(83, DocumentsPageComponent_Conditional_83_Template, 17, 12, "div", 19)(84, DocumentsPageComponent_Conditional_84_Template, 14, 11, "div", 19);
    }
    if (rf & 2) {
      let tmp_33_0;
      let tmp_34_0;
      let tmp_35_0;
      let tmp_36_0;
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.authService.hasPermission(ctx.P.DOC_FORCE_STATE) ? 6 : ctx.authService.hasPermission(ctx.P.DOC_DELETE) ? 7 : ctx.authService.hasPermission(ctx.P.DOC_CREATE) ? 8 : 9);
      \u0275\u0275advance(5);
      \u0275\u0275property("hasPermission", ctx.P.DOC_CREATE);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.idFilterSig());
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.statusFilterSig());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.STATUS_OPTIONS);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.nameFilterSig());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loadError() ? 29 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("active", ctx.isSortActive("id"))("inactive", !ctx.isSortActive("id"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.sortIndicator("id"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.isSortActive("name"))("inactive", !ctx.isSortActive("name"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.sortIndicator("name"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.isSortActive("status"))("inactive", !ctx.isSortActive("status"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.sortIndicator("status"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.isSortActive("type"))("inactive", !ctx.isSortActive("type"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.sortIndicator("type"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.isSortActive("org"))("inactive", !ctx.isSortActive("org"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.sortIndicator("org"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.isSortActive("owner"))("inactive", !ctx.isSortActive("owner"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.sortIndicator("owner"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.isSortActive("expiration"))("inactive", !ctx.isSortActive("expiration"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.sortIndicator("expiration"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.isSortActive("versions"))("inactive", !ctx.isSortActive("versions"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.sortIndicator("versions"));
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.filteredDocs());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.modalCreate() ? 80 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_33_0 = ctx.modalForceState()) ? 81 : -1, tmp_33_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_34_0 = ctx.versionsModalDoc()) ? 82 : -1, tmp_34_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_35_0 = ctx.confirmReq()) ? 83 : -1, tmp_35_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_36_0 = ctx.notice()) ? 84 : -1, tmp_36_0);
    }
  }, dependencies: [CommonModule, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, HasPermissionDirective], styles: ['\n\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.65rem;\n  font-weight: 700;\n  margin: 0;\n  letter-spacing: -0.02em;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-800) 0%,\n      var(--primary-500) 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.page-sub[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: var(--gray-600);\n  font-size: 0.9rem;\n  max-width: 720px;\n  line-height: 1.45;\n}\n.page-sub[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  background: var(--gray-100);\n  padding: 0.1rem 0.3rem;\n  border-radius: 4px;\n}\n.toolbar[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.filter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  font-size: 0.8rem;\n  color: var(--gray-600);\n}\n.filter--grow[_ngcontent-%COMP%] {\n  flex: 0 1 320px;\n  min-width: 200px;\n}\n.filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.6rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  background: white;\n}\n.filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n  min-width: 120px;\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.status-pill--active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5 0%,\n      #a7f3d0 100%);\n  color: #065f46;\n  border: 1px solid rgba(16, 185, 129, 0.45);\n}\n.status-pill--inactive[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  color: #ffffff;\n  border: 1px solid #b91c1c;\n  box-shadow: 0 1px 2px rgba(220, 38, 38, 0.25);\n  text-transform: uppercase;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border-radius: var(--radius-lg);\n  border: 1px solid rgba(59, 130, 246, 0.18);\n  overflow: auto;\n  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.06);\n}\n.table-wrap.inner[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8125rem;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.85rem;\n  text-align: left;\n  border-bottom: 1px solid rgba(226, 232, 240, 0.9);\n  vertical-align: middle;\n}\nth[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #eff6ff 0%,\n      #e0e7ff 100%);\n  font-weight: 700;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--primary-900);\n}\n.sortable-header[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: color 0.2s ease;\n}\n.sortable-header[_ngcontent-%COMP%]:hover {\n  color: var(--primary-600);\n}\n.sort-icon[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.sort-icon.active[_ngcontent-%COMP%] {\n  color: var(--primary-600);\n}\n.sort-icon.inactive[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  font-size: 0.85rem;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 246, 255, 0.65);\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  box-shadow: inset 4px 0 0 0 #dc2626;\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%]:hover {\n  background-color: #fecaca;\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #991b1b;\n  font-weight: 500;\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\ntbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.18);\n}\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 38px;\n  height: 22px;\n  margin-right: 0.25rem;\n  flex-shrink: 0;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #10b981;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]::before {\n  transform: translateX(16px);\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .slider[_ngcontent-%COMP%] {\n  background-color: #fca5a5;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    + .slider[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  inset: 0;\n  background-color: #cbd5e1;\n  transition: 0.3s;\n}\n.slider[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: "";\n  height: 16px;\n  width: 16px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.3s;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.slider.round[_ngcontent-%COMP%] {\n  border-radius: 34px;\n}\n.slider.round[_ngcontent-%COMP%]::before {\n  border-radius: 50%;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  white-space: nowrap;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--gray-500);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.35rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  color: var(--primary-600);\n  background: rgba(37, 99, 235, 0.1);\n}\n.icon-btn.warn[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n  background: #fee2e2;\n}\n.icon-btn--success[_ngcontent-%COMP%] {\n  color: #047857;\n}\n.icon-btn--success[_ngcontent-%COMP%]:hover {\n  color: #065f46;\n  background: rgba(16, 185, 129, 0.12);\n}\n.icon-btn--muted[_ngcontent-%COMP%] {\n  color: var(--gray-300);\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n.icon-btn--muted[_ngcontent-%COMP%]:hover {\n  color: var(--gray-300);\n  background: transparent;\n}\n.btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--primary-600);\n  cursor: pointer;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  transition: all 0.15s ease;\n}\n.btn-link[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.08);\n  color: var(--primary-700);\n}\n.btn-link.danger[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.btn-link.danger[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.08);\n  color: #991b1b;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  border: 1px solid var(--gray-300);\n  background: white;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  height: fit-content;\n  transition: all 0.15s ease;\n}\n.btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--gray-50);\n  border-color: var(--gray-400);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-600),\n      var(--primary-700));\n  color: white;\n  border-color: var(--primary-600);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.25);\n}\n.btn.primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-700),\n      var(--primary-800));\n}\n.btn.danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626,\n      #b91c1c);\n  color: white;\n  border-color: #b91c1c;\n  box-shadow: 0 2px 8px rgba(220, 38, 38, 0.25);\n}\n.btn.danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #b91c1c,\n      #991b1b);\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n  padding: 1rem;\n  animation: _ngcontent-%COMP%_admin-backdrop-in 0.18s ease-out;\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 14px;\n  padding: 1.5rem;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);\n  animation: _ngcontent-%COMP%_admin-modal-in 0.22s ease-out;\n  max-height: calc(100vh - 2rem);\n  overflow-y: auto;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  max-width: 520px;\n}\n.modal--xwide[_ngcontent-%COMP%] {\n  max-width: 720px;\n}\n.modal[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin-bottom: 0.35rem;\n  color: var(--gray-700);\n}\n.modal[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], \n.modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type]), \n.modal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  margin-bottom: 1rem;\n  font-size: 0.875rem;\n  background: white;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.modal[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:focus, \n.modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type]):focus, \n.modal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.modal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 1rem;\n}\n.form-grid[_ngcontent-%COMP%]   .form-grid__full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n@media (max-width: 640px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.modal__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.modal__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.modal__icon--info[_ngcontent-%COMP%] {\n  background: var(--primary-100);\n  color: var(--primary-700);\n}\n.modal__icon--success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.modal__icon--warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.modal__icon--error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.modal__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  letter-spacing: -0.01em;\n}\n.modal__message[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem;\n  font-size: 0.9rem;\n  color: var(--gray-700);\n  line-height: 1.55;\n}\n.modal__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--gray-600);\n  margin: 0 0 1rem;\n}\n.modal__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.err[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  font-size: 0.875rem;\n  margin: 0 0 1rem;\n}\n@keyframes _ngcontent-%COMP%_admin-backdrop-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_admin-modal-in {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.doc-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.2rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  border: 1px solid transparent;\n}\n.doc-status--active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5 0%,\n      #a7f3d0 100%);\n  color: #065f46;\n  border-color: rgba(16, 185, 129, 0.45);\n}\n.doc-status--expiring[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  color: #92400e;\n  border-color: rgba(245, 158, 11, 0.45);\n}\n.doc-status--expired[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fee2e2 0%,\n      #fecaca 100%);\n  color: #991b1b;\n  border-color: rgba(239, 68, 68, 0.45);\n}\n.doc-status--archived[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e2e8f0 0%,\n      #cbd5e1 100%);\n  color: #334155;\n  border-color: rgba(100, 116, 139, 0.45);\n}\n.doc-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.85rem;\n  margin-bottom: 1.25rem;\n}\n.doc-form__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  font-size: 0.8rem;\n  color: var(--gray-700);\n  font-weight: 600;\n}\n.doc-form__field--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.doc-form__field[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], \n.doc-form__field[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], \n.doc-form__field[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], \n.doc-form__field[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], \n.doc-form__field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.55rem 0.7rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 400;\n  color: var(--gray-900);\n  background: white;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.doc-form__field[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, \n.doc-form__field[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:focus, \n.doc-form__field[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]:focus, \n.doc-form__field[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:focus, \n.doc-form__field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.doc-form__field[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  padding: 0.45rem;\n  border: 1px dashed var(--gray-300);\n  border-radius: 6px;\n  background: var(--gray-50);\n  font-size: 0.8125rem;\n  cursor: pointer;\n}\n.doc-form__file-info[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--gray-600);\n  font-weight: 500;\n  margin-top: 0.15rem;\n}\n@media (max-width: 540px) {\n  .doc-form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.version-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1.5rem 0;\n  color: var(--gray-500);\n}\n.version-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0 0 1rem;\n  padding: 0;\n  border: 1px solid var(--gray-200);\n  border-radius: 8px;\n  max-height: 320px;\n  overflow-y: auto;\n  background: var(--gray-50);\n}\n.version-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.65rem 0.85rem;\n  border-bottom: 1px solid var(--gray-200);\n}\n.version-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.version-item__main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.version-item__number[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  background: var(--primary-100);\n  color: var(--primary-700);\n  font-weight: 700;\n  padding: 0.25rem 0.55rem;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  letter-spacing: 0.02em;\n}\n.version-item__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.version-item__meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--gray-800);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.version-item__sub[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--gray-500);\n  margin-top: 0.1rem;\n}\n.version-item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  flex-shrink: 0;\n}\n.version-upload[_ngcontent-%COMP%] {\n  border-top: 1px dashed var(--gray-300);\n  padding-top: 1rem;\n  margin-top: 0.5rem;\n}\n.version-limit-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 0.85rem 1rem;\n  background: #fef3c7;\n  border: 1px solid #fbbf24;\n  color: #78350f;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  line-height: 1.4;\n  margin-top: 0.5rem;\n}\n.version-limit-alert[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #d97706;\n  margin-top: 0.1rem;\n}\n.version-limit-alert[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #78350f;\n  margin-bottom: 0.15rem;\n}\n/*# sourceMappingURL=documents-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentsPageComponent, [{
    type: Component,
    args: [{ selector: "app-documents-page", standalone: true, imports: [CommonModule, FormsModule, HasPermissionDirective], template: `<div class="page">\r
  <div class="page-head">\r
    <div>\r
      <h1 class="page-title">Documentos</h1>\r
      <p class="page-sub">\r
        @if (authService.hasPermission(P.DOC_FORCE_STATE)) {\r
          Vista global con todas las acciones administrativas habilitadas.\r
        } @else if (authService.hasPermission(P.DOC_DELETE)) {\r
          Puedes crear y eliminar documentos de tu organizacion.\r
        } @else if (authService.hasPermission(P.DOC_CREATE)) {\r
          Puedes ver y crear documentos.\r
        } @else {\r
          Vista de solo lectura.\r
        }\r
      </p>\r
    </div>\r
\r
    <div class="head-actions">\r
      <button\r
        *hasPermission="P.DOC_CREATE"\r
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
        placeholder="ej. 12"\r
      />\r
    </label>\r
\r
    <label class="filter">\r
      <span>Estado</span>\r
      <select\r
        [ngModel]="statusFilterSig()"\r
        (ngModelChange)="statusFilterSig.set($event)"\r
      >\r
        <option value="all">Todos</option>\r
        @for (s of STATUS_OPTIONS; track s) {\r
          <option [value]="s">{{ s }}</option>\r
        }\r
      </select>\r
    </label>\r
\r
    <label class="filter filter--grow">\r
      <span>Buscar por nombre</span>\r
      <input\r
        type="search"\r
        [ngModel]="nameFilterSig()"\r
        (ngModelChange)="nameFilterSig.set($event)"\r
        placeholder="Contrato, factura..."\r
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
          <th>\r
            <span class="sortable-header" (click)="setSort('id')">\r
              ID\r
              <span class="sort-icon"\r
                [class.active]="isSortActive('id')"\r
                [class.inactive]="!isSortActive('id')"\r
              >{{ sortIndicator('id') }}</span>\r
            </span>\r
          </th>\r
          <th>\r
            <span class="sortable-header" (click)="setSort('name')">\r
              Nombre\r
              <span class="sort-icon"\r
                [class.active]="isSortActive('name')"\r
                [class.inactive]="!isSortActive('name')"\r
              >{{ sortIndicator('name') }}</span>\r
            </span>\r
          </th>\r
          <th>\r
            <span class="sortable-header" (click)="setSort('status')">\r
              Estado\r
              <span class="sort-icon"\r
                [class.active]="isSortActive('status')"\r
                [class.inactive]="!isSortActive('status')"\r
              >{{ sortIndicator('status') }}</span>\r
            </span>\r
          </th>\r
          <th>\r
            <span class="sortable-header" (click)="setSort('type')">\r
              Tipo\r
              <span class="sort-icon"\r
                [class.active]="isSortActive('type')"\r
                [class.inactive]="!isSortActive('type')"\r
              >{{ sortIndicator('type') }}</span>\r
            </span>\r
          </th>\r
          <th>\r
            <span class="sortable-header" (click)="setSort('org')">\r
              Organizacion\r
              <span class="sort-icon"\r
                [class.active]="isSortActive('org')"\r
                [class.inactive]="!isSortActive('org')"\r
              >{{ sortIndicator('org') }}</span>\r
            </span>\r
          </th>\r
          <th>\r
            <span class="sortable-header" (click)="setSort('owner')"\r
              title="Usuario que subio el documento">\r
              Subido por\r
              <span class="sort-icon"\r
                [class.active]="isSortActive('owner')"\r
                [class.inactive]="!isSortActive('owner')"\r
              >{{ sortIndicator('owner') }}</span>\r
            </span>\r
          </th>\r
          <th>\r
            <span class="sortable-header" (click)="setSort('expiration')">\r
              Vence\r
              <span class="sort-icon"\r
                [class.active]="isSortActive('expiration')"\r
                [class.inactive]="!isSortActive('expiration')"\r
              >{{ sortIndicator('expiration') }}</span>\r
            </span>\r
          </th>\r
          <th>\r
            <span class="sortable-header" (click)="setSort('versions')">\r
              Versiones\r
              <span class="sort-icon"\r
                [class.active]="isSortActive('versions')"\r
                [class.inactive]="!isSortActive('versions')"\r
              >{{ sortIndicator('versions') }}</span>\r
            </span>\r
          </th>\r
          <th>Acciones</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        @for (d of filteredDocs(); track d.id) {\r
          <tr>\r
            <td>{{ d.id }}</td>\r
            <td>{{ d.name }}</td>\r
            <td>\r
              <span\r
                class="doc-status"\r
                [class.doc-status--active]="d.status === 'ACTIVE'"\r
                [class.doc-status--expiring]="d.status === 'EXPIRING'"\r
                [class.doc-status--expired]="d.status === 'EXPIRED'"\r
                [class.doc-status--archived]="d.status === 'ARCHIVED'"\r
              >{{ d.status }}</span>\r
            </td>\r
            <td>{{ typeLabel(d) }}</td>\r
            <td>{{ orgLabel(d) }}</td>\r
            <td>{{ ownerLabel(d) }}</td>\r
            <td>{{ d.expirationDate || '\u2014' }}</td>\r
            <td>{{ versionsSummary(d) }}</td>\r
            <td class="actions">\r
              <!-- Visualizar / descargar archivo -->\r
              <button\r
                type="button"\r
                class="icon-btn"\r
                (click)="viewDocument(d)"\r
                [title]="(d.versions.length === 0) ? 'Sin archivos' : 'Ver/descargar archivo'"\r
                [disabled]="d.versions.length === 0"\r
              >\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"\r
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                  width="18" height="18" aria-hidden="true">\r
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />\r
                  <circle cx="12" cy="12" r="3" />\r
                </svg>\r
              </button>\r
\r
              <!-- Historial de versiones + subida de nueva version (todos los roles) -->\r
              <button\r
                type="button"\r
                class="icon-btn"\r
                (click)="openVersionsModal(d)"\r
                title="Ver historial de versiones / subir nueva version"\r
                aria-label="Ver historial de versiones"\r
              >\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"\r
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                  width="18" height="18" aria-hidden="true">\r
                  <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />\r
                  <polyline points="3 3 3 8 8 8" />\r
                  <polyline points="12 7 12 12 15 14" />\r
                </svg>\r
              </button>\r
\r
              <!-- Forzar estado (admin) -->\r
              <button\r
                *hasPermission="P.DOC_FORCE_STATE"\r
                type="button"\r
                class="icon-btn"\r
                (click)="openForceState(d)"\r
                title="Forzar estado"\r
              >\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"\r
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                  width="18" height="18" aria-hidden="true">\r
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />\r
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />\r
                </svg>\r
              </button>\r
\r
              <!-- Eliminar -->\r
              <button\r
                *hasPermission="P.DOC_DELETE"\r
                type="button"\r
                class="icon-btn warn"\r
                (click)="confirmDelete(d)"\r
                title="Eliminar documento"\r
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
          <tr>\r
            <td colspan="9">\r
              @if (loading()) {\r
                Cargando documentos...\r
              } @else if (docs().length === 0) {\r
                Sin documentos. Crea uno con "Nuevo documento" si tienes permiso.\r
              } @else {\r
                Ningun documento coincide con los filtros.\r
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
<!-- Create modal                                                        -->\r
<!-- =================================================================== -->\r
@if (modalCreate()) {\r
  <div class="modal-backdrop" (click)="closeCreate()" role="presentation">\r
    <div\r
      class="modal modal--wide"\r
      role="dialog"\r
      aria-modal="true"\r
      aria-labelledby="doc-create-title"\r
      (click)="$event.stopPropagation()"\r
    >\r
      <div class="modal__header">\r
        <div class="modal__icon modal__icon--info" aria-hidden="true">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\r
            stroke-linecap="round" stroke-linejoin="round">\r
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />\r
            <polyline points="14 2 14 8 20 8" />\r
            <line x1="12" y1="18" x2="12" y2="12" />\r
            <line x1="9" y1="15" x2="15" y2="15" />\r
          </svg>\r
        </div>\r
        <h2 id="doc-create-title" class="modal__title">Nuevo documento</h2>\r
      </div>\r
\r
      <div class="doc-form">\r
        <label class="doc-form__field doc-form__field--full">\r
          <span>Nombre</span>\r
          <input\r
            type="text"\r
            [(ngModel)]="form.name"\r
            placeholder="Contrato Acme - 2026"\r
            autocomplete="off"\r
          />\r
        </label>\r
\r
        <label class="doc-form__field">\r
          <span>Tipo</span>\r
          <select [(ngModel)]="form.documentTypeId" name="documentTypeId">\r
            @for (t of documentTypeOptions(); track t.id) {\r
              <option [ngValue]="t.id">{{ t.name }}</option>\r
            }\r
          </select>\r
        </label>\r
\r
        <label class="doc-form__field">\r
          <span>Fecha de expiracion</span>\r
          <input type="date" [(ngModel)]="form.expirationDate" />\r
        </label>\r
\r
        <label class="doc-form__field doc-form__field--full">\r
          <span>Archivo</span>\r
          <input type="file" (change)="onFileSelected($event)" />\r
          @if (form.file) {\r
            <span class="doc-form__file-info">\r
              {{ form.file.name }} \xB7 {{ (form.file.size / 1024) | number: '1.0-1' }} KB\r
            </span>\r
          }\r
        </label>\r
      </div>\r
\r
      <div class="modal__actions">\r
        <button type="button" class="btn" (click)="closeCreate()">Cancelar</button>\r
        <button\r
          type="button"\r
          class="btn primary"\r
          (click)="submitCreate()"\r
          [disabled]="!canSubmitCreate()"\r
        >\r
          @if (loading()) { Subiendo... } @else { Guardar }\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<!-- =================================================================== -->\r
<!-- Force state modal                                                   -->\r
<!-- =================================================================== -->\r
@if (modalForceState(); as d) {\r
  <div class="modal-backdrop" (click)="closeForceState()" role="presentation">\r
    <div\r
      class="modal"\r
      role="dialog"\r
      aria-modal="true"\r
      aria-labelledby="doc-state-title"\r
      (click)="$event.stopPropagation()"\r
    >\r
      <div class="modal__header">\r
        <div class="modal__icon modal__icon--warning" aria-hidden="true">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\r
            stroke-linecap="round" stroke-linejoin="round">\r
            <circle cx="12" cy="12" r="10" />\r
            <polyline points="12 6 12 12 16 14" />\r
          </svg>\r
        </div>\r
        <h2 id="doc-state-title" class="modal__title">Forzar estado</h2>\r
      </div>\r
\r
      <p class="modal__hint">\r
        Cambia manualmente el estado de <strong>{{ d.name }}</strong>. Solo administradores.\r
      </p>\r
\r
      <label class="doc-form__field">\r
        <span>Estado</span>\r
        <select\r
          [ngModel]="forceStateValue()"\r
          (ngModelChange)="forceStateValue.set($event)"\r
        >\r
          @for (s of STATUS_OPTIONS; track s) {\r
            <option [value]="s">{{ s }}</option>\r
          }\r
        </select>\r
      </label>\r
\r
      <div class="modal__actions">\r
        <button type="button" class="btn" (click)="closeForceState()">Cancelar</button>\r
        <button\r
          type="button"\r
          class="btn primary"\r
          (click)="submitForceState()"\r
          [disabled]="loading()"\r
        >\r
          Aplicar\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<!-- =================================================================== -->\r
<!-- Versions modal: historial + descarga por version + subir nueva       -->\r
<!-- =================================================================== -->\r
@if (versionsModalDoc(); as vd) {\r
  <div class="modal-backdrop" (click)="closeVersionsModal()" role="presentation">\r
    <div\r
      class="modal modal--xwide"\r
      role="dialog"\r
      aria-modal="true"\r
      aria-labelledby="doc-versions-title"\r
      (click)="$event.stopPropagation()"\r
    >\r
      <div class="modal__header">\r
        <div class="modal__icon modal__icon--info" aria-hidden="true">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\r
            stroke-linecap="round" stroke-linejoin="round">\r
            <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />\r
            <polyline points="3 3 3 8 8 8" />\r
            <polyline points="12 7 12 12 15 14" />\r
          </svg>\r
        </div>\r
        <h2 id="doc-versions-title" class="modal__title">\r
          Historial de "{{ vd.name }}"\r
        </h2>\r
      </div>\r
\r
      <p class="modal__hint">\r
        Cada vez que subes un archivo nuevo se guarda como una version. Se permiten\r
        hasta <strong>{{ MAX_VERSIONS }}</strong> versiones por documento.\r
      </p>\r
\r
      <!-- Listado de versiones -->\r
      @if (vd.versions.length === 0) {\r
        <p class="modal__hint version-empty">Aun no hay archivos para este documento.</p>\r
      } @else {\r
        <ul class="version-list">\r
          @for (v of sortedVersions(vd); track v.id) {\r
            <li class="version-item">\r
              <div class="version-item__main">\r
                <span class="version-item__number">v{{ v.versionNumber }}</span>\r
                <div class="version-item__meta">\r
                  <strong>{{ versionUploaderLabel(v) }}</strong>\r
                  <span class="version-item__sub">\r
                    {{ v.createdAt || '\u2014' }} \xB7 {{ formatSize(v.fileSize) }}\r
                  </span>\r
                </div>\r
              </div>\r
              <div class="version-item__actions">\r
                <button\r
                  type="button"\r
                  class="icon-btn"\r
                  (click)="downloadVersion(v)"\r
                  title="Descargar / visualizar esta version"\r
                  aria-label="Descargar version"\r
                  [disabled]="v.id == null"\r
                >\r
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"\r
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                    width="18" height="18" aria-hidden="true">\r
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />\r
                    <polyline points="7 10 12 15 17 10" />\r
                    <line x1="12" y1="15" x2="12" y2="3" />\r
                  </svg>\r
                </button>\r
                <button\r
                  type="button"\r
                  class="icon-btn warn"\r
                  (click)="confirmDeleteVersion(v)"\r
                  title="Eliminar esta version"\r
                  aria-label="Eliminar version"\r
                  [disabled]="v.id == null"\r
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
              </div>\r
            </li>\r
          }\r
        </ul>\r
      }\r
\r
      <!-- Subida de una nueva version: si ya hay MAX_VERSIONS, mostramos un aviso\r
           explicito y deshabilitamos el formulario para que el usuario sepa que tiene\r
           que eliminar una version antes de poder subir otra. -->\r
      @if (versionLimitReached(vd)) {\r
        <div class="version-limit-alert" role="alert">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\r
            stroke-linecap="round" stroke-linejoin="round" width="20" height="20"\r
            aria-hidden="true">\r
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />\r
            <line x1="12" y1="9" x2="12" y2="13" />\r
            <line x1="12" y1="17" x2="12.01" y2="17" />\r
          </svg>\r
          <div>\r
            <strong>Limite alcanzado.</strong>\r
            Este documento ya tiene {{ MAX_VERSIONS }} versiones, que es el maximo\r
            permitido. Para subir una nueva version elimina una version anterior primero.\r
          </div>\r
        </div>\r
      } @else {\r
        <div class="version-upload">\r
          <label class="doc-form__field doc-form__field--full">\r
            <span>Subir nueva version</span>\r
            <input type="file" (change)="onVersionFileSelected($event)" />\r
            @if (versionsUploadFile(); as f) {\r
              <span class="doc-form__file-info">\r
                {{ f.name }} \xB7 {{ (f.size / 1024) | number: '1.0-1' }} KB\r
              </span>\r
            }\r
          </label>\r
        </div>\r
      }\r
\r
      <div class="modal__actions">\r
        <button type="button" class="btn" (click)="closeVersionsModal()">Cerrar</button>\r
        <button\r
          type="button"\r
          class="btn primary"\r
          (click)="submitNewVersion()"\r
          [disabled]="!versionsUploadFile() || versionsUploadLoading() || versionLimitReached(vd)"\r
        >\r
          @if (versionsUploadLoading()) { Subiendo... } @else { Subir version }\r
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
      aria-labelledby="doc-confirm-title"\r
      aria-describedby="doc-confirm-message"\r
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
        <h2 id="doc-confirm-title" class="modal__title">{{ cfg.title }}</h2>\r
      </div>\r
\r
      <p id="doc-confirm-message" class="modal__message">{{ cfg.message }}</p>\r
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
      aria-labelledby="doc-notice-title"\r
      aria-describedby="doc-notice-message"\r
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
        <h2 id="doc-notice-title" class="modal__title">{{ n.title }}</h2>\r
      </div>\r
\r
      <p id="doc-notice-message" class="modal__message">{{ n.message }}</p>\r
\r
      <div class="modal__actions">\r
        <button type="button" class="btn primary" (click)="closeNotice()">Entendido</button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
`, styles: ['/* src/app/features/dashboard/pages/documents-page/documents-page.component.scss */\n.page-head {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.page-title {\n  font-size: 1.65rem;\n  font-weight: 700;\n  margin: 0;\n  letter-spacing: -0.02em;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-800) 0%,\n      var(--primary-500) 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.page-sub {\n  margin: 0.35rem 0 0;\n  color: var(--gray-600);\n  font-size: 0.9rem;\n  max-width: 720px;\n  line-height: 1.45;\n}\n.page-sub code {\n  font-size: 0.75rem;\n  background: var(--gray-100);\n  padding: 0.1rem 0.3rem;\n  border-radius: 4px;\n}\n.toolbar {\n  margin-bottom: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.filter {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  font-size: 0.8rem;\n  color: var(--gray-600);\n}\n.filter--grow {\n  flex: 0 1 320px;\n  min-width: 200px;\n}\n.filter input,\n.filter select {\n  padding: 0.45rem 0.6rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  background: white;\n}\n.filter select {\n  cursor: pointer;\n  min-width: 120px;\n}\n.status-pill {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.status-pill--active {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5 0%,\n      #a7f3d0 100%);\n  color: #065f46;\n  border: 1px solid rgba(16, 185, 129, 0.45);\n}\n.status-pill--inactive {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  color: #ffffff;\n  border: 1px solid #b91c1c;\n  box-shadow: 0 1px 2px rgba(220, 38, 38, 0.25);\n  text-transform: uppercase;\n}\n.table-wrap {\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border-radius: var(--radius-lg);\n  border: 1px solid rgba(59, 130, 246, 0.18);\n  overflow: auto;\n  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.06);\n}\n.table-wrap.inner {\n  margin-bottom: 0;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8125rem;\n}\nth,\ntd {\n  padding: 0.65rem 0.85rem;\n  text-align: left;\n  border-bottom: 1px solid rgba(226, 232, 240, 0.9);\n  vertical-align: middle;\n}\nth {\n  background:\n    linear-gradient(\n      180deg,\n      #eff6ff 0%,\n      #e0e7ff 100%);\n  font-weight: 700;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--primary-900);\n}\n.sortable-header {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: color 0.2s ease;\n}\n.sortable-header:hover {\n  color: var(--primary-600);\n}\n.sort-icon {\n  font-size: 0.7rem;\n}\n.sort-icon.active {\n  color: var(--primary-600);\n}\n.sort-icon.inactive {\n  opacity: 0.3;\n  font-size: 0.85rem;\n}\ntbody tr:hover {\n  background: rgba(239, 246, 255, 0.65);\n}\ntbody tr.row-inactive {\n  background-color: #fee2e2;\n  box-shadow: inset 4px 0 0 0 #dc2626;\n}\ntbody tr.row-inactive:hover {\n  background-color: #fecaca;\n}\ntbody tr.row-inactive td {\n  color: #991b1b;\n  font-weight: 500;\n}\ntbody tr.row-inactive .icon-btn {\n  color: #b91c1c;\n}\ntbody tr.row-inactive .icon-btn:hover {\n  background: rgba(220, 38, 38, 0.18);\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 38px;\n  height: 22px;\n  margin-right: 0.25rem;\n  flex-shrink: 0;\n}\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.switch input:checked + .slider {\n  background-color: #10b981;\n}\n.switch input:checked + .slider::before {\n  transform: translateX(16px);\n}\n.switch input:not(:checked) + .slider {\n  background-color: #fca5a5;\n}\n.switch input:disabled + .slider {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  inset: 0;\n  background-color: #cbd5e1;\n  transition: 0.3s;\n}\n.slider::before {\n  position: absolute;\n  content: "";\n  height: 16px;\n  width: 16px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.3s;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.slider.round {\n  border-radius: 34px;\n}\n.slider.round::before {\n  border-radius: 50%;\n}\n.actions {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  white-space: nowrap;\n}\n.icon-btn {\n  background: none;\n  border: none;\n  color: var(--gray-500);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.35rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.icon-btn:hover {\n  color: var(--primary-600);\n  background: rgba(37, 99, 235, 0.1);\n}\n.icon-btn.warn:hover {\n  color: #dc2626;\n  background: #fee2e2;\n}\n.icon-btn--success {\n  color: #047857;\n}\n.icon-btn--success:hover {\n  color: #065f46;\n  background: rgba(16, 185, 129, 0.12);\n}\n.icon-btn--muted {\n  color: var(--gray-300);\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n.icon-btn--muted:hover {\n  color: var(--gray-300);\n  background: transparent;\n}\n.btn-link {\n  background: none;\n  border: none;\n  color: var(--primary-600);\n  cursor: pointer;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  transition: all 0.15s ease;\n}\n.btn-link:hover {\n  background: rgba(37, 99, 235, 0.08);\n  color: var(--primary-700);\n}\n.btn-link.danger {\n  color: #b91c1c;\n}\n.btn-link.danger:hover {\n  background: rgba(220, 38, 38, 0.08);\n  color: #991b1b;\n}\n.btn {\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  border: 1px solid var(--gray-300);\n  background: white;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  height: fit-content;\n  transition: all 0.15s ease;\n}\n.btn:hover:not(:disabled) {\n  background: var(--gray-50);\n  border-color: var(--gray-400);\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.primary {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-600),\n      var(--primary-700));\n  color: white;\n  border-color: var(--primary-600);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.25);\n}\n.btn.primary:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-700),\n      var(--primary-800));\n}\n.btn.danger {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626,\n      #b91c1c);\n  color: white;\n  border-color: #b91c1c;\n  box-shadow: 0 2px 8px rgba(220, 38, 38, 0.25);\n}\n.btn.danger:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #b91c1c,\n      #991b1b);\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n  padding: 1rem;\n  animation: admin-backdrop-in 0.18s ease-out;\n}\n.modal {\n  background: white;\n  border-radius: 14px;\n  padding: 1.5rem;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);\n  animation: admin-modal-in 0.22s ease-out;\n  max-height: calc(100vh - 2rem);\n  overflow-y: auto;\n}\n.modal--wide {\n  max-width: 520px;\n}\n.modal--xwide {\n  max-width: 720px;\n}\n.modal label {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin-bottom: 0.35rem;\n  color: var(--gray-700);\n}\n.modal input[type=text],\n.modal input[type=email],\n.modal input[type=password],\n.modal input[type=search],\n.modal input[type=number],\n.modal input:not([type]),\n.modal select {\n  width: 100%;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  margin-bottom: 1rem;\n  font-size: 0.875rem;\n  background: white;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.modal input[type=text]:focus,\n.modal input[type=email]:focus,\n.modal input[type=password]:focus,\n.modal input[type=search]:focus,\n.modal input[type=number]:focus,\n.modal input:not([type]):focus,\n.modal select:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.modal select {\n  cursor: pointer;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 1rem;\n}\n.form-grid .form-grid__full {\n  grid-column: 1/-1;\n}\n@media (max-width: 640px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.modal__header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.modal__icon {\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal__icon svg {\n  width: 22px;\n  height: 22px;\n}\n.modal__icon--info {\n  background: var(--primary-100);\n  color: var(--primary-700);\n}\n.modal__icon--success {\n  background: #d1fae5;\n  color: #065f46;\n}\n.modal__icon--warning {\n  background: #fef3c7;\n  color: #92400e;\n}\n.modal__icon--error {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.modal__title {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  letter-spacing: -0.01em;\n}\n.modal__message {\n  margin: 0 0 1.25rem;\n  font-size: 0.9rem;\n  color: var(--gray-700);\n  line-height: 1.55;\n}\n.modal__hint {\n  font-size: 0.8125rem;\n  color: var(--gray-600);\n  margin: 0 0 1rem;\n}\n.modal__actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.err {\n  color: #b91c1c;\n  font-size: 0.875rem;\n  margin: 0 0 1rem;\n}\n@keyframes admin-backdrop-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes admin-modal-in {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.head-actions {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.doc-status {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.2rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  border: 1px solid transparent;\n}\n.doc-status--active {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5 0%,\n      #a7f3d0 100%);\n  color: #065f46;\n  border-color: rgba(16, 185, 129, 0.45);\n}\n.doc-status--expiring {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  color: #92400e;\n  border-color: rgba(245, 158, 11, 0.45);\n}\n.doc-status--expired {\n  background:\n    linear-gradient(\n      135deg,\n      #fee2e2 0%,\n      #fecaca 100%);\n  color: #991b1b;\n  border-color: rgba(239, 68, 68, 0.45);\n}\n.doc-status--archived {\n  background:\n    linear-gradient(\n      135deg,\n      #e2e8f0 0%,\n      #cbd5e1 100%);\n  color: #334155;\n  border-color: rgba(100, 116, 139, 0.45);\n}\n.doc-form {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.85rem;\n  margin-bottom: 1.25rem;\n}\n.doc-form__field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  font-size: 0.8rem;\n  color: var(--gray-700);\n  font-weight: 600;\n}\n.doc-form__field--full {\n  grid-column: 1/-1;\n}\n.doc-form__field input[type=text],\n.doc-form__field input[type=number],\n.doc-form__field input[type=date],\n.doc-form__field input[type=email],\n.doc-form__field select {\n  padding: 0.55rem 0.7rem;\n  border: 1px solid var(--gray-300);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 400;\n  color: var(--gray-900);\n  background: white;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.doc-form__field input[type=text]:focus,\n.doc-form__field input[type=number]:focus,\n.doc-form__field input[type=date]:focus,\n.doc-form__field input[type=email]:focus,\n.doc-form__field select:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.doc-form__field input[type=file] {\n  padding: 0.45rem;\n  border: 1px dashed var(--gray-300);\n  border-radius: 6px;\n  background: var(--gray-50);\n  font-size: 0.8125rem;\n  cursor: pointer;\n}\n.doc-form__file-info {\n  font-size: 0.75rem;\n  color: var(--gray-600);\n  font-weight: 500;\n  margin-top: 0.15rem;\n}\n@media (max-width: 540px) {\n  .doc-form {\n    grid-template-columns: 1fr;\n  }\n}\n.version-empty {\n  text-align: center;\n  padding: 1.5rem 0;\n  color: var(--gray-500);\n}\n.version-list {\n  list-style: none;\n  margin: 0 0 1rem;\n  padding: 0;\n  border: 1px solid var(--gray-200);\n  border-radius: 8px;\n  max-height: 320px;\n  overflow-y: auto;\n  background: var(--gray-50);\n}\n.version-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.65rem 0.85rem;\n  border-bottom: 1px solid var(--gray-200);\n}\n.version-item:last-child {\n  border-bottom: 0;\n}\n.version-item__main {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.version-item__number {\n  flex-shrink: 0;\n  background: var(--primary-100);\n  color: var(--primary-700);\n  font-weight: 700;\n  padding: 0.25rem 0.55rem;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  letter-spacing: 0.02em;\n}\n.version-item__meta {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.version-item__meta strong {\n  font-size: 0.85rem;\n  color: var(--gray-800);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.version-item__sub {\n  font-size: 0.72rem;\n  color: var(--gray-500);\n  margin-top: 0.1rem;\n}\n.version-item__actions {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  flex-shrink: 0;\n}\n.version-upload {\n  border-top: 1px dashed var(--gray-300);\n  padding-top: 1rem;\n  margin-top: 0.5rem;\n}\n.version-limit-alert {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 0.85rem 1rem;\n  background: #fef3c7;\n  border: 1px solid #fbbf24;\n  color: #78350f;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  line-height: 1.4;\n  margin-top: 0.5rem;\n}\n.version-limit-alert svg {\n  flex-shrink: 0;\n  color: #d97706;\n  margin-top: 0.1rem;\n}\n.version-limit-alert strong {\n  display: block;\n  color: #78350f;\n  margin-bottom: 0.15rem;\n}\n/*# sourceMappingURL=documents-page.component.css.map */\n'] }]
  }], () => [{ type: AdminApiService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentsPageComponent, { className: "DocumentsPageComponent", filePath: "src/app/features/dashboard/pages/documents-page/documents-page.component.ts", lineNumber: 91 });
})();
export {
  DocumentsPageComponent
};
//# sourceMappingURL=chunk-6OHLRRK4.js.map
