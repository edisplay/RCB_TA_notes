# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

Look at this file at the root of the repository:
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)

* Expertly navigate the file system and terminal basics
* Work independently or in a group on complex projects throughout the entire development lifecycle
* Implement complex logical conditions to meet an objective.


# Theme
Review + Git Branching

# INSTRUCTOR MUST COVER!!!

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one is read)

- Students will push to github
- Students will push to heroku
- Students will use branches to collaborate together on a github repository

### 1. Instructor Do (15 minutes)

* *Make a new repository, and deploy it to heroku. Demo the process.*

* *Copy and paste the process to the students.*



* Heroku setup (steps as of 1/30/16)

1. Go to the folder you want to host. 

2. Make sure that you have the following files in your folder:

composer.json that only has this inside of it:
```
{}
```

index.php that only has this inside of it (please remove the angle brackets inside the quotes)

```
<?php include_once("<filename of your html file with the extension>"); ?>
```

3. Make sure you push up everything to your github repository. Make sure the only files you are pushing up are the html, css, images, composer.json and index.php files. No extra files!

4. Check if you have heroku

run this command in your terminal

`heroku`

5. download the heroku toolbelt and install it

https://toolbelt.heroku.com/

6. in terminal run this command and login with your heroku credentials

`heroku login`

7. `git remote -v`

notice the remotes

8. `heroku create`

9. `git remote -v`

notice the remotes now

10. Next run the command `git add -A`.  This is to add the index.php file and the composer.json file to git.

11. Next run the command `git commit -m "added heroku components"`. 

12. `git push heroku master`

push up your master branch from your github repository to heroku

you'll see the url to your heroku link in the terminal after pushing to heroku, visit it!

### 2. Student Do (15 minutes)

Make a new repository, add in an index.html file, include an image of a cat inside of the index.html file, push to github and then deploy to heroku.

### 3. Student Do (20 minutes)

* *Show this html file: in-class-exercises-2.1/index-1.html on the projector. It is what the students must code out in the next exercise.*

* Make a new public Git repo called `##-week-two-exercises` with you replacing `##` with your initials
* Inside your new repo, make a new html file called `index.html`
* Make `css` folder
* Inside the `css` folder make a `style.css` file
* Inside the `css` folder make a `reset.css` file and include http://meyerweb.com/eric/tools/css/reset/reset.css
* Inside the `index.html` file add in the core html tags (e.g. doctype, html, head, title, body)
* Inside the `title` write "Week Two Exercise"
* Reference both CSS files in the `head` tag, making sure to include your `style.css` last
* Inside your `style.css` file include the following to reduce box model math
```
* {
  box-sizing: border-box;
}
```
* Code what is on screen with the following specs:
    * body 
        * background-color is `#f1f1f1`
    * header
        * id is `main-header`
        * background-color is `#ddd`
        * margin-bottom is `30px`
        * minimum height is is `100px`
    * wrapper
        * this element is a `div`
        * class is `wrapper`
        * width is `1024px`
        * centered margins e.g. `margin: 0 auto`
    * section tag 1  
        * id is `main-section`
        * background-color is `#ddd`
        * floats left
        * width is 60%
        * padding is 30px
    * section tag 2
        * id is `sidebar`
        * background-color is `#ddd`
        * floats right
        * width is 35%
        * padding is 30px

* Stage, commit, and push to git

* Push to heroku


### 4. Everyone Do (15 minutes)

* *go over the previous exercise*

the solution is here:
in-class-exercises-2.1/index-1.html

* *slack out the code to index-1.html and the css*

### 5. Instructor Do (15 minutes)

* Git branching

> Git branches enable people to modify code independently from the `master branch` without it impacting the `master` branch itself

> For example, you can code features on a `features` branch, and not have your in-progress features code impact your `master` production branch

> This is especially useful when working on teams. Two people can modify the same file in separate branches and then have the ability to merge their changes without fearing things will get overwritten

* *Make a repo*

* *push an index.html file to it*

* *put an h1 of `<student's name>'s favorite band`*

* *put an image of a student's favorite band*

