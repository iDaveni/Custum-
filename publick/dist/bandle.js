/*! For license information please see bandle.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/helpers/mach.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "sum": () => (/* binding */ sum),\n/* harmony export */   "mul": () => (/* binding */ mul),\n/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction sum(a, b) {\n  return a + b;\n}\n\n;\n\nfunction mul(a, b) {\n  return a * b;\n}\n\n;\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  console.log(\'work\');\n}\n\n//# sourceURL=webpack://custum/./src/helpers/mach.js?')},"./src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_mach__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/mach */ "./src/helpers/mach.js");\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/style.scss */ "./src/style/style.scss");\n\n\nconsole.log((0,_helpers_mach__WEBPACK_IMPORTED_MODULE_0__.sum)(2, 2));\nconsole.log((0,_helpers_mach__WEBPACK_IMPORTED_MODULE_0__.mul)(3, 2));\n(0,_helpers_mach__WEBPACK_IMPORTED_MODULE_0__["default"])();\n\n//# sourceURL=webpack://custum/./src/index.js?')},"./src/style/style.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://custum/./src/style/style.scss?")}},__webpack_module_cache__={};function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var r=__webpack_module_cache__[_]={exports:{}};return __webpack_modules__[_](r,r.exports,__webpack_require__),r.exports}__webpack_require__.d=(_,e)=>{for(var r in e)__webpack_require__.o(e,r)&&!__webpack_require__.o(_,r)&&Object.defineProperty(_,r,{enumerable:!0,get:e[r]})},__webpack_require__.o=(_,e)=>Object.prototype.hasOwnProperty.call(_,e),__webpack_require__.r=_=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/index.js")})();