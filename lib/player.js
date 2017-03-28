import  MovingMorays from './moving_morays';
import Pellet from './pellet';
import Util from './util';

export default class Player extends MovingMorays {
  constructor(options) {
    super(options);
    const color = options.color;
  }
}
