(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");





class AboutRoutingModule {
}
AboutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutRoutingModule });
AboutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutRoutingModule_Factory(t) { return new (t || AboutRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: 'about', component: _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] }
            ])]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        { path: 'about', component: _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] }
                    ])]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 59, vars: 0, consts: [[1, "section", "about"], [1, "section__inner", "about__inner"], [1, "about__photo-col"], ["src", "assets/linkedin-photo.png", "alt", "Wilson Rivera", 1, "about__photo"], [1, "about__content"], [1, "section-title"], [1, "about__bio"], [1, "about__skills"], [1, "skill-tag"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " I'm a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Senior Software Engineer with 16+ years of experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " building scalable business solutions across 15+ companies and consulting engagements in healthcare, insurance, energy, and enterprise tech. I specialize in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "C#/.NET");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ", designing systems that range from clean monolithic architectures to distributed microservices. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Teams trust me with ownership \u2014 I've grown into ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lead and Principal Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " roles, not because I chase titles, but because I care about outcomes. I hold ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "AWS Solutions Architect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Azure AI Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " certifications, and I'm increasingly focused on bringing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "AI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " into the products I build. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, ".NET");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "AI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "AWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Azure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "SQL Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "REST APIs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "RxJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Git");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Docker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about__inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  gap: 4rem;\n  align-items: start;\n}\n\n.about__photo-col[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: calc(var(--nav-height) + 2rem);\n}\n\n.about__photo[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 50%;\n  border: 3px solid var(--border);\n  box-shadow:\n    0 0 0 6px var(--bg-surface),\n    0 0 40px var(--accent-glow-strong),\n    0 0 80px var(--accent-glow);\n  display: block;\n  aspect-ratio: 1;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.about__content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.about__bio[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 1.05rem;\n  line-height: 1.75;\n  margin-bottom: 1.25rem;\n}\n\n.about__bio[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 600;\n}\n\n.about__skills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .about__inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n\n  .about__photo-col[_ngcontent-%COMP%] {\n    position: static;\n    display: flex;\n    justify-content: center;\n  }\n\n  .about__photo[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0I7OzsrQkFHNkI7RUFDN0IsY0FBYztFQUNkLGVBQWU7RUFDZixvQkFBaUI7S0FBakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0lBQzFCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0X19pbm5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjYwcHggMWZyO1xuICBnYXA6IDRyZW07XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLmFib3V0X19waG90by1jb2wge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IGNhbGModmFyKC0tbmF2LWhlaWdodCkgKyAycmVtKTtcbn1cblxuLmFib3V0X19waG90byB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJveC1zaGFkb3c6XG4gICAgMCAwIDAgNnB4IHZhcigtLWJnLXN1cmZhY2UpLFxuICAgIDAgMCA0MHB4IHZhcigtLWFjY2VudC1nbG93LXN0cm9uZyksXG4gICAgMCAwIDgwcHggdmFyKC0tYWNjZW50LWdsb3cpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmFib3V0X19jb250ZW50IGgyIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmFib3V0X19iaW8ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG5cbi5hYm91dF9fYmlvIHN0cm9uZyB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYWJvdXRfX3NraWxscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjVyZW07XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5hYm91dF9faW5uZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMi41cmVtO1xuICB9XG5cbiAgLmFib3V0X19waG90by1jb2wge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5hYm91dF9fcGhvdG8ge1xuICAgIHdpZHRoOiAxODBweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/about/about-routing.module.ts");





class AboutModule {
}
AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutModule_Factory(t) { return new (t || AboutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _about_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _about_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _header_jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/jumbotron/jumbotron.component */ "./src/app/header/jumbotron/jumbotron.component.ts");








function AppComponent_app_jumbotron_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-jumbotron");
} }
class AppComponent {
    constructor(router) {
        this.router = router;
        this.year = new Date().getFullYear();
        this.showHero = true;
    }
    ngOnInit() {
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
            .subscribe((e) => {
            this.showHero = e.urlAfterRedirects.split(/[?#]/)[0] === '/clients';
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 2, consts: [[4, "ngIf"], [1, "site-footer"], ["href", "https://www.linkedin.com/in/wilsonsrivera/", "target", "_blank"], ["href", "https://github.com/wilsonriv", "target", "_blank"], ["href", "mailto:hi@wilsonrivera.com"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_jumbotron_0_Template, 1, 0, "app-jumbotron", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "hi@wilsonrivera.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showHero);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Wilson Rivera");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _header_jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_5__["JumbotronComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n\n\n@media (max-width: 640px) {\n  app-header[_ngcontent-%COMP%] {\n    order: -1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBOzs7OztFQUtFOztBQUNGO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKlxuICogT24gdGhlIGhvbWUgcGFnZSB0aGUganVtYm90cm9uIChtaW4taGVpZ2h0OiAxMDB2aCkgcmVuZGVycyBiZWZvcmUgdGhlXG4gKiBoZWFkZXIsIHdoaWNoIHB1c2hlcyB0aGUgbmF2L2J1cmdlciBhIGZ1bGwgc2NyZWVuIGRvd24uIE9uIG1vYmlsZSB3ZSBmbGlwXG4gKiB0aGUgdmlzdWFsIG9yZGVyIHNvIHRoZSBoZWFkZXIg4oCUIGFuZCBpdHMgYnVyZ2VyIHRvZ2dsZSDigJQgc2l0cyBhdCB0aGUgdmVyeVxuICogdG9wLCB3aGlsZSBkZXNrdG9wIGtlZXBzIHRoZSBjbGVhbiBmdWxsLXNjcmVlbiBoZXJvIHdpdGggdGhlIG5hdiBiZWxvdyBpdC5cbiAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIGFwcC1oZWFkZXIge1xuICAgIG9yZGVyOiAtMTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _clients_clients_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clients/clients.module */ "./src/app/clients/clients.module.ts");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.module */ "./src/app/about/about.module.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
            _clients_clients_module__WEBPACK_IMPORTED_MODULE_5__["ClientsModule"],
            _about_about_module__WEBPACK_IMPORTED_MODULE_6__["AboutModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{ path: '', redirectTo: '/clients', pathMatch: 'full' }], { scrollPositionRestoration: 'enabled' })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
        _clients_clients_module__WEBPACK_IMPORTED_MODULE_5__["ClientsModule"],
        _about_about_module__WEBPACK_IMPORTED_MODULE_6__["AboutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                    _clients_clients_module__WEBPACK_IMPORTED_MODULE_5__["ClientsModule"],
                    _about_about_module__WEBPACK_IMPORTED_MODULE_6__["AboutModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{ path: '', redirectTo: '/clients', pathMatch: 'full' }], { scrollPositionRestoration: 'enabled' })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/certifications/certifications-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/certifications/certifications-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CertificationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificationsRoutingModule", function() { return CertificationsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _certifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./certifications.component */ "./src/app/certifications/certifications.component.ts");





class CertificationsRoutingModule {
}
CertificationsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CertificationsRoutingModule });
CertificationsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CertificationsRoutingModule_Factory(t) { return new (t || CertificationsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: 'certifications', component: _certifications_component__WEBPACK_IMPORTED_MODULE_2__["CertificationsComponent"] }])],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CertificationsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CertificationsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: 'certifications', component: _certifications_component__WEBPACK_IMPORTED_MODULE_2__["CertificationsComponent"] }])],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/certifications/certifications.component.ts":
/*!************************************************************!*\
  !*** ./src/app/certifications/certifications.component.ts ***!
  \************************************************************/
/*! exports provided: CertificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificationsComponent", function() { return CertificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CertificationsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
CertificationsComponent.ɵfac = function CertificationsComponent_Factory(t) { return new (t || CertificationsComponent)(); };
CertificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CertificationsComponent, selectors: [["app-certifications"]], decls: 45, vars: 0, consts: [[1, "section"], [1, "section__inner"], [1, "section-title"], [1, "certs-grid"], [1, "cert-item"], ["src", "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg", "alt", "Azure AI Engineer Associate"], [1, "cert-item__label"], ["src", "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg", "alt", "Azure AI Fundamentals"], ["src", "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png", "alt", "AWS Solutions Architect"], ["src", "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png", "alt", "AWS Cloud Practitioner"], ["src", "https://images.credly.com/size/340x340/images/f9b74f06-909f-4e63-aa0c-7f70f64ca889/MCSD%2BApp%2BBuilder%2B2017-01.png", "alt", "MCSD App Builder"], ["src", "https://images.credly.com/size/340x340/images/421ca115-c03d-403d-893c-da7652bb8619/MCSA%2BWeb%2BApplications-01.png", "alt", "MCSA Web Applications"], ["src", "https://images.credly.com/size/340x340/images/ff9e3554-46b8-474d-8a8c-9285284e6c83/Developing_Microsoft_Azure_and_Web_Services-01.png", "alt", "Azure Developer"], ["src", "https://images.credly.com/size/340x340/images/cbab3216-025d-4601-86ee-c5970b348d48/Developing_ASP.NET_MVC_Web_Applications-01.png", "alt", "ASP.NET Developer"], ["src", "https://images.credly.com/size/340x340/images/84f513e4-256d-4aa0-a29d-973bcb39d87a/Programming_in_HTML5_with_JavaScript_and_Css3-01.png", "alt", "HTML5 JS CSS3"], ["src", "https://udemy-certificate.s3.amazonaws.com/image/UC-JYW33GII.jpg?v=1522701048000", "alt", "Angular Udemy"]], template: function CertificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Certifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Azure AI Engineer Associate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Azure AI Fundamentals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "AWS Solutions Architect Associate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "AWS Cloud Practitioner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "MCSD App Builder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "MCSA Web Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Azure Developer Associate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "ASP.NET Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "HTML5 / JS / CSS3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Angular (Udemy)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".certs-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 1.25rem;\n}\n\n.cert-item[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem 1rem;\n  gap: 0.75rem;\n  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;\n}\n\n.cert-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n  box-shadow: 0 0 20px var(--accent-glow);\n  transform: translateY(-2px);\n}\n\n.cert-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .cert-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 6px;\n}\n\n.cert-item__label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--text-muted);\n  text-align: center;\n  line-height: 1.3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2VydGlmaWNhdGlvbnMvY2VydGlmaWNhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw0REFBNEQ7RUFDNUQsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osOERBQThEO0FBQ2hFOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHVDQUF1QztFQUN2QywyQkFBMkI7QUFDN0I7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jZXJ0aWZpY2F0aW9ucy9jZXJ0aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlcnRzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxODBweCwgMWZyKSk7XG4gIGdhcDogMS4yNXJlbTtcbn1cblxuLmNlcnQtaXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXN1cmZhY2UpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMS41cmVtIDFyZW07XG4gIGdhcDogMC43NXJlbTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMsIGJveC1zaGFkb3cgMC4ycywgdHJhbnNmb3JtIDAuMnM7XG59XG5cbi5jZXJ0LWl0ZW06aG92ZXIge1xuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHZhcigtLWFjY2VudC1nbG93KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufVxuXG4uY2VydC1pdGVtIGltZyxcbi5jZXJ0LWl0ZW0gc3ZnIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5jZXJ0LWl0ZW1fX2xhYmVsIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CertificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-certifications',
                templateUrl: './certifications.component.html',
                styleUrls: ['./certifications.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/clients/client-base.ts":
/*!****************************************!*\
  !*** ./src/app/clients/client-base.ts ***!
  \****************************************/
/*! exports provided: ClientBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientBase", function() { return ClientBase; });
class ClientBase {
    constructor(clientService, clientId) {
        this.clientService = clientService;
        this.clientId = clientId;
        this.client = this.clientService.getById(clientId);
    }
}


/***/ }),

/***/ "./src/app/clients/client.service.ts":
/*!*******************************************!*\
  !*** ./src/app/clients/client.service.ts ***!
  \*******************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ClientService {
    constructor() {
        this.clients = [
            {
                id: 'oc',
                name: 'Option Care Health',
                title: 'Option Care Health - Remote',
                logoUrl: '../../assets/logos/optioncare.jpeg',
                websiteUrl: 'https://optioncarehealth.com',
                description: `On August 7, 2019, Option Care and BioScrip merged to become one national team, solely dedicated to infusion care. Option Care Health, Inc. is the largest independent home and alternate site infusion services provider in the United States. With over 6,000 teammates, including 2,900 clinicians, the company works compassionately to elevate standards of care for patients with acute and chronic conditions across all 50 states. Through its clinical leadership, expertise, and national scale, Option Care Health is reimagining the infusion care experience for patients, customers, and employees.`
            },
            {
                id: 'wm',
                name: 'WM',
                title: 'West Monroe - Remote',
                logoUrl: '../../assets/logos/wm.jpg',
                websiteUrl: 'https://www.westmonroe.com/',
                description: `Consulting Company`
            },
            {
                id: 'coned',
                name: 'Coned',
                title: 'Coned - Remote',
                logoUrl: '../../assets/logos/coned.jpg',
                websiteUrl: 'https://coned.com',
                description: `Utility Provider`
            },
            {
                id: 'verys',
                name: 'Verys',
                title: 'Verys - Remote',
                logoUrl: '../../assets/logos/verys.png',
                websiteUrl: 'https://verys.com',
                description: `Verys provides end-to-end design and technology web and mobile services utilizing a local, onshore delivery model.`
            },
            {
                id: 'pwc',
                name: 'PwC',
                title: 'PwC [Contract]',
                logoUrl: '../../assets/logos/pwc.jpeg',
                websiteUrl: 'https://www.pwc.com/gx/en',
                description: `PwC helps organizations and individuals create the value they are looking for. It is a network of firms in 157 countries with more than 276,000 people.

      PwC refers to the PwC network and/or one or more of its member firms, each of which is a separate legal entity. The firms that make up the PwC network are committed to working together to provide quality service offerings for clients throughout the world. Firms in the PwC network are members of, or have other connections to, PricewaterhouseCoopers International Limited (PwCIL), an English private company limited by guarantee. PwCIL does not practice accountancy or provide services to clients.`
            },
            {
                id: 'vertafore',
                name: 'Vertafore',
                title: 'Vertafore [Contract]',
                logoUrl: '../../assets/logos/vertafore.jpeg',
                websiteUrl: 'https://www.vertafore.com',
                description: `Vertafore is the leader in creating modern insurance technology. Every day, thousands of insurance agencies, carriers, and states use a breadth of Vertafore solutions to grow their businesses, process claims for their customers, and much more.`
            },
            {
                id: 'senegence',
                name: 'SeneGence International',
                title: 'SeneGence International',
                logoUrl: '../../assets/logos/senegence.png',
                websiteUrl: 'https://senegence.com',
                description: `SeneGence International allows beauty lovers from all walks of life to choose to live life in love and abundance.

      Founded in 1999 by Joni Rogers-Kante, SeneGence International sprung onto the direct-selling scene with its premier product, LipSense. This long-lasting lip color was a big hit among busy, hard-working women on the go. Years later, its product line and global reach continue to expand as the company empowers individuals to become successful business owners. SeneGence started with a team of one Distributor and is now a proud family of hundreds of thousands.

      The company prides itself on being on the cutting edge of anti-aging skin care, nourishing hair care, and long-lasting color technology with its original, patented, and proprietary product formulations. Its products are formulated with no animal byproducts, in compliance with FDA regulations, and made in the United States for tight quality control.

      SeneGence's vision is to offer superior products and an opportunity for individuals to be independent and successful in business regardless of age, background, or education. The company is committed to making a positive contribution to beauty enthusiasts everywhere. Its environmentally sensitive practices include using naturally reoccurring ingredients, refraining from any animal testing, and omitting external product packaging to remain environmentally conscientious and ecologically responsible.

      Its nonprofit organization, The Make Sense Foundation®, regularly raises and contributes funds for women and children in need.`
            },
            {
                id: 'technossus',
                name: 'Technossus',
                title: 'Technossus',
                logoUrl: '../../assets/logos/technossus.jpeg',
                websiteUrl: 'http://www.technossus.com',
                description: `Technossus enables business acceleration and transformation for companies in the Healthcare, Financial Services, and Bio-Sciences Industries; through a range of solutions around Outcome-based Roadmaps, Cloud Strategy & Transformation, and Technology Platform Optimization.

      Founded in 2008, Technossus is a privately-held technology consulting firm headquartered in Irvine, CA. Since its inception, Technossus has become one of the fastest-growing technology consultancies in the nation, having earned Inc.’s 5000™ Fastest-Growing Privately-Held Companies for multiple years.
      Technossus operates in a class of its own, with a consultative approach to do what’s best for its clients’ businesses. The firm is committed to a model that focuses on high-quality outcomes through a deep understanding of client issues, both seen and unseen —transforming businesses to stay relevant in an increasingly digital world.

      Great technology starts with great human capital. Technossus prides itself on maintaining a roster of the most dedicated & passionate professionals in the market. It has been awarded “Best Places to Work” multiple years. It maintains that the highest-quality team will always produce the highest-quality results.
      Technossus professionals collaborate with clients to strategize, modernize, innovate, and drive value through all business functions, across dozens of industries.  Technossus is committed to a model that focuses on outcomes —enabling businesses to remain cutting-edge, painlessly.

      As a committed leader, folks at Technossus spearhead efforts to give back to the local community through affiliations with The Boys and Girls Club of America and The OC Food Bank.`
            },
            {
                id: 'biorad',
                name: 'Bio-Rad Laboratories',
                title: 'Bio-Rad Laboratories [Contract]',
                logoUrl: '../../assets/logos/biorad.png',
                websiteUrl: 'http://www.bio-rad.com',
                description: `Since Bio-Rad was founded over six decades ago, it has continued to provide the healthcare industry with innovative and useful products that help life science researchers accelerate the discovery process and medical diagnostic labs obtain faster, better results. Throughout its existence, the company has built long-lasting customer relationships that help advance its research and development efforts in the introduction of new products and solutions. Today, Bio-Rad is a global leader, with a team of over 8,000 employees and a global network of operations that serves its life science research and clinical diagnostics customers, helping people live longer, healthier lives.`
            },
            {
                id: 'amareglobal',
                name: 'Amare Global',
                title: 'Amare Global [Contract]',
                logoUrl: '../../assets/logos/amareglobal.png',
                websiteUrl: 'http://www.amareglobal.com',
                description: `Amare Global creates a holistic mental wellness platform that connects a purpose-driven community of passionate people. Its vision is to lead the mental wellness revolution.

      Founder and CEO of Amare Global, Hiep Tran, began his entrepreneurial journey at 23 when he decided that medical school was not for him. He started working for a payments processing company.

      “For the next 5 years, I surrounded myself with the most successful people I knew, in order to grow and learn from them. Eventually that payments company I was working for was sold.  I reached an important crossroads: stay comfortable in my current position or build something for myself. In 2008, together with a partner, we invested all of our savings and co-founded a new company: Meritus Payment Solutions. We started from humble beginnings with five employees in 2008 and surged to over 100 employees by 2014 when we were acquired by Optimal Payments.  During those 6 years, I fell in love with helping people achieve their own life-changing success.  However, work always came first, family second, and personal health a distant third. I took my health for granted until the consequences became real.  Thankfully, I pulled through instead of succumbing to these challenges. I channeled the experience positively, to change my life and learn as much as I could about health and nutrition. The result was a newfound passion.”

      Thus, Amare Global was created. The company focuses on excellence and integrity throughout its product development, people development, and the customer experience. Ultimately, it strives to create products that inspire people to become better versions of themselves. Amare means "To Love" in Latin, and the company believes in promoting love for one's self, as well as a powerful connection with others. By empowering people to connect through its innovative products and platform, Amare Global aims to grow together and reach beyond its limits.`
            },
            {
                id: 'dignityhealth',
                name: 'Dignity Health',
                title: 'Dignity Health [Contract]',
                logoUrl: '../../assets/logos/dignityhealth.png',
                websiteUrl: 'http://www.dignityhealth.org',
                description: `Dignity Health provides quality, compassionate health care at more than 40 hospitals and care centers serving communities across California, Arizona, and Nevada every minute of every day. And while not everyone may live near a major medical facility, Dignity Health is making health care more accessible by bringing resources closer to where people live and work.

      In urban and rural communities alike, residents of all ages and backgrounds have access to primary care, preventive treatment, clinical support, chronic disease management, trauma services, and a host of medical and therapeutic specializations.`
            },
            {
                id: 'glidewell',
                name: 'Glidewell Dental',
                title: 'Glidewell Dental [Contract]',
                logoUrl: '../../assets/logos/glidewell.png',
                websiteUrl: 'http://www.glidewelldental.com',
                description: `Glidewell Dental's mission is to drive down restorative costs and expand patient access to affordable dentistry.  Glidewell Dental offers dental products and services in partnership with dentists, dental laboratories and manufacturers to promote and restore clinical health. One of the largest dental labs in the world and a medical device manufacturer, the company operates from four locations worldwide.

      Glidewell Dental is a dental industry leader thanks to its innovative dental technology, resourceful R&D department, and dedication to providing free clinical and technical education to promote dental industry growth. As new advancements continue to redefine dental technology, Glidewell Dental remains dedicated to improved CAD/CAM processes and development. The lab has made great strides in case-to-case consistency using this technology, which allows digital impressions to be sent electronically, reducing costs and improving turnaround time.`
            },
            {
                id: 'tegatechnologies',
                name: 'Tega Technologies',
                title: 'Tega Technologies',
                logoUrl: '../../assets/logos/tega-technologies.jpg',
                websiteUrl: 'https://tegatechnologies.com',
                description: `In 2018, Helm Technologies acquired Tega Technologies, which was founded in 2005.  Helm Technologies has rapidly evolved by embracing advanced technology and marketing expertise to form solutions for businesses and organizations that want to communicate more effectively with their customers and members.

      Helm leads the mobile marketing industry in innovation by automating on-demand marketing campaigns based on specific customer and member behaviors and interests for most industry verticals with specific emphasis on retail sales and automotive dealerships.`
            },
            {
                id: 'windtelecom',
                name: 'WIND telecom',
                title: 'WIND telecom',
                logoUrl: '../../assets/logos/wind-telecom.jpeg',
                websiteUrl: 'http://www.wind.com.do',
                description: `WIND TELECOM, S. A. is a telecommunications company in the Dominican Republic focused on delivering integrated Voice, Digital Television, and Internet services to residential customers, as well as specialized services to businesses, institutions, and other service providers, guaranteeing quality, cost, and delivery. Its voice and data network is fully IP-based and relies primarily on WiMax technology, supported by point-to-point microwave links and fiber-optic networks for transporting large volumes of information. Its video network is based on MMDS (Multichannel Multipoint Distribution System).

      Its purpose is to be the preferred provider of connectivity, information content, and entertainment solutions across the residential, business, and institutional markets, meeting customer expectations for quality, cost, and delivery while directly supporting education in the Dominican Republic.`
            },
            {
                id: 'integuer',
                name: 'Integuer',
                title: 'Integuer',
                logoUrl: '../../assets/logos/integuer_brand.png',
                websiteUrl: 'https://www.integuer.do',
                description: `Integuer S.R.L. was founded in 2010 as a venture by its current President, Eng. Martín José Santos Casado, upon his return to the country after an 18-year professional and personal journey across Europe. The company is positioned around "Software and solutions for business management," and Integuer has delivered a range of projects for prominent organizations in both the public and private sectors.`
            },
            {
                id: 'hbrgroup',
                name: 'HBR Group',
                title: 'HBR Group',
                logoUrl: '../../assets/logos/logo-site.png',
                websiteUrl: 'http://hbrgroup.com.do',
                description: `HBR Group is a company of continuously trained Dominican professionals specializing in consulting services and vertical or custom development for banks and financial-sector companies at both the national and international level.

      Its main strength is a highly specialized team with broad and deep expertise in developing banking products, one that adapts to the working style of its different clients. It is backed by a management team with vast banking experience whose entrepreneurial initiative has been dedicated exclusively to the financial and banking sector.

      Its value proposition adds an important edge for companies in this space: the use of new technologies and thorough up-front analysis, together with a deep understanding of the challenges banks face today.

      The company has particular strengths in Consulting, Project Management, and Vertical Application Development, made possible by a staff that is well suited to and aligned with its clients' needs.

      As a services company, HBR Group understands its clients' essential needs, having worked across a variety of banking institutions. This gives it practical experience built over time through the delivery of major projects in the sector its products and services are oriented toward.`
            },
            {
                id: 'hidden',
                name: 'HBR Group',
                title: 'HBR Group',
                logoUrl: '../../assets/logos/logo-site.png',
                websiteUrl: 'http://hbrgroup.com.do',
                description: `HBR Group is a company of continuously trained Dominican professionals specializing in consulting services and vertical or custom development for banks and financial-sector companies at both the national and international level.

      Its main strength is a highly specialized team with broad and deep expertise in developing banking products, one that adapts to the working style of its different clients. It is backed by a management team with vast banking experience whose entrepreneurial initiative has been dedicated exclusively to the financial and banking sector.

      Its value proposition adds an important edge for companies in this space: the use of new technologies and thorough up-front analysis, together with a deep understanding of the challenges banks face today.

      The company has particular strengths in Consulting, Project Management, and Vertical Application Development, made possible by a staff that is well suited to and aligned with its clients' needs.

      As a services company, HBR Group understands its clients' essential needs, having worked across a variety of banking institutions. This gives it practical experience built over time through the delivery of major projects in the sector its products and services are oriented toward.`
            },
            {
                id: 'hidden',
                name: 'HBR Group',
                title: 'HBR Group',
                logoUrl: '../../assets/logos/logo-site.png',
                websiteUrl: 'http://hbrgroup.com.do',
                description: `HBR Group is a company of continuously trained Dominican professionals specializing in consulting services and vertical or custom development for banks and financial-sector companies at both the national and international level.

      Its main strength is a highly specialized team with broad and deep expertise in developing banking products, one that adapts to the working style of its different clients. It is backed by a management team with vast banking experience whose entrepreneurial initiative has been dedicated exclusively to the financial and banking sector.

      Its value proposition adds an important edge for companies in this space: the use of new technologies and thorough up-front analysis, together with a deep understanding of the challenges banks face today.

      The company has particular strengths in Consulting, Project Management, and Vertical Application Development, made possible by a staff that is well suited to and aligned with its clients' needs.

      As a services company, HBR Group understands its clients' essential needs, having worked across a variety of banking institutions. This gives it practical experience built over time through the delivery of major projects in the sector its products and services are oriented toward.`
            },
        ];
    }
    getAll() {
        return this.clients;
    }
    getById(id) {
        return this.clients.find(client => client.id === id);
    }
    getByGroup(groupOf) {
        const groupClients = [];
        let groups = [];
        let count = 0;
        this.clients.forEach((client, index) => {
            count = index + 1;
            groups.push(client);
            if (count % 3 === 0) {
                groupClients.push({ clients: groups });
                groups = [];
            }
            if (count === this.clients.length && groups.length) {
                groupClients.push({ clients: groups });
            }
        });
        return groupClients;
    }
}
ClientService.ɵfac = function ClientService_Factory(t) { return new (t || ClientService)(); };
ClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClientService, factory: ClientService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/clients/clients-amareglobal/clients-amareglobal.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/clients/clients-amareglobal/clients-amareglobal.component.ts ***!
  \******************************************************************************/
/*! exports provided: ClientsAmareglobalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsAmareglobalComponent", function() { return ClientsAmareglobalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _client_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client-base */ "./src/app/clients/client-base.ts");
/* harmony import */ var _clients_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clients.constants */ "./src/app/clients/clients.constants.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client.service */ "./src/app/clients/client.service.ts");





