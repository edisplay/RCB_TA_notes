### 1. Partners do (15 minutes)

Part One
1. Explain the below code to your partner
2. Why did we have a \ in what\'s your # below?
3. Why did we start the first for loop with i=1 instead of i=0?
4. Why did we start the second for loop with i=0 instead of i=1?

Part Two
add a break point inside of both for loops, execute the code and evertime the browser stops, check the value of 

```
<!DOCTYPE html>
<html>
<head>
	<title>exercise one</title>
</head>
<body>
<script type="text/javascript">
//initialize array
var favTVshows = [];

//for loop 
for (var i=1; i<4; i++){
	favTVshows.push(prompt('what\'s your #' + i + ' favorite tv show?'));
}

for(var i=0; i < favTVshows.length; i++){
	alert(favTVshows[i]);
}

</script>
</body>
</html>


```

### 2. Everyone do (15 minutes)

* *go over it with the class - call on people*

Solutions:

	1. Why did we start the first for loop with i=1 instead of i=0?

		Answer: if we started it off at i=1, then it would say:

		what's your #0 favorite tv show?'

		instead of 

		what's your #1 favorite tv show?'

	2. Why did we start the second for loop with i=0 instead of i=1?

		Answer: otherwise we would skip alerting the first value of the array

### 2. Instructor do (5 minutes)

* *demo 3.3-in-class-exercises/demo-1.html*

* *then put up the code on the screen* 

### 3. Partners do (5 minutes)
* *ask the class to discuss with their partners what's wrong with the above code*

### 4. Everyone Do (5 minutes)

* *call on students until you get the answer you want*

> the problem with the code is that it's redundant.

> the code is not DRY - don't repeat yourself 

> it works and it's fine for a rough draft, but it's not the final product

> we need a way of reduce the repetitiveness

> and we do that with functions

### 5. Instructor Do (20 minutes)

* *show the code in 3.3-in-class-exercises/demo-2.html*

* *demo the file in the browser to show students that it works just like demo-1.html*

> this is how I would reduce the complexities with a function

* *explain the following*
	
	* consoleInside is the function name
	* arr is an argument, it gets set equal to whatever you pass into the function
	* on line 21 arr will be equal to brands
	* on line 22 arr will be equal to heroes	

* *go to view -> layout -> columns: 2*
* *show demo-1.html and demo-2.html side by side*

> demo-1 and demo-2 do the same thing

> you're not supposed to think to use functions right away. 

> you're supposed to get it done, and then if you spot redundancies then you use functions to make your code DRY - don't repeat yourself.

### 6. Partners Do 5 minutes

* *keep both files open from the previous exercise on the board*

> explain the code in both files on the board to your partners - go you have 5 minutes


### 7. Everyone Do 5 minutes

* *call on a student to go over some of the code*

* *call on another student to go over some of the code*

* *call on another student to go over some of the code*

### 8. Student Do 20 minutes

1. write a function that takes in 3 arguments, adds them together and returns the value
2. write a function that takes in 3 arguments, multiples them and returns the value
3. write a function that takes in 3 arguments, checks if they are all strings, and if they are then alert: all are strings!
4. write a function that takes in 3 arguments, adds them together and returns the value
5. write a function that takes in 3 arguments, adds them together and returns the value

### 9. Everyone Do 15 minutes

go over it with the class

##### Break for 40 minutes - after break it is now 12:30 pm - 150 minutes have went by - you have 90 minutes left

### Instructor do 10 minutes

Intro to data structures in JS (when to use an array and when to use an object)

> arrays are lists. They're good when your code expects to loop over the entire list.

> arrays are bad when you need to get to a specific part of the list 

> this is an example of an array being used well:

```
var nums = [1, 8, 2, 3, 1, 1, 6, 6, 6];

for(var i = 0; i < nums.length; i++){
	if (num[i] > 2){
		console.log('number is greater than 2');
	}else{
		console.log('number is not greater than 2');
	}	
}

```

### Partners do 5 minutes

* *throw the previous code on the board*

> explain the above code to your partner and why the array is being used affectively

### Everyone do 5 minutes

* *call on a student to explain the code above*

* *call on a student to explain why the array is being used affectively*

### Instructor Do 5 minutes

> but what about with this example where we describe joanOfArc and how awesome she is.

* *throw this up on the board*

```
var joanOfArcInfoParts = ['Real Name', 'Grew Up Where', 'known for', 'scars', 'symbolism'];

var joanOfArcInfoValues = ['Jehanne la Pucelle', 'Domremy, a village in northeastern France', 'Peasant girl, daughter of a farmer, who rose to become Commander of the French army. She led the charge against England. Strategized brilliant military strategies.', 'Took an arrow to the shoulder and a crossbow bolt to the thigh while trying to liberate Paris.', 'stands for French unity and nationalism'];
```

