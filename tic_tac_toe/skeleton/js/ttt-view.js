class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $("li").on("click", (e) => {
      const $current = $(e.currentTarget);
      this.game.playMove($current.data("pos"));
      this.makeMove($current);

      this.maybe_alert();

    });
  }

  clear_grid() {
    const $allListItems = $("li");
    $allListItems.toggleClass("playaWan");
    $allListItems.toggleClass("playaToo");
    $allListItems.text("");
  }

  maybe_alert() {
    if (this.game.isOver() && this.game.winner()) {
      alert(`${this.game.winner()} wins!!!!`);
    } else if (this.game.isOver()) {
      alert(`You guys suck!!!!`);
    }
  }

  makeMove($square) {
    const pos = $square.data("pos");
    const mark = this.game.board.grid[pos[0]][pos[1]];
    if (mark === "x") {
      $square.addClass("playaWan");
    } else {
      $square.addClass("playaToo");
    }
    $square.text(mark);
  }

  setupBoard() {
    const $row = $("<ul>").addClass("grid");

    for(let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
      let $square = $("<li>");
      $square.data("pos", [rowIdx, colIdx]);

      $row.append($square);
      }
    }

    this.$el.append($row);
  }
}

module.exports = View;
