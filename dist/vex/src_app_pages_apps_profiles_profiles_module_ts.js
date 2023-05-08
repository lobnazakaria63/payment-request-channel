"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_apps_profiles_profiles_module_ts"],{

/***/ 6496:
/*!********************************************************!*\
  !*** ./src/@vex/animations/fade-in-right.animation.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeInRight400ms": () => (/* binding */ fadeInRight400ms),
/* harmony export */   "fadeInRightAnimation": () => (/* binding */ fadeInRightAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 4851);

function fadeInRightAnimation(duration) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'translateX(-20px)',
    opacity: 0
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'translateX(0)',
    opacity: 1
  }))])]);
}
const fadeInRight400ms = fadeInRightAnimation(400);

/***/ }),

/***/ 8911:
/*!********************************************************!*\
  !*** ./src/@vex/animations/scale-fade-in.animation.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scaleFadeIn400ms": () => (/* binding */ scaleFadeIn400ms),
/* harmony export */   "scaleFadeInAnimation": () => (/* binding */ scaleFadeInAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 4851);

function scaleFadeInAnimation(duration) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('scaleFadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'scale(0.8)',
    opacity: 0
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'scale(1)',
    opacity: 1
  }))])]);
}
const scaleFadeIn400ms = scaleFadeInAnimation(400);

/***/ }),

/***/ 9597:
/*!***************************************************!*\
  !*** ./src/@vex/animations/scale-in.animation.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scaleIn400ms": () => (/* binding */ scaleIn400ms),
/* harmony export */   "scaleInAnimation": () => (/* binding */ scaleInAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 4851);

function scaleInAnimation(duration) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('scaleIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'scale(0)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'scale(1)'
  }))])]);
}
const scaleIn400ms = scaleInAnimation(400);

/***/ }),

/***/ 5719:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/apps/profiles/customer-profile/customer-form/customer-form.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerFormComponent": () => (/* binding */ CustomerFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */ 3410);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../@vex/components/breadcrumbs/breadcrumbs.component */ 4076);












