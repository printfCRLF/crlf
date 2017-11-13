webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instruments_container_instrument_container_component__ = __webpack_require__("../../../../../src/app/instruments/container/instrument-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__portfolios_portfolios_component__ = __webpack_require__("../../../../../src/app/portfolios/portfolios.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/instruments', pathMatch: 'full' },
    { path: 'instruments', component: __WEBPACK_IMPORTED_MODULE_2__instruments_container_instrument_container_component__["a" /* InstrumentContainerComponent */] },
    { path: 'portfolios', component: __WEBPACK_IMPORTED_MODULE_3__portfolios_portfolios_component__["a" /* PortfoliosComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/*h1 {*/\r\n  /*font-size: 1.2em;*/\r\n  /*color: #999;*/\r\n  /*margin-bottom: 0;*/\r\n/*}*/\r\n/*h2 {*/\r\n  /*font-size: 2em;*/\r\n  /*margin-top: 0;*/\r\n  /*padding-top: 0;*/\r\n/*}*/\r\n/*nav a {*/\r\n  /*padding: 5px 10px;*/\r\n  /*text-decoration: none;*/\r\n  /*margin-top: 10px;*/\r\n  /*display: inline-block;*/\r\n  /*background-color: #eee;*/\r\n  /*border-radius: 4px;*/\r\n/*}*/\r\n/*nav a:visited, a:link {*/\r\n  /*color: #607D8B;*/\r\n/*}*/\r\n/*nav a:hover {*/\r\n  /*color: #039be5;*/\r\n  /*background-color: #CFD8DC;*/\r\n/*}*/\r\n/*nav a.active {*/\r\n  /*color: #039be5;*/\r\n/*}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-expand-lg navbar-dark indigo\">\r\n  <a class=\"navbar-brand\" href=\"#\">Trading Manager</a>\r\n\r\n  <!-- Collapse button -->\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button>\r\n\r\n  <!-- Collapsible content -->\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/instruments\">Instruments</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"  routerLink=\"/portfolios\">Portfolios </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <!-- Collapsible content -->\r\n\r\n</nav>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__instruments_container_instrument_container_component__ = __webpack_require__("../../../../../src/app/instruments/container/instrument-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__instruments_instrument_service__ = __webpack_require__("../../../../../src/app/instruments/instrument.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__deal_deal_component__ = __webpack_require__("../../../../../src/app/deal/deal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__portfolios_portfolios_component__ = __webpack_require__("../../../../../src/app/portfolios/portfolios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__portfolio_portfolio_service__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__portfolio_portfolio_service_mock__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.service.mock.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__portfolios_pipe__ = __webpack_require__("../../../../../src/app/portfolios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__instruments_add_instrument_add_component__ = __webpack_require__("../../../../../src/app/instruments/add/instrument-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__instruments_list_instrument_list_component__ = __webpack_require__("../../../../../src/app/instruments/list/instrument-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__currency_dropdown_currency_dropdown_component__ = __webpack_require__("../../../../../src/app/currency-dropdown/currency-dropdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pnl_pnl_service__ = __webpack_require__("../../../../../src/app/pnl/pnl.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__instruments_container_instrument_container_component__["a" /* InstrumentContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_7__deal_deal_component__["a" /* DealComponent */],
                __WEBPACK_IMPORTED_MODULE_8__portfolios_portfolios_component__["a" /* PortfoliosComponent */],
                __WEBPACK_IMPORTED_MODULE_11__portfolios_pipe__["a" /* KeyValuePipe */],
                __WEBPACK_IMPORTED_MODULE_12__instruments_add_instrument_add_component__["a" /* InstrumentAddComponent */],
                __WEBPACK_IMPORTED_MODULE_13__instruments_list_instrument_list_component__["a" /* InstrumentListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__currency_dropdown_currency_dropdown_component__["a" /* CurrencyDropdownComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__instruments_instrument_service__["a" /* InstrumentService */], __WEBPACK_IMPORTED_MODULE_9__portfolio_portfolio_service__["a" /* PortfolioService */], __WEBPACK_IMPORTED_MODULE_10__portfolio_portfolio_service_mock__["a" /* PortfolioServiceMock */], __WEBPACK_IMPORTED_MODULE_15__pnl_pnl_service__["a" /* PnLService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/currency-dropdown/currency-dropdown.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn.dropdown-toggle {\r\n  padding-top: 4px;\r\n  padding-bottom: 4px;\r\n  margin-bottom: 2px;\r\n  margin-left: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/currency-dropdown/currency-dropdown.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<select (change)=\"parseValue($event.target.value)\"-->\n        <!--class=\"dropdown\">-->\n  <!--<option *ngFor=\"let name of options\"-->\n          <!--[value]=\"name\"-->\n          <!--class=\"dropdown-item\">{{name}}</option>-->\n<!--</select>-->\n\n<div class=\"dropdown w-100\">\n  <button class=\"btn btn-outline-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\"\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{currency}}</button>\n\n  <div class=\"dropdown-menu dropdown-primary\">\n    <a class=\"dropdown-item\" *ngFor=\"let name of options\"\n            (click)=\"parseValue(name)\">{{name}}</a>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/currency-dropdown/currency-dropdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyDropdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__instruments_currency__ = __webpack_require__("../../../../../src/app/instruments/currency.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrencyDropdownComponent = (function () {
    function CurrencyDropdownComponent() {
        this.onSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    CurrencyDropdownComponent.prototype.ngOnInit = function () {
        var options = Object.keys(__WEBPACK_IMPORTED_MODULE_1__instruments_currency__["a" /* Currency */]);
        this.options = options.slice();
    };
    CurrencyDropdownComponent.prototype.parseValue = function (value) {
        this.currency = __WEBPACK_IMPORTED_MODULE_1__instruments_currency__["a" /* Currency */][value];
        this.onSelected.emit(this.currency);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CurrencyDropdownComponent.prototype, "currency", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], CurrencyDropdownComponent.prototype, "onSelected", void 0);
    CurrencyDropdownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-currency-dropdown',
            template: __webpack_require__("../../../../../src/app/currency-dropdown/currency-dropdown.component.html"),
            styles: [__webpack_require__("../../../../../src/app/currency-dropdown/currency-dropdown.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], CurrencyDropdownComponent);
    return CurrencyDropdownComponent;
}());



