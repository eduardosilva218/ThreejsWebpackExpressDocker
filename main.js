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

/***/ "./src/assets/kanna.jpg":
/*!******************************!*\
  !*** ./src/assets/kanna.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/kanna.jpg\");\n\n//# sourceURL=webpack://threejs-webpack-express/./src/assets/kanna.jpg?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _assets_kanna_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/kanna.jpg */ \"./src/assets/kanna.jpg\");\n/* harmony import */ var _modules_cameraScript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cameraScript */ \"./src/js/modules/cameraScript.js\");\n/* harmony import */ var _modules_motorGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/motorGame */ \"./src/js/modules/motorGame.js\");\n/* harmony import */ var _modules_spriteScript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/spriteScript */ \"./src/js/modules/spriteScript.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst scene = new three__WEBPACK_IMPORTED_MODULE_4__.Scene();\r\n\r\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer();\r\nrenderer.setSize( window.innerWidth, window.innerHeight );\r\n\r\nconst objectSprite = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh( \r\n    new three__WEBPACK_IMPORTED_MODULE_4__.PlaneGeometry(), \r\n    new three__WEBPACK_IMPORTED_MODULE_4__.MeshBasicMaterial({ \r\n        map: new three__WEBPACK_IMPORTED_MODULE_4__.TextureLoader().load( _assets_kanna_jpg__WEBPACK_IMPORTED_MODULE_0__.default )\r\n    })\r\n)\r\nconst sprites = [\r\n    new _modules_spriteScript__WEBPACK_IMPORTED_MODULE_3__.spriteScript(\r\n        objectSprite,\r\n        () => {}, \r\n        () => {\r\n            objectSprite.rotation.x += 0.01;\r\n            objectSprite.rotation.y += 0.01;\r\n        })\r\n]\r\n\r\nconst objectCamera = new three__WEBPACK_IMPORTED_MODULE_4__.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 0.1, 1000 )\r\nconst camera = new _modules_cameraScript__WEBPACK_IMPORTED_MODULE_1__.cameraScript(\r\n    objectCamera,\r\n    () => { \r\n        objectCamera.position.z = 5 \r\n    },\r\n    () => {})\r\n\r\nconst motor = new _modules_motorGame__WEBPACK_IMPORTED_MODULE_2__.motorGame(sprites, scene, camera, renderer)\r\n\r\ndocument.body.appendChild( motor.domElement );\r\n\r\nmotor.load()\r\nmotor.animate()\r\n\n\n//# sourceURL=webpack://threejs-webpack-express/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/cameraScript.js":
/*!****************************************!*\
  !*** ./src/js/modules/cameraScript.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cameraScript\": () => (/* binding */ cameraScript)\n/* harmony export */ });\n\r\nclass cameraScript {\r\n    threeCamera\r\n    load\r\n    animate\r\n\r\n    constructor(\r\n        threeCamera,\r\n        load = () => {}, \r\n        animate = () => {}){\r\n        this.threeCamera = threeCamera\r\n        this.load = load\r\n        this.animate = animate\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://threejs-webpack-express/./src/js/modules/cameraScript.js?");

/***/ }),

/***/ "./src/js/modules/motorGame.js":
/*!*************************************!*\
  !*** ./src/js/modules/motorGame.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"motorGame\": () => (/* binding */ motorGame)\n/* harmony export */ });\n\r\nclass motorGame {\r\n    $spriteScripts\r\n    $scene\r\n    $cameraScript\r\n    $renderer\r\n    domElement\r\n\r\n    constructor(spriteScripts, scene, cameraScript, renderer){\r\n        this.$setup(spriteScripts, scene, cameraScript, renderer)\r\n    }\r\n\r\n    $setup(spriteScripts, scene, cameraScript, renderer)\r\n    {        \r\n        this.$spriteScripts = spriteScripts\r\n        this.$scene = scene\r\n        this.$cameraScript = cameraScript\r\n        this.$renderer = renderer\r\n        this.domElement = renderer.domElement\r\n    }\r\n\r\n    load() {\r\n        this.$cameraScript.load()\r\n        this.$spriteScripts.forEach(\r\n            spriteScript => \r\n            {\r\n                this.$scene.add(spriteScript.threeMesh);\r\n                spriteScript.load()\r\n            })\r\n    }\r\n\r\n    animate() {\r\n        requestAnimationFrame(this.animate.bind(this));\r\n        this.$spriteScripts.forEach(spriteScript => {\r\n            spriteScript.animate()\r\n            this.$cameraScript.animate()\r\n            this.$render()\r\n        });\r\n    }\r\n    \r\n    $render() {\r\n        this.$renderer.render(this.$scene, this.$cameraScript.threeCamera);\r\n    } \r\n}\r\n\r\n\n\n//# sourceURL=webpack://threejs-webpack-express/./src/js/modules/motorGame.js?");

/***/ }),

/***/ "./src/js/modules/spriteScript.js":
/*!****************************************!*\
  !*** ./src/js/modules/spriteScript.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"spriteScript\": () => (/* binding */ spriteScript)\n/* harmony export */ });\nclass spriteScript {\r\n    threeMesh\r\n    load\r\n    animate\r\n\r\n    constructor(\r\n        threeMesh,\r\n        load = () => {}, \r\n        animate = () => {}){\r\n        this.threeMesh = threeMesh\r\n        this.load = load\r\n        this.animate = animate\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://threejs-webpack-express/./src/js/modules/spriteScript.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;