function CustomerFormComponent_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Beneficiary Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CustomerFormComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CustomerFormComponent_div_18_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.fUpdate["name"].errors["required"]);
  }
}
function CustomerFormComponent_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Beneficiary Address is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CustomerFormComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CustomerFormComponent_div_24_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.fUpdate["address"].errors["required"]);
  }
}
function CustomerFormComponent_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Contact Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CustomerFormComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CustomerFormComponent_div_30_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.fUpdate["phone"].errors["required"]);
  }
}
function CustomerFormComponent_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Payment Services is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CustomerFormComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CustomerFormComponent_div_40_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.fUpdate["payment_services"].errors["required"]);
  }
}
function CustomerFormComponent_div_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Alert Services is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CustomerFormComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CustomerFormComponent_div_50_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.fUpdate["alert_services"].errors["required"]);
  }
}
const _c0 = function () {
  return ["Your Profile", "Update Profile"];
};
class CustomerFormComponent {
  constructor(_fb) {
    this._fb = _fb;
  }
  ngOnInit() {
    this.initUpdateForm();
  }
  get fUpdate() {
    return this.updateForm.controls;
  }
  initUpdateForm() {
    this.updateForm = this._fb.group({
      id: [],
      name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(10)]],
      address: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      payment_services: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      alert_services: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
    });
    this.updateForm.controls['id'].setValue(123);
    this.updateForm.controls['id'].disable();
  }
}
CustomerFormComponent.ɵfac = function CustomerFormComponent_Factory(t) {
  return new (t || CustomerFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
};
CustomerFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CustomerFormComponent,
  selectors: [["ng-component"]],
  decls: 56,
  vars: 8,
  consts: [["current", "Update Profile"], [1, "flex-auto", 3, "crumbs"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "ml-2"], ["svgIcon", "mat:more_vert"], [1, "p-gutter", "form-container", "container"], [1, "card", "overflow-auto", "mt-8", "pb-8", "p-gutter", "container"], [3, "formGroup"], [1, "grid", "md:grid-cols-3", "mt-2"], [1, "p-3", "dense-2"], ["appearance", "outline", 1, "form-field", "w-full"], [1, "form-label"], ["matInput", "", "formControlName", "id"], ["matInput", "", "formControlName", "name"], ["class", "invalid-feedback", 4, "ngIf"], ["matInput", "", "formControlName", "address"], ["matInput", "", "formControlName", "phone"], ["formControlName", "payment_services"], ["value", "$"], ["value", "\u00A3"], ["formControlName", "alert_services"], [1, "save-btn", "text-right", "mr-4"], ["mat-raised-button", "", "color", "primary", 1, "mr-4"], ["mat-raised-button", "", "color", "warn"], [1, "invalid-feedback"], [4, "ngIf"]],
  template: function CustomerFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "vex-secondary-toolbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "vex-breadcrumbs", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "form", 6)(7, "div", 7)(8, "div", 8)(9, "mat-form-field", 9)(10, "mat-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "CIF ID ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8)(14, "mat-form-field", 9)(15, "mat-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CustomerFormComponent_div_18_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 8)(20, "mat-form-field", 9)(21, "mat-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Address ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CustomerFormComponent_div_24_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 8)(26, "mat-form-field", 9)(27, "mat-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Contact Number ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, CustomerFormComponent_div_30_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 8)(32, "mat-form-field", 9)(33, "mat-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Payment Services ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-select", 16)(36, "mat-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "test1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "test 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, CustomerFormComponent_div_40_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 8)(42, "mat-form-field", 9)(43, "mat-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Alert Services ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-select", 19)(46, "mat-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "test1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "mat-option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "test 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, CustomerFormComponent_div_50_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 20)(52, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.updateForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fUpdate["name"].errors && (ctx.fUpdate["name"].touched || ctx.fUpdate["name"].dirty));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fUpdate["address"].errors && (ctx.fUpdate["address"].touched || ctx.fUpdate["address"].dirty));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fUpdate["phone"].errors && (ctx.fUpdate["phone"].touched || ctx.fUpdate["phone"].dirty));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fUpdate["payment_services"].errors && (ctx.fUpdate["payment_services"].touched || ctx.fUpdate["payment_services"].dirty));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fUpdate["alert_services"].errors && (ctx.fUpdate["alert_services"].touched || ctx.fUpdate["alert_services"].dirty));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.SecondaryToolbarComponent, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsComponent],
  styles: [".form-container[_ngcontent-%COMP%] {\n  width: 96%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYXBwcy9wcm9maWxlcy9jdXN0b21lci1wcm9maWxlL2N1c3RvbWVyLWZvcm0vY3VzdG9tZXItZm9ybS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL3BheW1lbnQlMjByZXF1ZXN0cyUyMGNoYW5uZWwvZGVtby9zcmMvYXBwL3BhZ2VzL2FwcHMvcHJvZmlsZXMvY3VzdG9tZXItcHJvZmlsZS9jdXN0b21lci1mb3JtL2N1c3RvbWVyLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogOTYlO1xyXG59XHJcbi8vIDo6bmctZGVlcCAubWF0LW1kYy1mb3JtLWZpZWxkLWZsZXggPiAubWF0LW1kYy1mb3JtLWZpZWxkLWluZml4IHsgcGFkZGluZzogMC40ZW0gMHB4ICFpbXBvcnRhbnQ7fVxyXG4vLyA6Om5nLWRlZXAgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHsgdG9wOiAtMS41ZW07IH1cclxuXHJcbi8vIDo6bmctZGVlcCAubWF0LW1kYy1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtbWRjLWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1tZGMtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1tZGMtZm9ybS1maWVsZC1sYWJlbCB7XHJcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpO1xyXG4vLyAgICAgd2lkdGg6IDEzMy4zMzMzMyU7XHJcbi8vIH1cclxuIiwiLmZvcm0tY29udGFpbmVyIHtcbiAgd2lkdGg6IDk2JTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 972:
/*!************************************************************************************!*\
  !*** ./src/app/pages/apps/profiles/customer-profile/customer-profile.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerProfileComponent": () => (/* binding */ CustomerProfileComponent)
/* harmony export */ });
/* harmony import */ var src_vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/@vex/animations/fade-in-right.animation */ 6496);
/* harmony import */ var src_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/@vex/animations/scale-in.animation */ 9597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-quicklink */ 9772);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);






