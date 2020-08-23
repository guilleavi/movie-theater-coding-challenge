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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _movies_containers_movies_search_page_movies_search_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies/containers/movies-search-page/movies-search-page.component */ "./src/app/movies/containers/movies-search-page/movies-search-page.component.ts");





const ROUTES = [
    {
        path: '',
        component: _movies_containers_movies_search_page_movies_search_page_component__WEBPACK_IMPORTED_MODULE_2__["MoviesSearchPageComponent"]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(ROUTES)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(ROUTES)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
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



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container-fluid"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _movies_movies_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies/movies.module */ "./src/app/movies/movies.module.ts");







const ANGULAR_IMPORTS = [
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]
];
const ROUTING_MODULES = [
    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
];
const EAGER_LOADED_MODULES = [
    _movies_movies_module__WEBPACK_IMPORTED_MODULE_5__["MoviesModule"]
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            ...ANGULAR_IMPORTS,
            ...ROUTING_MODULES,
            ...EAGER_LOADED_MODULES
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _movies_movies_module__WEBPACK_IMPORTED_MODULE_5__["MoviesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    ...ANGULAR_IMPORTS,
                    ...ROUTING_MODULES,
                    ...EAGER_LOADED_MODULES
                ],
                providers: [],
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/movies/components/details-view/details-view.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/movies/components/details-view/details-view.component.ts ***!
  \**************************************************************************/
/*! exports provided: DetailsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsViewComponent", function() { return DetailsViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _constants_genre_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/genre.constants */ "./src/app/movies/constants/genre.constants.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






class DetailsViewComponent {
    constructor() {
        this.fasStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStar"];
    }
    ngOnInit() {
    }
    /* Get genre descriptions by ids
     */
    getGenres(genreIds) {
        let genresString = '';
        const hasIds = genreIds && genreIds.length;
        if (hasIds) {
            genreIds.forEach(id => {
                const genres = _constants_genre_constants__WEBPACK_IMPORTED_MODULE_2__["GenreConstants"].filter(gen => gen.id === +id);
                const genreFound = genres.length && genres[0] && genres[0].name;
                if (genreFound) {
                    genresString = genresString + genres[0].name + ', ';
                }
            });
        }
        return genresString.replace(/,\s*$/, ''); // remove trailing comma
    }
}
DetailsViewComponent.ɵfac = function DetailsViewComponent_Factory(t) { return new (t || DetailsViewComponent)(); };
DetailsViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsViewComponent, selectors: [["app-details-view"]], inputs: { details: "details" }, decls: 16, vars: 10, consts: [[1, "details"], [1, "movie-title"], [1, "genre-and-votes"], [1, "genre"], [1, "votes"], [1, "star", 3, "icon"], [1, "original-language"], [1, "release-date"], [1, "overview"]], template: function DetailsViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getGenres(ctx.details.genre_ids));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.fasStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.details.vote_average, "/10 (", ctx.details.vote_count, " votes) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Original Language: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, ctx.details.original_language), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Release Date: ", ctx.details.release_date, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.overview);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"]], styles: [".star[_ngcontent-%COMP%] {\n  color: gold;\n}\n\n.details[_ngcontent-%COMP%]   .genre-and-votes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.details[_ngcontent-%COMP%]   .genre-and-votes[_ngcontent-%COMP%]   .votes[_ngcontent-%COMP%] {\n  margin-right: 12%;\n}\n\n.details[_ngcontent-%COMP%]   .overview[_ngcontent-%COMP%] {\n  padding-top: 1%;\n  margin-right: 12%;\n  text-align: justify;\n}\n\n.details[_ngcontent-%COMP%]   .release-date[_ngcontent-%COMP%], .details[_ngcontent-%COMP%]   .original-language[_ngcontent-%COMP%] {\n  text-align: end;\n  margin-right: 12%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL2NvbXBvbmVudHMvZGV0YWlscy12aWV3L2RldGFpbHMtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFHSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUFSOztBQUNRO0VBQ0ksaUJBQUE7QUFDWjs7QUFFSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQVI7O0FBRUk7O0VBRUksZUFBQTtFQUNBLGlCQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZXMvY29tcG9uZW50cy9kZXRhaWxzLXZpZXcvZGV0YWlscy12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXIge1xyXG4gICAgY29sb3I6IGdvbGQ7XHJcbn1cclxuXHJcbi5kZXRhaWxzIHtcclxuICAgIC5nZW5yZS1hbmQtdm90ZXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIC52b3RlcyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTIlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5vdmVydmlldyB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDElO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTIlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB9XHJcbiAgICAucmVsZWFzZS1kYXRlLFxyXG4gICAgLm9yaWdpbmFsLWxhbmd1YWdlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMiU7XHJcbiAgICB9XHJcbn1cclxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details-view',
                templateUrl: './details-view.component.html',
                styleUrls: ['./details-view.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { details: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/movies/components/search-bar/search-bar.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/movies/components/search-bar/search-bar.component.ts ***!
  \**********************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function SearchBarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchBarComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Search ");
} }
class SearchBarComponent {
    constructor() {
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    /* Emit search term
    */
    searchText(term) {
        this.search.emit(term);
    }
    /* Clear search term and emit the empty string
     */
    clearSearchTerm() {
        this.searchTerm = '';
        this.searchText('');
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(); };
SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], inputs: { showSpinner: "showSpinner" }, outputs: { search: "search" }, decls: 8, vars: 4, consts: [["autocomplete", "off", 1, "search-form", "form-inline", 3, "ngSubmit"], ["type", "text", "name", "search-input", "place-holder", "Search", "autofocus", "", 1, "search-input", "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "search-button", "btn", "btn-primary", 3, "disabled"], [4, "ngIf", "ngIfElse"], ["searchButton", ""], ["type", "button", 1, "clear-button", "btn", "btn-secondary", 3, "click"], [1, "spinner-border", "spinner-border-sm"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SearchBarComponent_Template_form_ngSubmit_0_listener() { return ctx.searchText(ctx.searchTerm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchBarComponent_Template_input_ngModelChange_1_listener($event) { return ctx.searchTerm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchBarComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchBarComponent_ng_template_4_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchBarComponent_Template_button_click_6_listener() { return ctx.clearSearchTerm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.showSpinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSpinner)("ngIfElse", _r1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".search-form[_ngcontent-%COMP%] {\n  display: flex;\n}\n.search-form[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 0 0 69%;\n  margin-right: 1%;\n}\n.search-form[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%], .search-form[_ngcontent-%COMP%]   .clear-button[_ngcontent-%COMP%] {\n  flex: 0 0 14%;\n  margin-right: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL2NvbXBvbmVudHMvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQUFJOztFQUVJLGFBQUE7RUFDQSxnQkFBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvbW92aWVzL2NvbXBvbmVudHMvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAuc2VhcmNoLWlucHV0IHtcclxuICAgICAgICBmbGV4OiAwIDAgNjklO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLWJ1dHRvbixcclxuICAgIC5jbGVhci1idXR0b24ge1xyXG4gICAgICAgIGZsZXg6IDAgMCAxNCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgIH1cclxufVxyXG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-bar',
                templateUrl: './search-bar.component.html',
                styleUrls: ['./search-bar.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { showSpinner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/movies/components/search-results/search-results.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/movies/components/search-results/search-results.component.ts ***!
  \******************************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function SearchResultsComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", "https://image.tmdb.org/t/p/w185" + result_r2.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", result_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", result_r2.title);
} }
function SearchResultsComponent_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", result_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r2.title);
} }
const _c0 = function (a0) { return { "selected": a0 }; };
function SearchResultsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchResultsComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const result_r2 = ctx.$implicit; const i_r3 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.select(result_r2, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchResultsComponent_div_1_div_1_Template, 2, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchResultsComponent_div_1_ng_template_2_Template, 3, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "result-item-" + i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.selectedItemId === result_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", result_r2.poster_path)("ngIfElse", _r5);
} }
function SearchResultsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Oooops, no results! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SearchResultsComponent {
    constructor() {
        this.resultsList = [];
        this.selectResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    /* Unselect movie every time results list changes
     */
    ngOnChanges(changes) {
        this.selectedItemId = 0;
        this.scrollToElement(0);
    }
    /* Scroll to selected element
    */
    scrollToElement(index) {
        var _a;
        (_a = document.getElementById('result-item-' + index)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
    }
    /* Emit selected movie
    */
    select(item, index) {
        this.selectedItemId = item.id;
        this.selectResult.emit(item);
        /* Adding timeout to be sure that the scroll changes after the details view is open
         * (this could be replace by a new input that shows when the detail view is already opened)
         */
        setTimeout(() => this.scrollToElement(index));
    }
}
SearchResultsComponent.ɵfac = function SearchResultsComponent_Factory(t) { return new (t || SearchResultsComponent)(); };
SearchResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchResultsComponent, selectors: [["app-search-results"]], inputs: { resultsList: "resultsList" }, outputs: { selectResult: "selectResult" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [[1, "result-container"], ["class", "result-item", 3, "ngClass", "id", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "result-item", 3, "ngClass", "id", "click"], [4, "ngIf", "ngIfElse"], ["emptyImage", ""], ["data-toggle", "tooltip", "data-placement", "top", 1, "movie-img", 3, "src", "alt", "title"], ["data-toggle", "tooltip", "data-placement", "top", 1, "empty-img", 3, "title"], [1, "no-img-txt"]], template: function SearchResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchResultsComponent_div_1_Template, 4, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchResultsComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.resultsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.resultsList || !ctx.resultsList.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".result-container[_ngcontent-%COMP%] {\n  \n  overflow-y: scroll;\n  height: calc(100vh - 128px);\n  display: flex;\n  flex-flow: row wrap;\n}\n.result-container[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%] {\n  margin: 1%;\n  cursor: pointer;\n}\n.movie-img[_ngcontent-%COMP%] {\n  width: 182px;\n  height: 280px;\n}\n.selected[_ngcontent-%COMP%] {\n  width: 182px;\n  height: 280px;\n}\n.selected[_ngcontent-%COMP%]   .movie-img[_ngcontent-%COMP%], .selected[_ngcontent-%COMP%]   .empty-img[_ngcontent-%COMP%] {\n  width: 172px;\n  height: 270px;\n  background-size: 172px 270px;\n  border: 5px solid #007bff;\n  margin-top: 3%;\n  margin-left: 3%;\n}\n.empty-img[_ngcontent-%COMP%] {\n  background: url('movie-cell.png');\n  width: 182px;\n  height: 280px;\n  background-size: 182px 280px;\n  background-repeat: no-repeat;\n  align-items: center;\n  display: flex;\n}\n.empty-img[_ngcontent-%COMP%]   .no-img-txt[_ngcontent-%COMP%] {\n  flex: 0 0 80%;\n  text-align: center;\n  margin: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL2NvbXBvbmVudHMvc2VhcmNoLXJlc3VsdHMvc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtBQUFKO0FBQ0k7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQUNSO0FBR0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUFKO0FBR0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUFKO0FBQ0k7O0VBRUksWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDUjtBQUdBO0VBQ0ksaUNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFBSjtBQUNJO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNSIiwiZmlsZSI6InNyYy9hcHAvbW92aWVzL2NvbXBvbmVudHMvc2VhcmNoLXJlc3VsdHMvc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdWx0LWNvbnRhaW5lciB7XHJcbiAgICAvKiBzY3JvbGwgKi9cclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGhlaWdodDpjYWxjKDEwMHZoIC0gMTI4cHgpO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgLnJlc3VsdC1pdGVtIHtcclxuICAgICAgICBtYXJnaW46IDElO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLm1vdmllLWltZyB7XHJcbiAgICB3aWR0aDogMTgycHg7ICAgIFxyXG4gICAgaGVpZ2h0OiAyODBweDtcclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICAgIHdpZHRoOiAxODJweDsgICAgXHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgLm1vdmllLWltZyxcclxuICAgIC5lbXB0eS1pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxNzJweDsgICAgXHJcbiAgICAgICAgaGVpZ2h0OiAyNzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE3MnB4IDI3MHB4O1xyXG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICMwMDdiZmY7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZW1wdHktaW1nIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9tb3ZpZS1jZWxsLnBuZ1wiKTtcclxuICAgIHdpZHRoOiAxODJweDtcclxuICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE4MnB4IDI4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLm5vLWltZy10eHQge1xyXG4gICAgICAgIGZsZXg6IDAgMCA4MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTAlO1xyXG4gICAgfVxyXG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-results',
                templateUrl: './search-results.component.html',
                styleUrls: ['./search-results.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { resultsList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectResult: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/movies/components/votes-filter/votes-filter.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/movies/components/votes-filter/votes-filter.component.ts ***!
  \**************************************************************************/
/*! exports provided: VotesFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotesFilterComponent", function() { return VotesFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");






function VotesFilterComponent_fa_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VotesFilterComponent_fa_icon_4_Template_fa_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.updateVotes(i_r3 + 1, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.fasStar);
} }
function VotesFilterComponent_fa_icon_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VotesFilterComponent_fa_icon_5_Template_fa_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.updateVotes(i_r7 + 1, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.farStar);
} }
const _c0 = function () { return []; };
class VotesFilterComponent {
    constructor() {
        this.vote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fasStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faStar"];
        this.farStar = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStar"];
        this.MAX_STARS = 5;
    }
    ngOnInit() {
        this.resetVotes();
    }
    /* Initialize votes filter unselecting all the stars
     */
    resetVotes() {
        this.selectedStars = 0;
        this.unselectedStars = this.MAX_STARS;
        this.setVoteValue(this.selectedStars);
    }
    /* Update stars selection
     */
    updateVotes(starIndex, select) {
        const newSelectionIndex = starIndex + (select ? 0 : this.selectedStars);
        const disableFilter = newSelectionIndex === this.selectedStars;
        this.selectedStars = disableFilter ? 0 : newSelectionIndex;
        this.unselectedStars = disableFilter ? this.MAX_STARS : this.MAX_STARS - newSelectionIndex;
        this.setVoteValue(this.selectedStars);
    }
    /* Emit vote value
    */
    setVoteValue(voteValue) {
        this.vote.emit(voteValue);
    }
}
VotesFilterComponent.ɵfac = function VotesFilterComponent_Factory(t) { return new (t || VotesFilterComponent)(); };
VotesFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VotesFilterComponent, selectors: [["app-votes-filter"]], outputs: { vote: "vote" }, decls: 6, vars: 4, consts: [[1, "votes-filter"], [1, "votes-filter-title"], [1, "votes-filter-stars"], ["class", "selected-star", 3, "icon", "click", 4, "ngFor", "ngForOf"], ["class", "unselected-star", 3, "icon", "click", 4, "ngFor", "ngForOf"], [1, "selected-star", 3, "icon", "click"], [1, "unselected-star", 3, "icon", "click"]], template: function VotesFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Filter by rating:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VotesFilterComponent_fa_icon_4_Template, 1, 1, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VotesFilterComponent_fa_icon_5_Template, 1, 1, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0).constructor(ctx.selectedStars));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0).constructor(ctx.unselectedStars));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: [".selected-star[_ngcontent-%COMP%] {\n  color: gold;\n}\n\n.unselected-star[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.votes-filter[_ngcontent-%COMP%] {\n  display: flex;\n  padding-top: 1.5%;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n\n.votes-filter[_ngcontent-%COMP%]   .votes-filter-title[_ngcontent-%COMP%] {\n  color: white;\n  margin-bottom: 0.75%;\n  margin-right: 4%;\n}\n\n.votes-filter[_ngcontent-%COMP%]   .votes-filter-stars[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL2NvbXBvbmVudHMvdm90ZXMtZmlsdGVyL3ZvdGVzLWZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFESTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBR1I7O0FBREk7RUFDSSxlQUFBO0FBR1IiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZXMvY29tcG9uZW50cy92b3Rlcy1maWx0ZXIvdm90ZXMtZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGVkLXN0YXIge1xyXG4gICAgY29sb3I6IGdvbGQ7XHJcbn1cclxuLnVuc2VsZWN0ZWQtc3RhciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi52b3Rlcy1maWx0ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctdG9wOiAxLjUlO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIC52b3Rlcy1maWx0ZXItdGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjc1JTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQlO1xyXG4gICAgfVxyXG4gICAgLnZvdGVzLWZpbHRlci1zdGFycyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VotesFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-votes-filter',
                templateUrl: './votes-filter.component.html',
                styleUrls: ['./votes-filter.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { vote: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/movies/constants/genre.constants.ts":
/*!*****************************************************!*\
  !*** ./src/app/movies/constants/genre.constants.ts ***!
  \*****************************************************/
/*! exports provided: GenreConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreConstants", function() { return GenreConstants; });
const GenreConstants = [
    {
        id: 28,
        name: 'Action'
    },
    {
        id: 12,
        name: 'Adventure'
    },
    {
        id: 16,
        name: 'Animation'
    },
    {
        id: 35,
        name: 'Comedy'
    },
    {
        id: 80,
        name: 'Crime'
    },
    {
        id: 99,
        name: 'Documentary'
    },
    {
        id: 18,
        name: 'Drama'
    },
    {
        id: 10751,
        name: 'Family'
    },
    {
        id: 14,
        name: 'Fantasy'
    },
    {
        id: 36,
        name: 'History'
    },
    {
        id: 27,
        name: 'Horror'
    },
    {
        id: 10402,
        name: 'Music'
    },
    {
        id: 9648,
        name: 'Mystery'
    },
    {
        id: 10749,
        name: 'Romance'
    },
    {
        id: 878,
        name: 'Science Fiction'
    },
    {
        id: 10770,
        name: 'TV Movie'
    },
    {
        id: 53,
        name: 'Thriller'
    },
    {
        id: 10752,
        name: 'War'
    },
    {
        id: 37,
        name: 'Western'
    }
];


/***/ }),