class ClientsAmareglobalComponent extends _client_base__WEBPACK_IMPORTED_MODULE_1__["ClientBase"] {
    constructor(clientService) {
        super(clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_2__["AMARE_GLOBAL"]);
        this.clientService = clientService;
    }
}
ClientsAmareglobalComponent.ɵfac = function ClientsAmareglobalComponent_Factory(t) { return new (t || ClientsAmareglobalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"])); };
ClientsAmareglobalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsAmareglobalComponent, selectors: [["app-clients-amareglobal"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 60, vars: 5, consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", "rounded-circle", 3, "src", "alt"], ["href", "https://www.amare.com/", "target", "_blank"]], template: function ClientsAmareglobalComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Amare Global creates a holistic mental wellness platform that connects a purpose-driven community of passionate people. Its vision is to lead the mental wellness revolution. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Founder and CEO of Amare Global, Hiep Tran, began his entrepreneurial journey at 23 when he decided that medical school was not for him. He started working for a payments processing company. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Project#1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\t\u00A0Amare Global Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00A0Company Website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Role:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00A0Front-End Developer ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\t\u00A0BackOffice Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u00A0Communicate with third-party vendors to handle payments & orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Role:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u00A0 FullStack Developer ");
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy1hbWFyZWdsb2JhbC9jbGllbnRzLWFtYXJlZ2xvYmFsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsAmareglobalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clients-amareglobal',
                templateUrl: './clients-amareglobal.component.html',
                styleUrls: ['./clients-amareglobal.component.css']
            }]
    }], function () { return [{ type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/clients/clients-biorad/clients-biorad.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/clients/clients-biorad/clients-biorad.component.ts ***!
  \********************************************************************/
/*! exports provided: ClientsBioradComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsBioradComponent", function() { return ClientsBioradComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _client_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client-base */ "./src/app/clients/client-base.ts");
/* harmony import */ var _clients_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clients.constants */ "./src/app/clients/clients.constants.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client.service */ "./src/app/clients/client.service.ts");





class ClientsBioradComponent extends _client_base__WEBPACK_IMPORTED_MODULE_1__["ClientBase"] {
    constructor(clientService) {
        super(clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_2__["BIORAD"]);
        this.clientService = clientService;
    }
}
ClientsBioradComponent.ɵfac = function ClientsBioradComponent_Factory(t) { return new (t || ClientsBioradComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"])); };
ClientsBioradComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsBioradComponent, selectors: [["app-clients-biorad"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 33, vars: 5, consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", "rounded-circle", 3, "src", "alt"]], template: function ClientsBioradComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Since Bio-Rad was founded over six decades ago, it has continued to provide the healthcare industry with innovative and useful products that help life science researchers accelerate the discovery process and medical diagnostic labs obtain faster, better results. Throughout its existence, the company has built long-lasting customer relationships that help advance its research and development efforts in the introduction of new products and solutions. Today, Bio-Rad is a global leader, with a team of over 8,000 employees and a global network of operations that serves its life science research and clinical diagnostics customers, helping people live longer, healthier lives. ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " C#, Entity Framework, SQL Server, Visual Studio, Visual Studio Code, Azure, Angular, Typescript, D3.js ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy1iaW9yYWQvY2xpZW50cy1iaW9yYWQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsBioradComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clients-biorad',
                templateUrl: './clients-biorad.component.html',
                styleUrls: ['./clients-biorad.component.css']
            }]
    }], function () { return [{ type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/clients/clients-dignityhealth/clients-dignityhealth.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/clients/clients-dignityhealth/clients-dignityhealth.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ClientsDignityhealthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsDignityhealthComponent", function() { return ClientsDignityhealthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _client_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client-base */ "./src/app/clients/client-base.ts");
/* harmony import */ var _clients_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clients.constants */ "./src/app/clients/clients.constants.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client.service */ "./src/app/clients/client.service.ts");





class ClientsDignityhealthComponent extends _client_base__WEBPACK_IMPORTED_MODULE_1__["ClientBase"] {
    constructor(clientService) {
        super(clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_2__["DIGNITY_HEALTH"]);
        this.clientService = clientService;
    }
}
ClientsDignityhealthComponent.ɵfac = function ClientsDignityhealthComponent_Factory(t) { return new (t || ClientsDignityhealthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"])); };
ClientsDignityhealthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsDignityhealthComponent, selectors: [["app-clients-dignityhealth"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 31, vars: 5, consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", "rounded-circle", 3, "src", "alt"]], template: function ClientsDignityhealthComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Dignity Health provides quality, compassionate health care at more than 40 hospitals and care centers serving communities across California, Arizona, and Nevada every minute of every day. And while not everyone may live near a major medical facility, Dignity Health is making health care more accessible by bringing resources closer to where people live and work. ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Responsibilities:");
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy1kaWduaXR5aGVhbHRoL2NsaWVudHMtZGlnbml0eWhlYWx0aC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsDignityhealthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clients-dignityhealth',
                templateUrl: './clients-dignityhealth.component.html',
                styleUrls: ['./clients-dignityhealth.component.css']
            }]
    }], function () { return [{ type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/clients/clients-glidewell/clients-glidewell.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/clients/clients-glidewell/clients-glidewell.component.ts ***!
  \**************************************************************************/
/*! exports provided: ClientsGlidewellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsGlidewellComponent", function() { return ClientsGlidewellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _clients_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clients.constants */ "./src/app/clients/clients.constants.ts");
/* harmony import */ var _client_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client-base */ "./src/app/clients/client-base.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client.service */ "./src/app/clients/client.service.ts");





class ClientsGlidewellComponent extends _client_base__WEBPACK_IMPORTED_MODULE_2__["ClientBase"] {
    constructor(clientService) {
        super(clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_1__["GLIDEWELL"]);
        this.clientService = clientService;
    }
}
ClientsGlidewellComponent.ɵfac = function ClientsGlidewellComponent_Factory(t) { return new (t || ClientsGlidewellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"])); };
ClientsGlidewellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsGlidewellComponent, selectors: [["app-clients-glidewell"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 207, vars: 5, consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", "rounded-circle", 3, "src", "alt"], ["href", "http://cloudpoint.com/"]], template: function ClientsGlidewellComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " C#, Entity Framework, SQL Server, Visual Studio, WSDL file ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " C#, ASP.NET WEBFORMS, Visual Studio, TFS ");
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy1nbGlkZXdlbGwvY2xpZW50cy1nbGlkZXdlbGwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsGlidewellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clients-glidewell',
                templateUrl: './clients-glidewell.component.html',
                styleUrls: ['./clients-glidewell.component.css']
            }]
    }], function () { return [{ type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/clients/clients-hbrgroup/clients-hbrgroup.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/clients/clients-hbrgroup/clients-hbrgroup.component.ts ***!
  \************************************************************************/
/*! exports provided: ClientsHbrgroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsHbrgroupComponent", function() { return ClientsHbrgroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _clients_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clients.constants */ "./src/app/clients/clients.constants.ts");
/* harmony import */ var _client_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client-base */ "./src/app/clients/client-base.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client.service */ "./src/app/clients/client.service.ts");





class ClientsHbrgroupComponent extends _client_base__WEBPACK_IMPORTED_MODULE_2__["ClientBase"] {
    constructor(clientService) {
        super(clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_1__["HBR_GROUP"]);
        this.clientService = clientService;
    }
}
ClientsHbrgroupComponent.ɵfac = function ClientsHbrgroupComponent_Factory(t) { return new (t || ClientsHbrgroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"])); };
ClientsHbrgroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsHbrgroupComponent, selectors: [["app-clients-hbrgroup"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 43, vars: 5, consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", "rounded-circle", 3, "src", "alt"]], template: function ClientsHbrgroupComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " HBR Group is a company of continuously trained Dominican professionals specializing in consulting services and vertical or custom development for banks and financial-sector companies at both the national and international level. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Its main strength is a highly specialized team with broad and deep expertise in developing banking products, one that adapts to the working style of its different clients. It is backed by a management team with vast banking experience whose entrepreneurial initiative has been dedicated exclusively to the financial and banking sector.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Its value proposition adds an important edge for companies in this space: the use of new technologies and thorough up-front analysis, together with a deep understanding of the challenges banks face today.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " The company has particular strengths in Consulting, Project Management, and Vertical Application Development, made possible by a staff that is well suited to and aligned with its clients' needs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " As a services company, HBR Group understands its clients' essential needs, having worked across a variety of banking institutions. This gives it practical experience built over time through the delivery of major projects in the sector its products and services are oriented toward. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Project:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\t\u00A0Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u00A0This is a collection of several applications I was maintaining at the time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Role:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u00A0FullStack Developer ");
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy1oYnJncm91cC9jbGllbnRzLWhicmdyb3VwLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsHbrgroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clients-hbrgroup',
                templateUrl: './clients-hbrgroup.component.html',
                styleUrls: ['./clients-hbrgroup.component.css']
            }]
    }], function () { return [{ type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/clients/clients-integuer/clients-integuer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/clients/clients-integuer/clients-integuer.component.ts ***!
  \************************************************************************/
/*! exports provided: ClientsInteguerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsInteguerComponent", function() { return ClientsInteguerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _client_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client-base */ "./src/app/clients/client-base.ts");
/* harmony import */ var _clients_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clients.constants */ "./src/app/clients/clients.constants.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client.service */ "./src/app/clients/client.service.ts");





class ClientsInteguerComponent extends _client_base__WEBPACK_IMPORTED_MODULE_1__["ClientBase"] {
    constructor(clientService) {
        super(clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_2__["INTEGUER"]);
        this.clientService = clientService;
    }
}
ClientsInteguerComponent.ɵfac = function ClientsInteguerComponent_Factory(t) { return new (t || ClientsInteguerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"])); };
ClientsInteguerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsInteguerComponent, selectors: [["app-clients-integuer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 37, vars: 5, consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", "rounded-circle", 3, "src", "alt"]], template: function ClientsInteguerComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Integuer S.R.L. was founded in 2010 as a venture by its current President, Eng. Mart\u00EDn Jos\u00E9 Santos Casado, upon his return to the country after an 18-year professional and personal journey across Europe. The company is positioned around \"Software and solutions for business management,\" and Integuer has delivered a range of projects for prominent organizations in both the public and private sectors. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Project:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\t\u00A0E PLAN RD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00A0Application that helps Government institutions to forecast the budget needed for the next four years.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Role:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00A0FullStack Developer ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " ASP.NET MVC, Linq to Entity, C#, HTML, C#, Telerik, CSS, Visual Studio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy1pbnRlZ3Vlci9jbGllbnRzLWludGVndWVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsInteguerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clients-integuer',
                templateUrl: './clients-integuer.component.html',
                styleUrls: ['./clients-integuer.component.css']
            }]
    }], function () { return [{ type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/clients/clients-list/clients-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/clients/clients-list/clients-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ClientsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsListComponent", function() { return ClientsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_clients_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/clients/client.service */ "./src/app/clients/client.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shorten_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shorten.pipe */ "./src/app/shared/shorten.pipe.ts");






function ClientsListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "shorten");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const client_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("client-card--hidden", client_r2.id === "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", client_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", client_r2.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", client_r2.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", client_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", client_r2.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](client_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 11, client_r2.description, 120));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", client_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" My work at ", client_r2.name, " ");
} }
class ClientsListComponent {
    constructor(clientService) {
        this.clientService = clientService;
        this.allClients = [];
    }
    ngOnInit() {
        this.allClients = this.clientService.getAll();
    }
}
ClientsListComponent.ɵfac = function ClientsListComponent_Factory(t) { return new (t || ClientsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_clients_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"])); };
ClientsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsListComponent, selectors: [["app-clients-list"]], decls: 6, vars: 1, consts: [["id", "work", 1, "section"], [1, "section__inner"], [1, "section-title"], [1, "clients-grid"], ["class", "client-card", 3, "id", "client-card--hidden", 4, "ngFor", "ngForOf"], [1, "client-card", 3, "id"], [1, "client-card__logo-wrap"], ["target", "_blank", "rel", "noopener", 3, "href"], [1, "client-card__logo", 3, "src", "alt"], [1, "client-card__body"], [1, "client-card__title"], [1, "client-card__desc"], [1, "client-card__link", 3, "routerLink"], [1, "fas", "fa-arrow-right"]], template: function ClientsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Work Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ClientsListComponent_div_5_Template, 14, 14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allClients);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_shared_shorten_pipe__WEBPACK_IMPORTED_MODULE_4__["ShortenPipe"]], styles: [".clients-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));\n  gap: 1.25rem;\n}\n\n.client-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;\n}\n\n.client-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n  box-shadow: 0 0 24px var(--accent-glow);\n  transform: translateY(-2px);\n}\n\n.client-card--hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.client-card__logo-wrap[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  min-height: 120px;\n}\n\n.client-card__logo[_ngcontent-%COMP%] {\n  max-height: 64px;\n  max-width: 160px;\n  width: auto;\n  border-radius: 6px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.client-card__body[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  gap: 0.5rem;\n}\n\n.client-card__title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  line-height: 1.3;\n}\n\n.client-card__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  transition: color 0.2s;\n}\n\n.client-card__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--accent);\n}\n\n.client-card__desc[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  line-height: 1.55;\n  flex: 1;\n}\n\n.client-card__link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: var(--accent);\n  margin-top: auto;\n  padding-top: 0.5rem;\n  border-top: 1px solid var(--border);\n  transition: gap 0.2s, color 0.2s;\n}\n\n.client-card__link[_ngcontent-%COMP%]:hover {\n  gap: 0.6rem;\n  color: var(--accent-hover);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50cy9jbGllbnRzLWxpc3QvY2xpZW50cy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsNERBQTREO0VBQzVELFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhEQUE4RDtBQUNoRTs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQix1Q0FBdUM7RUFDdkMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHNDQUFzQztFQUN0QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFtQjtLQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixPQUFPO0VBQ1AsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsT0FBTztBQUNUOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztFQUNYLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy1saXN0L2NsaWVudHMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaWVudHMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI5MHB4LCAxZnIpKTtcbiAgZ2FwOiAxLjI1cmVtO1xufVxuXG4uY2xpZW50LWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMsIGJveC1zaGFkb3cgMC4ycywgdHJhbnNmb3JtIDAuMnM7XG59XG5cbi5jbGllbnQtY2FyZDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgYm94LXNoYWRvdzogMCAwIDI0cHggdmFyKC0tYWNjZW50LWdsb3cpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbi5jbGllbnQtY2FyZC0taGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNsaWVudC1jYXJkX19sb2dvLXdyYXAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1lbGV2YXRlZCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMS41cmVtO1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbn1cblxuLmNsaWVudC1jYXJkX19sb2dvIHtcbiAgbWF4LWhlaWdodDogNjRweDtcbiAgbWF4LXdpZHRoOiAxNjBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmNsaWVudC1jYXJkX19ib2R5IHtcbiAgcGFkZGluZzogMS4yNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5jbGllbnQtY2FyZF9fdGl0bGUge1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG5cbi5jbGllbnQtY2FyZF9fdGl0bGUgYSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xufVxuXG4uY2xpZW50LWNhcmRfX3RpdGxlIGE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cblxuLmNsaWVudC1jYXJkX19kZXNjIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBsaW5lLWhlaWdodDogMS41NTtcbiAgZmxleDogMTtcbn1cblxuLmNsaWVudC1jYXJkX19saW5rIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC40cmVtO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgdHJhbnNpdGlvbjogZ2FwIDAuMnMsIGNvbG9yIDAuMnM7XG59XG5cbi5jbGllbnQtY2FyZF9fbGluazpob3ZlciB7XG4gIGdhcDogMC42cmVtO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWhvdmVyKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clients-list',
                templateUrl: './clients-list.component.html',
                styleUrls: ['./clients-list.component.css']
            }]
    }], function () { return [{ type: src_app_clients_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/clients/clients-optioncare/clients-optioncare.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/clients/clients-optioncare/clients-optioncare.component.ts ***!
  \****************************************************************************/
/*! exports provided: ClientsOptioncareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsOptioncareComponent", function() { return ClientsOptioncareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _clients_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clients.constants */ "./src/app/clients/clients.constants.ts");
/* harmony import */ var _client_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client-base */ "./src/app/clients/client-base.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client.service */ "./src/app/clients/client.service.ts");





class ClientsOptioncareComponent extends _client_base__WEBPACK_IMPORTED_MODULE_2__["ClientBase"] {
    constructor(clientService) {
        super(clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_1__["OPTION_CARE"]);
        this.clientService = clientService;
    }
}
ClientsOptioncareComponent.ɵfac = function ClientsOptioncareComponent_Factory(t) { return new (t || ClientsOptioncareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"])); };
ClientsOptioncareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsOptioncareComponent, selectors: [["app-clients-optioncare"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 48, vars: 5, consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", 3, "src", "alt"], [1, "text-info"]], template: function ClientsOptioncareComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Option Care Health, Inc. is the largest independent home and alternate site infusion services provider in the United States. With over 6,000 teammates, including 2,900 clinicians, the company works compassionately to elevate standards of care for patients with acute and chronic conditions across all 50 states. ");
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy1vcHRpb25jYXJlL2NsaWVudHMtb3B0aW9uY2FyZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsOptioncareComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clients-optioncare',
                templateUrl: './clients-optioncare.component.html',
                styleUrls: ['./clients-optioncare.component.css']
            }]
    }], function () { return [{ type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/clients/clients-pwc/clients-pwc.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/clients/clients-pwc/clients-pwc.component.ts ***!
  \**************************************************************/
/*! exports provided: ClientsPwcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsPwcComponent", function() { return ClientsPwcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _clients_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clients.constants */ "./src/app/clients/clients.constants.ts");
/* harmony import */ var _client_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client-base */ "./src/app/clients/client-base.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client.service */ "./src/app/clients/client.service.ts");





class ClientsPwcComponent extends _client_base__WEBPACK_IMPORTED_MODULE_2__["ClientBase"] {
    constructor(clientService) {
        super(clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_1__["PWC"]);
        this.clientService = clientService;
    }
}
ClientsPwcComponent.ɵfac = function ClientsPwcComponent_Factory(t) { return new (t || ClientsPwcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"])); };
ClientsPwcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsPwcComponent, selectors: [["app-clients-pwc"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 35, vars: 5, consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", 3, "src", "alt"]], template: function ClientsPwcComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " PwC helps organizations and individuals create the value they are looking for. It is a network of firms in 157 countries with more than 276,000 people. PwC refers to the PwC network and/or one or more of its member firms, each of which is a separate legal entity. ");
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy1wd2MvY2xpZW50cy1wd2MuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsPwcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clients-pwc',
                templateUrl: './clients-pwc.component.html',
                styleUrls: ['./clients-pwc.component.css']
            }]
    }], function () { return [{ type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/clients/clients-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/clients/clients-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ClientsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsRoutingModule", function() { return ClientsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _clients_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients.component */ "./src/app/clients/clients.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _clients_list_clients_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clients-list/clients-list.component */ "./src/app/clients/clients-list/clients-list.component.ts");
/* harmony import */ var _clients_verys_clients_verys_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clients-verys/clients-verys.component */ "./src/app/clients/clients-verys/clients-verys.component.ts");
/* harmony import */ var _clients_vertafore_clients_vertafore_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clients-vertafore/clients-vertafore.component */ "./src/app/clients/clients-vertafore/clients-vertafore.component.ts");
/* harmony import */ var _clients_pwc_clients_pwc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clients-pwc/clients-pwc.component */ "./src/app/clients/clients-pwc/clients-pwc.component.ts");
/* harmony import */ var _clients_senegence_clients_senegence_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clients-senegence/clients-senegence.component */ "./src/app/clients/clients-senegence/clients-senegence.component.ts");
/* harmony import */ var _clients_optioncare_clients_optioncare_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clients-optioncare/clients-optioncare.component */ "./src/app/clients/clients-optioncare/clients-optioncare.component.ts");
/* harmony import */ var _clients_technossus_clients_technossus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clients-technossus/clients-technossus.component */ "./src/app/clients/clients-technossus/clients-technossus.component.ts");
/* harmony import */ var _clients_glidewell_clients_glidewell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clients-glidewell/clients-glidewell.component */ "./src/app/clients/clients-glidewell/clients-glidewell.component.ts");
/* harmony import */ var _clients_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./clients.constants */ "./src/app/clients/clients.constants.ts");
/* harmony import */ var _clients_biorad_clients_biorad_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clients-biorad/clients-biorad.component */ "./src/app/clients/clients-biorad/clients-biorad.component.ts");
/* harmony import */ var _clients_dignityhealth_clients_dignityhealth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clients-dignityhealth/clients-dignityhealth.component */ "./src/app/clients/clients-dignityhealth/clients-dignityhealth.component.ts");
/* harmony import */ var _clients_amareglobal_clients_amareglobal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./clients-amareglobal/clients-amareglobal.component */ "./src/app/clients/clients-amareglobal/clients-amareglobal.component.ts");
/* harmony import */ var _clients_tegatechnologies_clients_tegatechnologies_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./clients-tegatechnologies/clients-tegatechnologies.component */ "./src/app/clients/clients-tegatechnologies/clients-tegatechnologies.component.ts");
/* harmony import */ var _clients_windtelecom_clients_windtelecom_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./clients-windtelecom/clients-windtelecom.component */ "./src/app/clients/clients-windtelecom/clients-windtelecom.component.ts");
/* harmony import */ var _clients_integuer_clients_integuer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./clients-integuer/clients-integuer.component */ "./src/app/clients/clients-integuer/clients-integuer.component.ts");
/* harmony import */ var _clients_hbrgroup_clients_hbrgroup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./clients-hbrgroup/clients-hbrgroup.component */ "./src/app/clients/clients-hbrgroup/clients-hbrgroup.component.ts");
/* harmony import */ var _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./under-construction/under-construction.component */ "./src/app/clients/under-construction/under-construction.component.ts");






















