import  MovingMorays from './moving_morays';
import Pellet from './pellet';
import Util from './util';
import Dot from './dot';

export default class Player extends MovingMorays {
  constructor(options) {
    super(options);
    this.id = Math.random();
    this.morayLength = [];
  }

  createDot(cursor) {
    return new Dot(cursor, cursor(), this.id, this.color);
  }

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
}
