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

/***/ "./src/drawBackground.js":
/*!*******************************!*\
  !*** ./src/drawBackground.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawBackground: () => (/* binding */ drawBackground)\n/* harmony export */ });\n/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/background.png */ \"./src/images/background.png\");\n\nvar backgroundImage = new Image();\nbackgroundImage.src = _images_background_png__WEBPACK_IMPORTED_MODULE_0__;\nfunction drawBackground(_ref) {\n  var ctx = _ref.ctx,\n    canvas = _ref.canvas;\n  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);\n}\n\n//# sourceURL=webpack://fishermancatchplatic/./src/drawBackground.js?");

/***/ }),

/***/ "./src/drawNet.js":
/*!************************!*\
  !*** ./src/drawNet.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawNet: () => (/* binding */ drawNet)\n/* harmony export */ });\n/* harmony import */ var _images_net_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/net.png */ \"./src/images/net.png\");\n\nvar netImage = new Image();\nnetImage.src = _images_net_png__WEBPACK_IMPORTED_MODULE_0__;\nfunction drawNet(_ref) {\n  var ctx = _ref.ctx,\n    net = _ref.net;\n  ctx.drawImage(netImage, net.x, net.y, net.width, net.height); // Draw the net image\n}\n\n//# sourceURL=webpack://fishermancatchplatic/./src/drawNet.js?");

/***/ }),

