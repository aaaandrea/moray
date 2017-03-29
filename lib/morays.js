// import Game from './game';
// import GameView from './game_view';

document.addEventListener('DOMContentLoaded', function() {
  const canvasEl = document.getElementsByTagName('canvas')[0];
  const ctx = canvasEl.getContext('2d');
  // canvasEl.width = Game.DIM_X;
  // canvasEl.height = Game.DIM_Y;

  const canvasEl.width = $(window).width();
  const canvasEl.height = $(window).height();


  const draw = () => {
    ctx.beginPath();

    // ctx.moveTo(25, 25);
    // ctx.lineTo(400, 200);
    // ctx.lineWidth = 30;
    // ctx.strokeStyle = "#FF0000";
    // ctx.fill();

    // ------------------------

    let xPos = Math.round(Math.random() * canvasWidth);
    let yPos = Math.round(Math.random() * canvasHeight);

    let centerX = xPos;
    let centerY = yPos;
    let radius = 10;

    let startAngle = 0;
    let stopAngle =  2 * Math.PI;
    let isAntiClockwise = false;

    // -------------------------

    ctx.arc(centerX, centerY, radius, startAngle, stopAngle, isAntiClockwise);
    ctx.fillStyle = 'rgba(41, 170, 255, .1)';
    ctx.fill();
    // ctx.lineWidth = 0;
    // ctx.strokeStyle = '#66CC01';

    // -------------------------


    ctx.stroke();
    ctx.closePath();
  };

  for (var i = 0; i < 40; i++) {
    var r = Math.round(15 + Math.random() * 150);
    draw(r);
  }
  // const game = new Game();
  // new GameView(game, ctx).start();
});
// circle class ------------
// var circle = {
//   idValue: -1,
//   radius: 0,
//   xPos: 0,
//   yPos: 0,
//   color: "rgba(41, 170, 255, .1)",
//
//   setup: function (x, y) {
//     this.xPos = x;
//     this.yPos = y;
//
//     this.radius = Math.round(15 + Math.random() * 150);
//   },
//   setColor: function (newColor) {
//     this.color = newColor;
//   },
//   draw: function () {
//     context.beginPath();
//     context.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI, true);
//     context.fillStyle = this.color;
//     context.fill();
//   }
// };

// drawcircles in class ---------------
// function drawAllCircles() {
//   for (var i = 0; i < 40; i++) {
//     var r = Math.round(15 + Math.random() * 150);
//
//     var xPos = Math.round(Math.random() * myCanvas.width);
//     var yPos = Math.round(Math.random() * myCanvas.height);
//
//     var newCircle = Object.create(circle);
//     newCircle.setup(xPos, yPos);
//     newCircle.idValue = i;
//     newCircle.draw();
//   }
// }
// drawAllCircles();

// animation loop -------------

// function animateCircle() {
//   circle.x++;
//   circle.size++;
//
//  var requestAnimationFrame = window.requestAnimationFrame(animateCircle)|| mox || webkit ||ms;
// requestAnimationFrame;

// }

// Creating Animations on the Canvas----------
// ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  // 0,0 stands for the rectangle at pos 0,0 with size defined as totale width of canvas