/***/ }),

/***/ "../../../../../src/app/deal/deal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-group .btn.active {\r\n  background-color: lightseagreen;\r\n  color: white !important;\r\n}\r\n\r\n.btn-group .btn {\r\n  padding-top: 4px;\r\n  padding-bottom: 4px;\r\n  margin-bottom: 2px;\r\n  margin-left: 0;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/deal/deal.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"instrument\">\n  <form class=\"container\">\n    <h3 class=\"text-center\" >{{instrument.name}}</h3>\n\n    <div class=\"text-center mt-4\">\n      <div class=\"btn-group\" data-toggle=\"buttons\">\n        <label class=\"btn btn-outline-default\" (click)=\"clickLong()\">\n          <input type=\"radio\" name=\"options\" id=\"long\" autocomplete=\"off\">Long</label>\n        <label class=\"btn btn-outline-default\" (click)=\"clickShort()\">\n          <input type=\"radio\" name=\"options\" id=\"short\" autocomplete=\"off\" >Short</label>\n      </div>\n    </div>\n\n    <div class=\"row mt-4\">\n      <div class=\"col-4 mt-2\">\n        <label class=\"float-right\">Price</label>\n      </div>\n      <div class=\"col-6\">\n        <input type=\"number\" [(ngModel)]=\"deal.price\" name=\"price\"/>\n      </div>\n      <div class=\"col-2 mt-2\">\n        {{instrument.currency}}\n      </div>\n    </div>\n\n    <div class=\"row mt-2\">\n      <div class=\"col-4 mt-2\">\n        <label class=\"float-right\">Size</label>\n      </div>\n      <div class=\"col-8\">\n        <input type=\"number\" [(ngModel)]=\"deal.quantity\" name=\"quantity\"/>\n      </div>\n    </div>\n\n    <div class=\"row mt-2\">\n      <div class=\"col-4 mt-2\">\n        <label class=\"float-right\">Portfolio</label>\n      </div>\n      <div class=\"col-8\">\n        <input type=\"text\" [(ngModel)]=\"deal.portfolioName\" name=\"portfolio\"/>\n      </div>\n    </div>\n\n    <div class=\"row mt-2\">\n      <div class=\"col-4 mt-2\">\n        <label class=\"float-right\">Acquirer</label>\n      </div>\n      <div class=\"col-8\">\n        <input type=\"text\" [(ngModel)]=\"deal.acquirer\" name=\"acquirer\"/>\n      </div>\n    </div>\n\n    <div class=\"row mt-2\">\n      <div class=\"col-4 mt-2\">\n        <label class=\"float-right\">Counter party</label>\n      </div>\n      <div class=\"col-8\">\n        <input type=\"text\" [(ngModel)]=\"deal.counterParty\" name=\"counterParty\"/>\n      </div>\n    </div>\n\n    <div class=\"row mt-2\">\n      <div class=\"col-4 mt-2\">\n        <label class=\"float-right\">Acquirer</label>\n      </div>\n      <div class=\"col-8\">\n        <input type=\"text\" [(ngModel)]=\"deal.marketPlace\" name=\"marketPlace\"/>\n      </div>\n    </div>\n\n    <div class=\"text-center mt-4\">\n      <button class=\"btn btn-default\" (click)=\"placeDeal()\">Place deal</button>\n    </div>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/deal/deal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__instruments_instrument__ = __webpack_require__("../../../../../src/app/instruments/instrument.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deal_deal__ = __webpack_require__("../../../../../src/app/deal/deal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__portfolio_portfolio_service__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__instruments_instrument_service__ = __webpack_require__("../../../../../src/app/instruments/instrument.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DealComponent = (function () {
    function DealComponent(portfolioService, instrumentService) {
        this.portfolioService = portfolioService;
        this.instrumentService = instrumentService;
    }
    DealComponent.prototype.ngOnInit = function () {
    };
    DealComponent.prototype.ngOnChanges = function (changes) {
        var instrument = changes.instrument.currentValue;
        if (!instrument) {
            return;
        }
        this.deal = new __WEBPACK_IMPORTED_MODULE_2__deal_deal__["a" /* Deal */](instrument, 'Deutsche Bank', __WEBPACK_IMPORTED_MODULE_2__deal_deal__["b" /* Direction */].Long, instrument.price, 100, new Date(Date.now()), 'Equity Desk', 'Deutsche Bank', 'OMX');
    };
    DealComponent.prototype.clickLong = function () {
        this.deal.direction = __WEBPACK_IMPORTED_MODULE_2__deal_deal__["b" /* Direction */].Long;
    };
    DealComponent.prototype.clickShort = function () {
        this.deal.direction = __WEBPACK_IMPORTED_MODULE_2__deal_deal__["b" /* Direction */].Short;
    };
    DealComponent.prototype.placeDeal = function () {
        this.instrumentService.update(this.deal.instrument.id, this.deal.price);
        this.portfolioService.add(this.deal);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__instruments_instrument__["a" /* Instrument */])
    ], DealComponent.prototype, "instrument", void 0);
    DealComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-deal',
            template: __webpack_require__("../../../../../src/app/deal/deal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/deal/deal.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__portfolio_portfolio_service__["a" /* PortfolioService */],
            __WEBPACK_IMPORTED_MODULE_4__instruments_instrument_service__["a" /* InstrumentService */]])
    ], DealComponent);
    return DealComponent;
}());



