import MovingMorays from './moving_morays';
import Util from './util';
// import Dot from './dot';

//

//
// const cursor = window.canvasEl.addEventListener


export default class Player extends MovingMorays {
  constructor(options) {
    super(options);
    this.morayLength = [];
    this.x = 250;
    this.y = 200;
    // this.mouseX = 0;
    // this.mouseY = 0;
    this.canvas = options.canvas;
    this.canvasPos = this.getPosition(this.canvas);
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

  getPosition(el) {
    let xPosition = 0;
    let yPosition = 0;

    while (el) {
      xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
      el = el.offsetParent;
    }
    console.log(xPosition, yPosition);

    return {
      x: xPosition,
      y: yPosition
    };
  }

  update(context) {
    context.clearRect(0, 0, this.canvas.width, this.canvas.height)

    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    context.fillStyle = this.color;
    context.fill();

    requestAnimationFrame(this.update(context));
    context.closePath();
  }

}
