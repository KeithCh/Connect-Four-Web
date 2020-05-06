class Menu{
  constructor(selector){
    this.selector = selector;
    this.setupMenu();
    this.setupEventListeners();
  }
  setupMenu() {
    const $menu = $(this.selector);
    const title = $('<h1>Connect 4</h1>');
    $menu.append(title);
    const instruction = $('<h2>Choose a gamemode:</h2>');
    $menu.append(instruction);
    const twoPButton = $('<button type="button">Click Me!</button>')
      .addClass('twoPbutton');
    $menu.append(twoPButton);
  }
  setupEventListeners() {
    const $menu = $(this.selector);
    $menu.on('click', '.twoPbutton', function() {
      $menu.empty();
      new Connect4('#connect4');
    });
  }
}