/***/ "./src/app/movies/constants/url.constants.ts":
/*!***************************************************!*\
  !*** ./src/app/movies/constants/url.constants.ts ***!
  \***************************************************/
/*! exports provided: UrlConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlConstants", function() { return UrlConstants; });
const baseUrl = 'https://api.themoviedb.org/3/';
const UrlConstants = {
    API_KEY: 'c8c19f0aef08483bb74150baa6f6a205',
    DISCOVER: baseUrl + 'discover/movie',
    SEARCH: baseUrl + 'search/movie',
};


/***/ }),

/***/ "./src/app/movies/containers/movies-search-page/movies-search-page.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/movies/containers/movies-search-page/movies-search-page.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MoviesSearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesSearchPageComponent", function() { return MoviesSearchPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _components_votes_filter_votes_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/votes-filter/votes-filter.component */ "./src/app/movies/components/votes-filter/votes-filter.component.ts");
/* harmony import */ var _services_movie_discover_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/movie-discover.service */ "./src/app/movies/services/movie-discover.service.ts");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/search-bar/search-bar.component */ "./src/app/movies/components/search-bar/search-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/search-results/search-results.component */ "./src/app/movies/components/search-results/search-results.component.ts");
/* harmony import */ var _components_details_view_details_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/details-view/details-view.component */ "./src/app/movies/components/details-view/details-view.component.ts");











function MoviesSearchPageComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-details-view", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("details", ctx_r0.selectedMovie);
} }
class MoviesSearchPageComponent {
    constructor(movieDiscoverService) {
        this.movieDiscoverService = movieDiscoverService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
    }
    ngOnInit() {
        /* Keep subscription open to keep the movies results updates*/
        this.subscriptions.add(this.movieDiscoverService.moviesResult$.subscribe(result => {
            this.moviesResult = (result === null || result === void 0 ? void 0 : result.results) ? JSON.parse(JSON.stringify(result.results)) : [];
            this.resetUserSelections();
            this.showSpinner = false;
        }));
        /* Fill the movies results with the discover movies at the init */
        this.movieDiscoverService.discoverMovies();
    }
    /*
     * Search movies by a term
     */
    searchMovies(searchTerm) {
        this.showSpinner = true;
        const hasValidSearchTerm = searchTerm && typeof searchTerm === 'string';
        if (hasValidSearchTerm) {
            this.movieDiscoverService.searchMovies(searchTerm);
        }
        else {
            this.movieDiscoverService.discoverMovies();
        }
    }
    /*
     * Filter movies by its rate
     */
    filterByVotes(voteValue) {
        this.selectedMovie = null;
        const maxRate = voteValue * 2;
        const minRate = maxRate - 2;
        /* Filter by rate over the full list of movies results */
        this.movieDiscoverService.moviesResult$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(moviesResult => {
            const hasMovies = moviesResult && moviesResult.results && moviesResult.results.length;
            if (hasMovies) {
                const results = JSON.parse(JSON.stringify(moviesResult.results));
                if (maxRate > 0) {
                    this.moviesResult = results.filter((result) => result.vote_average <= maxRate && result.vote_average >= minRate);
                }
                else {
                    this.moviesResult = results;
                }
            }
        });
    }
    /*
     * Show selected movie details
     */
    showDetails(movie) {
        this.selectedMovie = movie;
    }
    resetUserSelections() {
        var _a;
        this.selectedMovie = null;
        (_a = this.votesFilterComponent) === null || _a === void 0 ? void 0 : _a.resetVotes();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
MoviesSearchPageComponent.ɵfac = function MoviesSearchPageComponent_Factory(t) { return new (t || MoviesSearchPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_movie_discover_service__WEBPACK_IMPORTED_MODULE_4__["MovieDiscoverService"])); };
MoviesSearchPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoviesSearchPageComponent, selectors: [["ng-component"]], viewQuery: function MoviesSearchPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_components_votes_filter_votes_filter_component__WEBPACK_IMPORTED_MODULE_3__["VotesFilterComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.votesFilterComponent = _t.first);
    } }, decls: 8, vars: 4, consts: [[1, "row", "sticky-top"], [1, "col-12", "search-movies-header"], [1, "search-bar", 3, "showSpinner", "search"], [1, "votes-bar", 3, "vote"], [1, "row", "search-movies-content"], [3, "ngClass"], [3, "resultsList", "selectResult"], ["class", "col-5", 4, "ngIf"], [1, "col-5"], [3, "details"]], template: function MoviesSearchPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-search-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function MoviesSearchPageComponent_Template_app_search_bar_search_2_listener($event) { return ctx.searchMovies($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-votes-filter", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("vote", function MoviesSearchPageComponent_Template_app_votes_filter_vote_3_listener($event) { return ctx.filterByVotes($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-search-results", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectResult", function MoviesSearchPageComponent_Template_app_search_results_selectResult_6_listener($event) { return ctx.showDetails($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MoviesSearchPageComponent_div_7_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showSpinner", ctx.showSpinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectedMovie ? "col-7" : "col-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resultsList", ctx.moviesResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedMovie);
    } }, directives: [_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__["SearchBarComponent"], _components_votes_filter_votes_filter_component__WEBPACK_IMPORTED_MODULE_3__["VotesFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_7__["SearchResultsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_details_view_details_view_component__WEBPACK_IMPORTED_MODULE_8__["DetailsViewComponent"]], styles: [".sticky-top[_ngcontent-%COMP%] {\n  background-color: black;\n}\n\n.search-movies-header[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.search-movies-header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n  flex: 0 0 48%;\n  margin: 1%;\n}\n\n.search-movies-header[_ngcontent-%COMP%]   .votes-bar[_ngcontent-%COMP%] {\n  flex: 0 0 24%;\n  margin: 1%;\n}\n\n.search-movies-content[_ngcontent-%COMP%] {\n  margin-top: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL2NvbnRhaW5lcnMvbW92aWVzLXNlYXJjaC1wYWdlL21vdmllcy1zZWFyY2gtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBQUk7RUFDSSxhQUFBO0VBQ0EsVUFBQTtBQUVSOztBQUFJO0VBQ0ksYUFBQTtFQUNBLFVBQUE7QUFFUjs7QUFFQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9jb250YWluZXJzL21vdmllcy1zZWFyY2gtcGFnZS9tb3ZpZXMtc2VhcmNoLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RpY2t5LXRvcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnNlYXJjaC1tb3ZpZXMtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAuc2VhcmNoLWJhciB7XHJcbiAgICAgICAgZmxleDogMCAwIDQ4JTtcclxuICAgICAgICBtYXJnaW46IDElO1xyXG4gICAgfVxyXG4gICAgLnZvdGVzLWJhciB7XHJcbiAgICAgICAgZmxleDogMCAwIDI0JTtcclxuICAgICAgICBtYXJnaW46IDElO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VhcmNoLW1vdmllcy1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesSearchPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './movies-search-page.component.html',
                styleUrls: ['./movies-search-page.component.scss']
            }]
    }], function () { return [{ type: _services_movie_discover_service__WEBPACK_IMPORTED_MODULE_4__["MovieDiscoverService"] }]; }, { votesFilterComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_components_votes_filter_votes_filter_component__WEBPACK_IMPORTED_MODULE_3__["VotesFilterComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/movies/movies.module.ts":
/*!*****************************************!*\
  !*** ./src/app/movies/movies.module.ts ***!
  \*****************************************/
/*! exports provided: MoviesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesModule", function() { return MoviesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _components_details_view_details_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/details-view/details-view.component */ "./src/app/movies/components/details-view/details-view.component.ts");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/movies/components/search-bar/search-bar.component.ts");
/* harmony import */ var _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search-results/search-results.component */ "./src/app/movies/components/search-results/search-results.component.ts");
/* harmony import */ var _components_votes_filter_votes_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/votes-filter/votes-filter.component */ "./src/app/movies/components/votes-filter/votes-filter.component.ts");
/* harmony import */ var _containers_movies_search_page_movies_search_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/movies-search-page/movies-search-page.component */ "./src/app/movies/containers/movies-search-page/movies-search-page.component.ts");










