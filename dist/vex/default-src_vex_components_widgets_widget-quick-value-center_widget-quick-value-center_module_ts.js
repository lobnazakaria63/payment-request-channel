"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["default-src_vex_components_widgets_widget-quick-value-center_widget-quick-value-center_module_ts"],{

/***/ 8693:
/*!*******************************************************!*\
  !*** ./src/@vex/animations/scale-in-out.animation.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scaleInOutAnimation": () => (/* binding */ scaleInOutAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 4851);

const scaleInOutAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('scaleInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale(0)',
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.2s cubic-bezier(0.35, 0, 0.25, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale(1)',
  opacity: 1
}))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale(1)',
  opacity: 1
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.2s cubic-bezier(0.35, 0, 0.25, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale(0)',
  opacity: 0
}))])]);

/***/ }),

/***/ 9291:
/*!********************************************************************************!*\
  !*** ./src/@vex/components/share-bottom-sheet/share-bottom-sheet.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareBottomSheetComponent": () => (/* binding */ ShareBottomSheetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);





const _c0 = function () {
  return [];
};
class ShareBottomSheetComponent {
  constructor(_bottomSheetRef) {
    this._bottomSheetRef = _bottomSheetRef;
  }
  ngOnInit() {}
  close() {
    this._bottomSheetRef.dismiss();
  }
}
ShareBottomSheetComponent.ɵfac = function ShareBottomSheetComponent_Factory(t) {
  return new (t || ShareBottomSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__.MatBottomSheetRef));
};
ShareBottomSheetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ShareBottomSheetComponent,
  selectors: [["vex-share-bottom-sheet"]],
  decls: 17,
  vars: 8,
  consts: [["mat-list-item", "", 3, "routerLink", "click"], ["matListItemIcon", "", "svgIcon", "logo:gmail"], ["matListItemTitle", ""], ["matListItemIcon", "", "svgIcon", "logo:facebook"], ["matListItemIcon", "", "svgIcon", "logo:twitter"], ["matListItemIcon", "", "svgIcon", "logo:whatsapp"]],
  template: function ShareBottomSheetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list")(1, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShareBottomSheetComponent_Template_a_click_1_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Send with Gmail");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShareBottomSheetComponent_Template_a_click_5_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Post on Facebook");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShareBottomSheetComponent_Template_a_click_9_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Share on Twitter");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShareBottomSheetComponent_Template_a_click_13_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Share on WhatsApp");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    }
  },
  dependencies: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItemIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItemTitle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2594:
/*!*****************************************************************************!*\
  !*** ./src/@vex/components/share-bottom-sheet/share-bottom-sheet.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareBottomSheetModule": () => (/* binding */ ShareBottomSheetModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _share_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share-bottom-sheet.component */ 9291);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);







class ShareBottomSheetModule {}
ShareBottomSheetModule.ɵfac = function ShareBottomSheetModule_Factory(t) {
  return new (t || ShareBottomSheetModule)();
};
ShareBottomSheetModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ShareBottomSheetModule
});
ShareBottomSheetModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__.MatBottomSheetModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__.MatBottomSheetModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ShareBottomSheetModule, {
    declarations: [_share_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_0__.ShareBottomSheetComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__.MatBottomSheetModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule],
    exports: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__.MatBottomSheetModule]
  });
})();

/***/ }),

/***/ 4616:
/*!******************************************************************************************************!*\
  !*** ./src/@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetQuickValueCenterComponent": () => (/* binding */ WidgetQuickValueCenterComponent)
/* harmony export */ });
/* harmony import */ var _share_bottom_sheet_share_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../share-bottom-sheet/share-bottom-sheet.component */ 9291);
/* harmony import */ var _animations_scale_in_out_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../animations/scale-in-out.animation */ 8693);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);








function WidgetQuickValueCenterComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", ctx_r0.helpText);
  }
}
function WidgetQuickValueCenterComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WidgetQuickValueCenterComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.openSheet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scaleInOut", undefined);
  }
}
class WidgetQuickValueCenterComponent {
  constructor(_bottomSheet) {
    this._bottomSheet = _bottomSheet;
  }
  ngOnInit() {}
  openSheet() {
    this._bottomSheet.open(_share_bottom_sheet_share_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_0__.ShareBottomSheetComponent);
  }
}
WidgetQuickValueCenterComponent.ɵfac = function WidgetQuickValueCenterComponent_Factory(t) {
  return new (t || WidgetQuickValueCenterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__.MatBottomSheet));
};
WidgetQuickValueCenterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: WidgetQuickValueCenterComponent,
  selectors: [["vex-widget-quick-value-center"]],
  inputs: {
    icon: "icon",
    value: "value",
    label: "label",
    change: "change",
    helpText: "helpText",
    iconClass: "iconClass"
  },
  decls: 9,
  vars: 6,
  consts: [[1, "card", "p-6", "relative", "hover:shadow-lg", "trans-shadow", "flex", "flex-col", "items-center", 3, "mouseenter", "mouseleave"], [1, "rounded-full", "w-12", "h-12", "flex", "items-center", "justify-center", 3, "ngClass"], [3, "svgIcon"], [1, "display-2", "font-bold", "mt-4", "mb-2"], [1, "subheading-2", "font-medium", "text-secondary", "m-0"], ["class", "absolute top-0 left-0 mt-2 ml-2 text-hint", "mat-icon-button", "", "matTooltipPosition", "after", "type", "button", 3, "matTooltip", 4, "ngIf"], ["class", "absolute -top-3 -right-3 bg-foreground shadow-xl", "color", "primary", "mat-icon-button", "", "type", "button", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltipPosition", "after", "type", "button", 1, "absolute", "top-0", "left-0", "mt-2", "ml-2", "text-hint", 3, "matTooltip"], ["svgIcon", "mat:help", 1, "icon-sm"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "absolute", "-top-3", "-right-3", "bg-foreground", "shadow-xl", 3, "click"], ["svgIcon", "mat:cloud_download"]],
  template: function WidgetQuickValueCenterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function WidgetQuickValueCenterComponent_Template_div_mouseenter_0_listener() {
        return ctx.showButton = true;
      })("mouseleave", function WidgetQuickValueCenterComponent_Template_div_mouseleave_0_listener() {
        return ctx.showButton = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, WidgetQuickValueCenterComponent_button_7_Template, 2, 1, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, WidgetQuickValueCenterComponent_button_8_Template, 2, 1, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.iconClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", ctx.icon);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.label);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.helpText);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showButton);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton],
  encapsulation: 2,
  data: {
    animation: [_animations_scale_in_out_animation__WEBPACK_IMPORTED_MODULE_1__.scaleInOutAnimation]
  },
  changeDetection: 0
});

/***/ }),

/***/ 5190:
/*!***************************************************************************************************!*\
  !*** ./src/@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetQuickValueCenterModule": () => (/* binding */ WidgetQuickValueCenterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _widget_quick_value_center_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget-quick-value-center.component */ 4616);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _share_bottom_sheet_share_bottom_sheet_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../share-bottom-sheet/share-bottom-sheet.module */ 2594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);







class WidgetQuickValueCenterModule {}
WidgetQuickValueCenterModule.ɵfac = function WidgetQuickValueCenterModule_Factory(t) {
  return new (t || WidgetQuickValueCenterModule)();
};
WidgetQuickValueCenterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: WidgetQuickValueCenterModule
});
WidgetQuickValueCenterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltipModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _share_bottom_sheet_share_bottom_sheet_module__WEBPACK_IMPORTED_MODULE_1__.ShareBottomSheetModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WidgetQuickValueCenterModule, {
    declarations: [_widget_quick_value_center_component__WEBPACK_IMPORTED_MODULE_0__.WidgetQuickValueCenterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltipModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _share_bottom_sheet_share_bottom_sheet_module__WEBPACK_IMPORTED_MODULE_1__.ShareBottomSheetModule],
    exports: [_widget_quick_value_center_component__WEBPACK_IMPORTED_MODULE_0__.WidgetQuickValueCenterComponent]
  });
})();

/***/ }),

/***/ 4865:
/*!******************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/bottom-sheet.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_BOTTOM_SHEET_DATA": () => (/* binding */ MAT_BOTTOM_SHEET_DATA),
/* harmony export */   "MAT_BOTTOM_SHEET_DEFAULT_OPTIONS": () => (/* binding */ MAT_BOTTOM_SHEET_DEFAULT_OPTIONS),
/* harmony export */   "MatBottomSheet": () => (/* binding */ MatBottomSheet),
/* harmony export */   "MatBottomSheetConfig": () => (/* binding */ MatBottomSheetConfig),
/* harmony export */   "MatBottomSheetContainer": () => (/* binding */ MatBottomSheetContainer),
/* harmony export */   "MatBottomSheetModule": () => (/* binding */ MatBottomSheetModule),
/* harmony export */   "MatBottomSheetRef": () => (/* binding */ MatBottomSheetRef),
/* harmony export */   "matBottomSheetAnimations": () => (/* binding */ matBottomSheetAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/dialog */ 2529);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ 7520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ 4218);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/keycodes */ 8456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 9295);

















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Animations used by the Material bottom sheet. */
function MatBottomSheetContainer_ng_template_0_Template(rf, ctx) {}
const matBottomSheetAnimations = {
  /** Animation that shows and hides a bottom sheet. */
  bottomSheetState: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('state', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void, hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'translateY(100%)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'translateY(0%)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('visible => void, visible => hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.AnimationDurations.COMPLEX} ${_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.AnimationCurves.ACCELERATION_CURVE}`), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
    optional: true
  })])), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('void => visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.AnimationDurations.EXITING} ${_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.AnimationCurves.DECELERATION_CURVE}`), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
    optional: true
  })]))])
};

