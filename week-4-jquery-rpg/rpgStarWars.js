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
			enemyAttackBack: 5
		},
		'Luke Skywalker' : {
			type: 'jedi',
			rank: 'knight',
			name: 'Luke Skywalker',
			health: 100,
			attack: 7,
			defense: 8,
			theForceLevel: 700,
			selected: false,
			selectedAsEnemy: false,
			imageUrl: "images/luke-skywalker.jpg",
			enemyAttackBack: 10
		},
		'Darth Sidious' : {
			type: 'sith',
			rank: 'master',
			name: 'Darth Sidious',
			health: 150,
			attack: 8,
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
			enemyAttackBack: 15
		}
	};
	var currSelectedCharacter;
	var currDefender;
	var combatants = [];
	var indexOfSelChar;
	var attackResult;
	var turnCounter = 1;

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
			console.log(charObj)
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
				renderCharacters(name, '#defender');
				$(this).hide();
			})
		};
		//render defender
		if (areaRender == '#defender') {
			//$(areaRender).empty();
			console.log()
			for (var i = 0; i < combatants.length; i++) {
				//add enemy to defender area
				if (combatants[i].name == charObj) {				
				  	var charDiv = $("<div class='character' data-name='" + combatants[i].name + "'>");
				  	var charName = $("<div class='character-name'>").text(combatants[i].name);
				  	var charImage = $("<img alt='image' class='character-image'>").attr("src", combatants[i].imageUrl);
					var charHealth = $("<div class='character-health'>").text(combatants[i].health);
					charDiv.append(charName).append(charImage).append(charHealth);
				    $(areaRender).append(charDiv);
				    //currDefender=combatants[i]
				};
			};
		};
	}

	//this is to render all characters for user to choose their computer
	renderCharacters(characters, '#characters-section');

	$(document).on('click', '.character', function(){
		name = $(this).data('name');
		if (!currSelectedCharacter) {		
			currSelectedCharacter = characters[name];
			for (var key in characters) {
				if (key != name){
					combatants.push(characters[key]);
				}
			};
			$("#characters-section").hide();
			renderCharacters(currSelectedCharacter, '#selected-character');
			console.log(combatants);

			//this is to render all characters for user to choose fight against
			renderCharacters(combatants, '#available-to-attack-section');
		};
	});

	// ----------------------------------------------------------------
	//$("#turn-counter").append(turnCounter);
	// 2. Create functions to enable actions between objects.

	$("#attack-button").on("click", function() {
		console.log(currSelectedCharacter);
		console.log(currDefender);
		// Alert user's attack
		// alert("You attacked " + attackerObj.name + " for " + (defender.attack * turnCounter) + " damage.");
		// defender.health = defender.health - (attackerObj.attack * turnCounter);

		// alert(defender.name + " attacked you back for " + defender.enemyAttackBack + " damage.");
		// attackerObj.health = attackerObj.health - defender.enemyAttackBack;

		// console.log(attackerObj.health);
		// console.log(defender.health);
		// return {
		// 	attackerObjHealth: attackerObj.health,
		// 	defenderHealth: defender.health
		// };

	})

