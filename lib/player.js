import MovingMorays from './moving_morays';
import Util from './util';
// import Dot from './dot';
// window.addEventListener('scroll', updatePosition, false);
// window.addEventListener('resize', updatePosition, false);

// const updatePosition = () => {
//   let canvasPos = getPosition(canvas);
// };

export default class Player extends MovingMorays {
  constructor(options) {
    super(options);
    this.playerLength = [];
    this.x = 250;
    this.y = 200;
    // this.mouseX = 0;
    // this.mouseY = 0;
    this.canvas = options.canvas;
    this.context = options.context;
    this.canvasPos = this.getPosition(this.canvas);
    this.setMousePosition = this.setMousePosition.bind(this);
    this.canvas.addEventListener("mousemove", this.setMousePosition, false);
  }

  // cursor logic
  setMousePosition(e) {
    this.mouseX = e.clientX - this.canvasPos.x;
    this.mouseY = e.clientY - this.canvasPos.y;
  }

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

    const canvasPos = {
      x: xPosition,
      y: yPosition
    };

    return canvasPos;
  }

  update() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.beginPath();
      this.context.arc(
        this.mouseX, this.mouseY, this.radius, 0, 2 * Math.PI, true);
      this.context.fillStyle = this.color;
      this.context.fill();
      // this.context.closePath();
      requestAnimationFrame(this.update.bind(this));

  }

}
