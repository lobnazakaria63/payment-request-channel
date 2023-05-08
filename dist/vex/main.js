"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["main"],{

/***/ 5990:
/*!***************************************************!*\
  !*** ./src/@vex/animations/dropdown.animation.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dropdownAnimation": () => (/* binding */ dropdownAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 4851);

const dropdownAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('dropdown', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: 0,
  opacity: 0
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: '*',
  opacity: 1
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('false <=> true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('300ms cubic-bezier(.35, 0, .25, 1)'))]);

/***/ }),

/***/ 4372:
/*!**************************************************!*\
  !*** ./src/@vex/animations/popover.animation.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popoverAnimation": () => (/* binding */ popoverAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 4851);

const popoverAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('transformPopover', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'scale(0.6)'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('100ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('150ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale(1)'
}))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('100ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0
}))])]);

/***/ }),

/***/ 4438:
/*!*************************************************************!*\
  !*** ./src/@vex/components/config-panel/color-variables.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colorVariables": () => (/* binding */ colorVariables)
/* harmony export */ });
const colorVariables = {
  blue: {
    light: 'rgba(99, 102, 241, .1)',
    default: 'rgb(99, 102, 241)',
    contrast: 'rgb(255, 255, 255)'
  },
  gray: {
    light: 'rgba(158, 158, 158, 0.1)',
    default: 'rgb(158, 158, 158)',
    contrast: 'rgb(255, 255, 255)'
  },
  red: {
    light: 'rgba(244, 67, 54, 0.1)',
    default: 'rgb(244, 67, 54)',
    contrast: 'rgb(255, 255, 255)'
  },
  orange: {
    light: 'rgba(255, 152, 0, 0.1)',
    default: 'rgb(255, 152, 0)',
    contrast: 'rgb(0, 0, 0)'
  },
  'deep-orange': {
    light: 'rgba(255, 87, 34, 0.1)',
    default: 'rgb(255, 87, 34)',
    contrast: 'rgb(255, 255, 255)'
  },
  amber: {
    light: 'rgba(255, 193, 7, 0.1)',
    default: 'rgb(255, 193, 7)',
    contrast: 'rgb(0, 0, 0)'
  },
  green: {
    light: 'rgba(76, 175, 80, 0.1)',
    default: 'rgb(76, 175, 80)',
    contrast: 'rgb(255, 255, 255)'
  },
  teal: {
    light: 'rgba(0, 150, 136, 0.1)',
    default: 'rgb(0, 150, 136)',
    contrast: 'rgb(255, 255, 255)'
  },
  cyan: {
    light: 'rgba(0, 188, 212, 0.1)',
    default: 'rgb(0, 188, 212)',
    contrast: 'rgb(255, 255, 255)'
  },
  purple: {
    light: 'rgba(156, 39, 176, 0.1)',
    default: 'rgb(156, 39, 176)',
    contrast: 'rgb(255, 255, 255)'
  },
  'deep-purple': {
    light: 'rgba(103, 58, 183, 0.1)',
    default: 'rgb(103, 58, 183)',
    contrast: 'rgb(255, 255, 255)'
  },
  pink: {
    light: 'rgba(233, 30, 99, 0.1)',
    default: 'rgb(233, 30, 99)',
    contrast: 'rgb(255, 255, 255)'
  }
};

/***/ }),

/***/ 4364:
/*!***********************************************************************************************!*\
  !*** ./src/@vex/components/config-panel/config-panel-toggle/config-panel-toggle.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigPanelToggleComponent": () => (/* binding */ ConfigPanelToggleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class ConfigPanelToggleComponent {
  constructor() {
    this.openConfig = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {}
}
ConfigPanelToggleComponent.ɵfac = function ConfigPanelToggleComponent_Factory(t) {
  return new (t || ConfigPanelToggleComponent)();
};
ConfigPanelToggleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ConfigPanelToggleComponent,
  selectors: [["vex-config-panel-toggle"]],
  outputs: {
    openConfig: "openConfig"
  },
  decls: 0,
  vars: 0,
  template: function ConfigPanelToggleComponent_Template(rf, ctx) {},
  styles: [".config-panel-toggle[_ngcontent-%COMP%] {\n  bottom: var(--padding);\n  position: fixed;\n  right: var(--padding);\n  z-index: 100;\n}\n\n  [dir=rtl] .config-panel-toggle {\n  left: var(--padding);\n  right: unset;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2NvbXBvbmVudHMvY29uZmlnLXBhbmVsL2NvbmZpZy1wYW5lbC10b2dnbGUvY29uZmlnLXBhbmVsLXRvZ2dsZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL3BheW1lbnQlMjByZXF1ZXN0cyUyMGNoYW5uZWwvZGVtby9zcmMvQHZleC9jb21wb25lbnRzL2NvbmZpZy1wYW5lbC9jb25maWctcGFuZWwtdG9nZ2xlL2NvbmZpZy1wYW5lbC10b2dnbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQ0NGIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpZy1wYW5lbC10b2dnbGUge1xyXG4gIGJvdHRvbTogdmFyKC0tcGFkZGluZyk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiB2YXIoLS1wYWRkaW5nKTtcclxuICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBbZGlyPVwicnRsXCJdIC5jb25maWctcGFuZWwtdG9nZ2xlIHtcclxuICBsZWZ0OiB2YXIoLS1wYWRkaW5nKTtcclxuICByaWdodDogdW5zZXQ7XHJcbn1cclxuIiwiLmNvbmZpZy1wYW5lbC10b2dnbGUge1xuICBib3R0b206IHZhcigtLXBhZGRpbmcpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiB2YXIoLS1wYWRkaW5nKTtcbiAgei1pbmRleDogMTAwO1xufVxuXG46Om5nLWRlZXAgW2Rpcj1ydGxdIC5jb25maWctcGFuZWwtdG9nZ2xlIHtcbiAgbGVmdDogdmFyKC0tcGFkZGluZyk7XG4gIHJpZ2h0OiB1bnNldDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7218:
/*!********************************************************************!*\
  !*** ./src/@vex/components/config-panel/config-panel.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigPanelComponent": () => (/* binding */ ConfigPanelComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _config_config_name_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config-name.model */ 6738);
/* harmony import */ var _color_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-variables */ 4438);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _config_colorSchemeName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/colorSchemeName */ 8871);
/* harmony import */ var _utils_isNil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/isNil */ 1029);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/constants */ 7042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/config.service */ 3211);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/layout.service */ 7901);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 9121);
















function ConfigPanelComponent_div_0_div_8_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-icon", 24);
  }
}
function ConfigPanelComponent_div_0_div_8_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-icon", 25);
  }
}
function ConfigPanelComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_8_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const colorScheme_r6 = restoredCtx.ngIf;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.isDark(colorScheme_r6) ? ctx_r9.disableDarkMode() : ctx_r9.enableDarkMode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ConfigPanelComponent_div_0_div_8_mat_icon_2_Template, 1, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ConfigPanelComponent_div_0_div_8_mat_icon_3_Template, 1, 0, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "DARK MODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const colorScheme_r6 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.isDark(colorScheme_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r2.isDark(colorScheme_r6));
  }
}
function ConfigPanelComponent_div_0_div_13_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-icon", 24);
  }
}
function ConfigPanelComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_13_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const color_r11 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.selectColor(color_r11.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ConfigPanelComponent_div_0_div_13_mat_icon_2_Template, 1, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const color_r11 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", color_r11.value.light)("color", color_r11.value.default);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("selected", ctx_r3.isSelectedColor(color_r11.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", color_r11.value.default);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.isSelectedColor(color_r11.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 10, color_r11.key));
  }
}
function ConfigPanelComponent_div_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 30)(4, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_18_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const config_r15 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.setConfig(config_r15.id, ctx_r17.ColorSchemeName.light));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "LIGHT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_18_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const config_r15 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.setConfig(config_r15.id, ctx_r19.ColorSchemeName.default));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "DEFAULT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_18_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const config_r15 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r20.setConfig(config_r15.id, ctx_r20.ColorSchemeName.dark));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "DARK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const config_r15 = ctx.$implicit;
    const first_r16 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mt-6", !first_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", config_r15.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](config_r15.name);
  }
}
const _c0 = function (a0, a1) {
  return {
    "border-gray-300": a0,
    "border-transparent": a1
  };
};
const _c1 = function (a0, a1) {
  return {
    "bg-primary border-primary": a0,
    "bg-foreground border-gray-500 group-hover:bg-app-bar": a1
  };
};
function ConfigPanelComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_23_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23);
      const borderRadius_r21 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r22.selectBorderRadius(borderRadius_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const borderRadius_r21 = ctx.$implicit;
    const setting_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](4, _c0, ctx_r5.isSelectedBorderRadius(borderRadius_r21, setting_r1), !ctx_r5.isSelectedBorderRadius(borderRadius_r21, setting_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("border-top-left-radius", borderRadius_r21.value + borderRadius_r21.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](7, _c1, ctx_r5.isSelectedBorderRadius(borderRadius_r21, setting_r1), !ctx_r5.isSelectedBorderRadius(borderRadius_r21, setting_r1)));
  }
}
const _c2 = function (a0, a1) {
  return {
    "!bg-transparent !border-solid !border-primary !text-primary": a0,
    "!border-transparent": a1
  };
};
function ConfigPanelComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4)(6, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "THEME BASE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ConfigPanelComponent_div_0_div_8_Template, 6, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 4)(11, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "THEME COLORS");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ConfigPanelComponent_div_0_div_13_Template, 6, 12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 4)(16, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "PRE-BUILT STYLES");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ConfigPanelComponent_div_0_div_18_Template, 12, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 4)(20, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "ROUNDED CORNERS");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, ConfigPanelComponent_div_0_div_23_Template, 2, 10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 4)(25, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "BUTTON STYLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 11)(28, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r25.selectButtonStyle(undefined));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, " INHERIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r27.selectButtonStyle(ctx_r27.roundedButtonValue));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, " ROUNDED ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 4)(33, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 14)(36, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Orientation");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "mat-slide-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_slide_toggle_change_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r28.layoutRTLChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](39, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "RTL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 4)(42, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 14)(45, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "mat-radio-group", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_radio_group_change_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r29.toolbarPositionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "mat-radio-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "mat-radio-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Static");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 4)(53, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 14)(56, "mat-slide-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_slide_toggle_change_56_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r30.footerVisibleChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "Visible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "mat-radio-group", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_radio_group_change_60_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r31.footerPositionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "mat-radio-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "Fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "mat-radio-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "Static");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const setting_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 10, ctx_r0.colorScheme$));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 12, ctx_r0.colorVariables));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.configs);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.roundedCornerValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](16, _c2, !ctx_r0.isSelectedButtonStyle(undefined, setting_r1), ctx_r0.isSelectedButtonStyle(undefined, setting_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](19, _c2, !ctx_r0.isSelectedButtonStyle(ctx_r0.roundedButtonValue, setting_r1), ctx_r0.isSelectedButtonStyle(ctx_r0.roundedButtonValue, setting_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](39, 14, ctx_r0.isRTL$));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", setting_r1.toolbar.fixed ? "fixed" : "static");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", setting_r1.footer.visible);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", setting_r1.footer.fixed ? "fixed" : "static");
  }
}
class ConfigPanelComponent {
  constructor(configService, layoutService, document) {
    this.configService = configService;
    this.layoutService = layoutService;
    this.document = document;
    this.configs = this.configService.configs;
    this.colorVariables = _color_variables__WEBPACK_IMPORTED_MODULE_1__.colorVariables;
    this.config$ = this.configService.config$;
    this.isRTL$ = this.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(config => config.direction === 'rtl'));
    this.colorScheme$ = this.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(config => config.style.colorScheme));
    this.borderRadius$ = this.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(config => config.style.borderRadius.value));
    this.ConfigName = _config_config_name_model__WEBPACK_IMPORTED_MODULE_0__.VexConfigName;
    this.ColorSchemeName = _config_colorSchemeName__WEBPACK_IMPORTED_MODULE_2__.ColorSchemeName;
    this.selectedColor = _color_variables__WEBPACK_IMPORTED_MODULE_1__.colorVariables.blue;
    this.roundedCornerValues = [{
      value: 0,
      unit: 'rem'
    }, {
      value: 0.25,
      unit: 'rem'
    }, {
      value: 0.5,
      unit: 'rem'
    }, {
      value: 0.75,
      unit: 'rem'
    }, {
      value: 1,
      unit: 'rem'
    }, {
      value: 1.25,
      unit: 'rem'
    }, {
      value: 1.5,
      unit: 'rem'
    }, {
      value: 1.75,
      unit: 'rem'
    }];
    this.roundedButtonValue = _config_constants__WEBPACK_IMPORTED_MODULE_4__.defaultRoundedButtonBorderRadius;
  }
  setConfig(layout, colorScheme) {
    this.configService.setConfig(layout);
    this.configService.updateConfig({
      style: {
        colorScheme
      }
    });
  }
  selectColor(color) {
    this.selectedColor = color;
    this.configService.updateConfig({
      style: {
        colors: {
          primary: {
            default: color.default,
            contrast: color.contrast
          }
        }
      }
    });
  }
  isSelectedColor(color) {
    return color === this.selectedColor;
  }
  enableDarkMode() {
    this.configService.updateConfig({
      style: {
        colorScheme: _config_colorSchemeName__WEBPACK_IMPORTED_MODULE_2__.ColorSchemeName.dark
      }
    });
  }
  disableDarkMode() {
    this.configService.updateConfig({
      style: {
        colorScheme: _config_colorSchemeName__WEBPACK_IMPORTED_MODULE_2__.ColorSchemeName["default"]
      }
    });
  }
  layoutRTLChange(change) {
    this.configService.updateConfig({
      direction: change.checked ? 'rtl' : 'ltr'
    });
  }
  toolbarPositionChange(change) {
    this.configService.updateConfig({
      toolbar: {
        fixed: change.value === 'fixed'
      }
    });
  }
  footerVisibleChange(change) {
    this.configService.updateConfig({
      footer: {
        visible: change.checked
      }
    });
  }
  footerPositionChange(change) {
    this.configService.updateConfig({
      footer: {
        fixed: change.value === 'fixed'
      }
    });
  }
  isSelectedBorderRadius(borderRadius, config) {
    return borderRadius.value === config.style.borderRadius.value && borderRadius.unit === config.style.borderRadius.unit;
  }
  selectBorderRadius(borderRadius) {
    this.configService.updateConfig({
      style: {
        borderRadius: borderRadius
      }
    });
  }
  isSelectedButtonStyle(buttonStyle, config) {
    if ((0,_utils_isNil__WEBPACK_IMPORTED_MODULE_3__.isNil)(config.style.button.borderRadius) && (0,_utils_isNil__WEBPACK_IMPORTED_MODULE_3__.isNil)(buttonStyle)) {
      return true;
    }
    return buttonStyle?.value === config.style.button.borderRadius?.value;
  }
  selectButtonStyle(borderRadius) {
    this.configService.updateConfig({
      style: {
        button: {
          borderRadius: borderRadius
        }
      }
    });
  }
  isDark(colorScheme) {
    return colorScheme === _config_colorSchemeName__WEBPACK_IMPORTED_MODULE_2__.ColorSchemeName.dark;
  }
}
ConfigPanelComponent.ɵfac = function ConfigPanelComponent_Factory(t) {
  return new (t || ConfigPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_config_config_service__WEBPACK_IMPORTED_MODULE_5__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_6__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT));
};
ConfigPanelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ConfigPanelComponent,
  selectors: [["vex-config-panel"]],
  decls: 2,
  vars: 3,
  consts: [["class", "config-panel", 4, "ngIf"], [1, "config-panel"], [1, "headline", "mb-4"], ["svgIcon", "mat:settings", 1, "mr-3"], [1, "section"], [1, "subheading"], ["class", "rounded-full mt-2 flex items-center cursor-pointer relative bg-contrast-black text-contrast-white select-none", "matRipple", "", 3, "click", 4, "ngIf"], ["class", "vex-color-picker rounded-full mt-2 flex items-center cursor-pointer relative", "matRipple", "", 3, "selected", "backgroundColor", "color", "click", 4, "ngFor", "ngForOf"], ["class", "rounded", 3, "mt-6", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-4", "gap-4"], ["class", "aspect-square bg-primary/10 flex justify-end items-end cursor-pointer border-2 hover:border-gray-200 group trans-ease-out rounded-tl", 3, "border-gray-300", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "flex", "justify-between", "gap-4"], ["color", "primary", "mat-flat-button", "", "type", "button", 1, "rounded", "flex-1", "border-2", "border-solid", 3, "ngClass", "click"], ["color", "primary", "mat-flat-button", "", "type", "button", 1, "rounded-full", "flex-1", "border-2", "border-solid", 3, "ngClass", "click"], [1, "section-content"], [3, "checked", "change"], [1, "flex", "flex-col", "gap-3", 3, "value", "change"], ["value", "fixed"], ["value", "static"], ["matRipple", "", 1, "rounded-full", "mt-2", "flex", "items-center", "cursor-pointer", "relative", "bg-contrast-black", "text-contrast-white", "select-none", 3, "click"], [1, "m-2", "h-6", "w-6", "rounded-full"], ["svgIcon", "mat:check", 4, "ngIf"], ["svgIcon", "mat:close", 4, "ngIf"], [1, "ml-1", "font-medium", "text-sm"], ["svgIcon", "mat:check"], ["svgIcon", "mat:close"], ["matRipple", "", 1, "vex-color-picker", "rounded-full", "mt-2", "flex", "items-center", "cursor-pointer", "relative", 3, "click"], [1, "rounded"], [1, "layout-image", "rounded", "overflow-hidden", "relative", "hover:bg-hover", "shadow-md"], [1, "w-full", "block", 3, "src"], [1, "layout-image-overlay", "flex", "items-center", "justify-center", "gap-1"], ["mat-raised-button", "", "type", "button", 1, "bg-contrast-white", "text-contrast-black", "flex-none", "!min-w-0", 3, "click"], ["color", "primary", "mat-raised-button", "", "type", "button", 1, "flex-none", "!min-w-0", 3, "click"], ["mat-raised-button", "", "type", "button", 1, "bg-contrast-black", "text-contrast-white", "flex-none", "!min-w-0", 3, "click"], [1, "text-center", "body-2", "mt-2"], [1, "aspect-square", "bg-primary/10", "flex", "justify-end", "items-end", "cursor-pointer", "border-2", "hover:border-gray-200", "group", "trans-ease-out", "rounded-tl", 3, "border-gray-300", "ngClass", "click"], [1, "h-7", "w-7", "border-2", "trans-ease-out", 2, "margin-bottom", "-2px", "margin-right", "-2px", 3, "ngClass"]],
  template: function ConfigPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ConfigPanelComponent_div_0_Template, 65, 22, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, ctx.config$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioButton, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__.MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.KeyValuePipe],
  styles: [".config-panel[_ngcontent-%COMP%] {\n  padding: var(--padding-16) var(--padding);\n}\n\n.heading[_ngcontent-%COMP%] {\n  margin-bottom: var(--padding);\n}\n\n.section[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--foreground-divider);\n  margin-bottom: var(--padding-16);\n  padding-bottom: var(--padding-16);\n}\n.section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.section-content[_ngcontent-%COMP%] {\n  margin-inline-start: var(--padding-12);\n}\n.section-content[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\n  margin-top: var(--padding);\n}\n\n.subheading[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: var(--text-secondary);\n}\n\n.layout[_ngcontent-%COMP%]    + .layout[_ngcontent-%COMP%] {\n  margin-top: var(--padding);\n}\n\n.layout-image[_ngcontent-%COMP%]:hover   .layout-image-overlay[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.7);\n  opacity: 1;\n  visibility: visible;\n}\n.layout-image[_ngcontent-%COMP%]   .layout-image-overlay[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: var(--trans-ease-out);\n  visibility: hidden;\n  width: 100%;\n}\n.layout-image[_ngcontent-%COMP%]   .layout-image-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0 8px;\n}\n\n.vex-color-picker[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  transition: var(--trans-ease-out);\n}\n.vex-color-picker[_ngcontent-%COMP%]:hover, .vex-color-picker.selected[_ngcontent-%COMP%] {\n  background: currentColor !important;\n}\n.vex-color-picker[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .vex-color-picker[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%], .vex-color-picker.selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .vex-color-picker.selected[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: white;\n}\n.vex-color-picker[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  transition: var(--trans-ease-out);\n}\n\n.color[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 50%;\n  box-shadow: var(--elevation-z8);\n  display: flex;\n  flex-direction: row;\n  height: 36px;\n  justify-content: center;\n  margin-inline-end: var(--padding-16);\n  text-align: center;\n  vertical-align: middle;\n  width: 36px;\n}\n.color.light[_ngcontent-%COMP%] {\n  background: white;\n  color: #000;\n}\n.color.dark[_ngcontent-%COMP%] {\n  background: #303030;\n  color: white;\n}\n.color.flat[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #000;\n}\n\nmat-slide-toggle[_ngcontent-%COMP%]    + mat-slide-toggle[_ngcontent-%COMP%], mat-slide-toggle[_ngcontent-%COMP%]    + mat-checkbox[_ngcontent-%COMP%], mat-checkbox[_ngcontent-%COMP%]    + mat-slide-toggle[_ngcontent-%COMP%], mat-checkbox[_ngcontent-%COMP%]    + mat-checkbox[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: var(--padding-12);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2NvbXBvbmVudHMvY29uZmlnLXBhbmVsL2NvbmZpZy1wYW5lbC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL3BheW1lbnQlMjByZXF1ZXN0cyUyMGNoYW5uZWwvZGVtby9zcmMvQHZleC9jb21wb25lbnRzL2NvbmZpZy1wYW5lbC9jb25maWctcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7QUNDRjs7QURFQTtFQUNFLGtEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtBQ0NGO0FEQ0U7RUFDRSxtQkFBQTtBQ0NKOztBREdBO0VBQ0Usc0NBQUE7QUNBRjtBREVFO0VBQ0UsMEJBQUE7QUNBSjs7QURLRTtFQUFBLGdCQUFBO0VBQUEsbUJBQUE7RUFBQSxrQkFBQTtFQUFBLGlCQUFBO0VBQUEsZ0JBQUE7RUFBQSx5QkFBQTtFQUFBO0FBQUE7O0FBR0Y7RUFDRSwwQkFBQTtBQ0RGOztBRE9JO0VBQ0UsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNKTjtBRFFFO0VBQ0UsbUNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDTko7QURRSTtFQUNFLGNBQUE7QUNOTjs7QURXQTtFQUNFLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxpQ0FBQTtBQ1JGO0FEVUU7RUFDRSxtQ0FBQTtBQ1JKO0FEVUk7RUFDRSxZQUFBO0FDUk47QURZRTtFQUNFLGlDQUFBO0FDVko7O0FEZUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDWkY7QURjRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ1pKO0FEZUU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNiSjtBRGdCRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ2RKOztBRGtCQTs7OztFQUlFLGNBQUE7RUFDQSw2QkFBQTtBQ2ZGIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpZy1wYW5lbCB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctMTYpIHZhcigtLXBhZGRpbmcpO1xufVxuXG4uaGVhZGluZyB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZGRpbmcpO1xufVxuXG4uc2VjdGlvbiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWRkaW5nLTE2KTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZGRpbmctMTYpO1xuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxufVxuXG4uc2VjdGlvbi1jb250ZW50IHtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0tcGFkZGluZy0xMik7XG5cbiAgLnN1YmhlYWRpbmcge1xuICAgIG1hcmdpbi10b3A6IHZhcigtLXBhZGRpbmcpO1xuICB9XG59XG5cbi5zdWJoZWFkaW5nIHtcbiAgQGFwcGx5IG15LTQgdXBwZXJjYXNlIHRleHQteHMgdGV4dC1zZWNvbmRhcnkgZm9udC1tZWRpdW07XG59XG5cbi5sYXlvdXQgKyAubGF5b3V0IHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tcGFkZGluZyk7XG59XG5cbi5sYXlvdXQtaW1hZ2Uge1xuXG4gICY6aG92ZXIge1xuICAgIC5sYXlvdXQtaW1hZ2Utb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG4gIH1cblxuICAubGF5b3V0LWltYWdlLW92ZXJsYXkge1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICB9XG4gIH1cbn1cblxuLnZleC1jb2xvci1waWNrZXIge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xuXG4gICY6aG92ZXIsICYuc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvciAhaW1wb3J0YW50O1xuXG4gICAgcCwgZGl2IHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cblxuICBwIHtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucy1lYXNlLW91dCk7XG4gIH1cbn1cblxuXG4uY29sb3Ige1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IHZhcigtLWVsZXZhdGlvbi16OCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMzZweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1wYWRkaW5nLTE2KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogMzZweDtcblxuICAmLmxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuXG4gICYuZGFyayB7XG4gICAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAmLmZsYXQge1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cbn1cblxubWF0LXNsaWRlLXRvZ2dsZSArIG1hdC1zbGlkZS10b2dnbGUsXG5tYXQtc2xpZGUtdG9nZ2xlICsgbWF0LWNoZWNrYm94LFxubWF0LWNoZWNrYm94ICsgbWF0LXNsaWRlLXRvZ2dsZSxcbm1hdC1jaGVja2JveCArIG1hdC1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWRkaW5nLTEyKTtcbn1cbiIsIi5jb25maWctcGFuZWwge1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTE2KSB2YXIoLS1wYWRkaW5nKTtcbn1cblxuLmhlYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWRkaW5nKTtcbn1cblxuLnNlY3Rpb24ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFkZGluZy0xNik7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nLTE2KTtcbn1cbi5zZWN0aW9uOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uc2VjdGlvbi1jb250ZW50IHtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0tcGFkZGluZy0xMik7XG59XG4uc2VjdGlvbi1jb250ZW50IC5zdWJoZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tcGFkZGluZyk7XG59XG5cbi5zdWJoZWFkaW5nIHtcbiAgQGFwcGx5IG15LTQgdXBwZXJjYXNlIHRleHQteHMgdGV4dC1zZWNvbmRhcnkgZm9udC1tZWRpdW07XG59XG5cbi5sYXlvdXQgKyAubGF5b3V0IHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tcGFkZGluZyk7XG59XG5cbi5sYXlvdXQtaW1hZ2U6aG92ZXIgLmxheW91dC1pbWFnZS1vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLmxheW91dC1pbWFnZSAubGF5b3V0LWltYWdlLW92ZXJsYXkge1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLmxheW91dC1pbWFnZSAubGF5b3V0LWltYWdlLW92ZXJsYXkgYnV0dG9uIHtcbiAgcGFkZGluZzogMCA4cHg7XG59XG5cbi52ZXgtY29sb3ItcGlja2VyIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2Utb3V0KTtcbn1cbi52ZXgtY29sb3ItcGlja2VyOmhvdmVyLCAudmV4LWNvbG9yLXBpY2tlci5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvciAhaW1wb3J0YW50O1xufVxuLnZleC1jb2xvci1waWNrZXI6aG92ZXIgcCwgLnZleC1jb2xvci1waWNrZXI6aG92ZXIgZGl2LCAudmV4LWNvbG9yLXBpY2tlci5zZWxlY3RlZCBwLCAudmV4LWNvbG9yLXBpY2tlci5zZWxlY3RlZCBkaXYge1xuICBjb2xvcjogd2hpdGU7XG59XG4udmV4LWNvbG9yLXBpY2tlciBwIHtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xufVxuXG4uY29sb3Ige1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IHZhcigtLWVsZXZhdGlvbi16OCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMzZweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1wYWRkaW5nLTE2KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogMzZweDtcbn1cbi5jb2xvci5saWdodCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzAwMDtcbn1cbi5jb2xvci5kYXJrIHtcbiAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbG9yLmZsYXQge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBjb2xvcjogIzAwMDtcbn1cblxubWF0LXNsaWRlLXRvZ2dsZSArIG1hdC1zbGlkZS10b2dnbGUsXG5tYXQtc2xpZGUtdG9nZ2xlICsgbWF0LWNoZWNrYm94LFxubWF0LWNoZWNrYm94ICsgbWF0LXNsaWRlLXRvZ2dsZSxcbm1hdC1jaGVja2JveCArIG1hdC1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWRkaW5nLTEyKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9959:
/*!*****************************************************************!*\
  !*** ./src/@vex/components/config-panel/config-panel.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigPanelModule": () => (/* binding */ ConfigPanelModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _config_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config-panel.component */ 7218);
/* harmony import */ var _config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-panel-toggle/config-panel-toggle.component */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);










class ConfigPanelModule {}
ConfigPanelModule.ɵfac = function ConfigPanelModule_Factory(t) {
  return new (t || ConfigPanelModule)();
};
ConfigPanelModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ConfigPanelModule
});
ConfigPanelModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__.MatSlideToggleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRippleModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__.MatSliderModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ConfigPanelModule, {
    declarations: [_config_panel_component__WEBPACK_IMPORTED_MODULE_0__.ConfigPanelComponent, _config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_1__.ConfigPanelToggleComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__.MatSlideToggleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRippleModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__.MatSliderModule],
    exports: [_config_panel_component__WEBPACK_IMPORTED_MODULE_0__.ConfigPanelComponent, _config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_1__.ConfigPanelToggleComponent]
  });
})();

/***/ }),

/***/ 7431:
/*!**************************************************************!*\
  !*** ./src/@vex/components/mega-menu/mega-menu.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MegaMenuComponent": () => (/* binding */ MegaMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _popover_popover_ref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../popover/popover-ref */ 2999);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);






function MegaMenuComponent_a_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MegaMenuComponent_a_14_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", feature_r2.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", feature_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](feature_r2.label);
  }
}
function MegaMenuComponent_a_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MegaMenuComponent_a_19_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", page_r5.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](page_r5.label);
  }
}
class MegaMenuComponent {
  constructor(popoverRef) {
    this.popoverRef = popoverRef;
    this.features = [{
      icon: 'mat:layers',
      label: 'Dashboard',
      route: '/'
    }, {
      icon: 'mat:assignment',
      label: 'AIO-Table',
      route: '/apps/aio-table'
    }, {
      icon: 'mat:contact_support',
      label: 'Help Center',
      route: '/apps/help-center'
    }, {
      icon: 'mat:contacts',
      label: 'Contacts',
      route: '/apps/contacts/grid'
    }, {
      icon: 'mat:assessment',
      label: 'Scrumboard',
      route: '/apps/scrumboard/1'
    }, {
      icon: 'mat:book',
      label: 'Documentation',
      route: '/documentation'
    }];
    this.pages = [{
      label: 'All-In-One Table',
      route: '/apps/aio-table'
    }, {
      label: 'Authentication',
      route: '/login'
    }, {
      label: 'Components',
      route: '/ui/components/overview'
    }, {
      label: 'Documentation',
      route: '/documentation'
    }, {
      label: 'FAQ',
      route: '/pages/faq'
    }, {
      label: 'Form Elements',
      route: '/ui/forms/form-elements'
    }, {
      label: 'Form Wizard',
      route: '/ui/forms/form-wizard'
    }, {
      label: 'Guides',
      route: '/pages/guides'
    }, {
      label: 'Help Center',
      route: '/apps/help-center'
    }, {
      label: 'Scrumboard',
      route: '/apps/scrumboard'
    }];
  }
  ngOnInit() {}
  close() {
    this.popoverRef.close();
  }
}
MegaMenuComponent.ɵfac = function MegaMenuComponent_Factory(t) {
  return new (t || MegaMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_popover_popover_ref__WEBPACK_IMPORTED_MODULE_0__.PopoverRef));
};
MegaMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MegaMenuComponent,
  selectors: [["vex-mega-menu"]],
  decls: 20,
  vars: 2,
  consts: [[1, "card", "overflow-auto", "flex", "flex-col", "md:flex-row", "sm:mr-6"], [1, "bg-primary/10", "p-gutter", "flex-auto", "max-w-[300px]"], [1, "headline", "mb-4", "text-primary"], [1, "caption"], ["color", "primary", "mat-flat-button", "", "type", "button", 1, "mt-4", "w-full"], [1, "p-gutter", "flex-auto", "max-w-[400px]"], [1, "body-2", "m-0"], [1, "mt-4", "grid", "grid-cols-3"], ["class", "text-dark p-3 text-center hover:bg-primary/10 hover:text-primary trans-ease-out rounded block no-underline", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "p-gutter", "flex-auto", "max-w-[350px]"], [1, "mt-6", "grid", "grid-cols-2", "gap-x-12", "gap-y-4"], ["class", "text-dark body-1 no-underline hover:text-primary trans-ease-out", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "text-dark", "p-3", "text-center", "hover:bg-primary/10", "hover:text-primary", "trans-ease-out", "rounded", "block", "no-underline", 3, "routerLink", "click"], ["color", "primary", 1, "icon-xl", 3, "svgIcon"], [1, "body-2", "mt-2"], [1, "text-dark", "body-1", "no-underline", "hover:text-primary", "trans-ease-out", 3, "routerLink", "click"]],
  template: function MegaMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Mega Menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Learn More");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5)(11, "h3", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Features");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MegaMenuComponent_a_14_Template, 4, 3, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9)(16, "h3", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Pages");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MegaMenuComponent_a_19_Template, 2, 2, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.features);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
  encapsulation: 2
});

