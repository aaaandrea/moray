import Util from './utils';

class Pellet {
  constructor(x,y) {
    this.id = Math.round(Math.random());
    this.x = x;
    this.y = y;
    this.radius = 2;
    this.color = Util.genColor();
  }

  draw(ctx) {
    context.beginPath();
    context.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI, true);
    context.fillStyle = this.color;
    context.fill();
  }
}


module.exports = Pellet;
