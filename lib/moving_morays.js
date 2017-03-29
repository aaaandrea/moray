const Util = require('./util');

class MovingMorays {
  constructor(options) {
    this.cursor = options.game.cursor;
    this.x = options.pos.x;
    this.y = options.pos.y;
    this.velX = 0;
    this.velY = 0;
    this.turn = 4;
    this.forward = 0;
    this.lose = false;
    this.id = Math.random();
    this.color = Util.genColor();
    this.radius = 3;
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

  drawDots() {
    this.morayLength.forEach(dot => dot);
  }

  addLength() {
    while (this.morayLength < 2) {
      let cursor;
      if (this.morayLength.length === 0) {
          cursor = this.pos.bind(this);
      } else {
        let endDot = this.morayLength.slice(-1)[0];
        cursor = endDot.pos;
      }
      this.morayLength.push(this.createDot(cursor));
    }
  }

  drawCircle(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
  }

}




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


module.exports = MovingMorays;
