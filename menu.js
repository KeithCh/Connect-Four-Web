class Menu{
  constructor(selector){
    this.selector = selector;
    this.setupMenu();
    this.setupEventListeners();
  }
  setupMenu() {
    const $menuText = $('#menuText');
    const $buttons = $('#buttons');
    const title = $('<h1>Connect 4</h1>');

    $menuText.append(title);
    const instruction = $('<h2>Choose a gamemode:</h2>');
    $menuText.append(instruction);
    
    const normalButton = $('<button type="button">Normal</button>')
      .addClass('normalButton');
    $buttons.append(normalButton);

    const timedButton = $('<button type="button">Timed</button>')
      .addClass('timedButton');
    $buttons.append(timedButton);
  }
  setupEventListeners() {
    const $menuText = $('#menuText');
    const $buttons = $('#buttons');
    $buttons.on('click', '.normalButton', function() {
      connect4.changeMode('normal');
      $menuText.empty();
      $buttons.empty();
      connect4.createGrid();
      connect4.createGameButtons();
    });

    $buttons.on('click', '.timedButton', function() {
      $menuText.empty();
      $buttons.empty();
      connect4.changeMode('timed');
      connect4.createGrid();
      connect4.createGameButtons();
      timer.setupTimer();
    });
  }
}