/***/ "./src/fish.js":
/*!*********************!*\
  !*** ./src/fish.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   catchFish: () => (/* binding */ catchFish),\n/* harmony export */   drawFish: () => (/* binding */ drawFish),\n/* harmony export */   updateFishesPosition: () => (/* binding */ updateFishesPosition)\n/* harmony export */ });\n/* harmony import */ var _images_fish_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/fish-1.png */ \"./src/images/fish-1.png\");\n\nvar image = new Image();\nimage.src = _images_fish_1_png__WEBPACK_IMPORTED_MODULE_0__;\nfunction drawFish(_ref) {\n  var ctx = _ref.ctx,\n    fish = _ref.fish;\n  ctx.drawImage(image, fish.x, fish.y, fish.width, fish.height);\n}\nfunction catchFish(_ref2) {\n  var fishes = _ref2.fishes,\n    score = _ref2.score,\n    net = _ref2.net,\n    canvas = _ref2.canvas;\n  return [fishes.map(function (fish) {\n    if (fish.x < net.x + net.width && fish.x + fish.width > net.x && fish.y < net.y + net.height && fish.y + fish.height > net.y) {\n      fish.x = -fish.width;\n      fish.y = Math.random() * (canvas.height - topBoundary - fish.height) + topBoundary;\n      score = score === 0 ? 0 : score - 1;\n    }\n    return fish;\n  }), score];\n}\nfunction updateFishesPosition(_ref3) {\n  var fishes = _ref3.fishes,\n    canvas = _ref3.canvas,\n    topBoundary = _ref3.topBoundary;\n  return fishes.map(function (fish) {\n    fish.x += fish.speed;\n    if (fish.x > canvas.width) {\n      fish.x = -fish.width;\n      fish.y = Math.random() * (canvas.height - topBoundary - fish.height) + topBoundary;\n    }\n    return fish;\n  });\n}\n\n//# sourceURL=webpack://fishermancatchplatic/./src/fish.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _drawBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawBackground */ \"./src/drawBackground.js\");\n/* harmony import */ var _drawNet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawNet */ \"./src/drawNet.js\");\n/* harmony import */ var _fish__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fish */ \"./src/fish.js\");\n/* harmony import */ var _plastic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plastic */ \"./src/plastic.js\");\n/* harmony import */ var _scoreProgressBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scoreProgressBar */ \"./src/scoreProgressBar.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar canvas = document.getElementById(\"gameCanvas\");\nvar ctx = canvas.getContext(\"2d\");\nvar startButton = document.getElementById(\"startButton\");\nvar continueButton = document.getElementById(\"continueButton\");\nvar pauseScreen = document.getElementById(\"pauseScreen\");\nwindow.gameActive = false;\nwindow.score = 0;\nwindow.topBoundary = 325;\nwindow.fishes = [];\nwindow.plastics = [];\nwindow.requestID = null; // Variable to store the ID of the requestAnimationFrame\nwindow.topScore = 3;\nvar net = {\n  x: canvas.width / 2 - 25,\n  y: topBoundary,\n  width: 50,\n  height: 50\n};\n\n// Pauses the game\nfunction pauseGame() {\n  gameActive = false;\n  cancelAnimationFrame(requestID);\n  pauseScreen.style.visibility = \"visible\";\n}\n\n// Main game loop\nfunction gameLoop() {\n  if (!gameActive) return;\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  fishes = (0,_fish__WEBPACK_IMPORTED_MODULE_3__.updateFishesPosition)({\n    fishes: fishes,\n    canvas: canvas,\n    topBoundary: topBoundary\n  });\n  plastics = (0,_plastic__WEBPACK_IMPORTED_MODULE_4__.updatePlasticsPosition)({\n    plastics: plastics,\n    canvas: canvas,\n    topBoundary: topBoundary\n  });\n  var _catchFish = (0,_fish__WEBPACK_IMPORTED_MODULE_3__.catchFish)({\n      fishes: fishes,\n      score: score,\n      net: net,\n      canvas: canvas\n    }),\n    _catchFish2 = _slicedToArray(_catchFish, 2),\n    newFishes = _catchFish2[0],\n    newScore1 = _catchFish2[1];\n  fishes = newFishes;\n  score = newScore1;\n  var _catchPlastic = (0,_plastic__WEBPACK_IMPORTED_MODULE_4__.catchPlastic)({\n      plastics: plastics,\n      score: score,\n      net: net,\n      canvas: canvas\n    }),\n    _catchPlastic2 = _slicedToArray(_catchPlastic, 2),\n    newPlastics = _catchPlastic2[0],\n    newScore = _catchPlastic2[1];\n  plastics = newPlastics;\n  score = newScore;\n  (0,_drawBackground__WEBPACK_IMPORTED_MODULE_1__.drawBackground)({\n    ctx: ctx,\n    canvas: canvas\n  });\n  (0,_drawNet__WEBPACK_IMPORTED_MODULE_2__.drawNet)({\n    ctx: ctx,\n    net: net\n  });\n  fishes.forEach(function (fish) {\n    return (0,_fish__WEBPACK_IMPORTED_MODULE_3__.drawFish)({\n      ctx: ctx,\n      canvas: canvas,\n      fish: fish\n    });\n  });\n  plastics.forEach(function (plastic) {\n    return (0,_plastic__WEBPACK_IMPORTED_MODULE_4__.drawPlastic)({\n      ctx: ctx,\n      canvas: canvas,\n      plastic: plastic\n    });\n  });\n  (0,_scoreProgressBar__WEBPACK_IMPORTED_MODULE_5__.drawScoreProgressBar)({\n    ctx: ctx,\n    score: score,\n    topScore: topScore,\n    canvas: canvas\n  });\n  if (score >= topScore) {\n    pauseGame();\n  } else {\n    if (gameActive) {\n      cancelAnimationFrame(requestID);\n      requestID = requestAnimationFrame(gameLoop);\n    }\n  }\n}\n\n// Event listeners for game control\ndocument.addEventListener(\"keydown\", function (event) {\n  if (!gameActive) return;\n  if (event.key === \"ArrowUp\" && net.y > topBoundary) {\n    net.y -= 10;\n  } else if (event.key === \"ArrowDown\" && net.y < canvas.height - net.height) {\n    net.y += 10;\n  }\n});\nstartButton.addEventListener(\"click\", function () {\n  if (!gameActive) {\n    gameActive = true;\n    startButton.style.display = \"none\";\n    canvas.style.display = \"block\";\n    score = 0; // Reset score when starting a new game session\n    fishes = [];\n    for (var i = 0; i < 10; i++) {\n      fishes.push({\n        x: 0,\n        y: Math.random() * (canvas.height - topBoundary - 30) + topBoundary,\n        width: 30,\n        height: 30,\n        speed: 2 + Math.random() * 2\n      });\n    }\n    for (var _i = 0; _i < 5; _i++) {\n      plastics.push((0,_plastic__WEBPACK_IMPORTED_MODULE_4__.createPlastic)({\n        canvas: canvas,\n        topBoundary: topBoundary\n      }));\n    }\n    gameLoop();\n  }\n});\ncontinueButton.onclick = function () {\n  pauseScreen.style.visibility = \"hidden\";\n  gameActive = true;\n  score = 0;\n  requestAnimationFrame(gameLoop); // Ensure we restart the animation frame\n};\n\n//# sourceURL=webpack://fishermancatchplatic/./src/index.js?");

