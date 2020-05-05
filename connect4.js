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
    for (let col = 0; col < this.NUMCOLS; col++) {
      const $col = $('<div>')
        .addClass('col');
      for (let row = 0; row < this.NUMROWS; row++) {
        const $row = $('<div>')
          .addClass('row empty');
        $col.append($row);
      }
      $board.append($col);
    }
  }
  setupEventListeners(){
    const $board = $(this.selector);
    $board.on('mouseenter', '.row.empty', function(){
      console.log('here', this);
    })
  } 
}