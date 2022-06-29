function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myPages-pdfdetails-pdfdetails-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/myPages/pdfdetails/pdfdetails.page.html": function node_modulesRawLoaderDistCjsJsSrcAppMyPagesPdfdetailsPdfdetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase ion-text-center\"\n      >{{api.pdffiles[index].title}}dsff</ion-title\n    >\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"share()\">\n        <ion-icon name=\"share-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"spinner\" *ngIf=\"loading\"><ion-spinner> </ion-spinner></div>\n  <div\n    class=\"download ion-margin ion-padding ion-activatable\"\n    style=\"position: relative; overflow: hidden\"\n    (click)=\"downloadOpenPdf()\"\n  >\n    <img src=\"../../../assets/download.svg\" style=\"width: 24px\" alt=\"\" />\n    &nbsp;&nbsp;Download PDF File\n  </div>\n\n  <div class=\"ion-margin desc\">\n    <div class=\"heading ion-padding\">Description</div>\n    <div\n      class=\"description ion-padding\"\n      [innerHTML]=\"api.pdffiles[index].description\"\n    >\n      <!-- {{api.pdffiles[index].description}} -->\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/myPages/pdfdetails/pdfdetails-routing.module.ts": function srcAppMyPagesPdfdetailsPdfdetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PdfdetailsPageRoutingModule", function () {
      return PdfdetailsPageRoutingModule;
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


    var _pdfdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pdfdetails.page */
    "./src/app/myPages/pdfdetails/pdfdetails.page.ts");

    var routes = [{
      path: '',
      component: _pdfdetails_page__WEBPACK_IMPORTED_MODULE_3__["PdfdetailsPage"]
    }];

    var PdfdetailsPageRoutingModule = function PdfdetailsPageRoutingModule() {
      _classCallCheck(this, PdfdetailsPageRoutingModule);
    };

    PdfdetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PdfdetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/myPages/pdfdetails/pdfdetails.module.ts": function srcAppMyPagesPdfdetailsPdfdetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PdfdetailsPageModule", function () {
      return PdfdetailsPageModule;
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


    var _pdfdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pdfdetails-routing.module */
    "./src/app/myPages/pdfdetails/pdfdetails-routing.module.ts");
    /* harmony import */


    var _pdfdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pdfdetails.page */
    "./src/app/myPages/pdfdetails/pdfdetails.page.ts");

    var PdfdetailsPageModule = function PdfdetailsPageModule() {
      _classCallCheck(this, PdfdetailsPageModule);
    };

    PdfdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pdfdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["PdfdetailsPageRoutingModule"]],
      declarations: [_pdfdetails_page__WEBPACK_IMPORTED_MODULE_6__["PdfdetailsPage"]]
    })], PdfdetailsPageModule);
    /***/
  },

  /***/
  "./src/app/myPages/pdfdetails/pdfdetails.page.scss": function srcAppMyPagesPdfdetailsPdfdetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".download {\n  border: 1px solid #CC9F14;\n  font-size: 20px;\n  color: #CC9F14;\n  display: flex;\n  align-items: center;\n}\n\n.desc {\n  border: 1px solid #CC9F14;\n}\n\n.desc .heading {\n  font-size: 20px;\n  color: #CC9F14;\n  border-bottom: 1px solid #CC9F14;\n}\n\n.desc .description {\n  font-size: 14;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlQYWdlcy9wZGZkZXRhaWxzL0Q6XFxsdXhlLi4uIGRlYnVnIDkgT0NUL3NyY1xcYXBwXFxteVBhZ2VzXFxwZGZkZXRhaWxzXFxwZGZkZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXlQYWdlcy9wZGZkZXRhaWxzL3BkZmRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUNBUjs7QURHSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9teVBhZ2VzL3BkZmRldGFpbHMvcGRmZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG93bmxvYWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQzlGMTQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjQ0M5RjE0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRlc2Mge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQzlGMTQ7XG4gICAgXG5cbiAgICAuaGVhZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgY29sb3I6ICNDQzlGMTQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0M5RjE0O1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59IiwiLmRvd25sb2FkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDOUYxNDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI0NDOUYxNDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRlc2Mge1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0M5RjE0O1xufVxuLmRlc2MgLmhlYWRpbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjQ0M5RjE0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDOUYxNDtcbn1cbi5kZXNjIC5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/myPages/pdfdetails/pdfdetails.page.ts": function srcAppMyPagesPdfdetailsPdfdetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PdfdetailsPage", function () {
      return PdfdetailsPage;
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


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/document-viewer/ngx */
    "./node_modules/@ionic-native/document-viewer/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/file-opener/ngx */
    "./node_modules/@ionic-native/file-opener/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");

    var PdfdetailsPage = /*#__PURE__*/function () {
      function PdfdetailsPage(route, api, social, nav, document, platform, fileOpener, file, filetransfer) {
        _classCallCheck(this, PdfdetailsPage);

        this.route = route;
        this.api = api;
        this.social = social;
        this.nav = nav;
        this.document = document;
        this.platform = platform;
        this.fileOpener = fileOpener;
        this.file = file;
        this.filetransfer = filetransfer;
        this.loading = false;
      }

      _createClass(PdfdetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.params.subscribe(function (res) {
            _this.index = res.index;
            console.log("index is: ", _this.index, _this.api.pdffiles[_this.index]);
          });
        }
      }, {
        key: "open",
        value: function open() {
          var _this2 = this;

          this.loading = true;
          console.log("opening pdf file", this.api.pdffiles[this.index].eg_thumbnail);
          var filpath = this.file.applicationDirectory + "www/assets";

          if (this.platform.is("android")) {
            var fakename = Date.now();
            this.file.copyFile(filpath, "sample.pdf", this.file.dataDirectory, "".concat(fakename, ".pdf")).then(function (result) {
              _this2.fileOpener.open(result.nativeURL, "application/pdf");

              _this2.loading = false;
            });
          } else {
            var options = {
              title: "My PDF"
            };
            this.document.viewDocument("".concat(filpath, "/sample.pdf"), "application/pdf", options);
            this.loading = false;
          }
        }
      }, {
        key: "downloadOpenPdf",
        value: function downloadOpenPdf() {
          var _this3 = this;

          console.log("download opening pdf file", this.api.pdffiles[this.index].eg_thumbnail);
          var downloadurl = this.api.pdffiles[this.index].eg_thumbnail;
          var path = this.file.dataDirectory;
          var transfer = this.filetransfer.create();
          transfer.download(downloadurl, "".concat(path, "myfile.pdf")).then(function (entry) {
            var url = entry.toURL();

            if (_this3.platform.is("ios")) {
              _this3.document.viewDocument(url, "application/pdf", {});
            } else {
              _this3.fileOpener.open(url, "application/pdf");
            }
          });
        }
      }, {
        key: "share",
        value: function share() {
          var link = this.api.pdffiles[this.index].eg_thumbnail;
          console.log("link is: ", link);
          this.social.share("", "", link, "");
        }
      }, {
        key: "figureOutFile",
        value: function figureOutFile(file) {
          if (this.platform.is("ios")) {
            var baseUrl = location.href.replace("/index.html", "");
            return baseUrl + "/assets/pdf/".concat(file);
          }

          if (this.platform.is("android")) {
            return "file:///android_asset/www/assets/pdf/".concat(file);
          }
        }
      }]);

      return PdfdetailsPage;
    }();

    PdfdetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__["DocumentViewer"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__["FileOpener"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"]
      }];
    };

    PdfdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-pdfdetails",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pdfdetails.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/myPages/pdfdetails/pdfdetails.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pdfdetails.page.scss */
      "./src/app/myPages/pdfdetails/pdfdetails.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__["DocumentViewer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__["FileOpener"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"]])], PdfdetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=myPages-pdfdetails-pdfdetails-module-es5.js.map