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




const routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', loadChildren: () => Promise.all(/*! import() | components-users-users-module */[__webpack_require__.e("default~components-img-carousel-img-carousel-module~components-users-users-module"), __webpack_require__.e("components-users-users-module")]).then(__webpack_require__.bind(null, /*! ./components/users/users.module */ "./src/app/components/users/users.module.ts")).then(m => m.UsersModule) },
    { path: 'carousel', loadChildren: () => Promise.all(/*! import() | components-img-carousel-img-carousel-module */[__webpack_require__.e("default~components-img-carousel-img-carousel-module~components-users-users-module"), __webpack_require__.e("components-img-carousel-img-carousel-module")]).then(__webpack_require__.bind(null, /*! ./components/img-carousel/img-carousel.module */ "./src/app/components/img-carousel/img-carousel.module.ts")).then(m => m.ImgCarouselModule) },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(commonSvc) {
        this.commonSvc = commonSvc;
        this.title = 'sampleTaskAngular';
        this.commonSvc.initializeData().subscribe((res) => {
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/Data/Users.ts":
/*!****************************************!*\
  !*** ./src/app/services/Data/Users.ts ***!
  \****************************************/
/*! exports provided: User, Users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
class User {
}
const Users = [
    {
        "id": 1001,
        "name": "Jack Hill",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "img": "https://balkangraph.com/js/img/1.jpg"
    },
    {
        "id": 1002,
        "name": "Lexie Cole",
        "email": "Shanna@melissa.tv",
        "phone": "010-692-6593 x09125",
        "img": "https://balkangraph.com/js/img/2.jpg"
    },
    {
        "id": 1003,
        "name": "Janae Barrett",
        "email": "Nathan@yesenia.net",
        "phone": "1-463-123-4447",
        "img": "https://balkangraph.com/js/img/3.jpg"
    },
    {
        "id": 1004,
        "name": "Aaliyah Webb",
        "email": "Julianne.OConner@kory.org",
        "phone": "493-170-9623 x156",
        "img": "https://balkangraph.com/js/img/4.jpg"
    },
    {
        "id": 1005,
        "name": "Elliot Ross",
        "email": "Lucio_Hettinger@annie.ca",
        "phone": "(254)954-1289",
        "img": "https://balkangraph.com/js/img/5.jpg"
    },
    {
        "id": 1006,
        "name": "Anahi Gordon",
        "email": "Gordon@annie.ca",
        "phone": "(254)954-1289",
        "img": "https://balkangraph.com/js/img/6.jpg"
    },
    {
        "id": 1007,
        "name": "Knox Macias",
        "email": "Macias@annie.ca",
        "phone": "(453)545-3435",
        "img": "https://balkangraph.com/js/img/7.jpg"
    },
    {
        "id": 1008,
        "name": "Nash Ingram",
        "email": "Nash@annie.ca",
        "phone": "(264)854-0281",
        "img": "https://balkangraph.com/js/img/8.jpg"
    },
    {
        "id": 1009,
        "name": "Sage Barnett",
        "email": "Sage@annie.ca",
        "phone": "(354)884-0383",
        "img": "https://balkangraph.com/js/img/9.jpg"
    },
    {
        "id": 1010,
        "name": "Alice Gray",
        "email": "Alice@annie.ca",
        "phone": "(864)054-4482",
        "img": "https://balkangraph.com/js/img/10.jpg"
    },
    {
        "id": 1011,
        "name": "Anne Ewing",
        "email": "Ewing@annie.ca",
        "phone": "(254)954-1284",
        "img": "https://balkangraph.com/js/img/11.jpg"
    },
    {
        "id": 1012,
        "name": "Reuben Mcleod",
        "email": "Mcleod@annie.ca",
        "phone": "(254)954-1283",
        "img": "https://balkangraph.com/js/img/12.jpg"
    },
    {
        "id": 1013,
        "name": "Ariel Wiley",
        "email": "Wiley@annie.ca",
        "phone": "(254)954-1280",
        "img": "https://balkangraph.com/js/img/13.jpg"
    },
    {
        "id": 1014,
        "name": "Lucas West",
        "email": "West@annie.ca",
        "phone": "(254)954-1281",
        "img": "https://balkangraph.com/js/img/14.jpg"
    },
    {
        "id": 1015,
        "name": "Adan Travis",
        "email": "Travis@annie.ca",
        "phone": "(254)954-1282",
        "img": "https://balkangraph.com/js/img/15.jpg"
    },
    {
        "id": 1016,
        "name": "Alex Snider",
        "email": "Snider@annie.ca",
        "phone": "(254)954-1289",
        "img": "https://balkangraph.com/js/img/16.jpg"
    },
    {
        "id": 1017,
        "name": "Leanne Graham",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "img": "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        "id": 1018,
        "name": "Ervin Howell",
        "email": "Shanna@melissa.tv",
        "phone": "010-692-6593 x09125",
        "img": "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        "id": 1019,
        "name": "Clementine Bauch",
        "email": "Nathan@yesenia.net",
        "phone": "1-463-123-4447",
        "img": "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        "id": 1020,
        "name": "Patricia Lebsack",
        "email": "Julianne.OConner@kory.org",
        "phone": "493-170-9623 x156",
        "img": "https://randomuser.me/api/portraits/women/8.jpg"
    },
    {
        "id": 1021,
        "name": "Chelsey Dietrich",
        "email": "Lucio_Hettinger@annie.ca",
        "phone": "(784)954-1259",
        "img": "https://randomuser.me/api/portraits/women/10.jpg"
    }
];


/***/ }),

/***/ "./src/app/services/common.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _Data_Users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Data/Users */ "./src/app/services/Data/Users.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



// import 'rxjs/add/operator/map'



class CommonService {
    constructor(router) {
        this.router = router;
    }
    initializeData() {
        localStorage.setItem('users', JSON.stringify(_Data_Users__WEBPACK_IMPORTED_MODULE_3__["Users"]));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])("Data Initialized");
    }
    getOptionTitle(id) {
        let data = JSON.parse(localStorage.getItem('options'));
        var result;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                result = data[i].name;
                break;
            }
        }
        return result;
    }
    getUsers() {
        let data = JSON.parse(localStorage.getItem('users'));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(data);
    }
    addUser(user) {
        let data = JSON.parse(localStorage.getItem('users'));
        let allIds = [];
        for (let i = 0; i < data.length; i++) {
            allIds.push(data[i].id);
        }
        let maxIDNumber = Math.max(...allIds);
        //  user.id = maxIDNumber + 1;
        user.id = maxIDNumber + 1;
        user.img = `https://randomuser.me/api/portraits/women/${maxIDNumber + 1}.jpg`;
        data.push(user);
        localStorage.setItem('users', JSON.stringify(data));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
    deleteUser(id) {
        let data = JSON.parse(localStorage.getItem('users'));
        let orgdata = JSON.parse(localStorage.getItem('orgChart'));
        var allIds = lodash__WEBPACK_IMPORTED_MODULE_1__["map"](orgdata, 'id');
        var result;
        var status = false;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                result = data[i];
                break;
            }
        }
        if (!allIds.includes(result.id)) {
            let newData = data.filter((item) => {
                return item.id != id;
            });
            localStorage.setItem('users', JSON.stringify(newData));
            status = true;
        }
        else {
            status = false;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(status);
    }
    updateUser(user) {
        let data = JSON.parse(localStorage.getItem('users'));
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == user.id) {
                data[i] = user;
                break;
            }
        }
        localStorage.setItem('users', JSON.stringify(data));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


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

module.exports = __webpack_require__(/*! D:\Examples\Angular-Task\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map