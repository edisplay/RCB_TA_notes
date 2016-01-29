### 1. Students do (15 minutes)

```
CREATE DATABASE bears_db;
USE bears_db;

CREATE TABLE happy_bears (
id int AUTO_INCREMENT,
name varchar(30) NOT NULL,
favorite_food varchar(30) NOT NULL,
personality  varchar(30) NOT NULL,
PRIMARY KEY(id)
); 

INSERT INTO happy_bears (name, favorite_food, personality) VALUES ('Nom Nom','Vanity','Mean');
```

App setup:
```
1.create App Dir named 'bears'
2.npm init
4.create 'index.js' file

Database setup:
1.npm install mysql
2.mysql config
```

If you can't get access to the db, you might have installed mySQL with a port you need to put it
```
var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 8000,
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'bears_db'
});
connection.query('SELECT * FROM happy_bears', function(err, res) {
    console.log("Okay we got ", res);
});

```

Connect to movies db, find all bears data
```
var showBears = function() {
	connection.query('SELECT * FROM happy_bears', function(err, res) {
	    console.log("Okay we got ", res);
	});
}
//showBears();
```

Run app
```
node index.js
```

### 4. Partners do (20 minutes)

| name  | favorite_food  | personality |
|-------|----------------|-------------|
|Grizzly|Pizza|'Out going'|
|Panda|'Hot Dog'|Shy|
|'Ice Bear'|'Fish'|Chill|

```
var bearData = [
	{name: 'Grizzly', favorite_food: 'Pizza', personality: 'Out going' },
	{name: 'Panda', favorite_food: 'Hot Dog', personality: 'Shy' },
	{name: 'Ice Bear', favorite_food: 'Fish', personality: 'Chill' }
];
```

```
var bearData = [
	{name: 'Grizzly', favorite_food: 'Pizza', personality: 'Out going' },
	{name: 'Panda', favorite_food: 'Hot Dog', personality: 'Shy' },
	{name: 'Ice Bear', favorite_food: 'Fish', personality: 'Chill' }
];

var addBears = function() {
	for (var i = 0; i < 3; i++) {
		connection.query('INSERT INTO happy_bears (name,favorite_food,personality) VALUES (?,?,?)', [bearsData[i].name, bearsData[i].favorite_food, bearsData[i].personality], function(err, result) {
		if (err) throw err;
		});
	};
	console.log("insert finished~!")
};
//addBears();

var updateBear = function() {
	connection.query('UPDATE happy_bears SET favorite_food = ? WHERE id = 3', ['bamboo'], function(err, result) {
	if (err) throw err;
	});	
	console.log("update finished~!")
};
//updateBear();

var deleteBear = function() {
	connection.query('DELETE FROM happy_bears WHERE id=?', [1], function(err, result) {
	if (err) throw err;
	});	
	console.log("delete finished~!")
};
//deleteBear();
```

--------- --------- ---------
### 12.3.2 Exercise 2: (Simple Prompt)
```
npm install prompt
```
Create 3 function that will create the FBI report 
```
//use nodemon

var prompt = require('prompt');
prompt.start();
prompt.message = '';

//example basic prompt
/*
prompt.get(['Say_anything'], function(err, result) {
	if (result.Say_anything == "Marco") {
		console.log("Polo!!!")
	} else {
		console.log("You said (" + result.Say_anything + ")" + " or watever...");
	}
});
*/

/*
Example report:
if 8 or more answers are "NOT SURE" the report is Very Unreliable
if 5 or more answers are "NOT SURE" the report is Unreliable
if only 2 or less answer are "NOT SURE" the report is Complete
*/

//Console should display this after all questons are answered
/*
FBI aliens sighitng report:
Possible sighting info:
Eye witness name is NOT SURE NOT SURE at age: 89
According to eye witness sighting happened sometime around 6:00PM near 6:00PM
Another possible witness include a person by the name: NOT SURE
The sighting is described as: Amazing and the witness's initial thoughts are: NOT SURE
This is the witness: 18th encounter, current drug use habit is NOT SURE

Report conclusion: Unreliable
*/

var answerCount = 0;
var report = "FBI aliens sighitng report:" + '\n' + "Possible sighting info: ";
var conculsion = "";

var makeReport = function() {
	console.log("Hi,I'm from the FBI (X-files Division) I just wanted to ask you some questions.");
	console.log("Please answer the following questions as best you can, but if can't answer the question please say NOT SURE.");
	console.log("What is...");
	prompt.get(['your_first_name','your_last_name','your_age','time_of_sighting','location_of_sighting','a_name_of_another_witness','description_of_sighting','your_initial_thoughts','number_of_previous_encounters','current_drug_use_habit'], function(err, result) {
		
		report = '\n' + report + '\n' + 'Eye witness name is '+ result.your_first_name + " " +  result.your_last_name + ' at age: ' + result.your_age + '\n' + 'According to eye witness sighting happened sometime around ' +  result.time_of_sighting + ' near ' +  result.time_of_sighting + '\n' + 'Another possible witness include a person by the name: ' + result.a_name_of_another_witness + '\n' + 'The sighting is described as: ' + result.description_of_sighting + " and the witness's initial thoughts are: " + result.your_initial_thoughts + '\n' + "This is the witness: " + result.number_of_previous_encounters + "th encounter, current drug use habit is " + result.current_drug_use_habit + '\n';
		
		var checkAnswers = [result.your_first_name, result.your_last_name, result.your_age, result.time_of_sighting,result.a_name_of_another_witness, result.description_of_sighting, result.a_name_of_another_witness, result.your_initial_thoughts, result.number_of_previous_encounters, result.current_drug_use_habit];

		for (var a = 0; a < checkAnswers.length; a++) {
			if (checkAnswers[a] == 'NOT SURE') {
				answerCount++;
			};
		};

		console.log(report);
		if (answerCount >= 8) {
			conculsion = "Very Unreliable";
		}else if (answerCount >= 5) {
			conculsion = "Unreliable";
		}else if (answerCount <= 2) {
			conculsion = "Complete";
		};

		console.log("Report conclusion: " + conculsion);
	});
};
//makeReport();
```

