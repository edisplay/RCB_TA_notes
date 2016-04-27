to make sure that your keys aren't accessible to everyone who goes to your github, put the names of any files that you don't want to show up in github inside of your .gitignore file. so "key.js" should be inside of your .gitignore file.

don't put your Twitter keys in your liri.js file and then push them up to github. anyone can get them and do stupid stuff with your info. Look at the solution for more detail on how to hide your Twitter keys.

Require all of your node modules at the top of the file. It's easier for someone who clones your repo or see which modules they should have in their package.json. You also want to be sure that if you need to use the variable elsewhere, that it's accessible everywhere (AKA global). Did you install and save them to your package.json file using the "npm install --save module_name" prompt in terminal? Don't forget the "--save". If you do, those modules won't be saved to your package.json when the repo is cloned by someone else.

I never got your code to run on my machine. Maybe push to github again? 

C


