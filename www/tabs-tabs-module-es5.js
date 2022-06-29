function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html": function node_modulesRawLoaderDistCjsJsSrcAppAccountAccountPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>{{\"Account\" | translate}}</ion-title>\n  </ion-toolbar>\n  <!--ion-grid class=\"my-account-header\">\n        <ion-row>\n            <ion-col>\n                <ion-item color=\"transperant\" lines=\"none\">\n                    <ion-icon class=\"icon-header-icon ion-margin-end\" name=\"person\" slot=\"start\"></ion-icon>\n                    <ion-label class=\"account-name\">{{\"Account\" | translate}}</ion-label>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"header-menus\" justify-content-between=\"\">\n            <ion-col>\n                <ion-item color=\"transperant\" lines=\"none\" (click)=\"goTo('tabs/account/wishlist')\" *ngIf=\"settings.customer?.id\" class=\"ion-activatable\">\n                    <ion-icon class=\"ion-margin-end\" name=\"heart\" slot=\"start\"></ion-icon>\n                    <ion-label>{{\"Wishlist\" | translate}}</ion-label>\n                </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item color=\"transperant\" lines=\"none\" (click)=\"goTo('tabs/account/wallet')\" *ngIf=\"settings.customer?.id && settings.settings?.enable_wallet\" class=\"ion-activatable\">\n                    <ion-icon class=\"ion-margin-end\" name=\"wallet\" slot=\"start\"></ion-icon>\n                    <ion-label>{{\"Wallet\" | translate}}</ion-label>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-grid-->\n</ion-header>\n<ion-content>\n  <!--ion-header mode=\"ios\" collapse=\"condense\">              \n        <ion-toolbar>      \n          <ion-title size=\"large\">{{\"Account\" | translate}}</ion-title>\n        </ion-toolbar>\n      </ion-header-->\n\n  <ion-list>\n    <ion-item\n      (click)=\"goTo('tabs/account/wallet')\"\n      *ngIf=\"settings.customer?.id && settings.settings?.enable_wallet\"\n      detail=\"true\"\n      lines=\"inset\"\n      class=\"ion-activatable\"\n    >\n      <ion-icon\n        style=\"background-color: var(--ion-color-danger, #eb445a); color: white\"\n        class=\"icon-start ion-margin-end\"\n        name=\"wallet\"\n        mode=\"md\"\n        slot=\"start\"\n      ></ion-icon>\n      <ion-label>{{\"Wallet\" | translate}}</ion-label>\n    </ion-item>\n\n    <ion-item\n      (click)=\"goTo('tabs/account/wishlist')\"\n      *ngIf=\"settings.customer?.id\"\n      detail=\"true\"\n      lines=\"inset\"\n      class=\"ion-activatable\"\n    >\n      <ion-icon\n        style=\"\n          background-color: var(--ion-color-success, #2dd36f);\n          color: white;\n        \"\n        class=\"icon-start ion-margin-end\"\n        name=\"heart\"\n        slot=\"start\"\n      ></ion-icon>\n      <ion-label>{{\"Wishlist\" | translate}}</ion-label>\n    </ion-item>\n\n    <ion-item\n      (click)=\"login()\"\n      detail=\"true\"\n      lines=\"inset\"\n      *ngIf=\"!settings.customer?.id\"\n      class=\"ion-activatable\"\n    >\n      <ion-icon\n        style=\"background-color: var(--ion-color-danger, #eb445a); color: white\"\n        class=\"icon-start ion-margin-end\"\n        name=\"log-in\"\n        mode=\"md\"\n        slot=\"start\"\n      ></ion-icon>\n      <ion-label>{{\"Login\" | translate}}</ion-label>\n    </ion-item>\n    <ion-item\n      (click)=\"goTo('tabs/account/register')\"\n      detail=\"true\"\n      lines=\"inset\"\n      *ngIf=\"!settings.customer?.id\"\n      class=\"ion-activatable\"\n    >\n      <ion-icon\n        style=\"\n          background-color: var(--ion-color-success, #2dd36f);\n          color: white;\n        \"\n        class=\"icon-start ion-margin-end\"\n        name=\"person\"\n        slot=\"start\"\n      ></ion-icon>\n      <ion-label>{{\"Register\" | translate}}</ion-label>\n    </ion-item>\n    <ion-item\n      (click)=\"goTo('tabs/account/points')\"\n      detail=\"true\"\n      lines=\"inset\"\n      *ngIf=\"settings.reward\"\n      class=\"ion-activatable\"\n    >\n      <ion-icon\n        style=\"background-color: var(--ion-color-danger, #eb445a); color: white\"\n        class=\"icon-start ion-margin-end\"\n        name=\"card\"\n        slot=\"start\"\n      ></ion-icon>\n      <ion-label>{{\"Points\" | translate}}</ion-label>\n    </ion-item>\n    <ion-item\n      (click)=\"goTo('tabs/account/address')\"\n      detail=\"true\"\n      lines=\"inset\"\n      *ngIf=\"settings.customer?.id\"\n      class=\"ion-activatable\"\n    >\n      <ion-icon\n        style=\"\n          background-color: var(--ion-color-secondary, #3dc2ff);\n          color: white;\n        \"\n        class=\"icon-start ion-margin-end\"\n        name=\"location\"\n        slot=\"start\"\n      ></ion-icon>\n      <ion-label>{{\"Address\" | translate}}</ion-label>\n    </ion-item>\n    <ion-item\n      (click)=\"goTo('tabs/account/orders')\"\n      detail=\"true\"\n      lines=\"inset\"\n      *ngIf=\"settings.customer?.id\"\n      class=\"ion-activatable\"\n    >\n      <ion-icon\n        style=\"background-color: var(--ion-color-danger, #eb445a); color: white\"\n        class=\"icon-start ion-margin-end\"\n        name=\"document\"\n        slot=\"start\"\n      ></ion-icon>\n      <ion-label>{{\"Orders\" | translate}}</ion-label>\n    </ion-item>\n    <ion-item\n      lines=\"inset\"\n      class=\"ion-activatable\"\n      href=\"https://wa.me/{{settings.settings?.whatsapp_number}}\"\n      detail=\"true\"\n    >\n      <ion-icon\n        style=\"\n          background-color: var(--ion-color-success, #2dd36f);\n          color: white;\n        \"\n        class=\"icon-start ion-margin-end\"\n        name=\"logo-whatsapp\"\n        slot=\"start\"\n      ></ion-icon>\n      <ion-label>{{\"Whatsapp us\" | translate}}</ion-label>\n    </ion-item>\n    <ion-item\n      (click)=\"email(settings?.settings?.support_email)\"\n      detail=\"true\"\n      *ngIf=\"settings?.settings?.support_email\"\n      lines=\"inset\"\n      class=\"ion-activatable\"\n    >\n      <ion-icon\n        style=\"\n          background-color: var(--ion-color-secondary, #3dc2ff);\n          color: white;\n        \"\n        class=\"icon-start ion-margin-end\"\n        name=\"mail\"\n        slot=\"start\"\n      ></ion-icon>\n      <ion-label>{{\"Email us\" | translate}}</ion-label>\n    </ion-item>\n\n    <ion-item\n      lines=\"inset\"\n      (click)=\"goTo('tabs/account/map')\"\n      detail=\"true\"\n      class=\"ion-activatable\"\n      *ngIf=\"settings.settings?.switchLocations\"\n    >\n      <ion-icon\n        style=\"background-color: var(--ion-color-danger, #eb445a); color: white\"\n        class=\"icon-start ion-margin-end\"\n        name=\"compass\"\n        slot=\"start\"\n      ></ion-icon>\n      <ion-label>{{\"Locations\" | translate}}</ion-label>\n    </ion-item>\n    <ion-item\n      lines=\"inset\"\n      class=\"ion-activatable\"\n      detail=\"true\"\n      (click)=\"shareApp()\"\n    >\n      <ion-icon\n        style=\"\n          background-color: var(--ion-color-secondary, #3dc2ff);\n          color: white;\n        \"\n        class=\"icon-start ion-margin-end\"\n        name=\"share\"\n        slot=\"start\"\n      ></ion-icon>\n      <ion-label>{{\"Invite Friends\" | translate}}</ion-label>\n    </ion-item>\n    <ion-item\n      lines=\"inset\"\n      class=\"ion-activatable\"\n      detail=\"true\"\n      (click)=\"rateApp()\"\n    >\n      <ion-icon\n        style=\"background-color: var(--ion-color-danger, #428xff); color: white\"\n        class=\"icon-start ion-margin-end\"\n        name=\"star\"\n        slot=\"start\"\n      ></ion-icon>\n      <ion-label>{{\"Rate us\" | translate}}</ion-label>\n    </ion-item>\n    <ion-item\n      lines=\"inset\"\n      *ngIf=\"settings.settings?.show_blog\"\n      (click)=\"goTo('tabs/account/blogs')\"\n      detail=\"true\"\n      lines=\"inset\"\n      class=\"ion-activatable\"\n    >\n      <ion-icon\n        style=\"\n          background-color: var(--ion-color-primary, #428xff);\n          color: white;\n        \"\n        class=\"icon-start ion-margin-end\"\n        name=\"document\"\n        slot=\"start\"\n      ></ion-icon>\n      <ion-label>{{\"Blog\" | translate}}</ion-label>\n    </ion-item>\n    <ion-item\n      *ngIf=\"settings.languages?.length\"\n      detail=\"true\"\n      lines=\"inset\"\n      (click)=\"goTo('tabs/account/setting')\"\n      lines=\"inset\"\n      class=\"ion-activatable\"\n    >\n      <ion-icon\n        style=\"background-color: var(--ion-color-danger, #eb445a); color: white\"\n        class=\"icon-start ion-margin-end\"\n        name=\"globe\"\n        slot=\"start\"\n      ></ion-icon>\n      <ion-label>{{\"Language\" | translate}}</ion-label>\n    </ion-item>\n\n    <ion-item\n      *ngIf=\"settings.currencies?.length\"\n      detail=\"true\"\n      lines=\"inset\"\n      (click)=\"goTo('tabs/account/currencies')\"\n      lines=\"inset\"\n      class=\"ion-activatable\"\n    >\n      <ion-icon\n        style=\"\n          background-color: var(--ion-color-secondary, #3dc2ff);\n          color: white;\n        \"\n        class=\"icon-start ion-margin-end\"\n        name=\"logo-usd\"\n        slot=\"start\"\n      ></ion-icon>\n      <ion-label>{{\"Currency\" | translate}}</ion-label>\n    </ion-item>\n\n    <ion-item\n      *ngFor=\"let page of settings.pages\"\n      lines=\"inset\"\n      [hidden]=\"!page.url\"\n      (click)=\"goTo('/tabs/account/post/'+page.url)\"\n      detail=\"true\"\n      lines=\"inset\"\n      class=\"ion-activatable\"\n    >\n      <ion-icon\n        style=\"\n          background-color: var(--ion-color-secondary, #428xff);\n          color: white;\n        \"\n        class=\"icon-start ion-margin-end\"\n        name=\"document\"\n        slot=\"start\"\n      ></ion-icon>\n      <ion-label>{{page.title}}</ion-label>\n    </ion-item>\n\n    <ion-item\n      detail=\"true\"\n      lines=\"inset\"\n      class=\"ion-activatable\"\n      *ngIf=\"settings.customer?.id\"\n      (click)=\"memberPoints()\"\n    >\n      <ion-icon\n        style=\"background-color: var(--ion-color-danger, #eb445a); color: white\"\n        class=\"icon-start ion-margin-end\"\n        name=\"star\"\n        mode=\"md\"\n        slot=\"start\"\n      ></ion-icon>\n      <ion-label>{{\"Member's Points\" | translate}}</ion-label>\n    </ion-item>\n\n    <ion-item\n      detail=\"true\"\n      lines=\"inset\"\n      class=\"ion-activatable\"\n      (click)=\"log_out()\"\n      *ngIf=\"settings.customer?.id\"\n    >\n      <ion-icon\n        style=\"background-color: var(--ion-color-danger, #eb445a); color: white\"\n        class=\"icon-start ion-margin-end\"\n        name=\"log-out\"\n        mode=\"md\"\n        slot=\"start\"\n      ></ion-icon>\n      <ion-label>{{\"Logout\" | translate}}</ion-label>\n    </ion-item>\n\n    <ion-item class=\"ion-activatable\">\n      <ion-icon\n        style=\"\n          background-color: var(--ion-color-primary, #428xff);\n          color: white;\n        \"\n        class=\"icon-start ion-margin-end\"\n        slot=\"start\"\n        name=\"moon\"\n        mode=\"md\"\n        slot=\"start\"\n      ></ion-icon>\n      <ion-label> {{\"Dark Theme\" | translate}} </ion-label>\n      <ion-toggle id=\"themeToggle\" slot=\"end\"></ion-toggle>\n    </ion-item>\n\n    <ion-item class=\"ion-activatable\" (click)=\"getposts()\">\n      <ion-icon\n        style=\"\n          background-color: var(--ion-color-primary, #428xff);\n          color: white;\n        \"\n        class=\"icon-start ion-margin-end\"\n        slot=\"start\"\n        name=\"download\"\n        mode=\"md\"\n        slot=\"start\"\n      ></ion-icon>\n      <ion-label> {{\"PDF Files Downloads\" | translate}} </ion-label>\n    </ion-item>\n    <ion-item class=\"ion-activatable\" (click)=\"getCoupon()\">\n      <ion-icon\n        style=\"\n          background-color: var(--ion-color-primary, #428xff);\n          color: white;\n        \"\n        class=\"icon-start ion-margin-end\"\n        slot=\"start\"\n        name=\"download\"\n        mode=\"md\"\n        slot=\"start\"\n      ></ion-icon>\n      <ion-label> {{\"Coupon Codes\" | translate}} </ion-label>\n    </ion-item>\n    <!-- <ion-item class=\"ion-activatable\" (click)=\"getOpinions()\">\n      <ion-icon\n        style=\"\n          background-color: var(--ion-color-primary, #428xff);\n          color: white;\n        \"\n        class=\"icon-start ion-margin-end\"\n        slot=\"start\"\n        name=\"download\"\n        mode=\"md\"\n        slot=\"start\"\n      ></ion-icon>\n      <ion-label> {{\"Public Opinions\" | translate}} </ion-label>\n    </ion-item> -->\n    <ion-item\n      *ngIf=\"settings.customer?.id\"\n      class=\"ion-activatable\"\n      (click)=\"getMyProfile()\"\n    >\n      <ion-icon\n        style=\"\n          background-color: var(--ion-color-primary, #428xff);\n          color: white;\n        \"\n        class=\"ios-contact ion-margin-end\"\n        slot=\"start\"\n        name=\"download\"\n        mode=\"md\"\n        slot=\"start\"\n      ></ion-icon>\n      <ion-label> {{\"My Luxe Profile\" | translate}} </ion-label>\n    </ion-item>\n  </ion-list>\n  <br />\n\n  <div *ngIf=\"settings.vendor || settings.administrator\">\n    <ion-list>\n      <ion-list-header>\n        <ion-label>{{\"Vendor\" | translate}}</ion-label>\n      </ion-list-header>\n      <ion-item\n        detail=\"true\"\n        lines=\"inset\"\n        (click)=\"goTo('tabs/account/vendor-orders')\"\n        class=\"ion-activatable\"\n      >\n        <ion-icon\n          style=\"\n            background-color: var(--ion-color-success, #2dd36f);\n            color: white;\n          \"\n          class=\"icon-start ion-margin-end\"\n          name=\"document\"\n          slot=\"start\"\n        ></ion-icon>\n        <ion-label>{{\"Orders\" | translate}}</ion-label>\n      </ion-item>\n      <ion-item\n        detail=\"true\"\n        lines=\"inset\"\n        (click)=\"goTo('tabs/account/vendor-products')\"\n        class=\"ion-activatable\"\n      >\n        <ion-icon\n          style=\"\n            background-color: var(--ion-color-danger, #eb445a);\n            color: white;\n          \"\n          class=\"icon-start ion-margin-end\"\n          name=\"document\"\n          slot=\"start\"\n        ></ion-icon>\n        <ion-label>{{\"Products\" | translate}}</ion-label>\n      </ion-item>\n      <ion-item\n        detail=\"true\"\n        lines=\"inset\"\n        (click)=\"goTo('tabs/account/add-products')\"\n        class=\"ion-activatable\"\n      >\n        <ion-icon\n          style=\"\n            background-color: var(--ion-color-danger, #eb445a);\n            color: white;\n          \"\n          class=\"icon-start ion-margin-end\"\n          name=\"add-circle\"\n          slot=\"start\"\n        ></ion-icon>\n        <ion-label>{{\"Add Products\" | translate}}</ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/address/address.page.html": function node_modulesRawLoaderDistCjsJsSrcAppAccountAddressAddressPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Address\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<div *ngIf=\"settings.customer\">\n\t<ion-list-header>\n    <ion-label>{{\"Billing Address\" | translate}}</ion-label>\n  </ion-list-header>\n\n  <ion-item detail (click)=\"editAddress()\">\n    <ion-label text-wrap>\n    <p>\n    <span>{{settings.customer.billing.first_name}}</span>&nbsp;<span>{{settings.customer.billing.last_name}}</span>&nbsp;<span>{{settings.customer.billing.company}}</span>&nbsp;<span>{{settings.customer.billing.address_1}}</span>&nbsp;<span>{{settings.customer.billing.address_2}}</span>&nbsp;<span>{{settings.customer.billing.city}}</span>\n    <span>{{settings.customer.billing.state}}</span>&nbsp;<span>{{settings.customer.billing.postcode}}</span>&nbsp;<span>{{settings.customer.billing.country}}</span>\n    &nbsp;<span>{{settings.customer.billing.email}}</span>&nbsp;<span>{{settings.customer.billing.phone}}</span>\n    </p>\n    </ion-label>\n  </ion-item>\n\n  <ion-list-header>\n    <ion-label>{{\"Shipping Address\" | translate}}</ion-label>\n  </ion-list-header>\n\n  <ion-item detail (click)=\"editAddress()\">\n    <ion-label text-wrap>\n      <p>\n    <span>{{settings.customer.shipping.first_name}}</span>&nbsp;<span>{{settings.customer.shipping.last_name}}</span>&nbsp;<span>{{settings.customer.shipping.company}}</span>&nbsp;<span>{{settings.customer.shipping.address_1}}</span>&nbsp;<span>{{settings.customer.shipping.address_2}}</span>&nbsp;<span>{{settings.customer.shipping.city}}</span>&nbsp;\n    <span>{{settings.customer.shipping.state}}</span>&nbsp;<span>{{settings.customer.shipping.postcode}}</span>&nbsp;<span>{{settings.customer.shipping.country}}</span>&nbsp;\n    <span>{{settings.customer.shipping.email}}</span>&nbsp;<span>{{settings.customer.shipping.phone}}</span>\n  </p>\n    </ion-label>\n  </ion-item>\n\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/blog/blog.page.html": function node_modulesRawLoaderDistCjsJsSrcAppAccountBlogBlogPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account/blogs\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"post.post?.title?.rendered\">{{post.post.title.rendered}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"post\">\n<div class=\"spinner\" *ngIf=\"!post.post\"><ion-spinner> </ion-spinner></div>\n<div *ngIf=\"post.post\">\n<ion-card>\n  <div *ngIf=\"post.post._embedded && post.post._embedded['wp:featuredmedia'] && post.post._embedded['wp:featuredmedia'].length\">\n    <ion-img alt=\"\" src=\"{{post.post._embedded['wp:featuredmedia'][0].source_url}}\"></ion-img>\n  </div>\n  <ion-card-header>\n    <ion-card-subtitle>{{post.post.date | datepipe}}</ion-card-subtitle>\n    <ion-card-title>{{post.post.title.rendered}}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content [innerHTML]=\"post.post.content.rendered\">\n  </ion-card-content>\n</ion-card>\n</div>\n\n<div *ngFor=\"let item of comments\" class=\"comments\">\n<ion-item lines=\"none\">\n  <ion-avatar slot=\"start\">\n    <ion-img [src]=\"item.author_avatar_urls['96']\"></ion-img>\n    <!--ion-icon color=\"medium\" name=\"person\" mode=\"ios\"></ion-icon-->\n  </ion-avatar>\n  <ion-label>\n    <h2>{{item.author_name}}</h2>\n  <p>{{item.date | datepipe}}</p>\n  </ion-label>\n</ion-item>\n<ion-item><ion-label><p text-wrap [innerHTML]=\"item.content.rendered\"></p></ion-label></ion-item>\n</div>\n\n<ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && comments?.length\" (ionInfinite)=\"getMoreComments($event)\">\n  <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\"\n    loadingText=\"Loading more data...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/blogs/blogs.page.html": function node_modulesRawLoaderDistCjsJsSrcAppAccountBlogsBlogsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios' >\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Blogs\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"blogs\">\n\n<div class=\"spinner\" *ngIf=\"!posts\"><ion-spinner> </ion-spinner></div>\n\n<div *ngIf=\"posts\">\n<div *ngIf=\"posts.length == 0\" text-center class=\"empty\">\n  <ion-icon name=\"document\"></ion-icon>\n</div>\n\n\n<ion-card mode=\"{{settings.settings.mode}}\" button=\"true\" class=\"ion-activatable ion-focusable {{settings.settings.product_shadow}}\" *ngFor=\"let post of posts\" (click)=\"getDetail(post)\">\n  <div *ngIf=\"post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length\">\n    <ion-img alt=\"\" src=\"{{post._embedded['wp:featuredmedia'][0].source_url}}\"></ion-img>\n  </div>\n  <ion-card-header>\n    <ion-card-subtitle>{{post.date | datepipe}}</ion-card-subtitle>\n    <ion-card-title>{{post.title.rendered}}</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content [innerHTML]=\"post.excerpt.rendered\">\n  </ion-card-content>\n</ion-card>\n\n<ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && posts.length\" (ionInfinite)=\"loadData($event)\">\n  <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\"\n    loadingText=\"Loading more data...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n</div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/currencies/currencies.page.html": function node_modulesRawLoaderDistCjsJsSrcAppAccountCurrenciesCurrenciesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\n   <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n      <ion-title>{{\"Currency\" | translate}}</ion-title>\n   </ion-toolbar>\n</ion-header>\n<ion-content class=\"settings\">\n   <div *ngIf=\"settings.currencies.length\">\n      <ion-list >\n         <ion-radio-group [(ngModel)]=\"settings.currency\" name=\"currencies\" ngDefaultControl>\n         <ion-item *ngFor=\"let item of settings.currencies\">\n            <ion-label class=\"payment-method-title\"><span style=\"padding: 10px\">{{item.code}}</span></ion-label>\n            <ion-radio value=\"{{item.code}}\"> </ion-radio>\n         </ion-item>\n         </ion-radio-group>\n         <ion-button shape=\"undefined\" mode=\"md\" padding color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" (click)=\"applyCurrency()\" >{{\"Apply\" | translate}}</ion-button>\n      </ion-list>\n   </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/edit-address/edit-address.page.html": function node_modulesRawLoaderDistCjsJsSrcAppAccountEditAddressEditAddressPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account/address\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Edit Address\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n\t<ion-list no-margin *ngIf=\"settings.customer?.billing\">\n\n  <ion-list-header>\n    <ion-label>{{\"Billing Address\" | translate}}</ion-label>\n  </ion-list-header>\n\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"First Name\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.first_name\" name=\"firstname\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Last Name\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.last_name\" name=\"lastname\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Phone\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.phone\" name=\"telephone\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Company\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.company\" name=\"company\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.address_1\" name=\"address_1\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}} 2</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.address_2\" name=\"address_2\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Email\" | translate}}</ion-label>\n            <ion-input required type=\"email\" [(ngModel)]=\"settings.customer.billing.email\" name=\"email\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"City\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.city\" name=\"city\"> </ion-input>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Postcode\" | translate}}</ion-label>\n            <ion-input required type=\"number\" [(ngModel)]=\"settings.customer.billing.postcode\" name=\"postcode\"> </ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"countries && countries.length > 1\">\n            <ion-label>{{\"Country\" | translate}}</ion-label>\n            <ion-select [(ngModel)]=\"settings.customer.billing.country\" (ngModelChange)=\"getBillingRegion()\" name=\"billing_country\">\n                <div *ngFor=\"let field of countries\">\n                    <ion-select-option value=\"{{field.value}}\"><span [innerHTML]=\"field.label\"></span> </ion-select-option>\n                </div>\n            </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf=\"billingStates?.regions.length\">\n            <ion-label>{{\"State\" | translate}}</ion-label>\n            <ion-select [(ngModel)]=\"settings.customer.billing.state\" name=\"billing_state\">\n                <div *ngFor=\"let field of billingStates.regions\">\n                    <ion-select-option value=\"{{field.value}}\"><span [innerHTML]=\"field.label\"></span></ion-select-option>\n                </div>\n            </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf=\"!billingStates?.regions.length\">\n            <ion-label position=\"stacked\">{{\"State\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.state\" name=\"billing_state\"> </ion-input>\n        </ion-item>\n\n\n</ion-list>\n\n\n<ion-list no-margin *ngIf=\"settings.customer?.shipping\">\n\n  <ion-list-header>\n    <ion-label>{{\"Shipping Address\" | translate}}</ion-label>\n  </ion-list-header>\n\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"First Name\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.shipping.first_name\" name=\"firstname\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Last Name\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.shipping.last_name\" name=\"lastname\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Company\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.shipping.company\" name=\"company\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.shipping.address_1\" name=\"address_1\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}} 2</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.shipping.address_2\" name=\"address_2\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"City\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.shipping.city\" name=\"city\"> </ion-input>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Postcode\" | translate}}</ion-label>\n            <ion-input required type=\"number\" [(ngModel)]=\"settings.customer.shipping.postcode\" name=\"postcode\"> </ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"countries && countries.length > 1\">\n            <ion-label>{{\"Country\" | translate}}</ion-label>\n            <ion-select [(ngModel)]=\"settings.customer.shipping.country\" (ngModelChange)=\"getShippingRegion()\" name=\"shipping_country\">\n                <div *ngFor=\"let field of countries\">\n                    <ion-select-option value=\"{{field.value}}\"><span [innerHTML]=\"field.label\"></span> </ion-select-option>\n                </div>\n            </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf=\"shippingStates?.regions.length\">\n            <ion-label>{{\"State\" | translate}}</ion-label>\n            <ion-select [(ngModel)]=\"settings.customer.shipping.state\" name=\"shipping_state\">\n                <div *ngFor=\"let field of shippingStates.regions\">\n                    <ion-select-option value=\"{{field.value}}\"><span [innerHTML]=\"field.label\"></span></ion-select-option>\n                </div>\n            </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf=\"!shippingStates?.regions.length\">\n            <ion-label position=\"stacked\">{{\"State\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.shipping.state\" name=\"shipping_state\"> </ion-input>\n        </ion-item>\n\n</ion-list>\n\n\n<ion-button *ngIf=\"settings.customer\" color=\"{{settings.theme.button}}\" expand=\"block\" (click)=\"processAddress()\" [disabled]=\"disableButton\" fill=\"solid\">{{\"Save\" | translate}}</ion-button>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/forgotten/forgotten.page.html": function node_modulesRawLoaderDistCjsJsSrcAppAccountForgottenForgottenPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\" (click)=\"close()\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Forgotten\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"forgotten\">\n<div class=\"form\">  \n<ion-list *ngIf=\"!status.status\">\n  <form [formGroup]=\"email\">\n  <ion-item lines=\"full\">\n  <ion-input required type=\"email\" formControlName=\"email\" placeholder=\"Email\"></ion-input>\n  </ion-item>\n</form>\n</ion-list>\n\n <ion-button *ngIf=\"!status.status\" color=\"{{settings.theme.button}}\" expand=\"block\" (click)=\"forgotten()\" [disabled]=\"!email.valid || disableSubmit\" fill=\"solid\">{{\"Send OTP\" | translate}}</ion-button>\n\n<ion-list *ngIf=\"status.status\">\n    <form [formGroup]=\"form\">\n  <ion-item>\n  <ion-input required type=\"number\" formControlName=\"otp\" placeholder=\"OTP\"></ion-input>\n  </ion-item>\n  <ion-item>\n  <ion-input required type=\"password\" formControlName=\"password\" placeholder=\"New Password\"></ion-input>\n  </ion-item>\n</form>\n</ion-list>\n\n <ion-button *ngIf=\"status.status\" color=\"{{settings.theme.button}}\" expand=\"block\" (click)=\"resetPassword()\" [disabled]=\"!form.valid || disableSubmit\" fill=\"solid\">{{\"Reset Password\" | translate}}</ion-button>\n\n\n <ion-item *ngIf=\"status?.status\" lines=\"none\">\n <ion-label text-center text-wrap [ngClass]=\"status.status?'success':'error'\">{{status.message}}</ion-label>\n</ion-item>\n</div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.page.html": function node_modulesRawLoaderDistCjsJsSrcAppAccountLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" (click)=\"close(false)\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Login\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <div class=\"logo-block\">\n    <ion-grid>\n      <!--ion-row class=\"ion-align-items-center\">\n      <ion-col *ngFor=\"let item of icons; let i = index\" size=\"2\" size-md=\"2\" class=\"ion-align-self-center\">\n        <ion-icon *ngIf=\"i % 2\" name=\"heart-outline\"></ion-icon>\n        <ion-icon *ngIf=\"!(i % 2)\" name=\"star-outline\"></ion-icon>\n      </ion-col>\n      </ion-row-->\n      <img class=\"logo\" src=\"assets/image/logo.png\" />\n    </ion-grid>\n  </div>\n  <ion-segment\n    scrollable=\"true\"\n    mode=\"md\"\n    color=\"warning\"\n    value=\"{{segment}}\"\n    (ionChange)=\"segmentChanged($event)\"\n  >\n    <ion-segment-button color=\"warning\" value=\"login\">\n      <ion-label>{{\"Login\"| translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button color=\"warning\" value=\"register\">\n      <ion-label>{{\"Register\"| translate}}</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <div class=\"login1\">\n    <ion-card mode=\"{{settings.settings.mode}}\">\n      <div class=\"form\" *ngIf=\"segment == 'login'\">\n        <ion-list>\n          <form [formGroup]=\"form\">\n            <ion-item mode=\"md\">\n              <ion-icon slot=\"start\" name=\"person\" mode=\"md\"></ion-icon>\n              <ion-input\n                type=\"text\"\n                formControlName=\"username\"\n                placeholder=\"{{'Email/Username' | translate}}\"\n              >\n              </ion-input>\n            </ion-item>\n            <ion-item mode=\"md\">\n              <ion-icon slot=\"start\" name=\"eye\" mode=\"md\"></ion-icon>\n              <ion-input\n                type=\"password\"\n                formControlName=\"password\"\n                placeholder=\"{{'Password' | translate}}\"\n              >\n              </ion-input>\n            </ion-item>\n          </form>\n          <!--br/>\n                <p style=\"text-align: center;\">-- OR --</p>\n              <br/>\n              <form [formGroup]=\"formSMS\">\n              <ion-item mode=\"md\">\n                <ion-input style=\"max-width: 40px;\" type=\"text\" formControlName=\"country_code\" placeholder=\"{{formSMS.value.country_code}}\"></ion-input>\n                <ion-input type=\"text\" formControlName=\"phone\" placeholder=\"{{'Mobile Number' | translate}}\"></ion-input>\n                </ion-item>\n                <ion-item mode=\"md\">\n                <ion-input type=\"number\" formControlName=\"sms\" placeholder=\"{{'SMS Code' | translate}}\"></ion-input>\n                <p slot=\"end\">{{\"Get Code\"| translate}}</p>\n              </ion-item>\n             </form-->\n        </ion-list>\n        <ion-button\n          fill=\"solid\"\n          mode=\"md\"\n          color=\"{{settings.theme.button}}\"\n          expand=\"block\"\n          [disabled]=\"disableSubmit || (!formSMS.valid && !form.valid)\"\n          (click)=\"onSubmit()\"\n          >{{\"Login\"| translate}}\n        </ion-button>\n        <!-- <p *ngIf=\"loginError\"  style=\"color:red\">Username or password is wrong.</p> -->\n        <ion-button\n          style=\"margin-top: 0px\"\n          color=\"dark\"\n          expand=\"full\"\n          fill=\"clear\"\n          (click)=\"forgotton()\"\n          >{{\"Forgot Password\"| translate}}?</ion-button\n        >\n        <div class=\"errors\" *ngIf=\"errors\">\n          <div\n            *ngFor=\"let error of errors | keys\"\n            style=\"text-align: center; padding-top: 10px\"\n          >\n            <ion-label color=\"danger\" [innerHTML]=\"error.value\"></ion-label>\n          </div>\n        </div>\n        <div>\n          <ion-row class=\"login-div\">\n            <ion-col class=\"col1\">\n              <button\n                class=\"loginBtn loginBtn--facebook\"\n                ion-button\n                outline\n                full\n                type=\"submit\"\n                text-uppercase\n                [disabled]=\"disableSubmit\"\n                (click)=\"facebookLogin()\"\n              >\n                {{\"Facebook\" | translate}}\n              </button>\n            </ion-col>\n            <ion-col class=\"col2\">\n              <button\n                ion-button\n                outline\n                full\n                type=\"submit\"\n                class=\"loginBtn loginBtn--google\"\n                text-uppercase\n                [disabled]=\"disableSubmit\"\n                (click)=\"googleLogin()\"\n              >\n                {{\"Google\" | translate}}\n              </button>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n\n      <div class=\"form\" *ngIf=\"segment == 'register'\">\n        <ion-list>\n          <form [formGroup]=\"formRegister\">\n            <ion-item mode=\"md\">\n              <ion-icon slot=\"start\" name=\"person\" mode=\"md\"></ion-icon>\n              <ion-input\n                required\n                type=\"text\"\n                formControlName=\"first_name\"\n                placeholder=\"{{'First Name' | translate}}\"\n              >\n              </ion-input>\n            </ion-item>\n            <ion-item mode=\"md\">\n              <ion-icon slot=\"start\" name=\"person\" mode=\"md\"></ion-icon>\n              <ion-input\n                required\n                type=\"text\"\n                formControlName=\"last_name\"\n                placeholder=\"{{'Last Name' | translate}}\"\n              >\n              </ion-input>\n            </ion-item>\n            <ion-item mode=\"md\">\n              <ion-icon slot=\"start\" name=\"call\" mode=\"md\"></ion-icon>\n              <ion-input\n                required\n                type=\"text\"\n                formControlName=\"phone\"\n                placeholder=\"{{'Phone' | translate}}\"\n              ></ion-input>\n            </ion-item>\n            <ion-item mode=\"md\">\n              <ion-icon slot=\"start\" name=\"mail\" mode=\"md\"></ion-icon>\n              <ion-input\n                required\n                type=\"email\"\n                formControlName=\"email\"\n                placeholder=\"{{'Email/Username' | translate}}\"\n              >\n              </ion-input>\n            </ion-item>\n            <ion-item mode=\"md\">\n              <ion-icon slot=\"start\" name=\"eye\" mode=\"md\"></ion-icon>\n              <ion-input\n                required\n                type=\"password\"\n                formControlName=\"password\"\n                placeholder=\"{{'Password' | translate}}\"\n              >\n              </ion-input>\n            </ion-item>\n            <ion-item mode=\"md\">\n              <ion-icon slot=\"start\" name=\"person\" mode=\"md\"></ion-icon>\n              <ion-input\n                type=\"text\"\n                formControlName=\"ref_id\"\n                placeholder=\"{{'Referral Code' | translate}}\"\n              ></ion-input>\n            </ion-item>\n          </form>\n          <ion-button\n            shape=\"undefined\"\n            mode=\"md\"\n            color=\"{{settings.theme.button}}\"\n            expand=\"block\"\n            fill=\"solid\"\n            [disabled]=\"disableSubmit || (!formRegister.valid)\"\n            (click)=\"registerme()\"\n            >{{\"Register\" | translate}}\n          </ion-button>\n        </ion-list>\n\n        <div class=\"errors\" *ngIf=\"errorsRegister\">\n          <div\n            *ngFor=\"let error of errorsRegister | keys\"\n            style=\"text-align: center; padding: 8px; margin-top: 16px\"\n          >\n            <ion-label\n              color=\"danger\"\n              class=\"error\"\n              [innerHTML]=\"error.value\"\n            ></ion-label>\n          </div>\n        </div>\n      </div>\n    </ion-card>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/map/map.page.html": function node_modulesRawLoaderDistCjsJsSrcAppAccountMapMapPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Locations\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #mapCanvas class=\"map-canvas\"></div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/order/order.page.html": function node_modulesRawLoaderDistCjsJsSrcAppAccountOrderOrderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account/orders\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Order\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"order\">\n<ion-list *ngIf=\"order\">\n  <ion-list-header>\n    <ion-label style=\"font-weight: 900;\">{{order.number}} - <span style=\"text-transform: uppercase;\">{{order.status}}</span></ion-label>\n  </ion-list-header>\n  <ion-list-header>\n    <ion-label>{{\"Date\" | translate}}</ion-label>\n  </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label text-wrap>\n      <p>{{order.date_created | date:'MMM d, y hh:mm a'}}</p>\n    </ion-label>\n  </ion-item>\n  <ion-list-header>\n    <ion-label>{{\"Billing Address\" | translate}}</ion-label>\n  </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label text-wrap>\n      <p>\n    <span>{{order.billing.first_name}}</span>&nbsp;<span>{{order.billing.last_name}}</span>&nbsp;<span>{{order.billing.company}}</span>&nbsp;<span>{{order.billing.address_1}}</span>&nbsp;<span>{{order.billing.address_2}}</span>&nbsp;<span>{{order.billing.city}}</span>\n    <span>{{order.billing.state}}</span>&nbsp;<span>{{order.billing.postcode}}</span>&nbsp;<span>{{order.billing.country}}</span>\n    &nbsp;<span>{{order.billing.email}}</span>&nbsp;<span>{{order.billing.phone}}</span>\n  </p>\n    </ion-label>\n  </ion-item>\n  <ion-list-header>\n    <ion-label>{{\"Shipping Address\" | translate}}</ion-label>\n  </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label text-wrap>\n      <p>\n    <span>{{order.shipping.first_name}}</span>&nbsp;<span>{{order.shipping.last_name}}</span>&nbsp;<span>{{order.shipping.company}}</span>&nbsp;<span>{{order.shipping.address_1}}</span>&nbsp;<span>{{order.shipping.address_2}}</span>&nbsp;<span>{{order.shipping.city}}</span>&nbsp;\n    <span>{{order.shipping.state}}</span>&nbsp;<span>{{order.shipping.postcode}}</span>&nbsp;<span>{{order.shipping.country}}</span>&nbsp;\n    <span>{{order.shipping.email}}</span>&nbsp;<span>{{order.shipping.phone}}</span>\n  </p>\n    </ion-label>\n  </ion-item>\n  <ion-list-header>\n    <ion-label>{{\"Shipping Method\" | translate}}</ion-label>\n  </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label text-wrap *ngFor=\"let item of order.shipping_lines | keys\">\n    <p>{{item.value.method_title}}</p>\n    </ion-label>\n  </ion-item>\n  <ion-list-header>\n    <ion-label>{{\"Payment Method\" | translate}}</ion-label>\n  </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label text-wrap>\n    <p [innerHTML]=\"order.payment_method_title\"></p>\n    </ion-label>\n      <ion-button color=\"{{settings.theme.button}}\" slot=\"end\" fill=\"clear\" *ngIf=\"(order.status != 'refunded' || order.status != 'cancelled' || order.status != 'failed') && settings.settings?.enable_refund\" (click)=\"showField()\" [disabled]=\"disableRefundButton\">\n        {{\"Refund\" | translate}}\n      </ion-button>\n      <ion-button color=\"{{settings.theme.button}}\" slot=\"end\" fill=\"clear\" *ngIf=\"order.status == 'refunded' && settings.settings?.enable_refund\" disabled>\n        {{\"Refunded\" | translate}}\n      </ion-button>\n  </ion-item>\n  <div *ngIf=\"showRefund\">\n    <ion-item lines=\"none\">\n        <ion-input required type=\"text\" [(ngModel)]=\"refund.ywcars_form_reason\" name=\"amount\" placeholder=\"Reason for refund\"></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"block\" color=\"{{settings.theme.button}}\" (click)=\"requestRefund()\">Request refund</ion-button>\n</div>\n\n  <ion-list-header>\n    <ion-label>{{\"Items\" | translate}}</ion-label>\n  </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label text-wrap>\n    <p *ngFor=\"let item of order.line_items\">{{item.name}} <span *ngFor=\"let meta of item.meta_data\">{{meta.value}} </span> x {{item.quantity}} <span style=\"float: right\">{{item.total | currency:settings.currency:'symbol':'1.2-2'}}</span></p>\n    </ion-label>\n  </ion-item>\n  <ion-list-header>\n    <ion-label>{{\"Totals\" | translate}}</ion-label>\n  </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label text-wrap>\n    <p>{{\"Shipping\" | translate}}<span style=\"float: right\">{{order.shipping_total | currency:settings.currency:'symbol':'1.2-2'}}</span></p>\n    <p>{{\"Discount\" | translate}}<span style=\"float: right\">{{order.discount_total | currency:settings.currency:'symbol':'1.2-2'}}</span></p>\n    <p>{{\"Tax\" | translate}}<span style=\"float: right\">{{order.total_tax | currency:settings.currency:'symbol':'1.2-2'}}</span></p>\n    <ion-label class=\"grand-total\">Total<span style=\"float: right\">{{order.total | currency:settings.currency:'symbol':'1.2-2'}}</span></ion-label>\n  </ion-label>\n  </ion-item>\n</ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/orders/orders.page.html": function node_modulesRawLoaderDistCjsJsSrcAppAccountOrdersOrdersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Orders\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"orders\">\n\n<div class=\"spinner\" *ngIf=\"!orders\"><ion-spinner> </ion-spinner></div>\n\n<div *ngIf=\"orders\">\n<div *ngIf=\"orders.length == 0\" text-center class=\"empty\">\n  <ion-icon name=\"document\"></ion-icon>\n</div>\n\n  <ion-card *ngFor=\"let item of orders\" (click)=\"getDetail(item)\" class=\"ion-activatable ion-focusable {{settings.settings.product_shadow}}\" mode=\"{{settings.settings.mode}}\">\n    <ion-card-header>\n      <ion-card-subtitle>{{item.number}} - <span style=\"text-transform: uppercase;\">{{item.status}}</span></ion-card-subtitle>\n      <ion-card-title>{{item.total | currency:settings.currency:'symbol':'1.2-2'}}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <p>{{item.date_created | date:'MMM d, y hh:mm a'}}</p>\n      <p [innerHTML]=\"item.payment_method_title\"></p>\n    </ion-card-content>\n  </ion-card>\n\n\t<ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && orders.length\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n\t</ion-infinite-scroll>\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/points/points.page.html": function node_modulesRawLoaderDistCjsJsSrcAppAccountPointsPointsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Points\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n      <div class=\"spinner\" *ngIf=\"!points.items\"><ion-spinner> </ion-spinner></div>\n      <ion-list *ngIf=\"points.items\">\n        <ion-item lines=\"none\" *ngIf=\"settings.reward == ''\">\n          <ion-label text-wrap>{{\"You currently have no loyalty points. Place a order with us today to start earning loyalty points.\" | translate}}</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label class=\"bold\">{{\"Points\" | translate}} - {{points.points}} ({{1*points.points_vlaue | currency:settings.currency:'symbol':'1.2-2'}})</ion-label>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n      <ion-item *ngFor=\"let item of points.items\">\n        <ion-label text-wrap>\n          <ion-text>\n            <h3>{{item.description}}</h3>\n          </ion-text>\n          <ion-text>\n            <p>{{item.date | date:'MMM d, y hh:mm a'}}</p>\n          </ion-text>\n        </ion-label>\n        <ion-text slot=\"end\"><p>{{item.points}}</p></ion-text>\n      </ion-item>\n      </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.page.html": function node_modulesRawLoaderDistCjsJsSrcAppAccountRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Register\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <!-- Top header image. uncomment if not using background image in scss file -->\n  <!--div class=\"login-logo\">\n    <img src=\"assets/image/login_logo2.jpg\">\n  </div-->\n\n  <!-- Login Form 1 -->\n  <div class=\"login1\">\n    <div class=\"form\">\n      <ion-list>\n        <form [formGroup]=\"form\">\n          <ion-item>\n            <ion-input\n              required\n              type=\"text\"\n              formControlName=\"first_name\"\n              placeholder=\"First Name\"\n            ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input\n              required\n              type=\"text\"\n              formControlName=\"last_name\"\n              placeholder=\"Last Name\"\n            ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input\n              required\n              type=\"text\"\n              formControlName=\"phone\"\n              placeholder=\"Phone\"\n            ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input\n              required\n              type=\"email\"\n              formControlName=\"email\"\n              placeholder=\"Email\"\n            ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input\n              required\n              type=\"password\"\n              formControlName=\"password\"\n              placeholder=\"Password\"\n            ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input\n              type=\"text\"\n              formControlName=\"ref_id\"\n              placeholder=\"Referral Id\"\n            ></ion-input>\n          </ion-item>\n        </form>\n      </ion-list>\n      <ion-button\n        color=\"{{settings.theme.button}}\"\n        fill=\"solid\"\n        mode=\"md\"\n        expand=\"block\"\n        fill=\"solid\"\n        [disabled]=\"!form.valid || disableSubmit\"\n        (click)=\"registerme()\"\n        >{{\"Register\" | translate}}</ion-button\n      >\n\n      <!--ion-button expand=\"block\" shape=\"undefined\" mode=\"ios\" fill=\"clear\" color=\"facebook\" (click)=\"loginWithPhone()\" [disabled]=\"phoneLogingInn\"><ion-spinner name=\"dots\" color=\"{{settings.theme.button}}\" *ngIf=\"phoneLogingInn\"></ion-spinner><span *ngIf=\"!phoneLogingInn\">{{\"Register with OTP\"| translate}}</span></ion-button-->\n\n      <div class=\"errors\" *ngIf=\"errors\">\n        <div\n          *ngFor=\"let error of errors | keys\"\n          style=\"text-align: center; padding-top: 20px\"\n        >\n          <ion-label\n            color=\"danger\"\n            class=\"error\"\n            [innerHTML]=\"error.value\"\n          ></ion-label>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/setting/setting.page.html": function node_modulesRawLoaderDistCjsJsSrcAppAccountSettingSettingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\n   <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n      <ion-title>{{\"Language\" | translate}}</ion-title>\n   </ion-toolbar>\n</ion-header>\n<ion-content class=\"settings\">\n   <div *ngIf=\"settings.languages.length\">\n      <ion-list >\n         <ion-radio-group [(ngModel)]=\"config.lang\" name=\"language\" ngDefaultControl>\n         <ion-item *ngFor=\"let item of settings.languages\">\n            <ion-label class=\"payment-method-title\"><img src=\"{{item.country_flag_url}}\" width=\"20\"><span style=\"padding: 10px\">{{item.native_name}}</span></ion-label>\n            <ion-radio value=\"{{item.language_code}}\"> </ion-radio>\n         </ion-item>\n         </ion-radio-group>\n         <ion-button padding color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" (click)=\"applyLanguage()\" >{{\"Apply\" | translate}}</ion-button>\n      </ion-list>\n   </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/wallet/wallet.page.html": function node_modulesRawLoaderDistCjsJsSrcAppAccountWalletWalletPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title>{{\"Wallet\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"spinner\" *ngIf=\"!wallet?.balance\"><ion-spinner> </ion-spinner></div>  \n\n<ion-list *ngIf=\"wallet.balance\">\n\n<ion-item lines=\"none\">\n  <ion-label class=\"bold\">{{\"Balance\" | translate}} {{wallet.balance}}</ion-label>\n  <ion-button color=\"{{settings.theme.button}}\" slot=\"end\" (click)=\"showField()\">\n    {{\"Add balance\" | translate}}\n  </ion-button>\n</ion-item>\n\n<div *ngIf=\"show\">\n<ion-item lines=\"none\">\n    <ion-input required type=\"number\" [(ngModel)]=\"amount\" name=\"amount\" placeholder=\"Enter Amount\"></ion-input>\n</ion-item>\n\n<ion-button style=\"margin-right: 16px; margin-left: 16px;\" expand=\"block\" color=\"{{settings.theme.button}}\" (click)=\"addTopup()\">{{\"Add\" | translate}}</ion-button>\n</div>\n\n<ion-item *ngFor=\"let item of wallet.transactions\">\n    <ion-label text-wrap>\n      <ion-text>\n        <h3>{{item.type.toUpperCase()}} {{item.amount}}</h3>\n      </ion-text>\n      <p>{{item.details}}</p>\n      <ion-text>\n        <p>{{item.date}}</p>\n      </ion-text>\n    </ion-label>\n    <ion-text slot=\"end\"><p>{{item.balance}}</p></ion-text>\n</ion-item>\n\n</ion-list>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/wishlist/wishlist.page.html": function node_modulesRawLoaderDistCjsJsSrcAppAccountWishlistWishlistPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Wishlist\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"wishlist\">\n\n<div class=\"spinner\" *ngIf=\"!wishlist && settings.customer?.id\"><ion-spinner> </ion-spinner></div>\n\n<div *ngIf=\"!settings.customer?.id\" class=\"empty\">\n  <ion-icon name=\"heart-outline\"></ion-icon>\n</div>\n\n<div *ngIf=\"settings.customer?.id\">\n    <div *ngIf=\"wishlist\">\n        <div *ngIf=\"!wishlist.length\" text-center class=\"empty\">\n            <ion-icon name=\"heart-outline\"></ion-icon>\n        </div>\n        <div *ngIf=\"wishlist.length\">\n            <!-- Products List Layout -->\n            <!-- For different list layouts change class name product-list1, product-list2, product-list3 -->  \n              <ion-list  *ngIf=\"wishlist?.length\" class=\"product-list3\">\n                <ion-item *ngFor=\"let product of wishlist\" lines=\"none\">\n                    <ion-thumbnail slot=\"start\" (click)=\"getProduct(product)\" class=\"ion-activatable ion-focusable hydrated\">\n                        <img *ngIf=\"product.images?.length\" src=\"{{product.images[0].src}}\">\n                    </ion-thumbnail>\n                    <ion-grid class=\"details\">\n                        <ion-row (click)=\"getProduct(product)\">\n                            <ion-col>\n                                <ion-label>\n                                    {{product.name}}\n                                </ion-label>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row (click)=\"getProduct(product)\">\n                            <ion-col>\n                                <p class=\"price\">\n                                    <span *ngIf=\"!product.sale_price\" class=\"regular-price\">\n                                        {{1*product.price | currency:settings.currency:'symbol':'1.2-2'}}\n                                    </span>\n                                    <span *ngIf=\"product.sale_price\" class=\"regular-price\">\n                                        {{1*product.sale_price | currency:settings.currency:'symbol':'1.2-2'}}\n                                    </span>\n                                    <span *ngIf=\"product.sale_price\" class=\"special-price\">\n                                        <del>\n                                            {{1*product.regular_price | currency:settings.currency:'symbol':'1.2-2'}}\n                                        </del>\n                                    </span>\n                                </p>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                    <ion-button fill=\"clear\" (click)=\"removeFromWishlist(product.id)\" class=\"trash\"><ion-icon name=\"trash\" style=\"font-size:22px;\"></ion-icon></ion-button>\n                    <!--ion-button color=\"danger\" class=\"stock\" *ngIf=\"product.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\n                      <div *ngIf=\"product.stock_status == 'instock'\">\n                      <ion-button class=\"offer\" *ngIf=\"((product.regular_price - product.price) /product.regular_price*100) >= 1\">{{(product.regular_price - product.price) /product.regular_price*100 | number : '1.0-0'}}%</ion-button>\n                      </div-->\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html": function node_modulesRawLoaderDistCjsJsSrcAppCartCartPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title> {{\"Cart\" | translate}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"cart\">\n  <div class=\"spinner\" *ngIf=\"!cart?.cart_contents\">\n    <ion-spinner> </ion-spinner>\n  </div>\n  <div *ngIf=\"cart.cart_contents?.length == 0\" class=\"empty\">\n    <ion-icon name=\"basket\" mode=\"md\"></ion-icon>\n  </div>\n\n  <div *ngIf=\"cart.cart_contents\">\n    <div *ngIf=\"cart.cart_contents?.length != 0\">\n      <ion-item *ngFor=\"let item of cart.cart_contents | keys\">\n        <ion-thumbnail slot=\"start\" (click)=\"getProduct(item.value.product_id)\">\n          <img\n            src=\"{{item.value.thumb}}\"\n            [style.border-radius.px]=\"settings.dimensions.productBorderRadius\"\n          />\n        </ion-thumbnail>\n        <ion-label class=\"name-label\">\n          <ion-text style=\"font-size: 14px\" text-wrap class=\"clamp\"\n            >{{item.value.name}}</ion-text\n          >\n          <p\n            *ngFor=\"let variation of item.value.variation | keys\"\n            style=\"font-size: 13px\"\n          >\n            {{variation.value}}\n          </p>\n          <p style=\"font-size: 13px\">\n            {{item.value.tax_price |\n            currency:settings.currency:'symbol':'1.2-2'}} x\n            {{item.value.quantity}}\n          </p>\n          <span *ngIf=\"item.value.addons?.length\">Addons</span>\n          <span *ngFor=\"let items of item.value.addons\">\n            <p style=\"font-size: 13px\">\n              {{items.value}} {{items.price |\n              currency:settings.currency:'symbol':'1.2-2'}}\n            </p>\n          </span>\n\n          <ion-grid style=\"padding: 0px\" class=\"add-remove-button\">\n            <ion-row class=\"ion-align-items-start\">\n              <ion-col class=\"align-self-start\">\n                <ion-button\n                  color=\"{{settings.theme.button}}\"\n                  fill=\"clear\"\n                  (click)=\"deleteFromCart(item.value.product_id, item.key)\"\n                >\n                  <ion-icon\n                    slot=\"icon-only\"\n                    name=\"remove-circle-outline\"\n                    mode=\"md\"\n                  ></ion-icon>\n                </ion-button>\n                <ion-button color=\"{{settings.theme.button}}\" fill=\"clear\"\n                  >{{item.value.quantity}}</ion-button\n                >\n                <ion-button\n                  color=\"{{settings.theme.button}}\"\n                  fill=\"clear\"\n                  (click)=\"addToCart(item.value.product_id, item)\"\n                >\n                  <ion-icon\n                    slot=\"icon-only\"\n                    name=\"add-circle-outline\"\n                    mode=\"md\"\n                  >\n                  </ion-icon>\n                </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button\n                  style=\"float: right\"\n                  color=\"{{settings.theme.button}}\"\n                  fill=\"clear\"\n                  (click)=\"deleteItem(item.key, item.value.quantity)\"\n                  ><ion-icon name=\"trash\" style=\"font-size: 22px\"></ion-icon\n                ></ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-label>\n      </ion-item>\n\n      <form #f=\"ngForm\" class=\"coupon\">\n        <ion-item>\n          <ion-input\n            type=\"text\"\n            [(ngModel)]=\"cart.coupon\"\n            name=\"coupon\"\n            placeholder=\"{{'Enter coupon here' | translate}}\"\n          >\n          </ion-input>\n          <h2 item-right>\n            <ion-button\n              block\n              color=\"{{settings.theme.button}}\"\n              type=\"submit\"\n              text-uppercase\n              (click)=\"submitCoupon(cart.coupon)\"\n              >{{\"Apply\" | translate}}\n            </ion-button>\n          </h2>\n        </ion-item>\n      </form>\n\n      <div class=\"redeem\">\n        <div *ngIf=\"cart && settings.reward > '0' \" style=\"margin-bottom: 3px\">\n          <ion-item>\n            <ion-label\n              >{{\"Complete this order and you will earn\" | translate}}\n              <span style=\"font-size: 16px; font-weight: 600\"\n                >{{cart.purchase_point}}</span\n              >\n              {{\"points\" | translate}}, {{\"you can use on future order.\" |\n              translate}}</ion-label\n            >\n          </ion-item>\n        </div>\n\n        <div *ngIf=\"settings.reward > '0' \" style=\"padding: 10px 0\">\n          <ion-item>\n            <ion-label\n              >{{\"Use\" | translate}}\n              <span style=\"font-size: 16px; font-weight: 600\"\n                >{{cart.points.points}}</span\n              >\n              {{\"Reward Points for a\" | translate}}\n              <span style=\"font-size: 16px; font-weight: 600\"\n                >{{cart.points.discount_available |\n                currency:settings.currency:'symbol':'1.2-2'}}</span\n              >\n              {{\"discount on this order!\" | translate}}\n              <ion-button\n                color=\"{{settings.theme.button}}\"\n                fill=\"solid\"\n                type=\"submit\"\n                text-uppercase\n                small\n                (click)=\"redeem()\"\n              >\n                {{\"Redeem Points\" | translate}}\n              </ion-button>\n            </ion-label>\n          </ion-item>\n        </div>\n      </div>\n\n      <ion-list lines=\"none\">\n        <ion-item>\n          <ion-label>\n            {{\"Sub total\" | translate}}\n            <span class=\"totals-amount\"\n              >{{1*cart.cart_totals.subtotal |\n              currency:settings.currency:'symbol':'1.2-2'}}</span\n            >\n          </ion-label>\n        </ion-item>\n        <ion-item *ngIf=\"cart.cart_totals.total_tax != 0\">\n          <ion-label>\n            {{\"Tax total\" | translate}}\n            <span class=\"totals-amount\"\n              >{{1*cart.cart_totals.total_tax |\n              currency:settings.currency:'symbol':'1.2-2'}}</span\n            >\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngFor=\"let coupon of cart.coupon_discount_totals | keys\">\n          <ion-label>\n            {{\"Coupon\" | translate}}\n            <span *ngIf=\"!coupon.key.includes('_')\">- {{coupon.key}}</span>\n            <ion-text\n              (click)=\"removeCoupon(coupon.key)\"\n              color=\"{{settings.theme.button}}\"\n              >(Remove)</ion-text\n            ><span class=\"totals-amount\"\n              >-{{1*coupon.value |\n              currency:settings.currency:'symbol':'1.2-2'}}</span\n            >\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngIf=\"cart.cart_totals.discount_total != 0\">\n          <ion-label>\n            {{\"Discount\" | translate}}<span class=\"totals-amount\"\n              >-{{1*cart.cart_totals.discount_total |\n              currency:settings.currency:'symbol':'1.2-2'}}</span\n            >\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            {{\"Shipping\" | translate}}\n            <span class=\"totals-amount\"\n              >{{1*cart.cart_totals.shipping_total |\n              currency:settings.currency:'symbol':'1.2-2'}}</span\n            >\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label class=\"grand-total\">\n            {{\"Grand Total\" | translate}}\n            <span class=\"totals-amount\"\n              >{{1*cart.cart_totals.total |\n              currency:settings.currency:'symbol':'1.2-2'}}</span\n            >\n          </ion-label>\n        </ion-item>\n      </ion-list>\n\n      <ion-button\n        color=\"{{settings.theme.button}}\"\n        expand=\"block\"\n        fill=\"solid\"\n        (click)=\"checkout()\"\n        style=\"margin: 16px\"\n        >{{\"Continue\" | translate}}</ion-button\n      >\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html": function node_modulesRawLoaderDistCjsJsSrcAppCategoriesCategoriesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios' >\n  <ion-toolbar>\n    <ion-title>\n      {{\"Categories\" | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"categories\">\n\n  <!-- Default category block -->\n\t<!--ion-row>\n    <ion-col size='6' size-sm=\"4\" size-md=\"3\" *ngFor=\"let category of data.mainCategories\" (click)=\"getProducts(category.id)\">\n    <ion-card class=\"category-card\" class=\"ion-activatable ion-focusable hydrated\" mode=\"md\">\n      <ion-img alt=\"\" src=\"{{category.image?.src}}\"></ion-img>\n      <ion-card-header>\n        <ion-card-title [innerHTML]=\"category.name\"></ion-card-title>\n      </ion-card-header>\n    </ion-card>\n    </ion-col>\n  </ion-row-->\n\n  <div class=\"categories-split\" *ngIf=\"data?.mainCategories\">\n      <ion-grid *ngIf=\"data.mainCategories\" style=\"padding: 0;\">\n          <ion-row>\n              <ion-col width-40 class=\"col-left\">\n                  <div *ngFor=\"let item of data.mainCategories\" class=\"tab-left-item\" [ngClass]=\"{selected: item.id == selectedCategory.id}\">\n                      <h2 tappable (click)=\"selectcategory(item)\" [innerHTML]=\"item.name\" text-wrap></h2>\n                  </div> <br/> </ion-col>\n              <ion-col width-60 class=\"col-right\">\n                  <ion-list no-margin text-wrap radio-group>\n                      <div class=\"cat-image\" *ngIf=\"selectedCategory.image && selectedCategory.image?.src != ''\" (click)=\"getProducts(selectedCategory.id)\"><img *ngIf=\"selectedCategory.image?.src\" src=\"{{selectedCategory.image.src}}\"> </div>\n                    <ion-grid *ngIf=\"selectedCategory?.id\">\n                      <ion-row>\n                          <ion-col button=\"true\" size=\"4\" size-sm=\"3\" size-md=\"2\" tappable *ngFor=\"let subcat of subCategories(selectedCategory.id)\" mode=\"md\" class=\"col\">\n                            <ion-card style=\"margin: 0; box-shadow: none;\" button=\"true\" (click)=\"getProducts(subcat.id)\">\n                            <img *ngIf=\"subcat.image?.src\" src=\"{{subcat.image.src}}\">\n                            <img *ngIf=\"!subcat.image?.src\" src=\"assets/image/category.png\">\n                              <p style=\"margin: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; padding: 4px; font-size: 10px;\" [innerHTML]=\"subcat.name\"></p>\n                            </ion-card>\n                          </ion-col>\n                      </ion-row>\n                      </ion-grid>\n                    </ion-list>\n              </ion-col>\n          </ion-row>\n      </ion-grid>\n  </div>\n\n\n\n<!-- Drop down type category block -->\n<!--div *ngFor=\"let main of data.mainCategories; let i = index\" class=\"category-container\">\n  <ion-grid class=\"categories-card5\" no-padding>\n  <ion-row><ion-col class=\"ion-text-center\">\n  <ion-item lines=\"none\" (click)=\"showSubCategory(i)\" detail=\"false\">\n    <ion-thumbnail slot=\"start\">\n      <img *ngIf=\"main.image?.src\" src=\"{{main.image.src}}\">\n    </ion-thumbnail>\n    <ion-label>\n      <h2 [innerHTML]=\"main.name\"></h2>\n      <p [innerHTML]=\"main.description\"></p>\n    </ion-label>\n    <ion-icon *ngIf=\"main.show\" name=\"chevron-up-outline\" mode=\"ios\" color=\"medium\"></ion-icon>\n    <ion-icon *ngIf=\"!main.show\" name=\"chevron-down-outline\" mode=\"ios\" color=\"medium\"></ion-icon>\n  </ion-item>\n</ion-col>\n</ion-row>\n  <ion-row *ngIf=\"main.show\" class=\"sub-category-items\">\n    <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let item of subCategories(main.id)\" fixed>\n    <ion-card button=\"true\" (click)=\"getProducts(item.id)\"  class=\"item-card\" class=\"ion-activatable ion-focusable hydrated\">\n      <ion-card-content>\n        <img alt=\"\" src=\"{{item.image?.src}}\">\n      </ion-card-content>\n      <ion-card-header>\n        <ion-card-title [innerHTML]=\"item.name\"></ion-card-title>\n      </ion-card-header>\n    </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</div-->  \n\n\n<!-- Catgories Grid 1 -->\n<!--ion-grid class=\"categories-card1\">\n  <ion-row>\n    <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let item of data.mainCategories\" (click)=\"getProducts(item.id)\" fixed>\n    <ion-card class=\"item-card\" class=\"ion-activatable ion-focusable hydrated\" mode=\"md\">\n      <ion-card-content>\n      <img alt=\"\" src=\"{{item.image?.src}}\">\n      </ion-card-content>\n      <ion-card-header>\n        <ion-card-title [innerHTML]=\"item.name\"></ion-card-title>\n      </ion-card-header>\n    </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid-->\n\n<!-- Catgories Grid 2 -->\n<!--ion-grid class=\"categories-card2\">\n  <ion-row>\n    <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let item of data.mainCategories\" (click)=\"getProducts(item.id)\" fixed>\n    <ion-card class=\"item-card\" class=\"ion-activatable ion-focusable hydrated\" mode=\"md\">\n      <ion-card-content>\n      <img alt=\"\" src=\"{{item.image?.src}}\">\n      </ion-card-content>\n      <ion-card-header>\n        <ion-card-title [innerHTML]=\"item.name\"></ion-card-title>\n      </ion-card-header>\n    </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid-->\n\n<!-- Catgories Grid 3 -->\n<!--ion-grid class=\"categories-card3\">\n  <ion-row>\n    <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let item of data.mainCategories\" (click)=\"getProducts(item.id)\" fixed>\n    <ion-card class=\"item-card\" class=\"ion-activatable ion-focusable hydrated\" mode=\"md\">\n      <ion-card-content>\n      <img alt=\"\" src=\"{{item.image?.src}}\">\n      </ion-card-content>\n      <ion-card-header>\n        <ion-card-title [innerHTML]=\"item.name\"></ion-card-title>\n      </ion-card-header>\n    </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid-->\n\n\n<!-- Catgories Grid 4 -->\n<!--ion-grid class=\"categories-card4\" *ngFor=\"let main of data.mainCategories\">\n  <ion-row><ion-col class=\"ion-text-center\" [innerHTML]=\"main.name\"></ion-col></ion-row>\n  <ion-row>\n    <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let item of subCategories(main.id)\" (click)=\"getProducts(item.id)\" fixed>\n    <ion-card class=\"item-card\" class=\"ion-activatable ion-focusable hydrated\" mode=\"md\">\n      <ion-card-content>\n      <img alt=\"\" src=\"{{item.image?.src}}\">\n      </ion-card-content>\n      <ion-card-header>\n        <ion-card-title [innerHTML]=\"item.name\"></ion-card-title>\n      </ion-card-header>\n    </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid-->\n\n<!-- Catgories List 1 -->\n<!--ion-grid class=\"categories-list1\">\n  <ion-item *ngFor=\"let item of data?.mainCategories\">\n    <ion-thumbnail slot=\"start\">\n      <img *ngIf=\"item.image?.src\" src=\"{{item.image.src}}\">\n    </ion-thumbnail>\n    <ion-label>\n      <h2 [innerHTML]=\"item.name\"></h2>\n      <p>{{item.description}}</p>\n    </ion-label>\n    <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n  </ion-item>\n</ion-grid-->\n\n<!-- Catgories List 2 -->\n<!--ion-grid class=\"categories-list2\">\n  <ion-item *ngFor=\"let item of data?.mainCategories\">\n    <ion-label>\n      <h2 [innerHTML]=\"item.name\"></h2>\n      <p>{{item.description}}</p>\n    </ion-label>\n    <ion-thumbnail slot=\"end\">\n      <img *ngIf=\"item.image?.src\" src=\"{{item.image.src}}\">\n    </ion-thumbnail>\n  </ion-item>\n</ion-grid-->\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/address/address.page.html": function node_modulesRawLoaderDistCjsJsSrcAppCheckoutAddressAddressPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/cart\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Address\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"spinner\" *ngIf=\"loader\"><ion-spinner> </ion-spinner></div>\n\n<div *ngIf=\"!loader\">\n<ion-list no-margin>\n\n  <ion-list-header>\n    <ion-label>{{\"Billing Address\" | translate}}</ion-label>\n  </ion-list-header>\n\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"First Name\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_first_name\" name=\"firstname\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Last Name\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_last_name\" name=\"lastname\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Phone\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_phone\" name=\"telephone\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Company\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_company\" name=\"company\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_address_1\" name=\"street1\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}} 2</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_address_2\" name=\"street2\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Email\" | translate}}</ion-label>\n            <ion-input required type=\"email\" [(ngModel)]=\"checkoutData.form.billing_email\" name=\"email\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"City\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_city\" name=\"city\"> </ion-input>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Postcode\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_postcode\" name=\"postcode\"> </ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"checkoutData.form?.countries && checkoutData.form?.countries.length > 1\">\n            <ion-label>{{\"Country\" | translate}}</ion-label>\n            <ion-select [(ngModel)]=\"checkoutData.form.billing_country\" (ngModelChange)=\"getBillingRegion()\" name=\"billing_country\">\n                <div *ngFor=\"let field of checkoutData.form.countries\">\n                    <ion-select-option value=\"{{field.value}}\"><span [innerHTML]=\"field.label\"></span> </ion-select-option>\n                </div>\n            </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf=\"checkoutData.billingStates?.regions.length\">\n            <ion-label>{{\"State\" | translate}}</ion-label>\n            <ion-select [(ngModel)]=\"checkoutData.form.billing_state\" name=\"billing_state\">\n                <div *ngFor=\"let field of checkoutData.billingStates.regions\">\n                    <ion-select-option value=\"{{field.value}}\"><span [innerHTML]=\"field.label\"></span></ion-select-option>\n                </div>\n            </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf=\"!checkoutData.billingStates?.regions.length\">\n            <ion-label position=\"stacked\">{{\"State\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_state\" name=\"billing_state\"> </ion-input>\n        </ion-item>\n\n\n        <ion-item>\n            <ion-label>{{\"Ship to different address\" | translate}}</ion-label>\n            <ion-toggle color=\"{{settings.theme.button}}\" [(ngModel)]=\"checkoutData.form.ship_to_different_address\"></ion-toggle>\n        </ion-item>\n\n</ion-list>\n\n\n<ion-list no-margin *ngIf=\"checkoutData.form.ship_to_different_address\">\n\n  <ion-list-header>\n    <ion-label>{{\"Shipping Address\" | translate}}</ion-label>\n  </ion-list-header>\n\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"First Name\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_first_name\" name=\"firstname\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Last Name\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_last_name\" name=\"lastname\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Company\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_company\" name=\"company\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_address_1\" name=\"street1\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}} 2</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_address_2\" name=\"street2\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"City\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_city\" name=\"city\"> </ion-input>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Postcode\" | translate}}</ion-label>\n            <ion-input required type=\"number\" [(ngModel)]=\"checkoutData.form.shipping_postcode\" name=\"postcode\"> </ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"checkoutData.form?.countries && checkoutData.form?.countries.length > 1\">\n            <ion-label>{{\"Country\" | translate}}</ion-label>\n            <ion-select [(ngModel)]=\"checkoutData.form.shipping_country\" (ngModelChange)=\"getShippingRegion()\" name=\"shipping_country\">\n                <div *ngFor=\"let field of checkoutData.form.countries\">\n                    <ion-select-option value=\"{{field.value}}\"><span [innerHTML]=\"field.label\"></span> </ion-select-option>\n                </div>\n            </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf=\"checkoutData.shippingStates?.regions.length\">\n            <ion-label>{{\"State\" | translate}}</ion-label>\n            <ion-select [(ngModel)]=\"checkoutData.form.shipping_state\" name=\"shipping_state\">\n                <div *ngFor=\"let field of checkoutData.shippingStates.regions\">\n                    <ion-select-option value=\"{{field.value}}\"><span [innerHTML]=\"field.label\"></span></ion-select-option>\n                </div>\n            </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf=\"!checkoutData.shippingStates?.regions.length\">\n            <ion-label position=\"stacked\">{{\"State\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_state\" name=\"shipping_state\"> </ion-input>\n        </ion-item>\n\n\n        <!--ion-item *ngIf=\"countries?.options\">\n            <ion-label>{{\"Country\" | translate}}</ion-label>\n            <ion-select [(ngModel)]=\"checkoutData.form.shipping_country\" (ngModelChange)=\"getShippingRegion()\" name=\"shipping_country\">\n                <div *ngFor=\"let field of countries.options | keys\">\n                    <ion-select-option value=\"{{field.key}}\"><span [innerHTML]=\"field.value\"></span></ion-select-option>\n                </div>\n            </ion-select>\n        </ion-item>\n\n        <div *ngIf=\"checkoutData.form?.shipping_country\">\n        <ion-item *ngIf=\"checkoutData.form?.state[checkoutData.form.shipping_country]\">\n            <ion-label>{{\"State\" | translate}}</ion-label>\n            <ion-select [(ngModel)]=\"checkoutData.form.shipping_state\" name=\"shipping_state\">\n                <div *ngFor=\"let field of checkoutData.form.state[checkoutData.form.shipping_country] | keys\">\n                    <ion-select-option value=\"{{field.key}}\"><span [innerHTML]=\"field.value\"></span></ion-select-option>\n                </div>\n            </ion-select>\n        </ion-item>\n        \n\n        <ion-item *ngIf=\"!checkoutData.shippingStates\">\n            <ion-label position=\"stacked\">{{\"State\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_state\" name=\"shipping_state\"> </ion-input>\n        </ion-item>\n        </div-->\n\n\n</ion-list>\n<div *ngIf=\"errorMessage\">\n  <h2 [innerHTML]=\"errorMessage\" style=\"font-size: 14px;  color: red;margin: 16px;\"></h2>\n</div>\n<div class=\"submit-button\">\n<ion-button color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" (click)=\"continueCheckout()\">{{\"Continue\" | translate}}</ion-button>\n</div>\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout/checkout.page.html": function node_modulesRawLoaderDistCjsJsSrcAppCheckoutCheckoutCheckoutPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/cart/address\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Checkout\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n\n<div class=\"spinner\" *ngIf=\"!orderReview\"><ion-spinner></ion-spinner></div>\n\n<div *ngIf=\"orderReview\">\n<ion-list>\n\t<ion-list-header>\n    <ion-label>{{\"Billing Address\" | translate}}</ion-label>\n  </ion-list-header>\n\n  <ion-item>\n    <ion-label text-wrap>\n      <p>\n    <span>{{checkoutData.form.billing_first_name}}</span>&nbsp;<span>{{checkoutData.form.billing_last_name}}</span>&nbsp;<span>{{checkoutData.form.billing_company}}</span>&nbsp;<span>{{checkoutData.form.billing_address_1}}</span>&nbsp;<span>{{checkoutData.form.billing_address_2}}</span>&nbsp;<span>{{checkoutData.form.billing_city}}</span>\n    <span>{{checkoutData.form.billing_state}}</span>&nbsp;<span>{{checkoutData.form.billing_postcode}}</span>&nbsp;<span>{{checkoutData.form.billing_country}}</span>\n    &nbsp;<span>{{checkoutData.form.billing_email}}</span>&nbsp;<span>{{checkoutData.form.billing_phone}}</span>\n  </p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n<ion-list>\n  <ion-list-header>\n    <ion-label>{{\"Shipping Address\" | translate}}</ion-label>\n  </ion-list-header>\n\n  <ion-item>\n    <ion-label text-wrap>\n      <p>\n    <span>{{checkoutData.form.shipping_first_name}}</span>&nbsp;<span>{{checkoutData.form.shipping_last_name}}</span>&nbsp;<span>{{checkoutData.form.shipping_company}}</span>&nbsp;<span>{{checkoutData.form.shipping_address_1}}</span>&nbsp;<span>{{checkoutData.form.shipping_address_2}}</span>&nbsp;<span>{{checkoutData.form.shipping_city}}</span>&nbsp;\n    <span>{{checkoutData.form.shipping_state}}</span>&nbsp;<span>{{checkoutData.form.shipping_postcode}}</span>&nbsp;<span>{{checkoutData.form.shipping_country}}</span>&nbsp;\n    <span>{{checkoutData.form.shipping_email}}</span>&nbsp;<span>{{checkoutData.form.shipping_phone}}</span>\n  </p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n\n<ion-list *ngIf=\"orderReview?.shipping\">\n  <ion-radio-group *ngFor=\"let package of orderReview.shipping\" [(ngModel)]=\"package.chosen_method\" (ngModelChange)=\"updateOrderReview()\">\n    <ion-list-header>\n      <span [innerHTML]=\"package.package_name\"></span>\n    </ion-list-header>\n    <ion-item *ngIf=\"isEmptyObject(package.shipping)\">\n      <ion-label><p>{{\"No Shipping Available\" | translate}}</p></ion-label>\n    </ion-item>\n    <ion-item *ngFor=\"let method of package.shipping | keys\">\n      <ion-label class=\"ion-text-wrap\"><span [innerHTML]=\"method.value.label\"></span> <b>-</b> <span>{{method.value.cost | currency:settings.currency:true:'1.2-2'}}</span></ion-label>\n      <ion-radio color=\"{{settings.theme.button}}\" value=\"{{method.value.id}}\"></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n</ion-list>\n\n<ion-list *ngIf=\"orderReview?.payment\">\n  <ion-radio-group [(ngModel)]=\"checkoutData.form.payment_method\" (ngModelChange)=\"onChangePayment()\">\n    <ion-list-header>\n      {{\"Payment Method\" | translate}}\n    </ion-list-header>\n    <ion-item *ngFor=\"let method of orderReview.payment | keys\">\n      <ion-label class=\"ion-text-wrap\"><span [innerHTML]=\"method.value.title\"></span></ion-label>\n      <ion-radio color=\"{{settings.theme.button}}\" value=\"{{method.value.id}}\"></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n</ion-list>\n\n  <div *ngIf=\"cardResponse.cardNumber && checkoutData.form.payment_method == 'stripe'\">\n      <ion-card mode=\"{{settings.settings.mode}}\">\n          <ion-item *ngIf=\"cardResponse.cardNumber\">\n            <ion-label text-wrap>\n              <ion-text>\n                <h3>{{\"Card Number\" | translate}}</h3>\n              </ion-text>\n              <p>{{cardResponse.cardNumber}}</p>\n            </ion-label>\n          </ion-item>\n\n            <ion-item>\n            <ion-label text-wrap>\n              <ion-text>\n                <h3>{{\"Expiry Date\" | translate}}</h3>\n              </ion-text>\n              <p>{{cardResponse.expiryMonth}}/{{cardResponse.expiryYear}}</p>\n            </ion-label>\n          </ion-item>\n\n            <ion-item>\n            <ion-label text-wrap>\n              <ion-text>\n                <h3>{{\"CVV\" | translate}}</h3>\n              </ion-text>\n              <p>{{cardResponse.cvv}}</p>\n            </ion-label>\n          </ion-item>\n        </ion-card>\n  </div>\n\n    <div *ngIf=\"checkoutData.form.payment_method =='authnet'\" class=\"card-payment\">\n        <form #f=\"ngForm\">\n            <ion-list no-margin>\n                <ion-item class=\"side-heading-background\">\n                    <ion-label color=\"side-heading-color\">Card Details </ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">{{\"Card Number\" | translate}} </ion-label>\n                    <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form['authnet-card-number']\" name=\"stripe_number\"> </ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">{{\"Expiry Month\" | translate}} (MM) </ion-label>\n                    <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.expiryMonth\" name=\"stripe_exp_year\"> </ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">{{\"Expiry Year\" |translate}} (YY) </ion-label>\n                    <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.expiryYear\" name=\"stripe_exp_year\"> </ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">{{\"Card Code\" | translate}} </ion-label>\n                    <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form['authnet-card-cvc']\" name=\"stripe_code\"> </ion-input>\n                </ion-item>\n            </ion-list>\n        </form>\n    </div>\n\n    <ion-item style=\"padding-top: 16px;\" lines=\"none\" *ngIf=\"checkoutData.form.payment_method =='stripe'\">\n      <ion-label>{{\"Use a new Card\" | translate}}</ion-label>\n      <ion-checkbox [(ngModel)]=\"checkoutData.form.card\" (ngModelChange)=\"onUseNewCard()\" slot=\"end\"></ion-checkbox>\n    </ion-item>\n\n    <div *ngIf=\"checkoutData.form.payment_method =='stripe'\" class=\"stripe-payment\">\n      <form action=\"/charge\" method=\"post\" id=\"payment-form\">\n        <div class=\"form-row\">\n\n          <div id=\"card-element\">\n            <!-- A Stripe Element will be inserted here. -->\n          </div>\n\n          <!-- Used to display form errors. -->\n          <div id=\"card-errors\" class=\"card-error\" role=\"alert\"></div>\n        </div>\n      </form>\n    </div>\n\n    <!--div *ngIf=\"checkoutData.form.payment_method =='stripe'\" class=\"card-payment\">\n        <form #f=\"ngForm\">\n            <ion-list no-margin>\n                <ion-item class=\"side-heading-background\">\n                    <ion-label color=\"side-heading-color\">Card Details </ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">{{\"Card Number\" | translate}} </ion-label>\n                    <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.stripe_number\" name=\"stripe_number\"> </ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">{{\"Expiry Month\" | translate}} (MM) </ion-label>\n                    <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.stripe_exp_month\" name=\"stripe_exp_year\"> </ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">{{\"Expiry Year\" |translate}} (YYYY) </ion-label>\n                    <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.stripe_exp_year\" name=\"stripe_exp_year\"> </ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">{{\"Card Code\" | translate}} </ion-label>\n                    <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.stripe_code\" name=\"stripe_code\"> </ion-input>\n                </ion-item>\n            </ion-list>\n        </form>\n    </div-->\n\n    <!--ion-row class=\"check-box-bottom\" style=\"margin-top:0\" *ngIf=\"form.show_terms\">\n      <ion-col no-lines class=\"col1\">\n          <ion-checkbox checked=\"true\" [(ngModel)]=\"form.terms\" name=\"terms\"> </ion-checkbox>\n      </ion-col>\n      <ion-col class=\"col2\">\n          <ion-label>{{\"I Agree\" | translate}} <a  (click)=\"terms()\">{{\"Terms & Conditions\" | translate}}</a> </ion-label>\n      </ion-col>\n    </ion-row-->\n<ion-item *ngIf=\"orderReview.payment[checkoutData.form.payment_method]?.description\" lines=\"none\">\n  <ion-label class=\"ion-text-wrap payment-description\"> \n  <span [innerHTML]=\"orderReview.payment[checkoutData.form.payment_method]?.description\"></span>\n   </ion-label>\n </ion-item>\n\n<div *ngIf=\"errorMessage\">\n<h2 [innerHTML]=\"errorMessage\" style=\"font-size: 14px;  color: red; text-align: center;\"></h2>\n</div>\n\n<div class=\"button-place-order submit-button\" *ngIf=\"checkoutData.form.payment_method == 'stripe'\">\n  <ion-button color=\"{{settings.theme.button}}\" (click)=\"onClickStripeSubmit()\" expand=\"block\" fill=\"solid\" text-uppercase id=\"card-button\">{{'Place order' | translate}}</ion-button>\n</div>\n<div class=\"submit-button\">\n<ion-button [disabled]=\"disableButton\" *ngIf=\"checkoutData.form.payment_method != 'stripe'\" color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" (click)=\"placeOrder()\">{{'Place order' | translate}}</ion-button>\n</div>\n</div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html": function node_modulesRawLoaderDistCjsJsSrcAppContactContactPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n         <ion-back-button defaultHref=\"/tabs/categories/products\"></ion-back-button>\n      </ion-buttons>\n    <ion-title>Contact</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\t<ion-list>\n    <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">{{\"Your Name\" | translate}}</ion-label>\n        <ion-input required type=\"text\" [(ngModel)]=\"form['your-name']\" name=\"name\"> </ion-input>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">{{\"Your Email\" | translate}}</ion-label>\n        <ion-input required type=\"text\" [(ngModel)]=\"form['your-email']\" name=\"email\"> </ion-input>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">{{\"Subject\" | translate}}</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"form['your-subject']\" name=\"phone\"> </ion-input>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">{{\"Your Message\" | translate}}</ion-label>\n        <ion-textarea rows=\"6\" type=\"text-area\" [(ngModel)]=\"form['your-message']\" name=\"phone\"> </ion-textarea>\n    </ion-item>\n    <ion-item *ngIf=\"status?.message\" lines=\"none\">\n    <ion-label class=\"ion-text-wrap\" style=\"text-align: center\">{{status.message}}</ion-label>\n    </ion-item>\n    <ion-button [disabled]=\"disableButton\" color=\"{{settings.theme.button}}\" expand=\"full\" fill=\"solid\" (click)=\"submit()\">{{\"Submit\" | translate}}</ion-button>\n    </ion-list>\t\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPostPostPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios' >\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"post?.post_title\">\n      {{post.post_title}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"post\">\n  <div class=\"spinner\" *ngIf=\"!post\"><ion-spinner> </ion-spinner></div>\n    <ion-card *ngIf=\"post\">\n      <ion-img alt=\"\" *ngIf=\"post.image\" src=\"{{post.image}}\"></ion-img>\n      <ion-card-header>\n        <ion-card-title>{{post.post_title}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n          <div [innerHTML]=\"post.post_content\"></div>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.page.html": function node_modulesRawLoaderDistCjsJsSrcAppProductProductPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"product-header\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        defaultHref=\"/tabs/categories/products\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title> {{product?.name}} </ion-title>\n    <ion-buttons slot=\"end\" (click)=\"share()\">\n      <ion-icon\n        name=\"share\"\n        style=\"margin-right: 8px; font-size: 23px\"\n      ></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"product\">\n  <div class=\"spinner\" *ngIf=\"!product.id\">\n    <ion-spinner> </ion-spinner>\n  </div>\n  <ion-fab\n    vertical=\"bottom\"\n    horizontal=\"end\"\n    slot=\"fixed\"\n    *ngIf=\"settings.settings?.enable_product_chat\"\n  >\n    <a href=\"https://wa.me/{{settings.settings?.whatsapp_number}}\">\n      <ion-fab-button size=\"small\" color=\"whatsapp\">\n        <ion-icon name=\"logo-whatsapp\"></ion-icon>\n      </ion-fab-button>\n    </a>\n  </ion-fab>\n  <ion-fab\n    vertical=\"bottom\"\n    horizontal=\"end\"\n    slot=\"fixed\"\n    *ngIf=\"product.vendor?.phone && settings.settings?.enable_vendor_chat && !settings.settings?.enable_product_chat\"\n  >\n    <a href=\"https://wa.me/{{product.vendor.phone}}\">\n      <ion-fab-button size=\"small\" color=\"whatsapp\">\n        <ion-icon name=\"logo-whatsapp\"></ion-icon>\n      </ion-fab-button>\n    </a>\n  </ion-fab>\n  <div *ngIf=\"product.id\">\n    <div style=\"display: flex\">\n      <ion-slides pager=\"true\" *ngIf=\"!product.image\" dir=\"{{settings.dir}}\">\n        <ion-slide *ngFor=\"let item of product.images\">\n          <img src=\"{{item.src}}\" />\n        </ion-slide>\n      </ion-slides>\n      <div *ngIf=\"product.image\">\n        <ion-img src=\"{{product.image}}\"></ion-img>\n      </div>\n      <ion-button\n        color=\"danger\"\n        class=\"stock\"\n        *ngIf=\"product.stock_status == 'outofstock'\"\n        >{{\"No Stock\" | translate}}</ion-button\n      >\n    </div>\n    <div class=\"product-details\">\n      <ion-item lines=\"none\">\n        <ion-label text-wrap> {{product.name}} </ion-label>\n        <ion-icon\n          name=\"heart-outline\"\n          class=\"heartempty onpress\"\n          slot=\"end\"\n          (click)=\"settings.addToWishlist(product.id)\"\n          *ngIf=\"!settings.wishlist[product.id]\"\n        ></ion-icon>\n        <ion-icon\n          name=\"heart\"\n          class=\"heartempty onpress\"\n          slot=\"end\"\n          color=\"{{settings.theme.button}}\"\n          (click)=\"settings.removeFromWishlist(product.id)\"\n          *ngIf=\"settings.wishlist[product.id]\"\n        ></ion-icon>\n      </ion-item>\n\n      <!--WCMP-->\n      <ion-chip\n        color=\"primary\"\n        (click)=\"getDetail(product.vendor)\"\n        *ngIf=\"product.vendor?.id\"\n      >\n        <ion-icon name=\"person\"></ion-icon>\n        <ion-label\n          >{{\"SoldBy\" | translate }} - {{product.vendor.name}}</ion-label\n        >\n      </ion-chip>\n\n      <ion-item lines=\"none\">\n        <ion-label *ngIf=\"product.sale_price\">\n          <span class=\"price\" [innerHTML]=\"product.formated_sales_price\"></span\n          ><del\n            ><span\n              class=\"special-price\"\n              [innerHTML]=\"product.formated_price\"\n            ></span\n          ></del>\n          <span\n            *ngIf=\"((product.regular_price - product.price) /product.regular_price*100) >= 1\"\n            class=\"percent-off\"\n            >{{(product.regular_price - product.price)\n            /product.regular_price*100 | number : '1.0-0'}}% OFF</span\n          >\n        </ion-label>\n        <ion-label *ngIf=\"!product.sale_price\">\n          <span class=\"price\" [innerHTML]=\"product.formated_price\"></span>\n        </ion-label>\n      </ion-item>\n\n      <div\n        class=\"variation-block\"\n        *ngIf=\"product.variationOptions && product.variationOptions.length\"\n      >\n        <div\n          *ngFor=\"let attribute of product.variationOptions; let i = index\"\n          class=\"variation-product\"\n        >\n          <h6 style=\"margin-left: 16px; font-size: 14px\">\n            {{\"Select\" | translate}} {{attribute.name}}\n          </h6>\n          <div *ngIf=\"attribute.options.length\" class=\"option-box\">\n            <ion-button\n              class=\"option-button\"\n              fill=\"outline\"\n              color=\"{{settings.theme.button}}\"\n              *ngFor=\"let option of attribute.options\"\n              (click)=\"chooseVariation2(i, option)\"\n              [ngClass]=\"{'selected-option': attribute.selected == option}\"\n              >{{option}}</ion-button\n            >\n          </div>\n        </div>\n      </div>\n\n      <!-- USE WHEN ABOVE ONE NOT WORKING PROPERLY -->\n      <!--div class=\"variation-block\" *ngIf=\"variations.length\">\n            <div *ngFor=\"let attribute of usedVariationAttributes\" class=\"variation-product\">\n               <h6 style=\"margin-left: 16px;font-size: 14px;\">{{\"Select\" | translate}} {{attribute.name}}</h6>\n               <div *ngIf=\"attribute.options.length\" class=\"option-box\">\n                  <ion-button class=\"option-button\" fill=\"outline\" color=\"{{settings.theme.button}}\" *ngFor=\"let option of attribute.options\" (click)=\"chooseVariation(attribute, option)\" [ngClass]=\"{'selected-option': attribute.selected == option}\">{{option}}</ion-button>\n               </div>\n            </div>\n         </div-->\n\n      <div class=\"grouped-block\" *ngIf=\"groupedProducts.length\">\n        <div *ngFor=\"let item of groupedProducts\" class=\"variation-product\">\n          <ion-input\n            style=\"margin-left: 16px; margin-right: 16px\"\n            type=\"number\"\n            [(ngModel)]=\"item.selected\"\n            value=\"0\"\n            placeholder=\"Quantity\"\n          ></ion-input>\n          <h6 style=\"margin-left: 16px; font-size: 14px\">{{item.name}}</h6>\n        </div>\n      </div>\n\n      <!-- Product Addons -->\n      <div *ngIf=\"addonsList.length\">\n        <div *ngFor=\"let item of addonsList; let i = index\">\n          <ion-item lines=\"none\" *ngIf=\"item.description !== ''\"\n            ><ion-label>{{item.description}}</ion-label></ion-item\n          >\n          <ion-item\n            *ngIf=\"item.type == 'checkbox' || (item.type == 'multiple_choice' && item.display != 'radiobutton') || item.type == 'radiobutton'  || item.type == 'select'\"\n            class=\"addons\"\n            lines=\"none\"\n          >\n            <ion-label>{{item.name}}</ion-label>\n\n            <ion-select\n              [(ngModel)]=\"item.selected\"\n              multiple=\"true\"\n              *ngIf=\"item.type == 'checkbox' && item.options.length\"\n            >\n              <ion-select-option\n                *ngFor=\"let option of item.options\"\n                value=\"{{option.label}}\"\n                >{{option.label}}<span *ngIf=\"option.price\">\n                  + {{option.price |\n                  currency:settings.currency:true:'1.2-2'}}</span\n                ></ion-select-option\n              >\n            </ion-select>\n\n            <ion-select\n              [(ngModel)]=\"item.selected\"\n              multiple=\"true\"\n              *ngIf=\"(item.display != 'radiobutton' && item.type == 'multiple_choice') && item.options.length\"\n            >\n              <ion-select-option\n                *ngFor=\"let option of item.options\"\n                value=\"{{option.label}}\"\n                >{{option.label}}<span *ngIf=\"option.price\">\n                  + {{option.price |\n                  currency:settings.currency:true:'1.2-2'}}</span\n                ></ion-select-option\n              >\n            </ion-select>\n\n            <ion-select\n              [(ngModel)]=\"item.selected\"\n              *ngIf=\"item.type == 'radiobutton' && item.options.length\"\n            >\n              <ion-select-option\n                *ngFor=\"let option of item.options\"\n                value=\"{{option.label}}\"\n                >{{option.label}}<span *ngIf=\"option.price\">\n                  + {{option.price |\n                  currency:settings.currency:true:'1.2-2'}}</span\n                ></ion-select-option\n              >\n            </ion-select>\n\n            <ion-select\n              [(ngModel)]=\"item.selected\"\n              *ngIf=\"item.type == 'select' && item.options.length\"\n            >\n              <ion-select-option\n                *ngFor=\"let option of item.options\"\n                value=\"{{option.label}}\"\n                >{{option.label}}<span *ngIf=\"option.price\">\n                  + {{option.price |\n                  currency:settings.currency:true:'1.2-2'}}</span\n                ></ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n          <div\n            *ngIf=\"item.type == 'multiple_choice'\"\n            class=\"addons\"\n            lines=\"none\"\n          >\n            <h6 style=\"margin-left: 16px; font-size: 14px\">{{item.name}}</h6>\n            <div\n              class=\"option-box\"\n              *ngIf=\"(item.display == 'radiobutton' && item.type == 'multiple_choice') && item.options.length\"\n            >\n              <ion-button\n                class=\"option-button\"\n                fill=\"outline\"\n                color=\"{{settings.theme.button}}\"\n                *ngFor=\"let option of item.options\"\n                (click)=\"item.selected = []; item.selected[0] = option.label\"\n                [ngClass]=\"{'selected-option': item.selected && item.selected[0] == option.label}\"\n                >{{option.label}}</ion-button\n              >\n            </div>\n          </div>\n          <div\n            style=\"padding: 0 16px\"\n            *ngFor=\"let option of item.options; let j = index\"\n          >\n            <div *ngIf=\"item.type == 'custom_textarea'\">\n              <textarea\n                [(ngModel)]=\"item.options[j].input\"\n                placeholder=\"{{item.name}}\"\n                type=\"text\"\n                style=\"width: 100%; height: 80px\"\n              ></textarea>\n            </div>\n          </div>\n        </div>\n        <div *ngFor=\"let item of addonsList; let i = index\">\n          <div *ngFor=\"let option of item.options; let j = index\">\n            <ion-item\n              *ngIf=\"item.type == 'custom' && item.options.length\"\n              class=\"addon-options\"\n            >\n              <ion-label floating>{{option.label}} {{option.price}}</ion-label>\n              <ion-input\n                required\n                type=\"text\"\n                name=\"data\"\n                [(ngModel)]=\"item.options[j].input\"\n              >\n              </ion-input>\n            </ion-item>\n          </div>\n        </div>\n        <div *ngFor=\"let item of addonsList; let i = index\">\n          <ion-item *ngIf=\"item.type == 'custom_text'\" class=\"addon-options\">\n            <ion-label floating>{{item.name}} {{item.price}}</ion-label>\n            <ion-input\n              required\n              type=\"text\"\n              name=\"data\"\n              [(ngModel)]=\"item.input\"\n            >\n            </ion-input>\n          </ion-item>\n        </div>\n      </div>\n\n      <ion-item lines=\"none\" *ngIf=\"product.showPoints\">\n        <ion-label>Earn {{product.showPoints}} Royalty Points</ion-label>\n      </ion-item>\n\n      <ion-item\n        lines=\"none\"\n        *ngIf=\"product.type == 'simple' || product.type == 'variable'\"\n      >\n        <ion-label position=\"fixed\">{{\"Quantity\" | translate}}</ion-label>\n        <ion-input [(ngModel)]=\"quantity\" type=\"number\" value=\"1\"></ion-input>\n      </ion-item>\n\n      <ion-button\n        *ngIf=\"product.type != 'external'\"\n        class=\"add-to-cart-button\"\n        expand=\"block\"\n        [disabled]=\"disableButton || product.stock_status == 'outofstock' || (product.type == 'grouped' && !groupedProducts.length)\"\n        (click)=\"addToCart()\"\n        >{{\"ADD TO CART\" | translate}}</ion-button\n      >\n      <ion-button\n        *ngIf=\"product.type == 'external'\"\n        class=\"add-to-cart-button\"\n        color=\"{{settings.theme.button}}\"\n        expand=\"block\"\n        fill=\"solid\"\n        [disabled]=\"disableButton || product.stock_status == 'outofstock'\"\n        (click)=\"buyExternalProduct(product.id)\"\n        >{{\"BUY NOW\" | translate}}</ion-button\n      >\n      <ion-item\n        lines=\"none\"\n        *ngIf=\"product.short_description\"\n        class=\"description\"\n      >\n        <ion-label\n          text-justify\n          text-wrap\n          [innerHTML]=\"product.short_description\"\n        >\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\" *ngIf=\"product.description\" class=\"description\">\n        <ion-label text-justify text-wrap [innerHTML]=\"product.description\">\n        </ion-label>\n      </ion-item>\n    </div>\n    <div\n      *ngIf=\"productDetails?.relatedProducts?.length\"\n      class=\"related-products\"\n    >\n      <ion-list-header>\n        <ion-label>{{\"More like this\" | translate}}</ion-label>\n      </ion-list-header>\n      <div class=\"scroll-related-products\">\n        <div\n          class=\"product\"\n          *ngFor=\"let item of productDetails.relatedProducts\"\n          [style.width.px]=\"settings.dimensions.productSliderWidth\"\n        >\n          <ion-card\n            mode=\"{{settings.settings.mode}}\"\n            button=\"true\"\n            class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\"\n            [style.border-radius.px]=\"settings.dimensions.productBorderRadius\"\n            (click)=\"goToProduct(item)\"\n          >\n            <ion-img\n              alt=\"\"\n              [style.height.px]=\"settings.dimensions.homeSliderHeight\"\n              src=\"{{item?.images[0]?.src}}\"\n            ></ion-img\n            ><ion-icon\n              name=\"heart-outline\"\n              mode=\"md\"\n              class=\"wishlist-button-grid\"\n              *ngIf=\"!settings.wishlist[item.id]\"\n              (click)=\"settings.addToWishlist(item.id); $event.stopPropagation()\"\n            ></ion-icon>\n            <ion-icon\n              name=\"heart\"\n              color=\"{{settings.theme.button}}\"\n              mode=\"md\"\n              class=\"wishlist-button-grid\"\n              *ngIf=\"settings.wishlist[item.id]\"\n              (click)=\"settings.removeFromWishlist(item.id); $event.stopPropagation()\"\n            ></ion-icon>\n            <ion-card-header>\n              <ion-card-title mode=\"md\">{{item.name}}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <p class=\"price\">\n                <span\n                  class=\"regular-price\"\n                  *ngIf=\"!item.sale_price\"\n                  [innerHTML]=\"item.formated_price\"\n                ></span>\n                <span\n                  class=\"regular-price\"\n                  *ngIf=\"item.sale_price\"\n                  [innerHTML]=\"item.formated_sales_price\"\n                  ><span class=\"special-price\" [innerHTML]=\"item.formated_price\"\n                    ><del></del></span\n                ></span>\n              </p>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </div>\n    </div>\n    <div\n      *ngIf=\"productDetails?.upsellProducts?.length\"\n      class=\"related-products\"\n    >\n      <ion-list-header>\n        <ion-label>{{\"You might love\" | translate}}</ion-label>\n      </ion-list-header>\n      <div class=\"scroll-related-products\">\n        <div\n          class=\"product\"\n          *ngFor=\"let item of productDetails.upsellProducts\"\n          [style.width.px]=\"settings.dimensions.productSliderWidth\"\n        >\n          <ion-card\n            mode=\"{{settings.settings.mode}}\"\n            button=\"true\"\n            class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\"\n            [style.border-radius.px]=\"settings.dimensions.productBorderRadius\"\n            (click)=\"goToProduct(item)\"\n          >\n            <ion-img\n              alt=\"\"\n              [style.height.px]=\"settings.dimensions.homeSliderHeight\"\n              src=\"{{item?.images[0]?.src}}\"\n            ></ion-img>\n            <ion-icon\n              name=\"heart-outline\"\n              mode=\"md\"\n              class=\"wishlist-button-grid\"\n              *ngIf=\"!settings.wishlist[item.id]\"\n              (click)=\"settings.addToWishlist(item.id); $event.stopPropagation()\"\n            ></ion-icon>\n            <ion-icon\n              name=\"heart\"\n              color=\"{{settings.theme.button}}\"\n              mode=\"md\"\n              class=\"wishlist-button-grid\"\n              *ngIf=\"settings.wishlist[item.id]\"\n              (click)=\"settings.removeFromWishlist(item.id); $event.stopPropagation()\"\n            ></ion-icon>\n            <ion-card-header>\n              <ion-card-title mode=\"md\">{{item.name}}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <p class=\"price\">\n                <span\n                  class=\"regular-price\"\n                  *ngIf=\"!item.sale_price\"\n                  [innerHTML]=\"item.formated_price\"\n                ></span>\n                <span\n                  class=\"regular-price\"\n                  *ngIf=\"item.sale_price\"\n                  [innerHTML]=\"item.formated_sales_price\"\n                  ><span class=\"special-price\" [innerHTML]=\"item.formated_price\"\n                    ><del></del></span\n                ></span>\n              </p>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </div>\n    </div>\n    <div\n      *ngIf=\"productDetails?.crossSellProducts?.length\"\n      class=\"related-products\"\n    >\n      <ion-list-header>\n        <ion-label>{{\"Recommended\" | translate}}</ion-label>\n      </ion-list-header>\n      <div class=\"scroll-related-products\">\n        <div\n          class=\"product\"\n          *ngFor=\"let item of productDetails.crossSellProducts\"\n          [style.width.px]=\"settings.dimensions.productSliderWidth\"\n        >\n          <ion-card\n            mode=\"{{settings.settings.mode}}\"\n            button=\"true\"\n            class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\"\n            [style.border-radius.px]=\"settings.dimensions.productBorderRadius\"\n            (click)=\"goToProduct(item)\"\n          >\n            <ion-img\n              alt=\"\"\n              [style.height.px]=\"settings.dimensions.homeSliderHeight\"\n              src=\"{{item?.images[0]?.src}}\"\n            ></ion-img\n            ><ion-icon\n              name=\"heart-outline\"\n              mode=\"md\"\n              class=\"wishlist-button-grid\"\n              *ngIf=\"!settings.wishlist[item.id]\"\n              (click)=\"settings.addToWishlist(item.id); $event.stopPropagation()\"\n            ></ion-icon>\n            <ion-icon\n              name=\"heart\"\n              color=\"{{settings.theme.button}}\"\n              mode=\"md\"\n              class=\"wishlist-button-grid\"\n              *ngIf=\"settings.wishlist[item.id]\"\n              (click)=\"settings.removeFromWishlist(item.id); $event.stopPropagation()\"\n            ></ion-icon>\n            <ion-card-header>\n              <ion-card-title mode=\"md\">{{item.name}}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <p class=\"price\">\n                <span\n                  class=\"regular-price\"\n                  *ngIf=\"!item.sale_price\"\n                  [innerHTML]=\"item.formated_price\"\n                ></span>\n                <span\n                  class=\"regular-price\"\n                  *ngIf=\"item.sale_price\"\n                  [innerHTML]=\"item.formated_sales_price\"\n                  ><span class=\"special-price\" [innerHTML]=\"item.formated_price\"\n                    ><del></del></span\n                ></span>\n              </p>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </div>\n    </div>\n    <ion-item\n      detail=\"true\"\n      (click)=\"getReviewsPage()\"\n      class=\"review-item ion-activatable\"\n    >\n      <ion-label>\n        <span *ngIf=\"reviews.length != 0\">{{reviews.length}}</span> {{\"Customer\n        Reviews\" | translate}}</ion-label\n      >\n      <ion-icon name=\"ios-arrow-forward\" item-end></ion-icon>\n    </ion-item>\n    <div *ngFor=\"let item of reviews\">\n      <ion-item lines=\"none\">\n        <ion-avatar slot=\"start\">\n          <ion-img\n            alt=\"\"\n            src=\"https://www.gravatar.com/avatar/{{item.avatar}}\"\n          ></ion-img>\n        </ion-avatar>\n        <ion-label>\n          {{item.author}}\n          <span class=\"rating review-star\">\n            <span\n              class=\"star-icon\"\n              [ngClass]=\"{full: item.rating >= 1, half: item.rating == 0.5}\"\n              >&#x2605;</span\n            >\n            <span\n              class=\"star-icon\"\n              [ngClass]=\"{full: item.rating >= 2, half: item.rating == 1.5}\"\n              >&#x2605;</span\n            >\n            <span\n              class=\"star-icon\"\n              [ngClass]=\"{full: item.rating >= 3, half: item.rating == 2.5}\"\n              >&#x2605;</span\n            >\n            <span\n              class=\"star-icon\"\n              [ngClass]=\"{full: item.rating >= 4, half: item.rating == 3.5}\"\n              >&#x2605;</span\n            >\n            <span\n              class=\"star-icon\"\n              [ngClass]=\"{full: item.rating >= 5, half: item.rating == 4.5}\"\n              >&#x2605;</span\n            ></span\n          >\n          <p>{{item.date | datepipe}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"review-content\">\n          <p text-wrap [innerHTML]=\"item.content\"></p>\n        </ion-label>\n      </ion-item>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html": function node_modulesRawLoaderDistCjsJsSrcAppProductsProductsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/categories\"></ion-back-button>\n    </ion-buttons>\n      <ion-searchbar mode=\"ios\" animated *ngIf=\"showSearch\" [(ngModel)]=\"searchInput\" (ionChange)=\"onInput()\"></ion-searchbar>\n    <ion-buttons slot=\"end\" (click)=\"getFilter()\"><ion-icon name=\"funnel\" style=\"margin: 0 8px; font-size: 23px\"></ion-icon></ion-buttons>\n    <!--ion-buttons slot=\"end\" (click)=\"toggleGridView()\"><ion-icon name=\"{{gridView ? 'menu' : 'grid' }}\" style=\"margin: 0 8px;font-size: 23px\"></ion-icon></ion-buttons-->\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"subCategories.length\" class=\"scrollmenu2\">\n    <div *ngFor=\"let item of subCategories\" class=\"scroll ion-activatable ion-focusable hydrated\" (click)=\"getCategory(item.id)\">\n      <img alt=\"\" *ngIf=\"item.image?.src\" src=\"{{item.image.src}}\" [style.border-radius.px]=\"settings.dimensions.suCatBorderRadius\">\n      <h5><span [innerHTML]=\"item.name\"></span></h5>\n    </div>\n  </div>\n\n  \n  <div class=\"spinner\" *ngIf=\"loader\"><ion-spinner> </ion-spinner></div>\n  <div class=\"spinner\" *ngIf=\"!loader && products.length == 0\">{{\"No Results\" | translate}}</div>\n\n  <!-- GRID VIEW --> \n  <div style=\"padding-bottom: 0; padding-top: 0;\" *ngIf=\"products && gridView\">\n    <ion-row>\n    <ion-col size=\"{{settings.colWidthProducts}}\" size-sm=\"4\" size-md=\"3\" [style.padding.px]=\"settings.dimensions.productPadding\" *ngFor=\"let product of products\">\n    <ion-card mode=\"{{settings.settings.mode}}\" button=\"true\" class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\" (click)=\"getProduct(product)\">\n      <ion-img alt=\"\" [style.height.px]=\"settings.dimensions.productsGridViewHeight\" *ngIf=\"product.images?.length\" src=\"{{product.images[0].src}}\"></ion-img>\n      <ion-img alt=\"\" [style.height.px]=\"settings.dimensions.productsGridViewHeight\" *ngIf=\"!product.images?.length\" src=\"assets/image/logo.png\"></ion-img>\n      <ion-icon name=\"heart-outline\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[product.id]\" (click)=\"settings.addToWishlist(product.id); $event.stopPropagation()\"></ion-icon>\n      <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[product.id]\" (click)=\"settings.removeFromWishlist(product.id); $event.stopPropagation()\"></ion-icon>\n\n       <ion-button color=\"danger\" class=\"stock\" *ngIf=\"product.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\n      <div *ngIf=\"product.stock_status == 'instock'\">\n      <ion-button class=\"offer\" *ngIf=\"((product.regular_price - product.price) /product.regular_price*100) >= 1\">{{(product.regular_price - product.price) / product.regular_price*100 | number : '1.0-0'}}%</ion-button>\n      </div>\n                        \n      <ion-card-header class=\"ion-activatable ion-focusable hydrated\">\n        <ion-card-title>{{product.name}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content class=\"ion-activatable ion-focusable hydrated\">\n        <p class=\"price\">\n          <span class=\"regular-price\" *ngIf=\"!product.sale_price\" [innerHTML]=\"product.formated_price\"></span>\n          <span class=\"regular-price\" *ngIf=\"product.formated_sales_price\" [innerHTML]=\"product.formated_sales_price\"></span>\n            <del><span *ngIf=\"product.sale_price\" class=\"special-price\" [innerHTML]=\"product.formated_price\"></span></del>\n          </p>\n        </ion-card-content>\n      </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n  <!-- END OF GRID VIEW -->\n\n  <!-- LIST VIEW -->\n  <!--ion-list style=\"padding-bottom: 0; padding-top: 0;\" class=\"product-list3\" *ngIf=\"products && !gridView\">\n  <ion-item *ngFor=\"let product of products\" lines=\"none\">\n        <ion-thumbnail slot=\"start\" (click)=\"getProduct(product)\" class=\"ion-activatable ion-focusable hydrated\">\n            <img *ngIf=\"product.images?.length\" src=\"{{product.images[0].src}}\">\n        </ion-thumbnail>\n        <ion-grid class=\"details\">\n            <ion-row (click)=\"getProduct(product)\">\n                <ion-col>\n                    <ion-label>\n                        {{product.name}}\n                    </ion-label>\n                </ion-col>\n            </ion-row>\n            <ion-row (click)=\"getProduct(product)\">\n                <ion-col>\n                    <p class=\"price\">\n                    <span class=\"regular-price\" *ngIf=\"!product.sale_price\" [innerHTML]=\"product.formated_price\"></span>\n                    <span class=\"regular-price\" *ngIf=\"product.sale_price\" [innerHTML]=\"product.formated_sales_price\"></span>\n                      <del><span *ngIf=\"product.sale_price\" class=\"special-price\" [innerHTML]=\"product.formated_price\">{{product.formated_price}}</span></del>\n                    <span class=\"percent-off\" *ngIf=\"((product.regular_price - product.price) /product.regular_price*100) >= 1\">{{(product.regular_price - product.price) /product.regular_price*100 | number : '1.0-0'}}% OFF\n                    </span>\n                    </p>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-icon (click)=\"settings.addToWishlist(product.id)\" *ngIf=\"!settings.wishlist[product.id]\" class=\"wishlist-button-list\" mode=\"md\" name=\"heart-outline\">\n                    </ion-icon>\n                    <ion-icon (click)=\"settings.removeFromWishlist(product.id)\" *ngIf=\"settings.wishlist[product.id]\" class=\"wishlist-button-list\" color=\"{{settings.theme.button}}\" mode=\"md\" name=\"heart\">\n                    </ion-icon>\n                </ion-col>\n            <ion-row class=\"ion-align-items-end ion-justify-content-end\" style=\"float: right;\">\n                <ion-col align-self-end *ngIf=\"data.cart[product.id] == undefined || data.cart[product.id] == 0\">\n                    <ion-button style=\"--border-radius: 4px;\" size=\"small\" fill=\"outline\" color=\"{{settings.theme.button}}\" [disabled]=\"product.stock_status == 'outofstock'\" (click)=\"addToCart(product)\">\n                      {{product.stock_status == 'outofstock' ? \"No Stock\" : \"ADD\"  | translate}}\n                    </ion-button>\n                </ion-col>\n                <ion-col *ngIf=\"data.cart[product.id] >= 1\" align-self-end>\n                    <ion-button style=\"--padding-end: 0; --padding-start: 0\" fill=\"clear\" (click)=\"deleteFromCart(product)\">\n                    <ion-icon slot=\"icon-only\" color=\"{{settings.theme.button}}\" name=\"remove-circle-outline\"></ion-icon>\n                    </ion-button>\n\n                    <ion-button style=\"padding-left: 0; padding-right: 0; width: 30px;\"color=\"{{settings.theme.button}}\" fill=\"clear\" *ngIf=\"data.cart[product.id] >= 1\">{{data.cart[product.id]}}\n                    </ion-button>\n                    <ion-button style=\"--padding-end: 0; --padding-start: 0\" size=\"small\" fill=\"clear\" color=\"{{settings.theme.button}}\"  *ngIf=\"data.cart[product.id] >= 1\" (click)=\"updateToCart(product)\">\n                    <ion-icon slot=\"icon-only\" name=\"add-circle-outline\"></ion-icon>\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n            </ion-row >\n        </ion-grid>\n    </ion-item>\n  </ion-list-->\n  <!-- END OF LIST VIEW -->\n\n\n\n\n  <ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && products.length\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/review/review.page.html": function node_modulesRawLoaderDistCjsJsSrcAppReviewReviewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home/product\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Review\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"spinner\" *ngIf=\"!reviews\">\n    <ion-spinner> </ion-spinner>\n  </div>\n\n<div *ngIf=\"reviews && showReviews\">\n\n<ion-grid class=\"review-percent-block\">\n<ion-row>\n  <ion-list-header>\n    <ion-label mode=\"ios\" style=\"text-align: center; padding-bottom: 10px;\">Review Summary</ion-label>\n  </ion-list-header>\n</ion-row>\n  <ion-row>\n    <ion-col size=\"4\">\n      <h3 class=\"review-stars\"><span class=\"rating review-star\" style=\"float:none\">\n      <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon full\">&#x2605;</span></span><span style=\"padding: 0 6px\">({{count5 | number : '1.0-0'}})</span> </h3>\n    </ion-col>\n    <ion-col size=\"6\">\n      <div class=\"progress-bar\" item-right><span [style.width.%]=\"count5Percentage\"></span></div>\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-text item-right> <span style=\"padding: 0 6px\">{{count5Percentage | number : '1.0-0'}}%</span> </ion-text>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"4\">\n      <h3 class=\"review-stars\"><span class=\"rating review-star\" style=\"float:none\"><span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon\">&#x2605;</span></span><span style=\"padding: 0 6px\">({{count4 | number : '1.0-0'}})</span></h3>\n    </ion-col>\n    <ion-col size=\"6\">\n      <div class=\"progress-bar\" item-right><span [style.width.%]=\"count4Percentage\"></span></div>\n    </ion-col>\n    <ion-col size=\"2\">\n      <h3 item-right><span style=\"padding: 0 6px\">{{count4Percentage | number : '1.0-0'}}%</span> </h3>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"4\">\n      <h3 class=\"review-stars\"><span class=\"rating review-star\" style=\"float:none\">\n      <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon\">&#x2605;</span> <span class=\"star-icon\">&#x2605;</span> </span><span style=\"padding: 0 6px\">({{count3 | number : '1.0-0'}})</span></h3>\n    </ion-col>\n    <ion-col size=\"6\">\n      <div class=\"progress-bar\" item-right><span [style.width.%]=\"count3Percentage\"></span></div>\n    </ion-col>\n    <ion-col size=\"2\">\n      <h3 item-right><span style=\"padding: 0 6px\">{{count3Percentage | number : '1.0-0'}}%</span> </h3>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"4\">\n      <h3 class=\"review-stars\"><span class=\"rating review-star\" style=\"float:none\">\n      <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon\">&#x2605;</span> <span class=\"star-icon\">&#x2605;</span> <span class=\"star-icon\">&#x2605;</span> </span><span style=\"padding: 0 6px\">({{count2 | number : '1.0-0'}})</span></h3>\n    </ion-col>\n    <ion-col size=\"6\">\n      <div class=\"progress-bar\" item-right><span [style.width.%]=\"count2Percentage\"></span></div>\n    </ion-col>\n    <ion-col size=\"2\">\n      <h3 item-right><span style=\"padding: 0 6px\">{{count2Percentage | number : '1.0-0'}}%</span> </h3>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"4\">\n      <h3 class=\"review-stars\"><span class=\"rating review-star\" style=\"float:none\">\n      <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon\">&#x2605;</span> <span class=\"star-icon\">&#x2605;</span> <span class=\"star-icon\">&#x2605;</span> <span class=\"star-icon\">&#x2605;</span> </span><span style=\"padding: 0 6px\">({{count1 | number : '1.0-0'}})</span></h3>\n    </ion-col>\n    <ion-col size=\"6\">\n      <div class=\"progress-bar\" item-right><span [style.width.%]=\"count1Percentage\"></span></div>\n    </ion-col>\n    <ion-col size=\"2\">\n      <h3 item-right><span style=\"padding: 0 6px;\">{{count1Percentage | number : '1.0-0'}}%</span> </h3>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n\n            <ion-card mode=\"{{settings.settings.mode}}\" *ngIf=\"ratingVerificationRequired == 'no' || customerBoughtProduct\">\n                <ion-card-content>\n                    <div class=\"new-review\">\n                        <ion-label style=\"margin: 0px 0 6px 18px; font-size:13px\">{{form.name}} <span style=\"margin-right: 10px\">{{\"YOUR RATING\" | translate}}</span> <span class=\"rating review-star\" style=\"float:none;\">\n              <span tappable (click)=\"yourRating(1)\" class=\"star-icon\" [ngClass]=\"{full: form.value.rating >= 1, half: form.value.rating == 0.5}\">&#x2605;</span> <span tappable (click)=\"yourRating(2)\" class=\"star-icon\" [ngClass]=\"{full: form.value.rating >= 2, half: form.value.rating == 1.5}\">&#x2605;</span> <span tappable (click)=\"yourRating(3)\" class=\"star-icon\" [ngClass]=\"{full: form.value.rating >= 3, half: form.value.rating == 2.5}\">&#x2605;</span> <span tappable (click)=\"yourRating(4)\" class=\"star-icon\" [ngClass]=\"{full: form.value.rating >= 4, half: form.value.rating == 3.5}\">&#x2605;</span> <span tappable (click)=\"yourRating(5)\" class=\"star-icon\" [ngClass]=\"{full: form.value.rating >= 5, half: form.value.rating == 4.5}\">&#x2605;</span> </span>\n                        </ion-label>\n                        <div class=\"comment-form\">\n                            <form [formGroup]=\"form\">\n                                <ion-list>\n                                    <ion-item *ngIf=\"!settings.customer?.id\">\n                                        <ion-input type=\"text\" formControlName=\"author\"  placeholder=\"{{'Name' | translate}}\"> </ion-input>\n                                    </ion-item>\n                                    <ion-item *ngIf=\"!settings.customer?.id\">\n                                        <ion-input type=\"email\" formControlName=\"email\" placeholder=\"{{'Email' | translate}}\"> </ion-input>\n                                    </ion-item>\n                                    <ion-item>\n                                        <ion-input required formControlName=\"comment\" placeholder=\"{{'Comment' | translate}}\">\n                                        </ion-input>\n                                    </ion-item>\n                                </ion-list>\n                                <div>\n                                    <ion-button color=\"{{settings.theme.button}}\" [disabled]=\"!form.valid || disableSubmit\" expand=\"block\" (click)=\"onSubmit()\">{{\"Submit\" | translate}}\n                                    </ion-button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n\n\n<div *ngFor=\"let item of reviews\">\n<ion-item lines=\"none\">\n  <ion-avatar slot=\"start\">\n    <ion-img alt=\"\" src=\"https://www.gravatar.com/avatar/{{item.avatar}}\"></ion-img>\n  </ion-avatar>\n  <ion-label>\n    <h2>{{item.author}}\n     <span class=\"rating review-star\">\n     <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 1, half: item.rating == 0.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 2, half: item.rating == 1.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 3, half: item.rating == 2.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 4, half: item.rating == 3.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 5, half: item.rating == 4.5}\">&#x2605;</span></span>\n    </h2>\n  <p>{{item.date | datepipe}}</p>\n  </ion-label>\n</ion-item>\n<ion-item><ion-label class=\"review-content\"><p text-wrap [innerHTML]=\"item.content\"></p></ion-label></ion-item>\n</div>\n\n  <!--ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll-->\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html": function node_modulesRawLoaderDistCjsJsSrcAppSearchSearchPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\n  <ion-toolbar>\n  \t<ion-searchbar mode=\"ios\" animated [(ngModel)]=\"searchInput\" (ionChange)=\"onInput()\"></ion-searchbar>\n  <!--ion-buttons slot=\"primary\">\n    <ion-icon slot=\"end\" color=\"medium\" (click)=\"scanBarcode()\" slot=\"icon-only\" name=\"barcode-outline\"></ion-icon>\n  </ion-buttons-->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"search\">\n\n<div *ngIf=\"!loading && !products.length && !searchInput\" class=\"empty\">\n  <ion-icon color=\"medium\" name=\"search\"></ion-icon>\n</div>  \n\n<div class=\"spinner\" *ngIf=\"loading\"><ion-spinner> </ion-spinner></div>\n\n<div *ngIf=\"!products.length && !loading && searchInput\" class=\"no-products\">\n  <h2>{{\"No Products found\" | translate}}!</h2>\n</div>\n\n<div *ngIf=\"!loading && products\">\n  <ion-row>\n    <ion-col size=\"{{settings.colWidthSearch}}\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let product of products\" [style.padding.px]=\"settings.dimensions.productPadding\">\n    <ion-card mode=\"{{settings.settings.mode}}\" button=\"true\" class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\" (click)=\"getProduct(product)\">\n      <ion-img alt=\"\" *ngIf=\"product.images\" [style.height.px]=\"settings.dimensions.searchGridViewHeight\" src=\"{{product.images[0]?.src}}\"></ion-img>\n      <ion-icon name=\"heart-outline\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[product.id]\" (click)=\"settings.addToWishlist(product.id); $event.stopPropagation()\"></ion-icon>\n      <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[product.id]\" (click)=\"settings.removeFromWishlist(product.id); $event.stopPropagation()\"></ion-icon>\n\n      <ion-button color=\"danger\" class=\"stock\" *ngIf=\"product.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\n      <div *ngIf=\"product.stock_status == 'instock'\">\n      <ion-button class=\"offer\" *ngIf=\"((product.regular_price - product.price) /product.regular_price*100) >= 1\">{{(product.regular_price - product.price) /product.regular_price*100 | number : '1.0-0'}}%</ion-button>\n      </div>\n      \n      <ion-card-header>\n        <ion-card-title mode=\"md\">{{product.name}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p class=\"price\">\n            <span class=\"regular-price\" *ngIf=\"!product.sale_price\" [innerHTML]=\"product.formated_price\"></span>\n            <span class=\"regular-price\" *ngIf=\"product.sale_price\" [innerHTML]=\"product.formated_price\">{{product.formated_sales_price}}<span class=\"special-price\"><del [innerHTML]=\"product.formated_price\">{{product.formated_price}}</del></span></span>\n        </p>\n      </ion-card-content>\n    </ion-card>\n    </ion-col>\n  </ion-row>\n</div>\n\n  <!-- LIST VIEW -->\n  <!--ion-list style=\"padding-bottom: 0; padding-top: 0;\" class=\"product-list3\" *ngIf=\"!loading && products\">\n  <ion-item *ngFor=\"let product of products\" lines=\"none\">\n        <ion-thumbnail slot=\"start\" (click)=\"getProduct(product)\" class=\"ion-activatable ion-focusable hydrated\">\n            <img *ngIf=\"product.images?.length\" src=\"{{product.images[0].src}}\">\n        </ion-thumbnail>\n        <ion-grid class=\"details\">\n            <ion-row (click)=\"getProduct(product)\">\n                <ion-col>\n                    <ion-label>\n                        {{product.name}}\n                    </ion-label>\n                </ion-col>\n            </ion-row>\n            <ion-row (click)=\"getProduct(product)\">\n                <ion-col>\n                    <p class=\"price\">\n                    <span class=\"regular-price\" *ngIf=\"!product.sale_price\" [innerHTML]=\"product.formated_price\"></span>\n                    <span class=\"regular-price\" *ngIf=\"product.sale_price\" [innerHTML]=\"product.formated_sales_price\"></span>\n                      <del><span *ngIf=\"product.sale_price\" class=\"special-price\" [innerHTML]=\"product.formated_price\">{{product.formated_price}}</span></del>\n                    <span class=\"percent-off\" *ngIf=\"((product.regular_price - product.price) /product.regular_price*100) >= 1\">{{(product.regular_price - product.price) /product.regular_price*100 | number : '1.0-0'}}% OFF\n                    </span>\n                    </p>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-icon (click)=\"settings.addToWishlist(product.id)\" *ngIf=\"!settings.wishlist[product.id]\" class=\"wishlist-button-list\" mode=\"md\" name=\"heart-outline\">\n                    </ion-icon>\n                    <ion-icon (click)=\"settings.removeFromWishlist(product.id)\" *ngIf=\"settings.wishlist[product.id]\" class=\"wishlist-button-list\" color=\"{{settings.theme.button}}\" mode=\"md\" name=\"heart\">\n                    </ion-icon>\n                </ion-col>\n            <ion-row class=\"ion-align-items-end ion-justify-content-end\" style=\"float: right;\">\n                <ion-col align-self-end *ngIf=\"data.cart[product.id] == undefined || data.cart[product.id] == 0\">\n                    <ion-button style=\"--border-radius: 4px;\" size=\"small\" fill=\"outline\" color=\"{{settings.theme.button}}\" [disabled]=\"product.stock_status == 'outofstock'\" (click)=\"addToCart(product)\">\n                      {{product.stock_status == 'outofstock' ? \"No Stock\" : \"ADD\"  | translate}}\n                    </ion-button>\n                </ion-col>\n                <ion-col *ngIf=\"data.cart[product.id] >= 1\" align-self-end>\n                    <ion-button style=\"--padding-end: 0; --padding-start: 0\" fill=\"clear\" (click)=\"deleteFromCart(product)\">\n                    <ion-icon slot=\"icon-only\" color=\"{{settings.theme.button}}\" name=\"remove-circle-outline\"></ion-icon>\n                    </ion-button>\n\n                    <ion-button style=\"padding-left: 0; padding-right: 0; width: 30px;\"color=\"{{settings.theme.button}}\" fill=\"clear\" *ngIf=\"data.cart[product.id] >= 1\">{{data.cart[product.id]}}\n                    </ion-button>\n                    <ion-button style=\"--padding-end: 0; --padding-start: 0\" size=\"small\" fill=\"clear\" color=\"{{settings.theme.button}}\"  *ngIf=\"data.cart[product.id] >= 1\" (click)=\"updateToCart(product)\">\n                    <ion-icon slot=\"icon-only\" name=\"add-circle-outline\"></ion-icon>\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n            </ion-row >\n        </ion-grid>\n    </ion-item>\n  </ion-list-->\n  <!-- END OF LIST VIEW -->\n\n<ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && products.length\" (ionInfinite)=\"loadData($event)\">\n  <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\"\n    loadingText=\"Loading more data...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html": function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\">\n      <!-- <ion-icon name=\"home\" style=\"font-size: 20px;\"></ion-icon> -->\n      <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"svg\" viewBox=\"0 0 512 512\">\n        <title>Home</title>\n        <path\n          d=\"M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z\">\n        </path>\n        <path\n          d=\"M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z\">\n        </path>\n      </svg>\n      <ion-label>{{'Home' | translate}}</ion-label>\n    </ion-tab-button>\n\n    <!--\n    <ion-tab-button tab=\"vendor\">\n      <ion-icon src=\"/assets/icon/storefront.svg\" style=\"font-size: 20px;\"></ion-icon>\n      <ion-label>{{'Store' | translate}}</ion-label>\n    </ion-tab-button>\n    -->\n\n    <ion-tab-button tab=\"search\">\n      <!-- <ion-icon name=\"search\" style=\"font-size: 20px;\"></ion-icon> -->\n      <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"svg\" viewBox=\"0 0 512 512\">\n        <title>Search</title>\n        <path\n          d=\"M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z\">\n        </path>\n      </svg>\n      <ion-label>{{'Search' | translate}}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"categories\">\n      <!-- <ion-icon name=\"grid\" style=\"font-size: 20px;\"></ion-icon> -->\n      <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"svg\" viewBox=\"0 0 512 512\">\n        <title>Grid</title>\n        <path\n          d=\"M204 240H68a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM444 240H308a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM204 480H68a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM444 480H308a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36z\">\n        </path>\n      </svg>\n      <ion-label>{{'Category' | translate}}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"cart\">\n      <!-- <ion-icon name=\"basket\" style=\"font-size: 20px;\"></ion-icon> -->\n      <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"svg\" viewBox=\"0 0 512 512\">\n        <title>Basket</title>\n        <path\n          d=\"M424.11 192H360L268.8 70.4a16 16 0 00-25.6 0L152 192H87.89a32.57 32.57 0 00-32.62 32.44 30.3 30.3 0 001.31 9l46.27 163.14a50.72 50.72 0 0048.84 36.91h208.62a51.21 51.21 0 0049-36.86l46.33-163.36a15.62 15.62 0 00.46-2.36l.53-4.93a13.3 13.3 0 00.09-1.55A32.57 32.57 0 00424.11 192zM256 106.67L320 192H192zm0 245a37.7 37.7 0 1137.88-37.7A37.87 37.87 0 01256 351.63z\">\n        </path>\n      </svg>\n      <ion-label>{{'Cart' | translate}}</ion-label>\n      <ion-badge color=\"danger\" *ngIf=\"data.count != 0\">{{data.count}}</ion-badge>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"account\">\n      <!-- <ion-icon name=\"person\" style=\"font-size: 20px;\"></ion-icon> -->\n      <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"svg\" viewBox=\"0 0 512 512\">\n        <title>Person</title>\n        <path\n          d=\"M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z\">\n        </path>\n      </svg>\n      <ion-label>{{'Account' | translate}}</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/edit-order/edit-order.page.html": function node_modulesRawLoaderDistCjsJsSrcAppVendorEditOrderEditOrderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account/order-list\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{\"Edit Order\" | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\t<div *ngIf=\"orders\">\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label>{{\"Order ID\" | translate}} - {{orders.id}}</ion-label>\n    </ion-item>\n\n    <ion-item style=\"padding-top:10px\">\n      <ion-label position=\"floating\"y>Status</ion-label>\n      <ion-select [(ngModel)]=\"orders.status\" name=\"status\" okText=\"OK\" cancelText=\"Cancel\">\n                <ion-select-option value=\"processing\">{{\"processing\" | translate}}</ion-select-option>\n                <ion-select-option value=\"on-hold\">{{\"on-hold\" | translate}}</ion-select-option>\n                <ion-select-option value=\"completed\">{{\"completed\" | translate}}</ion-select-option>\n                <ion-select-option value=\"cancelled\">{{\"cancelled\" | translate}}</ion-select-option>\n                <ion-select-option value=\"refunded\">{{\"refunded\" | translate}}</ion-select-option>\n                <ion-select-option value=\"failed\">{{\"failed\" | translate}}</ion-select-option>\n                <ion-select-option value=\"pending\">{{\"pending\" | translate}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Discount Total\" | translate}}</ion-label>\n      <ion-input required type=\"number\" [(ngModel)]=\"orders.discount_total\" name=\"discount_total\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Shipping Total\" | translate}}</ion-label>\n      <ion-input required type=\"number\" [(ngModel)]=\"orders.shipping_total\" name=\"shipping_total\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Total\" | translate}}</ion-label>\n      <ion-input required type=\"number\" [(ngModel)]=\"orders.total\" name=\"total\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n\t  <ion-label position=\"floating\">{{\"customer note\" | translate}}</ion-label>\n\t  <ion-textarea rows=\"3\" required type=\"text\" [(ngModel)]=\"orders.customer_note\" name=\"customer_note\"></ion-textarea>\n\t</ion-item>\n\n    <ion-item style=\"background: #f2f2f2\">\n      <ion-label>{{\"Billing Address\" | translate}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"First Name\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.first_name\" name=\"billing_first_name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Last Name\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.last_name\" name=\"billing_last_name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Company\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.company\" name=\"billing_company\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Address\" | translate}}1</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.address_1\" name=\"billing_address_1\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Address\" | translate}}2</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.address_2\" name=\"billing_address_2\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"City\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.city\" name=\"billing_city\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"State\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.state\" name=\"billing_state\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Postcode\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.postcode\" name=\"billing_postcode\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Country\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.country\" name=\"billing_country\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Email\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.email\" name=\"billing_email\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Phone\" | translate}}</ion-label>\n      <ion-input required type=\"number\" [(ngModel)]=\"orders.billing.phone\" name=\"billing_phone\"></ion-input>\n    </ion-item>\n\n    <ion-item style=\"background: #f2f2f2\">\n      <ion-label>{{\"Shipping Address\" | translate}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"First Name\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.first_name\" name=\"shipping_first_name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Last Name\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.last_name\" name=\"shipping_last_name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Company\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.company\" name=\"shipping_company\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Address\" | translate}}1</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.address_1\" name=\"shipping_address_1\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Address\" | translate}}2</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.address_2\" name=\"shipping_address_2\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"City\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.city\" name=\"shipping_city\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"State\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.state\" name=\"shipping_state\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Postcode\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.postcode\" name=\"shipping_postcode\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Country\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.country\" name=\"shipping_country\"></ion-input>\n    </ion-item>\n\n    <ion-item style=\"background: #f2f2f2\">\n      <h2 item-left style=\"font-size: 19px\">{{\"Line Items\" | translate}}</h2>\n    </ion-item>\n\n    <div *ngIf=\"orders.line_items.length\">\n          <div *ngFor=\"let item of orders.line_items\">\n                <ion-list style=\"margin-bottom: 5px;\">\n                    <ion-item>\n                      <ion-label>{{item.name}}</ion-label>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label position=\"floating\">{{\"Price\" | translate}}</ion-label>\n                      <ion-input required type=\"number\" [(ngModel)]=\"item.price\" name=\"price\"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label position=\"floating\">{{\"Quantity\" | translate}}</ion-label>\n                      <ion-input required type=\"number\" [(ngModel)]=\"item.quantity\" name=\"quantity\"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label position=\"floating\">{{\"Sub Total\" | translate}}</ion-label>\n                      <ion-input required type=\"number\" [(ngModel)]=\"item.subtotal\" name=\"subtotal\"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label position=\"floating\">{{\"Total\" | translate}}</ion-label>\n                      <ion-input required type=\"number\" [(ngModel)]=\"item.total\" name=\"total\"></ion-input>\n                    </ion-item>\n                </ion-list>\n          </div>\n    </div>\n\n\n  </ion-list>\n\n  <div style=\"text-align: center;\">\n    <ion-button size=\"full\" color=\"{{settings.theme.button}}\" (click)=\"save()\" [disabled]=\"disableButton\">{{\"Save\" | translate}}</ion-button>\n  </div>\n\n</div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/edit-product/edit-product.page.html": function node_modulesRawLoaderDistCjsJsSrcAppVendorEditProductEditProductPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios' class=\"product-header\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account/products-list\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{product?.name}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"product\">\n\n  <div *ngIf=\"product\" class=\"margin\">\n\n  <ion-list>\n  <ion-list-header>\n    <ion-label>{{\"Product ID\" | translate}} - {{product.id}}</ion-label>\n  </ion-list-header>\n\n  <ion-item>\n      <ion-label position=\"floating\">{{\"Name\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"product.name\" name=\"name\"></ion-input>\n  </ion-item>\n\n  <ion-item style=\"padding-top:10px\">\n      <ion-label position=\"floating\">{{\"Type\" | translate}}</ion-label>\n      <ion-select [(ngModel)]=\"product.type\" name=\"type\" okText=\"OK\" cancelText=\"Cancel\">\n                 <ion-select-option value=\"simple\">{{\"Simple\" | translate}}</ion-select-option>\n               <ion-select-option value=\"grouped\">{{\"Grouped\" | translate}}</ion-select-option>\n               <ion-select-option value=\"external\">{{\"External\" | translate}}</ion-select-option>\n               <!--ion-select-option value=\"variable\">Variable</ion-select-option-->\n      </ion-select>\n  </ion-item>\n\n\n  <ion-item style=\"padding-top:10px\">\n      <ion-label position=\"floating\">{{\"Status\" | translate}}</ion-label>\n      <ion-select [(ngModel)]=\"product.status\" name=\"status\" okText=\"OK\" cancelText=\"Cancel\">\n                 <ion-select-option value=\"draft\">{{\"Draft\" | translate}}</ion-select-option>\n               <ion-select-option value=\"pending\">{{\"Pending\" | translate}}</ion-select-option>\n               <!--ion-select-option value=\"public\">public</ion-select-option-->\n               <ion-select-option value=\"publish\">{{\"Publish\" | translate}}</ion-select-option>\n      </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf=\"product.type == 'external'\">\n    <ion-label position=\"floating\">{{\"External Url\" | translate}}</ion-label>\n    <ion-input required type=\"text\" [(ngModel)]=\"product.external_url\" name=\"external_url\"></ion-input>\n  </ion-item>\n\n\n  <ion-item>\n      <ion-label position=\"floating\">{{\"Short Description\" | translate}}</ion-label>\n      <ion-textarea rows=\"4\" required type=\"text\" [(ngModel)]=\"product.short_description\" name=\"short_description\"></ion-textarea>\n  </ion-item>  \n\n  <ion-item>\n      <ion-label position=\"floating\">{{\"Description\" | translate}}</ion-label>\n      <ion-textarea rows=\"4\" required type=\"text\" [(ngModel)]=\"product.description\" name=\"description\"></ion-textarea>\n  </ion-item>\n\n  <ion-list-header>\n    <ion-label>{{\"Image\" | translate}}</ion-label>\n  </ion-list-header>\n      <div style=\"padding: 8px 16px;\">\n      <div *ngIf=\"product?.images && product.images.length\">\n      <img tappable *ngFor=\"let item of product.images; let i = index;\" src=\"{{item.src}}\" style=\"width: 80px; height: auto; padding: 3px; border: 1px solid #f5fdff\" (click)=\"replaceImage(i)\">\n      </div>\n\n      <ion-spinner *ngIf=\"uploadingImage\" name=\"circles\" style=\"float: left; margin: 27px 27px 27px 27px; padding: 3px; display: inline;\"></ion-spinner>\n      \n      <img tappable src=\"assets/image/upload_placeholder.png\" style=\"width: 80px; height: auto; padding: 3px; border: 1px solid #f5fdff\" (click)=\"picker()\"/>\n    </div>\n  <ion-item>\n      <ion-label position=\"floating\">{{\"Regular Price\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"product.regular_price\" name=\"regular_price\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label position=\"floating\">{{\"Sale Price\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"product.sale_price\" name=\"sale_price\"></ion-input>\n  </ion-item>\n\n<ion-item>\n    <ion-label position=\"floating\">{{\"Weight\" | translate}}</ion-label>\n    <ion-input required type=\"text\" [(ngModel)]=\"product.weight\" name=\"weight\"></ion-input>\n</ion-item>\n\n  <ion-item class=\"date\">\n      <ion-label position=\"floating\">{{\"Date On Sale From\" | translate}}</ion-label>\n      <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"product.date_on_sale_from\" name=\"date_on_sale_from\"></ion-datetime>\n  </ion-item>\n\n  <ion-item class=\"date\">\n      <ion-label position=\"floating\">{{\"Date On Sale To\" | translate}}</ion-label>\n      <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"product.date_on_sale_to\" name=\"date_on_sale_to\"></ion-datetime>\n  </ion-item>\n\n\n  <ion-item>\n      <ion-label>{{\"Purchasable\" | translate}}</ion-label>\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"product.purchasable\" name=\"purchasable\"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>{{\"InStock\" | translate}}</ion-label>\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"product.in_stock\" name=\"in_stock\"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>{{\"Shipping Required\" | translate}}</ion-label>\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"product.shipping_required\" name=\"shipping_required\"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>{{\"Sold Individually\" | translate}}</ion-label>\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"product.sold_individually\" name=\"sold_individually\"></ion-toggle>\n  </ion-item>\n\n  <ion-item class=\"option\" *ngIf=\"product.type != 'external'\">\n    <ion-label>{{\"Manage Stock\" | translate}}</ion-label>\n    <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"product.manage_stock\" name=\"manage_stock\"></ion-toggle>\n</ion-item>\n\n<ion-item *ngIf=\"product.manage_stock && product.type != 'external'\">\n    <ion-label position=\"floating\">{{\"Quantity\" | translate}}</ion-label>\n    <ion-input required type=\"number\" [(ngModel)]=\"product.stock_quantity\" name=\"stock_quantity\"></ion-input>\n</ion-item>\n\n  <ion-item style=\"padding-top:10px\" *ngIf=\"data?.categories\">\n      <ion-label position=\"floating\">{{\"Categories\" | translate}}</ion-label>\n      <ion-select [(ngModel)]=\"categories\" name=\"categories\" multiple=\"true\" okText=\"OK\" cancelText=\"Cancel\">\n                <div *ngFor=\"let field of data.categories\">\n                 <ion-select-option value=\"{{field.id}}\"><span [innerHTML]=\"field.name\"></span></ion-select-option>\n                </div>\n      </ion-select>\n  </ion-item>\n\n  <div *ngIf=\"variations?.length\" class=\"related-products\">\n    <ion-item *ngIf=\"variations\" class=\"related-item-name\">{{\"Variations\" | translate}}</ion-item>\n    <div class=\"scroll-related-products\">\n        <div class=\"product\" *ngFor=\"let item of variations\" [style.width.%]=\"settings.dimensions.productSliderWidth\">\n            <ion-card class=\"ion-activatable ion-focusable hydrated\">\n              <ion-img alt=\"\" (click)=\"editProduct(item)\" [style.height.px]=\"settings.dimensions.productsGridViewHeight\" src=\"{{item.image.src}}\"></ion-img>\n              <ion-card-header (click)=\"editProduct(item)\">\n                  <ion-card-subtitle mode=\"md\" style=\"text-align: center;\">{{item.id}}</ion-card-subtitle>\n              </ion-card-header>\n              <ion-card-content (click)=\"editProduct(item)\">\n                  <p class=\"price\">\n                    <span class=\"regular-price\" *ngIf=\"!item.sale_price\">{{item.price | currency:settings.currency:'symbol':'1.2-2'}}</span>\n                      <span class=\"regular-price\" *ngIf=\"item.sale_price\">{{item.sale_price | currency:settings.currency:'symbol':'1.2-2'}}<span class=\"special-price\"><del>{{item.regular_price | currency:settings.currency:'symbol':'1.2-2'}}</del></span></span>\n                  </p>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n  </div>\n\n\n    <div padding>\n    <ion-button class=\"add-to-cart-button\" color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" (click)=\"saveProduct()\">{{\"SAVE\" | translate}}</ion-button>\n    </div>\n\n  </ion-list>\n\n</div>\n\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/edit-variation/edit-variation.page.html": function node_modulesRawLoaderDistCjsJsSrcAppVendorEditVariationEditVariationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account/vendor-products/edit-product\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{product?.name}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"product\">\n\n  <div *ngIf=\"product\" class=\"margin\">\n\n    <ion-list>\n\n  <ion-item>\n      <ion-label>{{\"Product ID\" | translate}} - {{product.id}}</ion-label>\n  </ion-item>\n\n  <ion-item>\n      <ion-label position=\"floating\">{{\"Description\" | translate}}</ion-label>\n      <ion-textarea rows=\"4\" required type=\"text\" [(ngModel)]=\"product.description\" name=\"description\"></ion-textarea>\n  </ion-item>\n\n  <ion-list-header>\n      <ion-label>{{\"Image\" | translate}}</ion-label>\n  </ion-list-header>\n\n  <img tappable *ngFor=\"let item of product.images; let i = index;\" src=\"{{item.src}}\" style=\"width: 80px; height: auto; padding: 3px; border: 1px solid #f5fdff\" (click)=\"replaceImage(i)\">\n\n  <ion-spinner *ngIf=\"uploadingImage\" name=\"circles\" style=\"float: left; margin: 27px 27px 27px 27px; padding: 3px; display: inline;\"></ion-spinner>\n  \n  <img tappable src=\"assets/image/upload_placeholder.png\" style=\"width: 80px; height: auto; padding: 3px; border: 1px solid #f5fdff\" (click)=\"picker()\"/>\n\n  <ion-item>\n      <ion-label>{{\"Price\" | translate}}</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"product.price\" name=\"price\" readonly></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label position=\"floating\">{{\"Regular Price\" | translate}}</ion-label>\n      <ion-input required type=\"number\" [(ngModel)]=\"product.regular_price\" name=\"regular_price\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label position=\"floating\">{{\"Sale Price\" | translate}}</ion-label>\n      <ion-input required type=\"number\" [(ngModel)]=\"product.sale_price\" name=\"sale_price\"></ion-input>\n  </ion-item>\n\n<ion-item>\n    <ion-label position=\"floating\">{{\"weight\" | translate}}</ion-label>\n    <ion-input required type=\"text\" [(ngModel)]=\"product.weight\" name=\"weight\"></ion-input>\n</ion-item>\n\n  <ion-item class=\"date\">\n      <ion-label position=\"floating\">{{\"Date on sale from\" | translate}}</ion-label>\n      <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"product.date_on_sale_from\" name=\"date_on_sale_from\"></ion-datetime>\n  </ion-item>\n\n  <ion-item class=\"date\">\n      <ion-label position=\"floating\">{{\"Date on sale to\" | translate}}</ion-label>\n      <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"product.date_on_sale_to\" name=\"date_on_sale_to\"></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>{{\"InStock\" | translate}}</ion-label>\n      <ion-toggle checked=\"true\" [(ngModel)]=\"product.in_stock\" name=\"in_stock\"></ion-toggle>\n  </ion-item>\n\n<ion-item>\n    <ion-label position=\"floating\">{{\"Quantity\" | translate}}</ion-label>\n    <ion-input required type=\"number\" [(ngModel)]=\"product.stock_quantity\" name=\"stock_quantity\"></ion-input>\n</ion-item>\n\n<!--div *ngIf=\"product.attributes?.length\">\n  <ion-label>Attributes</ion-label>\n  <ion-item *ngFor=\"let item of product.attributes\">\n  <ion-grid>\n  <ion-row>\n  <ion-col>\n  {{item.name}}\n  </ion-col>\n  <ion-col>\n  {{item.option}}\n  </ion-col>\n  </ion-row>\n  </ion-grid>\n  </ion-item>\n</div-->\n\n  </ion-list>\n\n</div>\n\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/order-list/order-list.page.html": function node_modulesRawLoaderDistCjsJsSrcAppVendorOrderListOrderListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Orders\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding order-list\">\n\n  <div class=\"spinner\" *ngIf=\"loader\"><ion-spinner> </ion-spinner></div>\n\n\n    <div *ngIf=\"orders\">\n      <div *ngIf=\"!loader && orders.length == 0\" text-center class=\"empty\">\n      <ion-icon name=\"document\"></ion-icon>\n    </div>\n\n    <div *ngIf=\"settings.settings?.vendorType !== 'product_vendor'\">\n    <ion-card *ngFor=\"let item of orders\" mode=\"{{settings.settings.mode}}\" button=\"true\" (click)=\"getDetail(item)\" class=\"ion-activatable ion-focusable {{settings.settings.product_shadow}}\">\n      <ion-card-header (click)=\"getDetail(item)\">\n        <ion-card-subtitle>{{item.id}} - <span style=\"text-transform: uppercase;\">{{item.status}}</span></ion-card-subtitle>\n        <ion-card-title>{{item.total | currency:settings.currency:'symbol':'1.2-2'}}</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <p>{{item.date_created | date:'MMM d, y hh:mm a'}}</p>\n        <p [innerHTML]=\"item.payment_method_title\"></p>\n        <ion-button size=\"small\" (click)=\"getDetail(item); $event.stopPropagation()\" color=\"{{settings.theme.button}}\" fill=\"outline\" slot=\"start\">\n        <ion-icon slot=\"icon-only\" name=\"eye\"></ion-icon>\n        {{\"View\" | translate}}\n        </ion-button>\n        <ion-button size=\"small\" (click)=\"editOrder(item); $event.stopPropagation()\" color=\"{{settings.theme.button}}\" fill=\"outline\" slot=\"end\">\n        <ion-icon slot=\"icon-only\" name=\"create\" mode=\"ios\"></ion-icon>\n        {{\"Edit\" | translate}}\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n    </div>\n\n\n    <!-- WOOCOMMERCE PRODUCT VENDOR -->\n    <div *ngIf=\"settings.settings?.vendorType === 'product_vendor'\">\n    <ion-card *ngFor=\"let item of orders\" mode=\"{{settings.settings.mode}}\" button=\"true\">\n      <ion-card-header class=\"ion-activatable ion-focusable hydrated\">\n        <ion-card-subtitle>{{item.id}} - <span style=\"text-transform: uppercase;\">{{item.status}}</span></ion-card-subtitle>\n        <ion-card-title>{{item.total_commission_amount | currency:settings.currency:'symbol':'1.2-2'}}</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <p>{{item.date_created | date:'MMM d, y hh:mm a'}}</p>\n        <p [innerHTML]=\"item.payment_method_title\"></p>\n        <p>{{item.shipping.first_name}} {{item.shipping.last_name}} {{item.shipping.company}} {{item.shipping.address_1}} {{item.shipping.address_2}} {{item.shipping.city}} {{item.shipping.state}} {{item.shipping.postcode}} {{item.shipping.country}}</p>\n        <ion-button size=\"small\" color=\"{{item.fulfillment_status === 'fulfilled' ? 'success': 'danger'}}\" fill=\"outline\" slot=\"start\" (click)=\"updateOrderStatus(item)\">\n        {{item.fulfillment_status.toUpperCase() | translate}}\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n    </div>\n\n    <ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && orders.length\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\"\n    loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/order-note-list/order-note-list.page.html": function node_modulesRawLoaderDistCjsJsSrcAppVendorOrderNoteListOrderNoteListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\n  <ion-toolbar>\n    <ion-title>{{\"Order Note List\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-add/category/category.page.html": function node_modulesRawLoaderDistCjsJsSrcAppVendorProductAddCategoryCategoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios' class=\"product-header\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{\"Select Category\" | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"categories\">\n\t<ion-row>\n    <ion-col size='6' *ngFor=\"let category of data.mainCategories\" (click)=\"getCategory(category.id, category.slug, category.name)\">\n    <ion-card class=\"category-card\" class=\"ion-activatable ion-focusable hydrated\" mode=\"md\">\n      <ion-img alt=\"\" src=\"{{category.image?.src}}\"></ion-img>\n      <ion-card-header>\n        <ion-card-subtitle [innerHTML]=\"category.name\"></ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-add/details/details.page.html": function node_modulesRawLoaderDistCjsJsSrcAppVendorProductAddDetailsDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account/category\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{\"Details\" | translate}}\n    </ion-title>\n\n     <ion-buttons slot=\"end\">\n\t    <ion-button style=\"margin-right: 10px; text-transform: capitalize;\" (click)=\"next()\">{{\"Next\" | translate}}</ion-button>\n\t  </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-item>\n    <ion-label position=\"floating\">{{\"Product Name\" | translate}}</ion-label>\n    <ion-input required type=\"text\" [(ngModel)]=\"vendor.product.name\" name=\"name\"></ion-input>\n</ion-item>\n\n<ion-item>\n    <ion-label>{{\"Type\" | translate}}</ion-label>\n    <ion-select [(ngModel)]=\"vendor.product.type\" name=\"type\" okText=\"OK\" cancelText=\"Cancel\">\n               <ion-select-option value=\"simple\">{{\"Simple\" | translate}}</ion-select-option>\n               <ion-select-option value=\"external\">{{\"External\" | translate}}</ion-select-option>\n    </ion-select>\n</ion-item>\n\n<ion-item>\n    <ion-label position=\"floating\">{{\"Regular Price\" | translate}}</ion-label> \n    <ion-input required type=\"text\" [(ngModel)]=\"vendor.product.regular_price\" name=\"regular_price\"></ion-input>\n</ion-item>\n\n<ion-item>\n    <ion-label position=\"floating\">{{\"Sale Price\" | translate}}</ion-label>\n    <ion-input required type=\"text\" [(ngModel)]=\"vendor.product.sale_price\" name=\"sale_price\"></ion-input>\n</ion-item>\n\n<ion-item>\n    <ion-label position=\"floating\">{{\"Short Description\" | translate}}</ion-label>\n    <ion-textarea  rows=\"2\" required type=\"text\" [(ngModel)]=\"vendor.product.short_description\" name=\"short_description\"></ion-textarea>\n</ion-item> \n\n<ion-item>\n    <ion-label position=\"floating\">{{\"Description\" | translate}}</ion-label>\n    <ion-textarea rows=\"3\" required type=\"text\" [(ngModel)]=\"vendor.product.description\" name=\"short_description\"></ion-textarea>\n</ion-item>\n\n<ion-item>\n    <ion-label position=\"floating\">{{\"Weight\" | translate}}</ion-label>\n    <ion-input required type=\"text\" [(ngModel)]=\"vendor.product.weight\" name=\"weight\"></ion-input>\n</ion-item>\n\n  <ion-item class=\"date\">\n      <ion-label position=\"floating\">{{\"Date On Sale From\" | translate}}</ion-label>\n      <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"vendor.product.date_on_sale_from\" name=\"date_on_sale_from\"></ion-datetime>\n  </ion-item>\n\n  <ion-item class=\"date\">\n      <ion-label position=\"floating\">{{\"Date On Sale To\" | translate}}</ion-label>\n      <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"vendor.product.date_on_sale_to\" name=\"date_on_sale_to\"></ion-datetime>\n  </ion-item>\n\n\n  <ion-item>\n      <ion-label>{{\"Purchasable\" | translate}}</ion-label>\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"vendor.product.purchasable\" name=\"purchasable\"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>{{\"InStock\" | translate}}</ion-label>\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"vendor.product.in_stock\" name=\"in_stock\"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>{{\"Shipping Required\" | translate}}</ion-label>\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"vendor.product.shipping_required\" name=\"shipping_required\"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>{{\"Sold Individually\" | translate}}</ion-label>\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"vendor.product.sold_individually\" name=\"sold_individually\"></ion-toggle>\n  </ion-item>\n\n  <ion-item class=\"option\" *ngIf=\"vendor.product.type != 'external'\">\n    <ion-label>{{\"Manage Stock\" | translate}}</ion-label>\n    <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"vendor.product.manage_stock\" name=\"manage_stock\"></ion-toggle>\n</ion-item>\n\n<ion-item *ngIf=\"vendor.product.manage_stock && vendor.product.type != 'external'\">\n    <ion-label position=\"floating\">{{\"Quantity\" | translate}}</ion-label>\n    <ion-input required type=\"number\" [(ngModel)]=\"vendor.product.stock_quantity\" name=\"stock_quantity\"></ion-input>\n</ion-item>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-add/photos/photos.page.html": function node_modulesRawLoaderDistCjsJsSrcAppVendorProductAddPhotosPhotosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\n <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account/category/{{vendor.product.categories[0]}}/details\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{\"Photos\" | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\t<div class=\"camera\">\n\t  <ion-button fill=\"clear\" color=\"{{settings.theme.button}}\"  (click)=\"picker()\"><ion-icon name=\"camera\"></ion-icon></ion-button>\n\t</div>\n\n\t<div style=\"text-align: center; margin: 20px 0;\">\n\t    <ion-spinner *ngIf=\"uploadingImageSpinner\"></ion-spinner>\n\t</div>\n\n  <div class=\"images\" *ngIf=\"vendor.product.images.length\">\n    <ion-row class=\"row\">\n      <ion-col *ngFor=\"let item of vendor.product.images; let i = index;\" class=\"col\">\n        <img tappable src=\"{{item.src}}\" (click)=\"replaceImage(i)\">\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>\n\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col>\n          <ion-button size=\"full\" (click)=\"publish()\" color=\"{{settings.theme.button}}\">{{\"Publish\" | translate}}</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button size=\"full\" (click)=\"draft()\" color=\"{{settings.theme.button}}\">{{\"Draft\" | translate}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-add/subcategory/subcategory.page.html": function node_modulesRawLoaderDistCjsJsSrcAppVendorProductAddSubcategorySubcategoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\n <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account/category\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{\"Select Subcategory\" | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\t<ion-row>\n    <ion-col size='6' *ngFor=\"let category of subCategories\" (click)=\"getCategory(category.id)\">\n    <ion-card class=\"category-card\" class=\"ion-activatable ion-focusable hydrated\" mode=\"md\">\n      <ion-img alt=\"\" src=\"{{category.image?.src}}\"></ion-img>\n      <ion-card-header>\n        <ion-card-subtitle><span [innerHTML]=\"category.name\"></span></ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-list/product-list.page.html": function node_modulesRawLoaderDistCjsJsSrcAppVendorProductListProductListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{\"Products\" | translate}}\n    </ion-title>\n    <ion-buttons slot=\"end\" fill=\"clear\" (click)=\"getFilter()\"><ion-icon name=\"funnel\" style=\"margin-right: 8px;font-size: 23px\"></ion-icon></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"spinner\" *ngIf=\"loader\"><ion-spinner> </ion-spinner></div>\n\n  <div class=\"spinner\" *ngIf=\"!loader && products?.length == 0\">{{\"No Results\" | translate}}</div>\n\n  <!--ion-row>\n    <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let product of products\">\n    <ion-card mode=\"{{settings.settings.mode}}\">\n\n    <ion-img src=\"{{product.images[0].src}}\" *ngIf=\"product.images.length\"></ion-img>\n\n    <ion-card-header>\n      <ion-card-title>{{product.name}}</ion-card-title>\n      <ion-card-subtitle><span class=\"regular-price\">{{1*product.price | currency:settings.currency:'symbol':'1.2-2'}}</span>\n            <span *ngIf=\"product.sale_price\" class=\"special-price\"><del>{{1*product.sale_price | currency:settings.currency:'symbol':'1.2-2'}}</del></span>\n      </ion-card-subtitle>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-icon style=\"float: right; padding: 10px 10px;\" color=\"primary\" slot=\"icon-only\" (click)=\"editProduct(product)\" name=\"create\"></ion-icon>\n      <ion-icon style=\"float: left; padding: 10px 10px;\" color=\"danger\" slot=\"icon-only\" (click)=\"delete(product)\" name=\"trash\"></ion-icon>\n    </ion-card-content>\n\n  </ion-card>\n</ion-col>\n</ion-row-->\n\n<ion-item *ngFor=\"let product of products\">\n  <ion-thumbnail slot=\"start\" style=\"width: 80px; height: 80px;\">\n    <img src=\"{{product.images[0].src}}\" *ngIf=\"product.images.length\">\n  </ion-thumbnail>\n  <ion-label>\n  <h4>{{product.name}}</h4>\n  <p [innerHTML]=\"product.description\"></p>\n  <h4><span class=\"regular-price\">{{1*product.price | currency:settings.currency:'symbol':'1.2-2'}}</span>\n            <span *ngIf=\"product.sale_price\" class=\"special-price\"><del>{{1*product.sale_price | currency:settings.currency:'symbol':'1.2-2'}}</del></span></h4>\n          <ion-icon style=\"float: right; padding: 10px 10px;\" color=\"primary\" slot=\"icon-only\" (click)=\"editProduct(product)\" name=\"create\"></ion-icon>\n      <ion-icon style=\"float: left; padding: 10px 10px;\" color=\"danger\" slot=\"icon-only\" (click)=\"delete(product)\" name=\"trash\"></ion-icon>\n</ion-label>\n\n</ion-item>\n  \n  <ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && products?.length\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\t\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/vendor-info/vendor-info.page.html": function node_modulesRawLoaderDistCjsJsSrcAppVendorVendorInfoVendorInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\n  <ion-toolbar>\n    <ion-title>{{\"Vendor Detail\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n{{vendor.vendor.shop.title}}\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/vendor-list/vendor-list.page.html": function node_modulesRawLoaderDistCjsJsSrcAppVendorVendorListVendorListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\n  <ion-toolbar>\n  <ion-searchbar mode=\"ios\" animated [(ngModel)]=\"searchInput\" (ionChange)=\"onInput()\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"vendor-list\">\n\t<div class=\"spinner\" *ngIf=\"!vendors\"><ion-spinner> </ion-spinner></div>\n\n\t<div *ngIf=\"vendors\" class=\"products\">\n\t\t<ion-item *ngFor=\"let item of vendors\" button=\"true\" (click)=\"getDetail(item)\" mode=\"{{settings.settings.mode}}\" button=\"true\">\n\t\t\t<ion-thumbnail slot=\"start\">\n\t\t\t  <img *ngIf=\"item.icon\" src=\"{{item.icon}}\">\n\t\t\t</ion-thumbnail>\n\t\t\t<ion-label class=\"ion-text-wrap\">\n\t\t\t  <h3 class=\"product-name\" [innerHTML]=\"item.name\"></h3>\n\t\t\t  <!--p class=\"product-description\" [innerHTML]=\"item.description\"></p-->\n\t\t\t</ion-label>\n\t\t</ion-item>\n\t</div>\n\n\t<!-- Common -->\n\t<!--ion-row *ngIf=\"vendors?.length\">\n\t    <ion-col size=\"4\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let item of vendors\" (click)=\"getDetail(item)\">\n\t    <ion-card class=\"category-card\" mode=\"{{settings.settings.mode}}\" class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\">\n\t      <img *ngIf=\"item.icon\" src=\"{{item.icon}}\"/>\n\t      <ion-card-header>\n\t        <ion-card-title>{{item.name}}</ion-card-title>\n\t      </ion-card-header>\n\t    </ion-card>\n\t    </ion-col>\n  \t</ion-row-->\n\t<!-- Common -->\n\n\t<!-- WC Marketplace -->\n\t<!--ion-row *ngIf=\"!vendors?.length\">\n\t    <ion-col size=\"4\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let item of vendors\" (click)=\"getDetail(item)\">\n\t    <ion-card class=\"category-card\" mode=\"md\" class=\"ion-activatable ion-focusable hydrated\">\n\t      <ion-img *ngIf=\"item.shop?.logo\" src=\"{{item.shop?.logo}}\"></ion-img>\n\t      <ion-card-header>\n\t        <ion-card-title>{{item.shop.title}}</ion-card-title>\n\t      </ion-card-header>\n\t    </ion-card>\n\t    </ion-col>\n  \t</ion-row-->\n\t<!-- WC Marketplace -->\n\n\t<!--DOKAN-->\n\t<!--ion-row>\n\t    <ion-col size=\"4\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let item of vendors\" (click)=\"getDetail(item)\">\n\t    <ion-card class=\"category-card\" mode=\"md\" class=\"ion-activatable ion-focusable hydrated\">\n\t      <ion-img *ngIf=\"item.logo\" src=\"{{item.logo}}\"></ion-img>\n\t      <ion-img *ngIf=\"!item.logo\" src=\"assets/image/logo.png\"></ion-img>\n\t      <ion-card-header>\n\t        <ion-card-title>{{item.store_name}}</ion-card-title>\n\t      </ion-card-header>\n\t    </ion-card>\n\t    </ion-col>\n  \t</ion-row-->\n\t<!--DOKAN-->\n\n\t<!-- WCFM -->\n\t<!--ion-row>\n\t    <ion-col size=\"4\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let item of vendors\" (click)=\"getDetail(item)\">\n\t    <ion-card class=\"category-card\" mode=\"md\" class=\"ion-activatable ion-focusable hydrated\">\n\t      <ion-img *ngIf=\"item?.banner\" src=\"{{item?.banner}}\"></ion-img>\n\t      <ion-card-header>\n\t        <ion-card-title>{{item.store_info.store_name}}</ion-card-title>\n\t      </ion-card-header>\n\t    </ion-card>\n\t    </ion-col>\n  \t</ion-row-->\n\t<!-- WCFM -->\n\n\n\t<ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && vendors?.length\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n\t</ion-infinite-scroll>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/account/account.page.scss": function srcAppAccountAccountPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".icon-start {\n  font-size: 22px;\n}\n\n.my-account-header {\n  background-color: var(--account-header, #36454f);\n  color: var(--account-header-text, #000);\n  padding-top: 20px;\n}\n\n.my-account-header .account-name {\n  font-size: 22px;\n  font-weight: 600;\n  color: var(--account-header-text, #000);\n}\n\n.my-account-header .header-menus ion-item {\n  color: var(--account-header-text, #000);\n}\n\n.my-account-header .header-menus ion-icon {\n  margin-right: 10px;\n}\n\n.icon-header-icon {\n  padding: 15px;\n  background-color: var(--account-header-text, #000);\n  border-radius: 50%;\n  font-size: xx-large;\n  color: var(--account-header, #36454f);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\nion-list a {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\n\n@media (min-width: 700px) {\n  ion-list {\n    max-width: 600px;\n    margin: auto;\n    margin-top: 40px;\n  }\n}\n\nion-list ion-item:first-child {\n  --border-width: 0.55px 0 0 0;\n}\n\nion-list ion-item:last-child {\n  --border-width: 0 0 0.55px 0;\n  --inner-border-width: 0 0 0 0;\n}\n\nion-list ion-icon {\n  padding: 4px;\n  border-radius: 4px;\n  font-size: 16px;\n}\n\n.list-md {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9EOlxcbHV4ZS4uLiBkZWJ1ZyA5IE9DVC9zcmNcXGFwcFxcYWNjb3VudFxcYWNjb3VudC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFLSSxlQUFBO0FDSEo7O0FES0E7RUFDSSxnREFBQTtFQUNBLHVDQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0FDRFI7O0FESVE7RUFDSSx1Q0FBQTtBQ0ZaOztBRElRO0VBQ0ksa0JBQUE7QUNGWjs7QURNQTtFQUNJLGFBQUE7RUFDQSxrREFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLCtHQUFBO0FDSEo7O0FETUk7RUFDSSxrQ0FBQTtVQUFBLDBCQUFBO0FDSFI7O0FES0k7RUFKSjtJQUtRLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VDRk47QUFDRjs7QURHSTtFQUNJLDRCQUFBO0FDRFI7O0FER0k7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0FDRFI7O0FER0k7RUFDSSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxlQUFBO0FDRlI7O0FES0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2FjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tc3RhcnQge1xuICAgIC8vcGFkZGluZzogNnB4O1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjb3VudC1oZWFkZXIsICMzNjQ1NGYpOyAvLyBVbkNvbW1lbnQgdGhpcyB0byBhZGQgYmFja2dyb3VuZCBjb2xvciB0byBpY29uXG4gICAgLy9jb2xvcjogdmFyKC0tYWNjb3VudC1oZWFkZXItdGV4dCwgIzAwMCk7XG4gICAgLy9ib3JkZXItcmFkaXVzOiA1MCU7IC8vIFR1bmUgdGhpcyB0byBhZGQgcm91bmRlZCBjb3JuZXIgd2hlbiBhZGRlZCBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgZm9udC1zaXplOiAyMnB4OyAvLyBBZGp1c3QgdGhlIHNpemUgb2YgdGhlIGljb25cbn1cbi5teS1hY2NvdW50LWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjb3VudC1oZWFkZXIsICMzNjQ1NGYpO1xuICAgIGNvbG9yOiB2YXIoLS1hY2NvdW50LWhlYWRlci10ZXh0LCAjMDAwKTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAuYWNjb3VudC1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tYWNjb3VudC1oZWFkZXItdGV4dCwgIzAwMCk7XG4gICAgfVxuICAgIC5oZWFkZXItbWVudXMge1xuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjb3VudC1oZWFkZXItdGV4dCwgIzAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLmljb24taGVhZGVyLWljb24ge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjb3VudC1oZWFkZXItdGV4dCwgIzAwMCk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gICAgY29sb3I6IHZhcigtLWFjY291bnQtaGVhZGVyLCAjMzY0NTRmKTtcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5pb24tbGlzdCB7XG4gICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xuICAgIH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIH1cbiAgICBpb24taXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwLjU1cHggMCAwIDA7XG4gICAgfVxuICAgIGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweCAwO1xuICAgICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDAgMDtcbiAgICB9XG4gICAgaW9uLWljb257XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzQyOHhmZik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn1cbi5saXN0LW1kIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG59IiwiLmljb24tc3RhcnQge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5teS1hY2NvdW50LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY291bnQtaGVhZGVyLCAjMzY0NTRmKTtcbiAgY29sb3I6IHZhcigtLWFjY291bnQtaGVhZGVyLXRleHQsICMwMDApO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5teS1hY2NvdW50LWhlYWRlciAuYWNjb3VudC1uYW1lIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tYWNjb3VudC1oZWFkZXItdGV4dCwgIzAwMCk7XG59XG4ubXktYWNjb3VudC1oZWFkZXIgLmhlYWRlci1tZW51cyBpb24taXRlbSB7XG4gIGNvbG9yOiB2YXIoLS1hY2NvdW50LWhlYWRlci10ZXh0LCAjMDAwKTtcbn1cbi5teS1hY2NvdW50LWhlYWRlciAuaGVhZGVyLW1lbnVzIGlvbi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uaWNvbi1oZWFkZXItaWNvbiB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY291bnQtaGVhZGVyLXRleHQsICMwMDApO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIGNvbG9yOiB2YXIoLS1hY2NvdW50LWhlYWRlciwgIzM2NDU0Zik7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuaW9uLWxpc3QgYSB7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gIGlvbi1saXN0IHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG59XG5pb24tbGlzdCBpb24taXRlbTpmaXJzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwLjU1cHggMCAwIDA7XG59XG5pb24tbGlzdCBpb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwLjU1cHggMDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XG59XG5pb24tbGlzdCBpb24taWNvbiB7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5saXN0LW1kIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/account/account.page.ts": function srcAppAccountAccountPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountPage", function () {
      return AccountPage;
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


    var _data_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/app-rate/ngx */
    "./node_modules/@ionic-native/app-rate/ngx/index.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/email-composer/ngx */
    "./node_modules/@ionic-native/email-composer/ngx/index.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../config */
    "./src/app/config.ts");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _account_login_login_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../account/login/login.page */
    "./src/app/account/login/login.page.ts");

    var AccountPage = /*#__PURE__*/function () {
      function AccountPage(modalController, statusBar, config, api, navCtrl, settings, platform, appRate, emailComposer, socialSharing, routerOutlet) {
        _classCallCheck(this, AccountPage);

        this.modalController = modalController;
        this.statusBar = statusBar;
        this.config = config;
        this.api = api;
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.platform = platform;
        this.appRate = appRate;
        this.emailComposer = emailComposer;
        this.socialSharing = socialSharing;
        this.routerOutlet = routerOutlet;
      }

      _createClass(AccountPage, [{
        key: "goTo",
        value: function goTo(path) {
          this.navCtrl.navigateForward(path);
        }
      }, {
        key: "getOpinions",
        value: function getOpinions() {
          this.navCtrl.navigateForward("opinions");
        }
      }, {
        key: "log_out",
        value: function log_out() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.settings.customer.id = undefined;
                    this.settings.vendor = false;
                    this.settings.administrator = false;
                    this.settings.wishlist = [];
                    _context.next = 6;
                    return this.api.postItem("logout").then(function (res) {}, function (err) {
                      console.log(err);
                    });

                  case 6:
                    if (window.AccountKitPlugin) window.AccountKitPlugin.logout();

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "rateApp",
        value: function rateApp() {
          if (this.platform.is("cordova")) {
            this.appRate.preferences.storeAppURL = {
              ios: this.settings.settings.rate_app_ios_id,
              android: this.settings.settings.rate_app_android_id,
              windows: "ms-windows-store://review/?ProductId=" + this.settings.settings.rate_app_windows_id
            };
            this.appRate.promptForRating(false);
          }
        }
      }, {
        key: "shareApp",
        value: function shareApp() {
          if (this.platform.is("cordova")) {
            var url = "";
            if (this.platform.is("android")) url = this.settings.settings.share_app_android_link;else url = this.settings.settings.share_app_ios_link;
            var options = {
              message: this.settings.customer.id ? "You're in! Download The LUXE LIFE app from the \nApple App store https://apps.apple.com/pk/app/the-luxe-life/id1467552821 \nand From the Google PlayStore https://play.google.com/store/apps/details?id=uk.co.luxefragrancebar.www.luxelife \nand use code \"" + btoa(this.settings.customer.id.toString()) + "\" for your free membership." : "",
              subject: "",
              files: ["", ""],
              url: url,
              chooserTitle: ""
            };
            this.socialSharing.shareWithOptions(options);
          }
        }
      }, {
        key: "email",
        value: function email(contact) {
          var email = {
            to: contact,
            attachments: [],
            subject: "",
            body: "",
            isHtml: true
          };
          this.emailComposer.open(email);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.toggle = document.querySelector("#themeToggle");
          this.toggle.addEventListener("ionChange", function (ev) {
            document.body.classList.toggle("dark", ev.detail.checked);

            if (ev.detail.checked) {
              _this.statusBar.backgroundColorByHexString("#121212");

              _this.statusBar.styleLightContent();
            } else {
              _this.statusBar.backgroundColorByHexString("#ffffff");

              _this.statusBar.styleDefault();
            }
          });
          var prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
          prefersDark.addListener(function (e) {
            return checkToggle(e.matches);
          });

          function loadApp() {
            checkToggle(prefersDark.matches);
          }

          function checkToggle(shouldCheck) {
            this.toggle.checked = shouldCheck;
          }
        }
      }, {
        key: "login",
        value: function login() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal, _yield$modal$onWillDi, data;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _account_login_login_page__WEBPACK_IMPORTED_MODULE_10__["LoginPage"],
                      componentProps: {
                        path: "tabs/account"
                      },
                      swipeToClose: true
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.present();
                    _context2.next = 6;
                    return modal.onWillDismiss();

                  case 6:
                    _yield$modal$onWillDi = _context2.sent;
                    data = _yield$modal$onWillDi.data;

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getposts",
        value: function getposts() {
          this.navCtrl.navigateForward("pdffiles");
        }
      }, {
        key: "getCoupon",
        value: function getCoupon() {
          this.navCtrl.navigateForward("copoun-code");
        }
      }, {
        key: "getMyProfile",
        value: function getMyProfile() {
          this.navCtrl.navigateForward("my-profile");
        }
      }, {
        key: "memberPoints",
        value: function memberPoints() {
          this.navCtrl.navigateForward("member-points");
        }
      }]);

      return AccountPage;
    }();

    AccountPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"]
      }, {
        type: _config__WEBPACK_IMPORTED_MODULE_8__["Config"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_5__["AppRate"]
      }, {
        type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__["EmailComposer"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]
      }];
    };

    AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-account",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account.page.scss */
      "./src/app/account/account.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"], _config__WEBPACK_IMPORTED_MODULE_8__["Config"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_5__["AppRate"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__["EmailComposer"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]])], AccountPage);
    /***/
  },

  /***/
  "./src/app/account/address/address.page.scss": function srcAppAccountAddressAddressPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWRkcmVzcy9hZGRyZXNzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/account/address/address.page.ts": function srcAppAccountAddressAddressPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressPage", function () {
      return AddressPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");

    var AddressPage = /*#__PURE__*/function () {
      function AddressPage(platform, api, settings, router, loadingController, navCtrl, route) {
        _classCallCheck(this, AddressPage);

        this.platform = platform;
        this.api = api;
        this.settings = settings;
        this.router = router;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
      }

      _createClass(AddressPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCustomer();
        }
      }, {
        key: "getCustomer",
        value: function getCustomer() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loadingController.create({
                      message: 'Loading...',
                      translucent: true,
                      cssClass: 'custom-class custom-loading'
                    });

                  case 2:
                    loading = _context3.sent;
                    _context3.next = 5;
                    return loading.present();

                  case 5:
                    _context3.next = 7;
                    return this.api.getItem('customers/' + this.settings.customer.id).then(function (res) {
                      _this2.settings.customer = res;
                      loading.dismiss();
                    }, function (err) {
                      console.log(err);
                      loading.dismiss();
                    });

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "editAddress",
        value: function editAddress() {
          this.navCtrl.navigateForward('/tabs/account/address/edit-address');
        }
      }]);

      return AddressPage;
    }();

    AddressPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    AddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-address',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./address.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/address/address.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./address.page.scss */
      "./src/app/account/address/address.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], AddressPage);
    /***/
  },

  /***/
  "./src/app/account/blog/blog.page.scss": function srcAppAccountBlogBlogPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".post a {\n  pointer-events: none;\n  cursor: default;\n  text-decoration: none;\n}\n.post ion-card {\n  margin: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n.post .comments ion-icon {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9ibG9nL0Q6XFxsdXhlLi4uIGRlYnVnIDkgT0NUL3NyY1xcYXBwXFxhY2NvdW50XFxibG9nXFxibG9nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9ibG9nL2Jsb2cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNBUjtBREVJO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREdRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNEWiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYmxvZy9ibG9nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0IHtcbiAgICBhIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICBpb24tY2FyZCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgLmNvbW1lbnRzIHtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnBvc3QgYSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5wb3N0IGlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnBvc3QgLmNvbW1lbnRzIGlvbi1pY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/account/blog/blog.page.ts": function srcAppAccountBlogBlogPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogPage", function () {
      return BlogPage;
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


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../data/post */
    "./src/app/data/post.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");

    var BlogPage = /*#__PURE__*/function () {
      function BlogPage(api, router, post, settings, route) {
        _classCallCheck(this, BlogPage);

        this.api = api;
        this.router = router;
        this.post = post;
        this.settings = settings;
        this.route = route;
        this.commentFilter = {
          page: 1
        };
        this.hasMoreItems = true;
      }

      _createClass(BlogPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.route.snapshot.paramMap.get('id');
          this.getPost();
          this.getComments();
        }
      }, {
        key: "getPost",
        value: function getPost() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.api.getPosts('/wp-json/wp/v2/posts/' + this.id + '?_embed').then(function (res) {
                      _this3.post.post = res;
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "OnDestroy",
        value: function OnDestroy() {
          this.post.post = {};
        }
      }, {
        key: "getComments",
        value: function getComments() {
          var _this4 = this;

          this.api.getPosts('/wp-json/wp/v2/comments?post=' + this.id + '&page=' + this.commentFilter.page).then(function (res) {
            _this4.comments = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getMoreComments",
        value: function getMoreComments(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.commentFilter.page = this.commentFilter.page + 1;
                    this.api.getPosts('/wp-json/wp/v2/comments?post=' + this.id + '&page=' + this.commentFilter.page).then(function (res) {
                      _this5.results = res;

                      _this5.comments.push.apply(_this5.comments, _this5.results);

                      event.target.complete();
                      if (_this5.results.length == 0) _this5.hasMoreItems = false;
                    }, function (err) {
                      event.target.complete();
                    });

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return BlogPage;
    }();

    BlogPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _data_post__WEBPACK_IMPORTED_MODULE_4__["Post"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    BlogPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blog.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/blog/blog.page.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blog.page.scss */
      "./src/app/account/blog/blog.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_post__WEBPACK_IMPORTED_MODULE_4__["Post"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], BlogPage);
    /***/
  },

  /***/
  "./src/app/account/blogs/blogs.page.scss": function srcAppAccountBlogsBlogsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".blogs a {\n  pointer-events: none;\n  cursor: default;\n  text-decoration: none;\n}\n.blogs .activated {\n  opacity: 0.4;\n}\n.blogs .empty {\n  margin-top: 50px;\n  text-align: center;\n}\n.blogs .empty ion-icon {\n  font-size: 7.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9ibG9ncy9EOlxcbHV4ZS4uLiBkZWJ1ZyA5IE9DVC9zcmNcXGFwcFxcYWNjb3VudFxcYmxvZ3NcXGJsb2dzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9ibG9ncy9ibG9ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0FSO0FERUk7RUFDSSxZQUFBO0FDQVI7QURFSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNBUjtBRENRO0VBQ0ksZ0JBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYmxvZ3MvYmxvZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2dzIHtcbiAgICBhIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICAuYWN0aXZhdGVkIHtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cbiAgICAuZW1wdHkge1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNy4yZW07XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmJsb2dzIGEge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYmxvZ3MgLmFjdGl2YXRlZCB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi5ibG9ncyAuZW1wdHkge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYmxvZ3MgLmVtcHR5IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA3LjJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/account/blogs/blogs.page.ts": function srcAppAccountBlogsBlogsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogsPage", function () {
      return BlogsPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../data/post */
    "./src/app/data/post.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");

    var BlogsPage = /*#__PURE__*/function () {
      function BlogsPage(api, router, post, settings, navCtrl) {
        _classCallCheck(this, BlogsPage);

        this.api = api;
        this.router = router;
        this.post = post;
        this.settings = settings;
        this.navCtrl = navCtrl;
        this.filter = {};
        this.hasMoreItems = true;
        this.filter.page = 1;
      }

      _createClass(BlogsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPosts();
        }
      }, {
        key: "getPosts",
        value: function getPosts() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.api.getPosts('/wp-json/wp/v2/posts?_embed&per_page=10&page=' + this.filter.page).then(function (res) {
                      if (res) _this6.posts = res;else _this6.posts.posts = [];
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this7 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.filter.page = this.filter.page + 1;
                    _context7.next = 3;
                    return this.api.getPosts('/wp-json/wp/v2/posts?_embed&per_page=10&page=' + this.filter.page).then(function (res) {
                      if (res) {
                        _this7.results = res;

                        _this7.posts.push.apply(_this7.posts, _this7.results);

                        event.target.complete();
                      } else _this7.hasMoreItems = false;
                    }, function (err) {
                      event.target.complete();
                    });

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "getDetail",
        value: function getDetail(post) {
          this.post.post = post;
          this.navCtrl.navigateForward('/tabs/account/blogs/blog/' + post.id);
        }
      }]);

      return BlogsPage;
    }();

    BlogsPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _data_post__WEBPACK_IMPORTED_MODULE_5__["Post"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    BlogsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blogs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blogs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/blogs/blogs.page.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blogs.page.scss */
      "./src/app/account/blogs/blogs.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_post__WEBPACK_IMPORTED_MODULE_5__["Post"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], BlogsPage);
    /***/
  },

  /***/
  "./src/app/account/currencies/currencies.page.scss": function srcAppAccountCurrenciesCurrenciesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY3VycmVuY2llcy9jdXJyZW5jaWVzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/account/currencies/currencies.page.ts": function srcAppAccountCurrenciesCurrenciesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrenciesPage", function () {
      return CurrenciesPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _home_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../home/home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");

    var CurrenciesPage = /*#__PURE__*/function () {
      function CurrenciesPage(api, home, router, settings, navCtrl) {
        _classCallCheck(this, CurrenciesPage);

        this.api = api;
        this.home = home;
        this.router = router;
        this.settings = settings;
        this.navCtrl = navCtrl;
        this.params = {};
        this.params.action = 'wcml_switch_currency';
        this.params.currency = settings.currency;
        this.params.force_switch = '0';
      }

      _createClass(CurrenciesPage, [{
        key: "applyCurrency",
        value: function applyCurrency() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.params.currency = this.settings.currency;
                    _context8.next = 3;
                    return this.api.ajaxCall('/wp-admin/admin-ajax.php', this.params).then(function (res) {});

                  case 3:
                    this.home.getBlocks();
                    this.navCtrl.pop();

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return CurrenciesPage;
    }();

    CurrenciesPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }, {
        type: _home_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_4__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    CurrenciesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-currencies',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./currencies.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/currencies/currencies.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./currencies.page.scss */
      "./src/app/account/currencies/currencies.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _home_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_settings__WEBPACK_IMPORTED_MODULE_4__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], CurrenciesPage);
    /***/
  },

  /***/
  "./src/app/account/edit-address/edit-address.page.scss": function srcAppAccountEditAddressEditAddressPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvZWRpdC1hZGRyZXNzL2VkaXQtYWRkcmVzcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/account/edit-address/edit-address.page.ts": function srcAppAccountEditAddressEditAddressPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditAddressPage", function () {
      return EditAddressPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");

    var EditAddressPage = /*#__PURE__*/function () {
      function EditAddressPage(api, settings, router, navCtrl, route) {
        _classCallCheck(this, EditAddressPage);

        this.api = api;
        this.settings = settings;
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.address = [];
        this.disableButton = false;
      }

      _createClass(EditAddressPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCountries();
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this8 = this;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.api.postItem('countries').then(function (res) {
                      _this8.countries = res;

                      if (_this8.countries && _this8.countries.length == 1) {
                        _this8.address['billing_country'] = _this8.countries[0].value;
                        _this8.address['shipping_country'] = _this8.countries[0].value;
                        _this8.billingStates = _this8.countries.find(function (item) {
                          return item.value == _this8.address['billing_country'];
                        });
                        _this8.shippingStates = _this8.countries.find(function (item) {
                          return item.value == _this8.address['billing_country'];
                        });
                      } else {
                        _this8.billingStates = _this8.countries.find(function (item) {
                          return item.value == _this8.settings.customer.billing.country;
                        });
                        _this8.shippingStates = _this8.countries.find(function (item) {
                          return item.value == _this8.settings.customer.shipping.country;
                        });
                      }
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "processAddress",
        value: function processAddress() {
          for (var key in this.settings.customer.billing) {
            this.address['billing_' + key] = this.settings.customer.billing[key];
          }

          for (var key in this.settings.customer.shipping) {
            this.address['shipping_' + key] = this.settings.customer.shipping[key];
          }

          this.updateAddress();
        }
      }, {
        key: "updateAddress",
        value: function updateAddress() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this9 = this;

            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    this.disableButton = true;
                    _context10.next = 3;
                    return this.api.postItem('update-address', this.address).then(function (res) {
                      _this9.status = res; // this.navCtrl.pop();

                      // this.navCtrl.pop();
                      _this9.disableButton = false;
                    }, function (err) {
                      _this9.disableButton = false;
                    });

                  case 3:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "getBillingRegion",
        value: function getBillingRegion() {
          var _this10 = this;

          this.billingStates = this.countries.find(function (item) {
            return item.value == _this10.settings.customer.billing.country;
          });
          this.settings.customer.billing.state = '';
        }
      }, {
        key: "getShippingRegion",
        value: function getShippingRegion() {
          var _this11 = this;

          this.shippingStates = this.countries.find(function (item) {
            return item.value == _this11.settings.customer.shipping.country;
          });
          this.settings.customer.shipping.state = '';
        }
      }]);

      return EditAddressPage;
    }();

    EditAddressPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    EditAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-address',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-address.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/edit-address/edit-address.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-address.page.scss */
      "./src/app/account/edit-address/edit-address.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], EditAddressPage);
    /***/
  },

  /***/
  "./src/app/account/forgotten/forgotten.page.scss": function srcAppAccountForgottenForgottenPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".forgotten {\n  position: relative;\n}\n.forgotten .form {\n  margin: 0;\n  position: absolute;\n  width: 90%;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.forgotten .form ion-list {\n  margin-bottom: 16px;\n  padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9mb3Jnb3R0ZW4vRDpcXGx1eGUuLi4gZGVidWcgOSBPQ1Qvc3JjXFxhcHBcXGFjY291bnRcXGZvcmdvdHRlblxcZm9yZ290dGVuLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9mb3Jnb3R0ZW4vZm9yZ290dGVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURBSTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDRVI7QUREUTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7QUNHWiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvZm9yZ290dGVuL2ZvcmdvdHRlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9yZ290dGVuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmZvcm0ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgdG9wOiA0MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIGlvbi1saXN0IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgICB9IFxuICAgIH1cbiAgICAuZXJyb3Ige1xuICAgICAgICAvL2NvbG9yOiAjQjAwMDIwO1xuICAgIH1cbn0iLCIuZm9yZ290dGVuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvcmdvdHRlbiAuZm9ybSB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOTAlO1xuICB0b3A6IDQwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5mb3Jnb3R0ZW4gLmZvcm0gaW9uLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/account/forgotten/forgotten.page.ts": function srcAppAccountForgottenForgottenPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgottenPage", function () {
      return ForgottenPage;
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


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ForgottenPage = /*#__PURE__*/function () {
      function ForgottenPage(modalCtrl, api, loadingController, navCtrl, settings, fb) {
        _classCallCheck(this, ForgottenPage);

        this.modalCtrl = modalCtrl;
        this.api = api;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.fb = fb;
        this.status = {};
        this.disableSubmit = false;
        this.email = this.fb.group({
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]
        });
        this.form = this.fb.group({
          otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          email: ['', '']
        });
      }

      _createClass(ForgottenPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.modalCtrl.dismiss({
            'loggedIn': false
          });
        }
      }, {
        key: "forgotten",
        value: function forgotten() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this12 = this;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    this.disableSubmit = true;
                    _context11.next = 3;
                    return this.api.postItem('email-otp', this.email.value).then(function (res) {
                      _this12.status = res;

                      _this12.form.patchValue({
                        email: _this12.email.value.email
                      });

                      console.log(_this12.form.value.email);
                      _this12.disableSubmit = false;
                    }, function (err) {
                      _this12.disableSubmit = false;
                    });

                  case 3:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "resetPassword",
        value: function resetPassword() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _this13 = this;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    this.disableSubmit = true;
                    _context12.next = 3;
                    return this.api.postItem('reset-user-password', this.form.value).then(function (res) {
                      _this13.status = res; //this.navCtrl.navigateBack('/tabs/account');

                      //this.navCtrl.navigateBack('/tabs/account');
                      _this13.disableSubmit = false;
                    }, function (err) {
                      _this13.disableSubmit = false;
                    });

                  case 3:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }]);

      return ForgottenPage;
    }();

    ForgottenPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_4__["Settings"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }];
    };

    ForgottenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgotten',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgotten.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/forgotten/forgotten.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgotten.page.scss */
      "./src/app/account/forgotten/forgotten.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _data_settings__WEBPACK_IMPORTED_MODULE_4__["Settings"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])], ForgottenPage);
    /***/
  },

  /***/
  "./src/app/account/login/login.page.scss": function srcAppAccountLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0 0 0px;\n  --background: transparent;\n  position: absolute;\n  --opacity: 0;\n}\n\n.logo-block {\n  height: 200px;\n  overflow: hidden;\n}\n\n.logo-block ion-col {\n  text-align: center;\n  font-size: 24px;\n  color: darkblue;\n  opacity: 0.05;\n}\n\n.logo-block .logo {\n  left: 0;\n  right: 0;\n  top: 65px;\n  width: 30%;\n  max-width: 120px;\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0px;\n  --background: transparent;\n}\n\n.header-logo {\n  height: 150px;\n}\n\n.login1 {\n  margin-top: 24px;\n}\n\n.login1 ion-card {\n  box-shadow: none;\n  margin-left: 24px;\n  margin-right: 24px;\n  padding-bottom: 24px;\n}\n\n.login1 ion-button {\n  margin-top: 24px;\n}\n\n.login1 ion-fab-button {\n  margin: auto;\n  border-radius: 50%;\n  --box-shadow: none;\n  border: 0.02px solid #2798fb;\n  margin: auto;\n  --box-shadow: none;\n}\n\n.login1 ion-item {\n  --border-color: var(--ion-color-light, #fff);\n}\n\n.socila-login {\n  padding: 19px;\n  padding-top: 0;\n}\n\n.socila-login ion-button {\n  margin-top: 0;\n}\n\nion-segment {\n  border-radius: 0;\n}\n\n.login-register {\n  margin: 32px;\n  margin-top: 56px;\n}\n\n.login-register .login {\n  border: 0.55px solid var(--ion-color-light, #fff);\n  border-width: 0.55px 0.55px 0.55px 0.55px;\n  border-radius: 2px;\n}\n\n.login-register .login ion-item {\n  --border-color: var(--ion-color-light, #fff);\n}\n\n.loginBtn {\n  box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.2em;\n  padding: 0 15px 0 46px;\n  border: none;\n  text-align: left;\n  line-height: 34px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 16px;\n  color: #fff;\n}\n\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 34px;\n  height: 100%;\n}\n\n.loginBtn:focus {\n  outline: none;\n}\n\n.loginBtn:active {\n  box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);\n}\n\n/* Facebook */\n\n.loginBtn--facebook {\n  background-color: #4c69ba;\n  background-image: linear-gradient(#4c69ba, #3b55a0);\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\n  text-shadow: 0 -1px 0 #354c8c;\n}\n\n.loginBtn--facebook:before {\n  border-right: #364e92 1px solid;\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png\") 6px 6px no-repeat;\n}\n\n.loginBtn--facebook:hover,\n.loginBtn--facebook:focus {\n  background-color: #5b7bd5;\n  background-image: linear-gradient(#5b7bd5, #4864b1);\n}\n\n/* Google */\n\n.loginBtn--google {\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\n  background: #dd4b39;\n}\n\n.loginBtn--google:before {\n  border-right: #bb3f30 1px solid;\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png\") 6px 6px no-repeat;\n}\n\n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: #e74b37;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9sb2dpbi9EOlxcbHV4ZS4uLiBkZWJ1ZyA5IE9DVC9zcmNcXGFwcFxcYWNjb3VudFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0VBRUEsZ0JBQUE7QUNDRjs7QURBRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDRUo7O0FEQUU7RUFDRSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDQTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7QUNFRjs7QURBQTtFQUNFLGFBQUE7QUNHRjs7QUREQTtFQUNFLGdCQUFBO0FDSUY7O0FESEU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0tKOztBREhFO0VBRUUsZ0JBQUE7QUNJSjs7QURGRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGRTtFQUNFLDRDQUFBO0FDSUo7O0FEREE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQ0lGOztBREhFO0VBQ0UsYUFBQTtBQ0tKOztBREZBO0VBQ0UsZ0JBQUE7QUNLRjs7QURGQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0tGOztBREpFO0VBQ0UsaURBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0FDTUo7O0FETEk7RUFDRSw0Q0FBQTtBQ09OOztBREhBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNNRjs7QURKQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ09GOztBRExBO0VBQ0UsYUFBQTtBQ1FGOztBRE5BO0VBQ0UsK0NBQUE7QUNTRjs7QUROQSxhQUFBOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxtREFBQTtFQUNBLCtFQUFBO0VBQ0EsNkJBQUE7QUNTRjs7QURQQTtFQUNFLCtCQUFBO0VBQ0EseUdBQUE7QUNVRjs7QURQQTs7RUFFRSx5QkFBQTtFQUNBLG1EQUFBO0FDVUY7O0FEUEEsV0FBQTs7QUFDQTtFQUNFLG9EQUFBO0VBQ0EsbUJBQUE7QUNVRjs7QURSQTtFQUNFLCtCQUFBO0VBQ0EsdUdBQUE7QUNXRjs7QURSQTs7RUFFRSxtQkFBQTtBQ1dGIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tb3BhY2l0eTogMDtcbn1cbi5sb2dvLWJsb2NrIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgLy9iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgI2ZmZik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGlvbi1jb2wge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6IGRhcmtibHVlO1xuICAgIG9wYWNpdHk6IDAuMDU7XG4gIH1cbiAgLmxvZ28ge1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA2NXB4O1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG59XG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDBweDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5oZWFkZXItbG9nbyB7XG4gIGhlaWdodDogMTUwcHg7XG59XG4ubG9naW4xIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgaW9uLWNhcmQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICB9XG4gIGlvbi1idXR0b24ge1xuICAgIC8vbWFyZ2luOiAwO1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gIH1cbiAgaW9uLWZhYi1idXR0b24ge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogMC4wMnB4IHNvbGlkICMyNzk4ZmI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICBpb24taXRlbSB7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCwgI2ZmZik7XG4gIH1cbn1cbi5zb2NpbGEtbG9naW4ge1xuICBwYWRkaW5nOiAxOXB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxufVxuaW9uLXNlZ21lbnQge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICAvL3Bvc2l0aW9uOiBmaXhlZDtcbn1cbi5sb2dpbi1yZWdpc3RlciB7XG4gIG1hcmdpbjogMzJweDtcbiAgbWFyZ2luLXRvcDogNTZweDtcbiAgLmxvZ2luIHtcbiAgICBib3JkZXI6IDAuNTVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQsICNmZmYpO1xuICAgIGJvcmRlci13aWR0aDogMC41NXB4IDAuNTVweCAwLjU1cHggMC41NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LCAjZmZmKTtcbiAgICB9XG4gIH1cbn1cbi5sb2dpbkJ0biB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogd2lkdGg6IDEzZW07ICAtIGFwcGx5IGZvciBmaXhlZCBzaXplICovXG4gIG1hcmdpbjogMC4yZW07XG4gIHBhZGRpbmc6IDAgMTVweCAwIDQ2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmxvZ2luQnRuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmxvZ2luQnRuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5sb2dpbkJ0bjphY3RpdmUge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLyogRmFjZWJvb2sgKi9cbi5sb2dpbkJ0bi0tZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM2OWJhO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzRjNjliYSwgIzNiNTVhMCk7XG4gIC8qZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIG5ldWVcIiwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7Ki9cbiAgdGV4dC1zaGFkb3c6IDAgLTFweCAwICMzNTRjOGM7XG59XG4ubG9naW5CdG4tLWZhY2Vib29rOmJlZm9yZSB7XG4gIGJvcmRlci1yaWdodDogIzM2NGU5MiAxcHggc29saWQ7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0MDgyL2ljb25fZmFjZWJvb2sucG5nXCIpXG4gICAgNnB4IDZweCBuby1yZXBlYXQ7XG59XG4ubG9naW5CdG4tLWZhY2Vib29rOmhvdmVyLFxuLmxvZ2luQnRuLS1mYWNlYm9vazpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YjdiZDU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjNWI3YmQ1LCAjNDg2NGIxKTtcbn1cblxuLyogR29vZ2xlICovXG4ubG9naW5CdG4tLWdvb2dsZSB7XG4gIC8qZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFJvYm90bywgYXJpYWwsIHNhbnMtc2VyaWY7Ki9cbiAgYmFja2dyb3VuZDogI2RkNGIzOTtcbn1cbi5sb2dpbkJ0bi0tZ29vZ2xlOmJlZm9yZSB7XG4gIGJvcmRlci1yaWdodDogI2JiM2YzMCAxcHggc29saWQ7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0MDgyL2ljb25fZ29vZ2xlLnBuZ1wiKVxuICAgIDZweCA2cHggbm8tcmVwZWF0O1xufVxuLmxvZ2luQnRuLS1nb29nbGU6aG92ZXIsXG4ubG9naW5CdG4tLWdvb2dsZTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICNlNzRiMzc7XG59XG4iLCJpb24tdG9vbGJhciB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tb3BhY2l0eTogMDtcbn1cblxuLmxvZ28tYmxvY2sge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmxvZ28tYmxvY2sgaW9uLWNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogZGFya2JsdWU7XG4gIG9wYWNpdHk6IDAuMDU7XG59XG4ubG9nby1ibG9jayAubG9nbyB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDY1cHg7XG4gIHdpZHRoOiAzMCU7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHg7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItbG9nbyB7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbi5sb2dpbjEge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuLmxvZ2luMSBpb24tY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xufVxuLmxvZ2luMSBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi5sb2dpbjEgaW9uLWZhYi1idXR0b24ge1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDAuMDJweCBzb2xpZCAjMjc5OGZiO1xuICBtYXJnaW46IGF1dG87XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbi5sb2dpbjEgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LCAjZmZmKTtcbn1cblxuLnNvY2lsYS1sb2dpbiB7XG4gIHBhZGRpbmc6IDE5cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLnNvY2lsYS1sb2dpbiBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4ubG9naW4tcmVnaXN0ZXIge1xuICBtYXJnaW46IDMycHg7XG4gIG1hcmdpbi10b3A6IDU2cHg7XG59XG4ubG9naW4tcmVnaXN0ZXIgLmxvZ2luIHtcbiAgYm9yZGVyOiAwLjU1cHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LCAjZmZmKTtcbiAgYm9yZGVyLXdpZHRoOiAwLjU1cHggMC41NXB4IDAuNTVweCAwLjU1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5sb2dpbi1yZWdpc3RlciAubG9naW4gaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LCAjZmZmKTtcbn1cblxuLmxvZ2luQnRuIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiB3aWR0aDogMTNlbTsgIC0gYXBwbHkgZm9yIGZpeGVkIHNpemUgKi9cbiAgbWFyZ2luOiAwLjJlbTtcbiAgcGFkZGluZzogMCAxNXB4IDAgNDZweDtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5sb2dpbkJ0bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxvZ2luQnRuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmxvZ2luQnRuOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDMycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4vKiBGYWNlYm9vayAqL1xuLmxvZ2luQnRuLS1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzY5YmE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjNGM2OWJhLCAjM2I1NWEwKTtcbiAgLypmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgbmV1ZVwiLCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjsqL1xuICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgIzM1NGM4Yztcbn1cblxuLmxvZ2luQnRuLS1mYWNlYm9vazpiZWZvcmUge1xuICBib3JkZXItcmlnaHQ6ICMzNjRlOTIgMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDA4Mi9pY29uX2ZhY2Vib29rLnBuZ1wiKSA2cHggNnB4IG5vLXJlcGVhdDtcbn1cblxuLmxvZ2luQnRuLS1mYWNlYm9vazpob3Zlcixcbi5sb2dpbkJ0bi0tZmFjZWJvb2s6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWI3YmQ1O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzViN2JkNSwgIzQ4NjRiMSk7XG59XG5cbi8qIEdvb2dsZSAqL1xuLmxvZ2luQnRuLS1nb29nbGUge1xuICAvKmZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBSb2JvdG8sIGFyaWFsLCBzYW5zLXNlcmlmOyovXG4gIGJhY2tncm91bmQ6ICNkZDRiMzk7XG59XG5cbi5sb2dpbkJ0bi0tZ29vZ2xlOmJlZm9yZSB7XG4gIGJvcmRlci1yaWdodDogI2JiM2YzMCAxcHggc29saWQ7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0MDgyL2ljb25fZ29vZ2xlLnBuZ1wiKSA2cHggNnB4IG5vLXJlcGVhdDtcbn1cblxuLmxvZ2luQnRuLS1nb29nbGU6aG92ZXIsXG4ubG9naW5CdG4tLWdvb2dsZTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICNlNzRiMzc7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/account/login/login.page.ts": function srcAppAccountLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/ngx/index.js");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/ngx/index.js");
    /* harmony import */


    var _forgotten_forgotten_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../forgotten/forgotten.page */
    "./src/app/account/forgotten/forgotten.page.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(modalCtrl, navParams, platform, oneSignal, api, settings, loadingController, router, navCtrl, fb, googlePlus, facebook, toastController) {
        _classCallCheck(this, LoginPage);

        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.oneSignal = oneSignal;
        this.api = api;
        this.settings = settings;
        this.loadingController = loadingController;
        this.router = router;
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.facebook = facebook;
        this.toastController = toastController;
        this.slideOpts = {
          autoplay: false,
          loop: false,
          lazy: true
        };
        this.icons = new Array(60);
        this.segment = "login";
        this.loginTab = true;
        this.loginError = false;
        this.path = "account";
        this.status = {};
        this.disableSubmit = false;
        this.pushForm = {};
        this.googleStatus = {};
        this.faceBookStatus = {};
        this.googleLogingInn = false;
        this.facebookLogingInn = false;
        this.phoneLogingInn = false;
        this.form = this.fb.group({
          username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.formRegister = this.fb.group({
          first_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          last_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email],
          phone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          ref_id: [""]
        });
        this.formSMS = this.fb.group({
          country_code: ["+91", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          phone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          sms: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
      }

      _createClass(LoginPage, [{
        key: "close",
        value: function close(status) {
          this.modalCtrl.dismiss({
            loggedIn: status
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.path = this.navParams.data.path;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var _this14 = this;

            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    this.disableSubmit = true;
                    _context13.next = 3;
                    return this.api.postItem("login", this.form.value).then(function (res) {
                      _this14.status = res;

                      if (_this14.status.errors) {
                        console.log("Error is coming");
                        _this14.loginError = true;
                        _this14.errors = _this14.status.errors;

                        for (var key in _this14.errors) {
                          _this14.errors[key].forEach(function (item, index) {
                            _this14.errors[key][index] = _this14.errors[key][index].replace("<strong>ERROR</strong>:", "");
                            _this14.errors[key][index] = _this14.errors[key][index].replace("/a>", "/span>");
                            _this14.errors[key][index] = _this14.errors[key][index].replace("<a", "<span");
                          });
                        }
                      } else if (_this14.status.data) {
                        localStorage.setItem("user_name", _this14.status.data.display_name);
                        _this14.settings.customer.id = _this14.status.ID;

                        if (_this14.platform.is("cordova")) {
                          _this14.oneSignal.getIds().then(function (data) {
                            _this14.form.onesignal_user_id = data.userId;
                            _this14.form.onesignal_push_token = data.pushToken;

                            _this14.api.postItem("update_user_notification", _this14.form).then(function (res) {});
                          });
                        }

                        if (_this14.status.allcaps.wc_product_vendors_admin_vendor || _this14.status.allcaps.dc_vendor || _this14.status.allcaps.seller || _this14.status.allcaps.wcfm_vendor) {
                          _this14.settings.vendor = true;
                        }

                        if (_this14.status.allcaps.administrator) {
                          _this14.settings.administrator = true;
                        }

                        _this14.close(true);
                      }

                      _this14.disableSubmit = false;
                    }, function (err) {
                      _this14.disableSubmit = false;
                    });

                  case 3:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "forgotton",
        value: function forgotton() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var modal, _yield$modal$onWillDi2, data;

            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.modalCtrl.create({
                      component: _forgotten_forgotten_page__WEBPACK_IMPORTED_MODULE_10__["ForgottenPage"],
                      componentProps: {
                        path: "tabs/account"
                      },
                      swipeToClose: true
                    });

                  case 2:
                    modal = _context14.sent;
                    modal.present();
                    _context14.next = 6;
                    return modal.onWillDismiss();

                  case 6:
                    _yield$modal$onWillDi2 = _context14.sent;
                    data = _yield$modal$onWillDi2.data;

                  case 8:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "googleLogin",
        value: function googleLogin() {
          var _this15 = this;

          this.googleLogingInn = true;
          this.presentLoading();
          this.googlePlus.login({}).then(function (res) {
            console.log("response from google", res);
            _this15.googleStatus = res;

            _this15.api.postItem("google_login", {
              access_token: _this15.googleStatus.userId,
              email: _this15.googleStatus.email,
              first_name: _this15.googleStatus.givenName,
              last_name: _this15.googleStatus.familyName,
              display_name: _this15.googleStatus.displayName,
              image: _this15.googleStatus.imageUrl
            }).then(function (res) {
              _this15.status = res;
              console.log("response from api", res);

              if (_this15.status.errors) {
                _this15.errors = _this15.status.errors;
              } else if (_this15.status.data) {
                _this15.settings.customer.id = _this15.status.ID;

                if (_this15.platform.is("cordova")) {
                  _this15.oneSignal.getIds().then(function (data) {
                    _this15.form.onesignal_user_id = data.userId;
                    _this15.form.onesignal_push_token = data.pushToken;
                  });

                  _this15.api.postItem("update_user_notification", _this15.form).then(function (res) {});
                }

                if (_this15.status.allcaps.wc_product_vendors_admin_vendor || _this15.status.allcaps.dc_vendor || _this15.status.allcaps.seller || _this15.status.allcaps.wcfm_vendor) {
                  _this15.settings.vendor = true;
                }

                if (_this15.status.allcaps.administrator) {
                  _this15.settings.administrator = true;
                }

                _this15.close(true);
              }

              _this15.googleLogingInn = false;

              _this15.dismissLoading();
            }, function (err) {
              _this15.googleLogingInn = false;

              _this15.dismissLoading();
            });

            _this15.googleLogingInn = false;
          })["catch"](function (err) {
            _this15.googleStatus = err;
            _this15.googleLogingInn = false;
            console.log("response error google", err);

            _this15.dismissLoading();
          });
        }
      }, {
        key: "facebookLogin",
        value: function facebookLogin() {
          var _this16 = this;

          this.facebookLogingInn = true;
          console.log("starting loading for login with facebook");
          this.facebook.login(["public_profile", "email"]).then(function (res) {
            console.log("Response from facebook ", res);
            _this16.faceBookStatus = res;

            _this16.presentLoading();

            _this16.api.postItem("facebook_login", {
              access_token: _this16.faceBookStatus.authResponse.accessToken
            }).then(function (res) {
              _this16.status = res;

              if (_this16.status.errors) {
                _this16.errors = _this16.status.errors;
              } else if (_this16.status.data) {
                _this16.settings.customer.id = _this16.status.ID;

                if (_this16.platform.is("cordova")) {
                  _this16.oneSignal.getIds().then(function (data) {
                    _this16.form.onesignal_user_id = data.userId;
                    _this16.form.onesignal_push_token = data.pushToken;
                  });

                  _this16.api.postItem("update_user_notification", _this16.form).then(function (res) {});
                }

                if (_this16.status.allcaps.wc_product_vendors_admin_vendor || _this16.status.allcaps.dc_vendor || _this16.status.allcaps.seller || _this16.status.allcaps.wcfm_vendor) {
                  _this16.settings.vendor = true;
                }

                if (_this16.status.allcaps.administrator) {
                  _this16.settings.administrator = true;
                }

                _this16.close(true);
              }

              _this16.facebookLogingInn = false;

              _this16.dismissLoading();
            }, function (err) {
              _this16.facebookLogingInn = false;

              _this16.dismissLoading();
            });

            _this16.facebookLogingInn = false;
          })["catch"](function (e) {
            _this16.faceBookStatus = e;
            console.log("starting loading for login with facebook Error", _this16.faceBookStatus);

            _this16.presentToast("Something went wrong");

            _this16.facebookLogingInn = false;

            _this16.dismissLoading();
          });
        }
      }, {
        key: "loginWithPhone",
        value: function loginWithPhone() {
          var _this17 = this;

          this.phoneLogingInn = true;
          window.AccountKitPlugin.loginWithPhoneNumber({
            useAccessToken: true,
            defaultCountryCode: "IN",
            facebookNotificationsEnabled: true
          }, function (data) {
            window.AccountKitPlugin.getAccount(function (info) {
              return _this17.handlePhoneLogin(info);
            }, function (err) {
              return _this17.handlePhoneLogin(err);
            });
          });
        }
      }, {
        key: "handlePhoneLogin",
        value: function handlePhoneLogin(info) {
          var _this18 = this;

          if (info.phoneNumber) {
            this.api.postItem("phone_number_login", {
              phone: info.phoneNumber
            }).then(function (res) {
              _this18.status = res;

              if (_this18.status.errors) {
                _this18.errors = _this18.status.errors;
              } else if (_this18.status.data) {
                _this18.settings.customer.id = _this18.status.ID;

                if (_this18.platform.is("cordova")) {
                  _this18.oneSignal.getIds().then(function (data) {
                    _this18.form.onesignal_user_id = data.userId;
                    _this18.form.onesignal_push_token = data.pushToken;
                  });

                  _this18.api.postItem("update_user_notification", _this18.form).then(function (res) {});
                }

                if (_this18.status.allcaps.wc_product_vendors_admin_vendor || _this18.status.allcaps.dc_vendor || _this18.status.allcaps.seller || _this18.status.allcaps.wcfm_vendor) {
                  _this18.settings.vendor = true;
                }

                if (_this18.status.allcaps.administrator) {
                  _this18.settings.administrator = true;
                }

                _this18.close(true);
              }

              _this18.phoneLogingInn = false;
            }, function (err) {
              _this18.phoneLogingInn = false;
            });
          } else this.phoneLogingInn = false;
        }
      }, {
        key: "handlePhoneLoginError",
        value: function handlePhoneLoginError(error) {
          this.phoneVerificationError = error;
          this.phoneLogingInn = false;
        }
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          this.slides.slideTo(1);
        }
      }, {
        key: "onRegister",
        value: function onRegister() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var _this19 = this;

            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    this.disableSubmit = true;
                    _context15.next = 3;
                    return this.api.postItem("create-user", this.formRegister.value).then(function (res) {
                      _this19.status = res;

                      if (_this19.status.errors) {
                        _this19.errorsRegister = _this19.status.errors;
                        _this19.disableSubmit = false;

                        for (var key in _this19.errors) {
                          _this19.errorsRegister[key].forEach(function (item) {
                            return item.replace("<strong>ERROR</strong>:", "");
                          });
                        }
                      } else if (_this19.status.data != undefined) {
                        _this19.settings.customer.id = _this19.status.ID;
                        if (_this19.platform.is("cordova")) _this19.oneSignal.getIds().then(function (data) {
                          _this19.pushForm.onesignal_user_id = data.userId;
                          _this19.pushForm.onesignal_push_token = data.pushToken;

                          _this19.api.postItem("update_user_notification", _this19.pushForm).then(function (res) {});
                        });

                        _this19.close(true);

                        _this19.disableSubmit = false;
                      } else _this19.disableSubmit = false;
                    }, function (err) {
                      _this19.disableSubmit = false;
                    });

                  case 3:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.loadingController.create({
                      message: "Please wait...",
                      duration: 2000
                    });

                  case 2:
                    this.loading = _context16.sent;
                    this.loading.present();

                  case 4:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "dismissLoading",
        value: function dismissLoading() {
          if (this.loading) {
            this.loading.dismiss();
          }
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(event) {
          this.segment = event.detail.value;
        }
      }, {
        key: "registerme",
        value: function registerme() {
          var _this20 = this;

          console.log("ref_id is: ", this.formRegister.value.ref_id);

          if (this.formRegister.value.ref_id) {
            this.disableSubmit = true;
            this.api.getPosts("wp-admin/admin-ajax.php?action=eg_add_points&ref_id=" + this.formRegister.value.ref_id).then(function (res) {
              console.log("response for the ref_id points add is: ", res);

              _this20.onRegister();
            })["catch"](function (res) {
              _this20.onRegister();
            });
          } else {
            this.onSubmit();
          }
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var toast;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: 2000
                    });

                  case 2:
                    toast = _context17.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"]
      }, {
        type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mySlider", {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], LoginPage.prototype, "slides", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/account/login/login.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], LoginPage);
    /***/
  },

  /***/
  "./src/app/account/map/map.page.scss": function srcAppAccountMapMapPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".map-canvas {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n}\n\n.show-map {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9tYXAvRDpcXGx1eGUuLi4gZGVidWcgOSBPQ1Qvc3JjXFxhcHBcXGFjY291bnRcXG1hcFxcbWFwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9tYXAvbWFwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFFQSw2QkFBQTtFQUVBLFVBQUE7RUFDQSxpQ0FBQTtBQ0ZGOztBREtBO0VBQ0UsVUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9tYXAvbWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY2FudmFzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xufVxuXG4uc2hvdy1tYXAge1xuICBvcGFjaXR5OiAxO1xufVxuIiwiLm1hcC1jYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW47XG59XG5cbi5zaG93LW1hcCB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/account/map/map.page.ts": function srcAppAccountMapMapPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPage", function () {
      return MapPage;
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


    var _data_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");

    var MapPage = /*#__PURE__*/function () {
      function MapPage(api, platform, settings) {
        _classCallCheck(this, MapPage);

        this.api = api;
        this.platform = platform;
        this.settings = settings;
        this.mapData = [];
      }

      _createClass(MapPage, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var _this21 = this;

            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return this.api.postItem('locations').then(function (res) {
                      _this21.processData(res);

                      console.log(res);
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "processData",
        value: function processData(data) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            var _this22 = this;

            var googleMaps, mapEle, map;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.next = 2;
                    return getGoogleMaps(data.mapApiKey);

                  case 2:
                    googleMaps = _context19.sent;
                    data.locations.map(function (item, index) {
                      _this22.mapData[index] = {};
                      _this22.mapData[index].name = item.title;
                      _this22.mapData[index].lat = parseFloat(item.description);
                      _this22.mapData[index].lng = parseFloat(item.url);
                      if (index == 0) _this22.mapData[index].center = true;
                      console.log(_this22.mapData);
                    });
                    mapEle = this.mapElement.nativeElement;
                    map = new googleMaps.Map(mapEle, {
                      center: this.mapData.find(function (d) {
                        return d.center;
                      }),
                      zoom: data.mapZoom
                    });
                    this.mapData.forEach(function (markerData) {
                      var infoWindow = new googleMaps.InfoWindow({
                        content: "<h5>".concat(markerData.name, "</h5>")
                      });
                      var marker = new googleMaps.Marker({
                        position: markerData,
                        map: map,
                        title: markerData.name
                      });
                      marker.addListener('click', function () {
                        infoWindow.open(map, marker);
                      });
                    });
                    googleMaps.event.addListenerOnce(map, 'idle', function () {
                      mapEle.classList.add('show-map');
                    });

                  case 8:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }]);

      return MapPage;
    }();

    MapPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapCanvas', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], MapPage.prototype, "mapElement", void 0);
    MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/map/map.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map.page.scss */
      "./src/app/account/map/map.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"]])], MapPage);

    function getGoogleMaps(apiKey) {
      var win = window;
      var googleModule = win.google;

      if (googleModule && googleModule.maps) {
        return Promise.resolve(googleModule.maps);
      }

      return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = "https://maps.googleapis.com/maps/api/js?key=".concat(apiKey, "&v=3.31");
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = function () {
          var googleModule2 = win.google;

          if (googleModule2 && googleModule2.maps) {
            resolve(googleModule2.maps);
          } else {
            reject('google maps not available');
          }
        };
      });
    }
    /***/

  },

  /***/
  "./src/app/account/order/order.page.scss": function srcAppAccountOrderOrderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".order .grand-total {\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9vcmRlci9EOlxcbHV4ZS4uLiBkZWJ1ZyA5IE9DVC9zcmNcXGFwcFxcYWNjb3VudFxcb3JkZXJcXG9yZGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9vcmRlci9vcmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9vcmRlci9vcmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXIge1xuICAgIC5ncmFuZC10b3RhbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgfVxufSIsIi5vcmRlciAuZ3JhbmQtdG90YWwge1xuICBmb250LXdlaWdodDogOTAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/account/order/order.page.ts": function srcAppAccountOrderOrderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderPage", function () {
      return OrderPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var OrderPage = /*#__PURE__*/function () {
      function OrderPage(translate, api, settings, toastController, router, loadingController, navCtrl, route) {
        _classCallCheck(this, OrderPage);

        this.translate = translate;
        this.api = api;
        this.settings = settings;
        this.toastController = toastController;
        this.router = router;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.filter = {};
        this.refundKeys = {};
        this.refund = {};
        this.showRefund = false;
        this.disableRefundButton = false;
        this.refundResponse = {};
        this.lan = {};
      }

      _createClass(OrderPage, [{
        key: "refundKey",
        value: function refundKey() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var _this23 = this;

            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return this.api.postItem('woo_refund_key').then(function (res) {
                      _this23.refundKeys = res;
                      console.log(_this23.refundKeys);
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.translate.get(['Refund request submitted!', 'Unable to submit the refund request']).subscribe(function (translations) {
            _this24.lan.refund = translations['Refund request submitted!'];
            _this24.lan.unable = translations['Unable to submit the refund request'];
          });
          this.filter.id = this.route.snapshot.paramMap.get('id');
          this.route.queryParams.subscribe(function (params) {
            if (params["order"]) _this24.order = params["order"];else _this24.getOrder();
          });
          this.refundKey();
        }
      }, {
        key: "showField",
        value: function showField() {
          this.showRefund = !this.showRefund;
        }
      }, {
        key: "requestRefund",
        value: function requestRefund() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            var _this25 = this;

            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    this.disableRefundButton = true;
                    this.refund.ywcars_form_order_id = this.filter.id;
                    this.refund.ywcars_form_whole_order = '1';
                    this.refund.ywcars_form_product_id = '';
                    this.refund.ywcars_form_line_total = this.order.total;
                    this.refund.ywcars_form_reason = this.refund.ywcars_form_reason;
                    this.refund.action = 'ywcars_submit_request';
                    this.refund.security = this.refundKeys.ywcars_submit_request;
                    _context21.next = 10;
                    return this.api.postItem('woo_refund_key', this.refund).then(function (res) {
                      _this25.refundResponse = res;
                      _this25.disableRefundButton = false;
                      if (_this25.refundResponse.success) _this25.presentToast(_this25.lan.refund);else _this25.presentToast(_this25.lan.unable);
                    }, function (err) {
                      console.log(err);
                      _this25.disableRefundButton = false;
                    });

                  case 10:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            var toast;
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    _context22.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: 2000
                    });

                  case 2:
                    toast = _context22.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "getOrder",
        value: function getOrder() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            var _this26 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.next = 2;
                    return this.loadingController.create({
                      message: 'Loading...',
                      translucent: true,
                      animated: true,
                      backdropDismiss: true
                    });

                  case 2:
                    loading = _context23.sent;
                    _context23.next = 5;
                    return loading.present();

                  case 5:
                    _context23.next = 7;
                    return this.api.postItem('order', this.filter).then(function (res) {
                      _this26.order = res;
                      loading.dismiss();
                    }, function (err) {
                      console.log(err);
                      loading.dismiss();
                    });

                  case 7:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }]);

      return OrderPage;
    }();

    OrderPage.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    OrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/order/order.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order.page.scss */
      "./src/app/account/order/order.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], OrderPage);
    /***/
  },

  /***/
  "./src/app/account/orders/orders.page.scss": function srcAppAccountOrdersOrdersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".orders .activated {\n  opacity: 0.6;\n}\n.orders .empty {\n  margin-top: 50px;\n  text-align: center;\n}\n.orders .empty ion-icon {\n  font-size: 7.2em;\n}\n.orders ion-card-title {\n  font-size: 28px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.orders ion-card-subtitle {\n  font-weight: 500;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9vcmRlcnMvRDpcXGx1eGUuLi4gZGVidWcgOSBPQ1Qvc3JjXFxhcHBcXGFjY291bnRcXG9yZGVyc1xcb3JkZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQUE7QUNBUjtBREVJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ0FSO0FEQ1E7RUFDSSxnQkFBQTtBQ0NaO0FERUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FSO0FERUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXJzIHtcbiAgICAuYWN0aXZhdGVkIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgIH1cbiAgICAuZW1wdHkge1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNy4yZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgfVxuICAgIGlvbi1jYXJkLXN1YnRpdGxle1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxufSIsIi5vcmRlcnMgLmFjdGl2YXRlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbi5vcmRlcnMgLmVtcHR5IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm9yZGVycyAuZW1wdHkgaW9uLWljb24ge1xuICBmb250LXNpemU6IDcuMmVtO1xufVxuLm9yZGVycyBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi5vcmRlcnMgaW9uLWNhcmQtc3VidGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/account/orders/orders.page.ts": function srcAppAccountOrdersOrdersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersPage", function () {
      return OrdersPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");

    var OrdersPage = /*#__PURE__*/function () {
      function OrdersPage(api, settings, router, loadingController, navCtrl, route) {
        _classCallCheck(this, OrdersPage);

        this.api = api;
        this.settings = settings;
        this.router = router;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.filter = {};
        this.hasMoreItems = true;
        this.filter.page = 1;
        this.filter.customer = this.settings.customer.id;
      }

      _createClass(OrdersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.settings.customer) this.getOrders();
        }
      }, {
        key: "getOrders",
        value: function getOrders() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            var _this27 = this;

            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.next = 2;
                    return this.api.postItem('orders', this.filter).then(function (res) {
                      _this27.orders = res;
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
            var _this28 = this;

            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    this.filter.page = this.filter.page + 1;
                    _context25.next = 3;
                    return this.api.postItem('orders', this.filter).then(function (res) {
                      _this28.orders.push.apply(_this28.orders, res);

                      event.target.complete();
                      if (!res) _this28.hasMoreItems = false;
                    }, function (err) {
                      event.target.complete();
                    });

                  case 3:
                    console.log('Done');

                  case 4:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }, {
        key: "getDetail",
        value: function getDetail(order) {
          var navigationExtras = {
            queryParams: {
              order: order
            }
          };
          this.navCtrl.navigateForward('/tabs/account/orders/order/' + order.id, navigationExtras);
        }
      }]);

      return OrdersPage;
    }();

    OrdersPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    OrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-orders',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orders.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/orders/orders.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orders.page.scss */
      "./src/app/account/orders/orders.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], OrdersPage);
    /***/
  },

  /***/
  "./src/app/account/points/points.page.scss": function srcAppAccountPointsPointsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcG9pbnRzL3BvaW50cy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/account/points/points.page.ts": function srcAppAccountPointsPointsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PointsPage", function () {
      return PointsPage;
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


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var PointsPage = /*#__PURE__*/function () {
      function PointsPage(api, settings, navCtrl) {
        _classCallCheck(this, PointsPage);

        this.api = api;
        this.settings = settings;
        this.navCtrl = navCtrl;
        this.points = {};
      }

      _createClass(PointsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
            var _this29 = this;

            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    _context26.next = 2;
                    return this.api.postItem('getPointsHistory').then(function (res) {
                      _this29.points = res; //this.settings.reward = res.points;

                      //this.settings.reward = res.points;
                      _this29.settings.rewardValue = res.points_vlaue;
                    });

                  case 2:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, this);
          }));
        }
      }]);

      return PointsPage;
    }();

    PointsPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    PointsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-points',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./points.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/points/points.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./points.page.scss */
      "./src/app/account/points/points.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], PointsPage);
    /***/
  },

  /***/
  "./src/app/account/register/register.page.scss": function srcAppAccountRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login1 {\n  padding: 16px;\n  display: flex !important;\n  justify-content: center !important;\n  height: 100%;\n  flex-direction: column;\n  --inner-padding-start: 0;\n}\n.login1 ion-list {\n  margin: 16px 8px;\n  background: transparent;\n}\n.login1 ion-list ion-item {\n  --background: transparent;\n}\n.login1 ion-button {\n  --border-radius: 4px;\n}\n.login1 p {\n  text-align: center;\n}\n.login1 ion-card {\n  padding: 10px;\n  margin: 0;\n  background: white;\n}\n.login1 ion-item {\n  --padding-start: 0;\n}\n.login-logo {\n  position: absolute;\n  margin: auto;\n}\n.login-logo img {\n  margin-top: -90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9yZWdpc3Rlci9EOlxcbHV4ZS4uLiBkZWJ1ZyA5IE9DVC9zcmNcXGFwcFxcYWNjb3VudFxccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBY0Esd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQVNBLHdCQUFBO0FDcEJKO0FETEk7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0FDT1I7QUROUTtFQUNJLHlCQUFBO0FDUVo7QURMSTtFQUNJLG9CQUFBO0FDT1I7QURMSTtFQUNJLGtCQUFBO0FDT1I7QURESTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNHUjtBRERJO0VBQ0ksa0JBQUE7QUNHUjtBRENBO0VBRUksa0JBQUE7RUFDQSxZQUFBO0FDQ0o7QURBSTtFQUNJLGlCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbjEge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBtYXJnaW46IDE2cHggOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgfVxuICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbn1cbi5sb2dpbi1sb2dvIHtcbiAgICAvL3dpZHRoOiAyMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGltZyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC05MHB4O1xuICAgIH1cbn1cbmlvbi1jb250ZW50IHtcbiAgICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMkIzMkIyLCAjMTQ4OENDKSAhaW1wb3J0YW50OyAvL2dyYWRpZW50IGJhY2tncm91bmRcbiAgICAvLy0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9sb2dpbl9iYWNrZ3JvdW5kNC5qcGcpIDAgMC9hdXRvIDEwMCUgbm8tcmVwZWF0OyAvL2ltYWdlIGJhY2tncm91bmRcbn0iLCIubG9naW4xIHtcbiAgcGFkZGluZzogMTZweDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbn1cbi5sb2dpbjEgaW9uLWxpc3Qge1xuICBtYXJnaW46IDE2cHggOHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5sb2dpbjEgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmxvZ2luMSBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ubG9naW4xIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9naW4xIGlvbi1jYXJkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5sb2dpbjEgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG5cbi5sb2dpbi1sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IGF1dG87XG59XG4ubG9naW4tbG9nbyBpbWcge1xuICBtYXJnaW4tdG9wOiAtOTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/account/register/register.page.ts": function srcAppAccountRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../data */
    "./src/app/data.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(platform, oneSignal, api, data, loadingController, settings, navCtrl, fb) {
        _classCallCheck(this, RegisterPage);

        this.platform = platform;
        this.oneSignal = oneSignal;
        this.api = api;
        this.data = data;
        this.loadingController = loadingController;
        this.settings = settings;
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.status = {};
        this.disableSubmit = false;
        this.phoneLogingInn = false;
        this.form = this.fb.group({
          first_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          last_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email],
          phone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          ref_id: [""]
        });
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
            var _this30 = this;

            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    this.disableSubmit = true;
                    _context27.next = 3;
                    return this.api.postItem("create-user", this.form.value).then(function (res) {
                      _this30.status = res;

                      if (_this30.status.errors) {
                        _this30.errors = _this30.status.errors;
                        _this30.disableSubmit = false;

                        for (var key in _this30.errors) {
                          _this30.errors[key].forEach(function (item) {
                            return item.replace("<strong>ERROR</strong>:", "");
                          });
                        }
                      } else if (_this30.status.data != undefined) {
                        _this30.settings.customer.id = _this30.status.ID;
                        if (_this30.platform.is("cordova")) _this30.oneSignal.getIds().then(function (data) {
                          _this30.pushForm.onesignal_user_id = data.userId;
                          _this30.pushForm.onesignal_push_token = data.pushToken;

                          _this30.api.postItem("update_user_notification", _this30.pushForm).then(function (res) {});
                        });

                        _this30.navCtrl.navigateBack("/tabs/account");

                        _this30.disableSubmit = false;
                      } else _this30.disableSubmit = false;
                    }, function (err) {
                      _this30.disableSubmit = false;
                    });

                  case 3:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27, this);
          }));
        }
      }, {
        key: "loginWithPhone",
        value: function loginWithPhone() {
          var _this31 = this;

          this.phoneLogingInn = true;
          window.AccountKitPlugin.loginWithPhoneNumber({
            useAccessToken: true,
            defaultCountryCode: "ID",
            facebookNotificationsEnabled: true
          }, function (data) {
            window.AccountKitPlugin.getAccount(function (info) {
              return _this31.handlePhoneLogin(info);
            }, function (err) {
              return _this31.handlePhoneLogin(err);
            });
          });
        }
      }, {
        key: "handlePhoneLogin",
        value: function handlePhoneLogin(info) {
          var _this32 = this;

          if (info.phoneNumber) {
            this.api.postItem("phone_number_login", {
              phone: info.phoneNumber
            }).then(function (res) {
              _this32.status = res;

              if (_this32.status.errors) {
                _this32.errors = _this32.status.errors;
              } else if (_this32.status.data) {
                _this32.settings.customer.id = _this32.status.ID;

                if (_this32.platform.is("cordova")) {
                  _this32.oneSignal.getIds().then(function (data) {
                    _this32.form.onesignal_user_id = data.userId;
                    _this32.form.onesignal_push_token = data.pushToken;
                  });

                  _this32.api.postItem("update_user_notification", _this32.form).then(function (res) {});
                }

                if (_this32.status.allcaps.wc_product_vendors_admin_vendor || _this32.status.allcaps.dc_vendor || _this32.status.allcaps.seller || _this32.status.allcaps.wcfm_vendor) {
                  _this32.settings.vendor = true;
                }

                if (_this32.status.allcaps.administrator) {
                  _this32.settings.administrator = true;
                }

                _this32.navCtrl.navigateBack("/tabs/account");
              }

              _this32.phoneLogingInn = false;
            }, function (err) {
              _this32.phoneLogingInn = false;
            });
          } else this.phoneLogingInn = false;
        }
      }, {
        key: "handlePhoneLoginError",
        value: function handlePhoneLoginError(error) {
          this.phoneVerificationError = error;
          this.phoneLogingInn = false;
        }
      }, {
        key: "registerme",
        value: function registerme() {
          var _this33 = this;

          console.log("ref_id is: ", this.form.value.ref_id);

          if (this.form.value.ref_id) {
            this.disableSubmit = true;
            this.api.getPosts("wp-admin/admin-ajax.php?action=eg_add_points&ref_id=" + this.form.value.ref_id).then(function (res) {
              console.log("response for the ref_id points add is: ", res);

              _this33.onSubmit();
            })["catch"](function (res) {
              _this33.onSubmit();
            });
          } else {
            this.onSubmit();
          }
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_4__["Data"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }];
    };

    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-register",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/account/register/register.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_4__["Data"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], RegisterPage);
    /***/
  },

  /***/
  "./src/app/account/setting/setting.page.scss": function srcAppAccountSettingSettingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvc2V0dGluZy9zZXR0aW5nLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/account/setting/setting.page.ts": function srcAppAccountSettingSettingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingPage", function () {
      return SettingPage;
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


    var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../config */
    "./src/app/config.ts");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _home_home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../home/home.page */
    "./src/app/home/home.page.ts");

    var SettingPage = /*#__PURE__*/function () {
      function SettingPage(home, ionicConfig, router, settings, navCtrl, translateService, nativeStorage, config) {
        _classCallCheck(this, SettingPage);

        this.home = home;
        this.ionicConfig = ionicConfig;
        this.router = router;
        this.settings = settings;
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.nativeStorage = nativeStorage;
        this.config = config;
      }

      _createClass(SettingPage, [{
        key: "applyLanguage",
        value: function applyLanguage() {
          var _this34 = this;

          this.translateService.setDefaultLang(this.config.lang);

          if (this.config.lang == 'ar') {
            this.settings.dir = 'rtl';
          } else this.settings.dir = 'ltr';

          this.translateService.get(['Back']).subscribe(function (translations) {
            _this34.ionicConfig.set('backButtonText', translations['Back']);
          });
          document.documentElement.setAttribute('dir', this.settings.dir);
          this.nativeStorage.setItem('settings', {
            lang: this.config.lang,
            dir: this.settings.dir
          }).then(function () {
            return console.log();
          }, function (error) {
            return console.error(error);
          });
          this.home.getBlocks();
          this.navCtrl.pop();
        }
      }]);

      return SettingPage;
    }();

    SettingPage.ctorParameters = function () {
      return [{
        type: _home_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Config"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_7__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"]
      }, {
        type: _config__WEBPACK_IMPORTED_MODULE_2__["Config"]
      }];
    };

    SettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-setting',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./setting.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/setting/setting.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./setting.page.scss */
      "./src/app/account/setting/setting.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_home_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Config"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _data_settings__WEBPACK_IMPORTED_MODULE_7__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"], _config__WEBPACK_IMPORTED_MODULE_2__["Config"]])], SettingPage);
    /***/
  },

  /***/
  "./src/app/account/wallet/wallet.page.scss": function srcAppAccountWalletWalletPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/account/wallet/wallet.page.ts": function srcAppAccountWalletWalletPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletPage", function () {
      return WalletPage;
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


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../data */
    "./src/app/data.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var WalletPage = /*#__PURE__*/function () {
      function WalletPage(loadingController, router, route, navCtrl, data, api, settings, alertController) {
        _classCallCheck(this, WalletPage);

        this.loadingController = loadingController;
        this.router = router;
        this.route = route;
        this.navCtrl = navCtrl;
        this.data = data;
        this.api = api;
        this.settings = settings;
        this.alertController = alertController;
        this.show = false;
        this.wallet = {};
      }

      _createClass(WalletPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getWallet();
        }
      }, {
        key: "getWallet",
        value: function getWallet() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
            var _this35 = this;

            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    _context28.next = 2;
                    return this.api.postItem('wallet').then(function (res) {
                      _this35.wallet = res;
                      console.log(res);
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this);
          }));
        }
      }, {
        key: "showField",
        value: function showField() {
          this.show = !this.show;
        }
      }, {
        key: "addTopup",
        value: function addTopup() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
            var _this36 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee29$(_context29) {
              while (1) {
                switch (_context29.prev = _context29.next) {
                  case 0:
                    if (!this.validateForm()) {
                      _context29.next = 8;
                      break;
                    }

                    _context29.next = 3;
                    return this.loadingController.create({
                      message: 'Please wait...',
                      translucent: true,
                      cssClass: 'custom-class custom-loading'
                    });

                  case 3:
                    loading = _context29.sent;
                    _context29.next = 6;
                    return loading.present();

                  case 6:
                    _context29.next = 8;
                    return this.api.ajaxCall('/wp-admin/admin-ajax.php', {
                      woo_wallet_balance_to_add: this.amount,
                      woo_wallet_topup: this.wallet.woo_wallet_topup,
                      _wp_http_referer: '/my-account/woo-wallet/add/',
                      woo_add_to_wallet: 'Add'
                    }).then(function (res) {
                      _this36.api.postItem('cart').then(function (res) {
                        _this36.cart = res;

                        _this36.data.updateCart(_this36.cart.cart_contents);

                        _this36.show = false;
                        loading.dismiss();

                        _this36.navCtrl.navigateForward(_this36.router.url + '/cart');
                      }, function (err) {
                        console.log(err);
                        loading.dismiss();
                      });
                    }, function (err) {
                      console.log(err);
                      loading.dismiss();
                    });

                  case 8:
                  case "end":
                    return _context29.stop();
                }
              }
            }, _callee29, this);
          }));
        }
      }, {
        key: "validateForm",
        value: function validateForm() {
          if (this.amount == undefined || this.amount == "") {
            this.presentAlert('Please enter Amount');
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(alertMessage) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
            var alert;
            return regeneratorRuntime.wrap(function _callee30$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    _context30.next = 2;
                    return this.alertController.create({
                      header: 'Oops!',
                      message: alertMessage,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context30.sent;
                    _context30.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context30.stop();
                }
              }
            }, _callee30, this);
          }));
        }
      }]);

      return WalletPage;
    }();

    WalletPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_5__["Data"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    WalletPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wallet',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wallet.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/wallet/wallet.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wallet.page.scss */
      "./src/app/account/wallet/wallet.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], WalletPage);
    /***/
  },

  /***/
  "./src/app/account/wishlist/wishlist.page.scss": function srcAppAccountWishlistWishlistPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".product-list3 ion-item {\n  --border-color: var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));\n  --border-width: 0 0 0.55px;\n  --padding-start: 0px;\n  padding: 10xp;\n}\n.product-list3 ion-item ion-thumbnail {\n  width: 28%;\n  height: 100%;\n  margin-top: 0;\n  margin-bottom: -4px;\n  padding: 10px;\n}\n.product-list3 ion-item .details {\n  align-self: flex-start;\n  padding: 0;\n  width: 104%;\n}\n.product-list3 ion-item .details ion-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  font-size: small;\n}\n.product-list3 ion-item .details p {\n  margin: 0;\n}\n.product-list3 ion-item .details .special-price {\n  font-size: x-small;\n  padding: 0 5px;\n}\n.product-list3 ion-item .details ion-icon {\n  font-size: x-large;\n  font-weight: 300;\n}\n.trash {\n  position: absolute;\n  top: 16px;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC93aXNobGlzdC9EOlxcbHV4ZS4uLiBkZWJ1ZyA5IE9DVC9zcmNcXGFwcFxcYWNjb3VudFxcd2lzaGxpc3RcXHdpc2hsaXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWNjb3VudC93aXNobGlzdC93aXNobGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx1SEFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FDQVI7QURDUTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0NaO0FEQ1E7RUFDSSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQ1o7QURBWTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNFaEI7QURBWTtFQUNJLFNBQUE7QUNFaEI7QURBWTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0VoQjtBREFZO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0VoQjtBREdBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC93aXNobGlzdC93aXNobGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1saXN0MyB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsIHJnYmEoMCwgMCwgMCwgMC4yKSkpKTtcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwLjU1cHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHhwO1xuICAgICAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgICAgIHdpZHRoOiAyOCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRldGFpbHMge1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTA0JTtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNwZWNpYWwtcHJpY2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi50cmFzaHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNnB4O1xuICAgIHJpZ2h0OiAwO1xufSIsIi5wcm9kdWN0LWxpc3QzIGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCByZ2JhKDAsIDAsIDAsIDAuMikpKSk7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgcGFkZGluZzogMTB4cDtcbn1cbi5wcm9kdWN0LWxpc3QzIGlvbi1pdGVtIGlvbi10aHVtYm5haWwge1xuICB3aWR0aDogMjglO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IC00cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ucHJvZHVjdC1saXN0MyBpb24taXRlbSAuZGV0YWlscyB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDQlO1xufVxuLnByb2R1Y3QtbGlzdDMgaW9uLWl0ZW0gLmRldGFpbHMgaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG4ucHJvZHVjdC1saXN0MyBpb24taXRlbSAuZGV0YWlscyBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLnByb2R1Y3QtbGlzdDMgaW9uLWl0ZW0gLmRldGFpbHMgLnNwZWNpYWwtcHJpY2Uge1xuICBmb250LXNpemU6IHgtc21hbGw7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuLnByb2R1Y3QtbGlzdDMgaW9uLWl0ZW0gLmRldGFpbHMgaW9uLWljb24ge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi50cmFzaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNnB4O1xuICByaWdodDogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/account/wishlist/wishlist.page.ts": function srcAppAccountWishlistWishlistPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishlistPage", function () {
      return WishlistPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _data_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../data/product */
    "./src/app/data/product.ts");

    var WishlistPage = /*#__PURE__*/function () {
      function WishlistPage(api, router, settings, loadingController, navCtrl, route, productData) {
        _classCallCheck(this, WishlistPage);

        this.api = api;
        this.router = router;
        this.settings = settings;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.productData = productData;
        this.wishlist = [];
      }

      _createClass(WishlistPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          if (this.settings.customer.id) {
            this.getWishlist();
          }
        }
      }, {
        key: "getWishlist",
        value: function getWishlist() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
            var _this37 = this;

            return regeneratorRuntime.wrap(function _callee31$(_context31) {
              while (1) {
                switch (_context31.prev = _context31.next) {
                  case 0:
                    _context31.next = 2;
                    return this.api.postItem('get_wishlist').then(function (res) {
                      _this37.wishlist = res;
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context31.stop();
                }
              }
            }, _callee31, this);
          }));
        }
      }, {
        key: "removeFromWishlist",
        value: function removeFromWishlist(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
            var _this38 = this;

            return regeneratorRuntime.wrap(function _callee32$(_context32) {
              while (1) {
                switch (_context32.prev = _context32.next) {
                  case 0:
                    _context32.next = 2;
                    return this.api.postItem('remove_wishlist', {
                      product_id: id
                    }).then(function (res) {
                      _this38.wishlist = res;
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context32.stop();
                }
              }
            }, _callee32, this);
          }));
        }
      }, {
        key: "getProduct",
        value: function getProduct(product) {
          this.productData.product = product;
          this.navCtrl.navigateForward('/tabs/account/wishlist/product/');
        }
      }]);

      return WishlistPage;
    }();

    WishlistPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _data_product__WEBPACK_IMPORTED_MODULE_6__["Product"]
      }];
    };

    WishlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wishlist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wishlist.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/wishlist/wishlist.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wishlist.page.scss */
      "./src/app/account/wishlist/wishlist.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _data_product__WEBPACK_IMPORTED_MODULE_6__["Product"]])], WishlistPage);
    /***/
  },

  /***/
  "./src/app/cart/cart.page.scss": function srcAppCartCartPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cart ion-thumbnail {\n  height: auto;\n  width: 100px;\n}\n.cart .empty {\n  margin-top: 50px;\n  text-align: center;\n}\n.cart .empty ion-icon {\n  font-size: 7.2em;\n}\n.cart .grand-total {\n  font-weight: 500;\n}\n.cart .coupon h2 {\n  margin: 10px;\n}\n.cart .clamp {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n}\n.cart .add-remove-button {\n  padding: 0px;\n}\n.cart .add-remove-button ion-col {\n  padding: 0px;\n}\n.cart .add-remove-button ion-col ion-button {\n  margin: 0px;\n}\n.button-native {\n  padding: 0;\n}\n.redeem {\n  margin: 3px 0;\n}\n.redeem .item {\n  margin: 0;\n}\n.redeem ion-label {\n  margin: 16px 0;\n  overflow: visible;\n  white-space: normal;\n  font-size: 15px;\n}\n.redeem .item.item-block .item-inner {\n  border-bottom: 0;\n}\n.redeem .button {\n  margin: 0 30px;\n  width: calc(100% - 60px);\n  border-radius: 4px;\n}\n.name-label {\n  margin-right: 16px;\n}\n.name-label ion-button {\n  --box-shadow: none;\n  height: 24px;\n  width: 24px;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n.name-label ion-button ion-icon {\n  font-size: 22px;\n}\nion-item {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9EOlxcbHV4ZS4uLiBkZWJ1ZyA5IE9DVC9zcmNcXGFwcFxcY2FydFxcY2FydC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhcnQvY2FydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0FSO0FERUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDQVI7QURDUTtFQUNJLGdCQUFBO0FDQ1o7QURFSTtFQUNJLGdCQUFBO0FDQVI7QURHUTtFQUNJLFlBQUE7QUNEWjtBRElJO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNGUjtBRElJO0VBQ0ksWUFBQTtBQ0ZSO0FER1E7RUFDSSxZQUFBO0FDRFo7QURFWTtFQUNJLFdBQUE7QUNBaEI7QURLQTtFQUNJLFVBQUE7QUNGSjtBRElBO0VBQ0ksYUFBQTtBQ0RKO0FERUk7RUFDSSxTQUFBO0FDQVI7QURFSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0FSO0FERUk7RUFDSSxnQkFBQTtBQ0FSO0FERUk7RUFDSSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQ0FSO0FEUUE7RUFDSSxrQkFBQTtBQ0xKO0FETUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0pSO0FES1E7RUFDSSxlQUFBO0FDSFo7QURPQTtFQUNJLHlCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnQge1xuICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG4gICAgLmVtcHR5IHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDcuMmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5ncmFuZC10b3RhbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgIC5jb3Vwb24ge1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNsYW1wIHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICB9XG4gICAgLmFkZC1yZW1vdmUtYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLmJ1dHRvbi1uYXRpdmUge1xuICAgIHBhZGRpbmc6IDA7XG59XG4ucmVkZWVtIHtcbiAgICBtYXJnaW46IDNweCAwO1xuICAgIC5pdGVtIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gICAgLml0ZW0uaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxuICAgIC5idXR0b24ge1xuICAgICAgICBtYXJnaW46IDAgMzBweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxufVxuLnRyYXNoIHtcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gdG9wOiAxMHB4O1xuICAgIC8vIHJpZ2h0OiAwO1xufVxuLm5hbWUtbGFiZWwge1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufSIsIi5jYXJ0IGlvbi10aHVtYm5haWwge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5jYXJ0IC5lbXB0eSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJ0IC5lbXB0eSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNy4yZW07XG59XG4uY2FydCAuZ3JhbmQtdG90YWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNhcnQgLmNvdXBvbiBoMiB7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5jYXJ0IC5jbGFtcCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG4uY2FydCAuYWRkLXJlbW92ZS1idXR0b24ge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uY2FydCAuYWRkLXJlbW92ZS1idXR0b24gaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5jYXJ0IC5hZGQtcmVtb3ZlLWJ1dHRvbiBpb24tY29sIGlvbi1idXR0b24ge1xuICBtYXJnaW46IDBweDtcbn1cblxuLmJ1dHRvbi1uYXRpdmUge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucmVkZWVtIHtcbiAgbWFyZ2luOiAzcHggMDtcbn1cbi5yZWRlZW0gLml0ZW0ge1xuICBtYXJnaW46IDA7XG59XG4ucmVkZWVtIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMTZweCAwO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLnJlZGVlbSAuaXRlbS5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cbi5yZWRlZW0gLmJ1dHRvbiB7XG4gIG1hcmdpbjogMCAzMHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLm5hbWUtbGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4ubmFtZS1sYWJlbCBpb24tYnV0dG9uIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG59XG4ubmFtZS1sYWJlbCBpb24tYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/cart/cart.page.ts": function srcAppCartCartPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPage", function () {
      return CartPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../config */
    "./src/app/config.ts");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../data */
    "./src/app/data.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _data_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../data/product */
    "./src/app/data/product.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _account_login_login_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../account/login/login.page */
    "./src/app/account/login/login.page.ts");

    var CartPage = /*#__PURE__*/function () {
      function CartPage(modalController, translate, alertCtrl, toastController, config, api, data, router, settings, loadingController, navCtrl, route, productData, routerOutlet) {
        _classCallCheck(this, CartPage);

        this.modalController = modalController;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.config = config;
        this.api = api;
        this.data = data;
        this.router = router;
        this.settings = settings;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.productData = productData;
        this.routerOutlet = routerOutlet;
        this.cart = {};
        this.loginForm = {};
        this.lan = {};
        this.slideOpts = {
          initialSlide: 1,
          speed: 400
        };
      }

      _createClass(CartPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this39 = this;

          this.translate.get(["Requested quantity not available"]).subscribe(function (translations) {
            _this39.lan.lowQuantity = translations["Requested quantity not available"];
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.getCart();
        }
      }, {
        key: "getCart",
        value: function getCart() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
            var _this40 = this;

            return regeneratorRuntime.wrap(function _callee33$(_context33) {
              while (1) {
                switch (_context33.prev = _context33.next) {
                  case 0:
                    _context33.next = 2;
                    return this.api.postItem("cart").then(function (res) {
                      console.log("testingggg----cats redeems");
                      _this40.cart = res;

                      _this40.data.updateCart(_this40.cart.cart_contents);
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context33.stop();
                }
              }
            }, _callee33, this);
          }));
        }
      }, {
        key: "checkout",
        value: function checkout() {
          if (this.settings.customer.id || this.settings.settings.disable_guest_checkout == 0) {
            this.navCtrl.navigateForward("/tabs/cart/address");
          } else this.login();
        }
      }, {
        key: "getProduct",
        value: function getProduct(id) {
          this.productData.product = {};
          this.navCtrl.navigateForward(this.router.url + "/product/" + id);
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(itemKey, qty) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
            var _this41 = this;

            return regeneratorRuntime.wrap(function _callee34$(_context34) {
              while (1) {
                switch (_context34.prev = _context34.next) {
                  case 0:
                    _context34.next = 2;
                    return this.api.postItem("remove_cart_item&item_key=" + itemKey).then(function (res) {
                      _this41.cart = res;

                      _this41.data.updateCart(_this41.cart.cart_contents);
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context34.stop();
                }
              }
            }, _callee34, this);
          }));
        }
      }, {
        key: "submitCoupon",
        value: function submitCoupon(coupon) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
            var _this42 = this;

            return regeneratorRuntime.wrap(function _callee35$(_context35) {
              while (1) {
                switch (_context35.prev = _context35.next) {
                  case 0:
                    _context35.next = 2;
                    return this.api.postItem("apply_coupon", {
                      coupon_code: coupon
                    }).then(function (res) {
                      _this42.couponMessage = res;

                      if (_this42.couponMessage != null && _this42.couponMessage.notice) {
                        _this42.presentToast(_this42.couponMessage.notice);
                      }

                      _this42.getCart();
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context35.stop();
                }
              }
            }, _callee35, this);
          }));
        }
      }, {
        key: "removeCoupon",
        value: function removeCoupon(coupon) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
            var _this43 = this;

            return regeneratorRuntime.wrap(function _callee36$(_context36) {
              while (1) {
                switch (_context36.prev = _context36.next) {
                  case 0:
                    _context36.next = 2;
                    return this.api.postItem("remove_coupon", {
                      coupon: coupon
                    }).then(function (res) {
                      _this43.getCart();
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context36.stop();
                }
              }
            }, _callee36, this);
          }));
        }
      }, {
        key: "addToCart",
        value: function addToCart(id, item) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
            var _this44 = this;

            var params;
            return regeneratorRuntime.wrap(function _callee37$(_context37) {
              while (1) {
                switch (_context37.prev = _context37.next) {
                  case 0:
                    console.log(this.data.cart[id]);
                    console.log(item.value.manage_stock);

                    if (!(item.value.manage_stock && item.value.stock_quantity <= item.value.quantity)) {
                      _context37.next = 6;
                      break;
                    }

                    this.presentToast(this.lan.lowQuantity);
                    _context37.next = 15;
                    break;

                  case 6:
                    if (this.data.cartItem[item.key].quantity != undefined && this.data.cartItem[item.key].quantity == 0) {
                      this.data.cartItem[item.key].quantity = 0;
                    } else {
                      this.data.cartItem[item.key].quantity += 1;
                    }

                    if (this.data.cart[id] != undefined && this.data.cart[id] == 0) {
                      this.data.cart[id] = 0;
                    } else {
                      this.data.cart[id] += 1;
                    }

                    params = {};
                    params.key = item.key;
                    params.quantity = this.data.cartItem[item.key].quantity;
                    params.update_cart = "Update Cart";
                    params._wpnonce = this.cart.cart_nonce;
                    _context37.next = 15;
                    return this.api.postItem("update-cart-item-qty", params).then(function (res) {
                      _this44.cart = res;

                      _this44.data.updateCart(_this44.cart.cart_contents);
                    }, function (err) {
                      console.log(err);
                    });

                  case 15:
                  case "end":
                    return _context37.stop();
                }
              }
            }, _callee37, this);
          }));
        }
      }, {
        key: "deleteFromCart",
        value: function deleteFromCart(id, key) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
            var _this45 = this;

            var params;
            return regeneratorRuntime.wrap(function _callee38$(_context38) {
              while (1) {
                switch (_context38.prev = _context38.next) {
                  case 0:
                    if (this.data.cartItem[key].quantity != undefined && this.data.cartItem[key].quantity == 0) {
                      this.data.cartItem[key].quantity = 0;
                    } else {
                      this.data.cartItem[key].quantity -= 1;
                    }

                    if (this.data.cart[id] != undefined && this.data.cart[id] == 0) {
                      this.data.cart[id] = 0;
                    } else {
                      this.data.cart[id] -= 1;
                    }

                    params = {};
                    params.key = key;
                    params.quantity = this.data.cartItem[key].quantity;
                    params.update_cart = "Update Cart";
                    params._wpnonce = this.cart.cart_nonce;
                    _context38.next = 9;
                    return this.api.postItem("update-cart-item-qty", params).then(function (res) {
                      _this45.cart = res;

                      _this45.data.updateCart(_this45.cart.cart_contents);
                    }, function (err) {
                      console.log(err);
                    });

                  case 9:
                  case "end":
                    return _context38.stop();
                }
              }
            }, _callee38, this);
          }));
        } //----------Rewrad-----------------//

      }, {
        key: "redeem",
        value: function redeem() {
          var _this46 = this;

          // wc_points_rewards_apply_discount_amount:
          // wc_points_rewards_apply_discount: Apply Discount
          this.api.postItem("ajax_maybe_apply_discount").then(function (res) {
            console.log(res);

            _this46.getCart();
          });
        }
      }, {
        key: "login",
        value: function login() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
            var modal, _yield$modal$onWillDi3, data;

            return regeneratorRuntime.wrap(function _callee39$(_context39) {
              while (1) {
                switch (_context39.prev = _context39.next) {
                  case 0:
                    _context39.next = 2;
                    return this.modalController.create({
                      component: _account_login_login_page__WEBPACK_IMPORTED_MODULE_10__["LoginPage"],
                      componentProps: {
                        path: "tabs/cart"
                      },
                      swipeToClose: true
                    });

                  case 2:
                    modal = _context39.sent;
                    modal.present();
                    _context39.next = 6;
                    return modal.onWillDismiss();

                  case 6:
                    _yield$modal$onWillDi3 = _context39.sent;
                    data = _yield$modal$onWillDi3.data;

                    if (this.settings.customer.id) {
                      this.navCtrl.navigateForward("/tabs/cart/address");
                    }

                  case 9:
                  case "end":
                    return _context39.stop();
                }
              }
            }, _callee39, this);
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(userData) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee40() {
            var _this47 = this;

            return regeneratorRuntime.wrap(function _callee40$(_context40) {
              while (1) {
                switch (_context40.prev = _context40.next) {
                  case 0:
                    this.loginForm.username = userData.username;
                    this.loginForm.password = userData.password;
                    console.log(this.loginForm);
                    _context40.next = 5;
                    return this.api.postItem("login", this.loginForm).then(function (res) {
                      _this47.status = res;

                      if (_this47.status.errors != undefined) {
                        _this47.errors = _this47.status.errors;

                        _this47.inValidUsername();
                      } else if (_this47.status.data) {
                        _this47.settings.customer.id = _this47.status.ID;

                        if (_this47.status.allcaps.dc_vendor || _this47.status.allcaps.seller || _this47.status.allcaps.wcfm_vendor) {
                          _this47.settings.vendor = true;
                        }

                        if (_this47.status.allcaps.administrator) {
                          _this47.settings.administrator = true;
                        }

                        _this47.navCtrl.navigateForward("/tabs/cart/address");
                      }
                    }, function (err) {
                      console.log(err);
                    });

                  case 5:
                  case "end":
                    return _context40.stop();
                }
              }
            }, _callee40, this);
          }));
        }
      }, {
        key: "inValidUsername",
        value: function inValidUsername() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee41() {
            var alert;
            return regeneratorRuntime.wrap(function _callee41$(_context41) {
              while (1) {
                switch (_context41.prev = _context41.next) {
                  case 0:
                    _context41.next = 2;
                    return this.alertCtrl.create({
                      header: "Warning",
                      message: "Invalid Username or Password",
                      buttons: ["OK"]
                    });

                  case 2:
                    alert = _context41.sent;
                    _context41.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context41.stop();
                }
              }
            }, _callee41, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee42() {
            var toast;
            return regeneratorRuntime.wrap(function _callee42$(_context42) {
              while (1) {
                switch (_context42.prev = _context42.next) {
                  case 0:
                    _context42.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: 2000,
                      position: "top"
                    });

                  case 2:
                    toast = _context42.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context42.stop();
                }
              }
            }, _callee42, this);
          }));
        }
      }]);

      return CartPage;
    }();

    CartPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _config__WEBPACK_IMPORTED_MODULE_5__["Config"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_6__["Data"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_7__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _data_product__WEBPACK_IMPORTED_MODULE_8__["Product"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]
      }];
    };

    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-cart",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.page.scss */
      "./src/app/cart/cart.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _config__WEBPACK_IMPORTED_MODULE_5__["Config"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_6__["Data"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_settings__WEBPACK_IMPORTED_MODULE_7__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _data_product__WEBPACK_IMPORTED_MODULE_8__["Product"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]])], CartPage);
    /***/
  },

  /***/
  "./src/app/categories/categories.page.scss": function srcAppCategoriesCategoriesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: var(--ion-color-background, #f2f2f2);\n}\n\nion-list {\n  background: #f2f2f2;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\n.categories ion-card {\n  margin: 4px 8px;\n}\n\n.categories ion-card-header {\n  padding: 10px;\n}\n\n.categories ion-card-content {\n  padding: 0;\n}\n\n/****\nCopy respective block css block\n***/\n\n.categories-card1 ion-card {\n  margin: 0;\n  border-radius: 4px;\n}\n\n.categories-card1 ion-card-header {\n  padding: 10px;\n}\n\n.categories-card1 ion-card-content {\n  padding: 0;\n}\n\n.categories-card1 ion-card-title {\n  font-size: 13px;\n  text-align: center;\n}\n\n.categories-card1 img {\n  height: 80px;\n  width: auto;\n  margin: auto;\n}\n\n.categories-card2 {\n  padding: 0;\n}\n\n.categories-card2 ion-col {\n  padding: 0;\n}\n\n.categories-card2 ion-card {\n  margin: 0;\n  box-shadow: none;\n  border-radius: 0;\n}\n\n.categories-card2 ion-card-header {\n  padding: 10px;\n}\n\n.categories-card2 ion-card-content {\n  padding: 0;\n}\n\n.categories-card2 ion-card-title {\n  font-size: 13px;\n  text-align: center;\n}\n\n.categories-card2 img {\n  height: 80px;\n  width: auto;\n  margin: auto;\n}\n\n.categories-card3 {\n  padding: 0;\n}\n\n.categories-card3 ion-col {\n  padding: 16px;\n}\n\n.categories-card3 ion-card {\n  margin: 0;\n  box-shadow: none;\n  border-radius: 0;\n}\n\n.categories-card3 ion-card-header {\n  padding: 10px;\n}\n\n.categories-card3 ion-card-content {\n  padding: 0;\n}\n\n.categories-card3 ion-card-title {\n  font-size: 13px;\n  text-align: center;\n}\n\n.categories-card3 img {\n  border-radius: 4px;\n  height: 80px;\n  width: auto;\n  margin: auto;\n}\n\n.categories-card4 {\n  margin: 20px;\n  margin-bottom: 20px;\n  padding: 0;\n}\n\n.categories-card4 ion-col {\n  padding: 16px;\n}\n\n.categories-card4 ion-card {\n  margin: 0;\n  box-shadow: none;\n  border-radius: 0;\n}\n\n.categories-card4 ion-card-header {\n  padding: 10px;\n}\n\n.categories-card4 ion-card-content {\n  padding: 0;\n}\n\n.categories-card4 ion-card-title {\n  font-size: 13px;\n  text-align: center;\n}\n\n.categories-card4 img {\n  border-radius: 50%;\n  height: 80px;\n  width: auto;\n  margin: auto;\n}\n\n.category-container {\n  padding: 8px;\n}\n\n.category-container .categories-card5 {\n  margin: 0px;\n  padding: 0;\n  ion-col: last-child;\n  ion-col-border-bottom: 0px;\n}\n\n.category-container .categories-card5 ion-thumbnail {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.category-container .categories-card5 ion-col {\n  padding: 0px;\n}\n\n.category-container .categories-card5 ion-card {\n  margin: 0;\n  box-shadow: none;\n  box-shadow: none;\n  border: 0.55px solid var(--ion-color-light, #f4f5f8);\n  border-radius: 0;\n}\n\n.category-container .categories-card5 ion-card-header {\n  padding: 10px;\n  padding-bottom: 20px;\n}\n\n.category-container .categories-card5 ion-card-content {\n  padding-top: 30px;\n  text-align: center;\n}\n\n.category-container .categories-card5 ion-card-title {\n  font-size: 13px;\n  text-align: center;\n}\n\n.category-container .categories-card5 img {\n  border-radius: 50%;\n  height: 100%;\n  width: 100%;\n}\n\n.category-container .categories-card5 .sub-category-items img {\n  height: 80px;\n  width: 80px;\n  margin: auto;\n}\n\n.category-container .categories-card5 .item-native {\n  padding: 10px;\n}\n\nion-item .item-inner {\n  --inner-border-width: 0.55px;\n}\n\nion-item img {\n  border-radius: 4px;\n  height: 60px;\n  width: auto;\n  max-width: 60px;\n}\n\n.categories-split ion-list {\n  background: unset;\n}\n\n.categories-split .list > .item-block:first-child {\n  border-top: 0;\n}\n\n.categories-split .list > .item-block:last-child {\n  border-bottom: 0;\n}\n\n.categories-split .grid {\n  padding: 0;\n}\n\n.categories-split .col-left {\n  padding: 0;\n  background-color: var(--ion-color-light);\n  margin-right: -50px;\n  padding-right: 50px;\n  max-width: 44%;\n  overflow-y: scroll;\n  height: 95vh;\n  padding-bottom: 50px;\n}\n\n.categories-split .col-left .button-inner {\n  justify-content: flex-start;\n}\n\n.categories-split .col-left .tab-left-item h2 {\n  font-size: 11px;\n  padding: 12px 5px;\n  margin: 0 5px;\n  max-width: 110px;\n  text-transform: capitalize;\n  color: #888;\n}\n\n.categories-split .col-left .selected {\n  background-color: var(--ion-item-background, var(--ion-background-color, #fff));\n  border-left: 4px solid var(--ion-color-primary);\n}\n\n.categories-split .col-left .selected h2 {\n  font-weight: 600;\n  text-transform: capitalize;\n  color: var(--ion-color-dark, #000);\n}\n\n.categories-split .col-right {\n  padding: 0;\n  background-color: var(--ion-item-background, var(--ion-background-color, #fff));\n  margin-right: -50px;\n  padding-right: 50px;\n  text-align: center;\n  overflow-y: scroll;\n  height: 95vh;\n  padding-bottom: 50px;\n}\n\n.categories-split .col-right .cat-image {\n  margin: 0;\n  text-align: center;\n}\n\n.categories-split .col-right .cat-image img {\n  max-width: 100%;\n  border: 0;\n  max-height: 100px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.categories-split .col-right .row.unlimited-items {\n  flex-wrap: wrap;\n  padding: 0;\n}\n\n.categories-split .col-right .row.unlimited-items .col {\n  width: 31%;\n  padding: 10px 0px 8px;\n  max-width: 31%;\n  min-width: 31%;\n  margin-bottom: 5px;\n  margin-left: 5px;\n  text-align: center;\n}\n\n.categories-split .col-right .row.unlimited-items .col img {\n  height: 90px;\n  width: 70px;\n  display: block;\n  margin: auto;\n}\n\n.categories-split .col-right .row.unlimited-items .col .label {\n  margin: 8px 0 0;\n  text-align: center;\n  text-transform: capitalize;\n  font-size: 9px;\n}\n\n.categories-split .col-right .item {\n  padding: 0;\n}\n\n.categories-split .col-right .item .button {\n  color: var(--ion-item-background, var(--ion-background-color, #fff));\n  background-color: var(--ion-item-background, var(--ion-background-color, #fff));\n  height: 30px;\n  font-weight: 600;\n  font-size: 12px;\n  border-radius: 20px;\n  margin-right: 0;\n  border: 1px solid var(--ion-item-background, var(--ion-background-color, #fff));\n  box-shadow: none;\n}\n\n.categories-split .col-right .item-ios.item-block .item-inner {\n  padding-right: 4px;\n}\n\n.categories-split ion-list {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.ios .col-left {\n  height: 95vh;\n  padding-bottom: 50px;\n}\n\n.ios .col-right {\n  height: 95vh;\n  padding-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9EOlxcbHV4ZS4uLiBkZWJ1ZyA5IE9DVC9zcmNcXGFwcFxcY2F0ZWdvcmllc1xcY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrREFBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7QUNFSjs7QURBQTtFQUNJLHFCQUFBO0FDR0o7O0FEQUk7RUFDSSxlQUFBO0FDR1I7O0FEREk7RUFDSSxhQUFBO0FDR1I7O0FEREk7RUFDSSxVQUFBO0FDR1I7O0FER0E7O0dBQUE7O0FBT0k7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7QUNKUjs7QURPSTtFQUNJLGFBQUE7QUNMUjs7QURRSTtFQUNJLFVBQUE7QUNOUjs7QURRSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ05SOztBRFFJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTlI7O0FEVUE7RUFDSSxVQUFBO0FDUEo7O0FEU0k7RUFDSSxVQUFBO0FDUFI7O0FEV0k7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1RSOztBRFlJO0VBQ0ksYUFBQTtBQ1ZSOztBRGFJO0VBQ0ksVUFBQTtBQ1hSOztBRGFJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDWFI7O0FEYUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNYUjs7QURlQTtFQUNJLFVBQUE7QUNaSjs7QURjSTtFQUNJLGFBQUE7QUNaUjs7QURnQkk7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2RSOztBRGlCSTtFQUNJLGFBQUE7QUNmUjs7QURrQkk7RUFDSSxVQUFBO0FDaEJSOztBRGtCSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ2hCUjs7QURrQkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2hCUjs7QURvQkE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFLQSxVQUFBO0FDckJKOztBRHNCSTtFQUNJLGFBQUE7QUNwQlI7O0FEeUJJO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUN2QlI7O0FEMEJJO0VBQ0ksYUFBQTtBQ3hCUjs7QUQwQkk7RUFDSSxVQUFBO0FDeEJSOztBRDBCSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ3hCUjs7QUQwQkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ3hCUjs7QUQ0QkE7RUFDSSxZQUFBO0FDekJKOztBRDBCSTtFQUVJLFdBQUE7RUFDQSxVQUFBO0VBUUEsbUJBQUE7RUFDSSwwQkFBQTtBQ2hDWjs7QUR3QlE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDdEJaOztBRHdCUTtFQUNJLFlBQUE7QUN0Qlo7O0FEMkJRO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvREFBQTtFQUNBLGdCQUFBO0FDekJaOztBRDJCUTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtBQ3pCWjs7QUQyQlE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDekJaOztBRDJCUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ3pCWjs7QUQyQlE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDekJaOztBRDRCWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQzFCaEI7O0FENkJRO0VBQ0ksYUFBQTtBQzNCWjs7QURxQ0k7RUFFSSw0QkFBQTtBQ3BDUjs7QURzQ0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ3BDUjs7QUR3Q0k7RUFDSSxpQkFBQTtBQ3JDUjs7QUR1Q0k7RUFDSSxhQUFBO0FDckNSOztBRHVDSTtFQUNJLGdCQUFBO0FDckNSOztBRHVDSTtFQUNJLFVBQUE7QUNyQ1I7O0FEdUNJO0VBQ0ksVUFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ3JDUjs7QURzQ1E7RUFDSSwyQkFBQTtBQ3BDWjs7QUR1Q1k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUNyQ2hCOztBRHdDUTtFQUNJLCtFQUFBO0VBQ0EsK0NBQUE7QUN0Q1o7O0FEdUNZO0VBQ0ksZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0FDckNoQjs7QUR5Q0k7RUFDSSxVQUFBO0VBQ0EsK0VBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ3ZDUjs7QUR3Q1E7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7QUN0Q1o7O0FEdUNZO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNyQ2hCOztBRHdDUTtFQUNJLGVBQUE7RUFDQSxVQUFBO0FDdENaOztBRHVDWTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDckNoQjs7QURzQ2dCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ3BDcEI7O0FEc0NnQjtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQ3BDcEI7O0FEd0NRO0VBQ0ksVUFBQTtBQ3RDWjs7QUR1Q1k7RUFDSSxvRUFBQTtFQUNBLCtFQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLCtFQUFBO0VBQ0EsZ0JBQUE7QUNyQ2hCOztBRHdDUTtFQUNJLGtCQUFBO0FDdENaOztBRHlDSTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUN2Q1I7O0FEMkNJO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0FDeENSOztBRDBDSTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtBQ3hDUiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VuZCwgI2YyZjJmMik7XG59XG5pb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbn1cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuLmNhdGVnb3JpZXMge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgbWFyZ2luOiA0cHggOHB4O1xuICAgIH1cbiAgICBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG59XG5pb24tY29udGVudCB7XG4gICAgLy8tLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4vKioqKlxuQ29weSByZXNwZWN0aXZlIGJsb2NrIGNzcyBibG9ja1xuKioqL1xuXG4vLyBDYXRnb3JpZXMgR3JpZCAxXG4uY2F0ZWdvcmllcy1jYXJkMSB7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBpb24tY2FyZCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAvL2Rpc3BsYXk6IG5vbmU7IC8vQ29tbWVudCBvciBVbmNvbW1lbnQgdGhpcyB0byBzaG93IG9yIGhpZGUgY2F0ZWdvcnkgbmFtZVxuICAgIH1cbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLy9Db21tZW50IHRoaXMgZm9yIHRleHQgYWxpZ24gc3RhcnRcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbn1cbi8vIENhdGdvcmllcyBHcmlkIDJcbi5jYXRlZ29yaWVzLWNhcmQyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaW9uLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIC8vYm9yZGVyLXJpZ2h0OiAwLjU1cHggc29saWQgI2Y3ZjdmNztcbiAgICAgICAgLy9ib3JkZXItYm90dG9tOiAwLjU1cHggc29saWQgI2Y3ZjdmNztcbiAgICB9XG4gICAgaW9uLWNhcmQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIC8vZGlzcGxheTogbm9uZTsgLy9Db21tZW50IG9yIFVuY29tbWVudCB0aGlzIHRvIHNob3cgb3IgaGlkZSBjYXRlZ29yeSBuYW1lXG4gICAgfVxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICBpb24tY2FyZC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAvL0NvbW1lbnQgdGhpcyBmb3IgdGV4dCBhbGlnbiBzdGFydFxuICAgIH1cbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxufVxuLy8gQ2F0Z29yaWVzIEdyaWQgM1xuLmNhdGVnb3JpZXMtY2FyZDMge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgLy9ib3JkZXItcmlnaHQ6IDAuNTVweCBzb2xpZCAjZjdmN2Y3O1xuICAgICAgICAvL2JvcmRlci1ib3R0b206IDAuNTVweCBzb2xpZCAjZjdmN2Y3O1xuICAgIH1cbiAgICBpb24tY2FyZCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgLy9kaXNwbGF5OiBub25lOyAvL0NvbW1lbnQgb3IgVW5jb21tZW50IHRoaXMgdG8gc2hvdyBvciBoaWRlIGNhdGVnb3J5IG5hbWVcbiAgICB9XG4gICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8vQ29tbWVudCB0aGlzIGZvciB0ZXh0IGFsaWduIHN0YXJ0XG4gICAgfVxuICAgIGltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbn1cbi8vIENhdGdvcmllcyBHcmlkIDRcbi5jYXRlZ29yaWVzLWNhcmQ0IHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAvL2JvcmRlci10b3A6IDAuNTVweCBzb2xpZCAjZjdmN2Y3O1xuICAgIC8vYm9yZGVyLWxlZnQ6IDAuNTVweCBzb2xpZCAjZjdmN2Y3O1xuICAgIC8vYm9yZGVyLWJvdHRvbTogMC41NXB4IHNvbGlkICNmN2Y3Zjc7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAvL2JvcmRlci1yaWdodDogMC41NXB4IHNvbGlkICNmN2Y3Zjc7XG4gICAgICAgIC8vYm9yZGVyLWJvdHRvbTogMC41NXB4IHNvbGlkICNmN2Y3Zjc7XG4gICAgICAgIC8vY29sb3I6ICMwMDA7XG4gICAgfVxuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAxMHB4OyAvL2Rpc3BsYXk6IG5vbmU7IC8vQ29tbWVudCBvciBVbmNvbW1lbnQgdGhpcyB0byBzaG93IG9yIGhpZGUgY2F0ZWdvcnkgbmFtZVxuICAgIH1cbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLy9Db21tZW50IHRoaXMgZm9yIHRleHQgYWxpZ24gc3RhcnRcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxufVxuLy8gRHJvcCBkb3duIHR5cGUgY2F0ZWdvcnkgYmxvY2tcbi5jYXRlZ29yeS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICAuY2F0ZWdvcmllcy1jYXJkNSB7XG4gICAgICAgIC8vYm94LXNoYWRvdzogMCAxcHggMXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWNvbDogbGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXI6IDAuNTVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQsICNmNGY1ZjgpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgfVxuICAgICAgICBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDsgLy9kaXNwbGF5OiBub25lOyAvL0NvbW1lbnQgb3IgVW5jb21tZW50IHRoaXMgdG8gc2hvdyBvciBoaWRlIGNhdGVnb3J5IG5hbWVcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAvL0NvbW1lbnQgdGhpcyBmb3IgdGV4dCBhbGlnbiBzdGFydFxuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuc3ViLWNhdGVnb3J5LWl0ZW1zIHtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaXRlbS1uYXRpdmUge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIC8vbWFyZ2luLWJvdHRvbTogMXB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgICAgLy9tYXJnaW4tYm90dG9tOiAxcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyBDYXRnb3JpZXMgTGlzdCAyXG5pb24taXRlbSB7XG4gICAgLml0ZW0taW5uZXIge1xuICAgICAgICAvL2JvcmRlci1jb2xvcjogI2VjZWNlYztcbiAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAuNTVweDtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDYwcHg7XG4gICAgfVxufVxuLmNhdGVnb3JpZXMtc3BsaXQge1xuICAgIGlvbi1saXN0IHtcbiAgICAgICAgYmFja2dyb3VuZDogdW5zZXQ7XG4gICAgfVxuICAgIC5saXN0Pi5pdGVtLWJsb2NrOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICB9XG4gICAgLmxpc3Q+Lml0ZW0tYmxvY2s6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxuICAgIC5ncmlkIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgLmNvbC1sZWZ0IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNTBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA0NCU7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgaGVpZ2h0OiA5NXZoO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICAgICAgLmJ1dHRvbi1pbm5lciB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IC8vdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnRhYi1sZWZ0LWl0ZW0ge1xuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM4ODg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnNlbGVjdGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI2ZmZikpO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmssICMwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5jb2wtcmlnaHQge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpKTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNTBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIGhlaWdodDogOTV2aDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgICAgIC5jYXQtaW1hZ2Uge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5yb3cudW5saW1pdGVkLWl0ZW1zIHtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAuY29sIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzElO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDhweDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMxJTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMxJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMCAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLml0ZW0ge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpKTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCx2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKSk7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxufVxuLmlvcyB7XG4gICAgLmNvbC1sZWZ0IHtcbiAgICAgICAgaGVpZ2h0OiA5NXZoO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICB9XG4gICAgLmNvbC1yaWdodCB7XG4gICAgICAgIGhlaWdodDogOTV2aDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgfVxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VuZCwgI2YyZjJmMik7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG4uY2F0ZWdvcmllcyBpb24tY2FyZCB7XG4gIG1hcmdpbjogNHB4IDhweDtcbn1cbi5jYXRlZ29yaWVzIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY2F0ZWdvcmllcyBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLyoqKipcbkNvcHkgcmVzcGVjdGl2ZSBibG9jayBjc3MgYmxvY2tcbioqKi9cbi5jYXRlZ29yaWVzLWNhcmQxIGlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uY2F0ZWdvcmllcy1jYXJkMSBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmNhdGVnb3JpZXMtY2FyZDEgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uY2F0ZWdvcmllcy1jYXJkMSBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhdGVnb3JpZXMtY2FyZDEgaW1nIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2F0ZWdvcmllcy1jYXJkMiB7XG4gIHBhZGRpbmc6IDA7XG59XG4uY2F0ZWdvcmllcy1jYXJkMiBpb24tY29sIHtcbiAgcGFkZGluZzogMDtcbn1cbi5jYXRlZ29yaWVzLWNhcmQyIGlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmNhdGVnb3JpZXMtY2FyZDIgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jYXRlZ29yaWVzLWNhcmQyIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xufVxuLmNhdGVnb3JpZXMtY2FyZDIgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXRlZ29yaWVzLWNhcmQyIGltZyB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNhdGVnb3JpZXMtY2FyZDMge1xuICBwYWRkaW5nOiAwO1xufVxuLmNhdGVnb3JpZXMtY2FyZDMgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uY2F0ZWdvcmllcy1jYXJkMyBpb24tY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5jYXRlZ29yaWVzLWNhcmQzIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY2F0ZWdvcmllcy1jYXJkMyBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbn1cbi5jYXRlZ29yaWVzLWNhcmQzIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2F0ZWdvcmllcy1jYXJkMyBpbWcge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNhdGVnb3JpZXMtY2FyZDQge1xuICBtYXJnaW46IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG4uY2F0ZWdvcmllcy1jYXJkNCBpb24tY29sIHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5jYXRlZ29yaWVzLWNhcmQ0IGlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmNhdGVnb3JpZXMtY2FyZDQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jYXRlZ29yaWVzLWNhcmQ0IGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xufVxuLmNhdGVnb3JpZXMtY2FyZDQgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXRlZ29yaWVzLWNhcmQ0IGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2F0ZWdvcnktY29udGFpbmVyIHtcbiAgcGFkZGluZzogOHB4O1xufVxuLmNhdGVnb3J5LWNvbnRhaW5lciAuY2F0ZWdvcmllcy1jYXJkNSB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwO1xuICBpb24tY29sOiBsYXN0LWNoaWxkO1xuICBpb24tY29sLWJvcmRlci1ib3R0b206IDBweDtcbn1cbi5jYXRlZ29yeS1jb250YWluZXIgLmNhdGVnb3JpZXMtY2FyZDUgaW9uLXRodW1ibmFpbCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY2F0ZWdvcnktY29udGFpbmVyIC5jYXRlZ29yaWVzLWNhcmQ1IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uY2F0ZWdvcnktY29udGFpbmVyIC5jYXRlZ29yaWVzLWNhcmQ1IGlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDAuNTVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQsICNmNGY1ZjgpO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmNhdGVnb3J5LWNvbnRhaW5lciAuY2F0ZWdvcmllcy1jYXJkNSBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5jYXRlZ29yeS1jb250YWluZXIgLmNhdGVnb3JpZXMtY2FyZDUgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2F0ZWdvcnktY29udGFpbmVyIC5jYXRlZ29yaWVzLWNhcmQ1IGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2F0ZWdvcnktY29udGFpbmVyIC5jYXRlZ29yaWVzLWNhcmQ1IGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYXRlZ29yeS1jb250YWluZXIgLmNhdGVnb3JpZXMtY2FyZDUgLnN1Yi1jYXRlZ29yeS1pdGVtcyBpbWcge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uY2F0ZWdvcnktY29udGFpbmVyIC5jYXRlZ29yaWVzLWNhcmQ1IC5pdGVtLW5hdGl2ZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24taXRlbSAuaXRlbS1pbm5lciB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwLjU1cHg7XG59XG5pb24taXRlbSBpbWcge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogNjBweDtcbn1cblxuLmNhdGVnb3JpZXMtc3BsaXQgaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB1bnNldDtcbn1cbi5jYXRlZ29yaWVzLXNwbGl0IC5saXN0ID4gLml0ZW0tYmxvY2s6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wOiAwO1xufVxuLmNhdGVnb3JpZXMtc3BsaXQgLmxpc3QgPiAuaXRlbS1ibG9jazpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cbi5jYXRlZ29yaWVzLXNwbGl0IC5ncmlkIHtcbiAgcGFkZGluZzogMDtcbn1cbi5jYXRlZ29yaWVzLXNwbGl0IC5jb2wtbGVmdCB7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIG1hcmdpbi1yaWdodDogLTUwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIG1heC13aWR0aDogNDQlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGhlaWdodDogOTV2aDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG4uY2F0ZWdvcmllcy1zcGxpdCAuY29sLWxlZnQgLmJ1dHRvbi1pbm5lciB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5jYXRlZ29yaWVzLXNwbGl0IC5jb2wtbGVmdCAudGFiLWxlZnQtaXRlbSBoMiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMTJweCA1cHg7XG4gIG1hcmdpbjogMCA1cHg7XG4gIG1heC13aWR0aDogMTEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogIzg4ODtcbn1cbi5jYXRlZ29yaWVzLXNwbGl0IC5jb2wtbGVmdCAuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5jYXRlZ29yaWVzLXNwbGl0IC5jb2wtbGVmdCAuc2VsZWN0ZWQgaDIge1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLCAjMDAwKTtcbn1cbi5jYXRlZ29yaWVzLXNwbGl0IC5jb2wtcmlnaHQge1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xuICBtYXJnaW4tcmlnaHQ6IC01MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiA5NXZoO1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbi5jYXRlZ29yaWVzLXNwbGl0IC5jb2wtcmlnaHQgLmNhdC1pbWFnZSB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhdGVnb3JpZXMtc3BsaXQgLmNvbC1yaWdodCAuY2F0LWltYWdlIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLmNhdGVnb3JpZXMtc3BsaXQgLmNvbC1yaWdodCAucm93LnVubGltaXRlZC1pdGVtcyB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMDtcbn1cbi5jYXRlZ29yaWVzLXNwbGl0IC5jb2wtcmlnaHQgLnJvdy51bmxpbWl0ZWQtaXRlbXMgLmNvbCB7XG4gIHdpZHRoOiAzMSU7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDhweDtcbiAgbWF4LXdpZHRoOiAzMSU7XG4gIG1pbi13aWR0aDogMzElO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXRlZ29yaWVzLXNwbGl0IC5jb2wtcmlnaHQgLnJvdy51bmxpbWl0ZWQtaXRlbXMgLmNvbCBpbWcge1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmNhdGVnb3JpZXMtc3BsaXQgLmNvbC1yaWdodCAucm93LnVubGltaXRlZC1pdGVtcyAuY29sIC5sYWJlbCB7XG4gIG1hcmdpbjogOHB4IDAgMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiA5cHg7XG59XG4uY2F0ZWdvcmllcy1zcGxpdCAuY29sLXJpZ2h0IC5pdGVtIHtcbiAgcGFkZGluZzogMDtcbn1cbi5jYXRlZ29yaWVzLXNwbGl0IC5jb2wtcmlnaHQgLml0ZW0gLmJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmNhdGVnb3JpZXMtc3BsaXQgLmNvbC1yaWdodCAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cbi5jYXRlZ29yaWVzLXNwbGl0IGlvbi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uaW9zIC5jb2wtbGVmdCB7XG4gIGhlaWdodDogOTV2aDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG4uaW9zIC5jb2wtcmlnaHQge1xuICBoZWlnaHQ6IDk1dmg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/categories/categories.page.ts": function srcAppCategoriesCategoriesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesPage", function () {
      return CategoriesPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../data */
    "./src/app/data.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../data/settings */
    "./src/app/data/settings.ts");

    var CategoriesPage = /*#__PURE__*/function () {
      function CategoriesPage(changeDetectorRef, api, data, loadingController, navCtrl, router, settings, route) {
        _classCallCheck(this, CategoriesPage);

        this.changeDetectorRef = changeDetectorRef;
        this.api = api;
        this.data = data;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.settings = settings;
        this.route = route;
        this.selectedCategory = {};
      }

      _createClass(CategoriesPage, [{
        key: "getProducts",
        value: function getProducts(id) {
          this.navCtrl.navigateForward('/tabs/categories/products/' + id);
        }
      }, {
        key: "subCategories",
        value: function subCategories(id) {
          return this.data.categories.filter(function (item) {
            return item.parent == id;
          });
        }
      }, {
        key: "showSubCategory",
        value: function showSubCategory(i) {
          var _this48 = this;

          var intial = this.data.mainCategories[i].show;
          this.data.mainCategories[i].show = !intial;

          if (this.data.categories.filter(function (item) {
            return item.parent == _this48.data.mainCategories[i].id;
          }).length == 0) {
            this.data.mainCategories.forEach(function (item) {
              return item.show = false;
            });
            this.getProducts(this.data.mainCategories[i].id);
          }
        }
      }, {
        key: "selectcategory",
        value: function selectcategory(item) {
          this.selectedCategory = item;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.selectedCategory = this.data.mainCategories[0];
          this.changeDetectorRef.detectChanges();
        }
      }]);

      return CategoriesPage;
    }();

    CategoriesPage.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_5__["Data"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    CategoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categories',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categories.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categories.page.scss */
      "./src/app/categories/categories.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], CategoriesPage);
    /***/
  },

  /***/
  "./src/app/checkout/address/address.page.scss": function srcAppCheckoutAddressAddressPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2FkZHJlc3MvYWRkcmVzcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/checkout/address/address.page.ts": function srcAppCheckoutAddressAddressPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutAddressPage", function () {
      return CheckoutAddressPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../data/checkout */
    "./src/app/data/checkout.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");

    var CheckoutAddressPage = /*#__PURE__*/function () {
      function CheckoutAddressPage(api, checkoutData, router, navCtrl, settings, route) {
        _classCallCheck(this, CheckoutAddressPage);

        this.api = api;
        this.checkoutData = checkoutData;
        this.router = router;
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.route = route;
        this.loader = false;
      }

      _createClass(CheckoutAddressPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCheckoutForm(); //this.getCountries();
        }
      }, {
        key: "getCheckoutForm",
        value: function getCheckoutForm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
            var _this49 = this;

            return regeneratorRuntime.wrap(function _callee43$(_context43) {
              while (1) {
                switch (_context43.prev = _context43.next) {
                  case 0:
                    this.loader = true;
                    _context43.next = 3;
                    return this.api.postItem('get_checkout_form').then(function (res) {
                      _this49.checkoutData.form = res;
                      _this49.checkoutData.form.sameForShipping = true;

                      if (_this49.checkoutData.form.countries.length == 1) {
                        _this49.checkoutData.form.billing_country = _this49.checkoutData.form.countries[0].value;
                        _this49.checkoutData.form.shipping_country = _this49.checkoutData.form.countries[0].value;
                      }

                      _this49.checkoutData.billingStates = _this49.checkoutData.form.countries.find(function (item) {
                        return item.value == _this49.checkoutData.form.billing_country;
                      });
                      _this49.checkoutData.shippingStates = _this49.checkoutData.form.countries.find(function (item) {
                        return item.value == _this49.checkoutData.form.shipping_country;
                      });
                      _this49.loader = false;
                    }, function (err) {
                      console.log(err);
                      _this49.loader = false;
                    });

                  case 3:
                  case "end":
                    return _context43.stop();
                }
              }
            }, _callee43, this);
          }));
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          var _this50 = this;

          this.api.getItem('settings/general/woocommerce_specific_allowed_countries').then(function (res) {
            _this50.countries = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getBillingRegion",
        value: function getBillingRegion() {
          var _this51 = this;

          this.checkoutData.billingStates = this.checkoutData.form.countries.find(function (item) {
            return item.value == _this51.checkoutData.form.billing_country;
          });
          this.checkoutData.form.billing_state = '';
        }
      }, {
        key: "getShippingRegion",
        value: function getShippingRegion() {
          var _this52 = this;

          this.checkoutData.shippingStates = this.checkoutData.form.countries.find(function (item) {
            return item.value == _this52.checkoutData.form.shipping_country;
          });
          this.checkoutData.form.shipping_state = '';
        }
      }, {
        key: "updateOrderReview",
        value: function updateOrderReview() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee44() {
            var _this53 = this;

            return regeneratorRuntime.wrap(function _callee44$(_context44) {
              while (1) {
                switch (_context44.prev = _context44.next) {
                  case 0:
                    _context44.next = 2;
                    return this.api.postItem('update_order_review').then(function (res) {
                      _this53.checkoutData.orderReview = res;
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context44.stop();
                }
              }
            }, _callee44, this);
          }));
        }
      }, {
        key: "continueCheckout",
        value: function continueCheckout() {
          this.errorMessage = '';

          if (this.validateForm()) {
            if (!this.checkoutData.form.ship_to_different_address || this.checkoutData.form.ship_to_different_address == false) this.assgnShippingAddress();
            this.navCtrl.navigateForward('/tabs/cart/checkout');
          }
        }
      }, {
        key: "validateForm",
        value: function validateForm() {
          if (this.checkoutData.form.billing_first_name == '' || this.checkoutData.form.billing_first_name == undefined) {
            this.errorMessage = 'Billing first name is a required field';
            return false;
          }

          if (this.checkoutData.form.billing_last_name == '' || this.checkoutData.form.billing_last_name == undefined) {
            this.errorMessage = 'Billing last name is a required field';
            return false;
          }

          if (this.checkoutData.form.billing_phone == '' || this.checkoutData.form.billing_phone == undefined) {
            this.errorMessage = 'Billing phone is a required field';
            return false;
          }

          if (this.checkoutData.form.billing_address_1 == '' || this.checkoutData.form.billing_address_1 == undefined) {
            this.errorMessage = 'Billing Street address is a required field';
            return false;
          }

          if (this.checkoutData.form.billing_city == '' || this.checkoutData.form.billing_city == undefined) {
            this.errorMessage = 'Billing city is a required field';
            return false;
          }

          if (this.checkoutData.form.billing_postcode == '' || this.checkoutData.form.billing_postcode == undefined) {
            this.errorMessage = 'Billing post code is a required field';
            return false;
          }

          if (this.checkoutData.form.billing_country == '' || this.checkoutData.form.billing_country == undefined) {
            this.errorMessage = 'Billing country is a required field';
            return false;
          }

          if (this.checkoutData.form.billing_state == '' || this.checkoutData.form.billing_state == undefined) {
            this.errorMessage = 'Billing state is a required field';
            return false;
          }

          if (this.checkoutData.form.ship_to_different_address) {
            if (this.checkoutData.form.shipping_first_name == '' || this.checkoutData.form.shipping_first_name == undefined) {
              this.errorMessage = 'Shipping first name is a required field';
              return false;
            }

            if (this.checkoutData.form.shipping_last_name == '' || this.checkoutData.form.shipping_last_name == undefined) {
              this.errorMessage = 'Shipping last name is a required field';
              return false;
            }

            if (this.checkoutData.form.shipping_address_1 == '' || this.checkoutData.form.shipping_address_1 == undefined) {
              this.errorMessage = 'Shipping Street address is a required field';
              return false;
            }

            if (this.checkoutData.form.shipping_city == '' || this.checkoutData.form.shipping_city == undefined) {
              this.errorMessage = 'Shipping city is a required field';
              return false;
            }

            if (this.checkoutData.form.shipping_postcode == '' || this.checkoutData.form.shipping_postcode == undefined) {
              this.errorMessage = 'Shipping post code is a required field';
              return false;
            }

            if (this.checkoutData.form.shipping_country == '' || this.checkoutData.form.shipping_country == undefined) {
              this.errorMessage = 'Shipping country is a required field';
              return false;
            }

            if (this.checkoutData.form.shipping_state == '' || this.checkoutData.form.shipping_state == undefined) {
              this.errorMessage = 'Shipping state is a required field';
              return false;
            }

            return true;
          } else return true;
        }
      }, {
        key: "assgnShippingAddress",
        value: function assgnShippingAddress() {
          this.checkoutData.form.shipping_first_name = this.checkoutData.form.billing_first_name;
          this.checkoutData.form.shipping_last_name = this.checkoutData.form.billing_last_name;
          this.checkoutData.form.shipping_company = this.checkoutData.form.billing_company;
          this.checkoutData.form.shipping_address_1 = this.checkoutData.form.billing_address_1;
          this.checkoutData.form.shipping_address_2 = this.checkoutData.form.billing_address_2;
          this.checkoutData.form.shipping_city = this.checkoutData.form.billing_city;
          this.checkoutData.form.shipping_postcode = this.checkoutData.form.billing_postcode;
          this.checkoutData.form.shipping_country = this.checkoutData.form.billing_country;
          this.checkoutData.form.shipping_state = this.checkoutData.form.billing_state;
          return true;
        }
      }]);

      return CheckoutAddressPage;
    }();

    CheckoutAddressPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data_checkout__WEBPACK_IMPORTED_MODULE_5__["CheckoutData"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    CheckoutAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-address',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./address.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/address/address.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./address.page.scss */
      "./src/app/checkout/address/address.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_checkout__WEBPACK_IMPORTED_MODULE_5__["CheckoutData"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], CheckoutAddressPage);
    /***/
  },

  /***/
  "./src/app/checkout/checkout/checkout.page.scss": function srcAppCheckoutCheckoutCheckoutPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".payment-description {\n  --ion-background-color: var(--ion-color-step-50,#f2f2f2);\n  margin: 16px;\n  --border-radius: 5px;\n}\n\n.StripeElement {\n  padding: 8px 12px;\n  border-radius: 4px;\n  border: 1px solid transparent;\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  transition: box-shadow 150ms ease;\n}\n\n.StripeElement--focus {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n\n.StripeElement--invalid {\n  border-color: #fa755a;\n}\n\n.StripeElement--webkit-autofill {\n  background-color: #fefde5 !important;\n}\n\n.billing-header .toolbar-title-md {\n  padding-right: 75px;\n}\n\n.billing-header .toolbar-ios-header .toolbar-background-ios {\n  height: calc(44px + 20px);\n  min-height: calc(44px + 20px);\n  padding-top: 20px;\n}\n\n.StripeElement {\n  box-sizing: border-box;\n  height: 40px;\n  padding: 10px 12px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  transition: box-shadow 150ms ease;\n}\n\n.StripeElement--focus {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n\n.StripeElement--invalid {\n  border-color: #fa755a;\n}\n\n.StripeElement--webkit-autofill {\n  background-color: #fefde5 !important;\n}\n\n.stripe-payment {\n  margin: 10px 0 0 0;\n}\n\n.stripe-payment ion-list {\n  border-left: 1px solid #f2f2f2;\n  border-right: 1px solid #f2f2f2;\n}\n\n.card-error {\n  padding: 10px 10px 10px;\n  text-align: center;\n  color: var(--ion-color-danger, #eb445a);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQvRDpcXGx1eGUuLi4gZGVidWcgOSBPQ1Qvc3JjXFxhcHBcXGNoZWNrb3V0XFxjaGVja291dFxcY2hlY2tvdXQucGFnZS5zY3NzIiwic3JjL2FwcC9jaGVja291dC9jaGVja291dC9jaGVja291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3REFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0NKOztBRENBO0VBRUksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFFQSxpQ0FBQTtBQ0NKOztBRENBO0VBQ0ksK0JBQUE7QUNFSjs7QURBQTtFQUNJLHFCQUFBO0FDR0o7O0FEREE7RUFDSSxvQ0FBQTtBQ0lKOztBRERJO0VBQ0ksbUJBQUE7QUNJUjs7QURESTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQ0dKOztBRENBO0VBQ0Usc0JBQUE7RUFFQSxZQUFBO0VBRUEsa0JBQUE7RUFFQSw2QkFBQTtFQUNBLGtCQUFBO0VBR0EsK0JBQUE7RUFFQSxpQ0FBQTtBQ0hGOztBRE1BO0VBQ0UsK0JBQUE7QUNIRjs7QURNQTtFQUNFLHFCQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtBQ0hGOztBRE1BO0VBQ0ksa0JBQUE7QUNISjs7QURJSTtFQUNJLDhCQUFBO0VBQ0EsK0JBQUE7QUNGUjs7QURNQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBheW1lbnQtZGVzY3JpcHRpb24ge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTUwLCNmMmYyZjIpO1xuICAgIG1hcmdpbjogMTZweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5TdHJpcGVFbGVtZW50IHtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCAjZTZlYmYxO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNTBtcyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMTUwbXMgZWFzZTtcbn1cbi5TdHJpcGVFbGVtZW50LS1mb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2NmZDdkZjtcbn1cbi5TdHJpcGVFbGVtZW50LS1pbnZhbGlkIHtcbiAgICBib3JkZXItY29sb3I6ICNmYTc1NWE7XG59XG4uU3RyaXBlRWxlbWVudC0td2Via2l0LWF1dG9maWxsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZGU1ICFpbXBvcnRhbnQ7XG59XG4uYmlsbGluZy1oZWFkZXIge1xuICAgIC50b29sYmFyLXRpdGxlLW1kIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNzVweDtcbiAgICB9XG5cbiAgICAudG9vbGJhci1pb3MtaGVhZGVyIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgICBoZWlnaHQ6IGNhbGMoNDRweCArIDIwcHgpO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoNDRweCArIDIwcHgpO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIH1cbn1cblxuLlN0cmlwZUVsZW1lbnQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIGhlaWdodDogNDBweDtcblxuICBwYWRkaW5nOiAxMHB4IDEycHg7XG5cbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCAjZTZlYmYxO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJveC1zaGFkb3cgMTUwbXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNTBtcyBlYXNlO1xufVxuXG4uU3RyaXBlRWxlbWVudC0tZm9jdXMge1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCAjY2ZkN2RmO1xufVxuXG4uU3RyaXBlRWxlbWVudC0taW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogI2ZhNzU1YTtcbn1cblxuLlN0cmlwZUVsZW1lbnQtLXdlYmtpdC1hdXRvZmlsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZkZTUgIWltcG9ydGFudDtcbn1cblxuLnN0cmlwZS1wYXltZW50IHtcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmMmYyZjI7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMmYyZjI7XG4gICAgfVxufVxuXG4uY2FyZC1lcnJvciB7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZWI0NDVhKTtcbn1cbiIsIi5wYXltZW50LWRlc2NyaXB0aW9uIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAsI2YyZjJmMik7XG4gIG1hcmdpbjogMTZweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5TdHJpcGVFbGVtZW50IHtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNlNmViZjE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNTBtcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDE1MG1zIGVhc2U7XG59XG5cbi5TdHJpcGVFbGVtZW50LS1mb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNjZmQ3ZGY7XG59XG5cbi5TdHJpcGVFbGVtZW50LS1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmE3NTVhO1xufVxuXG4uU3RyaXBlRWxlbWVudC0td2Via2l0LWF1dG9maWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmRlNSAhaW1wb3J0YW50O1xufVxuXG4uYmlsbGluZy1oZWFkZXIgLnRvb2xiYXItdGl0bGUtbWQge1xuICBwYWRkaW5nLXJpZ2h0OiA3NXB4O1xufVxuLmJpbGxpbmctaGVhZGVyIC50b29sYmFyLWlvcy1oZWFkZXIgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBoZWlnaHQ6IGNhbGMoNDRweCArIDIwcHgpO1xuICBtaW4taGVpZ2h0OiBjYWxjKDQ0cHggKyAyMHB4KTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5TdHJpcGVFbGVtZW50IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNlNmViZjE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNTBtcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDE1MG1zIGVhc2U7XG59XG5cbi5TdHJpcGVFbGVtZW50LS1mb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNjZmQ3ZGY7XG59XG5cbi5TdHJpcGVFbGVtZW50LS1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmE3NTVhO1xufVxuXG4uU3RyaXBlRWxlbWVudC0td2Via2l0LWF1dG9maWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmRlNSAhaW1wb3J0YW50O1xufVxuXG4uc3RyaXBlLXBheW1lbnQge1xuICBtYXJnaW46IDEwcHggMCAwIDA7XG59XG4uc3RyaXBlLXBheW1lbnQgaW9uLWxpc3Qge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmMmYyZjI7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMmYyZjI7XG59XG5cbi5jYXJkLWVycm9yIHtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNlYjQ0NWEpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/checkout/checkout/checkout.page.ts": function srcAppCheckoutCheckoutCheckoutPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutPage", function () {
      return CheckoutPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../data/checkout */
    "./src/app/data/checkout.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");

    var CheckoutPage = /*#__PURE__*/function () {
      function CheckoutPage(oneSignal, toastController, platform, api, checkoutData, settings, router, iab, loadingController, navCtrl, route
      /*, private braintree: Braintree*/
      ) {
        _classCallCheck(this, CheckoutPage);

        this.oneSignal = oneSignal;
        this.toastController = toastController;
        this.platform = platform;
        this.api = api;
        this.checkoutData = checkoutData;
        this.settings = settings;
        this.router = router;
        this.iab = iab;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.stripeStatus = {};
        this.buttonSubmit = false;
        this.results = {};
        this.disableButton = false;
        this.cardResponse = {};
        this.stripeForm = {};
      }

      _createClass(CheckoutPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateOrder();
          this.checkoutData.form.billing_numero_rue = '543254';
          this.checkoutData.form.billing_commune = '23543254';
          this.checkoutData.form.shipping_numero_rue = '3254';
          this.checkoutData.form.shipping_commune = '23543254';
        }
      }, {
        key: "updateOrder",
        value: function updateOrder() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee45() {
            var _this54 = this;

            return regeneratorRuntime.wrap(function _callee45$(_context45) {
              while (1) {
                switch (_context45.prev = _context45.next) {
                  case 0:
                    this.checkoutData.form.security = this.checkoutData.form.nonce.update_order_review_nonce;
                    this.checkoutData.form['woocommerce-process-checkout-nonce'] = this.checkoutData.form._wpnonce;
                    this.checkoutData.form['wc-ajax'] = 'update_order_review';
                    this.setOldWooCommerceVersionData();
                    _context45.next = 6;
                    return this.api.updateOrderReview('update_order_review', this.checkoutData.form).then(function (res) {
                      _this54.orderReview = res;

                      if (_this54.orderReview.payment && _this54.orderReview.payment.stripe) {
                        _this54.stripe = Stripe(_this54.orderReview.payment.stripe.publishable_key);
                      }
                    }, function (err) {
                      console.log(err);
                    });

                  case 6:
                  case "end":
                    return _context45.stop();
                }
              }
            }, _callee45, this);
          }));
        }
      }, {
        key: "updateOrderReview",
        value: function updateOrderReview() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee46() {
            var _this55 = this;

            return regeneratorRuntime.wrap(function _callee46$(_context46) {
              while (1) {
                switch (_context46.prev = _context46.next) {
                  case 0:
                    this.checkoutData.form.shipping_method = [];
                    this.orderReview.shipping.forEach(function (item, index) {
                      _this55.checkoutData.form['shipping_method[' + index + ']'] = item.chosen_method;
                    });
                    this.checkoutData.form.security = this.checkoutData.form.nonce.update_order_review_nonce;
                    this.checkoutData.form['woocommerce-process-checkout-nonce'] = this.checkoutData.form._wpnonce;
                    this.checkoutData.form['wc-ajax'] = 'update_order_review';
                    this.setOldWooCommerceVersionData();
                    _context46.next = 8;
                    return this.api.updateOrderReview('update_order_review', this.checkoutData.form).then(function (res) {
                      _this55.handleData(res);
                    }, function (err) {
                      console.log(err);
                    });

                  case 8:
                  case "end":
                    return _context46.stop();
                }
              }
            }, _callee46, this);
          }));
        }
      }, {
        key: "setOldWooCommerceVersionData",
        value: function setOldWooCommerceVersionData() {
          this.checkoutData.form.city = this.checkoutData.form.billing_city;
          this.checkoutData.form.postcode = this.checkoutData.form.billing_postcode;
          this.checkoutData.form.country = this.checkoutData.form.billing_country;
          this.checkoutData.form.address = this.checkoutData.form.billing_address_1;
          this.checkoutData.form.address_2 = this.checkoutData.form.billing_address_2;
          this.checkoutData.form.s_city = this.checkoutData.form.shipping_city;
          this.checkoutData.form.s_postcode = this.checkoutData.form.shipping_postcode;
          this.checkoutData.form.s_country = this.checkoutData.form.shipping_country;
          this.checkoutData.form.s_address = this.checkoutData.form.shipping_address_1;
          this.checkoutData.form.s_address_2 = this.checkoutData.form.shipping_address_2;
          this.checkoutData.form.has_full_address = true;
        }
      }, {
        key: "handleData",
        value: function handleData(results) {
          console.log(results); //
        }
      }, {
        key: "placeOrder",
        value: function placeOrder() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee47() {
            var _this56 = this;

            return regeneratorRuntime.wrap(function _callee47$(_context47) {
              while (1) {
                switch (_context47.prev = _context47.next) {
                  case 0:
                    this.disableButton = true;
                    this.errorMessage = undefined;
                    /** Comment this if not using OneSignal Push notification ***/

                    if (!(this.platform.is('cordova') && this.settings.settings.onesignal_app_id && this.settings.settings.google_project_id)) {
                      _context47.next = 5;
                      break;
                    }

                    _context47.next = 5;
                    return this.oneSignal.getIds().then(function (data) {
                      _this56.checkoutData.form.onesignal_user_id = data.userId;
                    });

                  case 5:
                    if (this.checkoutData.form.payment_method == 'authnet') {
                      this.checkoutData.form['authnet-card-expiry'] = this.checkoutData.form.expiryMonth + ' / ' + this.checkoutData.form.expiryYear;
                    }

                    if (!(this.checkoutData.form.payment_method == 'stripe')) {
                      _context47.next = 12;
                      break;
                    }

                    this.setStripeForm();
                    _context47.next = 10;
                    return this.api.getExternalData('https://api.stripe.com/v1/tokens', this.stripeForm).then(function (res) {
                      _this56.handleStipeToken(res);
                    }, function (err) {
                      if (err.error.error.message) _this56.errorMessage = err.error.error.message;
                      _this56.disableButton = false;
                    });

                  case 10:
                    _context47.next = 14;
                    break;

                  case 12:
                    _context47.next = 14;
                    return this.api.ajaxCall('/checkout?wc-ajax=checkout', this.checkoutData.form).then(function (res) {
                      _this56.results = res;

                      _this56.handleOrder();
                    }, function (err) {
                      _this56.disableButton = false;
                      console.log(err);
                    });

                  case 14:
                  case "end":
                    return _context47.stop();
                }
              }
            }, _callee47, this);
          }));
        }
      }, {
        key: "handleOrder",
        value: function handleOrder() {
          if (this.results.result == 'success') {
            if (this.checkoutData.form.payment_method == 'wallet' || this.checkoutData.form.payment_method == 'paypalpro' || this.checkoutData.form.payment_method == 'stripe' || this.checkoutData.form.payment_method == 'bacs' || this.checkoutData.form.payment_method == 'cheque' || this.checkoutData.form.payment_method == 'cod' || this.checkoutData.form.payment_method == 'authnet') {
              this.orderSummary(this.results.redirect);
            } else if (this.checkoutData.form.payment_method == 'payuindia') {
              this.handlePayUPayment();
            } else if (this.checkoutData.form.payment_method == 'pumcp') {
              this.handlepumcp();
            } else if (this.checkoutData.form.payment_method == 'paytm') {
              this.handlePaytmPayment();
            } else if (this.checkoutData.form.payment_method == 'paytm-qr') {
              this.handlePaytmQRPayment();
            } else if (this.checkoutData.form.payment_method == 'razorpay') {
              this.handleRazorPayment();
            } else if (this.checkoutData.form.payment_method == 'peach-payments') {
              this.handleEFTSECURE();
            } else this.handlePayment();
          } else if (this.results.result == 'failure') {
            this.disableButton = false;
            this.errorMessage = this.results.messages;
          }
        }
      }, {
        key: "handleEFTSECURE",
        value: function handleEFTSECURE() {
          var _this57 = this;

          var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
          var browser = this.iab.create(this.results.redirect, '_blank', options);
          browser.show();
          browser.on('loadstart').subscribe(function (data) {
            if (data.url.indexOf('/order-received/') != -1 && data.url.indexOf('key=wc_order_') != -1) {
              _this57.orderSummary(data.url);

              browser.hide();
            } else if (data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled=1') != -1 || data.url.indexOf('cancelled') != -1) {
              browser.close();
              _this57.disableButton = false;
            }
          });
          browser.on('exit').subscribe(function (data) {
            _this57.disableButton = false;
          });
        }
      }, {
        key: "handlepumcp",
        value: function handlepumcp() {
          var _this58 = this;

          var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
          var browser = this.iab.create(this.results.redirect, '_blank', options);
          var str = this.results.redirect;
          var pos1 = str.lastIndexOf("/order-pay/");
          var pos2 = str.lastIndexOf("/?key=wc_order");
          var pos3 = pos2 - (pos1 + 11);
          this.orderId = str.substr(pos1 + 11, pos3);
          var browserActive = false;
          browser.on('loadstart').subscribe(function (data) {
            if (data.url.indexOf('payu/checkout') != -1 && !browserActive) {
              browserActive = true;
              browser.show();
            } else if (data.url.indexOf('payment/postBackParam') != -1) {
              if (_this58.orderId) _this58.navCtrl.navigateRoot('/order-summary/' + _this58.orderId);
              browser.hide();
            } else if (data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled=1') != -1 || data.url.indexOf('cancelled') != -1) {
              browser.close();
              _this58.disableButton = false;
            }
          });
          browser.on('exit').subscribe(function (data) {
            _this58.disableButton = false;
          });
        }
      }, {
        key: "orderSummary",
        value: function orderSummary(address) {
          var str = address;
          var order_id;

          if (str.indexOf('/order-received/') != -1) {
            var pos1 = str.lastIndexOf("-received/");
            var pos2 = str.lastIndexOf("/?key=wc_order");
            var pos3 = pos2 - (pos1 + 10);
            order_id = str.substr(pos1 + 10, pos3);
          } else if (str.indexOf('order-received=') != -1) {
            var pos1 = str.lastIndexOf("order-received=");
            var pos2 = str.lastIndexOf("&key=wc_order");
            var pos3 = pos2 - (pos1 + 15);
            order_id = str.substr(pos1 + 15, pos3);
          }

          this.navCtrl.navigateRoot('/order-summary/' + order_id);
        }
      }, {
        key: "handlePayment",
        value: function handlePayment() {
          var _this59 = this;

          var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
          var browser = this.iab.create(this.results.redirect, '_blank', options);
          browser.show();
          browser.on('loadstart').subscribe(function (data) {
            if (data.url.indexOf('/order-received/') != -1 && data.url.indexOf('key=wc_order_') != -1) {
              _this59.orderSummary(data.url);

              browser.hide();
            } else if (data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled=1') != -1 || data.url.indexOf('cancelled') != -1) {
              browser.close();
              _this59.disableButton = false;
            }
          });
          browser.on('exit').subscribe(function (data) {
            _this59.disableButton = false;
          });
        }
      }, {
        key: "handleRazorPayment",
        value: function handleRazorPayment() {
          var _this60 = this;

          var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
          var browser = this.iab.create(this.results.redirect, '_blank', options);
          browser.show();
          browser.on('loadstart').subscribe(function (data) {
            browser.insertCSS({
              code: "body{visibility: hidden;}"
            });
            browser.insertCSS({
              code: ".page{visibility: initial;}"
            });

            if (data.url.indexOf('/order-received/') != -1 && data.url.indexOf('key=wc_order_') != -1) {
              _this60.orderSummary(data.url);

              browser.hide();
            } else if (data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled=1') != -1 || data.url.indexOf('cancelled') != -1) {
              browser.close();
              _this60.disableButton = false;
            } else if (data.url.substr(data.url.length - 10) == '/checkout/') {
              _this60.disableButton = false;
              browser.close();
            }
          });
          browser.on('exit').subscribe(function (data) {
            _this60.disableButton = false;
          });
        }
      }, {
        key: "handlePayUPayment",
        value: function handlePayUPayment() {
          var _this61 = this;

          var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
          var browser = this.iab.create(this.results.redirect, '_blank', options);
          var str = this.results.redirect;
          var pos1 = str.lastIndexOf("/order-pay/");
          var pos2 = str.lastIndexOf("/?key=wc_order");
          var pos3 = pos2 - (pos1 + 11);
          this.orderId = str.substr(pos1 + 11, pos3);
          var browserActive = false;
          browser.on('loadstart').subscribe(function (data) {
            if (data.url.indexOf('payumoney.com/transact') != -1 && !browserActive) {
              browserActive = true;
              browser.show();
            } else if (data.url.indexOf('/order-received/') != -1 && data.url.indexOf('key=wc_order_') != -1) {
              if (_this61.orderId) _this61.navCtrl.navigateRoot('/order-summary/' + _this61.orderId);
              browser.hide();
            } else if (data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled=1') != -1 || data.url.indexOf('cancelled') != -1) {
              browser.close();
              _this61.disableButton = false;
            }
          });
          browser.on('exit').subscribe(function (data) {
            _this61.disableButton = false;
          });
        }
      }, {
        key: "handlePaytmPayment",
        value: function handlePaytmPayment() {
          var _this62 = this;

          var str = this.results.redirect;
          var pos1 = str.lastIndexOf("/order-pay/");
          var pos2 = str.lastIndexOf("/?key=wc_order");
          var pos3 = pos2 - (pos1 + 11);
          this.orderId = str.substr(pos1 + 11, pos3);
          var browserActive = false;

          if (this.results.result == 'success') {
            var options = "location=no,hidden=yes,toolbar=yes";
            var browser = this.iab.create(this.results.redirect, '_blank', options);
            browser.on('loadstart').subscribe(function (data) {
              if ((data.url.indexOf('securegw-stage.paytm.in/theia') != -1 || data.url.indexOf('processTransaction') != -1) && !browserActive) {
                browserActive = true;
                browser.show();
              } else if (data.url.indexOf('type=success') != -1) {
                if (_this62.orderId) _this62.navCtrl.navigateRoot('/order-summary/' + _this62.orderId);
                browser.hide();
              } else if (data.url.indexOf('type=error') != -1 || data.url.indexOf('Failed') != -1 || data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled') != -1) {
                browser.close();
                _this62.disableButton = false;
              } else if (data.url.indexOf('Thank+you+for+your+order') != -1) {
                browser.close();
                _this62.disableButton = false;
              }
            });
            browser.on('exit').subscribe(function (data) {
              _this62.disableButton = false;
            });
          } else if (this.results.result == 'failure') {
            this.errorMessage = this.results.messages;
            this.disableButton = false;
          }
        }
      }, {
        key: "handlePaytmQRPayment",
        value: function handlePaytmQRPayment() {
          var _this63 = this;

          var str = this.results.redirect;
          var pos1 = str.lastIndexOf("/order-received/");
          var pos2 = str.lastIndexOf("/?key=wc_order");
          var pos3 = pos2 - (pos1 + 16);
          var order_id = str.substr(pos1 + 16, pos3);

          if (this.results.result == 'success') {
            var options = "location=no,hidden=yes,toolbar=yes";
            var browser = this.iab.create(this.results.redirect, '_blank', options);
            browser.on('loadstart').subscribe(function (data) {
              browser.show();

              if (data.url.indexOf('/order-received/') == -1) {
                browser.close();
                _this63.disableButton = false;

                _this63.navCtrl.navigateRoot('/order-summary/' + _this63.orderId);
              }
            });
            browser.on('exit').subscribe(function (data) {
              _this63.disableButton = false;
            });
          } else if (this.results.result == 'failure') {
            this.errorMessage = this.results.messages;
            this.disableButton = false;
          }
        }
      }, {
        key: "onChangePayment",
        value: function onChangePayment() {
          this.disableButton = false;

          if (
          /*this.checkoutData.form.payment_method == 'stripe' || */
          this.checkoutData.form.payment_method == 'paypalpro' && this.platform.is('cordova')) {// this.enterCard();
          }
        }
      }, {
        key: "setStripeForm",
        value: function setStripeForm() {
          this.stripeForm.key = this.orderReview.payment.stripe.publishable_key;
          this.stripeForm.payment_user_agent = 'stripe.js/6ea8d55';
          this.stripeForm['card[number]'] = this.cardResponse.cardNumber; //'4242424242424242';//this.cardResponse.cardNumber;

          this.stripeForm['card[exp_month]'] = this.cardResponse.expiryMonth; //'04';//this.cardResponse.expiryMonth;

          this.stripeForm['card[exp_year]'] = this.cardResponse.expiryYear; ////this.cardResponse.expiryYear;

          this.stripeForm['card[cvc]'] = this.cardResponse.cvv; //this.cardResponse.cvc;

          this.stripeForm['card[name]'] = this.checkoutData.form.billing_first_name + this.checkoutData.form.billing_last_name;
          this.stripeForm['card[address_line1]'] = this.checkoutData.form.billing_address_1;
          this.stripeForm['card[address_line2]'] = this.checkoutData.form.billing_address_2;
          this.stripeForm['card[address_state]'] = this.checkoutData.form.billing_state;
          this.stripeForm['card[address_city]'] = this.checkoutData.form.billing_city;
          this.stripeForm['card[address_zip]'] = this.checkoutData.form.billing_postcode;
          this.stripeForm['card[address_country]'] = this.checkoutData.form.billing_country;
          return true;
        }
      }, {
        key: "handleStipeToken",
        value: function handleStipeToken(token) {
          var _this64 = this;

          if (token && token.id) {
            var form = {
              type: 'card',
              token: '',
              key: ''
            };
            form.type = 'card';
            form.token = token.id;
            form.key = this.orderReview.payment.stripe.publishable_key;
            this.checkoutData.form['wc-stripe-payment-token'] = token.id; //For Existing Cards add api

            this.api.getExternalData('https://api.stripe.com/v1/sources', form).then(function (res) {
              _this64.stripePlaceOrder(res);
            }, function (err) {
              if (err.error.error.message) _this64.errorMessage = err.error.error.message;
              _this64.disableButton = false;
            });
          } else {
            this.disableButton = false;
            this.errorMessage = 'Cannot handle payment, Please check card details';
          }
        }
      }, {
        key: "stripePlaceOrder",
        value: function stripePlaceOrder(src) {
          var _this65 = this;

          if (src && src.id) {
            this.checkoutData.form['stripe_source'] = src.id;
            this.api.ajaxCall('/checkout?wc-ajax=checkout', this.checkoutData.form).then(function (res) {
              _this65.results = res;

              _this65.handleOrder();
            }, function (err) {
              _this65.disableButton = false;
              console.log(err);
            });
          } else {
            this.disableButton = false;
            this.errorMessage = 'Cannot handle payment, Please check card details';
          }
        }
      }, {
        key: "isEmptyObject",
        value: function isEmptyObject(obj) {
          return Object.keys(obj).length === 0;
        }
      }, {
        key: "onUseNewCard",
        value: function onUseNewCard() {
          this.setupStripe();
        }
      }, {
        key: "setupStripe",
        value: function setupStripe() {
          var _this66 = this;

          var style = {
            base: {
              color: '#32325d',
              fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
              fontSmoothing: 'antialiased',
              fontSize: '16px',
              '::placeholder': {
                color: '#aab7c4'
              }
            },
            invalid: {
              color: '#fa755a',
              iconColor: '#fa755a'
            }
          };
          var elements = this.stripe.elements();
          this.cardElement = elements.create('card', {
            hidePostalCode: true,
            style: style
          });
          this.cardElement.mount('#card-element'); //this.card.mount('#card-element');

          var form = document.getElementById('payment-form');
          console.log('test start');
          form.addEventListener('submit', function (event) {
            console.log('loading start');
            event.preventDefault();
            /*this.stripe.createToken(this.cardElement).then((result) => {
              console.log(result.token.id);
                  this.service.getStripeSource(this.form, result.token)
                    .then((results) => {
                    console.log(results)
                });
              });*/

            var ownerInfo = {
              owner: {
                name: _this66.checkoutData.form.billing_first_name + ' ' + _this66.checkoutData.form.billing_last_name,
                address: {
                  line1: _this66.checkoutData.form.billing_address_1,
                  city: _this66.checkoutData.form.billing_city,
                  postal_code: _this66.checkoutData.form.billing_postcode,
                  country: 'US'
                },
                email: _this66.checkoutData.form.billing_email
              }
            };

            if (!_this66.checkoutData.form.shipping) {
              _this66.checkoutData.form.shipping_first_name = _this66.checkoutData.form.billing_first_name;
              _this66.checkoutData.form.shipping_last_name = _this66.checkoutData.form.billing_last_name;
              _this66.checkoutData.form.shipping_company = _this66.checkoutData.form.billing_company;
              _this66.checkoutData.form.shipping_address_1 = _this66.checkoutData.form.billing_address_1;
              _this66.checkoutData.form.shipping_address_2 = _this66.checkoutData.form.billing_address_2;
              _this66.checkoutData.form.shipping_city = _this66.checkoutData.form.billing_city;
              _this66.checkoutData.form.shipping_country = _this66.checkoutData.form.billing_country;
              _this66.checkoutData.form.shipping_state = _this66.checkoutData.form.billing_state;
              _this66.checkoutData.form.shipping_postcode = _this66.checkoutData.form.billing_postcode;
            }

            _this66.loading = _this66.loadingController.create({});

            _this66.loading.present();

            _this66.buttonSubmit = true;
            _this66.PlaceOrder = "Placing Order";

            _this66.stripe.createSource(_this66.cardElement, ownerInfo).then(function (result) {
              if (result.error) {
                _this66.loading.dismiss(); // Inform the user if there was an error


                var errorElement = document.getElementById('card-errors');
                errorElement.textContent = result.error.message;
              } else {
                _this66.checkoutData.form.stripe_source = result.source.id;

                _this66.stripNewPayment();
              }
            });
            /*    */

          });
        }
      }, {
        key: "onClickStripeSubmit",
        value: function onClickStripeSubmit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee48() {
            var _this67 = this;

            var ownerInfo;
            return regeneratorRuntime.wrap(function _callee48$(_context48) {
              while (1) {
                switch (_context48.prev = _context48.next) {
                  case 0:
                    ownerInfo = {
                      owner: {
                        name: this.checkoutData.form.billing_first_name + ' ' + this.checkoutData.form.billing_last_name,
                        address: {
                          line1: this.checkoutData.form.billing_address_1,
                          city: this.checkoutData.form.billing_city,
                          postal_code: this.checkoutData.form.billing_postcode,
                          country: 'US'
                        },
                        email: this.checkoutData.form.billing_email
                      }
                    };

                    if (!this.checkoutData.form.shipping) {
                      this.checkoutData.form.shipping_first_name = this.checkoutData.form.billing_first_name;
                      this.checkoutData.form.shipping_last_name = this.checkoutData.form.billing_last_name;
                      this.checkoutData.form.shipping_company = this.checkoutData.form.billing_company;
                      this.checkoutData.form.shipping_address_1 = this.checkoutData.form.billing_address_1;
                      this.checkoutData.form.shipping_address_2 = this.checkoutData.form.billing_address_2;
                      this.checkoutData.form.shipping_city = this.checkoutData.form.billing_city;
                      this.checkoutData.form.shipping_country = this.checkoutData.form.billing_country;
                      this.checkoutData.form.shipping_state = this.checkoutData.form.billing_state;
                      this.checkoutData.form.shipping_postcode = this.checkoutData.form.billing_postcode;
                    }

                    this.buttonSubmit = true;
                    this.PlaceOrder = "Placing Order";
                    _context48.next = 6;
                    return this.loadingController.create({
                      message: 'Loading...',
                      translucent: true,
                      animated: true,
                      backdropDismiss: true
                    });

                  case 6:
                    this.loading = _context48.sent;
                    _context48.next = 9;
                    return this.loading.present();

                  case 9:
                    this.stripe.createSource(this.cardElement, ownerInfo).then(function (result) {
                      if (result.error) {
                        _this67.loading.dismiss(); // Inform the user if there was an error


                        var errorElement = document.getElementById('card-errors');
                        errorElement.textContent = result.error.message;
                      } else {
                        _this67.checkoutData.form.stripe_source = result.source.id;

                        _this67.stripNewPayment();
                      }
                    });

                  case 10:
                  case "end":
                    return _context48.stop();
                }
              }
            }, _callee48, this);
          }));
        }
      }, {
        key: "stripNewPayment",
        value: function stripNewPayment() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee49() {
            var _this68 = this;

            return regeneratorRuntime.wrap(function _callee49$(_context49) {
              while (1) {
                switch (_context49.prev = _context49.next) {
                  case 0:
                    //IF for new Card Payment
                    if (this.checkoutData.form.card) {
                      this.checkoutData.form['wc-stripe-payment-token'] = 'new';
                    } //For Existing Card
                    //if(!form.card)
                    //this.checkoutData.form['wc-stripe-payment-token'] = form.payment_token);


                    this.api.ajaxCall('/checkout?wc-ajax=checkout', this.checkoutData.form).then(function (res) {
                      _this68.stripeStatus = res;

                      if (_this68.stripeStatus.result == 'success') {
                        if (_this68.stripeStatus.redirect.indexOf('confirm-pi-') != -1) {
                          // PI from resuct redirect text
                          var clientSecret = _this68.stripeStatus.redirect.substring(_this68.stripeStatus.redirect.lastIndexOf("confirm-pi-") + 11, _this68.stripeStatus.redirect.lastIndexOf(":%2F")); //var clientSecret = 'pi_1EqKUlAMZtK61uwq79jdiVMt_secret_DitxeVf8vWt05K6kUS71alvrS';


                          _this68.stripe.handleCardPayment(clientSecret, _this68.cardElement, {
                            payment_method_data: {
                              billing_details: {
                                name: _this68.checkoutData.form.billing_first_name + ' ' + _this68.checkoutData.form.billing_last_name,
                                address: {
                                  line1: _this68.checkoutData.form.billing_address_1,
                                  city: _this68.checkoutData.form.billing_city,
                                  postal_code: _this68.checkoutData.form.billing_postcode,
                                  country: 'GB'
                                },
                                email: _this68.checkoutData.form.billing_email
                              }
                            }
                          }).then(function (result) {
                            _this68.loading.dismiss();

                            if (result.error) {
                              _this68.buttonSubmit = false; // Display error.message in your UI.
                            } else {
                              _this68.buttonSubmit = false;
                              var str = _this68.stripeStatus.redirect;
                              var pos1 = str.lastIndexOf("received%252F");
                              var pos2 = str.lastIndexOf("%252F%253Fkey");
                              var pos3 = pos2 - (pos1 + 13);
                              var order_id = str.substr(pos1 + 13, pos3);

                              _this68.api.ajaxCall('/?wc-ajax=wc_stripe_verify_intent&order=' + order_id + '&nonce=' + _this68.checkoutData.form.stripe_confirm_pi + '&redirect_to=').then(function (res) {
                                _this68.navCtrl.navigateRoot('/order-summary/' + order_id);
                              }, function (err) {});
                            }
                          });
                        } else if (_this68.stripeStatus.redirect.indexOf('order-received') != -1 && _this68.stripeStatus.redirect.indexOf('key=wc_order') != -1) {
                          var str = _this68.stripeStatus.redirect;
                          var pos1 = str.lastIndexOf("/order-received/");
                          var pos2 = str.lastIndexOf("/?key=wc_order");
                          var pos3 = pos2 - (pos1 + 16);
                          var order_id = str.substr(pos1 + 16, pos3);
                          _this68.buttonSubmit = false;

                          _this68.loading.dismiss();

                          _this68.navCtrl.navigateRoot('/order-summary/' + order_id);
                        }
                      } else if (_this68.stripeStatus.result == 'failure') {
                        _this68.presentToast(_this68.stripeStatus.messages);

                        _this68.buttonSubmit = false;

                        _this68.loading.dismiss();
                      }
                    }, function (err) {
                      _this68.disableButton = false;
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context49.stop();
                }
              }
            }, _callee49, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee50() {
            var toast;
            return regeneratorRuntime.wrap(function _callee50$(_context50) {
              while (1) {
                switch (_context50.prev = _context50.next) {
                  case 0:
                    _context50.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: 2000,
                      position: 'top'
                    });

                  case 2:
                    toast = _context50.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context50.stop();
                }
              }
            }, _callee50, this);
          }));
        }
      }, {
        key: "brainTreePayment",
        value: function brainTreePayment() {
          /*console.log('Braintree payment.......');
          
          const BRAINTREE_TOKEN = 'sandbox_7b74zrbp_zm8j7dwnjqqzzgxn';
          
          const appleOptions: ApplePayOptions = {
            merchantId: 'zm8j7dwnjqqzzgxn',
            currency: 'USD',
            country: 'US'
          }
            const paymentOptions: PaymentUIOptions = {
            amount: '14.99',
            primaryDescription: 'Your product or service (per /item, /month, /week, etc)',
          }
            this.braintree.initialize(BRAINTREE_TOKEN)
            .then(() => this.braintree.setupApplePay(appleOptions))
            .then(() => this.braintree.presentDropInPaymentUI(paymentOptions))
            .then((result: PaymentUIResult) => {
              if (result.userCancelled) {
                console.log("User cancelled payment dialog.");
              } else {
                console.log("User successfully completed payment!");
                console.log("Payment Nonce: " + result.nonce);
                console.log("Payment Result.", result);
              }
            })
            .catch((error: string) => console.error(error));*/
        }
      }]);

      return CheckoutPage;
    }();

    CheckoutPage.ctorParameters = function () {
      return [{
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data_checkout__WEBPACK_IMPORTED_MODULE_5__["CheckoutData"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        /*, private braintree: Braintree*/

      }];
    };

    CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-checkout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./checkout.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout/checkout.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./checkout.page.scss */
      "./src/app/checkout/checkout/checkout.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_checkout__WEBPACK_IMPORTED_MODULE_5__["CheckoutData"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    /*, private braintree: Braintree*/
    ])], CheckoutPage);
    /***/
  },

  /***/
  "./src/app/contact/contact.page.scss": function srcAppContactContactPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-button {\n  margin: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9EOlxcbHV4ZS4uLiBkZWJ1ZyA5IE9DVC9zcmNcXGFwcFxcY29udGFjdFxcY29udGFjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbiB7XG5cdG1hcmdpbjogMTZweDtcbn0iLCJpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAxNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/contact/contact.page.ts": function srcAppContactContactPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPage", function () {
      return ContactPage;
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


    var _data_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../data/product */
    "./src/app/data/product.ts");

    var ContactPage = /*#__PURE__*/function () {
      function ContactPage(settings, api, productData) {
        _classCallCheck(this, ContactPage);

        this.settings = settings;
        this.api = api;
        this.productData = productData;
        this.form = {};
        this.status = {};
        this.disableButton = false;
        this.contactUsLink = '/wp-json/contact-form-7/v1/contact-forms/10/feedback';
      }

      _createClass(ContactPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit() {
          var _this69 = this;

          this.disableButton = true;
          this.api.ajaxCall(this.contactUsLink, this.form).then(function (res) {
            _this69.disableButton = false;
            _this69.status = res;
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return ContactPage;
    }();

    ContactPage.ctorParameters = function () {
      return [{
        type: _data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _data_product__WEBPACK_IMPORTED_MODULE_4__["Product"]
      }];
    };

    ContactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.page.scss */
      "./src/app/contact/contact.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _data_product__WEBPACK_IMPORTED_MODULE_4__["Product"]])], ContactPage);
    /***/
  },

  /***/
  "./src/app/data/checkout.ts": function srcAppDataCheckoutTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutData", function () {
      return CheckoutData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CheckoutData = function CheckoutData() {
      _classCallCheck(this, CheckoutData);

      this.form = {};
      this.billingStates = {};
      this.shippingStates = {};
      this.orderReview = {}; //this.orderReview.payment = {};
    };

    CheckoutData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CheckoutData);
    /***/
  },

  /***/
  "./src/app/data/post.ts": function srcAppDataPostTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Post", function () {
      return Post;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Post = function Post() {
      _classCallCheck(this, Post);

      this.post = {};
      this.post.post = {};
    };

    Post = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Post);
    /***/
  },

  /***/
  "./src/app/data/vendor.ts": function srcAppDataVendorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Vendor", function () {
      return Vendor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Vendor = function Vendor() {
      _classCallCheck(this, Vendor);

      this.vendor = {};
      this.product = {};
      this.product.categories = [];
      this.product.images = [];
    };

    Vendor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Vendor);
    /***/
  },

  /***/
  "./src/app/post/post.page.scss": function srcAppPostPostPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".post ion-card {\n  box-shadow: none;\n}\n.post h2 {\n  margin: 20px 0 10px 16px;\n  font-size: 18px;\n}\n.post h3 {\n  font-size: 15px;\n  margin: 5px 16px 8px 16px;\n  line-height: 1.6;\n}\n.post p {\n  line-height: 1.6;\n  text-indent: 0px;\n  font-size: 14px;\n  text-align: justify;\n  margin: 14px 16px 16px;\n  font-weight: 500;\n}\n.post ion-img {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9EOlxcbHV4ZS4uLiBkZWJ1ZyA5IE9DVC9zcmNcXGFwcFxccG9zdFxccG9zdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Bvc3QvcG9zdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBQTtBQ0FSO0FERUk7RUFDSSx3QkFBQTtFQUNBLGVBQUE7QUNBUjtBREVJO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBRUEsZ0JBQUE7QUNEUjtBREdJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBREdJO0VBQ0ksWUFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9wb3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0IHtcbiAgICBpb24tY2FyZCB7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDAgMTBweCAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBtYXJnaW46IDVweCAxNnB4IDhweCAxNnB4O1xuICAgICAgICAvL2NvbG9yOiAjMjIyO1xuICAgICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICBtYXJnaW46IDE0cHggMTZweCAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICBpb24taW1nIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbn0iLCIucG9zdCBpb24tY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ucG9zdCBoMiB7XG4gIG1hcmdpbjogMjBweCAwIDEwcHggMTZweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnBvc3QgaDMge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogNXB4IDE2cHggOHB4IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG4ucG9zdCBwIHtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgdGV4dC1pbmRlbnQ6IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBtYXJnaW46IDE0cHggMTZweCAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnBvc3QgaW9uLWltZyB7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/post/post.page.ts": function srcAppPostPostPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostPage", function () {
      return PostPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../data/settings */
    "./src/app/data/settings.ts");

    var PostPage = /*#__PURE__*/function () {
      function PostPage(api, router, navCtrl, settings, route) {
        _classCallCheck(this, PostPage);

        this.api = api;
        this.router = router;
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.route = route;
      }

      _createClass(PostPage, [{
        key: "getPost",
        value: function getPost() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee51() {
            var _this70 = this;

            return regeneratorRuntime.wrap(function _callee51$(_context51) {
              while (1) {
                switch (_context51.prev = _context51.next) {
                  case 0:
                    _context51.next = 2;
                    return this.api.postItem('page_content', {
                      page_id: this.id
                    }).then(function (res) {
                      _this70.post = res;
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context51.stop();
                }
              }
            }, _callee51, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.route.snapshot.paramMap.get('id');
          this.getPost();
        }
      }]);

      return PostPage;
    }();

    PostPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    PostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post.page.scss */
      "./src/app/post/post.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], PostPage);
    /***/
  },

  /***/
  "./src/app/product/md5.ts": function srcAppProductMd5Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "md5", function () {
      return md5;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var md5 = function md5(string) {
      function RotateLeft(lValue, iShiftBits) {
        return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
      }

      function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = lX & 0x80000000;
        lY8 = lY & 0x80000000;
        lX4 = lX & 0x40000000;
        lY4 = lY & 0x40000000;
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);

        if (lX4 & lY4) {
          return lResult ^ 0x80000000 ^ lX8 ^ lY8;
        }

        if (lX4 | lY4) {
          if (lResult & 0x40000000) {
            return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
          } else {
            return lResult ^ 0x40000000 ^ lX8 ^ lY8;
          }
        } else {
          return lResult ^ lX8 ^ lY8;
        }
      }

      function F(x, y, z) {
        return x & y | ~x & z;
      }

      function G(x, y, z) {
        return x & z | y & ~z;
      }

      function H(x, y, z) {
        return x ^ y ^ z;
      }

      function I(x, y, z) {
        return y ^ (x | ~z);
      }

      function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;

        while (lByteCount < lMessageLength) {
          lWordCount = (lByteCount - lByteCount % 4) / 4;
          lBytePosition = lByteCount % 4 * 8;
          lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
          lByteCount++;
        }

        lWordCount = (lByteCount - lByteCount % 4) / 4;
        lBytePosition = lByteCount % 4 * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
      }

      ;

      function WordToHex(lValue) {
        var WordToHexValue = "",
            WordToHexValue_temp = "",
            lByte,
            lCount;

        for (lCount = 0; lCount <= 3; lCount++) {
          lByte = lValue >>> lCount * 8 & 255;
          WordToHexValue_temp = "0" + lByte.toString(16);
          WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }

        return WordToHexValue;
      }

      ;

      function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {
          var c = string.charCodeAt(n);

          if (c < 128) {
            utftext += String.fromCharCode(c);
          } else if (c > 127 && c < 2048) {
            utftext += String.fromCharCode(c >> 6 | 192);
            utftext += String.fromCharCode(c & 63 | 128);
          } else {
            utftext += String.fromCharCode(c >> 12 | 224);
            utftext += String.fromCharCode(c >> 6 & 63 | 128);
            utftext += String.fromCharCode(c & 63 | 128);
          }
        }

        return utftext;
      }

      ;
      var x = Array();
      var k, AA, BB, CC, DD, a, b, c, d;
      var S11 = 7,
          S12 = 12,
          S13 = 17,
          S14 = 22;
      var S21 = 5,
          S22 = 9,
          S23 = 14,
          S24 = 20;
      var S31 = 4,
          S32 = 11,
          S33 = 16,
          S34 = 23;
      var S41 = 6,
          S42 = 10,
          S43 = 15,
          S44 = 21;
      string = Utf8Encode(string);
      x = ConvertToWordArray(string);
      a = 0x67452301;
      b = 0xEFCDAB89;
      c = 0x98BADCFE;
      d = 0x10325476;

      for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
      }

      var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
      return temp.toLowerCase();
    };
    /***/

  },

  /***/
  "./src/app/product/product.page.scss": function srcAppProductProductPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.product-header .badge {\n  position: absolute;\n  margin-top: -10px;\n  margin-left: 9px;\n}\n.product-header .cart-icon {\n  font-size: 30px;\n}\nion-card-title {\n  font-size: 40px;\n}\nion-card-header {\n  padding: 10px;\n}\nion-card-content {\n  padding: 0;\n}\nion-card-content .price {\n  padding: 0 10px 10px 10px;\n  font-size: 16px;\n  line-height: 2rem;\n  color: var(--ion-color-dark, #eb445a);\n  font-weight: 500;\n}\nion-card-content .price .special-price {\n  padding-left: 5px;\n  font-size: 10px;\n  font-weight: 300;\n}\nion-card-subtitle {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 400;\n}\nion-card-title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 14px;\n  font-weight: 400;\n  text-transform: unset;\n}\n.option-box {\n  padding: 0 10px;\n}\n.option-box .option-button {\n  height: 1.8em;\n  --border-width: 1px;\n  font-weight: 400;\n  --border-radius: 25px;\n  font-size: 12px;\n  opacity: 0.5;\n}\n.option-box .selected-option {\n  --border-width: 2px;\n  font-weight: 600;\n  opacity: 1;\n}\n.option-box textarea {\n  border: 1px solid #f4f4f4;\n  border-radius: 3px;\n  width: 100%;\n}\n.product .product-details ion-chip {\n  margin-left: 10px;\n}\n.product .price {\n  font-size: 16px;\n  line-height: 2rem;\n  color: var(--ion-color-dark, #eb445a);\n  font-weight: 500;\n}\n.product .special-price {\n  padding-left: 5px;\n  font-size: 10px;\n  font-weight: 400;\n}\n.product .add-to-cart-button {\n  margin: 16px;\n}\n.product .variation-block {\n  margin: 13px 0px 0 0px;\n}\n.product .variation-block .variation-product {\n  margin-bottom: 5px;\n}\n.product .variation-block .variation-product ion-label {\n  color: #000;\n}\n.product .variation-block .variation-product .item {\n  border: 2px solid #fff;\n  background-color: #f9f9f9;\n}\n.product .variation-block .variation-product ion-select {\n  font-size: 12px;\n  color: #ffa41c;\n}\n.product .variation-block .variation-product .option-box {\n  padding: 0 8px;\n}\n.product .variation-block .variation-product .option-box .option-button {\n  margin: 8px;\n  height: 1.8em;\n  --border-width: 1px;\n  font-weight: 400;\n  --border-radius: 25px;\n  font-size: 12px;\n  opacity: 0.5;\n}\n.product .variation-block .variation-product .option-box .selected-option {\n  --border-width: 2px;\n  font-weight: 600;\n  opacity: 1;\n}\n.product .variation-block .variation-product .option-box textarea {\n  border: 1px solid #f4f4f4;\n  border-radius: 3px;\n  width: 100%;\n}\n.product .related-products .price {\n  padding: 0 10px 10px 10px;\n  font-size: 16px;\n  line-height: 2rem;\n  color: var(--ion-color-dark, #eb445a);\n  font-weight: 500;\n}\n.product .related-products .price .special-price {\n  padding-left: 5px;\n  font-size: 10px;\n  font-weight: 300;\n}\n.product .related-products .related-item-name {\n  padding: 16px 0 0 0;\n  font-weight: 400;\n}\n.product .related-products .scroll-related-products {\n  padding: 16px 0;\n  overflow: auto;\n  white-space: nowrap;\n}\n.product .related-products .scroll-related-products .product {\n  display: inline-block;\n  text-decoration: none;\n  width: 50%;\n  margin: 0 0 0 10px;\n}\n.product .related-products .scroll-related-products .product:last-child {\n  margin-right: 10px;\n}\n@media (min-width: 481px) and (max-width: 768px) {\n  .product .related-products .scroll-related-products .product {\n    width: 33.333%;\n  }\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .product .related-products .scroll-related-products .product {\n    width: 25%;\n  }\n}\n@media (min-width: 1025px) {\n  .product .related-products .scroll-related-products .product {\n    width: 20%;\n  }\n}\n.product .related-products .scroll-related-products ion-img {\n  height: auto;\n  width: 100%;\n}\n.product .related-products .scroll-related-products ion-card {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  margin-left: 2px;\n}\n.product .review-star {\n  float: right;\n}\n.product .review-star .star-icon {\n  color: #f7f7f7;\n  font-size: 1em;\n  position: relative;\n}\n.product .review-star .star-icon.full:before {\n  color: #ffce00;\n  content: \"★\";\n  position: absolute;\n  left: 0;\n}\n.product .review-star .star-icon.half:before {\n  color: #ffce00;\n  content: \"★\";\n  position: absolute;\n  left: 0;\n  width: 50%;\n  overflow: hidden;\n}\n@-moz-document url-prefix() {\n  .product .review-star .star-icon {\n    font-size: 50px;\n    line-height: 34px;\n  }\n}\n.onpress {\n  white-space: nowrap;\n  transform: scale(1, 1);\n  transition-timing-function: ease-in;\n  transition: 0.3s;\n}\n.onpress:active {\n  transition-timing-function: ease-out;\n  transition: 0.3s;\n  transform: scale(2, 2);\n}\n.review-item h2 {\n  font-size: 18px;\n  width: 100%;\n}\n.stock {\n  margin-left: 0px;\n  z-index: 5;\n  position: absolute;\n  --box-shadow: none;\n  left: 0px;\n  top: 10px;\n  width: 64px;\n  font-size: 8px;\n  height: 17px;\n  --border-radius: 0 2px 2px 0;\n}\n.grouped-block {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n.description img {\n  max-width: 100%;\n  border: 0;\n  height: auto !important;\n}\n.percent-off {\n  padding: 1px 4px;\n  margin: 7px;\n  background: var(--ion-color-secondary-tint, #50c8ff) !important;\n  border-radius: 2px;\n  color: var(--ion-color-secondary-contrast, #fff) !important;\n  font-size: 10px;\n}\nion-item {\n  --background: transparent;\n}\n.review-content {\n  white-space: normal;\n  overflow: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZHVjdC9EOlxcbHV4ZS4uLiBkZWJ1ZyA5IE9DVC9zcmNcXGFwcFxccHJvZHVjdFxccHJvZHVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ1o7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QURDUjtBQ0NJO0VBQ0ksZUFBQTtBRENSO0FDRUE7RUFDSSxlQUFBO0FEQ0o7QUNDQTtFQUNJLGFBQUE7QURFSjtBQ0FBO0VBQ0ksVUFBQTtBREdKO0FDRkk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QURJUjtBQ0hRO0VBRUksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURJWjtBQ0FBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QURHSjtBQ0NBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEscUJBQUE7QURDSjtBQ0NBO0VBQ0ksZUFBQTtBREVKO0FDREk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QURHUjtBQ0RJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QURHUjtBQ0RJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QURHUjtBQ0VRO0VBQ0ksaUJBQUE7QURDWjtBQ0VJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBREFSO0FDRUk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBREFSO0FDRUk7RUFDSSxZQUFBO0FEQVI7QUNFSTtFQUNJLHNCQUFBO0FEQVI7QUNFUTtFQUNJLGtCQUFBO0FEQVo7QUNDWTtFQUNJLFdBQUE7QURDaEI7QUNDWTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7QURDaEI7QUNDWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FEQ2hCO0FDQ1k7RUFDSSxjQUFBO0FEQ2hCO0FDQWdCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBREVwQjtBQ0FnQjtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FERXBCO0FDQWdCO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QURFcEI7QUNJUTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBREZaO0FDR1k7RUFFSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBREZoQjtBQ0tRO0VBQ0ksbUJBQUE7RUFFQSxnQkFBQTtBREpaO0FDTVE7RUFDSSxlQUFBO0VBRUEsY0FBQTtFQUNBLG1CQUFBO0FETFo7QUNNWTtFQUNJLHFCQUFBO0VBRUEscUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QURMaEI7QUNPWTtFQUNJLGtCQUFBO0FETGhCO0FDT1k7RUFDSTtJQUNJLGNBQUE7RURMbEI7QUFDRjtBQ09ZO0VBQ0k7SUFDSSxVQUFBO0VETGxCO0FBQ0Y7QUNPWTtFQUNJO0lBQ0ksVUFBQTtFRExsQjtBQUNGO0FDT1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBRExoQjtBQ09ZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QURMaEI7QUNTSTtFQUNJLFlBQUE7QURQUjtBQ1FRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRE5aO0FDUVE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtBRE5aO0FDUVE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBRE5aO0FDUVE7RUFDSTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFRE5kO0FBQ0Y7QUNVQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FEUEo7QUNTQTtFQUNJLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBRE5KO0FDU0k7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBRE5SO0FDU0E7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBRE5KO0FDUUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FETEo7QUNRSTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QURMUjtBQ1FBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsK0RBQUE7RUFDQSxrQkFBQTtFQUNBLDJEQUFBO0VBQ0EsZUFBQTtBRExKO0FDT0E7RUFDSSx5QkFBQTtBREpKO0FDTUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QURISiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ucHJvZHVjdC1oZWFkZXIgLmJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cbi5wcm9kdWN0LWhlYWRlciAuY2FydC1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24tY2FyZC1jb250ZW50IC5wcmljZSB7XG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaywgI2ViNDQ1YSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5pb24tY2FyZC1jb250ZW50IC5wcmljZSAuc3BlY2lhbC1wcmljZSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVuc2V0O1xufVxuXG4ub3B0aW9uLWJveCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5vcHRpb24tYm94IC5vcHRpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiAxLjhlbTtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5vcHRpb24tYm94IC5zZWxlY3RlZC1vcHRpb24ge1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBvcGFjaXR5OiAxO1xufVxuLm9wdGlvbi1ib3ggdGV4dGFyZWEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjRmNGY0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZHVjdCAucHJvZHVjdC1kZXRhaWxzIGlvbi1jaGlwIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ucHJvZHVjdCAucHJpY2Uge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmssICNlYjQ0NWEpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnByb2R1Y3QgLnNwZWNpYWwtcHJpY2Uge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnByb2R1Y3QgLmFkZC10by1jYXJ0LWJ1dHRvbiB7XG4gIG1hcmdpbjogMTZweDtcbn1cbi5wcm9kdWN0IC52YXJpYXRpb24tYmxvY2sge1xuICBtYXJnaW46IDEzcHggMHB4IDAgMHB4O1xufVxuLnByb2R1Y3QgLnZhcmlhdGlvbi1ibG9jayAudmFyaWF0aW9uLXByb2R1Y3Qge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucHJvZHVjdCAudmFyaWF0aW9uLWJsb2NrIC52YXJpYXRpb24tcHJvZHVjdCBpb24tbGFiZWwge1xuICBjb2xvcjogIzAwMDtcbn1cbi5wcm9kdWN0IC52YXJpYXRpb24tYmxvY2sgLnZhcmlhdGlvbi1wcm9kdWN0IC5pdGVtIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbn1cbi5wcm9kdWN0IC52YXJpYXRpb24tYmxvY2sgLnZhcmlhdGlvbi1wcm9kdWN0IGlvbi1zZWxlY3Qge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZmZhNDFjO1xufVxuLnByb2R1Y3QgLnZhcmlhdGlvbi1ibG9jayAudmFyaWF0aW9uLXByb2R1Y3QgLm9wdGlvbi1ib3gge1xuICBwYWRkaW5nOiAwIDhweDtcbn1cbi5wcm9kdWN0IC52YXJpYXRpb24tYmxvY2sgLnZhcmlhdGlvbi1wcm9kdWN0IC5vcHRpb24tYm94IC5vcHRpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiA4cHg7XG4gIGhlaWdodDogMS44ZW07XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG4ucHJvZHVjdCAudmFyaWF0aW9uLWJsb2NrIC52YXJpYXRpb24tcHJvZHVjdCAub3B0aW9uLWJveCAuc2VsZWN0ZWQtb3B0aW9uIHtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgb3BhY2l0eTogMTtcbn1cbi5wcm9kdWN0IC52YXJpYXRpb24tYmxvY2sgLnZhcmlhdGlvbi1wcm9kdWN0IC5vcHRpb24tYm94IHRleHRhcmVhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y0ZjRmNDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9kdWN0IC5yZWxhdGVkLXByb2R1Y3RzIC5wcmljZSB7XG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaywgI2ViNDQ1YSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ucHJvZHVjdCAucmVsYXRlZC1wcm9kdWN0cyAucHJpY2UgLnNwZWNpYWwtcHJpY2Uge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnByb2R1Y3QgLnJlbGF0ZWQtcHJvZHVjdHMgLnJlbGF0ZWQtaXRlbS1uYW1lIHtcbiAgcGFkZGluZzogMTZweCAwIDAgMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5wcm9kdWN0IC5yZWxhdGVkLXByb2R1Y3RzIC5zY3JvbGwtcmVsYXRlZC1wcm9kdWN0cyB7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ucHJvZHVjdCAucmVsYXRlZC1wcm9kdWN0cyAuc2Nyb2xsLXJlbGF0ZWQtcHJvZHVjdHMgLnByb2R1Y3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIDAgMCAxMHB4O1xufVxuLnByb2R1Y3QgLnJlbGF0ZWQtcHJvZHVjdHMgLnNjcm9sbC1yZWxhdGVkLXByb2R1Y3RzIC5wcm9kdWN0Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucHJvZHVjdCAucmVsYXRlZC1wcm9kdWN0cyAuc2Nyb2xsLXJlbGF0ZWQtcHJvZHVjdHMgLnByb2R1Y3Qge1xuICAgIHdpZHRoOiAzMy4zMzMlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnByb2R1Y3QgLnJlbGF0ZWQtcHJvZHVjdHMgLnNjcm9sbC1yZWxhdGVkLXByb2R1Y3RzIC5wcm9kdWN0IHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIC5wcm9kdWN0IC5yZWxhdGVkLXByb2R1Y3RzIC5zY3JvbGwtcmVsYXRlZC1wcm9kdWN0cyAucHJvZHVjdCB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuLnByb2R1Y3QgLnJlbGF0ZWQtcHJvZHVjdHMgLnNjcm9sbC1yZWxhdGVkLXByb2R1Y3RzIGlvbi1pbWcge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuLnByb2R1Y3QgLnJlbGF0ZWQtcHJvZHVjdHMgLnNjcm9sbC1yZWxhdGVkLXByb2R1Y3RzIGlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuLnByb2R1Y3QgLnJldmlldy1zdGFyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnByb2R1Y3QgLnJldmlldy1zdGFyIC5zdGFyLWljb24ge1xuICBjb2xvcjogI2Y3ZjdmNztcbiAgZm9udC1zaXplOiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0IC5yZXZpZXctc3RhciAuc3Rhci1pY29uLmZ1bGw6YmVmb3JlIHtcbiAgY29sb3I6ICNmZmNlMDA7XG4gIGNvbnRlbnQ6IFwi4piFXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbn1cbi5wcm9kdWN0IC5yZXZpZXctc3RhciAuc3Rhci1pY29uLmhhbGY6YmVmb3JlIHtcbiAgY29sb3I6ICNmZmNlMDA7XG4gIGNvbnRlbnQ6IFwi4piFXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gIC5wcm9kdWN0IC5yZXZpZXctc3RhciAuc3Rhci1pY29uIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIH1cbn1cblxuLm9ucHJlc3Mge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLm9ucHJlc3M6YWN0aXZlIHtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDIsIDIpO1xufVxuXG4ucmV2aWV3LWl0ZW0gaDIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3RvY2sge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICB6LWluZGV4OiA1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDEwcHg7XG4gIHdpZHRoOiA2NHB4O1xuICBmb250LXNpemU6IDhweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICAtLWJvcmRlci1yYWRpdXM6IDAgMnB4IDJweCAwO1xufVxuXG4uZ3JvdXBlZC1ibG9jayB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5kZXNjcmlwdGlvbiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5wZXJjZW50LW9mZiB7XG4gIHBhZGRpbmc6IDFweCA0cHg7XG4gIG1hcmdpbjogN3B4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQsICM1MGM4ZmYpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ucmV2aWV3LWNvbnRlbnQge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBvdmVyZmxvdzogdW5zZXQ7XG59IiwiLnByb2R1Y3QtaGVhZGVyIHtcbiAgICAuYmFkZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogOXB4O1xuICAgIH1cbiAgICAuY2FydC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbn1cbmlvbi1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG59XG5pb24tY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIC5wcmljZSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaywgI2ViNDQ1YSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIC5zcGVjaWFsLXByaWNlIHtcbiAgICAgICAgICAgIC8vY29sb3I6ICM4Njg2ODY7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgLy9mb250LXNpemU6IHNtYWxsO1xuICAgIC8vY29sb3I6IGJsYWNrO1xufVxuaW9uLWNhcmQtdGl0bGV7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIC8vbGV0dGVyLXNwYWNpbmc6IC40cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVuc2V0O1xufVxuLm9wdGlvbi1ib3gge1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAub3B0aW9uLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMS44ZW07XG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAgIC5zZWxlY3RlZC1vcHRpb24ge1xuICAgICAgICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICB0ZXh0YXJlYSB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNGY0ZjQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuLnByb2R1Y3Qge1xuICAgIC5wcm9kdWN0LWRldGFpbHMge1xuICAgICAgICBpb24tY2hpcCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucHJpY2Uge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmssICNlYjQ0NWEpO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICAuc3BlY2lhbC1wcmljZSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIC5hZGQtdG8tY2FydC1idXR0b24ge1xuICAgICAgICBtYXJnaW46IDE2cHg7XG4gICAgfVxuICAgIC52YXJpYXRpb24tYmxvY2sge1xuICAgICAgICBtYXJnaW46IDEzcHggMHB4IDAgMHB4O1xuICAgICAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLnZhcmlhdGlvbi1wcm9kdWN0IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZhNDFjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm9wdGlvbi1ib3gge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgICAgICAgICAgIC5vcHRpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS44ZW07XG4gICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zZWxlY3RlZC1vcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNGY0ZjQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5yZWxhdGVkLXByb2R1Y3RzIHtcbiAgICAgICAgLnByaWNlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaywgI2ViNDQ1YSk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgLnNwZWNpYWwtcHJpY2Uge1xuICAgICAgICAgICAgICAgIC8vY29sb3I6ICM4Njg2ODY7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnJlbGF0ZWQtaXRlbS1uYW1lIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMCAwIDA7XG4gICAgICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgfVxuICAgICAgICAuc2Nyb2xsLXJlbGF0ZWQtcHJvZHVjdHMge1xuICAgICAgICAgICAgcGFkZGluZzogMTZweCAwO1xuICAgICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmY7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAucHJvZHVjdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIC8vY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2R1Y3Q6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgIC5wcm9kdWN0IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMyU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgICAgICAgLnByb2R1Y3Qge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgICAgICAgICAgICAgICAucHJvZHVjdCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucmV2aWV3LXN0YXIge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIC5zdGFyLWljb24ge1xuICAgICAgICAgICAgY29sb3I6ICNmN2Y3Zjc7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAuc3Rhci1pY29uLmZ1bGw6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZjZTAwO1xuICAgICAgICAgICAgY29udGVudDogJ1xcMjYwNSc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5zdGFyLWljb24uaGFsZjpiZWZvcmUge1xuICAgICAgICAgICAgY29sb3I6ICNmZmNlMDA7XG4gICAgICAgICAgICBjb250ZW50OiAnXFwyNjA1JztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICAgICAgLnN0YXItaWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLm9ucHJlc3Mge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLm9ucHJlc3M6YWN0aXZlIHtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgdHJhbnNpdGlvbjogLjNzO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMiwgMik7XG59XG4ucmV2aWV3LWl0ZW0ge1xuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG4uc3RvY2sge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgei1pbmRleDogNTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgaGVpZ2h0OiAxN3B4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMCAycHggMnB4IDA7XG59XG4uZ3JvdXBlZC1ibG9jayB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLmRlc2NyaXB0aW9uIHtcbiAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLnBlcmNlbnQtb2ZmIHtcbiAgICBwYWRkaW5nOiAxcHggNHB4O1xuICAgIG1hcmdpbjogN3B4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCwgIzUwYzhmZikgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ucmV2aWV3LWNvbnRlbnR7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBvdmVyZmxvdzogdW5zZXQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/product/product.page.ts": function srcAppProductProductPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductPage", function () {
      return ProductPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../data */
    "./src/app/data.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _data_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../data/product */
    "./src/app/data/product.ts");
    /* harmony import */


    var _md5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./md5 */
    "./src/app/product/md5.ts");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _data_vendor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../data/vendor */
    "./src/app/data/vendor.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");

    var ProductPage = /*#__PURE__*/function () {
      function ProductPage(translate, toastController, socialSharing, modalCtrl, api, data, productData, settings, router, loadingController, navCtrl, alertController, route, vendor, iab) {
        _classCallCheck(this, ProductPage);

        this.translate = translate;
        this.toastController = toastController;
        this.socialSharing = socialSharing;
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.data = data;
        this.productData = productData;
        this.settings = settings;
        this.router = router;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.route = route;
        this.vendor = vendor;
        this.iab = iab;
        this.filter = {};
        this.usedVariationAttributes = [];
        this.options = {};
        this.variations = [];
        this.groupedProducts = [];
        this.productDetails = {};
        this.reviews = [];
        this.cart = {};
        this.disableButton = false;
        this.addonsList = []; //ADDONS

        this.lan = {};
        this.filter.page = 1;
        this.quantity = "1";
      }

      _createClass(ProductPage, [{
        key: "getReviewsPage",
        value: function getReviewsPage() {
          var navigationExtras = {
            queryParams: {
              ratingVerificationRequired: this.productDetails.rating_verification_required,
              customerBoughtProduct: this.productDetails.customer_bought_product
            }
          };
          this.navCtrl.navigateForward(this.router.url + '/review/' + this.product.id, navigationExtras);
        }
      }, {
        key: "getProduct",
        value: function getProduct() {
          var _this71 = this;

          this.api.postItem('product', {
            'product_id': this.id
          }).then(function (res) {
            _this71.product = res;

            _this71.handleProduct();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this72 = this;

          this.translate.get(['Oops!', 'Please Select', 'Please wait', 'Options', 'Option', 'Select', 'Item added to cart', 'Message', 'Requested quantity not available']).subscribe(function (translations) {
            _this72.lan.oops = translations['Oops!'];
            _this72.lan.PleaseSelect = translations['Please Select'];
            _this72.lan.Pleasewait = translations['Please wait'];
            _this72.lan.options = translations['Options'];
            _this72.lan.option = translations['Option'];
            _this72.lan.select = translations['Select'];
            _this72.lan.addToCart = translations['Item added to cart'];
            _this72.lan.message = translations['Message'];
            _this72.lan.lowQuantity = translations['Requested quantity not available'];
          });
          this.product = this.productData.product;
          this.id = this.route.snapshot.paramMap.get('id');
          if (this.product.id) this.handleProduct();else this.getProduct();
        }
      }, {
        key: "handleProduct",
        value: function handleProduct() {
          var _this73 = this;

          /* Reward Points */
          if (this.settings.settings.switchRewardPoints && this.product.meta_data) this.product.meta_data.forEach(function (item) {
            if (item.key == '_wc_points_earned') {
              _this73.product.showPoints = item.value;
            }
          });
          /* Product Addons */

          if (this.settings.settings.switchAddons === 1) this.getAddons();
          this.usedVariationAttributes = this.product.attributes.filter(function (attribute) {
            return attribute.variation == true;
          }); //if ((this.product.type == 'variable') && this.product.variations.length) this.getVariationProducts();

          if (this.product.type == 'grouped' && this.product.grouped_products.length) this.getGroupedProducts();
          this.getRelatedProducts();
          this.getReviews();
        }
      }, {
        key: "getVariationProducts",
        value: function getVariationProducts() {
          var _this74 = this;

          this.api.getItem('products/' + this.product.id + '/variations', {
            per_page: 100
          }).then(function (res) {
            _this74.variations = res;
          }, function (err) {});
        }
      }, {
        key: "getGroupedProducts",
        value: function getGroupedProducts() {
          var _this75 = this;

          if (this.product.grouped_products.length) {
            var filter = [];

            for (var item in this.product.grouped_products) {
              filter['include[' + item + ']'] = this.product.grouped_products[item];
            }

            this.api.getItem('products', filter).then(function (res) {
              _this75.groupedProducts = res;
            }, function (err) {});
          }
        }
      }, {
        key: "getRelatedProducts",
        value: function getRelatedProducts() {
          var _this76 = this;

          var filter = [];
          filter['product_id'] = this.product.id;
          this.api.postItem('product_details', filter).then(function (res) {
            _this76.productDetails = res;
          }, function (err) {});
        }
      }, {
        key: "getReviews",
        value: function getReviews() {
          var _this77 = this;

          this.api.postItem('product_reviews', {
            'product_id': this.product.id
          }).then(function (res) {
            _this77.reviews = res;

            for (var item in _this77.reviews) {
              _this77.reviews[item].avatar = Object(_md5__WEBPACK_IMPORTED_MODULE_8__["md5"])(_this77.reviews[item].email);
            }
          }, function (err) {});
        }
      }, {
        key: "goToProduct",
        value: function goToProduct(product) {
          this.productData.product = product;
          var endIndex = this.router.url.lastIndexOf('/');
          var path = this.router.url.substring(0, endIndex);
          this.navCtrl.navigateForward(path + '/' + product.id);
        }
      }, {
        key: "addToCart",
        value: function addToCart() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee52() {
            var _this78 = this;

            return regeneratorRuntime.wrap(function _callee52$(_context52) {
              while (1) {
                switch (_context52.prev = _context52.next) {
                  case 0:
                    if (!(this.product.manage_stock && this.product.stock_quantity < this.data.cart[this.product.id])) {
                      _context52.next = 4;
                      break;
                    }

                    this.presentAlert(this.lan.message, this.lan.lowQuantity);
                    _context52.next = 10;
                    break;

                  case 4:
                    if (!(this.selectAdons() && this.setVariations2() && this.setGroupedProducts())) {
                      _context52.next = 10;
                      break;
                    }

                    if (this.product.type != 'grouped') {
                      this.options.quantity = this.quantity;
                    }

                    this.options.product_id = this.product.id;
                    this.disableButton = true;
                    _context52.next = 10;
                    return this.api.postItem('add_to_cart', this.options).then(function (res) {
                      _this78.results = res;

                      if (_this78.results.error) {
                        _this78.presentToast(_this78.results.notice);
                      } else {
                        _this78.cart = res;

                        _this78.presentToast(_this78.lan.addToCart);

                        _this78.data.updateCart(_this78.cart.cart);
                      }

                      _this78.disableButton = false;
                    }, function (err) {
                      console.log(err);
                      _this78.disableButton = false;
                    });

                  case 10:
                  case "end":
                    return _context52.stop();
                }
              }
            }, _callee52, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee53() {
            var toast;
            return regeneratorRuntime.wrap(function _callee53$(_context53) {
              while (1) {
                switch (_context53.prev = _context53.next) {
                  case 0:
                    _context53.next = 2;
                    return this.toastController.create({
                      message: message.replace(/<[^>]*>/g, ''),
                      duration: 2000,
                      position: 'top'
                    });

                  case 2:
                    toast = _context53.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context53.stop();
                }
              }
            }, _callee53, this);
          }));
        }
      }, {
        key: "setVariations",
        value: function setVariations() {
          var _this79 = this;

          if (this.variationId) {
            this.options.variation_id = this.variationId;
          }

          this.product.attributes.forEach(function (item) {
            if (item.selected) {
              _this79.options['variation[attribute_pa_' + item.name + ']'] = item.selected;
            }
          });

          for (var i = 0; i < this.product.attributes.length; i++) {
            if (this.product.attributes[i].variation && this.product.attributes[i].selected == undefined) {
              this.presentAlert(this.lan.options, this.lan.select + ' ' + this.product.attributes[i].name + ' ' + this.lan.option);
              return false;
            }
          }

          return true;
        }
      }, {
        key: "setVariations2",
        value: function setVariations2() {
          var doAdd = true;

          if (this.product.type == 'variable' && this.product.variationOptions != null) {
            for (var i = 0; i < this.product.variationOptions.length; i++) {
              if (this.product.variationOptions[i].selected != null) {
                this.options['variation[attribute_' + this.product.variationOptions[i].attribute + ']'] = this.product.variationOptions[i].selected;
              } else if (this.product.variationOptions[i].selected == null && this.product.variationOptions[i].options.length != 0) {
                this.presentAlert(this.lan.options, this.lan.select + ' ' + this.product.variationOptions[i].name);
                doAdd = false;
                break;
              } else if (this.product.variationOptions[i].selected == null && this.product.variationOptions[i].options.length == 0) {
                this.product.stock_status = 'outofstock';
                doAdd = false;
                break;
              }
            }

            if (this.product.variation_id) {
              this.options['variation_id'] = this.product.variation_id;
            }
          }

          return doAdd;
        }
      }, {
        key: "chooseVariation2",
        value: function chooseVariation2(index, value) {
          this.product.variationOptions[index].selected = value;
          this.product.stock_status = 'instock';

          if (this.product.variationOptions.every(function (option) {
            return option.selected != null;
          })) {
            var selectedOptions = [];
            var matchedOptions = [];

            for (var i = 0; i < this.product.variationOptions.length; i++) {
              selectedOptions.push(this.product.variationOptions[i].selected);
            }

            for (var i = 0; i < this.product.availableVariations.length; i++) {
              matchedOptions = [];

              for (var j = 0; j < this.product.availableVariations[i].option.length; j++) {
                if (selectedOptions.includes(this.product.availableVariations[i].option[j].value) || this.product.availableVariations[i].option[j].value == '') {
                  matchedOptions.push(this.product.availableVariations[i].option[j].value);
                }
              }

              if (matchedOptions.length == selectedOptions.length) {
                this.product.variation_id = this.product.availableVariations[i].variation_id;
                this.product.price = this.product.availableVariations[i].display_price;
                this.product.regular_price = this.product.availableVariations[i].display_regular_price;
                this.product.formated_price = this.product.availableVariations[i].formated_price;
                this.product.formated_sales_price = this.product.availableVariations[i].formated_sales_price;
                if (this.product.availableVariations[i].display_regular_price != this.product.availableVariations[i].display_price) this.product.sale_price = this.product.availableVariations[i].display_price;else this.product.sale_price = null;

                if (!this.product.availableVariations[i].is_in_stock) {
                  this.product.stock_status = 'outofstock';
                }

                break;
              }
            }

            if (matchedOptions.length != selectedOptions.length) {
              this.product.stock_status = 'outofstock';
            }
          }
        }
      }, {
        key: "chooseVariation",
        value: function chooseVariation(att, value) {
          var _this80 = this;

          this.product.attributes.forEach(function (item) {
            item.selected = undefined;
          });
          this.product.attributes.forEach(function (item) {
            if (item.name == att.name) {
              item.selected = value;
            }
          });
          if (this.usedVariationAttributes.every(function (a) {
            return a.selected !== undefined;
          })) this.variations.forEach(function (variation) {
            var test = new Array(_this80.usedVariationAttributes.length);
            test.fill(false);

            _this80.usedVariationAttributes.forEach(function (attribute) {
              if (variation.attributes.length == 0) {
                _this80.variationId = variation.id;
                _this80.product.stock_status = variation.stock_status;
                _this80.product.price = variation.price;
                _this80.product.sale_price = variation.sale_price;
                _this80.product.regular_price = variation.regular_price;
                _this80.product.manage_stock = variation.manage_stock;
                _this80.product.stock_quantity = variation.stock_quantity; //this.product.images[0] = variation.image; /* Uncomment this if you want to use variation images */
              } else {
                variation.attributes.forEach(function (item, index) {
                  if (item.name == attribute.name && item.option == attribute.selected) {
                    test[index] = true;
                  }
                });

                if (test.every(function (v) {
                  return v == true;
                })) {
                  _this80.variationId = variation.id;
                  _this80.product.stock_status = variation.stock_status;
                  _this80.product.price = variation.price;
                  _this80.product.sale_price = variation.sale_price;
                  _this80.product.regular_price = variation.regular_price;
                  _this80.product.manage_stock = variation.manage_stock;
                  _this80.product.stock_quantity = variation.stock_quantity; //this.product.images[0] = variation.image;  /* Uncomment this if you want to use variation images */

                  test.fill(false);
                } else if (variation.attributes.length != 1 && variation.attributes.length == _this80.usedVariationAttributes.length && test.some(function (v) {
                  return v == false;
                })) {//this.product.stock_status = 'outofstock';
                  //this.options.variation_id = variation.id;
                }
              }
            });
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee54() {
            var alert;
            return regeneratorRuntime.wrap(function _callee54$(_context54) {
              while (1) {
                switch (_context54.prev = _context54.next) {
                  case 0:
                    _context54.next = 2;
                    return this.alertController.create({
                      header: header,
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context54.sent;
                    _context54.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context54.stop();
                }
              }
            }, _callee54, this);
          }));
        }
      }, {
        key: "OnDestroy",
        value: function OnDestroy() {
          this.productData.product = {};
        }
      }, {
        key: "share",
        value: function share() {
          var options = {
            message: "Check this out!",
            subject: this.product.name,
            files: ['', ''],
            url: this.product.permalink,
            chooserTitle: 'Choose an App'
          };
          this.socialSharing.shareWithOptions(options);
        }
      }, {
        key: "getDetail",
        value: function getDetail(vendor) {
          console.log(vendor);
          this.vendor.vendor = vendor;
          var pages = this.router.url.split('/');
          this.navCtrl.navigateForward('/tabs/' + pages[2] + '/vendor-products');
        }
      }, {
        key: "buyExternalProduct",
        value: function buyExternalProduct(id) {
          var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
          var browser = this.iab.create(this.product.external_url, '_blank', options);
          browser.show();
        }
      }, {
        key: "setGroupedProducts",
        value: function setGroupedProducts() {
          var _this81 = this;

          if (this.product.type == 'grouped') {
            this.options['add-to-cart'] = this.product.id;
            this.groupedProducts.forEach(function (item) {
              if (item.selected) {
                _this81.options['quantity[' + item.id + ']'] = item.selected;
              }
            });
            return true;
          } else return true;
        }
        /* PRODUCT ADDONS */

      }, {
        key: "getAddons",
        value: function getAddons() {
          if (this.product.meta_data) {
            for (var item in this.product.meta_data) {
              if (this.product.meta_data[item].key == '_product_addons' && this.product.meta_data[item].value.length) {
                var _this$addonsList;

                (_this$addonsList = this.addonsList).push.apply(_this$addonsList, _toConsumableArray(this.product.meta_data[item].value));
              }
            }
          }

          this.getGlobalAddons();
        }
      }, {
        key: "getGlobalAddons",
        value: function getGlobalAddons() {
          var _this82 = this;

          this.api.getAddonsList('product-add-ons').then(function (res) {
            _this82.handleAddonResults(res);
          });
        }
      }, {
        key: "handleAddonResults",
        value: function handleAddonResults(results) {
          var _this83 = this;

          if (results && results.length) results.forEach(function (item) {
            var _this83$addonsList;

            (_this83$addonsList = _this83.addonsList).push.apply(_this83$addonsList, _toConsumableArray(item.fields));
          });
        }
      }, {
        key: "selectAdons",
        value: function selectAdons() {
          var _this84 = this;

          this.options = {};
          var valid = this.validateform();

          if (valid) {
            this.addonsList.forEach(function (value, i) {
              value.selectedName = value.name.toLowerCase();
              value.selectedName = value.selectedName.split(' ').join('-');
              value.selectedName = value.selectedName.split('.').join('');
              value.selectedName = value.selectedName.replace(':', '');
              value.options.forEach(function (option, j) {
                option.selectedLabel = option.label.toLowerCase();
                option.selectedLabel = option.selectedLabel.split(' ').join('-');
                option.selectedLabel = option.selectedLabel.split('.').join('');
                option.selectedLabel = option.selectedLabel.replace(':', '');

                if (value.selected instanceof Array) {
                  if (value.selected.includes(option.label)) {
                    _this84.options['addon-' + _this84.product.id + '-' + value.selectedName + '-' + i + '[' + j + ']'] = option.selectedLabel;
                  }
                } else if (option.label == value.selected && value.type == 'select') {
                  _this84.options['addon-' + _this84.product.id + '-' + value.selectedName + '-' + i] = option.selectedLabel + '-' + (j + 1);
                } else if (option.label == value.selected && value.type == 'radiobutton') {
                  _this84.options['addon-' + _this84.product.id + '-' + value.selectedName + '-' + i + '[' + j + ']'] = option.selectedLabel;
                } else if (value.type === 'custom_textarea' && option.input && option.input !== '') {
                  _this84.options['addon-' + _this84.product.id + '-' + value.selectedName + '-' + i + '[' + option.selectedLabel + ']'] = option.input;
                }
              });

              if (value.type == 'custom_text') {
                var label = value.name;
                label = label.toLowerCase();
                label = label.split(' ').join('-');
                label = label.split('.').join('');
                label = label.replace(':', '');
                _this84.options['addon-' + _this84.product.id + '-' + label + '-' + i] = value.input;
              }
            });
          }

          return valid;
        }
      }, {
        key: "validateform",
        value: function validateform() {
          if (this.addonsList) {
            for (var addon in this.addonsList) {
              for (var item in this.addonsList[addon].fields) {
                if (this.addonsList[addon].fields[item].required == 1 && this.addonsList[addon].fields[item].selected == '') {
                  this.presentAlert(this.lan.oops, this.lan.PleaseSelect + ' ' + this.addonsList[addon].fields[item].name);
                  return false;
                }
              }

              if (this.addonsList[addon].type == 'custom_text') {
                if (this.addonsList[addon].required == 1 && (!this.addonsList[addon].input || this.addonsList[addon].input == '')) {
                  this.presentAlert(this.lan.oops, this.lan.PleaseSelect + ' ' + this.addonsList[addon].name);
                  return false;
                }
              }
            }

            return true;
          }

          return true;
        }
      }]);

      return ProductPage;
    }();

    ProductPage.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_5__["Data"]
      }, {
        type: _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _data_vendor__WEBPACK_IMPORTED_MODULE_10__["Vendor"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__["InAppBrowser"]
      }];
    };

    ProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product.page.scss */
      "./src/app/product/product.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _data_vendor__WEBPACK_IMPORTED_MODULE_10__["Vendor"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__["InAppBrowser"]])], ProductPage);
    /***/
  },

  /***/
  "./src/app/products/products.page.scss": function srcAppProductsProductsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: var(--ion-color-background, #f2f2f2);\n}\n\nion-list {\n  --background: var(--ion-color-background, #f2f2f2);\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-card {\n  margin: 0;\n  height: 100%;\n}\n\nion-card-header {\n  padding: 10px;\n}\n\nion-card-content {\n  padding: 0;\n}\n\nion-card-content .price {\n  padding: 0 10px 10px 10px;\n  font-size: 16px;\n  line-height: 2rem;\n  color: var(--ion-color-dark, #eb445a);\n  font-weight: 500;\n}\n\nion-card-content .price .special-price {\n  padding-left: 5px;\n  font-size: 10px;\n  font-weight: 300;\n}\n\nion-card-subtitle {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  font-size: small;\n}\n\n.scrollmenu2 {\n  margin: 5px 0;\n  z-index: 1;\n  overflow: auto;\n  white-space: nowrap;\n}\n\n.scrollmenu2 h5 {\n  margin: 0;\n  padding: 5px;\n  font-size: 12px;\n  text-transform: capitalize;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.scrollmenu2 .scroll {\n  display: inline-block;\n  text-align: center;\n  padding: 8px 8px 0 8px;\n  text-decoration: none;\n  width: 21%;\n}\n\n.list-md {\n  padding-top: 0;\n}\n\n.stock {\n  position: absolute;\n  top: -4px;\n  left: -6px;\n  width: 130px;\n  font-size: 8px;\n  margin: 15px;\n  margin-left: -39px;\n  transform: rotate(-45deg);\n  height: 19px;\n  --box-shadow: none;\n}\n\n.offer {\n  margin-left: 5px;\n  font-size: 12px;\n  --border-radius: 25px;\n  width: 36px;\n  min-height: 36px;\n  font-weight: 600;\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  -webkit-box-shadow: none;\n  --box-shadow: none;\n}\n\n.percent-off {\n  padding: 1px 4px;\n  margin: 7px;\n  background: var(--ion-color-secondary-tint, #50c8ff) !important;\n  border-radius: 2px;\n  color: var(--ion-color-secondary-contrast, #fff) !important;\n  font-size: 10px;\n}\n\n.searchbar-input.sc-ion-searchbar-md {\n  box-shadow: none;\n}\n\n.products-header ion-searchbar {\n  height: 40px;\n}\n\n.products-header ion-searchbar ion-toolbar:last-child {\n  --border-width: 0;\n}\n\n.product-list3 ion-item {\n  --border-color: var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-50, rgba(0, 0, 0, 0.2))));\n  --border-width: 0 0 0.55px;\n  --padding-start: 0px;\n  padding: 10xp;\n}\n\n.product-list3 ion-item ion-thumbnail {\n  width: 28%;\n  height: 100%;\n  padding: 10px;\n  margin: 0px;\n}\n\n.product-list3 ion-item .details {\n  align-self: flex-start;\n  width: 100%;\n}\n\n.product-list3 ion-item .details ion-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  font-size: small;\n}\n\n.product-list3 ion-item .details p {\n  margin: 0;\n}\n\n.product-list3 ion-item .details .price {\n  font-size: 16px;\n  line-height: 2rem;\n  color: var(--ion-color-dark, #eb445a);\n  font-weight: 500;\n}\n\n.product-list3 ion-item .details .price .special-price {\n  padding-left: 5px;\n  font-size: 10px;\n  font-weight: 300;\n}\n\n.product-list3 ion-item .details ion-icon {\n  font-size: x-large;\n  font-weight: 300;\n}\n\n.product-list3 ion-item .offer {\n  font-size: 8px;\n  --border-radius: 2px;\n  width: 46px;\n  min-height: 16px;\n  font-weight: 600;\n  -webkit-box-shadow: none;\n  --box-shadow: none;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvRDpcXGx1eGUuLi4gZGVidWcgOSBPQ1Qvc3JjXFxhcHBcXHByb2R1Y3RzXFxwcm9kdWN0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtEQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrREFBQTtBQ0VKOztBREFBO0VBQ0kscUJBQUE7QUNHSjs7QUREQTtFQUNJLFNBQUE7RUFDQSxZQUFBO0FDSUo7O0FERkE7RUFDSSxhQUFBO0FDS0o7O0FESEE7RUFDSSxVQUFBO0FDTUo7O0FETEk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNPUjs7QUROUTtFQUVJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDT1o7O0FESEE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ09KOztBRE5JO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDUVI7O0FETkk7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUNRUjs7QURMQTtFQUNJLGNBQUE7QUNRSjs7QUROQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDU0o7O0FEUEE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUNVSjs7QURSQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLCtEQUFBO0VBQ0Esa0JBQUE7RUFDQSwyREFBQTtFQUNBLGVBQUE7QUNXSjs7QURUQTtFQUNJLGdCQUFBO0FDWUo7O0FEVEk7RUFDSSxZQUFBO0FDWVI7O0FEWFE7RUFDSSxpQkFBQTtBQ2FaOztBRFJJO0VBQ0ksc0hBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQ1dSOztBRFZRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ1laOztBRFZRO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0FDWVo7O0FEWFk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDYWhCOztBRFhZO0VBQ0ksU0FBQTtBQ2FoQjs7QURYWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNhaEI7O0FEWmdCO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNjcEI7O0FEWFk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDYWhCOztBRFZRO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ1laIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQsICNmMmYyZjIpO1xufVxuaW9uLWxpc3Qge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQsICNmMmYyZjIpO1xufVxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5pb24tY2FyZCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbmlvbi1jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLnByaWNlIHtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLCAjZWI0NDVhKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgLnNwZWNpYWwtcHJpY2Uge1xuICAgICAgICAgICAgLy9jb2xvcjogIzg2ODY4NjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IHNtYWxsOyAvL2NvbG9yOiBibGFjaztcbn1cbi5zY3JvbGxtZW51MiB7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICB6LWluZGV4OiAxOyAvL2JhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBoNSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgLnNjcm9sbCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLy9jb2xvcjogIzAwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA4cHggOHB4IDAgOHB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHdpZHRoOiAyMSU7XG4gICAgfVxufVxuLmxpc3QtbWQge1xuICAgIHBhZGRpbmctdG9wOiAwO1xufVxuLnN0b2NrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNHB4O1xuICAgIGxlZnQ6IC02cHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIG1hcmdpbjogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogLTM5cHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgaGVpZ2h0OiAxOXB4O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbi5vZmZlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogNXB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG4ucGVyY2VudC1vZmYge1xuICAgIHBhZGRpbmc6IDFweCA0cHg7XG4gICAgbWFyZ2luOiA3cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50LCAjNTBjOGZmKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG4uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ucHJvZHVjdHMtaGVhZGVyIHtcbiAgICBpb24tc2VhcmNoYmFyIHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuLnByb2R1Y3QtbGlzdDMge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAsIHJnYmEoMCwgMCwgMCwgMC4yKSkpKTtcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwLjU1cHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHhwO1xuICAgICAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgICAgIHdpZHRoOiAyOCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRldGFpbHMge1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDsgLy9wYWRkaW5nOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmljZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaywgI2ViNDQ1YSk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAuc3BlY2lhbC1wcmljZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5vZmZlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDQ2cHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICB9XG4gICAgfVxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VuZCwgI2YyZjJmMik7XG59XG5cbmlvbi1saXN0IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VuZCwgI2YyZjJmMik7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24tY2FyZC1jb250ZW50IC5wcmljZSB7XG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaywgI2ViNDQ1YSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5pb24tY2FyZC1jb250ZW50IC5wcmljZSAuc3BlY2lhbC1wcmljZSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi5zY3JvbGxtZW51MiB7XG4gIG1hcmdpbjogNXB4IDA7XG4gIHotaW5kZXg6IDE7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnNjcm9sbG1lbnUyIGg1IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnNjcm9sbG1lbnUyIC5zY3JvbGwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDhweCAwIDhweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aWR0aDogMjElO1xufVxuXG4ubGlzdC1tZCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uc3RvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTRweDtcbiAgbGVmdDogLTZweDtcbiAgd2lkdGg6IDEzMHB4O1xuICBmb250LXNpemU6IDhweDtcbiAgbWFyZ2luOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogLTM5cHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgaGVpZ2h0OiAxOXB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5vZmZlciB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICB3aWR0aDogMzZweDtcbiAgbWluLWhlaWdodDogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgbGVmdDogNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnBlcmNlbnQtb2ZmIHtcbiAgcGFkZGluZzogMXB4IDRweDtcbiAgbWFyZ2luOiA3cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCwgIzUwYzhmZikgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ucHJvZHVjdHMtaGVhZGVyIGlvbi1zZWFyY2hiYXIge1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ucHJvZHVjdHMtaGVhZGVyIGlvbi1zZWFyY2hiYXIgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xufVxuXG4ucHJvZHVjdC1saXN0MyBpb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTUwLCByZ2JhKDAsIDAsIDAsIDAuMikpKSk7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgcGFkZGluZzogMTB4cDtcbn1cbi5wcm9kdWN0LWxpc3QzIGlvbi1pdGVtIGlvbi10aHVtYm5haWwge1xuICB3aWR0aDogMjglO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLnByb2R1Y3QtbGlzdDMgaW9uLWl0ZW0gLmRldGFpbHMge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9kdWN0LWxpc3QzIGlvbi1pdGVtIC5kZXRhaWxzIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuLnByb2R1Y3QtbGlzdDMgaW9uLWl0ZW0gLmRldGFpbHMgcCB7XG4gIG1hcmdpbjogMDtcbn1cbi5wcm9kdWN0LWxpc3QzIGlvbi1pdGVtIC5kZXRhaWxzIC5wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaywgI2ViNDQ1YSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ucHJvZHVjdC1saXN0MyBpb24taXRlbSAuZGV0YWlscyAucHJpY2UgLnNwZWNpYWwtcHJpY2Uge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnByb2R1Y3QtbGlzdDMgaW9uLWl0ZW0gLmRldGFpbHMgaW9uLWljb24ge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ucHJvZHVjdC1saXN0MyBpb24taXRlbSAub2ZmZXIge1xuICBmb250LXNpemU6IDhweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAycHg7XG4gIHdpZHRoOiA0NnB4O1xuICBtaW4taGVpZ2h0OiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luOiAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/products/products.page.ts": function srcAppProductsProductsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsPage", function () {
      return ProductsPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../data */
    "./src/app/data.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _data_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../data/product */
    "./src/app/data/product.ts");
    /* harmony import */


    var _filter_filter_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../filter/filter.page */
    "./src/app/filter/filter.page.ts");
    /* harmony import */


    var _data_vendor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../data/vendor */
    "./src/app/data/vendor.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../config */
    "./src/app/config.ts");

    var ProductsPage = /*#__PURE__*/function () {
      function ProductsPage(config, alertController, translate, vendor, modalController, api, data, product, settings, router, navCtrl, route) {
        _classCallCheck(this, ProductsPage);

        this.config = config;
        this.alertController = alertController;
        this.translate = translate;
        this.vendor = vendor;
        this.modalController = modalController;
        this.api = api;
        this.data = data;
        this.product = product;
        this.settings = settings;
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.products = [];
        this.tempProducts = [];
        this.subCategories = [];
        this.filter = {};
        this.hasMoreItems = true;
        this.loader = false;
        this.showSearch = true;
        this.cart = {};
        this.options = {};
        this.lan = {};
        this.gridView = true;
        this.filter.page = 1;
        this.filter.status = 'publish';
        this.options.quantity = 1;
      }

      _createClass(ProductsPage, [{
        key: "getFilter",
        value: function getFilter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee55() {
            var _this85 = this;

            var modal, _yield$modal$onDidDis, data;

            return regeneratorRuntime.wrap(function _callee55$(_context55) {
              while (1) {
                switch (_context55.prev = _context55.next) {
                  case 0:
                    _context55.next = 2;
                    return this.modalController.create({
                      component: _filter_filter_page__WEBPACK_IMPORTED_MODULE_8__["FilterPage"],
                      componentProps: {
                        filter: this.filter,
                        attributes: this.attributes
                      }
                    });

                  case 2:
                    modal = _context55.sent;
                    modal.present();
                    _context55.next = 6;
                    return modal.onDidDismiss();

                  case 6:
                    _yield$modal$onDidDis = _context55.sent;
                    data = _yield$modal$onDidDis.data;

                    if (data) {
                      this.filter = data;
                      Object.keys(this.filter).forEach(function (key) {
                        return _this85.filter[key] === undefined ? delete _this85.filter[key] : '';
                      });
                      this.filter.page = 1;
                      this.getProducts();
                    }

                  case 9:
                  case "end":
                    return _context55.stop();
                }
              }
            }, _callee55, this);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this86 = this;

          this.filter.page = this.filter.page + 1;
          this.api.postItem('products', this.filter).then(function (res) {
            _this86.tempProducts = res;

            _this86.products.push.apply(_this86.products, _this86.tempProducts);

            event.target.complete();
            if (_this86.tempProducts.length == 0) _this86.hasMoreItems = false;
          }, function (err) {
            event.target.complete();
          });
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this87 = this;

          this.loader = true;
          this.api.postItem('products', this.filter).then(function (res) {
            console.log(res);
            _this87.products = res;
            _this87.loader = false;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getAttributes",
        value: function getAttributes() {
          var _this88 = this;

          this.api.postItem('product-attributes', {
            category: this.filter.id
          }).then(function (res) {
            _this88.attributes = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this89 = this;

          if (this.route.snapshot.paramMap.get('id')) {
            this.filter.id = this.route.snapshot.paramMap.get('id');
          }

          if (this.vendor.vendor.id) {
            this.filter.vendor = this.vendor.vendor.id ? this.vendor.vendor.id : this.vendor.vendor.ID;
          }

          if (this.vendor.vendor.wcpv_product_vendors) {
            delete this.filter.vendor;
            this.filter.wcpv_product_vendors = this.vendor.vendor.wcpv_product_vendors;
          }

          if (this.data.categories && this.data.categories.length) {
            for (var i = 0; i < this.data.categories.length; i++) {
              if (this.data.categories[i].parent == this.filter.id) {
                this.subCategories.push(this.data.categories[i]);
              }
            }
          }

          if (this.settings.colWidthProducts == 4) this.filter.per_page = 15;
          this.getProducts();
          this.getAttributes();
          this.translate.get(['Oops!', 'Please Select', 'Please wait', 'Options', 'Option', 'Select', 'Item added to cart', 'Message', 'Requested quantity not available']).subscribe(function (translations) {
            _this89.lan.oops = translations['Oops!'];
            _this89.lan.PleaseSelect = translations['Please Select'];
            _this89.lan.Pleasewait = translations['Please wait'];
            _this89.lan.options = translations['Options'];
            _this89.lan.option = translations['Option'];
            _this89.lan.select = translations['Select'];
            _this89.lan.addToCart = translations['Item added to cart'];
            _this89.lan.message = translations['Message'];
            _this89.lan.lowQuantity = translations['Requested quantity not available'];
          });
        }
      }, {
        key: "getProduct",
        value: function getProduct(product) {
          this.product.product = product;
          this.navCtrl.navigateForward(this.router.url + '/product/' + product.id);
        }
      }, {
        key: "getCategory",
        value: function getCategory(id) {
          var endIndex = this.router.url.lastIndexOf('/');
          var path = this.router.url.substring(0, endIndex);
          this.navCtrl.navigateForward(path + '/' + id);
        }
      }, {
        key: "loaded",
        value: function loaded(product) {
          console.log('Loaded');
          product.loaded = true;
        }
      }, {
        key: "onInput",
        value: function onInput() {
          if (this.searchInput.length) {
            this.products = [];
            this.filter.q = this.searchInput;
            this.filter.page = 1;
            this.getProducts();
          } else {
            this.products = [];
            this.filter.q = '';
            this.filter.page = 1;
            this.getProducts();
          }
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.showSearch = false;
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          this.vendor.vendor = {};
          this.showSearch = true;
        }
      }, {
        key: "toggleGridView",
        value: function toggleGridView() {
          this.gridView = !this.gridView;
        }
      }, {
        key: "addToCart",
        value: function addToCart(product) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee56() {
            var _this90 = this;

            return regeneratorRuntime.wrap(function _callee56$(_context56) {
              while (1) {
                switch (_context56.prev = _context56.next) {
                  case 0:
                    if (!(product.manage_stock && product.stock_quantity < this.data.cart[product.id])) {
                      _context56.next = 4;
                      break;
                    }

                    this.presentAlert(this.lan.message, this.lan.lowQuantity);
                    _context56.next = 13;
                    break;

                  case 4:
                    if (!(product.type == 'variable')) {
                      _context56.next = 8;
                      break;
                    }

                    this.getProduct(product);
                    _context56.next = 13;
                    break;

                  case 8:
                    if (!this.setVariations(product)) {
                      _context56.next = 13;
                      break;
                    }

                    if (this.data.cart[product.id] != undefined) this.data.cart[product.id] += 1;else this.data.cart[product.id] = 1;
                    this.options.product_id = product.id;
                    _context56.next = 13;
                    return this.api.postItem('add_to_cart', this.options).then(function (res) {
                      _this90.cart = res;

                      _this90.data.updateCart(_this90.cart.cart);
                    }, function (err) {
                      console.log(err);
                    });

                  case 13:
                  case "end":
                    return _context56.stop();
                }
              }
            }, _callee56, this);
          }));
        }
      }, {
        key: "setVariations",
        value: function setVariations(product) {
          var _this91 = this;

          if (product.variationId) {
            this.options.variation_id = product.variationId;
          }

          product.attributes.forEach(function (item) {
            if (item.selected) {
              _this91.options['variation[attribute_pa_' + item.name + ']'] = item.selected;
            }
          });

          for (var i = 0; i < product.attributes.length; i++) {
            if (product.type == 'variable' && product.attributes[i].variation && product.attributes[i].selected == undefined) {
              this.presentAlert(this.lan.options, this.lan.select + ' ' + product.attributes[i].name + ' ' + this.lan.option);
              return false;
            }
          }

          return true;
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee57() {
            var alert;
            return regeneratorRuntime.wrap(function _callee57$(_context57) {
              while (1) {
                switch (_context57.prev = _context57.next) {
                  case 0:
                    _context57.next = 2;
                    return this.alertController.create({
                      header: header,
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context57.sent;
                    _context57.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context57.stop();
                }
              }
            }, _callee57, this);
          }));
        }
      }, {
        key: "updateToCart",
        value: function updateToCart(product) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee58() {
            var _this92 = this;

            var params, key;
            return regeneratorRuntime.wrap(function _callee58$(_context58) {
              while (1) {
                switch (_context58.prev = _context58.next) {
                  case 0:
                    params = {};

                    if (!(product.manage_stock && product.stock_quantity < this.data.cart[product.id])) {
                      _context58.next = 5;
                      break;
                    }

                    this.presentAlert(this.lan.message, this.lan.lowQuantity);
                    _context58.next = 10;
                    break;

                  case 5:
                    for (key in this.data.cartItem) {
                      if (this.data.cartItem[key].product_id == product.id) {
                        if (this.data.cartItem[key].quantity != undefined && this.data.cartItem[key].quantity == 0) {
                          this.data.cartItem[key].quantity = 0;
                        } else {
                          this.data.cartItem[key].quantity += 1;
                        }

                        ;

                        if (this.data.cart[product.id] != undefined && this.data.cart[product.id] == 0) {
                          this.data.cart[product.id] = 0;
                        } else {
                          this.data.cart[product.id] += 1;
                        }

                        ;
                        params.key = key;
                        params.quantity = this.data.cartItem[key].quantity;
                      }
                    }

                    params.update_cart = 'Update Cart';
                    params._wpnonce = this.data.cartNonce;
                    _context58.next = 10;
                    return this.api.postItem('update-cart-item-qty', params).then(function (res) {
                      _this92.cart = res;

                      _this92.data.updateCart(_this92.cart.cart_contents);
                    }, function (err) {
                      console.log(err);
                    });

                  case 10:
                  case "end":
                    return _context58.stop();
                }
              }
            }, _callee58, this);
          }));
        }
      }, {
        key: "deleteFromCart",
        value: function deleteFromCart(product) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee59() {
            var _this93 = this;

            var params, key;
            return regeneratorRuntime.wrap(function _callee59$(_context59) {
              while (1) {
                switch (_context59.prev = _context59.next) {
                  case 0:
                    params = {};

                    for (key in this.data.cartItem) {
                      if (this.data.cartItem[key].product_id == product.id) {
                        if (this.data.cartItem[key].quantity != undefined && this.data.cartItem[key].quantity == 0) {
                          this.data.cartItem[key].quantity = 0;
                        } else {
                          this.data.cartItem[key].quantity -= 1;
                        }

                        ;

                        if (this.data.cart[product.id] != undefined && this.data.cart[product.id] == 0) {
                          this.data.cart[product.id] = 0;
                        } else {
                          this.data.cart[product.id] -= 1;
                        }

                        ;
                        params.key = key;
                        params.quantity = this.data.cartItem[key].quantity;
                      }
                    }

                    params.update_cart = 'Update Cart';
                    params._wpnonce = this.data.cartNonce;
                    _context59.next = 6;
                    return this.api.postItem('update-cart-item-qty', params).then(function (res) {
                      console.log(res);
                      _this93.cart = res;

                      _this93.data.updateCart(_this93.cart.cart_contents);
                    }, function (err) {
                      console.log(err);
                    });

                  case 6:
                  case "end":
                    return _context59.stop();
                }
              }
            }, _callee59, this);
          }));
        }
      }]);

      return ProductsPage;
    }();

    ProductsPage.ctorParameters = function () {
      return [{
        type: _config__WEBPACK_IMPORTED_MODULE_11__["Config"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
      }, {
        type: _data_vendor__WEBPACK_IMPORTED_MODULE_9__["Vendor"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_5__["Data"]
      }, {
        type: _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products.page.scss */
      "./src/app/products/products.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config__WEBPACK_IMPORTED_MODULE_11__["Config"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"], _data_vendor__WEBPACK_IMPORTED_MODULE_9__["Vendor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ProductsPage);
    /***/
  },

  /***/
  "./src/app/review/md5.ts": function srcAppReviewMd5Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "md5", function () {
      return md5;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var md5 = function md5(string) {
      function RotateLeft(lValue, iShiftBits) {
        return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
      }

      function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = lX & 0x80000000;
        lY8 = lY & 0x80000000;
        lX4 = lX & 0x40000000;
        lY4 = lY & 0x40000000;
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);

        if (lX4 & lY4) {
          return lResult ^ 0x80000000 ^ lX8 ^ lY8;
        }

        if (lX4 | lY4) {
          if (lResult & 0x40000000) {
            return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
          } else {
            return lResult ^ 0x40000000 ^ lX8 ^ lY8;
          }
        } else {
          return lResult ^ lX8 ^ lY8;
        }
      }

      function F(x, y, z) {
        return x & y | ~x & z;
      }

      function G(x, y, z) {
        return x & z | y & ~z;
      }

      function H(x, y, z) {
        return x ^ y ^ z;
      }

      function I(x, y, z) {
        return y ^ (x | ~z);
      }

      function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;

        while (lByteCount < lMessageLength) {
          lWordCount = (lByteCount - lByteCount % 4) / 4;
          lBytePosition = lByteCount % 4 * 8;
          lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
          lByteCount++;
        }

        lWordCount = (lByteCount - lByteCount % 4) / 4;
        lBytePosition = lByteCount % 4 * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
      }

      ;

      function WordToHex(lValue) {
        var WordToHexValue = "",
            WordToHexValue_temp = "",
            lByte,
            lCount;

        for (lCount = 0; lCount <= 3; lCount++) {
          lByte = lValue >>> lCount * 8 & 255;
          WordToHexValue_temp = "0" + lByte.toString(16);
          WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }

        return WordToHexValue;
      }

      ;

      function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {
          var c = string.charCodeAt(n);

          if (c < 128) {
            utftext += String.fromCharCode(c);
          } else if (c > 127 && c < 2048) {
            utftext += String.fromCharCode(c >> 6 | 192);
            utftext += String.fromCharCode(c & 63 | 128);
          } else {
            utftext += String.fromCharCode(c >> 12 | 224);
            utftext += String.fromCharCode(c >> 6 & 63 | 128);
            utftext += String.fromCharCode(c & 63 | 128);
          }
        }

        return utftext;
      }

      ;
      var x = Array();
      var k, AA, BB, CC, DD, a, b, c, d;
      var S11 = 7,
          S12 = 12,
          S13 = 17,
          S14 = 22;
      var S21 = 5,
          S22 = 9,
          S23 = 14,
          S24 = 20;
      var S31 = 4,
          S32 = 11,
          S33 = 16,
          S34 = 23;
      var S41 = 6,
          S42 = 10,
          S43 = 15,
          S44 = 21;
      string = Utf8Encode(string);
      x = ConvertToWordArray(string);
      a = 0x67452301;
      b = 0xEFCDAB89;
      c = 0x98BADCFE;
      d = 0x10325476;

      for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
      }

      var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
      return temp.toLowerCase();
    };
    /***/

  },

  /***/
  "./src/app/review/review.page.scss": function srcAppReviewReviewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.review-star {\n  float: right;\n}\n.review-star .star-icon {\n  color: #f7f7f7;\n  font-size: 1em;\n  position: relative;\n}\n.review-star .star-icon.full:before {\n  color: #ffce00;\n  content: \"★\";\n  position: absolute;\n  left: 0;\n}\n.review-star .star-icon.half:before {\n  color: #ffce00;\n  content: \"★\";\n  position: absolute;\n  left: 0;\n  width: 50%;\n  overflow: hidden;\n}\n@-moz-document url-prefix() {\n  .review-star .star-icon {\n    font-size: 50px;\n    line-height: 34px;\n  }\n}\n.review-content {\n  white-space: normal;\n  overflow: unset;\n}\n.review-percent-block {\n  max-width: 400px;\n  margin: auto;\n  padding-bottom: 20px;\n}\n.review-percent-block h3 {\n  margin-top: 6px;\n  font-size: 14px;\n}\n.review-percent-block .progress-bar {\n  background-color: var(--ion-color-light, #92949c);\n  height: 4px;\n  width: 100%;\n  padding: 0;\n  margin-right: 0%;\n  margin-top: 11px;\n  box-shadow: none;\n  border-radius: 5px;\n}\n.review-percent-block .progress-bar span {\n  text-align: center;\n  display: table;\n  height: 100%;\n  border-radius: 3px 0 0 3px;\n  box-shadow: none;\n  background-color: var(--ion-color-dark, #222428);\n  transition: width 0.4s ease-in-out;\n}\n.review-percent-block .review-stars {\n  float: right;\n}\n.review-percent-block ion-col {\n  padding: 0;\n}\n.new-review .rating .star-icon {\n  color: #ddd;\n  font-size: 18px;\n  position: relative;\n}\n.new-review .rating .star-icon.full:before {\n  color: #FFC107;\n  content: \"★\";\n  position: absolute;\n  left: 0;\n}\n.new-review .rating .star-icon.half:before {\n  color: #FFC107;\n  content: \"★\";\n  position: absolute;\n  left: 0;\n  width: 50%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3L3Jldmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Jldmlldy9EOlxcbHV4ZS4uLiBkZWJ1ZyA5IE9DVC9zcmNcXGFwcFxccmV2aWV3XFxyZXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLFlBQUE7QURFSjtBQ0RJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBREdSO0FDREk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtBREdSO0FDREk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBREdSO0FDREk7RUFDSTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFREdWO0FBQ0Y7QUNBQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBREdKO0FDREE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBRElKO0FDSEk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBREtSO0FDSEk7RUFDSSxpREFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FES1I7QUNKUTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQ0FBQTtBRE1aO0FDSEk7RUFDSSxZQUFBO0FES1I7QUNISTtFQUNJLFVBQUE7QURLUjtBQ0FRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBREdaO0FDRFE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtBREdaO0FDRFE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBREdaIiwiZmlsZSI6InNyYy9hcHAvcmV2aWV3L3Jldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ucmV2aWV3LXN0YXIge1xuICBmbG9hdDogcmlnaHQ7XG59XG4ucmV2aWV3LXN0YXIgLnN0YXItaWNvbiB7XG4gIGNvbG9yOiAjZjdmN2Y3O1xuICBmb250LXNpemU6IDFlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJldmlldy1zdGFyIC5zdGFyLWljb24uZnVsbDpiZWZvcmUge1xuICBjb2xvcjogI2ZmY2UwMDtcbiAgY29udGVudDogXCLimIVcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xufVxuLnJldmlldy1zdGFyIC5zdGFyLWljb24uaGFsZjpiZWZvcmUge1xuICBjb2xvcjogI2ZmY2UwMDtcbiAgY29udGVudDogXCLimIVcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbiAgLnJldmlldy1zdGFyIC5zdGFyLWljb24ge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgfVxufVxuXG4ucmV2aWV3LWNvbnRlbnQge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBvdmVyZmxvdzogdW5zZXQ7XG59XG5cbi5yZXZpZXctcGVyY2VudC1ibG9jayB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4ucmV2aWV3LXBlcmNlbnQtYmxvY2sgaDMge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5yZXZpZXctcGVyY2VudC1ibG9jayAucHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LCAjOTI5NDljKTtcbiAgaGVpZ2h0OiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDAlO1xuICBtYXJnaW4tdG9wOiAxMXB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucmV2aWV3LXBlcmNlbnQtYmxvY2sgLnByb2dyZXNzLWJhciBzcGFuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmssICMyMjI0MjgpO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuLnJldmlldy1wZXJjZW50LWJsb2NrIC5yZXZpZXctc3RhcnMge1xuICBmbG9hdDogcmlnaHQ7XG59XG4ucmV2aWV3LXBlcmNlbnQtYmxvY2sgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5uZXctcmV2aWV3IC5yYXRpbmcgLnN0YXItaWNvbiB7XG4gIGNvbG9yOiAjZGRkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5uZXctcmV2aWV3IC5yYXRpbmcgLnN0YXItaWNvbi5mdWxsOmJlZm9yZSB7XG4gIGNvbG9yOiAjRkZDMTA3O1xuICBjb250ZW50OiBcIuKYhVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG59XG4ubmV3LXJldmlldyAucmF0aW5nIC5zdGFyLWljb24uaGFsZjpiZWZvcmUge1xuICBjb2xvcjogI0ZGQzEwNztcbiAgY29udGVudDogXCLimIVcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSIsIi5yZXZpZXctc3RhciB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAuc3Rhci1pY29uIHtcclxuICAgICAgICBjb2xvcjogI2Y3ZjdmNztcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAuc3Rhci1pY29uLmZ1bGw6YmVmb3JlIHtcclxuICAgICAgICBjb2xvcjogI2ZmY2UwMDtcclxuICAgICAgICBjb250ZW50OiAnXFwyNjA1JztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5zdGFyLWljb24uaGFsZjpiZWZvcmUge1xyXG4gICAgICAgIGNvbG9yOiAjZmZjZTAwO1xyXG4gICAgICAgIGNvbnRlbnQ6ICdcXDI2MDUnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XHJcbiAgICAgICAgLnN0YXItaWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5yZXZpZXctY29udGVudCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgb3ZlcmZsb3c6IHVuc2V0O1xyXG59XHJcbi5yZXZpZXctcGVyY2VudC1ibG9jayB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCwgIzkyOTQ5Yyk7XHJcbiAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDExcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLCAjMjIyNDI4KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZXZpZXctc3RhcnMge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICAgIGlvbi1jb2wge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuLm5ldy1yZXZpZXcge1xyXG4gICAgLnJhdGluZyB7XHJcbiAgICAgICAgLnN0YXItaWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0YXItaWNvbi5mdWxsOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZDMTA3O1xyXG4gICAgICAgICAgICBjb250ZW50OiAnXFwyNjA1JztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3Rhci1pY29uLmhhbGY6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkMxMDc7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdcXDI2MDUnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/review/review.page.ts": function srcAppReviewReviewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewPage", function () {
      return ReviewPage;
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


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./md5 */
    "./src/app/review/md5.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ReviewPage = /*#__PURE__*/function () {
      function ReviewPage(api, router, route, settings, fb) {
        _classCallCheck(this, ReviewPage);

        this.api = api;
        this.router = router;
        this.route = route;
        this.settings = settings;
        this.fb = fb;
        this.reviews = [];
        this.hasMoreItems = true;
        this.filter = {};
        this.showReviews = false;
        this.count5 = 0;
        this.count4 = 0;
        this.count3 = 0;
        this.count2 = 0;
        this.count1 = 0;
        this.count5Percentage = 0;
        this.count4Percentage = 0;
        this.count3Percentage = 0;
        this.count2Percentage = 0;
        this.count1Percentage = 0;
        this.disableSubmit = false;
        this.isLoggedIn = false;
        this.ratingVerificationRequired = '';
        console.log(this.settings.customer.id);

        if (this.settings.customer && this.settings.customer.id > 0) {
          this.isLoggedIn = true;
        }
      }

      _createClass(ReviewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this94 = this;

          this.filter.page = 1;
          this.id = this.route.snapshot.paramMap.get('id');
          this.filter.product_id = this.id;
          this.form = this.fb.group({
            rating: [5, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            author: ['', this.isLoggedIn ? '' : _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            email: ['', this.isLoggedIn ? '' : _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email],
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            comment_post_ID: [this.id, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
          });
          this.route.queryParams.subscribe(function (params) {
            if (params && params.ratingVerificationRequired) {
              _this94.ratingVerificationRequired = params.ratingVerificationRequired, _this94.customerBoughtProduct = params.customerBoughtProduct;
            }
          });
          this.getReviews();
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee60() {
            var _this95 = this;

            return regeneratorRuntime.wrap(function _callee60$(_context60) {
              while (1) {
                switch (_context60.prev = _context60.next) {
                  case 0:
                    this.filter.page = this.filter.page + 1;
                    _context60.next = 3;
                    return this.api.postItem('product_reviews', this.filter).then(function (res) {
                      _this95.tempReviews = res;

                      _this95.reviews.push.apply(_this95.reviews, _this95.tempReviews);

                      event.target.complete();
                      if (!res) _this95.hasMoreItems = false;

                      for (var item in _this95.reviews) {
                        _this95.reviews[item].avatar = Object(_md5__WEBPACK_IMPORTED_MODULE_4__["md5"])(_this95.reviews[item].email);
                      }
                    }, function (err) {
                      event.target.complete();
                    });

                  case 3:
                  case "end":
                    return _context60.stop();
                }
              }
            }, _callee60, this);
          }));
        }
      }, {
        key: "getReviews",
        value: function getReviews() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee61() {
            var _this96 = this;

            return regeneratorRuntime.wrap(function _callee61$(_context61) {
              while (1) {
                switch (_context61.prev = _context61.next) {
                  case 0:
                    _context61.next = 2;
                    return this.api.postItem('product_reviews', this.filter).then(function (res) {
                      _this96.reviews = res;

                      for (var item in _this96.reviews) {
                        _this96.reviews[item].avatar = Object(_md5__WEBPACK_IMPORTED_MODULE_4__["md5"])(_this96.reviews[item].email);
                      }

                      _this96.count = _this96.reviews.length;

                      _this96.reviews.forEach(function (review) {
                        if (parseInt(review.rating) == 5) {
                          _this96.count5 = _this96.count5 + 1;
                        } else if (parseInt(review.rating) >= 4) {
                          _this96.count4 = _this96.count4 + 1;
                        } else if (parseInt(review.rating) >= 3) {
                          _this96.count3 = _this96.count3 + 1;
                        } else if (parseInt(review.rating) >= 2) {
                          _this96.count2 = _this96.count2 + 1;
                        } else if (parseInt(review.rating) == 1) {
                          _this96.count1 = _this96.count1 + 1;
                        }
                      });

                      _this96.showReviews = true;
                      _this96.count5Percentage = _this96.count5 / _this96.count * 100;
                      _this96.count4Percentage = _this96.count4 / _this96.count * 100;
                      _this96.count3Percentage = _this96.count3 / _this96.count * 100;
                      _this96.count2Percentage = _this96.count2 / _this96.count * 100;
                      _this96.count1Percentage = _this96.count1 / _this96.count * 100;
                    }, function (err) {});

                  case 2:
                  case "end":
                    return _context61.stop();
                }
              }
            }, _callee61, this);
          }));
        }
      }, {
        key: "yourRating",
        value: function yourRating(rating) {
          this.form.value.rating = rating;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee62() {
            var _this97 = this;

            return regeneratorRuntime.wrap(function _callee62$(_context62) {
              while (1) {
                switch (_context62.prev = _context62.next) {
                  case 0:
                    this.disableSubmit = true;
                    _context62.next = 3;
                    return this.api.ajaxCall('/wp-comments-post.php', this.form.value).then(function (res) {
                      _this97.disableSubmit = false;
                    }, function (err) {
                      _this97.disableSubmit = false;
                    });

                  case 3:
                  case "end":
                    return _context62.stop();
                }
              }
            }, _callee62, this);
          }));
        }
      }]);

      return ReviewPage;
    }();

    ReviewPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }];
    };

    ReviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-review',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./review.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/review/review.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./review.page.scss */
      "./src/app/review/review.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], ReviewPage);
    /***/
  },

  /***/
  "./src/app/search/search.page.scss": function srcAppSearchSearchPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: var(--ion-color-background, #f2f2f2);\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-list {\n  --background: var(--ion-color-background, #f2f2f2);\n}\n\nion-card {\n  margin: 0;\n  height: 100%;\n}\n\nion-card-header {\n  padding: 10px;\n}\n\n.search ion-card {\n  margin: 0;\n  height: 100%;\n}\n\n.search ion-card-header {\n  padding: 10px;\n}\n\n.search ion-card-content {\n  padding: 0;\n}\n\n.search ion-card-content .price {\n  padding: 0 10px 10px 10px;\n  font-size: 16px;\n  line-height: 2rem;\n  color: var(--ion-color-dark, #eb445a);\n  font-weight: 500;\n}\n\n.search ion-card-content .price .special-price {\n  padding-left: 5px;\n  font-size: 10px;\n  font-weight: 300;\n}\n\n.search ion-card-subtitle {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  font-size: small;\n}\n\n.search ion-card-title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-transform: unset;\n}\n\n.search .empty {\n  margin-top: 50px;\n  text-align: center;\n}\n\n.search .empty ion-icon {\n  font-size: 7.2em;\n}\n\n.search ion-list {\n  padding: 0;\n}\n\n.no-products h2 {\n  text-align: center;\n  font-size: 15px;\n  width: 100%;\n  margin: 30px 0;\n}\n\n.stock {\n  position: absolute;\n  top: -4px;\n  left: -6px;\n  width: 130px;\n  font-size: 8px;\n  margin: 15px;\n  margin-left: -39px;\n  transform: rotate(-45deg);\n  height: 19px;\n  box-shadow: none;\n}\n\n.offer {\n  margin-left: 5px;\n  font-size: 12px;\n  --border-radius: 25px;\n  width: 36px;\n  min-height: 36px;\n  font-weight: 600;\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  -webkit-box-shadow: none;\n  --box-shadow: none;\n}\n\n.product-list3 ion-item {\n  --border-color: var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-50, rgba(0, 0, 0, 0.2))));\n  --border-width: 0 0 0.55px;\n  --padding-start: 0px;\n  padding: 10xp;\n}\n\n.product-list3 ion-item ion-thumbnail {\n  width: 28%;\n  height: 100%;\n  padding: 10px;\n  margin: 0px;\n}\n\n.product-list3 ion-item .details {\n  align-self: flex-start;\n  width: 100%;\n}\n\n.product-list3 ion-item .details ion-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  font-size: small;\n}\n\n.product-list3 ion-item .details p {\n  margin: 0;\n}\n\n.product-list3 ion-item .details .price {\n  font-size: 16px;\n  line-height: 2rem;\n  color: var(--ion-color-dark, #eb445a);\n  font-weight: 500;\n}\n\n.product-list3 ion-item .details .price .special-price {\n  padding-left: 5px;\n  font-size: 10px;\n  font-weight: 300;\n}\n\n.product-list3 ion-item .details ion-icon {\n  font-size: x-large;\n  font-weight: 300;\n}\n\n.product-list3 ion-item .offer {\n  font-size: 8px;\n  --border-radius: 2px;\n  width: 46px;\n  min-height: 16px;\n  font-weight: 600;\n  -webkit-box-shadow: none;\n  --box-shadow: none;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL0Q6XFxsdXhlLi4uIGRlYnVnIDkgT0NUL3NyY1xcYXBwXFxzZWFyY2hcXHNlYXJjaC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksa0RBQUE7QUNGSjs7QURJQTtFQUNJLHFCQUFBO0FDREo7O0FER0E7RUFDSSxrREFBQTtBQ0FKOztBREVBO0VBQ0ksU0FBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7QUNFSjs7QURDSTtFQUNJLFNBQUE7RUFDQSxZQUFBO0FDRVI7O0FEQUk7RUFDSSxhQUFBO0FDRVI7O0FEQUk7RUFDSSxVQUFBO0FDRVI7O0FERFE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNHWjs7QURGWTtFQUVJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDR2hCOztBRENJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NSOztBRENJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUNDUjs7QURDSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNDUjs7QURBUTtFQUNJLGdCQUFBO0FDRVo7O0FEQ0k7RUFDSSxVQUFBO0FDQ1I7O0FER0k7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0FSOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVJO0VBQ0ksc0hBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQ0NSOztBREFRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0VaOztBREFRO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0FDRVo7O0FERFk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDR2hCOztBRERZO0VBQ0ksU0FBQTtBQ0doQjs7QUREWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNHaEI7O0FERmdCO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNJcEI7O0FERFk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDR2hCOztBREFRO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0VaIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFyIHtcbiAgICAvL2hlaWdodDogNDBweDtcbn1cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kLCAjZjJmMmYyKTtcbn1cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuaW9uLWxpc3Qge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQsICNmMmYyZjIpO1xufVxuaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5pb24tY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4uc2VhcmNoIHtcbiAgICBpb24tY2FyZCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgLnByaWNlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaywgI2ViNDQ1YSk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgLnNwZWNpYWwtcHJpY2Uge1xuICAgICAgICAgICAgICAgIC8vY29sb3I6ICM4Njg2ODY7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWNhcmQtc3VidGl0bGUge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDsgLy9jb2xvcjogYmxhY2s7XG4gICAgfVxuICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1bnNldDtcbiAgICB9XG4gICAgLmVtcHR5IHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDcuMmVtOyAvL2NvbG9yOiAjZWNlY2VjO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG59XG4ubm8tcHJvZHVjdHMge1xuICAgIGgyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDMwcHggMDtcbiAgICB9XG59XG4uc3RvY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC00cHg7XG4gICAgbGVmdDogLTZweDtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgbWFyZ2luOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMzlweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICBoZWlnaHQ6IDE5cHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5vZmZlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogNXB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG4ucHJvZHVjdC1saXN0MyB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tY29sb3Itc3RlcC01MCwgcmdiYSgwLCAwLCAwLCAwLjIpKSkpO1xuICAgICAgICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEweHA7XG4gICAgICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgICAgICAgd2lkdGg6IDI4JTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgfVxuICAgICAgICAuZGV0YWlscyB7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0OyAvL3BhZGRpbmc6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByaWNlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLCAjZWI0NDVhKTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIC5zcGVjaWFsLXByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm9mZmVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICB3aWR0aDogNDZweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kLCAjZjJmMmYyKTtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG5pb24tbGlzdCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQsICNmMmYyZjIpO1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc2VhcmNoIGlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc2VhcmNoIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2VhcmNoIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xufVxuLnNlYXJjaCBpb24tY2FyZC1jb250ZW50IC5wcmljZSB7XG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaywgI2ViNDQ1YSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uc2VhcmNoIGlvbi1jYXJkLWNvbnRlbnQgLnByaWNlIC5zcGVjaWFsLXByaWNlIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5zZWFyY2ggaW9uLWNhcmQtc3VidGl0bGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cbi5zZWFyY2ggaW9uLWNhcmQtdGl0bGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgdGV4dC10cmFuc2Zvcm06IHVuc2V0O1xufVxuLnNlYXJjaCAuZW1wdHkge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2VhcmNoIC5lbXB0eSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNy4yZW07XG59XG4uc2VhcmNoIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLm5vLXByb2R1Y3RzIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDMwcHggMDtcbn1cblxuLnN0b2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIGxlZnQ6IC02cHg7XG4gIHdpZHRoOiAxMzBweDtcbiAgZm9udC1zaXplOiA4cHg7XG4gIG1hcmdpbjogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC0zOXB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIGhlaWdodDogMTlweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLm9mZmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHdpZHRoOiAzNnB4O1xuICBtaW4taGVpZ2h0OiAzNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiA1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4ucHJvZHVjdC1saXN0MyBpb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTUwLCByZ2JhKDAsIDAsIDAsIDAuMikpKSk7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgcGFkZGluZzogMTB4cDtcbn1cbi5wcm9kdWN0LWxpc3QzIGlvbi1pdGVtIGlvbi10aHVtYm5haWwge1xuICB3aWR0aDogMjglO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLnByb2R1Y3QtbGlzdDMgaW9uLWl0ZW0gLmRldGFpbHMge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9kdWN0LWxpc3QzIGlvbi1pdGVtIC5kZXRhaWxzIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuLnByb2R1Y3QtbGlzdDMgaW9uLWl0ZW0gLmRldGFpbHMgcCB7XG4gIG1hcmdpbjogMDtcbn1cbi5wcm9kdWN0LWxpc3QzIGlvbi1pdGVtIC5kZXRhaWxzIC5wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaywgI2ViNDQ1YSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ucHJvZHVjdC1saXN0MyBpb24taXRlbSAuZGV0YWlscyAucHJpY2UgLnNwZWNpYWwtcHJpY2Uge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnByb2R1Y3QtbGlzdDMgaW9uLWl0ZW0gLmRldGFpbHMgaW9uLWljb24ge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ucHJvZHVjdC1saXN0MyBpb24taXRlbSAub2ZmZXIge1xuICBmb250LXNpemU6IDhweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAycHg7XG4gIHdpZHRoOiA0NnB4O1xuICBtaW4taGVpZ2h0OiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luOiAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/search/search.page.ts": function srcAppSearchSearchPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPage", function () {
      return SearchPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../data */
    "./src/app/data.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _data_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../data/product */
    "./src/app/data/product.ts");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../config */
    "./src/app/config.ts"); //import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


    var SearchPage = /*#__PURE__*/function () {
      function SearchPage(config, alertController, api, data, router, product, settings, loadingController, navCtrl, route
      /*, private barcodeScanner: BarcodeScanner*/
      ) {
        _classCallCheck(this, SearchPage);

        this.config = config;
        this.alertController = alertController;
        this.api = api;
        this.data = data;
        this.router = router;
        this.product = product;
        this.settings = settings;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.products = [];
        this.tempProducts = [];
        this.filter = {};
        this.hasMoreItems = true;
        this.searchInput = "";
        this.loading = false;
        this.cart = {};
        this.options = {};
        this.lan = {};
        this.gridView = true;
        this.filter.page = 1;
        if (this.settings.colWidthProducts == 4) this.filter.per_page = 15;
        this.filter.status = 'publish';
      }

      _createClass(SearchPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loadData",
        value: function loadData(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee63() {
            var _this98 = this;

            return regeneratorRuntime.wrap(function _callee63$(_context63) {
              while (1) {
                switch (_context63.prev = _context63.next) {
                  case 0:
                    this.filter.page = this.filter.page + 1;
                    this.api.postItem('products', this.filter).then(function (res) {
                      _this98.tempProducts = res;

                      _this98.products.push.apply(_this98.products, _this98.tempProducts);

                      event.target.complete();
                      if (_this98.tempProducts.length == 0) _this98.hasMoreItems = false;
                    }, function (err) {
                      event.target.complete();
                    });
                    console.log('Done');

                  case 3:
                  case "end":
                    return _context63.stop();
                }
              }
            }, _callee63, this);
          }));
        }
      }, {
        key: "onInput",
        value: function onInput() {
          this.loading = true;
          this.hasMoreItems = true;
          this.filter.page = 1;
          delete this.filter.sku;
          this.filter.q = this.searchInput;

          if (this.searchInput.length) {
            this.getProducts();
          } else {
            this.products = [];
            this.loading = false;
          }
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee64() {
            var _this99 = this;

            return regeneratorRuntime.wrap(function _callee64$(_context64) {
              while (1) {
                switch (_context64.prev = _context64.next) {
                  case 0:
                    this.api.postItem('products', this.filter).then(function (res) {
                      _this99.products = res;
                      _this99.loading = false;
                    }, function (err) {
                      console.log(err);
                    });

                  case 1:
                  case "end":
                    return _context64.stop();
                }
              }
            }, _callee64, this);
          }));
        }
      }, {
        key: "getProduct",
        value: function getProduct(product) {
          this.product.product = product;
          this.navCtrl.navigateForward('/tabs/search/product/' + product.id);
        }
      }, {
        key: "scanBarcode",
        value: function scanBarcode() {
          /*this.barcodeScanner.scan().then(barcodeData => {
              if(barcodeData.text != '') {
                  this.loading = true;
                  this.hasMoreItems = true;
                  this.filter.page = 1;
                  delete this.filter.q;
                  this.filter.sku = barcodeData.text;
                  this.getProducts();
              }
          }).catch(err => {
              console.log('Error', err);
          });*/
        }
      }, {
        key: "addToCart",
        value: function addToCart(product) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee65() {
            var _this100 = this;

            return regeneratorRuntime.wrap(function _callee65$(_context65) {
              while (1) {
                switch (_context65.prev = _context65.next) {
                  case 0:
                    if (!(product.manage_stock && product.stock_quantity < this.data.cart[product.id])) {
                      _context65.next = 4;
                      break;
                    }

                    this.presentAlert(this.lan.message, this.lan.lowQuantity);
                    _context65.next = 13;
                    break;

                  case 4:
                    if (!(product.type == 'variable')) {
                      _context65.next = 8;
                      break;
                    }

                    this.getProduct(product);
                    _context65.next = 13;
                    break;

                  case 8:
                    if (!this.setVariations(product)) {
                      _context65.next = 13;
                      break;
                    }

                    if (this.data.cart[product.id] != undefined) this.data.cart[product.id] += 1;else this.data.cart[product.id] = 1;
                    this.options.product_id = product.id;
                    _context65.next = 13;
                    return this.api.postItem('add_to_cart', this.options).then(function (res) {
                      _this100.cart = res;

                      _this100.data.updateCart(_this100.cart.cart);
                    }, function (err) {
                      console.log(err);
                    });

                  case 13:
                  case "end":
                    return _context65.stop();
                }
              }
            }, _callee65, this);
          }));
        }
      }, {
        key: "setVariations",
        value: function setVariations(product) {
          var _this101 = this;

          if (product.variationId) {
            this.options.variation_id = product.variationId;
          }

          product.attributes.forEach(function (item) {
            if (item.selected) {
              _this101.options['variation[attribute_pa_' + item.name + ']'] = item.selected;
            }
          });

          for (var i = 0; i < product.attributes.length; i++) {
            if (product.type == 'variable' && product.attributes[i].variation && product.attributes[i].selected == undefined) {
              this.presentAlert(this.lan.options, this.lan.select + ' ' + product.attributes[i].name + ' ' + this.lan.option);
              return false;
            }
          }

          return true;
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee66() {
            var alert;
            return regeneratorRuntime.wrap(function _callee66$(_context66) {
              while (1) {
                switch (_context66.prev = _context66.next) {
                  case 0:
                    _context66.next = 2;
                    return this.alertController.create({
                      header: header,
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context66.sent;
                    _context66.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context66.stop();
                }
              }
            }, _callee66, this);
          }));
        }
      }, {
        key: "updateToCart",
        value: function updateToCart(product) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee67() {
            var _this102 = this;

            var params, key;
            return regeneratorRuntime.wrap(function _callee67$(_context67) {
              while (1) {
                switch (_context67.prev = _context67.next) {
                  case 0:
                    params = {};

                    if (!(product.manage_stock && product.stock_quantity < this.data.cart[product.id])) {
                      _context67.next = 5;
                      break;
                    }

                    this.presentAlert(this.lan.message, this.lan.lowQuantity);
                    _context67.next = 10;
                    break;

                  case 5:
                    for (key in this.data.cartItem) {
                      if (this.data.cartItem[key].product_id == product.id) {
                        if (this.data.cartItem[key].quantity != undefined && this.data.cartItem[key].quantity == 0) {
                          this.data.cartItem[key].quantity = 0;
                        } else {
                          this.data.cartItem[key].quantity += 1;
                        }

                        ;

                        if (this.data.cart[product.id] != undefined && this.data.cart[product.id] == 0) {
                          this.data.cart[product.id] = 0;
                        } else {
                          this.data.cart[product.id] += 1;
                        }

                        ;
                        params.key = key;
                        params.quantity = this.data.cartItem[key].quantity;
                      }
                    }

                    params.update_cart = 'Update Cart';
                    params._wpnonce = this.data.cartNonce;
                    _context67.next = 10;
                    return this.api.postItem('update-cart-item-qty', params).then(function (res) {
                      _this102.cart = res;

                      _this102.data.updateCart(_this102.cart.cart_contents);
                    }, function (err) {
                      console.log(err);
                    });

                  case 10:
                  case "end":
                    return _context67.stop();
                }
              }
            }, _callee67, this);
          }));
        }
      }, {
        key: "deleteFromCart",
        value: function deleteFromCart(product) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee68() {
            var _this103 = this;

            var params, key;
            return regeneratorRuntime.wrap(function _callee68$(_context68) {
              while (1) {
                switch (_context68.prev = _context68.next) {
                  case 0:
                    params = {};

                    for (key in this.data.cartItem) {
                      if (this.data.cartItem[key].product_id == product.id) {
                        if (this.data.cartItem[key].quantity != undefined && this.data.cartItem[key].quantity == 0) {
                          this.data.cartItem[key].quantity = 0;
                        } else {
                          this.data.cartItem[key].quantity -= 1;
                        }

                        ;

                        if (this.data.cart[product.id] != undefined && this.data.cart[product.id] == 0) {
                          this.data.cart[product.id] = 0;
                        } else {
                          this.data.cart[product.id] -= 1;
                        }

                        ;
                        params.key = key;
                        params.quantity = this.data.cartItem[key].quantity;
                      }
                    }

                    params.update_cart = 'Update Cart';
                    params._wpnonce = this.data.cartNonce;
                    _context68.next = 6;
                    return this.api.postItem('update-cart-item-qty', params).then(function (res) {
                      console.log(res);
                      _this103.cart = res;

                      _this103.data.updateCart(_this103.cart.cart_contents);
                    }, function (err) {
                      console.log(err);
                    });

                  case 6:
                  case "end":
                    return _context68.stop();
                }
              }
            }, _callee68, this);
          }));
        }
      }]);

      return SearchPage;
    }();

    SearchPage.ctorParameters = function () {
      return [{
        type: _config__WEBPACK_IMPORTED_MODULE_8__["Config"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_5__["Data"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        /*, private barcodeScanner: BarcodeScanner*/

      }];
    };

    SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.page.scss */
      "./src/app/search/search.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config__WEBPACK_IMPORTED_MODULE_8__["Config"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    /*, private barcodeScanner: BarcodeScanner*/
    ])], SearchPage);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.module.ts": function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tabs.router.module */
    "./src/app/tabs/tabs.router.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../pipes/pipe.module */
    "./src/app/pipes/pipe.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");
    /* harmony import */


    var _home_home_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../home/home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _cart_cart_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../cart/cart.page */
    "./src/app/cart/cart.page.ts");
    /* harmony import */


    var _search_search_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./../search/search.page */
    "./src/app/search/search.page.ts");
    /* harmony import */


    var _categories_categories_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./../categories/categories.page */
    "./src/app/categories/categories.page.ts");
    /* harmony import */


    var _products_products_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./../products/products.page */
    "./src/app/products/products.page.ts");
    /* harmony import */


    var _product_product_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./../product/product.page */
    "./src/app/product/product.page.ts");
    /* harmony import */


    var _review_review_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./../review/review.page */
    "./src/app/review/review.page.ts");
    /* harmony import */


    var _post_post_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./../post/post.page */
    "./src/app/post/post.page.ts");
    /* harmony import */


    var _contact_contact_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./../contact/contact.page */
    "./src/app/contact/contact.page.ts");
    /* harmony import */


    var _account_account_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./../account/account.page */
    "./src/app/account/account.page.ts");
    /* harmony import */


    var _checkout_address_address_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./../checkout/address/address.page */
    "./src/app/checkout/address/address.page.ts");
    /* harmony import */


    var _checkout_checkout_checkout_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./../checkout/checkout/checkout.page */
    "./src/app/checkout/checkout/checkout.page.ts");
    /* harmony import */


    var _account_address_address_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./../account/address/address.page */
    "./src/app/account/address/address.page.ts");
    /* harmony import */


    var _account_blog_blog_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./../account/blog/blog.page */
    "./src/app/account/blog/blog.page.ts");
    /* harmony import */


    var _account_blogs_blogs_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./../account/blogs/blogs.page */
    "./src/app/account/blogs/blogs.page.ts");
    /* harmony import */


    var _account_edit_address_edit_address_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./../account/edit-address/edit-address.page */
    "./src/app/account/edit-address/edit-address.page.ts");
    /* harmony import */


    var _account_forgotten_forgotten_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./../account/forgotten/forgotten.page */
    "./src/app/account/forgotten/forgotten.page.ts");
    /* harmony import */


    var _account_login_login_page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./../account/login/login.page */
    "./src/app/account/login/login.page.ts");
    /* harmony import */


    var _account_map_map_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./../account/map/map.page */
    "./src/app/account/map/map.page.ts");
    /* harmony import */


    var _account_order_order_page__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./../account/order/order.page */
    "./src/app/account/order/order.page.ts");
    /* harmony import */


    var _account_orders_orders_page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./../account/orders/orders.page */
    "./src/app/account/orders/orders.page.ts");
    /* harmony import */


    var _account_points_points_page__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./../account/points/points.page */
    "./src/app/account/points/points.page.ts");
    /* harmony import */


    var _account_register_register_page__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./../account/register/register.page */
    "./src/app/account/register/register.page.ts");
    /* harmony import */


    var _account_setting_setting_page__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./../account/setting/setting.page */
    "./src/app/account/setting/setting.page.ts");
    /* harmony import */


    var _account_currencies_currencies_page__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./../account/currencies/currencies.page */
    "./src/app/account/currencies/currencies.page.ts");
    /* harmony import */


    var _account_wallet_wallet_page__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./../account/wallet/wallet.page */
    "./src/app/account/wallet/wallet.page.ts");
    /* harmony import */


    var _account_wishlist_wishlist_page__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./../account/wishlist/wishlist.page */
    "./src/app/account/wishlist/wishlist.page.ts");
    /* harmony import */


    var _vendor_edit_order_edit_order_page__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./../vendor/edit-order/edit-order.page */
    "./src/app/vendor/edit-order/edit-order.page.ts");
    /* harmony import */


    var _vendor_edit_product_edit_product_page__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./../vendor/edit-product/edit-product.page */
    "./src/app/vendor/edit-product/edit-product.page.ts");
    /* harmony import */


    var _vendor_edit_variation_edit_variation_page__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./../vendor/edit-variation/edit-variation.page */
    "./src/app/vendor/edit-variation/edit-variation.page.ts");
    /* harmony import */


    var _vendor_order_list_order_list_page__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./../vendor/order-list/order-list.page */
    "./src/app/vendor/order-list/order-list.page.ts");
    /* harmony import */


    var _vendor_order_note_list_order_note_list_page__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./../vendor/order-note-list/order-note-list.page */
    "./src/app/vendor/order-note-list/order-note-list.page.ts");
    /* harmony import */


    var _vendor_product_list_product_list_page__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./../vendor/product-list/product-list.page */
    "./src/app/vendor/product-list/product-list.page.ts");
    /* harmony import */


    var _vendor_vendor_info_vendor_info_page__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./../vendor/vendor-info/vendor-info.page */
    "./src/app/vendor/vendor-info/vendor-info.page.ts");
    /* harmony import */


    var _vendor_vendor_list_vendor_list_page__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./../vendor/vendor-list/vendor-list.page */
    "./src/app/vendor/vendor-list/vendor-list.page.ts");
    /* harmony import */


    var _vendor_product_add_category_category_page__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./../vendor/product-add/category/category.page */
    "./src/app/vendor/product-add/category/category.page.ts");
    /* harmony import */


    var _vendor_product_add_details_details_page__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./../vendor/product-add/details/details.page */
    "./src/app/vendor/product-add/details/details.page.ts");
    /* harmony import */


    var _vendor_product_add_photos_photos_page__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./../vendor/product-add/photos/photos.page */
    "./src/app/vendor/product-add/photos/photos.page.ts");
    /* harmony import */


    var _vendor_product_add_subcategory_subcategory_page__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./../vendor/product-add/subcategory/subcategory.page */
    "./src/app/vendor/product-add/subcategory/subcategory.page.ts");

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__["KeysPipeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"], _home_home_page__WEBPACK_IMPORTED_MODULE_9__["HomePage"], _cart_cart_page__WEBPACK_IMPORTED_MODULE_10__["CartPage"], _categories_categories_page__WEBPACK_IMPORTED_MODULE_12__["CategoriesPage"], _search_search_page__WEBPACK_IMPORTED_MODULE_11__["SearchPage"], _products_products_page__WEBPACK_IMPORTED_MODULE_13__["ProductsPage"], _product_product_page__WEBPACK_IMPORTED_MODULE_14__["ProductPage"], _review_review_page__WEBPACK_IMPORTED_MODULE_15__["ReviewPage"], _post_post_page__WEBPACK_IMPORTED_MODULE_16__["PostPage"], _contact_contact_page__WEBPACK_IMPORTED_MODULE_17__["ContactPage"], _account_account_page__WEBPACK_IMPORTED_MODULE_18__["AccountPage"], _checkout_address_address_page__WEBPACK_IMPORTED_MODULE_19__["CheckoutAddressPage"], _checkout_checkout_checkout_page__WEBPACK_IMPORTED_MODULE_20__["CheckoutPage"], _account_address_address_page__WEBPACK_IMPORTED_MODULE_21__["AddressPage"], _account_blog_blog_page__WEBPACK_IMPORTED_MODULE_22__["BlogPage"], _account_blogs_blogs_page__WEBPACK_IMPORTED_MODULE_23__["BlogsPage"], _account_edit_address_edit_address_page__WEBPACK_IMPORTED_MODULE_24__["EditAddressPage"], _account_forgotten_forgotten_page__WEBPACK_IMPORTED_MODULE_25__["ForgottenPage"], _account_login_login_page__WEBPACK_IMPORTED_MODULE_26__["LoginPage"], _account_map_map_page__WEBPACK_IMPORTED_MODULE_27__["MapPage"], _account_order_order_page__WEBPACK_IMPORTED_MODULE_28__["OrderPage"], _account_orders_orders_page__WEBPACK_IMPORTED_MODULE_29__["OrdersPage"], _account_points_points_page__WEBPACK_IMPORTED_MODULE_30__["PointsPage"], _account_register_register_page__WEBPACK_IMPORTED_MODULE_31__["RegisterPage"], _account_setting_setting_page__WEBPACK_IMPORTED_MODULE_32__["SettingPage"], _account_currencies_currencies_page__WEBPACK_IMPORTED_MODULE_33__["CurrenciesPage"], _account_wallet_wallet_page__WEBPACK_IMPORTED_MODULE_34__["WalletPage"], _account_wishlist_wishlist_page__WEBPACK_IMPORTED_MODULE_35__["WishlistPage"], // Vendors
      _vendor_edit_order_edit_order_page__WEBPACK_IMPORTED_MODULE_36__["EditOrderPage"], _vendor_edit_product_edit_product_page__WEBPACK_IMPORTED_MODULE_37__["EditProductPage"], _vendor_edit_variation_edit_variation_page__WEBPACK_IMPORTED_MODULE_38__["EditVariationPage"], _vendor_order_list_order_list_page__WEBPACK_IMPORTED_MODULE_39__["OrderListPage"], _vendor_order_note_list_order_note_list_page__WEBPACK_IMPORTED_MODULE_40__["OrderNoteListPage"], _vendor_product_list_product_list_page__WEBPACK_IMPORTED_MODULE_41__["ProductListPage"], _vendor_vendor_info_vendor_info_page__WEBPACK_IMPORTED_MODULE_42__["VendorInfoPage"], _vendor_vendor_list_vendor_list_page__WEBPACK_IMPORTED_MODULE_43__["VendorListPage"], _vendor_product_add_category_category_page__WEBPACK_IMPORTED_MODULE_44__["CategoryPage"], _vendor_product_add_details_details_page__WEBPACK_IMPORTED_MODULE_45__["DetailsPage"], _vendor_product_add_photos_photos_page__WEBPACK_IMPORTED_MODULE_46__["PhotosPage"], _vendor_product_add_subcategory_subcategory_page__WEBPACK_IMPORTED_MODULE_47__["SubcategoryPage"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.scss": function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-badge {\n  min-width: 18px;\n  font-size: 12px;\n  left: calc(50% + 3px);\n}\n\nion-tab-bar {\n  --border: 0;\n}\n\nion-label {\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif !important;\n}\n\nion-tabs .svg {\n  fill: grey;\n  stroke: #1F51FF !important;\n  stroke-width: 15;\n  width: 20px;\n}\n\nion-tabs .tab-selected .svg {\n  fill: #1F51FF;\n  stroke: transparent !important;\n  stroke-width: 0;\n  width: 20px;\n}\n\nion-tabs .tab-selected ion-label {\n  color: #1F51FF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9EOlxcbHV4ZS4uLiBkZWJ1ZyA5IE9DVC9zcmNcXGFwcFxcdGFic1xcdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0FDRUo7O0FEQUE7RUFDQyw4REFBQTtBQ0dEOztBRENBO0VBQ0ksVUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDRUo7O0FER0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWRnZSB7XG4gICAgbWluLXdpZHRoOiAxOHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsZWZ0OiBjYWxjKDUwJSArIDNweCk7XG59XG5pb24tdGFiLWJhciB7XG4gICAgLS1ib3JkZXI6IDA7XG59XG5pb24tbGFiZWx7XG5cdGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuaW9uLXRhYnMge1xuLnN2ZyB7XG4gICAgZmlsbDogZ3JleTtcbiAgICBzdHJva2U6ICMxRjUxRkYgIWltcG9ydGFudDtcbiAgICBzdHJva2Utd2lkdGg6IDE1O1xuICAgIHdpZHRoOiAyMHB4O1xufVxufVxuXG5pb24tdGFicyAudGFiLXNlbGVjdGVkIHtcbi5zdmcge1xuICAgIGZpbGw6ICMxRjUxRkY7XG4gICAgc3Ryb2tlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIHN0cm9rZS13aWR0aDogMDtcbiAgICB3aWR0aDogMjBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICBjb2xvcjogIzFGNTFGRjtcbn1cbn1cblxuXG5cbiIsImlvbi1iYWRnZSB7XG4gIG1pbi13aWR0aDogMThweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZWZ0OiBjYWxjKDUwJSArIDNweCk7XG59XG5cbmlvbi10YWItYmFyIHtcbiAgLS1ib3JkZXI6IDA7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuaW9uLXRhYnMgLnN2ZyB7XG4gIGZpbGw6IGdyZXk7XG4gIHN0cm9rZTogIzFGNTFGRiAhaW1wb3J0YW50O1xuICBzdHJva2Utd2lkdGg6IDE1O1xuICB3aWR0aDogMjBweDtcbn1cblxuaW9uLXRhYnMgLnRhYi1zZWxlY3RlZCAuc3ZnIHtcbiAgZmlsbDogIzFGNTFGRjtcbiAgc3Ryb2tlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBzdHJva2Utd2lkdGg6IDA7XG4gIHdpZHRoOiAyMHB4O1xufVxuaW9uLXRhYnMgLnRhYi1zZWxlY3RlZCBpb24tbGFiZWwge1xuICBjb2xvcjogIzFGNTFGRjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.ts": function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
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


    var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data */
    "./src/app/data.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data/settings */
    "./src/app/data/settings.ts");

    var TabsPage = function TabsPage(data, settings) {
      _classCallCheck(this, TabsPage);

      this.data = data;
      this.settings = settings;
    };

    TabsPage.ctorParameters = function () {
      return [{
        type: _data__WEBPACK_IMPORTED_MODULE_2__["Data"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"]
      }];
    };

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/tabs/tabs.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data__WEBPACK_IMPORTED_MODULE_2__["Data"], _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"]])], TabsPage);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.router.module.ts": function srcAppTabsTabsRouterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");
    /* harmony import */


    var _home_home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../home/home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _cart_cart_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../cart/cart.page */
    "./src/app/cart/cart.page.ts");
    /* harmony import */


    var _categories_categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../categories/categories.page */
    "./src/app/categories/categories.page.ts");
    /* harmony import */


    var _search_search_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../search/search.page */
    "./src/app/search/search.page.ts");
    /* harmony import */


    var _products_products_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../products/products.page */
    "./src/app/products/products.page.ts");
    /* harmony import */


    var _product_product_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../product/product.page */
    "./src/app/product/product.page.ts");
    /* harmony import */


    var _review_review_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../review/review.page */
    "./src/app/review/review.page.ts");
    /* harmony import */


    var _post_post_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./../post/post.page */
    "./src/app/post/post.page.ts");
    /* harmony import */


    var _account_account_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./../account/account.page */
    "./src/app/account/account.page.ts");
    /* harmony import */


    var _checkout_address_address_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./../checkout/address/address.page */
    "./src/app/checkout/address/address.page.ts");
    /* harmony import */


    var _checkout_checkout_checkout_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./../checkout/checkout/checkout.page */
    "./src/app/checkout/checkout/checkout.page.ts");
    /* harmony import */


    var _account_address_address_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./../account/address/address.page */
    "./src/app/account/address/address.page.ts");
    /* harmony import */


    var _account_blog_blog_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./../account/blog/blog.page */
    "./src/app/account/blog/blog.page.ts");
    /* harmony import */


    var _account_blogs_blogs_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./../account/blogs/blogs.page */
    "./src/app/account/blogs/blogs.page.ts");
    /* harmony import */


    var _account_edit_address_edit_address_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./../account/edit-address/edit-address.page */
    "./src/app/account/edit-address/edit-address.page.ts");
    /* harmony import */


    var _account_forgotten_forgotten_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./../account/forgotten/forgotten.page */
    "./src/app/account/forgotten/forgotten.page.ts");
    /* harmony import */


    var _account_login_login_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./../account/login/login.page */
    "./src/app/account/login/login.page.ts");
    /* harmony import */


    var _account_map_map_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./../account/map/map.page */
    "./src/app/account/map/map.page.ts");
    /* harmony import */


    var _account_order_order_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./../account/order/order.page */
    "./src/app/account/order/order.page.ts");
    /* harmony import */


    var _account_orders_orders_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./../account/orders/orders.page */
    "./src/app/account/orders/orders.page.ts");
    /* harmony import */


    var _account_points_points_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./../account/points/points.page */
    "./src/app/account/points/points.page.ts");
    /* harmony import */


    var _account_register_register_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./../account/register/register.page */
    "./src/app/account/register/register.page.ts");
    /* harmony import */


    var _account_setting_setting_page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./../account/setting/setting.page */
    "./src/app/account/setting/setting.page.ts");
    /* harmony import */


    var _account_currencies_currencies_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./../account/currencies/currencies.page */
    "./src/app/account/currencies/currencies.page.ts");
    /* harmony import */


    var _account_wallet_wallet_page__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./../account/wallet/wallet.page */
    "./src/app/account/wallet/wallet.page.ts");
    /* harmony import */


    var _account_wishlist_wishlist_page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./../account/wishlist/wishlist.page */
    "./src/app/account/wishlist/wishlist.page.ts");
    /* harmony import */


    var _vendor_edit_order_edit_order_page__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./../vendor/edit-order/edit-order.page */
    "./src/app/vendor/edit-order/edit-order.page.ts");
    /* harmony import */


    var _vendor_edit_product_edit_product_page__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./../vendor/edit-product/edit-product.page */
    "./src/app/vendor/edit-product/edit-product.page.ts");
    /* harmony import */


    var _vendor_edit_variation_edit_variation_page__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./../vendor/edit-variation/edit-variation.page */
    "./src/app/vendor/edit-variation/edit-variation.page.ts");
    /* harmony import */


    var _vendor_order_list_order_list_page__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./../vendor/order-list/order-list.page */
    "./src/app/vendor/order-list/order-list.page.ts");
    /* harmony import */


    var _vendor_product_list_product_list_page__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./../vendor/product-list/product-list.page */
    "./src/app/vendor/product-list/product-list.page.ts");
    /* harmony import */


    var _vendor_vendor_info_vendor_info_page__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./../vendor/vendor-info/vendor-info.page */
    "./src/app/vendor/vendor-info/vendor-info.page.ts");
    /* harmony import */


    var _vendor_vendor_list_vendor_list_page__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./../vendor/vendor-list/vendor-list.page */
    "./src/app/vendor/vendor-list/vendor-list.page.ts");
    /* harmony import */


    var _vendor_product_add_category_category_page__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./../vendor/product-add/category/category.page */
    "./src/app/vendor/product-add/category/category.page.ts");
    /* harmony import */


    var _vendor_product_add_details_details_page__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./../vendor/product-add/details/details.page */
    "./src/app/vendor/product-add/details/details.page.ts");
    /* harmony import */


    var _vendor_product_add_photos_photos_page__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./../vendor/product-add/photos/photos.page */
    "./src/app/vendor/product-add/photos/photos.page.ts");
    /* harmony import */


    var _vendor_product_add_subcategory_subcategory_page__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./../vendor/product-add/subcategory/subcategory.page */
    "./src/app/vendor/product-add/subcategory/subcategory.page.ts"); //import { ContactPage } from './../contact/contact.page';
    //Vendor


    var routes = [{
      path: 'tabs',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'home',
        children: [{
          path: '',
          component: _home_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"]
        }, {
          path: 'products/:id',
          children: [{
            path: '',
            component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
          }, {
            path: 'product/:id',
            children: [{
              path: '',
              component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
            }, {
              path: 'review/:id',
              component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
            }]
          }]
        }, {
          path: 'product/:id',
          children: [{
            path: '',
            component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
          }, {
            path: 'review/:id',
            component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
          }]
        }, {
          path: 'vendor-products',
          children: [{
            path: '',
            component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
          }, {
            path: 'product/:id',
            children: [{
              path: '',
              component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
            }, {
              path: 'review/:id',
              component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
            }]
          }]
        }, {
          path: 'post/:id',
          component: _post_post_page__WEBPACK_IMPORTED_MODULE_11__["PostPage"]
        }]
      }, {
        path: 'categories',
        children: [{
          path: '',
          component: _categories_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]
        }, {
          path: 'products/:id',
          children: [{
            path: '',
            component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
          }, {
            path: 'product/:id',
            children: [{
              path: '',
              component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
            }, {
              path: 'review/:id',
              component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
            }]
          }]
        }, {
          path: 'vendor-products',
          children: [{
            path: '',
            component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
          }, {
            path: 'product/:id',
            children: [{
              path: '',
              component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
            }, {
              path: 'review/:id',
              component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
            }]
          }]
        }]
      }, {
        path: 'search',
        children: [{
          path: '',
          component: _search_search_page__WEBPACK_IMPORTED_MODULE_7__["SearchPage"]
        }, {
          path: 'product/:id',
          children: [{
            path: '',
            component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
          }, {
            path: 'review/:id',
            component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
          }]
        }, {
          path: 'vendor-products',
          children: [{
            path: '',
            component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
          }, {
            path: 'product/:id',
            children: [{
              path: '',
              component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
            }, {
              path: 'review/:id',
              component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
            }]
          }]
        }]
      }, {
        path: 'cart',
        children: [{
          path: '',
          component: _cart_cart_page__WEBPACK_IMPORTED_MODULE_5__["CartPage"]
        }, {
          path: 'address',
          component: _checkout_address_address_page__WEBPACK_IMPORTED_MODULE_13__["CheckoutAddressPage"]
        }, {
          path: 'checkout',
          component: _checkout_checkout_checkout_page__WEBPACK_IMPORTED_MODULE_14__["CheckoutPage"]
        }, {
          path: 'product/:id',
          children: [{
            path: '',
            component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
          }, {
            path: 'review/:id',
            component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
          }]
        }]
      }, {
        path: 'account',
        children: [{
          path: '',
          component: _account_account_page__WEBPACK_IMPORTED_MODULE_12__["AccountPage"]
        }, {
          path: 'address',
          children: [{
            path: '',
            component: _account_address_address_page__WEBPACK_IMPORTED_MODULE_15__["AddressPage"]
          }, {
            path: 'edit-address',
            component: _account_edit_address_edit_address_page__WEBPACK_IMPORTED_MODULE_18__["EditAddressPage"]
          }]
        }, {
          path: 'register',
          component: _account_register_register_page__WEBPACK_IMPORTED_MODULE_25__["RegisterPage"]
        }, {
          path: 'points',
          component: _account_points_points_page__WEBPACK_IMPORTED_MODULE_24__["PointsPage"]
        }, {
          path: 'setting',
          component: _account_setting_setting_page__WEBPACK_IMPORTED_MODULE_26__["SettingPage"]
        }, {
          path: 'currencies',
          component: _account_currencies_currencies_page__WEBPACK_IMPORTED_MODULE_27__["CurrenciesPage"]
        }, {
          path: 'wallet',
          children: [{
            path: '',
            component: _account_wallet_wallet_page__WEBPACK_IMPORTED_MODULE_28__["WalletPage"]
          }, {
            path: 'cart',
            component: _cart_cart_page__WEBPACK_IMPORTED_MODULE_5__["CartPage"]
          }]
        }, {
          path: 'post/:id',
          component: _post_post_page__WEBPACK_IMPORTED_MODULE_11__["PostPage"]
        }, {
          path: 'map',
          component: _account_map_map_page__WEBPACK_IMPORTED_MODULE_21__["MapPage"]
        }, {
          path: 'orders',
          children: [{
            path: '',
            component: _account_orders_orders_page__WEBPACK_IMPORTED_MODULE_23__["OrdersPage"]
          }, {
            path: 'order/:id',
            component: _account_order_order_page__WEBPACK_IMPORTED_MODULE_22__["OrderPage"]
          }]
        }, {
          path: 'login',
          children: [{
            path: '',
            component: _account_login_login_page__WEBPACK_IMPORTED_MODULE_20__["LoginPage"]
          }, {
            path: 'forgotten',
            component: _account_forgotten_forgotten_page__WEBPACK_IMPORTED_MODULE_19__["ForgottenPage"]
          }]
        }, {
          path: 'wishlist',
          children: [{
            path: '',
            component: _account_wishlist_wishlist_page__WEBPACK_IMPORTED_MODULE_29__["WishlistPage"]
          }, {
            path: 'product/:id',
            children: [{
              path: '',
              component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
            }, {
              path: 'review/:id',
              component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
            }]
          }]
        }, {
          path: 'blogs',
          children: [{
            path: '',
            component: _account_blogs_blogs_page__WEBPACK_IMPORTED_MODULE_17__["BlogsPage"]
          }, {
            path: 'blog/:id',
            component: _account_blog_blog_page__WEBPACK_IMPORTED_MODULE_16__["BlogPage"]
          }]
        }, {
          path: 'vendor-orders',
          children: [{
            path: '',
            component: _vendor_order_list_order_list_page__WEBPACK_IMPORTED_MODULE_33__["OrderListPage"]
          }, {
            path: 'edit-order/:id',
            component: _vendor_edit_order_edit_order_page__WEBPACK_IMPORTED_MODULE_30__["EditOrderPage"]
          }, {
            path: 'view-order/:id',
            component: _account_order_order_page__WEBPACK_IMPORTED_MODULE_22__["OrderPage"]
          }]
        }, {
          path: 'vendor-products',
          children: [{
            path: '',
            component: _vendor_product_list_product_list_page__WEBPACK_IMPORTED_MODULE_34__["ProductListPage"]
          }, {
            path: 'edit-product/:id',
            children: [{
              path: '',
              component: _vendor_edit_product_edit_product_page__WEBPACK_IMPORTED_MODULE_31__["EditProductPage"]
            }, {
              path: 'edit-variation-product/:id',
              component: _vendor_edit_variation_edit_variation_page__WEBPACK_IMPORTED_MODULE_32__["EditVariationPage"]
            }]
          }, {
            path: 'view-product/:id',
            component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
          }]
        }, {
          path: 'add-products',
          children: [{
            path: '',
            component: _vendor_product_add_category_category_page__WEBPACK_IMPORTED_MODULE_37__["CategoryPage"]
          }, {
            path: 'subcategory/:id',
            component: _vendor_product_add_subcategory_subcategory_page__WEBPACK_IMPORTED_MODULE_40__["SubcategoryPage"]
          }, {
            path: 'details/:id',
            children: [{
              path: '',
              component: _vendor_product_add_details_details_page__WEBPACK_IMPORTED_MODULE_38__["DetailsPage"]
            }, {
              path: 'photos',
              component: _vendor_product_add_photos_photos_page__WEBPACK_IMPORTED_MODULE_39__["PhotosPage"]
            }]
          }]
        }]
      }, {
        path: 'vendor',
        children: [{
          path: '',
          component: _vendor_vendor_list_vendor_list_page__WEBPACK_IMPORTED_MODULE_36__["VendorListPage"]
        }, {
          path: 'vendor-info/:id',
          component: _vendor_vendor_info_vendor_info_page__WEBPACK_IMPORTED_MODULE_35__["VendorInfoPage"]
        }, {
          path: 'products',
          children: [{
            path: '',
            component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
          }, {
            path: 'product/:id',
            children: [{
              path: '',
              component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
            }, {
              path: 'review/:id',
              component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
            }]
          }]
        }, {
          path: 'vendor-products',
          children: [{
            path: '',
            component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
          }, {
            path: 'product/:id',
            children: [{
              path: '',
              component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
            }, {
              path: 'review/:id',
              component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
            }]
          }]
        }]
      }, {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: '/tabs/home',
      pathMatch: 'full'
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/vendor/edit-order/edit-order.page.scss": function srcAppVendorEditOrderEditOrderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9lZGl0LW9yZGVyL2VkaXQtb3JkZXIucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/vendor/edit-order/edit-order.page.ts": function srcAppVendorEditOrderEditOrderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditOrderPage", function () {
      return EditOrderPage;
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


    var _data_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");

    var EditOrderPage = /*#__PURE__*/function () {
      function EditOrderPage(platform, api, settings, route, loadingController, navCtrl) {
        _classCallCheck(this, EditOrderPage);

        this.platform = platform;
        this.api = api;
        this.settings = settings;
        this.route = route;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.disableButton = false;
      }

      _createClass(EditOrderPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.route.snapshot.paramMap.get('id');
          this.getOrder();
        }
      }, {
        key: "getOrder",
        value: function getOrder() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee69() {
            var _this104 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee69$(_context69) {
              while (1) {
                switch (_context69.prev = _context69.next) {
                  case 0:
                    _context69.next = 2;
                    return this.loadingController.create({
                      message: 'Loading...',
                      translucent: true,
                      cssClass: 'custom-class custom-loading'
                    });

                  case 2:
                    loading = _context69.sent;
                    _context69.next = 5;
                    return loading.present();

                  case 5:
                    _context69.next = 7;
                    return this.api.getItem('orders/' + this.id).then(function (res) {
                      _this104.orders = res;
                      loading.dismiss();
                    }, function (err) {
                      console.log(err);
                      loading.dismiss();
                    });

                  case 7:
                  case "end":
                    return _context69.stop();
                }
              }
            }, _callee69, this);
          }));
        }
      }, {
        key: "save",
        value: function save() {
          var _this105 = this;

          this.disableButton = true;
          this.api.putItem('orders/' + this.id, this.orders).then(function (res) {
            _this105.disableButton = false;

            _this105.navCtrl.navigateBack('/tabs/account/vendor-orders');
          }, function (err) {
            console.log(err);
            _this105.disableButton = false;
          });
        }
      }]);

      return EditOrderPage;
    }();

    EditOrderPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    EditOrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-order',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-order.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/edit-order/edit-order.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-order.page.scss */
      "./src/app/vendor/edit-order/edit-order.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], EditOrderPage);
    /***/
  },

  /***/
  "./src/app/vendor/edit-product/edit-product.page.scss": function srcAppVendorEditProductEditProductPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".related-products .price {\n  padding: 0 10px 10px 10px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.related-products .price .special-price {\n  padding-left: 5px;\n  font-size: 10px;\n  font-weight: 300;\n}\n.related-products .related-item-name {\n  padding: 16px 0 0 0;\n  background-color: transparent;\n  font-weight: 400;\n}\n.related-products .scroll-related-products {\n  padding: 16px 0;\n  background-color: #fffff;\n  overflow: auto;\n  white-space: nowrap;\n}\n.related-products .scroll-related-products .product {\n  display: inline-block;\n  text-decoration: none;\n  width: 50%;\n  margin: 0 0 0 10px;\n}\n.related-products .scroll-related-products .product:last-child {\n  margin-right: 10px;\n}\n@media (min-width: 481px) and (max-width: 768px) {\n  .related-products .scroll-related-products .product {\n    width: 33.333%;\n  }\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .related-products .scroll-related-products .product {\n    width: 25%;\n  }\n}\n@media (min-width: 1025px) {\n  .related-products .scroll-related-products .product {\n    width: 20%;\n  }\n}\n.related-products .scroll-related-products ion-img {\n  height: auto;\n  width: 100%;\n}\n.related-products .scroll-related-products ion-card {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  margin-left: 2px;\n  box-shadow: none;\n}\n.related-products .scroll-related-products .card-content-md {\n  padding: 0 16px;\n  font-size: 14px;\n  line-height: 1.5;\n  text-align: center;\n}\n.related-products .scroll-related-products ion-card-header {\n  padding: 8px 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL2VkaXQtcHJvZHVjdC9EOlxcbHV4ZS4uLiBkZWJ1ZyA5IE9DVC9zcmNcXGFwcFxcdmVuZG9yXFxlZGl0LXByb2R1Y3RcXGVkaXQtcHJvZHVjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZlbmRvci9lZGl0LXByb2R1Y3QvZWRpdC1wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFFQSxlQUFBO0FDRFo7QURFWTtFQUVJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRGhCO0FESVE7RUFDSSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNGWjtBRElRO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDRlo7QURHWTtFQUNJLHFCQUFBO0VBRUEscUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNGaEI7QURJWTtFQUNJLGtCQUFBO0FDRmhCO0FESVk7RUFDSTtJQUNJLGNBQUE7RUNGbEI7QUFDRjtBRElZO0VBQ0k7SUFDSSxVQUFBO0VDRmxCO0FBQ0Y7QURJWTtFQUNJO0lBQ0ksVUFBQTtFQ0ZsQjtBQUNGO0FESVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0ZoQjtBRElZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0ZoQjtBREtZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSGhCO0FETVk7RUFDSSxpQkFBQTtBQ0poQiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9lZGl0LXByb2R1Y3QvZWRpdC1wcm9kdWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAucmVsYXRlZC1wcm9kdWN0cyB7XHJcbiAgICAgICAgLnByaWNlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIC8vY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgLnNwZWNpYWwtcHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgLy9jb2xvcjogIzg2ODY4NjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmVsYXRlZC1pdGVtLW5hbWUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDAgMCAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNjcm9sbC1yZWxhdGVkLXByb2R1Y3RzIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweCAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmY7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAucHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAvL2NvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAucHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMyU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgICAgICAucHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgICAgICAgICAgICAgICAucHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24taW1nIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1jYXJkIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jYXJkLWNvbnRlbnQtbWQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IiwiLnJlbGF0ZWQtcHJvZHVjdHMgLnByaWNlIHtcbiAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5yZWxhdGVkLXByb2R1Y3RzIC5wcmljZSAuc3BlY2lhbC1wcmljZSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ucmVsYXRlZC1wcm9kdWN0cyAucmVsYXRlZC1pdGVtLW5hbWUge1xuICBwYWRkaW5nOiAxNnB4IDAgMCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5yZWxhdGVkLXByb2R1Y3RzIC5zY3JvbGwtcmVsYXRlZC1wcm9kdWN0cyB7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmO1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5yZWxhdGVkLXByb2R1Y3RzIC5zY3JvbGwtcmVsYXRlZC1wcm9kdWN0cyAucHJvZHVjdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDAgMCAwIDEwcHg7XG59XG4ucmVsYXRlZC1wcm9kdWN0cyAuc2Nyb2xsLXJlbGF0ZWQtcHJvZHVjdHMgLnByb2R1Y3Q6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5yZWxhdGVkLXByb2R1Y3RzIC5zY3JvbGwtcmVsYXRlZC1wcm9kdWN0cyAucHJvZHVjdCB7XG4gICAgd2lkdGg6IDMzLjMzMyU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAucmVsYXRlZC1wcm9kdWN0cyAuc2Nyb2xsLXJlbGF0ZWQtcHJvZHVjdHMgLnByb2R1Y3Qge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgLnJlbGF0ZWQtcHJvZHVjdHMgLnNjcm9sbC1yZWxhdGVkLXByb2R1Y3RzIC5wcm9kdWN0IHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG4ucmVsYXRlZC1wcm9kdWN0cyAuc2Nyb2xsLXJlbGF0ZWQtcHJvZHVjdHMgaW9uLWltZyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG4ucmVsYXRlZC1wcm9kdWN0cyAuc2Nyb2xsLXJlbGF0ZWQtcHJvZHVjdHMgaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ucmVsYXRlZC1wcm9kdWN0cyAuc2Nyb2xsLXJlbGF0ZWQtcHJvZHVjdHMgLmNhcmQtY29udGVudC1tZCB7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmVsYXRlZC1wcm9kdWN0cyAuc2Nyb2xsLXJlbGF0ZWQtcHJvZHVjdHMgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogOHB4IDEzcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/vendor/edit-product/edit-product.page.ts": function srcAppVendorEditProductEditProductPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProductPage", function () {
      return EditProductPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../data */
    "./src/app/data.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _data_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../data/product */
    "./src/app/data/product.ts");
    /* harmony import */


    var _md5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./md5 */
    "./src/app/vendor/edit-product/md5.ts");
    /* harmony import */


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/ngx/index.js");
    /* harmony import */


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/ngx/index.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./../../config */
    "./src/app/config.ts");

    var EditProductPage = /*#__PURE__*/function () {
      function EditProductPage(platform, actionSheetController, modalCtrl, api, data, productData, settings, router, loadingController, navCtrl, alertController, route, config, transfer, imagePicker, crop) {
        _classCallCheck(this, EditProductPage);

        this.platform = platform;
        this.actionSheetController = actionSheetController;
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.data = data;
        this.productData = productData;
        this.settings = settings;
        this.router = router;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.route = route;
        this.config = config;
        this.transfer = transfer;
        this.imagePicker = imagePicker;
        this.crop = crop;
        this.filter = {};
        this.categories = [];
        this.usedVariationAttributes = [];
        this.options = {};
        this.variations = [];
        this.relatedProducts = [];
        this.upsellProducts = [];
        this.crossSellProducts = [];
        this.reviews = [];
        this.cart = {};
        this.disableButton = false;
        this.uploadingImage = false;
        this.imageIndex = 0;
        this.filter.page = 1;
        this.filter.status = 'publish';
      }

      _createClass(EditProductPage, [{
        key: "getProduct",
        value: function getProduct() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee70() {
            var _this106 = this;

            return regeneratorRuntime.wrap(function _callee70$(_context70) {
              while (1) {
                switch (_context70.prev = _context70.next) {
                  case 0:
                    _context70.next = 2;
                    return this.api.getItem('products/' + this.id).then(function (res) {
                      _this106.product = res;

                      _this106.handleProduct();
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context70.stop();
                }
              }
            }, _callee70, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.product = this.productData.product;

          if (this.product.images) {
            if (this.product.images.length == 0) {
              this.product.images = {};
            } else this.imageIndex = this.product.images.length;
          }

          this.id = this.route.snapshot.paramMap.get('id');
          if (this.product.id) this.handleProduct();else this.getProduct();
        }
      }, {
        key: "handleProduct",
        value: function handleProduct() {
          for (var item in this.product.categories) {
            this.categories[item] = this.product.categories[item].id.toString();
          }

          this.usedVariationAttributes = this.product.attributes.filter(function (attribute) {
            return attribute.variation == true;
          });
          this.options.product_id = this.product.id;
          if (this.product.type == 'variable' && this.product.variations.length) this.getVariationProducts();
          /*this.getRelatedProducts();
          this.getUpsellProducts();
          this.getCrossSellProducts();
          this.getReviews();*/
        }
      }, {
        key: "getVariationProducts",
        value: function getVariationProducts() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee71() {
            var _this107 = this;

            return regeneratorRuntime.wrap(function _callee71$(_context71) {
              while (1) {
                switch (_context71.prev = _context71.next) {
                  case 0:
                    _context71.next = 2;
                    return this.api.getItem('products/' + this.product.id + '/variations').then(function (res) {
                      _this107.variations = res;
                    }, function (err) {});

                  case 2:
                  case "end":
                    return _context71.stop();
                }
              }
            }, _callee71, this);
          }));
        }
      }, {
        key: "getRelatedProducts",
        value: function getRelatedProducts() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee72() {
            var _this108 = this;

            var filter, item;
            return regeneratorRuntime.wrap(function _callee72$(_context72) {
              while (1) {
                switch (_context72.prev = _context72.next) {
                  case 0:
                    if (!(this.product.related_ids != 0)) {
                      _context72.next = 5;
                      break;
                    }

                    filter = [];

                    for (item in this.product.related_ids) {
                      filter['include[' + item + ']'] = this.product.related_ids[item];
                    }

                    _context72.next = 5;
                    return this.api.getItem('products', filter).then(function (res) {
                      _this108.relatedProducts = res;
                    }, function (err) {});

                  case 5:
                  case "end":
                    return _context72.stop();
                }
              }
            }, _callee72, this);
          }));
        }
      }, {
        key: "getUpsellProducts",
        value: function getUpsellProducts() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee73() {
            var _this109 = this;

            var filter, item;
            return regeneratorRuntime.wrap(function _callee73$(_context73) {
              while (1) {
                switch (_context73.prev = _context73.next) {
                  case 0:
                    if (!(this.product.upsell_ids != 0)) {
                      _context73.next = 5;
                      break;
                    }

                    filter = [];

                    for (item in this.product.upsell_ids) {
                      filter['include[' + item + ']'] = this.product.upsell_ids[item];
                    }

                    _context73.next = 5;
                    return this.api.getItem('products', filter).then(function (res) {
                      _this109.upsellProducts = res;
                    }, function (err) {});

                  case 5:
                  case "end":
                    return _context73.stop();
                }
              }
            }, _callee73, this);
          }));
        }
      }, {
        key: "getCrossSellProducts",
        value: function getCrossSellProducts() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee74() {
            var _this110 = this;

            var filter, item;
            return regeneratorRuntime.wrap(function _callee74$(_context74) {
              while (1) {
                switch (_context74.prev = _context74.next) {
                  case 0:
                    if (!(this.product.cross_sell_ids != 0)) {
                      _context74.next = 5;
                      break;
                    }

                    filter = [];

                    for (item in this.product.cross_sell_ids) {
                      filter['include[' + item + ']'] = this.product.cross_sell_ids[item];
                    }

                    _context74.next = 5;
                    return this.api.getItem('products', filter).then(function (res) {
                      _this110.crossSellProducts = res;
                    }, function (err) {});

                  case 5:
                  case "end":
                    return _context74.stop();
                }
              }
            }, _callee74, this);
          }));
        }
      }, {
        key: "getReviews",
        value: function getReviews() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee75() {
            var _this111 = this;

            return regeneratorRuntime.wrap(function _callee75$(_context75) {
              while (1) {
                switch (_context75.prev = _context75.next) {
                  case 0:
                    _context75.next = 2;
                    return this.api.getItem('products/' + this.product.id + '/reviews').then(function (res) {
                      _this111.reviews = res;

                      for (var item in _this111.reviews) {
                        _this111.reviews[item].avatar = Object(_md5__WEBPACK_IMPORTED_MODULE_8__["md5"])(_this111.reviews[item].email);
                      }
                    }, function (err) {});

                  case 2:
                  case "end":
                    return _context75.stop();
                }
              }
            }, _callee75, this);
          }));
        }
      }, {
        key: "goToProduct",
        value: function goToProduct(product) {
          this.productData.product = product;
          var endIndex = this.router.url.lastIndexOf('/');
          var path = this.router.url.substring(0, endIndex);
          this.navCtrl.navigateForward(path + '/' + product.id);
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee76() {
            var alert;
            return regeneratorRuntime.wrap(function _callee76$(_context76) {
              while (1) {
                switch (_context76.prev = _context76.next) {
                  case 0:
                    _context76.next = 2;
                    return this.alertController.create({
                      header: header,
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context76.sent;
                    _context76.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context76.stop();
                }
              }
            }, _callee76, this);
          }));
        }
      }, {
        key: "OnDestroy",
        value: function OnDestroy() {//this.productData.product = {};
        }
      }, {
        key: "saveProduct",
        value: function saveProduct() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee77() {
            var _this112 = this;

            var id;
            return regeneratorRuntime.wrap(function _callee77$(_context77) {
              while (1) {
                switch (_context77.prev = _context77.next) {
                  case 0:
                    this.disableButton = true;
                    this.product.categories = [];

                    for (id in this.categories) {
                      this.product.categories[id] = {
                        id: parseInt(this.categories[id])
                      };
                    }

                    if (this.product.images.length) this.product.images[0].position = 0;
                    if (this.product.type == 'external') this.product.manage_stock = false;
                    _context77.next = 7;
                    return this.api.putItem('products/' + this.id, this.product).then(function (res) {
                      _this112.product = res;
                      _this112.productData.product = {};

                      _this112.navCtrl.navigateBack('/tabs/account/vendor-products');
                    }, function (err) {
                      console.log(err);
                    });

                  case 7:
                  case "end":
                    return _context77.stop();
                }
              }
            }, _callee77, this);
          }));
        }
      }, {
        key: "picker",
        value: function picker() {
          var _this113 = this;

          console.log('hello');
          var options = {
            maximumImagesCount: 1
          };
          this.photos = new Array();
          this.imagePicker.getPictures(options).then(function (results) {
            _this113.reduceImages(results).then(function (results) {
              return _this113.handleUpload(results);
            });
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "handleUpload",
        value: function handleUpload(results) {
          this.upload();
        }
      }, {
        key: "reduceImages",
        value: function reduceImages(selected_pictures) {
          var _this114 = this;

          return selected_pictures.reduce(function (promise, item) {
            return promise.then(function (result) {
              return _this114.crop.crop(item, {
                quality: 75,
                targetHeight: 100,
                targetWidth: 100
              }).then(function (cropped_image) {
                return _this114.photos = cropped_image;
              });
            });
          }, Promise.resolve());
        }
      }, {
        key: "upload",
        value: function upload() {
          var _this115 = this;

          this.uploadingImage = true;
          var fileTransfer = this.transfer.create();
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_11__["Headers"]();
          headers.append('Content-Type', 'multipart/form-data');
          var options = {
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: {
              headers: headers
            }
          };
          fileTransfer.upload(this.photos, this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp_upload_image', options).then(function (data) {
            _this115.uploadingImage = false;
            _this115.imageresult = JSON.parse(data.response);
            _this115.product.images[_this115.imageIndex] = {};
            _this115.product.images[_this115.imageIndex].src = _this115.imageresult.url;
            _this115.imageIndex = _this115.imageIndex + 1; // success
          }, function (err) {//this.functions.showAlert("error", err);
          });
        }
      }, {
        key: "replaceImage",
        value: function replaceImage(index) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee78() {
            var _this116 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee78$(_context78) {
              while (1) {
                switch (_context78.prev = _context78.next) {
                  case 0:
                    _context78.next = 2;
                    return this.actionSheetController.create({
                      header: 'Albums',
                      buttons: [{
                        text: 'Delete Image',
                        role: 'destructive',
                        icon: 'trash',
                        handler: function handler() {
                          _this116.product.images.splice(index, 1);

                          _this116.imageIndex = _this116.imageIndex - 1;
                        }
                      }, {
                        text: 'Edit Image',
                        icon: 'create',
                        handler: function handler() {
                          var options = {
                            maximumImagesCount: 1
                          };
                          _this116.photos = new Array();

                          _this116.imagePicker.getPictures(options).then(function (results) {
                            _this116.reduceImages(results).then(function (results) {
                              return _this116.replaceUpload(index);
                            });
                          }, function (err) {//this.functions.showAlert("error", err);
                          });
                        }
                      }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context78.sent;
                    _context78.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context78.stop();
                }
              }
            }, _callee78, this);
          }));
        }
      }, {
        key: "replaceUpload",
        value: function replaceUpload(index) {
          var _this117 = this;

          this.uploadingImage = true;
          var fileTransfer = this.transfer.create();
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_11__["Headers"]();
          headers.append('Content-Type', 'multipart/form-data');
          var options = {
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: {
              headers: headers
            }
          };
          fileTransfer.upload(this.photos, this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp_upload_image', options).then(function (data) {
            _this117.uploadingImage = false;
            _this117.imageresult = JSON.parse(data.response);
            _this117.product.images[index].src = _this117.imageresult.url; // success
          }, function (err) {//this.functions.showAlert("error", err);
          });
        }
      }, {
        key: "editProduct",
        value: function editProduct(product) {
          this.productData.variationProduct = product;
          this.navCtrl.navigateForward(this.router.url + '/edit-variation-product/' + product.id);
        }
      }]);

      return EditProductPage;
    }();

    EditProductPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_5__["Data"]
      }, {
        type: _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _config__WEBPACK_IMPORTED_MODULE_13__["Config"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__["FileTransfer"]
      }, {
        type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__["ImagePicker"]
      }, {
        type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__["Crop"]
      }];
    };

    EditProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-product.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/edit-product/edit-product.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-product.page.scss */
      "./src/app/vendor/edit-product/edit-product.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _config__WEBPACK_IMPORTED_MODULE_13__["Config"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__["FileTransfer"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__["ImagePicker"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__["Crop"]])], EditProductPage); // 2) Add plugin related to image upload 3) Test Upload image 4) Test Put product 

    /***/
  },

  /***/
  "./src/app/vendor/edit-product/md5.ts": function srcAppVendorEditProductMd5Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "md5", function () {
      return md5;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var md5 = function md5(string) {
      function RotateLeft(lValue, iShiftBits) {
        return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
      }

      function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = lX & 0x80000000;
        lY8 = lY & 0x80000000;
        lX4 = lX & 0x40000000;
        lY4 = lY & 0x40000000;
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);

        if (lX4 & lY4) {
          return lResult ^ 0x80000000 ^ lX8 ^ lY8;
        }

        if (lX4 | lY4) {
          if (lResult & 0x40000000) {
            return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
          } else {
            return lResult ^ 0x40000000 ^ lX8 ^ lY8;
          }
        } else {
          return lResult ^ lX8 ^ lY8;
        }
      }

      function F(x, y, z) {
        return x & y | ~x & z;
      }

      function G(x, y, z) {
        return x & z | y & ~z;
      }

      function H(x, y, z) {
        return x ^ y ^ z;
      }

      function I(x, y, z) {
        return y ^ (x | ~z);
      }

      function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;

        while (lByteCount < lMessageLength) {
          lWordCount = (lByteCount - lByteCount % 4) / 4;
          lBytePosition = lByteCount % 4 * 8;
          lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
          lByteCount++;
        }

        lWordCount = (lByteCount - lByteCount % 4) / 4;
        lBytePosition = lByteCount % 4 * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
      }

      ;

      function WordToHex(lValue) {
        var WordToHexValue = "",
            WordToHexValue_temp = "",
            lByte,
            lCount;

        for (lCount = 0; lCount <= 3; lCount++) {
          lByte = lValue >>> lCount * 8 & 255;
          WordToHexValue_temp = "0" + lByte.toString(16);
          WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }

        return WordToHexValue;
      }

      ;

      function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {
          var c = string.charCodeAt(n);

          if (c < 128) {
            utftext += String.fromCharCode(c);
          } else if (c > 127 && c < 2048) {
            utftext += String.fromCharCode(c >> 6 | 192);
            utftext += String.fromCharCode(c & 63 | 128);
          } else {
            utftext += String.fromCharCode(c >> 12 | 224);
            utftext += String.fromCharCode(c >> 6 & 63 | 128);
            utftext += String.fromCharCode(c & 63 | 128);
          }
        }

        return utftext;
      }

      ;
      var x = Array();
      var k, AA, BB, CC, DD, a, b, c, d;
      var S11 = 7,
          S12 = 12,
          S13 = 17,
          S14 = 22;
      var S21 = 5,
          S22 = 9,
          S23 = 14,
          S24 = 20;
      var S31 = 4,
          S32 = 11,
          S33 = 16,
          S34 = 23;
      var S41 = 6,
          S42 = 10,
          S43 = 15,
          S44 = 21;
      string = Utf8Encode(string);
      x = ConvertToWordArray(string);
      a = 0x67452301;
      b = 0xEFCDAB89;
      c = 0x98BADCFE;
      d = 0x10325476;

      for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
      }

      var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
      return temp.toLowerCase();
    };
    /***/

  },

  /***/
  "./src/app/vendor/edit-variation/edit-variation.page.scss": function srcAppVendorEditVariationEditVariationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9lZGl0LXZhcmlhdGlvbi9lZGl0LXZhcmlhdGlvbi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/vendor/edit-variation/edit-variation.page.ts": function srcAppVendorEditVariationEditVariationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditVariationPage", function () {
      return EditVariationPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../data */
    "./src/app/data.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _data_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../data/product */
    "./src/app/data/product.ts");
    /* harmony import */


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/ngx/index.js");
    /* harmony import */


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/ngx/index.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./../../config */
    "./src/app/config.ts");

    var EditVariationPage = /*#__PURE__*/function () {
      function EditVariationPage(actionSheetController, modalCtrl, api, data, productData, settings, router, loadingController, navCtrl, alertController, route, config, transfer, imagePicker, crop) {
        _classCallCheck(this, EditVariationPage);

        this.actionSheetController = actionSheetController;
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.data = data;
        this.productData = productData;
        this.settings = settings;
        this.router = router;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.route = route;
        this.config = config;
        this.transfer = transfer;
        this.imagePicker = imagePicker;
        this.crop = crop;
        this.filter = {};
        this.categories = [];
        this.usedVariationAttributes = [];
        this.options = {};
        this.variations = [];
        this.relatedProducts = [];
        this.upsellProducts = [];
        this.crossSellProducts = [];
        this.reviews = [];
        this.cart = {};
        this.disableButton = false;
        this.uploadingImage = false;
        this.imageIndex = 0;
        this.filter.page = 1;
        this.filter.status = 'publish';
      }

      _createClass(EditVariationPage, [{
        key: "getProduct",
        value: function getProduct() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee79() {
            var _this118 = this;

            return regeneratorRuntime.wrap(function _callee79$(_context79) {
              while (1) {
                switch (_context79.prev = _context79.next) {
                  case 0:
                    _context79.next = 2;
                    return this.api.getItem('products/' + this.id).then(function (res) {
                      _this118.product = res;

                      _this118.handleProduct();
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context79.stop();
                }
              }
            }, _callee79, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.route.snapshot.paramMap.get('id');
          /*this.product = this.productData.variationProduct;
          console.log(this.product);
          
            if(this.product.images){
              if (this.product.images.length == 0) {
                  this.product.images = {};
              } else this.imageIndex = this.product.images.length;
          }
            if (this.product.id) this.handleProduct();
          else */

          this.getProduct();
        }
      }, {
        key: "handleProduct",
        value: function handleProduct() {
          for (var item in this.product.categories) {
            this.categories[item] = this.product.categories[item].id.toString();
          }

          this.usedVariationAttributes = this.product.attributes.filter(function (attribute) {
            return attribute.variation == true;
          });
          this.options.product_id = this.product.id;
          /*if ((this.product.type == 'variable') && this.product.variations.length) this.getVariationProducts();
          this.getRelatedProducts();
          this.getUpsellProducts();
          this.getCrossSellProducts();
          this.getReviews();*/
        }
        /*async getVariationProducts() {
            await this.api.getItem('products/' + this.product.id + '/variations').subscribe(res => {
                this.variations = res;
            }, err => {});
        }
        async getRelatedProducts() {
            if (this.product.related_ids != 0) {
                var filter = [];
                for (let item in this.product.related_ids) filter['include[' + item + ']'] = this.product.related_ids[item];
                await this.api.getItem('products', filter).subscribe(res => {
                    this.relatedProducts = res;
                }, err => {});
            }
        }
        async getUpsellProducts() {
            if (this.product.upsell_ids != 0) {
                var filter = [];
                for (let item in this.product.upsell_ids) filter['include[' + item + ']'] = this.product.upsell_ids[item];
                await this.api.getItem('products', filter).subscribe(res => {
                    this.upsellProducts = res;
                }, err => {});
            }
        }
        async getCrossSellProducts() {
            if (this.product.cross_sell_ids != 0) {
                var filter = [];
                for (let item in this.product.cross_sell_ids) filter['include[' + item + ']'] = this.product.cross_sell_ids[item];
                await this.api.getItem('products', filter).subscribe(res => {
                    this.crossSellProducts = res;
                }, err => {});
            }
        }
        async getReviews() {
            await this.api.getItem('products/' + this.product.id + '/reviews').subscribe(res => {
                this.reviews = res;
                for (let item in this.reviews) {
                    this.reviews[item].avatar = md5(this.reviews[item].email);
                }
            }, err => {});
        }
        goToProduct(product) {
            this.productData.vendorProduct = product;
            var endIndex = this.router.url.lastIndexOf('/');
            var path = this.router.url.substring(0, endIndex);
            this.navCtrl.navigateForward(path + '/' + product.id);
        }*/

      }, {
        key: "presentAlert",
        value: function presentAlert(header, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee80() {
            var alert;
            return regeneratorRuntime.wrap(function _callee80$(_context80) {
              while (1) {
                switch (_context80.prev = _context80.next) {
                  case 0:
                    _context80.next = 2;
                    return this.alertController.create({
                      header: header,
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context80.sent;
                    _context80.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context80.stop();
                }
              }
            }, _callee80, this);
          }));
        }
      }, {
        key: "OnDestroy",
        value: function OnDestroy() {
          this.productData.variationProduct = {};
        }
      }, {
        key: "saveProduct",
        value: function saveProduct() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee81() {
            var _this119 = this;

            var id;
            return regeneratorRuntime.wrap(function _callee81$(_context81) {
              while (1) {
                switch (_context81.prev = _context81.next) {
                  case 0:
                    this.disableButton = true;
                    this.product.categories = [];

                    for (id in this.categories) {
                      this.product.categories[id] = {
                        id: parseInt(this.categories[id])
                      };
                    }

                    if (this.product.images.length) this.product.images[0].position = 0;
                    if (this.product.type == 'external') this.product.manage_stock = false;
                    _context81.next = 7;
                    return this.api.putItem('products/' + this.id, this.product).then(function (res) {
                      _this119.product = res;

                      _this119.navCtrl.navigateBack('/tabs/account/vendor-products/edit-product/' + _this119.productData.product.id);
                    }, function (err) {
                      console.log(err);
                    });

                  case 7:
                  case "end":
                    return _context81.stop();
                }
              }
            }, _callee81, this);
          }));
        }
      }, {
        key: "picker",
        value: function picker() {
          var _this120 = this;

          console.log('hello');
          var options = {
            maximumImagesCount: 1
          };
          this.photos = new Array();
          this.imagePicker.getPictures(options).then(function (results) {
            _this120.reduceImages(results).then(function (results) {
              return _this120.handleUpload(results);
            });
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "handleUpload",
        value: function handleUpload(results) {
          this.upload();
        }
      }, {
        key: "reduceImages",
        value: function reduceImages(selected_pictures) {
          var _this121 = this;

          return selected_pictures.reduce(function (promise, item) {
            return promise.then(function (result) {
              return _this121.crop.crop(item, {
                quality: 75,
                targetHeight: 100,
                targetWidth: 100
              }).then(function (cropped_image) {
                return _this121.photos = cropped_image;
              });
            });
          }, Promise.resolve());
        }
      }, {
        key: "upload",
        value: function upload() {
          var _this122 = this;

          this.uploadingImage = true;
          var fileTransfer = this.transfer.create();
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_10__["Headers"]();
          headers.append('Content-Type', 'multipart/form-data');
          var options = {
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: {
              headers: headers
            }
          };
          fileTransfer.upload(this.photos, this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp_upload_image', options).then(function (data) {
            _this122.uploadingImage = false;
            _this122.imageresult = JSON.parse(data.response);
            _this122.product.images[_this122.imageIndex] = {};
            _this122.product.images[_this122.imageIndex].src = _this122.imageresult.url;
            _this122.imageIndex = _this122.imageIndex + 1; // success
          }, function (err) {//this.functions.showAlert("error", err);
          });
        }
      }, {
        key: "replaceImage",
        value: function replaceImage(index) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee82() {
            var _this123 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee82$(_context82) {
              while (1) {
                switch (_context82.prev = _context82.next) {
                  case 0:
                    _context82.next = 2;
                    return this.actionSheetController.create({
                      header: 'Albums',
                      buttons: [{
                        text: 'Delete Image',
                        role: 'destructive',
                        icon: 'trash',
                        handler: function handler() {
                          _this123.product.images.splice(index, 1);

                          _this123.imageIndex = _this123.imageIndex - 1;
                        }
                      }, {
                        text: 'Edit Image',
                        icon: 'create',
                        handler: function handler() {
                          var options = {
                            maximumImagesCount: 1
                          };
                          _this123.photos = new Array();

                          _this123.imagePicker.getPictures(options).then(function (results) {
                            _this123.reduceImages(results).then(function (results) {
                              return _this123.replaceUpload(index);
                            });
                          }, function (err) {//this.functions.showAlert("error", err);
                          });
                        }
                      }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context82.sent;
                    _context82.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context82.stop();
                }
              }
            }, _callee82, this);
          }));
        }
      }, {
        key: "replaceUpload",
        value: function replaceUpload(index) {
          var _this124 = this;

          this.uploadingImage = true;
          var fileTransfer = this.transfer.create();
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_10__["Headers"]();
          headers.append('Content-Type', 'multipart/form-data');
          var options = {
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: {
              headers: headers
            }
          };
          fileTransfer.upload(this.photos, this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp_upload_image', options).then(function (data) {
            _this124.uploadingImage = false;
            _this124.imageresult = JSON.parse(data.response);
            _this124.product.images[index].src = _this124.imageresult.url; // success
          }, function (err) {//this.functions.showAlert("error", err);
          });
        }
      }]);

      return EditVariationPage;
    }();

    EditVariationPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_5__["Data"]
      }, {
        type: _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _config__WEBPACK_IMPORTED_MODULE_12__["Config"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"]
      }, {
        type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"]
      }, {
        type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__["Crop"]
      }];
    };

    EditVariationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-variation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-variation.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/edit-variation/edit-variation.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-variation.page.scss */
      "./src/app/vendor/edit-variation/edit-variation.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _config__WEBPACK_IMPORTED_MODULE_12__["Config"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__["Crop"]])], EditVariationPage);
    /***/
  },

  /***/
  "./src/app/vendor/order-list/order-list.page.scss": function srcAppVendorOrderListOrderListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".order-list ion-card {\n  margin: 0;\n  margin-bottom: 20px;\n}\n.order-list ion-card:has(> .activated) {\n  opacity: 0.8;\n  transition-timing-function: ease-out;\n  transition: 0.3s;\n  box-shadow: none;\n}\n.order-list ion-card-title {\n  font-size: 28px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.order-list .empty {\n  margin-top: 50px;\n  text-align: center;\n}\n.order-list .empty ion-icon {\n  font-size: 7.2em;\n}\n.order-list ion-card-subtitle {\n  font-weight: 500;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL29yZGVyLWxpc3QvRDpcXGx1eGUuLi4gZGVidWcgOSBPQ1Qvc3JjXFxhcHBcXHZlbmRvclxcb3JkZXItbGlzdFxcb3JkZXItbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZlbmRvci9vcmRlci1saXN0L29yZGVyLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0FDQVI7QURFSTtFQUNJLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREdJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ0RSO0FERVE7RUFDSSxnQkFBQTtBQ0FaO0FESUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9vcmRlci1saXN0L29yZGVyLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyLWxpc3Qge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICBpb24tY2FyZDpoYXMoPiAuYWN0aXZhdGVkKXtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgIHRyYW5zaXRpb246IC4zcztcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgfVxuXG4gICAgLmVtcHR5IHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDcuMmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWNhcmQtc3VidGl0bGV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG59IiwiLm9yZGVyLWxpc3QgaW9uLWNhcmQge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ub3JkZXItbGlzdCBpb24tY2FyZDpoYXMoPiAuYWN0aXZhdGVkKSB7XG4gIG9wYWNpdHk6IDAuODtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLm9yZGVyLWxpc3QgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG4ub3JkZXItbGlzdCAuZW1wdHkge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ub3JkZXItbGlzdCAuZW1wdHkgaW9uLWljb24ge1xuICBmb250LXNpemU6IDcuMmVtO1xufVxuLm9yZGVyLWxpc3QgaW9uLWNhcmQtc3VidGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/vendor/order-list/order-list.page.ts": function srcAppVendorOrderListOrderListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderListPage", function () {
      return OrderListPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");

    var OrderListPage = /*#__PURE__*/function () {
      function OrderListPage(actionSheetController, platform, api, settings, router, navCtrl, route) {
        _classCallCheck(this, OrderListPage);

        this.actionSheetController = actionSheetController;
        this.platform = platform;
        this.api = api;
        this.settings = settings;
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.filter = {};
        this.orders = [];
        this.hasMoreItems = true;
        this.loader = true;
        this.filter.page = 1;
        this.filter.vendor = this.settings.customer.id;

        if (this.settings.administrator) {
          delete this.filter.vendor;
        }
      }

      _createClass(OrderListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.settings.settings.vendorType === 'product_vendor') {
            this.getWooCommerceProductVendorOrders();
          } else {
            this.getOrders(); //THIS WORKS FOE WCFM ALSO, DO NOT CHANEG THIS. WCFM API NOT WORKING
          } //WCFM DO NOT USE THIS. WCFM API THIS IS NOT WORKING
          //this.getWCFMOrders();

        }
      }, {
        key: "getOrders",
        value: function getOrders() {
          var _this125 = this;

          this.api.getItem('orders', this.filter).then(function (res) {
            _this125.orders = res;
            _this125.loader = false;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this126 = this;

          this.filter.page = this.filter.page + 1;
          this.api.getItem('orders', this.filter).then(function (res) {
            _this126.orders.push.apply(_this126.orders, res);

            event.target.complete();
            if (!res) _this126.hasMoreItems = false;
          }, function (err) {
            event.target.complete();
          });
        }
      }, {
        key: "getDetail",
        value: function getDetail(order) {
          var navigationExtras = {
            queryParams: {
              order: order
            }
          };
          this.navCtrl.navigateForward('/tabs/account/vendor-orders/view-order/' + order.id, navigationExtras);
        }
      }, {
        key: "editOrder",
        value: function editOrder(order) {
          this.navCtrl.navigateForward('/tabs/account/vendor-orders/edit-order/' + order.id);
        }
      }, {
        key: "getWooCommerceProductVendorOrders",
        value: function getWooCommerceProductVendorOrders() {
          var _this127 = this;

          this.api.postItem('vendor-order-list', this.filter).then(function (res) {
            _this127.orders = res;
            _this127.loader = false;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "updateOrderStatus",
        value: function updateOrderStatus(order) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee83() {
            var _this128 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee83$(_context83) {
              while (1) {
                switch (_context83.prev = _context83.next) {
                  case 0:
                    _context83.next = 2;
                    return this.actionSheetController.create({
                      header: 'Albums',
                      buttons: [{
                        text: 'Fulfilled',
                        icon: 'checkmark',
                        handler: function handler() {
                          _this128.api.postItem('set_fulfill_status', {
                            status: 'fulfilled',
                            order_item_id: order.order_item_id
                          }).then(function (res) {
                            order.fulfillment_status = res;
                          }, function (err) {
                            console.log(err);
                          });
                        }
                      }, {
                        text: 'Unfulfilled',
                        icon: 'close',
                        handler: function handler() {
                          _this128.api.postItem('set_fulfill_status', {
                            status: 'unfulfilled',
                            order_item_id: order.order_item_id
                          }).then(function (res) {
                            order.fulfillment_status = res;
                          }, function (err) {
                            console.log(err);
                          });
                        }
                      }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context83.sent;
                    _context83.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context83.stop();
                }
              }
            }, _callee83, this);
          }));
        }
      }]);

      return OrderListPage;
    }();

    OrderListPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    OrderListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/order-list/order-list.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order-list.page.scss */
      "./src/app/vendor/order-list/order-list.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], OrderListPage);
    /***/
  },

  /***/
  "./src/app/vendor/order-note-list/order-note-list.page.scss": function srcAppVendorOrderNoteListOrderNoteListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9vcmRlci1ub3RlLWxpc3Qvb3JkZXItbm90ZS1saXN0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/vendor/order-note-list/order-note-list.page.ts": function srcAppVendorOrderNoteListOrderNoteListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderNoteListPage", function () {
      return OrderNoteListPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OrderNoteListPage = /*#__PURE__*/function () {
      function OrderNoteListPage() {
        _classCallCheck(this, OrderNoteListPage);
      }

      _createClass(OrderNoteListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrderNoteListPage;
    }();

    OrderNoteListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-note-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order-note-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/order-note-list/order-note-list.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order-note-list.page.scss */
      "./src/app/vendor/order-note-list/order-note-list.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], OrderNoteListPage);
    /***/
  },

  /***/
  "./src/app/vendor/product-add/category/category.page.scss": function srcAppVendorProductAddCategoryCategoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL3Byb2R1Y3QtYWRkL2NhdGVnb3J5L0Q6XFxsdXhlLi4uIGRlYnVnIDkgT0NUL3NyY1xcYXBwXFx2ZW5kb3JcXHByb2R1Y3QtYWRkXFxjYXRlZ29yeVxcY2F0ZWdvcnkucGFnZS5zY3NzIiwic3JjL2FwcC92ZW5kb3IvcHJvZHVjdC1hZGQvY2F0ZWdvcnkvY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsU0FBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvdmVuZG9yL3Byb2R1Y3QtYWRkL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xyXG5cdG1hcmdpbjogMDtcclxufSIsImlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/vendor/product-add/category/category.page.ts": function srcAppVendorProductAddCategoryCategoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryPage", function () {
      return CategoryPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../data */
    "./src/app/data.ts");
    /* harmony import */


    var _data_vendor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../data/vendor */
    "./src/app/data/vendor.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../../data/settings */
    "./src/app/data/settings.ts");

    var CategoryPage = /*#__PURE__*/function () {
      function CategoryPage(vendor, api, data, loadingController, navCtrl, router, settings, route) {
        _classCallCheck(this, CategoryPage);

        this.vendor = vendor;
        this.api = api;
        this.data = data;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.settings = settings;
        this.route = route;
        this.items = {};
        this.subcategories = [];
        this.categories = [];
      }

      _createClass(CategoryPage, [{
        key: "getCategory",
        value: function getCategory(ID, slug, name) {
          this.subcategories = [];
          this.vendor.product.categories[0] = {
            id: ID
          };
          this.items.id = ID;
          this.items.name = name;
          this.items.slug = slug;
          this.items.categories = this.data.categories;

          for (var item in this.items.categories) {
            if (this.items.categories[item].parent == ID) {
              this.subcategories.push(this.items.categories[item]);
            }
          }

          if (this.subcategories.length) {
            this.navCtrl.navigateForward('/tabs/account/add-products/subcategory/' + ID);
          } else this.navCtrl.navigateForward('/tabs/account/add-products/details/' + ID);
        }
      }]);

      return CategoryPage;
    }();

    CategoryPage.ctorParameters = function () {
      return [{
        type: _data_vendor__WEBPACK_IMPORTED_MODULE_6__["Vendor"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_5__["Data"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_7__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    CategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-add/category/category.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category.page.scss */
      "./src/app/vendor/product-add/category/category.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_vendor__WEBPACK_IMPORTED_MODULE_6__["Vendor"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_settings__WEBPACK_IMPORTED_MODULE_7__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], CategoryPage);
    /***/
  },

  /***/
  "./src/app/vendor/product-add/details/details.page.scss": function srcAppVendorProductAddDetailsDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9wcm9kdWN0LWFkZC9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/vendor/product-add/details/details.page.ts": function srcAppVendorProductAddDetailsDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsPage", function () {
      return DetailsPage;
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


    var _data_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _data_vendor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../data/vendor */
    "./src/app/data/vendor.ts");

    var DetailsPage = /*#__PURE__*/function () {
      function DetailsPage(alertController, vendor, settings, loadingController, navCtrl, router, route) {
        _classCallCheck(this, DetailsPage);

        this.alertController = alertController;
        this.vendor = vendor;
        this.settings = settings;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.route = route;
      }

      _createClass(DetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.vendor.product);
        }
      }, {
        key: "next",
        value: function next() {
          if (this.validateForm()) {
            this.navCtrl.navigateForward('/tabs/account/add-products/details/' + this.vendor.product.categories[0].id + '/photos');
          }
        }
      }, {
        key: "validateForm",
        value: function validateForm() {
          if (this.vendor.product.name == '' || this.vendor.product.name == undefined) {
            this.presentAlert('Please enter name');
            return false;
          }

          if (this.vendor.product.type == '' || this.vendor.product.type == undefined) {
            this.presentAlert('Please select product type');
            return false;
          }

          if (this.vendor.product.regular_price == '' || this.vendor.product.regular_price == undefined) {
            this.presentAlert('Please enter regular price');
            return false;
          } else return true;
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee84() {
            var alert;
            return regeneratorRuntime.wrap(function _callee84$(_context84) {
              while (1) {
                switch (_context84.prev = _context84.next) {
                  case 0:
                    _context84.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context84.sent;
                    _context84.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context84.stop();
                }
              }
            }, _callee84, this);
          }));
        }
      }]);

      return DetailsPage;
    }();

    DetailsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _data_vendor__WEBPACK_IMPORTED_MODULE_5__["Vendor"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-add/details/details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./details.page.scss */
      "./src/app/vendor/product-add/details/details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _data_vendor__WEBPACK_IMPORTED_MODULE_5__["Vendor"], _data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], DetailsPage);
    /***/
  },

  /***/
  "./src/app/vendor/product-add/photos/photos.page.scss": function srcAppVendorProductAddPhotosPhotosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".camera {\n  text-align: center;\n}\n.camera ion-icon {\n  font-size: 40px;\n}\n.images {\n  width: 100%;\n}\n.images .col {\n  padding: 0 5px 5px 0;\n  margin: 0;\n  min-width: 33.33%;\n  max-width: 33.33%;\n  width: 33.33%;\n  height: 120px;\n  border: 2px solid #eee;\n}\n.images .row {\n  padding: 5px 0 0 5px;\n}\n.images img {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL3Byb2R1Y3QtYWRkL3Bob3Rvcy9EOlxcbHV4ZS4uLiBkZWJ1ZyA5IE9DVC9zcmNcXGFwcFxcdmVuZG9yXFxwcm9kdWN0LWFkZFxccGhvdG9zXFxwaG90b3MucGFnZS5zY3NzIiwic3JjL2FwcC92ZW5kb3IvcHJvZHVjdC1hZGQvcGhvdG9zL3Bob3Rvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtBQ0NEO0FEQ0M7RUFDQyxlQUFBO0FDQ0Y7QURHQTtFQUVJLFdBQUE7QUNESjtBREVJO0VBQ0ksb0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNBUjtBREVJO0VBQ0ksb0JBQUE7QUNBUjtBREVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9wcm9kdWN0LWFkZC9waG90b3MvcGhvdG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW1lcmF7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuXHRpb24taWNvbntcclxuXHRcdGZvbnQtc2l6ZTogNDBweDtcclxuXHR9XHJcbn1cclxuXHJcbi5pbWFnZXMge1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAuY29sIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDVweCA1cHggMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzMy4zMyU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzMy4zMyU7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMzJTtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XHJcbiAgICB9XHJcbiAgICAucm93IHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMCAwIDVweDtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG59IiwiLmNhbWVyYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYW1lcmEgaW9uLWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5pbWFnZXMge1xuICB3aWR0aDogMTAwJTtcbn1cbi5pbWFnZXMgLmNvbCB7XG4gIHBhZGRpbmc6IDAgNXB4IDVweCAwO1xuICBtYXJnaW46IDA7XG4gIG1pbi13aWR0aDogMzMuMzMlO1xuICBtYXgtd2lkdGg6IDMzLjMzJTtcbiAgd2lkdGg6IDMzLjMzJTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcbn1cbi5pbWFnZXMgLnJvdyB7XG4gIHBhZGRpbmc6IDVweCAwIDAgNXB4O1xufVxuLmltYWdlcyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/vendor/product-add/photos/photos.page.ts": function srcAppVendorProductAddPhotosPhotosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotosPage", function () {
      return PhotosPage;
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


    var _data_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _data_vendor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../data/vendor */
    "./src/app/data/vendor.ts");
    /* harmony import */


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/ngx/index.js");
    /* harmony import */


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/ngx/index.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../../../config */
    "./src/app/config.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../api.service */
    "./src/app/api.service.ts");

    var PhotosPage = /*#__PURE__*/function () {
      function PhotosPage(platform, api, actionSheetController, config, vendor, settings, loadingController, navCtrl, router, transfer, imagePicker, crop) {
        _classCallCheck(this, PhotosPage);

        this.platform = platform;
        this.api = api;
        this.actionSheetController = actionSheetController;
        this.config = config;
        this.vendor = vendor;
        this.settings = settings;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.transfer = transfer;
        this.imagePicker = imagePicker;
        this.crop = crop;
        this.uploadingImageSpinner = false;
        this.imageIndex = 0;
      }

      _createClass(PhotosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "picker",
        value: function picker() {
          var _this129 = this;

          var options = {
            maximumImagesCount: 1
          };
          this.photos = new Array();
          this.imagePicker.getPictures(options).then(function (results) {
            console.log(results);

            _this129.reduceImages(results).then(function (results) {
              return _this129.handleUpload(results);
            });
          }, function (err) {
            _this129.err = err;
          });
        }
      }, {
        key: "handleUpload",
        value: function handleUpload(results) {
          this.upload();
        }
      }, {
        key: "reduceImages",
        value: function reduceImages(selected_pictures) {
          var _this130 = this;

          return selected_pictures.reduce(function (promise, item) {
            return promise.then(function (result) {
              return _this130.crop.crop(item, {
                quality: 75,
                targetHeight: 100,
                targetWidth: 100
              }).then(function (cropped_image) {
                return _this130.photos = cropped_image;
              }, function (error) {
                return _this130.err = error;
              });
            });
          }, Promise.resolve());
        }
      }, {
        key: "upload",
        value: function upload() {
          var _this131 = this;

          this.uploadingImageSpinner = true;
          var fileTransfer = this.transfer.create();
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_8__["Headers"]();
          headers.append('Content-Type', 'multipart/form-data');
          var options = {
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: {
              headers: headers
            }
          };
          fileTransfer.upload(this.photos, this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp_upload_image', options).then(function (data) {
            _this131.uploadingImageSpinner = false;
            _this131.imageresult = JSON.parse(data.response);
            _this131.vendor.product.images[_this131.imageIndex] = {};
            _this131.vendor.product.images[_this131.imageIndex].src = _this131.imageresult.url;
            _this131.imageIndex = _this131.imageIndex + 1; // success
          }, function (err) {//this.functions.showAlert("error", err);
          });
        }
      }, {
        key: "replaceImage",
        value: function replaceImage(index) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee85() {
            var _this132 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee85$(_context85) {
              while (1) {
                switch (_context85.prev = _context85.next) {
                  case 0:
                    _context85.next = 2;
                    return this.actionSheetController.create({
                      header: 'Albums',
                      buttons: [{
                        text: 'Delete Image',
                        role: 'destructive',
                        icon: 'trash',
                        handler: function handler() {
                          _this132.vendor.product.images.splice(index, 1);

                          _this132.imageIndex = _this132.imageIndex - 1;
                        }
                      }, {
                        text: 'Edit Image',
                        icon: 'create',
                        handler: function handler() {
                          var options = {
                            maximumImagesCount: 1
                          };
                          _this132.photos = new Array();

                          _this132.imagePicker.getPictures(options).then(function (results) {
                            _this132.reduceImages(results).then(function (results) {
                              return _this132.replaceUpload(index);
                            });
                          }, function (err) {//this.functions.showAlert("error", err);
                          });
                        }
                      }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context85.sent;
                    _context85.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context85.stop();
                }
              }
            }, _callee85, this);
          }));
        }
      }, {
        key: "replaceUpload",
        value: function replaceUpload(index) {
          var _this133 = this;

          this.uploadingImageSpinner = true;
          var fileTransfer = this.transfer.create();
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_8__["Headers"]();
          headers.append('Content-Type', 'multipart/form-data');
          var options = {
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: {
              headers: headers
            }
          };
          fileTransfer.upload(this.photos, this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp_upload_image', options).then(function (data) {
            _this133.uploadingImageSpinner = false;
            _this133.imageresult = JSON.parse(data.response);
            _this133.vendor.product.images[index].src = _this133.imageresult.url; // success
          }, function (err) {//this.functions.showAlert("error", err);
          });
        }
      }, {
        key: "publish",
        value: function publish() {
          this.vendor.product.status = 'publish';
          this.submit();
        }
      }, {
        key: "draft",
        value: function draft() {
          this.vendor.product.status = 'draft';
          this.submit();
        }
      }, {
        key: "submit",
        value: function submit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee86() {
            var _this134 = this;

            return regeneratorRuntime.wrap(function _callee86$(_context86) {
              while (1) {
                switch (_context86.prev = _context86.next) {
                  case 0:
                    this.vendor.product.vendor = this.settings.customer.id;
                    _context86.next = 3;
                    return this.loadingController.create({
                      spinner: 'crescent',
                      translucent: true,
                      animated: true,
                      backdropDismiss: true
                    });

                  case 3:
                    this.loading = _context86.sent;
                    _context86.next = 6;
                    return this.loading.present();

                  case 6:
                    this.api.wcpost('products', this.vendor.product).then(function (res) {
                      //DOKAN AND WCFM Plugin
                      _this134.res = res;

                      _this134.api.postItem('update-vendor-product', {
                        id: _this134.res.id
                      }).then(function (res) {
                        console.log(res);
                      }, function (err) {
                        console.log(err);
                      }); //DOKAN AND WCFM Plugin


                      _this134.vendor.product = {};
                      _this134.vendor.product.categories = [];
                      _this134.vendor.product.images = [];
                      _this134.vendor.product.dimensions = {};

                      _this134.loading.dismiss();

                      _this134.navCtrl.navigateBack('tabs/account');
                    }, function (err) {
                      _this134.loading.dismiss();

                      console.log(err);
                    });

                  case 7:
                  case "end":
                    return _context86.stop();
                }
              }
            }, _callee86, this);
          }));
        }
      }]);

      return PhotosPage;
    }();

    PhotosPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
      }, {
        type: _config__WEBPACK_IMPORTED_MODULE_10__["Config"]
      }, {
        type: _data_vendor__WEBPACK_IMPORTED_MODULE_5__["Vendor"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"]
      }, {
        type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"]
      }, {
        type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__["Crop"]
      }];
    };

    PhotosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-photos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./photos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-add/photos/photos.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./photos.page.scss */
      "./src/app/vendor/product-add/photos/photos.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _config__WEBPACK_IMPORTED_MODULE_10__["Config"], _data_vendor__WEBPACK_IMPORTED_MODULE_5__["Vendor"], _data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__["Crop"]])], PhotosPage);
    /***/
  },

  /***/
  "./src/app/vendor/product-add/subcategory/subcategory.page.scss": function srcAppVendorProductAddSubcategorySubcategoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL3Byb2R1Y3QtYWRkL3N1YmNhdGVnb3J5L0Q6XFxsdXhlLi4uIGRlYnVnIDkgT0NUL3NyY1xcYXBwXFx2ZW5kb3JcXHByb2R1Y3QtYWRkXFxzdWJjYXRlZ29yeVxcc3ViY2F0ZWdvcnkucGFnZS5zY3NzIiwic3JjL2FwcC92ZW5kb3IvcHJvZHVjdC1hZGQvc3ViY2F0ZWdvcnkvc3ViY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsU0FBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvdmVuZG9yL3Byb2R1Y3QtYWRkL3N1YmNhdGVnb3J5L3N1YmNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xyXG5cdG1hcmdpbjogMDtcclxufSIsImlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/vendor/product-add/subcategory/subcategory.page.ts": function srcAppVendorProductAddSubcategorySubcategoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubcategoryPage", function () {
      return SubcategoryPage;
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


    var _data_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../data */
    "./src/app/data.ts");
    /* harmony import */


    var _data_vendor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../data/vendor */
    "./src/app/data/vendor.ts");

    var SubcategoryPage = /*#__PURE__*/function () {
      function SubcategoryPage(vendor, data, settings, loadingController, navCtrl, router, route) {
        _classCallCheck(this, SubcategoryPage);

        this.vendor = vendor;
        this.data = data;
        this.settings = settings;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.route = route;
        this.subCategories = [];
      }

      _createClass(SubcategoryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.route.snapshot.paramMap.get('id');
          console.log(this.id);

          for (var i = 0; i < this.data.categories.length; i++) {
            if (this.data.categories[i].parent == this.id) {
              this.subCategories.push(this.data.categories[i]);
            }
          }
        }
      }, {
        key: "getCategory",
        value: function getCategory(ID) {
          this.vendor.product.categories[0] = {
            id: ID
          };
          this.navCtrl.navigateForward('/tabs/account/add-products/details/' + ID);
        }
      }]);

      return SubcategoryPage;
    }();

    SubcategoryPage.ctorParameters = function () {
      return [{
        type: _data_vendor__WEBPACK_IMPORTED_MODULE_6__["Vendor"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_5__["Data"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    SubcategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-subcategory',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subcategory.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-add/subcategory/subcategory.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subcategory.page.scss */
      "./src/app/vendor/product-add/subcategory/subcategory.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_vendor__WEBPACK_IMPORTED_MODULE_6__["Vendor"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], SubcategoryPage);
    /***/
  },

  /***/
  "./src/app/vendor/product-list/product-list.page.scss": function srcAppVendorProductListProductListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  margin: 0;\n}\n\nion-icon {\n  font-size: 20px;\n}\n\n.regular-price {\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.special-price {\n  padding: 4px;\n  font-size: smaller;\n  color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL3Byb2R1Y3QtbGlzdC9EOlxcbHV4ZS4uLiBkZWJ1ZyA5IE9DVC9zcmNcXGFwcFxcdmVuZG9yXFxwcm9kdWN0LWxpc3RcXHByb2R1Y3QtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZlbmRvci9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0RBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDA7XG59XG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLnJlZ3VsYXItcHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuLnNwZWNpYWwtcHJpY2V7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC40KTtcbn0iLCJpb24tY2FyZCB7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5yZWd1bGFyLXByaWNlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uc3BlY2lhbC1wcmljZSB7XG4gIHBhZGRpbmc6IDRweDtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xuICBjb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjQpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/vendor/product-list/product-list.page.ts": function srcAppVendorProductListProductListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListPage", function () {
      return ProductListPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../data */
    "./src/app/data.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _data_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../data/product */
    "./src/app/data/product.ts");
    /* harmony import */


    var _filter_filter_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../filter/filter.page */
    "./src/app/filter/filter.page.ts");

    var ProductListPage = /*#__PURE__*/function () {
      function ProductListPage(platform, alertController, modalController, api, data, product, settings, router, navCtrl, route) {
        _classCallCheck(this, ProductListPage);

        this.platform = platform;
        this.alertController = alertController;
        this.modalController = modalController;
        this.api = api;
        this.data = data;
        this.product = product;
        this.settings = settings;
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.tempProducts = [];
        this.subCategories = [];
        this.filter = {};
        this.hasMoreItems = true;
        this.loader = false;
        this.filter.page = 1;
        this.filter.vendor = this.settings.customer.id;

        if (this.settings.administrator) {
          delete this.filter.vendor;
        }
      }

      _createClass(ProductListPage, [{
        key: "getFilter",
        value: function getFilter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee87() {
            var modal, _yield$modal$onDidDis2, data;

            return regeneratorRuntime.wrap(function _callee87$(_context87) {
              while (1) {
                switch (_context87.prev = _context87.next) {
                  case 0:
                    _context87.next = 2;
                    return this.modalController.create({
                      component: _filter_filter_page__WEBPACK_IMPORTED_MODULE_8__["FilterPage"],
                      componentProps: {
                        filter: this.filter,
                        attributes: this.attributes
                      }
                    });

                  case 2:
                    modal = _context87.sent;
                    modal.present();
                    _context87.next = 6;
                    return modal.onDidDismiss();

                  case 6:
                    _yield$modal$onDidDis2 = _context87.sent;
                    data = _yield$modal$onDidDis2.data;

                    if (data) {
                      this.filter = data;
                      this.filter.page = 1;
                      this.getProducts();
                    }

                  case 9:
                  case "end":
                    return _context87.stop();
                }
              }
            }, _callee87, this);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee88() {
            var _this135 = this;

            return regeneratorRuntime.wrap(function _callee88$(_context88) {
              while (1) {
                switch (_context88.prev = _context88.next) {
                  case 0:
                    this.filter.page = this.filter.page + 1;
                    _context88.next = 3;
                    return this.api.getItem('products', this.filter).then(function (res) {
                      _this135.tempProducts = res;

                      _this135.products.push.apply(_this135.products, _this135.tempProducts);

                      event.target.complete();
                      if (_this135.tempProducts.length == 0) _this135.hasMoreItems = false;
                    }, function (err) {
                      event.target.complete();
                    });

                  case 3:
                  case "end":
                    return _context88.stop();
                }
              }
            }, _callee88, this);
          }));
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee89() {
            var _this136 = this;

            return regeneratorRuntime.wrap(function _callee89$(_context89) {
              while (1) {
                switch (_context89.prev = _context89.next) {
                  case 0:
                    this.loader = true;
                    _context89.next = 3;
                    return this.api.getItem('products', this.filter).then(function (res) {
                      _this136.products = res;
                      _this136.loader = false;
                    }, function (err) {
                      console.log(err);
                    });

                  case 3:
                  case "end":
                    return _context89.stop();
                }
              }
            }, _callee89, this);
          }));
        }
      }, {
        key: "getAttributes",
        value: function getAttributes() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee90() {
            var _this137 = this;

            return regeneratorRuntime.wrap(function _callee90$(_context90) {
              while (1) {
                switch (_context90.prev = _context90.next) {
                  case 0:
                    _context90.next = 2;
                    return this.api.postItem('product-attributes', {
                      category: this.filter.category
                    }).then(function (res) {
                      _this137.attributes = res;
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context90.stop();
                }
              }
            }, _callee90, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.filter.category = this.route.snapshot.paramMap.get('id');

          if (this.data.categories && this.data.categories.length) {
            for (var i = 0; i < this.data.categories.length; i++) {
              if (this.data.categories[i].parent == this.filter.category) {
                this.subCategories.push(this.data.categories[i]);
              }
            }
          }

          if (this.settings.colWidthProducts == 4) this.filter.per_page = 15;
          this.getProducts();
          this.getAttributes();
        }
      }, {
        key: "getProduct",
        value: function getProduct(product) {
          this.product.product = product;
          this.navCtrl.navigateForward(this.router.url + '/view-product/' + product.id);
        }
      }, {
        key: "getCategory",
        value: function getCategory(id) {
          var endIndex = this.router.url.lastIndexOf('/');
          var path = this.router.url.substring(0, endIndex);
          this.navCtrl.navigateForward(path + '/' + id);
        }
      }, {
        key: "editProduct",
        value: function editProduct(product) {
          this.product.product = product;
          this.navCtrl.navigateForward(this.router.url + '/edit-product/' + product.id);
        }
      }, {
        key: "delete",
        value: function _delete(product) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee91() {
            var _this138 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee91$(_context91) {
              while (1) {
                switch (_context91.prev = _context91.next) {
                  case 0:
                    _context91.next = 2;
                    return this.alertController.create({
                      header: 'Delete',
                      message: 'Are you sure you want to delete this product?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Delete',
                        handler: function handler() {
                          _this138.api.deleteItem('products/' + product.id).then(function (res) {
                            _this138.getProducts();
                          }, function (err) {
                            console.log(err);
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context91.sent;
                    _context91.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context91.stop();
                }
              }
            }, _callee91, this);
          }));
        }
      }]);

      return ProductListPage;
    }();

    ProductListPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_5__["Data"]
      }, {
        type: _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ProductListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-list/product-list.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-list.page.scss */
      "./src/app/vendor/product-list/product-list.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ProductListPage);
    /***/
  },

  /***/
  "./src/app/vendor/vendor-info/vendor-info.page.scss": function srcAppVendorVendorInfoVendorInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci92ZW5kb3ItaW5mby92ZW5kb3ItaW5mby5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/vendor/vendor-info/vendor-info.page.ts": function srcAppVendorVendorInfoVendorInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VendorInfoPage", function () {
      return VendorInfoPage;
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


    var _data_vendor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../data/vendor */
    "./src/app/data/vendor.ts");

    var VendorInfoPage = /*#__PURE__*/function () {
      function VendorInfoPage(vendor) {
        _classCallCheck(this, VendorInfoPage);

        this.vendor = vendor;
      }

      _createClass(VendorInfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "OnDestroy",
        value: function OnDestroy() {
          this.vendor.vendor = {};
        }
      }]);

      return VendorInfoPage;
    }();

    VendorInfoPage.ctorParameters = function () {
      return [{
        type: _data_vendor__WEBPACK_IMPORTED_MODULE_2__["Vendor"]
      }];
    };

    VendorInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vendor-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vendor-info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/vendor-info/vendor-info.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vendor-info.page.scss */
      "./src/app/vendor/vendor-info/vendor-info.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_vendor__WEBPACK_IMPORTED_MODULE_2__["Vendor"]])], VendorInfoPage);
    /***/
  },

  /***/
  "./src/app/vendor/vendor-list/vendor-list.page.scss": function srcAppVendorVendorListVendorListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".vendor-list ion-card {\n  margin: 0;\n}\n\nion-card-title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  text-transform: uppercase;\n}\n\nion-card-header {\n  padding: 16px 8px;\n  text-align: center;\n}\n\n.products ion-item {\n  --background-activated-opacity: 0.03;\n  --border-color: var(--ion-color-light, #fff);\n  --detail-icon-opacity: 0.1;\n}\n\n.products ion-item .product-name {\n  margin-top: 4px;\n  margin-bottom: 4px;\n  font-size: 18px;\n}\n\n.products ion-item .product-description {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.products ion-item .product-price {\n  margin-top: 4px;\n  margin-bottom: 4px;\n  font-size: 16px;\n}\n\n.products ion-item img {\n  border-radius: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL3ZlbmRvci1saXN0L0Q6XFxsdXhlLi4uIGRlYnVnIDkgT0NUL3NyY1xcYXBwXFx2ZW5kb3JcXHZlbmRvci1saXN0XFx2ZW5kb3ItbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZlbmRvci92ZW5kb3ItbGlzdC92ZW5kb3ItbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxTQUFBO0FDQVI7O0FER0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDQUo7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUk7RUFDSSxvQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsMEJBQUE7QUNDUjs7QURBUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNFWjs7QURBUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0VaOztBREFRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0VaOztBREFRO0VBQ0ksa0JBQUE7QUNFWiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci92ZW5kb3ItbGlzdC92ZW5kb3ItbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVuZG9yLWxpc3Qge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn1cbmlvbi1jYXJkLXRpdGxlIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC40cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbmlvbi1jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogMTZweCA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByb2R1Y3RzIHtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMC4wMztcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCwgI2ZmZik7XG4gICAgICAgIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMC4xO1xuICAgICAgICAucHJvZHVjdC1uYW1lIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICAgICAucHJvZHVjdC1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2R1Y3QtcHJpY2Uge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnZlbmRvci1saXN0IGlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMTZweCA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2R1Y3RzIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAwLjAzO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LCAjZmZmKTtcbiAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAwLjE7XG59XG4ucHJvZHVjdHMgaW9uLWl0ZW0gLnByb2R1Y3QtbmFtZSB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ucHJvZHVjdHMgaW9uLWl0ZW0gLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5wcm9kdWN0cyBpb24taXRlbSAucHJvZHVjdC1wcmljZSB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ucHJvZHVjdHMgaW9uLWl0ZW0gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/vendor/vendor-list/vendor-list.page.ts": function srcAppVendorVendorListVendorListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VendorListPage", function () {
      return VendorListPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _data_vendor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../data/vendor */
    "./src/app/data/vendor.ts");

    var VendorListPage = /*#__PURE__*/function () {
      function VendorListPage(platform, api, settings, router, navCtrl, route, vendor) {
        _classCallCheck(this, VendorListPage);

        this.platform = platform;
        this.api = api;
        this.settings = settings;
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.vendor = vendor;
        this.filter = {};
        this.hasMoreItems = true;
        this.tempVendor = [];
        this.filter.page = 1;
        this.filter.per_page = 30;
        this.filter.wc_vendor = true;
      }

      _createClass(VendorListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //Commaon
          this.getVendors(); // Delete all these once above is working fine
          //WCMP
          //this.getWcVendors();
          //DOKAN
          //this.getDokanVendors();
          //WCFM
          //this.getWCFMVendors();
        }
      }, {
        key: "getVendors",
        value: function getVendors() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee92() {
            var _this139 = this;

            return regeneratorRuntime.wrap(function _callee92$(_context92) {
              while (1) {
                switch (_context92.prev = _context92.next) {
                  case 0:
                    _context92.next = 2;
                    return this.api.postItem('vendors', this.filter).then(function (res) {
                      if (res) _this139.vendors = res;
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context92.stop();
                }
              }
            }, _callee92, this);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee93() {
            var _this140 = this;

            return regeneratorRuntime.wrap(function _callee93$(_context93) {
              while (1) {
                switch (_context93.prev = _context93.next) {
                  case 0:
                    this.filter.page = this.filter.page + 1;
                    /* Common */

                    _context93.next = 3;
                    return this.api.postItem('vendors', this.filter).then(function (res) {
                      _this140.tempVendor = res;

                      _this140.vendors.push.apply(_this140.vendors, res);

                      event.target.complete();
                      if (_this140.tempVendor && _this140.tempVendor.length == 0) _this140.hasMoreItems = false;else if (!_this140.tempVendor || !_this140.tempVendor.length) event.target.complete();
                    }, function (err) {
                      event.target.complete();
                    });

                  case 3:
                  case "end":
                    return _context93.stop();
                }
              }
            }, _callee93, this);
          }));
        }
        /* WC Marketplace */

      }, {
        key: "getWcVendors",
        value: function getWcVendors() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee94() {
            var _this141 = this;

            return regeneratorRuntime.wrap(function _callee94$(_context94) {
              while (1) {
                switch (_context94.prev = _context94.next) {
                  case 0:
                    _context94.next = 2;
                    return this.api.WCMPVendor('vendors', this.filter).then(function (res) {
                      _this141.vendors = res;
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context94.stop();
                }
              }
            }, _callee94, this);
          }));
        }
      }, {
        key: "getDokanVendors",
        value: function getDokanVendors() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee95() {
            var _this142 = this;

            return regeneratorRuntime.wrap(function _callee95$(_context95) {
              while (1) {
                switch (_context95.prev = _context95.next) {
                  case 0:
                    _context95.next = 2;
                    return this.api.postItem('vendors-list', this.filter).then(function (res) {
                      _this142.vendors = res;
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context95.stop();
                }
              }
            }, _callee95, this);
          }));
        }
      }, {
        key: "getWCFMVendors",
        value: function getWCFMVendors() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee96() {
            var _this143 = this;

            return regeneratorRuntime.wrap(function _callee96$(_context96) {
              while (1) {
                switch (_context96.prev = _context96.next) {
                  case 0:
                    _context96.next = 2;
                    return this.api.postItem('wcfm-vendor-list', this.filter).then(function (res) {
                      _this143.vendors = res;
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context96.stop();
                }
              }
            }, _callee96, this);
          }));
        }
      }, {
        key: "getDetail",
        value: function getDetail(item) {
          this.vendor.vendor = item;
          this.navCtrl.navigateForward('/tabs/vendor/products');
        }
      }, {
        key: "onInput",
        value: function onInput() {
          if (this.searchInput.length) {
            this.vendors = [];
            this.filter.search_term = this.searchInput;
            this.filter.page = 1;
            this.getVendors();
          } else {
            this.vendors = [];
            this.filter.search_term = '';
            this.filter.page = 1;
            this.getVendors();
          }
        }
      }]);

      return VendorListPage;
    }();

    VendorListPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _data_vendor__WEBPACK_IMPORTED_MODULE_6__["Vendor"]
      }];
    };

    VendorListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vendor-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vendor-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/vendor-list/vendor-list.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vendor-list.page.scss */
      "./src/app/vendor/vendor-list/vendor-list.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _data_vendor__WEBPACK_IMPORTED_MODULE_6__["Vendor"]])], VendorListPage);
    /***/
  }
}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map