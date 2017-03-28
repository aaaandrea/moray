import Player from './player';
import OtherMoray from 'other_moray';
import Pellet from './pellet';

class Game {
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
    const player = new Player({
      pos: this.randomPos(),
      game: this
    });
  }

  allObj() {
    return [].concat(this.player, this.pellets, this.otherMorays);
  }

  randomPos() {
    return [
      Game.DIM_X * Math.random(),
      Game.DIM_Y * Math.random()
    ];
  }

  remove(obj) {
    if (obj instanceof Pellet) {
      this.pellets.splice(this.pellets.indexOf(obj), 1);
    } else if (obj instanceof OtherMoray) {
      this.otherMorays.splice(this.otherMorays.indexOf(obj), 1);
    } else if (obj instanceof Player) {
      this.player.splice(this.player.indexOf(obj), 1);
    }
  }
  
}
