import MovingMorays from './moving_morays';
import Util from './util';
// import Dot from './dot';

export default class Player extends MovingMorays {
  constructor(options) {
    super(options);
    this.playerLength = [];
    this.x = 250;
    this.y = 200;
    // this.mouseX = 0;
    // this.mouseY = 0;
    this.canvas = options.canvas;
    // this.canvasPos = this.getPosition(this.canvas);
    this.canvas.addEventListener("mousemove", (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
  }

  // cursor logic

  buttonPress(e) {
      if (e.button === 0) {
          console.log("Left mouse button pressed!");
      } else if (e.button === 1) {
          console.log("Middle mouse button pressed!");
      } else if (e.button === 2) {
          console.log("Right mouse button pressed!");
      } else {
          console.log("Things be crazy up in here!!!");
      }
  }

  getPosition(canvas) {
    let xPosition = 0;
    let yPosition = 0;

    while (canvas) {
      xPosition += (canvas.offsetLeft - canvas.scrollLeft + canvas.clientLeft);
      yPosition += (canvas.offsetTop - canvas.scrollTop + canvas.clientTop);
      canvas = canvas.offsetParent;
    }
    this.mouseX = xPosition;
    this.mouseY = yPosition;
    console.log(this.mouseX, this.mouseY);
    this.canvasPos = {
      mouseX: this.mouseX,
      mouseY: this.mouseY
    };
    return this.canvasPos;
  }

  update(context) {
    // window.setInterval(() => {
      context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      console.log(this);

      context.beginPath();
      this.getPosition(this.canvas);
      context.arc(this.mouseX, this.mouseY, this.radius, 0, 2 * Math.PI, true);
      context.fillStyle = this.color;
      context.fill();
      context.closePath();
      // requestAnimationFrame(this.update(context));

    // }, 33);
  }

}
