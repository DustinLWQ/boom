webpackJsonp([0,2],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_func__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_func___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__util_func__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);



const isDev = true;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

Function.prototype.partial = () => {
	let fn = this, args = [].slice.call(arguments);
	return () => fn.bind(args.concat.call([].slice.call(arguments)))
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
],[3]);