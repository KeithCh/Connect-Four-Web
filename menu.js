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
    const twoPButton = $('<button type="button">Play</button>')
      .addClass('twoPbutton');
    $buttons.append(twoPButton);
  }
  setupEventListeners() {
    const $menuText = $('#menuText');
    const $buttons = $('#buttons');
    $buttons.on('click', '.twoPbutton', function() {
      $menuText.empty();
      $buttons.empty();
      connect4.createGrid();
      connect4.createRestartButton();
    });
  }
}