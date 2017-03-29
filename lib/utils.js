class Util {
  dir(vec) {
    const norm = Util.norm(vec);
    return Util.scale(vec, 1/norm);
  }

  dist (posA, posB) {
    let distX = Math.pow(posA.x - posB.x, 2);
    let distY = Math.pow(posA.y - posB.y, 2);
    return Math.sqrt(distX + distY);
  }

  norm (vec) {
    return Util.dist([0, 0], vec);
  }

  randomVec (length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  }

  genVec (length) {
    const deg = 2 * Math.PI;
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  }

  scale (vec, m) {
    return [vec[0] * m, vec[1] * m];
  }

  genColor() {
    const gen = '0123456789ABCDEF';
    const color = '#';
    for (var i = 0; i < 6; i++) {
      color += gen[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}

module.exports = Util;
