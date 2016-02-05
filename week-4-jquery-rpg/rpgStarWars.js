// Pseudo code it out

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
	$("#characters").append("<div class='character'>");
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

// var attackerElement = $("#attacker");
// attackerElement.append("<div id='attacker-name'>");
// attackerElement.append("<div id='attacker-health'>");
// $("#attacker-name").text(jediMaster.name);
// $("#attacker-health").text(jediMaster.health);

// var defenderElement = $("#defender");
// defenderElement.append("<div id='defender-name'>");
// defenderElement.append("<div id='defender-health'>");
// $("#defender-name").text(sithApprentice.name);
// $("#defender-health").text(sithApprentice.health);

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
// console.log(jediMaster);
// console.log(sithApprentice);

// ---Currently, to change characters, just change the two arguments' indexes
var attackResult = attack(characters[0], characters[3]); //---UNCOMMENT when ready to render result of attack

// 2.1 Create functions to update objects after actions between objects.

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

console.log(updatedCharacters);

// 3.1 Render character info from the results of actions between the characters to the DOM.