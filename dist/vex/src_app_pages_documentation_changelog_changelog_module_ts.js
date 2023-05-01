"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_documentation_changelog_changelog_module_ts"],{

/***/ 6307:
/*!***************************************************************************!*\
  !*** ./src/app/pages/documentation/changelog/changelog-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangelogRoutingModule": () => (/* binding */ ChangelogRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 9772);
/* harmony import */ var _changelog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changelog.component */ 1857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: '',
  component: _changelog_component__WEBPACK_IMPORTED_MODULE_0__.ChangelogComponent
}];
class ChangelogRoutingModule {}
ChangelogRoutingModule.ɵfac = function ChangelogRoutingModule_Factory(t) {
  return new (t || ChangelogRoutingModule)();
};
ChangelogRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ChangelogRoutingModule
});
ChangelogRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChangelogRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
  });
})();

/***/ }),

/***/ 1857:
/*!**********************************************************************!*\
  !*** ./src/app/pages/documentation/changelog/changelog.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangelogComponent": () => (/* binding */ ChangelogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_showdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-showdown */ 7296);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */ 3410);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@vex/components/breadcrumbs/breadcrumbs.component */ 4076);
/* harmony import */ var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@vex/components/page-layout/page-layout.component */ 2237);
/* harmony import */ var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@vex/components/page-layout/page-layout-content.directive */ 9199);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);








