This is a great start. Your onkeyup function is well-structured. 

All of your javascript code should be in the game.js file. There shouldn't be any javascript in the html file. It's possible that your files aren't compiling properly because of this.

You wrote at the top of your game.js file that global variables are bad form. This isn't necessarily true. You don't want to have too many global variables, and before you declare a global variable, you should think about where you need it to run. If it doesn't have to be global, don't make it global. But in general, global variables aren't bad. 

Watch Ahmed's video tonight. It's really helpful to see how we set up our files. Declare all of your global variables at the top, write your functions in the middle, and write the functionality to run the game at the bottom (this is where you'd call all of your functions and start the game).
https://www.youtube.com/watch?v=lm5fWlYSIa4

