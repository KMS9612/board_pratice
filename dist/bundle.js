/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/global.css */ \"./src/client/styles/global.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.css */ \"./src/client/styles/index.css\");\n/* harmony import */ var _styles_signup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/signup.css */ \"./src/client/styles/signup.css\");\n/* harmony import */ var _styles_board_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/board.css */ \"./src/client/styles/board.css\");\n// 파일을 분할해서 작성할 시 이곳에 import해야 번들링이 이루어집니다.\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  const apiTestTarget = document.getElementById(\"API\");\r\n\r\n  console.log(\"apiTestTarget\", apiTestTarget);\r\n\r\n  apiTestTarget.addEventListener(\"click\", async function () {\r\n    try {\r\n      const response = await fetch(\"http://localhost:5000/api\", {\r\n        method: \"GET\",\r\n        headers: {\r\n          \"Contents-Type\": \"application/json\",\r\n        },\r\n      });\r\n      if (!response.ok) {\r\n        throw new Error(\"HTTP error!\");\r\n      }\r\n    } catch (err) {\r\n      console.log(err);\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://test_board/./src/client/index.js?");

/***/ }),

/***/ "./src/client/styles/board.css":
/*!*************************************!*\
  !*** ./src/client/styles/board.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test_board/./src/client/styles/board.css?");

/***/ }),

/***/ "./src/client/styles/global.css":
/*!**************************************!*\
  !*** ./src/client/styles/global.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test_board/./src/client/styles/global.css?");

/***/ }),

/***/ "./src/client/styles/index.css":
/*!*************************************!*\
  !*** ./src/client/styles/index.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test_board/./src/client/styles/index.css?");

/***/ }),

/***/ "./src/client/styles/signup.css":
/*!**************************************!*\
  !*** ./src/client/styles/signup.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test_board/./src/client/styles/signup.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/index.js");
/******/ 	
/******/ })()
;