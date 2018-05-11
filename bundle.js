/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(1);\n\n__webpack_require__(2);\n\nconst goto = __webpack_require__(3);\n\ngoto.navControl('click');\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./node_modules/normalize.css/normalize.css?");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./node_modules/goto-dropdown/lib/goto-style.css?");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("const gotoMenuClasses = {\n  cssClass: 'goto-css',\n  dispSubMenu: 'goto-drop',\n  jsClass: 'goto-js',\n  menuClass: 'goto-menu',\n  navClass: 'goto-nav',\n  subMenuClass: 'goto-submenu',\n};\n\nconst gotoMenuCore = {\n  isMenuItem(target) {\n    const tag = target.tagName;\n    // Either LI or A\n    const parentNode =\n      tag === 'LI' ? target.parentNode : target.parentNode.parentNode;\n    return parentNode.classList.contains(gotoMenuClasses.subMenuClass);\n  },\n\n  closeActiveMenu() {\n    const activeMenu = document.querySelector(\n      '.' + gotoMenuClasses.dispSubMenu\n    );\n    if (activeMenu) activeMenu.classList.toggle(gotoMenuClasses.dispSubMenu);\n  },\n\n  toggleSubMenu(e) {\n    const { target } = e;\n    const tag = target.tagName;\n    if (gotoMenuCore.isMenuItem(target)) return;\n    // Either LI or A\n    const subMenu =\n      tag === 'LI' ? target.children[1] : target.parentNode.children[1];\n    // If target is active then we toggle if off on following line\n    if (!subMenu.classList.contains(gotoMenuClasses.dispSubMenu))\n      gotoMenuCore.closeActiveMenu();\n    subMenu.classList.toggle(gotoMenuClasses.dispSubMenu);\n  },\n\n  addListener(elem, trigger) {\n    elem.addEventListener(trigger, gotoMenuCore.toggleSubMenu);\n  },\n\n  hideSubMenus() {\n    const menus = document.getElementsByClassName(gotoMenuClasses.menuClass);\n\n    for (let menuIndex = 0; menuIndex < menus.length; menuIndex += 1) {\n      // Make CSS hide submenus\n      menus[menuIndex].classList.toggle(gotoMenuClasses.jsClass);\n      // Turn off CSS fallback\n      menus[menuIndex].classList.toggle(gotoMenuClasses.cssClass);\n    }\n  },\n\n  addListeners(trigger) {\n    // Grab all menus\n    const menus = document.querySelectorAll('li > ul');\n\n    for (let menuIndex = 0; menuIndex < menus.length; menuIndex += 1) {\n      // Add listener to LI containing the submenu\n      gotoMenuCore.addListener(menus[menuIndex].parentNode, trigger);\n    }\n  },\n};\n\nconst gotoMenu = {\n  navControl(trigger = 'click') {\n    gotoMenuCore.hideSubMenus();\n    gotoMenuCore.addListeners(trigger);\n  },\n};\n\nexports.navControl = gotoMenu.navControl;\n\n\n//# sourceURL=webpack:///./node_modules/goto-dropdown/lib/index.js?");

/***/ })
/******/ ]);