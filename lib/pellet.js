import Util from './util';

export default class Pellet {
  constructor(options) {
    this.id = Math.round(Math.random());
    this.x = options.x;
    this.y = options.y;
    this.radius = 2;
    this.util = new Util();
    this.color = this.util.genColor();
  }

  hexToRgba(hex) {
    let color = hex.substring(1).split('');
    color = '0x' + color.join('');
    return 'rgba('+[(color >> 16)&255, (color >> 8)&255, color&255].join(',')+',.1)';
  }

  draw(ctx) {
    this.color = this.hexToRgba(this.color);

    ctx.beginPath();
    ctx.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI, true);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}