/*	//When 'Restart' button is clicked, reload the page.
	$("#restart-button").on("click", function() {
		location.reload();
	});
*/

	// // 1.2 Render selected character object before actions to the DOM using jQuery.
	// var chooseCharacter = function(event) {

	// 	$('#characters-section').hide();

	// 	// console.log(event.currentTarget.className += " selected");
	// 	var currSelectedCharEl = $("#selected-character").css({
	// 		"border-style": "solid",
	// 		"border-color": "orange",
	// 		"border-width": "3px"
	// 	});
	// 	// console.log(currSelectedCharEl.children());
	// 	var currSelCharNameEl = currSelectedCharEl.children().eq(0),
	// 			currSelCharImage = currSelectedCharEl.children().eq(1).append("<img alt='image'>"),
	// 			currSelCharHealthEl = currSelectedCharEl.children().eq(2);
	// 	console.log(currSelCharImage);
	// 	// 1.2.1 Write conditional so that user can only select a character if there is NO character yet selected.
	// 	// Doesn't allow you to select a character.  Possible conflict in  selecting a character to attack will be handled in another function.
	// 	if ((currSelCharNameEl.text()) && (currSelCharHealthEl.text())) {
	// 		alert("You already selected a character!");
	// 		return;
	// 	} else {
	// 		event.currentTarget.className += " selected";
	// 		// currSelectedCharEl.addClass("selected");
	// 		currSelCharNameEl.text(event.currentTarget.children[0].textContent);
	// 		// console.log(event.currentTarget.children[1].children[0].src);
	// 		console.log(currSelCharImage.find("img").attr("src", event.currentTarget.children[1].children[0].src));
	// 		// currSelCharImage.find("img").attr("src", event.currentTarget.children[1].children[0].src);
	// 		currSelCharHealthEl.text(event.currentTarget.children[2].textContent);

	// 		$("#characters-section").hide();

	// 	};

	// 	// Capture selected character from global characters array.
	// 	var charactersArr = $(".character");
	// 	$.each(charactersArr, function(index, item) {
	// 		// console.log($(item).hasClass("selected"));
	// 		if ($(item).hasClass("selected")) {
	// 			indexOfSelChar = index;
	// 			characters[index].selected = true;
	// 		}
	// 	});

	// 	// Push selected character in combatants array to capture combatants.
	// 	combatants.push(characters[indexOfSelChar]);
	// 	// Index of selected character is available, USE IT

	// 	// 1.2.2 After choosing a character, generate the collection of available enemies to attack (you can't attack yourself).
	// 	var availableCharsAttack = charactersArr.not(document.getElementsByClassName("character selected"));

	// 	for (var m = 0; m < availableCharsAttack.length; m++) {
	// 		$("#available-to-attack-section").append("<div class='enemy-character available-get-attacked'>");
	// 	};

	// 	// 1.2.2.1 After generating the collection of available enemies to attack, render them to the DOM and give them an additional class name to distinguish them as 'available' to attack.

	// 	$(".enemy-character").each(function(index, el) {
	// 		var currEnemyCharEl = $(el),
	// 				currEnemyNameEl,
	// 				currEnemyHealthEl;

	// 		currEnemyCharEl.append("<div class='character-name'>");
	// 		currEnemyCharEl.append("<div class='character-image'><img alt='image'>");
	// 		currEnemyCharEl.append("<div class='character-health'>");

	// 		currEnemyNameEl = currEnemyCharEl.children().eq(0);
	// 		currEnemyImage = currEnemyCharEl.children().eq(1);
	// 		currEnemyHealthEl = currEnemyCharEl.children().eq(2);

	// 		currEnemyNameEl.text(availableCharsAttack[index].childNodes[0].textContent);
	// 		currEnemyImage.find("img").attr("src", availableCharsAttack[index].childNodes[1].childNodes[0].src);
	// 		currEnemyHealthEl.text(availableCharsAttack[index].childNodes[2].textContent);
	// 	});

	// 	// 1.2.3 Create a jQuery event listener for selecting a character to attack (create a defender object) by clicking on the available characters to attack.
	// 	// 1.2.3.1 Create conditional to account for a character already selected to be attacked.
	// 	$(".enemy-character").on("click", function(event) {
	// 		// console.log(event.currentTarget.className);
	// 		var currEnemyCharEl = $("#defender").css({
	// 				"border-style": "solid",
	// 				"border-color": "red",
	// 				"border-width": "3px"
	// 		});
	// 		var currSelEnemyName = event.currentTarget.children[0].textContent,
	// 				currSelEnemyImageUrl = event.currentTarget.children[1].children[0].src,
	// 				currSelEnemyHealth = event.currentTarget.children[2].textContent;
	// 		var currSelEnemyNameEl = currEnemyCharEl.children().eq(0),
	// 				currSelEnemyHealthEl = currEnemyCharEl.children().eq(2);

	// 				// console.log(currEnemyCharEl);

	// 		if (true) {
	// 			event.currentTarget.className += " selected";
	// 			var currSelEnemyImageEl = currEnemyCharEl.children().eq(1).append("<img alt='image'>");
	// 			currSelEnemyNameEl.text(currSelEnemyName);
	// 			currSelEnemyImageEl.find("img").attr("src", currSelEnemyImageUrl);
	// 			currSelEnemyHealthEl.text(currSelEnemyHealth);
	// 			return;
	// 		};

	// 		// Account for selected enemy object and push into the combatants array.
	// 		for (var t = 0; t < characters.length; t++) {
	// 			if (currSelEnemyName === characters[t].name) {
	// 				// combatants.pop();
	// 				combatants.push(characters[t]);
	// 			}
	// 			debugger; //see combatants
	// 		};
	// 		$(this).hide();
	// 	});
	// };

	// User chooses character to play------------
	// $(".character").on("click", chooseCharacter);
	// // ------------------------------------------

	// 	// console.log(combatants);
	// 	// Handles action of type attack
	// 	console.log(combatants[0]);
	// 	console.log(combatants[1]);
	// 	debugger;
	// 	attackResult = attack(combatants[0], combatants[1]);
	// 	console.log(attackResult)
	// 	// console.log(updateCharacterObjects);
	// 	updatedCharacters = updateCharacterObjects(combatants[0], combatants[1], attackResult);
	// 	console.log(updatedCharacters);
	// 	// 3 Render character info from the results of actions between the characters to the DOM.
	// 	// console.log(updatedCharacters.attackerObj);
	// 	// console.log(updatedCharacters.defender);

	// 	// $("#attackerObj-name").text(updatedCharacters.attackerObj.name);
	// 	// $("#attackerObj-health").text(updatedCharacters.attackerObj.health);

	// 	$("#defender-name").text(updatedCharacters.defender.name);
	// 	$("#defender-health").text(updatedCharacters.defender.health);
	// 	// ----------------------------------------------------------------

	// 	// 3.1 Update characters' health in the Character Selection Section in the DOM
	// 	for (var c = 0; c < characters.length; c++) {
	// 		if (updatedCharacters.attackerObj.name === characters[c].name) {
	// 			var updatedSelCharEl = $(".character").eq(c);
	// 			updatedSelCharEl.children().eq(1).text(updatedCharacters.attackerObj.health);
	// 		}
	// 	}
	// 	for (var d = 0; d < characters.length; d++) {
	// 		if (updatedCharacters.defender.name === characters[d].name) {
	// 			var updatedSelEnemyEl = $(".character").eq(d);
	// 			updatedSelEnemyEl.children().eq(1).text(updatedCharacters.defender.health);
	// 		}
	// 	}
	// 	// 3.2 Update characters' health in the Enemies Available To Attack Section in the DOM
	// 	for (var e = 0; e < $(".enemy-character").length; e++) {
	// 		if (updatedCharacters.defender.name === $(".enemy-character").eq(e).children().eq(0).text()) {
	// 			$(".enemy-character").eq(e).children().eq(1).text(updatedCharacters.defender.health);
	// 		}
	// 	}
	// 	// 3.3 Update user character's health in the 'Your Character' Section in the DOM
	// 	// if ($("#attackerObj").children().eq(0).text() === $("#selected-character").children().eq(0).text()) {
	// 		$("#selected-character").children().eq(2).text(updatedCharacters.attackerObj.health);
	// 	// }

	// 	// Unhide 'Choose Different Enemy' button after attack occurs
	// 	// $("#choose-enemy-button").css("visibility", "visible");

	// 	// Check characters' health.  If any are less than or equal to zero after an attack, then the game ends and we hide the action buttons but unhide the 'restart' button so the game can be restarted.
	// 	for (var b = 0; b < characters.length; b++) {
	// 		console.log(characters[b]);
	// 		if (characters[b].health <= 0) {
	// 			// $("#defender").children().eq(0).hide();
	// 			// var imageEl = $("#defender").children().eq(1).children().eq(0);
	// 			// imageEl.attr("src", "");
	// 			// imageEl.attr("alt", "");
	// 			$("#defender").hide();
	// 			// $("#defender").children().eq(2).empty();
	// 			// $("#defender").css({
	// 			// 	"border-style": "",
	// 			// 	"border-color": "",
	// 			// 	"border-width": ""
	// 			// })
	// 		}
	// 	}

	// 	console.log(turnCounter);
	// 	$("#turn-counter").empty();
	// 	turnCounter++;
	// 	$("#turn-counter").append(turnCounter);

	// 	debugger;
	// });



	// When user clicks on the 'Choose Different Enemy' button after an attack, create an event listener that clears the defender section of the DOM.
	// $("#choose-enemy-button").on("click", function() {
	// 	combatants.pop();
	// 	$("#defender").children().eq(0).empty();
	// 	$("#defender").children().eq(1).empty();
	// });

	// 2.1.1  Declare a variable to handle action type values e.g. attack, steal, scavenge (for 20 days), one-hit-kill...


	// 2.2 Create functions to update objects after actions between objects.
	// function updateCharacterObjects(attackerObj, defender, attackResult) {
	// 	attackerObj.health = attackResult.attackerObjHealth;
	// 	defender.health = attackResult.defenderHealth;

	// 	// console.log(attackerObj);
	// 	// console.log(defender);
	// 	return {
	// 		attackerObj: attackerObj,
	// 		defender: defender
	// 	};
	// };

});

