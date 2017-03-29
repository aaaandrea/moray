import Util from './util';

export default class Pellet {
  constructor(x,y) {
    this.id = Math.round(Math.random());
    this.x = x;
    this.y = y;
    this.radius = 2;
    this.color = Util.genColor();
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI, true);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}
