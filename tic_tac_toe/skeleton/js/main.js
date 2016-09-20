const View = require("./ttt-view.js");
const Game = require("../../solution/game.js");

$( () => {
  const game = new Game();
  const $el = $(document.getElementsByClassName('ttt'));
  const view = new View(game,$el);


});
