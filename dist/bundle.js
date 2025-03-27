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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/global.css */ \"./src/client/styles/global.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.css */ \"./src/client/styles/index.css\");\n/* harmony import */ var _styles_signup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/signup.css */ \"./src/client/styles/signup.css\");\n/* harmony import */ var _styles_board_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/board.css */ \"./src/client/styles/board.css\");\n/* harmony import */ var _login_page_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login_page.js */ \"./src/client/login_page.js\");\n/* harmony import */ var _signup_page_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup_page.js */ \"./src/client/signup_page.js\");\n// 파일을 분할해서 작성할 시 이곳에 import해야 번들링이 이루어집니다.\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  const apiTestTarget = document.getElementById(\"API\");\r\n\r\n  console.log(\"apiTestTarget\", apiTestTarget);\r\n\r\n  apiTestTarget.addEventListener(\"click\", async function () {\r\n    try {\r\n      const response = await fetch(\"http://localhost:5000/api\", {\r\n        method: \"GET\",\r\n        headers: {\r\n          \"Content-Type\": \"application/json\",\r\n        },\r\n      });\r\n      if (!response.ok) {\r\n        throw new Error(\"HTTP error!\");\r\n      }\r\n    } catch (err) {\r\n      console.log(err);\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://test_board/./src/client/index.js?");

/***/ }),

/***/ "./src/client/login_page.js":
/*!**********************************!*\
  !*** ./src/client/login_page.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst loginLogic = () => {};\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {});\r\n\n\n//# sourceURL=webpack://test_board/./src/client/login_page.js?");

/***/ }),

/***/ "./src/client/signup_page.js":
/*!***********************************!*\
  !*** ./src/client/signup_page.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst signUpLogic = async (inputTargets) => {\r\n  if (!checkSignUpInputs(inputTargets)) {\r\n    return;\r\n  }\r\n  const { userName, email, password, passwordCheck } = inputTargets;\r\n\r\n  try {\r\n    const response = await fetch(\"http://localhost:5000/user/createUser\", {\r\n      method: \"POST\",\r\n      mode: \"cors\",\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n      body: json.stringify({\r\n        userName,\r\n        email,\r\n        password,\r\n      }),\r\n    });\r\n\r\n    console.log(response);\r\n    if (!response.ok) {\r\n      throw new Error(\"Error\");\r\n    }\r\n  } catch (err) {\r\n    console.log(err);\r\n  }\r\n};\r\n\r\n/** 회원가입에 필요한 정보가 충족되었는지 확인하는 함수\r\n * 충족되었다면 true 아니라면 false\r\n */\r\nconst checkSignUpInputs = (inputTargets) => {\r\n  const { userName, email, password, passwordCheck } = inputTargets;\r\n\r\n  if (!userName) {\r\n    alert(\"이름을 입력 해 주세요\");\r\n    return false;\r\n  }\r\n  if (!email) {\r\n    alert(\"이메일을 입력 해 주세요\");\r\n    return false;\r\n  }\r\n  if (!password) {\r\n    alert(\"비밀번호를 입력 해 주세요\");\r\n    return false;\r\n  }\r\n  if (password !== passwordCheck) {\r\n    alert(\"비밀번호가 일치하지 않습니다.\");\r\n    return false;\r\n  }\r\n\r\n  return true;\r\n};\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  const signUpBtn = document.querySelector(\"#signUpBtn\");\r\n  const userName = document.querySelector(\"#userNameInput\");\r\n  const email = document.querySelector(\"#userNameInput\");\r\n  const password = document.querySelector(\"#userNameInput\");\r\n  const passwordCheck = document.querySelector(\"#userNameInput\");\r\n\r\n  signUpBtn.addEventListener(\"click\", () => {\r\n    const inputTargets = {\r\n      userName: userName.value,\r\n      email: email.value,\r\n      password: password.value,\r\n      passwordCheck: passwordCheck.value,\r\n    };\r\n\r\n    const response = signUpLogic(inputTargets);\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://test_board/./src/client/signup_page.js?");

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