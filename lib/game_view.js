import Util from './util';

class GameView {
  constructor(game, ctx, canvas) {
    this.ctx = ctx;
    this.game = game;
    this.canvas = canvas;
    this.util = new Util();
    this.player = this.game.player;
    this.allObj = this.game.allObj();
    // console.log(this.allObj);
  }

  play() {
    this.draw();


    // this.player.draw(this.ctx);
    // this.game.pellets.forEach((el) => {
    //   el.draw(this.ctx);
    // });
  }

  draw() {
    this.ctx
      .clearRect(0, 0, this.canvas.width, this.canvas.height);

      // pellets. othermorays. player.
    console.log(this.allObj);

    this.allObj.forEach(
        (el) => {
          console.log(this.el);
        el.draw(this.ctx);
      }
    );
    this.ctx.closePath();
    requestAnimationFrame(this.draw.bind(this));

    // this.game.pellets.forEach((el) => {
    //   el.draw(this.ctx);
    // });

  //   this.player
  //     .update(this.ctx);

  }

  collideWith(otherObject) {
    const centerDist = this.util.dist(this.pos, otherObject.pos);
    return centerDist < (this.radius + otherObject.radius);
  }
}


export default GameView;
