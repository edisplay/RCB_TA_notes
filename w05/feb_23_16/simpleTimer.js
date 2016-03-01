//Download an mp3 clip and link to it here:
var audio = new Audio('Cmajor_flutterwave.mp3');
setTimeout(fivePassed, 1000 * 60 * 5);
setTimeout(tenPassed, 1000 * 60 * 10);
setTimeout(timesUp, 1000 * 60 * 15);
 
        //Put your timeouts here
        function fivePassed() {
          console.log("five minutes are up");//Five minutes have passed, send an alert and state the time remaining in the "time-left" div.
          alert("Five minutes left!");
          $('#time-left').html('<div>Five minutes left</div>');
        };
        function tenPassed() {
          console.log("ten minutes are up");//Ten minutes have passed, send an alert and state the time remaining in the "time-left" div.
          alert("Five minutes left!");
          $('#time-left').html('<div>Five minutes left</div>');
        }
        function timesUp(){
          audio.play();
          alert("Times up!");
          $('#time-left').html('<div>Times up!</div>');
          //Fifteen minutes have passed, time is up! Send an alert and have the "time-left" div let the user know.
          //The following line will play that audio file that you linked to above.

        };