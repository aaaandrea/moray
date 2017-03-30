class GameView {
  constructor(game, ctx, canvas) {
    this.ctx = ctx;
    this.game = game;
    this.canvas = canvas;
    this.player = this.game.player;
  }

  play() {
    this.player.update(this.ctx);
    this.game.pellets.forEach((el) => {
      console.log(el);
      el.draw(this.ctx);
    });
    this.ctx.closePath();
    // bindkeyhandlers/cursor
    // start animation
  }

  draw() {
    this
      .ctx
      .clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.game.allObj
      .board.draw(this.ctx);

    this.drawFood();

    this.player
      .draw(this.ctx);
  }
}


export default GameView;
