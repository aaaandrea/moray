# Moray Proposal
Moray is based on slither.io

## MVPs

  * Move following cursor
  * Win / Lose
  * Eat pellets
  * Morays can eat each other
  * Other Morays move
  * Start on spacebar

## Design Docs
  * [View Wireframes](https://github.com/adelrio1/moray/tree/master/docs/Wireframes)

## Technologies
  * HTML5 Canvas API rendering gameplay
  * Javascript covers the game logic utilizing jQuery for score count.
  * Webpack will be used to bundle files and components.

## Architecture
  * game.js for the main game.
  * game_view.js for rendering the game_view.
  * player.js will render the player.
  * object.js for collision logic.

## Implementation Timeline
### Day 1
  * Webpack
  * Render starting screen
  * Render game board canvas
  * Configure component files

### Day 2
  * Create player and render it on the screen
  * Create the player controls following cursor
  * Create player growth

### Day 3
  * Add logic to render adversaries on the canvas
  * Add collision detection between player and other morays

### Day 4
  * Adjust trajectories for morays
  * Create controls for game start/reset
  * Create won/lost conditions on the board

## Bonus
  * Slow speed as player gets larger
  * Adversary/player scoreboard by length
  * Multiple levels
