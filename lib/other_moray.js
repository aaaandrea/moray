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

  collideWith(otherObject) {
    if (otherObject instanceof Pellet) {
      otherObject.eaten();
      // add section
      this.radius += 3;
      return true;
    }
    else if (otherObject instanceof Player) {
      let nextX = this.x + this.radius + this.velX;
      let nextY = this.y + this.radius + this.velY;
      console.log(nextX == otherObject.x);
      console.log(nextX);
      console.log(otherObject.x);
      let radii = this.radius + otherObject.radius;

      let otherX = otherObject.x + otherObject.radius;
      let otherY = otherObject.y + otherObject.radius;
      console.log(otherX);
      console.log(otherY);


      if (nextX == otherX && nextY === otherY){
        otherObject.eaten();
      } else {
        this.eaten();
        otherObject.radius += 3;
      }
        // let amtPellets = this.radius;
        // let pos = this.pos;
        // let that = this;

        // this.eaten();
        // otherObject.radius += 2;

        // drop pellets
        // while (amtPellets > 0) {
        //   let pellet = new Pellet({pos: pos, game: that.game});
        //   // that.game.pellets.push(pellet);
        //   amtPellets -= 1;
        // }
        return true;
    } else if (otherObject instanceof OtherMoray) {
        this.eaten();
        // drop pellets
        otherObject.radius += 3;
        return true;
    }
  }
}
