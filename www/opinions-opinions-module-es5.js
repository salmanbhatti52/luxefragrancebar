function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["opinions-opinions-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/opinions/opinions.page.html": function node_modulesRawLoaderDistCjsJsSrcAppOpinionsOpinionsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"\">Questions and Opinions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadQuestions($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"spinner\" *ngIf=\"loading\"><ion-spinner> </ion-spinner></div>\n\n  <div style=\"padding: 20px\">\n    <div *ngFor=\"let faq of questionList;\">\n      <ion-row\n        style=\"\n          background: #e342e6bd;\n          padding: 8px 10px;\n          display: flex;\n          align-items: center;\n          font-weight: 700;\n          margin-bottom: 5px;\n          box-shadow: -1px 2px 4px #a097a3;\n        \"\n        (click)=\"showAns(faq)\"\n      >\n        <ion-col size=\"10\">\n          <ion-label style=\"color: #ffffff\"\n            >{{faq.title}}\n            <span style=\"font-size: 13px\"\n              >({{faq.answers.length}})\n            </span></ion-label\n          >\n        </ion-col>\n\n        <ion-col size=\"2\">\n          <!-- <img\n            *ngIf=\"faq.faqs_id == faqid && faq.faqs_id == flag\"\n            src=\"assets/icon/up.png\"\n            style=\"height: 17px; width: 20px; margin-top: 4px\"\n          /> -->\n\n          <ion-icon\n            *ngIf=\"faq.faqs_id == faqid && faq.faqs_id == flag\"\n            style=\"height: 17px; width: 20px; margin-top: 4px\"\n            name=\"chevron-up-outline\"\n          ></ion-icon>\n          <!-- <img\n            *ngIf=\"(faq.faqs_id != faqid  && faq.faqs_id != flag) || flag == '0'\"\n            src=\"assets/icon/down.png\"\n            style=\"height: 17px; width: 20px; margin-top: 4px\"\n          /> -->\n\n          <ion-icon\n            *ngIf=\"(faq.faqs_id != faqid  && faq.faqs_id != flag) || flag == '0'\"\n            style=\"height: 17px; width: 20px; margin-top: 4px\"\n            name=\"chevron-down-outline\"\n          ></ion-icon>\n        </ion-col>\n      </ion-row>\n\n      <div *ngIf=\"faq.faqs_id == faqid && faqisclicked == true\">\n        <ng-container *ngIf=\"faq.answers != 0\">\n          <div *ngFor=\"let faqAns of faq.answers;\">\n            <ion-row>\n              <ion-col>\n                <p>\n                  {{faqAns.user_name}} :\n                  <span>{{faqAns.answer}}</span>\n                </p>\n              </ion-col>\n              <!-- <ion-col size=\"9\">\n              <p>{{faqAns.answer}}</p>\n            </ion-col> -->\n            </ion-row>\n\n            <img\n              (error)=\"handleImgError($event, item)\"\n              [src]=\"faqAns.picture\"\n              style=\"\n                height: 200px;\n                width: 100%;\n                margin-top: 4px;\n                object-fit: cover;\n              \"\n            />\n          </div>\n        </ng-container>\n        <ng-container *ngIf=\"faq.answers == 0\">\n          <div\n            style=\"\n              display: flex;\n              justify-content: center;\n              padding: 20px;\n              border: 2px solid;\n            \"\n          >\n            <span>No answer available</span>\n          </div>\n        </ng-container>\n      </div>\n\n      <!-- <p [hidden]=isfaqhidden *ngIf=\"faq.faqs_id == ansid\">{{ans}}</p> -->\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/opinions/opinions-routing.module.ts": function srcAppOpinionsOpinionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OpinionsPageRoutingModule", function () {
      return OpinionsPageRoutingModule;
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


    var _opinions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./opinions.page */
    "./src/app/opinions/opinions.page.ts");

    var routes = [{
      path: '',
      component: _opinions_page__WEBPACK_IMPORTED_MODULE_3__["OpinionsPage"]
    }];

    var OpinionsPageRoutingModule = function OpinionsPageRoutingModule() {
      _classCallCheck(this, OpinionsPageRoutingModule);
    };

    OpinionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OpinionsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/opinions/opinions.module.ts": function srcAppOpinionsOpinionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OpinionsPageModule", function () {
      return OpinionsPageModule;
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


    var _opinions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./opinions-routing.module */
    "./src/app/opinions/opinions-routing.module.ts");
    /* harmony import */


    var _opinions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./opinions.page */
    "./src/app/opinions/opinions.page.ts");

    var OpinionsPageModule = function OpinionsPageModule() {
      _classCallCheck(this, OpinionsPageModule);
    };

    OpinionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _opinions_routing_module__WEBPACK_IMPORTED_MODULE_5__["OpinionsPageRoutingModule"]],
      declarations: [_opinions_page__WEBPACK_IMPORTED_MODULE_6__["OpinionsPage"]]
    })], OpinionsPageModule);
    /***/
  },

  /***/
  "./src/app/opinions/opinions.page.scss": function srcAppOpinionsOpinionsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29waW5pb25zL29waW5pb25zLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/opinions/opinions.page.ts": function srcAppOpinionsOpinionsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OpinionsPage", function () {
      return OpinionsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OpinionsPage = /*#__PURE__*/function () {
      function OpinionsPage(api) {
        _classCallCheck(this, OpinionsPage);

        this.api = api;
        this.loading = true;
        this.questionList = [];
        this.isfaqhidden = true;
        this.faqisclicked = false;
        this.ans = "";
        this.ansid = "";
        this.img_src = "assets/imgs/plus.png";
        this.faqid = "0";
        this.flag = "0";
        this.recentid = "";
        this.check = false;
        this.loadingimgishidden = false;
        this.loadQuestions();
      }

      _createClass(OpinionsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "checkImg",
        value: function checkImg(url) {
          var img = new Image();
          img.src = url;
          console.log("asdasads", img.complete);
          return img.complete;
        }
      }, {
        key: "loadQuestions",
        value: function loadQuestions(event) {
          var _this = this;

          this.api.getPosts("wp-admin/admin-ajax.php?action=eg_get_public_opinions").then(function (res) {
            if (event) {
              event.target.complete();
            }

            var values = Object.values(res.data);
            console.log("res ---all questiobns Object", res);
            console.log("res ---all questiobns Array", values);
            _this.loading = false;
            _this.questionList = [];
            var anwsers = [];
            values.map(function (questions, i) {
              // [questions.answers].map((ans, j) => {
              //   anwsers.push({
              //     picture: ans.picture,
              //     user_name: ans.user_name,
              //     answer: ans.answer,
              //     flag: this.checkImg(ans.picture),
              //   });
              // });
              _this.questionList.push({
                faqs_id: i + 1,
                title: questions.title,
                answers: [questions.answers]
              });
            });
            console.log("set array", _this.questionList);
          })["catch"](function (error) {
            _this.loading = false;
            console.log("error eg_get_questions is: ", error);
          });
        }
      }, {
        key: "showAns",
        value: function showAns(faq) {
          console.log(faq.faqs_id);
          this.faqid = faq.faqs_id;

          if (this.faqid == this.flag) {
            this.flag = "0";
            this.faqisclicked = false; //plus btn
          } else {
            this.flag = faq.faqs_id;
            this.faqisclicked = true; //minus btn
          }
        }
      }, {
        key: "handleImgError",
        value: function handleImgError(ev, item, url) {
          var source = ev.srcElement;
          var imgSrc = "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";
          source.src = imgSrc;
        } // CHECK IF IMAGE EXISTS

      }, {
        key: "checkIfImageExists",
        value: function checkIfImageExists(url) {
          var img = new Image();
          img.src = url;
          console.log(img.complete); // if (img.complete) {
          //   console.log(img.complete);
          //   console.log("imag".);
          // } else {
          //   img.onload = () => {
          //     callback(true);
          //   };
          //   img.onerror = () => {
          //     callback(false);
          //   };
          // }
        }
      }]);

      return OpinionsPage;
    }();

    OpinionsPage.ctorParameters = function () {
      return [{
        type: src_app_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
      }];
    };

    OpinionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-opinions",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./opinions.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/opinions/opinions.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./opinions.page.scss */
      "./src/app/opinions/opinions.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])], OpinionsPage);
    /***/
  }
}]);
//# sourceMappingURL=opinions-opinions-module-es5.js.map