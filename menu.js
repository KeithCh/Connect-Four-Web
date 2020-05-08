class Menu{
  constructor(){
    this.setupMenu();
    this.setupEventListeners();
  }
  setupMenu() {
    // const $menuText = $('#menuText');
    const $menu = $('#menu');
    const title = $('<h1>Connect 4</h1>');

    $menu.append(title);
    const instruction = $('<h2>Choose a gamemode:</h2>');
    $menu.append(instruction);
    
    const $menuButtons = $('<div id="menuButtons"></div>');
    const normalButton = $('<button id="normalButton">Normal</button>')
      .addClass('normalButton')
    $menuButtons.append(normalButton);
    const $timedButton = $('<button id="timedButton">Timed</button>')
      .addClass('timedButton')
    $menuButtons.append($timedButton);
    $menu.append($menuButtons);
  }
  setupEventListeners() {
    const $menu = $('#menu');
    $menu.on('click', '.normalButton', function() {
      const $menu = $('#menu');
      connect4.changeMode('normal');
      $menu.empty();
      connect4.createGrid();
      connect4.createGameButtons();
    });

    $menu.on('click', '.timedButton', function() {
      const $menu = $('#menu');
      $menu.empty();
      connect4.changeMode('timed');
      connect4.createGrid();
      connect4.createGameButtons();
      timer.setupTimer();
    });
  }
}