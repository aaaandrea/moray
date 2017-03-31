import Util from './util';
import Player from './player';
import OtherMoray from './other_moray';

export default class Pellet {
  constructor(options) {
    this.game = options.game;
    this.x = options.pos.x;
    this.y = options.pos.y;
    this.pos = {x: this.x, y: this.y};
    this.radius = 3;
    this.util = new Util();
    this.id = this.util.getRandomInt();
    // this.color = this.util.genColor();
    this.color = '#AEC8CA';
    this.color = this.hexToRgba(this.color);
    // this.remove = this.remove.bind(this);
  }

  hexToRgba(hex) {
    let color = hex.substring(1).split('');
    color = '0x' + color.join('');
    color = 'rgba('+
      [(color >> 16)&255, (color >> 8)&255, color&255]
      .join(',')+',.9)';
    return color;
  }

  isCollidedWith(otherObject) {
    const centerDist = this.util.dist(this.pos, otherObject.pos);
    return centerDist < (this.radius + otherObject.radius);
  }

  collideWith(otherObject) {
    this.eaten();
  }

  eaten() {
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
