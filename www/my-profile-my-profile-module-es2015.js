(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-profile-my-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"\">Luxe Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadQuestions($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"spinner\" *ngIf=\"loading\"><ion-spinner> </ion-spinner></div>\n  <!-- <ion-item *ngIf=\"!loading\" style=\"margin-bottom: 4px\" class=\"ion-activatable\">\n    <ion-label style=\"padding: 12px 2px\"> Show response to public </ion-label>\n    <ion-toggle\n      (ionChange)=\"toggle($event)\"\n      checked=\"showAnswers=='Yes'\"\n      id=\"themeToggle\"\n      slot=\"end\"\n    ></ion-toggle>\n  </ion-item> -->\n  <ion-item *ngIf=\"!loading\" style=\"margin-bottom: 4px\" class=\"ion-activatable\">\n    <ion-label> Share </ion-label>\n    <ion-icon\n      style=\"color: white\"\n      (click)=\"share()\"\n      name=\"share-social\"\n    ></ion-icon>\n  </ion-item>\n\n  <ion-grid>\n    <!-- <ion-row\n      style=\"\n        border-bottom: 1px white solid;\n        background: #000000;\n        font-size: 13px;\n        margin-bottom: 4px;\n      \"\n      *ngFor=\"let some of api.couponCode; let i = index;\"\n    >\n      <ion-col style=\"text-align: center\" size=\"4\" size-sm>\n        <img [src]=\"some.eg_thumbnail\" alt=\"\" />\n      </ion-col>\n      <ion-col size=\"8\" size-sm style=\"text-align: left\">\n        <p>{{some.eg_title}}</p>\n        <p [innerHTML]=\"some.eg_description\"></p>\n      </ion-col>\n    </ion-row> -->\n    <ion-row\n      style=\"\n        border-bottom: 1px white solid;\n        background: #000000;\n        font-size: 13px;\n        margin-bottom: 4px;\n        display: grid;\n      \"\n      *ngFor=\"let some of api.questionAnswerList; let i = index;\"\n    >\n      <ion-col style=\"text-align: left\" size=\"12\" size-sm>\n        {{i + 1}} ). {{some.title}}\n      </ion-col>\n      <ion-col style=\"text-align: left\" size=\"12\" size-sm>\n        <!-- <ion-textarea\n          style=\"width: 100%; min-height: 100px\"\n          placeholder=\"Enter your anwser here...\"\n          [(ngModel)]=\"some.answer\"\n        ></ion-textarea> -->\n        <ion-input\n          class=\"input_border\"\n          required\n          type=\"text\"\n          [(ngModel)]=\"some.answer\"\n          placeholder=\"Enter your anwser here...\"\n        ></ion-input>\n      </ion-col>\n      <ion-col\n        (click)=\"showPopup(i)\"\n        style=\"text-align: left; display: grid\"\n        size=\"12\"\n        size-sm\n      >\n        <span\n          style=\"\n            font-size: 12px;\n            padding-top: 3px;\n            padding-bottom: 6px;\n            display: grid;\n            justify-content: start;\n            grid-template-columns: 7% 93%;\n          \"\n        >\n          <ion-icon\n            style=\"background: #e342e6; padding: 3px; border-radius: 5px\"\n            class=\"ios-contact ion-margin-end\"\n            slot=\"start\"\n            name=\"download\"\n            mode=\"md\"\n            slot=\"start\"\n          ></ion-icon\n          >Attach Image\n        </span>\n        <span\n          *ngIf=\"some.picture_url==''  && some.picture_base_url==''\"\n          style=\"\n            font-size: 34px;\n            background: #171616;\n            height: 100px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n          \"\n          ><ion-icon\n            style=\"\n              font-size: 34px;\n              background: #171616;\n              height: 100px;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n            \"\n            class=\"ios-contact ion-margin-end\"\n            slot=\"start\"\n            name=\"download\"\n            mode=\"md\"\n            slot=\"start\"\n          ></ion-icon\n        ></span>\n\n        <img\n          style=\"height: 230px; width: 100%\"\n          *ngIf=\"some.picture_url!=''\"\n          [src]=\"some.picture_url\"\n        />\n        <ion-img\n          style=\"height: 231px; width: 100%\"\n          *ngIf=\"some.picture_base_url!='' && some.picture_url == ''\"\n          [src]=\"some.picture_base_url\"\n        ></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-grid *ngIf=\"api.questionAnswerList.length!==0\">\n      <ion-row style=\"display: flex; justify-content: center\">\n        <button\n          style=\"\n            background: #6f6464;\n            color: white;\n            padding: 12px 30px;\n            font-size: 19px;\n            border-radius: 9px;\n            margin-top: 21px;\n            outline: none;\n          \"\n          (click)=\"answerQuestion()\"\n        >\n          save\n        </button>\n      </ion-row>\n    </ion-grid>\n  </ion-grid>\n</ion-content>\n\n<div\n  #animate\n  [hidden]=\"popupHidden\"\n  style=\"\n    height: 100%;\n    width: 100%;\n    background-color: rgb(0 0 0 / 68%);\n    position: absolute;\n  \"\n>\n  <div\n    style=\"\n      left: 10%;\n      position: absolute;\n      top: 40%;\n      width: 80%;\n      height: 160px;\n      background-color: rgb(255, 255, 255);\n      border-radius: 20px;\n    \"\n  >\n    <ion-row>\n      <ion-col\n        style=\"padding-top: 10 px; padding-right: 10px; text-align: right\"\n      >\n        <img\n          style=\"height: 10px; width: 10px; margin-right: 4px; margin-top: 8px\"\n          src=\"assets/img/close_black.svg\"\n          (click)=\"hidePopup()\"\n        />\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: -4px\">\n      <ion-col\n        (click)=\"selectImage(popupSelectedVal,'camera')\"\n        style=\"text-align: center\"\n      >\n        <img style=\"height: 50px; width: 50px\" src=\"assets/img/camera.svg\" />\n        <p>Camera</p>\n      </ion-col>\n      <ion-col\n        (click)=\"selectImage(popupSelectedVal,'gallery')\"\n        style=\"text-align: center\"\n      >\n        <img style=\"height: 50px; width: 50px\" src=\"assets/img/gallery.svg\" />\n        <p>Gallery</p>\n      </ion-col>\n    </ion-row>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/popovers/popovers.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/popovers/popovers.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>popovers works!</p>\n<button (click)=\"close()\">close</button>\n");

