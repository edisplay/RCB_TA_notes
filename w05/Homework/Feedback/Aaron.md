Great start. I hope you go back to this and try to finish it.

Put your js in a different file. You can put it in the game.js file that's in the assets/javascript folder. In your html file, you could add a script tag at the end of the file, just before the closing </body> tag. It would look like this: <script src='javascript/game.js'></script>

I like that you made the "questions" object. One thing that I would change is that instead of splitting it up into three arrays of "questions", "choices", and "answers", I would instead have an array called "questions" and within that array you have an object for each question. It would look something like this:

var questions = [{
	question: "What's the third letter of the alphabet?",
	answers: ["a", "b", "c", "d", "e"],
	correctAnswer: "c"
},
{
question: "Who's the current POTUS?",
answers: ["Obama", "Hillary", "Bernie", "Big Bird"],
correctAnswer: "Obama"
},
etc. etc.
]

To answer your question about comparing radio buttons, I think what you're trying to accomplish is determine whether or not a radio button has been checked. Check out this link to determine that: http://www.w3schools.com/jsref/prop_radio_checked.asp
Also look at this: https://api.jquery.com/checked-selector/

Instead of using a different form for each question, the syntax of your html could look something like this:

<div id="quiz">
	<h2>what's the third letter of the alphabet</h2>
	<input type="radio" name="question-1" value="a">
	<input type="radio" name="question-1" value="b">
	<input type="radio" name="question-1" value="c">
</div>

And then you'd determine which one of the input elements has been clicked using the code in the above links. 

$("input[name='question-2']:checked").val() would return the value of the radio that was selected. From there you'd be able to compare the checked radio buttons to the correct answer.

Hopefully this helps.