const _c0 = function () {
  return ["/apps/profiles/profile-update"];
};
class CustomerProfileComponent {
  constructor() {}
  ngOnInit() {}
  addFriend(friend) {
    friend.added = true;
  }
  removeFriend(friend) {
    friend.added = false;
  }
  trackByName(index, friend) {
    return friend.name;
  }
}
CustomerProfileComponent.ɵfac = function CustomerProfileComponent_Factory(t) {
  return new (t || CustomerProfileComponent)();
};
CustomerProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CustomerProfileComponent,
  selectors: [["vex-social"]],
  decls: 51,
  vars: 13,
  consts: [[1, "container", "py-gutter"], [1, "card", "overflow-hidden"], [1, "h-44", "relative", "overflow-hidden"], ["src", "assets/img/demo/banner-design.jpg", 1, "w-full", "h-full", "object-cover"], [1, "absolute", "bg-contrast-black", "opacity-25", "top-0", "right-0", "bottom-0", "left-0", "w-full", "h-full", "z-0"], ["src", "assets/img/29-297748_round-profile-image-placeholder.png", 1, "avatar", "h-24", "w-24", "absolute", "top-6", "ltr:left-4", "rtl:right-4", "sm:hidden"], [1, "z-10", "relative", "-mt-16", "px-gutter", "flex", "items-center"], ["src", "assets/img/29-297748_round-profile-image-placeholder.png", 1, "avatar", "h-24", "w-24", "flex-none", "align-start", "hidden", "sm:block", "border-2", "border-white"], [1, "max-w-full", "flex-auto", "sm:ltr:ml-6", "sm:rtl:mr-6"], [1, "h-16", "flex", "items-end"], [1, "headline", "text-contrast-white", "pb-2", "m-0"], [1, "h-12"], [1, "mt-6", "flex", "flex-col", "md:flex-row", "md:items-start"], [1, "flex-auto"], [1, "card"], [1, "px-gutter", "flex", "justify-between", "py-4", "border-b"], [1, "title", "m-0"], [1, "w-8", "font-bold", "h-8", "rounded-full", "bg-primary/10", "text-primary", "ltr:mr-3", "rtl:ml-3", "flex", "items-center", "justify-center"], [3, "routerLink"], ["svgIcon", "mat:edit", 1, "icon-sm"], [1, "px-gutter", "py-4", "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "py-3", "flex", "items-center"], [1, "w-10", "font-bold", "h-10", "rounded-full", "bg-primary/10", "text-primary", "ltr:mr-3", "rtl:ml-3", "flex", "items-center", "justify-center"], [1, "m-0", "body-1"], [1, "w-10", "h-10", "rounded-full", "bg-primary/10", "text-primary", "ltr:mr-3", "rtl:ml-3", "flex", "items-center", "justify-center"], ["svgIcon", "mat:home", 1, "icon-sm"], [1, "m-0", "caption", "text-hint"], ["svgIcon", "mat:mail", 1, "icon-sm"], ["svgIcon", "mat:phonelink_ring", 1, "icon-sm"]],
  template: function CustomerProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3)(4, "div", 4)(5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "h1", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "David Smith");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "div", 15)(17, "h2", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 17)(20, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "mat-icon", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 20)(23, "div", 21)(24, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " CIF ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div")(27, "p", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "11524555");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 21)(30, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "mat-icon", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div")(33, "p", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "5 xxxxx st. apartment no. xxxxx");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Cairo , Egypt");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 21)(38, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "mat-icon", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div")(41, "p", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "david.smith@example.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Business inquiries only");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 21)(46, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "mat-icon", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div")(49, "p", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "+(002)01234567897");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scaleIn", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scaleIn", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scaleIn", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scaleIn", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scaleIn", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scaleIn", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeInRight", undefined);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, ngx_quicklink__WEBPACK_IMPORTED_MODULE_4__.QuicklinkDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [src_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__.scaleIn400ms, src_vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInRight400ms]
  }
});

/***/ }),

/***/ 5331:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/apps/profiles/organization-profile/general-info/general-info.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralInfoComponent": () => (/* binding */ GeneralInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _vex_components_widgets_widget_quick_value_center_widget_quick_value_center_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.component */ 4616);


