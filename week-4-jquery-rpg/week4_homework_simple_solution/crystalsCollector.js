$(document).ready(function() {

	// crystals obj
	var crystals = {
		'red' : {
			points: Math.floor(Math.random() * 11) + 1,
			imageUrl: "images/red.png"
		},
		'blue' : {
			points: Math.floor(Math.random() * 11) + 1,
			imageUrl: "images/blue.png"
		},
		'yellow' : {
			points: Math.floor(Math.random() * 11) + 1,
			imageUrl: "images/yellow.png"
		},
		'green' : {
			points: Math.floor(Math.random() * 11) + 1,
			imageUrl: "images/green.png"
		}
	};

	function setGame(){
		//create a random number and render it
		var randomNum = Math.floor(Math.random() * 100) + 18;
		var randomNumDiv = $("<div id='random-number'>").text(randomNum);
		$("#random-area").append(randomNumDiv);

		var playerPoints = 0;
	}



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

		//check of win or lost
		if (playerPoints == randomNum) {
			$('#winArea').html("YAY!! You win!!!!");
			location.reload();
		}else if (playerPoints > randomNum) {
			$('#winArea').html("Opz, you lost...try again.")
			location.reload();
		};
	});

})