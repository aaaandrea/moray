import Util from './util';

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
    this.util = new Util();
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

}

export default MovingMorays;



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