/***/ }),

/***/ "./src/app/my-profile/my-profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/my-profile/my-profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MyProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePageRoutingModule", function() { return MyProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _my_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-profile.page */ "./src/app/my-profile/my-profile.page.ts");




const routes = [
    {
        path: '',
        component: _my_profile_page__WEBPACK_IMPORTED_MODULE_3__["MyProfilePage"]
    }
];
let MyProfilePageRoutingModule = class MyProfilePageRoutingModule {
};
MyProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/my-profile/my-profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/my-profile/my-profile.module.ts ***!
  \*************************************************/
/*! exports provided: MyProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function() { return MyProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _popovers_popovers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popovers/popovers.component */ "./src/app/popovers/popovers.component.ts");
/* harmony import */ var _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-profile-routing.module */ "./src/app/my-profile/my-profile-routing.module.ts");
/* harmony import */ var _my_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-profile.page */ "./src/app/my-profile/my-profile.page.ts");








let MyProfilePageModule = class MyProfilePageModule {
};
MyProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["MyProfilePageRoutingModule"]],
        declarations: [_popovers_popovers_component__WEBPACK_IMPORTED_MODULE_5__["PopoversComponent"], _my_profile_page__WEBPACK_IMPORTED_MODULE_7__["MyProfilePage"]],
    })
], MyProfilePageModule);



/***/ }),

