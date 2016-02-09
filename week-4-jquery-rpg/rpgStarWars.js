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
			selected: false,
			selectedAsEnemy: false,
			imageUrl: "images/obi-wan.jpg"
		},
		{
			type: 'jedi',
			rank: 'knight',
			name: 'Luke Skywalker',
			health: 100,
			attack: 7,
			defense: 8,
			theForceLevel: 700,
			selected: false,
			selectedAsEnemy: false,
			imageUrl: "images/luke-skywalker.jpg"
		},
		{
			type: 'sith',
			rank: 'master',
			name: 'Darth Sidious',
			health: 150,
			attack: 8,
			defense: 8,
			theForceLevel: 800,
			selected: false,
			selectedAsEnemy: false,
			imageUrl: "images/darth-sidious.png"
		},
		{
			type: 'sith',
			rank: 'apprentice',
			name: 'Darth Maul',
			health: 100,
			attack: 5,
			defense: 6,
			theForceLevel: 600,
			selected: false,
			selectedAsEnemy: false,
			imageUrl: "images/darth-maul.jpg"
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
		currCharacterEl.append("<div class='character-image'><img alt='image'>");
		currCharacterEl.append("<div class='character-health'>");

		var currCharNameEl = currCharacterEl.children().eq(0),
				currCharImage = currCharacterEl.children().eq(1),
				currCharHealthEl = currCharacterEl.children().eq(2);
		currCharNameEl.text(characters[index].name);
		currCharImage.find("img").attr("src", characters[index].imageUrl);
		currCharHealthEl.text(characters[index].health);
	});


	// 1.2 Render selected character object before actions to the DOM using jQuery.
	var chooseCharacter = function(event) {
		// console.log(event.currentTarget.className += " selected");
		var currSelectedCharEl = $("#selected-character").css({
			"border-style": "solid",
			"border-color": "orange",
			"border-width": "3px"
		});
		// console.log(currSelectedCharEl.children());
		var currSelCharNameEl = currSelectedCharEl.children().eq(0),
				currSelCharImage = currSelectedCharEl.children().eq(1).append("<img alt='image'>"),
				currSelCharHealthEl = currSelectedCharEl.children().eq(2);
		console.log(currSelCharImage);
		// 1.2.1 Write conditional so that user can only select a character if there is NO character yet selected.
		// Doesn't allow you to select a character.  Possible conflict in  selecting a character to attack will be handled in another function.
		if ((currSelCharNameEl.text()) && (currSelCharHealthEl.text())) {
			alert("You already selected a character!");
			return;
		} else {
			event.currentTarget.className += " selected";
			// currSelectedCharEl.addClass("selected");
			currSelCharNameEl.text(event.currentTarget.children[0].textContent);
			// console.log(event.currentTarget.children[1].children[0].src);
			console.log(currSelCharImage.find("img").attr("src", event.currentTarget.children[1].children[0].src));
			// currSelCharImage.find("img").attr("src", event.currentTarget.children[1].children[0].src);
			currSelCharHealthEl.text(event.currentTarget.children[2].textContent);
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
			currEnemyCharEl.append("<div class='character-image'><img alt='image'>");
			currEnemyCharEl.append("<div class='character-health'>");

			currEnemyNameEl = currEnemyCharEl.children().eq(0);
			currEnemyImage = currEnemyCharEl.children().eq(1);
			currEnemyHealthEl = currEnemyCharEl.children().eq(2);

			currEnemyNameEl.text(availableCharsAttack[index].childNodes[0].textContent);
			currEnemyImage.find("img").attr("src", availableCharsAttack[index].childNodes[1].childNodes[0].src);
			currEnemyHealthEl.text(availableCharsAttack[index].childNodes[2].textContent);
		});

		// 1.2.3 Create a jQuery event listener for selecting a character to attack (create a defender object) by clicking on the available characters to attack.
		// 1.2.3.1 Create conditional to account for a character already selected to be attacked.
		$(".enemy-character").on("click", function(event) {
			// console.log(event.currentTarget.className);
			var currEnemyCharEl = $("#defender").css({
					"border-style": "solid",
					"border-color": "red",
					"border-width": "3px"
			});
			var currSelEnemyName = event.currentTarget.children[0].textContent,
					currSelEnemyImageUrl = event.currentTarget.children[1].children[0].src,
					currSelEnemyHealth = event.currentTarget.children[2].textContent;
			var currSelEnemyNameEl = currEnemyCharEl.children().eq(0),
					currSelEnemyImageEl = currEnemyCharEl.children().eq(1).append("<img alt='image'>"),
					currSelEnemyHealthEl = currEnemyCharEl.children().eq(2);

					// console.log(currEnemyCharEl);

			if ((currSelEnemyNameEl.text()) && (currSelEnemyHealthEl.text())) {
				alert("You already selected an enemy to attack!");
				return;
			} else {
				event.currentTarget.className += " selected";

				currSelEnemyNameEl.text(currSelEnemyName);
				currSelEnemyImageEl.find("img").attr("src", currSelEnemyImageUrl);
				currSelEnemyHealthEl.text(currSelEnemyHealth);
			};

			// Account for selected enemy object and push into the combatants array.
			for (var t = 0; t < characters.length; t++) {
				if (currSelEnemyName === characters[t].name) {
					combatants.push(characters[t]);
				}
			};
			console.log(combatants);
		});
	};

	// User chooses character to play------------
	$(".character").on("click", chooseCharacter);
	// ------------------------------------------

	$("#attack-button").on("click", function() {
		var updatedCharacters,
				attackerElement = $("#attacker"),
				defenderElement = $("#defender");

		// console.log($("#selected-character").children().eq(0).text());
		if ($("#selected-character").children().eq(0).text() === "") {
			alert("Select your character!");
			return;
		} else {
			// 2.1 For random attacks throughout the game, use setInterval with Math.random and use attack function in anonymous function.
			// Random attacks start as soon as a user attacks an enemy character.
			console.log(combatants[1]);
			var refreshId = setInterval(function() {
				console.log(combatants[1]);
				var randomEnemyEl = $(".enemy-character").eq(Math.floor(Math.random() * $(".enemy-character").length)).children(),
						randomAttackResult,
						updatedCharactersRandomAttack;

				console.log(combatants[1]);
				console.log("You're getting attacked by " + randomEnemyEl.eq(0).text());

				// Get combatants array and empty it so a new attack function with new combatant objects can be used.
				// For 'attack' function arguments, the user (combatant[0]) will always be the second argument...attack(combatants[1], combatants[0])

				combatants.pop();

				console.log(combatants);

				for (var w = 0; w < characters.length; w++) {
					if (randomEnemyEl.eq(0).text() === characters[w].name) {
						combatants.push(characters[w]);
					}
				};

				console.log(combatants);
				randomAttackResult = attack(combatants[1], combatants[0]);

				updatedCharactersRandomAttack = updateCharacterObjects(combatants[1], combatants[0], randomAttackResult);
				console.log(updatedCharactersRandomAttack);

				// console.log(updateCharacterObjects);
				// --------------------DOM updates for random attacks------------------
				$("#attacker-name").text(updatedCharactersRandomAttack.defender.name); // User is defender for random attack

				$("#attacker-health").text(updatedCharactersRandomAttack.defender.health); // User is defender for random attack

				// $("#defender-name").text(updatedCharactersRandomAttack.attacker.name); // Enemy is attacker for random attack
				// $("#defender-health").text(updatedCharactersRandomAttack.attacker.health); // Enemy is attacker for random attack

				// 3.1 Update characters' health in the Character Selection Section in the DOM
				for (var c = 0; c < characters.length; c++) {
					if (updatedCharactersRandomAttack.attacker.name === characters[c].name) {
						var updatedSelCharEl = $(".character").eq(c);
						updatedSelCharEl.children().eq(1).text(updatedCharactersRandomAttack.attacker.health);
					}
				}
				for (var d = 0; d < characters.length; d++) {
					if (updatedCharactersRandomAttack.defender.name === characters[d].name) {
						var updatedSelEnemyEl = $(".character").eq(d);
						updatedSelEnemyEl.children().eq(1).text(updatedCharactersRandomAttack.defender.health);
					}
				}
				// 3.2 Update characters' health in the Enemies Available To Attack Section in the DOM
				for (var e = 0; e < $(".enemy-character").length; e++) {
					if (updatedCharactersRandomAttack.attacker.name === $(".enemy-character").eq(e).children().eq(0).text()) {
						$(".enemy-character").eq(e).children().eq(1).text(updatedCharactersRandomAttack.attacker.health);
					}
				}
				// 3.3 Update user character's health in the 'Your Character' Section in the DOM
				if ($("#attacker").children().eq(0).text() === $("#selected-character").children().eq(0).text()) {
					$("#selected-character").children().eq(1).text(updatedCharactersRandomAttack.defender.health);
				}

				for (var q = 0; q < characters.length; q++) {
					// console.log(characters[b]);
					if (characters[q].health <= 0) {
						$("#action").children().eq(0).css("visibility", "hidden");
						$("#action").children().eq(1).css("visibility", "hidden");
						$("#action").children().eq(2).css("visibility", "visible");
						location.reload();
						alert("Game has ended! Random Attack");
					}
				}
				// --------------------------------------------------------------------
			}, (Math.random() * 10) * 1000);
		}

		// console.log(defenderElement.children().eq(0).text());
		if (defenderElement.children().eq(0).text() === "") {
			alert("Select your enemy!");
			return;
		}

		// console.log(combatants);
		// Handles action of type attack
		attackResult = attack(combatants[0], combatants[1]);
		// console.log(updateCharacterObjects);
		updatedCharacters = updateCharacterObjects(combatants[0], combatants[1], attackResult);

		// 3 Render character info from the results of actions between the characters to the DOM.
		// console.log(updatedCharacters.attacker);
		// console.log(updatedCharacters.defender);

		$("#attacker-name").text(updatedCharacters.attacker.name);
		$("#attacker-health").text(updatedCharacters.attacker.health);

		$("#defender-name").text(updatedCharacters.defender.name);
		$("#defender-health").text(updatedCharacters.defender.health);
		// ----------------------------------------------------------------

		// 3.1 Update characters' health in the Character Selection Section in the DOM
		for (var c = 0; c < characters.length; c++) {
			if (updatedCharacters.attacker.name === characters[c].name) {
				var updatedSelCharEl = $(".character").eq(c);
				updatedSelCharEl.children().eq(1).text(updatedCharacters.attacker.health);
			}
		}
		for (var d = 0; d < characters.length; d++) {
			if (updatedCharacters.defender.name === characters[d].name) {
				var updatedSelEnemyEl = $(".character").eq(d);
				updatedSelEnemyEl.children().eq(1).text(updatedCharacters.defender.health);
			}
		}
		// 3.2 Update characters' health in the Enemies Available To Attack Section in the DOM
		for (var e = 0; e < $(".enemy-character").length; e++) {
			if (updatedCharacters.defender.name === $(".enemy-character").eq(e).children().eq(0).text()) {
				$(".enemy-character").eq(e).children().eq(1).text(updatedCharacters.defender.health);
			}
		}
		// 3.3 Update user character's health in the 'Your Character' Section in the DOM
		if ($("#attacker").children().eq(0).text() === $("#selected-character").children().eq(0).text()) {
			$("#selected-character").children().eq(1).text(updatedCharacters.attacker.health);
		}

		// Unhide 'Choose Different Enemy' button after attack occurs
		$("#choose-enemy-button").css("visibility", "visible");

		// Check characters' health.  If any are less than or equal to zero after an attack, then the game ends and we hide the action buttons but unhide the 'restart' button so the game can be restarted.
		for (var b = 0; b < characters.length; b++) {
			// console.log(characters[b]);
			if (characters[b].health <= 0) {
				$("#action").children().eq(0).css("visibility", "hidden");
				$("#action").children().eq(1).css("visibility", "hidden");
				$("#action").children().eq(2).css("visibility", "visible");
				alert("Game has ended!");
			}
		}
	});
	// ----------------------------------------------------------------

	// 2. Create functions to enable actions between objects.
	function attack(attacker, defender) {
		var attackDifference;
		// console.log(attacker);
		// console.log(defender);
		// If the attacker's attack value is greater than the defender's defense value, get the difference between the two values and decrease the life of the defender using that difference.
		if (attacker.attack > defender.defense) {
			attackDifference = attacker.attack - defender.defense;
			defender.health = defender.health - attackDifference;
			console.log("attacker.attack > defender.defense");
		};
		// If the attacker's attack value is less than the defender's defense value, get the difference between the two values and decrease the life of the attacker using that difference.
		if (attacker.attack < defender.defense) {
			attackDifference = Math.abs(attacker.attack - defender.defense);
			attacker.health = attacker.health - attackDifference;
			console.log("attacker.attack < defender.defense");
		};
		// Need to account for attack === defense (if forceLevel is greater, then character with that forceLeve inflicts their damage)
		if ((attacker.attack === defender.defense) && (attacker.theForceLevel < defender.theForceLevel)) {
			attacker.health = attacker.health - defender.attack;
			console.log("attacker.theForceLevel < defender.theForceLevel");
		} else if ((attacker.attack === defender.defense) && (attacker.theForceLevel > defender.theForceLevel)) {
			defender.health = defender.health - attacker.attack;
			console.log("attacker.theForceLevel > defender.theForceLevel");
		}

		// console.log(attacker.health);
		// console.log(defender.health);
		return {
			attackerHealth: attacker.health,
			defenderHealth: defender.health
		};
	};

	// When 'Restart' button is clicked, reload the page.
	$("#restart-button").on("click", function() {
		location.reload();
	});


	// When user clicks on the 'Choose Different Enemy' button after an attack, create an event listener that clears the Defender section of the DOM.
	$("#choose-enemy-button").on("click", function() {
		combatants.pop();
		$("#defender").children().eq(0).empty();
		$("#defender").children().eq(1).empty();
	});

	// 2.1.1  Declare a variable to handle action type values e.g. attack, steal, scavenge (for 20 days), one-hit-kill...


	// 2.2 Create functions to update objects after actions between objects.
	function updateCharacterObjects(attacker, defender, attackResult) {
		attacker.health = attackResult.attackerHealth;
		defender.health = attackResult.defenderHealth;

		// console.log(attacker);
		// console.log(defender);
		return {
			attacker: attacker,
			defender: defender
		};
	};

});

