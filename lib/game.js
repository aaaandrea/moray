import Player from './player';
import OtherMoray from './other_moray';
import Pellet from './pellet';

export default class Game {
  constructor() {
    this.otherMorays = [];
    this.pellets = [];
    this.player = [];

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

  addPlayer() {
    this.player = new Player({
      game: this,
      pos: this.randomPos()
    });

    return this.player;
  }

  allObj() {
    return [].concat(this.pellets, this.otherMorays, this.player);
  }

  randomPos() {
    return {
      x: Math.round(Game.DIM_X * Math.random()),
      y: Math.round(Game.DIM_Y * Math.random())
    };
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

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.FPS = 32;
Game.NUM_MORAYS = 10;
