(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["redeem-redeem-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/redeem/redeem.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/redeem/redeem.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Redeem</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"background: white\">\n    <div\n      style=\"\n        display: flex;\n        flex-flow: row;\n        align-items: center;\n        justify-content: center;\n      \"\n      class=\"ion-padding\"\n    >\n      <div style=\"flex-grow: 1; color: #000\">1 point to validate</div>\n      <div style=\"position: relative\">\n        <ion-select\n          *ngIf=\"!dropdownFlag\"\n          [(ngModel)]=\"count\"\n          style=\"color: black\"\n          interface=\"popover\"\n          (ionChange)=\"custom()\"\n        >\n          <ion-select-option style=\"color: white\" value=\"0\">\n            Add custom no.\n          </ion-select-option>\n          <ion-select-option\n            *ngFor=\"let some of array\"\n            value=\"{{some}}\"\n            style=\"color: white\"\n            >{{some}}\n          </ion-select-option>\n        </ion-select>\n\n        <ion-input\n          style=\"\n            color: black;\n            border: 1px solid #282222a1;\n            width: 122px;\n            margin-right: 11px;\n          \"\n          (ionFocus)=\"showFocus()\"\n          (ionBlur) = \"removeFocus()\"\n\n          [(ngModel)]=\"count\"\n          *ngIf=\"dropdownFlag\"\n          type=\"tel\"\n          placeholder=\"Enter number\"\n        ></ion-input>\n        <!--  <span style=\"background:#877777;position:absolute;top:8px;right:5px;padding:2px;border-radius:18px;width:22px;display:flex;justify-content:center\">X</span> -->\n        <div\n          style=\"\n            background: #e342e6;\n            position: absolute;\n            top: 11px;\n            right: -14px;\n            padding: 2px;\n            border-radius: 16px;\n            width: 22px;\n            display: flex;\n            justify-content: center;\n            z-index: 99999;\n          \"\n          *ngIf=\"dropdownFlag\"\n        >\n          <ion-icon (click)=\"remove()\" name=\"close-outline\"></ion-icon>\n        </div>\n      </div>\n    </div>\n\n    <div\n      class=\"ion-text-center\"\n      style=\"color: black; padding-bottom: 8px; border-bottom: 1px solid black\"\n    >\n      Unlock by QR Code\n    </div>\n\n    <div class=\"ion-padding\">\n      <ion-button\n        (click)=\"QRScanned()\"\n        style=\"\n          --background: #fff;\n          color: var(--ion-color-warning);\n          border: 1px solid #6c6c6c;\n          border-radius: 4px;\n        \"\n      >\n        Scan QR Code</ion-button\n      >\n    </div>\n    <div\n      class=\"ion-text-center\"\n      style=\"color: black; padding-bottom: 8px; border-bottom: 1px solid black\"\n    >\n      Please Enter the Password\n    </div>\n\n    <div class=\"ion-padding ion-text-center\" style=\"color: black\">\n      <ion-icon name=\"ellipse\" *ngIf=\"code.length >= 1\"></ion-icon>\n      <ion-icon name=\"ellipse\" *ngIf=\"code.length >= 2\"></ion-icon>\n      <ion-icon name=\"ellipse\" *ngIf=\"code.length >= 3\"></ion-icon>\n      <ion-icon name=\"ellipse\" *ngIf=\"code.length == 4\"></ion-icon>\n      <ion-icon name=\"ellipse-outline\" *ngIf=\"code.length == 0\"></ion-icon>\n      <ion-icon name=\"ellipse-outline\" *ngIf=\"code.length < 2\"></ion-icon>\n      <ion-icon name=\"ellipse-outline\" *ngIf=\"code.length < 3\"></ion-icon>\n      <ion-icon name=\"ellipse-outline\" *ngIf=\"code.length < 4\"></ion-icon>\n    </div>\n  </div>\n\n  <div\n   *ngIf=\"showKeyPad\" \n  class=\"ion-margin-vertical\"\n    style=\"\n      display: flex;\n      flex-flow: row;\n      background-color: white;\n      flex-wrap: wrap;\n    \"\n  >\n    <div\n      *ngFor=\"let some of nums\"\n      (click)=\"clicked(some)\"\n      style=\"\n        flex-shrink: 0;\n        width: calc((100% / 3));\n        border: 1px solid black;\n        height: 50px;\n        color: black;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      \"\n    >\n      {{some}}\n    </div>\n    <div\n      style=\"\n        flex-shrink: 0;\n        width: calc((100% / 3));\n        border: 1px solid black;\n        height: 50px;\n        color: black;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      \"\n    >\n      <ion-icon name=\"arrow-back\" (click)=\"backspace()\"></ion-icon>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/redeem/redeem-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/redeem/redeem-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RedeemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemPageRoutingModule", function() { return RedeemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _redeem_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redeem.page */ "./src/app/redeem/redeem.page.ts");




const routes = [
    {
        path: '',
        component: _redeem_page__WEBPACK_IMPORTED_MODULE_3__["RedeemPage"]
    }
];
let RedeemPageRoutingModule = class RedeemPageRoutingModule {
};
RedeemPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RedeemPageRoutingModule);



/***/ }),

