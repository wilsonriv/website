function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
  "./src/app/about/about-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/about/about-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AboutRoutingModule */

  /***/
  function srcAppAboutAboutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function () {
      return AboutRoutingModule;
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


    var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about.component */
    "./src/app/about/about.component.ts");

    var AboutRoutingModule = function AboutRoutingModule() {
      _classCallCheck(this, AboutRoutingModule);
    };

    AboutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AboutRoutingModule
    });
    AboutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AboutRoutingModule_Factory(t) {
        return new (t || AboutRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: 'about',
        component: _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: 'about',
            component: _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
          }])]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 35,
      vars: 0,
      consts: [[1, "container"], [1, "logon-container", "text-center"], ["src", "https://raw.githubusercontent.com/wilsonriv/my-files/master/Linkedin%20Picture%20with%20clear%20background.jpg", "alt", "Wilson Rivera", 1, "rounded-circle"], ["href", "https://www.16personalities.com/", "target", "_blank"], ["href", "https://www.16personalities.com/istj-personality", "target", "_blank"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Hi, I\u2019m ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Wilson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " I\u2019m a Software Engineer with over 10 years of experience developing business solutions for more than for 14 companies during my career. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " I have a broad number of skills but recently I have been working mainly with Angular & C# to build projects following a Monolithics or Microservice architecture. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " My personality allows me to fit well in teams and my experience sometimes grants me the lead position Lead role in many projects. I don\u2019t necessarily seek for lead roles, but I embrace them when given to me. I just strive to make the team successful. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " According to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "16Personalities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " my personality resembles the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Logistician");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " type which you can learn more about by clicking this ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Thank you ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Wilson Rivera");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/about/about.module.ts":
  /*!***************************************!*\
    !*** ./src/app/about/about.module.ts ***!
    \***************************************/

  /*! exports provided: AboutModule */

  /***/
  function srcAppAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutModule", function () {
      return AboutModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _about_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about-routing.module */
    "./src/app/about/about-routing.module.ts");

    var AboutModule = function AboutModule() {
      _classCallCheck(this, AboutModule);
    };

    AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AboutModule
    });
    AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AboutModule_Factory(t) {
        return new (t || AboutModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutModule, {
        declarations: [_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutRoutingModule"]]
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


    var _header_jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/jumbotron/jumbotron.component */
    "./src/app/header/jumbotron/jumbotron.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-jumbotron");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        }
      },
      directives: [_header_jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_1__["JumbotronComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header/header.module */
    "./src/app/header/header.module.ts");
    /* harmony import */


    var _clients_clients_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./clients/clients.module */
    "./src/app/clients/clients.module.ts");
    /* harmony import */


    var _about_about_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./about/about.module */
    "./src/app/about/about.module.ts");

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
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"], _clients_clients_module__WEBPACK_IMPORTED_MODULE_5__["ClientsModule"], _about_about_module__WEBPACK_IMPORTED_MODULE_6__["AboutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{
        path: '',
        redirectTo: '/clients',
        pathMatch: 'full'
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"], _clients_clients_module__WEBPACK_IMPORTED_MODULE_5__["ClientsModule"], _about_about_module__WEBPACK_IMPORTED_MODULE_6__["AboutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"], _clients_clients_module__WEBPACK_IMPORTED_MODULE_5__["ClientsModule"], _about_about_module__WEBPACK_IMPORTED_MODULE_6__["AboutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{
            path: '',
            redirectTo: '/clients',
            pathMatch: 'full'
          }])],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/certifications/certifications-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/certifications/certifications-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: CertificationsRoutingModule */

  /***/
  function srcAppCertificationsCertificationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CertificationsRoutingModule", function () {
      return CertificationsRoutingModule;
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


    var _certifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./certifications.component */
    "./src/app/certifications/certifications.component.ts");

    var CertificationsRoutingModule = function CertificationsRoutingModule() {
      _classCallCheck(this, CertificationsRoutingModule);
    };

    CertificationsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CertificationsRoutingModule
    });
    CertificationsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CertificationsRoutingModule_Factory(t) {
        return new (t || CertificationsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: 'certifications',
        component: _certifications_component__WEBPACK_IMPORTED_MODULE_2__["CertificationsComponent"]
      }])], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CertificationsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CertificationsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: 'certifications',
            component: _certifications_component__WEBPACK_IMPORTED_MODULE_2__["CertificationsComponent"]
          }])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/certifications/certifications.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/certifications/certifications.component.ts ***!
    \************************************************************/

  /*! exports provided: CertificationsComponent */

  /***/
  function srcAppCertificationsCertificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CertificationsComponent", function () {
      return CertificationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CertificationsComponent =
    /*#__PURE__*/
    function () {
      function CertificationsComponent() {
        _classCallCheck(this, CertificationsComponent);
      }

      _createClass(CertificationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CertificationsComponent;
    }();

    CertificationsComponent.ɵfac = function CertificationsComponent_Factory(t) {
      return new (t || CertificationsComponent)();
    };

    CertificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CertificationsComponent,
      selectors: [["app-certifications"]],
      decls: 39,
      vars: 0,
      consts: [["width", "210", "height", "210", "viewBox", "0 0 300 300", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M283.38 118.47a16.44 16.44 0 00-10.75-6.69q-11.26-1.95-22.56-3.52V54.43A21.54 21.54 0 00235.49 34l-.16-.05h-.17l-74.74-22.61A32.63 32.63 0 00150 9.64a32.58 32.58 0 00-10.41 1.7L64.84 33.93h-.17l-.16.05a21.54 21.54 0 00-14.58 20.4v53.83q-11.3 1.58-22.56 3.52a16.44 16.44 0 00-10.75 6.69 13.48 13.48 0 00-2.25 10.25l11 57.39a14.64 14.64 0 0016.82 11.47c2.6-.45 5.2-.87 7.81-1.29.15 14.32 5.62 28.23 16.3 41.36 8.15 10 19.37 19.62 33.34 28.52a244.66 244.66 0 0047.18 23.07l3.28 1.12 3.27-1.15a250.23 250.23 0 0047.12-23.35c14-9 25.17-18.56 33.3-28.53 10.68-13.09 16.16-26.9 16.31-41 2.61.42 5.21.84 7.81 1.29a14.92 14.92 0 002.48.21 14.62 14.62 0 0014.34-11.69l10.95-57.37a13.49 13.49 0 00-2.3-10.25z", "fill", "#002050"], ["d", "M60 194.35v1.34c0 53.33 90 84.06 90 84.06s90-31.52 90-84.06v-.91a633.88 633.88 0 00-180-.43z", "fill", "#0064b5"], ["d", "M240 106.93V54.8a11.52 11.52 0 00-7.78-10.91l-74.85-22.63a22.81 22.81 0 00-14.72 0L67.74 43.89A11.52 11.52 0 0060 54.8v52.13a720.59 720.59 0 01180 0z", "fill", "#505050"], ["d", "M104 88.53a7.62 7.62 0 01-3.63.77 5.89 5.89 0 01-4.5-1.8 6.71 6.71 0 01-1.69-4.74 7 7 0 011.9-5.1 6.46 6.46 0 014.82-2 7.73 7.73 0 013.1.54v1.64a6.34 6.34 0 00-3.12-.78 4.77 4.77 0 00-3.67 1.51 5.7 5.7 0 00-1.41 4 5.4 5.4 0 001.32 3.83 4.47 4.47 0 003.45 1.43A6.44 6.44 0 00104 87zm13.43.55h-7V75.93h6.68v1.4H112v4.37h4.75v1.39H112v4.6h5.43zm15.72 0h-1.83l-2.2-3.68a8.35 8.35 0 00-.59-.88 3.62 3.62 0 00-.58-.59 2.38 2.38 0 00-.65-.34 2.61 2.61 0 00-.77-.1h-1.27v5.59h-1.54V75.93h3.93a5.41 5.41 0 011.59.22 3.55 3.55 0 011.27.65 3.29 3.29 0 01.84 1.1 4 4 0 01.09 2.8 3.24 3.24 0 01-.59 1 3.54 3.54 0 01-.91.76 4.53 4.53 0 01-1.21.5 2.61 2.61 0 01.57.34 2.76 2.76 0 01.47.44c.14.17.29.37.43.58s.31.47.48.76zm-7.89-11.75v4.76h2.09a3 3 0 001.07-.17 2.48 2.48 0 00.85-.5 2.18 2.18 0 00.56-.8 2.54 2.54 0 00.2-1.06 2 2 0 00-.68-1.64 2.93 2.93 0 00-2-.59zm20.4 0h-3.8v11.75h-1.54V77.33h-3.79v-1.4h9.13zM153 89.08h-1.55V75.93H153zm13.92-11.75h-5.13v4.55h4.75v1.38h-4.75v5.82h-1.55V75.93h6.68zm7.8 11.75h-1.54V75.93h1.54zm14.2 0h-7V75.93h6.68v1.4h-5.14v4.37h4.76v1.39h-4.76v4.6h5.44zm6.29 0V75.93h3.63q7 0 7 6.41a6.48 6.48 0 01-1.93 4.9 7.17 7.17 0 01-5.17 1.84zm1.54-11.75v10.36h2a5.54 5.54 0 004-1.39 5.18 5.18 0 001.44-3.92q0-5.05-5.37-5zm-82.67-12.67h-3.94V54.08q0-1.71.15-3.78h-.1a18.93 18.93 0 01-.55 2.34l-4.14 12h-3.26L98 52.76a22.63 22.63 0 01-.56-2.46h-.11c.11 1.74.16 3.27.16 4.58v9.78h-3.56V47h5.83l3.62 10.48A15.3 15.3 0 01104 60h.08c.22-1 .46-1.83.7-2.56L108.39 47h5.69zM119.69 50a2.29 2.29 0 01-1.62-.59 1.88 1.88 0 01-.63-1.43 1.81 1.81 0 01.63-1.43 2.62 2.62 0 013.24 0 1.83 1.83 0 01.62 1.43 1.89 1.89 0 01-.62 1.45 2.32 2.32 0 01-1.62.57zm1.92 14.62h-3.9V52h3.9zm12.84-.42a7.7 7.7 0 01-3.81.77 6.42 6.42 0 01-4.7-1.77 6.08 6.08 0 01-1.8-4.55 6.73 6.73 0 011.92-5.07 7.13 7.13 0 015.16-1.85 6.54 6.54 0 013.23.59v3.3a4.41 4.41 0 00-2.72-.91 3.62 3.62 0 00-2.66 1 3.68 3.68 0 00-1 2.71A3.63 3.63 0 00129 61a3.42 3.42 0 002.58.95 5.08 5.08 0 002.84-.91zm10.79-8.65a3.31 3.31 0 00-1.64-.38 2.34 2.34 0 00-2 .93 4 4 0 00-.72 2.53v6H137V52h3.89v2.35a3.38 3.38 0 013.33-2.57 2.47 2.47 0 011 .15zM153 65a6.78 6.78 0 01-5-1.77 6.39 6.39 0 01-1.81-4.8 6.4 6.4 0 011.88-4.9 7.06 7.06 0 015.06-1.77 6.69 6.69 0 014.93 1.77 6.22 6.22 0 011.79 4.67 6.66 6.66 0 01-1.84 5A6.85 6.85 0 01153 65zm.1-10.26a2.62 2.62 0 00-2.15.95 4.18 4.18 0 00-.76 2.69q0 3.63 2.93 3.63t2.8-3.73q-.03-3.57-2.85-3.57zm8.46 9.59v-3.16a8.11 8.11 0 001.92.86 6.37 6.37 0 001.81.29 3.84 3.84 0 001.63-.29.91.91 0 00.6-.86.81.81 0 00-.27-.62 3.1 3.1 0 00-.7-.43 8.34 8.34 0 00-.93-.33c-.34-.1-.66-.21-1-.33a10.28 10.28 0 01-1.32-.61 3.88 3.88 0 01-1-.76 2.88 2.88 0 01-.59-1 3.89 3.89 0 01-.21-1.34 3.46 3.46 0 01.47-1.83 3.59 3.59 0 011.23-1.25A5.66 5.66 0 01165 52a9.32 9.32 0 012.07-.22 11.09 11.09 0 011.7.13 12.58 12.58 0 011.7.37v3a6.18 6.18 0 00-1.59-.65 6.79 6.79 0 00-1.65-.21 4.23 4.23 0 00-.73.06 2.91 2.91 0 00-.59.2 1.15 1.15 0 00-.41.33.78.78 0 00-.15.47.9.9 0 00.22.59 2 2 0 00.58.42 5.33 5.33 0 00.8.32l.87.29a11.54 11.54 0 011.4.6 4.32 4.32 0 011.08.75 2.93 2.93 0 01.69 1 4.08 4.08 0 01-.24 3.3 3.91 3.91 0 01-1.3 1.29 5.93 5.93 0 01-1.86.73 10.42 10.42 0 01-2.19.23 11.49 11.49 0 01-3.84-.67zm17.95.67a6.78 6.78 0 01-5-1.77 6.43 6.43 0 01-1.81-4.8 6.4 6.4 0 011.88-4.9 7.08 7.08 0 015.06-1.77 6.73 6.73 0 014.94 1.77 6.26 6.26 0 011.78 4.67 6.66 6.66 0 01-1.84 5 6.85 6.85 0 01-5.01 1.8zm.1-10.26a2.59 2.59 0 00-2.14.95 4.18 4.18 0 00-.77 2.69q0 3.63 2.93 3.63t2.8-3.73q0-3.57-2.82-3.57zM196.78 49a4.06 4.06 0 00-1.44-.29c-1.25 0-1.87.67-1.87 2V52h2.88v2.88h-2.88v9.75h-3.89v-9.72h-2.12V52h2.12v-1.53A4.54 4.54 0 01191 47a5.36 5.36 0 013.82-1.32 6.8 6.8 0 012 .25zm9.56 15.51a5.84 5.84 0 01-2.6.46q-4.12 0-4.12-4.28v-5.78h-2.05V52h2.05v-2.69l3.88-1.11V52h2.84v2.88h-2.84V60c0 1.32.52 2 1.57 2a2.74 2.74 0 001.27-.35zm-79.19 142.03l4.71 14.49h15.24l-12.33 8.95 4.71 14.49-12.33-8.95-12.33 8.95 4.71-14.49-12.33-8.95h15.24zm45.7 0l4.71 14.49h15.24l-12.33 8.95 4.71 14.49-12.33-8.95-12.33 8.95 4.71-14.49-12.33-8.95h15.24z", "fill", "#fff"], ["d", "M283.38 118.47a16.44 16.44 0 00-10.75-6.69Q256.35 109 240 106.93a720.59 720.59 0 00-180.08 0q-16.28 2.07-32.55 4.85a16.44 16.44 0 00-10.75 6.69 13.48 13.48 0 00-2.25 10.25l11 57.39a14.64 14.64 0 0016.82 11.47q10.39-1.79 20.82-3.23a634.26 634.26 0 01180.08.86q7.43 1.09 14.82 2.37a14.92 14.92 0 002.48.21 14.62 14.62 0 0014.34-11.69l10.95-57.37a13.49 13.49 0 00-2.3-10.26z", "fill", "#505050"], ["d", "M271.66 117.42a716.06 716.06 0 00-243.31 0 10.69 10.69 0 00-7 4.31 7.8 7.8 0 00-1.35 5.91L31 185a8.86 8.86 0 0010.22 6.91 640.15 640.15 0 01217.66 0 8.89 8.89 0 0010.18-6.91L280 127.65a7.77 7.77 0 00-1.33-5.92 10.69 10.69 0 00-7.01-4.31z", "fill", "#fff"], ["d", "M80.24 160l-5.88.59-2.23-5.16-8.52.85-1.16 5.49-5.84.59 6.33-24.83 6.4-.64zm-9.76-8.59l-3.37-7.8a10.25 10.25 0 01-.62-2.11h-.13a9.62 9.62 0 01-.21 2.13l-1.8 8.38zM82.55 159l-.35-5.36a10.12 10.12 0 003.29 1.63 9.93 9.93 0 003.49.39 7.75 7.75 0 001.77-.3 4.34 4.34 0 001.24-.59 2.26 2.26 0 00.71-.82 2 2 0 00.19-1 2.09 2.09 0 00-.48-1.23 4.24 4.24 0 00-1.17-1 11.83 11.83 0 00-1.7-.79c-.66-.25-1.37-.5-2.12-.76a10.57 10.57 0 01-4.42-2.52 6.27 6.27 0 01-1.64-4 6.57 6.57 0 01.54-3.27 6.41 6.41 0 011.94-2.38 9.23 9.23 0 012.92-1.48 15.74 15.74 0 013.6-.65 23.07 23.07 0 013.34 0 13.15 13.15 0 012.71.53l.33 5a8.52 8.52 0 00-1.36-.65 11.16 11.16 0 00-1.5-.43 10.27 10.27 0 00-1.52-.21 9.8 9.8 0 00-1.43 0 7.37 7.37 0 00-1.66.28A4.33 4.33 0 0088 140a2.55 2.55 0 00-.76.82 1.81 1.81 0 00-.22 1 2 2 0 00.39 1.06 3.57 3.57 0 001 .85 9.55 9.55 0 001.47.74 27 27 0 002 .73 19.7 19.7 0 012.67 1.11 9 9 0 012.07 1.4 5.86 5.86 0 011.38 1.88 7.07 7.07 0 01.61 2.53 6.9 6.9 0 01-.55 3.42 6.2 6.2 0 01-1.92 2.35 9 9 0 01-3 1.41 17.31 17.31 0 01-3.63.61 20.5 20.5 0 01-3.78-.09 11.49 11.49 0 01-3.18-.82zm19.83-1.22l-.22-5.37a10.31 10.31 0 006.73 2.18 7.45 7.45 0 001.78-.26 4.14 4.14 0 001.25-.56 2.2 2.2 0 00.73-.8 1.93 1.93 0 00.22-1 2.06 2.06 0 00-.46-1.24 4.3 4.3 0 00-1.14-1 11.1 11.1 0 00-1.69-.83q-1-.41-2.1-.81a10.41 10.41 0 01-4.31-2.7 6.21 6.21 0 01-1.55-4 6.38 6.38 0 01.62-3.26 6.51 6.51 0 012-2.31 9.33 9.33 0 013-1.41 15.4 15.4 0 013.61-.55 19.84 19.84 0 013.34.09 13 13 0 012.7.58l.2 5a8 8 0 00-1.34-.68 9.9 9.9 0 00-1.49-.47 10.12 10.12 0 00-1.51-.25 11.79 11.79 0 00-1.43 0 7.61 7.61 0 00-1.67.25 4.25 4.25 0 00-1.25.55 2.44 2.44 0 00-.78.79 1.84 1.84 0 00-.24 1 2 2 0 00.36 1.07 3.68 3.68 0 001 .87 9.32 9.32 0 001.46.78c.57.25 1.21.51 1.93.77a21.73 21.73 0 012.64 1.18 9.14 9.14 0 012 1.45 6 6 0 011.34 1.91 6.89 6.89 0 01.54 2.54 6.73 6.73 0 01-.63 3.41 6.27 6.27 0 01-2 2.3 9.09 9.09 0 01-3 1.34 17.75 17.75 0 01-3.65.51 19.49 19.49 0 01-3.78-.18 11.29 11.29 0 01-3.21-.89zm31.12.36a11.2 11.2 0 01-8.48-3.22 12.09 12.09 0 01-3.4-8.72 13 13 0 013.15-9.29 11.49 11.49 0 018.71-3.67 11 11 0 018.39 3.24 12.45 12.45 0 013.32 8.85 12.66 12.66 0 01-3.15 9.2 11.29 11.29 0 01-8.54 3.61zm-.1-20.23a5.43 5.43 0 00-4.49 2.22 10.38 10.38 0 00.18 11.32 5.37 5.37 0 004.43 2 5.44 5.44 0 004.42-2.1 8.66 8.66 0 001.55-5.64 9.37 9.37 0 00-1.69-5.8 5.19 5.19 0 00-4.4-2zm33.8 18.93a16 16 0 01-6.89 1.22q-5.55 0-8.69-3.33a11.86 11.86 0 01-3.11-8.7 12.75 12.75 0 013.64-9.34 12.48 12.48 0 019.29-3.52 17.28 17.28 0 015.94.94v5.22a10.49 10.49 0 00-5.49-1.49 7.3 7.3 0 00-5.49 2.09 7.91 7.91 0 00-2.13 5.76 7.82 7.82 0 001.92 5.58 6.93 6.93 0 005.28 2.11 11.23 11.23 0 005.82-1.5zm10.2 1.16l-5.43-.13.6-24.07 5.42.13zm27.2 1l-5.9-.26-1.47-5.43-8.56-.38-1.93 5.28-5.87-.26 9.82-23.67 6.43.29zm-8.43-9.91l-2.17-8.15a10.11 10.11 0 01-.31-2.19h-.14a8.66 8.66 0 01-.51 2.08l-3 8zm27.83-8.37l-6.84-.48-1.38 19.61-5.42-.38 1.37-19.61-6.82-.48.31-4.4 19.09 1.33zm16.69 21.43l-14.36-1.47 2.43-24 13.81 1.41-.44 4.39-8.42-.86-.54 5.33 7.83.8-.44 4.38-7.84-.8-.55 5.48 9 .91z", "fill", "#282828"], ["d", "M60 194.35v1.34c0 53.33 90 84.06 90 84.06s90-31.52 90-84.06v-.9a633.88 633.88 0 00-180-.44z", "fill", "#0064b5"], ["d", "M240 106.93V54.8a11.52 11.52 0 00-7.78-10.91l-74.85-22.63a22.81 22.81 0 00-14.72 0L67.74 43.89A11.52 11.52 0 0060 54.8v52.13a720.59 720.59 0 01180 0z", "fill", "#fff"], ["d", "M104 88.53a7.69 7.69 0 01-3.64.77 5.89 5.89 0 01-4.5-1.8 6.7 6.7 0 01-1.68-4.74 7 7 0 011.9-5.1 6.42 6.42 0 014.81-2 7.78 7.78 0 013.11.54v1.64a6.39 6.39 0 00-3.12-.78 4.78 4.78 0 00-3.68 1.51 5.7 5.7 0 00-1.41 4 5.4 5.4 0 001.32 3.83 4.49 4.49 0 003.45 1.43A6.5 6.5 0 00104 87zm13.43.55h-7V75.93h6.68v1.4H112v4.37h4.75v1.39H112v4.6h5.43zm15.72 0h-1.83l-2.2-3.68a7 7 0 00-.59-.88 3.25 3.25 0 00-.58-.59 2.38 2.38 0 00-.65-.34 2.57 2.57 0 00-.77-.1h-1.27v5.59h-1.54V75.93h3.93a5.41 5.41 0 011.59.22 3.55 3.55 0 011.27.65 3.17 3.17 0 01.84 1.1 4 4 0 01.09 2.8 3.22 3.22 0 01-.58 1 3.59 3.59 0 01-.92.76 4.53 4.53 0 01-1.21.5 2.61 2.61 0 01.57.34 2.76 2.76 0 01.47.44 5.46 5.46 0 01.43.58c.15.22.31.47.49.76zm-7.89-11.75v4.76h2.09a3 3 0 001.07-.17 2.48 2.48 0 00.85-.5 2.18 2.18 0 00.56-.8 2.54 2.54 0 00.2-1.06 2 2 0 00-.68-1.64 2.91 2.91 0 00-2-.59zm20.4 0h-3.8v11.75h-1.54V77.33h-3.79v-1.4h9.13zM153 89.08h-1.55V75.93H153zm13.93-11.75h-5.14v4.55h4.75v1.38h-4.75v5.82h-1.54V75.93h6.68zm7.79 11.75h-1.54V75.93h1.54zm14.2 0h-7V75.93h6.68v1.4h-5.13v4.37h4.75v1.39h-4.75v4.6h5.43zm6.29 0V75.93h3.63q7 0 7 6.41a6.48 6.48 0 01-1.93 4.9 7.17 7.17 0 01-5.17 1.84zm1.54-11.75v10.36h2a5.53 5.53 0 004-1.39 5.15 5.15 0 001.45-3.92c0-3.37-1.8-5-5.38-5zm-82.67-12.67h-3.94V54.08c0-1.14 0-2.41.15-3.79h-.1a18.74 18.74 0 01-.55 2.35l-4.14 12h-3.26L98 52.76a22.43 22.43 0 01-.56-2.47h-.11c.11 1.75.16 3.28.16 4.59v9.78h-3.56V47h5.83l3.62 10.48A16.29 16.29 0 01104 60h.07c.22-1 .46-1.82.7-2.55L108.39 47h5.69zM119.69 50a2.29 2.29 0 01-1.62-.59 1.89 1.89 0 01-.63-1.44 1.82 1.82 0 01.63-1.43 2.66 2.66 0 013.24 0 1.85 1.85 0 01.62 1.43 1.9 1.9 0 01-.62 1.46 2.32 2.32 0 01-1.62.57zm1.92 14.62h-3.9V52h3.9zm12.85-.42a7.71 7.71 0 01-3.81.76 6.42 6.42 0 01-4.71-1.76 6.08 6.08 0 01-1.8-4.55 6.7 6.7 0 011.93-5.07 7.09 7.09 0 015.15-1.86 6.59 6.59 0 013.24.6v3.3a4.46 4.46 0 00-2.73-.91 3.58 3.58 0 00-2.66 1A4.19 4.19 0 00129 61a3.47 3.47 0 002.58.95 5.13 5.13 0 002.85-.91zm10.78-8.65a3.32 3.32 0 00-1.64-.39 2.35 2.35 0 00-2 .93 4.06 4.06 0 00-.72 2.54v6H137V52h3.89v2.35a3.38 3.38 0 013.33-2.57 2.47 2.47 0 011 .15zM153 65a6.77 6.77 0 01-5-1.76 6.4 6.4 0 01-1.81-4.81 6.43 6.43 0 011.88-4.9 7.06 7.06 0 015.06-1.77 6.69 6.69 0 014.93 1.77 6.26 6.26 0 011.79 4.68 6.67 6.67 0 01-1.84 5A6.85 6.85 0 01153 65zm.1-10.25a2.59 2.59 0 00-2.15.95 4.23 4.23 0 00-.76 2.68q0 3.64 2.93 3.64t2.8-3.73q-.03-3.58-2.85-3.58zm8.46 9.57v-3.15a8.74 8.74 0 001.92.86 6.34 6.34 0 001.81.28 3.85 3.85 0 001.63-.28.92.92 0 00.6-.86.81.81 0 00-.27-.62 2.61 2.61 0 00-.7-.43 8.34 8.34 0 00-.93-.33 9.22 9.22 0 01-1-.34 8.75 8.75 0 01-1.33-.61 3.85 3.85 0 01-1-.75 3 3 0 01-.59-1 3.91 3.91 0 01-.21-1.35 3.45 3.45 0 01.47-1.82 3.68 3.68 0 011.23-1.25A5.43 5.43 0 01165 52a9.31 9.31 0 012.07-.23 12.4 12.4 0 011.7.13 14.36 14.36 0 011.7.38v3a5.85 5.85 0 00-1.59-.65 6.79 6.79 0 00-1.65-.21 4 4 0 00-.72.06 2.35 2.35 0 00-.6.2 1.15 1.15 0 00-.41.33.78.78 0 00-.15.47.9.9 0 00.22.59 2.17 2.17 0 00.58.42 5.33 5.33 0 00.8.32l.87.29a11.57 11.57 0 011.4.59 4.62 4.62 0 011.08.76 2.84 2.84 0 01.69 1 3.55 3.55 0 01.24 1.38 3.61 3.61 0 01-.48 1.91 3.85 3.85 0 01-1.3 1.3 6.18 6.18 0 01-1.86.73 10.43 10.43 0 01-2.19.22 11.25 11.25 0 01-3.84-.67zm17.95.68a6.77 6.77 0 01-5-1.76 6.43 6.43 0 01-1.8-4.81 6.42 6.42 0 011.87-4.9 7.09 7.09 0 015.07-1.77 6.72 6.72 0 014.93 1.77 6.29 6.29 0 011.78 4.68 6.67 6.67 0 01-1.84 5 6.85 6.85 0 01-5.01 1.79zm.1-10.25a2.57 2.57 0 00-2.14.95 4.17 4.17 0 00-.77 2.68q0 3.64 2.94 3.64t2.79-3.73q0-3.58-2.82-3.58zM196.78 49a3.85 3.85 0 00-1.44-.29c-1.25 0-1.87.67-1.87 2V52h2.88v2.88h-2.88v9.75h-3.89v-9.72h-2.12V52h2.12v-1.53A4.54 4.54 0 01191 47a5.36 5.36 0 013.82-1.32 6.47 6.47 0 012 .25zm9.56 15.51a5.83 5.83 0 01-2.6.45q-4.12 0-4.12-4.27v-5.78h-2.05V52h2.05v-2.69l3.88-1.11V52h2.84v2.88h-2.84V60c0 1.31.52 2 1.57 2a2.64 2.64 0 001.27-.36z", "fill", "#17154c"], ["d", "M150 204.95l5.14 15.8h16.62l-13.45 9.77 5.14 15.8-13.45-9.77-13.45 9.77 5.14-15.8-13.45-9.77h16.62z", "fill", "#fff"], ["d", "M53.46 145.35l-6.3.9.62 4.39 5.8-.83.46 3.27-5.8.82 1 6.95-4 .57-2.54-17.88 10.3-1.47zm19.2 4.89q.84 8.08-6.7 8.87-7.32.76-8.14-7.14l-1.08-10.37 4.06-.42 1.09 10.42c.3 2.9 1.58 4.24 3.86 4s3.19-1.75 2.9-4.55l-1.1-10.57 4-.42zM94 156.48l-4.09.3L81.64 146c-.48-.63-.81-1.11-1-1.43a27.21 27.21 0 01.31 2.91l.71 9.9-3.83.27-1.29-18 4.37-.31 7.93 10.45c.36.47.7.94 1 1.41a20.71 20.71 0 01-.28-2.46l-.71-10 3.83-.28zm4.49-.24l-.83-18 6.39-.29q9.61-.45 10 8.35a8.9 8.9 0 01-2.31 6.85 9.68 9.68 0 01-6.87 2.83zm3.38-14.92l.53 11.43 2-.09a5.44 5.44 0 004.07-1.77 6 6 0 001.31-4.39 5.46 5.46 0 00-1.68-4 5.69 5.69 0 00-4.25-1.29zM133.38 155l-4.43.11-1.39-4-6.42.16-1.17 4-4.4.11 6.11-18.21 4.82-.13zm-6.83-7l-2.09-6a7.75 7.75 0 01-.35-1.61H124a7.16 7.16 0 01-.27 1.58l-1.81 6.17zm30.08 6.88h-4v-10.81c0-1.16 0-2.45.14-3.86h-.1a18.5 18.5 0 01-.56 2.39l-4.19 12.3h-3.32l-4.35-12.14a24.14 24.14 0 01-.58-2.51h-.11q.18 2.67.18 4.68v10h-3.67L136 136.9h5.95l3.73 10.69a13.93 13.93 0 01.65 2.58h.08a25 25 0 01.71-2.61l3.65-10.69h5.8zm15.37.25l-10.83-.13.28-18.05 10.41.16-.05 3.32-6.34-.1-.07 4 5.91.09-.05 3.3-5.91-.09-.06 4.13 6.76.11zm19.58.62l-4.11-.14-7.05-11.61a15.9 15.9 0 01-.85-1.53v2.92l-.34 9.92-3.84-.13.62-18 4.37.15 6.79 11.23c.31.51.6 1 .86 1.5H188a18.07 18.07 0 010-2.48l.34-10 3.84.13zm18-13.81l-5.15-.28-.8 14.72-4.08-.22.81-14.72-5.12-.28.18-3.31 14.34.79zm16.09 15.99l-4.42-.34-1-4.1-6.4-.48-1.57 3.91-4.39-.33 7.91-17.51 4.8.36zm-6.09-7.62l-1.48-6.2a7.68 7.68 0 01-.18-1.64h-.1a7.15 7.15 0 01-.43 1.55L215 150zM239 159.3l-10.7-1.09 1.83-18 4.05.41-1.5 14.68 6.65.68zm2.06-.46l.53-4a7.78 7.78 0 004.69 2.48 5.7 5.7 0 001.35 0 3 3 0 001-.25 1.68 1.68 0 00.65-.5 1.45 1.45 0 00.28-.69 1.57 1.57 0 00-.17-1 3.54 3.54 0 00-.72-.87 8 8 0 00-1.14-.84c-.44-.28-.93-.57-1.45-.86a8 8 0 01-2.84-2.55 4.75 4.75 0 01-.62-3.19 4.65 4.65 0 012.63-3.78 7 7 0 012.37-.65 11.41 11.41 0 012.73.05 17.15 17.15 0 012.46.5 10.41 10.41 0 011.92.78l-.5 3.74a5.59 5.59 0 00-.9-.68 7.34 7.34 0 00-1-.54 7.85 7.85 0 00-1.09-.38 8.82 8.82 0 00-1-.22 5.48 5.48 0 00-1.27 0 3.12 3.12 0 00-1 .24 1.8 1.8 0 00-.67.49 1.31 1.31 0 00-.31.71 1.42 1.42 0 00.13.84 2.61 2.61 0 00.58.76 7.13 7.13 0 001 .77c.39.26.83.53 1.33.81a16.57 16.57 0 011.8 1.22 7.14 7.14 0 011.31 1.33 4.49 4.49 0 01.74 1.58 5 5 0 01.07 2 5.11 5.11 0 01-.9 2.44 4.63 4.63 0 01-1.76 1.44 6.67 6.67 0 01-2.39.6 13.57 13.57 0 01-2.76-.08 15.79 15.79 0 01-2.77-.63 8.33 8.33 0 01-2.31-1.07z", "fill", "#282828"], ["src", "https://images.credly.com/size/110x110/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png", "alt", "CSA", 1, "rounded", "float-left", 2, "width", "210px", "height", "210px"], ["src", "https://images.credly.com/size/110x110/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png", "alt", "CCP", 1, "rounded", "float-left", 2, "width", "210px", "height", "210px"], ["src", "https://images.youracclaim.com/size/340x340/images/f9b74f06-909f-4e63-aa0c-7f70f64ca889/MCSD%2BApp%2BBuilder%2B2017-01.png", "alt", "MCSD", 1, "rounded", "float-left", 2, "width", "210px", "height", "210px"], ["src", "https://images.youracclaim.com/images/421ca115-c03d-403d-893c-da7652bb8619/MCSA%2BWeb%2BApplications-01.png", "alt", "MCSA", 1, "rounded", "float-left", 2, "width", "210px", "height", "210px"], ["src", "https://images.youracclaim.com/size/340x340/images/ff9e3554-46b8-474d-8a8c-9285284e6c83/Developing_Microsoft_Azure_and_Web_Services-01.png", "alt", "exam-487", 1, "rounded", "float-left", 2, "width", "210px", "height", "210px"], ["src", "https://images.youracclaim.com/size/340x340/images/cbab3216-025d-4601-86ee-c5970b348d48/Developing_ASP.NET_MVC_Web_Applications-01.png", "alt", "exam-486", 1, "rounded", "float-left", 2, "width", "210px", "height", "210px"], ["src", "https://images.youracclaim.com/size/340x340/images/84f513e4-256d-4aa0-a29d-973bcb39d87a/Programming_in_HTML5_with_JavaScript_and_Css3-01.png", "alt", "exam-480", 1, "rounded", "float-left", 2, "width", "210px", "height", "210px"], ["src", "https://udemy-certificate.s3.amazonaws.com/image/UC-JYW33GII.jpg?v=1522701048000", "alt", "Angular 5", 1, "rounded", "float-left", 2, "width", "210px", "height", "210px"]],
      template: function CertificationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["img[_ngcontent-%COMP%] {\r\n  width: 240px;\r\n  height: 240px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2VydGlmaWNhdGlvbnMvY2VydGlmaWNhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jZXJ0aWZpY2F0aW9ucy9jZXJ0aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICB3aWR0aDogMjQwcHg7XHJcbiAgaGVpZ2h0OiAyNDBweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CertificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-certifications',
          templateUrl: './certifications.component.html',
          styleUrls: ['./certifications.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/client-base.ts":
  /*!****************************************!*\
    !*** ./src/app/clients/client-base.ts ***!
    \****************************************/

  /*! exports provided: ClientBase */

  /***/
  function srcAppClientsClientBaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientBase", function () {
      return ClientBase;
    });

    var ClientBase = function ClientBase(clientService, clientId) {
      _classCallCheck(this, ClientBase);

      this.clientService = clientService;
      this.clientId = clientId;
      this.client = this.clientService.getById(clientId);
    };
    /***/

  },

  /***/
  "./src/app/clients/client.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/clients/client.service.ts ***!
    \*******************************************/

  /*! exports provided: ClientService */

  /***/
  function srcAppClientsClientServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientService", function () {
      return ClientService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ClientService =
    /*#__PURE__*/
    function () {
      function ClientService() {
        _classCallCheck(this, ClientService);

        this.clients = [{
          id: 'wm',
          name: 'WM',
          title: 'West Monroe - Remote',
          logoUrl: '../../assets/logos/wm.jpg',
          websiteUrl: 'https://www.westmonroe.com/',
          description: "Consulting Company"
        }, {
          id: 'coned',
          name: 'Coned',
          title: 'Coned - Remote',
          logoUrl: '../../assets/logos/coned.jpg',
          websiteUrl: 'https://coned.com',
          description: "Utility Provider"
        }, {
          id: 'verys',
          name: 'Verys',
          title: 'Verys - Remote',
          logoUrl: '../../assets/logos/verys.png',
          websiteUrl: 'https://verys.com',
          description: "We provide end-to-end design and technology web and mobile services utilizing a local, onshore delivery model."
        }, {
          id: 'oc',
          name: 'Option Care Health',
          title: 'Option Care Health [Contract] - Remote',
          logoUrl: '../../assets/logos/optioncare.jpeg',
          websiteUrl: 'https://optioncarehealth.com',
          description: "As of August 7, 2019, Option Care and BioScrip have merged to become one national team, solely dedicated to infusion care. Option Care Health, Inc. is the largest independent home and alternate site infusion services provider in the United States. With over 6,000 teammates including 2,900 clinicians, we work compassionately to elevate standards of care for patients with acute and chronic conditions in all 50 states. Through our clinical leadership, expertise and national scale, Option Care Health is reimagining the infusion care experience for patients, customers and employees."
        }, {
          id: 'pwc',
          name: 'PwC',
          title: 'PwC [Contract]',
          logoUrl: '../../assets/logos/pwc.jpeg',
          websiteUrl: 'https://www.pwc.com/gx/en',
          description: "PwC helps organizations and individuals create the value they're looking for. We're a network of firms in 157 countries with more than 276,000 people.\n\n      PwC refers to the PwC network and/or one or more of its member firms, each of which is a separate legal entity. Please see www.pwc.com/structure for further details. The firms that make up the PwC network are committed to working together to provide quality service offerings for clients throughout the world. Firms in the PwC network are members in, or have other connections to, PricewaterhouseCoopers International Limited (PwCIL), an English private company limited by guarantee. PwCIL does not practise accountancy or provide services to clients."
        }, {
          id: 'vertafore',
          name: 'Vertafore',
          title: 'Vertafore [Contract]',
          logoUrl: '../../assets/logos/vertafore.jpeg',
          websiteUrl: 'https://www.vertafore.com',
          description: "Vertafore is the leader in creating modern insurance technology. Every day thousands of insurance agencies, carriers and states use a breadth of Vertafore solutions to grow their businesses, process claims for their customers and much more. Click on the Careers tab to learn more about opportunities with us!"
        }, {
          id: 'senegence',
          name: 'SeneGence International',
          title: 'SeneGence International',
          logoUrl: '../../assets/logos/senegence.png',
          websiteUrl: 'https://senegence.com',
          description: "SeneGence International allows beauty lovers from all walks of life to choose to live life in love and abundance...And then work for it!\n\n      Founded in 1999 by Joni Rogers-Kante, SeneGence International sprung onto the direct-selling scene with its premier product, LipSense. This long-lasting lip color was a big hit among busy, hard-working women on the go. Years later, our product line and global reach continues to expand, as we empower individuals to be successful business owners. We started with a team of one Distributor, and now, we are a proud family of hundreds of thousands.\n\n      We pride ourselves on being on the cutting edge of anti-aging skin care, nourishing hair care, and long-lasting color technology with our original, patented, and proprietary product formulations. Our products are formulated with no animal byproducts, in compliance with FDA regulations, and made in the United States for tight quality control.\n\n      Our vision is to offer superior products and an opportunity for individuals to be independent and successful in business regardless of age, background, or education. We are committed to making a positive contribution to beauty enthusiasts everywhere. Strong practices around being environmentally sensitive include use of naturally reoccurring ingredients, refraining from any animal testing, and omitting external product packaging to keep the company environmentally conscientious and ecologically responsible.\n\n      Our nonprofit organization, The Make Sense Foundation\xAE, regularly raises and contributes funds for women and children in need.\n\n      At SeneGence, you\u2019ll join a growing network of Distributors and have the chance to live the beautiful, abundant lifestyle you\u2019ve always wanted.\n      "
        }, {
          id: 'technossus',
          name: 'Technossus',
          title: 'Technossus',
          logoUrl: '../../assets/logos/technossus.jpeg',
          websiteUrl: 'http://www.technossus.com',
          description: "Technossus enables business acceleration and transformation for companies in the Healthcare, Financial Services, and Bio-Sciences Industries; thru a range of solutions around Outcome-based Roadmaps, Cloud Strategy & Transformation, and Technology Platform Optimization.\n\n      Founded in 2008, Technossus is a privately-held technology consulting firm headquartered in Irvine, CA. Since its inception, Technossus has become one of the fastest-growing technology consultancies in the nation, having earned Inc.\u2019s 5000\u2122 Fastest-Growing Privately-Held Companies for multiple years.\n      Technossus operates in a class of its own, with a consultative approach to do what\u2019s best for its clients\u2019 businesses. The firm is committed to a model that focuses on high-quality outcomes through a deep understanding of client issues, both seen and unseen \u2014transforming businesses to stay relevant in an increasingly digital world.\n\n      Great technology starts with great human capital. Technossus prides itself on maintaining a roster of the most dedicated & passionate professionals in the market. It has been awarded \u201CBest Places to Work\u201D multiple years. It maintains that the highest-quality team will always produce the highest-quality results.\n      Technossus professionals collaborate with clients to strategize, modernize, innovate, and drive value through all business functions, across dozens of industries.  Technossus is committed to a model that focuses on outcomes \u2014enabling businesses to remain cutting-edge, painlessly.\n\n      As a committed leader, folks at Technossus spearhead efforts to give back to the local community through affiliations with The Boys and Girls Club of America and The OC Food Bank."
        }, {
          id: 'biorad',
          name: 'Bio-Rad Laboratories',
          title: 'Bio-Rad Laboratories [Contract]',
          logoUrl: '../../assets/logos/biorad.png',
          websiteUrl: 'http://www.bio-rad.com',
          description: "Since Bio-Rad was founded over six decades ago, we have continued to provide the healthcare industry with innovative and useful products that help life science researchers accelerate the discovery process and medical diagnostic labs obtain faster, better results. Throughout our existence, we have built long-lasting customer relationships that help advance our research and development efforts in the introduction of new products and solutions. Today, Bio-Rad is a global leader, with a team of over 8,000 employees and a global network of operations that serves our life science research and clinical diagnostics customers, helping people live longer, healthier lives."
        }, {
          id: 'amareglobal',
          name: 'Amare Global',
          title: 'Amare Global [Contract]',
          logoUrl: '../../assets/logos/amareglobal.png',
          websiteUrl: 'http://www.amareglobal.com',
          description: "Amare Global creates a holistic mental wellness platform that connects a purpose-driven community of passionate people. Our vision is to lead the mental wellness revolution.\n\n      Founder and CEO of Amare Global, Hiep Tran, began his entrepreneurial journey at 23 when he decided that medical school was not for him. He started working for a payments processing company.\n\n      \u201CFor the next 5 years, I surrounded myself with the most successful people I knew, in order to grow and learn from them. Eventually that payments company I was working for was sold.  I reached an important crossroads: stay comfortable in my current position or build something for myself. In 2008, together with a partner, we invested all of our savings and co-founded a new company: Meritus Payment Solutions. We started from humble beginnings with five employees in 2008 and surged to over 100 employees by 2014 when we were acquired by Optimal Payments.  During those 6 years, I fell in love with helping people achieve their own life-changing success.  However, work always came first, family second, and personal health a distant third. I took my health for granted until the consequences became real.  Thankfully, I pulled through instead of succumbing to these challenges. I channeled the experience positively, to change my life and learn as much as I could about health and nutrition. The result was a newfound passion.\u201D\n\n      Thus, Amare Global was created. We focus on the excellence and integrity throughout our product development, people development, and the customer experience. Ultimately, we strive to create products that will inspire people to become better versions of themselves. Amare means \"To Love\"\u200B in Latin and we believe in promoting Love for one's self, as well as a powerful connection with others. By empowering people to connect through our innovative products and platform, we will grow together and reach beyond our limits."
        }, {
          id: 'dignityhealth',
          name: 'Dignity Health',
          title: 'Dignity Health [Contract]',
          logoUrl: '../../assets/logos/dignityhealth.png',
          websiteUrl: 'http://www.dignityhealth.org',
          description: "We provide quality, compassionate health care at more than 40 hospitals and care centers that are serving communities across California, Arizona and Nevada every minute of every day. And while not everyone may live near a major medical facility, Dignity Health is making health care more accessible by bringing resources closer to where people live and work.\n\n      In urban and rural communities alike, residents of all ages and backgrounds have access to primary care, preventive treatment, clinical support, chronic disease management, trauma services, and a host of medical and therapeutic specializations.\n\n      With several different ways to activate your search, let us help you to quickly and easily find an affordable, quality medical facility located close to where you need it, when you need it."
        }, {
          id: 'glidewell',
          name: 'Glidewell Dental',
          title: 'Glidewell Dental [Contract]',
          logoUrl: '../../assets/logos/glidewell.png',
          websiteUrl: 'http://www.glidewelldental.com',
          description: "Glidewell Dental's mission is to drive down restorative costs and expand patient access to affordable dentistry.  Glidewell Dental offers dental products and services in partnership with dentists, dental laboratories and manufacturers to promote and restore clinical health. One of the largest dental labs in the world and a medical device manufacturer, the company operates from four locations worldwide.\n\n      Glidewell Dental is a dental industry leader thanks to its innovative dental technology, resourceful R&D department, and dedication to providing free clinical and technical education to promote dental industry growth. As new advancements continue to redefine dental technology, Glidewell Dental remains dedicated to improved CAD/CAM processes and development. The lab has made great strides in case-to-case consistency using this technology, which allows digital impressions to be sent electronically, reducing costs and improving turnaround time."
        }, {
          id: 'tegatechnologies',
          name: 'Tega Technologies',
          title: 'Tega Technologies',
          logoUrl: '../../assets/logos/tega-technologies.jpg',
          websiteUrl: 'https://tegatechnologies.com',
          description: "In 2018, Helm Technologies acquired Tega Technologies, which was founded in 2005.  Helm Technologies has rapidly evolved by embracing advanced technology and marketing expertise to form solutions for businesses and organizations that want to communicate more effectively with their customers and members.\n\n      Helm leads the mobile marketing industry in innovation by automating on-demand marketing campaigns based on specific customer and member behaviors and interests for most industry verticals with specific emphasis on retail sales and automotive dealerships."
        }, {
          id: 'windtelecom',
          name: 'WIND telecom',
          title: 'WIND telecom',
          logoUrl: '../../assets/logos/wind-telecom.jpeg',
          websiteUrl: 'http://www.wind.com.do',
          description: "WIND TELECOM, S. A. es una empresa de telecomunicaciones en Rep\xFAblica Dominicana, cuyo enfoque es brindar servicios integrados de Voz, Televisi\xF3n Digital e Internet a nuestros clientes personales, as\xED como servicios especializados a empresas, instituciones y a otras prestadores de servicios, garantizando calidad, costo y entrega. Nuestra red de voz y datos es completamente IP; adem\xE1s est\xE1 basada primordialmente en tecnolog\xEDa WiMax, apoy\xE1ndose tambi\xE9n en accesos punto a punto por microondas y redes de fibra \xF3ptica para el transporte de grandes vol\xFAmenes de informaci\xF3n. Nuestra red de video est\xE1 basada en MMDS (Multichannel Multipoint Distribution System).\n\n      Nuestro prop\xF3sito es ser el proveedor preferido de soluciones de conectividad, contenido de informaci\xF3n y entretenimiento en los mercados personales, empresariales e institucionales, satisfaciendo las expectativas de nuestros clientes en calidad, costo y entrega y apoyando de manera directa la educaci\xF3n en Rep\xFAblica Dominicana."
        }, {
          id: 'integuer',
          name: 'Integuer',
          title: 'Integuer',
          logoUrl: '../../assets/logos/integuer_brand.png',
          websiteUrl: 'https://www.integuer.do',
          description: "Integuer S.R.L. nace en el 2010 como un emprendim\xEDento de su actual Presidente el Ing. Mart\xEDn Jos\xE9 Santos Casado en su retorno al pa\xEDs despu\xE9s de un per\xEDodo profesional y vital de 18 a\xF1os por Europa, siendo el posicionamiento de la compa\xF1\xEDa \"Software y soluciones para la gesti\xF3n de empresas\". Integuer ha desarrollado diferentes proyectos para destacadas empresas tanto en el sector p\xFAblico como en el sector privado."
        }, {
          id: 'hbrgroup',
          name: 'HBR Group',
          title: 'HBR Group',
          logoUrl: '../../assets/logos/logo-site.png',
          websiteUrl: 'http://hbrgroup.com.do',
          description: "HBR Group es una empresa de profesionales dominicanos en continua formaci\xF3n, especializados en servicios de consultor\xEDa y desarrollos verticales o personalizados para la banca y empresas del sector financiero de \xE1mbito nacional e internacional.\n\n      Nuestra principal fortaleza es un equipo humano altamente especializado con una gran diversidad y profundidad de conocimientos en el desarrollo de productos bancarios, el cual se adapta al estilo de trabajo de sus diferentes clientes. En adici\xF3n, un equipo de direcci\xF3n con una vasta experiencia en la banca, cuya iniciativa empresarial ha sido dirigida exclusivamente al sector financiero-bancario.\n\n      Nuestra propuesta a las empresas de dicho entorno le aporta un importante matiz: el uso de nuevas tecnolog\xEDas y un completo an\xE1lisis previo, as\xED como nuestro conocimiento de los retos que enfrenta la banca de hoy en d\xEDa.\n\n      Nuestra empresa posee fortalezas en Consultor\xEDas, Gesti\xF3n de Proyectos y Desarrollos de Aplicaciones Verticales. Esto se debe a que contamos con el personal adecuado e identificado con las necesidades de nuestros clientes.\n\n      Somos una empresa de servicios, conocedores de las necesidades esenciales de nuestros clientes ya que hemos laborado en diversas instituciones bancarias. Esto nos hace poseedores de experiencia laboral adquirida a trav\xE9s del tiempo por la ejecuci\xF3n de grandes proyectos relacionados al sector que orientamos nuestros productos y servicios."
        }, {
          id: 'hidden',
          name: 'HBR Group',
          title: 'HBR Group',
          logoUrl: '../../assets/logos/logo-site.png',
          websiteUrl: 'http://hbrgroup.com.do',
          description: "HBR Group es una empresa de profesionales dominicanos en continua formaci\xF3n, especializados en servicios de consultor\xEDa y desarrollos verticales o personalizados para la banca y empresas del sector financiero de \xE1mbito nacional e internacional.\n\n      Nuestra principal fortaleza es un equipo humano altamente especializado con una gran diversidad y profundidad de conocimientos en el desarrollo de productos bancarios, el cual se adapta al estilo de trabajo de sus diferentes clientes. En adici\xF3n, un equipo de direcci\xF3n con una vasta experiencia en la banca, cuya iniciativa empresarial ha sido dirigida exclusivamente al sector financiero-bancario.\n\n      Nuestra propuesta a las empresas de dicho entorno le aporta un importante matiz: el uso de nuevas tecnolog\xEDas y un completo an\xE1lisis previo, as\xED como nuestro conocimiento de los retos que enfrenta la banca de hoy en d\xEDa.\n\n      Nuestra empresa posee fortalezas en Consultor\xEDas, Gesti\xF3n de Proyectos y Desarrollos de Aplicaciones Verticales. Esto se debe a que contamos con el personal adecuado e identificado con las necesidades de nuestros clientes.\n\n      Somos una empresa de servicios, conocedores de las necesidades esenciales de nuestros clientes ya que hemos laborado en diversas instituciones bancarias. Esto nos hace poseedores de experiencia laboral adquirida a trav\xE9s del tiempo por la ejecuci\xF3n de grandes proyectos relacionados al sector que orientamos nuestros productos y servicios."
        }, {
          id: 'hidden',
          name: 'HBR Group',
          title: 'HBR Group',
          logoUrl: '../../assets/logos/logo-site.png',
          websiteUrl: 'http://hbrgroup.com.do',
          description: "HBR Group es una empresa de profesionales dominicanos en continua formaci\xF3n, especializados en servicios de consultor\xEDa y desarrollos verticales o personalizados para la banca y empresas del sector financiero de \xE1mbito nacional e internacional.\n\n      Nuestra principal fortaleza es un equipo humano altamente especializado con una gran diversidad y profundidad de conocimientos en el desarrollo de productos bancarios, el cual se adapta al estilo de trabajo de sus diferentes clientes. En adici\xF3n, un equipo de direcci\xF3n con una vasta experiencia en la banca, cuya iniciativa empresarial ha sido dirigida exclusivamente al sector financiero-bancario.\n\n      Nuestra propuesta a las empresas de dicho entorno le aporta un importante matiz: el uso de nuevas tecnolog\xEDas y un completo an\xE1lisis previo, as\xED como nuestro conocimiento de los retos que enfrenta la banca de hoy en d\xEDa.\n\n      Nuestra empresa posee fortalezas en Consultor\xEDas, Gesti\xF3n de Proyectos y Desarrollos de Aplicaciones Verticales. Esto se debe a que contamos con el personal adecuado e identificado con las necesidades de nuestros clientes.\n\n      Somos una empresa de servicios, conocedores de las necesidades esenciales de nuestros clientes ya que hemos laborado en diversas instituciones bancarias. Esto nos hace poseedores de experiencia laboral adquirida a trav\xE9s del tiempo por la ejecuci\xF3n de grandes proyectos relacionados al sector que orientamos nuestros productos y servicios."
        }];
      }

      _createClass(ClientService, [{
        key: "getAll",
        value: function getAll() {
          return this.clients;
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.clients.find(function (client) {
            return client.id === id;
          });
        }
      }, {
        key: "getByGroup",
        value: function getByGroup(groupOf) {
          var _this = this;

          var groupClients = [];
          var groups = [];
          var count = 0;
          this.clients.forEach(function (client, index) {
            count = index + 1;
            groups.push(client);

            if (count % 3 === 0) {
              groupClients.push({
                clients: groups
              });
              groups = [];
            }

            if (count === _this.clients.length && groups.length) {
              groupClients.push({
                clients: groups
              });
            }
          });
          return groupClients;
        }
      }]);

      return ClientService;
    }();

    ClientService.ɵfac = function ClientService_Factory(t) {
      return new (t || ClientService)();
    };

    ClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ClientService,
      factory: ClientService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientService, [{
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
  "./src/app/clients/clients-amareglobal/clients-amareglobal.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/clients/clients-amareglobal/clients-amareglobal.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ClientsAmareglobalComponent */

  /***/
  function srcAppClientsClientsAmareglobalClientsAmareglobalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsAmareglobalComponent", function () {
      return ClientsAmareglobalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _client_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../client-base */
    "./src/app/clients/client-base.ts");
    /* harmony import */


    var _clients_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../clients.constants */
    "./src/app/clients/clients.constants.ts");
    /* harmony import */


    var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../client.service */
    "./src/app/clients/client.service.ts");

    var ClientsAmareglobalComponent =
    /*#__PURE__*/
    function (_client_base__WEBPACK) {
      _inherits(ClientsAmareglobalComponent, _client_base__WEBPACK);

      var _super = _createSuper(ClientsAmareglobalComponent);

      function ClientsAmareglobalComponent(clientService) {
        var _this2;

        _classCallCheck(this, ClientsAmareglobalComponent);

        _this2 = _super.call(this, clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_2__["AMARE_GLOBAL"]);
        _this2.clientService = clientService;
        return _this2;
      }

      return ClientsAmareglobalComponent;
    }(_client_base__WEBPACK_IMPORTED_MODULE_1__["ClientBase"]);

    ClientsAmareglobalComponent.ɵfac = function ClientsAmareglobalComponent_Factory(t) {
      return new (t || ClientsAmareglobalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]));
    };

    ClientsAmareglobalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientsAmareglobalComponent,
      selectors: [["app-clients-amareglobal"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 60,
      vars: 5,
      consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", "rounded-circle", 3, "src", "alt"], ["href", "https://www.amare.com/", "target", "_blank"]],
      template: function ClientsAmareglobalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Amare Global creates a holistic mental wellness platform that connects a purpose-driven community of passionate people. Our vision is to lead the mental wellness revolution. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Founder and CEO of Amare Global, Hiep Tran, began his entrepreneurial journey at 23 when he decided that medical school was not for him. He started working for a payments processing company. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Project#1:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\t\xA0Amare Global Website");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\xA0Company Website.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\xA0Front-End Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Responsibilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Make the site mobile friendly.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Technologies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " CSS, HTML, Bootstrap ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Project#2:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\t\xA0BackOffice Application");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\xA0Communicate with third-party vendors to handle payments & orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\xA0 FullStack Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Responsibilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Third-party API integration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Refactoring");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Technologies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " CSS, HTML, C#, ASP.NET MVC, ajax, jquery ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy1hbWFyZWdsb2JhbC9jbGllbnRzLWFtYXJlZ2xvYmFsLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsAmareglobalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clients-amareglobal',
          templateUrl: './clients-amareglobal.component.html',
          styleUrls: ['./clients-amareglobal.component.css']
        }]
      }], function () {
        return [{
          type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/clients-biorad/clients-biorad.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/clients/clients-biorad/clients-biorad.component.ts ***!
    \********************************************************************/

  /*! exports provided: ClientsBioradComponent */

  /***/
  function srcAppClientsClientsBioradClientsBioradComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsBioradComponent", function () {
      return ClientsBioradComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _client_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../client-base */
    "./src/app/clients/client-base.ts");
    /* harmony import */


    var _clients_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../clients.constants */
    "./src/app/clients/clients.constants.ts");
    /* harmony import */


    var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../client.service */
    "./src/app/clients/client.service.ts");

    var ClientsBioradComponent =
    /*#__PURE__*/
    function (_client_base__WEBPACK2) {
      _inherits(ClientsBioradComponent, _client_base__WEBPACK2);

      var _super2 = _createSuper(ClientsBioradComponent);

      function ClientsBioradComponent(clientService) {
        var _this3;

        _classCallCheck(this, ClientsBioradComponent);

        _this3 = _super2.call(this, clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_2__["BIORAD"]);
        _this3.clientService = clientService;
        return _this3;
      }

      return ClientsBioradComponent;
    }(_client_base__WEBPACK_IMPORTED_MODULE_1__["ClientBase"]);

    ClientsBioradComponent.ɵfac = function ClientsBioradComponent_Factory(t) {
      return new (t || ClientsBioradComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]));
    };

    ClientsBioradComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientsBioradComponent,
      selectors: [["app-clients-biorad"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 33,
      vars: 5,
      consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", "rounded-circle", 3, "src", "alt"]],
      template: function ClientsBioradComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Bio-Rad was founded over six decades ago, we have continued to provide the healthcare industry with innovative and useful products that help life science researchers accelerate the discovery process and medical diagnostic labs obtain faster, better results. Throughout our existence, we have built long-lasting customer relationships that help advance our research and development efforts in the introduction of new products and solutions. Today, Bio-Rad is a global leader, with a team of over 8,000 employees and a global network of operations that serves our life science research and clinical diagnostics customers, helping people live longer, healthier lives. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Project:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Unity Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " This is a migration & orchestration of processes and systems to the cloud and modern technology");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Lead Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Responsibilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Lead my team to the successful completion of modules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Design & Implementation of technical modules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Technologies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " C#, Entity Framework, SQL Server, Visual Studios, Visual Studio Code, Azure, Angular, Typescript, D3.js ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy1iaW9yYWQvY2xpZW50cy1iaW9yYWQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsBioradComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clients-biorad',
          templateUrl: './clients-biorad.component.html',
          styleUrls: ['./clients-biorad.component.css']
        }]
      }], function () {
        return [{
          type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/clients-dignityhealth/clients-dignityhealth.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/clients/clients-dignityhealth/clients-dignityhealth.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ClientsDignityhealthComponent */

  /***/
  function srcAppClientsClientsDignityhealthClientsDignityhealthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsDignityhealthComponent", function () {
      return ClientsDignityhealthComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _client_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../client-base */
    "./src/app/clients/client-base.ts");
    /* harmony import */


    var _clients_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../clients.constants */
    "./src/app/clients/clients.constants.ts");
    /* harmony import */


    var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../client.service */
    "./src/app/clients/client.service.ts");

    var ClientsDignityhealthComponent =
    /*#__PURE__*/
    function (_client_base__WEBPACK3) {
      _inherits(ClientsDignityhealthComponent, _client_base__WEBPACK3);

      var _super3 = _createSuper(ClientsDignityhealthComponent);

      function ClientsDignityhealthComponent(clientService) {
        var _this4;

        _classCallCheck(this, ClientsDignityhealthComponent);

        _this4 = _super3.call(this, clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_2__["DIGNITY_HEALTH"]);
        _this4.clientService = clientService;
        return _this4;
      }

      return ClientsDignityhealthComponent;
    }(_client_base__WEBPACK_IMPORTED_MODULE_1__["ClientBase"]);

    ClientsDignityhealthComponent.ɵfac = function ClientsDignityhealthComponent_Factory(t) {
      return new (t || ClientsDignityhealthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]));
    };

    ClientsDignityhealthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientsDignityhealthComponent,
      selectors: [["app-clients-dignityhealth"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 31,
      vars: 5,
      consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", "rounded-circle", 3, "src", "alt"]],
      template: function ClientsDignityhealthComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " We provide quality, compassionate health care at more than 40 hospitals and care centers that are serving communities across California, Arizona and Nevada every minute of every day. And while not everyone may live near a major medical facility, Dignity Health is making health care more accessible by bringing resources closer to where people live and work. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Project:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Dignity CMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Dignity Health Content Management System..");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Responsabilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Create content based on specification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Technologies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " CSS, HTML ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy1kaWduaXR5aGVhbHRoL2NsaWVudHMtZGlnbml0eWhlYWx0aC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsDignityhealthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clients-dignityhealth',
          templateUrl: './clients-dignityhealth.component.html',
          styleUrls: ['./clients-dignityhealth.component.css']
        }]
      }], function () {
        return [{
          type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/clients-glidewell/clients-glidewell.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/clients/clients-glidewell/clients-glidewell.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ClientsGlidewellComponent */

  /***/
  function srcAppClientsClientsGlidewellClientsGlidewellComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsGlidewellComponent", function () {
      return ClientsGlidewellComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _clients_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../clients.constants */
    "./src/app/clients/clients.constants.ts");
    /* harmony import */


    var _client_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../client-base */
    "./src/app/clients/client-base.ts");
    /* harmony import */


    var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../client.service */
    "./src/app/clients/client.service.ts");

    var ClientsGlidewellComponent =
    /*#__PURE__*/
    function (_client_base__WEBPACK4) {
      _inherits(ClientsGlidewellComponent, _client_base__WEBPACK4);

      var _super4 = _createSuper(ClientsGlidewellComponent);

      function ClientsGlidewellComponent(clientService) {
        var _this5;

        _classCallCheck(this, ClientsGlidewellComponent);

        _this5 = _super4.call(this, clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_1__["GLIDEWELL"]);
        _this5.clientService = clientService;
        return _this5;
      }

      return ClientsGlidewellComponent;
    }(_client_base__WEBPACK_IMPORTED_MODULE_2__["ClientBase"]);

    ClientsGlidewellComponent.ɵfac = function ClientsGlidewellComponent_Factory(t) {
      return new (t || ClientsGlidewellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]));
    };

    ClientsGlidewellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientsGlidewellComponent,
      selectors: [["app-clients-glidewell"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 207,
      vars: 5,
      consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", "rounded-circle", 3, "src", "alt"], ["href", "http://cloudpoint.com/"]],
      template: function ClientsGlidewellComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Glidewell Dental is a dental industry leader thanks to its innovative dental technology, resourceful R&D department, and dedication to providing free clinical and technical education to promote dental industry growth. As new advancements continue to redefine dental technology, Glidewell Dental remains dedicated to improved CAD/CAM processes and development. The lab has made great strides in case-to-case consistency using this technology, which allows digital impressions to be sent electronically, reducing costs and improving turnaround time. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Project #1:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Data Migration Tool");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " This tool read and send data (millions of records) in parallel to a webservice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Backend Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Responsibilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Build Data Migration Tool based on business requirements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Technologies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " C#, Entity Framework, SQL Server, Visual Studios, WSDL file ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Project #2:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " CloudPoint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " AngularJs Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Responsibilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Build CloudPoint Front-End Application based on business requirements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Technologies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " AngularJS, AWS, WebStorm, Karma, Jasmine ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Project #3:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " GOV2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Legacy System that support many business process in the company ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Full Stack Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Responsibilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Requirement collection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Build & Design an Audit Module for Audit Department ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Build & Design an Invoice Module for Shipping Department ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Demos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Technologies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " C#, ASP.NET WEBFORMS, Visual Studious, TFS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Project #4:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Product Mapper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Description: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Allow a user to map a set of codes to a product ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Full Stack Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Responsibilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Requirement collection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Build microservice ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Build UI ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Demos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Technologies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " C#, Angular 2, Visual Studio Code, Git, Docker, Microservice, Jenkins ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Project #5:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " Audit Application");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " This tool helps the Audit Department to audit shipments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Full Stack Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Responsibilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Requirements collection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Build microservices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Build User Interface");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Demos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Technologies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " C#, Angular 2, Visual Studio Code, Git, Docker, Microservice, Jenkins ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Project #6:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Invoice Application");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " This tool helps the Shipping Department to validate invoices so that the company does not get overcharged. This process was reduced from two days to a couple hours at most.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Full Stack Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Responsibilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Requirement collection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Build microservices ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Build User Interface ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Demos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Technologies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " C#, Angular 2, Visual Studio Code, Git, Docker, Microservice, Jenkins ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Project #7:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " Unpacker System");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "This system helps to speedup the unpacker process reducing manual steps.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " Full Stack Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Responsibilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Requirement collection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Work with UX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Build & Design the Unpacker System");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Demos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Test in their environment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Technologies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " C#, Angular 2, Visual Studio Code, Git, Docker, Microservice, WPF ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy1nbGlkZXdlbGwvY2xpZW50cy1nbGlkZXdlbGwuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsGlidewellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clients-glidewell',
          templateUrl: './clients-glidewell.component.html',
          styleUrls: ['./clients-glidewell.component.css']
        }]
      }], function () {
        return [{
          type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/clients-hbrgroup/clients-hbrgroup.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/clients/clients-hbrgroup/clients-hbrgroup.component.ts ***!
    \************************************************************************/

  /*! exports provided: ClientsHbrgroupComponent */

  /***/
  function srcAppClientsClientsHbrgroupClientsHbrgroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsHbrgroupComponent", function () {
      return ClientsHbrgroupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _clients_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../clients.constants */
    "./src/app/clients/clients.constants.ts");
    /* harmony import */


    var _client_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../client-base */
    "./src/app/clients/client-base.ts");
    /* harmony import */


    var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../client.service */
    "./src/app/clients/client.service.ts");

    var ClientsHbrgroupComponent =
    /*#__PURE__*/
    function (_client_base__WEBPACK5) {
      _inherits(ClientsHbrgroupComponent, _client_base__WEBPACK5);

      var _super5 = _createSuper(ClientsHbrgroupComponent);

      function ClientsHbrgroupComponent(clientService) {
        var _this6;

        _classCallCheck(this, ClientsHbrgroupComponent);

        _this6 = _super5.call(this, clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_1__["HBR_GROUP"]);
        _this6.clientService = clientService;
        return _this6;
      }

      return ClientsHbrgroupComponent;
    }(_client_base__WEBPACK_IMPORTED_MODULE_2__["ClientBase"]);

    ClientsHbrgroupComponent.ɵfac = function ClientsHbrgroupComponent_Factory(t) {
      return new (t || ClientsHbrgroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]));
    };

    ClientsHbrgroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientsHbrgroupComponent,
      selectors: [["app-clients-hbrgroup"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 43,
      vars: 5,
      consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", "rounded-circle", 3, "src", "alt"]],
      template: function ClientsHbrgroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " HBR Group es una empresa de profesionales dominicanos en continua formaci\xF3n, especializados en servicios de consultor\xEDa y desarrollos verticales o personalizados para la banca y empresas del sector financiero de \xE1mbito nacional e internacional. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Nuestra principal fortaleza es un equipo humano altamente especializado con una gran diversidad y profundidad de conocimientos en el desarrollo de productos bancarios, el cual se adapta al estilo de trabajo de sus diferentes clientes. En adici\xF3n, un equipo de direcci\xF3n con una vasta experiencia en la banca, cuya iniciativa empresarial ha sido dirigida exclusivamente al sector financiero-bancario.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Nuestra propuesta a las empresas de dicho entorno le aporta un importante matiz: el uso de nuevas tecnolog\xEDas y un completo an\xE1lisis previo, as\xED como nuestro conocimiento de los retos que enfrenta la banca de hoy en d\xEDa.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Nuestra empresa posee fortalezas en Consultor\xEDas, Gesti\xF3n de Proyectos y Desarrollos de Aplicaciones Verticales. Esto se debe a que contamos con el personal adecuado e identificado con las necesidades de nuestros clientes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Somos una empresa de servicios, conocedores de las necesidades esenciales de nuestros clientes ya que hemos laborado en diversas instituciones bancarias. Esto nos hace poseedores de experiencia laboral adquirida a trav\xE9s del tiempo por la ejecuci\xF3n de grandes proyectos relacionados al sector que orientamos nuestros productos y servicios. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Project:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\t\xA0Applications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\xA0This is a collection of several applications I was maintaining at the time ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\xA0FullStack Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Responsibilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Maintain several applications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Technologies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " CSS, HTML, Javascript, ASP.NET WebForm ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy1oYnJncm91cC9jbGllbnRzLWhicmdyb3VwLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsHbrgroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clients-hbrgroup',
          templateUrl: './clients-hbrgroup.component.html',
          styleUrls: ['./clients-hbrgroup.component.css']
        }]
      }], function () {
        return [{
          type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/clients-integuer/clients-integuer.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/clients/clients-integuer/clients-integuer.component.ts ***!
    \************************************************************************/

  /*! exports provided: ClientsInteguerComponent */

  /***/
  function srcAppClientsClientsInteguerClientsInteguerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsInteguerComponent", function () {
      return ClientsInteguerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _client_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../client-base */
    "./src/app/clients/client-base.ts");
    /* harmony import */


    var _clients_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../clients.constants */
    "./src/app/clients/clients.constants.ts");
    /* harmony import */


    var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../client.service */
    "./src/app/clients/client.service.ts");

    var ClientsInteguerComponent =
    /*#__PURE__*/
    function (_client_base__WEBPACK6) {
      _inherits(ClientsInteguerComponent, _client_base__WEBPACK6);

      var _super6 = _createSuper(ClientsInteguerComponent);

      function ClientsInteguerComponent(clientService) {
        var _this7;

        _classCallCheck(this, ClientsInteguerComponent);

        _this7 = _super6.call(this, clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_2__["INTEGUER"]);
        _this7.clientService = clientService;
        return _this7;
      }

      return ClientsInteguerComponent;
    }(_client_base__WEBPACK_IMPORTED_MODULE_1__["ClientBase"]);

    ClientsInteguerComponent.ɵfac = function ClientsInteguerComponent_Factory(t) {
      return new (t || ClientsInteguerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]));
    };

    ClientsInteguerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientsInteguerComponent,
      selectors: [["app-clients-integuer"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 37,
      vars: 5,
      consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", "rounded-circle", 3, "src", "alt"]],
      template: function ClientsInteguerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Integuer S.R.L. nace en el 2010 como un emprendim\xEDento de su actual Presidente el Ing. Mart\xEDn Jos\xE9 Santos Casado en su retorno al pa\xEDs despu\xE9s de un per\xEDodo profesional y vital de 18 a\xF1os por Europa, siendo el posicionamiento de la compa\xF1\xEDa \"Software y soluciones para la gesti\xF3n de empresas\". Integuer ha desarrollado diferentes proyectos para destacadas empresas tanto en el sector p\xFAblico como en el sector privado. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Project:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\t\xA0E PLAN RD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\xA0Application that helps Government institutions to forecast the budget needed for the next four years.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\xA0FullStack Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Responsibilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Understand requirements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Backend implementation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Frontend implementation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Demos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Technologies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " ASP.NET MVC, Linq to Entity, C#, HTML, C#, Telerik, CSS, Visual Studious ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy1pbnRlZ3Vlci9jbGllbnRzLWludGVndWVyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsInteguerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clients-integuer',
          templateUrl: './clients-integuer.component.html',
          styleUrls: ['./clients-integuer.component.css']
        }]
      }], function () {
        return [{
          type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/clients-list/clients-list.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/clients/clients-list/clients-list.component.ts ***!
    \****************************************************************/

  /*! exports provided: ClientsListComponent */

  /***/
  function srcAppClientsClientsListClientsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsListComponent", function () {
      return ClientsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_clients_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/clients/client.service */
    "./src/app/clients/client.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shorten_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shorten.pipe */
    "./src/app/shared/shorten.pipe.ts");

    var _c0 = function _c0(a0) {
      return {
        "invisible": a0
      };
    };

    var _c1 = function _c1(a0) {
      return {
        "hbrgroup": a0
      };
    };

    function ClientsListComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "shorten");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var client_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", client_r3.id)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, client_r3.id === "hidden"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", client_r3.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, client_r3.id === "hbrgroup"))("src", client_r3.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", client_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", client_r3.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](client_r3.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 11, client_r3.description, 110), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", client_r3.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("My experience with ", client_r3.name, "");
      }
    }

    function ClientsListComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientsListComponent_div_0_div_1_Template, 15, 18, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var group_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r1.clients);
      }
    }

    var ClientsListComponent =
    /*#__PURE__*/
    function () {
      function ClientsListComponent(clientService) {
        _classCallCheck(this, ClientsListComponent);

        this.clientService = clientService;
        this.groupClients = [];
      }

      _createClass(ClientsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.groupClients = this.clientService.getByGroup(3);
        }
      }]);

      return ClientsListComponent;
    }();

    ClientsListComponent.ɵfac = function ClientsListComponent_Factory(t) {
      return new (t || ClientsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_clients_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"]));
    };

    ClientsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientsListComponent,
      selectors: [["app-clients-list"]],
      decls: 1,
      vars: 1,
      consts: [["class", "card-deck", 4, "ngFor", "ngForOf"], [1, "card-deck"], ["class", "card", 3, "id", "ngClass", 4, "ngFor", "ngForOf"], [1, "card", 3, "id", "ngClass"], [1, "text-center"], ["target", "_blank", 3, "href"], [1, "card-img-top", "rounded-circle", 3, "ngClass", "src", "alt"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "text-muted"], [3, "routerLink"]],
      template: function ClientsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ClientsListComponent_div_0_Template, 2, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groupClients);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      pipes: [_shared_shorten_pipe__WEBPACK_IMPORTED_MODULE_4__["ShortenPipe"]],
      styles: [".card-img-top[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  height: 200px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.hbrgroup[_ngcontent-%COMP%] {\r\n  background-color: aqua;\r\n}\r\n\r\n.card-deck[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50cy9jbGllbnRzLWxpc3QvY2xpZW50cy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2NsaWVudHMtbGlzdC9jbGllbnRzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2FyZC1pbWctdG9wIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uaGJyZ3JvdXAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbn1cclxuXHJcbi5jYXJkLWRlY2sge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clients-list',
          templateUrl: './clients-list.component.html',
          styleUrls: ['./clients-list.component.css']
        }]
      }], function () {
        return [{
          type: src_app_clients_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/clients-optioncare/clients-optioncare.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/clients/clients-optioncare/clients-optioncare.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ClientsOptioncareComponent */

  /***/
  function srcAppClientsClientsOptioncareClientsOptioncareComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsOptioncareComponent", function () {
      return ClientsOptioncareComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _clients_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../clients.constants */
    "./src/app/clients/clients.constants.ts");
    /* harmony import */


    var _client_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../client-base */
    "./src/app/clients/client-base.ts");
    /* harmony import */


    var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../client.service */
    "./src/app/clients/client.service.ts");

    var ClientsOptioncareComponent =
    /*#__PURE__*/
    function (_client_base__WEBPACK7) {
      _inherits(ClientsOptioncareComponent, _client_base__WEBPACK7);

      var _super7 = _createSuper(ClientsOptioncareComponent);

      function ClientsOptioncareComponent(clientService) {
        var _this8;

        _classCallCheck(this, ClientsOptioncareComponent);

        _this8 = _super7.call(this, clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_1__["OPTION_CARE"]);
        _this8.clientService = clientService;
        return _this8;
      }

      return ClientsOptioncareComponent;
    }(_client_base__WEBPACK_IMPORTED_MODULE_2__["ClientBase"]);

    ClientsOptioncareComponent.ɵfac = function ClientsOptioncareComponent_Factory(t) {
      return new (t || ClientsOptioncareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]));
    };

    ClientsOptioncareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientsOptioncareComponent,
      selectors: [["app-clients-optioncare"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 48,
      vars: 5,
      consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", 3, "src", "alt"], [1, "text-info"]],
      template: function ClientsOptioncareComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Option Care Health, Inc. is the largest independent home and alternate site infusion services provider in the United States. With over 6,000 teammates including 2,900 clinicians, we work compassionately to elevate standards of care for patients with acute and chronic conditions in all 50 states. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Besides my project responsibilities I also oversee the OptionCare Account.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Project:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Reference Point ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " a set of applications to manage patients and referrals.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Angular Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Responsibilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Diagnose & fix technical issues.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Deployments (Dev, QA, UAT & Production).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Assist & Collaborate with fellow Teammates.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Progressively improve the applications by adding ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "unit tests");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " & ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "refactoring");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " as main techniques");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Technologies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Angular 7, CSS, HTML, Typescript, Karma & Jasmine & Visual Studio Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy1vcHRpb25jYXJlL2NsaWVudHMtb3B0aW9uY2FyZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsOptioncareComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clients-optioncare',
          templateUrl: './clients-optioncare.component.html',
          styleUrls: ['./clients-optioncare.component.css']
        }]
      }], function () {
        return [{
          type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/clients-pwc/clients-pwc.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/clients/clients-pwc/clients-pwc.component.ts ***!
    \**************************************************************/

  /*! exports provided: ClientsPwcComponent */

  /***/
  function srcAppClientsClientsPwcClientsPwcComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsPwcComponent", function () {
      return ClientsPwcComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _clients_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../clients.constants */
    "./src/app/clients/clients.constants.ts");
    /* harmony import */


    var _client_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../client-base */
    "./src/app/clients/client-base.ts");
    /* harmony import */


    var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../client.service */
    "./src/app/clients/client.service.ts");

    var ClientsPwcComponent =
    /*#__PURE__*/
    function (_client_base__WEBPACK8) {
      _inherits(ClientsPwcComponent, _client_base__WEBPACK8);

      var _super8 = _createSuper(ClientsPwcComponent);

      function ClientsPwcComponent(clientService) {
        var _this9;

        _classCallCheck(this, ClientsPwcComponent);

        _this9 = _super8.call(this, clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_1__["PWC"]);
        _this9.clientService = clientService;
        return _this9;
      }

      return ClientsPwcComponent;
    }(_client_base__WEBPACK_IMPORTED_MODULE_2__["ClientBase"]);

    ClientsPwcComponent.ɵfac = function ClientsPwcComponent_Factory(t) {
      return new (t || ClientsPwcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]));
    };

    ClientsPwcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientsPwcComponent,
      selectors: [["app-clients-pwc"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 35,
      vars: 5,
      consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", 3, "src", "alt"]],
      template: function ClientsPwcComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " PwC helps organizations and individuals create the value they're looking for. We're a network of firms in 157 countries with more than 276,000 people. PwC refers to the PwC network and/or one or more of its member firms, each of which is a separate legal entity. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Project:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Heroku Connector ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " a bridge between AWS microservices & Salesforce.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " DevOps Engineer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Responsibilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Assist in the formulation of the solution.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Build front-end application.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Build microservices that support the application.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Technologies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Heroku Connect, Heroku Postgres, Salesforce, dotNet Core Web API & C#. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy1wd2MvY2xpZW50cy1wd2MuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsPwcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clients-pwc',
          templateUrl: './clients-pwc.component.html',
          styleUrls: ['./clients-pwc.component.css']
        }]
      }], function () {
        return [{
          type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/clients-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/clients/clients-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ClientsRoutingModule */

  /***/
  function srcAppClientsClientsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsRoutingModule", function () {
      return ClientsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _clients_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./clients.component */
    "./src/app/clients/clients.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _clients_list_clients_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./clients-list/clients-list.component */
    "./src/app/clients/clients-list/clients-list.component.ts");
    /* harmony import */


    var _clients_verys_clients_verys_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./clients-verys/clients-verys.component */
    "./src/app/clients/clients-verys/clients-verys.component.ts");
    /* harmony import */


    var _clients_vertafore_clients_vertafore_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./clients-vertafore/clients-vertafore.component */
    "./src/app/clients/clients-vertafore/clients-vertafore.component.ts");
    /* harmony import */


    var _clients_pwc_clients_pwc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./clients-pwc/clients-pwc.component */
    "./src/app/clients/clients-pwc/clients-pwc.component.ts");
    /* harmony import */


    var _clients_senegence_clients_senegence_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./clients-senegence/clients-senegence.component */
    "./src/app/clients/clients-senegence/clients-senegence.component.ts");
    /* harmony import */


    var _clients_optioncare_clients_optioncare_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./clients-optioncare/clients-optioncare.component */
    "./src/app/clients/clients-optioncare/clients-optioncare.component.ts");
    /* harmony import */


    var _clients_technossus_clients_technossus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./clients-technossus/clients-technossus.component */
    "./src/app/clients/clients-technossus/clients-technossus.component.ts");
    /* harmony import */


    var _clients_glidewell_clients_glidewell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./clients-glidewell/clients-glidewell.component */
    "./src/app/clients/clients-glidewell/clients-glidewell.component.ts");
    /* harmony import */


    var _clients_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./clients.constants */
    "./src/app/clients/clients.constants.ts");
    /* harmony import */


    var _clients_biorad_clients_biorad_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./clients-biorad/clients-biorad.component */
    "./src/app/clients/clients-biorad/clients-biorad.component.ts");
    /* harmony import */


    var _clients_dignityhealth_clients_dignityhealth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./clients-dignityhealth/clients-dignityhealth.component */
    "./src/app/clients/clients-dignityhealth/clients-dignityhealth.component.ts");
    /* harmony import */


    var _clients_amareglobal_clients_amareglobal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./clients-amareglobal/clients-amareglobal.component */
    "./src/app/clients/clients-amareglobal/clients-amareglobal.component.ts");
    /* harmony import */


    var _clients_tegatechnologies_clients_tegatechnologies_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./clients-tegatechnologies/clients-tegatechnologies.component */
    "./src/app/clients/clients-tegatechnologies/clients-tegatechnologies.component.ts");
    /* harmony import */


    var _clients_windtelecom_clients_windtelecom_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./clients-windtelecom/clients-windtelecom.component */
    "./src/app/clients/clients-windtelecom/clients-windtelecom.component.ts");
    /* harmony import */


    var _clients_integuer_clients_integuer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./clients-integuer/clients-integuer.component */
    "./src/app/clients/clients-integuer/clients-integuer.component.ts");
    /* harmony import */


    var _clients_hbrgroup_clients_hbrgroup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./clients-hbrgroup/clients-hbrgroup.component */
    "./src/app/clients/clients-hbrgroup/clients-hbrgroup.component.ts");
    /* harmony import */


    var _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./under-construction/under-construction.component */
    "./src/app/clients/under-construction/under-construction.component.ts");

    var ClientsRoutingModule = function ClientsRoutingModule() {
      _classCallCheck(this, ClientsRoutingModule);
    };

    ClientsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ClientsRoutingModule
    });
    ClientsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ClientsRoutingModule_Factory(t) {
        return new (t || ClientsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: 'clients',
        component: _clients_component__WEBPACK_IMPORTED_MODULE_1__["ClientsComponent"],
        children: [{
          path: '',
          component: _clients_list_clients_list_component__WEBPACK_IMPORTED_MODULE_3__["ClientsListComponent"]
        }, {
          path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["VERYS"],
          component: _clients_verys_clients_verys_component__WEBPACK_IMPORTED_MODULE_4__["ClientsVerysComponent"]
        }, {
          path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["VERTAFORE"],
          component: _clients_vertafore_clients_vertafore_component__WEBPACK_IMPORTED_MODULE_5__["ClientsVertaforeComponent"]
        }, {
          path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["PWC"],
          component: _clients_pwc_clients_pwc_component__WEBPACK_IMPORTED_MODULE_6__["ClientsPwcComponent"]
        }, {
          path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["OPTION_CARE"],
          component: _clients_optioncare_clients_optioncare_component__WEBPACK_IMPORTED_MODULE_8__["ClientsOptioncareComponent"]
        }, {
          path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["SENEGENCE"],
          component: _clients_senegence_clients_senegence_component__WEBPACK_IMPORTED_MODULE_7__["ClientsSenegenceComponent"]
        }, {
          path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["TECHNOSSUS"],
          component: _clients_technossus_clients_technossus_component__WEBPACK_IMPORTED_MODULE_9__["ClientsTechnossusComponent"]
        }, {
          path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["GLIDEWELL"],
          component: _clients_glidewell_clients_glidewell_component__WEBPACK_IMPORTED_MODULE_10__["ClientsGlidewellComponent"]
        }, {
          path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["BIORAD"],
          component: _clients_biorad_clients_biorad_component__WEBPACK_IMPORTED_MODULE_12__["ClientsBioradComponent"]
        }, {
          path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["DIGNITY_HEALTH"],
          component: _clients_dignityhealth_clients_dignityhealth_component__WEBPACK_IMPORTED_MODULE_13__["ClientsDignityhealthComponent"]
        }, {
          path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["AMARE_GLOBAL"],
          component: _clients_amareglobal_clients_amareglobal_component__WEBPACK_IMPORTED_MODULE_14__["ClientsAmareglobalComponent"]
        }, {
          path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["TEGA_TECHNOLOGIES"],
          component: _clients_tegatechnologies_clients_tegatechnologies_component__WEBPACK_IMPORTED_MODULE_15__["ClientsTegatechnologiesComponent"]
        }, {
          path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["WIND_TELECOM"],
          component: _clients_windtelecom_clients_windtelecom_component__WEBPACK_IMPORTED_MODULE_16__["ClientsWindtelecomComponent"]
        }, {
          path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["INTEGUER"],
          component: _clients_integuer_clients_integuer_component__WEBPACK_IMPORTED_MODULE_17__["ClientsInteguerComponent"]
        }, {
          path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["HBR_GROUP"],
          component: _clients_hbrgroup_clients_hbrgroup_component__WEBPACK_IMPORTED_MODULE_18__["ClientsHbrgroupComponent"]
        }, {
          path: '**',
          component: _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_19__["UnderConstructionComponent"]
        }]
      }])], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClientsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
            path: 'clients',
            component: _clients_component__WEBPACK_IMPORTED_MODULE_1__["ClientsComponent"],
            children: [{
              path: '',
              component: _clients_list_clients_list_component__WEBPACK_IMPORTED_MODULE_3__["ClientsListComponent"]
            }, {
              path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["VERYS"],
              component: _clients_verys_clients_verys_component__WEBPACK_IMPORTED_MODULE_4__["ClientsVerysComponent"]
            }, {
              path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["VERTAFORE"],
              component: _clients_vertafore_clients_vertafore_component__WEBPACK_IMPORTED_MODULE_5__["ClientsVertaforeComponent"]
            }, {
              path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["PWC"],
              component: _clients_pwc_clients_pwc_component__WEBPACK_IMPORTED_MODULE_6__["ClientsPwcComponent"]
            }, {
              path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["OPTION_CARE"],
              component: _clients_optioncare_clients_optioncare_component__WEBPACK_IMPORTED_MODULE_8__["ClientsOptioncareComponent"]
            }, {
              path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["SENEGENCE"],
              component: _clients_senegence_clients_senegence_component__WEBPACK_IMPORTED_MODULE_7__["ClientsSenegenceComponent"]
            }, {
              path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["TECHNOSSUS"],
              component: _clients_technossus_clients_technossus_component__WEBPACK_IMPORTED_MODULE_9__["ClientsTechnossusComponent"]
            }, {
              path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["GLIDEWELL"],
              component: _clients_glidewell_clients_glidewell_component__WEBPACK_IMPORTED_MODULE_10__["ClientsGlidewellComponent"]
            }, {
              path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["BIORAD"],
              component: _clients_biorad_clients_biorad_component__WEBPACK_IMPORTED_MODULE_12__["ClientsBioradComponent"]
            }, {
              path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["DIGNITY_HEALTH"],
              component: _clients_dignityhealth_clients_dignityhealth_component__WEBPACK_IMPORTED_MODULE_13__["ClientsDignityhealthComponent"]
            }, {
              path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["AMARE_GLOBAL"],
              component: _clients_amareglobal_clients_amareglobal_component__WEBPACK_IMPORTED_MODULE_14__["ClientsAmareglobalComponent"]
            }, {
              path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["TEGA_TECHNOLOGIES"],
              component: _clients_tegatechnologies_clients_tegatechnologies_component__WEBPACK_IMPORTED_MODULE_15__["ClientsTegatechnologiesComponent"]
            }, {
              path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["WIND_TELECOM"],
              component: _clients_windtelecom_clients_windtelecom_component__WEBPACK_IMPORTED_MODULE_16__["ClientsWindtelecomComponent"]
            }, {
              path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["INTEGUER"],
              component: _clients_integuer_clients_integuer_component__WEBPACK_IMPORTED_MODULE_17__["ClientsInteguerComponent"]
            }, {
              path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["HBR_GROUP"],
              component: _clients_hbrgroup_clients_hbrgroup_component__WEBPACK_IMPORTED_MODULE_18__["ClientsHbrgroupComponent"]
            }, {
              path: '**',
              component: _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_19__["UnderConstructionComponent"]
            }]
          }])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/clients-senegence/clients-senegence.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/clients/clients-senegence/clients-senegence.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ClientsSenegenceComponent */

  /***/
  function srcAppClientsClientsSenegenceClientsSenegenceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsSenegenceComponent", function () {
      return ClientsSenegenceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _clients_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../clients.constants */
    "./src/app/clients/clients.constants.ts");
    /* harmony import */


    var _client_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../client-base */
    "./src/app/clients/client-base.ts");
    /* harmony import */


    var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../client.service */
    "./src/app/clients/client.service.ts");

    var ClientsSenegenceComponent =
    /*#__PURE__*/
    function (_client_base__WEBPACK9) {
      _inherits(ClientsSenegenceComponent, _client_base__WEBPACK9);

      var _super9 = _createSuper(ClientsSenegenceComponent);

      function ClientsSenegenceComponent(clientService) {
        var _this10;

        _classCallCheck(this, ClientsSenegenceComponent);

        _this10 = _super9.call(this, clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_1__["SENEGENCE"]);
        _this10.clientService = clientService;
        return _this10;
      }

      return ClientsSenegenceComponent;
    }(_client_base__WEBPACK_IMPORTED_MODULE_2__["ClientBase"]);

    ClientsSenegenceComponent.ɵfac = function ClientsSenegenceComponent_Factory(t) {
      return new (t || ClientsSenegenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]));
    };

    ClientsSenegenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientsSenegenceComponent,
      selectors: [["app-clients-senegence"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 59,
      vars: 5,
      consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", "rounded-circle", 3, "src", "alt"]],
      template: function ClientsSenegenceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Founded in 1999 by Joni Rogers-Kante, SeneGence International sprung onto the direct-selling scene with its premier product, LipSense. This long-lasting lip color was a big hit among busy, hard-working women on the go. Years later, our product line and global reach continues to expand, as we empower individuals to be successful business owners. We started with a team of one Distributor, and now, we are a proud family of hundreds of thousands. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Project #1:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Authentication Service (Single Sign-ON) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Authentication service with Single Sign-On capabilities ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Full Stack Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Responsibilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Build Single Sign-On Auth Service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Technologies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " IdentityServer, C# & Visual Studios ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Project #2:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Existing Applications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Existing applications that manage the business");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Full Stack Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Responsibilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Maintain these applications/systems");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Introduce new features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Bug fixing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Technologies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Angular 4, C#, Typescript, CSS, Html, Visual Studio Code, Visual Studious ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy1zZW5lZ2VuY2UvY2xpZW50cy1zZW5lZ2VuY2UuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsSenegenceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clients-senegence',
          templateUrl: './clients-senegence.component.html',
          styleUrls: ['./clients-senegence.component.css']
        }]
      }], function () {
        return [{
          type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/clients-technossus/clients-technossus.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/clients/clients-technossus/clients-technossus.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ClientsTechnossusComponent */

  /***/
  function srcAppClientsClientsTechnossusClientsTechnossusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsTechnossusComponent", function () {
      return ClientsTechnossusComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _clients_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../clients.constants */
    "./src/app/clients/clients.constants.ts");
    /* harmony import */


    var _client_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../client-base */
    "./src/app/clients/client-base.ts");
    /* harmony import */


    var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../client.service */
    "./src/app/clients/client.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ClientsTechnossusComponent =
    /*#__PURE__*/
    function (_client_base__WEBPACK10) {
      _inherits(ClientsTechnossusComponent, _client_base__WEBPACK10);

      var _super10 = _createSuper(ClientsTechnossusComponent);

      function ClientsTechnossusComponent(clientService) {
        var _this11;

        _classCallCheck(this, ClientsTechnossusComponent);

        _this11 = _super10.call(this, clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_1__["TECHNOSSUS"]);
        _this11.clientService = clientService;
        return _this11;
      }

      return ClientsTechnossusComponent;
    }(_client_base__WEBPACK_IMPORTED_MODULE_2__["ClientBase"]);

    ClientsTechnossusComponent.ɵfac = function ClientsTechnossusComponent_Factory(t) {
      return new (t || ClientsTechnossusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]));
    };

    ClientsTechnossusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientsTechnossusComponent,
      selectors: [["app-clients-technossus"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 27,
      vars: 6,
      consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "rounded-circle", 3, "src", "alt"], ["routerLink", "../glidewell"], ["routerLink", "../biorad"], ["routerLink", "../dignityhealth"], ["routerLink", "../amareglobal"]],
      template: function ClientsTechnossusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Technossus enables business acceleration and transformation for companies in the Healthcare, Financial Services, and Bio-Sciences Industries; thru a range of solutions around Outcome-based Roadmaps, Cloud Strategy & Transformation, and Technology Platform Optimization. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " While at ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " I've had the opportunity to work with different clients: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Glidewell Dental");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Bio-Rad Laboratories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Dignity Health");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Amare Global");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy10ZWNobm9zc3VzL2NsaWVudHMtdGVjaG5vc3N1cy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsTechnossusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clients-technossus',
          templateUrl: './clients-technossus.component.html',
          styleUrls: ['./clients-technossus.component.css']
        }]
      }], function () {
        return [{
          type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/clients-tegatechnologies/clients-tegatechnologies.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/clients/clients-tegatechnologies/clients-tegatechnologies.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: ClientsTegatechnologiesComponent */

  /***/
  function srcAppClientsClientsTegatechnologiesClientsTegatechnologiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsTegatechnologiesComponent", function () {
      return ClientsTegatechnologiesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _clients_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../clients.constants */
    "./src/app/clients/clients.constants.ts");
    /* harmony import */


    var _client_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../client-base */
    "./src/app/clients/client-base.ts");
    /* harmony import */


    var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../client.service */
    "./src/app/clients/client.service.ts");

    var ClientsTegatechnologiesComponent =
    /*#__PURE__*/
    function (_client_base__WEBPACK11) {
      _inherits(ClientsTegatechnologiesComponent, _client_base__WEBPACK11);

      var _super11 = _createSuper(ClientsTegatechnologiesComponent);

      function ClientsTegatechnologiesComponent(clientService) {
        var _this12;

        _classCallCheck(this, ClientsTegatechnologiesComponent);

        _this12 = _super11.call(this, clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_1__["TEGA_TECHNOLOGIES"]);
        _this12.clientService = clientService;
        return _this12;
      }

      return ClientsTegatechnologiesComponent;
    }(_client_base__WEBPACK_IMPORTED_MODULE_2__["ClientBase"]);

    ClientsTegatechnologiesComponent.ɵfac = function ClientsTegatechnologiesComponent_Factory(t) {
      return new (t || ClientsTegatechnologiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]));
    };

    ClientsTegatechnologiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientsTegatechnologiesComponent,
      selectors: [["app-clients-tegatechnologies"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 64,
      vars: 5,
      consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", "rounded-circle", 3, "src", "alt"], ["href", "https://www.chatterspot.com", "target", "_blank"]],
      template: function ClientsTegatechnologiesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " In 2018, Helm Technologies acquired Tega Technologies, which was founded in 2005. Helm Technologies has rapidly evolved by embracing advanced technology and marketing expertise to form solutions for businesses and organizations that want to communicate more effectively with their customers and members. Helm leads the mobile marketing industry in innovation by automating on-demand marketing campaigns based on specific customer and member behaviors and interests for most industry verticals with specific emphasis on retail sales and automotive dealerships. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Project:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\t\xA0Chatterspot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Project Url:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\t\xA0Chatterspot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\xA0Chatterspot\u2122 is a fully automated end-2-end digital advertising solution.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\xA0FullStack Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Responsibilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Application Maintenance.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "New Features.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Technologies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " ASP.NET WebForm, CSS, Html, Javascript, C#, Visual Studios ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Project:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\t\xA0NextDeal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\xA0 FullStack Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Responsibilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Application Maintenance.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "New Features.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Technologies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " ASP.NET WebForm, CSS, Html, Javascript, C#, Visual Studios ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy10ZWdhdGVjaG5vbG9naWVzL2NsaWVudHMtdGVnYXRlY2hub2xvZ2llcy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsTegatechnologiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clients-tegatechnologies',
          templateUrl: './clients-tegatechnologies.component.html',
          styleUrls: ['./clients-tegatechnologies.component.css']
        }]
      }], function () {
        return [{
          type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/clients-vertafore/clients-vertafore.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/clients/clients-vertafore/clients-vertafore.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ClientsVertaforeComponent */

  /***/
  function srcAppClientsClientsVertaforeClientsVertaforeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsVertaforeComponent", function () {
      return ClientsVertaforeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _clients_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../clients.constants */
    "./src/app/clients/clients.constants.ts");
    /* harmony import */


    var _client_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../client-base */
    "./src/app/clients/client-base.ts");
    /* harmony import */


    var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../client.service */
    "./src/app/clients/client.service.ts");

    var ClientsVertaforeComponent =
    /*#__PURE__*/
    function (_client_base__WEBPACK12) {
      _inherits(ClientsVertaforeComponent, _client_base__WEBPACK12);

      var _super12 = _createSuper(ClientsVertaforeComponent);

      function ClientsVertaforeComponent(clientService) {
        var _this13;

        _classCallCheck(this, ClientsVertaforeComponent);

        _this13 = _super12.call(this, clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_1__["VERTAFORE"]);
        _this13.clientService = clientService;
        return _this13;
      }

      return ClientsVertaforeComponent;
    }(_client_base__WEBPACK_IMPORTED_MODULE_2__["ClientBase"]);

    ClientsVertaforeComponent.ɵfac = function ClientsVertaforeComponent_Factory(t) {
      return new (t || ClientsVertaforeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]));
    };

    ClientsVertaforeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientsVertaforeComponent,
      selectors: [["app-clients-vertafore"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 38,
      vars: 5,
      consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", 3, "src", "alt"]],
      template: function ClientsVertaforeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Vertafore is the leader in creating modern insurance technology. Every day thousands of insurance agencies, carriers and states use a breadth of Vertafore solutions to grow their businesses, process claims for their customers and much more. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Project:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Custom Audit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Migrate legacy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Policy Audit System");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " to modern technologies. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Full Stack Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Responsabilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Design & Architect a SPA solution.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Front & Back End construction.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Web API Development.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Technologies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Angular 8, CSS, HTML, Typescript, Mobx, Angular Material, C#, Standard dotNet Web API, Entity Framework, Microservices, SQL Server. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy12ZXJ0YWZvcmUvY2xpZW50cy12ZXJ0YWZvcmUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsVertaforeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clients-vertafore',
          templateUrl: './clients-vertafore.component.html',
          styleUrls: ['./clients-vertafore.component.css']
        }]
      }], function () {
        return [{
          type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/clients-verys/clients-verys.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/clients/clients-verys/clients-verys.component.ts ***!
    \******************************************************************/

  /*! exports provided: ClientsVerysComponent */

  /***/
  function srcAppClientsClientsVerysClientsVerysComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsVerysComponent", function () {
      return ClientsVerysComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _clients_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../clients.constants */
    "./src/app/clients/clients.constants.ts");
    /* harmony import */


    var _client_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../client-base */
    "./src/app/clients/client-base.ts");
    /* harmony import */


    var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../client.service */
    "./src/app/clients/client.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ClientsVerysComponent =
    /*#__PURE__*/
    function (_client_base__WEBPACK13) {
      _inherits(ClientsVerysComponent, _client_base__WEBPACK13);

      var _super13 = _createSuper(ClientsVerysComponent);

      function ClientsVerysComponent(clientService) {
        var _this14;

        _classCallCheck(this, ClientsVerysComponent);

        _this14 = _super13.call(this, clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_1__["VERYS"]);
        _this14.clientService = clientService;
        return _this14;
      }

      return ClientsVerysComponent;
    }(_client_base__WEBPACK_IMPORTED_MODULE_2__["ClientBase"]);

    ClientsVerysComponent.ɵfac = function ClientsVerysComponent_Factory(t) {
      return new (t || ClientsVerysComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]));
    };

    ClientsVerysComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientsVerysComponent,
      selectors: [["app-clients-verys"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 33,
      vars: 6,
      consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "rounded-circle", 3, "src", "alt"], ["routerLink", "../oc"], ["routerLink", "../pwc"], ["routerLink", "../vertafore"]],
      template: function ClientsVerysComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "As part of the interview-committee, I contribute to the company by helping to find the best candidates for the role by interviewing and evaluating prospects.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "I overssee the account and run standups meetings on behave of my manager and report any blockers that could affect the relationship with our clients to be fixed ASAP.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "I mainly find myself ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "developing SPA applications in Angular and building microservices with C#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Clients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u2013 Please click on the below clients\u2019 links for more information about my experience with them ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Option Care");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "PWC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Vertafore");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.client.name, " specialties are Software Development, Web Development, Mobile Development, Full Stack, UX Design, Cloud Solutions, Native iOS, Native Android, Consulting, QA. ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy12ZXJ5cy9jbGllbnRzLXZlcnlzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsVerysComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clients-verys',
          templateUrl: './clients-verys.component.html',
          styleUrls: ['./clients-verys.component.css']
        }]
      }], function () {
        return [{
          type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/clients-windtelecom/clients-windtelecom.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/clients/clients-windtelecom/clients-windtelecom.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ClientsWindtelecomComponent */

  /***/
  function srcAppClientsClientsWindtelecomClientsWindtelecomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsWindtelecomComponent", function () {
      return ClientsWindtelecomComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _client_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../client-base */
    "./src/app/clients/client-base.ts");
    /* harmony import */


    var _clients_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../clients.constants */
    "./src/app/clients/clients.constants.ts");
    /* harmony import */


    var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../client.service */
    "./src/app/clients/client.service.ts");

    var ClientsWindtelecomComponent =
    /*#__PURE__*/
    function (_client_base__WEBPACK14) {
      _inherits(ClientsWindtelecomComponent, _client_base__WEBPACK14);

      var _super14 = _createSuper(ClientsWindtelecomComponent);

      function ClientsWindtelecomComponent(clientService) {
        var _this15;

        _classCallCheck(this, ClientsWindtelecomComponent);

        _this15 = _super14.call(this, clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_2__["WIND_TELECOM"]);
        _this15.clientService = clientService;
        return _this15;
      }

      return ClientsWindtelecomComponent;
    }(_client_base__WEBPACK_IMPORTED_MODULE_1__["ClientBase"]);

    ClientsWindtelecomComponent.ɵfac = function ClientsWindtelecomComponent_Factory(t) {
      return new (t || ClientsWindtelecomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]));
    };

    ClientsWindtelecomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientsWindtelecomComponent,
      selectors: [["app-clients-windtelecom"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 93,
      vars: 5,
      consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", "rounded-circle", 3, "src", "alt"]],
      template: function ClientsWindtelecomComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " WIND TELECOM, S. A. es una empresa de telecomunicaciones en Rep\xFAblica Dominicana, cuyo enfoque es brindar servicios integrados de Voz, Televisi\xF3n Digital e Internet a nuestros clientes personales, as\xED como servicios especializados a empresas, instituciones y a otras prestadores de servicios, garantizando calidad, costo y entrega. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Nuestra red de voz y datos es completamente IP; adem\xE1s est\xE1 basada primordialmente en tecnolog\xEDa WiMax, apoy\xE1ndose tambi\xE9n en accesos punto a punto por microondas y redes de fibra \xF3ptica para el transporte de grandes vol\xFAmenes de informaci\xF3n. Nuestra red de video est\xE1 basada en MMDS (Multichannel Multipoint Distribution System). ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Nuestro prop\xF3sito es ser el proveedor preferido de soluciones de conectividad, contenido de informaci\xF3n y entretenimiento en los mercados personales, empresariales e institucionales, satisfaciendo las expectativas de nuestros clientes en calidad, costo y entrega y apoyando de manera directa la educaci\xF3n en Rep\xFAblica Dominicana. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Project:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \xA0Field Service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\xA0Allows you to track down a technical person and orders completed.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\xA0FullStack Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Responsibilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Feature implementation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Application maintenance.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Technologies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " ASP.NET WebForm, C#, HTML, CSS, Javascript, Entity Framework ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Project:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \xA0Content Management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\xA0Facade Application that authorize access to a service provider.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\xA0 FullStack Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Responsibilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Backend development");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Frontend development");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Technologies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " ASP.NET MVC, Entity Framework, CSS, C#, HTML, telerik, javascript ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Project:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " \xA0Customer Relationship Management (CRM)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\xA0CRM application on an internal Web platform made with ASP.NET MVC, covering major business processes for customer management and billing.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\xA0 FullStack Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Responsibilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Participate in the designing & architecture of the project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Build backend services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Build frontend modules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Technologies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " ASP.NET MVC, Entity Framework, CSS, C#, HTML, telerik, javascript, UML ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy13aW5kdGVsZWNvbS9jbGllbnRzLXdpbmR0ZWxlY29tLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsWindtelecomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clients-windtelecom',
          templateUrl: './clients-windtelecom.component.html',
          styleUrls: ['./clients-windtelecom.component.css']
        }]
      }], function () {
        return [{
          type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/clients.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/clients/clients.component.ts ***!
    \**********************************************/

  /*! exports provided: ClientsComponent */

  /***/
  function srcAppClientsClientsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsComponent", function () {
      return ClientsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ClientsComponent =
    /*#__PURE__*/
    function () {
      function ClientsComponent() {
        _classCallCheck(this, ClientsComponent);
      }

      _createClass(ClientsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ClientsComponent;
    }();

    ClientsComponent.ɵfac = function ClientsComponent_Factory(t) {
      return new (t || ClientsComponent)();
    };

    ClientsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientsComponent,
      selectors: [["app-clients"]],
      decls: 1,
      vars: 0,
      template: function ClientsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clients',
          templateUrl: './clients.component.html',
          styleUrls: ['./clients.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/clients.constants.ts":
  /*!**********************************************!*\
    !*** ./src/app/clients/clients.constants.ts ***!
    \**********************************************/

  /*! exports provided: VERYS, VERTAFORE, PWC, OPTION_CARE, SENEGENCE, TECHNOSSUS, GLIDEWELL, BIORAD, DIGNITY_HEALTH, AMARE_GLOBAL, TEGA_TECHNOLOGIES, WIND_TELECOM, INTEGUER, HBR_GROUP */

  /***/
  function srcAppClientsClientsConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VERYS", function () {
      return VERYS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VERTAFORE", function () {
      return VERTAFORE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PWC", function () {
      return PWC;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OPTION_CARE", function () {
      return OPTION_CARE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SENEGENCE", function () {
      return SENEGENCE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TECHNOSSUS", function () {
      return TECHNOSSUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GLIDEWELL", function () {
      return GLIDEWELL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BIORAD", function () {
      return BIORAD;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DIGNITY_HEALTH", function () {
      return DIGNITY_HEALTH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AMARE_GLOBAL", function () {
      return AMARE_GLOBAL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TEGA_TECHNOLOGIES", function () {
      return TEGA_TECHNOLOGIES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WIND_TELECOM", function () {
      return WIND_TELECOM;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "INTEGUER", function () {
      return INTEGUER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HBR_GROUP", function () {
      return HBR_GROUP;
    });

    var VERYS = 'verys';
    var VERTAFORE = 'vertafore';
    var PWC = 'pwc';
    var OPTION_CARE = 'oc';
    var SENEGENCE = 'senegence';
    var TECHNOSSUS = 'technossus';
    var GLIDEWELL = 'glidewell';
    var BIORAD = 'biorad';
    var DIGNITY_HEALTH = 'dignityhealth';
    var AMARE_GLOBAL = 'amareglobal';
    var TEGA_TECHNOLOGIES = 'tegatechnologies';
    var WIND_TELECOM = 'windtelecom';
    var INTEGUER = 'integuer';
    var HBR_GROUP = 'hbrgroup';
    /***/
  },

  /***/
  "./src/app/clients/clients.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/clients/clients.module.ts ***!
    \*******************************************/

  /*! exports provided: ClientsModule */

  /***/
  function srcAppClientsClientsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsModule", function () {
      return ClientsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _clients_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./clients-routing.module */
    "./src/app/clients/clients-routing.module.ts");
    /* harmony import */


    var _clients_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./clients.component */
    "./src/app/clients/clients.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _clients_list_clients_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./clients-list/clients-list.component */
    "./src/app/clients/clients-list/clients-list.component.ts");
    /* harmony import */


    var _clients_verys_clients_verys_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./clients-verys/clients-verys.component */
    "./src/app/clients/clients-verys/clients-verys.component.ts");
    /* harmony import */


    var _clients_vertafore_clients_vertafore_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./clients-vertafore/clients-vertafore.component */
    "./src/app/clients/clients-vertafore/clients-vertafore.component.ts");
    /* harmony import */


    var _clients_pwc_clients_pwc_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./clients-pwc/clients-pwc.component */
    "./src/app/clients/clients-pwc/clients-pwc.component.ts");
    /* harmony import */


    var _clients_senegence_clients_senegence_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./clients-senegence/clients-senegence.component */
    "./src/app/clients/clients-senegence/clients-senegence.component.ts");
    /* harmony import */


    var _clients_optioncare_clients_optioncare_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./clients-optioncare/clients-optioncare.component */
    "./src/app/clients/clients-optioncare/clients-optioncare.component.ts");
    /* harmony import */


    var _clients_technossus_clients_technossus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./clients-technossus/clients-technossus.component */
    "./src/app/clients/clients-technossus/clients-technossus.component.ts");
    /* harmony import */


    var _clients_glidewell_clients_glidewell_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./clients-glidewell/clients-glidewell.component */
    "./src/app/clients/clients-glidewell/clients-glidewell.component.ts");
    /* harmony import */


    var _clients_biorad_clients_biorad_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./clients-biorad/clients-biorad.component */
    "./src/app/clients/clients-biorad/clients-biorad.component.ts");
    /* harmony import */


    var _clients_dignityhealth_clients_dignityhealth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./clients-dignityhealth/clients-dignityhealth.component */
    "./src/app/clients/clients-dignityhealth/clients-dignityhealth.component.ts");
    /* harmony import */


    var _clients_amareglobal_clients_amareglobal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./clients-amareglobal/clients-amareglobal.component */
    "./src/app/clients/clients-amareglobal/clients-amareglobal.component.ts");
    /* harmony import */


    var _clients_tegatechnologies_clients_tegatechnologies_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./clients-tegatechnologies/clients-tegatechnologies.component */
    "./src/app/clients/clients-tegatechnologies/clients-tegatechnologies.component.ts");
    /* harmony import */


    var _clients_windtelecom_clients_windtelecom_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./clients-windtelecom/clients-windtelecom.component */
    "./src/app/clients/clients-windtelecom/clients-windtelecom.component.ts");
    /* harmony import */


    var _clients_integuer_clients_integuer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./clients-integuer/clients-integuer.component */
    "./src/app/clients/clients-integuer/clients-integuer.component.ts");
    /* harmony import */


    var _clients_hbrgroup_clients_hbrgroup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./clients-hbrgroup/clients-hbrgroup.component */
    "./src/app/clients/clients-hbrgroup/clients-hbrgroup.component.ts");
    /* harmony import */


    var _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./under-construction/under-construction.component */
    "./src/app/clients/under-construction/under-construction.component.ts");

    var ClientsModule = function ClientsModule() {
      _classCallCheck(this, ClientsModule);
    };

    ClientsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ClientsModule
    });
    ClientsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ClientsModule_Factory(t) {
        return new (t || ClientsModule)();
      },
      imports: [[_clients_routing_module__WEBPACK_IMPORTED_MODULE_1__["ClientsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClientsModule, {
        declarations: [_clients_component__WEBPACK_IMPORTED_MODULE_2__["ClientsComponent"], _clients_list_clients_list_component__WEBPACK_IMPORTED_MODULE_4__["ClientsListComponent"], _clients_verys_clients_verys_component__WEBPACK_IMPORTED_MODULE_5__["ClientsVerysComponent"], _clients_vertafore_clients_vertafore_component__WEBPACK_IMPORTED_MODULE_6__["ClientsVertaforeComponent"], _clients_pwc_clients_pwc_component__WEBPACK_IMPORTED_MODULE_7__["ClientsPwcComponent"], _clients_senegence_clients_senegence_component__WEBPACK_IMPORTED_MODULE_8__["ClientsSenegenceComponent"], _clients_optioncare_clients_optioncare_component__WEBPACK_IMPORTED_MODULE_9__["ClientsOptioncareComponent"], _clients_technossus_clients_technossus_component__WEBPACK_IMPORTED_MODULE_10__["ClientsTechnossusComponent"], _clients_glidewell_clients_glidewell_component__WEBPACK_IMPORTED_MODULE_11__["ClientsGlidewellComponent"], _clients_biorad_clients_biorad_component__WEBPACK_IMPORTED_MODULE_12__["ClientsBioradComponent"], _clients_dignityhealth_clients_dignityhealth_component__WEBPACK_IMPORTED_MODULE_13__["ClientsDignityhealthComponent"], _clients_amareglobal_clients_amareglobal_component__WEBPACK_IMPORTED_MODULE_14__["ClientsAmareglobalComponent"], _clients_tegatechnologies_clients_tegatechnologies_component__WEBPACK_IMPORTED_MODULE_15__["ClientsTegatechnologiesComponent"], _clients_windtelecom_clients_windtelecom_component__WEBPACK_IMPORTED_MODULE_16__["ClientsWindtelecomComponent"], _clients_integuer_clients_integuer_component__WEBPACK_IMPORTED_MODULE_17__["ClientsInteguerComponent"], _clients_hbrgroup_clients_hbrgroup_component__WEBPACK_IMPORTED_MODULE_18__["ClientsHbrgroupComponent"], _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_19__["UnderConstructionComponent"]],
        imports: [_clients_routing_module__WEBPACK_IMPORTED_MODULE_1__["ClientsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_clients_component__WEBPACK_IMPORTED_MODULE_2__["ClientsComponent"], _clients_list_clients_list_component__WEBPACK_IMPORTED_MODULE_4__["ClientsListComponent"], _clients_verys_clients_verys_component__WEBPACK_IMPORTED_MODULE_5__["ClientsVerysComponent"], _clients_vertafore_clients_vertafore_component__WEBPACK_IMPORTED_MODULE_6__["ClientsVertaforeComponent"], _clients_pwc_clients_pwc_component__WEBPACK_IMPORTED_MODULE_7__["ClientsPwcComponent"], _clients_senegence_clients_senegence_component__WEBPACK_IMPORTED_MODULE_8__["ClientsSenegenceComponent"], _clients_optioncare_clients_optioncare_component__WEBPACK_IMPORTED_MODULE_9__["ClientsOptioncareComponent"], _clients_technossus_clients_technossus_component__WEBPACK_IMPORTED_MODULE_10__["ClientsTechnossusComponent"], _clients_glidewell_clients_glidewell_component__WEBPACK_IMPORTED_MODULE_11__["ClientsGlidewellComponent"], _clients_biorad_clients_biorad_component__WEBPACK_IMPORTED_MODULE_12__["ClientsBioradComponent"], _clients_dignityhealth_clients_dignityhealth_component__WEBPACK_IMPORTED_MODULE_13__["ClientsDignityhealthComponent"], _clients_amareglobal_clients_amareglobal_component__WEBPACK_IMPORTED_MODULE_14__["ClientsAmareglobalComponent"], _clients_tegatechnologies_clients_tegatechnologies_component__WEBPACK_IMPORTED_MODULE_15__["ClientsTegatechnologiesComponent"], _clients_windtelecom_clients_windtelecom_component__WEBPACK_IMPORTED_MODULE_16__["ClientsWindtelecomComponent"], _clients_integuer_clients_integuer_component__WEBPACK_IMPORTED_MODULE_17__["ClientsInteguerComponent"], _clients_hbrgroup_clients_hbrgroup_component__WEBPACK_IMPORTED_MODULE_18__["ClientsHbrgroupComponent"], _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_19__["UnderConstructionComponent"]],
          imports: [_clients_routing_module__WEBPACK_IMPORTED_MODULE_1__["ClientsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/under-construction/under-construction.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/clients/under-construction/under-construction.component.ts ***!
    \****************************************************************************/

  /*! exports provided: UnderConstructionComponent */

  /***/
  function srcAppClientsUnderConstructionUnderConstructionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnderConstructionComponent", function () {
      return UnderConstructionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UnderConstructionComponent =
    /*#__PURE__*/
    function () {
      function UnderConstructionComponent() {
        _classCallCheck(this, UnderConstructionComponent);
      }

      _createClass(UnderConstructionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UnderConstructionComponent;
    }();

    UnderConstructionComponent.ɵfac = function UnderConstructionComponent_Factory(t) {
      return new (t || UnderConstructionComponent)();
    };

    UnderConstructionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UnderConstructionComponent,
      selectors: [["app-under-construction"]],
      decls: 1,
      vars: 0,
      consts: [["src", "../../../assets/under-construction.png", "alt", ""]],
      template: function UnderConstructionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        }
      },
      styles: ["img[_ngcontent-%COMP%] {\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;\r\n    -webkit-animation-name: slide-in;\r\n            animation-name: slide-in;\r\n  }\r\n  \r\n  @-webkit-keyframes slide-in {\r\n    from {\r\n      translate: 150vw 0;\r\n      scale: 200% 1;\r\n    }\r\n  \r\n    to {\r\n      translate: 0 0;\r\n      scale: 100% 1;\r\n    }\r\n  }\r\n  \r\n  @keyframes slide-in {\r\n    from {\r\n      translate: 150vw 0;\r\n      scale: 200% 1;\r\n    }\r\n  \r\n    to {\r\n      translate: 0 0;\r\n      scale: 100% 1;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50cy91bmRlci1jb25zdHJ1Y3Rpb24vdW5kZXItY29uc3RydWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRTtNQUNFLGtCQUFrQjtNQUNsQixhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxjQUFjO01BQ2QsYUFBYTtJQUNmO0VBQ0Y7O0VBVkE7SUFDRTtNQUNFLGtCQUFrQjtNQUNsQixhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxjQUFjO01BQ2QsYUFBYTtJQUNmO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL3VuZGVyLWNvbnN0cnVjdGlvbi91bmRlci1jb25zdHJ1Y3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWluO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNsaWRlLWluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICB0cmFuc2xhdGU6IDE1MHZ3IDA7XHJcbiAgICAgIHNjYWxlOiAyMDAlIDE7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0byB7XHJcbiAgICAgIHRyYW5zbGF0ZTogMCAwO1xyXG4gICAgICBzY2FsZTogMTAwJSAxO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnderConstructionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-under-construction',
          templateUrl: './under-construction.component.html',
          styleUrls: ['./under-construction.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 19,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark", "sticky-top"], ["data-toggle", "collapse", "data-target", "#collapse_target", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "collapse_target", 1, "collapse", "navbar-collapse"], ["routerLink", "clients", 1, "nav-brand", 2, "cursor", "pointer"], ["src", "../assets/logo.png", "alt", "Logo", 1, "navbar-brand"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["routerLink", "certifications", 1, "nav-link", 2, "cursor", "pointer"], ["href", "https://drive.google.com/file/d/1ROmO3zKziky8Pu_7-nMMdzzoIBYoAm02/view?usp=sharing", "target", "_blank", 1, "nav-link"], ["routerLink", "about", 1, "nav-link", 2, "cursor", "pointer"], ["href", "mailto:hi@wilsonrivera.com?subject:hi", 1, "nav-link", 2, "cursor", "pointer"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Certifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/header/header.module.ts ***!
    \*****************************************/

  /*! exports provided: HeaderModule */

  /***/
  function srcAppHeaderHeaderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderModule", function () {
      return HeaderModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./jumbotron/jumbotron.component */
    "./src/app/header/jumbotron/jumbotron.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _certifications_certifications_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../certifications/certifications-routing.module */
    "./src/app/certifications/certifications-routing.module.ts");

    var HeaderModule = function HeaderModule() {
      _classCallCheck(this, HeaderModule);
    };

    HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HeaderModule
    });
    HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HeaderModule_Factory(t) {
        return new (t || HeaderModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _certifications_certifications_routing_module__WEBPACK_IMPORTED_MODULE_4__["CertificationsRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderModule, {
        declarations: [_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_2__["JumbotronComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _certifications_certifications_routing_module__WEBPACK_IMPORTED_MODULE_4__["CertificationsRoutingModule"]],
        exports: [_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_2__["JumbotronComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_2__["JumbotronComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _certifications_certifications_routing_module__WEBPACK_IMPORTED_MODULE_4__["CertificationsRoutingModule"]],
          exports: [_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_2__["JumbotronComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/jumbotron/jumbotron.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/header/jumbotron/jumbotron.component.ts ***!
    \*********************************************************/

  /*! exports provided: JumbotronComponent */

  /***/
  function srcAppHeaderJumbotronJumbotronComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JumbotronComponent", function () {
      return JumbotronComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var JumbotronComponent =
    /*#__PURE__*/
    function () {
      function JumbotronComponent() {
        _classCallCheck(this, JumbotronComponent);
      }

      _createClass(JumbotronComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return JumbotronComponent;
    }();

    JumbotronComponent.ɵfac = function JumbotronComponent_Factory(t) {
      return new (t || JumbotronComponent)();
    };

    JumbotronComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JumbotronComponent,
      selectors: [["app-jumbotron"]],
      decls: 13,
      vars: 0,
      consts: [[1, "jumbotron", 2, "margin-bottom", "0px"], ["href", "https://www.linkedin.com/in/wilson-rivera-49503465/", "target", "_blank", 1, "icon-padding"], [1, "fab", "fa-linkedin"], ["href", "https://github.com/wilsonriv", "target", "_blank", 1, "icon-padding"], [1, "fab", "fa-github"], ["href", "https://stackoverflow.com/users/2089460/wilson", "target", "_blank", 1, "icon-padding"], [1, "fab", "fa-stack-overflow"], ["href", "mailto:hi@wilsonrivera.com", "target", "_blank", 1, "icon-padding"], ["aria-hidden", "true", 1, "fa", "fa-envelope"]],
      template: function JumbotronComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Wilson Rivera");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Software Engineer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".fa-linkedin[_ngcontent-%COMP%] {\r\n  color: #2867B2;\r\n}\r\n\r\n.fa-stack-overflow[_ngcontent-%COMP%] {\r\n  color: #f48024;\r\n}\r\n\r\n.fa-github[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\n.icon-padding[_ngcontent-%COMP%] {\r\n  padding: 9px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2p1bWJvdHJvbi9qdW1ib3Ryb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2p1bWJvdHJvbi9qdW1ib3Ryb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS1saW5rZWRpbiB7XHJcbiAgY29sb3I6ICMyODY3QjI7XHJcbn1cclxuXHJcbi5mYS1zdGFjay1vdmVyZmxvdyB7XHJcbiAgY29sb3I6ICNmNDgwMjQ7XHJcbn1cclxuXHJcbi5mYS1naXRodWIge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmljb24tcGFkZGluZyB7XHJcbiAgcGFkZGluZzogOXB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JumbotronComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-jumbotron',
          templateUrl: './jumbotron.component.html',
          styleUrls: ['./jumbotron.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shorten_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shorten.pipe */
    "./src/app/shared/shorten.pipe.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_shorten_pipe__WEBPACK_IMPORTED_MODULE_1__["ShortenPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_shorten_pipe__WEBPACK_IMPORTED_MODULE_1__["ShortenPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_shorten_pipe__WEBPACK_IMPORTED_MODULE_1__["ShortenPipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          exports: [_shorten_pipe__WEBPACK_IMPORTED_MODULE_1__["ShortenPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shorten.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/shorten.pipe.ts ***!
    \****************************************/

  /*! exports provided: ShortenPipe */

  /***/
  function srcAppSharedShortenPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShortenPipe", function () {
      return ShortenPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ShortenPipe =
    /*#__PURE__*/
    function () {
      function ShortenPipe() {
        _classCallCheck(this, ShortenPipe);
      }

      _createClass(ShortenPipe, [{
        key: "transform",
        value: function transform(value, limit) {
          if (value.length > limit) {
            return value.substr(0, limit) + ' ...';
          }

          return value;
        }
      }]);

      return ShortenPipe;
    }();

    ShortenPipe.ɵfac = function ShortenPipe_Factory(t) {
      return new (t || ShortenPipe)();
    };

    ShortenPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "shorten",
      type: ShortenPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShortenPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'shorten'
        }]
      }], null, null);
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
    /*! C:\Code\website\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map