/***/ }),

/***/ 7665:
/*!***********************************************************!*\
  !*** ./src/@vex/components/mega-menu/mega-menu.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MegaMenuModule": () => (/* binding */ MegaMenuModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _mega_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mega-menu.component */ 7431);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);






class MegaMenuModule {}
MegaMenuModule.ɵfac = function MegaMenuModule_Factory(t) {
  return new (t || MegaMenuModule)();
};
MegaMenuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MegaMenuModule
});
MegaMenuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MegaMenuModule, {
    declarations: [_mega_menu_component__WEBPACK_IMPORTED_MODULE_0__.MegaMenuComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule],
    exports: [_mega_menu_component__WEBPACK_IMPORTED_MODULE_0__.MegaMenuComponent]
  });
})();

/***/ }),

/***/ 1271:
/*!**************************************************************************!*\
  !*** ./src/@vex/components/navigation-item/navigation-item.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationItemComponent": () => (/* binding */ NavigationItemComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _utils_track_by__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/track-by */ 1081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/navigation.service */ 7360);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 9121);










const _c0 = function (a0, a1) {
  return {
    "bg-primary text-primary-contrast": a0,
    "navigation-color": a1
  };
};
function NavigationItemComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hover:bg-hover", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 5, ctx_r0.isActive$)(ctx_r0.item));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 7, ctx_r0.isActive$)(ctx_r0.item), !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 9, ctx_r0.isActive$)(ctx_r0.item)))("routerLink", ctx_r0.item.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.item.label, "\n");
  }
}
function NavigationItemComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationItemComponent_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.item.route());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hover:bg-hover", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, ctx_r1.isActive$)(ctx_r1.item));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.item.label, "\n");
  }
}
const _c1 = function (a0) {
  return {
    "text-primary": a0
  };
};
function NavigationItemComponent_ng_container_2_ng_container_8_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", child_r9.route)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 4, ctx_r10.isActive$)(child_r9)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", child_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](child_r9.label);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationItemComponent_ng_container_2_ng_container_8_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](child_r9.route());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", child_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](child_r9.label);
  }
}
const _c2 = function (a0) {
  return {
    item: a0
  };
};
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](11);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c2, item_r36))("ngTemplateOutlet", _r7);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-menu", 6, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template, 2, 4, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const child_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r34)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, ctx_r33.isActive$)(child_r32)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](child_r32.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", child_r32.children);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template, 7, 8, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const child_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](9);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c2, child_r32))("ngTemplateOutlet", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r31.isDropdown(child_r32));
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-menu", 6, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template, 3, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r30)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, ctx_r29.isActive$)(item_r28)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r28.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r28.children);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template, 7, 8, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](7);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c2, item_r28))("ngTemplateOutlet", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r27.isDropdown(item_r28));
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-menu", 6, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template, 3, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const child_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r26)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, ctx_r25.isActive$)(child_r24)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](child_r24.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", child_r24.children);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_Template, 7, 8, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const child_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c2, child_r24))("ngTemplateOutlet", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r23.isDropdown(child_r24));
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-menu", 6, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_Template, 3, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r22)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, ctx_r21.isActive$)(item_r20)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r20.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r20.children);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_Template, 7, 8, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c2, item_r20))("ngTemplateOutlet", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.isDropdown(item_r20));
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-menu", 6, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_Template, 3, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
    const child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r18)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, ctx_r12.isActive$)(child_r9)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", child_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](child_r9.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", child_r9.children);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavigationItemComponent_ng_container_2_ng_container_8_a_1_Template, 5, 8, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_div_2_Template, 4, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_Template, 9, 9, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const child_r9 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.isLink(child_r9) && !ctx_r6.isFunction(child_r9.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.isLink(child_r9) && ctx_r6.isFunction(child_r9.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.isDropdown(child_r9));
  }
}
function NavigationItemComponent_ng_container_2_ng_template_9_a_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().item;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", item_r42.route)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, ctx_r43.isActive$)(item_r42)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r42.label);
  }
}
function NavigationItemComponent_ng_container_2_ng_template_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationItemComponent_ng_container_2_ng_template_9_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48);
      const item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().item;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](item_r42.route());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().item;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx_r44.isActive$)(item_r42)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r42.label);
  }
}
function NavigationItemComponent_ng_container_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NavigationItemComponent_ng_container_2_ng_template_9_a_0_Template, 3, 7, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavigationItemComponent_ng_container_2_ng_template_9_div_1_Template, 3, 6, "div", 22);
  }
  if (rf & 2) {
    const item_r42 = ctx.item;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.isLink(item_r42) && !ctx_r8.isFunction(item_r42.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.isLink(item_r42) && ctx_r8.isFunction(item_r42.route));
  }
}
function NavigationItemComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-menu", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NavigationItemComponent_ng_container_2_ng_container_8_Template, 4, 3, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, NavigationItemComponent_ng_container_2_ng_template_9_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hover:bg-hover", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 6, ctx_r2.isActive$)(ctx_r2.item));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r5)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](12, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 8, ctx_r2.isActive$)(ctx_r2.item), !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 10, ctx_r2.isActive$)(ctx_r2.item)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.item.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.item.children);
  }
}
class NavigationItemComponent {
  constructor(navigationService, router) {
    this.navigationService = navigationService;
    this.router = router;
    this.isActive$ = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => item => this.hasActiveChilds(item)));
    this.isLink = this.navigationService.isLink;
    this.isDropdown = this.navigationService.isDropdown;
    this.isSubheading = this.navigationService.isSubheading;
    this.trackByRoute = _utils_track_by__WEBPACK_IMPORTED_MODULE_0__.trackByRoute;
  }
  ngOnInit() {}
  hasActiveChilds(parent) {
    if (this.isLink(parent)) {
      return this.router.isActive(parent.route, true);
    }
    if (this.isDropdown(parent) || this.isSubheading(parent)) {
      return parent.children.some(child => {
        if (this.isDropdown(child)) {
          return this.hasActiveChilds(child);
        }
        if (this.isLink(child) && !this.isFunction(child.route)) {
          return this.router.isActive(child.route, true);
        }
        return false;
      });
    }
    return false;
  }
  isFunction(prop) {
    return prop instanceof Function;
  }
}
NavigationItemComponent.ɵfac = function NavigationItemComponent_Factory(t) {
  return new (t || NavigationItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
NavigationItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: NavigationItemComponent,
  selectors: [["vex-navigation-item"]],
  inputs: {
    item: "item"
  },
  decls: 3,
  vars: 3,
  consts: [["class", "navigation-item", "matRipple", "", 3, "hover:bg-hover", "ngClass", "routerLink", 4, "ngIf"], ["class", "navigation-item navigation-color", "matRipple", "", 3, "hover:bg-hover", "click", 4, "ngIf"], [4, "ngIf"], ["matRipple", "", 1, "navigation-item", 3, "ngClass", "routerLink"], ["matRipple", "", 1, "navigation-item", "navigation-color", 3, "click"], ["matRipple", "", 1, "navigation-item", 3, "matMenuTriggerFor", "ngClass"], ["yPosition", "below"], ["menu", "matMenu"], [4, "ngFor", "ngForOf"], ["linkTemplate", ""], ["class", "navigation-menu-item", "mat-menu-item", "", 3, "routerLink", "ngClass", 4, "ngIf"], ["class", "navigation-menu-item", "mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "routerLink", "ngClass"], [1, "text-current", 3, "svgIcon"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "click"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "matMenuTriggerFor", "ngClass"], ["level1", "matMenu"], [3, "ngTemplateOutletContext", "ngTemplateOutlet"], ["level2", "matMenu"], ["level3", "matMenu"], ["level4", "matMenu"], ["level5", "matMenu"], ["class", "navigation-menu-item", "mat-menu-item", "", 3, "ngClass", "click", 4, "ngIf"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "ngClass", "click"]],
  template: function NavigationItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NavigationItemComponent_a_0_Template, 5, 14, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavigationItemComponent_div_1_Template, 3, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_Template, 11, 15, "ng-container", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && !ctx.isFunction(ctx.item.route));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && ctx.isFunction(ctx.item.route));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSubheading(ctx.item) && (ctx.item.children == null ? null : ctx.item.children.length) > 0 || ctx.isDropdown(ctx.item));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: [".navigation-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: var(--border-radius);\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  text-decoration-line: none;\n  margin-inline-end: var(--padding-8);\n  transition: var(--trans-ease-out);\n}\n\n.navigation-color[_ngcontent-%COMP%] {\n  color: var(--navigation-color);\n}\n\n.navigation-menu-item[_ngcontent-%COMP%] {\n  transition: var(--trans-ease-out);\n}\n.navigation-menu-item[_ngcontent-%COMP%]:hover {\n  --tw-text-opacity: 1;\n  color: rgba(var(--color-primary), var(--tw-text-opacity));\n}\n.navigation-menu-item[_ngcontent-%COMP%]:hover   .mat-icon[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgba(var(--color-primary), var(--tw-text-opacity));\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2NvbXBvbmVudHMvbmF2aWdhdGlvbi1pdGVtL25hdmlnYXRpb24taXRlbS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL3BheW1lbnQlMjByZXF1ZXN0cyUyMGNoYW5uZWwvZGVtby9zcmMvQHZleC9jb21wb25lbnRzL25hdmlnYXRpb24taXRlbS9uYXZpZ2F0aW9uLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxrQkFBQTtFQUFBLGNBQUE7RUFBQSxlQUFBO0VBQUEseUJBQUE7VUFBQSxpQkFBQTtFQUFBLG1DQUFBO0VBQUEsa0JBQUE7RUFBQSxtQkFBQTtFQUFBLG1CQUFBO0VBQUEsc0JBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0JBQUE7RUFBQSwwQkFBQTtFQUNBLG1DQUFBO0VBQ0E7QUFGQTs7QUFLRjtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQ0FBQTtBQ0NGO0FERUk7RUFBQSxvQkFBQTtFQUFBO0FBQUE7QUFHRTtFQUFBLG9CQUFBO0VBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9uLWl0ZW0ge1xyXG4gIEBhcHBseSByb3VuZGVkIGN1cnNvci1wb2ludGVyIHRleHQtc20gZm9udC1tZWRpdW0gcHgtNCBweS0yIHJlbGF0aXZlIHNlbGVjdC1ub25lIG5vLXVuZGVybGluZSBibG9jaztcclxuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tcGFkZGluZy04KTtcclxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucy1lYXNlLW91dCk7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLWNvbG9yIHtcclxuICBjb2xvcjogdmFyKC0tbmF2aWdhdGlvbi1jb2xvcik7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLW1lbnUtaXRlbSB7XHJcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIEBhcHBseSB0ZXh0LXByaW1hcnk7XHJcblxyXG4gICAgLm1hdC1pY29uIHtcclxuICAgICAgQGFwcGx5IHRleHQtcHJpbWFyeTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLm5hdmlnYXRpb24taXRlbSB7XG4gIEBhcHBseSByb3VuZGVkIGN1cnNvci1wb2ludGVyIHRleHQtc20gZm9udC1tZWRpdW0gcHgtNCBweS0yIHJlbGF0aXZlIHNlbGVjdC1ub25lIG5vLXVuZGVybGluZSBibG9jaztcbiAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLXBhZGRpbmctOCk7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2Utb3V0KTtcbn1cblxuLm5hdmlnYXRpb24tY29sb3Ige1xuICBjb2xvcjogdmFyKC0tbmF2aWdhdGlvbi1jb2xvcik7XG59XG5cbi5uYXZpZ2F0aW9uLW1lbnUtaXRlbSB7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2Utb3V0KTtcbn1cbi5uYXZpZ2F0aW9uLW1lbnUtaXRlbTpob3ZlciB7XG4gIEBhcHBseSB0ZXh0LXByaW1hcnk7XG59XG4ubmF2aWdhdGlvbi1tZW51LWl0ZW06aG92ZXIgLm1hdC1pY29uIHtcbiAgQGFwcGx5IHRleHQtcHJpbWFyeTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2656:
/*!***********************************************************************!*\
  !*** ./src/@vex/components/navigation-item/navigation-item.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationItemModule": () => (/* binding */ NavigationItemModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _navigation_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation-item.component */ 1271);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);







class NavigationItemModule {}
NavigationItemModule.ɵfac = function NavigationItemModule_Factory(t) {
  return new (t || NavigationItemModule)();
};
NavigationItemModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: NavigationItemModule
});
NavigationItemModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRippleModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NavigationItemModule, {
    declarations: [_navigation_item_component__WEBPACK_IMPORTED_MODULE_0__.NavigationItemComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRippleModule],
    exports: [_navigation_item_component__WEBPACK_IMPORTED_MODULE_0__.NavigationItemComponent]
  });
})();

/***/ }),

/***/ 2999:
/*!****************************************************!*\
  !*** ./src/@vex/components/popover/popover-ref.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverRef": () => (/* binding */ PopoverRef)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);

class PopoverRef {
  constructor(overlay, content, data) {
    this.overlay = overlay;
    this.content = content;
    this.data = data;
    this.afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.afterClosed$ = this.afterClosed.asObservable();
    overlay.backdropClick().subscribe(() => {
      this._close('backdropClick', null);
    });
  }
  close(data) {
    this._close('close', data);
  }
  _close(type, data) {
    this.overlay.dispose();
    this.afterClosed.next({
      type,
      data
    });
    this.afterClosed.complete();
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** ./src/@vex/components/popover/popover.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverComponent": () => (/* binding */ PopoverComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _animations_popover_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animations/popover.animation */ 4372);
/* harmony import */ var _popover_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover-ref */ 2999);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function PopoverComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r0.content, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function PopoverComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function PopoverComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PopoverComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.content)("ngTemplateOutletContext", ctx_r1.context);
  }
}
function PopoverComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function PopoverComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PopoverComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngComponentOutlet", ctx_r2.content);
  }
}
class PopoverComponent {
  constructor(popoverRef) {
    this.popoverRef = popoverRef;
    this.renderMethod = 'component';
  }
  ngOnInit() {
    this.content = this.popoverRef.content;
    if (typeof this.content === 'string') {
      this.renderMethod = 'text';
    }
    if (this.content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef) {
      this.renderMethod = 'template';
      this.context = {
        close: this.popoverRef.close.bind(this.popoverRef)
      };
    }
  }
}
PopoverComponent.ɵfac = function PopoverComponent_Factory(t) {
  return new (t || PopoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_popover_ref__WEBPACK_IMPORTED_MODULE_1__.PopoverRef));
};
PopoverComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PopoverComponent,
  selectors: [["vex-popover"]],
  decls: 5,
  vars: 5,
  consts: [[1, "vex-popover"], [3, "ngSwitch"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "innerHTML"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngComponentOutlet"]],
  template: function PopoverComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PopoverComponent_div_2_Template, 1, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PopoverComponent_ng_container_3_Template, 2, 2, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PopoverComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transformPopover", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.renderMethod);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "template");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "component");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgComponentOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase],
  styles: ["[_nghost-%COMP%], .vex-popover[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2NvbXBvbmVudHMvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vcGF5bWVudCUyMHJlcXVlc3RzJTIwY2hhbm5lbC9kZW1vL3NyYy9AdmV4L2NvbXBvbmVudHMvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LCAudmV4LXBvcG92ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIiwiOmhvc3QsIC52ZXgtcG9wb3ZlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [_animations_popover_animation__WEBPACK_IMPORTED_MODULE_0__.popoverAnimation]
  }
});

/***/ }),

/***/ 1512:
/*!*******************************************************!*\
  !*** ./src/@vex/components/popover/popover.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverModule": () => (/* binding */ PopoverModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _popover_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover.component */ 0);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




class PopoverModule {}
PopoverModule.ɵfac = function PopoverModule_Factory(t) {
  return new (t || PopoverModule)();
};
PopoverModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PopoverModule
});
PopoverModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.OverlayModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PopoverModule, {
    declarations: [_popover_component__WEBPACK_IMPORTED_MODULE_0__.PopoverComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.OverlayModule]
  });
})();

/***/ }),

/***/ 5786:
/*!********************************************************!*\
  !*** ./src/@vex/components/popover/popover.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverService": () => (/* binding */ PopoverService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ 7520);
/* harmony import */ var _popover_ref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover-ref */ 2999);
/* harmony import */ var _popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover.component */ 0);







class PopoverService {
  constructor(overlay, injector) {
    this.overlay = overlay;
    this.injector = injector;
  }
  open({
    origin,
    content,
    data,
    width,
    height,
    position,
    offsetX,
    offsetY
  }) {
    const overlayRef = this.overlay.create(this.getOverlayConfig({
      origin,
      width,
      height,
      position,
      offsetX,
      offsetY
    }));
    const popoverRef = new _popover_ref__WEBPACK_IMPORTED_MODULE_0__.PopoverRef(overlayRef, content, data);
    const injector = this.createInjector(popoverRef, this.injector);
    overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.ComponentPortal(_popover_component__WEBPACK_IMPORTED_MODULE_1__.PopoverComponent, null, injector));
    return popoverRef;
  }
  static getPositions() {
    return [{
      originX: 'center',
      originY: 'top',
      overlayX: 'center',
      overlayY: 'bottom'
    }, {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top'
    }];
  }
  getOverlayConfig({
    origin,
    width,
    height,
    position,
    offsetX,
    offsetY
  }) {
    return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.OverlayConfig({
      hasBackdrop: true,
      width,
      height,
      backdropClass: 'popover-backdrop',
      positionStrategy: this.getOverlayPosition({
        origin,
        position,
        offsetX,
        offsetY
      }),
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });
  }
  createInjector(popoverRef, injector) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector.create({
      providers: [{
        provide: _popover_ref__WEBPACK_IMPORTED_MODULE_0__.PopoverRef,
        useValue: popoverRef
      }],
      parent: injector
    });
  }
  getOverlayPosition({
    origin,
    position,
    offsetX,
    offsetY
  }) {
    return this.overlay.position().flexibleConnectedTo(origin).withPositions(position || PopoverService.getPositions()).withFlexibleDimensions(true).withDefaultOffsetY(offsetY || 0).withDefaultOffsetX(offsetX || 0).withTransformOriginOn('.vex-popover').withPush(true);
  }
}
PopoverService.ɵfac = function PopoverService_Factory(t) {
  return new (t || PopoverService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
};
PopoverService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: PopoverService,
  factory: PopoverService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6508:
/*!********************************************************************!*\
  !*** ./src/@vex/components/progress-bar/progress-bar.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarComponent": () => (/* binding */ ProgressBarComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8653);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-loading-bar/core */ 574);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);





class ProgressBarComponent {
  constructor(loader) {
    this.loader = loader;
    this.value$ = this.loader.useRef('router').value$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.delayWhen)(value => value === 0 ? (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(200) : (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(undefined)));
  }
  ngOnInit() {}
}
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
  return new (t || ProgressBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__.LoadingBarService));
};
ProgressBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ProgressBarComponent,
  selectors: [["vex-progress-bar"]],
  decls: 4,
  vars: 9,
  consts: [["mode", "determinate", 1, "progress-bar", 3, "value"]],
  template: function ProgressBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("visible", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 3, ctx.value$) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 5, ctx.value$) !== 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 7, ctx.value$));
    }
  },
  dependencies: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBar, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: [".progress-bar[_ngcontent-%COMP%] {\n  left: 0;\n  opacity: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  visibility: hidden;\n  z-index: 99999;\n  transition: opacity 500ms var(--trans-ease-out-timing-function) 200ms, visibility 0ms var(--trans-ease-out-timing-function) 700ms;\n}\n.progress-bar.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 500ms var(--trans-ease-out-timing-function), visibility 0ms var(--trans-ease-out-timing-function) 0ms;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL3BheW1lbnQlMjByZXF1ZXN0cyUyMGNoYW5uZWwvZGVtby9zcmMvQHZleC9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlJQUFBO0FDSEY7QURLRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHlIQUFBO0FDSEoiLCJzb3VyY2VzQ29udGVudCI6WyIkdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XHJcbiR0cmFuc2l0aW9uLWRlbGF5OiAyMDBtcztcclxuJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10cmFucy1lYXNlLW91dC10aW1pbmctZnVuY3Rpb24pO1xyXG5cclxuLnByb2dyZXNzLWJhciB7XHJcbiAgbGVmdDogMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHotaW5kZXg6IDk5OTk5O1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgJHRyYW5zaXRpb24tZHVyYXRpb24gJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uICR0cmFuc2l0aW9uLWRlbGF5LCB2aXNpYmlsaXR5IDBtcyAkdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24gKCR0cmFuc2l0aW9uLWR1cmF0aW9uICsgJHRyYW5zaXRpb24tZGVsYXkpO1xyXG5cclxuICAmLnZpc2libGUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR0cmFuc2l0aW9uLWR1cmF0aW9uICR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiwgdmlzaWJpbGl0eSAwbXMgJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uIDBtcztcclxuICB9XHJcbn1cclxuIiwiLnByb2dyZXNzLWJhciB7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyB2YXIoLS10cmFucy1lYXNlLW91dC10aW1pbmctZnVuY3Rpb24pIDIwMG1zLCB2aXNpYmlsaXR5IDBtcyB2YXIoLS10cmFucy1lYXNlLW91dC10aW1pbmctZnVuY3Rpb24pIDcwMG1zO1xufVxuLnByb2dyZXNzLWJhci52aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyB2YXIoLS10cmFucy1lYXNlLW91dC10aW1pbmctZnVuY3Rpb24pLCB2aXNpYmlsaXR5IDBtcyB2YXIoLS10cmFucy1lYXNlLW91dC10aW1pbmctZnVuY3Rpb24pIDBtcztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4855:
/*!*****************************************************************!*\
  !*** ./src/@vex/components/progress-bar/progress-bar.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarModule": () => (/* binding */ ProgressBarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _progress_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress-bar.component */ 6508);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-loading-bar/core */ 574);
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-loading-bar/router */ 1108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);






class ProgressBarModule {}
ProgressBarModule.ɵfac = function ProgressBarModule_Factory(t) {
  return new (t || ProgressBarModule)();
};
ProgressBarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ProgressBarModule
});
ProgressBarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [{
    provide: _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__.LOADING_BAR_CONFIG,
    useValue: {
      latencyThreshold: 80
    }
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBarModule, _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__.LoadingBarModule, _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__.LoadingBarRouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProgressBarModule, {
    declarations: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__.ProgressBarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBarModule, _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__.LoadingBarModule, _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__.LoadingBarRouterModule],
    exports: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__.ProgressBarComponent]
  });
})();

/***/ }),

/***/ 2132:
/*!**************************************************************!*\
  !*** ./src/@vex/components/scrollbar/scrollbar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollbarComponent": () => (/* binding */ ScrollbarComponent)
/* harmony export */ });
/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplebar */ 8642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


const _c0 = ["*"];
class ScrollbarComponent {
  constructor(_element, zone) {
    this._element = _element;
    this.zone = zone;
  }
  ngAfterContentInit() {
    this.zone.runOutsideAngular(() => {
      this.scrollbarRef = new simplebar__WEBPACK_IMPORTED_MODULE_0__["default"](this._element.nativeElement, this.options);
    });
  }
  ngOnDestroy() {
    /**
     * Exists, but not typed in the type definition
     * https://github.com/Grsmto/simplebar/blob/master/packages/simplebar/src/simplebar.js#L903
     */
    if (this.scrollbarRef && this.scrollbarRef.unMount) {
      this.scrollbarRef.unMount();
    }
  }
}
ScrollbarComponent.ɵfac = function ScrollbarComponent_Factory(t) {
  return new (t || ScrollbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
};
ScrollbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ScrollbarComponent,
  selectors: [["vex-scrollbar"]],
  hostAttrs: [1, "vex-scrollbar"],
  inputs: {
    options: "options"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function ScrollbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    }
  },
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2NvbXBvbmVudHMvc2Nyb2xsYmFyL3Njcm9sbGJhci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL3BheW1lbnQlMjByZXF1ZXN0cyUyMGNoYW5uZWwvZGVtby9zcmMvQHZleC9jb21wb25lbnRzL3Njcm9sbGJhci9zY3JvbGxiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQ0NGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1pbi1oZWlnaHQ6IDA7XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLWhlaWdodDogMDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1337:
/*!***********************************************************!*\
  !*** ./src/@vex/components/scrollbar/scrollbar.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollbarModule": () => (/* binding */ ScrollbarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _scrollbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollbar.component */ 2132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class ScrollbarModule {}
ScrollbarModule.ɵfac = function ScrollbarModule_Factory(t) {
  return new (t || ScrollbarModule)();
};
ScrollbarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ScrollbarModule
});
ScrollbarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScrollbarModule, {
    declarations: [_scrollbar_component__WEBPACK_IMPORTED_MODULE_0__.ScrollbarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_scrollbar_component__WEBPACK_IMPORTED_MODULE_0__.ScrollbarComponent]
  });
})();

/***/ }),

/***/ 6547:
/*!********************************************************************!*\
  !*** ./src/@vex/components/search-modal/search-modal.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchModalComponent": () => (/* binding */ SearchModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);








class SearchModalComponent {
  constructor() {}
  ngOnInit() {}
}
SearchModalComponent.ɵfac = function SearchModalComponent_Factory(t) {
  return new (t || SearchModalComponent)();
};
SearchModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SearchModalComponent,
  selectors: [["vex-search-modal"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 66,
  vars: 0,
  consts: [[1, "flex", "items-center", "gap-4", "px-6", "py-3", "border-b", "border-divider"], ["svgIcon", "mat:search", 1, "text-secondary", "flex-none"], ["type", "text", "placeholder", "Search...", 1, "text-xl", "font-medium", "bg-transparent", "outline-none", "flex-auto", "placeholder-secondary"], ["type", "button", "mat-icon-button", "", 1, "flex-none", "ltr:-mr-2", "rtl:-ml-2", "text-secondary"], ["svgIcon", "mat:settings"], [1, "p-4"], [1, "text-xs", "font-semibold", "text-secondary", "px-2", "mb-2"], [1, "space-y-1"], ["matRipple", "", 1, "px-2", "py-2", "hover:bg-hover", "rounded", "transition", "duration-200", "ease-out", "flex", "items-center", "gap-4", "cursor-pointer", "select-none"], ["src", "assets/img/avatars/4.jpg", 1, "w-8", "h-8", "rounded-full", "flex-none"], [1, "flex-auto", "text-base", "font-medium"], [1, "flex-none", "text-xs", "text-secondary", "font-medium", "flex", "items-center", "gap-2"], ["svgIcon", "mat:contacts", 1, "icon-xs", "flex-none"], ["svgIcon", "mat:chevron_right", 1, "icon-sm", "flex-none"], ["src", "assets/img/avatars/3.jpg", 1, "w-8", "h-8", "rounded-full", "flex-none"], [1, "flex", "items-center", "justify-center", "w-8", "h-8", "rounded-full", "bg-foreground/20"], ["svgIcon", "mat:web", 1, "icon-sm", "flex-none"], [1, "text-secondary", "text-xs"], ["svgIcon", "mat:check", "color", "primary", 1, "icon-sm", "flex-none"]],
  template: function SearchModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 1)(3, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contacts");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Alice Miller");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11)(15, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "found in Contacts");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Frank White");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11)(24, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "found in Contacts");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5)(29, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Pages");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7)(32, "div", 8)(33, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10)(36, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Scrumboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "/apps/scrumboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8)(42, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "mat-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10)(45, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Mailbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "/apps/mailbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "mat-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5)(51, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Tasks");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 7)(54, "div", 8)(55, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "mat-icon", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Configure OrderController as defined in RVT-11");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "mat-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8)(61, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "mat-icon", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Add more data-models to product-controller");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "mat-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatIconButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple]
});

/***/ }),

/***/ 1025:
/*!********************************************************!*\
  !*** ./src/@vex/components/search/search.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ 2777);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/layout.service */ 7901);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/search.service */ 7845);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
var _class;











const _c0 = ["searchInput"];
function SearchComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_div_8_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
let SearchComponent = (_class = class SearchComponent {
  constructor(layoutService, searchService) {
    this.layoutService = layoutService;
    this.searchService = searchService;
    this.show$ = this.layoutService.searchOpen$;
    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl();
  }
  ngOnInit() {
    this.searchService.isOpenSubject.next(true);
    this.searchCtrl.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this)).subscribe(value => this.searchService.valueChangesSubject.next(value));
    this.show$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(show => show), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this)).subscribe(() => this.input.nativeElement.focus());
  }
  close() {
    this.layoutService.closeSearch();
    this.searchCtrl.setValue(undefined);
    this.searchService.isOpenSubject.next(false);
  }
  search() {
    this.searchService.submitSubject.next(this.searchCtrl.value);
    this.close();
  }
  ngOnDestroy() {
    this.layoutService.closeSearch();
    this.searchCtrl.setValue(undefined);
    this.searchService.isOpenSubject.next(false);
  }
}, _class.ɵfac = function SearchComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_1__.SearchService));
}, _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["vex-search"]],
  viewQuery: function SearchComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    }
  },
  decls: 10,
  vars: 8,
  consts: [[1, "search", 3, "keyup.escape"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "ltr:right-12", "rtl:left-12", "top-12", "absolute", 3, "click"], ["svgIcon", "mat:close"], ["placeholder", "Search...", 1, "search-input", 3, "formControl", "keyup.enter"], ["searchInput", ""], [1, "search-hint"], ["class", "search-overlay", 3, "click", 4, "ngIf"], [1, "search-overlay", 3, "click"]],
  template: function SearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.escape", function SearchComponent_Template_div_keyup_escape_0_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_2_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function SearchComponent_Template_input_keyup_enter_4_listener() {
        return ctx.search();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Hit enter to search");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SearchComponent_div_8_Template, 1, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 4, ctx.show$));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.searchCtrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 6, ctx.show$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: [".search[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  opacity: 0;\n  height: 50vh;\n  pointer-events: none;\n  transform: scale(0.75);\n  transition: all 0.25s cubic-bezier(0.2, 1, 0.3, 1);\n  z-index: 1050;\n}\n.search.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n  transform: scale(1);\n  transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n}\n\n.search-input[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--foreground-divider);\n  font-size: 7vw;\n  line-height: 3rem;\n  width: 75%;\n  margin: 0px;\n  border-radius: 0px;\n  border-right-width: 0px;\n  border-left-width: 0px;\n  border-top-width: 0px;\n  background-color: transparent;\n  font-weight: 700;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.search-hint[_ngcontent-%COMP%] {\n  width: 75%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  text-align: right;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  font-weight: 700;\n  color: var(--text-hint);\n}\n\n.search-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  opacity: 0;\n  height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL3BheW1lbnQlMjByZXF1ZXN0cyUyMGNoYW5uZWwvZGVtby9zcmMvQHZleC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxlQUFBO0VBQUEsUUFBQTtFQUFBLFNBQUE7RUFBQSxhQUFBO0VBQUEsV0FBQTtFQUFBLHNCQUFBO0VBQUEsbUJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQUEsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0RBQUE7RUFDQTtBQUxBO0FBT0E7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlEQUFBO0FDQ0o7O0FER0E7RUFDRSxrREFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQUEsa0JBQUE7RUFBQSx1QkFBQTtFQUFBLHNCQUFBO0VBQUEscUJBQUE7RUFBQSw2QkFBQTtFQUFBLGdCQUFBO0FDQUY7QURFRTtFQUNFLGFBQUE7QUNBSjs7QURJQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUFBLGtCQUFBO0VBQUEsaUJBQUE7RUFBQSxvQkFBQTtFQUFBLGlCQUFBO0VBQUEsZUFBQTtFQUFBLG1CQUFBO0VBQUEsZ0JBQUE7RUFBQSx1QkFBQTtBQ0RGOztBREtFO0VBQUEsZUFBQTtFQUFBLFdBQUE7RUFBQSxTQUFBO0VBQUEsV0FBQTtFQUFBLFVBQUE7RUFDQTtBQURBIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaCB7XHJcbiAgQGFwcGx5IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIGZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgb3BhY2l0eS0wO1xyXG4gIGhlaWdodDogNTB2aDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMjVzIGN1YmljLWJlemllciguMiwgMSwgLjMsIDEpO1xyXG4gIHotaW5kZXg6IDEwNTA7XHJcblxyXG4gICYuc2hvdyB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBjdWJpYy1iZXppZXIoLjIsIDEsIC4zLCAxKTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtaW5wdXQge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xyXG4gIGZvbnQtc2l6ZTogN3Z3O1xyXG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgQGFwcGx5IG0tMCByb3VuZGVkLW5vbmUgYm9yZGVyLXItMCBib3JkZXItbC0wIGJvcmRlci10LTAgZm9udC1ib2xkIGJnLXRyYW5zcGFyZW50O1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWhpbnQge1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgQGFwcGx5IHRleHQtYmFzZSB0ZXh0LXJpZ2h0IHB5LTQgbXgtYXV0byB0ZXh0LWhpbnQgZm9udC1ib2xkO1xyXG59XHJcblxyXG4uc2VhcmNoLW92ZXJsYXkge1xyXG4gIEBhcHBseSBmaXhlZCB3LWZ1bGwgYm90dG9tLTAgbGVmdC0wIG9wYWNpdHktMDtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbn1cclxuIiwiLnNlYXJjaCB7XG4gIEBhcHBseSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciBmaXhlZCB0b3AtMCBsZWZ0LTAgdy1mdWxsIG9wYWNpdHktMDtcbiAgaGVpZ2h0OiA1MHZoO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjIsIDEsIDAuMywgMSk7XG4gIHotaW5kZXg6IDEwNTA7XG59XG4uc2VhcmNoLnNob3cge1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuMiwgMSwgMC4zLCAxKTtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBmb250LXNpemU6IDd2dztcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIHdpZHRoOiA3NSU7XG4gIEBhcHBseSBtLTAgcm91bmRlZC1ub25lIGJvcmRlci1yLTAgYm9yZGVyLWwtMCBib3JkZXItdC0wIGZvbnQtYm9sZCBiZy10cmFuc3BhcmVudDtcbn1cbi5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc2VhcmNoLWhpbnQge1xuICB3aWR0aDogNzUlO1xuICBAYXBwbHkgdGV4dC1iYXNlIHRleHQtcmlnaHQgcHktNCBteC1hdXRvIHRleHQtaGludCBmb250LWJvbGQ7XG59XG5cbi5zZWFyY2gtb3ZlcmxheSB7XG4gIEBhcHBseSBmaXhlZCB3LWZ1bGwgYm90dG9tLTAgbGVmdC0wIG9wYWNpdHktMDtcbiAgaGVpZ2h0OiA1MHZoO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
}), _class);
SearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.UntilDestroy)()], SearchComponent);


