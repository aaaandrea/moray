# Moray Proposal
Moray is based on slither.io

## MVPs
  * Start, and reset the game
  * Move following cursor
  * Win and lose
  * View score
  * Player growth

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
  * Create won/lost conditions on the board
  * Create score logic and render

### Day 4
  * Add icons for player and other morays
  * Create controls for game start/reset
  * Stylize to look more like slither.io

## Bonus
  * Slow speed as player gets larger
  * Adversary/player scoreboard by length
  * Multiple levels
