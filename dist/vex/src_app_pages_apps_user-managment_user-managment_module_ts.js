"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_apps_user-managment_user-managment_module_ts"],{

/***/ 505:
/*!********************************************************************!*\
  !*** ./src/app/pages/apps/user-managment/user-managment.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementModule": () => (/* binding */ UserManagementModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../@vex/components/page-layout/page-layout.module */ 6383);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@vex/components/breadcrumbs/breadcrumbs.module */ 5592);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _user_managment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-managment.component */ 3957);
/* harmony import */ var _user_managment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-managment.routing.module */ 8752);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);

















class UserManagementModule {}
UserManagementModule.ɵfac = function UserManagementModule_Factory(t) {
  return new (t || UserManagementModule)();
};
UserManagementModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: UserManagementModule
});
UserManagementModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutModule, _user_managment_routing_module__WEBPACK_IMPORTED_MODULE_3__.UserManagementRoutingModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginatorModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__.MatButtonToggleModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UserManagementModule, {
    declarations: [_user_managment_component__WEBPACK_IMPORTED_MODULE_2__.UserManagementComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutModule, _user_managment_routing_module__WEBPACK_IMPORTED_MODULE_3__.UserManagementRoutingModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginatorModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__.MatButtonToggleModule]
  });
})();

/***/ }),

/***/ 8752:
/*!****************************************************************************!*\
  !*** ./src/app/pages/apps/user-managment/user-managment.routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementRoutingModule": () => (/* binding */ UserManagementRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 9772);
/* harmony import */ var _user_managment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-managment.component */ 3957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: '',
  component: _user_managment_component__WEBPACK_IMPORTED_MODULE_0__.UserManagementComponent,
  data: {
    toolbarShadowEnabled: false
  }
}];
class UserManagementRoutingModule {}
UserManagementRoutingModule.ɵfac = function UserManagementRoutingModule_Factory(t) {
  return new (t || UserManagementRoutingModule)();
};
UserManagementRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: UserManagementRoutingModule
});
UserManagementRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserManagementRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_apps_user-managment_user-managment_module_ts.js.map