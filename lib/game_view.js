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
  }

  animate(time) {
    const timeDelta = time - this.lastTime;
    this.lastTime = time;
    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.gameWon();
    this.gameLost();
    requestAnimationFrame(this.animate.bind(this));
  }

  gameWon() {
    if (this.game.otherMorays.length === 0) {
      // write that they've won
      // change spacebar key scope to reset
      // either reload on spacebar, or generate new element.
      this.ctx.font = '30px serif';
      this.ctx.textAlign = 'center';
      this.ctx.strokeText( 'YOU WIN! Press spacebar to reset.', 250, 200);
    }
  }

  //  [100, window.WIDTH]

  gameLost() {
    if (this.game.player.length == 0) {
      // write that they've lost
      // change spacebar key scope to reset
      // either reload on spacebar, or generate new element.
      this.ctx.font = '30px serif';
      this.ctx.textAlign = 'center';
      this.ctx.strokeText( 'You lose. Press spacebar to reset.', 250, 200);
    }
  }

}


export default GameView;