/***/ }),

/***/ "../../../../../src/app/deal/deal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Deal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Direction; });
var Deal = (function () {
    function Deal(instrument, portfolioName, direction, price, quantity, tradeTime, acquirer, counterParty, marketPlace) {
        this.instrument = instrument;
        this.portfolioName = portfolioName;
        this.direction = direction;
        this.price = price;
        this.quantity = quantity;
        this.tradeTime = tradeTime;
        this.acquirer = acquirer;
        this.counterParty = counterParty;
        this.marketPlace = marketPlace;
    }
    return Deal;
}());

var Direction;
(function (Direction) {
    Direction["Long"] = "Long";
    Direction["Short"] = "Short";
})(Direction || (Direction = {}));


/***/ }),

/***/ "../../../../../src/app/instruments/add/instrument-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/instruments/add/instrument-add.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Add an instrument</h3>\n<form class=\"form-inline\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"instrument.name\" name=\"name\" placeholder=\"AMAZ\"/>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Price</label>\n    <input type=\"number\" [(ngModel)]=\"instrument.price\" name=\"price\" placeholder=\"1014.35\"/>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Issuer</label>\n    <input type=\"text\" [(ngModel)]=\"instrument.issuer\" name=\"issuer\" placeholder=\"Asea Brown Boveri\"/>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"active\">Currency</label>\n    <app-currency-dropdown [currency]=\"instrument.currency\"\n                           (onSelected)=\"currencySelected($event)\"\n                           class=\"w-100\"></app-currency-dropdown>\n  </div>\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-default\" (click)=\"add(instrument)\">Add</button>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/instruments/add/instrument-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstrumentAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__currency__ = __webpack_require__("../../../../../src/app/instruments/currency.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instrument__ = __webpack_require__("../../../../../src/app/instruments/instrument.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instrument_service__ = __webpack_require__("../../../../../src/app/instruments/instrument.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InstrumentAddComponent = (function () {
    function InstrumentAddComponent(instrumentService) {
        this.instrumentService = instrumentService;
        // instrument: Instrument = { id: 100, name : 'IBM', issuer : 'NYSE', currency: Currency.USD};
        this.instrument = new __WEBPACK_IMPORTED_MODULE_2__instrument__["a" /* Instrument */](-1, 'AMAZ', 1014.22, 'NYSE', __WEBPACK_IMPORTED_MODULE_1__currency__["a" /* Currency */].USD);
    }
    InstrumentAddComponent.prototype.ngOnInit = function () {
    };
    InstrumentAddComponent.prototype.add = function (instrument) {
        var copy = __assign({}, instrument);
        this.instrumentService.add(copy);
    };
    InstrumentAddComponent.prototype.currencySelected = function (currency) {
        this.instrument.currency = currency;
    };
    InstrumentAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-instrument-add',
            template: __webpack_require__("../../../../../src/app/instruments/add/instrument-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/instruments/add/instrument-add.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__instrument_service__["a" /* InstrumentService */]])
    ], InstrumentAddComponent);
    return InstrumentAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/instruments/container/instrument-container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/instruments/container/instrument-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-4\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8 col-md-8\">\r\n      <app-instrument-add ></app-instrument-add>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-8\">\r\n        <app-instrument-list\r\n                             [selectedInstrument]=\"selectedInstrument\"\r\n                             (onSelected) = \"onSelected($event)\" ></app-instrument-list>\r\n    </div>\r\n\r\n    <div class=\"col-4 border border-right-0 border-top-0 border-bottom-0 \">\r\n      <app-deal [instrument]=\"selectedInstrument\"></app-deal>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/instruments/container/instrument-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstrumentContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__instrument_service__ = __webpack_require__("../../../../../src/app/instruments/instrument.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InstrumentContainerComponent = (function () {
    function InstrumentContainerComponent(instrumentService) {
        this.instrumentService = instrumentService;
    }
    InstrumentContainerComponent.prototype.onSelected = function (instrument) {
        this.selectedInstrument = instrument;
    };
    InstrumentContainerComponent.prototype.ngOnInit = function () { };
    InstrumentContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-instrument-container',
            template: __webpack_require__("../../../../../src/app/instruments/container/instrument-container.component.html"),
            styles: [__webpack_require__("../../../../../src/app/instruments/container/instrument-container.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__instrument_service__["a" /* InstrumentService */]])
    ], InstrumentContainerComponent);
    return InstrumentContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/instruments/currency.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Currency; });
var Currency;
(function (Currency) {
    Currency["USD"] = "USD";
    Currency["SEK"] = "SEK";
    Currency["EURO"] = "EURO";
    Currency["JPY"] = "JPY";
})(Currency || (Currency = {}));


/***/ }),

