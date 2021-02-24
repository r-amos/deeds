/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ "./resources/js/random.js");
/* harmony import */ var _preload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preload */ "./resources/js/preload.js");
/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resize */ "./resources/js/resize.js");
/* harmony import */ var _randomPosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./randomPosition */ "./resources/js/randomPosition.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var interval;
var outroAnimation;
var currentContainer = document.getElementById("current");

function setStyle(element, propertyObject) {
  for (var property in propertyObject) {
    element.style[property] = propertyObject[property];
  }
}

var styleNextQuote = function styleNextQuote(quoteElement) {
  var _randomPosition = (0,_randomPosition__WEBPACK_IMPORTED_MODULE_3__.default)(),
      position = _randomPosition.position,
      outro = _randomPosition.outro;

  outroAnimation = outro;
  setStyle(quoteElement, {
    position: "absolute",
    top: 0,
    transform: position,
    zIndex: 10
  });
};

var appendNext = function appendNext() {
  var nextQuote = quotes.shift();
  currentContainer.insertAdjacentHTML("beforeEnd", nextQuote.template);
  styleNextQuote(document.getElementById("".concat(nextQuote.index)));
};

appendNext();

window.onload = function () {
  (0,_resize__WEBPACK_IMPORTED_MODULE_2__.default)(currentContainer.children[0].id);
  (0,_preload__WEBPACK_IMPORTED_MODULE_1__.default)(quotes, function () {
    setTimeout(function () {
      interval = setInterval(changeImage, 6000000);
      var cover = document.getElementById("cover");
      cover.style.transform = "translate(0,-100%)";
      setTimeout(function () {
        return cover.style.display = "none";
      }, 500);
    }, 500);
  });
};

var changeImage = function changeImage() {
  var _Array$from = Array.from(currentContainer.children),
      _Array$from2 = _slicedToArray(_Array$from, 2),
      currentQuote = _Array$from2[0],
      nextQuote = _Array$from2[1];

  var nextIndex = nextQuote.id;

  if ((0,_random__WEBPACK_IMPORTED_MODULE_0__.default)(0, 1) === 1) {
    nextQuote.querySelector("#container-".concat(nextIndex)).classList.add("flex-row-reverse");
  }

  currentQuote.style.transform = outroAnimation;
  nextQuote.style.transform = "translate(0,0)";
  nextQuote.classList.remove("hidden");
  (0,_resize__WEBPACK_IMPORTED_MODULE_2__.default)(nextIndex);

  if (quotes.length % 5 === 0) {
    fetch(apiUrl).then(function (x) {
      return x.json();
    }).then(function (newQuotes) {
      (0,_preload__WEBPACK_IMPORTED_MODULE_1__.default)(newQuotes);
      quotes = [].concat(_toConsumableArray(quotes), _toConsumableArray(newQuotes));
    });
  }

  appendNext();
  setTimeout(function () {
    currentContainer.removeChild(currentQuote);
  }, 500);
};

var onRefresh = function onRefresh(element) {
  element.addEventListener("click", function (e) {
    clearInterval(interval);
    interval = setInterval(changeImage, 600000);
    e.preventDefault();
    changeImage();
  });
};

onRefresh(currentContainer);

/***/ }),

/***/ "./resources/js/preload.js":
/*!*********************************!*\
  !*** ./resources/js/preload.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (quotes, cb) {
  var imagesLoaded = 0;
  quotes.forEach(function (quote) {
    var img = new Image();
    img.src = quote.image;
    quote.image = img;

    img.onload = function () {
      imagesLoaded++;

      if (imagesLoaded === quotes.length - 1) {
        if (typeof cb === "function") {
          cb();
        }
      }
    };

    return quote;
  });
});

/***/ }),

/***/ "./resources/js/random.js":
/*!********************************!*\
  !*** ./resources/js/random.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
});

/***/ }),

/***/ "./resources/js/randomPosition.js":
/*!****************************************!*\
  !*** ./resources/js/randomPosition.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ "./resources/js/random.js");

var position = {
  above: "translate(0,-100%)",
  right: "translate(100%, 0)",
  below: "translate(0,100%)",
  left: "translate(-100%,0)"
};
var outro = {
  above: "translate(0,100%)",
  right: "translate(-100%,0)",
  below: "translate(0,-100%)",
  left: "translate(100%, 0)"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var randomAnimation = Object.keys(position)[(0,_random__WEBPACK_IMPORTED_MODULE_0__.default)(0, 3)];
  return {
    position: position[randomAnimation],
    outro: outro[randomAnimation]
  };
});

/***/ }),

/***/ "./resources/js/resize.js":
/*!********************************!*\
  !*** ./resources/js/resize.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (currentIndex) {
  var quoteContainer = document.getElementById("quote-container-".concat(currentIndex));
  var paragraph = document.getElementById("quote-".concat(currentIndex));
  paragraph.style.fontSize = "200px";
  var height = quoteContainer.clientHeight;
  var currentSize = 150;
  var whatever = parseFloat(height) - 20;

  while (parseFloat(paragraph.clientHeight) > whatever) {
    currentSize = currentSize - 2;
    paragraph.style.fontSize = currentSize + "px";
  }
});

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./resources/js/app.js"],
/******/ 			["./resources/css/app.css"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;