(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["copoun-details-copoun-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/copoun-details/copoun-details.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/copoun-details/copoun-details.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot='start'>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"\">Coupons Detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content>\n\n  <div class=\"\"  style=\"    display: grid;\n  grid-template-rows: 9% 50% 9%;\n  background: white;\n  color: black;\n  border-bottom: 2px solid white;\">\n   <div>\n    <p>{{api.couponCode[index].eg_title}}</p>\n   </div>\n   <div class=\"\"  >\n    <img [src]=\"api.couponCode[index].eg_thumbnail\" alt=\"\" style=\"height: 100%;width: 100%;\">\n   </div>\n   <div >\n    <p [innerHTML]=\"api.couponCode[index].eg_description\"></p>\n   </div>\n  </div>\n  <div (click)=\"copy()\" style=\"background-color: white;\n  color: black;\n  display: flex;\n  margin-top: 20px;\n  justify-content: center;\n \">\n    <p style=\"letter-spacing: 20px;\" [innerHTML]=\"api.couponCode[index].eg_coupon_code\"></p>\n   \n  </div>\n  \n\n</ion-content> -->\n\n\n<ion-content>\n\n  <ion-row>\n    <ion-col>\n      <ion-text style=\"margin-left: 10px;\">{{api.couponCode[index].eg_title}}</ion-text>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row>\n    <ion-col>\n      <img [src]=\"api.couponCode[index].eg_thumbnail\" alt=\"\" style=\"  height: 220px;width: 100%;\">\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"border-bottom: 1px white solid;\">\n    <ion-col style=\"text-align: left;\n    display: flex;\n    padding-left: 9px;\">\n      <img src=\"assets/image/information.svg\" alt=\"\" style=\"\n      height: 46px;\n      width: 30px;\">\n      <div style=\"display: flex;\nalign-items: center;\" *ngIf=\"!api.couponCode[index].eg_description\">\n        <ion-text style=\"margin-left: 10px; \" [innerHTML]=\"api.couponCode[index].eg_description\"></ion-text>\n      </div>\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row style=\"border-bottom: 1px white solid;\n  border-top: 1px white solid;\n  padding: 11px;\" (click)=\"copy()\">\n    <ion-col style=\"text-align: left;\">\n      <div style=\"    display: flex;\n       justify-content: center;\">\n        <img src=\"assets/image/copy.svg\" *ngIf=\"!copied\" alt=\"\" style=\"\n         height: 21px;\n    width: 30px;\n    position: absolute;\n    left: -4px;\n    top: 3px;\">\n        <img src=\"assets/image/copy2.svg\" *ngIf=\"copied\" alt=\"\" style=\"\n     height: 21px;\nwidth: 30px;\nposition: absolute;\nleft: -4px;\ntop: 3px;\">\n        <ion-text style=\"margin-left: 10px;letter-spacing: 20px;\" [innerHTML]=\"api.couponCode[index].eg_coupon_code\">\n        </ion-text>\n      </div>\n    </ion-col>\n\n  </ion-row>\n\n\n\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/copoun-details/copoun-details-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/copoun-details/copoun-details-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CopounDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopounDetailsPageRoutingModule", function() { return CopounDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _copoun_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./copoun-details.page */ "./src/app/copoun-details/copoun-details.page.ts");




const routes = [
    {
        path: '',
        component: _copoun_details_page__WEBPACK_IMPORTED_MODULE_3__["CopounDetailsPage"]
    }
];
let CopounDetailsPageRoutingModule = class CopounDetailsPageRoutingModule {
};
CopounDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CopounDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/copoun-details/copoun-details.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/copoun-details/copoun-details.module.ts ***!
  \*********************************************************/
/*! exports provided: CopounDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopounDetailsPageModule", function() { return CopounDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _copoun_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./copoun-details-routing.module */ "./src/app/copoun-details/copoun-details-routing.module.ts");
/* harmony import */ var _copoun_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./copoun-details.page */ "./src/app/copoun-details/copoun-details.page.ts");







let CopounDetailsPageModule = class CopounDetailsPageModule {
};
CopounDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _copoun_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CopounDetailsPageRoutingModule"]
        ],
        declarations: [_copoun_details_page__WEBPACK_IMPORTED_MODULE_6__["CopounDetailsPage"]]
    })
], CopounDetailsPageModule);



/***/ }),

/***/ "./src/app/copoun-details/copoun-details.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/copoun-details/copoun-details.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcG91bi1kZXRhaWxzL2NvcG91bi1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/copoun-details/copoun-details.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/copoun-details/copoun-details.page.ts ***!
  \*******************************************************/
/*! exports provided: CopounDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopounDetailsPage", function() { return CopounDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let CopounDetailsPage = class CopounDetailsPage {
    constructor(api, route, clipboard, toastController) {
        this.api = api;
        this.route = route;
        this.clipboard = clipboard;
        this.toastController = toastController;
        this.copied = false;
    }
    ngOnInit() {
        this.route.params.subscribe((res) => {
            this.index = res.index;
            console.log("index is: ", this.index, this.api.couponCode[this.index]);
            this.textTocopy = this.api.couponCode[this.index].eg_coupon_code;
        });
    }
    copy() {
        console.log(this.textTocopy);
        this.clipboard.copy(this.textTocopy);
        this.presentToast();
        this.copied = true;
        setInterval(() => {
            this.copied = false;
        }, 3000);
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Coupon code copied!.',
                duration: 2000
            });
            toast.present();
        });
    }
};
CopounDetailsPage.ctorParameters = () => [
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
CopounDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-copoun-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./copoun-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/copoun-details/copoun-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./copoun-details.page.scss */ "./src/app/copoun-details/copoun-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], CopounDetailsPage);



/***/ })

}]);
//# sourceMappingURL=copoun-details-copoun-details-module-es2015.js.map