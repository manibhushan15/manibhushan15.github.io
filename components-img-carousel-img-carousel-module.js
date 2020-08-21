(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-img-carousel-img-carousel-module"],{

/***/ "./src/app/components/img-carousel/img-carousel-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/img-carousel/img-carousel-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ImgCarouselRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgCarouselRoutingModule", function() { return ImgCarouselRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _img_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img-carousel.component */ "./src/app/components/img-carousel/img-carousel.component.ts");





const routes = [
    { path: '', component: _img_carousel_component__WEBPACK_IMPORTED_MODULE_2__["ImgCarouselComponent"] },
];
class ImgCarouselRoutingModule {
}
ImgCarouselRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ImgCarouselRoutingModule });
ImgCarouselRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ImgCarouselRoutingModule_Factory(t) { return new (t || ImgCarouselRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImgCarouselRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgCarouselRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/img-carousel/img-carousel.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/img-carousel/img-carousel.component.ts ***!
  \*******************************************************************/
/*! exports provided: ImgCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgCarouselComponent", function() { return ImgCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-useful-swiper */ "./node_modules/ngx-useful-swiper/__ivy_ngcc__/fesm2015/ngx-useful-swiper.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["swiper"];
function ImgCarouselComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const image_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ImgCarouselComponent {
    constructor() {
        this.images = [
            'https://picsum.photos/700/250/?image=27',
            'https://picsum.photos/700/250/?image=22',
            'https://picsum.photos/700/250/?image=61',
            'https://picsum.photos/700/250/?image=23',
            'https://picsum.photos/700/250/?image=24',
            'https://picsum.photos/700/250/?image=26',
            'https://picsum.photos/700/250/?image=41',
            'https://picsum.photos/700/250/?image=28',
            'https://picsum.photos/700/250/?image=21',
            'https://picsum.photos/700/250/?image=20',
            'https://picsum.photos/400/250/?image=75'
        ];
        this.config = {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: { el: '.swiper-pagination', clickable: true },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            }
        };
    }
    ngOnInit() { }
    next() {
        this.swiper.swiper.slideNext();
    }
    prev() {
        this.swiper.swiper.slidePrev();
    }
}
ImgCarouselComponent.ɵfac = function ImgCarouselComponent_Factory(t) { return new (t || ImgCarouselComponent)(); };
ImgCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImgCarouselComponent, selectors: [["app-img-carousel"]], viewQuery: function ImgCarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.swiper = _t.first);
    } }, decls: 11, vars: 2, consts: [[1, "main-content"], [1, "container-fluid"], ["type", "button", "routerLink", "/users", 1, "mat-raised-button", "route-btn"], [3, "config"], ["swiper", ""], [1, "swiper-wrapper"], ["class", "swiper-slide", 3, "src", 4, "ngFor", "ngForOf"], [1, "swiper-pagination"], [1, "swiper-button-prev", 3, "click"], [1, "swiper-button-next", 3, "click"], [1, "swiper-slide", 3, "src"]], template: function ImgCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Go to Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "swiper", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ImgCarouselComponent_img_7_Template, 1, 1, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImgCarouselComponent_Template_div_click_9_listener() { return ctx.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImgCarouselComponent_Template_div_click_10_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_2__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".container-fluid[_ngcontent-%COMP%]{\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbWctY2Fyb3VzZWwvaW1nLWNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbWctY2Fyb3VzZWwvaW1nLWNhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-img-carousel',
                templateUrl: './img-carousel.component.html',
                styleUrls: ['./img-carousel.component.css']
            }]
    }], function () { return []; }, { swiper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['swiper', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/img-carousel/img-carousel.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/img-carousel/img-carousel.module.ts ***!
  \****************************************************************/
/*! exports provided: ImgCarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgCarouselModule", function() { return ImgCarouselModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _img_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img-carousel.component */ "./src/app/components/img-carousel/img-carousel.component.ts");
/* harmony import */ var _img_carousel_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img-carousel-routing.module */ "./src/app/components/img-carousel/img-carousel-routing.module.ts");
/* harmony import */ var _services_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shared.module */ "./src/app/services/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






class ImgCarouselModule {
}
ImgCarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ImgCarouselModule });
ImgCarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ImgCarouselModule_Factory(t) { return new (t || ImgCarouselModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _img_carousel_routing_module__WEBPACK_IMPORTED_MODULE_2__["ImgCarouselRoutingModule"],
            _services_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImgCarouselModule, { declarations: [_img_carousel_component__WEBPACK_IMPORTED_MODULE_1__["ImgCarouselComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _img_carousel_routing_module__WEBPACK_IMPORTED_MODULE_2__["ImgCarouselRoutingModule"],
        _services_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgCarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _img_carousel_component__WEBPACK_IMPORTED_MODULE_1__["ImgCarouselComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _img_carousel_routing_module__WEBPACK_IMPORTED_MODULE_2__["ImgCarouselRoutingModule"],
                    _services_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                providers: [],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-img-carousel-img-carousel-module.js.map