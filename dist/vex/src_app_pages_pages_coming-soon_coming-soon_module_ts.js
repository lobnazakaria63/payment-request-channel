"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_pages_coming-soon_coming-soon_module_ts"],{

/***/ 3848:
/*!*****************************************************!*\
  !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeInUp400ms": () => (/* binding */ fadeInUp400ms),
/* harmony export */   "fadeInUpAnimation": () => (/* binding */ fadeInUpAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 4851);

function fadeInUpAnimation(duration) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInUp', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'translateY(20px)',
    opacity: 0
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'translateY(0)',
    opacity: 1
  }))])]);
}
const fadeInUp400ms = fadeInUpAnimation(400);

/***/ }),

/***/ 6878:
/*!***********************************************************************!*\
  !*** ./src/app/pages/pages/coming-soon/coming-soon-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComingSoonRoutingModule": () => (/* binding */ ComingSoonRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 9772);
/* harmony import */ var _coming_soon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coming-soon.component */ 6354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: '',
  component: _coming_soon_component__WEBPACK_IMPORTED_MODULE_0__.ComingSoonComponent
}];
class ComingSoonRoutingModule {}
ComingSoonRoutingModule.ɵfac = function ComingSoonRoutingModule_Factory(t) {
  return new (t || ComingSoonRoutingModule)();
};
ComingSoonRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ComingSoonRoutingModule
});
ComingSoonRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ComingSoonRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
  });
})();

/***/ }),

/***/ 6354:
/*!******************************************************************!*\
  !*** ./src/app/pages/pages/coming-soon/coming-soon.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComingSoonComponent": () => (/* binding */ ComingSoonComponent)
/* harmony export */ });
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../@vex/animations/fade-in-up.animation */ 3848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);






class ComingSoonComponent {
  constructor() {}
  ngOnInit() {}
}
ComingSoonComponent.ɵfac = function ComingSoonComponent_Factory(t) {
  return new (t || ComingSoonComponent)();
};
ComingSoonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ComingSoonComponent,
  selectors: [["vex-coming-soon"]],
  decls: 28,
  vars: 1,
  consts: [[1, "card", "shadow-xl", "text-center", "w-full", "max-w-sm", "overflow-hidden"], [1, "p-6", "flex", "flex-col", "items-center"], ["src", "assets/img/demo/logo.svg", 1, "w-16"], [1, "display-1", "font-medium", "m-0"], [1, "title", "mt-3", "mb-0"], [1, "my-6", "flex", "items-center", "justify-center", "gap-3"], [1, "cursor-pointer"], ["svgIcon", "fa:facebook", 1, "icon-sm"], ["svgIcon", "fa:twitter", 1, "icon-sm"], ["svgIcon", "fa:instagram", 1, "icon-sm"], ["svgIcon", "fa:pinterest", 1, "icon-sm"], ["svgIcon", "fa:github", 1, "icon-sm"], [1, "bg-app-bar", "p-6", "flex", "flex-col"], [1, "mt-0", "mb-4", "font-medium"], ["matInput", ""], ["matSuffix", "", "svgIcon", "mat:mail"], ["color", "primary", "mat-raised-button", "", "type", "button"]],
  template: function ComingSoonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "COMING SOON");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Our website is under construction.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "mat-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "mat-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12)(19, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "If you would like to get notified as soon as we launch, subscribe below and follow us on socials!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field")(22, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "E-Mail");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 14)(25, "mat-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Subscribe");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInUp", undefined);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
  styles: ["[_nghost-%COMP%] {\n  align-content: center;\n  align-items: center;\n  background: #fff url(\"/assets/img/demo/landscape.jpg\");\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  justify-items: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGFnZXMvY29taW5nLXNvb24vY29taW5nLXNvb24uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9wYXltZW50JTIwcmVxdWVzdHMlMjBjaGFubmVsL2RlbW8vc3JjL2FwcC9wYWdlcy9wYWdlcy9jb21pbmctc29vbi9jb21pbmctc29vbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzREFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZiB1cmwoJy9hc3NldHMvaW1nL2RlbW8vbGFuZHNjYXBlLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIiwiOmhvc3Qge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmYgdXJsKFwiL2Fzc2V0cy9pbWcvZGVtby9sYW5kc2NhcGUuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms]
  }
});

/***/ }),

/***/ 3972:
/*!***************************************************************!*\
  !*** ./src/app/pages/pages/coming-soon/coming-soon.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComingSoonModule": () => (/* binding */ ComingSoonModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coming-soon-routing.module */ 6878);
/* harmony import */ var _coming_soon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coming-soon.component */ 6354);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);







class ComingSoonModule {}
ComingSoonModule.ɵfac = function ComingSoonModule_Factory(t) {
  return new (t || ComingSoonModule)();
};
ComingSoonModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ComingSoonModule
});
ComingSoonModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComingSoonRoutingModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComingSoonModule, {
    declarations: [_coming_soon_component__WEBPACK_IMPORTED_MODULE_1__.ComingSoonComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComingSoonRoutingModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_coming-soon_coming-soon_module_ts.js.map