import Player from './player';
import OtherMoray from './other_moray';
import Pellet from './pellet';
import Util from './util';

export default class Game {
  constructor(canvas, context) {
    this.otherMorays = this.addMorays();
    window.otherMorays = this.otherMorays;
    this.pellets = this.addPellets();
    this.canvas = canvas;
    this.context = context;
    this.player = [new Player({
      canvas: this.canvas,
      context: this.context
    })];
    this.util = new Util();
  }

  addMorays() {
    let morays = [];
    for (let i = 0; i < Game.NUM_MORAYS; i++) {
      let pos = this.randomPos();
      console.log(pos);
      morays.push(new OtherMoray({ pos: pos, game: this }));
    }
    return morays;
  }

  addPellets() {
    let pellets = [];
    for (let i = 0; i < Game.NUM_PELLETS; i++) {
      let pos = this.randomPos();
      pellets.push(new Pellet({pos: pos, game: this}));
    }
    return pellets;
  }

  randomPos() {
    return {
      x: Math.round((window.WIDTH - 27) * Math.random()),
      y: Math.round((window.HEIGHT - 27) * Math.random())
    };
  }

  allObj() {
    return [].concat(this.pellets, this.otherMorays, this.player);
  }

  step(timeDelta) {
    this.moveObj(timeDelta);
    this.checkCollisions();
  }

  moveObj(timeDelta) {
    this.allObj().forEach((obj) => {
      if (obj instanceof Pellet || obj instanceof Player) {
        null;
      } else {
        obj.move(timeDelta);
      }
    });
  }

  // outOfBounds() {
  //   return (pos[0] < 0) || (pos[1] < 0) ||
  //   (pos[0] > this.canvas.width) || (pos[1] > this.canvas.height);
  // }

  draw() {
    this.context
      .clearRect(0, 0, this.canvas.width, this.canvas.height);

    const that = this;

    this.allObj().forEach(
      (el) => {
        el.draw(that.context);
      }
    );
  }

  // wrap(pos) {
  //   return [
  //     Util.wrap(pos[0], window.WIDTH), this.util.wrap(pos[1], window.HEIGHT)
  //   ];
  // }

  collideWith(otherObject) {
    const centerDist = this.util.dist(this.pos, otherObject.pos);
    return centerDist < (this.radius + otherObject.radius);
  }

  checkCollisions() {
    const allObj = this.allObj();
    for (let i = 0; i < allObj.length; i++) {
      for (let j = i + 1; j < allObj.length; j++) {
        const obj1 = allObj[i];
        const obj2 = allObj[j];
        // let thing = obj1.isCollidedWith(obj2);
        if (obj1.isCollidedWith(obj2)) {
          const collision = obj1.collideWith(obj2);
          if (collision) {
            return;
          }
        }
      }
    }
  }

  remove(obj) {
    if (obj instanceof Pellet) {
      this.pellets.splice(this.pellets.indexOf(obj), 1);
    } else if (obj instanceof OtherMoray) {
      this.otherMorays.splice(this.otherMorays.indexOf(obj), 1);
      // this.allObj = this.allObj();
    } else if (obj instanceof Player) {
      this.player.splice(this.player.indexOf(obj), 1);
      // ADD END GAME LOGIC
    }
  }

}
//
// const FPS = 33;
// const INTERVAL = 1000/FPS;
// const STEP = INTERVAL/1000;

const CONTROLS = {
  x: 250,
  y: 200
};

const setMousePosition = (e) => {
  CONTROLS.x = e.clientX;
  CONTROLS.y = e.clientY;
};

window.addEventListener("mousemove", setMousePosition, false);

Game.NUM_MORAYS = 10;
Game.NUM_PELLETS = 30;
