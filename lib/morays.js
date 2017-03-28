// import Game from './game';
// import GameView from './game_view';

document.addEventListener('DOMContentLoaded', function() {
  const canvasEl = document.getElementsByTagName('canvas')[0];
  // canvasEl.width = Game.DIM_X;
  // canvasEl.height = Game.DIM_Y;

  const ctx = canvasEl.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(25, 25);
  ctx.lineTo(400, 200);
  ctx.lineWidth = 30;
  ctx.strokeStyle = "#FF0000";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
  // const game = new Game();
  // new GameView(game, ctx).start();
});
