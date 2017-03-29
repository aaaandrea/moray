class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.player = this.game.player;
  }

  play() {
    this.player.update(this.ctx);
    // bindkeyhandlers/cursor
    // start animation
  }
}


export default GameView;
