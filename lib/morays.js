import Game from './game';
import GameView from './game_view';

window.WIDTH = 500;
window.HEIGHT = 400;

document.addEventListener('DOMContentLoaded', function() {
  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext('2d');

  canvasEl.width = window.WIDTH;
  canvasEl.height = window.HEIGHT;

  const playOrReset = () => {
    let game = new Game(canvasEl, ctx);
    let gameView = new GameView(game, ctx, canvasEl);
    gameView.play();
  };

  key("space", playOrReset);
});

//
// // define shortcuts with a scope
// key('space', 'play', () => gameView.play());
// key('space', 'reset', () => gameView.reset());
//
// // set the scope (only 'all' and 'issues' shortcuts will be honored)
// key.setScope('play'); // default scope is 'all'
//
// // remove all events that are set in 'issues' scope
// key.deleteScope('play');
