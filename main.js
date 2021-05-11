(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+/RK":
/*!*****************************************!*\
  !*** ./src/app/model/products.model.ts ***!
  \*****************************************/
/*! exports provided: ProductsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModel", function() { return ProductsModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProductsModel {
    constructor() {
        this.data = [
            {
                p_id: '1',
                product_name: 'Surf Excel',
                product_weight: '1Kg',
                product_price: '10',
                product_image: 'https://rukminim1.flixcart.com/image/832/832/jg6v24w0/washing-powder/3/r/d/2-2-kg-top-load-surf-excel-original-imaf3udkm4v5mdrq.jpeg?q=70'
            },
            {
                p_id: '2',
                product_name: 'Nivea',
                product_weight: '200ml',
                product_price: '2',
                product_image: 'https://rukminim1.flixcart.com/image/832/832/j4n1x8w0/moisturizer-cream/k/m/b/200-body-lotion-whitening-even-tone-uv-protect-all-skin-types-original-imaeva7e4hvqn7dz.jpeg?q=70'
            },
            {
                p_id: '3',
                product_name: 'Beer shampoo',
                product_weight: '200ml',
                product_price: '3',
                product_image: 'https://rukminim1.flixcart.com/image/832/832/jjiw1ow0/shampoo/8/r/k/370-beer-shiny-and-bouncy-shampoo-park-avenue-original-imaf72uahtxywquk.jpeg?q=70'
            },
            {
                p_id: '4',
                product_name: 'Himalaya paste',
                product_weight: '200g',
                product_price: '8',
                product_image: 'https://rukminim1.flixcart.com/image/832/832/j3uh47k0/toothpaste/f/t/d/150-complete-care-himalaya-original-imaeuwfpgtr59sas.jpeg?q=70'
            },
            {
                p_id: '5',
                product_name: 'Ashirvaad Atta',
                product_weight: '1Kg',
                product_price: '8',
                product_image: 'https://rukminim1.flixcart.com/image/832/832/j65cnm80/flour/z/s/r/1-superior-mp-atta-whole-wheat-flour-aashirvaad-original-imaewzbkfqhy4dhq.jpeg?q=70'
            },
            {
                p_id: '6',
                product_name: 'Ashirvad Ghee',
                product_weight: '200ml',
                product_price: '9.50',
                product_image: 'https://rukminim1.flixcart.com/image/832/832/j9yixe80/ghee/h/z/p/1-aashirvaad-pure-cow-plastic-bottle-aashirvaad-original-imaeznaasxznzgc7.jpeg?q=70'
            },
            {
                p_id: '7',
                product_name: 'Gillete',
                product_weight: '200ml',
                product_price: '6',
                product_image: 'https://rukminim1.flixcart.com/image/832/832/j3xbzww0/shaving-cream/w/m/j/418-classic-sensitive-skin-pre-shave-foam-gillette-original-imaeuyybxxppskgu.jpeg?q=70'
            },
            {
                p_id: '8',
                product_name: 'Treseme Shampoo',
                product_weight: '250ml',
                product_price: '3',
                product_image: 'https://rukminim1.flixcart.com/image/832/832/jesunbk0/shampoo/j/8/7/580-keratin-smooth-with-argan-oil-shampoo-tresemme-original-imaexrhqrrs6xqku.jpeg?q=70'
            },
            {
                p_id: '9',
                product_name: 'Himalaya shampoo',
                product_weight: '250ml',
                product_price: '7',
                product_image: 'https://rukminim1.flixcart.com/image/612/612/j3lwh3k0/shampoo/h/g/b/700-anti-hair-fall-shampoo-himalaya-original-imaeupg7sygzgqej.jpeg?q=70'
            }
        ];
    }
}
ProductsModel.ɵfac = function ProductsModel_Factory(t) { return new (t || ProductsModel)(); };
ProductsModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductsModel, factory: ProductsModel.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsModel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Apptunix\eCommerceWeb\src\main.ts */"zUnb");


/***/ }),

/***/ "2Q2i":
/*!**************************************************!*\
  !*** ./src/app/model/billingformfields.model.ts ***!
  \**************************************************/
/*! exports provided: BillingFormModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingFormModel", function() { return BillingFormModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _validations_custom_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validations/custom.validate */ "YeUU");




class BillingFormModel {
    constructor() {
        this.data = [
            {
                label: 'First Name',
                placeholder: 'First Name',
                uid: 'firstName',
                type: 'text',
                value: '',
                validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                errorMsg: 'Please enter first name'
            },
            {
                label: 'Last Name',
                placeholder: 'Last Name',
                uid: 'lastName',
                type: 'text',
                value: '',
                validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                errorMsg: 'Please enter last name'
            },
            {
                label: 'Email',
                placeholder: 'Email',
                uid: 'email',
                type: 'text',
                value: '',
                validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_validations_custom_validate__WEBPACK_IMPORTED_MODULE_2__["emailValidation"])()],
                errorMsg: 'Please enter email'
            },
            {
                label: 'Mobile',
                placeholder: 'Mobile',
                uid: 'mobile',
                type: 'text',
                value: '',
                validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_validations_custom_validate__WEBPACK_IMPORTED_MODULE_2__["len"])(10), Object(_validations_custom_validate__WEBPACK_IMPORTED_MODULE_2__["numeric"])()],
                errorMsg: 'Please enter mobile no'
            },
            {
                label: 'Address 1',
                placeholder: 'Address 1',
                uid: 'addressOne',
                type: 'text',
                value: '',
                validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                errorMsg: 'Please enter address one'
            },
            {
                label: 'Address 2',
                placeholder: 'Address 2',
                uid: 'addressTwo',
                type: 'text',
                value: '',
                validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                errorMsg: 'Please enter address two'
            },
            {
                label: 'City',
                placeholder: 'City',
                uid: 'city',
                type: 'text',
                value: '',
                validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                errorMsg: 'Please enter city'
            },
            {
                label: 'State',
                placeholder: 'State',
                uid: 'state',
                type: 'select',
                value: '',
                validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                options: ['Tamil Nadu', 'Andhra Pradesh', 'Karnataka'],
                errorMsg: 'Please enter state'
            },
            {
                label: 'Zip Code',
                placeholder: 'Zip Code',
                uid: 'zip',
                type: 'text',
                value: '',
                validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                errorMsg: 'Please enter zipcode'
            },
            {
                label: 'Payment Mode',
                placeholder: 'Payment Mode',
                uid: 'paymentmode',
                type: 'select',
                value: '',
                validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                options: ['COD', 'Online'],
                errorMsg: 'Please enter payment mode'
            },
        ];
    }
}
BillingFormModel.ɵfac = function BillingFormModel_Factory(t) { return new (t || BillingFormModel)(); };
BillingFormModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BillingFormModel, factory: BillingFormModel.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BillingFormModel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "9HNH":
/*!***********************************************!*\
  !*** ./src/app/directives/billingcart.dir.ts ***!
  \***********************************************/
/*! exports provided: BillingCartDir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingCartDir", function() { return BillingCartDir; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function BillingCartDir_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " x ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itm_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", itm_r1.name, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", itm_r1.qty, " Nos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", itm_r1.price / itm_r1.qty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itm_r1.price);
} }
class BillingCartDir {
    constructor(cart) {
        this.cart = cart;
    }
}
BillingCartDir.ɵfac = function BillingCartDir_Factory(t) { return new (t || BillingCartDir)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"])); };
BillingCartDir.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BillingCartDir, selectors: [["billing-cart"]], decls: 12, vars: 3, consts: [[1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "text-muted"], [1, "badge", "badge-warning", "badge-pill"], [1, "list-group", "mb-3"], ["class", "list-group-item d-flex justify-content-between lh-condensed", 4, "ngFor", "ngForOf"], [1, "list-group-item", "d-flex", "justify-content-between", "bg-light"], [1, "list-group-item", "d-flex", "justify-content-between", "lh-condensed"], [1, ""], [1, "badge", "badge-pill", "badge-info", "text-right"], [1, "badge", "badge-pill", "badge-default", "text-right"]], template: function BillingCartDir_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BillingCartDir_li_6_Template, 11, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Total (INR)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cart.cartItemsList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cart.cartItemsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cart.cartTotal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    vertical-align : unset;\n  }\n  .w30[_ngcontent-%COMP%]{\n    width: 35%;\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BillingCartDir, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'billing-cart',
                template: `
  <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge badge-warning badge-pill">{{cart.cartItemsList.length}}</span>
          </h4>
          <ul class="list-group mb-3">
            <li 
            class="list-group-item d-flex justify-content-between lh-condensed"
             *ngFor="let itm of cart.cartItemsList "
            >
              <div>
                <h6 class="">{{itm.name}} -   <span class="badge badge-pill badge-info text-right">{{itm.qty}}  Nos</span> x <span class="badge badge-pill badge-default text-right">{{itm.price/itm.qty}}  </span></h6>                
              </div>
              <span class="text-muted">{{itm.price}}</span>
            </li>
            
            
            <li class="list-group-item d-flex justify-content-between bg-light">
              <span>Total (INR)</span>
              <strong>{{cart.cartTotal}}</strong>
            </li>
          </ul>

         
  `,
                styles: [`
  .table td {
    vertical-align : unset;
  }
  .w30{
    width: 35%;
  }
  `]
            }]
    }], function () { return [{ type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "BhhM":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterPipe {
    transform(products = {}, searchText = '') {
        if (!products) {
            return {};
        }
        if (searchText == '') {
            return products;
        }
        return products.filter((items) => {
            return items.product_name.toLowerCase().includes(searchText);
        });
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter'
            }]
    }], null, null); })();


/***/ }),

