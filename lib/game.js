import Player from './player';
import OtherMoray from './other_moray';
import Pellet from './pellet';

export default class Game {
  constructor(canvas) {
    this.otherMorays = [];
    this.pellets = [];
    this.canvas = canvas;
    this.player = new Player({
      canvas: this.canvas
    });
    this.addMorays();
  }

  getPosition(el) {
    let xPosition = 0;
    let yPosition = 0;

    while (el) {
      xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
      el = el.offsetParent;
    }
    return {
      x: xPosition,
      y: yPosition
    };
  }


  add(obj) {
    this.otherMorays.push(obj);
  }

  addMorays() {
    for (let i = 0; i < Game.NUM_MORAYS; i++) {
      this.add(new OtherMoray({ game: this}));
    }
  }

  randomPos() {
    return {
      x: Math.round(window.WIDTH * Math.random()),
      y: Math.round(window.WIDTH * Math.random())
    };
  }

  allObj() {
    return [].concat(this.pellets, this.otherMorays, this.player);
  }

  moveObj(delta) {
    this.allObj().forEach((obj) => {
      obj.move(delta);
    });
  }

  // remove(obj) {
  //   if (obj instanceof Pellet) {
  //     this.pellets.splice(this.pellets.indexOf(obj), 1);
  //   } else if (obj instanceof OtherMoray) {
  //     this.otherMorays.splice(this.otherMorays.indexOf(obj), 1);
  //   } else if (obj instanceof Player) {
  //     this.player.splice(this.player.indexOf(obj), 1);
  //   }
  // }

}
const FPS = 33;
const INTERVAL = 1000/FPS;
const STEP = INTERVAL/1000;

const CONTROLS = {
  x: null,
  y: null
};

const setMousePosition = (e) => {
  CONTROLS.x = e.clientX;
  CONTROLS.y = e.clientY;
};

window.addEventListener("mousemove", setMousePosition, false);

Game.NUM_MORAYS = 10;
