// Pseudo code it out

// 1. Create 4 characters with objects.
var jediMaster = {
	name: 'Obi-Wan Kenobi',
	health: 100,
	attack: 5,
	defense: 6,
	theForceLevel: 600
};

var jediKnight = {
	name: 'Luke Skywalker',
	health: 100,
	attack: 7,
	defense: 8,
	theForceLevel: 700
};

var sithLord = {
	name: 'Darth Sidious',
	health: 150,
	attack: 7,
	defense: 8,
	theForceLevel: 800
};

var sithApprentice = {
	name: 'Darth Maul',
	health: 100,
	attack: 5,
	defense: 6,
	theForceLevel: 600
}
// 2. Create functions to enable actions between objects.
function attack(attacker, defender) {
	var attackDifference;
	// If the attacker's attack value is greater than the defender's defense value, get the difference between the two values and decrease the life of the defender using that difference.
	if (attacker.attack > defender.defense) {
		attackDifference = attacker.attack - defender.defense;
		defender.health = defender.health - attackDifference;
	}
	// If the attacker's attack value is less than the defender's defense value, get the difference between the two values and decrease the life of the attacker using that difference.
	if (attacker.attack < defender.defense) {
		attackDifference = Math.abs(attacker.attack - defender.defense);
		attacker.health = attacker.health - attackDifference;
	}
}

attack(jediMaster, sithApprentice);

// 3. Render character info to the DOM.


// 4. Render results of the actions between the characters to the DOM.