class GeneralInfoComponent {
  constructor() {}
  ngOnInit() {}
}
GeneralInfoComponent.ɵfac = function GeneralInfoComponent_Factory(t) {
  return new (t || GeneralInfoComponent)();
};
GeneralInfoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: GeneralInfoComponent,
  selectors: [["ng-component"]],
  decls: 3,
  vars: 2,
  consts: [[1, "container", "p-gutter", "grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-2", "gap-4"], ["icon", "mat:group", "iconClass", "text-primary bg-primary/10", "label", "Users", "value", "67.4k", 3, "change"], ["icon", "mat:compare_arrows", "iconClass", "text-orange bg-orange/10", "label", "Transactions", "value", "96.2k", 3, "change"]],
  template: function GeneralInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "vex-widget-quick-value-center", 1)(2, "vex-widget-quick-value-center", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("change", 124.4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("change", -23.7);
    }
  },
  dependencies: [_vex_components_widgets_widget_quick_value_center_widget_quick_value_center_component__WEBPACK_IMPORTED_MODULE_0__.WidgetQuickValueCenterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7728:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/apps/profiles/organization-profile/organization-profile.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrganizationProfileComponent": () => (/* binding */ OrganizationProfileComponent)
/* harmony export */ });
/* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@vex/animations/scale-in.animation */ 9597);
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-right.animation */ 6496);
/* harmony import */ var _static_data_contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../static-data/contacts */ 4871);
/* harmony import */ var _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@vex/utils/track-by */ 1081);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@vex/animations/stagger.animation */ 8535);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-up.animation */ 3848);
/* harmony import */ var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@vex/animations/scale-fade-in.animation */ 8911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-quicklink */ 9772);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ 5892);














const _c0 = function (a0) {
  return [a0];
};
function OrganizationProfileComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("active", _r2.isActive)("disabled", link_r1.disabled)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](4, _c0, link_r1.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", link_r1.label, " ");
  }
}
class OrganizationProfileComponent {
  constructor(dialog, route) {
    this.dialog = dialog;
    this.route = route;
    this.contacts = _static_data_contacts__WEBPACK_IMPORTED_MODULE_2__.contactsData;
    //   filteredContacts$ = this.route.paramMap.pipe(
    //     map(paramMap => paramMap.get('activeCategory')),
    //     map(activeCategory => {
    //       switch (activeCategory) {
    //         case 'all': {
    //           return contactsData;
    //         }
    //         case 'starred': {
    //           return contactsData.filter(c => c.starred);
    //         }
    //         default: {
    //           return [];
    //         }
    //       }
    //     })
    //   );
    this.links = [{
      label: 'General Info',
      route: './info'
    }, {
      label: 'Users',
      route: './users'
    }, {
      label: 'Transactions',
      route: '../starred'
    }];
    this.trackById = _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_3__.trackById;
  }
  ngOnInit() {}
  openContact(id) {
    // this.dialog.open(ContactsEditComponent, {
    //   data: id || null,
    //   width: '600px'
    // });
  }
  toggleStar(id) {
    // const contact = contactsData.find(c => c.id === id);
    // if (contact) {
    //   contact.starred = !contact.starred;
    // }
  }
}
OrganizationProfileComponent.ɵfac = function OrganizationProfileComponent_Factory(t) {
  return new (t || OrganizationProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
};
OrganizationProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: OrganizationProfileComponent,
  selectors: [["ng-component"]],
  decls: 12,
  vars: 3,
  consts: [[1, "h-full", "flex", "flex-col"], [1, "p-6", "pb-0", "bg-foreground", "shadow-b", "flex-none", "border-b", "border-gray-200"], [1, "container", "px-0"], [1, "display-1", "font-bold", "mt-0", "mb-4", "flex", "items-center"], [1, "w-12", "h-12", "rounded-full", "text-primary", "ltr:mr-4", "rtl:ml-4", "flex", "items-center", "justify-center", "bg-primary/10"], ["svgIcon", "mat:contacts"], [1, "block"], [1, "flex", "items-center"], ["mat-tab-nav-bar", "", 1, "border-0", "flex-auto"], ["mat-tab-link", "", "routerLinkActive", "", 3, "active", "disabled", "routerLink", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "routerLinkActive", "", 3, "active", "disabled", "routerLink"], ["rla", "routerLinkActive"]],
  template: function OrganizationProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3)(4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Organization Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 7)(9, "nav", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, OrganizationProfileComponent_a_10_Template, 3, 6, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@scaleIn", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.links);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkActive, ngx_quicklink__WEBPACK_IMPORTED_MODULE_11__.QuicklinkDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTabNav, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTabLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_0__.scaleIn400ms, _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_1__.fadeInRight400ms, _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__.stagger40ms, _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__.fadeInUp400ms, _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_6__.scaleFadeIn400ms]
  }
});

/***/ }),

/***/ 9387:
/*!****************************************************************!*\
  !*** ./src/app/pages/apps/profiles/profiles-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilesRoutingModule": () => (/* binding */ ProfilesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-quicklink */ 9772);
