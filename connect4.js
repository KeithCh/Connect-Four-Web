class Connect4 {
  constructor(selector) {
    this.NUMROWS = 6;
    this.NUMCOLS = 7;
    this.selector = selector;
    this.setupEventListeners();
    this.player = 'Red';
    this.player1 = 'Red';
    this.mode = '';
  }
  changeMode(mode) {
    this.mode = mode;
  }
  createGrid() {
    const $board = $(this.selector);
    const $gameInstruction = $(gameInstruction);
    $gameInstruction.append(`${this.player}'s turn`);

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
  createGameButtons() {
    const $restartButton = $(restartButton);
    $restartButton.append('Restart');
    const $changeModeButton = $(changeModeButton);
    $changeModeButton.append('Change Mode');
  }

  setupEventListeners(){
    const $game = $('#game');
    const $board = $(this.selector);
    const $gameInstruction = $('#gameInstruction');
    const that = this;
    const $restartButton = $(restartButton);
    const $changeModeButton = $(changeModeButton);
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
    function boardClick() {
      const col = $(this).data('col-idx');
      const $lastEmptyCell = findLastEmptyCell(col);
      $lastEmptyCell.removeClass(`empty next-${that.player}`);
      $lastEmptyCell.addClass(that.player);
      const $gameInstruction = $('#gameInstruction');
      if (that.checkForWinner()){
        const $board = $(that.selector);
        $gameInstruction.text(`${that.player} has won!`)
        $board.off("click", '.col.empty', boardClick);
        return;
      }
      that.player = (that.player === 'Red') ? 'Yellow' : 'Red';
      $gameInstruction.text(`${that.player}'s turn`);
      $(that).trigger('mouseenter');
    }
    function hoverCol() {
      const col = $(this).data('col-idx');
      const $lastEmptyCell = findLastEmptyCell(col);
      $lastEmptyCell.addClass(`next-${that.player}`);
    }
    function hoverLeaveCol() {
      $('.col').removeClass(`next-${that.player}`);
    }

    $board.on('mouseenter', '.col.empty', hoverCol);

    $board.on('mouseleave', '.col', hoverLeaveCol);

    $board.on('click', '.col.empty', boardClick);

    $game.on('click', '#restartButton', function() {
      if (that.checkForWinner()) {
        that.player1 = (that.player1 === 'Red') ? 'Yellow' : 'Red';
        $board.on('mouseenter', '.col.empty', hoverCol);
        $board.on('mouseleave', '.col', hoverLeaveCol);
        $board.on('click', '.col.empty', boardClick);
      }
      that.player = that.player1;
      $board.empty();
      $gameInstruction.empty();
      that.createGrid();
    });

    $game.on('click', '#changeModeButton', function() {
      $board.empty();
      $gameInstruction.empty();
      $changeModeButton.empty();
      $restartButton.empty();
      menu.setupMenu();
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