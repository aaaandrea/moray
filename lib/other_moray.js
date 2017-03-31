import MovingMorays from './moving_morays';
import Player from './player';
import Pellet from './pellet';
import Util from './util';

export default class OtherMoray extends MovingMorays {
  constructor(options) {
    super(options);
    this.util = new Util();
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
      if (otherObject instanceof Pellet) {
        otherObject.eaten();
            return true;
      } else if (otherObject instanceof Player) {
            this.eaten();
            return true;
        }
    }
}