/* harmony import */ var _organization_profile_organization_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organization-profile/organization-profile.component */ 7728);
/* harmony import */ var _organization_profile_general_info_general_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organization-profile/general-info/general-info.component */ 5331);
/* harmony import */ var _user_managment_user_managment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-managment/user-managment.component */ 3957);
/* harmony import */ var _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-profile/customer-profile.component */ 972);
/* harmony import */ var _customer_profile_customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-profile/customer-form/customer-form.component */ 5719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);









const routes = [{
  path: 'customer-profile',
  component: _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_3__.CustomerProfileComponent,
  data: {
    toolbarShadowEnabled: false
  }
}, {
  path: 'profile-update',
  component: _customer_profile_customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_4__.CustomerFormComponent,
  data: {
    toolbarShadowEnabled: false
  }
}, {
  path: 'organization-profile',
  component: _organization_profile_organization_profile_component__WEBPACK_IMPORTED_MODULE_0__.OrganizationProfileComponent,
  data: {
    toolbarShadowEnabled: false
  },
  children: [{
    path: 'info',
    component: _organization_profile_general_info_general_info_component__WEBPACK_IMPORTED_MODULE_1__.GeneralInfoComponent,
    data: {
      toolbarShadowEnabled: false
    }
  }, {
    path: 'users',
    component: _user_managment_user_managment_component__WEBPACK_IMPORTED_MODULE_2__.UserManagementComponent,
    data: {
      toolbarShadowEnabled: false
    }
  }]
}];
class ProfilesRoutingModule {}
ProfilesRoutingModule.ɵfac = function ProfilesRoutingModule_Factory(t) {
  return new (t || ProfilesRoutingModule)();
};
ProfilesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: ProfilesRoutingModule
});
ProfilesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_7__.QuicklinkModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProfilesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_7__.QuicklinkModule]
  });
})();

/***/ }),

/***/ 8613:
/*!********************************************************!*\
  !*** ./src/app/pages/apps/profiles/profiles.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilesModule": () => (/* binding */ ProfilesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../@vex/components/page-layout/page-layout.module */ 6383);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@vex/components/breadcrumbs/breadcrumbs.module */ 5592);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var src_vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/components/secondary-toolbar/secondary-toolbar.module */ 4241);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/stepper */ 4193);
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-file-drop */ 1375);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _aio_table_aio_table_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../aio-table/aio-table-routing.module */ 6481);
/* harmony import */ var _aio_table_customer_create_update_customer_create_update_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../aio-table/customer-create-update/customer-create-update.module */ 5799);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _profiles_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profiles-routing.module */ 9387);
/* harmony import */ var _organization_profile_organization_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organization-profile/organization-profile.component */ 7728);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _organization_profile_general_info_general_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./organization-profile/general-info/general-info.component */ 5331);
/* harmony import */ var src_vex_components_widgets_widget_quick_value_center_widget_quick_value_center_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.module */ 5190);
/* harmony import */ var _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customer-profile/customer-profile.component */ 972);
/* harmony import */ var _customer_profile_customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer-profile/customer-form/customer-form.component */ 5719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);

































