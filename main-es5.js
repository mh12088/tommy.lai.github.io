function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/dist/esm-browser/index.js");
    /* harmony import */


    var _components_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/toggle-switch/toggle-switch.component */
    "./src/app/components/toggle-switch/toggle-switch.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_web_authn_web_authn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/web-authn/web-authn.component */
    "./src/app/components/web-authn/web-authn.component.ts");
    /* harmony import */


    var _components_web_authn_mock_web_authn_mock_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/web-authn-mock/web-authn-mock.component */
    "./src/app/components/web-authn-mock/web-authn-mock.component.ts");

    function AppComponent_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-web-authn");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function AppComponent_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-web-authn-mock");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'biometric-login-demo';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this._$gaService.init();
          var deviceId = uuid__WEBPACK_IMPORTED_MODULE_1__["v4"]();

          if (!localStorage.getItem("device_id")) {
            localStorage.setItem("device_id", deviceId);
          }

          ;
          this.isMock = localStorage.getItem('isMock') === 'true' ? true : false; // this._$firebaseService.init();
        }
      }, {
        key: "updateIsMockFlag",
        value: function updateIsMockFlag(event) {
          this.isMock = event;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 4,
      consts: [["role", "banner", 1, "toolbar"], ["role", "main", 1, "content"], [2, "display", "flex"], [3, "flagName", "callback"], [2, "margin-left", "50px", 3, "flagName"], [4, "ngIf"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-toggle-switch", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("callback", function AppComponent_Template_app_toggle_switch_callback_3_listener($event) {
            return ctx.updateIsMockFlag($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-toggle-switch", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_ng_container_5_Template, 2, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_ng_container_6_Template, 2, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flagName", "isMock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flagName", "isPlatform");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMock);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMock);
        }
      },
      directives: [_components_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_2__["ToggleSwitchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _components_web_authn_web_authn_component__WEBPACK_IMPORTED_MODULE_5__["WebAuthnComponent"], _components_web_authn_mock_web_authn_mock_component__WEBPACK_IMPORTED_MODULE_6__["WebAuthnMockComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #292d84;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27, 31, 35, .2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n    border-color: rgba(27, 31, 35, .35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  \n  @media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _pwa_install_promotion_pwa_install_promotion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pwa-install-promotion/pwa-install-promotion.component */
    "./src/app/pwa-install-promotion/pwa-install-promotion.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _push_notification_push_notification_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./push-notification/push-notification.component */
    "./src/app/push-notification/push-notification.component.ts");
    /* harmony import */


    var _components_web_authn_mock_web_authn_mock_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/web-authn-mock/web-authn-mock.component */
    "./src/app/components/web-authn-mock/web-authn-mock.component.ts");
    /* harmony import */


    var _components_web_authn_web_authn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/web-authn/web-authn.component */
    "./src/app/components/web-authn/web-authn.component.ts");
    /* harmony import */


    var _services_web_authn_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/web-authn-api.service */
    "./src/app/services/web-authn-api.service.ts");
    /* harmony import */


    var _components_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/toggle-switch/toggle-switch.component */
    "./src/app/components/toggle-switch/toggle-switch.component.ts");
    /* harmony import */


    var _services_web_authn_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/web-authn-service */
    "./src/app/services/web-authn-service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_web_authn_api_service__WEBPACK_IMPORTED_MODULE_12__["WebAuthnAPIService"], _services_web_authn_service__WEBPACK_IMPORTED_MODULE_14__["WebAuthnService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
      _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker-modified.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_web_authn_web_authn_component__WEBPACK_IMPORTED_MODULE_11__["WebAuthnComponent"], _pwa_install_promotion_pwa_install_promotion_component__WEBPACK_IMPORTED_MODULE_7__["PwaInstallPromotionComponent"], _push_notification_push_notification_component__WEBPACK_IMPORTED_MODULE_9__["PushNotificationComponent"], _components_web_authn_mock_web_authn_mock_component__WEBPACK_IMPORTED_MODULE_10__["WebAuthnMockComponent"], _components_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_13__["ToggleSwitchComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_web_authn_web_authn_component__WEBPACK_IMPORTED_MODULE_11__["WebAuthnComponent"], _pwa_install_promotion_pwa_install_promotion_component__WEBPACK_IMPORTED_MODULE_7__["PwaInstallPromotionComponent"], _push_notification_push_notification_component__WEBPACK_IMPORTED_MODULE_9__["PushNotificationComponent"], _components_web_authn_mock_web_authn_mock_component__WEBPACK_IMPORTED_MODULE_10__["WebAuthnMockComponent"], _components_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_13__["ToggleSwitchComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
          _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker-modified.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
          }), _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
          providers: [_services_web_authn_api_service__WEBPACK_IMPORTED_MODULE_12__["WebAuthnAPIService"], _services_web_authn_service__WEBPACK_IMPORTED_MODULE_14__["WebAuthnService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/toggle-switch/toggle-switch.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/toggle-switch/toggle-switch.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ToggleSwitchComponent */

  /***/
  function srcAppComponentsToggleSwitchToggleSwitchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToggleSwitchComponent", function () {
      return ToggleSwitchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_mock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/mock.service */
    "./src/app/services/mock.service.ts");

    var ToggleSwitchComponent = /*#__PURE__*/function () {
      function ToggleSwitchComponent(mockService) {
        _classCallCheck(this, ToggleSwitchComponent);

        this.mockService = mockService;
        this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ToggleSwitchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isChecked = !!JSON.parse(localStorage.getItem(this.flagName));
        }
      }, {
        key: "onChange",
        value: function onChange() {
          this.isChecked = !this.isChecked;

          switch (this.flagName) {
            case 'isMock':
              localStorage.setItem(this.flagName, JSON.stringify(this.isChecked));
              localStorage.removeItem('deviceId');
              localStorage.removeItem('user_list');
              this.callback.emit(this.isChecked);
              this.mockService.resetUser();
              break;

            default:
              localStorage.setItem(this.flagName, JSON.stringify(this.isChecked));
              break;
          }
        }
      }]);

      return ToggleSwitchComponent;
    }();

    ToggleSwitchComponent.ɵfac = function ToggleSwitchComponent_Factory(t) {
      return new (t || ToggleSwitchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mock_service__WEBPACK_IMPORTED_MODULE_1__["MockService"]));
    };

    ToggleSwitchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToggleSwitchComponent,
      selectors: [["app-toggle-switch"]],
      inputs: {
        flagName: "flagName"
      },
      outputs: {
        callback: "callback"
      },
      decls: 6,
      vars: 2,
      consts: [[1, "toggle-switch-container"], [1, "switch"], ["type", "checkbox", 3, "checked", "change"], [1, "slider", "round"]],
      template: function ToggleSwitchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ToggleSwitchComponent_Template_input_change_2_listener() {
            return ctx.onChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isChecked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.flagName);
        }
      },
      styles: [".toggle-switch-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  \n}\n.toggle-switch-container[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 17px;\n}\n.toggle-switch-container[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: auto;\n  height: auto;\n}\n.toggle-switch-container[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n.toggle-switch-container[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 13px;\n  width: 13px;\n  left: 2px;\n  bottom: 2px;\n  background-color: white;\n  transition: 0.4s;\n}\n.toggle-switch-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #2196F3;\n}\n.toggle-switch-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px #2196F3;\n}\n.toggle-switch-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(13px);\n}\n.toggle-switch-container[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%] {\n  border-radius: 17px;\n}\n.toggle-switch-container[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21teS9Eb2N1bWVudHMvZ2l0L3RvbW15LmxhaS5naXRodWIuaW8vc3JjL2FwcC9jb21wb25lbnRzL3RvZ2dsZS1zd2l0Y2gvdG9nZ2xlLXN3aXRjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90b2dnbGUtc3dpdGNoL3RvZ2dsZS1zd2l0Y2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQW9EQSxvQkFBQTtBQ2xESjtBRERJO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDR1I7QURBSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VSO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFFQSxnQkFBQTtBQ0NSO0FERUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFFQSxnQkFBQTtBQ0FSO0FER0k7RUFDSSx5QkFBQTtBQ0RSO0FESUk7RUFDSSwyQkFBQTtBQ0ZSO0FES0k7RUFHSSwyQkFBQTtBQ0xSO0FEU0k7RUFDSSxtQkFBQTtBQ1BSO0FEVUk7RUFDSSxrQkFBQTtBQ1JSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b2dnbGUtc3dpdGNoL3RvZ2dsZS1zd2l0Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9nZ2xlLXN3aXRjaC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5zd2l0Y2gge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMTdweDtcbiAgICB9XG5cbiAgICAuc3dpdGNoIGlucHV0IHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAuc2xpZGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gICAgICAgIHRyYW5zaXRpb246IC40cztcbiAgICB9XG5cbiAgICAuc2xpZGVyOmJlZm9yZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgaGVpZ2h0OiAxM3B4O1xuICAgICAgICB3aWR0aDogMTNweDtcbiAgICAgICAgbGVmdDogMnB4O1xuICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XG4gICAgfVxuXG4gICAgaW5wdXQ6Y2hlY2tlZCsuc2xpZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbiAgICB9XG5cbiAgICBpbnB1dDpmb2N1cysuc2xpZGVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xuICAgIH1cblxuICAgIGlucHV0OmNoZWNrZWQrLnNsaWRlcjpiZWZvcmUge1xuICAgICAgICAvLyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICAgICAgLy8gLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEzcHgpO1xuICAgIH1cblxuICAgIC8qIFJvdW5kZWQgc2xpZGVycyAqL1xuICAgIC5zbGlkZXIucm91bmQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICAgIH1cblxuICAgIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbn0iLCIudG9nZ2xlLXN3aXRjaC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cbn1cbi50b2dnbGUtc3dpdGNoLWNvbnRhaW5lciAuc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDE3cHg7XG59XG4udG9nZ2xlLXN3aXRjaC1jb250YWluZXIgLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG59XG4udG9nZ2xlLXN3aXRjaC1jb250YWluZXIgLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cbi50b2dnbGUtc3dpdGNoLWNvbnRhaW5lciAuc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxM3B4O1xuICB3aWR0aDogMTNweDtcbiAgbGVmdDogMnB4O1xuICBib3R0b206IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cbi50b2dnbGUtc3dpdGNoLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG59XG4udG9nZ2xlLXN3aXRjaC1jb250YWluZXIgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xufVxuLnRvZ2dsZS1zd2l0Y2gtY29udGFpbmVyIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxM3B4KTtcbn1cbi50b2dnbGUtc3dpdGNoLWNvbnRhaW5lciAuc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcbn1cbi50b2dnbGUtc3dpdGNoLWNvbnRhaW5lciAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleSwitchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-toggle-switch',
          templateUrl: './toggle-switch.component.html',
          styleUrls: ['./toggle-switch.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_mock_service__WEBPACK_IMPORTED_MODULE_1__["MockService"]
        }];
      }, {
        flagName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        callback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/web-authn-mock/web-authn-mock.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/web-authn-mock/web-authn-mock.component.ts ***!
    \***********************************************************************/

  /*! exports provided: WebAuthnMockComponent */

  /***/
  function srcAppComponentsWebAuthnMockWebAuthnMockComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebAuthnMockComponent", function () {
      return WebAuthnMockComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_mock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/mock.service */
    "./src/app/services/mock.service.ts");
    /* harmony import */


    var src_app_services_web_authn_mock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/web-authn-mock.service */
    "./src/app/services/web-authn-mock.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function WebAuthnMockComponent_label_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The Email format is invalid. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "red");
      }
    }

    function WebAuthnMockComponent_label_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The mobile number is invalid.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "red");
      }
    }

    function WebAuthnMockComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Is Support Biometic Button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WebAuthnMockComponent_ng_container_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Error: ", ctx_r3.errorMsg, " ");
      }
    }

    function WebAuthnMockComponent_ng_template_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WebAuthnMockComponent_ng_container_39_ng_container_9_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function WebAuthnMockComponent_ng_container_39_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebAuthnMockComponent_ng_container_39_ng_container_9_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.enableBiometricLogin(user_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enable Biometric ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WebAuthnMockComponent_ng_container_39_ng_container_9_ng_container_3_Template, 1, 0, "ng-container", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4);
      }
    }

    function WebAuthnMockComponent_ng_container_39_ng_container_10_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function WebAuthnMockComponent_ng_container_39_ng_container_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebAuthnMockComponent_ng_container_39_ng_container_10_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.enableBiometricLogin(user_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Disable Biometric ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WebAuthnMockComponent_ng_container_39_ng_container_10_ng_container_3_Template, 1, 0, "ng-container", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4);
      }
    }

    function WebAuthnMockComponent_ng_container_39_ng_container_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebAuthnMockComponent_ng_container_39_ng_container_11_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.signin(user_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login with Biometric ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function WebAuthnMockComponent_ng_container_39_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebAuthnMockComponent_ng_container_39_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var user_r7 = ctx.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.deleteAccount(user_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Delete Account");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WebAuthnMockComponent_ng_container_39_ng_container_9_Template, 4, 1, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WebAuthnMockComponent_ng_container_39_ng_container_10_Template, 4, 1, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WebAuthnMockComponent_ng_container_39_ng_container_11_Template, 3, 0, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var user_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Email: ", user_r7 == null ? null : user_r7.email, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Mobile: ", user_r7 == null ? null : user_r7.mobileNumber, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (user_r7 == null ? null : user_r7.credentials == null ? null : user_r7.credentials.length) === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (user_r7 == null ? null : user_r7.credentials == null ? null : user_r7.credentials.length) > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (user_r7 == null ? null : user_r7.credentials == null ? null : user_r7.credentials.length) > 0);
      }
    }

    var WebAuthnMockComponent = /*#__PURE__*/function () {
      function WebAuthnMockComponent(mockService, webAuthnMockService) {
        _classCallCheck(this, WebAuthnMockComponent);

        this.mockService = mockService;
        this.webAuthnMockService = webAuthnMockService;
        this.errorMsg = "";
        this.userList = [];
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
          mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9]{8}$")]),
          isEnableBiometricLogin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.authenticator = {};
      }

      _createClass(WebAuthnMockComponent, [{
        key: "email",
        get: function get() {
          return this.userForm.get('email');
        }
      }, {
        key: "mobileNumber",
        get: function get() {
          return this.userForm.get('mobileNumber');
        }
      }, {
        key: "isEnableBiometricLogin",
        get: function get() {
          return this.userForm.get('isEnableBiometricLogin');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userList = this.mockService.getAllUser();
          this.deviceId = localStorage.getItem("device_id") || "";
          this.isSupportBiometricLogin$ = this.isSupportBiometricLogin();
        }
      }, {
        key: "enableBiometricLogin",
        value: function enableBiometricLogin(user) {
          if (user.credentials.length === 0) {
            var isConfirm = confirm("Are you sure you want to enable biometric login?");
            if (isConfirm) this.webAuthnSignup(user);
          } else {
            var _isConfirm = confirm("Are you sure you want to disable biometric login?");

            if (_isConfirm) {
              user.credentials = [];
              this.mockService.updateUser(user);
            }
          }
        }
      }, {
        key: "deleteAccount",
        value: function deleteAccount(user) {
          var isConfirm = confirm("Are you sure you want to delete this user (".concat(user.email, ")?"));
          if (isConfirm) this.mockService.deleteUser(user);
        }
      }, {
        key: "isSupportBiometricLogin",
        value: function isSupportBiometricLogin() {
          if (window.PublicKeyCredential) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(new Promise(function (resolve, reject) {
              PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable().then(function (available) {
                if (available) {
                  console.log("Supported.");
                  resolve(true);
                } else {
                  console.log("WebAuthn supported, Platform Authenticator *not* supported.");
                  resolve(false);
                }
              })["catch"](function (error) {
                console.log("Something went wrong.");
                resolve(false);
              });
            }));
          } else {
            console.log("Not supported.");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
          }
        }
      }, {
        key: "signup",
        value: function signup() {
          var user = {
            mobileNumber: this.mobileNumber.value,
            email: this.email.value,
            credentials: [],
            deviceId: this.deviceId
          }; // Duplicate user create Checking

          var errorMsgList = this.mockService.validateCreateUser(user);

          if (errorMsgList.length > 0) {
            alert(errorMsgList.toString());
            return;
          }

          var userFromDB = this.mockService.createUser(user);
          this.userList = this.mockService.getAllUser();
          alert("Your Account Has been Created.");
          var isEnableBiometricLogin = this.isEnableBiometricLogin.value;

          if (isEnableBiometricLogin) {
            alert("Enable biometric login...");
            this.webAuthnSignup(userFromDB);
          }
        }
      }, {
        key: "webAuthnSignup",
        value: function webAuthnSignup(user) {
          var _this = this;

          // Ask for WebAuthn Auth method
          this.webAuthnMockService.signup(user).then(function (credential) {
            console.log("---------Credentials Create response---------");
            console.log(JSON.stringify(credential)); // Call server to validate and save credential
            // Hardcoded on frontend

            console.log("---------Public key Resonse----------");
            console.log(credential);
            console.log("---------Public key Resonse(URLBase64)----------");

            var urlbase64 = _this.mockService.decodePublicKeyCredentialToBase64String(credential);

            console.log(JSON.stringify(urlbase64));
            console.log("---------Public key Resonse(decoded)----------");
            console.log(JSON.stringify(_this.mockService.decodePublicKeyCredential(credential)));

            var valid = _this.mockService.registerCredential(user, credential);

            if (valid) {
              alert("Registration Successful");
            } else {
              alert("Registration Failed");
            }
          })["catch"](function (error) {
            _this.errorMsg = error;
            console.log("Credentials Create Error: ", error);
          });
        }
      }, {
        key: "signin",
        value: function signin(user) {
          var _this2 = this;

          var userFromDB = {
            credentials: []
          };

          if (user) {
            userFromDB = this.mockService.getUserByMobileNumber(user.mobileNumber);
          } else {
            userFromDB = this.mockService.getUserByDeviceId(this.deviceId);
          }

          ;
          console.log("----------Saved User:----------");
          console.log(JSON.stringify(userFromDB));
          console.log(userFromDB);
          this.webAuthnMockService.signin(userFromDB).then(function (assertion) {
            alert("Authentication Successful");
            console.log("----------Assertion response----------");
            console.log(assertion);
            console.log("---------Public key Resonse(URLBase64)----------");

            var urlbase64 = _this2.mockService.decodePublicKeyCredentialToBase64String(assertion);

            console.log(JSON.stringify(urlbase64)); // Mock payload

            var obj = {
              id: assertion.id,
              type: assertion.type,
              response: {
                authenticatorData: null,
                clientDataJSON: null,
                signature: null,
                userHandle: null
              },
              rawId: null
            };
            obj.response.authenticatorData = new Uint8Array(assertion.response.authenticatorData);
            obj.response.clientDataJSON = new Uint8Array(assertion.response.clientDataJSON);
            obj.response.signature = new Uint8Array(assertion.response.signature);
            obj.response.userHandle = new Uint8Array(assertion.response.userHandle);
            obj.rawId = new Uint8Array(assertion.rawId);
            console.log(JSON.stringify(obj));

            _this2.mockService.decodeAssertion(assertion); // TODO: Call server to validate assertion
            // When server return ok,login successful else login failed

          })["catch"](function (error) {
            alert("Authentication Failed");
            _this2.errorMsg = error;
            console.log("Authentication Failed: ", error);
          });
        }
      }]);

      return WebAuthnMockComponent;
    }();

    WebAuthnMockComponent.ɵfac = function WebAuthnMockComponent_Factory(t) {
      return new (t || WebAuthnMockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mock_service__WEBPACK_IMPORTED_MODULE_3__["MockService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_web_authn_mock_service__WEBPACK_IMPORTED_MODULE_4__["WebAuthnMockService"]));
    };

    WebAuthnMockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WebAuthnMockComponent,
      selectors: [["app-web-authn-mock"]],
      decls: 40,
      vars: 11,
      consts: [[1, "register-form-container"], [3, "formGroup"], [1, "form-field"], [1, "form-label"], [3, "ngClass"], ["name", "email", "formControlName", "email"], [3, "ngClass", 4, "ngIf"], ["name", "mobileNumber", "formControlName", "mobileNumber", "maxlength", "8"], [1, "form-field", "checkbox"], ["type", "checkbox", "name", "isEnableBiometricLogin", "formControlName", "isEnableBiometricLogin"], [1, "btn", 3, "disabled", "click"], [4, "ngIf"], [1, "line"], [1, "user-list-container"], ["biometricIcon", ""], [4, "ngFor", "ngForOf"], [1, "btn"], [1, "red", "errorMsg"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-fingerprint"], ["d", "M8.06 6.5a.5.5 0 0 1 .5.5v.776a11.5 11.5 0 0 1-.552 3.519l-1.331 4.14a.5.5 0 0 1-.952-.305l1.33-4.141a10.5 10.5 0 0 0 .504-3.213V7a.5.5 0 0 1 .5-.5Z"], ["d", "M6.06 7a2 2 0 1 1 4 0 .5.5 0 1 1-1 0 1 1 0 1 0-2 0v.332c0 .409-.022.816-.066 1.221A.5.5 0 0 1 6 8.447c.04-.37.06-.742.06-1.115V7Zm3.509 1a.5.5 0 0 1 .487.513 11.5 11.5 0 0 1-.587 3.339l-1.266 3.8a.5.5 0 0 1-.949-.317l1.267-3.8a10.5 10.5 0 0 0 .535-3.048A.5.5 0 0 1 9.569 8Zm-3.356 2.115a.5.5 0 0 1 .33.626L5.24 14.939a.5.5 0 1 1-.955-.296l1.303-4.199a.5.5 0 0 1 .625-.329Z"], ["d", "M4.759 5.833A3.501 3.501 0 0 1 11.559 7a.5.5 0 0 1-1 0 2.5 2.5 0 0 0-4.857-.833.5.5 0 1 1-.943-.334Zm.3 1.67a.5.5 0 0 1 .449.546 10.72 10.72 0 0 1-.4 2.031l-1.222 4.072a.5.5 0 1 1-.958-.287L4.15 9.793a9.72 9.72 0 0 0 .363-1.842.5.5 0 0 1 .546-.449Zm6 .647a.5.5 0 0 1 .5.5c0 1.28-.213 2.552-.632 3.762l-1.09 3.145a.5.5 0 0 1-.944-.327l1.089-3.145c.382-1.105.578-2.266.578-3.435a.5.5 0 0 1 .5-.5Z"], ["d", "M3.902 4.222a4.996 4.996 0 0 1 5.202-2.113.5.5 0 0 1-.208.979 3.996 3.996 0 0 0-4.163 1.69.5.5 0 0 1-.831-.556Zm6.72-.955a.5.5 0 0 1 .705-.052A4.99 4.99 0 0 1 13.059 7v1.5a.5.5 0 1 1-1 0V7a3.99 3.99 0 0 0-1.386-3.028.5.5 0 0 1-.051-.705ZM3.68 5.842a.5.5 0 0 1 .422.568c-.029.192-.044.39-.044.59 0 .71-.1 1.417-.298 2.1l-1.14 3.923a.5.5 0 1 1-.96-.279L2.8 8.821A6.531 6.531 0 0 0 3.058 7c0-.25.019-.496.054-.736a.5.5 0 0 1 .568-.422Zm8.882 3.66a.5.5 0 0 1 .456.54c-.084 1-.298 1.986-.64 2.934l-.744 2.068a.5.5 0 0 1-.941-.338l.745-2.07a10.51 10.51 0 0 0 .584-2.678.5.5 0 0 1 .54-.456Z"], ["d", "M4.81 1.37A6.5 6.5 0 0 1 14.56 7a.5.5 0 1 1-1 0 5.5 5.5 0 0 0-8.25-4.765.5.5 0 0 1-.5-.865Zm-.89 1.257a.5.5 0 0 1 .04.706A5.478 5.478 0 0 0 2.56 7a.5.5 0 0 1-1 0c0-1.664.626-3.184 1.655-4.333a.5.5 0 0 1 .706-.04ZM1.915 8.02a.5.5 0 0 1 .346.616l-.779 2.767a.5.5 0 1 1-.962-.27l.778-2.767a.5.5 0 0 1 .617-.346Zm12.15.481a.5.5 0 0 1 .49.51c-.03 1.499-.161 3.025-.727 4.533l-.07.187a.5.5 0 0 1-.936-.351l.07-.187c.506-1.35.634-2.74.663-4.202a.5.5 0 0 1 .51-.49Z"], [1, "btn", "delete-btn", 3, "click"], [1, "btn", 3, "click"], [4, "ngTemplateOutlet"]],
      template: function WebAuthnMockComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Mock Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " * ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WebAuthnMockComponent_label_12_Template, 2, 1, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mobile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " * ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, WebAuthnMockComponent_label_21_Template, 2, 1, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Enable Biometric Login(TouchID/FaceID) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebAuthnMockComponent_Template_button_click_27_listener() {
            return ctx.signup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, WebAuthnMockComponent_div_29_Template, 3, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, WebAuthnMockComponent_ng_container_31_Template, 3, 1, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "User List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, WebAuthnMockComponent_ng_template_37_Template, 6, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, WebAuthnMockComponent_ng_container_39_Template, 13, 5, "ng-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "red");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.value && ctx.email.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "red");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobileNumber.value && ctx.mobileNumber.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.userForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 9, ctx.isSupportBiometricLogin$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userList);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: [".register-form-container[_ngcontent-%COMP%]   .form-field.checkbox[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n}\n.register-form-container[_ngcontent-%COMP%]   .form-field.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.register-form-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  display: block;\n  min-width: 60px;\n}\n.register-form-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]:not(.checkbox)   input[_ngcontent-%COMP%] {\n  min-width: 250px;\n}\n.register-form-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 120px;\n  height: auto;\n  background-color: #1976d2;\n  border: 1px solid white;\n  color: white;\n  cursor: pointer;\n  border-radius: 4px;\n  height: 35px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.register-form-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  background-color: lightgray;\n  cursor: not-allowed;\n}\n.register-form-container[_ngcontent-%COMP%]   line[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  border-bottom: 1px solid black;\n}\n.register-form-container[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.register-form-container[_ngcontent-%COMP%]   .bg-red[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.user-list-container[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  border-bottom: 1px solid black;\n}\n.user-list-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: auto;\n  height: auto;\n  background-color: #1976d2;\n  border: 1px solid white;\n  color: white;\n  cursor: pointer;\n  border-radius: 4px;\n  height: 35px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.user-list-container[_ngcontent-%COMP%]   .btn.delete-btn[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21teS9Eb2N1bWVudHMvZ2l0L3RvbW15LmxhaS5naXRodWIuaW8vc3JjL2FwcC9jb21wb25lbnRzL3dlYi1hdXRobi1tb2NrL3dlYi1hdXRobi1tb2NrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3dlYi1hdXRobi1tb2NrL3dlYi1hdXRobi1tb2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtBQ0RaO0FERVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0FoQjtBREdRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNEWjtBRElZO0VBQ0ksZ0JBQUE7QUNGaEI7QURPSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0xSO0FET0k7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0FDTFI7QURRSTtFQUNJLGNBQUE7RUFDQSw4QkFBQTtBQ05SO0FEU0k7RUFDSSxjQUFBO0FDUFI7QURVSTtFQUNJLHlCQUFBO0FDUlI7QURhSTtFQUNJLGNBQUE7RUFDQSw4QkFBQTtBQ1ZSO0FEYUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNYUjtBRFlRO0VBQ0kseUJBQUE7QUNWWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2ViLWF1dGhuLW1vY2svd2ViLWF1dGhuLW1vY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXItZm9ybS1jb250YWluZXIge1xuICAgIC5mb3JtLWZpZWxkIHtcbiAgICAgICAgJi5jaGVja2JveCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5mb3JtLWxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWluLXdpZHRoOiA2MHB4O1xuICAgICAgICB9XG4gICAgICAgICY6bm90KC5jaGVja2JveCkge1xuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICBcbiAgICAuYnRuIHtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAuYnRuOmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICB9XG5cbiAgICBsaW5lIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICB9XG4gICBcbiAgICAucmVkIHtcbiAgICAgICAgY29sb3I6ICNmNDQzMzY7XG4gICAgfVxuICAgXG4gICAgLmJnLXJlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gICAgfVxufVxuXG4udXNlci1saXN0LWNvbnRhaW5lciB7XG4gICAgLmxpbmUge1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIH1cblxuICAgIC5idG4ge1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgJi5kZWxldGUtYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnJlZ2lzdGVyLWZvcm0tY29udGFpbmVyIC5mb3JtLWZpZWxkLmNoZWNrYm94IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucmVnaXN0ZXItZm9ybS1jb250YWluZXIgLmZvcm0tZmllbGQuY2hlY2tib3ggaW5wdXQge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLnJlZ2lzdGVyLWZvcm0tY29udGFpbmVyIC5mb3JtLWZpZWxkIC5mb3JtLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cbi5yZWdpc3Rlci1mb3JtLWNvbnRhaW5lciAuZm9ybS1maWVsZDpub3QoLmNoZWNrYm94KSBpbnB1dCB7XG4gIG1pbi13aWR0aDogMjUwcHg7XG59XG4ucmVnaXN0ZXItZm9ybS1jb250YWluZXIgLmJ0biB7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5yZWdpc3Rlci1mb3JtLWNvbnRhaW5lciAuYnRuOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLnJlZ2lzdGVyLWZvcm0tY29udGFpbmVyIGxpbmUge1xuICBtYXJnaW46IDEwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuLnJlZ2lzdGVyLWZvcm0tY29udGFpbmVyIC5yZWQge1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cbi5yZWdpc3Rlci1mb3JtLWNvbnRhaW5lciAuYmctcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cblxuLnVzZXItbGlzdC1jb250YWluZXIgLmxpbmUge1xuICBtYXJnaW46IDEwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuLnVzZXItbGlzdC1jb250YWluZXIgLmJ0biB7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogMzVweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnVzZXItbGlzdC1jb250YWluZXIgLmJ0bi5kZWxldGUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAuthnMockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-web-authn-mock',
          templateUrl: './web-authn-mock.component.html',
          styleUrls: ['./web-authn-mock.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_mock_service__WEBPACK_IMPORTED_MODULE_3__["MockService"]
        }, {
          type: src_app_services_web_authn_mock_service__WEBPACK_IMPORTED_MODULE_4__["WebAuthnMockService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/web-authn/utils/app-util.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/web-authn/utils/app-util.ts ***!
    \********************************************************/

  /*! exports provided: registerPayload, loginPayload */

  /***/
  function srcAppComponentsWebAuthnUtilsAppUtilTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerPayload", function () {
      return registerPayload;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loginPayload", function () {
      return loginPayload;
    });

    var registerPayload = {
      "rawId": "xDMtpbMBPngyDCPiT-qoUl8BUiQ",
      "response": {
        "attestationObject": "o2NmbXRlYXBwbGVnYXR0U3RtdKFjeDVjglkCRjCCAkIwggHJoAMCAQICBgF-Qa8okzAKBggqhkjOPQQDAjBIMRwwGgYDVQQDDBNBcHBsZSBXZWJBdXRobiBDQSAxMRMwEQYDVQQKDApBcHBsZSBJbmMuMRMwEQYDVQQIDApDYWxpZm9ybmlhMB4XDTIyMDEwOTAxNTE0NVoXDTIyMDExMjAxNTE0NVowgZExSTBHBgNVBAMMQGZiNGU1ZmI2YTFmYThjYmU1MThkNGY3MzlkNjIyOGZmYTQ0OTE0ZTQ2NzdiNDI3ODc3MjFjM2U0MjlkNzYxZjUxGjAYBgNVBAsMEUFBQSBDZXJ0aWZpY2F0aW9uMRMwEQYDVQQKDApBcHBsZSBJbmMuMRMwEQYDVQQIDApDYWxpZm9ybmlhMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEsvIXWBHLBLPw3rh7xZ9ooLVuyjocq7w1lMU4bFFcUyHvIAgafvV1vNdX9NDBcslxT2gFr-QdKA5CEPD2oHKIA6NVMFMwDAYDVR0TAQH_BAIwADAOBgNVHQ8BAf8EBAMCBPAwMwYJKoZIhvdjZAgCBCYwJKEiBCD0xSGpdDiTGDVySB8oM8gMRUjv2qAx1YCHw8jsYFN4-zAKBggqhkjOPQQDAgNnADBkAjBGizCO2C_3Wno7NeQ0iezkY58b4kedg_S9J4t-napU3V0AfoPvjyQDGyTf6rarLOECMBf1nYZEl6eDHEHEg7G1EMJTaAFCfQd6MoohVxxokMj88eiUrsKW971LaY7CtKOF9VkCODCCAjQwggG6oAMCAQICEFYlU5XHp_tA6-Io2CYIU7YwCgYIKoZIzj0EAwMwSzEfMB0GA1UEAwwWQXBwbGUgV2ViQXV0aG4gUm9vdCBDQTETMBEGA1UECgwKQXBwbGUgSW5jLjETMBEGA1UECAwKQ2FsaWZvcm5pYTAeFw0yMDAzMTgxODM4MDFaFw0zMDAzMTMwMDAwMDBaMEgxHDAaBgNVBAMME0FwcGxlIFdlYkF1dGhuIENBIDExEzARBgNVBAoMCkFwcGxlIEluYy4xEzARBgNVBAgMCkNhbGlmb3JuaWEwdjAQBgcqhkjOPQIBBgUrgQQAIgNiAASDLocvJhSRgQIlufX81rtjeLX1Xz_LBFvHNZk0df1UkETfm_4ZIRdlxpod2gULONRQg0AaQ0-yTREtVsPhz7_LmJH-wGlggb75bLx3yI3dr0alruHdUVta-quTvpwLJpGjZjBkMBIGA1UdEwEB_wQIMAYBAf8CAQAwHwYDVR0jBBgwFoAUJtdk2cV4wlpn0afeaxLQG2PxxtcwHQYDVR0OBBYEFOuugsT_oaxbUdTPJGEFAL5jvXeIMA4GA1UdDwEB_wQEAwIBBjAKBggqhkjOPQQDAwNoADBlAjEA3YsaNIGl-tnbtOdle4QeFEwnt1uHakGGwrFHV1Azcifv5VRFfvZIlQxjLlxIPnDBAjAsimBE3CAfz-Wbw00pMMFIeFHZYO1qdfHrSsq-OM0luJfQyAW-8Mf3iwelccboDgdoYXV0aERhdGFYmGQv8P1c0tEeoxmgZtShAxpeZTBBH1GgI0qVyzfSZnllRQAAAADySo5w0NP4LCk3MlI8xN5aABTEMy2lswE-eDIMI-JP6qhSXwFSJKUBAgMmIAEhWCCy8hdYEcsEs_DeuHvFn2igtW7KOhyrvDWUxThsUVxTISJYIO8gCBp-9XW811f00MFyyXFPaAWv5B0oDkIQ8PagcogD",
        "clientDataJSON": "eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoiWTJObVpHRTROVGN0T0RZM09DMDBZV1JsTFdFeVlUY3RZMlEzTTJReFltUmlNVFk0Iiwib3JpZ2luIjoiaHR0cHM6Ly9taDEyMDg4LmdpdGh1Yi5pbyJ9"
      },
      "getClientExtensionResults": {},
      "id": "xDMtpbMBPngyDCPiT-qoUl8BUiQ",
      "type": "public-key"
    };
    var loginPayload = {
      "rawId": "xDMtpbMBPngyDCPiT-qoUl8BUiQ",
      "response": {
        "authenticatorData": "ZC_w_VzS0R6jGaBm1KEDGl5lMEEfUaAjSpXLN9JmeWUFAAAAAA",
        "signature": "MEUCIQDZ9_4HoURKbFosiR4AbptFt9LHTMB8hKLt2M-ecLodggIgD5w4yPk17jIlIEIBD5OMCICnVdT9reTaq73jfMyyaZ4",
        "userHandle": "MTExMTExMTE",
        "clientDataJSON": "eyJ0eXBlIjoid2ViYXV0aG4uZ2V0IiwiY2hhbGxlbmdlIjoiTm1RMU4yRmpZVFl0T1dKbE55MDBaRGt4TFdJd01ESXRNRFExTW1JellXTXpNbUkxIiwib3JpZ2luIjoiaHR0cHM6Ly9taDEyMDg4LmdpdGh1Yi5pbyJ9"
      },
      "getClientExtensionResults": {},
      "id": "xDMtpbMBPngyDCPiT-qoUl8BUiQ",
      "type": "public-key"
    }; // export const testingData = { 
    //     "deviceId": "b713af70-9575-49f0-8833-be26b1cadb0b", 
    //     "attestation": "o2NmbXRkbm9uZWdhdHRTdG10oGhhdXRoRGF0YVikSZYN5YgOjGh0NBcPZHZgW4_krrmihjLHmVzzuoMdl2NFAAAAAQAAAAAAAAAAAAAAAAAAAAAAIHWLxBd6yM9-3h9REI9J6gX3o_MDEZU_5jM1m2o275iZpQECAyYgASFYICq9eCvRj5HWyi72tOk4LMtXrdqhwoJUgmFOG25GW0ITIlggyQtZ_IhU-TkjaUI4MkIDPKmk_gxFwEVEEkvskoLJWSo", 
    //     "credentialId": "dYvEF3rIz37eH1EQj0nqBfej8wMRlT_mMzWbajbvmJk", 
    //     "clientDataJSON": "eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoiWXpGa05XUTRaR0V0WmpCbFl5MDBaakF6TFRnMFlqUXRaRGc1WlRreFlqZzJZemRoIiwib3JpZ2luIjoiaHR0cDovL2xvY2FsaG9zdDo0MjAwIiwiY3Jvc3NPcmlnaW4iOmZhbHNlfQ" 
    // };

    /***/
  },

  /***/
  "./src/app/components/web-authn/web-authn.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/web-authn/web-authn.component.ts ***!
    \*************************************************************/

  /*! exports provided: WebAuthnComponent */

  /***/
  function srcAppComponentsWebAuthnWebAuthnComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebAuthnComponent", function () {
      return WebAuthnComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_mock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/mock.service */
    "./src/app/services/mock.service.ts");
    /* harmony import */


    var src_app_services_web_authn_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/web-authn-service */
    "./src/app/services/web-authn-service.ts");
    /* harmony import */


    var src_app_services_web_authn_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/web-authn-api.service */
    "./src/app/services/web-authn-api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function WebAuthnComponent_label_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The Email format is invalid. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "red");
      }
    }

    function WebAuthnComponent_label_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The mobile number is invalid.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "red");
      }
    }

    function WebAuthnComponent_ng_container_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Error: ", ctx_r2.errorMsg, " ");
      }
    }

    function WebAuthnComponent_ng_template_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WebAuthnComponent_ng_container_37_ng_container_9_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function WebAuthnComponent_ng_container_37_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebAuthnComponent_ng_container_37_ng_container_9_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.enableBiometricLogin(user_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enable Biometric ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WebAuthnComponent_ng_container_37_ng_container_9_ng_container_3_Template, 1, 0, "ng-container", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
      }
    }

    function WebAuthnComponent_ng_container_37_ng_container_10_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function WebAuthnComponent_ng_container_37_ng_container_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebAuthnComponent_ng_container_37_ng_container_10_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.enableBiometricLogin(user_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Disable Biometric ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WebAuthnComponent_ng_container_37_ng_container_10_ng_container_3_Template, 1, 0, "ng-container", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
      }
    }

    function WebAuthnComponent_ng_container_37_ng_container_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebAuthnComponent_ng_container_37_ng_container_11_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.signin(user_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login with Biometric ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function WebAuthnComponent_ng_container_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebAuthnComponent_ng_container_37_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var user_r6 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.deleteAccount(user_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Delete Account");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WebAuthnComponent_ng_container_37_ng_container_9_Template, 4, 1, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WebAuthnComponent_ng_container_37_ng_container_10_Template, 4, 1, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WebAuthnComponent_ng_container_37_ng_container_11_Template, 3, 0, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var user_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Email: ", user_r6 == null ? null : user_r6.email, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Mobile: ", user_r6 == null ? null : user_r6.mobileNumber, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (user_r6 == null ? null : user_r6.credentials == null ? null : user_r6.credentials.length) === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (user_r6 == null ? null : user_r6.credentials == null ? null : user_r6.credentials.length) > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (user_r6 == null ? null : user_r6.credentials == null ? null : user_r6.credentials.length) > 0);
      }
    }

    var WebAuthnComponent = /*#__PURE__*/function () {
      function WebAuthnComponent(mockService, webAuthnService, webAuthnAPIService) {
        _classCallCheck(this, WebAuthnComponent);

        this.mockService = mockService;
        this.webAuthnService = webAuthnService;
        this.webAuthnAPIService = webAuthnAPIService;
        this.errorMsg = "";
        this.userList = [];
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
          mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9]{8}$")]),
          isEnableBiometricLogin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.authenticator = {};
      }

      _createClass(WebAuthnComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userList = this.mockService.getAllUser();
          this.deviceId = localStorage.getItem("device_id") || "";
        }
      }, {
        key: "email",
        get: function get() {
          return this.userForm.get('email');
        }
      }, {
        key: "mobileNumber",
        get: function get() {
          return this.userForm.get('mobileNumber');
        }
      }, {
        key: "isEnableBiometricLogin",
        get: function get() {
          return this.userForm.get('isEnableBiometricLogin');
        }
      }, {
        key: "signup",
        value: function signup() {
          var _this3 = this;

          var user = {
            mobileNumber: this.userForm.get('mobileNumber').value,
            email: this.userForm.get('email').value,
            credentials: [],
            deviceId: this.deviceId
          };
          var errorMsgList = this.mockService.validateCreateUser(user);

          if (errorMsgList.length > 0) {
            alert(errorMsgList.toString());
            return;
          }

          var userFromDB = this.mockService.createUser(user);
          this.userList = this.mockService.getAllUser();
          alert("Your Account Has been Created.");
          var isEnableBiometricLogin = this.userForm.get('isEnableBiometricLogin').value;

          if (isEnableBiometricLogin) {
            alert("Enable biometric login...");
            this.webAuthnService.signupFlow(userFromDB).subscribe(function (response) {
              console.log(response);
              userFromDB.credentials = [{
                credentialIdString: response.credentialIdString
              }];
              userFromDB.authenticatorString = response.authenticatorString;

              _this3.mockService.updateUser(userFromDB);

              alert("Registration Successful");
            });
          }
        }
      }, {
        key: "enableBiometricLogin",
        value: function enableBiometricLogin(user) {
          if (user.credentials.length === 0) {
            var isConfirm = confirm("Are you sure you want to enable biometric login?");
            if (isConfirm) this.webAuthnService.signupFlow(user);
          } else {
            var _isConfirm2 = confirm("Are you sure you want to disable biometric login?");

            if (_isConfirm2) {
              user.credentials = [];
              this.mockService.updateUser(user);
            }
          }
        }
      }, {
        key: "deleteAccount",
        value: function deleteAccount(user) {
          var isConfirm = confirm("Are you sure you want to delete this user (".concat(user.email, ")?"));
          if (isConfirm) this.mockService.deleteUser(user);
        }
      }, {
        key: "signin",
        value: function signin(user) {
          var userFromDB = {
            credentials: []
          };

          if (user) {
            userFromDB = this.mockService.getUserByMobileNumber(user.mobileNumber);
          } else {
            userFromDB = this.mockService.getUserByDeviceId(this.deviceId);
          }

          ;
          console.log("----------Saved User:----------");
          console.log(JSON.stringify(userFromDB));
          this.webAuthnService.signinFlow(userFromDB).subscribe(function (response) {
            if (response == 'success') {
              alert("Login Successful");
            }

            console.log(response);
          });
        } // webAuthnRegister() {
        //   this.testService.webAuthnRegister().subscribe(
        //     response => {
        //       console.log(response);
        //       this.authenticator = response;
        //     },
        //     error => {
        //       console.log(error);
        //     });
        // }
        // webAuthnLogin() {
        //   this.testService.webAuthnLogin(this.authenticator).subscribe(
        //     response => {
        //       console.log(response)
        //     },
        //     error => {
        //       console.log(error);
        //     });
        // }
        // signupFlow() {
        //   // 1. Get challenge
        //   // 2. Call webauthn lib to register new public key
        //   // 3. Pass credential to server to validate and save
        //   const user = { mobileNumber: "11111111", email: "tommy@gmail.com" };
        //   this.mockV2Service.getChallenge().pipe(
        //     switchMap(challenge => {
        //       console.log(challenge);
        //       return from(new Promise((resolve, reject) => {
        //         this.mockV2Service.webAuthnSignup(user, challenge)
        //           .then((credential: any) => {
        //             const credentialBase64Url = this.mockV2Service.publicKeyCredentialToBase64Url(credential);
        //             this.savedCredentialId = this.mockV2Service.registerCredential(credential);
        //             resolve(credentialBase64Url)
        //           })
        //           .catch(error => reject(error))
        //       }))
        //     }),
        //     switchMap(credentialBase64Url => {
        //       return this.mockV2Service.signup(credentialBase64Url);
        //     }),
        //     catchError(error => of(`Error: ${error}`))
        //   ).subscribe(data => {
        //     console.log(data);
        //   });
        // }
        // signupFlowV2() {
        //   const user = { mobileNumber: "11111111", email: "tommy@gmail.com" };
        //   this.mockV2Service.signupFlow(user).subscribe(data => { console.log(data) });
        // }
        // signinFlowV2() {
        //   const user = { mobileNumber: "11111111", email: "tommy@gmail.com", credentials: [{ credentialId: this.savedCredentialId }] };
        //   this.mockV2Service.signinFlow(user).subscribe(data => { console.log(data) });
        // }
        // signinFlow() {
        //   // 1. Get challenge and credential Id
        //   // 2. Call webauthn lib to validate credential Id and assertion
        //   // 3. Pass assertion to server to validate and login
        //   const user = { mobileNumber: "11111111", email: "tommy@gmail.com", credentials: [{ credentialId: this.savedCredentialId }] };
        //   if (this.savedCredentialId) {
        //     this.mockV2Service.getChallenge().pipe(
        //       switchMap(challenge => {
        //         return from(new Promise((resolve, reject) => {
        //           this.mockV2Service.webAuthnSignin(user, challenge)
        //             .then(assertion => {
        //               const credentialBase64Url = this.mockV2Service.publicKeyCredentialToBase64Url(assertion);
        //               resolve(credentialBase64Url);
        //             })
        //             .catch(error => reject(error))
        //         }))
        //       }),
        //       switchMap(credentialBase64Url => {
        //         return this.mockV2Service.signin(credentialBase64Url);
        //       }),
        //       catchError(error => of(`Error: ${error}`))
        //     ).subscribe(resp => {
        //       console.log(resp);
        //     });
        //   }
        // }

      }, {
        key: "isSupportBiometricLogin",
        value: function isSupportBiometricLogin() {
          if (window.PublicKeyCredential) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(new Promise(function (resolve, reject) {
              PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable().then(function (available) {
                if (available) {
                  // console.log("Supported.");
                  resolve(true);
                } else {
                  // console.log("WebAuthn supported, Platform Authenticator *not* supported.");
                  resolve(false);
                }
              })["catch"](function (error) {
                // console.log("Something went wrong.");
                resolve(false);
              });
            }));
          } else {
            // console.log("Not supported.");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
          }
        }
      }]);

      return WebAuthnComponent;
    }();

    WebAuthnComponent.ɵfac = function WebAuthnComponent_Factory(t) {
      return new (t || WebAuthnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mock_service__WEBPACK_IMPORTED_MODULE_3__["MockService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_web_authn_service__WEBPACK_IMPORTED_MODULE_4__["WebAuthnService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_web_authn_api_service__WEBPACK_IMPORTED_MODULE_5__["WebAuthnAPIService"]));
    };

    WebAuthnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WebAuthnComponent,
      selectors: [["app-web-authn"]],
      decls: 38,
      vars: 8,
      consts: [[1, "register-form-container"], [3, "formGroup"], [1, "form-field"], [1, "form-label"], [3, "ngClass"], ["name", "email", "formControlName", "email"], [3, "ngClass", 4, "ngIf"], ["name", "mobileNumber", "formControlName", "mobileNumber", "maxlength", "8"], [1, "form-field", "checkbox"], ["type", "checkbox", "name", "isEnableBiometricLogin", "formControlName", "isEnableBiometricLogin"], [1, "btn", 3, "disabled", "click"], [4, "ngIf"], [1, "line"], [1, "user-list-container"], ["biometricIcon", ""], [4, "ngFor", "ngForOf"], [1, "red", "errorMsg"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-fingerprint"], ["d", "M8.06 6.5a.5.5 0 0 1 .5.5v.776a11.5 11.5 0 0 1-.552 3.519l-1.331 4.14a.5.5 0 0 1-.952-.305l1.33-4.141a10.5 10.5 0 0 0 .504-3.213V7a.5.5 0 0 1 .5-.5Z"], ["d", "M6.06 7a2 2 0 1 1 4 0 .5.5 0 1 1-1 0 1 1 0 1 0-2 0v.332c0 .409-.022.816-.066 1.221A.5.5 0 0 1 6 8.447c.04-.37.06-.742.06-1.115V7Zm3.509 1a.5.5 0 0 1 .487.513 11.5 11.5 0 0 1-.587 3.339l-1.266 3.8a.5.5 0 0 1-.949-.317l1.267-3.8a10.5 10.5 0 0 0 .535-3.048A.5.5 0 0 1 9.569 8Zm-3.356 2.115a.5.5 0 0 1 .33.626L5.24 14.939a.5.5 0 1 1-.955-.296l1.303-4.199a.5.5 0 0 1 .625-.329Z"], ["d", "M4.759 5.833A3.501 3.501 0 0 1 11.559 7a.5.5 0 0 1-1 0 2.5 2.5 0 0 0-4.857-.833.5.5 0 1 1-.943-.334Zm.3 1.67a.5.5 0 0 1 .449.546 10.72 10.72 0 0 1-.4 2.031l-1.222 4.072a.5.5 0 1 1-.958-.287L4.15 9.793a9.72 9.72 0 0 0 .363-1.842.5.5 0 0 1 .546-.449Zm6 .647a.5.5 0 0 1 .5.5c0 1.28-.213 2.552-.632 3.762l-1.09 3.145a.5.5 0 0 1-.944-.327l1.089-3.145c.382-1.105.578-2.266.578-3.435a.5.5 0 0 1 .5-.5Z"], ["d", "M3.902 4.222a4.996 4.996 0 0 1 5.202-2.113.5.5 0 0 1-.208.979 3.996 3.996 0 0 0-4.163 1.69.5.5 0 0 1-.831-.556Zm6.72-.955a.5.5 0 0 1 .705-.052A4.99 4.99 0 0 1 13.059 7v1.5a.5.5 0 1 1-1 0V7a3.99 3.99 0 0 0-1.386-3.028.5.5 0 0 1-.051-.705ZM3.68 5.842a.5.5 0 0 1 .422.568c-.029.192-.044.39-.044.59 0 .71-.1 1.417-.298 2.1l-1.14 3.923a.5.5 0 1 1-.96-.279L2.8 8.821A6.531 6.531 0 0 0 3.058 7c0-.25.019-.496.054-.736a.5.5 0 0 1 .568-.422Zm8.882 3.66a.5.5 0 0 1 .456.54c-.084 1-.298 1.986-.64 2.934l-.744 2.068a.5.5 0 0 1-.941-.338l.745-2.07a10.51 10.51 0 0 0 .584-2.678.5.5 0 0 1 .54-.456Z"], ["d", "M4.81 1.37A6.5 6.5 0 0 1 14.56 7a.5.5 0 1 1-1 0 5.5 5.5 0 0 0-8.25-4.765.5.5 0 0 1-.5-.865Zm-.89 1.257a.5.5 0 0 1 .04.706A5.478 5.478 0 0 0 2.56 7a.5.5 0 0 1-1 0c0-1.664.626-3.184 1.655-4.333a.5.5 0 0 1 .706-.04ZM1.915 8.02a.5.5 0 0 1 .346.616l-.779 2.767a.5.5 0 1 1-.962-.27l.778-2.767a.5.5 0 0 1 .617-.346Zm12.15.481a.5.5 0 0 1 .49.51c-.03 1.499-.161 3.025-.727 4.533l-.07.187a.5.5 0 0 1-.936-.351l.07-.187c.506-1.35.634-2.74.663-4.202a.5.5 0 0 1 .51-.49Z"], [1, "btn", "delete-btn", 3, "click"], [1, "btn", 3, "click"], [4, "ngTemplateOutlet"]],
      template: function WebAuthnComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " * ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WebAuthnComponent_label_12_Template, 2, 1, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mobile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " * ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, WebAuthnComponent_label_21_Template, 2, 1, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Enable Biometric Login(TouchID/FaceID) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebAuthnComponent_Template_button_click_27_listener() {
            return ctx.signup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, WebAuthnComponent_ng_container_29_Template, 3, 1, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "User List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, WebAuthnComponent_ng_template_35_Template, 6, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, WebAuthnComponent_ng_container_37_Template, 13, 5, "ng-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "red");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.value && ctx.email.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "red");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobileNumber.value && ctx.mobileNumber.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.userForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userList);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"]],
      styles: [".register-form-container[_ngcontent-%COMP%]   .form-field.checkbox[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n}\n.register-form-container[_ngcontent-%COMP%]   .form-field.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.register-form-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  display: block;\n  min-width: 60px;\n}\n.register-form-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]:not(.checkbox)   input[_ngcontent-%COMP%] {\n  min-width: 250px;\n}\n.register-form-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 120px;\n  height: auto;\n  background-color: #1976d2;\n  border: 1px solid white;\n  color: white;\n  cursor: pointer;\n  border-radius: 4px;\n  height: 35px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.register-form-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  background-color: lightgray;\n  cursor: not-allowed;\n}\n.register-form-container[_ngcontent-%COMP%]   line[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  border-bottom: 1px solid black;\n}\n.register-form-container[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.register-form-container[_ngcontent-%COMP%]   .bg-red[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.user-list-container[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  border-bottom: 1px solid black;\n}\n.user-list-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: auto;\n  height: auto;\n  background-color: #1976d2;\n  border: 1px solid white;\n  color: white;\n  cursor: pointer;\n  border-radius: 4px;\n  height: 35px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.user-list-container[_ngcontent-%COMP%]   .btn.delete-btn[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21teS9Eb2N1bWVudHMvZ2l0L3RvbW15LmxhaS5naXRodWIuaW8vc3JjL2FwcC9jb21wb25lbnRzL3dlYi1hdXRobi93ZWItYXV0aG4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvd2ViLWF1dGhuL3dlYi1hdXRobi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7QUNEWjtBREVZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNBaEI7QURHUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDRFo7QURJWTtFQUNJLGdCQUFBO0FDRmhCO0FET0k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNMUjtBRE9JO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtBQ0xSO0FEUUk7RUFDSSxjQUFBO0VBQ0EsOEJBQUE7QUNOUjtBRFNJO0VBQ0ksY0FBQTtBQ1BSO0FEVUk7RUFDSSx5QkFBQTtBQ1JSO0FEYUk7RUFDSSxjQUFBO0VBQ0EsOEJBQUE7QUNWUjtBRGFJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDWFI7QURZUTtFQUNJLHlCQUFBO0FDVloiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlYi1hdXRobi93ZWItYXV0aG4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXItZm9ybS1jb250YWluZXIge1xuICAgIC5mb3JtLWZpZWxkIHtcbiAgICAgICAgJi5jaGVja2JveCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5mb3JtLWxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWluLXdpZHRoOiA2MHB4O1xuICAgICAgICB9XG4gICAgICAgICY6bm90KC5jaGVja2JveCkge1xuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICBcbiAgICAuYnRuIHtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAuYnRuOmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICB9XG5cbiAgICBsaW5lIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICB9XG4gICBcbiAgICAucmVkIHtcbiAgICAgICAgY29sb3I6ICNmNDQzMzY7XG4gICAgfVxuICAgXG4gICAgLmJnLXJlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gICAgfVxufVxuXG4udXNlci1saXN0LWNvbnRhaW5lciB7XG4gICAgLmxpbmUge1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIH1cblxuICAgIC5idG4ge1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgJi5kZWxldGUtYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnJlZ2lzdGVyLWZvcm0tY29udGFpbmVyIC5mb3JtLWZpZWxkLmNoZWNrYm94IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucmVnaXN0ZXItZm9ybS1jb250YWluZXIgLmZvcm0tZmllbGQuY2hlY2tib3ggaW5wdXQge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLnJlZ2lzdGVyLWZvcm0tY29udGFpbmVyIC5mb3JtLWZpZWxkIC5mb3JtLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cbi5yZWdpc3Rlci1mb3JtLWNvbnRhaW5lciAuZm9ybS1maWVsZDpub3QoLmNoZWNrYm94KSBpbnB1dCB7XG4gIG1pbi13aWR0aDogMjUwcHg7XG59XG4ucmVnaXN0ZXItZm9ybS1jb250YWluZXIgLmJ0biB7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5yZWdpc3Rlci1mb3JtLWNvbnRhaW5lciAuYnRuOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLnJlZ2lzdGVyLWZvcm0tY29udGFpbmVyIGxpbmUge1xuICBtYXJnaW46IDEwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuLnJlZ2lzdGVyLWZvcm0tY29udGFpbmVyIC5yZWQge1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cbi5yZWdpc3Rlci1mb3JtLWNvbnRhaW5lciAuYmctcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cblxuLnVzZXItbGlzdC1jb250YWluZXIgLmxpbmUge1xuICBtYXJnaW46IDEwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuLnVzZXItbGlzdC1jb250YWluZXIgLmJ0biB7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogMzVweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnVzZXItbGlzdC1jb250YWluZXIgLmJ0bi5kZWxldGUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAuthnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-web-authn',
          templateUrl: './web-authn.component.html',
          styleUrls: ['./web-authn.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_mock_service__WEBPACK_IMPORTED_MODULE_3__["MockService"]
        }, {
          type: src_app_services_web_authn_service__WEBPACK_IMPORTED_MODULE_4__["WebAuthnService"]
        }, {
          type: src_app_services_web_authn_api_service__WEBPACK_IMPORTED_MODULE_5__["WebAuthnAPIService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/push-notification/push-notification.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/push-notification/push-notification.component.ts ***!
    \******************************************************************/

  /*! exports provided: PushNotificationComponent */

  /***/
  function srcAppPushNotificationPushNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PushNotificationComponent", function () {
      return PushNotificationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PushNotificationComponent = /*#__PURE__*/function () {
      function PushNotificationComponent() {
        _classCallCheck(this, PushNotificationComponent);
      }

      _createClass(PushNotificationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "requestPermission",
        value: function requestPermission() {
          if ('PushManager' in window) {
            Notification.requestPermission(function (status) {
              console.log('Notification permission status:', status);
            });
            console.log('Push messaging is supported');
          } else {
            console.error('Push messaging is not supported');
          }
        }
      }]);

      return PushNotificationComponent;
    }();

    PushNotificationComponent.ɵfac = function PushNotificationComponent_Factory(t) {
      return new (t || PushNotificationComponent)();
    };

    PushNotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PushNotificationComponent,
      selectors: [["app-push-notification"]],
      decls: 3,
      vars: 0,
      consts: [[1, "push-notification-container"], [1, "btn", 3, "click"]],
      template: function PushNotificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PushNotificationComponent_Template_button_click_1_listener() {
            return ctx.requestPermission();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Show Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".push-notification-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 120px;\n  height: auto;\n  background-color: #1976d2;\n  border: 1px solid white;\n  color: white;\n  cursor: pointer;\n  border-radius: 4px;\n  height: 35px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.push-notification-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  background-color: lightgray;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21teS9Eb2N1bWVudHMvZ2l0L3RvbW15LmxhaS5naXRodWIuaW8vc3JjL2FwcC9wdXNoLW5vdGlmaWNhdGlvbi9wdXNoLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHVzaC1ub3RpZmljYXRpb24vcHVzaC1ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNBUjtBREdJO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvcHVzaC1ub3RpZmljYXRpb24vcHVzaC1ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHVzaC1ub3RpZmljYXRpb24tY29udGFpbmVyIHtcbiAgICAuYnRuIHtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5idG46ZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgIH1cbn0iLCIucHVzaC1ub3RpZmljYXRpb24tY29udGFpbmVyIC5idG4ge1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucHVzaC1ub3RpZmljYXRpb24tY29udGFpbmVyIC5idG46ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PushNotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-push-notification',
          templateUrl: './push-notification.component.html',
          styleUrls: ['./push-notification.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pwa-install-promotion/pwa-install-promotion.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pwa-install-promotion/pwa-install-promotion.component.ts ***!
    \**************************************************************************/

  /*! exports provided: PwaInstallPromotionComponent */

  /***/
  function srcAppPwaInstallPromotionPwaInstallPromotionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PwaInstallPromotionComponent", function () {
      return PwaInstallPromotionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _service_google_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./service/google-analytics-service */
    "./src/app/pwa-install-promotion/service/google-analytics-service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PwaInstallPromotionComponent_ng_container_6_ng_container_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Install web app");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PwaInstallPromotionComponent_ng_container_6_ng_container_2_div_1_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r4.addToHomeScreen();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Install");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PwaInstallPromotionComponent_ng_container_6_ng_container_2_div_1_Template_span_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r6.hideInstallPromotion();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Not now");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PwaInstallPromotionComponent_ng_container_6_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PwaInstallPromotionComponent_ng_container_6_ng_container_2_div_1_Template, 8, 0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showPromotion);
      }
    }

    function PwaInstallPromotionComponent_ng_container_6_ng_container_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PwaInstallPromotionComponent_ng_container_6_ng_container_3_div_1_Template_span_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r8.hideIOSInstallPromotion();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "X");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Install this webapp on your desktop: tap ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " and then Add to homescreen ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PwaInstallPromotionComponent_ng_container_6_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PwaInstallPromotionComponent_ng_container_6_ng_container_3_div_1_Template, 10, 0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showIOSPromotion);
      }
    }

    function PwaInstallPromotionComponent_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PwaInstallPromotionComponent_ng_container_6_ng_container_2_Template, 2, 1, "ng-container", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PwaInstallPromotionComponent_ng_container_6_ng_container_3_Template, 2, 1, "ng-container", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.device);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "android");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ios");
      }
    }

    var PwaInstallPromotionComponent = /*#__PURE__*/function () {
      function PwaInstallPromotionComponent(http, _$gaService) {
        _classCallCheck(this, PwaInstallPromotionComponent);

        this.http = http;
        this._$gaService = _$gaService;
        this.showPromotion = false;
        this.showIOSPromotion = true;
        this.device = "";
        this.installStatus = "";
        this.products = [];
      }

      _createClass(PwaInstallPromotionComponent, [{
        key: "getTestingData",
        value: function getTestingData() {
          var url = "https://mh12088.github.io/tommy.lai.github.io/assets/data.json";
          return this.http.get(url);
        }
      }, {
        key: "event",
        value: function event() {
          // event name, event category, event label, event value.
          this._$gaService.logEvent('pwa_call_api', 'ddd', 'eee', 'fff');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.detectDevice();
          var displayMode = this.getPWADisplayMode();
          console.log(displayMode);

          if (displayMode === "standalone") {
            this.installStatus = "Installed";
          } else {
            this.installStatus = "Not installed";
          }

          this.getTestingData().subscribe(function (data) {
            _this4.products = data;
            console.log(data);
          });
        }
      }, {
        key: "detectDevice",
        value: function detectDevice() {
          // Detects device type.
          var device = "";
          var userAgent = window.navigator.userAgent.toLowerCase();

          if (userAgent.match(/iphone|ipad|ipod/i)) {
            device = "ios";
          } else if (userAgent.match(/Android/i)) {
            device = "android";
          } else {
            device = "other";
          }

          this.device = device;
        }
      }, {
        key: "getPWADisplayMode",
        value: function getPWADisplayMode() {
          var _a; // use this to check if the user is already using your PWA - no need to prompt if in standalone


          var isStandalone = window.matchMedia('(display-mode: standalone)').matches;

          if (document.referrer.startsWith('android-app://')) {
            return 'twa';
          } else if (((_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.standalone) || isStandalone) {
            return 'standalone';
          }

          return 'browser';
        }
      }, {
        key: "hideIOSInstallPromotion",
        value: function hideIOSInstallPromotion() {
          this.showIOSPromotion = false;
        } // There function and  "Beforeinstallprompt" event is only support android

      }, {
        key: "showInstallPromotion",
        value: function showInstallPromotion() {
          this.showPromotion = true;
        }
      }, {
        key: "hideInstallPromotion",
        value: function hideInstallPromotion() {
          this.showPromotion = false;
        }
      }, {
        key: "onbeforeinstallprompt",
        value: function onbeforeinstallprompt(e) {
          // Prevent the mini-infobar from appearing on mobile
          e.preventDefault(); // Stash the event so it can be triggered later.

          this.deferredPrompt = e; // Update UI notify the user they can install the PWA

          this.showInstallPromotion(); // Optionally, send analytics event that PWA install promo was shown.

          console.log("'beforeinstallprompt' event was fired.");
        }
      }, {
        key: "addToHomeScreen",
        value: function addToHomeScreen() {
          var _this5 = this;

          // Hide the app provided install promotion
          this.hideInstallPromotion(); // Show the install prompt

          this.deferredPrompt.prompt(); // Wait for the user to respond to the prompt

          this.deferredPrompt.userChoice.then(function (choiceResult) {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');

              _this5.hideInstallPromotion();
            }

            _this5.deferredPrompt = null;
          });
        }
      }]);

      return PwaInstallPromotionComponent;
    }();

    PwaInstallPromotionComponent.ɵfac = function PwaInstallPromotionComponent_Factory(t) {
      return new (t || PwaInstallPromotionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_google_analytics_service__WEBPACK_IMPORTED_MODULE_2__["GoogleAnalyticsService"]));
    };

    PwaInstallPromotionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PwaInstallPromotionComponent,
      selectors: [["app-pwa-install-promotion"]],
      hostBindings: function PwaInstallPromotionComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeinstallprompt", function PwaInstallPromotionComponent_beforeinstallprompt_HostBindingHandler($event) {
            return ctx.onbeforeinstallprompt($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 7,
      vars: 3,
      consts: [["href", "http://example.com/", "target", "_blank", 1, "app-logo", 3, "click"], [4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "pwa-install-promotion-container android", 4, "ngIf"], [1, "pwa-install-promotion-container", "android"], [1, "title"], [1, "buttons"], [1, "btn", 3, "click"], [1, "close-btn", 3, "click"], ["class", "pwa-install-promotion-container ios", 4, "ngIf"], [1, "pwa-install-promotion-container", "ios"], [1, "desc"], ["src", "https://user-images.githubusercontent.com/24765669/66438400-d71d6800-ea2c-11e9-9de3-f9096c793f1b.png", "width", "20", "height", "20"], [1, "arrow-box"]],
      template: function PwaInstallPromotionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PwaInstallPromotionComponent_Template_a_click_4_listener() {
            return ctx.event();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "test event");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PwaInstallPromotionComponent_ng_container_6_Template, 4, 3, "ng-container", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Device: ", ctx.device, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Status: ", ctx.installStatus, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.installStatus !== "Installed");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"]],
      styles: [".pwa-install-promotion-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 320px;\n  height: 100px;\n  background-color: #1976d2;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n.pwa-install-promotion-container.ios[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  opacity: 0.9;\n  border-radius: 25px;\n  height: 70px;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n}\n.pwa-install-promotion-container.ios[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  color: white;\n  font-weight: bold;\n}\n.pwa-install-promotion-container.ios[_ngcontent-%COMP%]   .arrow-box[_ngcontent-%COMP%] {\n  background: #1976d2;\n  transform: rotate(45deg);\n  height: 30px;\n  width: 100%;\n  bottom: -13px;\n  max-width: 30px;\n  z-index: -1;\n  position: absolute;\n}\n.pwa-install-promotion-container.ios[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-weight: 1000;\n  position: absolute;\n  right: 15px;\n  color: white;\n  font-size: 20px;\n  top: -2px;\n}\n.pwa-install-promotion-container.android[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  color: white;\n  font-weight: bold;\n}\n.pwa-install-promotion-container.android[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.pwa-install-promotion-container.android[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 5px;\n  min-width: 120px;\n  height: auto;\n  background-color: white;\n  border: 1px solid white;\n  color: #1976d2;\n  cursor: pointer;\n  border-radius: 4px;\n  height: 30px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 25px;\n  font-weight: bold;\n}\n.pwa-install-promotion-container.android[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  font-weight: bold;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21teS9Eb2N1bWVudHMvZ2l0L3RvbW15LmxhaS5naXRodWIuaW8vc3JjL2FwcC9wd2EtaW5zdGFsbC1wcm9tb3Rpb24vcHdhLWluc3RhbGwtcHJvbW90aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wd2EtaW5zdGFsbC1wcm9tb3Rpb24vcHdhLWluc3RhbGwtcHJvbW90aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDRVI7QUREUTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDR1o7QUREUTtFQUNJLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDR1o7QUREUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQ0daO0FEQ1E7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NaO0FERVE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNBWjtBRENZO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDaEI7QURDWTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ2hCIiwiZmlsZSI6InNyYy9hcHAvcHdhLWluc3RhbGwtcHJvbW90aW9uL3B3YS1pbnN0YWxsLXByb21vdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wd2EtaW5zdGFsbC1wcm9tb3Rpb24tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgJi5pb3Mge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgLmRlc2Mge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAuYXJyb3ctYm94IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxOTc2ZDI7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvdHRvbTogLTEzcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuICAgICAgICAuY2xvc2UtYnRuIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB0b3A6IC0ycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi5hbmRyb2lkIHtcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5idXR0b25zIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTk3NmQyOztcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xvc2UtYnRuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnB3YS1pbnN0YWxsLXByb21vdGlvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMjBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5wd2EtaW5zdGFsbC1wcm9tb3Rpb24tY29udGFpbmVyLmlvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIG9wYWNpdHk6IDAuOTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnB3YS1pbnN0YWxsLXByb21vdGlvbi1jb250YWluZXIuaW9zIC5kZXNjIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucHdhLWluc3RhbGwtcHJvbW90aW9uLWNvbnRhaW5lci5pb3MgLmFycm93LWJveCB7XG4gIGJhY2tncm91bmQ6ICMxOTc2ZDI7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAtMTNweDtcbiAgbWF4LXdpZHRoOiAzMHB4O1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnB3YS1pbnN0YWxsLXByb21vdGlvbi1jb250YWluZXIuaW9zIC5jbG9zZS1idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdG9wOiAtMnB4O1xufVxuLnB3YS1pbnN0YWxsLXByb21vdGlvbi1jb250YWluZXIuYW5kcm9pZCAudGl0bGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wd2EtaW5zdGFsbC1wcm9tb3Rpb24tY29udGFpbmVyLmFuZHJvaWQgLmJ1dHRvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnB3YS1pbnN0YWxsLXByb21vdGlvbi1jb250YWluZXIuYW5kcm9pZCAuYnV0dG9ucyAuYnRuIHtcbiAgcGFkZGluZzogNXB4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgY29sb3I6ICMxOTc2ZDI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucHdhLWluc3RhbGwtcHJvbW90aW9uLWNvbnRhaW5lci5hbmRyb2lkIC5idXR0b25zIC5jbG9zZS1idG4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PwaInstallPromotionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pwa-install-promotion',
          templateUrl: './pwa-install-promotion.component.html',
          styleUrls: ['./pwa-install-promotion.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _service_google_analytics_service__WEBPACK_IMPORTED_MODULE_2__["GoogleAnalyticsService"]
        }];
      }, {
        onbeforeinstallprompt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:beforeinstallprompt', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pwa-install-promotion/service/google-analytics-service.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pwa-install-promotion/service/google-analytics-service.ts ***!
    \***************************************************************************/

  /*! exports provided: GoogleAnalyticsService */

  /***/
  function srcAppPwaInstallPromotionServiceGoogleAnalyticsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleAnalyticsService", function () {
      return GoogleAnalyticsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var GoogleAnalyticsService = /*#__PURE__*/function () {
      function GoogleAnalyticsService(_router) {
        _classCallCheck(this, GoogleAnalyticsService);

        this._router = _router;

        this._router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
        })).subscribe(function (e) {
          gtag('js', new Date());
          gtag('config', 'G-TFJ9H2W5Q3'); // gtag('get', 'G-TFJ9H2W5Q3', 'client_id', (clientID) => {
          //     console.log("test: ", clientID);
          // });
        });
      }

      _createClass(GoogleAnalyticsService, [{
        key: "init",
        value: function init() {
          // Global site tag (gtag.js) - Google Analytics
          var script = document.createElement('script');
          script.src = 'https://www.googletagmanager.com/gtag/js?id=G-TFJ9H2W5Q3';
          script.async = true;
          document.getElementsByTagName('head')[0].appendChild(script);
          var gtagEl = document.createElement('script');
          var gtagBody = document.createTextNode("\n        window.dataLayer = window.dataLayer || [];\n        function gtag() { dataLayer.push(arguments); }\n        ");
          gtagEl.appendChild(gtagBody);
          document.body.appendChild(gtagEl);
        }
      }, {
        key: "logEvent",
        value: function logEvent(event, category, label, value) {
          gtag('event', event, {
            event_category: category,
            event_label: label,
            value: value
          });
          console.log('gtag event captured...');
        }
      }]);

      return GoogleAnalyticsService;
    }();

    GoogleAnalyticsService.ɵfac = function GoogleAnalyticsService_Factory(t) {
      return new (t || GoogleAnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    GoogleAnalyticsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GoogleAnalyticsService,
      factory: GoogleAnalyticsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleAnalyticsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/mock.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/mock.service.ts ***!
    \******************************************/

  /*! exports provided: MockService */

  /***/
  function srcAppServicesMockServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MockService", function () {
      return MockService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _utils_cbor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils/cbor */
    "./src/app/utils/cbor.js");
    /* harmony import */


    var _utils_cbor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_cbor__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/dist/esm-browser/index.js");

    var MockService = /*#__PURE__*/function () {
      function MockService() {
        _classCallCheck(this, MockService);

        this.userList = localStorage.getItem("user_list") ? JSON.parse(localStorage.getItem("user_list")) : [];
      }

      _createClass(MockService, [{
        key: "getUserByDeviceId",
        value: function getUserByDeviceId(deviceId) {
          return this.userList.find(function (user) {
            return user.deviceId === deviceId;
          });
        }
      }, {
        key: "genUUID",
        value: function genUUID() {
          return uuid__WEBPACK_IMPORTED_MODULE_2__["v4"]();
        } // Should generate from server

      }, {
        key: "getChallenge",
        value: function getChallenge() {
          var challenge = new Uint8Array(32);
          return window.crypto.getRandomValues(challenge);
        }
      }, {
        key: "getAllUser",
        value: function getAllUser() {
          return this.userList;
        }
      }, {
        key: "validateCreateUser",
        value: function validateCreateUser(user) {
          var errorMsgList = [];

          if (this.getUserByEmail(user.email)) {
            errorMsgList.push("Email is already registered");
          }

          if (this.getUserByMobileNumber(user.mobileNumber)) {
            errorMsgList.push("Mobile Number is already registered");
          }

          return errorMsgList;
        }
      }, {
        key: "saveChanges",
        value: function saveChanges() {
          localStorage.setItem("user_list", JSON.stringify(this.userList));
        }
      }, {
        key: "createUser",
        value: function createUser(user) {
          this.userList.push(user);
          this.saveChanges();
          return this.getUserByMobileNumber(user.mobileNumber);
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(user) {
          this.userList.splice(this.getUserIndex(user), 1);
          this.saveChanges();
        }
      }, {
        key: "resetUser",
        value: function resetUser() {
          this.userList = [];
          this.saveChanges();
        }
      }, {
        key: "getUserIndex",
        value: function getUserIndex(user) {
          return this.userList.findIndex(function (item) {
            return item.mobileNumber === user.mobileNumber;
          });
        }
      }, {
        key: "getUserByMobileNumber",
        value: function getUserByMobileNumber(mobileNumber) {
          return this.userList.find(function (user) {
            return user.mobileNumber === mobileNumber;
          });
        }
      }, {
        key: "getUserByEmail",
        value: function getUserByEmail(email) {
          return this.userList.find(function (user) {
            return user.email === email;
          });
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          var userIndex = this.getUserIndex(user);
          this.userList[userIndex] = user;
          this.saveChanges();
          return this.userList[userIndex];
        }
      }, {
        key: "base64urlEncode",
        value: function base64urlEncode(arraybuffer) {
          var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"; // Use a lookup table to find the index.

          var lookup = new Uint8Array(256);

          for (var _i = 0; _i < chars.length; _i++) {
            lookup[chars.charCodeAt(_i)] = _i;
          }

          var bytes = new Uint8Array(arraybuffer),
              i,
              len = bytes.length,
              base64 = "";

          for (i = 0; i < len; i += 3) {
            base64 += chars[bytes[i] >> 2];
            base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
            base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
            base64 += chars[bytes[i + 2] & 63];
          }

          if (len % 3 === 2) {
            base64 = base64.substring(0, base64.length - 1);
          } else if (len % 3 === 1) {
            base64 = base64.substring(0, base64.length - 2);
          }

          return base64;
        }
      }, {
        key: "base64urlDecode",
        value: function base64urlDecode(base64) {
          var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"; // Use a lookup table to find the index.

          var lookup = new Uint8Array(256);

          for (var _i2 = 0; _i2 < chars.length; _i2++) {
            lookup[chars.charCodeAt(_i2)] = _i2;
          }

          var bufferLength = base64.length * 0.75,
              len = base64.length,
              i,
              p = 0,
              encoded1,
              encoded2,
              encoded3,
              encoded4;
          var arraybuffer = new ArrayBuffer(bufferLength),
              bytes = new Uint8Array(arraybuffer);

          for (i = 0; i < len; i += 4) {
            encoded1 = lookup[base64.charCodeAt(i)];
            encoded2 = lookup[base64.charCodeAt(i + 1)];
            encoded3 = lookup[base64.charCodeAt(i + 2)];
            encoded4 = lookup[base64.charCodeAt(i + 3)];
            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
          }

          return arraybuffer;
        }
      }, {
        key: "decodePublicKeyCredentialToBase64String",
        value: function decodePublicKeyCredentialToBase64String(pubKeyCred) {
          if (pubKeyCred instanceof ArrayBuffer) {
            return this.base64urlEncode(pubKeyCred);
          } else if (pubKeyCred instanceof Array) {
            return pubKeyCred.map(this.decodePublicKeyCredentialToBase64String);
          } else if (pubKeyCred instanceof Object) {
            var obj = {};

            for (var key in pubKeyCred) {
              obj[key] = this.decodePublicKeyCredentialToBase64String(pubKeyCred[key]);
            }

            return obj;
          } else return pubKeyCred;
        }
      }, {
        key: "decodePublicKeyCredential",
        value: function decodePublicKeyCredential(credential) {
          var obj = {};

          for (var key in credential) {
            switch (key) {
              case "id":
              case "type":
                obj[key] = credential[key];
                break;

              case "rawId":
                obj[key] = this.arrayBufferToBase64(credential[key]);
                break;

              case "response":
                var utf8Decoder = new TextDecoder('utf-8');
                var decodedClientData = utf8Decoder.decode(credential.response.clientDataJSON);
                var clientDataObj = JSON.parse(decodedClientData);

                var decodedAttestationObj = _utils_cbor__WEBPACK_IMPORTED_MODULE_1__["decode"](credential.response.attestationObject);

                obj[key] = {};
                obj[key]["clientDataJSON"] = clientDataObj;
                obj[key]["attestationObject"] = decodedAttestationObj;
                break;

              default:
                break;
            }
          }

          return obj;
        } // Validate and Store credential

      }, {
        key: "registerCredential",
        value: function registerCredential(user, credential) {
          var authData = this.extractAuthData(credential);
          var credentialIdLength = this.getCredentialIdLength(authData);
          var credentialId = authData.slice(55, 55 + credentialIdLength);
          var publicKeyBytes = authData.slice(55 + credentialIdLength); // const publicKeyObject = CBOR.decode(publicKeyBytes.buffer);

          var valid = true;

          if (valid) {
            // Save publicKeyBytes and credentialId
            user.credentials.push({
              credentialIdString: this.arrayBufferToBase64(credentialId),
              publicKeyString: this.arrayBufferToBase64(publicKeyBytes)
            });
            this.updateUser(user);
          }

          return valid;
        }
      }, {
        key: "extractAuthData",
        value: function extractAuthData(credential) {
          var decodedAttestationObj = _utils_cbor__WEBPACK_IMPORTED_MODULE_1__["decode"](credential.response.attestationObject);

          var authData = decodedAttestationObj.authData;
          return authData;
        }
      }, {
        key: "getCredentialIdLength",
        value: function getCredentialIdLength(authData) {
          // get the length of the credential ID
          var dataView = new DataView(new ArrayBuffer(2));
          var idLenBytes = authData.slice(53, 55);
          idLenBytes.forEach(function (value, index) {
            return dataView.setUint8(index, value);
          });
          return dataView.getUint16(0);
        }
      }, {
        key: "arrayBufferToStr",
        value: function arrayBufferToStr(buf) {
          var decoder = new TextDecoder("utf-8");
          return decoder.decode(buf);
        }
      }, {
        key: "decodeAssertion",
        value: function decodeAssertion(assertion) {
          var clientDataStr = this.arrayBufferToStr(assertion.response.clientDataJSON);
          var clientDataObj = JSON.parse(clientDataStr);
          console.log("----------Sign in clientDataObj----------");
          console.log(JSON.stringify(clientDataObj));
          var userHandle = assertion.response.userHandle && this.arrayBufferToStr(assertion.response.userHandle);
          console.log("----------User Handle----------");
          console.log(userHandle);
        }
      }, {
        key: "arrayBufferToBase64",
        value: function arrayBufferToBase64(buffer) {
          var binary = '';
          var bytes = new Uint8Array(buffer);
          var len = bytes.byteLength;

          for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
          }

          return window.btoa(binary);
        }
      }, {
        key: "base64ToArrayBuffer",
        value: function base64ToArrayBuffer(base64) {
          var binary_string = window.atob(base64);
          var len = binary_string.length;
          var bytes = new Uint8Array(len);

          for (var i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
          }

          return bytes.buffer;
        }
      }, {
        key: "bufferEncode",
        value: function bufferEncode(value) {
          return btoa(String.fromCharCode.apply(null, new Uint8Array(value))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
        }
      }, {
        key: "bufferDecode",
        value: function bufferDecode(value) {
          return Uint8Array.from(atob(value), function (c) {
            return c.charCodeAt(0);
          });
        }
      }, {
        key: "uint8ArrayFromBase64Url",
        value: function uint8ArrayFromBase64Url(base64Url) {
          return Uint8Array.from(window.atob(base64Url.replace(/-/g, "+").replace(/_/g, "/")), function (v) {
            return v.charCodeAt(0);
          });
        }
      }, {
        key: "uint8ArrayFromBase64",
        value: function uint8ArrayFromBase64(base64) {
          return Uint8Array.from(window.atob(base64), function (v) {
            return v.charCodeAt(0);
          });
        }
      }]);

      return MockService;
    }();

    MockService.ɵfac = function MockService_Factory(t) {
      return new (t || MockService)();
    };

    MockService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MockService,
      factory: MockService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MockService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/web-authn-api.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/web-authn-api.service.ts ***!
    \***************************************************/

  /*! exports provided: WebAuthnAPIService */

  /***/
  function srcAppServicesWebAuthnApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebAuthnAPIService", function () {
      return WebAuthnAPIService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_utils_cbor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/utils/cbor */
    "./src/app/utils/cbor.js");
    /* harmony import */


    var src_app_utils_cbor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_app_utils_cbor__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _components_web_authn_utils_app_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../components/web-authn/utils/app-util */
    "./src/app/components/web-authn/utils/app-util.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_services_mock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/mock.service */
    "./src/app/services/mock.service.ts");

    var WebAuthnAPIService = /*#__PURE__*/function () {
      function WebAuthnAPIService(http, mockService) {
        _classCallCheck(this, WebAuthnAPIService);

        this.http = http;
        this.mockService = mockService;
        this.url = '';
        this.baseUrl = 'http://localhost:8080';
      }

      _createClass(WebAuthnAPIService, [{
        key: "webAuthnRegister",
        value: function webAuthnRegister() {
          this.url = "".concat(this.baseUrl, "/web-authn-registration");
          var utf8Decoder = new TextDecoder('utf-8');
          var clientData = this.mockService.base64urlDecode(_components_web_authn_utils_app_util__WEBPACK_IMPORTED_MODULE_2__["registerPayload"].response.clientDataJSON);
          var decodedClientData = utf8Decoder.decode(clientData);
          var clientDataObj = JSON.parse(decodedClientData);
          console.log(clientDataObj);
          var attestationObject = this.mockService.base64urlDecode(_components_web_authn_utils_app_util__WEBPACK_IMPORTED_MODULE_2__["registerPayload"].response.attestationObject);
          console.log(attestationObject);
          var decodedAttestationObj = src_app_utils_cbor__WEBPACK_IMPORTED_MODULE_1__["decode"](attestationObject);
          console.log(decodedAttestationObj);
          var credentialId = this.mockService.base64urlDecode("d1U_F_EYDdh37vHhe3bb1Y2uWFw");
          console.log(credentialId);
          return this.http.post(this.url, _components_web_authn_utils_app_util__WEBPACK_IMPORTED_MODULE_2__["registerPayload"]);
        }
      }, {
        key: "webAuthnLogin",
        value: function webAuthnLogin(authenticator) {
          this.url = "".concat(this.baseUrl, "/web-authn-authentication");
          console.log(_components_web_authn_utils_app_util__WEBPACK_IMPORTED_MODULE_2__["loginPayload"]);
          _components_web_authn_utils_app_util__WEBPACK_IMPORTED_MODULE_2__["loginPayload"].authenticator = authenticator;
          return this.http.post(this.url, _components_web_authn_utils_app_util__WEBPACK_IMPORTED_MODULE_2__["loginPayload"]);
        }
      }, {
        key: "getChallenge",
        value: function getChallenge() {
          this.url = "".concat(this.baseUrl, "/get-challenge");
          return this.http.get(this.url);
        }
      }]);

      return WebAuthnAPIService;
    }();

    WebAuthnAPIService.ɵfac = function WebAuthnAPIService_Factory(t) {
      return new (t || WebAuthnAPIService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_mock_service__WEBPACK_IMPORTED_MODULE_4__["MockService"]));
    };

    WebAuthnAPIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WebAuthnAPIService,
      factory: WebAuthnAPIService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAuthnAPIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: src_app_services_mock_service__WEBPACK_IMPORTED_MODULE_4__["MockService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/web-authn-mock.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/web-authn-mock.service.ts ***!
    \****************************************************/

  /*! exports provided: WebAuthnMockService */

  /***/
  function srcAppServicesWebAuthnMockServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebAuthnMockService", function () {
      return WebAuthnMockService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mock.service */
    "./src/app/services/mock.service.ts");

    var WebAuthnMockService = /*#__PURE__*/function () {
      function WebAuthnMockService(mockService) {
        _classCallCheck(this, WebAuthnMockService);

        this.mockService = mockService;
      }

      _createClass(WebAuthnMockService, [{
        key: "getPlatformFlag",
        value: function getPlatformFlag() {
          return !!JSON.parse(localStorage.getItem('isPlatform'));
        }
      }, {
        key: "signup",
        value: function signup(user) {
          var authenticatorAttachment = this.getPlatformFlag() ? 'platform' : 'cross-platform';
          var challenge = this.mockService.genUUID();
          console.log("----------Sign up challenge----------");
          console.log(challenge);
          var publicKeyCredentialCreationOptions = {
            // Should generate from server
            challenge: Uint8Array.from(challenge, function (c) {
              return c.charCodeAt(0);
            }),
            // Relying Party
            rp: {
              name: "demo"
            },
            user: {
              // Some user id coming from the server
              id: Uint8Array.from(user.mobileNumber, function (c) {
                return c.charCodeAt(0);
              }),
              name: user.email,
              displayName: user.email
            },
            pubKeyCredParams: [{
              alg: -7,
              type: 'public-key'
            }],
            authenticatorSelection: {
              // authenticatorAttachment,
              authenticatorAttachment: 'platform',
              userVerification: 'required'
            },
            timeout: 100000,
            attestation: 'direct'
          };
          console.log("----------Sign up Payload----------");
          console.log(JSON.stringify(publicKeyCredentialCreationOptions));
          return navigator.credentials.create({
            publicKey: publicKeyCredentialCreationOptions
          });
        }
      }, {
        key: "signin",
        value: function signin(user) {
          var _this6 = this;

          var transports = this.getPlatformFlag() ? ['internal'] : ['usb'];
          var allowCredentials = user.credentials.map(function (c) {
            return {
              // transports, 
              transports: ['internal'],
              type: 'public-key',
              id: new Uint8Array(_this6.mockService.base64ToArrayBuffer(c.credentialIdString)) // id: Uint8Array.from(c.credentialId)

            };
          });
          console.log("----------Sign in challenge----------");
          var challenge = this.mockService.genUUID();
          console.log(challenge);
          var credentialRequestOptions = {
            challenge: Uint8Array.from(challenge, function (c) {
              return c.charCodeAt(0);
            }),
            allowCredentials: allowCredentials,
            userVerification: 'required'
          };
          console.log("----------Sign in Payload----------");
          console.log(JSON.stringify(credentialRequestOptions));
          return navigator.credentials.get({
            publicKey: credentialRequestOptions
          });
        }
      }]);

      return WebAuthnMockService;
    }();

    WebAuthnMockService.ɵfac = function WebAuthnMockService_Factory(t) {
      return new (t || WebAuthnMockService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_mock_service__WEBPACK_IMPORTED_MODULE_1__["MockService"]));
    };

    WebAuthnMockService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WebAuthnMockService,
      factory: WebAuthnMockService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAuthnMockService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _mock_service__WEBPACK_IMPORTED_MODULE_1__["MockService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/web-authn-service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/web-authn-service.ts ***!
    \***********************************************/

  /*! exports provided: WebAuthnService */

  /***/
  function srcAppServicesWebAuthnServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebAuthnService", function () {
      return WebAuthnService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_utils_cbor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/utils/cbor */
    "./src/app/utils/cbor.js");
    /* harmony import */


    var src_app_utils_cbor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_app_utils_cbor__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_services_mock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/mock.service */
    "./src/app/services/mock.service.ts");

    var WebAuthnService = /*#__PURE__*/function () {
      function WebAuthnService(http, mockService) {
        _classCallCheck(this, WebAuthnService);

        this.http = http;
        this.mockService = mockService;
        this.url = '';
        this.baseUrl = 'http://localhost:8080';
      }

      _createClass(WebAuthnService, [{
        key: "getPlatformFlag",
        value: function getPlatformFlag() {
          return !!JSON.parse(localStorage.getItem('isPlatform'));
        }
      }, {
        key: "generateUUIDv4",
        value: function generateUUIDv4() {
          return "".concat([1e7]).concat(-1e3).concat(-4e3).concat(-8e3).concat(-1e11).replace(/[018]/g, function (c) {
            return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
          });
        }
      }, {
        key: "getChallenge",
        value: function getChallenge() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.generateUUIDv4());
        }
      }, {
        key: "getChallengeFromServer",
        value: function getChallengeFromServer() {
          this.url = "".concat(this.baseUrl, "/get-challenge");
          return this.http.get(this.url);
        }
      }, {
        key: "publicKeyCredentialToBase64Url",
        value: function publicKeyCredentialToBase64Url(publicKeyCred) {
          if (publicKeyCred instanceof ArrayBuffer) {
            return this.base64urlEncode(publicKeyCred);
          } else if (publicKeyCred instanceof Array) {
            return publicKeyCred.map(this.publicKeyCredentialToBase64Url);
          } else if (publicKeyCred instanceof Object) {
            var obj = {};

            for (var key in publicKeyCred) {
              obj[key] = this.publicKeyCredentialToBase64Url(publicKeyCred[key]);
            }

            return obj;
          } else return publicKeyCred;
        }
      }, {
        key: "base64urlEncode",
        value: function base64urlEncode(arraybuffer) {
          var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"; // Use a lookup table to find the index.

          var lookup = new Uint8Array(256);

          for (var _i3 = 0; _i3 < chars.length; _i3++) {
            lookup[chars.charCodeAt(_i3)] = _i3;
          }

          var bytes = new Uint8Array(arraybuffer),
              i,
              len = bytes.length,
              base64 = "";

          for (i = 0; i < len; i += 3) {
            base64 += chars[bytes[i] >> 2];
            base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
            base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
            base64 += chars[bytes[i + 2] & 63];
          }

          if (len % 3 === 2) {
            base64 = base64.substring(0, base64.length - 1);
          } else if (len % 3 === 1) {
            base64 = base64.substring(0, base64.length - 2);
          }

          return base64;
        }
      }, {
        key: "base64urlDecode",
        value: function base64urlDecode(base64) {
          var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"; // Use a lookup table to find the index.

          var lookup = new Uint8Array(256);

          for (var _i4 = 0; _i4 < chars.length; _i4++) {
            lookup[chars.charCodeAt(_i4)] = _i4;
          }

          var bufferLength = base64.length * 0.75,
              len = base64.length,
              i,
              p = 0,
              encoded1,
              encoded2,
              encoded3,
              encoded4;
          var arraybuffer = new ArrayBuffer(bufferLength),
              bytes = new Uint8Array(arraybuffer);

          for (i = 0; i < len; i += 4) {
            encoded1 = lookup[base64.charCodeAt(i)];
            encoded2 = lookup[base64.charCodeAt(i + 1)];
            encoded3 = lookup[base64.charCodeAt(i + 2)];
            encoded4 = lookup[base64.charCodeAt(i + 3)];
            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
          }

          return arraybuffer;
        }
      }, {
        key: "signup",
        value: function signup(credential) {
          this.url = "".concat(this.baseUrl, "/web-authn-registration");
          return this.http.post(this.url, credential);
        }
      }, {
        key: "webAuthnSignup",
        value: function webAuthnSignup(user, challenge) {
          var authenticatorAttachment = this.getPlatformFlag() ? 'platform' : 'cross-platform';
          var publicKeyCredentialCreationOptions = {
            // Should generate from server
            challenge: Uint8Array.from(challenge, function (c) {
              return c.charCodeAt(0);
            }),
            // Relying Party
            rp: {
              name: "demo"
            },
            user: {
              // Some user id coming from the server
              id: Uint8Array.from(user.mobileNumber, function (c) {
                return c.charCodeAt(0);
              }),
              name: user.email,
              displayName: user.email
            },
            pubKeyCredParams: [{
              alg: -7,
              type: 'public-key'
            }],
            authenticatorSelection: {
              authenticatorAttachment: authenticatorAttachment,
              userVerification: "required"
            },
            timeout: 100000,
            attestation: 'direct'
          };
          return navigator.credentials.create({
            publicKey: publicKeyCredentialCreationOptions
          });
        }
      }, {
        key: "signin",
        value: function signin(credential) {
          this.url = "".concat(this.baseUrl, "/web-authn-authentication");
          return this.http.post(this.url, credential);
        }
      }, {
        key: "webAuthnSignin",
        value: function webAuthnSignin(user, challenge) {
          var _this7 = this;

          var transports = this.getPlatformFlag() ? ['internal'] : ['usb'];
          var allowCredentials = user.credentials.map(function (c) {
            var credentialId = new Uint8Array(_this7.base64urlDecode(c.credentialIdString));
            return {
              transports: transports,
              type: 'public-key',
              id: credentialId // id: Uint8Array.from(c.credentialId),

            };
          });
          var credentialRequestOptions = {
            challenge: Uint8Array.from('5a31ec74-8280-4f61-abf0-810aab460570', function (c) {
              return c.charCodeAt(0);
            }),
            allowCredentials: allowCredentials,
            userVerification: "required"
          };
          console.log("----------Sign in Payload----------");
          console.log(JSON.stringify(credentialRequestOptions));
          return navigator.credentials.get({
            publicKey: credentialRequestOptions
          });
        }
      }, {
        key: "isSupportBiometricLogin",
        value: function isSupportBiometricLogin() {
          if (window.PublicKeyCredential) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(new Promise(function (resolve, reject) {
              PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable().then(function (available) {
                if (available) {
                  // console.log("Supported.");
                  resolve(true);
                } else {
                  // console.log("WebAuthn supported, Platform Authenticator *not* supported.");
                  resolve(false);
                }
              })["catch"](function (error) {
                // console.log("Something went wrong.");
                resolve(false);
              });
            }));
          } else {
            // console.log("Not supported.");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
          }
        }
      }, {
        key: "signupFlow",
        value: function signupFlow(user) {
          var _this8 = this;

          return this.getChallengeFromServer().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (challengeResp) {
            var challenge = challengeResp.challenge;
            console.log(challenge);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(_this8.webAuthnSignup(user, challenge).then(function (credential) {
              var credentialBase64Url = _this8.publicKeyCredentialToBase64Url(credential);

              return Promise.resolve(credentialBase64Url);
            })["catch"](function (error) {
              return Promise.reject(error);
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (credentialBase64Url) {
            return _this8.signup(credentialBase64Url);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            // handle error
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(error);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            return console.log("Finished");
          }));
        }
      }, {
        key: "signinFlow",
        value: function signinFlow(user) {
          var _this9 = this;

          return this.getChallengeFromServer().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (challengeResp) {
            var challenge = challengeResp.challenge;
            console.log(challenge);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(_this9.webAuthnSignin(user, challenge).then(function (assertion) {
              var credentialBase64Url = _this9.publicKeyCredentialToBase64Url(assertion);

              credentialBase64Url.response.userHandle = credentialBase64Url.response.userHandle || '';
              credentialBase64Url.authenticator = {
                credentialIdString: user.credentials[0].credentialIdString,
                authenticatorString: user.authenticatorString
              };
              return Promise.resolve(credentialBase64Url);
            })["catch"](function (error) {
              return Promise.reject(error);
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (credentialBase64Url) {
            return _this9.signin(credentialBase64Url);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            // handle error 
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(error);
          }));
        }
      }, {
        key: "registerCredential",
        value: // ----------------------------------------------------------------------------------------------------------
        // Validate and Store credential
        function registerCredential(credential) {
          var authData = this.extractAuthData(credential);
          var credentialIdLength = this.getCredentialIdLength(authData);
          var credentialId = authData.slice(55, 55 + credentialIdLength);
          var publicKeyBytes = authData.slice(55 + credentialIdLength); // const publicKeyObject = CBOR.decode(publicKeyBytes.buffer);

          var valid = true;

          if (valid) {
            // Save publicKeyBytes and credentialId
            return credentialId;
          }
        }
      }, {
        key: "extractAuthData",
        value: function extractAuthData(credential) {
          var decodedAttestationObj = src_app_utils_cbor__WEBPACK_IMPORTED_MODULE_2__["decode"](credential.response.attestationObject);
          var authData = decodedAttestationObj.authData;
          return authData;
        }
      }, {
        key: "getCredentialIdLength",
        value: function getCredentialIdLength(authData) {
          // get the length of the credential ID
          var dataView = new DataView(new ArrayBuffer(2));
          var idLenBytes = authData.slice(53, 55);
          idLenBytes.forEach(function (value, index) {
            return dataView.setUint8(index, value);
          });
          return dataView.getUint16(0);
        }
      }]);

      return WebAuthnService;
    }();

    WebAuthnService.ɵfac = function WebAuthnService_Factory(t) {
      return new (t || WebAuthnService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_mock_service__WEBPACK_IMPORTED_MODULE_5__["MockService"]));
    };

    WebAuthnService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WebAuthnService,
      factory: WebAuthnService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAuthnService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: src_app_services_mock_service__WEBPACK_IMPORTED_MODULE_5__["MockService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/utils/cbor.js":
  /*!*******************************!*\
    !*** ./src/app/utils/cbor.js ***!
    \*******************************/

  /*! no static exports found */

  /***/
  function srcAppUtilsCborJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*
    * The MIT License (MIT)
    *
    * Copyright (c) 2014-2016 Patrick Gansterer <paroga@paroga.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to deal
    * in the Software without restriction, including without limitation the rights
    * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    * copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in all
    * copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    * SOFTWARE.
    */


    (function (global, undefined) {
      "use strict";

      var POW_2_24 = 5.960464477539063e-8,
          POW_2_32 = 4294967296,
          POW_2_53 = 9007199254740992;

      function encode(value) {
        var data = new ArrayBuffer(256);
        var dataView = new DataView(data);
        var lastLength;
        var offset = 0;

        function prepareWrite(length) {
          var newByteLength = data.byteLength;
          var requiredLength = offset + length;

          while (newByteLength < requiredLength) {
            newByteLength <<= 1;
          }

          if (newByteLength !== data.byteLength) {
            var oldDataView = dataView;
            data = new ArrayBuffer(newByteLength);
            dataView = new DataView(data);
            var uint32count = offset + 3 >> 2;

            for (var i = 0; i < uint32count; ++i) {
              dataView.setUint32(i << 2, oldDataView.getUint32(i << 2));
            }
          }

          lastLength = length;
          return dataView;
        }

        function commitWrite() {
          offset += lastLength;
        }

        function writeFloat64(value) {
          commitWrite(prepareWrite(8).setFloat64(offset, value));
        }

        function writeUint8(value) {
          commitWrite(prepareWrite(1).setUint8(offset, value));
        }

        function writeUint8Array(value) {
          var dataView = prepareWrite(value.length);

          for (var i = 0; i < value.length; ++i) {
            dataView.setUint8(offset + i, value[i]);
          }

          commitWrite();
        }

        function writeUint16(value) {
          commitWrite(prepareWrite(2).setUint16(offset, value));
        }

        function writeUint32(value) {
          commitWrite(prepareWrite(4).setUint32(offset, value));
        }

        function writeUint64(value) {
          var low = value % POW_2_32;
          var high = (value - low) / POW_2_32;
          var dataView = prepareWrite(8);
          dataView.setUint32(offset, high);
          dataView.setUint32(offset + 4, low);
          commitWrite();
        }

        function writeTypeAndLength(type, length) {
          if (length < 24) {
            writeUint8(type << 5 | length);
          } else if (length < 0x100) {
            writeUint8(type << 5 | 24);
            writeUint8(length);
          } else if (length < 0x10000) {
            writeUint8(type << 5 | 25);
            writeUint16(length);
          } else if (length < 0x100000000) {
            writeUint8(type << 5 | 26);
            writeUint32(length);
          } else {
            writeUint8(type << 5 | 27);
            writeUint64(length);
          }
        }

        function encodeItem(value) {
          var i;
          if (value === false) return writeUint8(0xf4);
          if (value === true) return writeUint8(0xf5);
          if (value === null) return writeUint8(0xf6);
          if (value === undefined) return writeUint8(0xf7);

          switch (typeof value) {
            case "number":
              if (Math.floor(value) === value) {
                if (0 <= value && value <= POW_2_53) return writeTypeAndLength(0, value);
                if (-POW_2_53 <= value && value < 0) return writeTypeAndLength(1, -(value + 1));
              }

              writeUint8(0xfb);
              return writeFloat64(value);

            case "string":
              var utf8data = [];

              for (i = 0; i < value.length; ++i) {
                var charCode = value.charCodeAt(i);

                if (charCode < 0x80) {
                  utf8data.push(charCode);
                } else if (charCode < 0x800) {
                  utf8data.push(0xc0 | charCode >> 6);
                  utf8data.push(0x80 | charCode & 0x3f);
                } else if (charCode < 0xd800) {
                  utf8data.push(0xe0 | charCode >> 12);
                  utf8data.push(0x80 | charCode >> 6 & 0x3f);
                  utf8data.push(0x80 | charCode & 0x3f);
                } else {
                  charCode = (charCode & 0x3ff) << 10;
                  charCode |= value.charCodeAt(++i) & 0x3ff;
                  charCode += 0x10000;
                  utf8data.push(0xf0 | charCode >> 18);
                  utf8data.push(0x80 | charCode >> 12 & 0x3f);
                  utf8data.push(0x80 | charCode >> 6 & 0x3f);
                  utf8data.push(0x80 | charCode & 0x3f);
                }
              }

              writeTypeAndLength(3, utf8data.length);
              return writeUint8Array(utf8data);

            default:
              var length;

              if (Array.isArray(value)) {
                length = value.length;
                writeTypeAndLength(4, length);

                for (i = 0; i < length; ++i) {
                  encodeItem(value[i]);
                }
              } else if (value instanceof Uint8Array) {
                writeTypeAndLength(2, value.length);
                writeUint8Array(value);
              } else {
                var keys = Object.keys(value);
                length = keys.length;
                writeTypeAndLength(5, length);

                for (i = 0; i < length; ++i) {
                  var key = keys[i];
                  encodeItem(key);
                  encodeItem(value[key]);
                }
              }

          }
        }

        encodeItem(value);
        if ("slice" in data) return data.slice(0, offset);
        var ret = new ArrayBuffer(offset);
        var retView = new DataView(ret);

        for (var i = 0; i < offset; ++i) {
          retView.setUint8(i, dataView.getUint8(i));
        }

        return ret;
      }

      function decode(data, tagger, simpleValue) {
        var dataView = new DataView(data);
        var offset = 0;
        if (typeof tagger !== "function") tagger = function tagger(value) {
          return value;
        };
        if (typeof simpleValue !== "function") simpleValue = function simpleValue() {
          return undefined;
        };

        function commitRead(length, value) {
          offset += length;
          return value;
        }

        function readArrayBuffer(length) {
          return commitRead(length, new Uint8Array(data, offset, length));
        }

        function readFloat16() {
          var tempArrayBuffer = new ArrayBuffer(4);
          var tempDataView = new DataView(tempArrayBuffer);
          var value = readUint16();
          var sign = value & 0x8000;
          var exponent = value & 0x7c00;
          var fraction = value & 0x03ff;
          if (exponent === 0x7c00) exponent = 0xff << 10;else if (exponent !== 0) exponent += 127 - 15 << 10;else if (fraction !== 0) return (sign ? -1 : 1) * fraction * POW_2_24;
          tempDataView.setUint32(0, sign << 16 | exponent << 13 | fraction << 13);
          return tempDataView.getFloat32(0);
        }

        function readFloat32() {
          return commitRead(4, dataView.getFloat32(offset));
        }

        function readFloat64() {
          return commitRead(8, dataView.getFloat64(offset));
        }

        function readUint8() {
          return commitRead(1, dataView.getUint8(offset));
        }

        function readUint16() {
          return commitRead(2, dataView.getUint16(offset));
        }

        function readUint32() {
          return commitRead(4, dataView.getUint32(offset));
        }

        function readUint64() {
          return readUint32() * POW_2_32 + readUint32();
        }

        function readBreak() {
          if (dataView.getUint8(offset) !== 0xff) return false;
          offset += 1;
          return true;
        }

        function readLength(additionalInformation) {
          if (additionalInformation < 24) return additionalInformation;
          if (additionalInformation === 24) return readUint8();
          if (additionalInformation === 25) return readUint16();
          if (additionalInformation === 26) return readUint32();
          if (additionalInformation === 27) return readUint64();
          if (additionalInformation === 31) return -1;
          throw "Invalid length encoding";
        }

        function readIndefiniteStringLength(majorType) {
          var initialByte = readUint8();
          if (initialByte === 0xff) return -1;
          var length = readLength(initialByte & 0x1f);
          if (length < 0 || initialByte >> 5 !== majorType) throw "Invalid indefinite length element";
          return length;
        }

        function appendUtf16Data(utf16data, length) {
          for (var i = 0; i < length; ++i) {
            var value = readUint8();

            if (value & 0x80) {
              if (value < 0xe0) {
                value = (value & 0x1f) << 6 | readUint8() & 0x3f;
                length -= 1;
              } else if (value < 0xf0) {
                value = (value & 0x0f) << 12 | (readUint8() & 0x3f) << 6 | readUint8() & 0x3f;
                length -= 2;
              } else {
                value = (value & 0x0f) << 18 | (readUint8() & 0x3f) << 12 | (readUint8() & 0x3f) << 6 | readUint8() & 0x3f;
                length -= 3;
              }
            }

            if (value < 0x10000) {
              utf16data.push(value);
            } else {
              value -= 0x10000;
              utf16data.push(0xd800 | value >> 10);
              utf16data.push(0xdc00 | value & 0x3ff);
            }
          }
        }

        function decodeItem() {
          var initialByte = readUint8();
          var majorType = initialByte >> 5;
          var additionalInformation = initialByte & 0x1f;
          var i;
          var length;

          if (majorType === 7) {
            switch (additionalInformation) {
              case 25:
                return readFloat16();

              case 26:
                return readFloat32();

              case 27:
                return readFloat64();
            }
          }

          length = readLength(additionalInformation);
          if (length < 0 && (majorType < 2 || 6 < majorType)) throw "Invalid length";

          switch (majorType) {
            case 0:
              return length;

            case 1:
              return -1 - length;

            case 2:
              if (length < 0) {
                var elements = [];
                var fullArrayLength = 0;

                while ((length = readIndefiniteStringLength(majorType)) >= 0) {
                  fullArrayLength += length;
                  elements.push(readArrayBuffer(length));
                }

                var fullArray = new Uint8Array(fullArrayLength);
                var fullArrayOffset = 0;

                for (i = 0; i < elements.length; ++i) {
                  fullArray.set(elements[i], fullArrayOffset);
                  fullArrayOffset += elements[i].length;
                }

                return fullArray;
              }

              return readArrayBuffer(length);

            case 3:
              var utf16data = [];

              if (length < 0) {
                while ((length = readIndefiniteStringLength(majorType)) >= 0) {
                  appendUtf16Data(utf16data, length);
                }
              } else appendUtf16Data(utf16data, length);

              return String.fromCharCode.apply(null, utf16data);

            case 4:
              var retArray;

              if (length < 0) {
                retArray = [];

                while (!readBreak()) {
                  retArray.push(decodeItem());
                }
              } else {
                retArray = new Array(length);

                for (i = 0; i < length; ++i) {
                  retArray[i] = decodeItem();
                }
              }

              return retArray;

            case 5:
              var retObject = {};

              for (i = 0; i < length || length < 0 && !readBreak(); ++i) {
                var key = decodeItem();
                retObject[key] = decodeItem();
              }

              return retObject;

            case 6:
              return tagger(decodeItem(), length);

            case 7:
              switch (length) {
                case 20:
                  return false;

                case 21:
                  return true;

                case 22:
                  return null;

                case 23:
                  return undefined;

                default:
                  return simpleValue(length);
              }

          }
        }

        var ret = decodeItem();
        if (offset !== data.byteLength) throw "Remaining bytes";
        return ret;
      }

      var obj = {
        encode: encode,
        decode: decode
      };
      if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = obj, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
    })(this);
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    document.addEventListener('DOMContentLoaded', function () {
      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function () {
        if ('serviceWorker' in navigator) {
          console.log('Service Worker is supported');
          navigator.serviceWorker.register('/firebase-messaging-sw.js').then(function (swReg) {
            console.log('Service Worker is registered', swReg);
          })["catch"](function (error) {
            console.error('Service Worker Error', error);
          });
        }

        if ('PushManager' in window) {
          Notification.requestPermission(function (status) {
            console.log('Notification permission status:', status);
          });
          console.log('Push messaging is supported');
        } else {
          console.error('Push messaging is not supported');
        }
      })["catch"](function (err) {
        return console.log(err);
      });
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/tommy/Documents/git/tommy.lai.github.io/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map