/***/ }),

/***/ 1002:
/*!*****************************************************!*\
  !*** ./src/@vex/components/search/search.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchModule": () => (/* binding */ SearchModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.component */ 1025);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);






class SearchModule {}
SearchModule.ɵfac = function SearchModule_Factory(t) {
  return new (t || SearchModule)();
};
SearchModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SearchModule
});
SearchModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SearchModule, {
    declarations: [_search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
    exports: [_search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent]
  });
})();

/***/ }),

/***/ 7995:
/*!**********************************************************!*\
  !*** ./src/@vex/components/sidebar/sidebar.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


const _c0 = ["*"];
class SidebarComponent {
  constructor(document) {
    this.document = document;
    this.position = 'left';
  }
  get opened() {
    return this._opened;
  }
  set opened(opened) {
    this._opened = opened;
    opened ? this.enableScrollblock() : this.disableScrollblock();
  }
  get positionLeft() {
    return this.position === 'left';
  }
  get positionRight() {
    return this.position === 'right';
  }
  enableScrollblock() {
    if (!this.document.body.classList.contains('vex-scrollblock')) {
      this.document.body.classList.add('vex-scrollblock');
    }
  }
  disableScrollblock() {
    if (this.document.body.classList.contains('vex-scrollblock')) {
      this.document.body.classList.remove('vex-scrollblock');
    }
  }
  open() {
    this.opened = true;
  }
  close() {
    this.opened = false;
  }
  ngOnDestroy() {}
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
  return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};
SidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SidebarComponent,
  selectors: [["vex-sidebar"]],
  hostAttrs: [1, "vex-sidebar"],
  inputs: {
    position: "position",
    invisibleBackdrop: "invisibleBackdrop",
    opened: "opened"
  },
  ngContentSelectors: _c0,
  decls: 3,
  vars: 10,
  consts: [[1, "backdrop", 3, "click"], [1, "sidebar"]],
  template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_0_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opaque", ctx.invisibleBackdrop)("show", ctx.opened);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.opened)("position-left", ctx.positionLeft)("position-right", ctx.positionRight);
    }
  },
  styles: [".sidebar[_ngcontent-%COMP%] {\n  background: var(--background-foreground);\n  bottom: 0;\n  box-shadow: var(--elevation-z8);\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  max-width: 80vw;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: fixed;\n  top: 0;\n  transition-duration: var(--trans-ease-in-duration);\n  transition-property: transform, visibility;\n  transition-timing-function: var(--trans-ease-in-timing-function);\n  visibility: hidden;\n  width: var(--sidenav-width);\n  z-index: 1000;\n}\n@media (min-width: 600px) {\n  .sidebar[_ngcontent-%COMP%] {\n    max-width: unset;\n  }\n}\n.sidebar.position-left[_ngcontent-%COMP%] {\n  left: 0;\n  transform: translateX(-100%);\n}\n.sidebar.position-right[_ngcontent-%COMP%] {\n  right: 0;\n  transform: translateX(100%);\n}\n.sidebar.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  visibility: visible;\n}\n\n.backdrop[_ngcontent-%COMP%] {\n  background-color: transparent;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition-duration: 400ms;\n  transition-property: background-color, visibility;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  visibility: hidden;\n  z-index: 800 !important;\n}\n.backdrop.show[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.6);\n  visibility: visible;\n}\n.backdrop.opaque[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vcGF5bWVudCUyMHJlcXVlc3RzJTIwY2hhbm5lbC9kZW1vL3NyYy9AdmV4L2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLGtEQUFBO0VBQ0EsMENBQUE7RUFDQSxnRUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FDQ0Y7QURDRTtFQW5CRjtJQW9CSSxnQkFBQTtFQ0VGO0FBQ0Y7QURBRTtFQUNFLE9BQUE7RUFDQSw0QkFBQTtBQ0VKO0FEQ0U7RUFDRSxRQUFBO0VBQ0EsMkJBQUE7QUNDSjtBREVFO0VBQ0Usd0JBQUE7RUFDQSxtQkFBQTtBQ0FKOztBRElBO0VBQ0UsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSwwQkFBQTtFQUNBLGlEQUFBO0VBQ0EsNERBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDREY7QURHRTtFQUNFLG9DQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElFO0VBQ0UsNkJBQUE7QUNGSiIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWZvcmVncm91bmQpO1xyXG4gIGJvdHRvbTogMDtcclxuICBib3gtc2hhZG93OiB2YXIoLS1lbGV2YXRpb24tejgpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMSAwIGF1dG87XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXgtd2lkdGg6IDgwdnc7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10cmFucy1lYXNlLWluLWR1cmF0aW9uKTtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIHZpc2liaWxpdHk7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRyYW5zLWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uKTtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgd2lkdGg6IHZhcigtLXNpZGVuYXYtd2lkdGgpO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcblxyXG4gIEBzY3JlZW4gc20ge1xyXG4gICAgbWF4LXdpZHRoOiB1bnNldDtcclxuICB9XHJcblxyXG4gICYucG9zaXRpb24tbGVmdCB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICB9XHJcblxyXG4gICYucG9zaXRpb24tcmlnaHQge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgfVxyXG5cclxuICAmLm9wZW4ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbn1cclxuXHJcbi5iYWNrZHJvcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCB2aXNpYmlsaXR5O1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgei1pbmRleDogODAwICFpbXBvcnRhbnQ7XHJcblxyXG4gICYuc2hvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC42KTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICAmLm9wYXF1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbn1cclxuIiwiLnNpZGViYXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWZvcmVncm91bmQpO1xuICBib3R0b206IDA7XG4gIGJveC1zaGFkb3c6IHZhcigtLWVsZXZhdGlvbi16OCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDgwdnc7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXRyYW5zLWVhc2UtaW4tZHVyYXRpb24pO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIHZpc2liaWxpdHk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10cmFucy1lYXNlLWluLXRpbWluZy1mdW5jdGlvbik7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IHZhcigtLXNpZGVuYXYtd2lkdGgpO1xuICB6LWluZGV4OiAxMDAwO1xufVxuQHNjcmVlbiBzbSB7XG4gIC5zaWRlYmFyIHtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICB9XG59XG4uc2lkZWJhci5wb3NpdGlvbi1sZWZ0IHtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cbi5zaWRlYmFyLnBvc2l0aW9uLXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbn1cbi5zaWRlYmFyLm9wZW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIHZpc2liaWxpdHk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB6LWluZGV4OiA4MDAgIWltcG9ydGFudDtcbn1cbi5iYWNrZHJvcC5zaG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLmJhY2tkcm9wLm9wYXF1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2888:
/*!*******************************************************!*\
  !*** ./src/@vex/components/sidebar/sidebar.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarModule": () => (/* binding */ SidebarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.component */ 7995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class SidebarModule {}
SidebarModule.ɵfac = function SidebarModule_Factory(t) {
  return new (t || SidebarModule)();
};
SidebarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SidebarModule
});
SidebarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SidebarModule, {
    declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent]
  });
})();

/***/ }),

/***/ 6470:
/*!**************************************************************!*\
  !*** ./src/@vex/components/user-menu/user-menu.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserMenuComponent": () => (/* binding */ UserMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _popover_popover_ref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../popover/popover-ref */ 2999);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);





const _c0 = function () {
  return ["/apps/profiles/organization-profile/info"];
};
const _c1 = function () {
  return ["/apps/profiles/customer-profile"];
};
const _c2 = function () {
  return ["/"];
};
const _c3 = function () {
  return ["/apps/social/timeline"];
};
const _c4 = function () {
  return ["/login"];
};
class UserMenuComponent {
  constructor(popoverRef) {
    this.popoverRef = popoverRef;
  }
  ngOnInit() {}
  close() {
    /** Wait for animation to complete and then close */
    setTimeout(() => this.popoverRef.close(), 250);
  }
}
UserMenuComponent.ɵfac = function UserMenuComponent_Factory(t) {
  return new (t || UserMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_popover_popover_ref__WEBPACK_IMPORTED_MODULE_0__.PopoverRef));
};
UserMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: UserMenuComponent,
  selectors: [["vex-user-menu"]],
  decls: 29,
  vars: 10,
  consts: [[1, "vex-user-menu"], ["matRipple", "", "matRippleColor", "rgb(var(--color-primary), 0.1)", 1, "vex-user-menu-item", 3, "routerLink", "click"], ["svgIcon", "mat:public", 1, "vex-user-menu-item__icon", "icon-sm"], [1, "vex-user-menu-item__label"], ["svgIcon", "mat:account_circle", 1, "vex-user-menu-item__icon", "icon-sm"], ["svgIcon", "mat:insights", 1, "vex-user-menu-item__icon", "icon-sm"], [1, "vex-user-menu-item__badge"], ["svgIcon", "mat:settings", 1, "vex-user-menu-item__icon", "icon-sm"], [1, "border-b", "border-divider", "mx-4"], ["matRipple", "", "matRippleColor", "rgb(var(--color-primary), 0.1)", 1, "vex-user-menu-item"], ["svgIcon", "mat:switch_account", 1, "vex-user-menu-item__icon", "icon-sm"], ["svgIcon", "mat:chevron_right", 1, "vex-user-menu-item__icon", "icon-sm"], ["svgIcon", "mat:logout", 1, "vex-user-menu-item__icon", "icon-sm"]],
  template: function UserMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserMenuComponent_Template_a_click_1_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Organization Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserMenuComponent_Template_a_click_5_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Your Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserMenuComponent_Template_a_click_9_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Analytics");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "NEW");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserMenuComponent_Template_a_click_15_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Account Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Switch Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "mat-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserMenuComponent_Template_a_click_25_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "mat-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Sign Out");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c4));
    }
  },
  dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
  styles: [".vex-user-menu[_ngcontent-%COMP%] {\n\n    border-radius: var(--border-radius);\n\n    border-width: 1px;\n\n    border-color: var(--foreground-divider);\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgba(var(--background-foreground-rgb), var(--tw-bg-opacity));\n\n    padding-top: 0.5rem;\n\n    padding-bottom: 0.5rem;\n\n    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n\n    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n.vex-user-menu-item[_ngcontent-%COMP%] {\n\n    position: relative;\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    display: flex;\n\n    height: 2.5rem;\n\n    cursor: pointer;\n\n    -webkit-user-select: none;\n\n            user-select: none;\n\n    align-items: center;\n\n    gap: 1rem;\n\n    border-radius: var(--border-radius);\n\n    padding-left: 0.5rem;\n\n    padding-right: 0.5rem;\n\n    padding-top: 0.5rem;\n\n    padding-bottom: 0.5rem;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition-duration: 100ms;\n\n    transition-timing-function: cubic-bezier(0, 0, 0.2, 1)\n}\n\n.vex-user-menu-item[_ngcontent-%COMP%]:hover {\n\n    background-color: rgba(var(--color-primary), 0.1)\n}\n.vex-user-menu-item[_ngcontent-%COMP%]:hover   .vex-user-menu-item__icon[_ngcontent-%COMP%] {\n\n    --tw-text-opacity: 1;\n\n    color: rgba(var(--color-primary), var(--tw-text-opacity))\n}\n\n.vex-user-menu-item__label[_ngcontent-%COMP%] {\n\n    flex: 1 1 auto;\n\n    font-weight: 500;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition-duration: 100ms;\n\n    transition-timing-function: cubic-bezier(0, 0, 0.2, 1)\n}\n\n.vex-user-menu-item__badge[_ngcontent-%COMP%] {\n\n    flex: none;\n\n    border-radius: var(--border-radius);\n\n    background-color: rgba(var(--color-primary), 0.1);\n\n    padding-left: 0.5rem;\n\n    padding-right: 0.5rem;\n\n    padding-top: 0.25rem;\n\n    padding-bottom: 0.25rem;\n\n    font-size: 0.625rem;\n\n    font-weight: 600;\n\n    --tw-text-opacity: 1;\n\n    color: rgba(var(--color-primary), var(--tw-text-opacity))\n}\n\n.vex-user-menu-item__icon[_ngcontent-%COMP%] {\n\n    flex: none;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition-duration: 100ms;\n\n    transition-timing-function: cubic-bezier(0, 0, 0.2, 1)\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2NvbXBvbmVudHMvdXNlci1tZW51L3VzZXItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTs7SUFBQSxtQ0FBQTs7SUFBQSxpQkFBQTs7SUFBQSx1Q0FBQTs7SUFBQSxrQkFBQTs7SUFBQSw4RUFBQTs7SUFBQSxtQkFBQTs7SUFBQSxzQkFBQTs7SUFBQSwrRUFBQTs7SUFBQSxtR0FBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLGtCQUFBOztJQUFBLG1CQUFBOztJQUFBLG9CQUFBOztJQUFBLGFBQUE7O0lBQUEsY0FBQTs7SUFBQSxlQUFBOztJQUFBLHlCQUFBOztZQUFBLGlCQUFBOztJQUFBLG1CQUFBOztJQUFBLFNBQUE7O0lBQUEsbUNBQUE7O0lBQUEsb0JBQUE7O0lBQUEscUJBQUE7O0lBQUEsbUJBQUE7O0lBQUEsc0JBQUE7O0lBQUEsZ0tBQUE7O0lBQUEsd0pBQUE7O0lBQUEsaUxBQUE7O0lBQUEsd0RBQUE7O0lBQUEsMEJBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBO0FBSUk7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFNSjs7SUFBQSxjQUFBOztJQUFBLGdCQUFBOztJQUFBLGdLQUFBOztJQUFBLHdKQUFBOztJQUFBLGlMQUFBOztJQUFBLHdEQUFBOztJQUFBLDBCQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsVUFBQTs7SUFBQSxtQ0FBQTs7SUFBQSxpREFBQTs7SUFBQSxvQkFBQTs7SUFBQSxxQkFBQTs7SUFBQSxvQkFBQTs7SUFBQSx1QkFBQTs7SUFBQSxtQkFBQTs7SUFBQSxnQkFBQTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLFVBQUE7O0lBQUEsZ0tBQUE7O0lBQUEsd0pBQUE7O0lBQUEsaUxBQUE7O0lBQUEsd0RBQUE7O0lBQUEsMEJBQUE7O0lBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi52ZXgtdXNlci1tZW51IHtcbiAgQGFwcGx5IGJnLWZvcmVncm91bmQgc2hhZG93LWxnIGJvcmRlciBib3JkZXItZGl2aWRlciByb3VuZGVkIHB5LTI7XG59XG5cbi52ZXgtdXNlci1tZW51LWl0ZW0ge1xuICBAYXBwbHkgcmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgcHgtMiBteC0yIHB5LTIgcm91bmRlZCBob3ZlcjpiZy1wcmltYXJ5LzEwIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwIGVhc2Utb3V0IHNlbGVjdC1ub25lIGgtMTA7XG5cbiAgJjpob3ZlciB7XG4gICAgLnZleC11c2VyLW1lbnUtaXRlbV9faWNvbiB7XG4gICAgICBAYXBwbHkgdGV4dC1wcmltYXJ5O1xuICAgIH1cbiAgfVxufVxuXG4udmV4LXVzZXItbWVudS1pdGVtX19sYWJlbCB7XG4gIEBhcHBseSBmbGV4LWF1dG8gZm9udC1tZWRpdW0gdHJhbnNpdGlvbiBkdXJhdGlvbi0xMDAgZWFzZS1vdXQ7XG59XG5cbi52ZXgtdXNlci1tZW51LWl0ZW1fX2JhZGdlIHtcbiAgQGFwcGx5IHB4LTIgcHktMSByb3VuZGVkIGJnLXByaW1hcnkvMTAgdGV4dC1wcmltYXJ5IHRleHQtMnhzIGZvbnQtc2VtaWJvbGQgZmxleC1ub25lO1xufVxuXG4udmV4LXVzZXItbWVudS1pdGVtX19pY29uIHtcbiAgQGFwcGx5IGZsZXgtbm9uZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMCBlYXNlLW91dDtcbn1cblxuLnZleC11c2VyLW1lbnUtaXRlbV9fZHJvcGRvd24taWNvbiB7XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4615:
/*!***********************************************************!*\
  !*** ./src/@vex/components/user-menu/user-menu.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserMenuModule": () => (/* binding */ UserMenuModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _user_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-menu.component */ 6470);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);






class UserMenuModule {}
UserMenuModule.ɵfac = function UserMenuModule_Factory(t) {
  return new (t || UserMenuModule)();
};
UserMenuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: UserMenuModule
});
UserMenuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserMenuModule, {
    declarations: [_user_menu_component__WEBPACK_IMPORTED_MODULE_0__.UserMenuComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule]
  });
})();

/***/ }),

/***/ 8871:
/*!********************************************!*\
  !*** ./src/@vex/config/colorSchemeName.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorSchemeName": () => (/* binding */ ColorSchemeName)
/* harmony export */ });
var ColorSchemeName;
(function (ColorSchemeName) {
  ColorSchemeName["light"] = "vex-style-light";
  ColorSchemeName["default"] = "vex-style-default";
  ColorSchemeName["dark"] = "vex-style-dark";
})(ColorSchemeName || (ColorSchemeName = {}));

/***/ }),

/***/ 6738:
/*!**********************************************!*\
  !*** ./src/@vex/config/config-name.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VexConfigName": () => (/* binding */ VexConfigName)
/* harmony export */ });
var VexConfigName;
(function (VexConfigName) {
  VexConfigName["apollo"] = "vex-layout-apollo";
  VexConfigName["zeus"] = "vex-layout-zeus";
  VexConfigName["hermes"] = "vex-layout-hermes";
  VexConfigName["poseidon"] = "vex-layout-poseidon";
  VexConfigName["ares"] = "vex-layout-ares";
  VexConfigName["ikaros"] = "vex-layout-ikaros";
})(VexConfigName || (VexConfigName = {}));

/***/ }),

/***/ 3211:
/*!*******************************************!*\
  !*** ./src/@vex/config/config.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/merge-deep */ 4442);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configs */ 9769);
/* harmony import */ var _config_name_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-name.model */ 6738);
/* harmony import */ var _colorSchemeName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colorSchemeName */ 8871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/layout.service */ 7901);









class ConfigService {
  constructor(document, layoutService) {
    this.document = document;
    this.layoutService = layoutService;
    this.defaultConfig = _config_name_model__WEBPACK_IMPORTED_MODULE_2__.VexConfigName.poseidon;
    this.configs = _configs__WEBPACK_IMPORTED_MODULE_1__.configs;
    this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(this.configs.find(c => c.id === this.defaultConfig));
    this.config$ = this._configSubject.asObservable();
    this.config$.subscribe(config => this._updateConfig(config));
  }
  select(selector) {
    return this.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(selector));
  }
  setConfig(config) {
    const settings = this.configs.find(c => c.id === config);
    this._configSubject.next(settings);
  }
  updateConfig(config) {
    this._configSubject.next((0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)({
      ...this._configSubject.getValue()
    }, config));
  }
  _updateConfig(config) {
    this._setLayoutClass(config.id);
    this._setStyle(config.style);
    this._setDirection(config.direction);
    this._setSidenavState(config.sidenav.state);
    this._emitResize();
  }
  _setStyle(style) {
    /**
     * Color Scheme
     */
    Object.values(_colorSchemeName__WEBPACK_IMPORTED_MODULE_3__.ColorSchemeName).filter(s => s !== style.colorScheme).forEach(value => {
      if (this.document.body.classList.contains(value)) {
        this.document.body.classList.remove(value);
      }
    });
    this.document.body.classList.add(style.colorScheme);
    /**
     * Border Radius
     */
    this.document.body.style.setProperty('--border-radius', `${style.borderRadius.value}${style.borderRadius.unit}`);
    const buttonBorderRadius = style.button.borderRadius ?? style.borderRadius;
    this.document.body.style.setProperty('--button-border-radius', `${buttonBorderRadius.value}${buttonBorderRadius.unit}`);
    /**
     * Primary Color
     */
    this.document.body.style.setProperty('--color-primary', style.colors.primary.default.replace('rgb(', '').replace(')', ''));
    this.document.body.style.setProperty('--color-primary-rgb', style.colors.primary.default);
    this.document.body.style.setProperty('--color-primary-contrast', style.colors.primary.contrast.replace('rgb(', '').replace(')', ''));
    this.document.body.style.setProperty('--color-primary-contrast-rgb', style.colors.primary.contrast);
  }
  /**
   * Emit event so charts and other external libraries know they have to resize on layout switch
   * @private
   */
  _emitResize() {
    if (window) {
      window.dispatchEvent(new Event('resize'));
      setTimeout(() => window.dispatchEvent(new Event('resize')), 200);
    }
  }
  _setDirection(direction) {
    this.document.body.dir = direction;
  }
  _setSidenavState(sidenavState) {
    sidenavState === 'expanded' ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
  }
  _setLayoutClass(layout) {
    this.configs.forEach(c => {
      if (this.document.body.classList.contains(c.id)) {
        this.document.body.classList.remove(c.id);
      }
    });
    this.document.body.classList.add(layout);
  }
}
ConfigService.ɵfac = function ConfigService_Factory(t) {
  return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_4__.LayoutService));
};
ConfigService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: ConfigService,
  factory: ConfigService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9769:
/*!************************************!*\
  !*** ./src/@vex/config/configs.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configs": () => (/* binding */ configs)
/* harmony export */ });
/* harmony import */ var _utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/merge-deep */ 4442);
/* harmony import */ var _config_name_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-name.model */ 6738);
/* harmony import */ var _colorSchemeName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colorSchemeName */ 8871);
/* harmony import */ var _components_config_panel_color_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/config-panel/color-variables */ 4438);




const defaultConfig = {
  id: _config_name_model__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.apollo,
  name: 'Apollo',
  style: {
    colorScheme: _colorSchemeName__WEBPACK_IMPORTED_MODULE_2__.ColorSchemeName["default"],
    colors: {
      primary: _components_config_panel_color_variables__WEBPACK_IMPORTED_MODULE_3__.colorVariables.blue
    },
    borderRadius: {
      value: 0.25,
      unit: 'rem'
    },
    button: {
      borderRadius: undefined
    }
  },
  direction: 'ltr',
  imgSrc: '//vex-landing.visurel.com/assets/img/layouts/apollo.png',
  layout: 'horizontal',
  boxed: false,
  sidenav: {
    title: 'VEX',
    imageUrl: 'assets/img/demo/logo.svg',
    showCollapsePin: true,
    user: {
      visible: true
    },
    search: {
      visible: true
    },
    state: 'expanded'
  },
  toolbar: {
    fixed: true,
    user: {
      visible: true
    }
  },
  navbar: {
    position: 'below-toolbar'
  },
  footer: {
    visible: true,
    fixed: true
  }
};
const configs = [defaultConfig, (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)({
  ...defaultConfig
}, {
  id: _config_name_model__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.poseidon,
  name: 'Poseidon',
  imgSrc: '//vex-landing.visurel.com/assets/img/layouts/poseidon.png',
  style: {
    borderRadius: {
      value: 0.5,
      unit: 'rem'
    },
    button: {
      borderRadius: {
        value: 9999,
        unit: 'px'
      }
    }
  },
  sidenav: {
    user: {
      visible: true
    },
    search: {
      visible: true
    }
  },
  toolbar: {
    user: {
      visible: false
    }
  },
  footer: {
    fixed: false
  }
}), (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)({
  ...defaultConfig
}, {
  id: _config_name_model__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.hermes,
  name: 'Hermes',
  imgSrc: '//vex-landing.visurel.com/assets/img/layouts/hermes.png',
  layout: 'vertical',
  boxed: true,
  sidenav: {
    user: {
      visible: false
    },
    search: {
      visible: false
    }
  },
  toolbar: {
    fixed: false
  },
  footer: {
    fixed: false
  }
}), (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)({
  ...defaultConfig
}, {
  id: _config_name_model__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.ares,
  name: 'Ares',
  imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ares.png',
  sidenav: {
    user: {
      visible: false
    },
    search: {
      visible: false
    }
  },
  toolbar: {
    fixed: false
  },
  navbar: {
    position: 'in-toolbar'
  },
  footer: {
    fixed: false
  }
}), (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)({
  ...defaultConfig
}, {
  id: _config_name_model__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.zeus,
  name: 'Zeus',
  imgSrc: '//vex-landing.visurel.com/assets/img/layouts/zeus.png',
  sidenav: {
    state: 'collapsed'
  }
}), (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)({
  ...defaultConfig
}, {
  id: _config_name_model__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.ikaros,
  name: 'Ikaros',
  imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ikaros.png',
  layout: 'vertical',
  boxed: true,
  sidenav: {
    user: {
      visible: false
    },
    search: {
      visible: false
    }
  },
  toolbar: {
    fixed: false
  },
  navbar: {
    position: 'in-toolbar'
  },
  footer: {
    fixed: false
  }
})];

/***/ }),

/***/ 7042:
/*!**************************************!*\
  !*** ./src/@vex/config/constants.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultRoundedButtonBorderRadius": () => (/* binding */ defaultRoundedButtonBorderRadius)
/* harmony export */ });
const defaultRoundedButtonBorderRadius = {
  value: 9999,
  unit: 'px'
};

/***/ }),

/***/ 6692:
/*!****************************************************!*\
  !*** ./src/@vex/layout/footer/footer.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
  constructor() {}
  ngOnInit() {}
  ngOnDestroy() {}
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["vex-footer"]],
  inputs: {
    customTemplate: "customTemplate"
  },
  decls: 3,
  vars: 0,
  consts: [[1, "footer", "flex"], [1, "flex-auto", "flex", "items-center", "container"], [1, "font-medium", "ltr:ml-4", "rtl:mr-4", "hidden", "sm:block"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: ["[_nghost-%COMP%] {\n  bottom: 0;\n  display: block;\n  width: 100%;\n  z-index: var(--footer-z-index);\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: var(--footer-background);\n  color: var(--footer-color);\n  height: var(--footer-height);\n  position: relative;\n  z-index: var(--footer-z-index);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vcGF5bWVudCUyMHJlcXVlc3RzJTIwY2hhbm5lbC9kZW1vL3NyYy9AdmV4L2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IHZhcigtLWZvb3Rlci16LWluZGV4KTtcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWZvb3Rlci1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLWZvb3Rlci1jb2xvcik7XG4gIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogdmFyKC0tZm9vdGVyLXotaW5kZXgpO1xufVxuIiwiOmhvc3Qge1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogdmFyKC0tZm9vdGVyLXotaW5kZXgpO1xufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9vdGVyLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tZm9vdGVyLWNvbG9yKTtcbiAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiB2YXIoLS1mb290ZXItei1pbmRleCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4947:
/*!*************************************************!*\
  !*** ./src/@vex/layout/footer/footer.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterModule": () => (/* binding */ FooterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component */ 6692);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





class FooterModule {}
FooterModule.ɵfac = function FooterModule_Factory(t) {
  return new (t || FooterModule)();
};
FooterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: FooterModule
});
FooterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FooterModule, {
    declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule],
    exports: [_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent]
  });
})();

/***/ }),

/***/ 3728:
/*!*********************************************!*\
  !*** ./src/@vex/layout/layout.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngneat/until-destroy */ 2777);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 538);
/* harmony import */ var _utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/check-router-childs-data */ 5147);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/layout.service */ 7901);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config.service */ 3211);
/* harmony import */ var _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/progress-bar/progress-bar.component */ 6508);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/search/search.component */ 1025);
var _class;
















