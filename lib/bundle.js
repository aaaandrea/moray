/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// import Game from './game';
// import GameView from './game_view';

document.addEventListener('DOMContentLoaded', function() {
  const canvasEl = document.getElementsByTagName('canvas')[0];
  // canvasEl.width = Game.DIM_X;
  // canvasEl.height = Game.DIM_Y;

  const canvasWidth = canvasEl.width;
  const canvasHeight = canvasEl.height;

  const ctx = canvasEl.getContext('2d');

  const draw = () => {
    ctx.beginPath();

    // ctx.moveTo(25, 25);
    // ctx.lineTo(400, 200);
    // ctx.lineWidth = 30;
    // ctx.strokeStyle = "#FF0000";
    // ctx.fill();

    // ------------------------

    let xPos = Math.round(Math.random() * canvasWidth);
    let yPos = Math.round(Math.random() * canvasHeight);

    let centerX = xPos;
    let centerY = yPos;
    let radius = 10;

    let startAngle = 0;
    let stopAngle =  2 * Math.PI;
    let isAntiClockwise = false;

    // -------------------------

    ctx.arc(centerX, centerY, radius, startAngle, stopAngle, isAntiClockwise);
    ctx.fillStyle = 'rgba(41, 170, 255, .1)';
    ctx.fill();
    // ctx.lineWidth = 0;
    // ctx.strokeStyle = '#66CC01';

    // -------------------------


    ctx.stroke();
    ctx.closePath();
  };

  for (var i = 0; i < 40; i++) {
    var r = Math.round(15 + Math.random() * 150);
    draw(r);
  }
  // const game = new Game();
  // new GameView(game, ctx).start();
});
// circle class ------------
// var circle = {
//   idValue: -1,
//   radius: 0,
//   xPos: 0,
//   yPos: 0,
//   color: "rgba(41, 170, 255, .1)",
//
//   setup: function (x, y) {
//     this.xPos = x;
//     this.yPos = y;
//
//     this.radius = Math.round(15 + Math.random() * 150);
//   },
//   setColor: function (newColor) {
//     this.color = newColor;
//   },
//   draw: function () {
//     context.beginPath();
//     context.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI, true);
//     context.fillStyle = this.color;
//     context.fill();
//   }
// };

// drawcircles in class ---------------
// function drawAllCircles() {
//   for (var i = 0; i < 40; i++) {
//     var r = Math.round(15 + Math.random() * 150);
//
//     var xPos = Math.round(Math.random() * myCanvas.width);
//     var yPos = Math.round(Math.random() * myCanvas.height);
//
//     var newCircle = Object.create(circle);
//     newCircle.setup(xPos, yPos);
//     newCircle.idValue = i;
//     newCircle.draw();
//   }
// }
// drawAllCircles();

// animation loop -------------

// function animateCircle() {
//   circle.x++;
//   circle.size++;
//
//  var requestAnimationFrame = window.requestAnimationFrame(animateCircle)|| mox || webkit ||ms;
// requestAnimationFrame;

// }


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map