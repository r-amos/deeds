/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

var currentIndex = 1;
var indexer = quotes[quotes.length - 1].index + 1;
var quoteIndex = 0;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

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
var randomAnimation;

var appendNext = function appendNext() {
  document.getElementById("current").insertAdjacentHTML("beforeEnd", quotes[quoteIndex].template);
  var nw = document.getElementById("".concat(quotes[quoteIndex].index));
  nw.style.position = "absolute";
  nw.style.top = 0;
  randomAnimation = Object.keys(position)[getRandomIntInclusive(0, 3)];
  nw.style.transform = position[randomAnimation];
  nw.style.zIndex = 10;
  quoteIndex++;
};

appendNext();

var debounce = function debounce(func, wait) {
  var timeout;
  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      clearTimeout(timeout);
      func.apply(void 0, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

window.onload = function () {
  var quoteContainer = document.getElementById("quote-container-".concat(currentIndex));
  var paragraph = document.getElementById("quote-".concat(currentIndex));
  paragraph.style.fontSize = "200px";
  var height = quoteContainer.clientHeight;
  var currentSize = 200;
  var whatever = parseFloat(height) - 20;

  while (parseFloat(paragraph.clientHeight) > whatever) {
    currentSize = currentSize - 2;
    paragraph.style.fontSize = currentSize + "px";
  }

  var imagesLoaded = 0;
  quotes = quotes.map(function (q, i) {
    var img = new Image();
    img.src = q.image;
    q.image = img;

    img.onload = function () {
      ++imagesLoaded;

      if (imagesLoaded === quotes.length - 1) {
        setTimeout(function () {
          document.getElementById("cover").style.transform = "translate(0,-100%)";
        }, 500);
      }
    };

    return q;
  });
};

var changeImage = function changeImage() {
  if (stillWaiting) {
    return;
  } else {
    stillWaiting = true;
  }

  if (getRandomIntInclusive(0, 1)) {
    console.log("random");
    document.getElementById("container-".concat(currentIndex + 1)).classList.add("flex-row-reverse");
  }

  document.getElementById("".concat(currentIndex)).style.transform = outro[randomAnimation];
  document.getElementById("".concat(currentIndex + 1)).style.transform = "translate(0,0)";
  document.getElementById("".concat(currentIndex + 1)).classList.remove("invisible");
  var quoteContainer = document.getElementById("quote-container-".concat(currentIndex + 1));
  var paragraph = document.getElementById("quote-".concat(currentIndex + 1));
  paragraph.style.fontSize = "200px";
  var height = quoteContainer.clientHeight;
  var currentSize = 80;
  var whatever = parseFloat(height) - 20;

  while (parseFloat(paragraph.clientHeight) > whatever) {
    currentSize = currentSize - 2;
    paragraph.style.fontSize = currentSize + "px";
  }

  fetch("http://localhost/api/daily/".concat(indexer)).then(function (x) {
    return x.json();
  }).then(function (x) {
    indexer++;
    var img = new Image();
    img.src = x.url;
    quotes.push({
      index: x.index,
      author: x.quote.author,
      quote: x.quote.text,
      image: img,
      colour: x.colour,
      overlay: x.overlay,
      template: x.quote.template
    });
    stillWaiting = false;
  });
  currentIndex++;
  appendNext();
  setTimeout(function () {
    document.getElementById("current").removeChild(document.getElementById(currentIndex - 1));
  }, 500);
};

var interval = setInterval(changeImage, 10000);
var stillWaiting = false;

var onRefresh = function onRefresh(element) {
  element.addEventListener("click", function (e) {
    clearInterval(interval);
    interval = setInterval(changeImage, 10000);
    e.preventDefault();
    changeImage();
  });
};

onRefresh(document.getElementById("current"));

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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