const _c0 = ["quickpanel"];
const _c1 = ["sidenav"];
function LayoutComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function LayoutComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function LayoutComponent_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function LayoutComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
let LayoutComponent = (_class = class LayoutComponent {
  constructor(cd, breakpointObserver, layoutService, configService, router, document) {
    this.cd = cd;
    this.breakpointObserver = breakpointObserver;
    this.layoutService = layoutService;
    this.configService = configService;
    this.router = router;
    this.document = document;
    this.isLayoutVertical$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.layout === 'vertical'));
    this.isBoxed$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.boxed));
    this.isToolbarFixed$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.toolbar.fixed));
    this.isFooterFixed$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.footer.fixed));
    this.isFooterVisible$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.footer.visible));
    this.sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
    this.isDesktop$ = this.layoutService.isDesktop$;
    this.scrollDisabled$ = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => (0,_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_0__.checkRouterChildsData)(this.router.routerState.root.snapshot, data => data.scrollDisabled)));
    this.containerEnabled$ = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => (0,_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_0__.checkRouterChildsData)(this.router.routerState.root.snapshot, data => data.containerEnabled)));
    this.searchOpen$ = this.layoutService.searchOpen$;
  }
  ngOnInit() {
    /**
     * Expand Sidenav when we switch from mobile to desktop view
     */
    this.isDesktop$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(matches => !matches), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)).subscribe(() => this.layoutService.expandSidenav());
    /**
     * Open/Close Quickpanel through LayoutService
     */
    this.layoutService.quickpanelOpen$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)).subscribe(open => open ? this.quickpanel.open() : this.quickpanel.close());
    /**
     * Open/Close Sidenav through LayoutService
     */
    this.layoutService.sidenavOpen$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)).subscribe(open => open ? this.sidenav.open() : this.sidenav.close());
    /**
     * Mobile only:
     * Close Sidenav after Navigating somewhere (e.g. when a user clicks a link in the Sidenav)
     */
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.withLatestFrom)(this.isDesktop$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(([event, matches]) => !matches), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)).subscribe(() => this.sidenav.close());
  }
  ngAfterViewInit() {
    /**
     * Enable Scrolling to specific parts of the page using the Router
     */
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.Scroll), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)).subscribe(e => {
      if (e.position) {
        // backward navigation
        this.sidenavContainer.scrollable.scrollTo({
          start: e.position[0],
          top: e.position[1]
        });
      } else if (e.anchor) {
        // anchor navigation
        const scroll = anchor => this.sidenavContainer.scrollable.scrollTo({
          behavior: 'smooth',
          top: anchor.offsetTop,
          left: anchor.offsetLeft
        });
        let anchorElem = this.document.getElementById(e.anchor);
        if (anchorElem) {
          scroll(anchorElem);
        } else {
          setTimeout(() => {
            anchorElem = this.document.getElementById(e.anchor);
            scroll(anchorElem);
          }, 100);
        }
      } else {
        // forward navigation
        this.sidenavContainer.scrollable.scrollTo({
          top: 0,
          start: 0
        });
      }
    });
  }
}, _class.ɵfac = function LayoutComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT));
}, _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["vex-layout"]],
  viewQuery: function LayoutComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavContainer, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.quickpanel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sidenavContainer = _t.first);
    }
  },
  inputs: {
    sidenavRef: "sidenavRef",
    toolbarRef: "toolbarRef",
    footerRef: "footerRef",
    quickpanelRef: "quickpanelRef"
  },
  decls: 34,
  vars: 69,
  consts: [[1, "page-container"], [1, "sidenav-container"], [1, "sidenav", 3, "disableClose", "fixedInViewport", "mode", "opened"], ["sidenav", ""], [4, "ngTemplateOutlet"], ["mode", "over", "position", "end", 1, "quickpanel", 3, "fixedInViewport"], ["quickpanel", ""], [1, "sidenav-content"], [1, "content"]],
  template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "vex-progress-bar")(14, "vex-search");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-sidenav-container", 1)(16, "mat-sidenav", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, LayoutComponent_ng_container_24_Template, 1, 0, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-sidenav", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, LayoutComponent_ng_container_28_Template, 1, 0, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-sidenav-content", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, LayoutComponent_ng_container_30_Template, 1, 0, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "main", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, LayoutComponent_ng_container_33_Template, 1, 0, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("boxed", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 31, ctx.isBoxed$))("horizontal-layout", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 33, ctx.isLayoutVertical$))("is-mobile", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 35, ctx.isDesktop$))("vertical-layout", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 37, ctx.isLayoutVertical$))("has-fixed-footer", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 39, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 41, ctx.isFooterFixed$) && ctx.isFooterVisible$))("has-footer", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 43, ctx.isFooterVisible$))("scroll-disabled", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 45, ctx.scrollDisabled$))("toolbar-fixed", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 47, ctx.isToolbarFixed$))("sidenav-collapsed", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 49, ctx.sidenavCollapsed$))("content-container", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 51, ctx.containerEnabled$))("with-search", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 53, ctx.searchOpen$));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disableClose", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 55, ctx.isDesktop$))("fixedInViewport", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 57, ctx.isDesktop$))("mode", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 59, ctx.isDesktop$) || _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 61, ctx.isLayoutVertical$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 63, ctx.isDesktop$) && !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 65, ctx.isLayoutVertical$));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx.sidenavRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fixedInViewport", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 67, ctx.isDesktop$));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx.quickpanelRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx.toolbarRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx.footerRef);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavContent, _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent, _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__.SearchComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
  styles: [".page-container[_ngcontent-%COMP%] {\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  background: var(--sidenav-background);\n}\n.sidenav[_ngcontent-%COMP%]     .mat-drawer-inner-container {\n  overflow: hidden;\n}\n\n.content[_ngcontent-%COMP%] {\n  background: var(--background-base);\n  min-height: calc(100% - var(--toolbar-height) - var(--navigation-height));\n  position: relative;\n  width: 100%;\n}\n\n.has-footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  min-height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n}\n\n.scroll-disabled[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.scroll-disabled[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: calc(100% - var(--toolbar-height) - var(--navigation-height));\n  min-height: unset;\n  overflow: hidden;\n}\n.scroll-disabled.has-fixed-footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .scroll-disabled.has-footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n  min-height: unset;\n}\n\n.is-mobile[_ngcontent-%COMP%]     .vex-toolbar {\n  position: fixed;\n  width: 100%;\n}\n.is-mobile[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: var(--toolbar-height);\n}\n\n.sidenav-container[_ngcontent-%COMP%] {\n  background: var(--background-base);\n  height: 100%;\n  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n}\n\n.sidenav-content[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.with-search[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: fixed;\n}\n.with-search[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%] {\n  pointer-events: none;\n  transform: perspective(1000px) translate3d(0, 50vh, 0) rotate3d(1, 0, 0, 30deg);\n  transform-origin: 50vw 50vh;\n  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n  overflow: visible;\n  border-radius: var(--border-radius);\n  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.toolbar-fixed[_ngcontent-%COMP%]     .vex-toolbar {\n  position: fixed;\n  width: var(--toolbar-width);\n  z-index: 50;\n}\n.toolbar-fixed[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: calc(var(--toolbar-height) + var(--navigation-height));\n}\n\n.has-fixed-footer[_ngcontent-%COMP%]     .vex-footer {\n  box-shadow: var(--footer-elevation);\n  position: fixed;\n}\n.has-fixed-footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-bottom: var(--footer-height);\n  min-height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n}\n.has-fixed-footer.scroll-disabled[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9wYXltZW50JTIwcmVxdWVzdHMlMjBjaGFubmVsL2RlbW8vc3JjL0B2ZXgvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQ0NGOztBREVBO0VBQ0UscUNBQUE7QUNDRjtBRENFO0VBQ0UsZ0JBQUE7QUNDSjs7QURHQTtFQUNFLGtDQUFBO0VBQ0EseUVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLGdHQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGO0FERUU7RUFDRSxxRUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdFO0VBRUUsNEZBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBRE9FO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNKSjtBRE9FO0VBQ0UsaUNBQUE7QUNMSjs7QURTQTtFQUNFLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLHVEQUFBO0FDTkY7O0FEU0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDTkY7O0FEU0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNORjtBRFFFO0VBQ0Usb0JBQUE7RUFDQSwrRUFBQTtFQUNBLDJCQUFBO0VBQ0EsdURBQUE7RUFDQSxpQkFBQTtFQUFBLG1DQUFBO0VBQUEsZ0RBQUE7RUFBQSw2REFBQTtFQUFBLHVHQUFBO0FDTko7O0FEV0U7RUFDRSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FDUko7QURXRTtFQUNFLGtFQUFBO0FDVEo7O0FEY0U7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7QUNYSjtBRGNFO0VBQ0UsbUNBQUE7RUFDQSxnR0FBQTtBQ1pKO0FEZUU7RUFDRSw0RkFBQTtBQ2JKIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcclxuICBib3R0b206IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtYmFja2dyb3VuZCk7XHJcblxyXG4gIDo6bmctZGVlcCAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWJhc2UpO1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGFzLWZvb3RlciAuY29udGVudCB7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xyXG59XHJcblxyXG4uc2Nyb2xsLWRpc2FibGVkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSk7XHJcbiAgICBtaW4taGVpZ2h0OiB1bnNldDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAmLmhhcy1maXhlZC1mb290ZXIgLmNvbnRlbnQsXHJcbiAgJi5oYXMtZm9vdGVyIC5jb250ZW50IHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xyXG4gICAgbWluLWhlaWdodDogdW5zZXQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaXMtbW9iaWxlIHtcclxuICA6Om5nLWRlZXAgLnZleC10b29sYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tdG9vbGJhci1oZWlnaHQpO1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWJhc2UpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGN1YmljLWJlemllciguMiwgMSwgLjMsIDEpO1xyXG59XHJcblxyXG4uc2lkZW5hdi1jb250ZW50IHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLndpdGgtc2VhcmNoIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuXHJcbiAgLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHRyYW5zbGF0ZTNkKDAsIDUwdmgsIDApIHJvdGF0ZTNkKDEsIDAsIDAsIDMwZGVnKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwdncgNTB2aDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgY3ViaWMtYmV6aWVyKC4yLCAxLCAuMywgMSk7XHJcbiAgICBAYXBwbHkgcm91bmRlZCBzaGFkb3ctMnhsIG92ZXJmbG93LXZpc2libGU7XHJcbiAgfVxyXG59XHJcblxyXG4udG9vbGJhci1maXhlZCB7XHJcbiAgOjpuZy1kZWVwIC52ZXgtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogdmFyKC0tdG9vbGJhci13aWR0aCk7XHJcbiAgICB6LWluZGV4OiA1MDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tdG9vbGJhci1oZWlnaHQpICsgdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpKTtcclxuICB9XHJcbn1cclxuXHJcbi5oYXMtZml4ZWQtZm9vdGVyIHtcclxuICA6Om5nLWRlZXAgLnZleC1mb290ZXIge1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZm9vdGVyLWVsZXZhdGlvbik7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSAtIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcclxuICB9XHJcblxyXG4gICYuc2Nyb2xsLWRpc2FibGVkIC5jb250ZW50IHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIi5wYWdlLWNvbnRhaW5lciB7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuXG4uc2lkZW5hdiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtYmFja2dyb3VuZCk7XG59XG4uc2lkZW5hdiA6Om5nLWRlZXAgLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWJhc2UpO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS10b29sYmFyLWhlaWdodCkgLSB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCkpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGFzLWZvb3RlciAuY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSAtIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcbn1cblxuLnNjcm9sbC1kaXNhYmxlZCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2Nyb2xsLWRpc2FibGVkIC5jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS10b29sYmFyLWhlaWdodCkgLSB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCkpO1xuICBtaW4taGVpZ2h0OiB1bnNldDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zY3JvbGwtZGlzYWJsZWQuaGFzLWZpeGVkLWZvb3RlciAuY29udGVudCwgLnNjcm9sbC1kaXNhYmxlZC5oYXMtZm9vdGVyIC5jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS10b29sYmFyLWhlaWdodCkgLSB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCkgLSB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XG4gIG1pbi1oZWlnaHQ6IHVuc2V0O1xufVxuXG4uaXMtbW9iaWxlIDo6bmctZGVlcCAudmV4LXRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmlzLW1vYmlsZSAuY29udGVudCB7XG4gIG1hcmdpbi10b3A6IHZhcigtLXRvb2xiYXItaGVpZ2h0KTtcbn1cblxuLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1iYXNlKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC4yLCAxLCAwLjMsIDEpO1xufVxuXG4uc2lkZW5hdi1jb250ZW50IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ud2l0aC1zZWFyY2gge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4ud2l0aC1zZWFyY2ggLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSB0cmFuc2xhdGUzZCgwLCA1MHZoLCAwKSByb3RhdGUzZCgxLCAwLCAwLCAzMGRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwdncgNTB2aDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuMiwgMSwgMC4zLCAxKTtcbiAgQGFwcGx5IHJvdW5kZWQgc2hhZG93LTJ4bCBvdmVyZmxvdy12aXNpYmxlO1xufVxuXG4udG9vbGJhci1maXhlZCA6Om5nLWRlZXAgLnZleC10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogdmFyKC0tdG9vbGJhci13aWR0aCk7XG4gIHotaW5kZXg6IDUwO1xufVxuLnRvb2xiYXItZml4ZWQgLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXRvb2xiYXItaGVpZ2h0KSArIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSk7XG59XG5cbi5oYXMtZml4ZWQtZm9vdGVyIDo6bmctZGVlcCAudmV4LWZvb3RlciB7XG4gIGJveC1zaGFkb3c6IHZhcigtLWZvb3Rlci1lbGV2YXRpb24pO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4uaGFzLWZpeGVkLWZvb3RlciAuY29udGVudCB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS10b29sYmFyLWhlaWdodCkgLSB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCkgLSB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XG59XG4uaGFzLWZpeGVkLWZvb3Rlci5zY3JvbGwtZGlzYWJsZWQgLmNvbnRlbnQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSAtIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
}), _class);
LayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.UntilDestroy)()], LayoutComponent);


/***/ }),

/***/ 638:
/*!******************************************!*\
  !*** ./src/@vex/layout/layout.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.component */ 3728);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/progress-bar/progress-bar.module */ 4855);
/* harmony import */ var _components_search_search_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/search/search.module */ 1002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class LayoutModule {}
LayoutModule.ɵfac = function LayoutModule_Factory(t) {
  return new (t || LayoutModule)();
};
LayoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: LayoutModule
});
LayoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule, _components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_1__.ProgressBarModule, _components_search_search_module__WEBPACK_IMPORTED_MODULE_2__.SearchModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LayoutModule, {
    declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule, _components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_1__.ProgressBarModule, _components_search_search_module__WEBPACK_IMPORTED_MODULE_2__.SearchModule],
    exports: [_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent]
  });
})();

/***/ }),

/***/ 8502:
/*!************************************************************!*\
  !*** ./src/@vex/layout/navigation/navigation.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/navigation.service */ 7360);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/navigation-item/navigation-item.component */ 1271);




function NavigationComponent_vex_navigation_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "vex-navigation-item", 2);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r1);
  }
}
class NavigationComponent {
  constructor(navigationService) {
    this.navigationService = navigationService;
    this.items = this.navigationService.items;
  }
  ngOnInit() {}
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
  return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService));
};
NavigationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: NavigationComponent,
  selectors: [["vex-navigation"]],
  decls: 2,
  vars: 1,
  consts: [[1, "navigation", "flex", "items-center", "container"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]],
  template: function NavigationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavigationComponent_vex_navigation_item_1_Template, 1, 1, "vex-navigation-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _components_navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_1__.NavigationItemComponent],
  styles: ["[_nghost-%COMP%] {\n  background: var(--navigation-background);\n  display: block;\n  height: var(--navigation-height);\n  position: relative;\n  z-index: 200;\n}\n\n.navigation[_ngcontent-%COMP%] {\n  height: var(--navigation-height);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2xheW91dC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9wYXltZW50JTIwcmVxdWVzdHMlMjBjaGFubmVsL2RlbW8vc3JjL0B2ZXgvbGF5b3V0L25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW5hdmlnYXRpb24tYmFja2dyb3VuZCk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDIwMDtcclxufVxyXG5cclxuLm5hdmlnYXRpb24ge1xyXG4gIGhlaWdodDogdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbmF2aWdhdGlvbi1iYWNrZ3JvdW5kKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDIwMDtcbn1cblxuLm5hdmlnYXRpb24ge1xuICBoZWlnaHQ6IHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6494:
/*!*********************************************************!*\
  !*** ./src/@vex/layout/navigation/navigation.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationModule": () => (/* binding */ NavigationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.component */ 8502);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/navigation-item/navigation-item.module */ 2656);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);








class NavigationModule {}
NavigationModule.ɵfac = function NavigationModule_Factory(t) {
  return new (t || NavigationModule)();
};
NavigationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: NavigationModule
});
NavigationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_1__.NavigationItemModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NavigationModule, {
    declarations: [_navigation_component__WEBPACK_IMPORTED_MODULE_0__.NavigationComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_1__.NavigationItemModule],
    exports: [_navigation_component__WEBPACK_IMPORTED_MODULE_0__.NavigationComponent]
  });
})();

/***/ }),

/***/ 4373:
/*!************************************************************!*\
  !*** ./src/@vex/layout/quickpanel/quickpanel.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuickpanelComponent": () => (/* binding */ QuickpanelComponent)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 20);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 9121);







const _c0 = function () {
  return [];
};
class QuickpanelComponent {
  constructor() {
    this.date = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().toFormat('DD');
    this.dayName = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().toFormat('EEEE');
  }
  ngOnInit() {}
}
QuickpanelComponent.ɵfac = function QuickpanelComponent_Factory(t) {
  return new (t || QuickpanelComponent)();
};
QuickpanelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: QuickpanelComponent,
  selectors: [["vex-quickpanel"]],
  decls: 67,
  vars: 19,
  consts: [[1, "body-2", "p-6", "bg-primary", "text-primary-contrast"], [1, "display-1"], ["matSubheader", ""], ["mat-list-item", "", 3, "routerLink"], ["matListItemTitle", ""], ["matListItemLine", ""], ["matRipple", "", 1, "vex-list-item"], [1, "progress-bar"], ["color", "primary", "mode", "determinate", 3, "value"], ["color", "accent", "mode", "determinate", 3, "value"], ["color", "warn", "mode", "determinate", 3, "value"]],
  template: function QuickpanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Today");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-nav-list")(9, "h3", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "UPCOMING EVENTS");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 3)(12, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Business Meeting");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "In 16 Minutes, Meeting Room");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 3)(17, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Ask for Vacation");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "12:00 PM");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 3)(22, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Dinner with Sophie");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "18:30 PM");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 3)(27, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Deadline for Project X");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "21:00 PM");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h3", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "TODO-LIST");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 3)(35, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Invite Jack to play golf");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Added: 6 hours ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 3)(40, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Get to know Angular more");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Added: 2 days ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 3)(45, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Configure that new router");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Added: 5 days ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h3", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "SERVER STATISTICS");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 6)(53, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "CPU Load (71% / 100%)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "mat-progress-bar", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 6)(58, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "RAM Usage (6,175 MB / 16,384 MB)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "mat-progress-bar", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 6)(63, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "CPU Temp (43\u00B0 / 80\u00B0)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "mat-progress-bar", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dayName);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.date);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 54);
    }
  },
  dependencies: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListSubheaderCssMatStyler, _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItemLine, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItemTitle, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBar, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRipple],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-width: 80vw;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.vex-list-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 72px;\n  padding: 0 var(--padding-16);\n  position: relative;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.vex-list-item[_ngcontent-%COMP%]:hover {\n  background: var(--background-hover);\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2xheW91dC9xdWlja3BhbmVsL3F1aWNrcGFuZWwuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9wYXltZW50JTIwcmVxdWVzdHMlMjBjaGFubmVsL2RlbW8vc3JjL0B2ZXgvbGF5b3V0L3F1aWNrcGFuZWwvcXVpY2twYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxTQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FDQUY7QURFRTtFQUNFLG1DQUFBO0FDQUo7O0FESUE7RUFDRSxlQUFBO0FDREYiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcblxuICBtYXgtd2lkdGg6IDgwdnc7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi52ZXgtbGlzdC1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNzJweDtcbiAgcGFkZGluZzogMCB2YXIoLS1wYWRkaW5nLTE2KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtcbiAgfVxufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG5cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDgwdnc7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi52ZXgtbGlzdC1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNzJweDtcbiAgcGFkZGluZzogMCB2YXIoLS1wYWRkaW5nLTE2KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi52ZXgtbGlzdC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9651:
/*!*********************************************************!*\
  !*** ./src/@vex/layout/quickpanel/quickpanel.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuickpanelModule": () => (/* binding */ QuickpanelModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _quickpanel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quickpanel.component */ 4373);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);







class QuickpanelModule {}
QuickpanelModule.ɵfac = function QuickpanelModule_Factory(t) {
  return new (t || QuickpanelModule)();
};
QuickpanelModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: QuickpanelModule
});
QuickpanelModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBarModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRippleModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](QuickpanelModule, {
    declarations: [_quickpanel_component__WEBPACK_IMPORTED_MODULE_0__.QuickpanelComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBarModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRippleModule],
    exports: [_quickpanel_component__WEBPACK_IMPORTED_MODULE_0__.QuickpanelComponent]
  });
})();

/***/ }),

/***/ 2493:
/*!************************************************************************!*\
  !*** ./src/@vex/layout/sidenav/sidenav-item/sidenav-item.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavItemComponent": () => (/* binding */ SidenavItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _animations_dropdown_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../animations/dropdown.animation */ 5990);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ 2777);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/navigation.service */ 7360);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 9121);
var _class;