class ClientsRoutingModule {
}
ClientsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ClientsRoutingModule });
ClientsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ClientsRoutingModule_Factory(t) { return new (t || ClientsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: 'clients', component: _clients_component__WEBPACK_IMPORTED_MODULE_1__["ClientsComponent"], children: [
                        { path: '', component: _clients_list_clients_list_component__WEBPACK_IMPORTED_MODULE_3__["ClientsListComponent"] },
                        { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["VERYS"], component: _clients_verys_clients_verys_component__WEBPACK_IMPORTED_MODULE_4__["ClientsVerysComponent"] },
                        { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["VERTAFORE"], component: _clients_vertafore_clients_vertafore_component__WEBPACK_IMPORTED_MODULE_5__["ClientsVertaforeComponent"] },
                        { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["PWC"], component: _clients_pwc_clients_pwc_component__WEBPACK_IMPORTED_MODULE_6__["ClientsPwcComponent"] },
                        { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["OPTION_CARE"], component: _clients_optioncare_clients_optioncare_component__WEBPACK_IMPORTED_MODULE_8__["ClientsOptioncareComponent"] },
                        { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["SENEGENCE"], component: _clients_senegence_clients_senegence_component__WEBPACK_IMPORTED_MODULE_7__["ClientsSenegenceComponent"] },
                        { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["TECHNOSSUS"], component: _clients_technossus_clients_technossus_component__WEBPACK_IMPORTED_MODULE_9__["ClientsTechnossusComponent"] },
                        { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["GLIDEWELL"], component: _clients_glidewell_clients_glidewell_component__WEBPACK_IMPORTED_MODULE_10__["ClientsGlidewellComponent"] },
                        { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["BIORAD"], component: _clients_biorad_clients_biorad_component__WEBPACK_IMPORTED_MODULE_12__["ClientsBioradComponent"] },
                        { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["DIGNITY_HEALTH"], component: _clients_dignityhealth_clients_dignityhealth_component__WEBPACK_IMPORTED_MODULE_13__["ClientsDignityhealthComponent"] },
                        { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["AMARE_GLOBAL"], component: _clients_amareglobal_clients_amareglobal_component__WEBPACK_IMPORTED_MODULE_14__["ClientsAmareglobalComponent"] },
                        { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["TEGA_TECHNOLOGIES"], component: _clients_tegatechnologies_clients_tegatechnologies_component__WEBPACK_IMPORTED_MODULE_15__["ClientsTegatechnologiesComponent"] },
                        { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["WIND_TELECOM"], component: _clients_windtelecom_clients_windtelecom_component__WEBPACK_IMPORTED_MODULE_16__["ClientsWindtelecomComponent"] },
                        { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["INTEGUER"], component: _clients_integuer_clients_integuer_component__WEBPACK_IMPORTED_MODULE_17__["ClientsInteguerComponent"] },
                        { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["HBR_GROUP"], component: _clients_hbrgroup_clients_hbrgroup_component__WEBPACK_IMPORTED_MODULE_18__["ClientsHbrgroupComponent"] },
                        { path: '**', component: _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_19__["UnderConstructionComponent"] }
                    ],
                }
            ])],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClientsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        {
                            path: 'clients', component: _clients_component__WEBPACK_IMPORTED_MODULE_1__["ClientsComponent"], children: [
                                { path: '', component: _clients_list_clients_list_component__WEBPACK_IMPORTED_MODULE_3__["ClientsListComponent"] },
                                { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["VERYS"], component: _clients_verys_clients_verys_component__WEBPACK_IMPORTED_MODULE_4__["ClientsVerysComponent"] },
                                { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["VERTAFORE"], component: _clients_vertafore_clients_vertafore_component__WEBPACK_IMPORTED_MODULE_5__["ClientsVertaforeComponent"] },
                                { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["PWC"], component: _clients_pwc_clients_pwc_component__WEBPACK_IMPORTED_MODULE_6__["ClientsPwcComponent"] },
                                { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["OPTION_CARE"], component: _clients_optioncare_clients_optioncare_component__WEBPACK_IMPORTED_MODULE_8__["ClientsOptioncareComponent"] },
                                { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["SENEGENCE"], component: _clients_senegence_clients_senegence_component__WEBPACK_IMPORTED_MODULE_7__["ClientsSenegenceComponent"] },
                                { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["TECHNOSSUS"], component: _clients_technossus_clients_technossus_component__WEBPACK_IMPORTED_MODULE_9__["ClientsTechnossusComponent"] },
                                { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["GLIDEWELL"], component: _clients_glidewell_clients_glidewell_component__WEBPACK_IMPORTED_MODULE_10__["ClientsGlidewellComponent"] },
                                { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["BIORAD"], component: _clients_biorad_clients_biorad_component__WEBPACK_IMPORTED_MODULE_12__["ClientsBioradComponent"] },
                                { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["DIGNITY_HEALTH"], component: _clients_dignityhealth_clients_dignityhealth_component__WEBPACK_IMPORTED_MODULE_13__["ClientsDignityhealthComponent"] },
                                { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["AMARE_GLOBAL"], component: _clients_amareglobal_clients_amareglobal_component__WEBPACK_IMPORTED_MODULE_14__["ClientsAmareglobalComponent"] },
                                { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["TEGA_TECHNOLOGIES"], component: _clients_tegatechnologies_clients_tegatechnologies_component__WEBPACK_IMPORTED_MODULE_15__["ClientsTegatechnologiesComponent"] },
                                { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["WIND_TELECOM"], component: _clients_windtelecom_clients_windtelecom_component__WEBPACK_IMPORTED_MODULE_16__["ClientsWindtelecomComponent"] },
                                { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["INTEGUER"], component: _clients_integuer_clients_integuer_component__WEBPACK_IMPORTED_MODULE_17__["ClientsInteguerComponent"] },
                                { path: _clients_constants__WEBPACK_IMPORTED_MODULE_11__["HBR_GROUP"], component: _clients_hbrgroup_clients_hbrgroup_component__WEBPACK_IMPORTED_MODULE_18__["ClientsHbrgroupComponent"] },
                                { path: '**', component: _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_19__["UnderConstructionComponent"] }
                            ],
                        }
                    ])],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/clients/clients-senegence/clients-senegence.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/clients/clients-senegence/clients-senegence.component.ts ***!
  \**************************************************************************/