/***/ "../../../../../src/app/instruments/instrument.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstrumentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__currency__ = __webpack_require__("../../../../../src/app/instruments/currency.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instrument__ = __webpack_require__("../../../../../src/app/instruments/instrument.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InstrumentService = (function () {
    function InstrumentService() {
        this.instruments = [];
        this.instruments.push(new __WEBPACK_IMPORTED_MODULE_2__instrument__["a" /* Instrument */](100, 'IBM', 145.0, 'Asea Brown Boveri', __WEBPACK_IMPORTED_MODULE_1__currency__["a" /* Currency */].USD));
        this.instruments.push(new __WEBPACK_IMPORTED_MODULE_2__instrument__["a" /* Instrument */](101, 'MSFT', 60.45, 'Goldman Sachs', __WEBPACK_IMPORTED_MODULE_1__currency__["a" /* Currency */].USD));
        this.instruments.push(new __WEBPACK_IMPORTED_MODULE_2__instrument__["a" /* Instrument */](201, 'ABB', 201.40, 'Lundbergs företag', __WEBPACK_IMPORTED_MODULE_1__currency__["a" /* Currency */].EURO));
        this.instruments.push(new __WEBPACK_IMPORTED_MODULE_2__instrument__["a" /* Instrument */](202, 'ERIC', 33.33, 'Lundbergs företag', __WEBPACK_IMPORTED_MODULE_1__currency__["a" /* Currency */].SEK));
    }
    InstrumentService.prototype.get = function () {
        return this.instruments;
    };
    InstrumentService.prototype.add = function (instrument) {
        instrument.id = this._generateId();
        this.instruments.push(instrument);
    };
    InstrumentService.prototype.getPrice = function (instrumentId) {
        var inst = __WEBPACK_IMPORTED_MODULE_3_underscore__(this.instruments).find(function (ins) { return ins.id === instrumentId; });
        if (!inst) {
            throw new Error("Cannot find instrumentId" + instrumentId);
        }
        return inst.price;
    };
    InstrumentService.prototype.update = function (instrumentId, price) {
        var inst = __WEBPACK_IMPORTED_MODULE_3_underscore__(this.instruments).find(function (ins) { return ins.id === instrumentId; });
        if (!inst) {
            return false;
        }
        inst.price = price;
        return true;
    };
    InstrumentService.prototype._generateId = function () {
        var ids = __WEBPACK_IMPORTED_MODULE_3_underscore__(this.instruments).pluck('id');
        return __WEBPACK_IMPORTED_MODULE_3_underscore__["max"](ids) + 1;
    };
    InstrumentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], InstrumentService);
    return InstrumentService;
}());