/***/ "./src/app/redeem/redeem.module.ts":
/*!*****************************************!*\
  !*** ./src/app/redeem/redeem.module.ts ***!
  \*****************************************/
/*! exports provided: RedeemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemPageModule", function() { return RedeemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _redeem_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redeem-routing.module */ "./src/app/redeem/redeem-routing.module.ts");
/* harmony import */ var _redeem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redeem.page */ "./src/app/redeem/redeem.page.ts");







let RedeemPageModule = class RedeemPageModule {
};
RedeemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _redeem_routing_module__WEBPACK_IMPORTED_MODULE_5__["RedeemPageRoutingModule"]
        ],
        declarations: [_redeem_page__WEBPACK_IMPORTED_MODULE_6__["RedeemPage"]]
    })
], RedeemPageModule);



/***/ }),

/***/ "./src/app/redeem/redeem.page.scss":
/*!*****************************************!*\
  !*** ./src/app/redeem/redeem.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZGVlbS9yZWRlZW0ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/redeem/redeem.page.ts":
/*!***************************************!*\
  !*** ./src/app/redeem/redeem.page.ts ***!
  \***************************************/
/*! exports provided: RedeemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemPage", function() { return RedeemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");







let RedeemPage = class RedeemPage {
    constructor(route, http, settings, nav, alert, loading, qr, router, platform, loadingCtrl) {
        this.route = route;
        this.http = http;
        this.settings = settings;
        this.nav = nav;
        this.alert = alert;
        this.loading = loading;
        this.qr = qr;
        this.router = router;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.array = [];
        this.nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0];
        this.count = "1";
        this.code = "";
        this.qrScan = "";
        this.dropdownFlag = false;
        this.showKeyPad = true;
        this.route.params.subscribe((res) => {
            console.log("response for points is: ", res);
            this.array = Array(Number(res.points))
                .fill(0)
                .map((val, index) => index + 1);
            console.log("givenPoint is: ", res.points);
            this.givenPoint = res.points;
            this.allPoints = res.allPoints;
        });
        this.platform.backButton.subscribeWithPriority(0, () => {
            document.getElementsByTagName("body")[0].style.opacity = "1";
            this.qrScan.unsubscribe();
        });
        console.log("givenPoint is: ", "https://luxefragrancebar.com/wp-admin/admin-ajax.php?action=eg_add_available_points&ref_id=" +
            btoa(this.settings.customer.id) +
            "&eg_points=" +
            50);
    }
    custom() {
        console.log("count", this.count);
        if (this.count == "0") {
            console.log("count", this.count);
            this.count = "";
            this.dropdownFlag = true;
        }
    }
    showFocus() {
        this.showKeyPad = false;
    }
    removeFocus() {
        this.showKeyPad = true;
    }
    remove() {
        console.log("sdsds");
        this.dropdownFlag = false;
        this.showKeyPad = true;
    }
    checking() {
        console.log(this.array.length);
        if (Number(this.count) > this.array.length) {
            alert("You have not enough points");
            this.count = "0";
        }
    }
    ngOnInit() { }
    clicked(val) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("data url with pin ", "https://luxefragrancebar.com/wp-admin/admin-ajax.php?action=eg_add_available_points&ref_id=" +
                btoa(this.settings.customer.id) +
                "&eg_points=10" +
                "&pincode=1234");
            // if (Number(this.count) < this.array.length) {
            if (this.code.length < 4 && val != "") {
                this.code = this.code + val;
                console.log("code is: ", this.code);
                if (this.code.length == 4) {
                    const loading = yield this.loadingCtrl.create({
                        cssClass: "my-custom-class",
                        message: "Loading...",
                    });
                    loading.present();
                    console.log("this.count", this.count);
                    if (this.allPoints) {
                        this.allPoints = 0;
                    }
                    var total = parseInt(this.count) + parseInt(this.allPoints);
                    console.log("total----", total);
                    this.http
                        .get("https://luxefragrancebar.com/wp-admin/admin-ajax.php?action=eg_add_available_points&ref_id=" +
                        btoa(this.settings.customer.id) +
                        "&eg_points=" +
                        total.toString() +
                        "&pincode=" +
                        this.code)
                        .subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        console.log("response for validate points is: ", res);
                        // this.dismissLoader();
                        if (res.message == "Invalid Pincode") {
                            const alert = yield this.alert.create({
                                header: "Invalid Pincode",
                                message: "You entered the invalid pin code.",
                                buttons: [
                                    {
                                        text: "OK",
                                        role: "OK",
                                    },
                                ],
                            });
                            alert.present();
                        }
                        else if (res.message == "All Points") {
                            const alert = yield this.alert.create({
                                header: "Points Redeemed",
                                message: "You have successfully redeem the points.",
                                buttons: [
                                    {
                                        text: "OK",
                                        role: "OK",
                                    },
                                ],
                            });
                            alert.present();
                        }
                        loading.dismiss();
                        this.nav.navigateBack("member-points");
                    }));
                }
            }
            // } else {
            //   alert("Invalid number");
            // }
        });
    }
    backspace() {
        if (this.code.length > 0) {
            this.code = this.code.substring(0, this.code.length - 1);
            console.log("spliced");
        }
    }
    QRScanned() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.qr.prepare().then((status) => {
                if (status.authorized) {
                    this.qr.show();
                    document.getElementsByTagName("body")[0].style.opacity = "0";
                    this.qrScan = this.qr.scan().subscribe((textFound) => {
                        console.log("text Found", textFound);
                        document.getElementsByTagName("body")[0].style.opacity = "1";
                        this.qrScan.unsubscribe();
                        console.log(textFound);
                        this.presentLoader();
                        console.log("selected points", this.count);
                        console.log("Available points", this.givenPoint);
                        // return;
                        console.log("this.count", this.count);
                        var total = parseInt(this.count) + parseInt(this.allPoints);
                        console.log("total----", total);
                        this.http
                            .get("https://luxefragrancebar.com/wp-admin/admin-ajax.php?action=eg_add_available_points&ref_id=" +
                            btoa(this.settings.customer.id) +
                            "&eg_points=" +
                            total.toString() +
                            "&pincode=" +
                            textFound)
                            .subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            console.log("response for validate points is: ", res);
                            this.dismissLoader();
                            if (res.message == "Invalid Pincode") {
                                const alert = yield this.alert.create({
                                    header: "Invalid Pincode",
                                    message: "You entered the invalid pin code.",
                                    buttons: [
                                        {
                                            text: "OK",
                                            role: "OK",
                                        },
                                    ],
                                });
                                alert.present();
                            }
                            else if (res.message == "All Points") {
                                const alert = yield this.alert.create({
                                    header: "Points Redeemed",
                                    message: "You have successfully redeem the points.",
                                    buttons: [
                                        {
                                            text: "OK",
                                            role: "OK",
                                        },
                                    ],
                                });
                                alert.present();
                            }
                            this.nav.navigateBack("member-points");
                        }));
                    }, (err) => {
                        console.log(JSON.stringify(err));
                    });
                }
                else if (status.denied) {
                }
                else {
                }
            });
        });
    }
    presentLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loading.create({ spinner: "circles" });
            this.loader.present();
        });
    }
    dismissLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader.dismiss();
        });
    }
};
RedeemPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__["QRScanner"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
RedeemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-redeem',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./redeem.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/redeem/redeem.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./redeem.page.scss */ "./src/app/redeem/redeem.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        src_app_data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__["QRScanner"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
], RedeemPage);



/***/ })

}]);
//# sourceMappingURL=redeem-redeem-module-es2015.js.map