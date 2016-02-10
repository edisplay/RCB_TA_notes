// ---General directions

// Students Don't Know
// Constructors
//

// Students know
// click events
// variables
// data types
// html / css
// arrays

$(document).ready(function() {
	//generate the random value of each crystal
	var crystalsValue = [];
	for (var i = 0; i < 4; i++) {
		var num = (Math.floor(Math.random() * 25) + 1);
		crystalsValue.push(num);
	};
	// crystals obj
	var crystals = {
		'red' : {
			points: crystalsValue[0],
			imageUrl: "images/red.png"
		},
		'blue' : {
			points: crystalsValue[1],
			imageUrl: "images/blue.png"
		},
		'yellow' : {
			points: crystalsValue[2],
			imageUrl: "images/yellow.png"
		},
		'green' : {
			points: crystalsValue[3],
			imageUrl: "images/green.png"
		}
	};

	//create a random number and render it
	var randomNum = Math.floor(Math.random() * 100);;
	var randomNumDiv = $("<div id='random-number'>").text(randomNum);
	$("#random-area").append(randomNumDiv);

	var playerPoints = 0;
	var clickCount = 0;

	//render crystals
	for (var key in crystals) {
		//console.log(key);
		var crystalDiv = $("<div class='crystals-button' data-name='" + key + "'>");
	  	var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystals[key].imageUrl);
	    crystalDiv.append(crystalImg);
	    $("#crystal-area").append(crystalDiv);
	};

	//create on.click event for crystals
	$(".crystals-button").on("click", function(event) {
		//console.log($(this).attr('data-name'));
		if ($(this).attr('data-name') == 'red') {
			//console.log(crystals[$(this).attr('data-name')].points);
			playerPoints = playerPoints + crystals[$(this).attr('data-name')].points;
		}else if ($(this).attr('data-name') == 'blue') {
			playerPoints = playerPoints + crystals[$(this).attr('data-name')].points;
		}else if ($(this).attr('data-name') == 'yellow') {
			playerPoints = playerPoints + crystals[$(this).attr('data-name')].points;
		}else{
			playerPoints = playerPoints + crystals[$(this).attr('data-name')].points;
		};

		//render points
		var scoreNumDiv = $("<div id='score-number'>").text(playerPoints);
		$("#score-area").empty();
		$("#score-area").append(scoreNumDiv);

		clickCount++;

		//check of win or lost
		if (playerPoints == randomNum) {
			alert("YAY!! You win!!!!");
			location.reload();
		}else if (playerPoints > randomNum) {
			alert("Opz, you lost...try again.")
			location.reload();
		};
	});

})