/***/ }),

/***/ "../../../../../src/app/instruments/instrument.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Instrument; });
var Instrument = (function () {
    function Instrument(id, name, price, issuer, currency) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.issuer = issuer;
        this.currency = currency;
    }
    return Instrument;
}());



/***/ }),

/***/ "../../../../../src/app/instruments/list/instrument-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table {\r\n  width: 100%;\r\n}\r\n\r\n.table tr.selected {\r\n  background-color: #CFD8DC;\r\n}\r\n\r\n.table tr.selected:hover {\r\n  background-color: #BBD8DC;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/instruments/list/instrument-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>List of instruments </h3>\n<table class=\"table table-striped table-hover\">\n  <thead>\n  <th>Id</th>\n  <th>Name</th>\n  <th>Market Price</th>\n  <th>Issuer</th>\n  <th>Currency</th>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let instrument of instruments\"\n      [class.selected]=\"instrument === selectedInstrument\"\n      (click)=\"onSelect(instrument)\">\n    <td>{{instrument.id}}</td>\n    <td>{{instrument.name}}</td>\n    <td>{{instrument.price | number:'1.2-2' }}</td>\n    <td>{{instrument.issuer}}</td>\n    <td>{{instrument.currency}}</td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/instruments/list/instrument-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstrumentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__instrument__ = __webpack_require__("../../../../../src/app/instruments/instrument.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instrument_service__ = __webpack_require__("../../../../../src/app/instruments/instrument.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InstrumentListComponent = (function () {
    function InstrumentListComponent(instrumentService) {
        this.instrumentService = instrumentService;
        this.onSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    InstrumentListComponent.prototype.getInstruments = function () {
        this.instruments = this.instrumentService.get();
    };
    InstrumentListComponent.prototype.onSelect = function (instrument) {
        this.selectedInstrument = instrument;
        this.onSelected.emit(instrument);
    };
    InstrumentListComponent.prototype.ngOnInit = function () {
        this.getInstruments();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__instrument__["a" /* Instrument */])
    ], InstrumentListComponent.prototype, "selectedInstrument", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], InstrumentListComponent.prototype, "onSelected", void 0);
    InstrumentListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-instrument-list',
            template: __webpack_require__("../../../../../src/app/instruments/list/instrument-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/instruments/list/instrument-list.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__instrument_service__["a" /* InstrumentService */]])
    ], InstrumentListComponent);
    return InstrumentListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pnl/pnl.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PnLService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instruments_instrument_service__ = __webpack_require__("../../../../../src/app/instruments/instrument.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__deal_deal__ = __webpack_require__("../../../../../src/app/deal/deal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pnl__ = __webpack_require__("../../../../../src/app/pnl/pnl.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PnLService = (function () {
    function PnLService(instrumentService) {
        this.instrumentService = instrumentService;
    }
    PnLService.prototype.calculatePosition = function (position) {
        var marketPrice = this.instrumentService.getPrice(position.instrument.id);
        var d = position.direction === __WEBPACK_IMPORTED_MODULE_3__deal_deal__["b" /* Direction */].Long ? 1 : -1;
        var upl = (marketPrice - position.price) * position.quantity * d;
        return new __WEBPACK_IMPORTED_MODULE_4__pnl__["a" /* PnL */](upl, 0.0);
    };
    PnLService.prototype.calculatePortfolio = function (portfolio) {
        var upl = __WEBPACK_IMPORTED_MODULE_1_underscore__(portfolio.positions).reduce((function (memo, position) {
            return memo + position.pnl.upl;
        }), 0.0);
        var rpl = __WEBPACK_IMPORTED_MODULE_1_underscore__(portfolio.positions).reduce((function (memo, position) {
            return memo + position.pnl.rpl;
        }), 0.0);
        return new __WEBPACK_IMPORTED_MODULE_4__pnl__["a" /* PnL */](upl, rpl);
    };
    PnLService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__instruments_instrument_service__["a" /* InstrumentService */]])
    ], PnLService);
    return PnLService;
}());



/***/ }),

/***/ "../../../../../src/app/pnl/pnl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PnL; });
var PnL = (function () {
    function PnL(upl, rpl) {
        this.upl = upl;
        this.rpl = rpl;
        this.upl = upl;
        this.rpl = rpl;
    }
    PnL.prototype.tpl = function () {
        return this.upl + this.rpl;
    };
    return PnL;
}());



