const Game = require("./game.js");
const HanoiView = require("./hanoi-view.js");

$( () => {
  const rootEl = $(document.getElementsByClassName('hanoi'));
  const game = new Game();
  new HanoiView(game, rootEl);
});