/**
 * Internal component that wraps user-provided bottom sheet content.
 * @docs-private
 */
class MatBottomSheetContainer extends _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_2__.CdkDialogContainer {
  constructor(elementRef, focusTrapFactory, document, config, checker, ngZone, overlayRef, breakpointObserver, _changeDetectorRef, focusMonitor) {
    super(elementRef, focusTrapFactory, document, config, checker, ngZone, overlayRef, focusMonitor);
    this._changeDetectorRef = _changeDetectorRef;
    /** The state of the bottom sheet animations. */
    this._animationState = 'void';
    /** Emits whenever the state of the animation changes. */
    this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this._breakpointSubscription = breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Large, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.XLarge]).subscribe(() => {
      this._toggleClass('mat-bottom-sheet-container-medium', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Medium));
      this._toggleClass('mat-bottom-sheet-container-large', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Large));
      this._toggleClass('mat-bottom-sheet-container-xlarge', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.XLarge));
    });
  }
  /** Begin animation of bottom sheet entrance into view. */
  enter() {
    if (!this._destroyed) {
      this._animationState = 'visible';
      this._changeDetectorRef.detectChanges();
    }
  }
  /** Begin animation of the bottom sheet exiting from view. */
  exit() {
    if (!this._destroyed) {
      this._animationState = 'hidden';
      this._changeDetectorRef.markForCheck();
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._breakpointSubscription.unsubscribe();
    this._destroyed = true;
  }
  _onAnimationDone(event) {
    if (event.toState === 'visible') {
      this._trapFocus();
    }
    this._animationStateChanged.emit(event);
  }
  _onAnimationStart(event) {
    this._animationStateChanged.emit(event);
  }
  _captureInitialFocus() {}
  _toggleClass(cssClass, add) {
    this._elementRef.nativeElement.classList.toggle(cssClass, add);
  }
}
MatBottomSheetContainer.ɵfac = function MatBottomSheetContainer_Factory(t) {
  return new (t || MatBottomSheetContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.OverlayRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.FocusMonitor));
};
MatBottomSheetContainer.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MatBottomSheetContainer,
  selectors: [["mat-bottom-sheet-container"]],
  hostAttrs: ["tabindex", "-1", 1, "mat-bottom-sheet-container"],
  hostVars: 4,
  hostBindings: function MatBottomSheetContainer_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsyntheticHostListener"]("@state.start", function MatBottomSheetContainer_animation_state_start_HostBindingHandler($event) {
        return ctx._onAnimationStart($event);
      })("@state.done", function MatBottomSheetContainer_animation_state_done_HostBindingHandler($event) {
        return ctx._onAnimationDone($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("role", ctx._config.role)("aria-modal", ctx._config.ariaModal)("aria-label", ctx._config.ariaLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsyntheticHostProperty"]("@state", ctx._animationState);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 0,
  consts: [["cdkPortalOutlet", ""]],
  template: function MatBottomSheetContainer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatBottomSheetContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
    }
  },
  dependencies: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__.CdkPortalOutlet],
  styles: [".mat-bottom-sheet-container{padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto}.cdk-high-contrast-active .mat-bottom-sheet-container{outline:1px solid}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:4px;border-top-right-radius:4px}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}"],
  encapsulation: 2,
  data: {
    animation: [matBottomSheetAnimations.bottomSheetState]
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatBottomSheetContainer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'mat-bottom-sheet-container',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None,
      animations: [matBottomSheetAnimations.bottomSheetState],
      host: {
        'class': 'mat-bottom-sheet-container',
        'tabindex': '-1',
        '[attr.role]': '_config.role',
        '[attr.aria-modal]': '_config.ariaModal',
        '[attr.aria-label]': '_config.ariaLabel',
        '[@state]': '_animationState',
        '(@state.start)': '_onAnimationStart($event)',
        '(@state.done)': '_onAnimationDone($event)'
      },
      template: "<ng-template cdkPortalOutlet></ng-template>\r\n",
      styles: [".mat-bottom-sheet-container{padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto}.cdk-high-contrast-active .mat-bottom-sheet-container{outline:1px solid}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:4px;border-top-right-radius:4px}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.FocusTrapFactory
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
      }]
    }, {
      type: _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogConfig
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.InteractivityChecker
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.OverlayRef
    }, {
      type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.BreakpointObserver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.FocusMonitor
    }];
  }, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatBottomSheetModule {}