/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.service.mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioServiceMock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__portfolio__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instruments_instrument_service__ = __webpack_require__("../../../../../src/app/instruments/instrument.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__deal_deal__ = __webpack_require__("../../../../../src/app/deal/deal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__position__ = __webpack_require__("../../../../../src/app/portfolio/position.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PortfolioServiceMock = (function () {
    function PortfolioServiceMock(instrumentService) {
        this.instrumentService = instrumentService;
        this.DeutscheBank = 'Deutsche Bank';
        this.Unicredit = 'Unicredit';
        this.BankOfChina = 'Bank of China';
    }
    PortfolioServiceMock.prototype.generate = function () {
        var portfolios = new Map();
        var db = new __WEBPACK_IMPORTED_MODULE_2__portfolio__["a" /* Portfolio */]('Deutsche Bank', undefined);
        var uc = new __WEBPACK_IMPORTED_MODULE_2__portfolio__["a" /* Portfolio */]('Unicredit', undefined);
        portfolios.set(db.name, db);
        portfolios.set(uc.name, uc);
        var instrumentService = new __WEBPACK_IMPORTED_MODULE_3__instruments_instrument_service__["a" /* InstrumentService */]();
        var ibm = __WEBPACK_IMPORTED_MODULE_1_underscore__(instrumentService.get()).find(function (i) { return i.name === 'IBM'; });
        var msft = __WEBPACK_IMPORTED_MODULE_1_underscore__(instrumentService.get()).find(function (i) { return i.name === 'MSFT'; });
        var abb = __WEBPACK_IMPORTED_MODULE_1_underscore__(instrumentService.get()).find(function (i) { return i.name === 'ABB'; });
        var eric = __WEBPACK_IMPORTED_MODULE_1_underscore__(instrumentService.get()).find(function (i) { return i.name === 'ERIC'; });
        var d1 = new __WEBPACK_IMPORTED_MODULE_4__deal_deal__["a" /* Deal */](ibm, this.DeutscheBank, __WEBPACK_IMPORTED_MODULE_4__deal_deal__["b" /* Direction */].Long, ibm.price, 100, new Date(Date.now()), this.DeutscheBank, this.Unicredit, 'NYSE');
        var d2 = new __WEBPACK_IMPORTED_MODULE_4__deal_deal__["a" /* Deal */](ibm, this.DeutscheBank, __WEBPACK_IMPORTED_MODULE_4__deal_deal__["b" /* Direction */].Long, ibm.price + 5, 200, new Date(Date.now()), this.DeutscheBank, this.Unicredit, 'NYSE');
        var d3 = new __WEBPACK_IMPORTED_MODULE_4__deal_deal__["a" /* Deal */](ibm, this.DeutscheBank, __WEBPACK_IMPORTED_MODULE_4__deal_deal__["b" /* Direction */].Short, ibm.price + 10, 100, new Date(Date.now()), this.DeutscheBank, this.BankOfChina, 'NYSE');
        var d4 = new __WEBPACK_IMPORTED_MODULE_4__deal_deal__["a" /* Deal */](ibm, this.DeutscheBank, __WEBPACK_IMPORTED_MODULE_4__deal_deal__["b" /* Direction */].Short, ibm.price + 11, 100, new Date(Date.now()), this.DeutscheBank, this.BankOfChina, 'NYSE');
        db.positions.push(new __WEBPACK_IMPORTED_MODULE_5__position__["a" /* Position */](d1, undefined));
        db.positions.push(new __WEBPACK_IMPORTED_MODULE_5__position__["a" /* Position */](d2, undefined));
        db.positions.push(new __WEBPACK_IMPORTED_MODULE_5__position__["a" /* Position */](d3, undefined));
        db.positions.push(new __WEBPACK_IMPORTED_MODULE_5__position__["a" /* Position */](d4, undefined));
        var d5 = new __WEBPACK_IMPORTED_MODULE_4__deal_deal__["a" /* Deal */](abb, this.DeutscheBank, __WEBPACK_IMPORTED_MODULE_4__deal_deal__["b" /* Direction */].Short, abb.price + 2.2, 100, new Date(Date.now()), this.DeutscheBank, this.BankOfChina, 'OMX');
        var d6 = new __WEBPACK_IMPORTED_MODULE_4__deal_deal__["a" /* Deal */](abb, this.DeutscheBank, __WEBPACK_IMPORTED_MODULE_4__deal_deal__["b" /* Direction */].Short, abb.price + 2.2, 100, new Date(Date.now()), this.DeutscheBank, this.BankOfChina, 'OMX');
        db.positions.push(new __WEBPACK_IMPORTED_MODULE_5__position__["a" /* Position */](d5, undefined));
        db.positions.push(new __WEBPACK_IMPORTED_MODULE_5__position__["a" /* Position */](d6, undefined));
        var d10 = new __WEBPACK_IMPORTED_MODULE_4__deal_deal__["a" /* Deal */](abb, this.Unicredit, __WEBPACK_IMPORTED_MODULE_4__deal_deal__["b" /* Direction */].Long, abb.price - 1.5, 10000, new Date(Date.now()), this.Unicredit, this.BankOfChina, 'OMX');
        var d11 = new __WEBPACK_IMPORTED_MODULE_4__deal_deal__["a" /* Deal */](msft, this.Unicredit, __WEBPACK_IMPORTED_MODULE_4__deal_deal__["b" /* Direction */].Long, msft.price - 0.12, 20000, new Date(Date.now()), this.Unicredit, this.BankOfChina, 'NYSE');
        uc.positions.push(new __WEBPACK_IMPORTED_MODULE_5__position__["a" /* Position */](d10, undefined));
        uc.positions.push(new __WEBPACK_IMPORTED_MODULE_5__position__["a" /* Position */](d11, undefined));
        return portfolios;
    };
    PortfolioServiceMock.prototype._generatePositions = function () {
    };
    PortfolioServiceMock = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__instruments_instrument_service__["a" /* InstrumentService */]])
    ], PortfolioServiceMock);
    return PortfolioServiceMock;
}());



