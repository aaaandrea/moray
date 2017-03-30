import Util from './util';

class GameView {
  constructor(game, ctx, canvas) {
    this.ctx = ctx;
    this.game = game;
    this.canvas = canvas;
    this.util = new Util();
    this.player = this.game.player;
  }

  play() {
    this.player.update(this.ctx);
    this.game.pellets.forEach((el) => {
      el.draw(this.ctx);
    });
    this.ctx.closePath();
  }

  draw() {
    this.ctx
      .clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.game.allObj
      .board.draw(this.ctx);

    this.game.pellets.forEach((el) => {
      el.draw(this.ctx);
    });

    this.player
      .update(this.ctx);
  }

  collideWith(otherObject) {
    const centerDist = this.util.dist(this.pos, otherObject.pos);
    return centerDist < (this.radius + otherObject.radius);
  }
}


export default GameView;
