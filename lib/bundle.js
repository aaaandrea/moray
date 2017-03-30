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
  const game = new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */](canvasEl, ctx);
  const gameView = new __WEBPACK_IMPORTED_MODULE_1__game_view__["a" /* default */](game, ctx, canvasEl).play();

});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__other_moray__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pellet__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(9);





class Game {
  constructor(canvas, context) {
    this.otherMorays = this.addMorays();
    this.pellets = this.addPellets();
    this.canvas = canvas;
    this.context = context;
    this.player = [new __WEBPACK_IMPORTED_MODULE_0__player__["a" /* default */]({
      canvas: this.canvas,
      context: this.context
    })];
    this.util = new __WEBPACK_IMPORTED_MODULE_3__util__["a" /* default */]();
    this.allObj = this.allObj();
  }

  addMorays() {
    let morays = [];
    for (let i = 0; i < Game.NUM_MORAYS; i++) {
      morays.push(new __WEBPACK_IMPORTED_MODULE_1__other_moray__["a" /* default */]({ game: this }));
    }
    return morays;
  }

  addPellets() {
    let pellets = [];
    for (let i = 0; i < Game.NUM_PELLETS; i++) {
      let pos = this.randomPos();
      pellets.push(new __WEBPACK_IMPORTED_MODULE_2__pellet__["a" /* default */](pos, this.game));
    }
    return pellets;
  }

  randomPos() {
    return {
      x: Math.round(window.WIDTH * Math.random()),
      y: Math.round(window.HEIGHT * Math.random())
    };
  }

  allObj() {
    return [].concat(this.pellets, this.otherMorays, this.player);
  }

  moveObj(delta) {
    this.allObj.forEach((obj) => {
      if (obj instanceof __WEBPACK_IMPORTED_MODULE_2__pellet__["a" /* default */]) {
        null;
      } else {
        obj.move(delta);
      }
    });
  }

  // outOfBounds() {
  //   return (pos[0] < 0) || (pos[1] < 0) ||
  //   (pos[0] > this.canvas.width) || (pos[1] > this.canvas.height);
  // }

  draw() {
    this.context
      .clearRect(0, 0, this.canvas.width, this.canvas.height);

    const that = this;

    this.allObj.forEach(
      (el) => {
        el.draw(that.context);
      }
    );
  }

  step(delta) {
    this.moveObj(delta);
    this.checkCollisions();
  }

  wrap(pos) {
    return [
      __WEBPACK_IMPORTED_MODULE_3__util__["a" /* default */].wrap(pos[0], window.WIDTH), this.util.wrap(pos[1], window.HEIGHT)
    ];
  }

  collideWith(otherObject) {
    const centerDist = this.util.dist(this.pos, otherObject.pos);
    return centerDist < (this.radius + otherObject.radius);
  }

  checkCollisions() {
    for (let i = 0; i < this.allObj.length; i++) {
      for (let j = i + 1; j < this.allObj.length; j++) {
        const obj1 = this.allObj[i];
        const obj2 = this.allObj[j];
        if (obj1.isCollidedWith(obj2)) {
          const collision = obj1.collideWith(obj2);
          if (collision) {
            console.log(collision);
            return;
          }
        }
      }
    }
  }

