import Util from './util';



class GameView {
  constructor(game, ctx, canvas) {
    this.ctx = ctx;
    this.game = game;
    this.canvas = canvas;
    this.util = new Util();
    this.player = this.game.player;
    // this.allObj = this.game.allObj();
    // document.addEventListener('keypress', function(e) {
    //   // find keycode for spacebar and check if there.
    //   // access game
    // });
  }

  // bindKeyHandlers() {
  //   key("space", () =>  this.play() );
  // }

  play() {
    // this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }

  gameLost() {

  }

}


export default GameView;