/***/ "DI59":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function PaymentComponent_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentComponent_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.confirmPayment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaymentComponent_button_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PaymentComponent {
    constructor(http) {
        this.http = http;
        this.payuform = {};
        this.disablePaymentButton = true;
    }
    confirmPayment() {
        const paymentPayload = {
            email: this.payuform.email,
            name: this.payuform.firstname,
            phone: this.payuform.phone,
            productInfo: this.payuform.productinfo,
            amount: this.payuform.amount
        };
        return this.http.post('http://localhost:4200/payment/payment-details', paymentPayload).subscribe(data => {
            console.log(data);
            this.payuform.txnid = data.txnId;
            this.payuform.surl = data.sUrl;
            this.payuform.furl = data.fUrl;
            this.payuform.key = data.key;
            this.payuform.hash = data.hash;
            this.payuform.txnid = data.txnId;
            this.disablePaymentButton = false;
        }, error1 => {
            console.log(error1);
        });
    }
    ngOnInit() {
    }
}
PaymentComponent.ɵfac = function PaymentComponent_Factory(t) { return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentComponent, selectors: [["app-payment"]], decls: 32, vars: 12, consts: [[1, "col-md-4"], ["ngNoForm", "", "action", "https://test.payu.in/_payment", "name", "payuform", "method", "POST", "target", "payment_popup", "onsubmit", "window.open('about:blank','payment_popup','width=900,height=500');"], [1, "form-group"], ["for", "productInfo"], ["type", "text", "id", "productInfo", "name", "productinfo", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "firstname"], ["type", "text", "id", "firstname", "name", "firstname", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "email", "id", "email", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "id", "phone", "name", "phone", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "amount"], ["type", "number", "id", "amount", "name", "amount", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "surl", "id", "surl", "ng-model", "surl", "rows", "2", "cols", "2", "hidden", "", 3, "ngModel", "ngModelChange"], ["name", "furl", "id", "furl", "ng-model", "furl", "rows", "2", "cols", "2", "hidden", "", 3, "ngModel", "ngModelChange"], ["name", "key", "id", "key", "ng-model", "key", "rows", "2", "cols", "2", "hidden", "", 3, "ngModel", "ngModelChange"], ["name", "hash", "id", "hash", "ng-model", "hash", "rows", "2", "cols", "2", "hidden", "", 3, "ngModel", "ngModelChange"], ["name", "txnid", "id", "txnid", "ng-model", "txnid", "rows", "2", "cols", "2", "hidden", "", 3, "ngModel", "ngModelChange"], ["name", "service_provider", "id", "service_provider", "rows", "2", "cols", "2", "hidden", ""], ["type", "button", "class", "btn btn-default", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-danger", 4, "ngIf"], ["type", "button", 1, "btn", "btn-default", 3, "click"], ["type", "submit", 1, "btn", "btn-danger"]], template: function PaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "PayU Payment Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Product Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_input_ngModelChange_7_listener($event) { return ctx.payuform.productinfo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_input_ngModelChange_11_listener($event) { return ctx.payuform.firstname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_input_ngModelChange_15_listener($event) { return ctx.payuform.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_input_ngModelChange_19_listener($event) { return ctx.payuform.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Amount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_input_ngModelChange_23_listener($event) { return ctx.payuform.amount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_textarea_ngModelChange_24_listener($event) { return ctx.payuform.surl = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_textarea_ngModelChange_25_listener($event) { return ctx.payuform.furl = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_textarea_ngModelChange_26_listener($event) { return ctx.payuform.key = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_textarea_ngModelChange_27_listener($event) { return ctx.payuform.hash = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_textarea_ngModelChange_28_listener($event) { return ctx.payuform.txnid = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PaymentComponent_button_30_Template, 2, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PaymentComponent_button_31_Template, 2, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.payuform.productinfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.payuform.firstname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.payuform.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.payuform.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.payuform.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.payuform.surl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.payuform.furl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.payuform.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.payuform.hash);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.payuform.txnid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.disablePaymentButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.disablePaymentButton);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payment',
                templateUrl: './payment.component.html',
                styleUrls: ['./payment.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "HC5s":
/*!**************************!*\
  !*** ./src/app/utils.ts ***!
  \**************************/
/*! exports provided: ExternalLibraryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalLibraryService", function() { return ExternalLibraryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




/**
 * Handled loading the external library ondemand into our app
 */
class ExternalLibraryService {
    constructor(document) {
        this.document = document;
        this._loadedLibraries = {};
    }
    // forkjoin parameters will grow when we are adding any new external library into app
    lazyLoadLibrary(resourceURL) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([
            this.loadScript(resourceURL)
        ]);
    }
    loadScript(url) {
        if (this._loadedLibraries[url]) {
            return this._loadedLibraries[url].asObservable();
        }
        this._loadedLibraries[url] = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
        const script = this.document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = url;
        script.onload = () => {
            this._loadedLibraries[url].next();
            this._loadedLibraries[url].complete();
        };
        this.document.body.appendChild(script);
        return this._loadedLibraries[url].asObservable();
    }
}
ExternalLibraryService.ɵfac = function ExternalLibraryService_Factory(t) { return new (t || ExternalLibraryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
ExternalLibraryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExternalLibraryService, factory: ExternalLibraryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExternalLibraryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Ieg5":
/*!**************************************************!*\
  !*** ./src/app/pages/products/products.pages.ts ***!
  \**************************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_products_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/products.model */ "+/RK");
/* harmony import */ var _directives_menu_dir__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/menu.dir */ "aD0Z");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _directives_productslist_dir__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/productslist.dir */ "jeMU");
/* harmony import */ var _directives_addtocart_dir__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/addtocart.dir */ "ShdC");







class ProductsPage {
    constructor(products) {
        this.products = products;
        this.cartflag = false;
        this.sortBy = '';
        this.sortOption = 'product_name|asc';
    }
    ngOnInit() {
        this.ref(false);
    }
    ref(event) {
        this.cartflag = event;
        setTimeout(() => {
            this.cartflag = event;
        }, 10);
    }
}
ProductsPage.ɵfac = function ProductsPage_Factory(t) { return new (t || ProductsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_products_model__WEBPACK_IMPORTED_MODULE_1__["ProductsModel"])); };
ProductsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsPage, selectors: [["ng-component"]], decls: 25, vars: 5, consts: [[1, "container"], [1, "form-row", "align-items-center"], [1, "col-md-9"], [1, "input-group", "mb-4", "mt-2"], [1, "input-group-prepend"], [1, "input-group-text"], ["placeholder", "Please enter any product name to search ", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-3"], [1, "mb-4", "mt-2"], [1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "product_name|asc"], ["value", "product_name|desc"], ["value", "product_price|lth"], ["value", "product_price|htl"], [1, "row"], [1, "col-md-7"], [3, "allProductList", "searchedText", "sortingBy", "refresh"], [1, "col-md-5"]], template: function ProductsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Search Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductsPage_Template_input_ngModelChange_8_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductsPage_Template_select_ngModelChange_11_listener($event) { return ctx.sortOption = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sort By Name (A to Z)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sort By Name (Z to A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sort By Price (Low to High)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sort By Price (High to Low)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "productslist-dir", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function ProductsPage_Template_productslist_dir_refresh_22_listener($event) { return ctx.ref($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sortOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allProductList", ctx.products.data)("searchedText", ctx.searchText)("sortingBy", ctx.sortOption);
    } }, directives: [_directives_menu_dir__WEBPACK_IMPORTED_MODULE_2__["MenuDir"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _directives_productslist_dir__WEBPACK_IMPORTED_MODULE_4__["ProductsListDir"], _directives_addtocart_dir__WEBPACK_IMPORTED_MODULE_5__["AddToCartDir"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: `
 <menu></menu>
  <div class="container">
    
    <div class="form-row align-items-center">    
      <div class="col-md-9">     
        <div class="input-group mb-4 mt-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Search Products</div>
          </div>
          <input [(ngModel)] = "searchText" class="form-control" placeholder="Please enter any product name to search ">
        </div>
      </div>
      <div class="col-md-3">     
        <div class=" mb-4 mt-2"> 
          <select class="form-control"  [(ngModel)] = "sortOption">        
        <option value="product_name|asc">Sort By Name (A to Z)</option>
        <option value="product_name|desc">Sort By Name (Z to A)</option>
        <option value="product_price|lth">Sort By Price (Low to High)</option>
        <option value="product_price|htl">Sort By Price (High to Low)</option>
      </select>
        </div>
      </div>

        
  </div>
    <div class="row">
      <div class="col-md-7">  
        <productslist-dir 
         (refresh)="ref($event)"
         [allProductList]="products.data"
         [searchedText]="searchText"
         [sortingBy]="sortOption"
         ></productslist-dir>
      </div>
      <div class="col-md-5">
        <cart></cart>
      </div>
    </div>
    
  
  </div>
  `
            }]
    }], function () { return [{ type: _model_products_model__WEBPACK_IMPORTED_MODULE_1__["ProductsModel"] }]; }, null); })();


/***/ }),

/***/ "ShdC":
/*!*********************************************!*\
  !*** ./src/app/directives/addtocart.dir.ts ***!
  \*********************************************/
/*! exports provided: AddToCartDir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToCartDir", function() { return AddToCartDir; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AddToCartDir_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddToCartDir_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.emptyCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Empty Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddToCartDir_tr_22_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddToCartDir_tr_22_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const itm_r5 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.changeQty(itm_r5.pid, 1, ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AddToCartDir_tr_22_Template_input_keyup_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const itm_r5 = ctx.$implicit; const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.changeQty(itm_r5.pid, _r6.value, "replace"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddToCartDir_tr_22_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const itm_r5 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.changeQty(itm_r5.pid, -1, ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itm_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itm_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", itm_r5.price / itm_r5.qty, " x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", itm_r5.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itm_r5.price);
} }
function AddToCartDir_a_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddToCartDir {
    constructor(cart, router) {
        this.cart = cart;
        this.router = router;
    }
    changeQty(pid, qty, replace) {
        if (qty !== '') {
            qty = parseInt(qty) || 1;
            this.cart.addToCart(pid, qty, replace);
        }
        else {
            this.cart.addToCart(pid, 1, replace);
        }
    }
    emptyCart() {
        let cartStatus = confirm("Are you sure you want to clear the cart ?");
        if (cartStatus) {
            this.cart.emptyCart();
            //document.location.href = '/products';
            this.router.navigate(['/products']);
        }
    }
}
AddToCartDir.ɵfac = function AddToCartDir_Factory(t) { return new (t || AddToCartDir)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AddToCartDir.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddToCartDir, selectors: [["cart"]], decls: 26, vars: 5, consts: [[1, "card", "text-center"], [1, "card-header"], ["type", "button", 1, "btn", "btn-sm", "btn-warning", "float-right"], [1, "badge", "badge-light"], ["type", "button", "class", "btn btn-sm btn-danger mr-2 float-right", 3, "click", 4, "ngIf"], [1, "card-body"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["routerLink", "/billing", "class", "btn btn-sm btn-primary", 4, "ngIf"], [1, "card-footer", "text-muted", "font-weight-bold"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", "mr-2", "float-right", 3, "click"], [1, "text-left"], [1, "w30"], [1, "input-group", "input-group-sm", "mb-3"], [1, "input-group-prepend"], ["type", "button", 1, "btn", "btn-info", 3, "click"], ["type", "text", 1, "form-control", "text-center", 3, "value", "keyup"], ["qtyRef", ""], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["routerLink", "/billing", 1, "btn", "btn-sm", "btn-primary"]], template: function AddToCartDir_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Your Cart Items ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Total items ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddToCartDir_button_7_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AddToCartDir_tr_22_Template, 17, 4, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AddToCartDir_a_23_Template, 2, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cart.cartItemsList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cart.cartItemsList && ctx.cart.cartTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cart.cartItemsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cart.cartItemsList && ctx.cart.cartTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total : Rs. ", ctx.cart.cartTotal, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    vertical-align : unset;\n    font-size:14px;\n  }\n  .w30[_ngcontent-%COMP%]{\n    width: 35%;\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddToCartDir, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cart',
                template: `
  <div class="card text-center">
  <div class="card-header">
    Your Cart Items
    <button type="button" class="btn btn-sm btn-warning float-right">
        Total items <span class="badge badge-light">{{cart.cartItemsList.length}}</span>        
    </button>
    <button type="button" class="btn btn-sm btn-danger mr-2 float-right" (click)="emptyCart()" *ngIf="cart.cartItemsList && cart.cartTotal">
       Empty Cart       
    </button>
  </div>
  <div class="card-body">  
    <table class="table">
      <thead>
        <tr>      
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Qty</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        
        </tr>
        <tr *ngFor="let itm of cart.cartItemsList ">      
          <td class="text-left">{{itm.name}}</td>
          <td>{{itm.price/itm.qty}} x</td>
          <td class="w30">
            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <button class="btn btn-info" type="button" (click)="changeQty(itm.pid,1,'')">+</button>
              </div>
              <input type="text" class="form-control text-center" value="{{itm.qty}}" #qtyRef (keyup)="changeQty(itm.pid,qtyRef.value,'replace')" >
              <div class="input-group-append">
                <button class="btn btn-danger" type="button" (click)="changeQty(itm.pid,-1,'')">-</button>
              </div>
            </div>
          </td>
          <td>{{itm.price}}</td>
        </tr>
        </tbody>
    </table>
    <a routerLink = "/billing" class="btn btn-sm btn-primary" *ngIf="cart.cartItemsList && cart.cartTotal">Checkout</a>
  </div>
  <div class="card-footer text-muted font-weight-bold">
    Total : Rs. {{cart.cartTotal}}
  </div>  
</div>
  `,
                styles: [`
  .table td {
    vertical-align : unset;
    font-size:14px;
  }
  .w30{
    width: 35%;
  }
  `]
            }]
    }], function () { return [{ type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'eCommerceWeb';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
    }
    canActivate() {
        if (this.authSvc.isLoggedIn) {
            return true;
        }
        this.authSvc.openLoginModal();
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "YeUU":
/*!************************************************!*\
  !*** ./src/app/validations/custom.validate.ts ***!
  \************************************************/
/*! exports provided: emailValidation, len, numeric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailValidation", function() { return emailValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numeric", function() { return numeric; });
function emailValidation() {
    return (control) => {
        let emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (emailPattern.test(control.value)) {
            return null;
        }
        else {
            return { emailErr: true };
        }
    };
}
function len(len) {
    return (control) => {
        if (control.value && control.value.length >= len) {
            return null;
        }
        else {
            return { minLength: true };
        }
    };
}
function numeric() {
    return (control) => {
        if (parseInt(control.value)) {
            return null;
        }
        else {
            return { numeric: true };
        }
    };
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _model_billingformfields_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/billingformfields.model */ "2Q2i");
/* harmony import */ var _model_companydetails_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/companydetails.model */ "amcQ");
/* harmony import */ var _model_products_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/products.model */ "+/RK");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payment/payment.component */ "DI59");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/filter.pipe */ "BhhM");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/sort.pipe */ "eLiO");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/cart.service */ "c14U");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/storage.service */ "n90K");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _directives_menu_dir__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/menu.dir */ "aD0Z");
/* harmony import */ var _directives_addtocart_dir__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/addtocart.dir */ "ShdC");
/* harmony import */ var _directives_billing_dir__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/billing.dir */ "dNRb");
/* harmony import */ var _directives_billingcart_dir__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/billingcart.dir */ "9HNH");
/* harmony import */ var _directives_checkout_dir__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/checkout.dir */ "l15I");
/* harmony import */ var _directives_productslist_dir__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/productslist.dir */ "jeMU");
/* harmony import */ var _pages_products_products_pages__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/products/products.pages */ "Ieg5");
/* harmony import */ var _pages_billing_billing_pages__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/billing/billing.pages */ "fVwC");
/* harmony import */ var _pages_checkout_checkout_pages__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/checkout/checkout.pages */ "hI2+");
/* harmony import */ var _router_config__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./router.config */ "eHsz");
/* harmony import */ var _dialog_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dialog/login-dialog/login-dialog.component */ "s0Z4");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ "tyNb");


































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_model_products_model__WEBPACK_IMPORTED_MODULE_6__["ProductsModel"], _model_billingformfields_model__WEBPACK_IMPORTED_MODULE_4__["BillingFormModel"], _model_companydetails_model__WEBPACK_IMPORTED_MODULE_5__["CompanyDetailsModel"], _services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_10__["CartService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"], _services_auth_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _router_config__WEBPACK_IMPORTED_MODULE_22__["RouterConfig"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_26__["ModalModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _directives_menu_dir__WEBPACK_IMPORTED_MODULE_13__["MenuDir"], _directives_productslist_dir__WEBPACK_IMPORTED_MODULE_18__["ProductsListDir"], _directives_addtocart_dir__WEBPACK_IMPORTED_MODULE_14__["AddToCartDir"], _directives_billing_dir__WEBPACK_IMPORTED_MODULE_15__["BillingDir"], _directives_billingcart_dir__WEBPACK_IMPORTED_MODULE_16__["BillingCartDir"], _directives_checkout_dir__WEBPACK_IMPORTED_MODULE_17__["CheckOutDir"],
        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"],
        _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_9__["SortPipe"],
        _payment_payment_component__WEBPACK_IMPORTED_MODULE_7__["PaymentComponent"],
        _pages_products_products_pages__WEBPACK_IMPORTED_MODULE_19__["ProductsPage"],
        _pages_billing_billing_pages__WEBPACK_IMPORTED_MODULE_20__["BillingPage"],
        _pages_checkout_checkout_pages__WEBPACK_IMPORTED_MODULE_21__["CheckoutPage"], _pages_products_products_pages__WEBPACK_IMPORTED_MODULE_19__["ProductsPage"], _pages_billing_billing_pages__WEBPACK_IMPORTED_MODULE_20__["BillingPage"], _pages_checkout_checkout_pages__WEBPACK_IMPORTED_MODULE_21__["CheckoutPage"], _dialog_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_23__["LoginDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_26__["ModalModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]], exports: [_directives_menu_dir__WEBPACK_IMPORTED_MODULE_13__["MenuDir"], _directives_productslist_dir__WEBPACK_IMPORTED_MODULE_18__["ProductsListDir"], _directives_addtocart_dir__WEBPACK_IMPORTED_MODULE_14__["AddToCartDir"], _directives_billing_dir__WEBPACK_IMPORTED_MODULE_15__["BillingDir"], _directives_billingcart_dir__WEBPACK_IMPORTED_MODULE_16__["BillingCartDir"], _directives_checkout_dir__WEBPACK_IMPORTED_MODULE_17__["CheckOutDir"], _pages_products_products_pages__WEBPACK_IMPORTED_MODULE_19__["ProductsPage"],
        _pages_billing_billing_pages__WEBPACK_IMPORTED_MODULE_20__["BillingPage"],
        _pages_checkout_checkout_pages__WEBPACK_IMPORTED_MODULE_21__["CheckoutPage"],
        _payment_payment_component__WEBPACK_IMPORTED_MODULE_7__["PaymentComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _directives_menu_dir__WEBPACK_IMPORTED_MODULE_13__["MenuDir"], _directives_productslist_dir__WEBPACK_IMPORTED_MODULE_18__["ProductsListDir"], _directives_addtocart_dir__WEBPACK_IMPORTED_MODULE_14__["AddToCartDir"], _directives_billing_dir__WEBPACK_IMPORTED_MODULE_15__["BillingDir"], _directives_billingcart_dir__WEBPACK_IMPORTED_MODULE_16__["BillingCartDir"], _directives_checkout_dir__WEBPACK_IMPORTED_MODULE_17__["CheckOutDir"],
                    _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"],
                    _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_9__["SortPipe"],
                    _payment_payment_component__WEBPACK_IMPORTED_MODULE_7__["PaymentComponent"],
                    _pages_products_products_pages__WEBPACK_IMPORTED_MODULE_19__["ProductsPage"],
                    _pages_billing_billing_pages__WEBPACK_IMPORTED_MODULE_20__["BillingPage"],
                    _pages_checkout_checkout_pages__WEBPACK_IMPORTED_MODULE_21__["CheckoutPage"],
                    _router_config__WEBPACK_IMPORTED_MODULE_22__["RouterDeclarations"],
                    _dialog_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_23__["LoginDialogComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _router_config__WEBPACK_IMPORTED_MODULE_22__["RouterConfig"],
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_26__["ModalModule"].forRoot(),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]
                ],
                exports: [
                    _directives_menu_dir__WEBPACK_IMPORTED_MODULE_13__["MenuDir"], _directives_productslist_dir__WEBPACK_IMPORTED_MODULE_18__["ProductsListDir"], _directives_addtocart_dir__WEBPACK_IMPORTED_MODULE_14__["AddToCartDir"], _directives_billing_dir__WEBPACK_IMPORTED_MODULE_15__["BillingDir"], _directives_billingcart_dir__WEBPACK_IMPORTED_MODULE_16__["BillingCartDir"], _directives_checkout_dir__WEBPACK_IMPORTED_MODULE_17__["CheckOutDir"], _pages_products_products_pages__WEBPACK_IMPORTED_MODULE_19__["ProductsPage"],
                    _pages_billing_billing_pages__WEBPACK_IMPORTED_MODULE_20__["BillingPage"],
                    _pages_checkout_checkout_pages__WEBPACK_IMPORTED_MODULE_21__["CheckoutPage"],
                    _payment_payment_component__WEBPACK_IMPORTED_MODULE_7__["PaymentComponent"]
                ],
                providers: [_model_products_model__WEBPACK_IMPORTED_MODULE_6__["ProductsModel"], _model_billingformfields_model__WEBPACK_IMPORTED_MODULE_4__["BillingFormModel"], _model_companydetails_model__WEBPACK_IMPORTED_MODULE_5__["CompanyDetailsModel"], _services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_10__["CartService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"], _services_auth_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aD0Z":
/*!****************************************!*\
  !*** ./src/app/directives/menu.dir.ts ***!
  \****************************************/
/*! exports provided: MenuDir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDir", function() { return MenuDir; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class MenuDir {
    constructor(cart) {
        this.cart = cart;
    }
    ngOnInit() {
    }
}
MenuDir.ɵfac = function MenuDir_Factory(t) { return new (t || MenuDir)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"])); };
MenuDir.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuDir, selectors: [["menu"]], decls: 30, vars: 1, consts: [["id", "navbarNav", 1, "navbar", "navbar-expand-sm", "bg-secondary", "navbar-dark"], ["href", "#", "routerLink", "/products", 1, "navbar-brand"], ["src", "assets/shopping-logo.png", 1, "logo", "mr-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "navbar-nav"], [1, "nav-item", "active"], ["routerLink", "/products", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["routerLink", "/billing", 1, "nav-link"], ["routerLink", "/checkout", 1, "nav-link"], [1, "navbar", "navbar-dark", "shadow-sm", "margin-60"], [1, "container", "d-flex", "justify-content-between"], [1, "cart-count"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "id", "Capa_1", "x", "0px", "y", "0px", "viewBox", "0 0 19.25 19.25", 0, "xml", "space", "preserve", "width", "32px", "height", "32px", 2, "enable-background", "new 0 0 19.25 19.25"], ["id", "Layer_1_107_"], ["d", "M19.006,2.97c-0.191-0.219-0.466-0.345-0.756-0.345H4.431L4.236,1.461     C4.156,0.979,3.739,0.625,3.25,0.625H1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1.403l1.86,11.164c0.008,0.045,0.031,0.082,0.045,0.124     c0.016,0.053,0.029,0.103,0.054,0.151c0.032,0.066,0.075,0.122,0.12,0.179c0.031,0.039,0.059,0.078,0.095,0.112     c0.058,0.054,0.125,0.092,0.193,0.13c0.038,0.021,0.071,0.049,0.112,0.065c0.116,0.047,0.238,0.075,0.367,0.075     c0.001,0,11.001,0,11.001,0c0.553,0,1-0.447,1-1s-0.447-1-1-1H6.097l-0.166-1H17.25c0.498,0,0.92-0.366,0.99-0.858l1-7     C19.281,3.479,19.195,3.188,19.006,2.97z M17.097,4.625l-0.285,2H13.25v-2H17.097z M12.25,4.625v2h-3v-2H12.25z M12.25,7.625v2     h-3v-2H12.25z M8.25,4.625v2h-3c-0.053,0-0.101,0.015-0.148,0.03l-0.338-2.03H8.25z M5.264,7.625H8.25v2H5.597L5.264,7.625z      M13.25,9.625v-2h3.418l-0.285,2H13.25z", "fill", "#FF0000"], ["cx", "6.75", "cy", "17.125", "r", "1.5", "fill", "#FF0000"], ["cx", "15.75", "cy", "17.125", "r", "1.5", "fill", "#FF0000"]], template: function MenuDir_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Raashan Paani");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Billing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "circle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "circle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cart.cartItemsList.length);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".logo[_ngcontent-%COMP%]{\n      height: 60px;\n      width: auto;\n    }\n    \n \n.cart-count[_ngcontent-%COMP%] {\n  color: #FFF;\n  position: relative;\n}\n.cart-count[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  height: 24px;\n  background-color: black;\n  font-style: normal;\n  padding: 0;\n  border-radius: 50px;\n  position: absolute;\n  top: -5px;\n  right: -14px;\n  width: 24px;\n  text-align: center;\n  line-height: 24px;\n  color: #FFF;\n  font-weight: bold;\n}\n\n.cart-total[_ngcontent-%COMP%] {\n  padding: 1em;\n  margin: 0;\n  display: flex;\n  flex-flow: row;\n  align-items: normal;\n  justify-content: space-between;\n}\n.margin-60[_ngcontent-%COMP%] {\n  margin-left: 60%;\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: #579eaf7d !important;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuDir, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'menu',
                template: `
  <!--<nav class="navbar navbar-expand-lg navbar-light bg-light d-print-none">-->
  <nav class="navbar navbar-expand-sm bg-secondary navbar-dark" id="navbarNav">

  <a class="navbar-brand" href="#" routerLink = '/products'><img src="assets/shopping-logo.png" class="logo mr-2"/>Raashan Paani</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" routerLink = '/products'>Products <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink = '/billing'>Billing</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink = '/checkout'>Checkout</a>
    </li>
  </ul>

   

        <div class="navbar navbar-dark shadow-sm margin-60">
		<div class="container d-flex justify-content-between"> 
      <span class="cart-count">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 19.25 19.25" style="enable-background:new 0 0 19.25 19.25;" xml:space="preserve" width="32px" height="32px">
          <g>
            <g id="Layer_1_107_">
              <g>
                <path d="M19.006,2.97c-0.191-0.219-0.466-0.345-0.756-0.345H4.431L4.236,1.461     C4.156,0.979,3.739,0.625,3.25,0.625H1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1.403l1.86,11.164c0.008,0.045,0.031,0.082,0.045,0.124     c0.016,0.053,0.029,0.103,0.054,0.151c0.032,0.066,0.075,0.122,0.12,0.179c0.031,0.039,0.059,0.078,0.095,0.112     c0.058,0.054,0.125,0.092,0.193,0.13c0.038,0.021,0.071,0.049,0.112,0.065c0.116,0.047,0.238,0.075,0.367,0.075     c0.001,0,11.001,0,11.001,0c0.553,0,1-0.447,1-1s-0.447-1-1-1H6.097l-0.166-1H17.25c0.498,0,0.92-0.366,0.99-0.858l1-7     C19.281,3.479,19.195,3.188,19.006,2.97z M17.097,4.625l-0.285,2H13.25v-2H17.097z M12.25,4.625v2h-3v-2H12.25z M12.25,7.625v2     h-3v-2H12.25z M8.25,4.625v2h-3c-0.053,0-0.101,0.015-0.148,0.03l-0.338-2.03H8.25z M5.264,7.625H8.25v2H5.597L5.264,7.625z      M13.25,9.625v-2h3.418l-0.285,2H13.25z" fill="#FF0000"/>
                <circle cx="6.75" cy="17.125" r="1.5" fill="#FF0000"/>
                <circle cx="15.75" cy="17.125" r="1.5" fill="#FF0000"/>
              </g>
            </g>
          </g>
        </svg>
      <em>{{cart.cartItemsList.length}}</em></span>
		</div>
	</div>

         
</nav>

       
  `,
                styles: [`
    .logo{
      height: 60px;
      width: auto;
    }
    /* Add application styles & imports to this file! */
 
.cart-count {
  color: #FFF;
  position: relative;
}
.cart-count em {
  height: 24px;
  background-color: black;
  font-style: normal;
  padding: 0;
  border-radius: 50px;
  position: absolute;
  top: -5px;
  right: -14px;
  width: 24px;
  text-align: center;
  line-height: 24px;
  color: #FFF;
  font-weight: bold;
}

.cart-total {
  padding: 1em;
  margin: 0;
  display: flex;
  flex-flow: row;
  align-items: normal;
  justify-content: space-between;
}
.margin-60 {
  margin-left: 60%;
}
.bg-secondary {
  background-color: #579eaf7d !important;
}
    
  `]
            }]
    }], function () { return [{ type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] }]; }, null); })();


/***/ }),

/***/ "amcQ":
/*!***********************************************!*\
  !*** ./src/app/model/companydetails.model.ts ***!
  \***********************************************/
/*! exports provided: CompanyDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailsModel", function() { return CompanyDetailsModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CompanyDetailsModel {
    constructor() {
        this.companyInfo = {
            name: 'Trend Shopping',
            address: 'No: 12,OMR Road',
            city: 'Chennai',
            pincode: '600045',
            email: 'customer.care@a2zshoppee.com',
            phone: '044-43232123'
        };
    }
}
CompanyDetailsModel.ɵfac = function CompanyDetailsModel_Factory(t) { return new (t || CompanyDetailsModel)(); };
CompanyDetailsModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompanyDetailsModel, factory: CompanyDetailsModel.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyDetailsModel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "c14U":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ "n90K");



class CartService {
    constructor(storage) {
        this.storage = storage;
        this.allItems = {};
        this.cartData = [];
        this.cartItemsList = {};
        this.cartTotal = 0;
        this.cartItemsStorageName = 'mycart';
        this.loadCart();
    }
    loadCart() {
        let temp = this.storage.get('mycart');
        if (temp === undefined || temp === '' || temp === null) {
            this.cartData = {};
        }
        else {
            this.cartData = temp;
        }
    }
    addToCart(pid, qty, replace) {
        if (this.cartData[pid] == undefined) {
            this.cartData[pid] = 0;
        }
        if (replace === '') {
            this.cartData[pid] = this.cartData[pid] + qty;
        }
        else {
            this.cartData[pid] = parseInt(qty);
        }
        if (this.cartData[pid] == 0) {
            delete this.cartData[pid];
        }
        this.storeItems();
    }
    storeItems() {
        this.storage.set({
            'mycart': this.cartData
        });
        this.listCartItems();
    }
    listCartItems() {
        let tempCart = [];
        let getActualItems = Object.keys(this.cartData);
        let cartDataItems = this.cartData;
        let tempTotal = 0;
        var onlyChoosenItems = (this.allItems).filter(function (item) {
            if (getActualItems.indexOf(item.p_id) !== -1) {
                tempCart.push({
                    pid: item.p_id,
                    name: item.product_name,
                    qty: cartDataItems[item.p_id],
                    price: item.product_price * cartDataItems[item.p_id],
                });
                tempTotal += item.product_price * cartDataItems[item.p_id];
            }
        });
        this.cartItemsList = tempCart;
        this.cartTotal = tempTotal;
    }
    loadCheckoutInfo(storageKey) {
        return this.storage.get(storageKey);
    }
    emptyCart() {
        this.cartData = [];
        this.listCartItems();
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"])); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "dNRb":
/*!*******************************************!*\
  !*** ./src/app/directives/billing.dir.ts ***!
  \*******************************************/
/*! exports provided: BillingDir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingDir", function() { return BillingDir; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/payment.service */ "s5zK");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "HC5s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function BillingDir_div_2_div_3_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const formFields_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](formFields_r2.errorMsg);
} }
function BillingDir_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BillingDir_div_2_div_3_small_2_Template, 2, 1, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const formFields_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", formFields_r2.uid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", formFields_r2.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.billingForm.controls[formFields_r2.uid].status == "INVALID" && ctx_r3.billingForm.controls[formFields_r2.uid].touched);
} }
function BillingDir_div_2_div_4_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const optionName_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", optionName_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](optionName_r10);
} }
function BillingDir_div_2_div_4_small_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const formFields_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](formFields_r2.errorMsg);
} }
function BillingDir_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BillingDir_div_2_div_4_option_4_Template, 2, 2, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BillingDir_div_2_div_4_small_5_Template, 2, 1, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const formFields_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", formFields_r2.uid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", formFields_r2.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.billingForm.controls[formFields_r2.uid].status == "INVALID" && ctx_r4.billingForm.controls[formFields_r2.uid].touched);
} }
function BillingDir_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BillingDir_div_2_div_3_Template, 3, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BillingDir_div_2_div_4_Template, 6, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const formFields_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](formFields_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", formFields_r2.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", formFields_r2.type == "select");
} }
function BillingDir_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm and Place Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.billingForm.invalid);
} }
class BillingDir {
    constructor(fb, storage, cart, router, paymentService, _razorpayService, cd, zone) {
        this.fb = fb;
        this.storage = storage;
        this.cart = cart;
        this.router = router;
        this.paymentService = paymentService;
        this._razorpayService = _razorpayService;
        this.cd = cd;
        this.zone = zone;
        this.billingForm = {};
        this.errorsInfo = {};
        this.__billing = {};
        this.razorPayOptions = {
            "key": '',
            "amount": '',
            "currency": 'INR',
            "name": '',
            "description": "Skartz Payment Example",
            "order_id": '',
            "handler": (res) => {
            }
        };
        this.submitted = false;
        this.loading = false;
        this.showModal = false;
        // buyRazorPay(){
        //   this.submitted = true;
        //   this.loading = true;
        //   this.razorPayData = {
        //     "name" : "demo",
        //     "amount": 1,
        //     "email": "demo@gmail.com"
        //   };
        //   this.data = this.paymentService.razorPayOrder(this.razorPayData).subscribe(response => {
        //     this.setRazorAndOpen(response);
        //   });
        // }
        // setRazorAndOpen(data: any) {
        //     this.razorPayOptions.key = data['key'];
        //     this.razorPayOptions.amount = data['value']['amount'];
        //     this.razorPayOptions.name = this.razorPayData['name'];
        //     this.razorPayOptions.order_id = data['value']['id'];
        //     this.razorPayOptions.handler = this.razorPayResponseHandler;
        //     var rzpl = new Razorpay(this.razorPayOptions);
        //     rzpl.open();
        // }
        // razorPayResponseHandler(response: any){
        //   console.log(response);
        // }
        // ************* first Method End**********
        this.RAZORPAY_OPTIONS = {
            "key": '',
            "amount": 0,
            "name": "Mani Bhushan",
            "order_id": "",
            "description": "Load Wallet",
            "image": "https://livestatic.novopay.in/resources/img/nodeapp/img/Logo_NP.jpg",
            "handler": {},
            "prefill": {
                "name": "Mani Bhushan",
                "email": "test@test.com",
                "contact": "9067787678",
                "method": ""
            },
            "modal": {},
            "theme": {
                "color": "#0096C5"
            }
        };
        this._razorpayService
            .lazyLoadLibrary('https://checkout.razorpay.com/v1/checkout.js')
            .subscribe();
    }
    ngOnInit() {
        this.loadForm();
    }
    loadForm() {
        let temp = {};
        let billingInfo = this.cart.loadCheckoutInfo('customerInfo');
        if (billingInfo === undefined || billingInfo === '' || billingInfo === null) {
            billingInfo = {};
        }
        (this.__billing).forEach((item) => {
            temp[item.uid] = [billingInfo[item.uid], item.validation];
        });
        this.billingForm = this.fb.group(temp);
    }
    send() {
        if (this.billingForm.valid) {
            this.storage.set({
                customerInfo: this.billingForm.value
            });
            //document.location.href="/checkout";
            //  this.router.navigate(['/payment']);
            if (this.billingForm.value.paymentmode == 'Online') {
                // this.buyRazorPay();
                this.proceed();
            }
            else {
                this.router.navigate(['/checkout']);
            }
        }
    }
    proceed() {
        this.RAZORPAY_OPTIONS['key'] = "rzp_test_iPdRYz4iGbwviB";
        this.RAZORPAY_OPTIONS['amount'] = (this.cart.cartTotal * 100);
        this.RAZORPAY_OPTIONS['name'] = this.RAZORPAY_OPTIONS['prefill']['name'];
        ;
        this.RAZORPAY_OPTIONS['handler'] = this.razorPaySuccessHandler.bind(this);
        let razorpay = new Razorpay(this.RAZORPAY_OPTIONS);
        razorpay.open();
    }
    razorPaySuccessHandler(response) {
        console.log(response);
        this.zone.run(() => {
            this.router.navigate(['/checkout']);
        });
    }
}
BillingDir.ɵfac = function BillingDir_Factory(t) { return new (t || BillingDir)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_payment_service__WEBPACK_IMPORTED_MODULE_5__["PaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_6__["ExternalLibraryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
BillingDir.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BillingDir, selectors: [["billing-dir"]], inputs: { __billing: ["billingFields", "__billing"] }, decls: 6, vars: 3, consts: [[3, "formGroup", "ngSubmit"], [1, "form-row"], ["class", "form-group col-md-6", 4, "ngFor", "ngForOf"], ["type", "submit", "class", "btn btn-sm btn-primary", 3, "disabled", 4, "ngIf"], ["routerLink", "/products", 1, "btn", "btn-sm", "btn-info", "float-right"], [1, "form-group", "col-md-6"], ["for", "inputEmail4"], [4, "ngIf"], ["type", "text", 1, "form-control", 3, "formControlName", "placeholder"], ["class", "form-text text-danger", 4, "ngIf"], [1, "form-text", "text-danger"], ["id", "inputState", 1, "form-control", 3, "formControlName"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "disabled"]], template: function BillingDir_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BillingDir_Template_form_ngSubmit_0_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BillingDir_div_2_Template, 5, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BillingDir_button_3_Template, 2, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Continue Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.billingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.__billing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cart.cartItemsList && ctx.cart.cartTotal);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["form[_ngcontent-%COMP%]   .ng-invalid.ng-touched[_ngcontent-%COMP%]{\n    border-color: #dc3545;\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BillingDir, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'billing-dir',
                template: `
      <form [formGroup]="billingForm" (ngSubmit) = "send()">
      
      <div class="form-row">

          <div class="form-group col-md-6" *ngFor="let formFields of __billing">
             
            <label for="inputEmail4">{{formFields.label}}</label>
            <div *ngIf="formFields.type=='text'">
            <input 
            type="text" 
            class="form-control" 
            formControlName="{{formFields.uid}}"
            placeholder="{{formFields.placeholder}}" />

            <small 
            class="form-text text-danger" 
            *ngIf="billingForm.controls[formFields.uid].status=='INVALID' && billingForm.controls[formFields.uid].touched"
            >{{formFields.errorMsg}}</small></div>

            <div *ngIf="formFields.type=='select'">
              <select id="inputState" class="form-control" formControlName = "{{formFields.uid}}">
                <option>Select</option>
                <option *ngFor="let optionName of formFields.options" value="{{optionName}}">{{optionName}}</option>
              </select>
              <small class="form-text text-danger" 
            *ngIf="billingForm.controls[formFields.uid].status=='INVALID' && billingForm.controls[formFields.uid].touched"
            >{{formFields.errorMsg}}</small>
            </div>
          </div>
                 
      </div>
    <button type="submit" class="btn btn-sm btn-primary" [disabled]="billingForm.invalid" *ngIf="cart.cartItemsList && cart.cartTotal">Confirm and Place Order</button>
    <a routerLink="/products" class="btn btn-sm btn-info float-right">Continue Shopping</a>
  
</form>
  `,
                styles: [`
  form .ng-invalid.ng-touched{
    border-color: #dc3545;
  }
  `]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }, { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_payment_service__WEBPACK_IMPORTED_MODULE_5__["PaymentService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_6__["ExternalLibraryService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { __billing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['billingFields']
        }] }); })();


/***/ }),

/***/ "eHsz":
/*!**********************************!*\
  !*** ./src/app/router.config.ts ***!
  \**********************************/
/*! exports provided: RouterConfig, RouterDeclarations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterConfig", function() { return RouterConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterDeclarations", function() { return RouterDeclarations; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_products_products_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/products/products.pages */ "Ieg5");
/* harmony import */ var _pages_checkout_checkout_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/checkout/checkout.pages */ "hI2+");
/* harmony import */ var _pages_billing_billing_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/billing/billing.pages */ "fVwC");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment/payment.component */ "DI59");





const appRoutes = [
    { path: 'products', component: _pages_products_products_pages__WEBPACK_IMPORTED_MODULE_1__["ProductsPage"] },
    { path: 'billing', component: _pages_billing_billing_pages__WEBPACK_IMPORTED_MODULE_3__["BillingPage"] },
    { path: 'checkout', component: _pages_checkout_checkout_pages__WEBPACK_IMPORTED_MODULE_2__["CheckoutPage"] },
    { path: 'payment', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_4__["PaymentComponent"] },
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    }
];
const RouterConfig = [
    _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, {
        enableTracing: false,
        useHash: false
    })
];
const RouterDeclarations = [_pages_products_products_pages__WEBPACK_IMPORTED_MODULE_1__["ProductsPage"], _pages_billing_billing_pages__WEBPACK_IMPORTED_MODULE_3__["BillingPage"], _pages_checkout_checkout_pages__WEBPACK_IMPORTED_MODULE_2__["CheckoutPage"]];


/***/ }),

/***/ "eLiO":
/*!************************************!*\
  !*** ./src/app/pipes/sort.pipe.ts ***!
  \************************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SortPipe {
    transform(products, fieldName) {
        let sortFieldSelected = fieldName;
        let sortField = sortFieldSelected.split('|');
        products.sort((a, b) => {
            if (sortField[1] == 'asc' || sortField[1] == 'lth') {
                if (a[sortField[0]] < b[sortField[0]]) {
                    return -1;
                }
                else if (a[sortField[0]] > b[sortField[0]]) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
            else if (sortField[1] == 'desc' || sortField[1] == 'htl') {
                if (a[sortField[0]] > b[sortField[0]]) {
                    return -1;
                }
                else if (a[sortField[0]] < b[sortField[0]]) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
            else {
                if (a[sortField[0]] < b[sortField[0]]) {
                    return -1;
                }
                else if (a[sortField[0]] > b[sortField[0]]) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
        });
        /*if(sortField[1] == 'htl'){
          let temp = [];
          for(let i = (products.length -1); i>=0 ; i--){
            temp.push(products[i]);
          }
          products=temp;
        }*/
        return products;
    }
}
SortPipe.ɵfac = function SortPipe_Factory(t) { return new (t || SortPipe)(); };
SortPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sortBy", type: SortPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'sortBy'
            }]
    }], null, null); })();


/***/ }),

/***/ "fVwC":
/*!************************************************!*\
  !*** ./src/app/pages/billing/billing.pages.ts ***!
  \************************************************/
/*! exports provided: BillingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingPage", function() { return BillingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_billingformfields_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/billingformfields.model */ "2Q2i");
/* harmony import */ var _directives_menu_dir__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/menu.dir */ "aD0Z");
/* harmony import */ var _directives_billing_dir__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/billing.dir */ "dNRb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_billingcart_dir__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/billingcart.dir */ "9HNH");







function BillingPage_billing_cart_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "billing-cart");
} }
class BillingPage {
    constructor(billing) {
        this.billing = billing;
        this.cartflag = false;
    }
    ngOnInit() {
        this.ref();
    }
    ref() {
        this.cartflag = false;
        setTimeout(() => {
            this.cartflag = true;
        }, 10);
    }
}
BillingPage.ɵfac = function BillingPage_Factory(t) { return new (t || BillingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_billingformfields_model__WEBPACK_IMPORTED_MODULE_1__["BillingFormModel"])); };
BillingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BillingPage, selectors: [["ng-component"]], decls: 11, vars: 2, consts: [[1, "container"], [1, "row"], [1, "col-md-8", "order-md-1"], [1, "card"], [1, "card-header", "bg-info", "bg-secondary"], [1, "card-body"], [3, "billingFields"], [1, "col-md-4", "order-md-2", "mb-4"], [4, "ngIf"]], template: function BillingPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Billing Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "billing-dir", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BillingPage_billing_cart_10_Template, 1, 0, "billing-cart", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("billingFields", ctx.billing.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartflag);
    } }, directives: [_directives_menu_dir__WEBPACK_IMPORTED_MODULE_2__["MenuDir"], _directives_billing_dir__WEBPACK_IMPORTED_MODULE_3__["BillingDir"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _directives_billingcart_dir__WEBPACK_IMPORTED_MODULE_5__["BillingCartDir"]], styles: [".card-header[_ngcontent-%COMP%]{\n    background-color: #579eaf38!important;\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BillingPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: `
  <menu></menu>
  <div class="container">
    <div class="row">
      <div class="col-md-8 order-md-1">
        <div class="card">
          <h5 class="card-header bg-info bg-secondary">Billing Information</h5>
          <div class="card-body">
                <billing-dir 
              [billingFields]="billing.data"
              ></billing-dir>
          </div>
        </div>      
      </div>
      <div class="col-md-4 order-md-2 mb-4">
      <billing-cart
       *ngIf="cartflag"
      ></billing-cart>              
      </div>  

    </div>
  
  </div>
  `,
                styles: [`
  .card-header{
    background-color: #579eaf38!important;
  }
  `]
            }]
    }], function () { return [{ type: _model_billingformfields_model__WEBPACK_IMPORTED_MODULE_1__["BillingFormModel"] }]; }, null); })();


/***/ }),

/***/ "hI2+":
/*!**************************************************!*\
  !*** ./src/app/pages/checkout/checkout.pages.ts ***!
  \**************************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ "c14U");
/* harmony import */ var _model_products_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/products.model */ "+/RK");
/* harmony import */ var _directives_menu_dir__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/menu.dir */ "aD0Z");
/* harmony import */ var _directives_checkout_dir__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/checkout.dir */ "l15I");






class CheckoutPage {
    constructor(cart, products) {
        this.cart = cart;
        this.products = products;
        this.cartflag = false;
    }
    ngOnInit() {
        this.ref();
    }
    ref() {
        this.cartflag = false;
        setTimeout(() => {
            this.cartflag = true;
        }, 1000);
    }
}
CheckoutPage.ɵfac = function CheckoutPage_Factory(t) { return new (t || CheckoutPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_products_model__WEBPACK_IMPORTED_MODULE_2__["ProductsModel"])); };
CheckoutPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutPage, selectors: [["ng-component"]], decls: 3, vars: 1, consts: [[1, "container"], [3, "allProductList"]], template: function CheckoutPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "checkout-dir", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allProductList", ctx.products.data);
    } }, directives: [_directives_menu_dir__WEBPACK_IMPORTED_MODULE_3__["MenuDir"], _directives_checkout_dir__WEBPACK_IMPORTED_MODULE_4__["CheckOutDir"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: `
   <menu></menu>
  <div class="container">
   
     <checkout-dir
     [allProductList]="products.data"
     ></checkout-dir>
  </div>
`
            }]
    }], function () { return [{ type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] }, { type: _model_products_model__WEBPACK_IMPORTED_MODULE_2__["ProductsModel"] }]; }, null); })();


/***/ }),

/***/ "jeMU":
/*!************************************************!*\
  !*** ./src/app/directives/productslist.dir.ts ***!
  \************************************************/
/*! exports provided: ProductsListDir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListDir", function() { return ProductsListDir; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/sort.pipe */ "eLiO");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/filter.pipe */ "BhhM");







function ProductsListDir_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsListDir_div_1_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.addToCart(item_r1.p_id, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.product_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.product_weight, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Rs ", item_r1.product_price, " ");
} }
class ProductsListDir {
    constructor(storage, cart) {
        this.storage = storage;
        this.cart = cart;
        this.__allprdts = {};
        this.__searchedProduct = '';
        this.sortByOption = '';
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.sortByOption = 'product_name';
    }
    addToCart(productId, productQty) {
        this.cart.allItems = this.__allprdts;
        this.cart.addToCart(productId, productQty, '');
        this.refresh.emit(true);
    }
}
ProductsListDir.ɵfac = function ProductsListDir_Factory(t) { return new (t || ProductsListDir)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"])); };
ProductsListDir.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsListDir, selectors: [["productslist-dir"]], inputs: { __allprdts: ["allProductList", "__allprdts"], __searchedProduct: ["searchedText", "__searchedProduct"], sortByOption: ["sortingBy", "sortByOption"] }, outputs: { refresh: "refresh" }, decls: 4, vars: 7, consts: [[1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "card"], ["alt", "Card image cap", 1, "rounded", "mx-auto", "d-block", "img-responsive", "mt-3", 3, "src"], [1, "card-body"], [1, "card-title", "font-weight-bold"], [1, "col-md-6"], [1, "card-text"], [1, "text-right"], [1, "btn", "btn-sm", "btn-primary", 3, "click"]], template: function ProductsListDir_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsListDir_div_1_Template, 18, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "sortBy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, ctx.__allprdts, ctx.__searchedProduct), ctx.sortByOption));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_4__["SortPipe"], _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"]], styles: ["input[_ngcontent-%COMP%]{ margin: 5px; }\n     img[_ngcontent-%COMP%]{\n       height:120px;\n       width:auto\n     }\n     .col-md-4[_ngcontent-%COMP%]{\n       margin-bottom:20px;\n     }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsListDir, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'productslist-dir',
                template: `
  
  <div class="row">  
    <div class="col-md-4"  *ngFor = "let item of __allprdts | filter : __searchedProduct | sortBy : sortByOption  ">
        <div class="card"> 
        <div>         
          <img class="rounded mx-auto d-block img-responsive mt-3" src="{{item.product_image}}" alt="Card image cap">
          </div>
          <div class="card-body">
            <h6 class="card-title font-weight-bold">{{item.product_name}}</h6>
            <div class="row">
              <div class="col-md-6">
                <p class="card-text"> <small> {{item.product_weight}} </small></p>
              </div>
              <div class="col-md-6">
              <p class="text-right"> <small> Rs {{item.product_price}} </small> </p>
              </div>
            </div>
            <button class="btn btn-sm btn-primary" (click)="addToCart(item.p_id,1)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  
  `,
                styles: [`
     input{ margin: 5px; }
     img{
       height:120px;
       width:auto
     }
     .col-md-4{
       margin-bottom:20px;
     }
  `]
            }]
    }], function () { return [{ type: _services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] }, { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }]; }, { __allprdts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["allProductList"]
        }], __searchedProduct: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["searchedText"]
        }], sortByOption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["sortingBy"]
        }], refresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "l15I":
/*!********************************************!*\
  !*** ./src/app/directives/checkout.dir.ts ***!
  \********************************************/
/*! exports provided: CheckOutDir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutDir", function() { return CheckOutDir; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var _model_companydetails_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/companydetails.model */ "amcQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function CheckOutDir_div_0_tr_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cartItems_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cartItems_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cartItems_r4.price / cartItems_r4.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cartItems_r4.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cartItems_r4.price);
} }
function CheckOutDir_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Thank you so much ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ".Your order has been placed successfully and will be delivered in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "3 days.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckOutDir_div_0_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.print(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Print Invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckOutDir_div_0_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.clearCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Place a New Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Invoice Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "From:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "To:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Unit Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, CheckOutDir_div_0_tr_73_Template, 11, 5, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.customerDetails.firstName, " ", ctx_r0.customerDetails.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 22, ctx_r0.invoiceDate, "d-MMM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("# INV-", ctx_r0.invoiceNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.companyDetails.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.companyDetails.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.companyDetails.city, ",", ctx_r0.companyDetails.pincode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email: ", ctx_r0.companyDetails.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Phone: ", ctx_r0.companyDetails.phone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.customerDetails.firstName, " ", ctx_r0.customerDetails.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.customerDetails.addressOne, ", ", ctx_r0.customerDetails.addressTwo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r0.customerDetails.city, ",", ctx_r0.customerDetails.state, ",", ctx_r0.customerDetails.zip, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email: ", ctx_r0.customerDetails.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Phone: ", ctx_r0.customerDetails.mobile, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cart.cartItemsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("INR ", ctx_r0.cart.cartTotal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("INR ", ctx_r0.cart.cartTotal, "");
} }
function CheckOutDir_ng_template_1_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Go to Billing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckOutDir_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Please shop some products & Provide billing information .");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Continue Shopping");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CheckOutDir_ng_template_1_a_6_Template, 2, 0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.cart.cartItemsList && ctx_r2.cart.cartTotal);
} }
class CheckOutDir {
    constructor(cart, storage, company, router) {
        this.cart = cart;
        this.storage = storage;
        this.company = company;
        this.router = router;
        this.companyDetails = {};
        this.customerDetails = {};
        this.checkOutFlag = {};
        this.invoiceDate = new Date();
        this.invoiceNo = Math.floor(Math.random() * 10000);
        this.__allprdts = {};
    }
    ngOnInit() {
        this.customerDetails = this.cart.loadCheckoutInfo('customerInfo');
        this.companyDetails = this.company.companyInfo;
        this.cart.allItems = this.__allprdts;
        this.cart.listCartItems();
        this.checkOutFlag = JSON.parse(this.storage.get('mycart'));
    }
    clearCart() {
        let temp = {};
        localStorage.setItem(this.storage.storageName, JSON.stringify(temp));
        //this.checkOutFlag = Object.keys(this.storage.get()).length;
        //console.log(this.checkOutFlag)
        //document.location.href='/products';
        this.cart.emptyCart();
        this.router.navigate(['/products']);
    }
    print() {
        let temp = {};
        localStorage.setItem(this.storage.storageName, JSON.stringify(temp));
        window.focus();
        window.print();
    }
}
CheckOutDir.ɵfac = function CheckOutDir_Factory(t) { return new (t || CheckOutDir)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_companydetails_model__WEBPACK_IMPORTED_MODULE_3__["CompanyDetailsModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
CheckOutDir.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckOutDir, selectors: [["checkout-dir"]], inputs: { __allprdts: ["allProductList", "__allprdts"] }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["emptyCheckout", ""], ["role", "alert", 1, "alert", "alert-success", "d-print-none"], [1, "btn", "btn-sm", "btn-info", "ml-2", "mr-1", 3, "click"], [1, "btn", "btn-sm", "btn-info", "ml-1", 3, "click"], [1, "card"], [1, "card-header"], [1, "float-right"], [1, "card-body"], [1, "row"], [1, "col-md-6", "text-left"], ["src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROSGhNugPi-wkkvEePwHNppt8AaZRlUk-y9yEapagLNUaXxy_G", 1, "logo", "mr-2", "mb-4", "float-left"], [1, "col-md-6", "text-right"], [1, "row", "mb-4"], [1, "col-sm-6"], [1, "mb-3"], [1, "table-responsive-sm"], [1, "table", "table-striped"], [1, "center"], [1, "right"], [4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-sm-5"], [1, "col-lg-4", "col-sm-5", "ml-auto"], [1, "table", "table-clear"], [1, "left"], [1, "left", "strong"], [1, "card", "alert", "alert-primary"], ["routerLink", "/products", 1, "btn", "btn-sm", "btn-info", "float-right", "ml-2"], ["class", "btn btn-sm btn-info float-right", "routerLink", "/billing", 4, "ngIf"], ["routerLink", "/billing", 1, "btn", "btn-sm", "btn-info", "float-right"]], template: function CheckOutDir_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CheckOutDir_div_0_Template, 92, 25, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckOutDir_ng_template_1_Template, 7, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customerDetails && ctx.customerDetails.firstName)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".card-header[_ngcontent-%COMP%] {\n    padding: .75rem 1.25rem;\n    margin-bottom: 0;\n    background-color: #cce5ff;\n    border-bottom: 1px solid rgba(0,0,0,.125);\n}\n.logo[_ngcontent-%COMP%]{\n      height: 100px;\n      width: auto;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckOutDir, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'checkout-dir',
                template: ` 

 
   
   <div *ngIf="customerDetails && customerDetails.firstName;else emptyCheckout "> 
   <div class="alert alert-success d-print-none" role="alert">
    Thank you so much <strong>{{customerDetails.firstName}} {{customerDetails.lastName}}</strong>.Your order has been placed successfully and will be delivered in <strong>3 days.</strong> 
    <button class="btn btn-sm btn-info ml-2 mr-1" (click)="print()">Print Invoice</button><button class="btn btn-sm btn-info ml-1" (click)="clearCart()">Place a New Order</button>
    
   </div>
   
    <div class="card">
        <div class="card-header">
            Invoice Date:
            <strong>{{invoiceDate | date:'d-MMM-yyyy'}}</strong>
            <span class="float-right"> <strong>Status:</strong> Pending</span>

        </div>
        <div class="card-body">
        <div class="row">
          <div class="col-md-6 text-left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROSGhNugPi-wkkvEePwHNppt8AaZRlUk-y9yEapagLNUaXxy_G" class="logo mr-2 mb-4 float-left"/>
          </div>
          <div class="col-md-6 text-right">
          <h4># INV-{{invoiceNo}}</h4>
          </div>
        </div>
            <div class="row mb-4">
                <div class="col-sm-6">
                    <h6 class="mb-3">From:</h6>
                    <div>
                        <strong>{{companyDetails.name}}</strong>
                    </div>
                    <div>{{companyDetails.address}}</div>
                    <div>{{companyDetails.city}},{{companyDetails.pincode}}</div>
                    <div>Email: {{companyDetails.email}}</div>
                    <div>Phone: {{companyDetails.phone}}</div>
                </div>

                <div class="col-sm-6">
                    <h6 class="mb-3">To:</h6>
                    <div>
                        <strong>{{customerDetails.firstName}} {{customerDetails.lastName}}</strong>
                    </div>
                    <div>{{customerDetails.addressOne}}, {{customerDetails.addressTwo}}</div>
                    <div>{{customerDetails.city}},{{customerDetails.state}},{{customerDetails.zip}}</div>
                    <div>Email: {{customerDetails.email}}</div>
                    <div>Phone: {{customerDetails.mobile}}</div>
                </div>
            </div>

            <div class="table-responsive-sm">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th class="center">#</th>
                            <th>Item</th>
                            <th class="right">Unit Cost</th>
                            <th class="center">Qty</th>
                            <th class="right">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor = "let cartItems of cart.cartItemsList;let i=index;">
                            <td class="center">{{i+1}}</td>
                            <td class="left strong">{{cartItems.name}}</td>
                            <td class="right">{{(cartItems.price/cartItems.qty)}}</td>
                            <td class="center">{{cartItems.qty}}</td>
                            <td class="right">{{cartItems.price}}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-5">

                </div>

                <div class="col-lg-4 col-sm-5 ml-auto">
                    <table class="table table-clear">
                        <tbody>
                            <tr>
                                <td class="left">
                                    <strong>Subtotal</strong>
                                </td>
                                <td class="right">INR {{cart.cartTotal}}</td>
                            </tr>
                            
                            <tr>
                                <td class="left">
                                    <strong>Total</strong>
                                </td>
                                <td class="right">
                                    <strong>INR {{cart.cartTotal}}</strong>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                  
                </div>

            </div>

        </div>
    </div>
</div>
<ng-template #emptyCheckout> 
<div class="card alert alert-primary">
  <div class="card-body">
    Please shop some products & Provide billing information .<a class="btn btn-sm btn-info float-right ml-2" routerLink = '/products'> Continue Shopping</a> &nbsp;  &nbsp; <a class="btn btn-sm btn-info float-right" routerLink = '/billing' *ngIf="cart.cartItemsList && cart.cartTotal"> Go to Billing</a>
  </div>
</div>

   
   </ng-template>
  `,
                styles: [`
  .card-header {
    padding: .75rem 1.25rem;
    margin-bottom: 0;
    background-color: #cce5ff;
    border-bottom: 1px solid rgba(0,0,0,.125);
}
.logo{
      height: 100px;
      width: auto;
    }

  `]
            }]
    }], function () { return [{ type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] }, { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }, { type: _model_companydetails_model__WEBPACK_IMPORTED_MODULE_3__["CompanyDetailsModel"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { __allprdts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["allProductList"]
        }] }); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: LoginCred, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCred", function() { return LoginCred; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dialog_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialog/login-dialog/login-dialog.component */ "s0Z4");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class LoginCred {
}
class AuthService {
    constructor(modalService, router) {
        this.modalService = modalService;
        this.router = router;
        this.isLoggedIn = false;
        this.dummyUser = { username: 'demo', password: 'demo' };
    }
    login(user) {
        var _a;
        if (user.username == this.dummyUser.username && user.password == this.dummyUser.password) {
            localStorage.setItem('user', JSON.stringify(user));
            this.isLoggedIn = true;
            (_a = this.bsModalRef) === null || _a === void 0 ? void 0 : _a.hide();
            this.router.navigate(['/billing']);
            return true;
        }
        else {
            this.router.navigate(['/products']);
            return false;
        }
    }
    openLoginModal() {
        this.bsModalRef = this.modalService.show(_dialog_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_1__["LoginDialogComponent"]);
    }
    close() {
        var _a;
        (_a = this.bsModalRef) === null || _a === void 0 ? void 0 : _a.hide();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "n90K":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StorageService {
    constructor() {
        this.data = {};
        this.storageName = "cartinfo";
        this.loadStorage();
    }
    loadStorage() {
        let temp = localStorage.getItem(this.storageName);
        if (temp === undefined || temp === null || temp === '') {
            this.data = {};
        }
        else {
            this.data = JSON.parse(temp);
        }
    }
    set(obj) {
        Object.keys(obj).forEach((key) => {
            this.data[key] = obj[key];
        });
        this.store();
    }
    store() {
        localStorage.setItem(this.storageName, JSON.stringify(this.data));
    }
    get(key = '') {
        if (key != '') {
            return this.data[key];
        }
        else {
            return this.data;
        }
    }
    delete(key) {
        delete this.data[key];
        this.store();
    }
    deleteAll() {
        this.data = {};
        this.store();
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "s0Z4":
/*!***************************************************************!*\
  !*** ./src/app/dialog/login-dialog/login-dialog.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDialogComponent", function() { return LoginDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");







function LoginDialogComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide username. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginDialogComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginDialogComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid username or password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginDialogComponent {
    constructor(authSvc, _formBuilder) {
        this.authSvc = authSvc;
        this._formBuilder = _formBuilder;
        this.user = new src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["LoginCred"]();
        this.isValid = true;
    }
    ngOnInit() {
        this.loginForm = this._formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    login() {
        this.isValid = this.authSvc.login(this.user);
    }
    close() {
        this.authSvc.close();
    }
}
LoginDialogComponent.ɵfac = function LoginDialogComponent_Factory(t) { return new (t || LoginDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
LoginDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginDialogComponent, selectors: [["app-login-dialog"]], decls: 20, vars: 7, consts: [[1, "modal-content"], [1, "modal-header"], ["type", "button", "aria-label", "Close", "data-dismiss", "modal", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-title", "text-center"], [1, "d-flex", "flex-column", "text-center"], [3, "formGroup"], [1, "form-group"], ["type", "email", "formControlName", "username", "id", "email", "name", "username", "placeholder", "Username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "error-msg margin-right-70", 4, "ngIf"], ["type", "password", "formControlName", "password", "id", "password", "name", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "error-msg", 4, "ngIf"], ["type", "button", 1, "btn", "btn-info", "btn-block", "btn-round", 3, "disabled", "click"], [1, "error-msg", "margin-right-70"], [1, "error-msg"]], template: function LoginDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginDialogComponent_Template_button_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginDialogComponent_Template_input_ngModelChange_12_listener($event) { return ctx.user.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginDialogComponent_span_13_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginDialogComponent_Template_input_ngModelChange_15_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginDialogComponent_span_16_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginDialogComponent_span_17_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginDialogComponent_Template_button_click_18_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_2_0 = null;
        let tmp_4_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.loginForm == null ? null : (tmp_2_0 = ctx.loginForm.get("username")) == null ? null : tmp_2_0.invalid) && ((ctx.loginForm == null ? null : (tmp_2_0 = ctx.loginForm.get("username")) == null ? null : tmp_2_0.dirty) || (ctx.loginForm == null ? null : (tmp_2_0 = ctx.loginForm.get("username")) == null ? null : tmp_2_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.loginForm == null ? null : (tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.invalid) && ((ctx.loginForm == null ? null : (tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.dirty) || (ctx.loginForm == null ? null : (tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.user.username || !ctx.user.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".error-msg[_ngcontent-%COMP%] {\r\n    color: #f44336 !important;\r\n    font-size: 12px;}\r\n\r\n.margin-right-70[_ngcontent-%COMP%] {\r\n    margin-right: 70%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWUsQ0FBQzs7QUFFcEI7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoibG9naW4tZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbXNnIHtcclxuICAgIGNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7fVxyXG5cclxuLm1hcmdpbi1yaWdodC03MCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDcwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-dialog',
                templateUrl: './login-dialog.component.html',
                styleUrls: ['./login-dialog.component.css']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "s5zK":
/*!*********************************************!*\
  !*** ./src/app/services/payment.service.ts ***!
  \*********************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PaymentService {
    constructor(_http) {
        this._http = _http;
    }
    razorPayOrder(paymentData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post('http://localhost:8001/api/v1/razorPayOrder', paymentData, { headers: headers });
    }
}
PaymentService.ɵfac = function PaymentService_Factory(t) { return new (t || PaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PaymentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaymentService, factory: PaymentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _pages_billing_billing_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/billing/billing.pages */ "fVwC");
/* harmony import */ var _pages_checkout_checkout_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/checkout/checkout.pages */ "hI2+");
/* harmony import */ var _pages_products_products_pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/products/products.pages */ "Ieg5");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment/payment.component */ "DI59");









const routes = [
    { path: 'products', component: _pages_products_products_pages__WEBPACK_IMPORTED_MODULE_5__["ProductsPage"] },
    { path: 'billing', component: _pages_billing_billing_pages__WEBPACK_IMPORTED_MODULE_3__["BillingPage"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'checkout', component: _pages_checkout_checkout_pages__WEBPACK_IMPORTED_MODULE_4__["CheckoutPage"] },
    { path: 'payment', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_6__["PaymentComponent"] },
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                enableTracing: false,
                useHash: false
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        enableTracing: false,
                        useHash: false
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map