import Util from './util';

export default class Pellet {
  constructor(options) {
    this.game = options.game;
    this.x = options.x;
    this.y = options.y;
    this.radius = 3;
    this.util = new Util();
    this.id = this.util.getRandomInt();
    this.color = this.util.genColor();
    this.color = this.hexToRgba(this.color);
  }

  hexToRgba(hex) {
    let color = hex.substring(1).split('');
    color = '0x' + color.join('');
    color = 'rgba('+
      [(color >> 16)&255, (color >> 8)&255, color&255]
      .join(',')+',.4)';
    return color;
  }

  remove() {
    this.game.remove(this);
  }

  draw(ctx) {
    // this.color = this.hexToRgba(this.color);

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}
