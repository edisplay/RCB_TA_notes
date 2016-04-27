function Tamagotchi(name, hungry, sick, age){
	this.name = name;
	this.hungry = false;
	this.sick = true;
	this.age = age;
};

var digitalPetOne = new Tamagotchi("petOne", true, true, )



//how to access values of objects using brackets? (James)

function Human(name, sex, race, age, job){
	this.name = name;
	this.sex = "female";
	this.race = race;
	this.age = function(){
		if(this.age < 16){
			console.log("sorry, this person has to be at least 16 years old");
		};
	}
	this.job = false;
};

var rachelle = new Human("rachelle", "female", "Black", 31, true);
var james = new Human("james", "male", "Asian"; 27, true);
var bob = new Human("bob", "male", "white", 15, true);
