# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

look at this file at the root of the repository: 
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide.md)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)

* Yes
	* Expertly navigate the file system and terminal basics
	* Work independently or in a group on complex projects throughout the entire development lifecycle
	* Implement complex logical conditions to meet an objective.
	* Create and consume RESTful API’s utilizing JSON as a data format
	* Write clean code with proper variable names, indentation according to industry best practices

* Kind of
	* Understand the basics of troubleshooting and enhancing legacy code

# Theme
Internal NPM Packages vs External NPM Packages

# INSTRUCTOR MUST COVER!!!
```
19. - 23.
```
or they won't be able to do the homework.

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one being read)

* Students will use an internal Node Package called fs to read, write, etc to files
* Students will use an external Node Package called request to hit the omdbapi and retrieve movie information
* Students will be able to explain the differences between an internal Node Package and an external Node Package

### 1. Student do (10 minutes)

Please slack me the answer when you're done. I will give feedback during the next in class exercise.

If you don't have anything then slack me the problem so I know exactly what to help you with after class.

Slack this out:

"Make a command line Node app that takes in two arguments and returns true if they are both equal to each other"

Bonus:
"Make another command line Node app that takes in two numbers as arguments and returns true if they are both multiples of 7"


### 2. Instructor do (15 minutes)

go over last exercise

### 3. Instructor do (15 minutes)

"Now I'm going to show you how to write to a file"

```	
var fs = require('fs'); //reads and writes files

fs.writeFile("movies.txt", 'Inception, Die Hard', function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("movies.txt was updated!");
}); 
```

"I used an internal NPM package."

"Everyone answer this in your head."

"Did I have to install anything?"

	Answer: No

### 4. Student do (1 minute)

"writeFile is how you write to a file with the fs npm package."

"In your head guess what the blank is."

"_________ is how you read to a file with the fs npm package."

### 5. Instructor do (9 minutes)

go over previous question: 
"_____readFile____ is how you read to a file with the fs npm package."


```
var fs = require('fs'); //reads and writes files

fs.readFile("movies.txt", "utf8", function(error, data) {
	console.log(data);

	var dataArr = data.split(',');

	console.log(dataArr);
	
});
```

###### 50 minutes have gone by

### 6. Partners do (10 minutes)

Make a file called best_things_ever.txt

inside put this in with no extra whitespace or lines:

```
lazy boy recliner, massage, meditation, hot shower, cheese fondue, hot coffee with cashew milk, kitten falling asleep on my lap
```

Make a command line app that reads what's inside best_things_ever.txt and outputs each thing on a new line in the terminal. Do not output the commas.

### 7. Instructor do (5 minutes)

Go over previous exercise

### 8. Student do (10 minutes)

Make a command line app that takes an argument (the name of a text file - could be any text file), reads the contents inside of the file and console.logs that to the terminal screen

Slack me whatever you have by the end of the 10 minutes so I can send feedback to you during the next exercise.

If you don't have anything then slack me the problem so I know exactly what to help you with after class.

### 9. Instructor do (5 minutes)

Go over previous exercise

### 10. Instructor do (5 minutes)

Show students how the program they just wrote has a problem.

"If you run it again, it overwrites the previous content."

### 11. Partners do (2 minutes)

Fill in the blank question:

To write to a file with the internal fs package, you use writeFile
to add to a file with the internal fs package, you use _________

answer: appendFile

### 12. Instructor do (5 minutes)

Show how to append to a file

append.js
```
var fs = require('fs'); //reads and writes files

fs.appendFile("log.txt", process.argv[2], function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("log.txt was updated!");
}); 

```


### 13. Partners do (3 minutes)

what will happen if I run this command?

```
node append.js
```

### 14. Partners do (3 minutes)

what will happen if I run this command?

```
node append.js 'stuff'
```

### 15. Partners do (3 minutes)

what will happen if I run this command?

```
node append.js 'stuff' 'more stuff'
```


###### around 105 minutes gone by - break 15 minutes


### 16. Instructor do (5 minutes)

Walk around during the previous exercise and observe which groups are done. Ask one of them if they'd like to present.

Have a team present their solution. Have them slack it to you. Run their code. Have them explain each line.

### 17. Partners do (15 minutes)

- "Raise your hand if you feel like you really get this right now."

* Use option 2 pairing strategy from above * 

Create bank.txt

add this in:
```
1, 2.33, 4.23, -2
```

Make a command line node app called bank.js that will do the following:

this outputs the total you have in your bank account
```
node bank.js total
```

this deposits 4.4 in so bank.txt gets 4.4 appended to the list
```
node bank.js deposit 4.4
```

this withdraws 4.4 from the bank.txt file
```
node bank.js withdraw 3.2
```

Bonus:

this withdraws .25 from the bank.txt file, but gives a 10% chance of a free deposit of 2
```
node bank.js lotto
```

### 18. Instructor do (10 minutes)

Walk around during the previous exercise and observe which groups are done. Ask one of them if they'd like to present.

Have a team present their solution. Have them slack their code to you. Copy and paste their code for them and have the terminal open ready for them to run it.

One presenter talks about the normal solution.
One presenter talks about the bonus solution.

###### 135 minutes have passed (30 minutes left)

### 19. Instructor do (5 minutes)

"remember the site https://www.npmjs.com/"

search request. Cold call a student to read what it does from the website.

You say: "Basically, it let's you hit a URL or an API with a node sript - it's essentially an AJAX call in a node script."

copy and paste the code verbatim into a new node file. Don't do npm install request. Don't run it yet.

```
var request = require('request');
request('http://www.rutgers.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
});
```

### 20. Partners do (10 minutes)
"What happened? Why didn't it work? Explain to your partners."


...


"I used an external NPM package."

"Everyone answer this in your head. Did I have to install anything?"
	Answer: Yes

"Explain to your partners what examples of internal and external packages are."

"Explain to your partners what the differences are between internal and external packages."

### 21. Instructor do (5 minutes)

I didn't run what command _______ (ask someone to fill in the blank).

"Correct, I didn't run ```npm install request``` in the folder that I'm using the request npm package in. I need to install this before I use it. It's different than the fs package because this isn't included with node. I have to install it."

run this in the folder of your app
```
npm install request 
```

run the node script now

* Point out how it creates a node_modules folder that has the code for the npm package inside of it. Please explore what the code looks like.

### 22. Instructor do (5 minutes)

- go to http://www.omdbapi.com/ 
- click on examples
- type in remember the titans
- copy the url that was created and paste it into a new tab
- show that the JSON data lives somewhere
- go into the previous script you wrote 
- copy the JSON url and replace the url with it
- run the script

- boom

in the script change the inside of the callback function like so:

```
var request = require('request');
request('http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&r=json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(JSON.parse(body)["imdbRating"])
  }
});
```

### 23. Partners do (5 minutes)

Explain to your partners. What's going to happen when I run this file?

# Copyright
Coding Boot Camp (C) 2015. All Rights Reserved.