/*! exports provided: ClientsSenegenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsSenegenceComponent", function() { return ClientsSenegenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _clients_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clients.constants */ "./src/app/clients/clients.constants.ts");
/* harmony import */ var _client_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client-base */ "./src/app/clients/client-base.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client.service */ "./src/app/clients/client.service.ts");





class ClientsSenegenceComponent extends _client_base__WEBPACK_IMPORTED_MODULE_2__["ClientBase"] {
    constructor(clientService) {
        super(clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_1__["SENEGENCE"]);
        this.clientService = clientService;
    }
}
ClientsSenegenceComponent.ɵfac = function ClientsSenegenceComponent_Factory(t) { return new (t || ClientsSenegenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"])); };
ClientsSenegenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsSenegenceComponent, selectors: [["app-clients-senegence"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 59, vars: 5, consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", "rounded-circle", 3, "src", "alt"]], template: function ClientsSenegenceComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Founded in 1999 by Joni Rogers-Kante, SeneGence International sprung onto the direct-selling scene with its premier product, LipSense. This long-lasting lip color was a big hit among busy, hard-working women on the go. Years later, its product line and global reach continue to expand as the company empowers individuals to become successful business owners. SeneGence started with a team of one Distributor and is now a proud family of hundreds of thousands. ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " IdentityServer, C# & Visual Studio ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Angular 4, C#, Typescript, CSS, Html, Visual Studio Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy1zZW5lZ2VuY2UvY2xpZW50cy1zZW5lZ2VuY2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsSenegenceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clients-senegence',
                templateUrl: './clients-senegence.component.html',
                styleUrls: ['./clients-senegence.component.css']
            }]
    }], function () { return [{ type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/clients/clients-technossus/clients-technossus.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/clients/clients-technossus/clients-technossus.component.ts ***!
  \****************************************************************************/
/*! exports provided: ClientsTechnossusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsTechnossusComponent", function() { return ClientsTechnossusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _clients_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clients.constants */ "./src/app/clients/clients.constants.ts");
/* harmony import */ var _client_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client-base */ "./src/app/clients/client-base.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client.service */ "./src/app/clients/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class ClientsTechnossusComponent extends _client_base__WEBPACK_IMPORTED_MODULE_2__["ClientBase"] {
    constructor(clientService) {
        super(clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_1__["TECHNOSSUS"]);
        this.clientService = clientService;
    }
}
ClientsTechnossusComponent.ɵfac = function ClientsTechnossusComponent_Factory(t) { return new (t || ClientsTechnossusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"])); };
ClientsTechnossusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsTechnossusComponent, selectors: [["app-clients-technossus"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 27, vars: 6, consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "rounded-circle", 3, "src", "alt"], ["routerLink", "../glidewell"], ["routerLink", "../biorad"], ["routerLink", "../dignityhealth"], ["routerLink", "../amareglobal"]], template: function ClientsTechnossusComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Technossus enables business acceleration and transformation for companies in the Healthcare, Financial Services, and Bio-Sciences Industries; through a range of solutions around Outcome-based Roadmaps, Cloud Strategy & Transformation, and Technology Platform Optimization. ");
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
    } if (rf & 2) {
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy10ZWNobm9zc3VzL2NsaWVudHMtdGVjaG5vc3N1cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsTechnossusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clients-technossus',
                templateUrl: './clients-technossus.component.html',
                styleUrls: ['./clients-technossus.component.css']
            }]
    }], function () { return [{ type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/clients/clients-tegatechnologies/clients-tegatechnologies.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/clients/clients-tegatechnologies/clients-tegatechnologies.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ClientsTegatechnologiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsTegatechnologiesComponent", function() { return ClientsTegatechnologiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _clients_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clients.constants */ "./src/app/clients/clients.constants.ts");
/* harmony import */ var _client_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client-base */ "./src/app/clients/client-base.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client.service */ "./src/app/clients/client.service.ts");





class ClientsTegatechnologiesComponent extends _client_base__WEBPACK_IMPORTED_MODULE_2__["ClientBase"] {
    constructor(clientService) {
        super(clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_1__["TEGA_TECHNOLOGIES"]);
        this.clientService = clientService;
    }
}
ClientsTegatechnologiesComponent.ɵfac = function ClientsTegatechnologiesComponent_Factory(t) { return new (t || ClientsTegatechnologiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"])); };
ClientsTegatechnologiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsTegatechnologiesComponent, selectors: [["app-clients-tegatechnologies"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 64, vars: 5, consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", "rounded-circle", 3, "src", "alt"], ["href", "https://www.chatterspot.com", "target", "_blank"]], template: function ClientsTegatechnologiesComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\t\u00A0Chatterspot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Project Url:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\t\u00A0Chatterspot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u00A0Chatterspot\u2122 is a fully automated end-2-end digital advertising solution.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Role:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u00A0FullStack Developer ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " ASP.NET WebForm, CSS, Html, Javascript, C#, Visual Studio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Project:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\t\u00A0NextDeal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Role:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u00A0 FullStack Developer ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " ASP.NET WebForm, CSS, Html, Javascript, C#, Visual Studio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy10ZWdhdGVjaG5vbG9naWVzL2NsaWVudHMtdGVnYXRlY2hub2xvZ2llcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsTegatechnologiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clients-tegatechnologies',
                templateUrl: './clients-tegatechnologies.component.html',
                styleUrls: ['./clients-tegatechnologies.component.css']
            }]
    }], function () { return [{ type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/clients/clients-vertafore/clients-vertafore.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/clients/clients-vertafore/clients-vertafore.component.ts ***!
  \**************************************************************************/
/*! exports provided: ClientsVertaforeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsVertaforeComponent", function() { return ClientsVertaforeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _clients_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clients.constants */ "./src/app/clients/clients.constants.ts");
/* harmony import */ var _client_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client-base */ "./src/app/clients/client-base.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client.service */ "./src/app/clients/client.service.ts");





class ClientsVertaforeComponent extends _client_base__WEBPACK_IMPORTED_MODULE_2__["ClientBase"] {
    constructor(clientService) {
        super(clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_1__["VERTAFORE"]);
        this.clientService = clientService;
    }
}
ClientsVertaforeComponent.ɵfac = function ClientsVertaforeComponent_Factory(t) { return new (t || ClientsVertaforeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"])); };
ClientsVertaforeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsVertaforeComponent, selectors: [["app-clients-vertafore"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 38, vars: 5, consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", 3, "src", "alt"]], template: function ClientsVertaforeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Vertafore is the leader in creating modern insurance technology. Every day, thousands of insurance agencies, carriers, and states use a breadth of Vertafore solutions to grow their businesses, process claims for their customers, and much more. ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Responsibilities:");
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy12ZXJ0YWZvcmUvY2xpZW50cy12ZXJ0YWZvcmUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsVertaforeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clients-vertafore',
                templateUrl: './clients-vertafore.component.html',
                styleUrls: ['./clients-vertafore.component.css']
            }]
    }], function () { return [{ type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/clients/clients-verys/clients-verys.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/clients/clients-verys/clients-verys.component.ts ***!
  \******************************************************************/
/*! exports provided: ClientsVerysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsVerysComponent", function() { return ClientsVerysComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _clients_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clients.constants */ "./src/app/clients/clients.constants.ts");
/* harmony import */ var _client_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client-base */ "./src/app/clients/client-base.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client.service */ "./src/app/clients/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class ClientsVerysComponent extends _client_base__WEBPACK_IMPORTED_MODULE_2__["ClientBase"] {
    constructor(clientService) {
        super(clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_1__["VERYS"]);
        this.clientService = clientService;
    }
}
ClientsVerysComponent.ɵfac = function ClientsVerysComponent_Factory(t) { return new (t || ClientsVerysComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"])); };
ClientsVerysComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsVerysComponent, selectors: [["app-clients-verys"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 33, vars: 6, consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "rounded-circle", 3, "src", "alt"], ["routerLink", "../oc"], ["routerLink", "../pwc"], ["routerLink", "../vertafore"]], template: function ClientsVerysComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "I oversee the account and run standup meetings on behalf of my manager, and report any blockers that could affect the relationship with our clients so they can be fixed ASAP.");
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.client.name, "'s specialties include Software Development, Web Development, Mobile Development, Full Stack, UX Design, Cloud Solutions, Native iOS, Native Android, Consulting, and QA. ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy12ZXJ5cy9jbGllbnRzLXZlcnlzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsVerysComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clients-verys',
                templateUrl: './clients-verys.component.html',
                styleUrls: ['./clients-verys.component.css']
            }]
    }], function () { return [{ type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/clients/clients-windtelecom/clients-windtelecom.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/clients/clients-windtelecom/clients-windtelecom.component.ts ***!
  \******************************************************************************/
/*! exports provided: ClientsWindtelecomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsWindtelecomComponent", function() { return ClientsWindtelecomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _client_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client-base */ "./src/app/clients/client-base.ts");
/* harmony import */ var _clients_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clients.constants */ "./src/app/clients/clients.constants.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client.service */ "./src/app/clients/client.service.ts");





class ClientsWindtelecomComponent extends _client_base__WEBPACK_IMPORTED_MODULE_1__["ClientBase"] {
    constructor(clientService) {
        super(clientService, _clients_constants__WEBPACK_IMPORTED_MODULE_2__["WIND_TELECOM"]);
        this.clientService = clientService;
    }
}
ClientsWindtelecomComponent.ɵfac = function ClientsWindtelecomComponent_Factory(t) { return new (t || ClientsWindtelecomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"])); };
ClientsWindtelecomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsWindtelecomComponent, selectors: [["app-clients-windtelecom"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 93, vars: 5, consts: [[1, "container"], [1, "logon-container", "text-center"], ["target", "_blank", 3, "href"], [1, "client-logo", "rounded-circle", 3, "src", "alt"]], template: function ClientsWindtelecomComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " WIND TELECOM, S. A. is a telecommunications company in the Dominican Republic focused on delivering integrated Voice, Digital Television, and Internet services to residential customers, as well as specialized services to businesses, institutions, and other service providers, guaranteeing quality, cost, and delivery. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Its voice and data network is fully IP-based and relies primarily on WiMax technology, supported by point-to-point microwave links and fiber-optic networks for transporting large volumes of information. Its video network is based on MMDS (Multichannel Multipoint Distribution System). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Its purpose is to be the preferred provider of connectivity, information content, and entertainment solutions across the residential, business, and institutional markets, meeting customer expectations for quality, cost, and delivery while directly supporting education in the Dominican Republic. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Project:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u00A0Field Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u00A0Allows you to track down a technical person and orders completed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Role:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u00A0FullStack Developer ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u00A0Content Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u00A0Facade Application that authorize access to a service provider.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Role:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u00A0 FullStack Developer ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " \u00A0Customer Relationship Management (CRM)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u00A0CRM application on an internal Web platform made with ASP.NET MVC, covering major business processes for customer management and billing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Role:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u00A0 FullStack Developer ");
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.client.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.client.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.client.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy13aW5kdGVsZWNvbS9jbGllbnRzLXdpbmR0ZWxlY29tLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsWindtelecomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clients-windtelecom',
                templateUrl: './clients-windtelecom.component.html',
                styleUrls: ['./clients-windtelecom.component.css']
            }]
    }], function () { return [{ type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/clients/clients.component.ts":
/*!**********************************************!*\
  !*** ./src/app/clients/clients.component.ts ***!
  \**********************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ClientsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ClientsComponent.ɵfac = function ClientsComponent_Factory(t) { return new (t || ClientsComponent)(); };
ClientsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsComponent, selectors: [["app-clients"]], decls: 1, vars: 0, template: function ClientsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clients',
                templateUrl: './clients.component.html',
                styleUrls: ['./clients.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/clients/clients.constants.ts":
/*!**********************************************!*\
  !*** ./src/app/clients/clients.constants.ts ***!
  \**********************************************/
/*! exports provided: VERYS, VERTAFORE, PWC, OPTION_CARE, SENEGENCE, TECHNOSSUS, GLIDEWELL, BIORAD, DIGNITY_HEALTH, AMARE_GLOBAL, TEGA_TECHNOLOGIES, WIND_TELECOM, INTEGUER, HBR_GROUP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERYS", function() { return VERYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERTAFORE", function() { return VERTAFORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PWC", function() { return PWC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTION_CARE", function() { return OPTION_CARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SENEGENCE", function() { return SENEGENCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TECHNOSSUS", function() { return TECHNOSSUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLIDEWELL", function() { return GLIDEWELL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BIORAD", function() { return BIORAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIGNITY_HEALTH", function() { return DIGNITY_HEALTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMARE_GLOBAL", function() { return AMARE_GLOBAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEGA_TECHNOLOGIES", function() { return TEGA_TECHNOLOGIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIND_TELECOM", function() { return WIND_TELECOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTEGUER", function() { return INTEGUER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HBR_GROUP", function() { return HBR_GROUP; });
const VERYS = 'verys';
const VERTAFORE = 'vertafore';
const PWC = 'pwc';
const OPTION_CARE = 'oc';
const SENEGENCE = 'senegence';
const TECHNOSSUS = 'technossus';
const GLIDEWELL = 'glidewell';
const BIORAD = 'biorad';
const DIGNITY_HEALTH = 'dignityhealth';
const AMARE_GLOBAL = 'amareglobal';
const TEGA_TECHNOLOGIES = 'tegatechnologies';
const WIND_TELECOM = 'windtelecom';
const INTEGUER = 'integuer';
const HBR_GROUP = 'hbrgroup';


/***/ }),

/***/ "./src/app/clients/clients.module.ts":
/*!*******************************************!*\
  !*** ./src/app/clients/clients.module.ts ***!
  \*******************************************/
/*! exports provided: ClientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsModule", function() { return ClientsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _clients_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients-routing.module */ "./src/app/clients/clients-routing.module.ts");
/* harmony import */ var _clients_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clients.component */ "./src/app/clients/clients.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _clients_list_clients_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clients-list/clients-list.component */ "./src/app/clients/clients-list/clients-list.component.ts");
/* harmony import */ var _clients_verys_clients_verys_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clients-verys/clients-verys.component */ "./src/app/clients/clients-verys/clients-verys.component.ts");
/* harmony import */ var _clients_vertafore_clients_vertafore_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clients-vertafore/clients-vertafore.component */ "./src/app/clients/clients-vertafore/clients-vertafore.component.ts");
/* harmony import */ var _clients_pwc_clients_pwc_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clients-pwc/clients-pwc.component */ "./src/app/clients/clients-pwc/clients-pwc.component.ts");
/* harmony import */ var _clients_senegence_clients_senegence_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clients-senegence/clients-senegence.component */ "./src/app/clients/clients-senegence/clients-senegence.component.ts");
/* harmony import */ var _clients_optioncare_clients_optioncare_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clients-optioncare/clients-optioncare.component */ "./src/app/clients/clients-optioncare/clients-optioncare.component.ts");
/* harmony import */ var _clients_technossus_clients_technossus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clients-technossus/clients-technossus.component */ "./src/app/clients/clients-technossus/clients-technossus.component.ts");
/* harmony import */ var _clients_glidewell_clients_glidewell_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./clients-glidewell/clients-glidewell.component */ "./src/app/clients/clients-glidewell/clients-glidewell.component.ts");
/* harmony import */ var _clients_biorad_clients_biorad_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clients-biorad/clients-biorad.component */ "./src/app/clients/clients-biorad/clients-biorad.component.ts");
/* harmony import */ var _clients_dignityhealth_clients_dignityhealth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clients-dignityhealth/clients-dignityhealth.component */ "./src/app/clients/clients-dignityhealth/clients-dignityhealth.component.ts");
/* harmony import */ var _clients_amareglobal_clients_amareglobal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./clients-amareglobal/clients-amareglobal.component */ "./src/app/clients/clients-amareglobal/clients-amareglobal.component.ts");
/* harmony import */ var _clients_tegatechnologies_clients_tegatechnologies_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./clients-tegatechnologies/clients-tegatechnologies.component */ "./src/app/clients/clients-tegatechnologies/clients-tegatechnologies.component.ts");
/* harmony import */ var _clients_windtelecom_clients_windtelecom_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./clients-windtelecom/clients-windtelecom.component */ "./src/app/clients/clients-windtelecom/clients-windtelecom.component.ts");
/* harmony import */ var _clients_integuer_clients_integuer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./clients-integuer/clients-integuer.component */ "./src/app/clients/clients-integuer/clients-integuer.component.ts");
/* harmony import */ var _clients_hbrgroup_clients_hbrgroup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./clients-hbrgroup/clients-hbrgroup.component */ "./src/app/clients/clients-hbrgroup/clients-hbrgroup.component.ts");
/* harmony import */ var _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./under-construction/under-construction.component */ "./src/app/clients/under-construction/under-construction.component.ts");





















