import Util from './util';



class GameView {
  constructor(game, ctx, canvas) {
    this.ctx = ctx;
    this.game = game;
    this.canvas = canvas;
    this.util = new Util();
    this.player = this.game.player;
    this.allObj = this.game.allObj();
    // console.log(this.allObj);
    // document.addEventListener('keypress', function(e) {
    //   // find keycode for spacebar and check if there.
    //   // access game
    // });
  }

  // bindKeyHandlers() {
  //   key("space", () =>  this.play() );
  // }

  play() {
    // this.bindKeyHandlers();
    this.draw();
  }

  gameLost() {

  }

  draw() {
    this.ctx
      .clearRect(0, 0, this.canvas.width, this.canvas.height);
    const that = this;
    this.allObj.forEach(
      (el) => {
        el.draw(that.ctx);
      }
    );

    this.ctx.closePath();
    requestAnimationFrame(this.draw.bind(this));
  }

  moveObjects(delta) {
    this.allObj.forEach((object) => {
      object.move(delta);
    });
  }

  step(delta) {
    this.moveObjects(delta);
    this.checkCollisions();
  }

  wrap(pos) {
    return [
      Util.wrap(pos[0], window.WIDTH), this.util.wrap(pos[1], window.HEIGHT)
    ];
  }

  collideWith(otherObject) {
    const centerDist = this.util.dist(this.pos, otherObject.pos);
    return centerDist < (this.radius + otherObject.radius);
  }

  checkCollisions() {
    for (let i = 0; i < this.allObj.length; i++) {
      for (let j = 0; j < this.allObj.length; j++) {
        const obj1 = this.allObj[i];
        const obj2 = this.allObj[j];

        if (obj1.isCollidedWith(obj2)) {
          const collision = obj1.collideWith(obj2);
          if (collision) return;
        }
      }
    }
  }
}


export default GameView;