function SidenavItemComponent_a_0_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 7);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", ctx_r4.item.icon);
  }
}
const _c0 = function (a0, a1) {
  return [a0, a1];
};
function SidenavItemComponent_a_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, ctx_r5.item.badge.bgClass, ctx_r5.item.badge.textClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.item.badge.value);
  }
}
const _c1 = function () {
  return {
    exact: false
  };
};
function SidenavItemComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidenavItemComponent_a_0_mat_icon_1_Template, 1, 1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SidenavItemComponent_a_0_span_4_Template, 2, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fragment", ctx_r0.item.fragment)("routerLinkActiveOptions", ctx_r0.item.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1))("routerLink", ctx_r0.item.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.level === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.item.badge);
  }
}
function SidenavItemComponent_div_1_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 7);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", ctx_r6.item.icon);
  }
}
function SidenavItemComponent_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, ctx_r7.item.badge.bgClass, ctx_r7.item.badge.textClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r7.item.badge.value);
  }
}
function SidenavItemComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidenavItemComponent_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.item.route());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidenavItemComponent_div_1_mat_icon_1_Template, 1, 1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SidenavItemComponent_div_1_span_4_Template, 2, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.level === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.item.badge);
  }
}
function SidenavItemComponent_ng_container_2_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 7);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", ctx_r10.item.icon);
  }
}
function SidenavItemComponent_ng_container_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, ctx_r11.item.badge.bgClass, ctx_r11.item.badge.textClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r11.item.badge.value);
  }
}
function SidenavItemComponent_ng_container_2_vex_sidenav_item_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "vex-sidenav-item", 14);
  }
  if (rf & 2) {
    const subItem_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", subItem_r13)("level", ctx_r12.level + 1);
  }
}
function SidenavItemComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidenavItemComponent_ng_container_2_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.toggleOpen());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SidenavItemComponent_ng_container_2_mat_icon_2_Template, 1, 1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SidenavItemComponent_ng_container_2_span_5_Template, 2, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SidenavItemComponent_ng_container_2_vex_sidenav_item_8_Template, 1, 2, "vex-sidenav-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("vex-sidenav-item--active", ctx_r2.isOpen || ctx_r2.isActive)("vex-sidenav-item--open", ctx_r2.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.level === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.item.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@dropdown", ctx_r2.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.item.children);
  }
}
function SidenavItemComponent_ng_container_3_vex_sidenav_item_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "vex-sidenav-item", 14);
  }
  if (rf & 2) {
    const subItem_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", subItem_r17)("level", 0);
  }
}
function SidenavItemComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SidenavItemComponent_ng_container_3_vex_sidenav_item_3_Template, 1, 2, "vex-sidenav-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.item.children);
  }
}
let SidenavItemComponent = (_class = class SidenavItemComponent {
  constructor(router, cd, navigationService) {
    this.router = router;
    this.cd = cd;
    this.navigationService = navigationService;
    this.isLink = this.navigationService.isLink;
    this.isDropdown = this.navigationService.isDropdown;
    this.isSubheading = this.navigationService.isSubheading;
  }
  get levelClass() {
    return `item-level-${this.level}`;
  }
  ngOnInit() {
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(() => this.isDropdown(this.item)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe(() => this.onRouteChange());
    this.navigationService.openChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(() => this.isDropdown(this.item)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe(item => this.onOpenChange(item));
  }
  ngOnChanges(changes) {
    if (changes && changes.hasOwnProperty('item') && this.isDropdown(this.item)) {
      this.onRouteChange();
    }
  }
  toggleOpen() {
    this.isOpen = !this.isOpen;
    this.navigationService.triggerOpenChange(this.item);
    this.cd.markForCheck();
  }
  onOpenChange(item) {
    if (this.isChildrenOf(this.item, item)) {
      return;
    }
    if (this.hasActiveChilds(this.item)) {
      return;
    }
    if (this.item !== item) {
      this.isOpen = false;
      this.cd.markForCheck();
    }
  }
  onRouteChange() {
    if (this.hasActiveChilds(this.item)) {
      this.isActive = true;
      this.isOpen = true;
      this.navigationService.triggerOpenChange(this.item);
      this.cd.markForCheck();
    } else {
      this.isActive = false;
      this.isOpen = false;
      this.navigationService.triggerOpenChange(this.item);
      this.cd.markForCheck();
    }
  }
  isChildrenOf(parent, item) {
    if (parent.children.indexOf(item) !== -1) {
      return true;
    }
    return parent.children.filter(child => this.isDropdown(child)).some(child => this.isChildrenOf(child, item));
  }
  hasActiveChilds(parent) {
    return parent.children.some(child => {
      if (this.isDropdown(child)) {
        return this.hasActiveChilds(child);
      }
      if (this.isLink(child) && !this.isFunction(child.route)) {
        return this.router.isActive(child.route, false);
      }
    });
  }
  isFunction(prop) {
    return prop instanceof Function;
  }
}, _class.ɵfac = function SidenavItemComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__.NavigationService));
}, _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["vex-sidenav-item"]],
  hostVars: 2,
  hostBindings: function SidenavItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.levelClass);
    }
  },
  inputs: {
    item: "item",
    level: "level"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
  decls: 4,
  vars: 4,
  consts: [["class", "vex-sidenav-item", "matRipple", "", "matRippleColor", "var(--sidenav-item-ripple-color)", "routerLinkActive", "vex-sidenav-item--active", 3, "fragment", "routerLinkActiveOptions", "routerLink", 4, "ngIf"], ["class", "vex-sidenav-item", "matRipple", "", "matRippleColor", "var(--sidenav-item-ripple-color)", "routerLinkActive", "vex-sidenav-item--active", 3, "click", 4, "ngIf"], [4, "ngIf"], ["matRipple", "", "matRippleColor", "var(--sidenav-item-ripple-color)", "routerLinkActive", "vex-sidenav-item--active", 1, "vex-sidenav-item", 3, "fragment", "routerLinkActiveOptions", "routerLink"], ["class", "vex-sidenav-item__icon", 3, "svgIcon", 4, "ngIf"], [1, "vex-sidenav-item__label"], ["class", "vex-sidenav-item__badge", 3, "ngClass", 4, "ngIf"], [1, "vex-sidenav-item__icon", 3, "svgIcon"], [1, "vex-sidenav-item__badge", 3, "ngClass"], ["matRipple", "", "matRippleColor", "var(--sidenav-item-ripple-color)", "routerLinkActive", "vex-sidenav-item--active", 1, "vex-sidenav-item", 3, "click"], ["matRipple", "", "matRippleColor", "var(--sidenav-item-ripple-color)", 1, "vex-sidenav-item", 3, "click"], ["svgIcon", "mat:keyboard_arrow_right", 1, "vex-sidenav-item__dropdown-icon"], [1, "vex-sidenav-item__dropdown"], [3, "item", "level", 4, "ngFor", "ngForOf"], [3, "item", "level"], [1, "vex-sidenav-subheading"]],
  template: function SidenavItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SidenavItemComponent_a_0_Template, 5, 7, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidenavItemComponent_div_1_Template, 5, 3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SidenavItemComponent_ng_container_2_Template, 9, 9, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SidenavItemComponent_ng_container_3_Template, 4, 2, "ng-container", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && !ctx.isFunction(ctx.item.route));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && ctx.isFunction(ctx.item.route));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDropdown(ctx.item));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSubheading(ctx.item));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _class],
  styles: [".vex-sidenav-item[_ngcontent-%COMP%] {\n  align-items: center;\n  box-sizing: border-box;\n  color: var(--sidenav-item-color);\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  min-height: var(--sidenav-item-min-height);\n  padding: var(--sidenav-item-padding-vertical) var(--sidenav-item-padding-horizontal);\n  position: relative;\n  text-decoration: none;\n  transition: var(--trans-ease-out);\n  -webkit-user-select: none;\n          user-select: none;\n  font-weight: var(--sidenav-item-font-weight);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-background-active);\n}\n.vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__icon[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-icon-color-active);\n}\n.vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-color-active);\n}\n.vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__dropdown-icon[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-color-active);\n}\n.vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-background-hover);\n}\n.vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__icon[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-icon-color-hover);\n}\n.vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-color-hover);\n}\n.vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__dropdown-icon[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-color-hover);\n}\n.vex-sidenav-item.vex-sidenav-item--open[_ngcontent-%COMP%]   .vex-sidenav-item__dropdown-icon[_ngcontent-%COMP%] {\n  transform: rotate(90deg) !important;\n}\n\n.item-level-1[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding-horizontal) + (var(--sidenav-item-dropdown-gap) * 0));\n}\n.item-level-1[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background-active);\n}\n.item-level-1[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-dropdown-color-active);\n}\n.item-level-1[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n.item-level-1[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-dropdown-color-hover);\n}\n\n.item-level-2[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding-horizontal) + (var(--sidenav-item-dropdown-gap) * 1));\n}\n.item-level-2[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background-active);\n}\n.item-level-2[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-dropdown-color-active);\n}\n.item-level-2[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n.item-level-2[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-dropdown-color-hover);\n}\n\n.item-level-3[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding-horizontal) + (var(--sidenav-item-dropdown-gap) * 2));\n}\n.item-level-3[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background-active);\n}\n.item-level-3[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-dropdown-color-active);\n}\n.item-level-3[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n.item-level-3[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-dropdown-color-hover);\n}\n\n.item-level-4[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding-horizontal) + (var(--sidenav-item-dropdown-gap) * 3));\n}\n.item-level-4[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background-active);\n}\n.item-level-4[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-dropdown-color-active);\n}\n.item-level-4[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n.item-level-4[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-dropdown-color-hover);\n}\n\n.item-level-5[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding-horizontal) + (var(--sidenav-item-dropdown-gap) * 4));\n}\n.item-level-5[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background-active);\n}\n.item-level-5[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-dropdown-color-active);\n}\n.item-level-5[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n.item-level-5[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-dropdown-color-hover);\n}\n\n.item-level-6[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding-horizontal) + (var(--sidenav-item-dropdown-gap) * 5));\n}\n.item-level-6[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background-active);\n}\n.item-level-6[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-dropdown-color-active);\n}\n.item-level-6[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n.item-level-6[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-dropdown-color-hover);\n}\n\n.vex-sidenav-item__icon[_ngcontent-%COMP%], .vex-sidenav-item__label[_ngcontent-%COMP%], .vex-sidenav-item__dropdown-icon[_ngcontent-%COMP%] {\n  transition: inherit;\n}\n\n.vex-sidenav-item__icon[_ngcontent-%COMP%] {\n  flex: none;\n  color: var(--sidenav-item-icon-color);\n  font-size: var(--sidenav-item-icon-size);\n  height: var(--sidenav-item-icon-size);\n  margin-inline-end: var(--sidenav-item-icon-gap);\n  width: var(--sidenav-item-icon-size);\n}\n\n.vex-sidenav-item__label[_ngcontent-%COMP%] {\n  flex: auto;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.vex-sidenav-item__badge[_ngcontent-%COMP%] {\n  flex: none;\n  border-radius: 9999px;\n  font-size: 11px;\n  line-height: 20px;\n  margin-inline-start: var(--padding-8);\n  padding: 0 7px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.vex-sidenav-item__dropdown-icon[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-icon-color);\n  font-size: 18px;\n  height: 18px;\n  line-height: 18px;\n  margin-inline-start: var(--padding-8);\n  transform: rotate(0deg) !important;\n  width: 18px;\n}\n\n.vex-sidenav-item__dropdown[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.vex-sidenav-subheading[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  color: var(--sidenav-subheading-color);\n  margin-top: var(--padding);\n  padding: var(--padding-12) var(--padding);\n  text-transform: uppercase;\n  white-space: nowrap;\n  font-weight: 600;\n  -webkit-user-select: none;\n          user-select: none;\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n\n[_nghost-%COMP%]:first-child   .vex-sidenav-subheading[_ngcontent-%COMP%] {\n  margin-top: calc(var(--padding-12) * -1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2xheW91dC9zaWRlbmF2L3NpZGVuYXYtaXRlbS9zaWRlbmF2LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9wYXltZW50JTIwcmVxdWVzdHMlMjBjaGFubmVsL2RlbW8vc3JjL0B2ZXgvbGF5b3V0L3NpZGVuYXYvc2lkZW5hdi1pdGVtL3NpZGVuYXYtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG9GQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NGO0FEQ0U7RUFDRSxpREFBQTtBQ0NKO0FEQ0k7RUFDRSw0Q0FBQTtBQ0NOO0FERUk7RUFDRSx1Q0FBQTtBQ0FOO0FER0k7RUFDRSx1Q0FBQTtBQ0ROO0FES0U7RUFDRSxnREFBQTtBQ0hKO0FES0k7RUFDRSwyQ0FBQTtBQ0hOO0FETUk7RUFDRSxzQ0FBQTtBQ0pOO0FET0k7RUFDRSxzQ0FBQTtBQ0xOO0FEVUk7RUFDRSxtQ0FBQTtBQ1JOOztBRGNFO0VBQ0UsbURBQUE7RUFDQSwwS0FBQTtBQ1hKO0FEYUk7RUFDRSwwREFBQTtBQ1hOO0FEYU07RUFDRSxnREFBQTtBQ1hSO0FEZUk7RUFDRSx5REFBQTtBQ2JOO0FEZU07RUFDRSwrQ0FBQTtBQ2JSOztBREhFO0VBQ0UsbURBQUE7RUFDQSwwS0FBQTtBQ01KO0FESkk7RUFDRSwwREFBQTtBQ01OO0FESk07RUFDRSxnREFBQTtBQ01SO0FERkk7RUFDRSx5REFBQTtBQ0lOO0FERk07RUFDRSwrQ0FBQTtBQ0lSOztBRHBCRTtFQUNFLG1EQUFBO0VBQ0EsMEtBQUE7QUN1Qko7QURyQkk7RUFDRSwwREFBQTtBQ3VCTjtBRHJCTTtFQUNFLGdEQUFBO0FDdUJSO0FEbkJJO0VBQ0UseURBQUE7QUNxQk47QURuQk07RUFDRSwrQ0FBQTtBQ3FCUjs7QURyQ0U7RUFDRSxtREFBQTtFQUNBLDBLQUFBO0FDd0NKO0FEdENJO0VBQ0UsMERBQUE7QUN3Q047QUR0Q007RUFDRSxnREFBQTtBQ3dDUjtBRHBDSTtFQUNFLHlEQUFBO0FDc0NOO0FEcENNO0VBQ0UsK0NBQUE7QUNzQ1I7O0FEdERFO0VBQ0UsbURBQUE7RUFDQSwwS0FBQTtBQ3lESjtBRHZESTtFQUNFLDBEQUFBO0FDeUROO0FEdkRNO0VBQ0UsZ0RBQUE7QUN5RFI7QURyREk7RUFDRSx5REFBQTtBQ3VETjtBRHJETTtFQUNFLCtDQUFBO0FDdURSOztBRHZFRTtFQUNFLG1EQUFBO0VBQ0EsMEtBQUE7QUMwRUo7QUR4RUk7RUFDRSwwREFBQTtBQzBFTjtBRHhFTTtFQUNFLGdEQUFBO0FDMEVSO0FEdEVJO0VBQ0UseURBQUE7QUN3RU47QUR0RU07RUFDRSwrQ0FBQTtBQ3dFUjs7QURsRUE7RUFDRSxtQkFBQTtBQ3FFRjs7QURsRUE7RUFDRSxVQUFBO0VBQ0EscUNBQUE7RUFDQSx3Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxvQ0FBQTtBQ3FFRjs7QURsRUE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDcUVGOztBRGxFQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNxRUY7O0FEbEVBO0VBQ0UscUNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7QUNxRUY7O0FEbEVBO0VBQ0UsZ0JBQUE7QUNxRUY7O0FEbEVBO0VBQ0Usc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0VBQ0EseUNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esa0JBQUE7RUFBQSxpQkFBQTtBQ3FFRjs7QURsRUEsZ0RBQUE7QUFDQTtFQUNFLHdDQUFBO0FDcUVGIiwic291cmNlc0NvbnRlbnQiOlsiLnZleC1zaWRlbmF2LWl0ZW0ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogdmFyKC0tc2lkZW5hdi1pdGVtLWNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtaW4taGVpZ2h0OiB2YXIoLS1zaWRlbmF2LWl0ZW0tbWluLWhlaWdodCk7XG4gIHBhZGRpbmc6IHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nLXZlcnRpY2FsKSB2YXIoLS1zaWRlbmF2LWl0ZW0tcGFkZGluZy1ob3Jpem9udGFsKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2Utb3V0KTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1zaWRlbmF2LWl0ZW0tZm9udC13ZWlnaHQpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxuICAmLnZleC1zaWRlbmF2LWl0ZW0tLWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWJhY2tncm91bmQtYWN0aXZlKTtcblxuICAgIC52ZXgtc2lkZW5hdi1pdGVtX19pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1jb2xvci1hY3RpdmUpO1xuICAgIH1cblxuICAgIC52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCB7XG4gICAgICBjb2xvcjogdmFyKC0tc2lkZW5hdi1pdGVtLWNvbG9yLWFjdGl2ZSk7XG4gICAgfVxuXG4gICAgLnZleC1zaWRlbmF2LWl0ZW1fX2Ryb3Bkb3duLWljb24ge1xuICAgICAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1jb2xvci1hY3RpdmUpO1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1iYWNrZ3JvdW5kLWhvdmVyKTtcblxuICAgIC52ZXgtc2lkZW5hdi1pdGVtX19pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1jb2xvci1ob3Zlcik7XG4gICAgfVxuXG4gICAgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0tY29sb3ItaG92ZXIpO1xuICAgIH1cblxuICAgIC52ZXgtc2lkZW5hdi1pdGVtX19kcm9wZG93bi1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0tY29sb3ItaG92ZXIpO1xuICAgIH1cbiAgfVxuXG4gICYudmV4LXNpZGVuYXYtaXRlbS0tb3BlbiB7XG4gICAgLnZleC1zaWRlbmF2LWl0ZW1fX2Ryb3Bkb3duLWljb24ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbkBmb3IgJGkgZnJvbSAxIHRocm91Z2ggNiB7XG4gIDpob3N0KC5pdGVtLWxldmVsLSN7JGl9KSAudmV4LXNpZGVuYXYtaXRlbSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLXNpemUpICsgdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tZ2FwKSArIHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nLWhvcml6b250YWwpICsgKHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1nYXApICogI3skaSAtIDF9KSk7XG5cbiAgICAmLnZleC1zaWRlbmF2LWl0ZW0tLWFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZC1hY3RpdmUpO1xuXG4gICAgICAudmV4LXNpZGVuYXYtaXRlbV9fbGFiZWwge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWNvbG9yLWFjdGl2ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZC1ob3Zlcik7XG5cbiAgICAgIC52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tY29sb3ItaG92ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udmV4LXNpZGVuYXYtaXRlbV9faWNvbiwgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsLCAudmV4LXNpZGVuYXYtaXRlbV9fZHJvcGRvd24taWNvbiB7XG4gIHRyYW5zaXRpb246IGluaGVyaXQ7XG59XG5cbi52ZXgtc2lkZW5hdi1pdGVtX19pY29uIHtcbiAgZmxleDogbm9uZTtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWNvbG9yKTtcbiAgZm9udC1zaXplOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKTtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWdhcCk7XG4gIHdpZHRoOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKTtcbn1cblxuLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcbiAgZmxleDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi52ZXgtc2lkZW5hdi1pdGVtX19iYWRnZSB7XG4gIGZsZXg6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0tcGFkZGluZy04KTtcbiAgcGFkZGluZzogMCA3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnZleC1zaWRlbmF2LWl0ZW1fX2Ryb3Bkb3duLWljb24ge1xuICBjb2xvcjogdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tY29sb3IpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZGRpbmctOCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxOHB4O1xufVxuXG4udmV4LXNpZGVuYXYtaXRlbV9fZHJvcGRvd24ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udmV4LXNpZGVuYXYtc3ViaGVhZGluZyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LXN1YmhlYWRpbmctY29sb3IpO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWRkaW5nKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy0xMikgdmFyKC0tcGFkZGluZyk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBAYXBwbHkgdGV4dC14cztcbn1cblxuLyoqIElmIGZpcnN0IGl0ZW0gaXMgc3ViaGVhZGluZywgcmVtb3ZlIG1hcmdpbiAqL1xuOmhvc3QoOmZpcnN0LWNoaWxkKSAudmV4LXNpZGVuYXYtc3ViaGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFkZGluZy0xMikgKiAtMSk7XG59XG4iLCIudmV4LXNpZGVuYXYtaXRlbSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0tY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1pbi1oZWlnaHQ6IHZhcigtLXNpZGVuYXYtaXRlbS1taW4taGVpZ2h0KTtcbiAgcGFkZGluZzogdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmctdmVydGljYWwpIHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nLWhvcml6b250YWwpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLXNpZGVuYXYtaXRlbS1mb250LXdlaWdodCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnZleC1zaWRlbmF2LWl0ZW0udmV4LXNpZGVuYXYtaXRlbS0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWJhY2tncm91bmQtYWN0aXZlKTtcbn1cbi52ZXgtc2lkZW5hdi1pdGVtLnZleC1zaWRlbmF2LWl0ZW0tLWFjdGl2ZSAudmV4LXNpZGVuYXYtaXRlbV9faWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1jb2xvci1hY3RpdmUpO1xufVxuLnZleC1zaWRlbmF2LWl0ZW0udmV4LXNpZGVuYXYtaXRlbS0tYWN0aXZlIC52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0tY29sb3ItYWN0aXZlKTtcbn1cbi52ZXgtc2lkZW5hdi1pdGVtLnZleC1zaWRlbmF2LWl0ZW0tLWFjdGl2ZSAudmV4LXNpZGVuYXYtaXRlbV9fZHJvcGRvd24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0tY29sb3ItYWN0aXZlKTtcbn1cbi52ZXgtc2lkZW5hdi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWJhY2tncm91bmQtaG92ZXIpO1xufVxuLnZleC1zaWRlbmF2LWl0ZW06aG92ZXIgLnZleC1zaWRlbmF2LWl0ZW1fX2ljb24ge1xuICBjb2xvcjogdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tY29sb3ItaG92ZXIpO1xufVxuLnZleC1zaWRlbmF2LWl0ZW06aG92ZXIgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1jb2xvci1ob3Zlcik7XG59XG4udmV4LXNpZGVuYXYtaXRlbTpob3ZlciAudmV4LXNpZGVuYXYtaXRlbV9fZHJvcGRvd24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0tY29sb3ItaG92ZXIpO1xufVxuLnZleC1zaWRlbmF2LWl0ZW0udmV4LXNpZGVuYXYtaXRlbS0tb3BlbiAudmV4LXNpZGVuYXYtaXRlbV9fZHJvcGRvd24taWNvbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC0xKSAudmV4LXNpZGVuYXYtaXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1nYXApICsgdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmctaG9yaXpvbnRhbCkgKyAodmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWdhcCkgKiAwKSk7XG59XG46aG9zdCguaXRlbS1sZXZlbC0xKSAudmV4LXNpZGVuYXYtaXRlbS52ZXgtc2lkZW5hdi1pdGVtLS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZC1hY3RpdmUpO1xufVxuOmhvc3QoLml0ZW0tbGV2ZWwtMSkgLnZleC1zaWRlbmF2LWl0ZW0udmV4LXNpZGVuYXYtaXRlbS0tYWN0aXZlIC52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tY29sb3ItYWN0aXZlKTtcbn1cbjpob3N0KC5pdGVtLWxldmVsLTEpIC52ZXgtc2lkZW5hdi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQtaG92ZXIpO1xufVxuOmhvc3QoLml0ZW0tbGV2ZWwtMSkgLnZleC1zaWRlbmF2LWl0ZW06aG92ZXIgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1jb2xvci1ob3Zlcik7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTIpIC52ZXgtc2lkZW5hdi1pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKSArIHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWdhcCkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0tcGFkZGluZy1ob3Jpem9udGFsKSArICh2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tZ2FwKSAqIDEpKTtcbn1cbjpob3N0KC5pdGVtLWxldmVsLTIpIC52ZXgtc2lkZW5hdi1pdGVtLnZleC1zaWRlbmF2LWl0ZW0tLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWFjdGl2ZSk7XG59XG46aG9zdCguaXRlbS1sZXZlbC0yKSAudmV4LXNpZGVuYXYtaXRlbS52ZXgtc2lkZW5hdi1pdGVtLS1hY3RpdmUgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1jb2xvci1hY3RpdmUpO1xufVxuOmhvc3QoLml0ZW0tbGV2ZWwtMikgLnZleC1zaWRlbmF2LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZC1ob3Zlcik7XG59XG46aG9zdCguaXRlbS1sZXZlbC0yKSAudmV4LXNpZGVuYXYtaXRlbTpob3ZlciAudmV4LXNpZGVuYXYtaXRlbV9fbGFiZWwge1xuICBjb2xvcjogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWNvbG9yLWhvdmVyKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtMykgLnZleC1zaWRlbmF2LWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZCk7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLXNpemUpICsgdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tZ2FwKSArIHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nLWhvcml6b250YWwpICsgKHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1nYXApICogMikpO1xufVxuOmhvc3QoLml0ZW0tbGV2ZWwtMykgLnZleC1zaWRlbmF2LWl0ZW0udmV4LXNpZGVuYXYtaXRlbS0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQtYWN0aXZlKTtcbn1cbjpob3N0KC5pdGVtLWxldmVsLTMpIC52ZXgtc2lkZW5hdi1pdGVtLnZleC1zaWRlbmF2LWl0ZW0tLWFjdGl2ZSAudmV4LXNpZGVuYXYtaXRlbV9fbGFiZWwge1xuICBjb2xvcjogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWNvbG9yLWFjdGl2ZSk7XG59XG46aG9zdCguaXRlbS1sZXZlbC0zKSAudmV4LXNpZGVuYXYtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cbjpob3N0KC5pdGVtLWxldmVsLTMpIC52ZXgtc2lkZW5hdi1pdGVtOmhvdmVyIC52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tY29sb3ItaG92ZXIpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC00KSAudmV4LXNpZGVuYXYtaXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1nYXApICsgdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmctaG9yaXpvbnRhbCkgKyAodmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWdhcCkgKiAzKSk7XG59XG46aG9zdCguaXRlbS1sZXZlbC00KSAudmV4LXNpZGVuYXYtaXRlbS52ZXgtc2lkZW5hdi1pdGVtLS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZC1hY3RpdmUpO1xufVxuOmhvc3QoLml0ZW0tbGV2ZWwtNCkgLnZleC1zaWRlbmF2LWl0ZW0udmV4LXNpZGVuYXYtaXRlbS0tYWN0aXZlIC52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tY29sb3ItYWN0aXZlKTtcbn1cbjpob3N0KC5pdGVtLWxldmVsLTQpIC52ZXgtc2lkZW5hdi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQtaG92ZXIpO1xufVxuOmhvc3QoLml0ZW0tbGV2ZWwtNCkgLnZleC1zaWRlbmF2LWl0ZW06aG92ZXIgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1jb2xvci1ob3Zlcik7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTUpIC52ZXgtc2lkZW5hdi1pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKSArIHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWdhcCkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0tcGFkZGluZy1ob3Jpem9udGFsKSArICh2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tZ2FwKSAqIDQpKTtcbn1cbjpob3N0KC5pdGVtLWxldmVsLTUpIC52ZXgtc2lkZW5hdi1pdGVtLnZleC1zaWRlbmF2LWl0ZW0tLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWFjdGl2ZSk7XG59XG46aG9zdCguaXRlbS1sZXZlbC01KSAudmV4LXNpZGVuYXYtaXRlbS52ZXgtc2lkZW5hdi1pdGVtLS1hY3RpdmUgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1jb2xvci1hY3RpdmUpO1xufVxuOmhvc3QoLml0ZW0tbGV2ZWwtNSkgLnZleC1zaWRlbmF2LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZC1ob3Zlcik7XG59XG46aG9zdCguaXRlbS1sZXZlbC01KSAudmV4LXNpZGVuYXYtaXRlbTpob3ZlciAudmV4LXNpZGVuYXYtaXRlbV9fbGFiZWwge1xuICBjb2xvcjogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWNvbG9yLWhvdmVyKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtNikgLnZleC1zaWRlbmF2LWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZCk7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLXNpemUpICsgdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tZ2FwKSArIHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nLWhvcml6b250YWwpICsgKHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1nYXApICogNSkpO1xufVxuOmhvc3QoLml0ZW0tbGV2ZWwtNikgLnZleC1zaWRlbmF2LWl0ZW0udmV4LXNpZGVuYXYtaXRlbS0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQtYWN0aXZlKTtcbn1cbjpob3N0KC5pdGVtLWxldmVsLTYpIC52ZXgtc2lkZW5hdi1pdGVtLnZleC1zaWRlbmF2LWl0ZW0tLWFjdGl2ZSAudmV4LXNpZGVuYXYtaXRlbV9fbGFiZWwge1xuICBjb2xvcjogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWNvbG9yLWFjdGl2ZSk7XG59XG46aG9zdCguaXRlbS1sZXZlbC02KSAudmV4LXNpZGVuYXYtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cbjpob3N0KC5pdGVtLWxldmVsLTYpIC52ZXgtc2lkZW5hdi1pdGVtOmhvdmVyIC52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tY29sb3ItaG92ZXIpO1xufVxuXG4udmV4LXNpZGVuYXYtaXRlbV9faWNvbiwgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsLCAudmV4LXNpZGVuYXYtaXRlbV9fZHJvcGRvd24taWNvbiB7XG4gIHRyYW5zaXRpb246IGluaGVyaXQ7XG59XG5cbi52ZXgtc2lkZW5hdi1pdGVtX19pY29uIHtcbiAgZmxleDogbm9uZTtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWNvbG9yKTtcbiAgZm9udC1zaXplOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKTtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWdhcCk7XG4gIHdpZHRoOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKTtcbn1cblxuLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcbiAgZmxleDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi52ZXgtc2lkZW5hdi1pdGVtX19iYWRnZSB7XG4gIGZsZXg6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0tcGFkZGluZy04KTtcbiAgcGFkZGluZzogMCA3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnZleC1zaWRlbmF2LWl0ZW1fX2Ryb3Bkb3duLWljb24ge1xuICBjb2xvcjogdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tY29sb3IpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZGRpbmctOCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxOHB4O1xufVxuXG4udmV4LXNpZGVuYXYtaXRlbV9fZHJvcGRvd24ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udmV4LXNpZGVuYXYtc3ViaGVhZGluZyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LXN1YmhlYWRpbmctY29sb3IpO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWRkaW5nKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy0xMikgdmFyKC0tcGFkZGluZyk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBAYXBwbHkgdGV4dC14cztcbn1cblxuLyoqIElmIGZpcnN0IGl0ZW0gaXMgc3ViaGVhZGluZywgcmVtb3ZlIG1hcmdpbiAqL1xuOmhvc3QoOmZpcnN0LWNoaWxkKSAudmV4LXNpZGVuYXYtc3ViaGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFkZGluZy0xMikgKiAtMSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [_animations_dropdown_animation__WEBPACK_IMPORTED_MODULE_0__.dropdownAnimation]
  },
  changeDetection: 0
}), _class);
SidenavItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.UntilDestroy)()], SidenavItemComponent);


/***/ }),

/***/ 4658:
/*!*********************************************************************!*\
  !*** ./src/@vex/layout/sidenav/sidenav-item/sidenav-item.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavItemModule": () => (/* binding */ SidenavItemModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _sidenav_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidenav-item.component */ 2493);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);






class SidenavItemModule {}
SidenavItemModule.ɵfac = function SidenavItemModule_Factory(t) {
  return new (t || SidenavItemModule)();
};
SidenavItemModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SidenavItemModule
});
SidenavItemModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SidenavItemModule, {
    declarations: [_sidenav_item_component__WEBPACK_IMPORTED_MODULE_0__.SidenavItemComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule],
    exports: [_sidenav_item_component__WEBPACK_IMPORTED_MODULE_0__.SidenavItemComponent]
  });
})();

/***/ }),

/***/ 6429:
/*!******************************************************!*\
  !*** ./src/@vex/layout/sidenav/sidenav.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavComponent": () => (/* binding */ SidenavComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/user-menu/user-menu.component */ 6470);
/* harmony import */ var _components_search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/search-modal/search-modal.component */ 6547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/navigation.service */ 7360);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/layout.service */ 7901);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/config.service */ 3211);
/* harmony import */ var _components_popover_popover_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/popover/popover.service */ 5786);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _sidenav_item_sidenav_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidenav-item/sidenav-item.component */ 2493);
/* harmony import */ var _components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/scrollbar/scrollbar.component */ 2132);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 9121);
















