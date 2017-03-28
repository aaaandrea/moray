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

  addLength(cursor) {
    return new Dot(cursor, cursor(), this.id, this.color);
  }
}
