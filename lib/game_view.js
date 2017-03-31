import Util from './util';
import Player from './player';
import OtherMoray from './other_moray';

class GameView {
  constructor(game, ctx, canvas) {
    this.ctx = ctx;
    this.game = game;
    this.canvas = canvas;
    this.util = new Util();
    this.player = this.game.player;
  }

  play() {
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
    // console.log('hi');
  }

  animate(time) {
    const timeDelta = time - this.lastTime;
    this.lastTime = time;
    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    let objects = this.game.allObj();
    if (objects.length < 2) {
      if (objects[0] instanceof Player) {
        console.log('YOU WIN!');
      } else {
        console.log('YOU LOSE, LOSER!');
      }
    }
    requestAnimationFrame(this.animate.bind(this));
  }

  gameLost() {

  }

}


export default GameView;