/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__position__ = __webpack_require__("../../../../../src/app/portfolio/position.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__portfolio__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__portfolio_service_mock__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.service.mock.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PortfolioService = (function () {
    function PortfolioService(mock) {
        this.mock = mock;
        this.portfolios = new Map();
    }
    PortfolioService.prototype._generatePort = function () {
        var db = new __WEBPACK_IMPORTED_MODULE_2__portfolio__["a" /* Portfolio */]('Deutsche Bank', undefined);
        var uc = new __WEBPACK_IMPORTED_MODULE_2__portfolio__["a" /* Portfolio */]('Unicredit', undefined);
        this.portfolios.set(db.name, db);
        this.portfolios.set(uc.name, uc);
    };
    PortfolioService.prototype.load = function () {
        this.portfolios = this.mock.generate();
    };
    PortfolioService.prototype.reset = function () {
        this.portfolios = new Map();
    };
    PortfolioService.prototype.add = function (deal) {
        var port = this._getOrCreate(deal.portfolioName);
        var position = new __WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */](deal, undefined);
        port.positions.push(position);
    };
    PortfolioService.prototype._getOrCreate = function (name) {
        if (!this.portfolios.has(name)) {
            var p = new __WEBPACK_IMPORTED_MODULE_2__portfolio__["a" /* Portfolio */](name, undefined);
            this.portfolios.set(p.name, p);
        }
        return this.portfolios.get(name);
    };
    PortfolioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__portfolio_service_mock__["a" /* PortfolioServiceMock */]])
    ], PortfolioService);
    return PortfolioService;
}());



/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Portfolio; });
var Portfolio = (function () {
    function Portfolio(name, pnl) {
        this.name = name;
        this.pnl = pnl;
        this.positions = [];
        this._name = 'My portfolio';
        this._name = name;
    }
    Portfolio.prototype.add = function (position) {
        this.positions.push(position);
    };
    return Portfolio;
}());



/***/ }),

/***/ "../../../../../src/app/portfolio/position.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Position; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deal_deal__ = __webpack_require__("../../../../../src/app/deal/deal.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Position = (function (_super) {
    __extends(Position, _super);
    function Position(deal, pnl) {
        var _this = _super.call(this, deal.instrument, deal.portfolioName, deal.direction, deal.price, deal.quantity, deal.tradeTime, deal.acquirer, deal.counterParty, deal.marketPlace) || this;
        _this.deal = deal;
        _this.pnl = pnl;
        return _this;
    }
    return Position;
}(__WEBPACK_IMPORTED_MODULE_0__deal_deal__["a" /* Deal */]));



/***/ }),

/***/ "../../../../../src/app/portfolios/pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyValuePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeyValuePipe = (function () {
    function KeyValuePipe() {
    }
    KeyValuePipe.prototype.transform = function (value, args) {
        var kvs = [];
        value.forEach(function (entryVal, entryKey) {
            kvs.push({ key: entryKey, value: entryVal });
        });
        return kvs;
    };
    KeyValuePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'keyValue' })
    ], KeyValuePipe);
    return KeyValuePipe;
}());



/***/ }),