--------- --------- ---------
### 12.3.3 Exercise 3: (Nested Prompt)

```
//use node index.js

/*
In the jukebox here are the artist that we have and the songs we carry

Lorde: Team, Yellow Flicker Beat

	If user choose Team jukebox will play:
		"~ Wait'til you're announced
		We've not yet lost all our graces
		The hounds will stay in chains ~""

	If user choose Team jukebox will play:
		"~ I’m a princess cut from marble,
		smoother than a storm.
		And the scars that mark my body, they’re silver and gold ~"
		Once a song is played will quit the jukebox.

KanyeWest: Power, Stronger

	If user choose Power jukebox will play:
		~ I'm living' in that 21st century
		Doing something mean to it
		Do it better than anybody
		you ever seen do it ~

	If user choose Stronger jukebox will play:
		~ N-now th-that that don't kill me
		Can only make me stronger
		I need you to hurry up now ~

BONUS: After a song is played don't quit the jukebox, the jukebox will now go back to menu displaying the chooses and the take user input.

*/

var jukebox = {
	artistMenu : function() {
		console.log("Please select who you want to listen to...");
		console.log(" ");
		console.log("Enter (L): ------>", "Pick songs from Lorde!");
		console.log(" ");
		console.log("Enter (K): ------>", "Pick songs from KanyeWest!");
		console.log(" ");
		console.log("Enter (Q): ------>", "Quit and exit jukebox!");
		console.log(" ");
	},
	pickArtist : function(input_scope) {
		//bonus 
		/*		
		var self;
		if (!input_scope) {
			self = this;
		}else{
			self = input_scope;
		};
		*/
		var self = this;
		prompt.get('artist_initial', function(err, result) {
			if (result.artist_initial == 'L') {
				self.LordeSongs();
				self.LordeChoices(self);
			}else if (result.artist_initial == 'K') {
				self.KanyeSongs();
				self.KanyeChoices(self);
			}else if (result.artist_initial == 'Q') {
				self.exit();
			};
		});
	},
	LordeSongs : function() {
		console.log("Please choose which song you would like to listen to...");
		console.log(" ");
		console.log("Enter (T): ------>", "For the song Team!");
		console.log(" ");
		console.log("Enter (Y): ------>", "For the song Yellow Flicker Beat!");
		console.log(" ");
	},
	KanyeSongs : function() {
		console.log("Please choose which song you would like to listen to...");
		console.log(" ");
		console.log("Enter (P): ------>", "For the song Power!");
		console.log(" ");
		console.log("Enter (S): ------>", "For the song Stronger!");
		console.log(" ");
	},
	LordeChoices : function(input_scope) {
		var currentScope = input_scope;
		prompt.get(['--->','song_choice'], function(err, result) {
			if (result.song_choice == "T") {
				console.log("\n" + "~ Wait'til you're announced" + "\n" + "We've not yet lost all our graces" + "\n" + "The hounds will stay in chains ~" + "\n");
				currentScope.exit();
				// bonus			
				// currentScope.artistMenu();
				// currentScope.pickArtist(currentScope);
			}else if (result.song_choice == "Y") {
				console.log("\n" + "~ I’m a princess cut from marble," + "\n" + "smoother than a storm." + "\n" + "And the scars that mark my body, they’re silver and gold ~" + "\n")
			}else{
				console.log("Sorry didn't get that come again?");
				currentScope.LordeChoices(currentScope);
			}
		});
	},
	KanyeChoices : function(input_scope) {
		var currentScope = input_scope;
		prompt.get(['--->','song_choice'], function(err, result) {
			if (result.song_choice == "P") {
				console.log("\n" + "~ I'm living' in that 21st century" + "\n" + "Doing something mean to it" + "\n" + "Do it better than anybody" + "\n" + "you ever seen do it ~" + "\n");
				currentScope.exit();
			}else if (result.song_choice == "S") {
				console.log("\n" + "~ N-now th-that that don't kill me" + "\n" + "Can only make me stronger" + "\n" + "I need you to hurry up now ~" + "\n");
			}else{
				console.log("Sorry didn't get that come again?");
				currentScope.LordeChoices(currentScope);
			}
		});
	},
	start : function() {
		console.log("Welcome to jukebox~!");
		this.artistMenu();
		this.pickArtist();
	},
	exit: function() {
		console.log("Thank you for using jukebox, good bye~!");
		process.exit();
	}
};

jukebox.start();
```

--------- --------- ---------
### 12.3.4 Exercise 4: (CRUD + Node + Prompt + MySQL)

/*
Create the functions of C.R.U.D in Node using a mySQL db

You are creating an App for a climbing gym:
There is a prompt form that let's users fillout info.
You can calculate what kind of membership they are buying, how many sessions.
Once the app is lanuched it can take member sign ins.
Adding new members.
Update existing memebers info/sessions.
Remove memebers.
Do earning calculations.

Create a new db in mySQL:

* Create a table with PK(id), name, total session, session used, last session date.


Create in a new node app:

* 

Bonus: Create a function that checks total session against session used if it's both 30, delete the memeber
*/
