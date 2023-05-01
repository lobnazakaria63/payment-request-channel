"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["default-src_app_pages_apps_aio-table_aio-table-routing_module_ts-src_app_pages_apps_aio-table-16633c"],{

/***/ 6481:
/*!******************************************************************!*\
  !*** ./src/app/pages/apps/aio-table/aio-table-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AioTableRoutingModule": () => (/* binding */ AioTableRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 9772);
/* harmony import */ var _aio_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aio-table.component */ 1084);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: '',
  component: _aio_table_component__WEBPACK_IMPORTED_MODULE_0__.AioTableComponent,
  data: {
    toolbarShadowEnabled: false
  }
}];
class AioTableRoutingModule {}
AioTableRoutingModule.ɵfac = function AioTableRoutingModule_Factory(t) {
  return new (t || AioTableRoutingModule)();
};
AioTableRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AioTableRoutingModule
});
AioTableRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AioTableRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
  });
})();

/***/ }),

/***/ 1084:
/*!*************************************************************!*\
  !*** ./src/app/pages/apps/aio-table/aio-table.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AioTableComponent": () => (/* binding */ AioTableComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _interfaces_customer_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces/customer.model */ 8151);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _static_data_aio_table_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../static-data/aio-table-data */ 5145);
/* harmony import */ var _customer_create_update_customer_create_update_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-create-update/customer-create-update.component */ 5969);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/collections */ 1755);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@vex/animations/fade-in-up.animation */ 3848);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@vex/animations/stagger.animation */ 8535);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngneat/until-destroy */ 2777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@vex/components/page-layout/page-layout.component */ 2237);
/* harmony import */ var _vex_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@vex/components/page-layout/page-layout-header.directive */ 7087);
/* harmony import */ var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@vex/components/page-layout/page-layout-content.directive */ 9199);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../@vex/components/breadcrumbs/breadcrumbs.component */ 4076);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
var _class;
































function AioTableComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Customers");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function AioTableComponent_span_18_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function AioTableComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AioTableComponent_span_18_span_2_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r1.selection.selected.length, " Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.selection.selected.length > 1);
  }
}
function AioTableComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 44)(1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AioTableComponent_div_19_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r21.deleteCustomers(ctx_r21.selection.selected));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function AioTableComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 49)(1, "mat-checkbox", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function AioTableComponent_th_30_Template_mat_checkbox_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event ? ctx_r23.masterToggle() : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx_r3.selection.hasValue() && ctx_r3.isAllSelected())("indeterminate", ctx_r3.selection.hasValue() && !ctx_r3.isAllSelected());
  }
}
function AioTableComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 51)(1, "mat-checkbox", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function AioTableComponent_td_31_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r27);
      const row_r25 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event ? ctx_r26.selection.toggle(row_r25) : null);
    })("click", function AioTableComponent_td_31_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r25 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx_r4.selection.isSelected(row_r25));
  }
}
function AioTableComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "th", 49);
  }
}
function AioTableComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", row_r29["imageSrc"], _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function AioTableComponent_ng_container_35_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", column_r30.label, "");
  }
}
function AioTableComponent_ng_container_35_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r35 = ctx.$implicit;
    const column_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", column_r30.cssClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](row_r35[column_r30.property]);
  }
}
function AioTableComponent_ng_container_35_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AioTableComponent_ng_container_35_ng_container_1_th_1_Template, 2, 1, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AioTableComponent_ng_container_35_ng_container_1_td_2_Template, 2, 2, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matColumnDef", column_r30.property);
  }
}
function AioTableComponent_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AioTableComponent_ng_container_35_ng_container_1_Template, 3, 1, "ng-container", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", column_r30.type === "text");
  }
}
function AioTableComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "th", 60);
  }
}
function AioTableComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 61)(1, "div", 62)(2, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AioTableComponent_td_38_Template_a_click_2_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "mat-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AioTableComponent_td_38_Template_a_click_4_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "mat-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AioTableComponent_td_38_Template_a_click_6_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "mat-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
}
function AioTableComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Labels");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0, a1) {
  return [a0, a1];
};
function AioTableComponent_td_41_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const label_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](2, _c0, label_r44.textClass, label_r44.bgClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", label_r44.text, " ");
  }
}
function AioTableComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 61)(1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AioTableComponent_td_41_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AioTableComponent_td_41_div_2_Template, 2, 5, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "mat-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", row_r42.labels);
  }
}
function AioTableComponent_th_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "th", 60);
  }
}
const _c1 = function (a0) {
  return {
    customer: a0
  };
};
function AioTableComponent_td_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 74)(1, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AioTableComponent_td_44_Template_button_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "mat-icon", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matMenuTriggerData", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](2, _c1, row_r46))("matMenuTriggerFor", _r18);
  }
}
function AioTableComponent_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 77);
  }
}
function AioTableComponent_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AioTableComponent_tr_46_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r50);
      const row_r48 = restoredCtx.$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r49.updateCustomer(row_r48));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@fadeInUp", undefined);
  }
}
function AioTableComponent_button_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AioTableComponent_button_50_Template_button_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r53);
      const column_r51 = restoredCtx.$implicit;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r52.toggleColumnVisibility(column_r51, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-checkbox", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AioTableComponent_button_50_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function AioTableComponent_button_50_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r53);
      const column_r51 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](column_r51.visible = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const column_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", column_r51.visible);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", column_r51.label, " ");
  }
}
function AioTableComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AioTableComponent_ng_template_53_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r58);
      const customer_r56 = restoredCtx.customer;
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r57.updateCustomer(customer_r56));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-icon", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Modify");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AioTableComponent_ng_template_53_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r58);
      const customer_r56 = restoredCtx.customer;
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r59.deleteCustomer(customer_r56));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
const _c2 = function () {
  return ["Apps", "All-In-One Table"];
};
let AioTableComponent = (_class = class AioTableComponent {
  constructor(dialog) {
    this.dialog = dialog;
    this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormControl('boxed');
    /**
     * Simulating a service with HTTP that returns Observables
     * You probably want to remove this and do all requests in a service with HTTP
     */
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.ReplaySubject(1);
    this.data$ = this.subject$.asObservable();
    this.columns = [{
      label: 'Checkbox',
      property: 'checkbox',
      type: 'checkbox',
      visible: true
    }, {
      label: 'Image',
      property: 'image',
      type: 'image',
      visible: true
    }, {
      label: 'Name',
      property: 'name',
      type: 'text',
      visible: true,
      cssClasses: ['font-medium']
    }, {
      label: 'First Name',
      property: 'firstName',
      type: 'text',
      visible: false
    }, {
      label: 'Last Name',
      property: 'lastName',
      type: 'text',
      visible: false
    }, {
      label: 'Contact',
      property: 'contact',
      type: 'button',
      visible: true
    }, {
      label: 'Address',
      property: 'address',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    }, {
      label: 'Street',
      property: 'street',
      type: 'text',
      visible: false,
      cssClasses: ['text-secondary', 'font-medium']
    }, {
      label: 'Zipcode',
      property: 'zipcode',
      type: 'text',
      visible: false,
      cssClasses: ['text-secondary', 'font-medium']
    }, {
      label: 'City',
      property: 'city',
      type: 'text',
      visible: false,
      cssClasses: ['text-secondary', 'font-medium']
    }, {
      label: 'Phone',
      property: 'phoneNumber',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    }, {
      label: 'Labels',
      property: 'labels',
      type: 'button',
      visible: true
    }, {
      label: 'Actions',
      property: 'actions',
      type: 'button',
      visible: true
    }];
    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 20, 50];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__.SelectionModel(true, []);
    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormControl();
    this.labels = _static_data_aio_table_data__WEBPACK_IMPORTED_MODULE_1__.aioTableLabels;
  }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  /**
   * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
   * We are simulating this request here.
   */
  getData() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(_static_data_aio_table_data__WEBPACK_IMPORTED_MODULE_1__.aioTableData.map(customer => new _interfaces_customer_model__WEBPACK_IMPORTED_MODULE_0__.Customer(customer)));
  }
  ngOnInit() {
    this.getData().subscribe(customers => {
      this.subject$.next(customers);
    });
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource();
    this.data$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(Boolean)).subscribe(customers => {
      this.customers = customers;
      this.dataSource.data = customers;
    });
    this.searchCtrl.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__.untilDestroyed)(this)).subscribe(value => this.onFilterChange(value));
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  createCustomer() {
    this.dialog.open(_customer_create_update_customer_create_update_component__WEBPACK_IMPORTED_MODULE_2__.CustomerCreateUpdateComponent).afterClosed().subscribe(customer => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (customer) {
        /**
         * Here we are updating our local array.
         * You would probably make an HTTP request here.
         */
        this.customers.unshift(new _interfaces_customer_model__WEBPACK_IMPORTED_MODULE_0__.Customer(customer));
        this.subject$.next(this.customers);
      }
    });
  }
  updateCustomer(customer) {
    this.dialog.open(_customer_create_update_customer_create_update_component__WEBPACK_IMPORTED_MODULE_2__.CustomerCreateUpdateComponent, {
      data: customer
    }).afterClosed().subscribe(updatedCustomer => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (updatedCustomer) {
        /**
         * Here we are updating our local array.
         * You would probably make an HTTP request here.
         */
        const index = this.customers.findIndex(existingCustomer => existingCustomer.id === updatedCustomer.id);
        this.customers[index] = new _interfaces_customer_model__WEBPACK_IMPORTED_MODULE_0__.Customer(updatedCustomer);
        this.subject$.next(this.customers);
      }
    });
  }
  deleteCustomer(customer) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
    this.customers.splice(this.customers.findIndex(existingCustomer => existingCustomer.id === customer.id), 1);
    this.selection.deselect(customer);
    this.subject$.next(this.customers);
  }
  deleteCustomers(customers) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
    customers.forEach(c => this.deleteCustomer(c));
  }
  onFilterChange(value) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }
  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }
  trackByProperty(index, column) {
    return column.property;
  }
  onLabelChange(change, row) {
    const index = this.customers.findIndex(c => c === row);
    this.customers[index].labels = change.value;
    this.subject$.next(this.customers);
  }
}, _class.ɵfac = function AioTableComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog));
}, _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["vex-aio-table"]],
  viewQuery: function AioTableComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginator, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSort, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  inputs: {
    columns: "columns"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([{
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {
      appearance: 'fill'
    }
  }])],
  decls: 54,
  vars: 25,
  consts: [[1, "pb-16", "flex", "flex-col", "items-start", "justify-center"], [1, "w-full", "flex", "flex-col", "sm:flex-row", "justify-between"], [1, "title", "mt-0", "mb-1"], [3, "crumbs"], [1, "hidden", "sm:block"], [1, "mt-4", "sm:mt-0", 3, "formControl"], ["value", "boxed"], ["value", "fullwidth"], [1, "-mt-6"], [1, "card", "overflow-auto", "-mt-16"], [1, "bg-app-bar", "px-6", "h-16", "border-b", "sticky", "left-0", "flex", "items-center"], [1, "title", "my-0", "ltr:pr-4", "rtl:pl-4", "ltr:mr-4", "rtl:ml-4", "ltr:border-r", "rtl:border-l", "hidden", "sm:block", "flex-none"], [4, "ngIf"], ["class", "mr-4 pr-4 border-r flex-none", 4, "ngIf"], [1, "bg-foreground", "rounded-full", "border", "px-4", "max-w-[300px]", "flex-auto", "flex", "items-center", "border", "border-gray-300"], ["svgIcon", "mat:search", 1, "icon-sm", "text-secondary"], ["placeholder", "Search...", "type", "search", 1, "px-4", "py-2", "border-0", "outline-none", "w-full", "bg-transparent", 3, "formControl"], [1, "flex-1"], ["mat-icon-button", "", "matTooltip", "Filter Columns", "type", "button", 1, "ml-4", "flex-none", 3, "matMenuTriggerFor"], ["svgIcon", "mat:filter_list"], ["color", "primary", "mat-mini-fab", "", "matTooltip", "Add Customer", "type", "button", 1, "ml-4", "flex-none", 3, "click"], ["svgIcon", "mat:add"], ["mat-table", "", "matSort", "", 1, "w-full", 3, "dataSource"], ["matColumnDef", "checkbox"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "w-4", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "image"], ["class", "w-8 min-w-8 pr-0", "mat-cell", "", 4, "matCellDef"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["matColumnDef", "contact"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "labels"], ["class", "uppercase", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["class", "w-10 text-secondary", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "hover:bg-hover trans-ease-out cursor-pointer", "mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "sticky", "left-0", 3, "pageSizeOptions", "pageSize"], ["xPosition", "before", "yPosition", "below"], ["columnFilterMenu", "matMenu"], ["class", "mat-menu-item block", 3, "click", 4, "ngFor", "ngForOf"], ["actionsMenu", "matMenu"], ["matMenuContent", ""], [1, "mr-4", "pr-4", "border-r", "flex-none"], ["color", "primary", "mat-icon-button", "", "matTooltip", "Delete selected", "type", "button", 3, "click"], ["svgIcon", "mat:delete"], ["color", "primary", "mat-icon-button", "", "matTooltip", "Another action", "type", "button"], ["svgIcon", "mat:folder"], ["mat-header-cell", ""], ["color", "primary", 3, "checked", "indeterminate", "change"], ["mat-cell", "", 1, "w-4"], ["color", "primary", 3, "checked", "change", "click"], ["mat-cell", "", 1, "w-8", "min-w-8", "pr-0"], [1, "avatar", "h-8", "w-8", "align-middle", 3, "src"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 1, "uppercase"], ["mat-cell", "", 3, "ngClass"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "flex"], ["mat-icon-button", "", 1, "w-8", "h-8", "p-0", "leading-none", "flex", "items-center", "justify-center", "hover:bg-hover", "text-primary", "bg-primary/10", 3, "click"], ["svgIcon", "mat:phone", 1, "icon-sm"], ["mat-icon-button", "", 1, "w-8", "h-8", "p-0", "leading-none", "flex", "items-center", "justify-center", "ml-1", "hover:bg-hover", "text-teal", "bg-teal/10", 3, "click"], ["svgIcon", "mat:mail", 1, "icon-sm"], ["mat-icon-button", "", 1, "w-8", "h-8", "p-0", "leading-none", "flex", "items-center", "justify-center", "ml-1", "hover:bg-hover", "text-green", "bg-green/10", 3, "click"], ["svgIcon", "mat:map", 1, "icon-sm"], [1, "flex", "items-center", "gap-1", 3, "click"], ["class", "rounded px-2 py-1 font-medium text-xs flex-none", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "text-secondary", "bg-base", "text-hint", "cursor-pointer", "hover:bg-hover", "flex-none", "flex", "items-center", "justify-center"], ["svgIcon", "mat:add", 1, "icon-sm"], [1, "rounded", "px-2", "py-1", "font-medium", "text-xs", "flex-none", 3, "ngClass"], ["mat-cell", "", 1, "w-10", "text-secondary"], ["mat-icon-button", "", "type", "button", 3, "matMenuTriggerData", "matMenuTriggerFor", "click"], ["svgIcon", "mat:more_horiz"], ["mat-header-row", ""], ["mat-row", "", 1, "hover:bg-hover", "trans-ease-out", "cursor-pointer", 3, "click"], [1, "mat-menu-item", "block", 3, "click"], ["color", "primary", 3, "ngModel", "click", "ngModelChange"], ["mat-menu-item", "", 3, "click"], ["svgIcon", "mat:edit"]],
  template: function AioTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "vex-page-layout")(1, "vex-page-layout-header", 0)(2, "div", 1)(3, "div")(4, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "All-In-One Table");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "vex-breadcrumbs", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 4)(8, "mat-button-toggle-group", 5)(9, "mat-button-toggle", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Boxed");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "mat-button-toggle", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Full-Width");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "vex-page-layout-content", 8)(14, "div", 9)(15, "div", 10)(16, "h2", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, AioTableComponent_span_17_Template, 2, 0, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, AioTableComponent_span_18_Template, 4, 2, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, AioTableComponent_div_19_Template, 5, 0, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "mat-icon", 15)(22, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "mat-icon", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AioTableComponent_Template_button_click_26_listener() {
        return ctx.createCustomer();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "mat-icon", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "table", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](29, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, AioTableComponent_th_30_Template, 2, 2, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, AioTableComponent_td_31_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](32, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, AioTableComponent_th_33_Template, 1, 0, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, AioTableComponent_td_34_Template, 2, 1, "td", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, AioTableComponent_ng_container_35_Template, 2, 1, "ng-container", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](36, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, AioTableComponent_th_37_Template, 1, 0, "th", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](38, AioTableComponent_td_38_Template, 8, 0, "td", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](39, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, AioTableComponent_th_40_Template, 2, 0, "th", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](41, AioTableComponent_td_41_Template, 5, 1, "td", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](42, 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](43, AioTableComponent_th_43_Template, 1, 0, "th", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, AioTableComponent_td_44_Template, 3, 4, "td", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](45, AioTableComponent_tr_45_Template, 1, 0, "tr", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](46, AioTableComponent_tr_46_Template, 1, 1, "tr", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](47, "mat-paginator", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "mat-menu", 39, 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](50, AioTableComponent_button_50_Template, 3, 2, "button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "mat-menu", 39, 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](53, AioTableComponent_ng_template_53_Template, 8, 0, "ng-template", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-gutter", ctx.layoutCtrl.value === "fullwidth");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](24, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formControl", ctx.layoutCtrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-gutter", ctx.layoutCtrl.value === "fullwidth");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selection.isEmpty());
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selection.hasValue());
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selection.hasValue());
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formControl", ctx.searchCtrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matMenuTriggerFor", _r16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@stagger", undefined)("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.columns)("ngForTrackBy", ctx.trackByProperty);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx.visibleColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx.visibleColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pageSizeOptions", ctx.pageSizeOptions)("pageSize", ctx.pageSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.columns);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_5__.PageLayoutComponent, _vex_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_6__.PageLayoutHeaderDirective, _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_7__.PageLayoutContentDirective, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_8__.BreadcrumbsComponent, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortHeader, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatIconAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatMiniFabButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__.MatButtonToggle],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__.fadeInUp400ms, _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__.stagger40ms]
  }
}), _class);
AioTableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_28__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__.UntilDestroy)()], AioTableComponent);


