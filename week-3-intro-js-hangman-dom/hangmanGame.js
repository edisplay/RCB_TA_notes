// create hangman game with the dom using an object

// focus on main.js that Pavan sent in slack

// on "click" exercises

// pseudo code hangman

// ---No prompt, all DOM using keystrokes from keyboard
// ---Direct user to hit keys on their keyboard / keypress events
// ---Start / Restart button
// ---BONUS: Get 80's music playing in the background
// ---BONUS: Make the screen flash

var hangmanGame = {
	//"bumrush", "topgun", "superbad", "hackers", "limitless"
	wordsToPick: ["simple"],
	wordInPlay: "",
	lettersOfTheWordInPlay: [],
	matchedLetters: [],
	guessedLetters: [],
	guessesLeft: 0,
	totalGuesses: 0,
	letterGuessed: '',
	wins: 0,

	// ---Start the game---
	playGame: function() {
		this.getRandomWordToPlay()
	},
	// ---Check the letter---
	checkLetter: function(letter) {
		//console.log(letter);

		var lettersArray = this.lettersOfTheWordInPlay;
		// ---Check if the letter is good, meaning compare the letter to the array of letters for the wordInPlay value.
		for (var i = 0; i < lettersArray.length; i++) {
			// ---If the letter is good, then reveal letter in the current word section.
			if (letter === lettersArray[i]) {
				this.matchedLetters.push(letter);
				var letterElement = $("#current-word").children().eq(i);
				letterElement.text(letter);
			};
		};

		// ---After revealing the letter in the current word section, decrease the guesses from the totalGuesses number, then display letter in the guessed letters section, display the guessesLeft number on the DOM.
		// ---If the letter is not good, decrease the guesses from the totalGuesses number, then display letter in the guessed letters section, and display the guessesLeft number on the DOM.
		this.updateGuessesCount();
		this.updateLettersGuessed(letter);

		// ---Check if current matched letters match the current word letters.
		this.checkForMatch();
	},
	updateLettersGuessed: function(letter) {
		$("#guessed-letters").append(letter);
	},
	updateGuessesCount: function() {
		var guesses = $("#guesses-remaining");
		this.guessesLeft--;
		guesses.empty();
		//console.log(this.guessesLeft);
		guesses.text(this.guessesLeft);
	},
	// ---Get the word to play with---
	getRandomWordToPlay: function() {
		// ---Get the word from the array of words.
		//console.log(this.wordsToPick.length);
		this.wordInPlay = this.wordsToPick[Math.floor(Math.random() * this.wordsToPick.length)];
		this.lettersOfTheWordInPlay = this.wordInPlay.split('');
		var currentWordElem = $("#current-word");

		// ---Set up DOM with div's the length of the word
		// ---Generate the div's with the length of the word
		for (var j = 0; j < this.lettersOfTheWordInPlay.length; j++) {
			currentWordElem.append("<div class='letter inline'>");
		}

		$(".letter").each(function(index) {
			$(this).attr("id", "letter-position-" + index);
		});

		this.getTotalGuesses();
		//console.log(this.lettersOfTheWordInPlay);
	},
	getTotalGuesses: function() {
		var letters = this.lettersOfTheWordInPlay;
		this.totalGuesses = letters.length;
		this.guessesLeft = this.totalGuesses;
		// ---Render the guesses left
		$("#guesses-remaining").text(this.guessesLeft);
	},
	checkForMatch: function() {
		//console.log(this.matchedLetters);
		//console.log(this.guessesLeft);
		if (this.totalGuesses) {
			// //console.log($("#current-word").children());
			var currentWordElements = $("#current-word").children();
			var currentWord = [],
					n = 0,
					currWord = '';
			for (var k = 0; k < currentWordElements.length; k++) {
				currentWord.push(currentWordElements.eq(k).text());
			}
			//console.log(currentWord);
			//console.log(currWord);
			while (n <= currentWord.length) {
				currWord += currentWord[n];
				// //console.log(currWord += currentWord[n]);
				// //console.log(this.wordInPlay);
				//console.log(currWord);
				// ---If yes, alert the user they won.
				if (currWord === this.wordInPlay) {
					$("#restartGame").css("visibility", "visible");
					alert("You Win!");
					return;
				} else if ((this.guessesLeft === 0) && (currWord === this.wordInPlay)) {
					$("#restartGame").css("visibility", "visible");
					// });
					alert("You Win!");
					return;
				} else if (this.guessesLeft === 0) {
					//console.log(currWord);
					//console.log(this.wordInPlay);
					// ---If yes, alert the user they won.
					if (currWord === this.wordInPlay) {
						//console.log(currWord);
						//console.log(this.wordInPlay);
						alert("You Win!");
						$("#restartGame").css("visibility", "visible");
						this.wins++;
						var winsOnPage = document.querySelector('#wins');
						winsOnPage.innerHTML = this.wins;
					} else {
						$("#restartGame").css("visibility", "visible");
						alert("Game Ends!");
						return;
					}
				}

				n++;
			}
		}
	}
};

hangmanGame.playGame();

debugger;

$("body").on("keypress", function(event) {
	var letter = String.fromCharCode(event.charCode);
	hangmanGame.letterGuessed = letter;
	hangmanGame.checkLetter(hangmanGame.letterGuessed);
	debugger;
});

$("#restartGame").on("click", function(e) {
	location.reload();
	// alert("works!");
});