function SidenavComponent_button_9_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "mat-icon", 17);
  }
}
function SidenavComponent_button_9_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "mat-icon", 18);
  }
}
function SidenavComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SidenavComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r6.toggleCollapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SidenavComponent_button_9_mat_icon_1_Template, 1, 0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, SidenavComponent_button_9_mat_icon_2_Template, 1, 0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.collapsed);
  }
}
function SidenavComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SidenavComponent_div_11_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r8.openSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Quick Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Ctrl K");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
function SidenavComponent_vex_sidenav_item_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "vex-sidenav-item", 24);
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r10)("level", 0);
  }
}
function SidenavComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 25)(1, "div", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SidenavComponent_div_20_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13);
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r12.openProfileMenu(_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 29)(6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "David Smith");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Product Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("vex-sidenav-user--open", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, ctx_r3.userMenuOpen$));
  }
}
class SidenavComponent {
  constructor(navigationService, layoutService, configService, popoverService, dialog) {
    this.navigationService = navigationService;
    this.layoutService = layoutService;
    this.configService = configService;
    this.popoverService = popoverService;
    this.dialog = dialog;
    this.collapsedOpen$ = this.layoutService.sidenavCollapsedOpen$;
    this.title$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(config => config.sidenav.title));
    this.imageUrl$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(config => config.sidenav.imageUrl));
    this.showCollapsePin$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(config => config.sidenav.showCollapsePin));
    this.userVisible$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(config => config.sidenav.user.visible));
    this.searchVisible$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(config => config.sidenav.search.visible));
    this.userMenuOpen$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(false);
    this.items = this.navigationService.items;
  }
  ngOnInit() {}
  collapseOpenSidenav() {
    this.layoutService.collapseOpenSidenav();
  }
  collapseCloseSidenav() {
    this.layoutService.collapseCloseSidenav();
  }
  toggleCollapse() {
    this.collapsed ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
  }
  trackByRoute(index, item) {
    return item.route;
  }
  openProfileMenu(origin) {
    this.userMenuOpen$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(this.popoverService.open({
      content: _components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_0__.UserMenuComponent,
      origin,
      offsetY: -8,
      width: origin.clientWidth,
      position: [{
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
      }]
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(popoverRef => popoverRef.afterClosed$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(() => false))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(true));
  }
  openSearch() {
    this.dialog.open(_components_search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_1__.SearchModalComponent, {
      panelClass: 'vex-dialog-glossy',
      width: '100%',
      maxWidth: '600px'
    });
  }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) {
  return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_3__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_config_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_components_popover_popover_service__WEBPACK_IMPORTED_MODULE_5__.PopoverService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog));
};
SidenavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: SidenavComponent,
  selectors: [["vex-sidenav"]],
  inputs: {
    collapsed: "collapsed"
  },
  decls: 22,
  vars: 26,
  consts: [[1, "sidenav", "flex", "flex-col", 3, "mouseenter", "mouseleave"], [1, "vex-sidenav-toolbar__container"], [1, "sidenav-toolbar", "flex-none", "flex", "items-center"], ["alt", "Logo", 1, "w-6", "select-none", "flex-none", 3, "src"], [1, "vex-sidenav-toolbar__headline", "flex-auto"], ["class", "-mr-4 leading-none flex-none hidden lg:block", "mat-icon-button", "", "type", "button", 3, "click", 4, "ngIf"], ["class", "vex-sidenav-search__container", 4, "ngIf"], [1, "vex-sidenav-toolbar__divider"], [1, "flex-1", "flex", "flex-col"], [1, "pt-6", "flex-1"], [3, "item", "level", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "vex-sidenav-footer", "flex", "items-center", "justify-center", "opacity-20", "px-6", "py-6", "select-none", "flex-none"], ["alt", "Logo", 1, "w-8", "select-none", 3, "src"], ["class", "vex-sidenav-user__container flex-none", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "-mr-4", "leading-none", "flex-none", "hidden", "lg:block", 3, "click"], ["class", "icon-xs", "svgIcon", "mat:radio_button_checked", 4, "ngIf"], ["class", "icon-xs", "svgIcon", "mat:radio_button_unchecked", 4, "ngIf"], ["svgIcon", "mat:radio_button_checked", 1, "icon-xs"], ["svgIcon", "mat:radio_button_unchecked", 1, "icon-xs"], [1, "vex-sidenav-search__container"], ["matRipple", "", "matRippleColor", "var(--sidenav-item-ripple-color)", 1, "vex-sidenav-search", "relative", 3, "click"], ["svgIcon", "mat:search", 1, "flex-none", "vex-sidenav-search__icon"], [1, "flex-auto", "vex-sidenav-search__placeholder"], [1, "flex-none", "vex-sidenav-search__keybind"], [3, "item", "level"], [1, "vex-sidenav-user__container", "flex-none"], ["matRipple", "", "matRippleColor", "var(--sidenav-item-ripple-color)", 1, "vex-sidenav-user", "flex", "items-center", 3, "click"], ["userProfileMenuOriginRef", ""], ["alt", "User Avatar", "src", "assets/img/29-297748_round-profile-image-placeholder.png", 1, "vex-sidenav-user__image", "flex-none"], [1, "vex-sidenav-user__content", "flex-auto"], [1, "vex-sidenav-user__title"], [1, "vex-sidenav-user__subtitle"], ["svgIcon", "mat:arrow_drop_down", 1, "vex-sidenav-user__dropdown-icon", "flex-none"]],
  template: function SidenavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mouseenter", function SidenavComponent_Template_div_mouseenter_0_listener() {
        return ctx.collapseOpenSidenav();
      })("mouseleave", function SidenavComponent_Template_div_mouseleave_0_listener() {
        return ctx.collapseCloseSidenav();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, SidenavComponent_button_9_Template, 3, 2, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, SidenavComponent_div_11_Template, 7, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "vex-scrollbar", 8)(15, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, SidenavComponent_vex_sidenav_item_16_Template, 1, 2, "vex-sidenav-item", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, SidenavComponent_div_20_Template, 11, 4, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("collapsed", ctx.collapsed)("open", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 12, ctx.collapsed && ctx.collapsedOpen$));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 14, ctx.imageUrl$), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 16, ctx.title$));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 18, ctx.showCollapsePin$));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 20, ctx.searchVisible$));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.items)("ngForTrackBy", ctx.trackByRoute);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 22, ctx.imageUrl$), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 24, ctx.userVisible$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _sidenav_item_sidenav_item_component__WEBPACK_IMPORTED_MODULE_6__.SidenavItemComponent, _components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_7__.ScrollbarComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
  styles: [".sidenav[_ngcontent-%COMP%] {\n  color: var(--sidenav-color);\n  height: 100%;\n  transition: var(--trans-ease-out);\n  width: var(--sidenav-width);\n}\n.sidenav.collapsed[_ngcontent-%COMP%] {\n  width: var(--sidenav-collapsed-width);\n}\n.sidenav.collapsed[_ngcontent-%COMP%]:not(.open)   .vex-sidenav-toolbar__headline[_ngcontent-%COMP%] {\n  opacity: 0;\n  padding-inline-start: var(--sidenav-item-padding-horizontal);\n}\n.sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-item__icon {\n  margin-inline-end: var(--sidenav-item-padding-horizontal);\n}\n.sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-subheading, .sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-item__badge, .sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-item__label, .sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-user__title, .sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-user__subtitle, .sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-user__dropdown-icon, .sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-search__placeholder, .sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-search__keybind {\n  opacity: 0;\n}\n.sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-user {\n  padding-right: var(--padding-6);\n}\n.sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .simplebar-track.simplebar-vertical {\n  visibility: hidden !important;\n}\n.sidenav.collapsed[_ngcontent-%COMP%]     .vex-sidenav-subheading, .sidenav.collapsed[_ngcontent-%COMP%]     .vex-sidenav-item__label {\n  transition: all 300ms var(--trans-ease-out-timing-function);\n}\n.sidenav.collapsed[_ngcontent-%COMP%]     .vex-sidenav-item__badge {\n  transition: all 200ms var(--trans-ease-out-timing-function);\n}\n.sidenav.collapsed.open[_ngcontent-%COMP%] {\n  width: var(--sidenav-width);\n}\n.sidenav.collapsed.open[_ngcontent-%COMP%]     .vex-sidenav-item__badge {\n  transition: all 400ms var(--trans-ease-out-timing-function);\n}\n.sidenav[_ngcontent-%COMP%]     .simplebar-track.simplebar-horizontal {\n  visibility: hidden !important;\n}\n\n\n.vex-sidenav-toolbar__container[_ngcontent-%COMP%] {\n  background: var(--sidenav-background);\n  position: sticky;\n  top: 0px;\n  z-index: 10;\n}\n\n.sidenav-toolbar[_ngcontent-%COMP%] {\n  align-items: center;\n  background: var(--sidenav-toolbar-background);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  height: var(--toolbar-height);\n  padding: 0 var(--padding);\n  white-space: nowrap;\n  width: 100%;\n}\n\n.vex-sidenav-toolbar__headline[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 700;\n  letter-spacing: 0.025em;\n  padding-inline-start: var(--sidenav-item-icon-gap);\n  transition: padding var(--trans-ease-out-duration) var(--trans-ease-out-timing-function), opacity var(--trans-ease-out-duration) var(--trans-ease-out-timing-function);\n}\n\n.vex-sidenav-toolbar__divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--sidenav-section-divider-color);\n}\n\n\n.vex-sidenav-user__container[_ngcontent-%COMP%] {\n  background: var(--sidenav-toolbar-background);\n  padding: var(--padding-8) var(--padding-12);\n  border-color: var(--sidenav-section-divider-color);\n  position: sticky;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-top-width: 1px;\n}\n\n.vex-sidenav-user[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: var(--border-radius);\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.vex-sidenav-user[_ngcontent-%COMP%]:hover {\n  background-color: rgb(255 255 255 / 0.1);\n}\n\n.vex-sidenav-user[_ngcontent-%COMP%] {\n  padding: var(--padding-6) var(--padding-8) var(--padding-6) var(--padding-6);\n}\n\n.vex-sidenav-user__image[_ngcontent-%COMP%] {\n  display: block;\n  height: 2.25rem;\n  width: 2.25rem;\n  border-radius: 9999px;\n}\n\n.vex-sidenav-user__content[_ngcontent-%COMP%] {\n  padding-left: var(--padding-12);\n}\n\n.vex-sidenav-user__title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.vex-sidenav-user__subtitle[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  color: rgb(255 255 255 / 0.5);\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.vex-sidenav-user__dropdown-icon[_ngcontent-%COMP%] {\n  color: rgb(255 255 255 / 0.5);\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.vex-sidenav-user--open[_ngcontent-%COMP%] {\n  background-color: rgb(255 255 255 / 0.1);\n}\n\n\n.vex-sidenav-search__container[_ngcontent-%COMP%] {\n  background: var(--sidenav-toolbar-background);\n  padding: 0 var(--padding-12) var(--padding-12);\n  z-index: 10;\n}\n\n.vex-sidenav-search[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  align-items: center;\n  border-radius: var(--border-radius);\n  background-color: rgb(255 255 255 / 0.1);\n  color: rgb(255 255 255 / 0.3);\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.vex-sidenav-search[_ngcontent-%COMP%]:hover {\n  background-color: rgb(255 255 255 / 0.2);\n  color: rgb(255 255 255 / 0.6);\n}\n\n.vex-sidenav-search[_ngcontent-%COMP%] {\n  padding: var(--padding-4) var(--padding-4) var(--padding-4) var(--padding-12);\n}\n\n.vex-sidenav-search__icon[_ngcontent-%COMP%], .vex-sidenav-search__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  height: 1.25rem;\n  width: 1.25rem;\n  line-height: 1.25rem;\n}\n\n.vex-sidenav-search__icon[_ngcontent-%COMP%] {\n  width: var(--sidenav-item-icon-size);\n}\n\n.vex-sidenav-search__placeholder[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  margin-left: var(--sidenav-item-icon-gap);\n}\n\n.vex-sidenav-search__keybind[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  background-color: rgb(255 255 255 / 0.1);\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-size: 0.625rem;\n  font-weight: 600;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2xheW91dC9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9wYXltZW50JTIwcmVxdWVzdHMlMjBjaGFubmVsL2RlbW8vc3JjL0B2ZXgvbGF5b3V0L3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7QUNDRjtBRENFO0VBQ0UscUNBQUE7QUNDSjtBREVNO0VBQ0UsVUFBQTtFQUNBLDREQUFBO0FDQVI7QURJUTtFQUNFLHlEQUFBO0FDRlY7QURLUTs7Ozs7Ozs7RUFRRSxVQUFBO0FDSFY7QURNUTtFQUNFLCtCQUFBO0FDSlY7QURPUTtFQUNFLDZCQUFBO0FDTFY7QURXTTtFQUNFLDJEQUFBO0FDVFI7QURZTTtFQUNFLDJEQUFBO0FDVlI7QURjSTtFQUNFLDJCQUFBO0FDWk47QURlUTtFQUNFLDJEQUFBO0FDYlY7QURvQkk7RUFDRSw2QkFBQTtBQ2xCTjs7QUR1QkEscUJBQUE7QUFDQTtFQUNFLHFDQUFBO0VBRUEsZ0JBQUE7RUFBQSxRQUFBO0VBQUEsV0FBQTtBQ3JCRjs7QUR3QkE7RUFDRSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDckJGOztBRHlCRTtFQUFBLHlCQUFBO1VBQUEsaUJBQUE7RUFBQSxpQkFBQTtFQUFBLGlCQUFBO0VBQUEsZ0JBQUE7RUFBQSx1QkFBQTtFQUNBLGtEQUFBO0VBQ0E7QUFGQTs7QUFLRjtFQUNFLFdBQUE7RUFDQSxnREFBQTtBQ3JCRjs7QUR3QkEsc0JBQUE7QUFDQTtFQUNFLDZDQUFBO0VBQ0EsMkNBQUE7RUFDQSxrREFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEscUJBQUE7QUN0QkY7O0FEMEJFO0VBQUEsa0JBQUE7RUFBQSxlQUFBO0VBQUEseUJBQUE7VUFBQSxpQkFBQTtFQUFBLG1DQUFBO0VBQUEsd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBO0FBQUE7O0FBREY7RUFFRSw0RUFBQTtBQ3RCRjs7QUQwQkU7RUFBQSxjQUFBO0VBQUEsZUFBQTtFQUFBLGNBQUE7RUFBQTtBQUFBOztBQUdGO0VBQ0UsK0JBQUE7QUN0QkY7O0FEMEJFO0VBQUEsbUJBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0JBQUE7RUFBQSxnS0FBQTtFQUFBLHdKQUFBO0VBQUEsaUxBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLG1CQUFBO0VBQUEsa0JBQUE7RUFBQSxpQkFBQTtFQUFBLGdCQUFBO0VBQUEsNkJBQUE7RUFBQSxnS0FBQTtFQUFBLHdKQUFBO0VBQUEsaUxBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLDZCQUFBO0VBQUEsZ0tBQUE7RUFBQSx3SkFBQTtFQUFBLGlMQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQTtBQUFBOztBQUdGLHdCQUFBO0FBQ0E7RUFDRSw2Q0FBQTtFQUNBLDhDQUFBO0VBRUEsV0FBQTtBQ3ZCRjs7QUQyQkU7RUFBQSxhQUFBO0VBQUEsZUFBQTtFQUFBLHlCQUFBO1VBQUEsaUJBQUE7RUFBQSxtQkFBQTtFQUFBLG1DQUFBO0VBQUEsd0NBQUE7RUFBQSw2QkFBQTtFQUFBLGdLQUFBO0VBQUEsd0pBQUE7RUFBQSxpTEFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUEsd0NBQUE7RUFBQTtBQUFBOztBQURGO0VBRUUsNkVBQUE7QUN2QkY7O0FEMkJFO0VBQUEsa0JBQUE7RUFBQSxlQUFBO0VBQUEsY0FBQTtFQUFBO0FBQUE7O0FBREY7RUFFRSxvQ0FBQTtBQ3ZCRjs7QUQyQkU7RUFBQSxtQkFBQTtFQUFBLGtCQUFBO0VBQUEsaUJBQUE7RUFBQSxnQkFBQTtFQUFBLGdLQUFBO0VBQUEsd0pBQUE7RUFBQSxpTEFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQSxzREFBQTtFQUNBO0FBREE7O0FBS0E7RUFBQSxtQ0FBQTtFQUFBLHdDQUFBO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtFQUFBLG9CQUFBO0VBQUEsdUJBQUE7RUFBQSxtQkFBQTtFQUFBLGdCQUFBO0VBQUEsZ0tBQUE7RUFBQSx3SkFBQTtFQUFBLGlMQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdiB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWNvbG9yKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucy1lYXNlLW91dCk7XG4gIHdpZHRoOiB2YXIoLS1zaWRlbmF2LXdpZHRoKTtcblxuICAmLmNvbGxhcHNlZCB7XG4gICAgd2lkdGg6IHZhcigtLXNpZGVuYXYtY29sbGFwc2VkLXdpZHRoKTtcblxuICAgICY6bm90KC5vcGVuKSB7XG4gICAgICAudmV4LXNpZGVuYXYtdG9vbGJhcl9faGVhZGxpbmUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmctaG9yaXpvbnRhbCk7XG4gICAgICB9XG5cbiAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgIC52ZXgtc2lkZW5hdi1pdGVtX19pY29uIHtcbiAgICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmctaG9yaXpvbnRhbClcbiAgICAgICAgfVxuXG4gICAgICAgIC52ZXgtc2lkZW5hdi1zdWJoZWFkaW5nLFxuICAgICAgICAudmV4LXNpZGVuYXYtaXRlbV9fYmFkZ2UsXG4gICAgICAgIC52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCxcbiAgICAgICAgLnZleC1zaWRlbmF2LXVzZXJfX3RpdGxlLFxuICAgICAgICAudmV4LXNpZGVuYXYtdXNlcl9fc3VidGl0bGUsXG4gICAgICAgIC52ZXgtc2lkZW5hdi11c2VyX19kcm9wZG93bi1pY29uLFxuICAgICAgICAudmV4LXNpZGVuYXYtc2VhcmNoX19wbGFjZWhvbGRlcixcbiAgICAgICAgLnZleC1zaWRlbmF2LXNlYXJjaF9fa2V5YmluZCB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52ZXgtc2lkZW5hdi11c2VyIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nLTYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpbXBsZWJhci10cmFjay5zaW1wbGViYXItdmVydGljYWwge1xuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgOjpuZy1kZWVwIHtcbiAgICAgIC52ZXgtc2lkZW5hdi1zdWJoZWFkaW5nLCAudmV4LXNpZGVuYXYtaXRlbV9fbGFiZWwge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgdmFyKC0tdHJhbnMtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgLnZleC1zaWRlbmF2LWl0ZW1fX2JhZGdlIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIHZhcigtLXRyYW5zLWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5vcGVuIHtcbiAgICAgIHdpZHRoOiB2YXIoLS1zaWRlbmF2LXdpZHRoKTtcblxuICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgLnZleC1zaWRlbmF2LWl0ZW1fX2JhZGdlIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNDAwbXMgdmFyKC0tdHJhbnMtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIDo6bmctZGVlcCB7XG4gICAgLnNpbXBsZWJhci10cmFjay5zaW1wbGViYXItaG9yaXpvbnRhbCB7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLyoqIFNJREVOQVYgVE9PTEJBUiAqL1xuLnZleC1zaWRlbmF2LXRvb2xiYXJfX2NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtYmFja2dyb3VuZCk7XG5cbiAgQGFwcGx5IHN0aWNreSB0b3AtMCB6LTEwO1xufVxuXG4uc2lkZW5hdi10b29sYmFyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi10b29sYmFyLWJhY2tncm91bmQpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IHZhcigtLXRvb2xiYXItaGVpZ2h0KTtcbiAgcGFkZGluZzogMCB2YXIoLS1wYWRkaW5nKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi52ZXgtc2lkZW5hdi10b29sYmFyX19oZWFkbGluZSB7XG4gIEBhcHBseSB0ZXh0LTJ4bCBmb250LWJvbGQgdHJhY2tpbmctd2lkZSBzZWxlY3Qtbm9uZTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWdhcCk7XG4gIHRyYW5zaXRpb246IHBhZGRpbmcgdmFyKC0tdHJhbnMtZWFzZS1vdXQtZHVyYXRpb24pIHZhcigtLXRyYW5zLWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbiksIG9wYWNpdHkgdmFyKC0tdHJhbnMtZWFzZS1vdXQtZHVyYXRpb24pIHZhcigtLXRyYW5zLWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbik7XG59XG5cbi52ZXgtc2lkZW5hdi10b29sYmFyX19kaXZpZGVyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtc2VjdGlvbi1kaXZpZGVyLWNvbG9yKTtcbn1cblxuLyoqIFZFWCBTSURFTkFWIFVTRVIgKi9cbi52ZXgtc2lkZW5hdi11c2VyX19jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LXRvb2xiYXItYmFja2dyb3VuZCk7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctOCkgdmFyKC0tcGFkZGluZy0xMik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc2lkZW5hdi1zZWN0aW9uLWRpdmlkZXItY29sb3IpO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuXG4gIEBhcHBseSBib3JkZXItdDtcbn1cblxuLnZleC1zaWRlbmF2LXVzZXIge1xuICBAYXBwbHkgcmVsYXRpdmUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2Utb3V0IHJvdW5kZWQgaG92ZXI6Ymctd2hpdGUvMTAgc2VsZWN0LW5vbmUgY3Vyc29yLXBvaW50ZXI7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctNikgdmFyKC0tcGFkZGluZy04KSB2YXIoLS1wYWRkaW5nLTYpIHZhcigtLXBhZGRpbmctNik7XG59XG5cbi52ZXgtc2lkZW5hdi11c2VyX19pbWFnZSB7XG4gIEBhcHBseSB3LTkgaC05IGJsb2NrIHJvdW5kZWQtZnVsbDtcbn1cblxuLnZleC1zaWRlbmF2LXVzZXJfX2NvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmctMTIpO1xufVxuXG4udmV4LXNpZGVuYXYtdXNlcl9fdGl0bGUge1xuICBAYXBwbHkgdGV4dC1zbSBmb250LW1lZGl1bSB3aGl0ZXNwYWNlLW5vd3JhcCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLW91dDtcbn1cblxuLnZleC1zaWRlbmF2LXVzZXJfX3N1YnRpdGxlIHtcbiAgQGFwcGx5IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1jb250cmFzdC13aGl0ZS81MCB3aGl0ZXNwYWNlLW5vd3JhcCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLW91dDtcbn1cblxuLnZleC1zaWRlbmF2LXVzZXJfX2Ryb3Bkb3duLWljb24ge1xuICBAYXBwbHkgdGV4dC1jb250cmFzdC13aGl0ZS81MCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLW91dDtcbn1cblxuLnZleC1zaWRlbmF2LXVzZXItLW9wZW4ge1xuICBAYXBwbHkgYmctd2hpdGUvMTA7XG59XG5cbi8qKiBWRVggU0lERU5BViBTRUFSQ0ggKi9cbi52ZXgtc2lkZW5hdi1zZWFyY2hfX2NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtdG9vbGJhci1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZzogMCB2YXIoLS1wYWRkaW5nLTEyKSB2YXIoLS1wYWRkaW5nLTEyKTtcblxuICBAYXBwbHkgei0xMDtcbn1cblxuLnZleC1zaWRlbmF2LXNlYXJjaCB7XG4gIEBhcHBseSByb3VuZGVkIGJnLXdoaXRlLzEwIHRleHQtY29udHJhc3Qtd2hpdGUvMzAgaG92ZXI6Ymctd2hpdGUvMjAgaG92ZXI6dGV4dC1jb250cmFzdC13aGl0ZS82MCBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLW91dCBmbGV4IGl0ZW1zLWNlbnRlciBzZWxlY3Qtbm9uZTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy00KSB2YXIoLS1wYWRkaW5nLTQpIHZhcigtLXBhZGRpbmctNCkgdmFyKC0tcGFkZGluZy0xMik7XG59XG5cbi52ZXgtc2lkZW5hdi1zZWFyY2hfX2ljb24ge1xuICBAYXBwbHkgaWNvbi1zbTtcbiAgd2lkdGg6IHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLXNpemUpO1xufVxuXG4udmV4LXNpZGVuYXYtc2VhcmNoX19wbGFjZWhvbGRlciB7XG4gIEBhcHBseSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHdoaXRlc3BhY2Utbm93cmFwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2Utb3V0O1xuICBtYXJnaW4tbGVmdDogdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tZ2FwKTtcbn1cblxuLnZleC1zaWRlbmF2LXNlYXJjaF9fa2V5YmluZCB7XG4gIEBhcHBseSBiZy13aGl0ZS8xMCByb3VuZGVkIHRleHQtMnhzIHB4LTIgcHktMSBmb250LXNlbWlib2xkIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2Utb3V0O1xufVxuIiwiLnNpZGVuYXYge1xuICBjb2xvcjogdmFyKC0tc2lkZW5hdi1jb2xvcik7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xuICB3aWR0aDogdmFyKC0tc2lkZW5hdi13aWR0aCk7XG59XG4uc2lkZW5hdi5jb2xsYXBzZWQge1xuICB3aWR0aDogdmFyKC0tc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGgpO1xufVxuLnNpZGVuYXYuY29sbGFwc2VkOm5vdCgub3BlbikgLnZleC1zaWRlbmF2LXRvb2xiYXJfX2hlYWRsaW5lIHtcbiAgb3BhY2l0eTogMDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nLWhvcml6b250YWwpO1xufVxuLnNpZGVuYXYuY29sbGFwc2VkOm5vdCgub3BlbikgOjpuZy1kZWVwIC52ZXgtc2lkZW5hdi1pdGVtX19pY29uIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nLWhvcml6b250YWwpO1xufVxuLnNpZGVuYXYuY29sbGFwc2VkOm5vdCgub3BlbikgOjpuZy1kZWVwIC52ZXgtc2lkZW5hdi1zdWJoZWFkaW5nLFxuLnNpZGVuYXYuY29sbGFwc2VkOm5vdCgub3BlbikgOjpuZy1kZWVwIC52ZXgtc2lkZW5hdi1pdGVtX19iYWRnZSxcbi5zaWRlbmF2LmNvbGxhcHNlZDpub3QoLm9wZW4pIDo6bmctZGVlcCAudmV4LXNpZGVuYXYtaXRlbV9fbGFiZWwsXG4uc2lkZW5hdi5jb2xsYXBzZWQ6bm90KC5vcGVuKSA6Om5nLWRlZXAgLnZleC1zaWRlbmF2LXVzZXJfX3RpdGxlLFxuLnNpZGVuYXYuY29sbGFwc2VkOm5vdCgub3BlbikgOjpuZy1kZWVwIC52ZXgtc2lkZW5hdi11c2VyX19zdWJ0aXRsZSxcbi5zaWRlbmF2LmNvbGxhcHNlZDpub3QoLm9wZW4pIDo6bmctZGVlcCAudmV4LXNpZGVuYXYtdXNlcl9fZHJvcGRvd24taWNvbixcbi5zaWRlbmF2LmNvbGxhcHNlZDpub3QoLm9wZW4pIDo6bmctZGVlcCAudmV4LXNpZGVuYXYtc2VhcmNoX19wbGFjZWhvbGRlcixcbi5zaWRlbmF2LmNvbGxhcHNlZDpub3QoLm9wZW4pIDo6bmctZGVlcCAudmV4LXNpZGVuYXYtc2VhcmNoX19rZXliaW5kIHtcbiAgb3BhY2l0eTogMDtcbn1cbi5zaWRlbmF2LmNvbGxhcHNlZDpub3QoLm9wZW4pIDo6bmctZGVlcCAudmV4LXNpZGVuYXYtdXNlciB7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmctNik7XG59XG4uc2lkZW5hdi5jb2xsYXBzZWQ6bm90KC5vcGVuKSA6Om5nLWRlZXAgLnNpbXBsZWJhci10cmFjay5zaW1wbGViYXItdmVydGljYWwge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cbi5zaWRlbmF2LmNvbGxhcHNlZCA6Om5nLWRlZXAgLnZleC1zaWRlbmF2LXN1YmhlYWRpbmcsIC5zaWRlbmF2LmNvbGxhcHNlZCA6Om5nLWRlZXAgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIHZhcigtLXRyYW5zLWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbik7XG59XG4uc2lkZW5hdi5jb2xsYXBzZWQgOjpuZy1kZWVwIC52ZXgtc2lkZW5hdi1pdGVtX19iYWRnZSB7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyB2YXIoLS10cmFucy1lYXNlLW91dC10aW1pbmctZnVuY3Rpb24pO1xufVxuLnNpZGVuYXYuY29sbGFwc2VkLm9wZW4ge1xuICB3aWR0aDogdmFyKC0tc2lkZW5hdi13aWR0aCk7XG59XG4uc2lkZW5hdi5jb2xsYXBzZWQub3BlbiA6Om5nLWRlZXAgLnZleC1zaWRlbmF2LWl0ZW1fX2JhZGdlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDQwMG1zIHZhcigtLXRyYW5zLWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbik7XG59XG4uc2lkZW5hdiA6Om5nLWRlZXAgLnNpbXBsZWJhci10cmFjay5zaW1wbGViYXItaG9yaXpvbnRhbCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4vKiogU0lERU5BViBUT09MQkFSICovXG4udmV4LXNpZGVuYXYtdG9vbGJhcl9fY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1iYWNrZ3JvdW5kKTtcbiAgQGFwcGx5IHN0aWNreSB0b3AtMCB6LTEwO1xufVxuXG4uc2lkZW5hdi10b29sYmFyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi10b29sYmFyLWJhY2tncm91bmQpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IHZhcigtLXRvb2xiYXItaGVpZ2h0KTtcbiAgcGFkZGluZzogMCB2YXIoLS1wYWRkaW5nKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi52ZXgtc2lkZW5hdi10b29sYmFyX19oZWFkbGluZSB7XG4gIEBhcHBseSB0ZXh0LTJ4bCBmb250LWJvbGQgdHJhY2tpbmctd2lkZSBzZWxlY3Qtbm9uZTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWdhcCk7XG4gIHRyYW5zaXRpb246IHBhZGRpbmcgdmFyKC0tdHJhbnMtZWFzZS1vdXQtZHVyYXRpb24pIHZhcigtLXRyYW5zLWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbiksIG9wYWNpdHkgdmFyKC0tdHJhbnMtZWFzZS1vdXQtZHVyYXRpb24pIHZhcigtLXRyYW5zLWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbik7XG59XG5cbi52ZXgtc2lkZW5hdi10b29sYmFyX19kaXZpZGVyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtc2VjdGlvbi1kaXZpZGVyLWNvbG9yKTtcbn1cblxuLyoqIFZFWCBTSURFTkFWIFVTRVIgKi9cbi52ZXgtc2lkZW5hdi11c2VyX19jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LXRvb2xiYXItYmFja2dyb3VuZCk7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctOCkgdmFyKC0tcGFkZGluZy0xMik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc2lkZW5hdi1zZWN0aW9uLWRpdmlkZXItY29sb3IpO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBAYXBwbHkgYm9yZGVyLXQ7XG59XG5cbi52ZXgtc2lkZW5hdi11c2VyIHtcbiAgQGFwcGx5IHJlbGF0aXZlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLW91dCByb3VuZGVkIGhvdmVyOmJnLXdoaXRlLzEwIHNlbGVjdC1ub25lIGN1cnNvci1wb2ludGVyO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTYpIHZhcigtLXBhZGRpbmctOCkgdmFyKC0tcGFkZGluZy02KSB2YXIoLS1wYWRkaW5nLTYpO1xufVxuXG4udmV4LXNpZGVuYXYtdXNlcl9faW1hZ2Uge1xuICBAYXBwbHkgdy05IGgtOSBibG9jayByb3VuZGVkLWZ1bGw7XG59XG5cbi52ZXgtc2lkZW5hdi11c2VyX19jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nLTEyKTtcbn1cblxuLnZleC1zaWRlbmF2LXVzZXJfX3RpdGxlIHtcbiAgQGFwcGx5IHRleHQtc20gZm9udC1tZWRpdW0gd2hpdGVzcGFjZS1ub3dyYXAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1vdXQ7XG59XG5cbi52ZXgtc2lkZW5hdi11c2VyX19zdWJ0aXRsZSB7XG4gIEBhcHBseSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtY29udHJhc3Qtd2hpdGUvNTAgd2hpdGVzcGFjZS1ub3dyYXAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1vdXQ7XG59XG5cbi52ZXgtc2lkZW5hdi11c2VyX19kcm9wZG93bi1pY29uIHtcbiAgQGFwcGx5IHRleHQtY29udHJhc3Qtd2hpdGUvNTAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1vdXQ7XG59XG5cbi52ZXgtc2lkZW5hdi11c2VyLS1vcGVuIHtcbiAgQGFwcGx5IGJnLXdoaXRlLzEwO1xufVxuXG4vKiogVkVYIFNJREVOQVYgU0VBUkNIICovXG4udmV4LXNpZGVuYXYtc2VhcmNoX19jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LXRvb2xiYXItYmFja2dyb3VuZCk7XG4gIHBhZGRpbmc6IDAgdmFyKC0tcGFkZGluZy0xMikgdmFyKC0tcGFkZGluZy0xMik7XG4gIEBhcHBseSB6LTEwO1xufVxuXG4udmV4LXNpZGVuYXYtc2VhcmNoIHtcbiAgQGFwcGx5IHJvdW5kZWQgYmctd2hpdGUvMTAgdGV4dC1jb250cmFzdC13aGl0ZS8zMCBob3ZlcjpiZy13aGl0ZS8yMCBob3Zlcjp0ZXh0LWNvbnRyYXN0LXdoaXRlLzYwIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2Utb3V0IGZsZXggaXRlbXMtY2VudGVyIHNlbGVjdC1ub25lO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTQpIHZhcigtLXBhZGRpbmctNCkgdmFyKC0tcGFkZGluZy00KSB2YXIoLS1wYWRkaW5nLTEyKTtcbn1cblxuLnZleC1zaWRlbmF2LXNlYXJjaF9faWNvbiB7XG4gIEBhcHBseSBpY29uLXNtO1xuICB3aWR0aDogdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XG59XG5cbi52ZXgtc2lkZW5hdi1zZWFyY2hfX3BsYWNlaG9sZGVyIHtcbiAgQGFwcGx5IHRleHQteHMgZm9udC1tZWRpdW0gd2hpdGVzcGFjZS1ub3dyYXAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1vdXQ7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1nYXApO1xufVxuXG4udmV4LXNpZGVuYXYtc2VhcmNoX19rZXliaW5kIHtcbiAgQGFwcGx5IGJnLXdoaXRlLzEwIHJvdW5kZWQgdGV4dC0yeHMgcHgtMiBweS0xIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1vdXQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 874:
/*!***************************************************!*\
  !*** ./src/@vex/layout/sidenav/sidenav.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavModule": () => (/* binding */ SidenavModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _sidenav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidenav.component */ 6429);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _sidenav_item_sidenav_item_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidenav-item/sidenav-item.module */ 4658);
/* harmony import */ var _components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/scrollbar/scrollbar.module */ 1337);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _components_user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/user-menu/user-menu.module */ 4615);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _components_search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/search-modal/search-modal.component */ 6547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);












class SidenavModule {}
SidenavModule.ɵfac = function SidenavModule_Factory(t) {
  return new (t || SidenavModule)();
};
SidenavModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: SidenavModule
});
SidenavModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule, _sidenav_item_sidenav_item_module__WEBPACK_IMPORTED_MODULE_1__.SidenavItemModule, _components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_2__.ScrollbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRippleModule, _components_user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_3__.UserMenuModule, _components_search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_4__.SearchModalComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SidenavModule, {
    declarations: [_sidenav_component__WEBPACK_IMPORTED_MODULE_0__.SidenavComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule, _sidenav_item_sidenav_item_module__WEBPACK_IMPORTED_MODULE_1__.SidenavItemModule, _components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_2__.ScrollbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRippleModule, _components_user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_3__.UserMenuModule, _components_search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_4__.SearchModalComponent],
    exports: [_sidenav_component__WEBPACK_IMPORTED_MODULE_0__.SidenavComponent]
  });
})();

/***/ }),

/***/ 6559:
/*!**********************************************************************************************************************************!*\
  !*** ./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarNotificationsDropdownComponent": () => (/* binding */ ToolbarNotificationsDropdownComponent)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 20);
/* harmony import */ var _utils_track_by__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/track-by */ 1081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _pipes_relative_date_time_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../pipes/relative-date-time/relative-date-time.pipe */ 6556);










const _c0 = function () {
  return [];
};
function ToolbarNotificationsDropdownComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 17)(3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "relativeDateTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notification_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("read", notification_r2.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", notification_r2.colorClass)("svgIcon", notification_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](notification_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 7, notification_r2.datetime));
  }
}
class ToolbarNotificationsDropdownComponent {
  constructor() {
    this.notifications = [{
      id: '1',
      label: 'New Order Received',
      icon: 'mat:shopping_basket',
      colorClass: 'text-primary',
      datetime: luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().minus({
        hour: 1
      })
    }, {
      id: '2',
      label: 'New customer has registered',
      icon: 'mat:account_circle',
      colorClass: 'text-orange',
      datetime: luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().minus({
        hour: 2
      })
    }, {
      id: '3',
      label: 'Campaign statistics are available',
      icon: 'mat:insert_chart',
      colorClass: 'text-purple',
      datetime: luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().minus({
        hour: 5
      })
    }, {
      id: '4',
      label: 'Project has been approved',
      icon: 'mat:check_circle',
      colorClass: 'text-green',
      datetime: luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().minus({
        hour: 9
      })
    }, {
      id: '5',
      label: 'Client reports are available',
      icon: 'mat:description',
      colorClass: 'text-primary',
      datetime: luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().minus({
        hour: 30
      })
    }, {
      id: '6',
      label: 'New review received',
      icon: 'mat:feedback',
      colorClass: 'text-orange',
      datetime: luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().minus({
        hour: 40
      }),
      read: true
    }, {
      id: '7',
      label: '22 verified registrations',
      icon: 'mat:verified_user',
      colorClass: 'text-green',
      datetime: luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().minus({
        hour: 60
      })
    }, {
      id: '8',
      label: 'New files available',
      icon: 'mat:file_copy',
      colorClass: 'text-amber',
      datetime: luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().minus({
        hour: 90
      })
    }];
    this.trackById = _utils_track_by__WEBPACK_IMPORTED_MODULE_1__.trackById;
  }
  ngOnInit() {}
}
ToolbarNotificationsDropdownComponent.ɵfac = function ToolbarNotificationsDropdownComponent_Factory(t) {
  return new (t || ToolbarNotificationsDropdownComponent)();
};
ToolbarNotificationsDropdownComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ToolbarNotificationsDropdownComponent,
  selectors: [["vex-toolbar-notifications-dropdown"]],
  decls: 24,
  vars: 4,
  consts: [[1, "dropdown"], [1, "dropdown-header", "flex", "items-center", "justify-between"], [1, "dropdown-heading"], [1, "dropdown-subheading"], ["mat-icon-button", "", "type", "button", 3, "matMenuTriggerFor"], ["svgIcon", "mat:settings", 1, "notifications-header-icon"], [1, "dropdown-content"], ["class", "notification flex items-center", "matRipple", "", 3, "read", "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "dropdown-footer", "flex", "items-center", "justify-center"], ["color", "primary", "mat-button", "", "type", "button"], ["xPosition", "before", "yPosition", "below"], ["settingsMenu", "matMenu"], ["mat-menu-item", ""], ["svgIcon", "mat:clear_all"], ["svgIcon", "mat:notifications_off"], ["matRipple", "", 1, "notification", "flex", "items-center", 3, "routerLink"], [1, "notification-icon", "flex-none", 3, "ngClass", "svgIcon"], [1, "flex-auto"], [1, "notification-label"], [1, "notification-description"], ["svgIcon", "mat:chevron_right", 1, "notification-chevron", "flex-none"]],
  template: function ToolbarNotificationsDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ToolbarNotificationsDropdownComponent_a_10_Template, 9, 10, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "MARK ALL AS READ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-menu", 10, 11)(16, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "mat-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Mark all as read");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "mat-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Disable Notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("You have ", ctx.notifications.length, " new notifications.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.notifications)("ngForTrackBy", ctx.trackById);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuTrigger, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRipple, _pipes_relative_date_time_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_2__.RelativeDateTimePipe],
  styles: [".dropdown[_ngcontent-%COMP%] {\n  background: var(--background-foreground);\n  border-bottom-left-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n  box-shadow: var(--elevation-z4);\n  max-width: 100vw;\n  overflow: hidden;\n  width: 350px;\n  border-radius: var(--border-radius);\n}\n\n.dropdown-header[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--color-primary), var(--tw-bg-opacity));\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  color: rgb(var(--color-primary-contrast));\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.dropdown-heading[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n\n.dropdown-subheading[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  max-height: 291px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.dropdown-footer[_ngcontent-%COMP%] {\n  background: var(--background-app-bar);\n  border-top: 1px solid var(--foreground-divider);\n  padding: var(--padding-8) var(--padding);\n}\n\n.notification[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  padding: var(--padding-16) var(--padding);\n  position: relative;\n  text-decoration: none;\n  transition: var(--trans-ease-out);\n  -webkit-user-select: none;\n          user-select: none;\n}\n.notification[_ngcontent-%COMP%]:hover {\n  background: var(--background-hover);\n}\n.notification[_ngcontent-%COMP%]:hover   .notification-label[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgba(var(--color-primary), var(--tw-text-opacity));\n}\n.notification.read[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.notification-icon[_ngcontent-%COMP%] {\n  margin-inline-end: var(--padding);\n}\n\n.notification-label[_ngcontent-%COMP%] {\n  transition: inherit;\n}\n\n.notification-description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.notification-chevron[_ngcontent-%COMP%] {\n  color: var(--text-hint);\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n\n.notification[_ngcontent-%COMP%]    + .notification[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--foreground-divider);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2xheW91dC90b29sYmFyL3Rvb2xiYXItbm90aWZpY2F0aW9ucy90b29sYmFyLW5vdGlmaWNhdGlvbnMtZHJvcGRvd24vdG9vbGJhci1ub3RpZmljYXRpb25zLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vcGF5bWVudCUyMHJlcXVlc3RzJTIwY2hhbm5lbC9kZW1vL3NyYy9AdmV4L2xheW91dC90b29sYmFyL3Rvb2xiYXItbm90aWZpY2F0aW9ucy90b29sYmFyLW5vdGlmaWNhdGlvbnMtZHJvcGRvd24vdG9vbGJhci1ub3RpZmljYXRpb25zLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQUE7RUFDQSwrQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0FDQ0Y7O0FER0U7RUFBQSxrQkFBQTtFQUFBLGtFQUFBO0VBQUEsaUJBQUE7RUFBQSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEscUJBQUE7RUFBQSx5Q0FBQTtFQUFBLDBFQUFBO0VBQUEsOEZBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsbUJBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsa0JBQUE7RUFBQTtBQUFBOztBQUdGO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esd0NBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FDQ0Y7QURDRTtFQUNFLG1DQUFBO0FDQ0o7QURFTTtFQUFBLG9CQUFBO0VBQUE7QUFBQTtBQUlKO0VBQ0UsWUFBQTtBQ0RKOztBREtBO0VBQ0UsaUNBQUE7QUNGRjs7QURLQTtFQUNFLG1CQUFBO0FDRkY7O0FES0E7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQUEsaUJBQUE7QUNGRjs7QURLQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRkY7O0FES0E7RUFDRSwrQ0FBQTtBQ0ZGIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1mb3JlZ3JvdW5kKTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tZWxldmF0aW9uLXo0KTtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDM1MHB4O1xuICBAYXBwbHkgcm91bmRlZDtcbn1cblxuLmRyb3Bkb3duLWhlYWRlciB7XG4gIEBhcHBseSBiZy1wcmltYXJ5IHNoYWRvdyB0ZXh0LXByaW1hcnktY29udHJhc3QgcHktNCBweC02O1xufVxuXG4uZHJvcGRvd24taGVhZGluZyB7XG4gIEBhcHBseSB0ZXh0LWxnO1xufVxuXG4uZHJvcGRvd24tc3ViaGVhZGluZyB7XG4gIEBhcHBseSB0ZXh0LXhzO1xufVxuXG4uZHJvcGRvd24tY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDI5MXB4OyAvLyA3M3B4IGhlaWdodCBvZiAxIG5vdGlmaWNhdGlvbiAqIDRcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZHJvcGRvd24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hcHAtYmFyKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctOCkgdmFyKC0tcGFkZGluZyk7XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctMTYpIHZhcigtLXBhZGRpbmcpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtcblxuICAgIC5ub3RpZmljYXRpb24tbGFiZWwge1xuICAgICAgQGFwcGx5IHRleHQtcHJpbWFyeTtcbiAgICB9XG4gIH1cblxuICAmLnJlYWQge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxufVxuXG4ubm90aWZpY2F0aW9uLWljb24ge1xuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tcGFkZGluZyk7XG59XG5cbi5ub3RpZmljYXRpb24tbGFiZWwge1xuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xufVxuXG4ubm90aWZpY2F0aW9uLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgQGFwcGx5IHRleHQteHM7XG59XG5cbi5ub3RpZmljYXRpb24tY2hldnJvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWhpbnQpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG59XG5cbi5ub3RpZmljYXRpb24gKyAubm90aWZpY2F0aW9uIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG59XG4iLCIuZHJvcGRvd24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWZvcmVncm91bmQpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3gtc2hhZG93OiB2YXIoLS1lbGV2YXRpb24tejQpO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMzUwcHg7XG4gIEBhcHBseSByb3VuZGVkO1xufVxuXG4uZHJvcGRvd24taGVhZGVyIHtcbiAgQGFwcGx5IGJnLXByaW1hcnkgc2hhZG93IHRleHQtcHJpbWFyeS1jb250cmFzdCBweS00IHB4LTY7XG59XG5cbi5kcm9wZG93bi1oZWFkaW5nIHtcbiAgQGFwcGx5IHRleHQtbGc7XG59XG5cbi5kcm9wZG93bi1zdWJoZWFkaW5nIHtcbiAgQGFwcGx5IHRleHQteHM7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogMjkxcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmRyb3Bkb3duLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtYXBwLWJhcik7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTgpIHZhcigtLXBhZGRpbmcpO1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTE2KSB2YXIoLS1wYWRkaW5nKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2Utb3V0KTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ubm90aWZpY2F0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7XG59XG4ubm90aWZpY2F0aW9uOmhvdmVyIC5ub3RpZmljYXRpb24tbGFiZWwge1xuICBAYXBwbHkgdGV4dC1wcmltYXJ5O1xufVxuLm5vdGlmaWNhdGlvbi5yZWFkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubm90aWZpY2F0aW9uLWljb24ge1xuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tcGFkZGluZyk7XG59XG5cbi5ub3RpZmljYXRpb24tbGFiZWwge1xuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xufVxuXG4ubm90aWZpY2F0aW9uLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgQGFwcGx5IHRleHQteHM7XG59XG5cbi5ub3RpZmljYXRpb24tY2hldnJvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWhpbnQpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG59XG5cbi5ub3RpZmljYXRpb24gKyAubm90aWZpY2F0aW9uIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5502:
/*!******************************************************************************************!*\
  !*** ./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarNotificationsComponent": () => (/* binding */ ToolbarNotificationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar-notifications-dropdown/toolbar-notifications-dropdown.component */ 6559);
