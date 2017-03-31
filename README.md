# Moray

[Live Link](https://adelrio1.github.io/moray/)

## Gameplay instructions
The game play is simple. Press spacebar to start the game. Your moray follows your cursor. Eat all the morays and win! You will also grow larger as you eat others.

![Alt text](https://raw.githubusercontent.com/adelrio1/moray/master/docs/screenshot.jpg "screenshot")

## Languages and Libraries implementation.
  * JavaScript is used for all the backend game logic including finding an object's coordinates, trajectory, collisions, and growth.
  * Canvas.js is used for all animations and rendering.
  * Keymaster.js is used to set and reset the game.
  * Webpack was used to bundle all components.

## Technical Implementation Details
  The gameView initializes the game and uses Canvas.js's requestAnimationFrame to set the framerate for animation.

    ```
    play() {
      this.lastTime = 0;
      requestAnimationFrame(this.animate.bind(this));
    }

    animate(time) {
      const timeDiff = time - this.lastTime;
      this.lastTime = time;
      this.game.step(timeDiff);
      this.game.draw(this.ctx);
      this.gameWon();
      this.gameLost();
      requestAnimationFrame(this.animate.bind(this));
    }
    ```

  This calls the Game class which, in turn, draws each object that can be interacted with in the game (eg. pellets, otherMorays, and the player itself.)

    ```
    draw() {
      this.context
        .clearRect(0, 0, this.canvas.width, this.canvas.height);

      const that = this;

      this.allObj().forEach(
        (el) => {
          el.draw(that.context);
        }
      );
    }
    ```

  The complexity with Canvas.js rendering comes in drawing and animation. The canvas must be cleared each frame and redrawn. In order to accomplish this
    ```
    this.context
      .clearRect(0, 0, this.canvas.width, this.canvas.height);
    ```
  is called in the draw phase.

  In order to interact with the object you must call .beginPath() on the canvas context each time an object is drawn, but .closePath() can only be called at the end of drawing each object.


## Future implementations:
  * Eels will grow by length rather than overall size.
  * There will be no 'win' clause, instead eels will be regenerated after a certain number disappear.
  * Slowdown and booster speeds will be given for each 'movingMoray.'
  * Display a leaderboard of each moray (including the player) and their overall size as a score.
  * Render animations that look like eels.
