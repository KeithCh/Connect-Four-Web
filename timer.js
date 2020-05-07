class Timer{
  constructor(time) {
    this.time = time;
  }
  setupTimer() {
    const $timer = $('#timer');
    const second = 1000,
          minute = second * 60;
    let now = this.time;
    $timer.text(Math.floor((now % (minute)) / second));
    let x = setInterval(function() {    
          now -= second;
          $timer.text(Math.floor((now % (minute)) / second));

          //if (distance < 0) {
          //  clearInterval(x);
          //  'IT'S MY BIRTHDAY!;
          //}

        }, second)
  } 
}