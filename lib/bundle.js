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



window.WIDTH = 500;
window.HEIGHT = 400;

document.addEventListener('DOMContentLoaded', function() {
  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext('2d');

  canvasEl.width = window.WIDTH;
  canvasEl.height = window.HEIGHT;

  // initialize game and game view



  const game = new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */]();
  const gameView = new __WEBPACK_IMPORTED_MODULE_1__game_view__["a" /* default */](game, ctx).start();
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__other_moray__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pellet__ = __webpack_require__(4);




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
      this.add(new __WEBPACK_IMPORTED_MODULE_1__other_moray__["a" /* default */]({ game: this}));
    }
  }

  addPlayer() {
    this.player = new __WEBPACK_IMPORTED_MODULE_0__player__["a" /* default */]({
      game: this,
      pos: this.randomPos()
    });

    return this.player;
  }

  allObj() {
    return [].concat(this.pellets, this.otherMorays, this.player);
  }

  randomPos() {
    return {
      x: Math.round(Game.DIM_X * Math.random()),
      y: Math.round(Game.DIM_Y * Math.random())
    };
  }

  moveObj(delta) {
    this.allObj().forEach((obj) => {
      obj.move(delta);
    });
  }

  // remove(obj) {
  //   if (obj instanceof Pellet) {
  //     this.pellets.splice(this.pellets.indexOf(obj), 1);
  //   } else if (obj instanceof OtherMoray) {
  //     this.otherMorays.splice(this.otherMorays.indexOf(obj), 1);
  //   } else if (obj instanceof Player) {
  //     this.player.splice(this.player.indexOf(obj), 1);
  //   }
  // }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;


Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.FPS = 32;
Game.NUM_MORAYS = 10;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.player = this.game.addPlayer();
  }

  start() {
    this.player.drawCircle(this.ctx);
    // bindkeyhandlers/cursor
    // start animation
  }
}


/* harmony default export */ __webpack_exports__["a"] = (GameView);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(9);


class MovingMorays {
  constructor(cursor, pos = {x: Math.random() * window.WIDTH, y: Math.random() * window.HEIGHT}) {
    this.cursor = cursor;
    this.x = pos.x;
    this.y = pos.y;
    this.velX = 0;
    this.velY = 0;
    this.turn = 4;
    this.forward = 0;
    this.lose = false;
    this.id = Math.random();
    this.util = new __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */]();
    this.color = this.util.genColor();
    this.radius = 5;
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

  getVel() {
    this.velX = Math.sin();
    this.velY = -Math.cos();
  }

  getDrift() {

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

  // createDot(cursor) {
  //   return new Dot(cursor, cursor(), this.id, this.color);
  // }

  // drawDots() {
  //   this.morayLength.forEach(dot => dot);
  // }

  // addLength() {
  //   while (this.morayLength < 2) {
  //     let cursor;
  //     if (this.morayLength.length === 0) {
  //         cursor = this.pos.bind(this);
  //     } else {
  //       let endDot = this.morayLength.slice(-1)[0];
  //       cursor = endDot.pos;
  //     }
  //     this.morayLength.push(this.createDot(cursor));
  //   }
  // }

  drawCircle(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
  }

}

/* harmony default export */ __webpack_exports__["a"] = (MovingMorays);



// color: "rgba(41, 170, 255, .1)",
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


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(9);


class Pellet {
  constructor(x,y) {
    this.id = Math.round(Math.random());
    this.x = x;
    this.y = y;
    this.radius = 2;
    this.color = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].genColor();
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI, true);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}
/* unused harmony export default */



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moving_morays__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(9);


// import Dot from './dot';

class Player extends __WEBPACK_IMPORTED_MODULE_0__moving_morays__["a" /* default */] {
  constructor(options) {
    super(options);
    this.morayLength = [];
  }

  // cursor logic


}
/* harmony export (immutable) */ __webpack_exports__["a"] = Player;



/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class Util {
  dir(vec) {
    const norm = Util.norm(vec);
    return Util.scale(vec, 1/norm);
  }

  dist (posA, posB) {
    let distX = Math.pow(posA.x - posB.x, 2);
    let distY = Math.pow(posA.y - posB.y, 2);
    return Math.sqrt(distX + distY);
  }

  norm (vec) {
    return Util.dist([0, 0], vec);
  }

  randomVec (length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  }

  genVec (length) {
    const deg = 2 * Math.PI;
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  }

  scale (vec, m) {
    return [vec[0] * m, vec[1] * m];
  }

  genColor () {
    const gen = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += gen[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Util);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moving_morays__ = __webpack_require__(3);


class OtherMoray extends __WEBPACK_IMPORTED_MODULE_0__moving_morays__["a" /* default */] {
  constructor(options) {
    super(options);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = OtherMoray;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map