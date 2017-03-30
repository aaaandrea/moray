import MovingMorays from './moving_morays';
import Player from './player';
import Pellet from './pellet';

export default class OtherMoray extends MovingMorays {
  constructor(options) {
    super(options);
  }

  collideWith(otherObject) {
      if (otherObject instanceof Player) {
        otherObject.relocate();
            return true;
      } else if (otherObject instanceof Pellet) {
            this.remove();
            otherObject.remove();
            return true;
        }
    }
}
