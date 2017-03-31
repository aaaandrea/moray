import Game from './game';
import GameView from './game_view';

window.WIDTH = 500;
window.HEIGHT = 400;

document.addEventListener('DOMContentLoaded', function() {
  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext('2d');

  canvasEl.width = window.WIDTH;
  canvasEl.height = window.HEIGHT;
  const game = new Game(canvasEl, ctx);
  const gameView = new GameView(game, ctx, canvasEl);

  key("space", () => gameView.play() );
});
