class HanoiView {

  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setUpTowers();
  }

  setUpTowers() {
    const $piles = $("<ul>");

    for (let pileIdx = 0; pileIdx < 3; pileIdx++) {
      for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      const $tower = $("<li>");
      $tower.data("pos", [pileIdx, rowIdx]);
      $piles.append($tower);
    }}
    $(this.$el).append($piles);
  }

  render() {
      this.game.towers.forEach((tower,idx) => {
        tower.forEach( (disk,idx2) => {

        });
      });

  }

}

module.exports = HanoiView;
