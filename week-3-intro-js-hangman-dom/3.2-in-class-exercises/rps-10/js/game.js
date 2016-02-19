var computerChoices = ['r', 'p', 's'];
var wins = 0;
var losses = 0;
var ties = 0;

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if ((userGuess == 'r') || (userGuess == 'p') || (userGuess == 's')){

        if ((userGuess == 'r') && (computerGuess == 's')){
            wins++;
        }else if ((userGuess == 'r') && (computerGuess == 'p')){
            losses++;
        }else if ((userGuess == 's') && (computerGuess == 'r')){
            losses++;
        }else if ((userGuess == 's') && (computerGuess == 'p')){
            wins++;
        }else if ((userGuess == 'p') && (computerGuess == 'r')){
            wins++;
        }else if ((userGuess == 'p') && (computerGuess == 's')){
            losses++;
        }else if (userGuess == computerGuess){
            ties++;
        } 

        if (userGuess == 'r'){
            var displayRock = "<img src='images/rock-user.png' alt='User Rock'>";
            document.querySelector("#userGuess").innerHTML = displayRock;
        } else if (userGuess == 'p'){
            var displayPaper = "<img src='images/paper-user.png' alt='User Paper'>";
            document.querySelector("#userGuess").innerHTML = displayPaper;
        }else if (userGuess == 's'){
            var displayScissors = "<img src='images/scissors-user.png' alt='User Scissors'>";
            document.querySelector("#userGuess").innerHTML = displayScissors;
        }

        if (computerGuess == 'r'){
            var displayComputerRock = "<img src='images/rock-computer.png' alt='Cmputer Rock'>";
            document.querySelector("#computerGuess").innerHTML = displayComputerRock;
        } else if (computerGuess == 'p'){
            var displayComputerPaper = "<img src='images/paper-computer.png' alt='Computer Paper'>";
            document.querySelector("#computerGuess").innerHTML = displayComputerPaper;
        }else if (computerGuess == 's'){
            var displayComputerScissors = "<img src='images/scissors-computer.png' alt='Computer Scissors'>";
            document.querySelector("#computerGuess").innerHTML = displayComputerScissors;
        }

        var displayWins = wins;
        document.querySelector('#wins').innerHTML = displayWins;

        var displayLosses = losses;
        document.querySelector('#losses').innerHTML = displayLosses;

        var displayTies = ties;
        document.querySelector('#ties').innerHTML = displayTies;

        document.querySelector('#game').innerHTML = html;
    }
}
