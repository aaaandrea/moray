class Pellet {
  constructor(options) {
    options.radius = Pellet.RADIUS;
    super(options);
  }
}

Pellet.RADIUS = 2;

module.exports = Pellet;
