class Timer{
  constructor(time) {
    this.time = time;
  }
  setupTimer() {
    const that = this;
    const $timer = $('#timer');
    const second = 1000,
          minute = second * 60;
    let now = this.time;
    $timer.text(Math.floor((now % (minute)) / second));
    this.interval = setInterval(function() {    
          now -= second;
          $timer.text(Math.floor((now % (minute)) / second));

          if (now <= 0) {
            clearInterval(that.interval);
            // connect4.outOfTime();
          }
        }, second)
  } 
}