MatBottomSheetModule.ɵfac = function MatBottomSheetModule_Factory(t) {
  return new (t || MatBottomSheetModule)();
};
MatBottomSheetModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: MatBottomSheetModule
});
MatBottomSheetModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatBottomSheetModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
    args: [{
      imports: [_angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__.PortalModule],
      exports: [MatBottomSheetContainer, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule],
      declarations: [MatBottomSheetContainer]
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that can be used to access the data that was passed in to a bottom sheet. */
const MAT_BOTTOM_SHEET_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('MatBottomSheetData');
/**
 * Configuration used when opening a bottom sheet.
 */
class MatBottomSheetConfig {
  constructor() {
    /** Data being injected into the child component. */
    this.data = null;
    /** Whether the bottom sheet has a backdrop. */
    this.hasBackdrop = true;
    /** Whether the user can use escape or clicking outside to close the bottom sheet. */
    this.disableClose = false;
    /** Aria label to assign to the bottom sheet element. */
    this.ariaLabel = null;
    /** Whether this is a modal bottom sheet. Used to set the `aria-modal` attribute. */
    this.ariaModal = true;
    /**
     * Whether the bottom sheet should close when the user goes backwards/forwards in history.
     * Note that this usually doesn't include clicking on links (unless the user is using
     * the `HashLocationStrategy`).
     */
    this.closeOnNavigation = true;
    // Note that this is set to 'dialog' by default, because while the a11y recommendations
    // are to focus the first focusable element, doing so prevents screen readers from reading out the
    // rest of the bottom sheet content.
    /**
     * Where the bottom sheet should focus on open.
     * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
     * AutoFocusTarget instead.
     */
    this.autoFocus = 'dialog';
    /**
     * Whether the bottom sheet should restore focus to the
     * previously-focused element, after it's closed.
     */
    this.restoreFocus = true;
  }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Reference to a bottom sheet dispatched from the bottom sheet service.
 */
class MatBottomSheetRef {
  /** Instance of the component making up the content of the bottom sheet. */
  get instance() {
    return this._ref.componentInstance;
  }
  constructor(_ref, config, containerInstance) {
    this._ref = _ref;
    /** Subject for notifying the user that the bottom sheet has opened and appeared. */
    this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.containerInstance = containerInstance;
    this.disableClose = config.disableClose;
    // Emit when opening animation completes
    containerInstance._animationStateChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(event => event.phaseName === 'done' && event.toState === 'visible'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
      this._afterOpened.next();
      this._afterOpened.complete();
    });
    // Dispose overlay when closing animation is complete
    containerInstance._animationStateChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(event => event.phaseName === 'done' && event.toState === 'hidden'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
      clearTimeout(this._closeFallbackTimeout);
      this._ref.close(this._result);
    });
    _ref.overlayRef.detachments().subscribe(() => {
      this._ref.close(this._result);
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)(this.backdropClick(), this.keydownEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(event => event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__.ESCAPE))).subscribe(event => {
      if (!this.disableClose && (event.type !== 'keydown' || !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__.hasModifierKey)(event))) {
        event.preventDefault();
        this.dismiss();
      }
    });
  }
  /**
   * Dismisses the bottom sheet.
   * @param result Data to be passed back to the bottom sheet opener.
   */
  dismiss(result) {
    if (!this.containerInstance) {
      return;
    }
    // Transition the backdrop in parallel to the bottom sheet.
    this.containerInstance._animationStateChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(event => event.phaseName === 'start'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(event => {
      // The logic that disposes of the overlay depends on the exit animation completing, however
      // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
      // timeout which will clean everything up if the animation hasn't fired within the specified
      // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
      // vast majority of cases the timeout will have been cleared before it has fired.
      this._closeFallbackTimeout = setTimeout(() => {
        this._ref.close(this._result);
      }, event.totalTime + 100);
      this._ref.overlayRef.detachBackdrop();
    });
    this._result = result;
    this.containerInstance.exit();
    this.containerInstance = null;
  }
  /** Gets an observable that is notified when the bottom sheet is finished closing. */
  afterDismissed() {
    return this._ref.closed;
  }
  /** Gets an observable that is notified when the bottom sheet has opened and appeared. */
  afterOpened() {
    return this._afterOpened;
  }
  /**
   * Gets an observable that emits when the overlay's backdrop has been clicked.
   */
  backdropClick() {
    return this._ref.backdropClick;
  }
  /**
   * Gets an observable that emits when keydown events are targeted on the overlay.
   */
  keydownEvents() {
    return this._ref.keydownEvents;
  }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that can be used to specify default bottom sheet options. */
const MAT_BOTTOM_SHEET_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('mat-bottom-sheet-default-options');
/**
 * Service to trigger Material Design bottom sheets.
 */
class MatBottomSheet {
  /** Reference to the currently opened bottom sheet. */
  get _openedBottomSheetRef() {
    const parent = this._parentBottomSheet;
    return parent ? parent._openedBottomSheetRef : this._bottomSheetRefAtThisLevel;
  }
  set _openedBottomSheetRef(value) {
    if (this._parentBottomSheet) {
      this._parentBottomSheet._openedBottomSheetRef = value;
    } else {
      this._bottomSheetRefAtThisLevel = value;
    }
  }
  constructor(_overlay, injector, _parentBottomSheet, _defaultOptions) {
    this._overlay = _overlay;
    this._parentBottomSheet = _parentBottomSheet;
    this._defaultOptions = _defaultOptions;
    this._bottomSheetRefAtThisLevel = null;
    this._dialog = injector.get(_angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog);
  }
  open(componentOrTemplateRef, config) {
    const _config = {
      ...(this._defaultOptions || new MatBottomSheetConfig()),
      ...config
    };
    let ref;
    this._dialog.open(componentOrTemplateRef, {
      ..._config,
      // Disable closing since we need to sync it up to the animation ourselves.
      disableClose: true,
      // Disable closing on detachments so that we can sync up the animation.
      closeOnOverlayDetachments: false,
      maxWidth: '100%',
      container: MatBottomSheetContainer,
      scrollStrategy: _config.scrollStrategy || this._overlay.scrollStrategies.block(),
      positionStrategy: this._overlay.position().global().centerHorizontally().bottom('0'),
      templateContext: () => ({
        bottomSheetRef: ref
      }),
      providers: (cdkRef, _cdkConfig, container) => {
        ref = new MatBottomSheetRef(cdkRef, _config, container);
        return [{
          provide: MatBottomSheetRef,
          useValue: ref
        }, {
          provide: MAT_BOTTOM_SHEET_DATA,
          useValue: _config.data
        }];
      }
    });
    // When the bottom sheet is dismissed, clear the reference to it.
    ref.afterDismissed().subscribe(() => {
      // Clear the bottom sheet ref if it hasn't already been replaced by a newer one.
      if (this._openedBottomSheetRef === ref) {
        this._openedBottomSheetRef = null;
      }
    });
    if (this._openedBottomSheetRef) {
      // If a bottom sheet is already in view, dismiss it and enter the
      // new bottom sheet after exit animation is complete.
      this._openedBottomSheetRef.afterDismissed().subscribe(() => ref.containerInstance?.enter());
      this._openedBottomSheetRef.dismiss();
    } else {
      // If no bottom sheet is in view, enter the new bottom sheet.
      ref.containerInstance.enter();
    }
    this._openedBottomSheetRef = ref;
    return ref;
  }
  /**
   * Dismisses the currently-visible bottom sheet.
   * @param result Data to pass to the bottom sheet instance.
   */
  dismiss(result) {
    if (this._openedBottomSheetRef) {
      this._openedBottomSheetRef.dismiss(result);
    }
  }
  ngOnDestroy() {
    if (this._bottomSheetRefAtThisLevel) {
      this._bottomSheetRefAtThisLevel.dismiss();
    }
  }
}
MatBottomSheet.ɵfac = function MatBottomSheet_Factory(t) {
  return new (t || MatBottomSheet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](MatBottomSheet, 12), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, 8));
};
MatBottomSheet.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: MatBottomSheet,
  factory: MatBottomSheet.ɵfac,
  providedIn: MatBottomSheetModule
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatBottomSheet, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable,
    args: [{
      providedIn: MatBottomSheetModule
    }]
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.Overlay
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector
    }, {
      type: MatBottomSheet,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.SkipSelf
      }]
    }, {
      type: MatBottomSheetConfig,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
        args: [MAT_BOTTOM_SHEET_DEFAULT_OPTIONS]
      }]
    }];
  }, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=default-src_vex_components_widgets_widget-quick-value-center_widget-quick-value-center_module_ts.js.map