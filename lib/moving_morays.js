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
    this.vel = [0.2, 0.2];
    this.velX = this.vel[0];
    this.velY = this.vel[1];
    // this.velX = 0;
    // this.velY = 0;
    this.speed = 4;
    this.turn = 4;
    this.forward = 0;
    this.lose = false;
    this.util = new Util();
    this.id = this.util.getRandomInt();
    this.color = this.util.genColor();
    this.radius = 7;
    this.count = 0;
  }

  move(timeDelta) {
    // console.log('hi');
    const velocityScale = timeDelta / 30;
    let dir = this.getDirection(this.pos);
    // console.log(dir);
    let offsetX = this.velX * velocityScale;
    let offsetY = this.velY * velocityScale;

    // if (this.count < 20) {
    //   this.count += 1;
    // } else {
    //   this.count = 0;
    //   offsetX * dir;
    //   offsetY * dir;
    // }
    // console.log(dir);

    this.x = this.x + offsetX;
    this.y = this.y + offsetY;
    this.pos = this.getPos();
  }

  isCollidedWith(otherObject) {
    const centerDist = this.util.dist(this.pos, otherObject.pos);
    // console.log(centerDist);
    return centerDist < (this.radius + otherObject.radius);
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

  getDirection(pos) {
    let x = pos.x;
    let y = pos.y;
    let d = Math.atan2(y, x) * (180 / Math.PI);
    if(d < 0){ d = 180 - d; }
    return d;
  }

  getPos() {
    return {x: this.x, y: this.y};
  }
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
