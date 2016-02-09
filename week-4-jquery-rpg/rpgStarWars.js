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
			theForceLevel: 600,
			selected: false
		},
		{
			type: 'jedi',
			rank: 'knight',
			name: 'Luke Skywalker',
			health: 100,
			attack: 7,
			defense: 8,
			theForceLevel: 700,
			selected: false
		},
		{
			type: 'sith',
			rank: 'master',
			name: 'Darth Sidious',
			health: 150,
			attack: 8,
			defense: 8,
			theForceLevel: 800,
			selected: false
		},
		{
			type: 'sith',
			rank: 'apprentice',
			name: 'Darth Maul',
			health: 100,
			attack: 5,
			defense: 6,
			theForceLevel: 600,
			selected: false
		}
	];
	var currSelectedCharacter;
	var combatants = [];
	var indexOfSelChar;
	var attackResult;

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
	var chooseCharacter = function(event) {
		// console.log(event.currentTarget.className += " selected");
		var currSelectedCharEl = $("#selected-character");
		var currSelCharNameEl = currSelectedCharEl.children().eq(0),
				currSelCharHealthEl = currSelectedCharEl.children().eq(1);

		// 1.2.1 Write conditional so that user can only select a character if there is NO character yet selected.
		// Doesn't allow you to select a character.  Possible conflict in  selecting a character to attack will be handled in another function.
		if ((currSelCharNameEl.text()) && (currSelCharHealthEl.text())) {
			alert("You already selected a character!");
			return;
		} else {
			event.currentTarget.className += " selected";
			// currSelectedCharEl.addClass("selected");
			currSelCharNameEl.text(event.currentTarget.children[0].textContent);
			currSelCharHealthEl.text(event.currentTarget.children[1].textContent);
		};

		// Capture selected character from global characters array.
		var charactersArr = $(".character");
		$.each(charactersArr, function(index, item) {
			// console.log($(item).hasClass("selected"));
			if ($(item).hasClass("selected")) {
				indexOfSelChar = index;
				characters[index].selected = true;
			}
		});
		// console.log(characters[indexOfSelChar]);
		// Push selected character in combatants array to capture combatants.
		combatants.push(characters[indexOfSelChar]);
		// Index of selected character is available, USE IT

		// 1.2.2 After choosing a character, generate the collection of available enemies to attack (you can't attack yourself).
		var availableCharsAttack = charactersArr.not(document.getElementsByClassName("character selected"));

		for (var m = 0; m < availableCharsAttack.length; m++) {
			$("#available-to-attack-section").append("<div class='enemy-character available-get-attacked'>");
		};

		// 1.2.2.1 After generating the collection of available enemies to attack, render them to the DOM and give them an additional class name to distinguish them as 'available' to attack.

		$(".enemy-character").each(function(index, el) {
			var currEnemyCharEl = $(el),
					currEnemyNameEl,
					currEnemyHealthEl;

			currEnemyCharEl.append("<div class='character-name'>");
			currEnemyCharEl.append("<div class='character-health'>");

			currEnemyNameEl = currEnemyCharEl.children().eq(0);
			currEnemyHealthEl = currEnemyCharEl.children().eq(1);

			currEnemyNameEl.text(availableCharsAttack[index].childNodes[0].textContent);
			currEnemyHealthEl.text(availableCharsAttack[index].childNodes[1].textContent);
		});

		// 1.2.3 Create a jQuery event listener for selecting a character to attack (create a defender object) by clicking on the available characters to attack.
		// 1.2.3.1 Create conditional to account for a character already selected to be attacked.
		$(".enemy-character").on("click", function(event) {
			// console.log(event.currentTarget.className);
			var currEnemyCharEl = $("#defender");
			var currSelEnemyName = event.currentTarget.children[0].textContent,
					currSelEnemyHealth = event.currentTarget.children[1].textContent;
			var currSelEnemyNameEl = currEnemyCharEl.children().eq(0),
					currSelEnemyHealthEl = currEnemyCharEl.children().eq(1);

			if ((currSelEnemyNameEl.text()) && (currSelEnemyHealthEl.text())) {
				alert("You already selected an enemy to attack!");
				return;
			} else {
				event.currentTarget.className += " selected";

				currSelEnemyNameEl.text(currSelEnemyName);
				currSelEnemyHealthEl.text(currSelEnemyHealth);
			}

			// Account for selected enemy object and push into the combatants array.
			for (var t = 0; t < characters.length; t++) {
				if (currSelEnemyName === characters[t].name) {
					combatants.push(characters[t]);
				}
			}
		});



	};



	$(".character").on("click", chooseCharacter);

	$("#attack-button").on("click", function() {
		console.log(combatants);
		attackResult = attack(combatants[0], combatants[1]);
	});
	// ----------------------------------------------------------------
	console.log(attackResult);
	// 2. Create functions to enable actions between objects.
	function attack(attacker, defender) {
		var attackDifference;
		console.log(attacker);
		console.log(defender);
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
	// var attackResult = attack(characters[0], characters[3]); //---UNCOMMENT when ready to render result of attack

	// 2.1.1  Declare a variable to handle action type values e.g. attack, steal, scavenge (for 20 days), one-hit-kill...


	// 2.2 Create functions to update objects after actions between objects.

	function updateCharacterObjects(attacker, defender, attackResult) {
		console.log(attackResult);
		attacker.health = attackResult.attackerHealth;
		defender.health = attackResult.defenderHealth;
		console.log(attacker);
		console.log(defender);
		return {
			attacker: attacker,
			defender: defender
		};
	};

	// ---Currently, to change characters, just change the first two arguments' indexes
	// var updatedCharacters = updateCharacterObjects(combatants[0], combatants[1], attackResult);  //---UNCOMMENT when ready to render result of attack

	// ----------------------------------------------------------------

	// 3 Render character info from the results of actions between the characters to the DOM.
	// console.log(updatedCharacters.attacker);
	// console.log(updatedCharacters.defender);

	var attackerElement = $("#attacker");
	// $("#attacker-name").text(updatedCharacters.attacker.name);
	// $("#attacker-health").text(updatedCharacters.attacker.health);

	var defenderElement = $("#defender");
	// $("#defender-name").text(updatedCharacters.defender.name);
	// $("#defender-health").text(updatedCharacters.defender.health);
	// ----------------------------------------------------------------

});

