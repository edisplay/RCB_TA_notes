// Pseudo code it out

// ---General directions
// 0. Use jQuery to do everything
// 1. Display everyone's health on the page
// 2. Choose who to attack
// 3. A random enemy will attack you

// Students Don't Know
// Constructors
//

// Students know
// click events
// variables
// data types
// html / css
// git / heroku
// arrays

$(document).ready(function() {

	// ----------------------------------------------------------------
	// 1. Create 4 characters with objects.
	var characters = { 
		'Obi-Wan Kenobi' : {
			type: 'jedi',
			rank: 'master',
			name: 'Obi-Wan Kenobi', 
			health: 100,
			attack: 8,
			defense: 6,
			theForceLevel: 600,
			selected: false,
			selectedAsEnemy: false,
			imageUrl: "images/obi-wan.jpg",
			enemyAttackBack: 15
		},
		'Luke Skywalker' : {
			type: 'jedi',
			rank: 'knight',
			name: 'Luke Skywalker',
			health: 100,
			attack: 10,
			defense: 8,
			theForceLevel: 700,
			selected: false,
			selectedAsEnemy: false,
			imageUrl: "images/luke-skywalker.jpg",
			enemyAttackBack: 5
		},
		'Darth Sidious' : {
			type: 'sith',
			rank: 'master',
			name: 'Darth Sidious',
			health: 150,
			attack: 7,
			defense: 8,
			theForceLevel: 800,
			selected: false,
			selectedAsEnemy: false,
			imageUrl: "images/darth-sidious.png",
			enemyAttackBack: 20
		},
		'Darth Maul' : {
			type: 'sith',
			rank: 'apprentice',
			name: 'Darth Maul',
			health: 100,
			attack: 5,
			defense: 6,
			theForceLevel: 600,
			selected: false,
			selectedAsEnemy: false,
			imageUrl: "images/darth-maul.jpg",
			enemyAttackBack: 25
		}
	};
	var currSelectedCharacter;
	var currDefender;
	var combatants = [];
	var indexOfSelChar;
	var attackResult;
	var turnCounter = 1;
	var killCount = 0;

	// ----------------------------------------------------------------
	// 2. Create HTML
	
	// ----------------------------------------------------------------
	// 3. Create functions to render to DOM
	var renderCharacters = function(charObj, areaRender) {
		//render all characters
		if (areaRender == '#characters-section') {
			$(areaRender).empty();
			for (var key in charObj) {
			  if (charObj.hasOwnProperty(key)) {
			  	var charDiv = $("<div class='character' data-name='" + key + "'>");
			  	var charName = $("<div class='character-name'>").text(key);
			  	var charImage = $("<img alt='image' class='character-image'>").attr("src", charObj[key].imageUrl);
				var charHealth = $("<div class='character-health'>").text(charObj[key].health);
				charDiv.append(charName).append(charImage).append(charHealth);
			    $(areaRender).append(charDiv);
			  }
			}
		};
		//render player char
		if (areaRender == '#selected-character') {
		  	var charDiv = $("<div class='character' data-name='" + String(currSelectedCharacter.name) + "'>");
		  	var charName = $("<div class='character-name'>").text(String(currSelectedCharacter.name));
		  	var charImage = $("<img alt='image' class='character-image'>").attr("src", currSelectedCharacter.imageUrl);
			var charHealth = $("<div class='character-health'>").text(currSelectedCharacter.health);
			charDiv.append(charName).append(charImage).append(charHealth);
		    $(areaRender).append(charDiv);
		};
		//render combatants
		if (areaRender == '#available-to-attack-section') {
			for (var i = 0; i < charObj.length; i++) {
			  	var charDiv = $("<div class='character' data-name='" + charObj[i].name + "'>");
			  	var charName = $("<div class='character-name'>").text(charObj[i].name);
			  	var charImage = $("<img alt='image' class='character-image'>").attr("src", charObj[i].imageUrl);
				var charHealth = $("<div class='character-health'>").text(charObj[i].health);
				charDiv.append(charName).append(charImage).append(charHealth);
			    $(areaRender).append(charDiv);
				$(charDiv).addClass("enemy");
			};
			//render one enemy to defender area
			$(document).on('click', '.enemy', function() {
				//select an combatant to fight
				name = ($(this).data('name'));
				//if defernder area is empty
				if ( $('#defender').children().length == 0 ) {
					renderCharacters(name, '#defender');
					$(this).hide();
				};
			})
		};
		//render defender
		if (areaRender == '#defender') {
			$(areaRender).empty();
			for (var i = 0; i < combatants.length; i++) {
				//add enemy to defender area
				if (combatants[i].name == charObj) {				
				  	var charDiv = $("<div class='character' data-name='" + combatants[i].name + "'>");
				  	var charName = $("<div class='character-name'>").text(combatants[i].name);
				  	var charImage = $("<img alt='image' class='character-image'>").attr("src", combatants[i].imageUrl);
					var charHealth = $("<div class='character-health'>").text(combatants[i].health);
					charDiv.append(charName).append(charImage).append(charHealth);
				    $(areaRender).append(charDiv);
				    currDefender=combatants[i]
				    $(charDiv).addClass("target-enemy");
				};
			};
		};
		//render character's state when attacked
		if (areaRender == 'playerDamage') {
			$('#defender').empty();
		  	var charDiv = $("<div class='character' data-name='" + charObj.name + "'>");
		  	var charName = $("<div class='character-name'>").text(charObj.name);
		  	var charImage = $("<img alt='image' class='character-image'>").attr("src", charObj.imageUrl);
			var charHealth = $("<div class='character-health'>").text(charObj.health);
			charDiv.append(charName).append(charImage).append(charHealth);
		    $('#defender').append(charDiv);
		    $(charDiv).addClass("target-enemy");
		};
		//render character's state when attacked
		if (areaRender == 'enemyDamage') {
			$('#selected-character').empty();
		  	var charDiv = $("<div class='character' data-name='" + charObj.name + "'>");
		  	var charName = $("<div class='character-name'>").text(charObj.name);
		  	var charImage = $("<img alt='image' class='character-image'>").attr("src", charObj.imageUrl);
			var charHealth = $("<div class='character-health'>").text(charObj.health);
			charDiv.append(charName).append(charImage).append(charHealth);
		    $('#selected-character').append(charDiv);
		};
		//render defeated enemy
		if (areaRender == 'enemyDefeated') {
			$('#defender').empty();
			alert("You have defated " + charObj.name + ", you can choose to fight another enemy.");
		};
	};
	//this is to render all characters for user to choose their computer
	renderCharacters(characters, '#characters-section');
	$(document).on('click', '.character', function(){
		name = $(this).data('name');
		//if no player char has been selected
		if (!currSelectedCharacter) {		
			currSelectedCharacter = characters[name];
			for (var key in characters) {
				if (key != name){
					combatants.push(characters[key]);
				}
			};
			$("#characters-section").hide();
			renderCharacters(currSelectedCharacter, '#selected-character');
			//this is to render all characters for user to choose fight against
			renderCharacters(combatants, '#available-to-attack-section');
		};
	});

	// ----------------------------------------------------------------
	// 4. Create functions to enable actions between objects.
	$("#attack-button").on("click", function() {
		//if defernder area has enemy
		if ( $('#defender').children().length != 0 ) {
			//defender state change
			alert("You attacked " + currDefender.name + " for " + (currSelectedCharacter.attack * turnCounter) + " damage.");
			//combat
			currDefender.health = currDefender.health - (currSelectedCharacter.attack * turnCounter);

			//win condition
			if (currDefender.health >= 0) {
				renderCharacters(currDefender, 'playerDamage');
				//player state change
				alert(currDefender.name + " attacked you back for " + currDefender.enemyAttackBack + " damage.");
				currSelectedCharacter.health = currSelectedCharacter.health - currDefender.enemyAttackBack;
				renderCharacters(currSelectedCharacter, 'enemyDamage');
				if (currSelectedCharacter.health <= 0) {
					//lose condition
					$("body").empty();
					$('body').css("background", "black");
					alert("You been defeated...");
					alert("GAME OVER!!!");
					restartGame();
				};
			}else{		
				renderCharacters(currDefender, 'enemyDefeated');
				killCount++;
				if (killCount >= 3) {
					alert("You Won!!!!");
					alert("GAME OVER!!!");
					restartGame();
				};
			};
			turnCounter++;
		}else{
			alert("No enemy here.");
		};
	})
	var restartGame = function() {
		//When 'Restart' button is clicked, reload the page.
	    var restart = $('<button>Restart</button>').click(function () {
	    	location.reload();
	    });
	    $("body").append(restart);
	};

});