const Util = {
  dir(vec) {
    const norm = Util.norm(vec);
    return Util.scale(vec, 1/norm);
  },

  dist () {

  },

  norm (vec) {

  },

  randomVec(length) {

  },

  scale (vec, m) {

  }
};

module.exports = Util;




const post = null;

const vel = null;

export const applyColor = () => {
  var gen = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += gen[Math.floor(Math.random() * 16)];
  }
  return color;
};