/***/ }),

/***/ 5969:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/apps/aio-table/customer-create-update/customer-create-update.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerCreateUpdateComponent": () => (/* binding */ CustomerCreateUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 1528);











function CustomerCreateUpdateComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 34);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.form.get("imageSrc").value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function CustomerCreateUpdateComponent_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.form.get("firstName").value + " " + ctx_r1.form.get("lastName").value);
  }
}
function CustomerCreateUpdateComponent_h2_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function CustomerCreateUpdateComponent_button_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function CustomerCreateUpdateComponent_button_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class CustomerCreateUpdateComponent {
  constructor(defaults, dialogRef, fb) {
    this.defaults = defaults;
    this.dialogRef = dialogRef;
    this.fb = fb;
    this.mode = 'create';
  }
  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {};
    }
    this.form = this.fb.group({
      id: [CustomerCreateUpdateComponent.id++],
      imageSrc: this.defaults.imageSrc,
      firstName: [this.defaults.firstName || ''],
      lastName: [this.defaults.lastName || ''],
      street: this.defaults.street || '',
      city: this.defaults.city || '',
      zipcode: this.defaults.zipcode || '',
      phoneNumber: this.defaults.phoneNumber || '',
      notes: this.defaults.notes || ''
    });
  }
  save() {
    if (this.mode === 'create') {
      this.createCustomer();
    } else if (this.mode === 'update') {
      this.updateCustomer();
    }
  }
  createCustomer() {
    const customer = this.form.value;
    if (!customer.imageSrc) {
      customer.imageSrc = 'assets/img/avatars/1.jpg';
    }
    this.dialogRef.close(customer);
  }
  updateCustomer() {
    const customer = this.form.value;
    customer.id = this.defaults.id;
    this.dialogRef.close(customer);
  }
  isCreateMode() {
    return this.mode === 'create';
  }
  isUpdateMode() {
    return this.mode === 'update';
  }
}
CustomerCreateUpdateComponent.id = 100;
CustomerCreateUpdateComponent.ɵfac = function CustomerCreateUpdateComponent_Factory(t) {
  return new (t || CustomerCreateUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder));
};
CustomerCreateUpdateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CustomerCreateUpdateComponent,
  selectors: [["vex-customer-create-update"]],
  decls: 66,
  vars: 7,
  consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", "", 1, "flex", "items-center"], ["class", "avatar mr-5", 3, "src", 4, "ngIf"], ["class", "headline m-0 flex-auto", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "text-secondary", 3, "matMenuTriggerFor"], ["svgIcon", "mat:more_vert"], ["mat-dialog-close", "", "mat-icon-button", "", "type", "button", 1, "text-secondary"], ["svgIcon", "mat:close"], [1, "text-border"], [1, "flex", "flex-col"], [1, "flex", "flex-col", "sm:flex-row"], [1, "flex-auto"], ["cdkFocusInitial", "", "formControlName", "firstName", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:person"], [1, "sm:ml-6", "flex-auto"], ["formControlName", "lastName", "matInput", ""], ["formControlName", "street", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:edit_location"], ["formControlName", "zipcode", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:my_location"], ["formControlName", "city", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:location_city"], ["formControlName", "phoneNumber", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:phone"], ["formControlName", "notes", "matInput", ""], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["color", "primary", "mat-flat-button", "", "type", "submit", 4, "ngIf"], ["xPosition", "before", "yPosition", "below"], ["settingsMenu", "matMenu"], ["mat-menu-item", ""], ["svgIcon", "mat:print"], ["svgIcon", "mat:download"], ["svgIcon", "mat:delete"], [1, "avatar", "mr-5", 3, "src"], [1, "headline", "m-0", "flex-auto"], ["color", "primary", "mat-flat-button", "", "type", "submit"]],
  template: function CustomerCreateUpdateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustomerCreateUpdateComponent_Template_form_ngSubmit_0_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerCreateUpdateComponent_img_2_Template, 1, 1, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomerCreateUpdateComponent_h2_3_Template, 2, 1, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomerCreateUpdateComponent_h2_4_Template, 2, 0, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-divider", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-dialog-content", 9)(11, "div", 10)(12, "mat-form-field", 11)(13, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "First Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 12)(16, "mat-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 14)(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Last Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15)(21, "mat-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 11)(23, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Street");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 16)(26, "mat-icon", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10)(28, "mat-form-field", 11)(29, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Zipcode");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 18)(32, "mat-icon", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 14)(34, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "City");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 20)(37, "mat-icon", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 11)(39, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Phone Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 22)(42, "mat-icon", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 11)(44, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Notes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "textarea", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-dialog-actions", 25)(48, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, CustomerCreateUpdateComponent_button_50_Template, 2, 0, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, CustomerCreateUpdateComponent_button_51_Template, 2, 0, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-menu", 28, 29)(54, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "mat-icon", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Print");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "mat-icon", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Export");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "mat-icon", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("imageSrc").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("firstName").value || ctx.form.get("lastName").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.form.get("firstName").value && !ctx.form.get("lastName").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCreateMode());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUpdateMode());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatPrefix, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5799:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/apps/aio-table/customer-create-update/customer-create-update.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerCreateUpdateModule": () => (/* binding */ CustomerCreateUpdateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _customer_create_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-create-update.component */ 5969);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);












class CustomerCreateUpdateModule {}
CustomerCreateUpdateModule.ɵfac = function CustomerCreateUpdateModule_Factory(t) {
  return new (t || CustomerCreateUpdateModule)();
};
CustomerCreateUpdateModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: CustomerCreateUpdateModule
});
CustomerCreateUpdateModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDividerModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CustomerCreateUpdateModule, {
    declarations: [_customer_create_update_component__WEBPACK_IMPORTED_MODULE_0__.CustomerCreateUpdateComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDividerModule],
    exports: [_customer_create_update_component__WEBPACK_IMPORTED_MODULE_0__.CustomerCreateUpdateComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_apps_aio-table_aio-table-routing_module_ts-src_app_pages_apps_aio-table-16633c.js.map