### Partners Do 5 minutes

> How the hell do I relate these two arrays together??????

> If I give you 'Grew Up Where', how would I get 'Domremy, a village in northeastern France'? 

* *point to the parts of the arrays you want to relate together.*

### Instructor Do 15 minutes

> Trick question - even if you guys figured out a way to relate both arrays together, you should not do that. And I will go over how to do it. But first, i'll show you the better way. The way it's supposed to be!

```
var joan = {
	'Real Name': 'Jehanne la Pucelle',
	'Grew Up Where': 'Domremy, a village in northeastern France',
	'known for': 'Peasant girl, daughter of a farmer, who rose to become Commander of the French army. She led the charge against England. Strategized brilliant military strategies.',
	'scars': 'Took an arrow to the shoulder and a crossbow bolt to the thigh while trying to liberate Paris.',
	'symbolism': 'stands for French unity and nationalism' 
};
```

you do it like this 

joan['Real Name']
joan['Grew Up Where']

joan.symbolism
joan.scars

> this won't work
`joan.Real Name`

> you need to do this, because of the spaces:
`joan['Real Name']`

> Here's how I'd have to do it with the array:

* *call on 3 students and ask: "how much does this suck compared to object"*

```
//with an array
joanOfArcInfoValues[joanOfArcInfoParts.indexOf('Real Name')]

//with an object
joan['Real Name']
```

### Partners Do 15 minutes

* *slack this out*

1. explain every line of the below object
2. DO NOT TOUCH THE INSIDE of the brock object for the next steps.
1. Outside the brock object, call the injuredStopLifting key and change doYouLift to false.
2. Outside the brock object, call the upProteinIntake key multiple times and up brock's protein intake to 245 and alert gramsOfproteinIntake
3. Outside the brock object, call the sayAllCatchPhrases key to get brock to say all his catch phrases
4. Brock sent you a greeting card. Brock has lost his status as a bro. Outside the brock object, Change brock's bro key to false. Alert the value of the bro key to the screen.

```
var brock = {
	bro : true,
	doYouLift : true,
	gramsOfproteinIntake : 240,
	name : 'Brock',
	catchPhraseOne : "I'm so broke right now because I just bought those new subwoofers.",
	catchPhraseTwo : "You're taking my picture? Hang on. Let me put on my sunglasses.",
	catchPhraseThree : "My fantasy football team is crushing it.",
	catchPhraseFour : "You’re hot. What’s your name?",
	sayAllCatchPhrases : function(){
		alert(this.catchPhraseOne);
		alert(this.catchPhraseTwo);
		alert(this.catchPhraseThree);
		alert(this.catchPhraseFour);
	},
	upProteinIntake : function(){
		this.gramsOfproteinIntake++;
	},
	injuredStopLifting : function(){
		this.doYouLift = false;
	}
}
```

### Everyone Do 15 minutes

* *go over the previous exercise*

* *run this code in console and show how this is the object*

```
var brock = {
	bro : true,
	doYouLift : true,
	gramsOfproteinIntake : 240,
	name : 'Brock',
	catchPhraseOne : "I'm so broke right now because I just bought those new subwoofers.",
	catchPhraseTwo : "You're taking my picture? Hang on. Let me put on my sunglasses.",
	catchPhraseThree : "My fantasy football team is crushing it.",
	catchPhraseFour : "You’re hot. What’s your name?",
	sayAllCatchPhrases : function(){
		alert(this.catchPhraseOne);
		alert(this.catchPhraseTwo);
		alert(this.catchPhraseThree);
		alert(this.catchPhraseFour);
	},
	upProteinIntake : function(){
		this.gramsOfproteinIntake++;
	},
	injuredStopLifting : function(){
		debugger;
		this.doYouLift = false;
	}
}
```

##### 215 minutes have gone by including break - you have 25 minutes left

### Instructor Do 5 minutes

* *demonstrate the psychic game in the browser*
* *demonstrate the hangman game in the browser*

### Partners Do 20 minutes
write the psuedo code for the psychic game

bonus:
write the pseudo code for the hangman game

### Partners Do 10 minutes
explain line by line what's going on, study the following code, watch how it works with your partners and use break points

```
var game = {
	counter : 0,
	incrementCounter : function(){
		this.counter++;
	},


}
```


# Copyright
Coding Boot Camp (C) 2015. All Rights Reserved.