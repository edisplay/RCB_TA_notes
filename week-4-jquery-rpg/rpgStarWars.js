// Pseudo code it out

// ---General directions
// 0. Use jQuery to do everything
// 1. Display everyone's health on the page
// 2. Choose who to attack
// 3. A random enemy will attack you

$(document).ready(function() {
	// 1. Create 4 characters with objects.
	var characters = [
		{
			type: 'jedi',
			rank: 'master',
			name: 'Obi-Wan Kenobi',
			health: 100,
			attack: 8,
			defense: 6,
			theForceLevel: 600
		},
		{
			type: 'jedi',
			rank: 'knight',
			name: 'Luke Skywalker',
			health: 100,
			attack: 7,
			defense: 8,
			theForceLevel: 700
		},
		{
			type: 'sith',
			rank: 'master',
			name: 'Darth Sidious',
			health: 150,
			attack: 8,
			defense: 8,
			theForceLevel: 800
		},
		{
			type: 'sith',
			rank: 'apprentice',
			name: 'Darth Maul',
			health: 100,
			attack: 5,
			defense: 6,
			theForceLevel: 600
		}
	];

	// 1.1 Render character objects before actions to the DOM using jQuery.
	for (var i = 0; i < characters.length; i++) {
		// console.log(characters[i].name);
		// console.log(characters[i].health);
		$("#characters-section").append("<div class='character'>");
	}

	$(".character").each(function(index, el) {
		var currCharacterEl = $(this);
		currCharacterEl.append("<div class='character-name'>");
		currCharacterEl.append("<div class='character-health'>");

		var currCharNameEl = currCharacterEl.children().eq(0),
				currCharHealthEl = currCharacterEl.children().eq(1);
		currCharNameEl.text(characters[index].name);
		currCharHealthEl.text(characters[index].health);
	});


	// 1.2 Render selected character object before actions to the DOM using jQuery.
	function chooseCharacter(event) {
		// console.log(event.currentTarget.children[0].textContent);
		// console.log(event.currentTarget.children[1].textContent);

		var currSelectedCharEl = $("#selected-character");
		var currSelCharNameEl = currSelectedCharEl.children().eq(0),
				currSelCharHealthEl = currSelectedCharEl.children().eq(1);

		// 1.2.1 Write conditional so that user can only select a character if there is NO character yet selected.
		// Doesn't allow you to select a character.  Possible conflict in  selecting a character to attack will be handled in another function.
		if ((currSelCharNameEl.text()) && (currSelCharHealthEl.text())) {
			alert("You already selected a character!");
			return;
		} else {
			currSelCharNameEl.text(event.currentTarget.children[0].textContent);
			currSelCharHealthEl.text(event.currentTarget.children[1].textContent);
		};
	}

	// 1.2.2 Create a condition so that if a character is already selected, then clicking on another character will invoke another function to select that character as the defender.
	$(".character").on("click", chooseCharacter);

	// 1.2.3 Create a jQuery event listener for selecting a character to attack (create a defender object) once the user has selected a character.
	// 1.2.3.1 For the event listener, do everything in the anonymous callback function, which creates a closure (students won't know that this is called a closure yet).





	// ----------------------------------------------------------------

	// 2. Create functions to enable actions between objects.
	function attack(attacker, defender) {
		var attackDifference;
		// If the attacker's attack value is greater than the defender's defense value, get the difference between the two values and decrease the life of the defender using that difference.
		if (attacker.attack > defender.defense) {
			attackDifference = attacker.attack - defender.defense;
			defender.health = defender.health - attackDifference;
		};
		// If the attacker's attack value is less than the defender's defense value, get the difference between the two values and decrease the life of the attacker using that difference.
		if (attacker.attack < defender.defense) {
			attackDifference = Math.abs(attacker.attack - defender.defense);
			attacker.health = attacker.health - attackDifference;
		};

		return {
			attackerHealth: attacker.health,
			defenderHealth: defender.health
		};
	};


	// 2.1 For random attacks throughout the game, use setInterval with Math.random and use attack function as a callback.




	// ---Currently, to change characters, just change the two arguments' indexes
	var attackResult = attack(characters[0], characters[3]); //---UNCOMMENT when ready to render result of attack

	// 2.1.1  Declare a variable to handle action type values e.g. attack, steal, one-hit-kill...


	// 2.2 Create functions to update objects after actions between objects.

	// ---Currently, to change characters, just change the first two arguments' indexes
	var updatedCharacters = updateCharacterObjects(characters[0], characters[3], attackResult);  //---UNCOMMENT when ready to render result of attack

	function updateCharacterObjects(attacker, defender, attackResult) {
		console.log(attackResult);
		attacker.health = attackResult.attackerHealth;
		defender.health = attackResult.defenderHealth;
		return {
			attacker: attacker,
			defender: defender
		};
	};

	// ----------------------------------------------------------------

	// 3 Render character info from the results of actions between the characters to the DOM.
	console.log(updatedCharacters.attacker);
	console.log(updatedCharacters.defender);

	var attackerElement = $("#attacker");
	attackerElement.append("<div id='attacker-name'>");
	attackerElement.append("<div id='attacker-health'>");
	$("#attacker-name").text(updatedCharacters.attacker.name);
	$("#attacker-health").text(updatedCharacters.attacker.health);

	var defenderElement = $("#defender");
	defenderElement.append("<div id='defender-name'>");
	defenderElement.append("<div id='defender-health'>");
	$("#defender-name").text(updatedCharacters.defender.name);
	$("#defender-health").text(updatedCharacters.defender.health);
	// ----------------------------------------------------------------

});