/***/ "./src/app/my-profile/my-profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/my-profile/my-profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input_border {\n  border-bottom: 2px solid #e342e6;\n}\n\n.ion_con {\n  width: 17px;\n  margin-left: 3px;\n  padding-left: 2px;\n}\n\n.popover_setting .popover-content {\n  --min-width: 600px !important;\n  --min-height: 150px !important;\n  --ion-background-color: white;\n  --ion-text-color: black;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktcHJvZmlsZS9EOlxcbHV4ZS4uLiBkZWJ1ZyA5IE9DVC9zcmNcXGFwcFxcbXktcHJvZmlsZVxcbXktcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL215LXByb2ZpbGUvbXktcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURBQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL215LXByb2ZpbGUvbXktcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXRfYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMzQyZTY7XG59XG4uaW9uX2NvbiB7XG4gIHdpZHRoOiAxN3B4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbn1cbi5wb3BvdmVyX3NldHRpbmcgLnBvcG92ZXItY29udGVudCB7XG4gIC0tbWluLXdpZHRoOiA2MDBweCAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtLWlvbi10ZXh0LWNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4iLCIuaW5wdXRfYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMzQyZTY7XG59XG5cbi5pb25fY29uIHtcbiAgd2lkdGg6IDE3cHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xufVxuXG4ucG9wb3Zlcl9zZXR0aW5nIC5wb3BvdmVyLWNvbnRlbnQge1xuICAtLW1pbi13aWR0aDogNjAwcHggIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLS1pb24tdGV4dC1jb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/my-profile/my-profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/my-profile/my-profile.page.ts ***!
  \***********************************************/
/*! exports provided: MyProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePage", function() { return MyProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _popovers_popovers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popovers/popovers.component */ "./src/app/popovers/popovers.component.ts");








