  // these variables are done for you
    var headsCount = 0;
    var tailsCount = 0;
    var wins = 0;
    var losses = 0;
    //this on click is completely done for you
    $('#heads').on('click', function() {
      headsCount++;
      $('#headsChosen').html(headsCount); 
      $('#guess').html('<b>Heads</b>');
      flipThatCoin(0);
    });
    $('#tails').on('click', function() {
      //STEP FOUR:
          tailsCount = 0;// * increment tailsCount by one
          $('#tailsChosen').html(tailsCount);// * replace the html inside of the span with an id of tailsChosen with the tailsCount
          $('#guess').html('<b>Tails</b>');// * update the html inside the div with an id of guess with the word Tails bolded.
          flipThatCoin(1);// * call the flipThatCoin function and pass in the value 1 to it.
    });
    function flipThatCoin(result) {
      var randomNumber = Math.floor(Math.random() * 2);//STEP ONE: set a variable named randomNumber to either 1 or 2. Make it random
      console.log("randomNumber", randomNumber);
      //STEP TWO: 
        // if randomNumber is zero then 
        if (randomNumber == 0) {
          $('#coin-image').html('<img src = http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg>'); //replace html of the div with an id of coin-image with an image of http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg
        } else if (randomNumber == 1) {
          $('#coin-image').html('<img src = http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg>'); //replace html of the div with an id of coin-image with an image of http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg
        };
      //STEP THREE:
          // if result is equal to randomNumber then 
          if (result == randomNumber) {
            wins++;//   * increment wins by one  
            $('#win-lose').html('<h2>Winner!</h2>');//   * replace the html of the div with an id of win-lose with an h2 of Winner! 
            //   * update the div with an id of win-lose with an h2 of Winner!
          }
          
          
          
          //   * update the div with an id of wins with the value of wins inside of it
          // else 
          //   * increment losses by one
          //   * update the div with an id of win-lose with an h2 of Loser!
          //   * update the div with an id of losses with the value of losses inside of it
        
    };




