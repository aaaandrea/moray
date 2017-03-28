const Util = {
  dir(vec) {
    const norm = Util.norm(vec);
    return Util.scale(vec, 1/norm);
  },

  dist (posA, posB) {
    let distX = Math.pow(posA.x - posB.x, 2);
    let distY = Math.pow(posA.y - posB.y, 2);
    return Math.sqrt(distX + distY);
  },

  norm (vec) {

  },

  randomVec(length) {

  },

  scale (vec, m) {

  },

  genColor() {
    const gen = '0123456789ABCDEF';
    const color = '#';
    for (var i = 0; i < 6; i++) {
      color += gen[Math.floor(Math.random() * 16)];
    }
    return color;
  }

};

module.exports = Util;
