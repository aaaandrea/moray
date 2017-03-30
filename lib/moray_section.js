class MoraySection {
  constructor() {

  }

  // drawcircles in class ---------------
  drawAllCircles() {
    for (var i = 0; i < 40; i++) {
      var r = Math.round(15 + Math.random() * 150);

      var xPos = Math.round(Math.random() * window.WIDTH);
      var yPos = Math.round(Math.random() * window.HEIGHT);

      var newSection = Object.create(MoraySection);
      newSection.setup(xPos, yPos);
      newSection.idValue = i;
      newSection.draw();
    }
  }

}

export default MoraySection;
