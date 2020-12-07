(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _main_frontend_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/frontend/app.module */ "./src/main/frontend/app.module.ts");
/* harmony import */ var _main_frontend_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/frontend/environments/environment */ "./src/main/frontend/environments/environment.ts");




if (_main_frontend_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_main_frontend_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/main/frontend/app.component.css":
/*!*********************************************!*\
  !*** ./src/main/frontend/app.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".base {\n    background: darkslategray;\n    margin-top: 5vh;\n    border: 3px solid black;\n    width: 100%;\n}\n\n.maindisplay {\n    background: lightgrey;\n    height: 25vh;\n    padding: 5% !important;\n    font-size: 4rem;\n    text-align: right;\n    font-family: Courier, monospace;\n    overflow: auto;\n}\n\n.previous {\n    background: lightgrey;\n    padding: 5% !important;\n    font-size: 1rem;\n    text-align: center !important;\n    font-family: Courier, monospace;\n    overflow: auto;\n}\n\n.subdisplay {\n    border-bottom: 1px solid black;\n    height: 25%;\n    font-size: 2rem;\n    overflow: auto;\n}\n\n.keypad {\n    height: calc(200% / 3);\n}\n\n.keys {\n    margin: 0;\n    height: 20%;\n    background: whitesmoke;\n    color: black;\n    padding: 5%;\n    font-size: 2rem;\n    text-align: center;\n    cursor: pointer;\n    opacity: 0.9;\n}\n\n.keys:hover {\n    opacity: 1;\n}\n\n.ackey {\n    color: red;\n    background: black;\n}\n\n.equalkey {\n    color: white;\n    background-color: orangered; \n}\n\n.numkey {\n    color: skyblue;\n    background-color: black; \n}\n\n.opkey {\n    color: white;\n    background-color: black; \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2Uge1xuICAgIGJhY2tncm91bmQ6IGRhcmtzbGF0ZWdyYXk7XG4gICAgbWFyZ2luLXRvcDogNXZoO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFpbmRpc3BsYXkge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbiAgICBoZWlnaHQ6IDI1dmg7XG4gICAgcGFkZGluZzogNSUgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1mYW1pbHk6IENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnByZXZpb3VzIHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG4gICAgcGFkZGluZzogNSUgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6IENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnN1YmRpc3BsYXkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IDI1JTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5rZXlwYWQge1xuICAgIGhlaWdodDogY2FsYygyMDAlIC8gMyk7XG59XG5cbi5rZXlzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAyMCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogNSU7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMC45O1xufVxuXG4ua2V5czpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmFja2V5IHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4uZXF1YWxrZXkge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7IFxufVxuXG4ubnVta2V5IHtcbiAgICBjb2xvcjogc2t5Ymx1ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgXG59XG5cbi5vcGtleSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/main/frontend/app.component.html":
/*!**********************************************!*\
  !*** ./src/main/frontend/app.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\"></div>\n    <div class=\"col-md-4\">\n      <div class=\"base\">\n        <div class=\"maindisplay\">\n          <div class=\"subdisplay\">{{ subText }}</div>\n          {{ mainText }}\n        </div>\n        <div class=\"keypad\">\n          <table style=\"width: 100%;\">\n            <tr>\n              <td class=\"keys ackey\" colspan=\"3\" (click)=\"allClear()\">AC</td>\n              <td class=\"keys opkey\" colspan=\"1\" (click)=\"pressKey('/')\">/</td>\n            </tr>\n            <tr>\n              <td class=\"keys numkey\" (click)=\"pressKey('7')\">7</td>  \n              <td class=\"keys numkey\" (click)=\"pressKey('8')\">8</td>\n              <td class=\"keys numkey\" (click)=\"pressKey('9')\">9</td>  \n              <td class=\"keys opkey\" (click)=\"pressKey('x')\">x</td>\n            </tr>\n            <tr>\n              <td class=\"keys numkey\" (click)=\"pressKey('4')\">4</td>  \n              <td class=\"keys numkey\" (click)=\"pressKey('5')\">5</td>\n              <td class=\"keys numkey\" (click)=\"pressKey('6')\">6</td>  \n              <td class=\"keys opkey\" (click)=\"pressKey('-')\">-</td>\n            </tr>\n            <tr>\n              <td class=\"keys numkey\" (click)=\"pressKey('3')\">3</td>  \n              <td class=\"keys numkey\" (click)=\"pressKey('2')\">2</td>\n              <td class=\"keys numkey\" (click)=\"pressKey('1')\">1</td>  \n              <td class=\"keys opkey\" (click)=\"pressKey('+')\">+</td>\n            </tr>\n            <tr>\n              <td colspan=\"2\" class=\"keys numkey\" (click)=\"pressKey('0')\">0</td>\n              <td class=\"keys numkey\" (click)=\"pressKey('.')\">.</td>  \n              <td class=\"keys equalkey\" (click)=\"getAnswer()\">=</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"base\">\n        <div class=\"previous\">\n            <div class=\"row\">\n             <h4>Last 10 Calculations</h4>\n            </div>\n            <div class=\"row\" *ngFor=\"let calculation of calculations; index as i; trackBy: trackByFn\">\n              <div class=\"col-md-2\"></div>\n              <div class=\"col-md-8\">{{ calculation }}</div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/main/frontend/app.component.ts":
/*!********************************************!*\
  !*** ./src/main/frontend/app.component.ts ***!
  \********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        var _this = this;
        this.http = http;
        this.calculations = [];
        this.subText = '';
        this.mainText = '';
        this.operator = '';
        this.calculationString = '';
        this.answered = false;
        this.operatorSet = false;
        this.init();
        this.id = setInterval(function () {
            _this.init();
        }, 5000);
    }
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.id) {
            clearInterval(this.id);
        }
    };
    AppComponent.prototype.pressKey = function (key) {
        if (key === '/' || key === 'x' || key === '-' || key === '+') {
            var lastKey = this.mainText[this.mainText.length - 1];
            if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+') {
                this.operatorSet = true;
            }
            if ((this.operatorSet) || (this.mainText === '')) {
                return;
            }
            this.operand1 = parseFloat(this.mainText);
            this.operator = key;
            this.operatorSet = true;
        }
        if (this.mainText.length === 10) {
            return;
        }
        this.mainText += key;
        this.operatorSet = false;
    };
    AppComponent.prototype.allClear = function () {
        this.mainText = '';
        this.subText = '';
        this.operatorSet = false;
    };
    AppComponent.prototype.getAnswer = function () {
        this.calculationString = this.mainText;
        this.operand2 = parseFloat(this.mainText.split(this.operator)[1]);
        if (this.operator === '/') {
            this.subText = this.mainText;
            this.mainText = (this.operand1 / this.operand2).toString();
            this.subText = this.calculationString;
            if (this.mainText.length > 9) {
                this.mainText = this.mainText.substr(0, 9);
            }
        }
        else if (this.operator === 'x') {
            this.subText = this.mainText;
            this.mainText = (this.operand1 * this.operand2).toString();
            this.subText = this.calculationString;
            if (this.mainText.length > 9) {
                this.mainText = 'ERROR';
                this.subText = 'Range Exceeded';
            }
        }
        else if (this.operator === '-') {
            this.subText = this.mainText;
            this.mainText = (this.operand1 - this.operand2).toString();
            this.subText = this.calculationString;
        }
        else if (this.operator === '+') {
            this.subText = this.mainText;
            this.mainText = (this.operand1 + this.operand2).toString();
            this.subText = this.calculationString;
            if (this.mainText.length > 9) {
                this.mainText = 'ERROR';
                this.subText = 'Range Exceeded';
            }
        }
        else {
            this.subText = 'ERROR: Invalid Operation';
        }
        this.addCalculation(this.calculationString + ' = ' + this.mainText);
        this.answered = true;
    };
    AppComponent.prototype.addCalculation = function (calculation) {
        var _this = this;
        this.http.post('https://egraika-calculator.herokuapp.com/saveCalculation', calculation).subscribe(function (data) {
            _this.calculations = data;
            console.log(data);
        });
    };
    AppComponent.prototype.init = function () {
        var _this = this;
        this.http.get('https://egraika-calculator.herokuapp.com/getCalculations').subscribe(function (data) {
            _this.calculations = data;
            console.log(data);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/main/frontend/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/main/frontend/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/main/frontend/app.module.ts":
/*!*****************************************!*\
  !*** ./src/main/frontend/app.module.ts ***!
  \*****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/main/frontend/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/main/frontend/environments/environment.ts":
/*!*******************************************************!*\
  !*** ./src/main/frontend/environments/environment.ts ***!
  \*******************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/egraika/repos/voyager/calc/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map