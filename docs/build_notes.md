
  const draw = () => {
    ctx.beginPath();

    ctx.moveTo(25, 25);
    ctx.lineTo(400, 200);
    ctx.lineWidth = 30;
    ctx.strokeStyle = "#FF0000";
    ctx.fill();

    ------------------------

    let xPos = Math.round(Math.random() * canvasEl.width);
    let yPos = Math.round(Math.random() * canvasEl.height);

    let centerX = xPos;
    let centerY = yPos;
    let radius = 10;

    let startAngle = 0;
    let stopAngle =  2 * Math.PI;
    let isAntiClockwise = false;

    -------------------------

    ctx.arc(centerX, centerY, radius, startAngle, stopAngle, isAntiClockwise);
    ctx.fillStyle = 'rgba(41, 170, 255, .1)';
    ctx.fill();
    ctx.lineWidth = 0;
    ctx.strokeStyle = '#66CC01';

    -------------------------


    ctx.stroke();
    ctx.closePath();
  };

  for (var i = 0; i < 40; i++) {
    var r = Math.round(15 + Math.random() * 150);
    draw(r);
  }




  animation loop -------------

  function animateCircle() {
    circle.x++;
    circle.size++;

   var requestAnimationFrame = window.requestAnimationFrame(animateCircle)|| mox || webkit ||ms;
  requestAnimationFrame;

  }

  Creating Animations on the Canvas----------
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    0,0 stands for the rectangle at pos 0,0 with size defined as totale width of canvas