class MoviesModule {
}
MoviesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MoviesModule });
MoviesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MoviesModule_Factory(t) { return new (t || MoviesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MoviesModule, { declarations: [_components_details_view_details_view_component__WEBPACK_IMPORTED_MODULE_4__["DetailsViewComponent"],
        _containers_movies_search_page_movies_search_page_component__WEBPACK_IMPORTED_MODULE_8__["MoviesSearchPageComponent"],
        _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__["SearchBarComponent"],
        _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_6__["SearchResultsComponent"],
        _components_votes_filter_votes_filter_component__WEBPACK_IMPORTED_MODULE_7__["VotesFilterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]], exports: [_containers_movies_search_page_movies_search_page_component__WEBPACK_IMPORTED_MODULE_8__["MoviesSearchPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MoviesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_details_view_details_view_component__WEBPACK_IMPORTED_MODULE_4__["DetailsViewComponent"],
                    _containers_movies_search_page_movies_search_page_component__WEBPACK_IMPORTED_MODULE_8__["MoviesSearchPageComponent"],
                    _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__["SearchBarComponent"],
                    _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_6__["SearchResultsComponent"],
                    _components_votes_filter_votes_filter_component__WEBPACK_IMPORTED_MODULE_7__["VotesFilterComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]
                ],
                exports: [
                    _containers_movies_search_page_movies_search_page_component__WEBPACK_IMPORTED_MODULE_8__["MoviesSearchPageComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/movies/services/movie-discover.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/movies/services/movie-discover.service.ts ***!
  \***********************************************************/
/*! exports provided: MovieDiscoverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDiscoverService", function() { return MovieDiscoverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _constants_url_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/url.constants */ "./src/app/movies/constants/url.constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class MovieDiscoverService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.moviesResultSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.moviesResult$ = this.moviesResultSource.asObservable();
    }
    /**
     * Return suggested movies sorted by popularity desc
     */
    discoverMovies() {
        const url = `${_constants_url_constants__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].DISCOVER}?api_key=${_constants_url_constants__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].API_KEY}&sort_by=popularity.desc`;
        this.httpClient.get(url).subscribe(result => this.moviesResultSource.next(result));
    }
    /**
     * Search movies using search term
     */
    searchMovies(searchTerm) {
        if (searchTerm && typeof searchTerm === 'string') {
            const url = `${_constants_url_constants__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].SEARCH}?api_key=${_constants_url_constants__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].API_KEY}&query=${searchTerm}`;
            this.httpClient.get(url).subscribe(result => this.moviesResultSource.next(result));
        }
    }
}
MovieDiscoverService.ɵfac = function MovieDiscoverService_Factory(t) { return new (t || MovieDiscoverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
MovieDiscoverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MovieDiscoverService, factory: MovieDiscoverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieDiscoverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


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

module.exports = __webpack_require__(/*! C:\MyFiles\Sample Projects\Challenge\movie-theater-coding-challenge\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map