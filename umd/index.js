(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dfsco-react-unpkg-lib"] = factory();
	else
		root["dfsco-react-unpkg-lib"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lib/index.js":
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/*! exports provided: TextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _textInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textInput */ \"./src/lib/textInput.js\");\n/* harmony import */ var _textInput__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_textInput__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"TextInput\", function() { return _textInput__WEBPACK_IMPORTED_MODULE_0___default.a; });\n\n\n\n//# sourceURL=webpack://dfsco-react-unpkg-lib/./src/lib/index.js?");

/***/ }),

/***/ "./src/lib/textInput.js":
/*!******************************!*\
  !*** ./src/lib/textInput.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: SyntaxError: Unexpected token (5:2)\\n\\n\\u001b[0m \\u001b[90m 3 | \\u001b[39m\\n \\u001b[90m 4 | \\u001b[39m\\u001b[36mconst\\u001b[39m \\u001b[33mTextInput\\u001b[39m \\u001b[33m=\\u001b[39m ({ type \\u001b[33m=\\u001b[39m \\u001b[32m\\\"text\\\"\\u001b[39m\\u001b[33m,\\u001b[39m label\\u001b[33m,\\u001b[39m value\\u001b[33m,\\u001b[39m onChange }) \\u001b[33m=>\\u001b[39m (\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 5 | \\u001b[39m  \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"simple-form-group\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\n \\u001b[90m   | \\u001b[39m  \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 6 | \\u001b[39m    {label \\u001b[33m&&\\u001b[39m \\u001b[33m<\\u001b[39m\\u001b[33mlabel\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"simple-text-label\\\"\\u001b[39m\\u001b[33m>\\u001b[39m{label}\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mlabel\\u001b[39m\\u001b[33m>\\u001b[39m}\\n \\u001b[90m 7 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33minput\\u001b[39m\\n \\u001b[90m 8 | \\u001b[39m      type\\u001b[33m=\\u001b[39m{type}\\u001b[0m\\n\");\n\n//# sourceURL=webpack://dfsco-react-unpkg-lib/./src/lib/textInput.js?");

/***/ })

/******/ });
});