/***/ }),

/***/ "./src/plastic.js":
/*!************************!*\
  !*** ./src/plastic.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   catchPlastic: () => (/* binding */ catchPlastic),\n/* harmony export */   createPlastic: () => (/* binding */ createPlastic),\n/* harmony export */   drawPlastic: () => (/* binding */ drawPlastic),\n/* harmony export */   updatePlasticsPosition: () => (/* binding */ updatePlasticsPosition)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _images_plastic_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/plastic-1.png */ \"./src/images/plastic-1.png\");\n/* harmony import */ var _images_plastic_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/plastic-2.png */ \"./src/images/plastic-2.png\");\n/* harmony import */ var _images_plastic_3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/plastic-3.png */ \"./src/images/plastic-3.png\");\n\n\n\n\nvar platicsImages = [(0,_utils__WEBPACK_IMPORTED_MODULE_0__.createImage)(_images_plastic_1_png__WEBPACK_IMPORTED_MODULE_1__), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createImage)(_images_plastic_2_png__WEBPACK_IMPORTED_MODULE_2__), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createImage)(_images_plastic_3_png__WEBPACK_IMPORTED_MODULE_3__)];\nfunction createPlastic(_ref) {\n  var canvas = _ref.canvas,\n    topBoundary = _ref.topBoundary;\n  return {\n    x: canvas.width,\n    y: Math.random() * (canvas.height - topBoundary - 20) + topBoundary,\n    width: 40,\n    height: 20,\n    speed: -1 - Math.random(),\n    imageKey: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 3)\n  };\n}\nfunction updatePlasticsPosition(_ref2) {\n  var plastics = _ref2.plastics,\n    canvas = _ref2.canvas,\n    topBoundary = _ref2.topBoundary;\n  return plastics.map(function (plastic) {\n    plastic.x += plastic.speed;\n    if (plastic.x < -plastic.width) {\n      plastic.x = canvas.width;\n      plastic.y = Math.random() * (canvas.height - topBoundary - plastic.height) + topBoundary;\n    }\n    return plastic;\n  });\n}\nfunction catchPlastic(_ref3) {\n  var plastics = _ref3.plastics,\n    score = _ref3.score,\n    net = _ref3.net,\n    canvas = _ref3.canvas;\n  return [plastics.map(function (plastic) {\n    if (plastic.x < net.x + net.width && plastic.x + plastic.width > net.x && plastic.y < net.y + net.height && plastic.y + plastic.height > net.y) {\n      plastic.x = canvas.width;\n      plastic.y = Math.random() * (canvas.height - topBoundary - plastic.height) + topBoundary;\n      score += 2; // Plastics could be worth more points due to environmental awareness\n    }\n    return plastic;\n  }), score];\n}\nfunction drawPlastic(_ref4) {\n  var ctx = _ref4.ctx,\n    plastic = _ref4.plastic;\n  ctx.drawImage(platicsImages[plastic.imageKey - 1], plastic.x, plastic.y, plastic.width, plastic.height);\n}\n\n//# sourceURL=webpack://fishermancatchplatic/./src/plastic.js?");

/***/ }),

