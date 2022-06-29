function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myPages-enter-password-enter-password-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/myPages/enter-password/enter-password.page.html": function node_modulesRawLoaderDistCjsJsSrcAppMyPagesEnterPasswordEnterPasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Enter Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"background: white\">\n    <div\n      style=\"\n        display: flex;\n        flex-flow: row;\n        align-items: center;\n        justify-content: center;\n      \"\n      class=\"ion-padding\"\n    >\n      <div style=\"flex-grow: 1; color: #000\">1 point to validate</div>\n      <div style=\"position: relative\">\n        <ion-select\n          *ngIf=\"!dropdownFlag\"\n          [(ngModel)]=\"count\"\n          style=\"color: black\"\n          interface=\"popover\"\n          (ionChange)=\"custom()\"\n        >\n          <ion-select-option style=\"color: white\" value=\"0\">\n            Add custom no.\n          </ion-select-option>\n          <ion-select-option\n            *ngFor=\"let some of array\"\n            value=\"{{some}}\"\n            style=\"color: white\"\n            >{{some}}\n          </ion-select-option>\n        </ion-select>\n\n        <ion-input\n          style=\"\n            color: black;\n            border: 1px solid #282222a1;\n            width: 122px;\n            margin-right: 11px;\n          \"\n          [(ngModel)]=\"count\"\n          *ngIf=\"dropdownFlag\"\n          type=\"tel\"\n          placeholder=\"Enter number\"\n        ></ion-input>\n        <!--  <span style=\"background:#877777;position:absolute;top:8px;right:5px;padding:2px;border-radius:18px;width:22px;display:flex;justify-content:center\">X</span> -->\n        <div\n          style=\"\n            background: #e342e6;\n            position: absolute;\n            top: 11px;\n            right: -14px;\n            padding: 2px;\n            border-radius: 16px;\n            width: 22px;\n            display: flex;\n            justify-content: center;\n            z-index: 99999;\n          \"\n          *ngIf=\"dropdownFlag\"\n        >\n          <ion-icon (click)=\"remove()\" name=\"close-outline\"></ion-icon>\n        </div>\n      </div>\n    </div>\n\n    <div\n      class=\"ion-text-center\"\n      style=\"color: black; padding-bottom: 8px; border-bottom: 1px solid black\"\n    >\n      Unlock by QR Code\n    </div>\n\n    <div class=\"ion-padding\">\n      <ion-button\n        (click)=\"QRScanned()\"\n        style=\"\n          --background: #fff;\n          color: var(--ion-color-warning);\n          border: 1px solid #6c6c6c;\n          border-radius: 4px;\n        \"\n      >\n        Scan QR Code</ion-button\n      >\n    </div>\n    <div\n      class=\"ion-text-center\"\n      style=\"color: black; padding-bottom: 8px; border-bottom: 1px solid black\"\n    >\n      Please Enter the Password\n    </div>\n\n    <div class=\"ion-padding ion-text-center\" style=\"color: black\">\n      <ion-icon name=\"ellipse\" *ngIf=\"code.length >= 1\"></ion-icon>\n      <ion-icon name=\"ellipse\" *ngIf=\"code.length >= 2\"></ion-icon>\n      <ion-icon name=\"ellipse\" *ngIf=\"code.length >= 3\"></ion-icon>\n      <ion-icon name=\"ellipse\" *ngIf=\"code.length == 4\"></ion-icon>\n      <ion-icon name=\"ellipse-outline\" *ngIf=\"code.length == 0\"></ion-icon>\n      <ion-icon name=\"ellipse-outline\" *ngIf=\"code.length < 2\"></ion-icon>\n      <ion-icon name=\"ellipse-outline\" *ngIf=\"code.length < 3\"></ion-icon>\n      <ion-icon name=\"ellipse-outline\" *ngIf=\"code.length < 4\"></ion-icon>\n    </div>\n  </div>\n\n  <div\n    class=\"ion-margin-vertical\"\n    style=\"\n      display: flex;\n      flex-flow: row;\n      background-color: white;\n      flex-wrap: wrap;\n    \"\n  >\n    <div\n      *ngFor=\"let some of nums\"\n      (click)=\"clicked(some)\"\n      style=\"\n        flex-shrink: 0;\n        width: calc((100% / 3));\n        border: 1px solid black;\n        height: 50px;\n        color: black;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      \"\n    >\n      {{some}}\n    </div>\n    <div\n      style=\"\n        flex-shrink: 0;\n        width: calc((100% / 3));\n        border: 1px solid black;\n        height: 50px;\n        color: black;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      \"\n    >\n      <ion-icon name=\"arrow-back\" (click)=\"backspace()\"></ion-icon>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/myPages/enter-password/enter-password-routing.module.ts": function srcAppMyPagesEnterPasswordEnterPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnterPasswordPageRoutingModule", function () {
      return EnterPasswordPageRoutingModule;
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


    var _enter_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./enter-password.page */
    "./src/app/myPages/enter-password/enter-password.page.ts");

    var routes = [{
      path: '',
      component: _enter_password_page__WEBPACK_IMPORTED_MODULE_3__["EnterPasswordPage"]
    }];

    var EnterPasswordPageRoutingModule = function EnterPasswordPageRoutingModule() {
      _classCallCheck(this, EnterPasswordPageRoutingModule);
    };

    EnterPasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EnterPasswordPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/myPages/enter-password/enter-password.module.ts": function srcAppMyPagesEnterPasswordEnterPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnterPasswordPageModule", function () {
      return EnterPasswordPageModule;
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


    var _enter_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./enter-password-routing.module */
    "./src/app/myPages/enter-password/enter-password-routing.module.ts");
    /* harmony import */


    var _enter_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./enter-password.page */
    "./src/app/myPages/enter-password/enter-password.page.ts");

    var EnterPasswordPageModule = function EnterPasswordPageModule() {
      _classCallCheck(this, EnterPasswordPageModule);
    };

    EnterPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _enter_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnterPasswordPageRoutingModule"]],
      declarations: [_enter_password_page__WEBPACK_IMPORTED_MODULE_6__["EnterPasswordPage"]]
    })], EnterPasswordPageModule);
    /***/
  },

  /***/
  "./src/app/myPages/enter-password/enter-password.page.scss": function srcAppMyPagesEnterPasswordEnterPasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215UGFnZXMvZW50ZXItcGFzc3dvcmQvZW50ZXItcGFzc3dvcmQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/myPages/enter-password/enter-password.page.ts": function srcAppMyPagesEnterPasswordEnterPasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnterPasswordPage", function () {
      return EnterPasswordPage;
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


    var src_app_data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/qr-scanner/ngx */
    "./node_modules/@ionic-native/qr-scanner/ngx/index.js");

    var EnterPasswordPage = /*#__PURE__*/function () {
      function EnterPasswordPage(route, http, settings, nav, alert, loading, qr, router, platform) {
        var _this = this;

        _classCallCheck(this, EnterPasswordPage);

        this.route = route;
        this.http = http;
        this.settings = settings;
        this.nav = nav;
        this.alert = alert;
        this.loading = loading;
        this.qr = qr;
        this.router = router;
        this.platform = platform;
        this.array = [];
        this.nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0];
        this.count = "1";
        this.code = "";
        this.qrScan = "";
        this.dropdownFlag = false;
        this.route.params.subscribe(function (res) {
          console.log("response for points is: ", res);
          _this.array = Array(Number(res.points)).fill(0).map(function (val, index) {
            return index + 1;
          });
          console.log("givenPoint is: ", res.points);
          _this.givenPoint = res.points;
          _this.allPoints = res.allPoints;
        });
        this.platform.backButton.subscribeWithPriority(0, function () {
          document.getElementsByTagName("body")[0].style.opacity = "1";

          _this.qrScan.unsubscribe();
        });
        console.log("givenPoint is: ", "https://luxefragrancebar.com/wp-admin/admin-ajax.php?action=eg_add_available_points&ref_id=" + btoa(this.settings.customer.id) + "&eg_points=" + 50);
      }

      _createClass(EnterPasswordPage, [{
        key: "custom",
        value: function custom() {
          console.log("count", this.count);

          if (this.count == "0") {
            console.log("count", this.count);
            this.count = "";
            this.dropdownFlag = true;
          }
        }
      }, {
        key: "remove",
        value: function remove() {
          console.log("sdsds");
          this.dropdownFlag = false;
        }
      }, {
        key: "checking",
        value: function checking() {
          console.log(this.array.length);

          if (Number(this.count) > this.array.length) {
            alert("You have not enough points");
            this.count = "0";
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "clicked",
        value: function clicked(val) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var loader, pointsToGive;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(this.code.length < 4 && val != "")) {
                      _context3.next = 11;
                      break;
                    }

                    this.code = this.code + val;
                    console.log("code is: ", this.code);

                    if (!(this.code.length == 4)) {
                      _context3.next = 11;
                      break;
                    }

                    _context3.next = 6;
                    return this.loading.create({
                      spinner: "circles"
                    });

                  case 6:
                    loader = _context3.sent;
                    loader.present();
                    console.log("this.count", this.count);

                    if (this.count > this.givenPoint) {
                      pointsToGive = parseInt(this.count) + 100 - this.givenPoint;
                      pointsToGive = pointsToGive + parseInt(this.allPoints);
                      console.log("here to give", pointsToGive); // return;

                      this.http.get("https://luxefragrancebar.com/wp-admin/admin-ajax.php?action=eg_add_available_points&ref_id=" + btoa(this.settings.customer.id) + "&eg_points=" + pointsToGive.toString()).subscribe(function (resss) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  console.log("Point are updated: ", resss);

                                case 1:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));
                      });
                    }

                    this.http.get("https://luxefragrancebar.com/wp-admin/admin-ajax.php?action=eg_validate_points&ref_id=" + btoa(this.settings.customer.id) + "&validate_points=" + this.count.toString() + "&pincode=" + this.code).subscribe(function (res) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var _alert, _alert2;

                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                console.log("response for validate points is: ", res);
                                loader.dismiss();

                                if (!(res.message == "Invalid Pincode")) {
                                  _context2.next = 9;
                                  break;
                                }

                                _context2.next = 5;
                                return this.alert.create({
                                  header: "Invalid Pincode",
                                  message: "You entered the invalid pin code.",
                                  buttons: [{
                                    text: "OK",
                                    role: "OK"
                                  }]
                                });

                              case 5:
                                _alert = _context2.sent;

                                _alert.present();

                                _context2.next = 14;
                                break;

                              case 9:
                                if (!(res.message == "Valid points added successfully.")) {
                                  _context2.next = 14;
                                  break;
                                }

                                _context2.next = 12;
                                return this.alert.create({
                                  header: "Points validated",
                                  message: "You have successfully validated the points.",
                                  buttons: [{
                                    text: "OK",
                                    role: "OK"
                                  }]
                                });

                              case 12:
                                _alert2 = _context2.sent;

                                _alert2.present();

                              case 14:
                                this.nav.navigateBack("member-points");

                              case 15:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    });

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "backspace",
        value: function backspace() {
          if (this.code.length > 0) {
            this.code = this.code.substring(0, this.code.length - 1);
            console.log("spliced");
          }
        }
      }, {
        key: "QRScanned",
        value: function QRScanned() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.qr.prepare().then(function (status) {
                      if (status.authorized) {
                        _this3.qr.show();

                        document.getElementsByTagName("body")[0].style.opacity = "0";
                        _this3.qrScan = _this3.qr.scan().subscribe(function (textFound) {
                          console.log("text Found", textFound);
                          document.getElementsByTagName("body")[0].style.opacity = "1";

                          _this3.qrScan.unsubscribe();

                          console.log(textFound);

                          _this3.presentLoader();

                          console.log("selected points", _this3.count);
                          console.log("Available points", _this3.givenPoint);

                          if (_this3.count > _this3.givenPoint) {
                            var pointsToGive = parseInt(_this3.count) + 100 - _this3.givenPoint;

                            pointsToGive = pointsToGive + parseInt(_this3.allPoints);
                            console.log("here to give", pointsToGive); // return;

                            _this3.http.get("https://luxefragrancebar.com/wp-admin/admin-ajax.php?action=eg_add_available_points&ref_id=" + btoa(_this3.settings.customer.id) + "&eg_points=" + pointsToGive.toString()).subscribe(function (resss) {
                              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                  while (1) {
                                    switch (_context4.prev = _context4.next) {
                                      case 0:
                                        console.log("Point are updated: ", resss);

                                      case 1:
                                      case "end":
                                        return _context4.stop();
                                    }
                                  }
                                }, _callee4);
                              }));
                            });
                          }

                          console.log("url is: ", "https://luxefragrancebar.com/wp-admin/admin-ajax.php?action=eg_validate_points&ref_id=" + btoa(_this3.settings.customer.id) + "&validate_points=" + _this3.count.toString() + "&pincode=" + textFound);

                          _this3.http.get("https://luxefragrancebar.com/wp-admin/admin-ajax.php?action=eg_validate_points&ref_id=" + btoa(_this3.settings.customer.id) + "&validate_points=" + _this3.count.toString() + "&pincode=" + textFound).subscribe(function (res) {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                              var _alert3, _alert4;

                              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                while (1) {
                                  switch (_context5.prev = _context5.next) {
                                    case 0:
                                      console.log("response for validate points is: ", res);
                                      this.dismissLoader();

                                      if (!(res.message == "Invalid Pincode")) {
                                        _context5.next = 9;
                                        break;
                                      }

                                      _context5.next = 5;
                                      return this.alert.create({
                                        header: "Invalid Pincode",
                                        message: "You entered the invalid pin code.",
                                        buttons: [{
                                          text: "OK",
                                          role: "OK"
                                        }]
                                      });

                                    case 5:
                                      _alert3 = _context5.sent;

                                      _alert3.present();

                                      _context5.next = 14;
                                      break;

                                    case 9:
                                      if (!(res.message == "Valid points added successfully.")) {
                                        _context5.next = 14;
                                        break;
                                      }

                                      _context5.next = 12;
                                      return this.alert.create({
                                        header: "Points validated",
                                        message: "You have successfully validated the points.",
                                        buttons: [{
                                          text: "OK",
                                          role: "OK"
                                        }]
                                      });

                                    case 12:
                                      _alert4 = _context5.sent;

                                      _alert4.present();

                                    case 14:
                                      this.nav.navigateBack("member-points");

                                    case 15:
                                    case "end":
                                      return _context5.stop();
                                  }
                                }
                              }, _callee5, this);
                            }));
                          });
                        }, function (err) {
                          console.log(JSON.stringify(err));
                        });
                      } else if (status.denied) {} else {}
                    });

                  case 1:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "presentLoader",
        value: function presentLoader() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.loading.create({
                      spinner: "circles"
                    });

                  case 2:
                    this.loader = _context7.sent;
                    this.loader.present();

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "dismissLoader",
        value: function dismissLoader() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.loader.dismiss();

                  case 1:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return EnterPasswordPage;
    }();

    EnterPasswordPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: src_app_data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__["QRScanner"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }];
    };

    EnterPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-enter-password",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./enter-password.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/myPages/enter-password/enter-password.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./enter-password.page.scss */
      "./src/app/myPages/enter-password/enter-password.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], src_app_data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__["QRScanner"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], EnterPasswordPage);
    /***/
  }
}]);
//# sourceMappingURL=myPages-enter-password-enter-password-module-es5.js.map