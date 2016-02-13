# Week 4 Assignment

### Objectives
* Create a fun and interactive game in the browser
* Dynamically update the html with jQuery
* Style various HTML elements with CSS.
* Push your code to Github.
* Deploy your code from Github to Heroku.

### Remember

You will be fully capable of doing this homework by the end of Saturday's class.

### Instructions
1. Create a new folder called `week-4-game`.
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
4. Choose what game you want to make. The CrystalsCollector game is easier than making the Starwars RPG.

### Option One: CrystalsCollector Game (easier than Starwars RPG) - you get a max of 9/10

CrystalsCollector! 

Watch the demo

* Is a guessing game using numbers, similar to the game hangman but instead of letters the player will guess with numbers. There will be four crystals displayed as buttons on the page. 
* The player will be given a random number at the start of the game.
* When the player clicks on a crystal it will add a specific amount of points to the player's total score.
* The player can win the game by matching their total score to random number, the player loses the game if their total score goes above the random number.
* The value of each crystal is hidden from the player until they click on it.
* If the player successfully match their total score to the random number they get 1 wins., if the player's total score is above the random number the player get 1 lost, either way the game restarts.
* When the game is restarted, the player will get a new random number and all the crystals will now have 4 different hidden value, and the player's total score is reset to 0.

##### Game design note:
###### Each random number to be guess to should be between 19 - 120
###### Each crystal should have a random hidden value of 1 - 12

### Option Two: StarWars RPG Game - you can get 10/10

Watch the demo

* Is a combat based RPG Game, player will fight with a character of their choice against the computer.
* At the start of the game the player get to pick a character of their choice by clicking on the picture of the character, once pick that character will be the player's character for the rest of the game.
* Every character's that's not picked is now an enemy character that the player must defeat.
* Right after the player picks a character and all leftover character becomes the enemy, the player will now pick who they will fight against by clicking on the enemey's picture
* Once the player picks and enemy to fight, that enemy is moved to the defender area to do battle with the player.
* The player will now be able to hit the attack button to figth against the defender(enemy)
* Whenever the attack button is hit the player character is going to do attack the defender(enemy) character once. The defender(enemy) character will now counter attack back on the player character once.
* When the player character "attacks" the defender(enemy) will lose hp displayed at the bottom of the defender(enemy) picture.
* When the defender(enemy) "counter attacks" the player character will lose hp displayed at the bottom of the players character's picture.
* Keep hitting the attack to try and defeat the defender
* When the defender(enemy) hp is reduced to 0 or below they are removed from the defender area, the player character maybe now pick a new enmey to move to defender area to battle.
* The player wins the game by defeating all enemy character, and lose the game the game if the player character's hp is 0 or below.

##### Game design note:
###### Each character in the game have 3 attributes: `hp points`, `attack power`, and `counter attack power`
###### The player's character is adds his `attack power` to his base attack power whenever he attacks, if the base is 6 every attack after is 12, 18, 24, 30 etc...
###### The enemy character will can only `counter attack power` and their `counter attack power` never increase.
###### Each of the characters in the game have a different starting `hp points`, `attack power`, and `counter attack power`
###### None of the characters in the game can heal or recover hp points, so the point of the game is to pick a character and fight enemy that has low `counter attack power` first and build up your own `attack power` before you lose all your `hp points`
###### Depending on game play you can win or lose with any of the character in the game

# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.