/***/ "./src/scoreProgressBar.js":
/*!*********************************!*\
  !*** ./src/scoreProgressBar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawScoreProgressBar: () => (/* binding */ drawScoreProgressBar)\n/* harmony export */ });\n// Draws the score progress bar on the canvas\nfunction drawScoreProgressBar(_ref) {\n  var ctx = _ref.ctx,\n    score = _ref.score,\n    topScore = _ref.topScore,\n    canvas = _ref.canvas;\n  var progressBarWidth = 200;\n  var progressBarHeight = 20;\n  var progress = score / topScore * progressBarWidth;\n  ctx.fillStyle = \"gray\";\n  ctx.fillRect(canvas.width / 2 - progressBarWidth / 2, 30, progressBarWidth, progressBarHeight);\n  ctx.fillStyle = \"blue\";\n  ctx.fillRect(canvas.width / 2 - progressBarWidth / 2, 30, progress, progressBarHeight);\n  ctx.strokeStyle = \"black\";\n  ctx.strokeRect(canvas.width / 2 - progressBarWidth / 2, 30, progressBarWidth, progressBarHeight);\n}\n\n//# sourceURL=webpack://fishermancatchplatic/./src/scoreProgressBar.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createImage: () => (/* binding */ createImage),\n/* harmony export */   getRandomInt: () => (/* binding */ getRandomInt)\n/* harmony export */ });\nfunction getRandomInt(min, max) {\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\nfunction createImage(imageSrc) {\n  var image = new Image();\n  image.src = imageSrc;\n  return image;\n}\n\n//# sourceURL=webpack://fishermancatchplatic/./src/utils.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html, body {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #e0f7fa;  /* Light blue background for an aquatic theme */\n}\n\n#gameContainer {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n  box-sizing: border-box; /* Includes padding in the dimension calculations */\n}\n\ncanvas {\n  background-color: #87CEEB; /* Sky blue background for the canvas */\n  display: block;\n}\n\nbutton {\n  font-size: 20px;\n  padding: 10px 20px;\n  cursor: pointer;\n  margin-top: 20px; /* Provides space between the canvas and the button */\n}\n\n#pauseScreen {\n  visibility: hidden; /* Hidden initially */\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 600px;\n  gap: 20px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://fishermancatchplatic/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://fishermancatchplatic/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://fishermancatchplatic/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://fishermancatchplatic/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://fishermancatchplatic/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://fishermancatchplatic/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://fishermancatchplatic/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://fishermancatchplatic/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://fishermancatchplatic/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://fishermancatchplatic/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/background.png":
/*!***********************************!*\
  !*** ./src/images/background.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"64c366fc8513610ea3b6.png\";\n\n//# sourceURL=webpack://fishermancatchplatic/./src/images/background.png?");

/***/ }),

/***/ "./src/images/fish-1.png":
/*!*******************************!*\
  !*** ./src/images/fish-1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"667a7dfdb7f9432a26d1.png\";\n\n//# sourceURL=webpack://fishermancatchplatic/./src/images/fish-1.png?");

/***/ }),

/***/ "./src/images/net.png":
/*!****************************!*\
  !*** ./src/images/net.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bbdc67be5f7897e1923b.png\";\n\n//# sourceURL=webpack://fishermancatchplatic/./src/images/net.png?");

/***/ }),

/***/ "./src/images/plastic-1.png":
/*!**********************************!*\
  !*** ./src/images/plastic-1.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"548978416ef685bc806e.png\";\n\n//# sourceURL=webpack://fishermancatchplatic/./src/images/plastic-1.png?");

/***/ }),

/***/ "./src/images/plastic-2.png":
/*!**********************************!*\
  !*** ./src/images/plastic-2.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9552502d0f512dc5bf33.png\";\n\n//# sourceURL=webpack://fishermancatchplatic/./src/images/plastic-2.png?");

/***/ }),

/***/ "./src/images/plastic-3.png":
/*!**********************************!*\
  !*** ./src/images/plastic-3.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"edabb2d253f3bbb78f84.png\";\n\n//# sourceURL=webpack://fishermancatchplatic/./src/images/plastic-3.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;