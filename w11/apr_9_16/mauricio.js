// =============== BASIC FOR LOOP =======================

// For Loop

// =============== ARRAYS =======================

// Create an Array of Strings
	//holds elements. a list. integers, strings, booleans, variables, arrays, objects
	var sports = ["hockey", "football", "soccer"];
	
	//display hockey in the console
		//console.log(sports[0]);

	// For Loop
	// Loop through Array and Log the output  
		for(i = 0; i < sports.length; i++){
			console.log(sports[i]);
		};

// =============== OBJECTS =======================
//An object is an associative array that holds key/value pairs .

// Create a Javascript Object
	var bob = {
		first_name: "bob",
		last_name: "marshall",
		age: 40
	};		

	var rachelle = {
		first_name: "rachelle",
		last_name: "faroul",
		age: 31
	};

// ================ CONSTRUCTOR ==========================

// Create a Constructor for making "students". Then create a student.
	
	//PART 1: this is your "student" constructor	
	var Student = function(first_name, last_name, age) {
		this.first_name = first_name,
		this.last_name = last_name,
		this.age = age
	};

	//PART 2: this is how you create students using your "student" constructor
	var rachelle = new Student("rachelle", "faroul", 31);
	var mauricio = new Student("mauricio", "ramos", 28);
	var danny = new Student("danny", "ramos", 25);
	var paul = new Student("paul", "delacruz", 40);
	var kim = new Student("kim", "palin", 28);
	console.log(rachelle); //to see what the "rachelle" object looks like

// Console log any of the properties in that object
	console.log(rachelle.last_name);

// Create an Array of 5 Objects 
	var people = [rachelle, mauricio, danny, paul, kim];
	
// Console log first and last name for every one of the five objects
	//console.log( people[0].first_name + " " + people[0].last_name );
	
	for (var i = 0; i < people.length; i++){
		console.log(people[i].first_name + " " + people[i].last_name);
	};


// we didn't get through these but you can work on these on your own

// =============== FUNCTIONS =======================

// Create a function that takes two numbers and divides the first number by the second. Then call that function

// Create a function that takes in an array of numbers and then loops through the array and prints out numbers

// =============== AJAX (OPTIONAL) ============================

// If you feel weak on AJAX... Then create an HTML file that performs an AJAX call to the OMDB database. Then prints all of the information about a movie. 




