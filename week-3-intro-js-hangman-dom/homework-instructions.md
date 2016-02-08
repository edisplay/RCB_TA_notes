# Week 1 Assignment

## That Portfolio Though...

### Objectives
* Create a fun and interactive hangman game (or psychic game) in the browser
* Dynamically update the html with JavaScript
* Style various HTML elements with CSS.
* Push your code to Github.
* Deploy your code from Github to Heroku.

### Remember

You will be fully capable of doing this homework by the end of Saturday's class.

### Instructions
1. Create a new folder called `week-3-game`.
2. Inside the Portfolio folder, create the following: 
  + Make files like this called `index.html`, `composer.json`, and `index.php`
  + put in the appropriate content in the composer.json and index.php files to be able to deploy your game to heroku
  + Make a folder called `assets`.
    + Inside the assets folder make two additional folders called `javascript`, `css` and `images`.
      + Inside the `javascript` folder, make a file called `game.js`.
      + Inside the css folder make a file called `style.css`.
      + Inside the css folder make a file called `reset.css` and include the code found from the Meyerweb reset located [here](http://meyerweb.com/eric/tools/css/reset/reset.css)
      + Inside the images folder you can save the images you plan on using.
3. Push up the above changes to Github (Make sure to `git add .` and `git commit -m "initial site files"` then type `git push origin master` to push your changes to your Github repo.
4. Choose what game you want to make. The psychic game is easier than making the hangman game.

### Option One: Psychic Game (easier than hangman)

The Psychic Game

0. Watch the demo

1. put the following on your page and make the game work.

Guess what letter I'm thinking of

Wins: # of times the user has guessed the letter correctly

Losses: # of times the user has failed to guess the letter correctly after exhausting all guesses

Guesses Left: # of guesses left. This will update

Your Guesses so far: # of times the user has failed to guess the letter correctly after exhausting all guesses


### Option Two: Hangman Game

0. Watch the demo
1. choose a theme for your game. 
  * In the example, we used an 80s theme. All the words are famous bands or musicians from the 80s. Please choose whatever theme you'd like.
3. use key events to get the letter that the user typed
4. organize your game code inside of an object, except the key events to get the letter tha
4. Display the following on the page:

Press any key to get started!

Wins: # of times user guessed the word correctly

If the word is madonna then display it initially like this:
_ _ _ _ _ _ _

as the user guesses the correct letter, make the word display like this:
mado _  _ a

Number of Guesses Remaining: # of guesses remaining for the user

Letters Already Guessed: letters the user has guessed.

5. The game should automatically choose another word and make the user play it.



##### Bonuses

1. play a sound or song when the user guesses the word correctly - in our case it was a song by the artist
2. style your game so that it looks like your theme.

# Copyright
Coding Boot Camp (C) 2015. All Rights Reserved.