/* harmony import */ var _components_popover_popover_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/popover/popover.service */ 5786);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);






const _c0 = ["originRef"];
class ToolbarNotificationsComponent {
  constructor(popover, cd) {
    this.popover = popover;
    this.cd = cd;
  }
  ngOnInit() {}
  showPopover() {
    this.dropdownOpen = true;
    this.cd.markForCheck();
    const popoverRef = this.popover.open({
      content: _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarNotificationsDropdownComponent,
      origin: this.originRef,
      offsetY: 12,
      position: [{
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
      }, {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }]
    });
    popoverRef.afterClosed$.subscribe(() => {
      this.dropdownOpen = false;
      this.cd.markForCheck();
    });
  }
}
ToolbarNotificationsComponent.ɵfac = function ToolbarNotificationsComponent_Factory(t) {
  return new (t || ToolbarNotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_components_popover_popover_service__WEBPACK_IMPORTED_MODULE_1__.PopoverService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
};
ToolbarNotificationsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ToolbarNotificationsComponent,
  selectors: [["vex-toolbar-notifications"]],
  viewQuery: function ToolbarNotificationsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.originRef = _t.first);
    }
  },
  decls: 3,
  vars: 2,
  consts: [["mat-icon-button", "", "type", "button", 1, "button", 3, "click"], ["originRef", ""], ["color", "primary", "svgIcon", "mat:notifications_active"]],
  template: function ToolbarNotificationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToolbarNotificationsComponent_Template_button_click_0_listener() {
        return ctx.showPopover();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("bg-hover", ctx.dropdownOpen);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 836:
/*!***************************************************************************************!*\
  !*** ./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarNotificationsModule": () => (/* binding */ ToolbarNotificationsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar-notifications.component */ 5502);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _components_popover_popover_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/popover/popover.module */ 1512);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/relative-date-time/relative-date-time.module */ 8176);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar-notifications-dropdown/toolbar-notifications-dropdown.component */ 6559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);












class ToolbarNotificationsModule {}
ToolbarNotificationsModule.ɵfac = function ToolbarNotificationsModule_Factory(t) {
  return new (t || ToolbarNotificationsModule)();
};
ToolbarNotificationsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: ToolbarNotificationsModule
});
ToolbarNotificationsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _components_popover_popover_module__WEBPACK_IMPORTED_MODULE_1__.PopoverModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuModule, _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_2__.RelativeDateTimeModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRippleModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ToolbarNotificationsModule, {
    declarations: [_toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarNotificationsComponent, _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_3__.ToolbarNotificationsDropdownComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _components_popover_popover_module__WEBPACK_IMPORTED_MODULE_1__.PopoverModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuModule, _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_2__.RelativeDateTimeModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRippleModule],
    exports: [_toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarNotificationsComponent]
  });
})();

/***/ }),

/***/ 612:
/*!****************************************************************************!*\
  !*** ./src/@vex/layout/toolbar/toolbar-search/toolbar-search.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarSearchComponent": () => (/* binding */ ToolbarSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);






const _c0 = ["input"];
class ToolbarSearchComponent {
  constructor(cd) {
    this.cd = cd;
  }
  ngOnInit() {}
  open() {
    this.isOpen = true;
    this.cd.markForCheck();
    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 100);
  }
  close() {
    this.isOpen = false;
    this.cd.markForCheck();
  }
}
ToolbarSearchComponent.ɵfac = function ToolbarSearchComponent_Factory(t) {
  return new (t || ToolbarSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
ToolbarSearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ToolbarSearchComponent,
  selectors: [["vex-toolbar-search"]],
  viewQuery: function ToolbarSearchComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    }
  },
  decls: 8,
  vars: 2,
  consts: [[1, "flex", "items-center"], ["mat-icon-button", "", 3, "click"], ["svgIcon", "mat:search"], ["appearance", "outline", 1, "search", "flex-auto"], ["matInput", "", 3, "blur"], ["input", ""]],
  template: function ToolbarSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarSearchComponent_Template_button_click_1_listener() {
        return ctx.open();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3)(4, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Search\u2026");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ToolbarSearchComponent_Template_input_blur_6_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("search-open", ctx.isOpen);
    }
  },
  dependencies: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
  styles: [".mat-icon[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgba(var(--color-primary), var(--tw-text-opacity));\n}\n\n.search[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  opacity: 0;\n  overflow: hidden;\n  transition: var(--trans-ease-in-out);\n  visibility: hidden;\n  width: 0;\n}\n.search.search-open[_ngcontent-%COMP%] {\n  margin-left: var(--padding-8);\n  margin-right: var(--padding-8);\n  opacity: 1;\n  visibility: visible;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2xheW91dC90b29sYmFyL3Rvb2xiYXItc2VhcmNoL3Rvb2xiYXItc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vcGF5bWVudCUyMHJlcXVlc3RzJTIwY2hhbm5lbC9kZW1vL3NyYy9AdmV4L2xheW91dC90b29sYmFyL3Rvb2xiYXItc2VhcmNoL3Rvb2xiYXItc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQUEsb0JBQUE7RUFBQTtBQUFBOztBQUdGO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ0NGO0FEQ0U7RUFDRSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NKIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1pY29uIHtcclxuICBAYXBwbHkgdGV4dC1wcmltYXJ5O1xyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucy1lYXNlLWluLW91dCk7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHdpZHRoOiAwO1xyXG5cclxuICAmLnNlYXJjaC1vcGVuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1wYWRkaW5nLTgpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1wYWRkaW5nLTgpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG59XHJcbiIsIi5tYXQtaWNvbiB7XG4gIEBhcHBseSB0ZXh0LXByaW1hcnk7XG59XG5cbi5zZWFyY2gge1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucy1lYXNlLWluLW91dCk7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDA7XG59XG4uc2VhcmNoLnNlYXJjaC1vcGVuIHtcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXBhZGRpbmctOCk7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0tcGFkZGluZy04KTtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgd2lkdGg6IDI1MHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 3949:
/*!*************************************************************************!*\
  !*** ./src/@vex/layout/toolbar/toolbar-search/toolbar-search.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarSearchModule": () => (/* binding */ ToolbarSearchModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _toolbar_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar-search.component */ 612);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);






class ToolbarSearchModule {}
ToolbarSearchModule.ɵfac = function ToolbarSearchModule_Factory(t) {
  return new (t || ToolbarSearchModule)();
};
ToolbarSearchModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ToolbarSearchModule
});
ToolbarSearchModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ToolbarSearchModule, {
    declarations: [_toolbar_search_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarSearchComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule],
    exports: [_toolbar_search_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarSearchComponent]
  });
})();

/***/ }),

/***/ 6697:
/*!*******************************************************************************************************!*\
  !*** ./src/@vex/layout/toolbar/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarUserDropdownComponent": () => (/* binding */ ToolbarUserDropdownComponent)
/* harmony export */ });
/* harmony import */ var _utils_track_by__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/track-by */ 1081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_popover_popover_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/popover/popover-ref */ 2999);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);










function ToolbarUserDropdownComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToolbarUserDropdownComponent_a_10_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 25)(3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", item_r5.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", item_r5.icon)("ngClass", item_r5.colorClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.description);
  }
}
function ToolbarUserDropdownComponent_ng_container_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const status_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", status_r8.colorClass)("svgIcon", status_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](status_r8.label);
  }
}
function ToolbarUserDropdownComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ToolbarUserDropdownComponent_ng_container_13_span_1_Template, 5, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const status_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", status_r8 === ctx_r1.activeStatus);
  }
}
function ToolbarUserDropdownComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToolbarUserDropdownComponent_button_18_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const status_r11 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.setStatus(status_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const status_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", status_r11.colorClass)("svgIcon", status_r11.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](status_r11.label);
  }
}
const _c0 = function () {
  return ["/login"];
};
class ToolbarUserDropdownComponent {
  constructor(cd, popoverRef) {
    this.cd = cd;
    this.popoverRef = popoverRef;
    this.items = [{
      id: '1',
      icon: 'mat:account_circle',
      label: 'My Profile',
      description: 'Personal Information',
      colorClass: 'text-teal',
      route: '/apps/social'
    }, {
      id: '2',
      icon: 'mat:move_to_inbox',
      label: 'My Inbox',
      description: 'Messages & Latest News',
      colorClass: 'text-primary',
      route: '/apps/chat'
    }, {
      id: '3',
      icon: 'mat:list_alt',
      label: 'My Projects',
      description: 'Tasks & Active Projects',
      colorClass: 'text-amber',
      route: '/apps/scrumboard'
    }, {
      id: '4',
      icon: 'mat:table_chart',
      label: 'Billing Information',
      description: 'Pricing & Current Plan',
      colorClass: 'text-purple',
      route: '/pages/pricing'
    }];
    this.statuses = [{
      id: 'online',
      label: 'Online',
      icon: 'mat:check_circle',
      colorClass: 'text-green'
    }, {
      id: 'away',
      label: 'Away',
      icon: 'mat:access_time',
      colorClass: 'text-orange'
    }, {
      id: 'dnd',
      label: 'Do not disturb',
      icon: 'mat:do_not_disturb',
      colorClass: 'text-red'
    }, {
      id: 'offline',
      label: 'Offline',
      icon: 'mat:offline_bolt',
      colorClass: 'text-gray'
    }];
    this.activeStatus = this.statuses[0];
    this.trackById = _utils_track_by__WEBPACK_IMPORTED_MODULE_0__.trackById;
  }
  ngOnInit() {}
  setStatus(status) {
    this.activeStatus = status;
    this.cd.markForCheck();
  }
  close() {
    this.popoverRef.close();
  }
}
ToolbarUserDropdownComponent.ɵfac = function ToolbarUserDropdownComponent_Factory(t) {
  return new (t || ToolbarUserDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_components_popover_popover_ref__WEBPACK_IMPORTED_MODULE_1__.PopoverRef));
};
ToolbarUserDropdownComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ToolbarUserDropdownComponent,
  selectors: [["vex-toolbar-user-dropdown"]],
  decls: 37,
  vars: 10,
  consts: [[1, "dropdown"], [1, "dropdown-header", "flex", "items-center", "justify-between"], [1, "flex", "items-center"], [1, "dropdown-heading-icon", "flex", "items-center", "justify-center"], ["svgIcon", "mat:person"], [1, "dropdown-heading"], ["mat-icon-button", "", "matTooltip", "Settings", "matTooltipPosition", "before", "type", "button", 3, "matMenuTriggerFor"], ["svgIcon", "mat:settings", 1, "notifications-header-icon"], [1, "dropdown-content"], ["class", "notification flex items-center", "matRipple", "", 3, "routerLink", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "dropdown-footer", "flex", "items-center", "justify-between"], ["mat-button", "", "type", "button", 1, "dropdown-footer-select", 3, "matMenuTriggerFor"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["color", "primary", "mat-button", "", 3, "routerLink", "click"], ["xPosition", "before", "yPosition", "below"], ["statusMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["settingsMenu", "matMenu"], ["mat-menu-item", ""], ["svgIcon", "mat:business"], ["svgIcon", "mat:verified_user"], ["svgIcon", "mat:lock"], ["svgIcon", "mat:notifications_off"], ["matRipple", "", 1, "notification", "flex", "items-center", 3, "routerLink", "click"], [1, "notification-icon", "flex-none", 3, "svgIcon", "ngClass"], [1, "flex-auto"], [1, "notification-label"], [1, "notification-description"], ["svgIcon", "mat:chevron_right", 1, "notification-chevron", "flex-none"], [4, "ngIf"], [3, "ngClass", "svgIcon"], ["svgIcon", "mat:arrow_drop_down", 1, "dropdown-footer-select-caret"], ["mat-menu-item", "", 3, "click"]],
  template: function ToolbarUserDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "David Smith");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ToolbarUserDropdownComponent_a_10_Template, 8, 5, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10)(12, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ToolbarUserDropdownComponent_ng_container_13_Template, 2, 1, "ng-container", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToolbarUserDropdownComponent_Template_a_click_14_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-menu", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ToolbarUserDropdownComponent_button_18_Template, 4, 3, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-menu", 14, 17)(21, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "mat-icon", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Change Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "mat-icon", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Change Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "mat-icon", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Change Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "mat-icon", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Disable Notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items)("ngForTrackBy", ctx.trackById);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.statuses)("ngForTrackBy", ctx.trackById);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.statuses)("ngForTrackBy", ctx.trackById);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuTrigger, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip],
  styles: [".dropdown[_ngcontent-%COMP%] {\n  background: var(--background-foreground);\n  border-bottom-left-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n  box-shadow: var(--elevation-z4);\n  max-width: 100vw;\n  overflow: hidden;\n  width: 350px;\n  border-radius: var(--border-radius);\n}\n\n.dropdown-header[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--color-primary), var(--tw-bg-opacity));\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-right: 1rem;\n  padding-left: 0.75rem;\n  color: rgb(var(--color-primary-contrast));\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.dropdown-heading-icon[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 999999px;\n  margin-right: var(--padding-12);\n  padding: var(--padding-8);\n}\n.dropdown-heading-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  height: 32px;\n  width: 32px;\n}\n\n.dropdown-heading[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.dropdown-footer[_ngcontent-%COMP%] {\n  background: var(--background-app-bar);\n  border-top: 1px solid var(--foreground-divider);\n  padding: var(--padding-8) var(--padding-12);\n}\n\n.dropdown-footer-select[_ngcontent-%COMP%] {\n  padding-left: var(--padding-12);\n}\n.dropdown-footer-select[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:not(.dropdown-footer-select-caret) {\n  margin-right: var(--padding-8);\n  vertical-align: -7px !important;\n}\n\n.dropdown-footer-select-caret[_ngcontent-%COMP%] {\n  color: var(--text-hint);\n  font-size: 18px;\n  height: 18px;\n  vertical-align: -4px !important;\n  width: 18px;\n}\n\n.notification[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  padding: var(--padding-16) var(--padding);\n  position: relative;\n  text-decoration: none;\n  transition: var(--trans-ease-out);\n  -webkit-user-select: none;\n          user-select: none;\n}\n.notification[_ngcontent-%COMP%]:hover {\n  background: var(--background-hover);\n}\n.notification[_ngcontent-%COMP%]:hover   .notification-label[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgba(var(--color-primary), var(--tw-text-opacity));\n}\n.notification.read[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.notification-icon[_ngcontent-%COMP%] {\n  margin-right: var(--padding);\n}\n\n.notification-label[_ngcontent-%COMP%] {\n  transition: inherit;\n}\n\n.notification-description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.notification-chevron[_ngcontent-%COMP%] {\n  color: var(--text-hint);\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n\n.notification[_ngcontent-%COMP%]    + .notification[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--foreground-divider);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2xheW91dC90b29sYmFyL3Rvb2xiYXItdXNlci90b29sYmFyLXVzZXItZHJvcGRvd24vdG9vbGJhci11c2VyLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vcGF5bWVudCUyMHJlcXVlc3RzJTIwY2hhbm5lbC9kZW1vL3NyYy9AdmV4L2xheW91dC90b29sYmFyL3Rvb2xiYXItdXNlci90b29sYmFyLXVzZXItZHJvcGRvd24vdG9vbGJhci11c2VyLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQUE7RUFDQSwrQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0FDQ0Y7O0FER0U7RUFBQSxrQkFBQTtFQUFBLGtFQUFBO0VBQUEsaUJBQUE7RUFBQSxvQkFBQTtFQUFBLG1CQUFBO0VBQUEscUJBQUE7RUFBQSx5Q0FBQTtFQUFBLDBFQUFBO0VBQUEsOEZBQUE7RUFBQTtBQUFBOztBQUdGO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FESUU7RUFBQSxtQkFBQTtFQUFBO0FBQUE7O0FBR0Y7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSwyQ0FBQTtBQ0FGOztBREdBO0VBQ0UsK0JBQUE7QUNBRjtBREVFO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQ0FKOztBRElBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRElBO0VBQ0Usd0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUNERjtBREdFO0VBQ0UsbUNBQUE7QUNESjtBRElNO0VBQUEsb0JBQUE7RUFBQTtBQUFBO0FBSUo7RUFDRSxZQUFBO0FDSEo7O0FET0E7RUFDRSw0QkFBQTtBQ0pGOztBRE9BO0VBQ0UsbUJBQUE7QUNKRjs7QURPQTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFBQSxpQkFBQTtBQ0pGOztBRE9BO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNKRjs7QURPQTtFQUNFLCtDQUFBO0FDSkYiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWZvcmVncm91bmQpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3gtc2hhZG93OiB2YXIoLS1lbGV2YXRpb24tejQpO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMzUwcHg7XG4gIEBhcHBseSByb3VuZGVkO1xufVxuXG4uZHJvcGRvd24taGVhZGVyIHtcbiAgQGFwcGx5IGJnLXByaW1hcnkgdGV4dC1wcmltYXJ5LWNvbnRyYXN0IHB5LTQgcHItNCBwbC0zIHNoYWRvdztcbn1cblxuLmRyb3Bkb3duLWhlYWRpbmctaWNvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogOTk5OTk5cHg7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0tcGFkZGluZy0xMik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctOCk7XG5cbiAgLm1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHdpZHRoOiAzMnB4O1xuICB9XG59XG5cbi5kcm9wZG93bi1oZWFkaW5nIHtcbiAgQGFwcGx5IHRleHQtbGc7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmRyb3Bkb3duLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtYXBwLWJhcik7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTgpIHZhcigtLXBhZGRpbmctMTIpO1xufVxuXG4uZHJvcGRvd24tZm9vdGVyLXNlbGVjdCB7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZy0xMik7XG5cbiAgLm1hdC1pY29uOm5vdCguZHJvcGRvd24tZm9vdGVyLXNlbGVjdC1jYXJldCkge1xuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tcGFkZGluZy04KTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogLTdweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5kcm9wZG93bi1mb290ZXItc2VsZWN0LWNhcmV0IHtcbiAgY29sb3I6IHZhcigtLXRleHQtaGludCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogLTRweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMThweDtcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy0xNikgdmFyKC0tcGFkZGluZyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucy1lYXNlLW91dCk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaG92ZXIpO1xuXG4gICAgLm5vdGlmaWNhdGlvbi1sYWJlbCB7XG4gICAgICBAYXBwbHkgdGV4dC1wcmltYXJ5O1xuICAgIH1cbiAgfVxuXG4gICYucmVhZCB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG5cbi5ub3RpZmljYXRpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0tcGFkZGluZyk7XG59XG5cbi5ub3RpZmljYXRpb24tbGFiZWwge1xuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xufVxuXG4ubm90aWZpY2F0aW9uLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgQGFwcGx5IHRleHQteHM7XG59XG5cbi5ub3RpZmljYXRpb24tY2hldnJvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWhpbnQpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG59XG5cbi5ub3RpZmljYXRpb24gKyAubm90aWZpY2F0aW9uIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG59XG4iLCIuZHJvcGRvd24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWZvcmVncm91bmQpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3gtc2hhZG93OiB2YXIoLS1lbGV2YXRpb24tejQpO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMzUwcHg7XG4gIEBhcHBseSByb3VuZGVkO1xufVxuXG4uZHJvcGRvd24taGVhZGVyIHtcbiAgQGFwcGx5IGJnLXByaW1hcnkgdGV4dC1wcmltYXJ5LWNvbnRyYXN0IHB5LTQgcHItNCBwbC0zIHNoYWRvdztcbn1cblxuLmRyb3Bkb3duLWhlYWRpbmctaWNvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogOTk5OTk5cHg7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0tcGFkZGluZy0xMik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctOCk7XG59XG4uZHJvcGRvd24taGVhZGluZy1pY29uIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbn1cblxuLmRyb3Bkb3duLWhlYWRpbmcge1xuICBAYXBwbHkgdGV4dC1sZztcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZHJvcGRvd24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hcHAtYmFyKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctOCkgdmFyKC0tcGFkZGluZy0xMik7XG59XG5cbi5kcm9wZG93bi1mb290ZXItc2VsZWN0IHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nLTEyKTtcbn1cbi5kcm9wZG93bi1mb290ZXItc2VsZWN0IC5tYXQtaWNvbjpub3QoLmRyb3Bkb3duLWZvb3Rlci1zZWxlY3QtY2FyZXQpIHtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1wYWRkaW5nLTgpO1xuICB2ZXJ0aWNhbC1hbGlnbjogLTdweCAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tZm9vdGVyLXNlbGVjdC1jYXJldCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWhpbnQpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgdmVydGljYWwtYWxpZ246IC00cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE4cHg7XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctMTYpIHZhcigtLXBhZGRpbmcpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5ub3RpZmljYXRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cbi5ub3RpZmljYXRpb246aG92ZXIgLm5vdGlmaWNhdGlvbi1sYWJlbCB7XG4gIEBhcHBseSB0ZXh0LXByaW1hcnk7XG59XG4ubm90aWZpY2F0aW9uLnJlYWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5ub3RpZmljYXRpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0tcGFkZGluZyk7XG59XG5cbi5ub3RpZmljYXRpb24tbGFiZWwge1xuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xufVxuXG4ubm90aWZpY2F0aW9uLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgQGFwcGx5IHRleHQteHM7XG59XG5cbi5ub3RpZmljYXRpb24tY2hldnJvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWhpbnQpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG59XG5cbi5ub3RpZmljYXRpb24gKyAubm90aWZpY2F0aW9uIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 1763:
/*!************************************************************************!*\
  !*** ./src/@vex/layout/toolbar/toolbar-user/toolbar-user.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarUserComponent": () => (/* binding */ ToolbarUserComponent)
/* harmony export */ });
/* harmony import */ var _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar-user-dropdown/toolbar-user-dropdown.component */ 6697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_popover_popover_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/popover/popover.service */ 5786);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 9121);





class ToolbarUserComponent {
  constructor(popover, cd) {
    this.popover = popover;
    this.cd = cd;
  }
  ngOnInit() {}
  showPopover(originRef) {
    this.dropdownOpen = true;
    this.cd.markForCheck();
    const popoverRef = this.popover.open({
      content: _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarUserDropdownComponent,
      origin: originRef,
      offsetY: 12,
      position: [{
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
      }, {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }]
    });
    popoverRef.afterClosed$.subscribe(() => {
      this.dropdownOpen = false;
      this.cd.markForCheck();
    });
  }
}
ToolbarUserComponent.ɵfac = function ToolbarUserComponent_Factory(t) {
  return new (t || ToolbarUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_components_popover_popover_service__WEBPACK_IMPORTED_MODULE_1__.PopoverService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
};
ToolbarUserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ToolbarUserComponent,
  selectors: [["vex-toolbar-user"]],
  decls: 6,
  vars: 2,
  consts: [["matRipple", "", 1, "flex", "items-center", "rounded", "cursor-pointer", "relative", "trans-ease-out", "select-none", "py-1", "pr-1", "pl-3", "hover:bg-hover", 3, "click"], ["originRef", ""], [1, "body-1", "font-medium", "leading-snug", "ltr:mr-3", "rtl:ml-3", "hidden", "sm:block"], [1, "rounded-full", "h-9", "w-9", "flex", "items-center", "justify-center", "text-primary", "bg-primary/10"], ["svgIcon", "mat:person"]],
  template: function ToolbarUserComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToolbarUserComponent_Template_div_click_0_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.showPopover(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "David Smith");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("bg-hover", ctx.dropdownOpen);
    }
  },
  dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 9266:
/*!*********************************************************************!*\
  !*** ./src/@vex/layout/toolbar/toolbar-user/toolbar-user.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarUserModule": () => (/* binding */ ToolbarUserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _toolbar_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar-user.component */ 1763);
/* harmony import */ var _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar-user-dropdown/toolbar-user-dropdown.component */ 6697);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/relative-date-time/relative-date-time.module */ 8176);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);











class ToolbarUserModule {}
ToolbarUserModule.ɵfac = function ToolbarUserModule_Factory(t) {
  return new (t || ToolbarUserModule)();
};
ToolbarUserModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ToolbarUserModule
});
ToolbarUserModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRippleModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_2__.RelativeDateTimeModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ToolbarUserModule, {
    declarations: [_toolbar_user_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarUserComponent, _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_1__.ToolbarUserDropdownComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRippleModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_2__.RelativeDateTimeModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule],
    exports: [_toolbar_user_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarUserComponent]
  });
})();

/***/ }),

/***/ 4110:
/*!******************************************************!*\
  !*** ./src/@vex/layout/toolbar/toolbar.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarComponent": () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var _components_mega_menu_mega_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/mega-menu/mega-menu.component */ 7431);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/layout.service */ 7901);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config.service */ 3211);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigation.service */ 7360);
/* harmony import */ var _components_popover_popover_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/popover/popover.service */ 5786);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _toolbar_notifications_toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolbar-notifications/toolbar-notifications.component */ 5502);
/* harmony import */ var _toolbar_user_toolbar_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toolbar-user/toolbar-user.component */ 1763);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navigation/navigation.component */ 8502);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/navigation-item/navigation-item.component */ 1271);

















const _c0 = function () {
  return ["/"];
};
function ToolbarComponent_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h1", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "VEX");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("hidden", !ctx_r0.mobileQuery);
  }
}
function ToolbarComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Add New ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("hidden", ctx_r1.mobileQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matMenuTriggerFor", _r2);
  }
}
const _c1 = function (a0) {
  return {
    "bg-primary/10": a0
  };
};
function ToolbarComponent_button_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToolbarComponent_button_42_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](41);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r10.openMegaMenu(_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Mega Menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("hidden", ctx_r5.mobileQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](5, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 3, ctx_r5.megaMenuOpen$)));
  }
}
function ToolbarComponent_div_44_vex_navigation_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "vex-navigation-item", 41);
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("item", item_r13);
  }
}
function ToolbarComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ToolbarComponent_div_44_vex_navigation_item_1_Template, 1, 1, "vex-navigation-item", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("hidden", ctx_r6.mobileQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r6.navigationItems);
  }
}
function ToolbarComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "vex-toolbar-user");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ToolbarComponent_vex_navigation_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "vex-navigation");
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("hidden", ctx_r9.mobileQuery);
  }
}
class ToolbarComponent {
  constructor(layoutService, configService, navigationService, popoverService) {
    this.layoutService = layoutService;
    this.configService = configService;
    this.navigationService = navigationService;
    this.popoverService = popoverService;
    this.navigationItems = this.navigationService.items;
    this.isHorizontalLayout$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(config => config.layout === 'horizontal'));
    this.isVerticalLayout$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(config => config.layout === 'vertical'));
    this.isNavbarInToolbar$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(config => config.navbar.position === 'in-toolbar'));
    this.isNavbarBelowToolbar$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(config => config.navbar.position === 'below-toolbar'));
    this.userVisible$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(config => config.toolbar.user.visible));
    this.megaMenuOpen$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(false);
  }
  openQuickpanel() {
    this.layoutService.openQuickpanel();
  }
  openSidenav() {
    this.layoutService.openSidenav();
  }
  openMegaMenu(origin) {
    this.megaMenuOpen$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(this.popoverService.open({
      content: _components_mega_menu_mega_menu_component__WEBPACK_IMPORTED_MODULE_0__.MegaMenuComponent,
      origin,
      offsetY: 12,
      position: [{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }]
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(popoverRef => popoverRef.afterClosed$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(() => false))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(true));
  }
  openSearch() {
    this.layoutService.openSearch();
  }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) {
  return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_components_popover_popover_service__WEBPACK_IMPORTED_MODULE_4__.PopoverService));
};
ToolbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: ToolbarComponent,
  selectors: [["vex-toolbar"]],
  hostVars: 2,
  hostBindings: function ToolbarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("shadow-b", ctx.hasShadow);
    }
  },
  inputs: {
    mobileQuery: "mobileQuery",
    hasShadow: "hasShadow"
  },
  decls: 75,
  vars: 31,
  consts: [[1, "toolbar", "w-full", "px-gutter", "flex", "items-center"], ["mat-icon-button", "", "type", "button", 3, "click"], ["svgIcon", "mat:menu"], ["class", "ltr:mr-4 rtl:ml-4 block flex items-center", 3, "routerLink", 4, "ngIf"], ["color", "primary", "mat-flat-button", "", "type", "button", 3, "hidden", "matMenuTriggerFor", 4, "ngIf"], ["xPosition", "after", "yPosition", "below", 3, "overlapTrigger"], ["addNewMenu", "matMenu"], ["mat-menu-item", ""], ["svgIcon", "mat:person_add"], ["svgIcon", "mat:done_all"], ["svgIcon", "mat:assignment_turned_in"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["svgIcon", "mat:ballot"], ["documentMenu", "matMenu"], ["svgIcon", "mat:description"], ["svgIcon", "mat:assignment"], ["svgIcon", "mat:receipt"], [1, "ltr:ml-2", "rtl:mr-2"], ["megaMenuOriginRef", ""], ["color", "primary", "mat-button", "", "type", "button", 3, "hidden", "ngClass", "click", 4, "ngIf"], ["class", "px-gutter flex-none flex items-center", 3, "hidden", 4, "ngIf"], [1, "flex-1"], [1, "-mx-1", "flex", "items-center"], [1, "px-1"], ["color", "primary", "svgIcon", "mat:search"], ["color", "primary", "svgIcon", "mat:bookmarks"], ["mat-icon-button", "", "type", "button", 3, "matMenuTriggerFor"], ["svgIcon", "flag:united-states"], ["class", "px-1", 4, "ngIf"], ["overlapTrigger", "false", "xPosition", "before", "yPosition", "below"], ["languageMenu", "matMenu"], ["svgIcon", "flag:germany"], [3, "hidden", 4, "ngIf"], [1, "ltr:mr-4", "rtl:ml-4", "block", "flex", "items-center", 3, "routerLink"], ["alt", "Logo", "src", "assets/img/demo/logo.svg", 1, "w-8", "select-none"], [1, "title", "ltr:pl-4", "rtl:pr-4", "m-0", "select-none"], ["color", "primary", "mat-flat-button", "", "type", "button", 3, "matMenuTriggerFor"], ["color", "primary", "mat-button", "", "type", "button", 3, "ngClass", "click"], ["svgIcon", "mat:arrow_drop_down", 1, "icon-sm"], [1, "px-gutter", "flex-none", "flex", "items-center"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]],
  template: function ToolbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_2_listener() {
        return ctx.openSidenav();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ToolbarComponent_a_4_Template, 4, 4, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, ToolbarComponent_button_6_Template, 2, 3, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "mat-menu", 5, 6)(10, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "mat-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Add Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "mat-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Add Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Add Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "mat-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "Add Document");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "mat-menu", null, 13)(28, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "mat-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "Add Quote");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "mat-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "Add Invoice");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](37, "mat-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "Add Receipt");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, ToolbarComponent_button_42_Template, 5, 7, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](43, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, ToolbarComponent_div_44_Template, 2, 3, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](45, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](46, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](47, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "div", 22)(49, "div", 23)(50, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_50_listener() {
        return ctx.openSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](51, "mat-icon", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](53, "vex-toolbar-notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "div", 23)(55, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_55_listener() {
        return ctx.openQuickpanel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](56, "mat-icon", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "div", 23)(58, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](59, "mat-icon", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](60, ToolbarComponent_div_60_Template, 2, 0, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](61, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "mat-menu", 29, 30)(64, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](65, "mat-icon", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, "English");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](69, "mat-icon", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](71, "German");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](72, ToolbarComponent_vex_navigation_72_Template, 1, 2, "vex-navigation", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](73, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](74, "async");
    }
    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](27);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("container", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 13, ctx.isVerticalLayout$));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("hidden", !ctx.mobileQuery);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 15, ctx.isVerticalLayout$));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 17, ctx.isHorizontalLayout$));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("overlapTrigger", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matMenuTriggerFor", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](43, 19, ctx.isHorizontalLayout$));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](45, 21, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](46, 23, ctx.isVerticalLayout$) && ctx.isNavbarInToolbar$));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matMenuTriggerFor", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](61, 25, ctx.userVisible$));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](73, 27, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](74, 29, ctx.isVerticalLayout$) && ctx.isNavbarBelowToolbar$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuTrigger, _toolbar_notifications_toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_5__.ToolbarNotificationsComponent, _toolbar_user_toolbar_user_component__WEBPACK_IMPORTED_MODULE_6__.ToolbarUserComponent, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__.NavigationComponent, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterLink, _components_navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_8__.NavigationItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n  background: var(--toolbar-background);\n  box-sizing: border-box;\n  color: var(--toolbar-color);\n  display: block;\n  white-space: nowrap;\n  width: 100%;\n  z-index: var(--toolbar-z-index);\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  height: var(--toolbar-height);\n}\n\na[_ngcontent-%COMP%] {\n  color: var(--toolbar-color);\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2xheW91dC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9wYXltZW50JTIwcmVxdWVzdHMlMjBjaGFubmVsL2RlbW8vc3JjL0B2ZXgvbGF5b3V0L3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0VBQ0EscUJBQUE7QUNDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdG9vbGJhci1iYWNrZ3JvdW5kKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6IHZhcigtLXRvb2xiYXItY29sb3IpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IHZhcigtLXRvb2xiYXItei1pbmRleCk7XG59XG5cbi50b29sYmFyIHtcbiAgaGVpZ2h0OiB2YXIoLS10b29sYmFyLWhlaWdodCk7XG59XG5cbmEge1xuICBjb2xvcjogdmFyKC0tdG9vbGJhci1jb2xvcik7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiIsIjpob3N0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdG9vbGJhci1iYWNrZ3JvdW5kKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6IHZhcigtLXRvb2xiYXItY29sb3IpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IHZhcigtLXRvb2xiYXItei1pbmRleCk7XG59XG5cbi50b29sYmFyIHtcbiAgaGVpZ2h0OiB2YXIoLS10b29sYmFyLWhlaWdodCk7XG59XG5cbmEge1xuICBjb2xvcjogdmFyKC0tdG9vbGJhci1jb2xvcik7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1183:
/*!***************************************************!*\
  !*** ./src/@vex/layout/toolbar/toolbar.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarModule": () => (/* binding */ ToolbarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar.component */ 4110);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _toolbar_notifications_toolbar_notifications_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar-notifications/toolbar-notifications.module */ 836);
