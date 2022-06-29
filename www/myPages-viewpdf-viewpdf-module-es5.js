function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myPages-viewpdf-viewpdf-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/myPages/viewpdf/viewpdf.page.html": function node_modulesRawLoaderDistCjsJsSrcAppMyPagesViewpdfViewpdfPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\"\n      >{{api.pdffiles[index].title}}</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <pdf-viewer\n    [src]=\"api.pdffiles[index].eg_thumbnail\"\n    [zoom]=\"1\"\n    [original-size]=\"false\"\n    [show-borders]=\"true\"\n  >\n  </pdf-viewer> -->\n  <!-- <ngx-extended-pdf-viewer\n    [src]=\"'assets/example.pdf'\"\n    useBrowserLocale=\"true\"\n    height=\"80vh\"\n  ></ngx-extended-pdf-viewer> -->\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/myPages/viewpdf/viewpdf-routing.module.ts": function srcAppMyPagesViewpdfViewpdfRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewpdfPageRoutingModule", function () {
      return ViewpdfPageRoutingModule;
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


    var _viewpdf_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./viewpdf.page */
    "./src/app/myPages/viewpdf/viewpdf.page.ts");

    var routes = [{
      path: '',
      component: _viewpdf_page__WEBPACK_IMPORTED_MODULE_3__["ViewpdfPage"]
    }];

    var ViewpdfPageRoutingModule = function ViewpdfPageRoutingModule() {
      _classCallCheck(this, ViewpdfPageRoutingModule);
    };

    ViewpdfPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ViewpdfPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/myPages/viewpdf/viewpdf.module.ts": function srcAppMyPagesViewpdfViewpdfModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewpdfPageModule", function () {
      return ViewpdfPageModule;
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


    var _viewpdf_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./viewpdf-routing.module */
    "./src/app/myPages/viewpdf/viewpdf-routing.module.ts");
    /* harmony import */


    var _viewpdf_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./viewpdf.page */
    "./src/app/myPages/viewpdf/viewpdf.page.ts");

    var ViewpdfPageModule = function ViewpdfPageModule() {
      _classCallCheck(this, ViewpdfPageModule);
    };

    ViewpdfPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _viewpdf_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewpdfPageRoutingModule"]],
      declarations: [_viewpdf_page__WEBPACK_IMPORTED_MODULE_6__["ViewpdfPage"]]
    })], ViewpdfPageModule);
    /***/
  },

  /***/
  "./src/app/myPages/viewpdf/viewpdf.page.scss": function srcAppMyPagesViewpdfViewpdfPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215UGFnZXMvdmlld3BkZi92aWV3cGRmLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/myPages/viewpdf/viewpdf.page.ts": function srcAppMyPagesViewpdfViewpdfPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewpdfPage", function () {
      return ViewpdfPage;
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


    var src_app_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/document-viewer/ngx */
    "./node_modules/@ionic-native/document-viewer/ngx/index.js");

    var ViewpdfPage = /*#__PURE__*/function () {
      function ViewpdfPage(route, api, document) {
        _classCallCheck(this, ViewpdfPage);

        this.route = route;
        this.api = api;
        this.document = document;
      }

      _createClass(ViewpdfPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.params.subscribe(function (res) {
            _this.index = res.index;
            console.log("index is: ", _this.index);
          });
        }
      }]);

      return ViewpdfPage;
    }();

    ViewpdfPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__["DocumentViewer"]
      }];
    };

    ViewpdfPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-viewpdf",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./viewpdf.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/myPages/viewpdf/viewpdf.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./viewpdf.page.scss */
      "./src/app/myPages/viewpdf/viewpdf.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__["DocumentViewer"]])], ViewpdfPage);
    /***/
  }
}]);
//# sourceMappingURL=myPages-viewpdf-viewpdf-module-es5.js.map