let MyProfilePage = class MyProfilePage {
    constructor(api, settings, toast, loadingController, camera, animationCtrl, popoverController, socialSharing) {
        this.api = api;
        this.settings = settings;
        this.toast = toast;
        this.loadingController = loadingController;
        this.camera = camera;
        this.animationCtrl = animationCtrl;
        this.popoverController = popoverController;
        this.socialSharing = socialSharing;
        this.loading = true;
        this.popupHidden = true;
        this.showAnswers = "No";
    }
    share(toShare) {
        let msg = "";
        console.log("to share", toShare);
        this.api.questionAnswerList.map((list, i) => {
            console.log("list", i);
            console.log("list detaiks", list.title);
            msg +=
                "Question: " +
                    list.title +
                    "\n Answer  :  " +
                    list.description +
                    "\n Picture  :  " +
                    list.picture_url;
        });
        console.log("to share msg", msg);
        const options = {
            message: `${msg}`,
        };
        this.socialSharing.shareWithOptions(options).then((res) => {
            console.log(res, ":sharing result");
        }, (err) => {
            console.log(err);
        });
    }
    toggle(events) {
        console.log("events   444", events.detail.checked);
        if (events.detail.checked == false) {
            this.showAnswers = "No";
        }
        else {
            this.showAnswers = "Yes";
        }
        console.log("this.showAnswers---", this.showAnswers);
    }
    ngOnInit() {
        this.loadQuestions();
    }
    settingsPopover(ev, desc) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _popovers_popovers_component__WEBPACK_IMPORTED_MODULE_7__["PopoversComponent"],
                event: ev,
                cssClass: "popover_setting",
                componentProps: {
                    description: desc,
                },
                translucent: true,
            });
            yield popover.present();
            popover.onDidDismiss().then((result) => {
                console.log(result);
            });
            return yield popover.present();
            /** Sync event from popover component */
        });
    }
    loadQuestions(event) {
        this.api.questionList = [];
        this.api.questionAnswerList = [];
        console.log("user id is: ", this.settings.customer.id, btoa(this.settings.customer.id));
        this.api
            .getPosts("wp-admin/admin-ajax.php?action=eg_get_questions")
            .then((res) => {
            const values = Object.values(res);
            console.log("res", res);
            this.api.questionList = [];
            values.map((questions, i) => {
                this.api.questionList.push({
                    question_id: i + 1,
                    title: questions.title,
                    description: questions.description,
                    answer: "",
                    picture_url: "",
                    picture_base_url: "",
                    sort: questions.sort,
                });
            });
            //// for getting answer
            this.api
                .getPosts("wp-admin/admin-ajax.php?action=eg_get_answers&user_id=" +
                this.settings.customer.id)
                // .getPosts(
                //   "wp-admin/admin-ajax.php?action=eg_get_answers&user_id=" + 1720
                // )
                .then((res) => {
                this.anwsersDetails = res;
                console.log("this.api.questionList data else", this.api.questionList);
                console.log("New user answer: ", this.anwsersDetails.status);
                this.anwsersDetails = Object.values(this.anwsersDetails.data);
                console.log("All anwsers after conversion to array: ", this.anwsersDetails);
                console.log("typeof this.anwsersDetails.data", typeof this.anwsersDetails);
                this.api.questionAnswerList = this.api.questionList.map((item, i) => Object.assign({}, item, this.anwsersDetails[i]));
                console.log("sdsdsdsd", this.api.questionAnswerList.sort((a, b) => a.sort - b.sort));
                if (event) {
                    event.target.complete();
                }
                this.loading = false;
            })
                .catch((error) => {
                this.api.questionAnswerList = this.api.questionList;
                this.loading = false;
                console.log("error eg_get_answer is: ", error);
            });
        })
            .catch((error) => {
            this.loading = false;
            console.log("error eg_get_questions is: ", error);
        });
    }
    answerQuestion() {
        this.presentLoader("Sending response...");
        console.log("final answers array", this.api.questionList);
        this.dataToSend = [];
        this.api.questionAnswerList.map((questions, i) => {
            this.dataToSend.push({
                eg_questions_id: questions.question_id,
                answer: questions.answer,
                picture: questions.picture_base_url,
            });
        });
        const dataArrayToSend = {
            user_id: this.settings.customer.id,
            questions: this.dataToSend,
            show_answers: "Yes",
        };
        const jsonDataTosend = JSON.stringify(dataArrayToSend);
        console.log("dataToSend answers array", dataArrayToSend);
        console.log("jsonDataTosend", jsonDataTosend);
        this.sendResponse(jsonDataTosend);
    }
    sendResponse(data) {
        this.api
            .postAnwser(data)
            .then((res) => {
            console.log("Success sendResponse is: ", res);
            this.sendResponseMsg = res;
            this.presentToast(this.sendResponseMsg.message);
            this.dismiss();
        })
            .catch((error) => {
            console.log("error sendResponse is: ", error);
            this.dismiss();
        });
    }
    selectImage(index, condition) {
        this.hidePopup();
        if (condition == "camera") {
            this.options = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
            };
        }
        else {
            this.options = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            };
        }
        this.camera.getPicture(this.options).then((imageData) => {
            let base64Image = `data:image/jpeg;base64,${imageData}`;
            this.api.questionAnswerList[index].picture_base_url = base64Image;
            this.api.questionAnswerList[index].picture_url = "";
            console.log("base64Image", base64Image);
            console.log("questionAnswerList with this index" + index, this.api.questionAnswerList[index]);
        }, (err) => {
            // Handle error
        });
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: message,
                duration: 2000,
            });
            toast.present();
        });
    }
    presentLoader(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadingCon = yield this.loadingController.create({
                cssClass: "ionloading",
                message,
            });
            yield this.loadingCon.present();
        });
    }
    dismiss() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.loadingCon.dismiss();
        });
    }
    showPopup(val) {
        this.popupHidden = false;
        console.log(val);
        this.popupSelectedVal = val;
    }
    hidePopup() {
        this.popupHidden = true;
    }
    galerySelected() {
        alert("sdsd");
    }
};
MyProfilePage.ctorParameters = () => [
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AnimationController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_1__["SocialSharing"] }
];
MyProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-my-profile",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-profile.page.scss */ "./src/app/my-profile/my-profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        src_app_data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AnimationController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_1__["SocialSharing"]])
], MyProfilePage);



/***/ }),

/***/ "./src/app/popovers/popovers.component.scss":
/*!**************************************************!*\
  !*** ./src/app/popovers/popovers.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcG92ZXJzL3BvcG92ZXJzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/popovers/popovers.component.ts":
/*!************************************************!*\
  !*** ./src/app/popovers/popovers.component.ts ***!
  \************************************************/
/*! exports provided: PopoversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoversComponent", function() { return PopoversComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let PopoversComponent = class PopoversComponent {
    constructor(popoverController, navParams) {
        this.popoverController = popoverController;
        this.navParams = navParams;
    }
    ngOnInit() {
        this.description = this.navParams.get("description");
        console.log(this.description);
    }
    close() {
        // code for setting wifi option in apps
        this.popoverController.dismiss();
    }
};
PopoversComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
PopoversComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-popovers",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popovers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/popovers/popovers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popovers.component.scss */ "./src/app/popovers/popovers.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
], PopoversComponent);



/***/ })

}]);
//# sourceMappingURL=my-profile-my-profile-module-es2015.js.map