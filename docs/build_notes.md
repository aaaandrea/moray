
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







  follow cursor with ease -----------------
  var canvas = document.querySelector("#myCanvas");
  var context = canvas.getContext("2d");

  var canvasPos = getPosition(canvas);
  var mouseX = 0;
  var mouseY = 0;
  var sqSize = 100;
  var xPos = 0;
  var yPos = 0;
  var dX = 0;
  var dY = 0;

  canvas.addEventListener("mousemove", setMousePosition, false);

  function setMousePosition(e) {
    mouseX = e.clientX - canvasPos.x;
    mouseY = e.clientY - canvasPos.y;
  }

  function animate() {
    <!-- difference between cursorPos and PlayerPos  -->
    dX = mouseX - xPos;
    dY = mouseY - yPos;


    <!-- playerPos makes up difference by 1/10 -->
    xPos += (dX / 10);
    yPos += (dY / 10);


    <!-- clear rext -->
    context.clearRect(0, 0, canvas.width, canvas.height);

    <!--  render player: NOTE change to arc-->
    context.fillStyle = "#00CCFF";
    context.fillRect(xPos - sqSize / 2,
                     yPos - sqSize / 2,
                     sqSize,
                     sqSize);

    requestAnimationFrame(animate);
  }
  animate();

  // deal with the page getting resized or scrolled
  window.addEventListener("scroll", updatePosition, false);
  window.addEventListener("resize", updatePosition, false);

  function updatePosition() {
    canvasPos = getPosition(canvas);
  }

  // Helper function to get an element's exact position
  function getPosition(el) {
    var xPos = 0;
    var yPos = 0;

    while (el) {
      if (el.tagName == "BODY") {
        // deal with browser quirks with body/window/document and page scroll
        var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        var yScroll = el.scrollTop || document.documentElement.scrollTop;

        xPos += (el.offsetLeft - xScroll + el.clientLeft);
        yPos += (el.offsetTop - yScroll + el.clientTop);
      } else {
        // for all other non-BODY elements
        xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPos += (el.offsetTop - el.scrollTop + el.clientTop);
      }

      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos
    };
  }