const _c0 = function () {
  return ["Documentation", "Changelog"];
};
class ChangelogComponent {
  constructor() {}
  ngOnInit() {}
}
ChangelogComponent.ɵfac = function ChangelogComponent_Factory(t) {
  return new (t || ChangelogComponent)();
};
ChangelogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ChangelogComponent,
  selectors: [["vex-changelog"]],
  decls: 8,
  vars: 2,
  consts: [["current", "Documentation"], [1, "flex-auto", 3, "crumbs"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "ml-2"], ["svgIcon", "mat:more_vert"], [1, "container"], [1, "card", "p-gutter", "relative"], ["src", "/CHANGELOG.md"]],
  template: function ChangelogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "vex-page-layout")(1, "vex-secondary-toolbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "vex-breadcrumbs", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "vex-page-layout-content", 4)(6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "showdown", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c0));
    }
  },
  dependencies: [ngx_showdown__WEBPACK_IMPORTED_MODULE_5__.ShowdownComponent, ngx_showdown__WEBPACK_IMPORTED_MODULE_5__.SourceDirective, _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.SecondaryToolbarComponent, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsComponent, _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_2__.PageLayoutComponent, _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_3__.PageLayoutContentDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton],
  styles: ["vex-changelog vex-secondary-toolbar h1,   vex-changelog vex-secondary-toolbar h2 {\n  border: none;\n  margin: 0;\n}\n  vex-changelog ol,   vex-changelog ul {\n  list-style: disc;\n  margin-left: 1rem;\n}\n  vex-changelog showdown a {\n  color: rgb(var(--color-primary));\n}\n  vex-changelog showdown > *:first-child {\n  margin-top: 0 !important;\n}\n  vex-changelog h1,   vex-changelog h2 {\n  border-bottom: 1px solid var(--foreground-divider);\n  padding-bottom: 0.3em;\n}\n  vex-changelog h1,   vex-changelog h2,   vex-changelog h3,   vex-changelog h4,   vex-changelog h5,   vex-changelog h6 {\n  font-weight: var(--font-weight-medium) !important;\n  margin-bottom: var(--padding-16);\n  margin-top: 32px;\n}\n  vex-changelog p,   vex-changelog ul,   vex-changelog li {\n  font-size: 16px !important;\n  line-height: 1.5 !important;\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n  vex-changelog strong {\n  font-weight: 500;\n}\n  vex-changelog code.typescript {\n  display: block;\n}\n  vex-changelog table {\n  border: 1px solid var(--foreground-divider);\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 15px;\n}\n  vex-changelog table tr {\n  background-color: var(--background-foreground);\n  border-top: 1px solid var(--foreground-divider);\n}\n  vex-changelog table tr:nth-child(2n) {\n  background-color: var(--background-app-bar);\n}\n  vex-changelog table td,   vex-changelog table th {\n  border-left: 1px solid var(--foreground-divider);\n  padding: var(--padding-12) var(--padding-16);\n}\n  vex-changelog table td:first-child,   vex-changelog table th:first-child {\n  border-left: none;\n}\n  vex-changelog table th {\n  font-weight: var(--font-weight-medium);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZG9jdW1lbnRhdGlvbi9jaGFuZ2Vsb2cvY2hhbmdlbG9nLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vcGF5bWVudCUyMHJlcXVlc3RzJTIwY2hhbm5lbC9kZW1vL3NyYy9hcHAvcGFnZXMvZG9jdW1lbnRhdGlvbi9jaGFuZ2Vsb2cvY2hhbmdlbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUNGTjtBRE1FO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0pKO0FEUUk7RUFDRSxnQ0FBQTtBQ05OO0FEVUU7RUFDRSx3QkFBQTtBQ1JKO0FEV0U7RUFDRSxrREFBQTtFQUNBLHFCQUFBO0FDVEo7QURZRTtFQUNFLGlEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQ1ZKO0FEYUU7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFBQSxzQkFBQTtBQ1hKO0FEY0U7RUFDRSxnQkFBQTtBQ1pKO0FEZUU7RUFDRSxjQUFBO0FDYko7QURnQkU7RUFDRSwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDZEo7QURnQkk7RUFDRSw4Q0FBQTtFQUNBLCtDQUFBO0FDZE47QURnQk07RUFDRSwyQ0FBQTtBQ2RSO0FEa0JJO0VBQ0UsZ0RBQUE7RUFDQSw0Q0FBQTtBQ2hCTjtBRGtCTTtFQUNFLGlCQUFBO0FDaEJSO0FEb0JJO0VBQ0Usc0NBQUE7QUNsQk4iLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyB7XHJcblxyXG4gIHZleC1zZWNvbmRhcnktdG9vbGJhciB7XHJcbiAgICBoMSwgaDIge1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9sLCB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBkaXNjO1xyXG4gICAgQGFwcGx5IG1sLTQ7XHJcbiAgfVxyXG5cclxuICBzaG93ZG93biB7XHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6IHJnYih2YXIoLS1jb2xvci1wcmltYXJ5KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93ZG93biA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50XHJcbiAgfVxyXG5cclxuICBoMSwgaDIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjNlbTtcclxuICB9XHJcblxyXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSkgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZGRpbmctMTYpO1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxuICB9XHJcblxyXG4gIHAsIHVsLCBsaSB7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjUgIWltcG9ydGFudDtcclxuICAgIEBhcHBseSBteS0zO1xyXG4gIH1cclxuXHJcbiAgc3Ryb25nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICBjb2RlLnR5cGVzY3JpcHQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICB0YWJsZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG5cclxuICAgIHRyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1mb3JlZ3JvdW5kKTtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XHJcblxyXG4gICAgICAmOm50aC1jaGlsZCgybikge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYXBwLWJhcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0ZCwgdGgge1xyXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XHJcbiAgICAgIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctMTIpIHZhcigtLXBhZGRpbmctMTYpO1xyXG5cclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuIiwiOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgdmV4LXNlY29uZGFyeS10b29sYmFyIGgxLCA6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyB2ZXgtc2Vjb25kYXJ5LXRvb2xiYXIgaDIge1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIG9sLCA6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyB1bCB7XG4gIGxpc3Qtc3R5bGU6IGRpc2M7XG4gIEBhcHBseSBtbC00O1xufVxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgc2hvd2Rvd24gYSB7XG4gIGNvbG9yOiByZ2IodmFyKC0tY29sb3ItcHJpbWFyeSkpO1xufVxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgc2hvd2Rvd24gPiAqOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgaDEsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIGgyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIHBhZGRpbmctYm90dG9tOiAwLjNlbTtcbn1cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIGgxLCA6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBoMiwgOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgaDMsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIGg0LCA6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBoNSwgOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgaDYge1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWRkaW5nLTE2KTtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHAsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHVsLCA6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBsaSB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMS41ICFpbXBvcnRhbnQ7XG4gIEBhcHBseSBteS0zO1xufVxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIGNvZGUudHlwZXNjcmlwdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgdGFibGUge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgdGFibGUgdHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWZvcmVncm91bmQpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbn1cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHRhYmxlIHRyOm50aC1jaGlsZCgybikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWFwcC1iYXIpO1xufVxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgdGFibGUgdGQsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHRhYmxlIHRoIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTEyKSB2YXIoLS1wYWRkaW5nLTE2KTtcbn1cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHRhYmxlIHRkOmZpcnN0LWNoaWxkLCA6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyB0YWJsZSB0aDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgdGFibGUgdGgge1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3140:
/*!*******************************************************************!*\
  !*** ./src/app/pages/documentation/changelog/changelog.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangelogModule": () => (/* binding */ ChangelogModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _changelog_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changelog-routing.module */ 6307);
/* harmony import */ var _changelog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changelog.component */ 1857);
/* harmony import */ var _markdown_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../markdown.module */ 8477);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ 4241);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@vex/components/breadcrumbs/breadcrumbs.module */ 5592);
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@vex/components/page-layout/page-layout.module */ 6383);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);










class ChangelogModule {}
ChangelogModule.ɵfac = function ChangelogModule_Factory(t) {
  return new (t || ChangelogModule)();
};
ChangelogModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: ChangelogModule
});
ChangelogModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _changelog_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangelogRoutingModule, _markdown_module__WEBPACK_IMPORTED_MODULE_2__.MarkdownModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.SecondaryToolbarModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__.PageLayoutModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ChangelogModule, {
    declarations: [_changelog_component__WEBPACK_IMPORTED_MODULE_1__.ChangelogComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _changelog_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangelogRoutingModule, _markdown_module__WEBPACK_IMPORTED_MODULE_2__.MarkdownModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.SecondaryToolbarModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__.PageLayoutModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_documentation_changelog_changelog_module_ts.js.map