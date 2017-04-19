import Util from './util';
import MoraySection from './moray_section';

class MovingMorays {
  constructor(options) {
    this.game = options.game;
    this.pos = options.pos || {
        x: Math.random() * window.WIDTH,
        y: Math.random() * window.HEIGHT};
    this.x = this.pos.x;
    this.y = this.pos.y;
    this.vel = [0.5, 0.5];
    this.velX = this.vel[0];
    this.velY = this.vel[1];
    this.util = new Util();
    this.id = this.util.getRandomInt();
    this.color = this.util.genColor();
    this.radius = 7;
    this.count = 0;
  }

  move(timeDelta) {
    const velocityScale = timeDelta / 30;
    let dir = this.getDirection();
    console.log(dir);
    let offsetX = this.velX * velocityScale;
    let offsetY = this.velY * velocityScale;

    if (this.count < 60) {
      this.count += 1;
    }
    else {
      this.count = 0;
      let array = [1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1];
      this.velX *= array[Math.floor(Math.random() * 2)];
      this.velY *= array[Math.floor(Math.random() * 2)];
    }

    this.x = this.x + offsetX;
    this.y = this.y + offsetY;
    this.pos = this.getPos();
  }

  isCollidedWith(otherObject) {
    const centerDist = this.util.dist(this.pos, otherObject.pos);
    return centerDist < (this.radius + otherObject.radius);
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.x, this.y, this.radius, 0, 2 * Math.PI, true
    );

    ctx.fill();
    ctx.closePath();
  }

  eaten() {
    this.game.remove(this);
  }

  getDirection(pos) {
    let x = pos.x;
    let y = pos.y;
    let d = Math.atan2(y, x) * (180 / Math.PI);
    if(d < 0){ d = 180 - d; }
    return d;
  }

  // Return a randomly oriented vector with the given length.
  randomVec (length) {
    const deg = 2 * Math.PI * Math.random();
    return this.util.scale([Math.sin(deg), Math.cos(deg)], length);
  }

  // Scale the length of a vector by the given amount.
  scale (vec, m) {
    return [vec[0] * m, vec[1] * m];
  }

  getPos() {
    return {x: this.x, y: this.y};
  }

  // getTurn() {
  //   let theta = Math.atan2( (this.pointer().y - this.sprite.y), (this.pointer().x - this.sprite.x));
  //
  //   theta = _.clean(_.toDeg(theta) + 90);
  //   let newForward = _.clean(this.forward);
  //
  //   if (Math.floor(newForward / 9) !== Math.floor(_.clean(theta) / 9)) {
  //     newForward += _.clean(newForward - theta) > 180 ? this.turnRate : -this.turnRate;
  //   }
  //   this.forward = newForward;
  // }
}

export default MovingMorays;


  //
  // vel() {
  //   return {x: this.velX, y: this.velY};
  // }
  //

  // getMove() {
  //   // for children to decide
  // }

  // getVel() {
  //   this.velX = Math.sin();
  //   this.velY = -Math.cos();
  // }

  // updatePos() {
  //   this.x += this.velX;
  //   this.y += this.velY;
  //   this.getMove();
  // }

  //
  // getDrift() {
  //
  // }

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
