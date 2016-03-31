Hey Dan, this is a great start. Here are a few tips: 

to generate a random number for each crystal, look at this link. It explains each line of the code: 
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

this is the easiest way to generate a random number:
	Math.floor(Math.random() * (12 - 1)) + 1 
		"12" is the maximum number (exclusive), "1" is the minimum number (inclusive) 

if you use the same formula for all four crystals, it'll be easier to generate four random numbers everytime you start a new game

You'd also use the same formula to generate a random number for "Total score" column. Of course, you'd have to change the formula a bit to generate a number between 1 and 120. 

Once you have that logic working, you could move on to adding to the total score every time a gem is clicked. 

That is the framework for the assignment. 



