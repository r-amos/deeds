/******/ (() => { // webpackBootstrap
(() => {
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
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
})();

(() => {
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\nSyntaxError: Unexpected token (8:4)\n    at _class.pp$4.raise (/var/www/html/node_modules/acorn/dist/acorn.js:2927:15)\n    at _class.pp.unexpected (/var/www/html/node_modules/acorn/dist/acorn.js:698:10)\n    at _class.pp$3.parseIdent (/var/www/html/node_modules/acorn/dist/acorn.js:2878:12)\n    at _class.parseIdent (/var/www/html/node_modules/acorn-node/lib/class-fields/index.js:63:47)\n    at _class.parseIdent (/var/www/html/node_modules/acorn-node/lib/static-class-features/index.js:132:55)\n    at _class.pp$3.parsePropertyName (/var/www/html/node_modules/acorn/dist/acorn.js:2686:107)\n    at _class.pp$3.parseProperty (/var/www/html/node_modules/acorn/dist/acorn.js:2613:10)\n    at _class.pp$3.parseObj (/var/www/html/node_modules/acorn/dist/acorn.js:2567:23)\n    at _class.pp$3.parseExprAtom (/var/www/html/node_modules/acorn/dist/acorn.js:2302:19)\n    at _class.parseExprAtom (/var/www/html/node_modules/acorn-node/lib/dynamic-import/index.js:77:117)\n    at processResult (/var/www/html/node_modules/webpack/lib/NormalModule.js:597:19)\n    at /var/www/html/node_modules/webpack/lib/NormalModule.js:691:5\n    at /var/www/html/node_modules/loader-runner/lib/LoaderRunner.js:399:11\n    at /var/www/html/node_modules/loader-runner/lib/LoaderRunner.js:251:18\n    at context.callback (/var/www/html/node_modules/loader-runner/lib/LoaderRunner.js:124:13)\n    at Object.loader (/var/www/html/node_modules/postcss-loader/dist/index.js:103:7)");
})();

/******/ })()
;