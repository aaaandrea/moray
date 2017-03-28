const Util = require('./util');

class MovingMorays {
  constructor(cursor, pos = {x: 0, y: 0}) {
    this.x = pos.x;
    this.y = pos.y;
    this.cursor = cursor;
  }

  vel() {

  }

  pos() {
    return {x: this.x, y: this.y};
  }

  getMove() {

  }

  updatePos() {

  }

  newMoray() {
    context.pos();
    context.arc(100, 100, 50, 0, 2 * Math.PI, true);
    var color = Util.applyColor();
  }

  collideWith(otherObject) {

  }

  move() {

  }

  remove() {

  }
}

module.exports = MovingMorays;
