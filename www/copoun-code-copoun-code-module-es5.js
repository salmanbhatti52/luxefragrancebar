function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["copoun-code-copoun-code-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/copoun-code/copoun-code.page.html": function node_modulesRawLoaderDistCjsJsSrcAppCopounCodeCopounCodePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"\">Coupons</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"spinner\" *ngIf=\"loading\"><ion-spinner> </ion-spinner></div>\n\n  <ion-grid>\n    <ion-row\n      style=\"\n        border-bottom: 1px white solid;\n        background: #000000;\n        font-size: 13px;\n        margin-bottom: 4px;\n      \"\n      *ngFor=\"let some of api.couponCode; let i = index;\"\n      (click)=\"viewdetails(i)\"\n    >\n      <ion-col style=\"text-align: center\" size=\"4\" size-sm>\n        <img [src]=\"some.eg_thumbnail\" alt=\"\" />\n      </ion-col>\n      <ion-col size=\"8\" size-sm style=\"text-align: left\">\n        <p>{{some.eg_title}}</p>\n        <p [innerHTML]=\"some.eg_description\"></p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/copoun-code/copoun-code-routing.module.ts": function srcAppCopounCodeCopounCodeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CopounCodePageRoutingModule", function () {
      return CopounCodePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _copoun_code_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./copoun-code.page */
    "./src/app/copoun-code/copoun-code.page.ts");

    var routes = [{
      path: '',
      component: _copoun_code_page__WEBPACK_IMPORTED_MODULE_3__["CopounCodePage"]
    }];

    var CopounCodePageRoutingModule = function CopounCodePageRoutingModule() {
      _classCallCheck(this, CopounCodePageRoutingModule);
    };

    CopounCodePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CopounCodePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/copoun-code/copoun-code.module.ts": function srcAppCopounCodeCopounCodeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CopounCodePageModule", function () {
      return CopounCodePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _copoun_code_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./copoun-code-routing.module */
    "./src/app/copoun-code/copoun-code-routing.module.ts");
    /* harmony import */


    var _copoun_code_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./copoun-code.page */
    "./src/app/copoun-code/copoun-code.page.ts");

    var CopounCodePageModule = function CopounCodePageModule() {
      _classCallCheck(this, CopounCodePageModule);
    };

    CopounCodePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _copoun_code_routing_module__WEBPACK_IMPORTED_MODULE_5__["CopounCodePageRoutingModule"]],
      declarations: [_copoun_code_page__WEBPACK_IMPORTED_MODULE_6__["CopounCodePage"]]
    })], CopounCodePageModule);
    /***/
  },

  /***/
  "./src/app/copoun-code/copoun-code.page.scss": function srcAppCopounCodeCopounCodePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".files {\n  margin: auto;\n  padding: 5% auto;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: wrap;\n}\n.files .file {\n  flex-shrink: 0;\n  text-align: center;\n  margin: 10px;\n  width: calc(50% - 20px);\n  border: 1px solid #cc9f14;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 20px 10px;\n}\n.files .file .img img {\n  width: 80px;\n  height: 80px;\n}\n.files .file .label {\n  margin-top: 10px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29wb3VuLWNvZGUvRDpcXGx1eGUuLi4gZGVidWcgOSBPQ1Qvc3JjXFxhcHBcXGNvcG91bi1jb2RlXFxjb3BvdW4tY29kZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvcG91bi1jb2RlL2NvcG91bi1jb2RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0k7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUNDUjtBREVZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNBaEI7QURJUTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7QUNGWiIsImZpbGUiOiJzcmMvYXBwL2NvcG91bi1jb2RlL2NvcG91bi1jb2RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlcyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiA1JSBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIC5maWxlIHtcclxuICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDIwcHgpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYzlmMTQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICNmZmYsICRhbHBoYTogMC4xKTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcblxyXG4gICAgICAgIC5pbWcge1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmZpbGVzIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiA1JSBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZpbGVzIC5maWxlIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjOWYxNDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG59XG4uZmlsZXMgLmZpbGUgLmltZyBpbWcge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLmZpbGVzIC5maWxlIC5sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/copoun-code/copoun-code.page.ts": function srcAppCopounCodeCopounCodePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CopounCodePage", function () {
      return CopounCodePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var src_app_data_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/data/settings */
    "./src/app/data/settings.ts");

    var CopounCodePage = /*#__PURE__*/function () {
      function CopounCodePage(api, nav, toast, settings) {
        _classCallCheck(this, CopounCodePage);

        this.api = api;
        this.nav = nav;
        this.toast = toast;
        this.settings = settings;
        this.loading = true;
      }

      _createClass(CopounCodePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadCoupon();
        }
      }, {
        key: "loadCoupon",
        value: function loadCoupon() {
          var _this = this;

          var customer = btoa(this.settings.customer.id);
          this.api.getPosts("wp-admin/admin-ajax.php?action=eg_get_couponspromo&ref_id=" + customer).then(function (res) {
            console.log("pdf eg_get_couponspromo are: ", res);
            _this.api.couponCode = res;
            console.log("pdf this.api.couponCode are: ", _this.api.couponCode[0].eg_title);
            _this.loading = false;
          })["catch"](function (error) {
            console.log("error for the pdf files is: ", error);
          });
        }
      }, {
        key: "viewdetails",
        value: function viewdetails(index) {
          this.nav.navigateForward(["copoun-details", {
            index: index
          }]);
        }
      }]);

      return CopounCodePage;
    }();

    CopounCodePage.ctorParameters = function () {
      return [{
        type: src_app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: src_app_data_settings__WEBPACK_IMPORTED_MODULE_4__["Settings"]
      }];
    };

    CopounCodePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-copoun-code",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./copoun-code.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/copoun-code/copoun-code.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./copoun-code.page.scss */
      "./src/app/copoun-code/copoun-code.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_data_settings__WEBPACK_IMPORTED_MODULE_4__["Settings"]])], CopounCodePage);
    /***/
  }
}]);
//# sourceMappingURL=copoun-code-copoun-code-module-es5.js.map