class ClientsModule {
}
ClientsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ClientsModule });
ClientsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ClientsModule_Factory(t) { return new (t || ClientsModule)(); }, imports: [[
            _clients_routing_module__WEBPACK_IMPORTED_MODULE_1__["ClientsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClientsModule, { declarations: [_clients_component__WEBPACK_IMPORTED_MODULE_2__["ClientsComponent"], _clients_list_clients_list_component__WEBPACK_IMPORTED_MODULE_4__["ClientsListComponent"], _clients_verys_clients_verys_component__WEBPACK_IMPORTED_MODULE_5__["ClientsVerysComponent"], _clients_vertafore_clients_vertafore_component__WEBPACK_IMPORTED_MODULE_6__["ClientsVertaforeComponent"], _clients_pwc_clients_pwc_component__WEBPACK_IMPORTED_MODULE_7__["ClientsPwcComponent"], _clients_senegence_clients_senegence_component__WEBPACK_IMPORTED_MODULE_8__["ClientsSenegenceComponent"], _clients_optioncare_clients_optioncare_component__WEBPACK_IMPORTED_MODULE_9__["ClientsOptioncareComponent"], _clients_technossus_clients_technossus_component__WEBPACK_IMPORTED_MODULE_10__["ClientsTechnossusComponent"], _clients_glidewell_clients_glidewell_component__WEBPACK_IMPORTED_MODULE_11__["ClientsGlidewellComponent"], _clients_biorad_clients_biorad_component__WEBPACK_IMPORTED_MODULE_12__["ClientsBioradComponent"], _clients_dignityhealth_clients_dignityhealth_component__WEBPACK_IMPORTED_MODULE_13__["ClientsDignityhealthComponent"], _clients_amareglobal_clients_amareglobal_component__WEBPACK_IMPORTED_MODULE_14__["ClientsAmareglobalComponent"], _clients_tegatechnologies_clients_tegatechnologies_component__WEBPACK_IMPORTED_MODULE_15__["ClientsTegatechnologiesComponent"], _clients_windtelecom_clients_windtelecom_component__WEBPACK_IMPORTED_MODULE_16__["ClientsWindtelecomComponent"], _clients_integuer_clients_integuer_component__WEBPACK_IMPORTED_MODULE_17__["ClientsInteguerComponent"], _clients_hbrgroup_clients_hbrgroup_component__WEBPACK_IMPORTED_MODULE_18__["ClientsHbrgroupComponent"], _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_19__["UnderConstructionComponent"]], imports: [_clients_routing_module__WEBPACK_IMPORTED_MODULE_1__["ClientsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_clients_component__WEBPACK_IMPORTED_MODULE_2__["ClientsComponent"], _clients_list_clients_list_component__WEBPACK_IMPORTED_MODULE_4__["ClientsListComponent"], _clients_verys_clients_verys_component__WEBPACK_IMPORTED_MODULE_5__["ClientsVerysComponent"], _clients_vertafore_clients_vertafore_component__WEBPACK_IMPORTED_MODULE_6__["ClientsVertaforeComponent"], _clients_pwc_clients_pwc_component__WEBPACK_IMPORTED_MODULE_7__["ClientsPwcComponent"], _clients_senegence_clients_senegence_component__WEBPACK_IMPORTED_MODULE_8__["ClientsSenegenceComponent"], _clients_optioncare_clients_optioncare_component__WEBPACK_IMPORTED_MODULE_9__["ClientsOptioncareComponent"], _clients_technossus_clients_technossus_component__WEBPACK_IMPORTED_MODULE_10__["ClientsTechnossusComponent"], _clients_glidewell_clients_glidewell_component__WEBPACK_IMPORTED_MODULE_11__["ClientsGlidewellComponent"], _clients_biorad_clients_biorad_component__WEBPACK_IMPORTED_MODULE_12__["ClientsBioradComponent"], _clients_dignityhealth_clients_dignityhealth_component__WEBPACK_IMPORTED_MODULE_13__["ClientsDignityhealthComponent"], _clients_amareglobal_clients_amareglobal_component__WEBPACK_IMPORTED_MODULE_14__["ClientsAmareglobalComponent"], _clients_tegatechnologies_clients_tegatechnologies_component__WEBPACK_IMPORTED_MODULE_15__["ClientsTegatechnologiesComponent"], _clients_windtelecom_clients_windtelecom_component__WEBPACK_IMPORTED_MODULE_16__["ClientsWindtelecomComponent"], _clients_integuer_clients_integuer_component__WEBPACK_IMPORTED_MODULE_17__["ClientsInteguerComponent"], _clients_hbrgroup_clients_hbrgroup_component__WEBPACK_IMPORTED_MODULE_18__["ClientsHbrgroupComponent"], _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_19__["UnderConstructionComponent"]],
                imports: [
                    _clients_routing_module__WEBPACK_IMPORTED_MODULE_1__["ClientsRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/clients/under-construction/under-construction.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/clients/under-construction/under-construction.component.ts ***!
  \****************************************************************************/
/*! exports provided: UnderConstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderConstructionComponent", function() { return UnderConstructionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UnderConstructionComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
UnderConstructionComponent.ɵfac = function UnderConstructionComponent_Factory(t) { return new (t || UnderConstructionComponent)(); };
UnderConstructionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnderConstructionComponent, selectors: [["app-under-construction"]], decls: 1, vars: 0, consts: [["src", "../../../assets/under-construction.png", "alt", ""]], template: function UnderConstructionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, styles: ["img[_ngcontent-%COMP%] {\n    -webkit-animation-duration: 3s;\n            animation-duration: 3s;\n    -webkit-animation-name: slide-in;\n            animation-name: slide-in;\n  }\n  \n  @-webkit-keyframes slide-in {\n    from {\n      translate: 150vw 0;\n      scale: 200% 1;\n    }\n  \n    to {\n      translate: 0 0;\n      scale: 100% 1;\n    }\n  }\n  \n  @keyframes slide-in {\n    from {\n      translate: 150vw 0;\n      scale: 200% 1;\n    }\n  \n    to {\n      translate: 0 0;\n      scale: 100% 1;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50cy91bmRlci1jb25zdHJ1Y3Rpb24vdW5kZXItY29uc3RydWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRTtNQUNFLGtCQUFrQjtNQUNsQixhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxjQUFjO01BQ2QsYUFBYTtJQUNmO0VBQ0Y7O0VBVkE7SUFDRTtNQUNFLGtCQUFrQjtNQUNsQixhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxjQUFjO01BQ2QsYUFBYTtJQUNmO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL3VuZGVyLWNvbnN0cnVjdGlvbi91bmRlci1jb25zdHJ1Y3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGUtaW47XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc2xpZGUtaW4ge1xuICAgIGZyb20ge1xuICAgICAgdHJhbnNsYXRlOiAxNTB2dyAwO1xuICAgICAgc2NhbGU6IDIwMCUgMTtcbiAgICB9XG4gIFxuICAgIHRvIHtcbiAgICAgIHRyYW5zbGF0ZTogMCAwO1xuICAgICAgc2NhbGU6IDEwMCUgMTtcbiAgICB9XG4gIH1cbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnderConstructionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-under-construction',
                templateUrl: './under-construction.component.html',
                styleUrls: ['./under-construction.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
    constructor() {
        this.menuOpen = false;
    }
    // Close the mobile menu. Used as a click handler instead of the inline
    // `menuOpen = false` expression: that assignment evaluates to `false`, which
    // makes Angular call event.preventDefault() and silently blocks plain anchor
    // links (e.g. the external Resume link) from opening.
    closeMenu() {
        this.menuOpen = false;
    }
    // Navigate to /clients (via routerLink) then scroll to the Work section.
    // Polls because the #work element may not be rendered yet when coming from
    // another route, and re-clicking the same URL won't re-trigger the router.
    // The initial delay also lets the mobile menu collapse before we measure,
    // avoiding an overshoot from the layout shift.
    scrollToWork() {
        this.menuOpen = false;
        let tries = 0;
        const attempt = () => {
            const el = document.getElementById('work');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            else if (tries++ < 20) {
                setTimeout(attempt, 50);
            }
        };
        setTimeout(attempt, 60);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 25, vars: 5, consts: [[1, "nav"], [1, "nav__inner"], ["routerLink", "clients", 1, "nav__brand"], ["aria-label", "Toggle menu", 1, "nav__toggle", 3, "click"], [1, "nav__links"], ["routerLink", "clients", "routerLinkActive", "active", 1, "nav__link", 3, "click"], ["routerLink", "certifications", "routerLinkActive", "active", 1, "nav__link", 3, "click"], ["routerLink", "about", "routerLinkActive", "active", 1, "nav__link", 3, "click"], ["href", "https://drive.google.com/file/d/1ROmO3zKziky8Pu_7-nMMdzzoIBYoAm02/view?usp=sharing", "target", "_blank", 1, "nav__link", "nav__link--resume", 3, "click"], [1, "fas", "fa-external-link-alt", 2, "font-size", "0.7em"], ["href", "mailto:hi@wilsonrivera.com", 1, "nav__link", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "WR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_4_listener() { return ctx.menuOpen = !ctx.menuOpen; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_10_listener() { return ctx.scrollToWork(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_13_listener() { return ctx.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Certifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_16_listener() { return ctx.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_19_listener() { return ctx.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Resume ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_23_listener() { return ctx.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("nav--open", ctx.menuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.menuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("nav__links--open", ctx.menuOpen);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".nav[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: rgba(13, 17, 23, 0.85);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border-bottom: 1px solid var(--border);\n  height: var(--nav-height);\n}\n\n.nav__inner[_ngcontent-%COMP%] {\n  max-width: var(--max-width);\n  margin: 0 auto;\n  padding: 0 1.5rem;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.nav__brand[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--accent);\n  letter-spacing: 0.05em;\n  transition: opacity 0.2s;\n}\n\n.nav__brand[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  color: var(--accent);\n}\n\n.nav__links[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n\n.nav__link[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.4rem 0.75rem;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--text-muted);\n  border-radius: 6px;\n  transition: color 0.2s, background 0.2s;\n  position: relative;\n}\n\n.nav__link[_ngcontent-%COMP%]:hover, .nav__link.active[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  background: var(--bg-elevated);\n}\n\n.nav__link--resume[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  margin-left: 0.5rem;\n}\n\n.nav__link--resume[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n  background: var(--accent-glow);\n}\n\n\n\n.nav__toggle[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n}\n\n.nav__toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 22px;\n  height: 2px;\n  background: var(--text-muted);\n  border-radius: 2px;\n  transition: transform 0.2s, opacity 0.2s;\n}\n\n\n\n@media (max-width: 640px) {\n  .nav[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .nav__inner[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    padding: 0.75rem 1.5rem;\n    height: auto;\n  }\n\n  .nav__toggle[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .nav__links[_ngcontent-%COMP%] {\n    display: none;\n    width: 100%;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0;\n    padding-bottom: 0.75rem;\n  }\n\n  .nav__links--open[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .nav__link[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0.6rem 0.5rem;\n  }\n\n  .nav__link--resume[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 0.5rem;\n    border: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sWUFBWTtFQUNaLGtDQUFrQztFQUNsQywyQkFBMkI7RUFDM0IsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0Qyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsMEJBQTBCO0VBQzFCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isb0JBQW9CO0VBQ3BCLDhCQUE4QjtBQUNoQzs7QUFFQSx5QkFBeUI7O0FBQ3pCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQix3Q0FBd0M7QUFDMUM7O0FBRUEsZ0JBQWdCOztBQUNoQjtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsTUFBTTtJQUNOLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEzLCAxNywgMjMsIDAuODUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgaGVpZ2h0OiB2YXIoLS1uYXYtaGVpZ2h0KTtcbn1cblxuLm5hdl9faW5uZXIge1xuICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5uYXZfX2JyYW5kIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG59XG5cbi5uYXZfX2JyYW5kOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cblxuLm5hdl9fbGlua3Mge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMjVyZW07XG59XG5cbi5uYXZfX2xpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMC40cmVtIDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycywgYmFja2dyb3VuZCAwLjJzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5uYXZfX2xpbms6aG92ZXIsXG4ubmF2X19saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1lbGV2YXRlZCk7XG59XG5cbi5uYXZfX2xpbmstLXJlc3VtZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbi5uYXZfX2xpbmstLXJlc3VtZTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1nbG93KTtcbn1cblxuLyogTW9iaWxlIHRvZ2dsZSBidXR0b24gKi9cbi5uYXZfX3RvZ2dsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4ubmF2X190b2dnbGUgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzLCBvcGFjaXR5IDAuMnM7XG59XG5cbi8qIE1vYmlsZSBtZW51ICovXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLm5hdiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLm5hdl9faW5uZXIge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAubmF2X190b2dnbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAubmF2X19saW5rcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcbiAgfVxuXG4gIC5uYXZfX2xpbmtzLS1vcGVuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLm5hdl9fbGluayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC42cmVtIDAuNXJlbTtcbiAgfVxuXG4gIC5uYXZfX2xpbmstLXJlc3VtZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/header/header.module.ts":
/*!*****************************************!*\
  !*** ./src/app/header/header.module.ts ***!
  \*****************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jumbotron/jumbotron.component */ "./src/app/header/jumbotron/jumbotron.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _certifications_certifications_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../certifications/certifications-routing.module */ "./src/app/certifications/certifications-routing.module.ts");






class HeaderModule {
}
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _certifications_certifications_routing_module__WEBPACK_IMPORTED_MODULE_4__["CertificationsRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_2__["JumbotronComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _certifications_certifications_routing_module__WEBPACK_IMPORTED_MODULE_4__["CertificationsRoutingModule"]], exports: [_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
        _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_2__["JumbotronComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_2__["JumbotronComponent"]],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _certifications_certifications_routing_module__WEBPACK_IMPORTED_MODULE_4__["CertificationsRoutingModule"]],
                exports: [
                    _header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
                    _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_2__["JumbotronComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/header/jumbotron/jumbotron.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/header/jumbotron/jumbotron.component.ts ***!
  \*********************************************************/
/*! exports provided: JumbotronComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumbotronComponent", function() { return JumbotronComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class JumbotronComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
JumbotronComponent.ɵfac = function JumbotronComponent_Factory(t) { return new (t || JumbotronComponent)(); };
JumbotronComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JumbotronComponent, selectors: [["app-jumbotron"]], decls: 27, vars: 0, consts: [[1, "hero"], [1, "hero__bg-grid"], [1, "hero__content"], [1, "hero__greeting"], [1, "hero__name"], [1, "hero__title"], [1, "hero__stack"], [1, "hero__links"], ["href", "https://www.linkedin.com/in/wilsonsrivera/", "target", "_blank", "aria-label", "LinkedIn", 1, "hero__icon-link"], [1, "fab", "fa-linkedin"], ["href", "https://github.com/wilsonriv", "target", "_blank", "aria-label", "GitHub", 1, "hero__icon-link"], [1, "fab", "fa-github"], ["href", "https://stackoverflow.com/users/2089460/wilson", "target", "_blank", "aria-label", "Stack Overflow", 1, "hero__icon-link"], [1, "fab", "fa-stack-overflow"], ["href", "mailto:hi@wilsonrivera.com", "aria-label", "Email", 1, "hero__icon-link"], [1, "fas", "fa-envelope"], [1, "hero__cta"], ["routerLink", "about", 1, "btn-primary"], ["href", "https://drive.google.com/file/d/1ROmO3zKziky8Pu_7-nMMdzzoIBYoAm02/view?usp=sharing", "target", "_blank", 1, "btn-outline"], [1, "hero__scroll"], [1, "hero__scroll-dot"]], template: function JumbotronComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hi, I'm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Wilson Rivera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Senior Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Angular \u00A0\u00B7\u00A0 C# \u00A0\u00B7\u00A0 AWS \u00A0\u00B7\u00A0 Microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "View Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 2rem 1.5rem;\n  overflow: hidden;\n  background: radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79, 156, 249, 0.12) 0%, transparent 70%),\n              var(--bg-primary);\n}\n\n\n\n.hero__bg-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);\n  background-size: 32px 32px;\n  pointer-events: none;\n}\n\n.hero__content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.hero__greeting[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 400;\n  color: var(--accent);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  margin-bottom: 0.25rem;\n}\n\n.hero__name[_ngcontent-%COMP%] {\n  font-size: clamp(3rem, 8vw, 5.5rem);\n  font-weight: 700;\n  line-height: 1.05;\n  letter-spacing: -0.02em;\n  background: linear-gradient(135deg, #e6edf3 0%, var(--accent) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 0.5rem;\n}\n\n.hero__title[_ngcontent-%COMP%] {\n  font-size: clamp(1.25rem, 3vw, 1.75rem);\n  font-weight: 500;\n  color: var(--text-primary);\n  opacity: 0.85;\n}\n\n.hero__stack[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 400;\n  color: var(--text-muted);\n  letter-spacing: 0.04em;\n  margin-top: 0.25rem;\n}\n\n.hero__links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 1.5rem;\n}\n\n.hero__icon-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  font-size: 1.15rem;\n  transition: color 0.2s, border-color 0.2s, background 0.2s, box-shadow 0.2s, transform 0.2s;\n}\n\n.hero__icon-link[_ngcontent-%COMP%]:hover {\n  color: var(--accent);\n  border-color: var(--accent);\n  background: var(--accent-glow);\n  box-shadow: 0 0 16px var(--accent-glow-strong);\n  transform: translateY(-2px);\n}\n\n.hero__cta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 2rem;\n}\n\n\n\n.hero__scroll[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2rem;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 24px;\n  height: 40px;\n  border: 2px solid var(--border);\n  border-radius: 12px;\n  display: flex;\n  justify-content: center;\n  padding-top: 6px;\n}\n\n.hero__scroll-dot[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 8px;\n  border-radius: 2px;\n  background: var(--accent);\n  -webkit-animation: scrollBounce 1.6s ease-in-out infinite;\n          animation: scrollBounce 1.6s ease-in-out infinite;\n}\n\n@-webkit-keyframes scrollBounce {\n  0%, 100% { transform: translateY(0); opacity: 1; }\n  60% { transform: translateY(12px); opacity: 0; }\n}\n\n@keyframes scrollBounce {\n  0%, 100% { transform: translateY(0); opacity: 1; }\n  60% { transform: translateY(12px); opacity: 0; }\n}\n\n@media (max-width: 480px) {\n  .hero__cta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2p1bWJvdHJvbi9qdW1ib3Ryb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCOytCQUM2QjtBQUMvQjs7QUFFQSwrQkFBK0I7O0FBQy9CO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixzRkFBc0Y7RUFDdEYsMEJBQTBCO0VBQzFCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsbUVBQW1FO0VBQ25FLDZCQUE2QjtFQUM3QixvQ0FBb0M7RUFDcEMscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQiw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQiwyRkFBMkY7QUFDN0Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5Qiw4Q0FBOEM7RUFDOUMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQSw4QkFBOEI7O0FBQzlCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix5REFBaUQ7VUFBakQsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsV0FBVyx3QkFBd0IsRUFBRSxVQUFVLEVBQUU7RUFDakQsTUFBTSwyQkFBMkIsRUFBRSxVQUFVLEVBQUU7QUFDakQ7O0FBSEE7RUFDRSxXQUFXLHdCQUF3QixFQUFFLFVBQVUsRUFBRTtFQUNqRCxNQUFNLDJCQUEyQixFQUFFLFVBQVUsRUFBRTtBQUNqRDs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2p1bWJvdHJvbi9qdW1ib3Ryb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbSAxLjVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIDgwJSA2MCUgYXQgNTAlIC0xMCUsIHJnYmEoNzksIDE1NiwgMjQ5LCAwLjEyKSAwJSwgdHJhbnNwYXJlbnQgNzAlKSxcbiAgICAgICAgICAgICAgdmFyKC0tYmctcHJpbWFyeSk7XG59XG5cbi8qIFN1YnRsZSBkb3QtZ3JpZCBiYWNrZ3JvdW5kICovXG4uaGVyb19fYmctZ3JpZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjU1LDI1NSwyNTUsMC4wNCkgMXB4LCB0cmFuc3BhcmVudCAxcHgpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDMycHggMzJweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5oZXJvX19jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLmhlcm9fX2dyZWV0aW5nIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuXG4uaGVyb19fbmFtZSB7XG4gIGZvbnQtc2l6ZTogY2xhbXAoM3JlbSwgOHZ3LCA1LjVyZW0pO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMS4wNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlNmVkZjMgMCUsIHZhcigtLWFjY2VudCkgMTAwJSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uaGVyb19fdGl0bGUge1xuICBmb250LXNpemU6IGNsYW1wKDEuMjVyZW0sIDN2dywgMS43NXJlbSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBvcGFjaXR5OiAwLjg1O1xufVxuXG4uaGVyb19fc3RhY2sge1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbn1cblxuLmhlcm9fX2xpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjc1cmVtO1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG5cbi5oZXJvX19pY29uLWxpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc3VyZmFjZSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzLCBib3JkZXItY29sb3IgMC4ycywgYmFja2dyb3VuZCAwLjJzLCBib3gtc2hhZG93IDAuMnMsIHRyYW5zZm9ybSAwLjJzO1xufVxuXG4uaGVyb19faWNvbi1saW5rOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWdsb3cpO1xuICBib3gtc2hhZG93OiAwIDAgMTZweCB2YXIoLS1hY2NlbnQtZ2xvdy1zdHJvbmcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbi5oZXJvX19jdGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi8qIEFuaW1hdGVkIHNjcm9sbCBpbmRpY2F0b3IgKi9cbi5oZXJvX19zY3JvbGwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMnJlbTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuXG4uaGVyb19fc2Nyb2xsLWRvdCB7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7XG4gIGFuaW1hdGlvbjogc2Nyb2xsQm91bmNlIDEuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc2Nyb2xsQm91bmNlIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IG9wYWNpdHk6IDE7IH1cbiAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEycHgpOyBvcGFjaXR5OiAwOyB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuaGVyb19fY3RhIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JumbotronComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-jumbotron',
                templateUrl: './jumbotron.component.html',
                styleUrls: ['./jumbotron.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shorten_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shorten.pipe */ "./src/app/shared/shorten.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_shorten_pipe__WEBPACK_IMPORTED_MODULE_1__["ShortenPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], exports: [_shorten_pipe__WEBPACK_IMPORTED_MODULE_1__["ShortenPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_shorten_pipe__WEBPACK_IMPORTED_MODULE_1__["ShortenPipe"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                exports: [_shorten_pipe__WEBPACK_IMPORTED_MODULE_1__["ShortenPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/shorten.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/shared/shorten.pipe.ts ***!
  \****************************************/
/*! exports provided: ShortenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortenPipe", function() { return ShortenPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ShortenPipe {
    transform(value, limit) {
        if (value.length > limit) {
            return value.substr(0, limit) + ' ...';
        }
        return value;
    }
}
ShortenPipe.ɵfac = function ShortenPipe_Factory(t) { return new (t || ShortenPipe)(); };
ShortenPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shorten", type: ShortenPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShortenPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'shorten'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wilson/code/website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map