/* harmony import */ var _toolbar_user_toolbar_user_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar-user/toolbar-user.module */ 9266);
/* harmony import */ var _toolbar_search_toolbar_search_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar-search/toolbar-search.module */ 3949);
/* harmony import */ var _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navigation/navigation.module */ 6494);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navigation-item/navigation-item.module */ 2656);
/* harmony import */ var _components_mega_menu_mega_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/mega-menu/mega-menu.module */ 7665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);














class ToolbarModule {}
ToolbarModule.ɵfac = function ToolbarModule_Factory(t) {
  return new (t || ToolbarModule)();
};
ToolbarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: ToolbarModule
});
ToolbarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRippleModule, _toolbar_notifications_toolbar_notifications_module__WEBPACK_IMPORTED_MODULE_1__.ToolbarNotificationsModule, _toolbar_user_toolbar_user_module__WEBPACK_IMPORTED_MODULE_2__.ToolbarUserModule, _toolbar_search_toolbar_search_module__WEBPACK_IMPORTED_MODULE_3__.ToolbarSearchModule, _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__.NavigationModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_5__.NavigationItemModule, _components_mega_menu_mega_menu_module__WEBPACK_IMPORTED_MODULE_6__.MegaMenuModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ToolbarModule, {
    declarations: [_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRippleModule, _toolbar_notifications_toolbar_notifications_module__WEBPACK_IMPORTED_MODULE_1__.ToolbarNotificationsModule, _toolbar_user_toolbar_user_module__WEBPACK_IMPORTED_MODULE_2__.ToolbarUserModule, _toolbar_search_toolbar_search_module__WEBPACK_IMPORTED_MODULE_3__.ToolbarSearchModule, _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__.NavigationModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_5__.NavigationItemModule, _components_mega_menu_mega_menu_module__WEBPACK_IMPORTED_MODULE_6__.MegaMenuModule],
    exports: [_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarComponent]
  });
})();

/***/ }),

/***/ 8176:
/*!************************************************************************!*\
  !*** ./src/@vex/pipes/relative-date-time/relative-date-time.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelativeDateTimeModule": () => (/* binding */ RelativeDateTimeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./relative-date-time.pipe */ 6556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class RelativeDateTimeModule {}
RelativeDateTimeModule.ɵfac = function RelativeDateTimeModule_Factory(t) {
  return new (t || RelativeDateTimeModule)();
};
RelativeDateTimeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: RelativeDateTimeModule
});
RelativeDateTimeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RelativeDateTimeModule, {
    declarations: [_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_0__.RelativeDateTimePipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_0__.RelativeDateTimePipe]
  });
})();

/***/ }),

/***/ 6556:
/*!**********************************************************************!*\
  !*** ./src/@vex/pipes/relative-date-time/relative-date-time.pipe.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelativeDateTimePipe": () => (/* binding */ RelativeDateTimePipe)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 20);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class RelativeDateTimePipe {
  transform(value, ...args) {
    if (!value) {
      return;
    }
    if (!(value instanceof luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime)) {
      value = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromISO(value);
    }
    return value.toRelative();
  }
}
RelativeDateTimePipe.ɵfac = function RelativeDateTimePipe_Factory(t) {
  return new (t || RelativeDateTimePipe)();
};
RelativeDateTimePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
  name: "relativeDateTime",
  type: RelativeDateTimePipe,
  pure: true
});

/***/ }),

/***/ 7901:
/*!*********************************************!*\
  !*** ./src/@vex/services/layout.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutService": () => (/* binding */ LayoutService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);





class LayoutService {
  constructor(router, breakpointObserver) {
    this.router = router;
    this.breakpointObserver = breakpointObserver;
    this._quickpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.quickpanelOpen$ = this._quickpanelOpenSubject.asObservable();
    this._sidenavOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.sidenavOpen$ = this._sidenavOpenSubject.asObservable();
    this._sidenavCollapsedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.sidenavCollapsed$ = this._sidenavCollapsedSubject.asObservable();
    this._sidenavCollapsedOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.sidenavCollapsedOpen$ = this._sidenavCollapsedOpenSubject.asObservable();
    this._configpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.configpanelOpen$ = this._configpanelOpenSubject.asObservable();
    this._searchOpen = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.searchOpen$ = this._searchOpen.asObservable();
    this.isDesktop$ = this.breakpointObserver.observe(`(min-width: 1280px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
    this.ltLg$ = this.breakpointObserver.observe(`(max-width: 1279px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
    this.gtMd$ = this.breakpointObserver.observe(`(min-width: 960px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
    this.ltMd$ = this.breakpointObserver.observe(`(max-width: 959px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
    this.gtSm$ = this.breakpointObserver.observe(`(min-width: 600px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
    this.isMobile$ = this.breakpointObserver.observe(`(max-width: 599px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
    this.isLtLg = () => this.breakpointObserver.isMatched(`(max-width: 1279px)`);
    this.isMobile = () => this.breakpointObserver.isMatched(`(max-width: 599px)`);
  }
  openQuickpanel() {
    this._quickpanelOpenSubject.next(true);
  }
  closeQuickpanel() {
    this._quickpanelOpenSubject.next(false);
  }
  openSidenav() {
    this._sidenavOpenSubject.next(true);
  }
  closeSidenav() {
    this._sidenavOpenSubject.next(false);
  }
  collapseSidenav() {
    this._sidenavCollapsedSubject.next(true);
  }
  expandSidenav() {
    this._sidenavCollapsedSubject.next(false);
  }
  collapseOpenSidenav() {
    this._sidenavCollapsedOpenSubject.next(true);
  }
  collapseCloseSidenav() {
    this._sidenavCollapsedOpenSubject.next(false);
  }
  openConfigpanel() {
    this._configpanelOpenSubject.next(true);
  }
  closeConfigpanel() {
    this._configpanelOpenSubject.next(false);
  }
  openSearch() {
    this._searchOpen.next(true);
  }
  closeSearch() {
    this._searchOpen.next(false);
  }
}
LayoutService.ɵfac = function LayoutService_Factory(t) {
  return new (t || LayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.BreakpointObserver));
};
LayoutService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: LayoutService,
  factory: LayoutService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7360:
/*!*************************************************!*\
  !*** ./src/@vex/services/navigation.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationService": () => (/* binding */ NavigationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class NavigationService {
  constructor() {
    this.items = [];
    this._openChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.openChange$ = this._openChangeSubject.asObservable();
  }
  triggerOpenChange(item) {
    this._openChangeSubject.next(item);
  }
  isLink(item) {
    return item.type === 'link';
  }
  isDropdown(item) {
    return item.type === 'dropdown';
  }
  isSubheading(item) {
    return item.type === 'subheading';
  }
}
NavigationService.ɵfac = function NavigationService_Factory(t) {
  return new (t || NavigationService)();
};
NavigationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: NavigationService,
  factory: NavigationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7845:
/*!*********************************************!*\
  !*** ./src/@vex/services/search.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": () => (/* binding */ SearchService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);


class SearchService {
  constructor() {
    this.valueChangesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this.valueChanges$ = this.valueChangesSubject.asObservable();
    this.submitSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.submit$ = this.submitSubject.asObservable();
    this.isOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isOpen$ = this.isOpenSubject.asObservable();
  }
}
SearchService.ɵfac = function SearchService_Factory(t) {
  return new (t || SearchService)();
};
SearchService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: SearchService,
  factory: SearchService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3671:
/*!****************************************************!*\
  !*** ./src/@vex/services/splash-screen.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashScreenService": () => (/* binding */ SplashScreenService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







class SplashScreenService {
  constructor(router, document, animationBuilder) {
    this.router = router;
    this.document = document;
    this.animationBuilder = animationBuilder;
    this.splashScreenElem = this.document.body.querySelector('#vex-splash-screen');
    if (this.splashScreenElem) {
      this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(() => this.hide());
    }
  }
  hide() {
    const player = this.animationBuilder.build([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 1
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('400ms cubic-bezier(0.25, 0.8, 0.25, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 0
    }))]).create(this.splashScreenElem);
    player.onDone(() => this.splashScreenElem.remove());
    player.play();
  }
}
SplashScreenService.ɵfac = function SplashScreenService_Factory(t) {
  return new (t || SplashScreenService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_animations__WEBPACK_IMPORTED_MODULE_3__.AnimationBuilder));
};
SplashScreenService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: SplashScreenService,
  factory: SplashScreenService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5147:
/*!****************************************************!*\
  !*** ./src/@vex/utils/check-router-childs-data.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkRouterChildsData": () => (/* binding */ checkRouterChildsData),
/* harmony export */   "getAllParams": () => (/* binding */ getAllParams)
/* harmony export */ });
function checkRouterChildsData(route, compareWith) {
  if (compareWith(route.data)) {
    return true;
  }
  if (!route.firstChild) {
    return false;
  }
  return checkRouterChildsData(route.firstChild, compareWith);
}
/**
 * Used to get params from children in their parent
 */
function getAllParams(route, result = new Map()) {
  if (route.params) {
    for (const key of Object.keys(route.params)) {
      result.set(key, route.params[key]);
    }
  }
  if (!route.firstChild) {
    return result;
  }
  return getAllParams(route.firstChild, result);
}

/***/ }),

/***/ 1029:
/*!*********************************!*\
  !*** ./src/@vex/utils/isNil.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNil": () => (/* binding */ isNil)
/* harmony export */ });
/**
 * @param value
 */
function isNil(value) {
  return value == null;
}

/***/ }),

/***/ 4442:
/*!**************************************!*\
  !*** ./src/@vex/utils/merge-deep.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeDeep": () => (/* binding */ mergeDeep)
/* harmony export */ });
/**
 * Performs a deep merge of `source` into `target`.
 * Mutates `target` only but not its objects and arrays.
 *
 * @author inspired by [jhildenbiddle](https://stackoverflow.com/a/48218209).
 */
function mergeDeep(target, source) {
  const isObject = obj => obj && typeof obj === 'object';
  if (!isObject(target) || !isObject(source)) {
    return source;
  }
  Object.keys(source).forEach(key => {
    const targetValue = target[key];
    const sourceValue = source[key];
    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });
  return target;
}

/***/ }),

/***/ 1081:
/*!************************************!*\
  !*** ./src/@vex/utils/track-by.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "trackById": () => (/* binding */ trackById),
/* harmony export */   "trackByKey": () => (/* binding */ trackByKey),
/* harmony export */   "trackByLabel": () => (/* binding */ trackByLabel),
/* harmony export */   "trackByRoute": () => (/* binding */ trackByRoute),
/* harmony export */   "trackByValue": () => (/* binding */ trackByValue)
/* harmony export */ });
function trackByRoute(index, item) {
  return item.route;
}
function trackById(index, item) {
  return item.id;
}
function trackByKey(index, item) {
  return item.key;
}
function trackByValue(index, value) {
  return value;
}
function trackByLabel(index, value) {
  return value.label;
}

/***/ }),

/***/ 1410:
/*!********************************!*\
  !*** ./src/@vex/vex.module.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VexModule": () => (/* binding */ VexModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/layout.module */ 638);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




class VexModule {}
VexModule.ɵfac = function VexModule_Factory(t) {
  return new (t || VexModule)();
};
VexModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: VexModule
});
VexModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {
      appearance: 'fill'
    }
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule, _layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VexModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule],
    exports: [_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule]
  });
})();

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _custom_layout_custom_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-layout/custom-layout.component */ 8374);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 9772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: 'login',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_animations_fade-in-up_animation_ts-node_modules_angular_material_fesm2020_che-ca529f"), __webpack_require__.e("src_app_pages_pages_auth_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/auth/login/login.module */ 6759)).then(m => m.LoginModule)
}, {
  path: 'register',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_animations_fade-in-up_animation_ts-node_modules_angular_material_fesm2020_che-ca529f"), __webpack_require__.e("src_app_pages_pages_auth_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/auth/register/register.module */ 3125)).then(m => m.RegisterModule)
}, {
  path: 'forgot-password',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_auth_forgot-password_forgot-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/auth/forgot-password/forgot-password.module */ 4891)).then(m => m.ForgotPasswordModule)
}, {
  path: 'coming-soon',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_coming-soon_coming-soon_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/coming-soon/coming-soon.module */ 3972)).then(m => m.ComingSoonModule)
}, {
  path: '',
  component: _custom_layout_custom_layout_component__WEBPACK_IMPORTED_MODULE_0__.CustomLayoutComponent,
  children: [{
    path: 'dashboards/analytics',
    redirectTo: '/',
    pathMatch: 'full'
  }, {
    path: '',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_page-layout_p-a8870b"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_paginator_mjs-node_modules_angular_material_fe-0bf83c"), __webpack_require__.e("default-src_vex_components_widgets_widget-quick-value-center_widget-quick-value-center_module_ts"), __webpack_require__.e("src_app_pages_dashboards_dashboard-analytics_dashboard-analytics_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dashboards/dashboard-analytics/dashboard-analytics.module */ 2848)).then(m => m.DashboardAnalyticsModule)
  }, {
    path: 'apps',
    children: [{
      path: 'aio-table',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_animations_fade-in-up_animation_ts-node_modules_angular_material_fesm2020_che-ca529f"), __webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_page-layout_p-a8870b"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_paginator_mjs-node_modules_angular_material_fe-0bf83c"), __webpack_require__.e("default-src_vex_animations_stagger_animation_ts-src_app_pages_apps_aio-table_interfaces_custo-f8e805"), __webpack_require__.e("default-src_app_pages_apps_aio-table_aio-table-routing_module_ts-src_app_pages_apps_aio-table-16633c"), __webpack_require__.e("src_app_pages_apps_aio-table_aio-table_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/apps/aio-table/aio-table.module */ 9566)).then(m => m.AioTableModule)
    }, {
      path: 'user-management',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_animations_fade-in-up_animation_ts-node_modules_angular_material_fesm2020_che-ca529f"), __webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_page-layout_p-a8870b"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_paginator_mjs-node_modules_angular_material_fe-0bf83c"), __webpack_require__.e("default-src_vex_animations_stagger_animation_ts-src_app_pages_apps_aio-table_interfaces_custo-f8e805"), __webpack_require__.e("default-src_app_pages_apps_user-managment_user-managment_component_ts"), __webpack_require__.e("src_app_pages_apps_user-managment_user-managment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/apps/user-managment/user-managment.module */ 505)).then(m => m.UserManagementModule)
    }, {
      path: 'payment-request',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_animations_fade-in-up_animation_ts-node_modules_angular_material_fesm2020_che-ca529f"), __webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_page-layout_p-a8870b"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_paginator_mjs-node_modules_angular_material_fe-0bf83c"), __webpack_require__.e("default-src_vex_animations_stagger_animation_ts-src_app_pages_apps_aio-table_interfaces_custo-f8e805"), __webpack_require__.e("default-src_app_pages_apps_aio-table_aio-table-routing_module_ts-src_app_pages_apps_aio-table-16633c"), __webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts-node_modules_angular-77775d"), __webpack_require__.e("src_app_pages_apps_payment-request_payment-request_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/apps/payment-request/payment-request.module */ 1033)).then(m => m.PaymentRequestModule)
    }, {
      path: 'profiles',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_animations_fade-in-up_animation_ts-node_modules_angular_material_fesm2020_che-ca529f"), __webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_page-layout_p-a8870b"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_paginator_mjs-node_modules_angular_material_fe-0bf83c"), __webpack_require__.e("default-src_vex_animations_stagger_animation_ts-src_app_pages_apps_aio-table_interfaces_custo-f8e805"), __webpack_require__.e("default-src_app_pages_apps_aio-table_aio-table-routing_module_ts-src_app_pages_apps_aio-table-16633c"), __webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts-node_modules_angular-77775d"), __webpack_require__.e("default-src_vex_components_widgets_widget-quick-value-center_widget-quick-value-center_module_ts"), __webpack_require__.e("default-src_app_pages_apps_user-managment_user-managment_component_ts"), __webpack_require__.e("src_app_pages_apps_profiles_profiles_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/apps/profiles/profiles.module */ 8613)).then(m => m.ProfilesModule)
    }]
  }, {
    path: 'pages',
    children: [{
      path: 'error-404',
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_errors_error-404_error-404_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/errors/error-404/error-404.module */ 667)).then(m => m.Error404Module)
    }, {
      path: 'error-500',
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_errors_error-500_error-500_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/errors/error-500/error-500.module */ 4064)).then(m => m.Error500Module)
    }]
  }, {
    path: 'documentation',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_page-layout_p-a8870b"), __webpack_require__.e("src_app_pages_documentation_documentation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/documentation/documentation.module */ 8324)).then(m => m.DocumentationModule)
  }, {
    path: '**',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_errors_error-404_error-404_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/errors/error-404/error-404.module */ 667)).then(m => m.Error404Module)
  }]
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
    preloadingStrategy: ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkStrategy,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 20);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ 8971);
/* harmony import */ var _vex_components_config_panel_color_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../@vex/components/config-panel/color-variables */ 4438);
/* harmony import */ var _vex_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@vex/config/config.service */ 3211);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ 9107);
/* harmony import */ var _vex_services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@vex/services/layout.service */ 7901);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _vex_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@vex/services/navigation.service */ 7360);
/* harmony import */ var _vex_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@vex/services/splash-screen.service */ 3671);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 4497);














class AppComponent {
  constructor(configService, renderer, platform, document, localeId, layoutService, route, navigationService, splashScreenService, matIconRegistry, domSanitizer) {
    this.configService = configService;
    this.renderer = renderer;
    this.platform = platform;
    this.document = document;
    this.localeId = localeId;
    this.layoutService = layoutService;
    this.route = route;
    this.navigationService = navigationService;
    this.splashScreenService = splashScreenService;
    this.matIconRegistry = matIconRegistry;
    this.domSanitizer = domSanitizer;
    luxon__WEBPACK_IMPORTED_MODULE_0__.Settings.defaultLocale = this.localeId;
    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }
    this.matIconRegistry.addSvgIconResolver((name, namespace) => {
      switch (namespace) {
        case 'mat':
          return this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/img/icons/material-design-icons/two-tone/${name}.svg`);
        case 'logo':
          return this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/img/icons/logos/${name}.svg`);
        case 'flag':
          return this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/img/icons/flags/${name}.svg`);
      }
    });
    /**
     * Customize the template to your needs with the ConfigService
     * Example:
     *  this.configService.updateConfig({
     *    sidenav: {
     *      title: 'Custom App',
     *      imageUrl: '//placehold.it/100x100',
     *      showCollapsePin: false
     *    },
     *    footer: {
     *      visible: false
     *    }
     *  });
     */
    /**
     * Config Related Subscriptions
     * You can remove this if you don't need the functionality of being able to enable specific configs with queryParams
     * Example: example.com/?layout=apollo&style=default
     */
    this.route.queryParamMap.subscribe(queryParamMap => {
      if (queryParamMap.has('layout')) {
        this.configService.setConfig(queryParamMap.get('layout'));
      }
      if (queryParamMap.has('style')) {
        this.configService.updateConfig({
          style: {
            colorScheme: queryParamMap.get('style')
          }
        });
      }
      if (queryParamMap.has('primaryColor')) {
        const color = _vex_components_config_panel_color_variables__WEBPACK_IMPORTED_MODULE_1__.colorVariables[queryParamMap.get('primaryColor')];
        if (color) {
          this.configService.updateConfig({
            style: {
              colors: {
                primary: color
              }
            }
          });
        }
      }
      if (queryParamMap.has('rtl')) {
        this.configService.updateConfig({
          direction: (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceBooleanProperty)(queryParamMap.get('rtl')) ? 'rtl' : 'ltr'
        });
      }
    });
    /**
     * Add your own routes here
     */
    this.navigationService.items = [{
      type: 'subheading',
      label: 'Dashboards',
      children: [{
        type: 'link',
        label: 'Analytics',
        route: '/',
        icon: 'mat:insights',
        routerLinkActiveOptions: {
          exact: true
        }
      }]
    }, {
      type: 'subheading',
      label: 'User Management',
      children: [{
        type: 'link',
        label: 'Users',
        route: '/apps/user-management',
        icon: 'mat:people'
      }, {
        type: 'link',
        label: 'Add User',
        route: '/apps/calendar',
        icon: 'mat:person_add'
      }]
    }, {
      type: 'subheading',
      label: 'Payment Request',
      children: [{
        type: 'link',
        label: 'Requests History',
        icon: 'mat:watch_later',
        route: '/apps/payment-request/request-history'
      }, {
        type: 'link',
        label: 'Single Request',
        icon: 'mat:attach_money',
        route: '/apps/payment-request/single-request'
      }, {
        type: 'link',
        label: 'Batch Request',
        icon: 'mat:attach_money',
        route: '/apps/payment-request/batch-request'
      }]
    }, {
      type: 'subheading',
      label: 'Customize',
      children: []
    }, {
      type: 'link',
      label: 'Configuration',
      route: () => this.layoutService.openConfigpanel(),
      icon: 'mat:settings'
    }];
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_vex_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_vex_services_layout_service__WEBPACK_IMPORTED_MODULE_3__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_vex_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_vex_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_5__.SplashScreenService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["vex-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _vex_vex_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@vex/vex.module */ 1410);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _custom_layout_custom_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-layout/custom-layout.module */ 3372);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ 2779);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/analytics */ 3763);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);







// Import the functions you need from the SDKs you need



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXDmvfr4wkO0jYOS6WK3WWKg2PSYstFLw",
  authDomain: "payment-request-channel.firebaseapp.com",
  projectId: "payment-request-channel",
  storageBucket: "payment-request-channel.appspot.com",
  messagingSenderId: "749442916405",
  appId: "1:749442916405:web:5b0fd40669a46653f9117c",
  measurementId: "G-MK8W70X63L"
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_4__.initializeApp)(firebaseConfig);
const analytics = (0,firebase_analytics__WEBPACK_IMPORTED_MODULE_5__.getAnalytics)(app);
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
  // Vex
  _vex_vex_module__WEBPACK_IMPORTED_MODULE_2__.VexModule, _custom_layout_custom_layout_module__WEBPACK_IMPORTED_MODULE_3__.CustomLayoutModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
    // Vex
    _vex_vex_module__WEBPACK_IMPORTED_MODULE_2__.VexModule, _custom_layout_custom_layout_module__WEBPACK_IMPORTED_MODULE_3__.CustomLayoutModule]
  });
})();

/***/ }),

/***/ 8374:
/*!**********************************************************!*\
  !*** ./src/app/custom-layout/custom-layout.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomLayoutComponent": () => (/* binding */ CustomLayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@vex/utils/check-router-childs-data */ 5147);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngneat/until-destroy */ 2777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _vex_services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@vex/services/layout.service */ 7901);
/* harmony import */ var _vex_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@vex/config/config.service */ 3211);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _vex_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@vex/layout/layout.component */ 3728);
/* harmony import */ var _vex_layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@vex/layout/sidenav/sidenav.component */ 6429);
/* harmony import */ var _vex_layout_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@vex/layout/toolbar/toolbar.component */ 4110);
/* harmony import */ var _vex_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@vex/layout/footer/footer.component */ 6692);
/* harmony import */ var _vex_components_config_panel_config_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@vex/components/config-panel/config-panel.component */ 7218);
/* harmony import */ var _vex_components_config_panel_config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@vex/components/config-panel/config-panel-toggle/config-panel-toggle.component */ 4364);
/* harmony import */ var _vex_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@vex/components/sidebar/sidebar.component */ 7995);
/* harmony import */ var _vex_layout_quickpanel_quickpanel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@vex/layout/quickpanel/quickpanel.component */ 4373);
var _class;



















const _c0 = ["configpanel"];
function CustomLayoutComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "vex-sidenav", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("collapsed", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, ctx_r1.sidenavCollapsed$));
  }
}
function CustomLayoutComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "vex-toolbar", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "async");
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hasShadow", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 2, ctx_r3.toolbarShadowEnabled$))("mobileQuery", !_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 4, ctx_r3.isDesktop$));
  }
}
function CustomLayoutComponent_ng_template_4_vex_footer_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "vex-footer", 11);
  }
}
function CustomLayoutComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, CustomLayoutComponent_ng_template_4_vex_footer_0_Template, 1, 0, "vex-footer", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, ctx_r5.isFooterVisible$));
  }
}
function CustomLayoutComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "vex-quickpanel");
  }
}
let CustomLayoutComponent = (_class = class CustomLayoutComponent {
  constructor(layoutService, configService, breakpointObserver, router) {
    this.layoutService = layoutService;
    this.configService = configService;
    this.breakpointObserver = breakpointObserver;
    this.router = router;
    this.sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
    this.isFooterVisible$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(config => config.footer.visible));
    this.isDesktop$ = this.layoutService.isDesktop$;
    this.toolbarShadowEnabled$ = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_14__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(() => (0,_vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_0__.checkRouterChildsData)(this.router.routerState.root.snapshot, data => data.toolbarShadowEnabled)));
  }
  ngOnInit() {
    this.layoutService.configpanelOpen$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__.untilDestroyed)(this)).subscribe(open => open ? this.configpanel.open() : this.configpanel.close());
  }
}, _class.ɵfac = function CustomLayoutComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_vex_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_vex_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router));
}, _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["vex-custom-layout"]],
  viewQuery: function CustomLayoutComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.configpanel = _t.first);
    }
  },
  decls: 13,
  vars: 5,
  consts: [["sidenavRef", ""], ["toolbarRef", ""], ["footerRef", ""], ["quickpanelRef", ""], [3, "footerRef", "quickpanelRef", "sidenavRef", "toolbarRef"], [3, "openConfig"], ["position", "right", 3, "invisibleBackdrop"], ["configpanel", ""], [3, "collapsed"], [1, "vex-toolbar", 3, "hasShadow", "mobileQuery"], ["class", "vex-footer", 4, "ngIf"], [1, "vex-footer"]],
  template: function CustomLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, CustomLayoutComponent_ng_template_0_Template, 2, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CustomLayoutComponent_ng_template_2_Template, 3, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, CustomLayoutComponent_ng_template_4_Template, 2, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, CustomLayoutComponent_ng_template_6_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "vex-layout", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "vex-config-panel-toggle", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("openConfig", function CustomLayoutComponent_Template_vex_config_panel_toggle_openConfig_9_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r10);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](11);
        return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r8.open());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "vex-sidebar", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "vex-config-panel");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](1);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](3);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](5);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("footerRef", _r4)("quickpanelRef", _r6)("sidenavRef", _r0)("toolbarRef", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("invisibleBackdrop", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _vex_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__.LayoutComponent, _vex_layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__.SidenavComponent, _vex_layout_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__.ToolbarComponent, _vex_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent, _vex_components_config_panel_config_panel_component__WEBPACK_IMPORTED_MODULE_7__.ConfigPanelComponent, _vex_components_config_panel_config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_8__.ConfigPanelToggleComponent, _vex_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__.SidebarComponent, _vex_layout_quickpanel_quickpanel_component__WEBPACK_IMPORTED_MODULE_10__.QuickpanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}), _class);
CustomLayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__.UntilDestroy)()], CustomLayoutComponent);


/***/ }),

/***/ 3372:
/*!*******************************************************!*\
  !*** ./src/app/custom-layout/custom-layout.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomLayoutModule": () => (/* binding */ CustomLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _vex_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@vex/layout/layout.module */ 638);
/* harmony import */ var _custom_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-layout.component */ 8374);
/* harmony import */ var _vex_layout_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@vex/layout/sidenav/sidenav.module */ 874);
/* harmony import */ var _vex_layout_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@vex/layout/toolbar/toolbar.module */ 1183);
/* harmony import */ var _vex_layout_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@vex/layout/footer/footer.module */ 4947);
/* harmony import */ var _vex_components_config_panel_config_panel_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@vex/components/config-panel/config-panel.module */ 9959);
/* harmony import */ var _vex_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@vex/components/sidebar/sidebar.module */ 2888);
/* harmony import */ var _vex_layout_quickpanel_quickpanel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@vex/layout/quickpanel/quickpanel.module */ 9651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);










class CustomLayoutModule {}
CustomLayoutModule.ɵfac = function CustomLayoutModule_Factory(t) {
  return new (t || CustomLayoutModule)();
};
CustomLayoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: CustomLayoutModule
});
CustomLayoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _vex_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule, _vex_layout_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_2__.SidenavModule, _vex_layout_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.ToolbarModule, _vex_layout_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule, _vex_components_config_panel_config_panel_module__WEBPACK_IMPORTED_MODULE_5__.ConfigPanelModule, _vex_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_6__.SidebarModule, _vex_layout_quickpanel_quickpanel_module__WEBPACK_IMPORTED_MODULE_7__.QuickpanelModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](CustomLayoutModule, {
    declarations: [_custom_layout_component__WEBPACK_IMPORTED_MODULE_1__.CustomLayoutComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _vex_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule, _vex_layout_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_2__.SidenavModule, _vex_layout_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.ToolbarModule, _vex_layout_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule, _vex_components_config_panel_config_panel_module__WEBPACK_IMPORTED_MODULE_5__.ConfigPanelModule, _vex_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_6__.SidebarModule, _vex_layout_quickpanel_quickpanel_module__WEBPACK_IMPORTED_MODULE_7__.QuickpanelModule]
  });
})();

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map