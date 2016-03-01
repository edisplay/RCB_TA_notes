Awesome job!

Put your javascript code in a .js file. And link to it using a script tag in your html file. It should be at the bottom of the html file (so that it loads last, after your html and css have loaded) and should look like this:
<script type="text/javascript" href="hangman.js"></script>

watch your identations. Tab/indent one space to keep track of nested functions/if statements/etc. 

Now that you have the basic structure down, work on making this code a bit more DRY (don't repeat yourself).Instead of typing out each letter of the word in your wordBank array, use for loops to access the letter in the word. Something like this would work:

var wordBank = ["pancakes", "waffles", "muffins", etc. etc];

for (var i=0; i<wordBank.length; i++){
	for (var j=0; j<wordBank[i].length; j++){
		do something with each letter in each word
	}
}  

I'm really impressed with your work ethic and your approach to the assignments. Text me anytime for help. 