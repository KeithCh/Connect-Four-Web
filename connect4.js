class Connect4 {
  constructor(selector) {
    this.NUMROWS = 6;
    this.NUMCOLS = 7;
    this.selector = selector;
    this.createGrid();
    this.setupEventListeners();
    this.player = 'red';
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
    const that = this;
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
      $lastEmptyCell.addClass(`next-${that.player}`);
    });

    $board.on('mouseleave', '.col', function() {
      $('.col').removeClass(`next-${that.player}`);
    });

    $board.on('click', '.col.empty', function() {
      const col = $(this).data('col-idx');
      const row = $(this).data('row-idx');
      const $lastEmptyCell = findLastEmptyCell(col);
      $lastEmptyCell.removeClass(`empty next-${that.player}`);
      $lastEmptyCell.addClass(that.player);

      if (that.checkForWinner()){
        console.log('connect 4');
      }
      that.player = (that.player === 'red') ? 'yellow' : 'red';
      $(this).trigger('mouseenter');
    });
  }

  checkForWinner(){
    const cells = $(`.col`);
    return this.checkHorizontal(cells) || this.checkVertical(cells) || this.checkDiagonal(cells); 
  }

  checkHorizontal(cells) {
    for (let y = 0; y < 6; y++) {
      for (let x = 0; x < 4; x++) { 
        if ($(cells[7*y + x]).attr('class') === `col ${this.player}` 
          && $(cells[7*y + x + 1]).attr('class') === `col ${this.player}`
          && $(cells[7*y + x + 2]).attr('class') === `col ${this.player}`
          && $(cells[7*y + x + 3]).attr('class') === `col ${this.player}`) {
            return true;
        }
      }
    }
    return false;
  }
  
  checkVertical(cells) {
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 6; x++) {      
        if ($(cells[7*y + x]).attr('class') === `col ${this.player}` 
          && $(cells[7*y + x + 7]).attr('class') === `col ${this.player}`
          && $(cells[7*y + x + 14]).attr('class') === `col ${this.player}`
          && $(cells[7*y + x + 21]).attr('class') === `col ${this.player}`) {
            return true;
        }
      }
    }
    return false;
  }
  checkDiagonal(cells) {
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 4; x++) {      
        if ($(cells[7*y + x]).attr('class') === `col ${this.player}` 
          && $(cells[7*y + x + 8]).attr('class') === `col ${this.player}`
          && $(cells[7*y + x + 16]).attr('class') === `col ${this.player}`
          && $(cells[7*y + x + 24]).attr('class') === `col ${this.player}`) {
            return true;
        }
      }
    }
    for (let y = 0; y < 3; y++) {
      for (let x = 3; x < 7; x++) {      
        // console.log([$(cells[7*y + x]).attr('class'), $(cells[7*y + x + 6]).attr('class'), $(cells[7*y + x + 12]).attr('class'), $(cells[7*y + x + 18]).attr('class')]);
        if ($(cells[7*y + x]).attr('class') === `col ${this.player}` 
          && $(cells[7*y + x + 6]).attr('class') === `col ${this.player}`
          && $(cells[7*y + x + 12]).attr('class') === `col ${this.player}`
          && $(cells[7*y + x + 18]).attr('class') === `col ${this.player}`) {
            return true;
        }
      }
    }
  }
}