* *push it to github*

* *push to heroku*

`git checkout -b <another student-first-name>`

> is short for making a new branch and immediately switching to it

`git branch`

> tells you all the branches you have locally and the one that you are currently on

* *modify the h1 to be `<another student-first-name>'s favorite band`*

* *add a picture of that student's favorite movie in the html file*

* *git push origin <another student-first-name>*

* *make a pull request to master with the branch you made*

* *github will say can not merge due to merge conflicts*

* *go to terminal and do `git pull origin master`*

* *show students how to get out of vim and explain why it brought you there - also what vim is (code editor that lives in your terminal)*

* *git push origin <branch name>*

* *then go back to github.com to see the pull request - now you can merge it in - go ahead merge it*

### 6. Student Do 25 minutes

> repeat the steps that I did on your own githubs 

* *slack this out to the students.*



* *Make a repo*

* *push an index.html file to it*

* *put an h1 of your favorite band*

* *put an image of your favorite band*

* *push it to github*

* *push to heroku*

`git checkout -b another-band`
    * is short for making a new branch and immediately switching to it

`git branch`
    * tells you all the branches you have locally and the one that you are currently on

* *modify the h1 to be `the new band name`*

* *add a picture of that new band in the html file*

* *git push origin another-band*

* *make a pull request to master with the branch you made*

* *github will say can not merge due to merge conflicts*

* *go to terminal and do `git pull origin master`*

* *get out of vim*

* *git push origin another-band*

* *then go back to github.com to see the pull request - now you can merge it in - go ahead merge it*


##### Break for 15 minutes 

##### 120 minutes have went by so far


### 7. Instructor Do 15 minutes

have a TA clone the repo you made in the previous repo

add the TA as a collaborator in settings

have the TA make a branch off master and push up the branch

have the TA make a change on one of your files and push it up to their branch

have the TA make a pull request from the branch to master and assign it to you

look over the pull request, and then merge it in. 

then show students on github.com that the file on master changed!

### 8. Partner Do (25 minutes)

* The person that will use the repo

* Navigate to your partners repo that was made in the previous exercise using Chrome

* Obtain the SSH url. It should look something like `git@github.com:PartnersUsername/##-week-two-exercises.git`

* `cd` to the folder on your computer where you want to put this new repo, if you dont have a folder, then make one usking terminal

* While inside your desired folder, using terminal, type `git clone git@github.com:PartnersUsername/##-week-two-exercises.git` replacing the ssh url with the ACTUAL url

* CD to the folder that was just cloned

* Make a new branch `##-styling`, replacing ## with your initials. Example: `git checkout -b ##-styling`, which will switch you immediately to your new branch

* Inside the `index.html` make the following changes
    * Inside the `header#main-header` tag, make a `div` and giv it a class called `wrapper`
    * Inside the new div you just made, add `<img src="http://dummyimage.com/400x100/333/fff.jpg&text=Week+Two+Exercise" alt="Week Two Exercise" id="logo">`
    * Inside the `#main-content` section make a `h1` tag, inside the tag write "Main Content"
    * Beneath the `h1` make one `<blockquote>Ipsum Text</blockquote>` using a sentence or two of ipsum text http://www.lipsum.com/
    * Inside the `#sidebar` section make an `h2` tag that says "Sidebar Content"
    * Beneath the `h2` make an un ordered list that contains 3 items that read "list item 1", "list item 2", "list item 3"

* Stage, commit, and push to YOUR BRANCH e.g. `##-styling` using `git push origin ##-styling`

* Using Chrome, navigate to the github repository on github.com and make a pull request to master

* Review your partners pull request

* If all looks good, merge in their pull request

* After merged, making sure you are in your master branch, type `git pull origin master` to pull down their changes locally

* Review on your computer to make sure you have their changes

### Everyone do 15 minutes

go over the previous exercise with the class in four groups in four different parts of the room led by an instructor, the TAs and a strong student

### Instructor do 5 minutes

go over the hw

# Copyright
Coding Boot Camp (C) 2015. All Rights Reserved.