class ProfilesModule {}
ProfilesModule.ɵfac = function ProfilesModule_Factory(t) {
  return new (t || ProfilesModule)();
};
ProfilesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: ProfilesModule
});
ProfilesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _profiles_routing_module__WEBPACK_IMPORTED_MODULE_5__.ProfilesRoutingModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatNativeDateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__.MatSliderModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__.MatStepperModule, ngx_file_drop__WEBPACK_IMPORTED_MODULE_22__.NgxFileDropModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__.MatRadioModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule, src_vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__.SecondaryToolbarModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__.MatPaginatorModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__.MatMenuModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__.MatDatepickerModule, _aio_table_aio_table_routing_module__WEBPACK_IMPORTED_MODULE_3__.AioTableRoutingModule, _aio_table_customer_create_update_customer_create_update_module__WEBPACK_IMPORTED_MODULE_4__.CustomerCreateUpdateModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__.MatTooltipModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_31__.MatButtonToggleModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabsModule, src_vex_components_widgets_widget_quick_value_center_widget_quick_value_center_module__WEBPACK_IMPORTED_MODULE_8__.WidgetQuickValueCenterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](ProfilesModule, {
    declarations: [_organization_profile_organization_profile_component__WEBPACK_IMPORTED_MODULE_6__.OrganizationProfileComponent, _organization_profile_general_info_general_info_component__WEBPACK_IMPORTED_MODULE_7__.GeneralInfoComponent, _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_9__.CustomerProfileComponent, _customer_profile_customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_10__.CustomerFormComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _profiles_routing_module__WEBPACK_IMPORTED_MODULE_5__.ProfilesRoutingModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatNativeDateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__.MatSliderModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__.MatStepperModule, ngx_file_drop__WEBPACK_IMPORTED_MODULE_22__.NgxFileDropModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__.MatRadioModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule, src_vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__.SecondaryToolbarModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__.MatPaginatorModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__.MatMenuModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__.MatDatepickerModule, _aio_table_aio_table_routing_module__WEBPACK_IMPORTED_MODULE_3__.AioTableRoutingModule, _aio_table_customer_create_update_customer_create_update_module__WEBPACK_IMPORTED_MODULE_4__.CustomerCreateUpdateModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__.MatTooltipModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_31__.MatButtonToggleModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabsModule, src_vex_components_widgets_widget_quick_value_center_widget_quick_value_center_module__WEBPACK_IMPORTED_MODULE_8__.WidgetQuickValueCenterModule]
  });
})();

/***/ }),

/***/ 4871:
/*!*************************************!*\
  !*** ./src/static-data/contacts.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactsData": () => (/* binding */ contactsData)
