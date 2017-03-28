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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_view__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_view___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__game_view__);



document.addEventListener('DOMContentLoaded', function() {
  const canvasEl = document.getElementsByTagName('canvas')[0];
  canvasEl.width = __WEBPACK_IMPORTED_MODULE_0__game__["default"].DIM_X;
  canvasEl.height = __WEBPACK_IMPORTED_MODULE_0__game__["default"].DIM_Y;

  const ctx = canvasEl.getContext('2d');
  const game = new __WEBPACK_IMPORTED_MODULE_0__game__["default"]();
  new __WEBPACK_IMPORTED_MODULE_1__game_view___default.a(game, ctx).start();
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player__ = __webpack_require__(5);
throw new Error("Cannot find module \"other_moray\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pellet__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pellet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pellet__);




class Game {
  constructor() {
    this.otherMorays = [];
    this.pellets = [];
    this.player = [];

    this.addMorays();
  }

  add(obj) {
    this.otherMorays.push(obj);
  }

  addMorays() {
    for (let i = 0; i < Game.NUM_MORAYS; i++) {
      this.add(new __WEBPACK_IMPORTED_MODULE_1_other_moray___default.a({ game: this}));
    }
  }

  addPlayer() {
    const player = new __WEBPACK_IMPORTED_MODULE_0__player__["a" /* default */]({
      pos: this.randomPos(),
      game: this
    });
  }

  allObj() {
    return [].concat(this.player, this.pellets, this.otherMorays);
  }

  randomPos() {
    return [
      Game.DIM_X * Math.random(),
      Game.DIM_Y * Math.random()
    ];
  }

  moveObj(delta) {
    this.allObj().forEach((obj) => {
      obj.move(delta);
    });
  }

  remove(obj) {
    if (obj instanceof __WEBPACK_IMPORTED_MODULE_2__pellet___default.a) {
      this.pellets.splice(this.pellets.indexOf(obj), 1);
    } else if (obj instanceof __WEBPACK_IMPORTED_MODULE_1_other_moray___default.a) {
      this.otherMorays.splice(this.otherMorays.indexOf(obj), 1);
    } else if (obj instanceof __WEBPACK_IMPORTED_MODULE_0__player__["a" /* default */]) {
      this.player.splice(this.player.indexOf(obj), 1);
    }
  }

}

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.FPS = 32;
Game.NUM_MORAYS = 10;

module.exports = Game;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(7)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./util\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

class MovingMorays {
  constructor(cursor, pos = {x: 0, y: 0}) {
    this.cursor = cursor;
    this.x = pos.x;
    this.y = pos.y;
    this.velX = 0;
    this.velY = 0;
    this.turn = 4;
    this.forward = 0;
  }

  newMoray() {
    const moray = {size: null, pos: null, color: null};
    moray.pos();
    moray.size = context.arc(100, 100, 50, 0, 2 * Math.PI, true);
    var color = Util.genColor();
    moray.color = color;
  }

  vel() {
    return {x: this.velX, y: this.velY};
  }

  pos() {
    return {x: this.x, y: this.y};
  }

  getMove() {
    // for children to decide
  }

  getDirection() {

  }

  updatePos() {
    this.x += this.velX;
    this.y += this.velY;
    this.getMove();
  }

  collideWith(otherObject) {

  }

  remove() {
    this.game.remove(this);
  }

}

module.exports = MovingMorays;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

class Pellet {
  constructor(options) {
    options.radius = Pellet.RADIUS;
    super(options);
  }
}

Pellet.RADIUS = 2;

module.exports = Pellet;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moving_morays__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moving_morays___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__moving_morays__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pellet__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pellet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pellet__);
throw new Error("Cannot find module \"./util\"");




class Player extends __WEBPACK_IMPORTED_MODULE_0__moving_morays___default.a {
  constructor(options) {
    super(options);
    const color = options.color;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Player;



/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map