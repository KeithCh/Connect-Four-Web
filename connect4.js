class Connect4 {
  constructor(selector) {
    this.NUMROWS = 6;
    this.NUMCOLS = 7;
    this.selector = selector;
    this.createGrid();
    this.setupEventListeners();
  }

  createGrid() {
    const $board = $(this.selector);
    for (let row = 0; row < this.NUMROWS; row++) {
      const $row = $('<div>')
        .addClass('row');
      for (let col = 0; col < this.NUMCOLS; col++) {
        const $col = $('<div>')
          .addClass('col empty')
          .attr('data-col-idx', col)
          .attr('data-row-idx', row);
        $row.append($col);
      }
      $board.append($row);
    }
  }
  setupEventListeners(){
    const $board = $(this.selector);

    function findLastEmptyCell(col) {
      const cells = $(`.col[data-col-idx='${col}']`);
      for (let i = cells.length - 1; i > -1; i--) {
        const $cell = $(cells[i]);
        if ($cell.hasClass('empty')) {
          return $cell;
        }
      }
      return null;
    }

    $board.on('mouseenter', '.col.empty', function() {
      const col = $(this).data('col-idx');
      const $lastEmptyCell = findLastEmptyCell(col);
      $lastEmptyCell.addClass(`next-red`);
    })

    $board.on('mouseleave', '.col', function() {
      $('.col').removeClass(`next-red`);
    })
  }
}