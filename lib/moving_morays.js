import Util from './util';
import MoraySection from './moray_section';

class MovingMorays {
  constructor(options) {
    // this.cursor = options.cursor;
    this.game = options.game;
    this.pos = options.pos || {
        x: Math.random() * window.WIDTH,
        y: Math.random() * window.HEIGHT};
    this.x = this.pos.x;
    this.y = this.pos.y;
    this.velX = 0;
    this.velY = 0;
    this.speed = 4;
    this.turn = 4;
    this.forward = 0;
    this.lose = false;
    this.util = new Util();
    this.id = this.util.getRandomInt();
    this.color = this.util.genColor();
    this.radius = 7;
  }

  move(timeDelta) {
    //timeDelta is number of milliseconds since last move
    //if the computer is busy the time delta will be larger
    //in this case the MovingObject should move farther in this frame
    //velocity of object is how far it should move in 1/60th of a second

    // velocityScale = timeDelta / FrameRate
    // const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
    //   offsetX = this.vel[0] * velocityScale,
    //   offsetY = this.vel[1] * velocityScale;

    const velocityScale = timeDelta * 60;

    let offsetX = this.velX * velocityScale;
    let offsetY = this.velY * velocityScale;

    this.x = this.x + offsetX;
    this.y = this.y + offsetY;
    this.pos = { x: this.x, y: this.y};
  }

  vel() {
    return {x: this.velX, y: this.velY};
  }

  pos() {
    return {x: this.x, y: this.y};
  }

  getMove() {
    // for children to decide
  }

  isCollidedWith(otherObject) {
    const centerDist = this.util.dist(this.pos, otherObject.pos);
    return centerDist < (this.radius + otherObject.radius);
  }

  getVel() {
    this.velX = Math.sin();
    this.velY = -Math.cos();
  }

  updatePos() {
    this.x += this.velX;
    this.y += this.velY;
    this.getMove();
  }

  draw(ctx) {
    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.arc(
      this.x, this.y, this.radius, 0, 2 * Math.PI, true
    );
    ctx.fill();
  }

  eaten() {
    this.game.remove(this);
  }

  getDrift() {

  }

  getDirection() {

  }

  // addSection(cursor) {
  //   return new MoraySection(cursor, cursor(), this.id, this.color);
  // }

  // drawSection() {
  //   this.morayLength.forEach(section => section);
  // }

  // addLength() {
  //   while (this.morayLength < 2) {
  //     let cursor;
  //     if (this.morayLength.length === 0) {
  //         cursor = this.pos.bind(this);
  //     } else {
  //       let endDot = this.morayLength.slice(-1)[0];
  //       cursor = endSection.pos;
  //     }
  //     this.morayLength.push(this.createMoraySection(cursor));
  //   }
  // }

}

export default MovingMorays;