/***/ "../../../../../src/app/portfolios/portfolios.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portfolios/portfolios.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"p-4\">\n  <button class=\"btn btn-default\" (click)=\"load()\">Load</button>\n  <button class=\"btn btn-default\" (click)=\"reset()\">Reset</button>\n\n  <table class=\"table table-striped table-hover \">\n    <thead>\n      <tr class=\"font-bold\">\n        <th></th>\n        <th colspan=\"3\" class=\"text-center\">Instrument</th>\n        <th colspan=\"4\" class=\"text-center\">Position</th>\n        <th colspan=\"3\" class=\"text-center\">Profit / Loss</th>\n      </tr>\n      <tr class=\"font-bold\">\n        <th>Portfolio</th>\n        <th class=\"text-right\">Market Price</th>\n        <th>Currency</th>\n        <th>Issuer</th>\n        <th>Direction</th>\n        <th class=\"text-right\">Price</th>\n        <th class=\"text-right\">Quantity</th>\n        <th class=\"text-right\">Value</th>\n        <th class=\"text-right\">TPL</th>\n        <th class=\"text-right\">UPL</th>\n        <th class=\"text-right\">RPL</th>\n      </tr>\n    </thead>\n\n    <tbody>\n\n      <ng-container *ngFor=\"let kv of portfolios() | keyValue\">\n        <tr class=\"border\">\n          <td class=\"font-bold\">{{kv.key}}</td>\n          <td colspan=\"3\"></td>\n          <td colspan=\"4\"></td>\n          <td class=\"font-bold text-right\">{{kv.value.pnl.tpl() | number:\"1.2-2\"}}</td>\n          <td class=\"font-bold text-right\">{{kv.value.pnl.upl | number:\"1.2-2\"}}</td>\n          <td class=\"font-bold text-right\">{{kv.value.pnl.rpl | number:\"1.2-2\"}}</td>\n        </tr>\n        <tr *ngFor=\"let position of kv.value.positions\" class=\"border\">\n          <td class=\"border \">\n            <span class=\"ml-4 mr-4\"> </span>\n            <span>{{position.instrument.name}}</span>\n          </td>\n          <td class=\"text-right\">{{ getMarketPrice(position.instrument.id) | number:\"1.2-2\"}}</td>\n          <td>{{position.instrument.currency}}</td>\n          <td class=\"border border-left-0\">{{position.instrument.issuer}}</td>\n          <td>{{position.direction}}</td>\n          <td class=\"text-right\">{{position.price | number:\"1.2-2\"}}</td>\n          <td class=\"text-right\">{{position.quantity}}</td>\n          <td class=\"text-right border border-left-0\">{{(position.price * position.quantity) | number:\"1.2-2\"}} </td>\n          <td class=\"text-right\">{{position.pnl.tpl() | number:\"1.2-2\"}}</td>\n          <td class=\"text-right\">{{position.pnl.upl | number:\"1.2-2\"}}</td>\n          <td class=\"text-right border border-left-0\">{{position.pnl.rpl | number:\"1.2-2\"}}</td>\n        </tr>\n      </ng-container>\n\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/portfolios/portfolios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfoliosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portfolio_portfolio_service__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instruments_instrument_service__ = __webpack_require__("../../../../../src/app/instruments/instrument.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pnl_pnl_service__ = __webpack_require__("../../../../../src/app/pnl/pnl.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PortfoliosComponent = (function () {
    function PortfoliosComponent(portfolioService, instrumentService, pnlService) {
        this.portfolioService = portfolioService;
        this.instrumentService = instrumentService;
        this.pnlService = pnlService;
    }
    PortfoliosComponent.prototype.ngOnInit = function () {
    };
    PortfoliosComponent.prototype.load = function () {
        this.portfolioService.load();
    };
    PortfoliosComponent.prototype.reset = function () {
        this.portfolioService.reset();
    };
    PortfoliosComponent.prototype.portfolios = function () {
        this._calculatePnL();
        return this.portfolioService.portfolios;
    };
    PortfoliosComponent.prototype.getMarketPrice = function (instrumentId) {
        return this.instrumentService.getPrice(instrumentId);
    };
    PortfoliosComponent.prototype._calculatePnL = function () {
        var _this = this;
        this.portfolioService.portfolios.forEach(function (port, key, map) {
            for (var _i = 0, _a = port.positions; _i < _a.length; _i++) {
                var position = _a[_i];
                position.pnl = _this.pnlService.calculatePosition(position);
            }
            port.pnl = _this.pnlService.calculatePortfolio(port);
        });
    };
    PortfoliosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-portfolios',
            template: __webpack_require__("../../../../../src/app/portfolios/portfolios.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portfolios/portfolios.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__portfolio_portfolio_service__["a" /* PortfolioService */],
            __WEBPACK_IMPORTED_MODULE_2__instruments_instrument_service__["a" /* InstrumentService */],
            __WEBPACK_IMPORTED_MODULE_3__pnl_pnl_service__["a" /* PnLService */]])
    ], PortfoliosComponent);
    return PortfoliosComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map