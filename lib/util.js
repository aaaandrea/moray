
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

  genColor () {
    const gen = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += gen[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getRandomInt() {
    let min = Math.ceil(10);
    let max = Math.floor(100000000);
    return Math.floor(Math.random() * (max - min)) + min;
  }

}

export default Util;
