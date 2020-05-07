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
    const twoPButton = $('<button type="button">2 Players</button>')
      .addClass('twoPbutton');
    $buttons.append(twoPButton);
    const easyAI = $('<button type="Easy AI">Easy AI</button>')
      .addClass('easyAI');
    $buttons.append(easyAI);
  }
  setupEventListeners() {
    const $menuText = $('#menuText');
    const $buttons = $('#buttons');
    $buttons.on('click', '.twoPbutton', function() {
      $menuText.empty();
      $buttons.empty();
      connect4.changeMode('2p');
      connect4.createGrid();
    });
    $buttons.on('click', '.easyAI', function() {
      $menuText.empty();
      $buttons.empty();
      connect4.changeMode('easy');
      connect4.createGrid();
    });
  }
}