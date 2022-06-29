function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myPages-member-points-member-points-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/myPages/member-points/member-points.page.html": function node_modulesRawLoaderDistCjsJsSrcAppMyPagesMemberPointsMemberPointsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"height: 30%\">\n    <img src=\"assets/bug.jpeg\" style=\"width: 100%; height: 100%\" alt=\"\" />\n  </div>\n\n  <div class=\"spinner\" *ngIf=\"loading\"><ion-spinner> </ion-spinner></div>\n\n  <div *ngIf=\"!loading\" class=\"ion-margin ion-padding\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <p>Name : {{userName}}</p>\n        <p>Reference ID : {{base64_ref}}</p>\n      </ion-col>\n      <!-- <ion-col size=\"3\"></ion-col> -->\n    </ion-row>\n    <ion-row style=\"font-size: 15px; font-weight: 700\">\n      <ion-col size=\"5\">\n        <div class=\"pentagon\">\n          <div style=\"display: grid; justify-items: center\">\n            <span>{{validPoints}}</span>\n            <span>Available points</span>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col size=\"7\">\n        <div\n          style=\"\n            display: grid;\n            justify-content: center;\n            align-items: center;\n            grid-gap: 8px;\n            grid-template-columns: 100%;\n            margin-top: 22px;\n          \"\n        >\n          <div class=\"add-btn\" (click)=\"enterPassword()\">Add</div>\n          <div class=\"valid-btn\">{{availblePoints}} Valid points</div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class=\"add-btn\" style=\"margin-top:20px\" (click)=\"redeem()\">Redeem</div>\n      </ion-col>\n    </ion-row>\n    \n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/myPages/member-points/member-points-routing.module.ts": function srcAppMyPagesMemberPointsMemberPointsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberPointsPageRoutingModule", function () {
      return MemberPointsPageRoutingModule;
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


    var _member_points_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./member-points.page */
    "./src/app/myPages/member-points/member-points.page.ts");

    var routes = [{
      path: '',
      component: _member_points_page__WEBPACK_IMPORTED_MODULE_3__["MemberPointsPage"]
    }];

    var MemberPointsPageRoutingModule = function MemberPointsPageRoutingModule() {
      _classCallCheck(this, MemberPointsPageRoutingModule);
    };

    MemberPointsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MemberPointsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/myPages/member-points/member-points.module.ts": function srcAppMyPagesMemberPointsMemberPointsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberPointsPageModule", function () {
      return MemberPointsPageModule;
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


    var _member_points_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./member-points-routing.module */
    "./src/app/myPages/member-points/member-points-routing.module.ts");
    /* harmony import */


    var _member_points_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./member-points.page */
    "./src/app/myPages/member-points/member-points.page.ts");

    var MemberPointsPageModule = function MemberPointsPageModule() {
      _classCallCheck(this, MemberPointsPageModule);
    };

    MemberPointsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _member_points_routing_module__WEBPACK_IMPORTED_MODULE_5__["MemberPointsPageRoutingModule"]],
      declarations: [_member_points_page__WEBPACK_IMPORTED_MODULE_6__["MemberPointsPage"]]
    })], MemberPointsPageModule);
    /***/
  },

  /***/
  "./src/app/myPages/member-points/member-points.page.scss": function srcAppMyPagesMemberPointsMemberPointsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".pentagon {\n  -webkit-clip-path: polygon(50% 0%, 100% 30%, 100% 75%, 50% 100%, 0% 75%, 0% 28%);\n  clip-path: polygon(50% 0%, 100% 30%, 100% 75%, 50% 100%, 0% 75%, 0% 28%);\n  background: #e342e6;\n  height: 131px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.valid-btn {\n  background: #3880ff;\n  padding: 14px 2px;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.add-btn {\n  background: #cf42e6de;\n  padding: 14px 2px;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlQYWdlcy9tZW1iZXItcG9pbnRzL0Q6XFxsdXhlLi4uIGRlYnVnIDkgT0NUL3NyY1xcYXBwXFxteVBhZ2VzXFxtZW1iZXItcG9pbnRzXFxtZW1iZXItcG9pbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXlQYWdlcy9tZW1iZXItcG9pbnRzL21lbWJlci1wb2ludHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0ZBQUE7RUFRQSx3RUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ05GOztBRFFBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNMRjs7QURPQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9teVBhZ2VzL21lbWJlci1wb2ludHMvbWVtYmVyLXBvaW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGVudGFnb24ge1xuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbihcbiAgICA1MCUgMCUsXG4gICAgMTAwJSAzMCUsXG4gICAgMTAwJSA3NSUsXG4gICAgNTAlIDEwMCUsXG4gICAgMCUgNzUlLFxuICAgIDAlIDI4JVxuICApO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDMwJSwgMTAwJSA3NSUsIDUwJSAxMDAlLCAwJSA3NSUsIDAlIDI4JSk7XG4gIGJhY2tncm91bmQ6ICNlMzQyZTY7XG4gIGhlaWdodDogMTMxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi52YWxpZC1idG4ge1xuICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICBwYWRkaW5nOiAxNHB4IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFkZC1idG4ge1xuICBiYWNrZ3JvdW5kOiAjY2Y0MmU2ZGU7XG4gIHBhZGRpbmc6IDE0cHggMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCIucGVudGFnb24ge1xuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDEwMCUgMzAlLCAxMDAlIDc1JSwgNTAlIDEwMCUsIDAlIDc1JSwgMCUgMjglKTtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAzMCUsIDEwMCUgNzUlLCA1MCUgMTAwJSwgMCUgNzUlLCAwJSAyOCUpO1xuICBiYWNrZ3JvdW5kOiAjZTM0MmU2O1xuICBoZWlnaHQ6IDEzMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi52YWxpZC1idG4ge1xuICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICBwYWRkaW5nOiAxNHB4IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWRkLWJ0biB7XG4gIGJhY2tncm91bmQ6ICNjZjQyZTZkZTtcbiAgcGFkZGluZzogMTRweCAycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/myPages/member-points/member-points.page.ts": function srcAppMyPagesMemberPointsMemberPointsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberPointsPage", function () {
      return MemberPointsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var src_app_data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/data/settings */
    "./src/app/data/settings.ts");

    var MemberPointsPage = /*#__PURE__*/function () {
      function MemberPointsPage(nav, router, api, http, settings, loadingCtrl) {
        _classCallCheck(this, MemberPointsPage);

        this.nav = nav;
        this.router = router;
        this.api = api;
        this.http = http;
        this.settings = settings;
        this.loadingCtrl = loadingCtrl;
        this.loading = true;
        this.isLoaded = false;
        this.array = [];
        this.validArray = [];
        this.userName = localStorage.getItem("user_name");
      }

      _createClass(MemberPointsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadingCtrl.create({
                      cssClass: "my-custom-class",
                      message: "Please wait..."
                    });

                  case 2:
                    loading = _context4.sent;
                    loading.present();
                    console.log("user id is: ", this.settings.customer.id, btoa(this.settings.customer.id));
                    this.base64_ref = btoa(this.settings.customer.id); //this.isLoaded = false;

                    this.array = [];
                    this.validArray = [];
                    console.log("url is: ", "https://luxefragrancebar.com/wp-admin/admin-ajax.php?action=eg_valid_points&ref_id=" + btoa(this.settings.customer.id));
                    this.http.get("https://luxefragrancebar.com/wp-admin/admin-ajax.php?action=eg_valid_points&ref_id=" + btoa(this.settings.customer.id)).subscribe(function (validPoints) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var _this2 = this;

                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                this.http.get("https://luxefragrancebar.com/wp-admin/admin-ajax.php?action=eg_all_points&ref_id=" + btoa(this.settings.customer.id)).subscribe(function (res) {
                                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                                    var remaingin, i, obj;
                                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                      while (1) {
                                        switch (_context2.prev = _context2.next) {
                                          case 0:
                                            console.log("valid points are: ", validPoints.valid_points);
                                            console.log("The all points: ", res.all_points);

                                            if (res.all_points == "") {
                                              this.allPoints = 0;
                                            } else {
                                              this.allPoints = res.all_points;
                                            }

                                            this.points = res;
                                            this.loading = false; //this.isLoaded = true;

                                            loading.dismiss();
                                            this.validArray = validPoints.valid_points > 0 ? Array(Number(validPoints.valid_points)).fill(0) : [];
                                            remaingin = Number(res.all_points) - Number(validPoints.valid_points);
                                            console.log("remaingin", remaingin);

                                            for (i = 0; i < remaingin; i++) {
                                              obj = {
                                                value: i
                                              };
                                              this.array.push(obj);
                                            }

                                            this.validPoints = Number(res.all_points) - Number(validPoints.valid_points);
                                            this.availblePoints = validPoints.valid_points;
                                            /*  this.array = Array(
                                                  Number(res.all_points) - Number(validPoints.valid_points)
                                                ).fill(0); */

                                            console.log("arrays lengths are: ", this.validPoints, this.availblePoints);

                                          case 13:
                                          case "end":
                                            return _context2.stop();
                                        }
                                      }
                                    }, _callee2, this);
                                  }));
                                });

                              case 1:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    });

                  case 10:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "enterPassword",
        value: function enterPassword() {
          console.log("asdsadasdasdasdasdasd", this.array.length);
          this.nav.navigateForward(["enter-password", {
            points: this.array.length,
            allPoints: this.allPoints
          }]);
        }
      }, {
        key: "redeem",
        value: function redeem() {
          console.log("asdsadasdasdasdasdasd", this.array.length);
          this.nav.navigateForward(["redeem", {
            points: this.array.length,
            allPoints: this.allPoints
          }]);
        }
      }]);

      return MemberPointsPage;
    }();

    MemberPointsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: src_app_data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }];
    };

    MemberPointsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-member-points",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./member-points.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/myPages/member-points/member-points.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./member-points.page.scss */
      "./src/app/myPages/member-points/member-points.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], src_app_data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])], MemberPointsPage);
    /***/
  }
}]);
//# sourceMappingURL=myPages-member-points-member-points-module-es5.js.map