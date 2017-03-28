const Util = require('./util');

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
