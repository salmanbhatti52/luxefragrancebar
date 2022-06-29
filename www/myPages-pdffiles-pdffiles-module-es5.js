function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myPages-pdffiles-pdffiles-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/myPages/pdffiles/pdffiles.page.html": function node_modulesRawLoaderDistCjsJsSrcAppMyPagesPdffilesPdffilesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot='start'>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"\">PDF Files Downloads</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"spinner\" *ngIf=\"loading\"><ion-spinner> </ion-spinner></div>\n  <div class=\"files\">\n\n    <div class=\"file\" *ngFor='let some of api.pdffiles; let i = index;' (click)='viewdetails(i)'>\n      <div class=\"img\">\n        <img src=\"../../../assets/pdf.svg\" alt=\"\">\n      </div>\n      <div class=\"label\">\n        {{some.title}}\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/myPages/pdffiles/pdffiles-routing.module.ts": function srcAppMyPagesPdffilesPdffilesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PdffilesPageRoutingModule", function () {
      return PdffilesPageRoutingModule;
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


    var _pdffiles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pdffiles.page */
    "./src/app/myPages/pdffiles/pdffiles.page.ts");

    var routes = [{
      path: "",
      component: _pdffiles_page__WEBPACK_IMPORTED_MODULE_3__["PdffilesPage"]
    }];

    var PdffilesPageRoutingModule = function PdffilesPageRoutingModule() {
      _classCallCheck(this, PdffilesPageRoutingModule);
    };

    PdffilesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PdffilesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/myPages/pdffiles/pdffiles.module.ts": function srcAppMyPagesPdffilesPdffilesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PdffilesPageModule", function () {
      return PdffilesPageModule;
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


    var _pdffiles_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pdffiles-routing.module */
    "./src/app/myPages/pdffiles/pdffiles-routing.module.ts");
    /* harmony import */


    var _pdffiles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pdffiles.page */
    "./src/app/myPages/pdffiles/pdffiles.page.ts");

    var PdffilesPageModule = function PdffilesPageModule() {
      _classCallCheck(this, PdffilesPageModule);
    };

    PdffilesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pdffiles_routing_module__WEBPACK_IMPORTED_MODULE_5__["PdffilesPageRoutingModule"]],
      declarations: [_pdffiles_page__WEBPACK_IMPORTED_MODULE_6__["PdffilesPage"]]
    })], PdffilesPageModule);
    /***/
  },

  /***/
  "./src/app/myPages/pdffiles/pdffiles.page.scss": function srcAppMyPagesPdffilesPdffilesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".files {\n  margin: auto;\n  padding: 5% auto;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: wrap;\n}\n.files .file {\n  flex-shrink: 0;\n  text-align: center;\n  margin: 10px;\n  width: calc(50% - 20px);\n  border: 1px solid #cc9f14;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 20px 10px;\n}\n.files .file .img img {\n  width: 80px;\n  height: 80px;\n}\n.files .file .label {\n  margin-top: 10px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlQYWdlcy9wZGZmaWxlcy9EOlxcbHV4ZS4uLiBkZWJ1ZyA5IE9DVC9zcmNcXGFwcFxcbXlQYWdlc1xccGRmZmlsZXNcXHBkZmZpbGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXlQYWdlcy9wZGZmaWxlcy9wZGZmaWxlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDSjtBRENJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FDQ1I7QURFWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQWhCO0FESVE7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0FDRloiLCJmaWxlIjoic3JjL2FwcC9teVBhZ2VzL3BkZmZpbGVzL3BkZmZpbGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlcyB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDUlIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAuZmlsZSB7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMjBweCk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYzlmMTQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjZmZmLCAkYWxwaGE6IDAuMSk7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcblxuICAgICAgICAuaW1nIHtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgfVxufSIsIi5maWxlcyB7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogNSUgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5maWxlcyAuZmlsZSB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMjBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYzlmMTQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xufVxuLmZpbGVzIC5maWxlIC5pbWcgaW1nIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cbi5maWxlcyAuZmlsZSAubGFiZWwge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/myPages/pdffiles/pdffiles.page.ts": function srcAppMyPagesPdffilesPdffilesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PdffilesPage", function () {
      return PdffilesPage;
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

    var PdffilesPage = /*#__PURE__*/function () {
      function PdffilesPage(api, nav) {
        _classCallCheck(this, PdffilesPage);

        this.api = api;
        this.nav = nav;
        this.loading = true;
      }

      _createClass(PdffilesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadpdffiles();
        }
      }, {
        key: "loadpdffiles",
        value: function loadpdffiles() {
          var _this = this;

          this.api.getPosts("wp-admin/admin-ajax.php?action=eg_get_pdffiles").then(function (res) {
            console.log("pdf files are: ", res);
            _this.api.pdffiles = res;
            _this.loading = false;
          })["catch"](function (error) {
            console.log("error for the pdf files is: ", error);
          });
        }
      }, {
        key: "viewdetails",
        value: function viewdetails(index) {
          this.nav.navigateForward(["pdfdetails", {
            index: index
          }]);
        }
      }]);

      return PdffilesPage;
    }();

    PdffilesPage.ctorParameters = function () {
      return [{
        type: src_app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    PdffilesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-pdffiles",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pdffiles.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/myPages/pdffiles/pdffiles.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pdffiles.page.scss */
      "./src/app/myPages/pdffiles/pdffiles.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], PdffilesPage);
    /***/
  }
}]);
//# sourceMappingURL=myPages-pdffiles-pdffiles-module-es5.js.map