  remove(obj) {
    if (obj instanceof __WEBPACK_IMPORTED_MODULE_2__pellet__["a" /* default */]) {
      this.pellets.splice(this.pellets.indexOf(obj), 1);
    } else if (obj instanceof __WEBPACK_IMPORTED_MODULE_1__other_moray__["a" /* default */]) {
      this.otherMorays.splice(this.otherMorays.indexOf(obj), 1);
    } else if (obj instanceof __WEBPACK_IMPORTED_MODULE_0__player__["a" /* default */]) {
      this.player.splice(this.player.indexOf(obj), 1);
    }
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;

//
// const FPS = 33;
// const INTERVAL = 1000/FPS;
// const STEP = INTERVAL/1000;

const CONTROLS = {
  x: 250,
  y: 200
};

const setMousePosition = (e) => {
  CONTROLS.x = e.clientX;
  CONTROLS.y = e.clientY;
};

window.addEventListener("mousemove", setMousePosition, false);

Game.NUM_MORAYS = 10;
Game.NUM_PELLETS = 20;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(9);




class GameView {
  constructor(game, ctx, canvas) {
    this.ctx = ctx;
    this.game = game;
    this.canvas = canvas;
    this.util = new __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */]();
    this.player = this.game.player;
    // this.allObj = this.game.allObj();
    // document.addEventListener('keypress', function(e) {
    //   // find keycode for spacebar and check if there.
    //   // access game
    // });
  }

  // bindKeyHandlers() {
  //   key("space", () =>  this.play() );
  // }

  play() {
    // this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }

  gameLost() {

  }

}


/* harmony default export */ __webpack_exports__["a"] = (GameView);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moray_section__ = __webpack_require__(11);



class MovingMorays {
  constructor(cursor, pos = {
      x: Math.random() * window.WIDTH,
      y: Math.random() * window.HEIGHT}) {
    this.cursor = cursor;
    this.x = pos.x;
    this.y = pos.y;
    this.velX = 0;
    this.velY = 0;
    this.speed = 4;
    this.turn = 4;
    this.forward = 0;
    this.lose = false;
    this.util = new __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */]();
    this.id = this.util.getRandomInt();
    this.color = this.util.genColor();
    this.radius = 7;
  }

  move() {
    //timeDelta is number of milliseconds since last move
    //if the computer is busy the time delta will be larger
    //in this case the MovingObject should move farther in this frame
    //velocity of object is how far it should move in 1/60th of a second

    // velocityScale = timeDelta / FrameRate
    // const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
    //   offsetX = this.vel[0] * velocityScale,
    //   offsetY = this.vel[1] * velocityScale;

    let offsetX = this.velX * 20;
    let offsetY = this.velY * 20;

    this.pos = [this.x + offsetX, this.y + offsetY];

      // if (this.game.outOfBounds(this.pos)) {
      //   if (this.isWrappable) {
      //     this.pos = this.game.wrap(this.pos);
      //   } else {
      //     this.remove();
      //   }
      // }
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

  isCollidedWith(otherObject) {
    const centerDist = this.util.dist(this.pos, otherObject.pos);
    return centerDist < (this.radius + otherObject.radius);
  }

  getVel() {
    this.velX = Math.sin();
    this.velY = -Math.cos();
  }

  updatePos() {
    this.x += this.velX;
    this.y += this.velY;
    this.getMove();
  }

  draw(ctx) {
    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.arc(
      this.x, this.y, this.radius, 0, 2 * Math.PI, true
    );
    ctx.fill();
  }

  remove() {
    this.game.remove(this);
  }

  getDrift() {

  }

  getDirection() {

  }

  // addSection(cursor) {
  //   return new MoraySection(cursor, cursor(), this.id, this.color);
  // }

  // drawSection() {
  //   this.morayLength.forEach(section => section);
  // }

  // addLength() {
  //   while (this.morayLength < 2) {
  //     let cursor;
  //     if (this.morayLength.length === 0) {
  //         cursor = this.pos.bind(this);
  //     } else {
  //       let endDot = this.morayLength.slice(-1)[0];
  //       cursor = endSection.pos;
  //     }
  //     this.morayLength.push(this.createMoraySection(cursor));
  //   }
  // }

}

/* harmony default export */ __webpack_exports__["a"] = (MovingMorays);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(9);


class Pellet {
  constructor(options) {
    this.game = options.game;
    this.x = options.x;
    this.y = options.y;
    this.pos = {x: this.x, y: this.y};
    this.radius = 3;
    this.util = new __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */]();
    this.id = this.util.getRandomInt();
    this.color = this.util.genColor();
    this.color = this.hexToRgba(this.color);
  }

  hexToRgba(hex) {
    let color = hex.substring(1).split('');
    color = '0x' + color.join('');
    color = 'rgba('+
      [(color >> 16)&255, (color >> 8)&255, color&255]
      .join(',')+',.4)';
    return color;
  }

  isCollidedWith(otherObject) {
    const centerDist = this.util.dist(this.pos, otherObject.pos);
    return centerDist < (this.radius + otherObject.radius);
  }

  remove() {
    this.game.remove(this);
  }

  draw(ctx) {
    // this.color = this.hexToRgba(this.color);

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Pellet;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moving_morays__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(9);



class Player extends __WEBPACK_IMPORTED_MODULE_0__moving_morays__["a" /* default */] {
  constructor(options) {
    super(options);
    this.playerLength = 4;
    this.playerTail = [];
    this.x = 250;
    this.y = 200;
    this.color = '#97E2D6';
    this.canvas = options.canvas;
    this.context = options.context;
    this.canvasPos = this.getPosition(this.canvas);
    this.setMousePosition = this.setMousePosition.bind(this);
    this.canvas.addEventListener("mousemove", this.setMousePosition, false);
  }

  // cursor logic
  setMousePosition(e) {
    this.mouseX = e.clientX - this.canvasPos.x;
    this.mouseY = e.clientY - this.canvasPos.y;
  }

  buttonPress(e) {
      if (e.button === 0) {
          console.log("Left mouse button pressed!");
      } else if (e.button === 1) {
          console.log("Middle mouse button pressed!");
      } else if (e.button === 2) {
          console.log("Right mouse button pressed!");
      } else {
          console.log("Things be crazy up in here!!!");
      }
  }

  getPosition(canvas) {
    let xPosition = 0;
    let yPosition = 0;

    while (canvas) {
      xPosition += (canvas.offsetLeft - canvas.scrollLeft + canvas.clientLeft);
      yPosition += (canvas.offsetTop - canvas.scrollTop + canvas.clientTop);
      canvas = canvas.offsetParent;
    }

    const canvasPos = {
      x: xPosition,
      y: yPosition
    };

    return canvasPos;
  }

  draw() {
      // this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.beginPath();
      this.context.arc(
        this.mouseX, this.mouseY, this.radius, 0, 2 * Math.PI, true);
      this.context.fillStyle = this.color;
      this.context.fill();
      // this.context.closePath();
      // requestAnimationFrame(this.draw.bind(this));

  }

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

  wrap (coord, max) {
    if (coord < 0) {
      return max - (coord % max);
    } else if (coord > max) {
      return coord % max;
    } else {
      return coord;
    }
  }

  genColor () {
    const gen = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += gen[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getRandomInt() {
    let min = Math.ceil(10);
    let max = Math.floor(100000000);
    return Math.floor(Math.random() * (max - min)) + min;
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Util);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moving_morays__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pellet__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(9);





class OtherMoray extends __WEBPACK_IMPORTED_MODULE_0__moving_morays__["a" /* default */] {
  constructor(options) {
    super(options);
    this.util = new __WEBPACK_IMPORTED_MODULE_3__util__["a" /* default */]();
    this.game = options.game;
  }

  // Return a randomly oriented vector with the given length.
  randomVec (length) {
    const deg = 2 * Math.PI * Math.random();
    return this.util.scale([Math.sin(deg), Math.cos(deg)], length);
  }

  // Scale the length of a vector by the given amount.
  scale (vec, m) {
    return [vec[0] * m, vec[1] * m];
  }

  collideWith(otherObject) {
      if (otherObject instanceof __WEBPACK_IMPORTED_MODULE_1__player__["a" /* default */]) {
        otherObject.relocate();
            return true;
      } else if (otherObject instanceof __WEBPACK_IMPORTED_MODULE_2__pellet__["a" /* default */]) {
            this.remove();
            otherObject.remove();
            return true;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = OtherMoray;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class MoraySection {
  constructor() {

  }

  // drawcircles in class ---------------
  drawAllCircles() {
    for (var i = 0; i < 40; i++) {
      var r = Math.round(15 + Math.random() * 150);

      var xPos = Math.round(Math.random() * window.WIDTH);
      var yPos = Math.round(Math.random() * window.HEIGHT);

      var newSection = Object.create(MoraySection);
      newSection.setup(xPos, yPos);
      newSection.idValue = i;
      newSection.draw();
    }
  }

}

/* unused harmony default export */ var _unused_webpack_default_export = (MoraySection);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map