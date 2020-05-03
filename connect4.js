class Connect4 {
  constructor(selector) {
    this.NUMROWS = 6;
    this.NUMCOLS = 7;
    this.selector = selector;
    this.createGrid();
  }

  createGrid() {
    const $board = $(this.selector);
    console.log($board);
    for (let row = 0; row < this.NUMROWS; row++) {
      const $row = $('<div>')
        .addClass('row');
      $board.append($row);
      for (let col = 0; col < this.NUMCOLS; col++) {
        const $col = $('<div>')
          .addClass('col empty');
        $row.append($col);
      }
    }
  }
}