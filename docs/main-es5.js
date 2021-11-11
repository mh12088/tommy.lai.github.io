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


    var _web_authn_web_authn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./web-authn/web-authn.component */
    "./src/app/web-authn/web-authn.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'biometric-login-demo';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 12,
      vars: 0,
      consts: [["role", "banner", 1, "toolbar"], ["xmlns", "http://www.w3.org/2000/svg", "width", "40", "height", "40", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-fingerprint"], ["d", "M8.06 6.5a.5.5 0 0 1 .5.5v.776a11.5 11.5 0 0 1-.552 3.519l-1.331 4.14a.5.5 0 0 1-.952-.305l1.33-4.141a10.5 10.5 0 0 0 .504-3.213V7a.5.5 0 0 1 .5-.5Z"], ["d", "M6.06 7a2 2 0 1 1 4 0 .5.5 0 1 1-1 0 1 1 0 1 0-2 0v.332c0 .409-.022.816-.066 1.221A.5.5 0 0 1 6 8.447c.04-.37.06-.742.06-1.115V7Zm3.509 1a.5.5 0 0 1 .487.513 11.5 11.5 0 0 1-.587 3.339l-1.266 3.8a.5.5 0 0 1-.949-.317l1.267-3.8a10.5 10.5 0 0 0 .535-3.048A.5.5 0 0 1 9.569 8Zm-3.356 2.115a.5.5 0 0 1 .33.626L5.24 14.939a.5.5 0 1 1-.955-.296l1.303-4.199a.5.5 0 0 1 .625-.329Z"], ["d", "M4.759 5.833A3.501 3.501 0 0 1 11.559 7a.5.5 0 0 1-1 0 2.5 2.5 0 0 0-4.857-.833.5.5 0 1 1-.943-.334Zm.3 1.67a.5.5 0 0 1 .449.546 10.72 10.72 0 0 1-.4 2.031l-1.222 4.072a.5.5 0 1 1-.958-.287L4.15 9.793a9.72 9.72 0 0 0 .363-1.842.5.5 0 0 1 .546-.449Zm6 .647a.5.5 0 0 1 .5.5c0 1.28-.213 2.552-.632 3.762l-1.09 3.145a.5.5 0 0 1-.944-.327l1.089-3.145c.382-1.105.578-2.266.578-3.435a.5.5 0 0 1 .5-.5Z"], ["d", "M3.902 4.222a4.996 4.996 0 0 1 5.202-2.113.5.5 0 0 1-.208.979 3.996 3.996 0 0 0-4.163 1.69.5.5 0 0 1-.831-.556Zm6.72-.955a.5.5 0 0 1 .705-.052A4.99 4.99 0 0 1 13.059 7v1.5a.5.5 0 1 1-1 0V7a3.99 3.99 0 0 0-1.386-3.028.5.5 0 0 1-.051-.705ZM3.68 5.842a.5.5 0 0 1 .422.568c-.029.192-.044.39-.044.59 0 .71-.1 1.417-.298 2.1l-1.14 3.923a.5.5 0 1 1-.96-.279L2.8 8.821A6.531 6.531 0 0 0 3.058 7c0-.25.019-.496.054-.736a.5.5 0 0 1 .568-.422Zm8.882 3.66a.5.5 0 0 1 .456.54c-.084 1-.298 1.986-.64 2.934l-.744 2.068a.5.5 0 0 1-.941-.338l.745-2.07a10.51 10.51 0 0 0 .584-2.678.5.5 0 0 1 .54-.456Z"], ["d", "M4.81 1.37A6.5 6.5 0 0 1 14.56 7a.5.5 0 1 1-1 0 5.5 5.5 0 0 0-8.25-4.765.5.5 0 0 1-.5-.865Zm-.89 1.257a.5.5 0 0 1 .04.706A5.478 5.478 0 0 0 2.56 7a.5.5 0 0 1-1 0c0-1.664.626-3.184 1.655-4.333a.5.5 0 0 1 .706-.04ZM1.915 8.02a.5.5 0 0 1 .346.616l-.779 2.767a.5.5 0 1 1-.962-.27l.778-2.767a.5.5 0 0 1 .617-.346Zm12.15.481a.5.5 0 0 1 .49.51c-.03 1.499-.161 3.025-.727 4.533l-.07.187a.5.5 0 0 1-.936-.351l.07-.187c.506-1.35.634-2.74.663-4.202a.5.5 0 0 1 .51-.49Z"], ["role", "main", 1, "content"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Biometric Login Demo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-web-authn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_web_authn_web_authn_component__WEBPACK_IMPORTED_MODULE_1__["WebAuthnComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27, 31, 35, .2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n    border-color: rgba(27, 31, 35, .35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  \n  @media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }"]
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
      }], null, null);
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


    var _web_authn_web_authn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./web-authn/web-authn.component */
    "./src/app/web-authn/web-authn.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

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
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _web_authn_web_authn_component__WEBPACK_IMPORTED_MODULE_4__["WebAuthnComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _web_authn_web_authn_component__WEBPACK_IMPORTED_MODULE_4__["WebAuthnComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/web-authn/service/mock-service.ts":
  /*!***************************************************!*\
    !*** ./src/app/web-authn/service/mock-service.ts ***!
    \***************************************************/

  /*! exports provided: MockService */

  /***/
  function srcAppWebAuthnServiceMockServiceTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/web-authn/utils/cbor.js");
    /* harmony import */


    var _utils_cbor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_cbor__WEBPACK_IMPORTED_MODULE_1__);

    var MockService = /*#__PURE__*/function () {
      function MockService() {
        _classCallCheck(this, MockService);

        this.userList = [];
      } // Should generate from server


      _createClass(MockService, [{
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
        key: "createUser",
        value: function createUser(user) {
          this.userList.push(user);
          return this.getUserByMobileNumber(user.mobileNumber);
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(user) {
          this.userList.splice(this.getUserIndex(user), 1);
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
          return this.userList[userIndex];
        } // Validate and Store credential

      }, {
        key: "registerCredential",
        value: function registerCredential(user, credential) {
          var authData = this.extractAuthData(credential);
          var credentialIdLength = this.getCredentialIdLength(authData);
          var credentialId = authData.slice(55, 55 + credentialIdLength);
          console.log('credentialIdLength', credentialIdLength);
          console.log('credentialId', credentialId);
          var publicKeyBytes = authData.slice(55 + credentialIdLength);

          var publicKeyObject = _utils_cbor__WEBPACK_IMPORTED_MODULE_1__["decode"](publicKeyBytes.buffer);

          console.log('publicKeyObject', publicKeyObject);
          var valid = true;

          if (valid) {
            // Save publicKeyBytes and credentialId
            user.credentials.push({
              credentialId: credentialId,
              publicKey: publicKeyBytes
            });
            this.updateUser(user);
          }

          return valid;
        }
      }, {
        key: "extractAuthData",
        value: function extractAuthData(credential) {
          // decode the clientDataJSON into a utf-8 string
          var utf8Decoder = new TextDecoder('utf-8');
          var decodedClientData = utf8Decoder.decode(credential.response.clientDataJSON);
          var clientDataObj = JSON.parse(decodedClientData);
          console.log('clientDataObj', clientDataObj);

          var decodedAttestationObj = _utils_cbor__WEBPACK_IMPORTED_MODULE_1__["decode"](credential.response.attestationObject);

          console.log('decodedAttestationObj', decodedAttestationObj);
          var authData = decodedAttestationObj.authData;
          console.log('authData', authData);
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
  "./src/app/web-authn/service/web-authn-service.ts":
  /*!********************************************************!*\
    !*** ./src/app/web-authn/service/web-authn-service.ts ***!
    \********************************************************/

  /*! exports provided: WebAuthnService */

  /***/
  function srcAppWebAuthnServiceWebAuthnServiceTs(module, __webpack_exports__, __webpack_require__) {
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


    var _mock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mock-service */
    "./src/app/web-authn/service/mock-service.ts");

    var WebAuthnService = /*#__PURE__*/function () {
      function WebAuthnService(mockService) {
        _classCallCheck(this, WebAuthnService);

        this.mockService = mockService;
      }

      _createClass(WebAuthnService, [{
        key: "webAuthnSignup",
        value: function webAuthnSignup(user) {
          console.log('Sign up');
          var publicKeyCredentialCreationOptions = {
            // Should generate from server
            challenge: this.mockService.getChallenge(),
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
              authenticatorAttachment: 'platform'
            },
            timeout: 100000,
            attestation: 'direct'
          };
          return navigator.credentials.create({
            publicKey: publicKeyCredentialCreationOptions
          });
        }
      }, {
        key: "webAuthnSignin",
        value: function webAuthnSignin(user) {
          var allowCredentials = user.credentials.map(function (c) {
            console.log(c.credentialId);
            return {
              type: 'public-key',
              id: Uint8Array.from(Object.values(c.credentialId))
            };
          });
          console.log('allowCredentials', allowCredentials);
          var credentialRequestOptions = {
            challenge: this.mockService.getChallenge(),
            allowCredentials: allowCredentials
          };
          return navigator.credentials.get({
            publicKey: credentialRequestOptions
          });
        }
      }]);

      return WebAuthnService;
    }();

    WebAuthnService.ɵfac = function WebAuthnService_Factory(t) {
      return new (t || WebAuthnService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_mock_service__WEBPACK_IMPORTED_MODULE_1__["MockService"]));
    };

    WebAuthnService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WebAuthnService,
      factory: WebAuthnService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAuthnService, [{
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
  "./src/app/web-authn/utils/cbor.js":
  /*!*****************************************!*\
    !*** ./src/app/web-authn/utils/cbor.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function srcAppWebAuthnUtilsCborJs(module, exports, __webpack_require__) {
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
  "./src/app/web-authn/web-authn.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/web-authn/web-authn.component.ts ***!
    \**************************************************/

  /*! exports provided: WebAuthnComponent */

  /***/
  function srcAppWebAuthnWebAuthnComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _service_mock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./service/mock-service */
    "./src/app/web-authn/service/mock-service.ts");
    /* harmony import */


    var _service_web_authn_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./service/web-authn-service */
    "./src/app/web-authn/service/web-authn-service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 26);

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
      function WebAuthnComponent(mockService, webAuthnService) {
        _classCallCheck(this, WebAuthnComponent);

        this.mockService = mockService;
        this.webAuthnService = webAuthnService;
        this.errorMsg = ""; // mobileNumber: string = "";
        // email: string = "";
        // isEnableBiometricLogin: boolean;

        this.userList = [];
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
          mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9]{8}$")]),
          isEnableBiometricLogin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
      }

      _createClass(WebAuthnComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "email",
        get: function get() {
          return this.userForm.get("email");
        }
      }, {
        key: "mobileNumber",
        get: function get() {
          return this.userForm.get("mobileNumber");
        }
      }, {
        key: "isEnableBiometricLogin",
        get: function get() {
          return this.userForm.get("isEnableBiometricLogin");
        }
      }, {
        key: "signup",
        value: function signup() {
          var user = {
            mobileNumber: this.userForm.get("mobileNumber").value,
            email: this.userForm.get("email").value,
            credentials: []
          };
          var errorMsgList = this.mockService.validateCreateUser(user);

          if (errorMsgList.length > 0) {
            alert(errorMsgList.toString());
            return;
          }

          var userFromDB = this.mockService.createUser(user);
          this.userList = this.mockService.getAllUser();
          alert("Your Account Has been Created.");

          if (this.userForm.get("isEnableBiometricLogin").value) {
            alert("Enable biometric login now.");
            this.webAuthnSignup(userFromDB);
          }
        }
      }, {
        key: "webAuthnSignup",
        value: function webAuthnSignup(user) {
          var _this = this;

          // Ask for WebAuthn Auth method
          this.webAuthnService.webAuthnSignup(user).then(function (credential) {
            console.log("Credentials Create response: ", credential); // Call server to validate and save credential
            // Hardcodeed on frontend

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
        key: "enableBiometricLogin",
        value: function enableBiometricLogin(user) {
          if (user.credentials.length === 0) {
            var isConfirm = confirm("Do you confirm to enable biometric login?");
            if (isConfirm) this.webAuthnSignup(user);
          } else {
            var _isConfirm = confirm("Do you confirm to disable biometric login?");

            user.credentials = [];
            if (_isConfirm) this.mockService.updateUser(user);
          }
        }
      }, {
        key: "deleteAccount",
        value: function deleteAccount(user) {
          this.mockService.deleteUser(user);
        }
      }, {
        key: "signin",
        value: function signin(user) {
          var _this2 = this;

          var userFromDB = this.mockService.getUserByMobileNumber(user.mobileNumber);
          this.webAuthnService.webAuthnSignin(userFromDB).then(function (attestion) {
            alert("Authentication Successful");
            console.log("Authentication Successful: ", attestion); // TODO: Call server to validate attestion
            // When server return ok,login successful else login failed
          })["catch"](function (error) {
            alert("Authentication Failed");
            _this2.errorMsg = error;
            console.log("Authentication Failed: ", error);
          });
        }
      }]);

      return WebAuthnComponent;
    }();

    WebAuthnComponent.ɵfac = function WebAuthnComponent_Factory(t) {
      return new (t || WebAuthnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_mock_service__WEBPACK_IMPORTED_MODULE_2__["MockService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_web_authn_service__WEBPACK_IMPORTED_MODULE_3__["WebAuthnService"]));
    };

    WebAuthnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WebAuthnComponent,
      selectors: [["app-web-authn"]],
      decls: 38,
      vars: 8,
      consts: [[1, "register-form-container"], [3, "formGroup", "ngSubmit"], [1, "form-field"], [1, "form-label"], [3, "ngClass"], ["name", "email", "formControlName", "email"], [3, "ngClass", 4, "ngIf"], ["name", "mobileNumber", "formControlName", "mobileNumber", "maxlength", "8"], [1, "form-field", "checkbox"], ["type", "checkbox", "name", "isEnableBiometricLogin", "formControlName", "isEnableBiometricLogin"], ["type", "submit", 1, "btn", 3, "disabled"], [4, "ngIf"], [1, "line"], [1, "user-list-container"], ["biometricIcon", ""], [4, "ngFor", "ngForOf"], [1, "red", "errorMsg"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-fingerprint"], ["d", "M8.06 6.5a.5.5 0 0 1 .5.5v.776a11.5 11.5 0 0 1-.552 3.519l-1.331 4.14a.5.5 0 0 1-.952-.305l1.33-4.141a10.5 10.5 0 0 0 .504-3.213V7a.5.5 0 0 1 .5-.5Z"], ["d", "M6.06 7a2 2 0 1 1 4 0 .5.5 0 1 1-1 0 1 1 0 1 0-2 0v.332c0 .409-.022.816-.066 1.221A.5.5 0 0 1 6 8.447c.04-.37.06-.742.06-1.115V7Zm3.509 1a.5.5 0 0 1 .487.513 11.5 11.5 0 0 1-.587 3.339l-1.266 3.8a.5.5 0 0 1-.949-.317l1.267-3.8a10.5 10.5 0 0 0 .535-3.048A.5.5 0 0 1 9.569 8Zm-3.356 2.115a.5.5 0 0 1 .33.626L5.24 14.939a.5.5 0 1 1-.955-.296l1.303-4.199a.5.5 0 0 1 .625-.329Z"], ["d", "M4.759 5.833A3.501 3.501 0 0 1 11.559 7a.5.5 0 0 1-1 0 2.5 2.5 0 0 0-4.857-.833.5.5 0 1 1-.943-.334Zm.3 1.67a.5.5 0 0 1 .449.546 10.72 10.72 0 0 1-.4 2.031l-1.222 4.072a.5.5 0 1 1-.958-.287L4.15 9.793a9.72 9.72 0 0 0 .363-1.842.5.5 0 0 1 .546-.449Zm6 .647a.5.5 0 0 1 .5.5c0 1.28-.213 2.552-.632 3.762l-1.09 3.145a.5.5 0 0 1-.944-.327l1.089-3.145c.382-1.105.578-2.266.578-3.435a.5.5 0 0 1 .5-.5Z"], ["d", "M3.902 4.222a4.996 4.996 0 0 1 5.202-2.113.5.5 0 0 1-.208.979 3.996 3.996 0 0 0-4.163 1.69.5.5 0 0 1-.831-.556Zm6.72-.955a.5.5 0 0 1 .705-.052A4.99 4.99 0 0 1 13.059 7v1.5a.5.5 0 1 1-1 0V7a3.99 3.99 0 0 0-1.386-3.028.5.5 0 0 1-.051-.705ZM3.68 5.842a.5.5 0 0 1 .422.568c-.029.192-.044.39-.044.59 0 .71-.1 1.417-.298 2.1l-1.14 3.923a.5.5 0 1 1-.96-.279L2.8 8.821A6.531 6.531 0 0 0 3.058 7c0-.25.019-.496.054-.736a.5.5 0 0 1 .568-.422Zm8.882 3.66a.5.5 0 0 1 .456.54c-.084 1-.298 1.986-.64 2.934l-.744 2.068a.5.5 0 0 1-.941-.338l.745-2.07a10.51 10.51 0 0 0 .584-2.678.5.5 0 0 1 .54-.456Z"], ["d", "M4.81 1.37A6.5 6.5 0 0 1 14.56 7a.5.5 0 1 1-1 0 5.5 5.5 0 0 0-8.25-4.765.5.5 0 0 1-.5-.865Zm-.89 1.257a.5.5 0 0 1 .04.706A5.478 5.478 0 0 0 2.56 7a.5.5 0 0 1-1 0c0-1.664.626-3.184 1.655-4.333a.5.5 0 0 1 .706-.04ZM1.915 8.02a.5.5 0 0 1 .346.616l-.779 2.767a.5.5 0 1 1-.962-.27l.778-2.767a.5.5 0 0 1 .617-.346Zm12.15.481a.5.5 0 0 1 .49.51c-.03 1.499-.161 3.025-.727 4.533l-.07.187a.5.5 0 0 1-.936-.351l.07-.187c.506-1.35.634-2.74.663-4.202a.5.5 0 0 1 .51-.49Z"], [1, "btn", "delete-btn", 3, "click"], [1, "btn", 3, "click"], [4, "ngTemplateOutlet"], [1, "btn", "bg-red", 3, "click"]],
      template: function WebAuthnComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function WebAuthnComponent_Template_form_ngSubmit_3_listener() {
            return ctx.signup();
          });

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
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]],
      styles: [".register-form-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.register-form-container[_ngcontent-%COMP%]   .form-field.checkbox[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n}\n.register-form-container[_ngcontent-%COMP%]   .form-field.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.register-form-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 60px;\n}\n.register-form-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]:not(.checkbox)   input[_ngcontent-%COMP%] {\n  min-width: 250px;\n}\n.register-form-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 120px;\n  height: auto;\n  background-color: #1976d2;\n  border: 1px solid white;\n  color: white;\n  cursor: pointer;\n  border-radius: 4px;\n  height: 35px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.register-form-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  background-color: lightgray;\n  cursor: not-allowed;\n}\n.register-form-container[_ngcontent-%COMP%]   line[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  border-bottom: 1px solid black;\n}\n.register-form-container[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.register-form-container[_ngcontent-%COMP%]   .bg-red[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.user-list-container[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  border-bottom: 1px solid black;\n}\n.user-list-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: auto;\n  height: auto;\n  background-color: #1976d2;\n  border: 1px solid white;\n  color: white;\n  cursor: pointer;\n  border-radius: 4px;\n  height: 35px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.user-list-container[_ngcontent-%COMP%]   .btn.delete-btn[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLWF1dGhuL0M6XFxVc2Vyc1xcQzItQ09NUFVURVJcXERlc2t0b3BcXGJpb21ldHJpYy1sb2dpbi1kZW1vL3NyY1xcYXBwXFx3ZWItYXV0aG5cXHdlYi1hdXRobi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2ViLWF1dGhuL3dlYi1hdXRobi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQWtCSSxnQkFBQTtBQ2pCUjtBREFRO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtBQ0VaO0FERFk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0doQjtBREFRO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FDRVo7QURDWTtFQUNJLGdCQUFBO0FDQ2hCO0FES0k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNIUjtBREtJO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtBQ0hSO0FETUk7RUFDSSxjQUFBO0VBQ0EsOEJBQUE7QUNKUjtBRE9JO0VBQ0ksY0FBQTtBQ0xSO0FEUUk7RUFDSSx5QkFBQTtBQ05SO0FEV0k7RUFDSSxjQUFBO0VBQ0EsOEJBQUE7QUNSUjtBRFdJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDVFI7QURVUTtFQUNJLHlCQUFBO0FDUloiLCJmaWxlIjoic3JjL2FwcC93ZWItYXV0aG4vd2ViLWF1dGhuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLWZvcm0tY29udGFpbmVyIHtcclxuICAgIC5mb3JtLWZpZWxkIHtcclxuICAgICAgICAmLmNoZWNrYm94IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLWxhYmVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bm90KC5jaGVja2JveCkge1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5idG46ZGlzYWJsZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgIH1cclxuXHJcbiAgICBsaW5lIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLnJlZCB7XHJcbiAgICAgICAgY29sb3I6ICNmNDQzMzY7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLmJnLXJlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxuICAgIH1cclxufVxyXG5cclxuLnVzZXItbGlzdC1jb250YWluZXIge1xyXG4gICAgLmxpbmUge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICAuYnRuIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgJi5kZWxldGUtYnRuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIucmVnaXN0ZXItZm9ybS1jb250YWluZXIgLmZvcm0tZmllbGQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnJlZ2lzdGVyLWZvcm0tY29udGFpbmVyIC5mb3JtLWZpZWxkLmNoZWNrYm94IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucmVnaXN0ZXItZm9ybS1jb250YWluZXIgLmZvcm0tZmllbGQuY2hlY2tib3ggaW5wdXQge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLnJlZ2lzdGVyLWZvcm0tY29udGFpbmVyIC5mb3JtLWZpZWxkIC5mb3JtLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDYwcHg7XG59XG4ucmVnaXN0ZXItZm9ybS1jb250YWluZXIgLmZvcm0tZmllbGQ6bm90KC5jaGVja2JveCkgaW5wdXQge1xuICBtaW4td2lkdGg6IDI1MHB4O1xufVxuLnJlZ2lzdGVyLWZvcm0tY29udGFpbmVyIC5idG4ge1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucmVnaXN0ZXItZm9ybS1jb250YWluZXIgLmJ0bjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5yZWdpc3Rlci1mb3JtLWNvbnRhaW5lciBsaW5lIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cbi5yZWdpc3Rlci1mb3JtLWNvbnRhaW5lciAucmVkIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG4ucmVnaXN0ZXItZm9ybS1jb250YWluZXIgLmJnLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi51c2VyLWxpc3QtY29udGFpbmVyIC5saW5lIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cbi51c2VyLWxpc3QtY29udGFpbmVyIC5idG4ge1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi51c2VyLWxpc3QtY29udGFpbmVyIC5idG4uZGVsZXRlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59Il19 */"]
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
          type: _service_mock_service__WEBPACK_IMPORTED_MODULE_2__["MockService"]
        }, {
          type: _service_web_authn_service__WEBPACK_IMPORTED_MODULE_3__["WebAuthnService"]
        }];
      }, null);
    })();
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

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
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
    /*! C:\Users\C2-COMPUTER\Desktop\biometric-login-demo\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map