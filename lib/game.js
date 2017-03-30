import Player from './player';
import OtherMoray from './other_moray';
import Pellet from './pellet';

export default class Game {
  constructor(canvas, context) {
    this.otherMorays = [];
    this.pellets = this.addPellets();
    this.canvas = canvas;
    this.context = context;
    this.player = new Player({
      canvas: this.canvas,
      context: this.context
    });
    this.addMorays();
  }

  add(obj) {
    this.otherMorays.push(obj);
  }

  addMorays() {
    for (let i = 0; i < Game.NUM_MORAYS; i++) {
      this.add(new OtherMoray({ game: this}));
    }
  }

  addPellets() {
    let pellets = [];
    for (let i = 0; i < Game.NUM_PELLETS; i++) {
      let pos = this.randomPos();
      pellets.push(new Pellet(pos));
    }
    return pellets;
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

// drawcircles in class ---------------
// function drawAllCircles() {
//   for (var i = 0; i < 40; i++) {
//     var r = Math.round(15 + Math.random() * 150);
//
//     var xPos = Math.round(Math.random() * myCanvas.width);
//     var yPos = Math.round(Math.random() * myCanvas.height);
//
//     var newCircle = Object.create(circle);
//     newCircle.setup(xPos, yPos);
//     newCircle.idValue = i;
//     newCircle.draw();
//   }
// }
// drawAllCircles();


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
Game.NUM_PELLETS = 20;