/* harmony export */ });
// import { Contact } from '../app/pages/apps/contacts/interfaces/contact.interface';
const contactsData = [{
  id: 1,
  imageSrc: 'assets/img/avatars/1.jpg',
  name: 'Guerrero Morales',
  phone: '+21 (988) 504-2559',
  company: 'Supportal',
  email: 'guerrero.morales@supportal.com',
  selected: false,
  starred: false
}, {
  id: 2,
  imageSrc: 'assets/img/avatars/2.jpg',
  name: 'Robin Blackburn',
  phone: '+5 (911) 423-2538',
  company: 'Polarax',
  email: 'robin.blackburn@polarax.biz',
  selected: false,
  starred: false
}, {
  id: 3,
  imageSrc: 'assets/img/avatars/3.jpg',
  name: 'Simone Gallegos',
  phone: '+2 (948) 573-3528',
  company: 'Applidec',
  email: 'simone.gallegos@applidec.org',
  selected: false,
  starred: true
}, {
  id: 4,
  imageSrc: 'assets/img/avatars/4.jpg',
  name: 'Bonner Mcmillan',
  phone: '+13 (932) 426-2309',
  company: 'Magneato',
  email: 'bonner.mcmillan@magneato.io',
  selected: false,
  starred: false
}, {
  id: 5,
  imageSrc: 'assets/img/avatars/5.jpg',
  name: 'Velasquez Spence',
  phone: '+31 (850) 492-2858',
  company: 'Joviold',
  email: 'velasquez.spence@joviold.co.uk',
  selected: false,
  starred: false
}, {
  id: 6,
  imageSrc: 'assets/img/avatars/6.jpg',
  name: 'Orr Fernandez',
  phone: '+6 (843) 490-2487',
  company: 'Accuprint',
  email: 'orr.fernandez@accuprint.tv',
  selected: false,
  starred: false
}, {
  id: 7,
  imageSrc: 'assets/img/avatars/7.jpg',
  name: 'Marcella Russo',
  phone: '+48 (836) 506-2890',
  company: 'Paprikut',
  email: 'marcella.russo@paprikut.name',
  selected: false,
  starred: true
}, {
  id: 8,
  imageSrc: 'assets/img/avatars/8.jpg',
  name: 'Mccormick Ferguson',
  phone: '+8 (957) 553-2497',
  company: 'Waab',
  email: 'mccormick.ferguson@waab.info',
  selected: false,
  starred: false
}, {
  id: 9,
  imageSrc: 'assets/img/avatars/9.jpg',
  name: 'Myrtle Walters',
  phone: '+29 (846) 562-3339',
  company: 'Hinway',
  email: 'myrtle.walters@hinway.me',
  selected: false,
  starred: false
}, {
  id: 10,
  imageSrc: 'assets/img/avatars/10.jpg',
  name: 'Rachael Griffin',
  phone: '+26 (827) 437-3065',
  company: 'Callflex',
  email: 'rachael.griffin@callflex.net',
  selected: false,
  starred: false
}, {
  id: 11,
  imageSrc: 'assets/img/avatars/11.jpg',
  name: 'Carney Emerson',
  phone: '+24 (821) 560-2716',
  company: 'Motovate',
  email: 'carney.emerson@motovate.ca',
  selected: false,
  starred: false
}, {
  id: 12,
  imageSrc: 'assets/img/avatars/12.jpg',
  name: 'Katrina Cooke',
  phone: '+10 (904) 524-2485',
  company: 'Quarex',
  email: 'katrina.cooke@quarex.biz',
  selected: false,
  starred: true
}, {
  id: 13,
  imageSrc: 'assets/img/avatars/13.jpg',
  name: 'Valdez Branch',
  phone: '+12 (941) 536-2874',
  company: 'Uniworld',
  email: 'valdez.branch@uniworld.com',
  selected: false,
  starred: false
}, {
  id: 14,
  imageSrc: 'assets/img/avatars/14.jpg',
  name: 'Dejesus Rogers',
  phone: '+40 (806) 435-2871',
  company: 'Oronoko',
  email: 'dejesus.rogers@oronoko.biz',
  selected: false,
  starred: false
}, {
  id: 15,
  imageSrc: 'assets/img/avatars/15.jpg',
  name: 'Horton Levy',
  phone: '+19 (932) 552-3976',
  company: 'Zensus',
  email: 'horton.levy@zensus.org',
  selected: false,
  starred: false
}, {
  id: 16,
  imageSrc: 'assets/img/avatars/16.jpg',
  name: 'Ivy Mays',
  phone: '+15 (919) 430-3795',
  company: 'Letpro',
  email: 'ivy.mays@letpro.io',
  selected: false,
  starred: false
}, {
  id: 17,
  imageSrc: 'assets/img/avatars/17.jpg',
  name: 'Butler Larsen',
  phone: '+18 (862) 489-2364',
  company: 'Micronaut',
  email: 'butler.larsen@micronaut.co.uk',
  selected: false,
  starred: true
}, {
  id: 18,
  imageSrc: 'assets/img/avatars/18.jpg',
  name: 'Jimmie Clements',
  phone: '+34 (946) 451-3718',
  company: 'Sarasonic',
  email: 'jimmie.clements@sarasonic.tv',
  selected: false,
  starred: true
}, {
  id: 19,
  imageSrc: 'assets/img/avatars/19.jpg',
  name: 'Kasey Rosa',
  phone: '+44 (910) 404-3456',
  company: 'Cytrak',
  email: 'kasey.rosa@cytrak.name',
  selected: false,
  starred: false
}, {
  id: 20,
  imageSrc: 'assets/img/avatars/20.jpg',
  name: 'Emily Schneider',
  phone: '+40 (870) 564-3250',
  company: 'Noralex',
  email: 'emily.schneider@noralex.info',
  selected: false,
  starred: false
}, {
  id: 21,
  imageSrc: 'assets/img/avatars/20.jpg',
  name: 'Lara Witt',
  phone: '+29 (971) 550-3793',
  company: 'Moltonic',
  email: 'lara.witt@moltonic.me',
  selected: false,
  starred: true
}, {
  id: 22,
  imageSrc: 'assets/img/avatars/19.jpg',
  name: 'Hebert Bailey',
  phone: '+4 (884) 527-3408',
  company: 'Homelux',
  email: 'hebert.bailey@homelux.net',
  selected: false,
  starred: true
}, {
  id: 23,
  imageSrc: 'assets/img/avatars/18.jpg',
  name: 'Lynda Garza',
  phone: '+44 (872) 404-3519',
  company: 'Quonk',
  email: 'lynda.garza@quonk.ca',
  selected: false,
  starred: true
}, {
  id: 24,
  imageSrc: 'assets/img/avatars/17.jpg',
  name: 'Stark Fitzgerald',
  phone: '+7 (999) 438-2471',
  company: 'Farmage',
  email: 'stark.fitzgerald@farmage.biz',
  selected: false,
  starred: true
}, {
  id: 25,
  imageSrc: 'assets/img/avatars/16.jpg',
  name: 'Karla Atkins',
  phone: '+44 (869) 502-3263',
  company: 'Kiggle',
  email: 'karla.atkins@kiggle.com',
  selected: false,
  starred: false
}, {
  id: 26,
  imageSrc: 'assets/img/avatars/15.jpg',
  name: 'Wilkerson Beasley',
  phone: '+29 (889) 462-3929',
  company: 'Naxdis',
  email: 'wilkerson.beasley@naxdis.biz',
  selected: false,
  starred: false
}, {
  id: 27,
  imageSrc: 'assets/img/avatars/14.jpg',
  name: 'Webb Stark',
  phone: '+38 (864) 482-2108',
  company: 'Equitax',
  email: 'webb.stark@equitax.org',
  selected: false,
  starred: true
}, {
  id: 28,
  imageSrc: 'assets/img/avatars/13.jpg',
  name: 'Courtney Barrett',
  phone: '+6 (828) 438-3288',
  company: 'Magnemo',
  email: 'courtney.barrett@magnemo.io',
  selected: false,
  starred: false
}, {
  id: 29,
  imageSrc: 'assets/img/avatars/12.jpg',
  name: 'Joanne Anderson',
  phone: '+27 (994) 435-2952',
  company: 'Extragene',
  email: 'joanne.anderson@extragene.co.uk',
  selected: false,
  starred: false
}, {
  id: 30,
  imageSrc: 'assets/img/avatars/11.jpg',
  name: 'Hampton Golden',
  phone: '+1 (967) 549-3561',
  company: 'Accupharm',
  email: 'hampton.golden@accupharm.tv',
  selected: false,
  starred: true
}, {
  id: 31,
  imageSrc: 'assets/img/avatars/10.jpg',
  name: 'Becker Mejia',
  phone: '+16 (971) 587-3994',
  company: 'Zillacom',
  email: 'becker.mejia@zillacom.name',
  selected: false,
  starred: true
}, {
  id: 32,
  imageSrc: 'assets/img/avatars/9.jpg',
  name: 'Marks Benton',
  phone: '+25 (961) 567-2085',
  company: 'Emoltra',
  email: 'marks.benton@emoltra.info',
  selected: false,
  starred: true
}, {
  id: 33,
  imageSrc: 'assets/img/avatars/8.jpg',
  name: 'Mai Wade',
  phone: '+23 (970) 419-3433',
  company: 'Senmao',
  email: 'mai.wade@senmao.me',
  selected: false,
  starred: false
}, {
  id: 34,
  imageSrc: 'assets/img/avatars/7.jpg',
  name: 'Maldonado Moran',
  phone: '+6 (912) 523-3028',
  company: 'Autograte',
  email: 'maldonado.moran@autograte.net',
  selected: false,
  starred: true
}, {
  id: 35,
  imageSrc: 'assets/img/avatars/6.jpg',
  name: 'Jaclyn Maxwell',
  phone: '+39 (988) 424-2719',
  company: 'Ecratic',
  email: 'jaclyn.maxwell@ecratic.ca',
  selected: false,
  starred: false
}, {
  id: 36,
  imageSrc: 'assets/img/avatars/5.jpg',
  name: 'Carmela Barron',
  phone: '+44 (932) 469-3459',
  company: 'Xinware',
  email: 'carmela.barron@xinware.biz',
  selected: false,
  starred: false
}, {
  id: 37,
  imageSrc: 'assets/img/avatars/4.jpg',
  name: 'Araceli Velasquez',
  phone: '+43 (965) 579-3919',
  company: 'Capscreen',
  email: 'araceli.velasquez@capscreen.com',
  selected: false,
  starred: false
}, {
  id: 38,
  imageSrc: 'assets/img/avatars/3.jpg',
  name: 'Gonzales Randolph',
  phone: '+23 (951) 574-3150',
  company: 'Ronbert',
  email: 'gonzales.randolph@ronbert.biz',
  selected: false,
  starred: true
}, {
  id: 39,
  imageSrc: 'assets/img/avatars/2.jpg',
  name: 'Ramirez Burt',
  phone: '+24 (963) 484-3465',
  company: 'Quizmo',
  email: 'ramirez.burt@quizmo.org',
  selected: false,
  starred: false
}, {
  id: 40,
  imageSrc: 'assets/img/avatars/1.jpg',
  name: 'Jessica Frenz',
  phone: '+49 (332) 45-4234',
  company: 'Bongo',
  email: 'jessica.frenz@bongo.com',
  selected: false,
  starred: false
}];

/***/ })

}]);
//# sourceMappingURL=src_app_pages_apps_profiles_profiles_module_ts.js.map