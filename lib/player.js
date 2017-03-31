import MovingMorays from './moving_morays';
import OtherMoray from './other_moray';
import Pellet from './pellet';
import Util from './util';

export default class Player extends MovingMorays {
  constructor(options) {
    super(options);
    this.playerLength = 4;
    this.playerTail = [];
    this.x = 250;
    this.y = 200;
    this.color = '#97E2D6';
    this.canvas = options.canvas;
    this.context = options.context;
    this.canvasPos = this.getPosition(this.canvas);
    this.setMousePosition = this.setMousePosition.bind(this);
    this.canvas.addEventListener("mousemove", this.setMousePosition, false);
  }

  collideWith(otherObject) {
      if (otherObject instanceof Pellet) {
        otherObject.relocate();
            return true;
      } else if (otherObject instanceof OtherMoray) {
            this.remove();
            otherObject.remove();
            return true;
        }
    }

  // cursor logic
  setMousePosition(e) {
    this.mouseX = e.clientX - this.canvasPos.x;
    this.mouseY = e.clientY - this.canvasPos.y;
    this.x = this.mouseX;
    this.y = this.mouseY;
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

  draw() {
      // this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.beginPath();
      this.context.arc(
        this.mouseX, this.mouseY, this.radius, 0, 2 * Math.PI, true);
      this.context.fillStyle = this.color;
      this.context.fill();
      // this.context.closePath();
      // requestAnimationFrame(this.draw.bind(this));

  }

}
