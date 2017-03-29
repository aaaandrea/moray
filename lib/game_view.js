class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.player = this.game.addPlayer();
  }

  start() {
    this.player.drawCircle(this.ctx);
    // bindkeyhandlers/cursor
    // start animation
  }
}


export default GameView;
