var audio = new Audio('raven.mp3');
setTimeout(fivePassed, 1000 * 60 * 5);
setTimeout(tenPassed, 1000 * 60 * 10);
setTimeout(timeUp, 1000 * 60 * 15);

function fivePassed() {
  alert('Five Minutes Have Passed!');
  $('#time-left').html('<h2>About 10 Minutes Left!</h2>');
}

function tenPassed() {
  alert('Ten Minutes Have Passed!');
  $('#time-left').html('<h2>About 5 Minutes Left!</h2>');
}

function timeUp(){
  audio.play();
  alert('Time is up!');
  $('#time-left').html('<h2>Time\'s Up!</h2>');
}
