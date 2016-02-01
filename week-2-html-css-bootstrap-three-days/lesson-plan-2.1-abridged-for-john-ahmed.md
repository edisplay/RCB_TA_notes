# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

Look at this file at the root of the repository:
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide.md)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)

* Expertly navigate the file system and terminal basics
* Work independently or in a group on complex projects throughout the entire development lifecycle
* Implement complex logical conditions to meet an objective.


# Theme
HTML / CSS / GIT

# INSTRUCTOR MUST COVER!!!

```
TBD
```

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one is read)

* Develop your vision for a website -- and then build it!
* Expertly navigate the file system and terminal basics
* Work independently or in a group on complex projects throughout the entire development lifecycle
* Communicate the basics of serving a webpage and how the browser renders code
* Understand and implement the mechanics of Git flow (including branching, merging, pull requests)

----

### 1. Everyone Do (40 minutes)

**Take time to finish up loose ends from last week**

----

### 2. Instructor Do (20 minutes)

* *Slack this to class and go over the steps to the class*

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

10. `git push heroku master`

push up your master branch from your github repository to heroku

you'll see the url to your heroku link in the terminal after pushing to heroku, visit it!


### 2. Student Do (20 minutes)

* Setup Heroku
* push one of your html creations to heroku using the above steps.

----
###### Break (15 minutes) 95 minutes went by including break
----

### Instructor Do (5 minutes)

* *Show [this html file](in-class-exercises-2.1/index-5.html) on the projector. It is what the students must code out in the next exercise.*


### 2. Student Do (25 minutes)

* *Show [this html file](in-class-exercises-2.1/index-5.html) on the projector. It is what the students must code out in the next exercise.*

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


----

### 3. Instructor Do (25 minutes)

**Spend 4-5 minutes on each of the following (git branching, git cloning, pull requests)**

* Git branching

> Git branches enable people to modify code independently from the `master branch` without it impacting the `master` branch itself

> For example, you can code features on a `features` branch, and not have your in-progress features code impact your `master` production branch

> This is especially useful when working on teams. Two people can modify the same file in separate branches and then have the ability to merge their changes without fearing things will get overwritten

**Slack out these git commands to students and say one or two sentences about each**

* Commands
    * `git branch branch-name` - creates a new branch
    * `git checkout branch-name` switches to the branch
    * `git branch -b branch-name` is short for making a new branch and immediately switching to it
    * `git push origin branch-name` will push the contents of the branch, this will not impact `master`
    * To return to master you type `git checkout master`

**Important**

> When making a new branch, the new branch references the branch you are currently on. For example, if you are on the `master` branch and type `git checkout -b new-branch` the `new-branch` will adopt the same code from `master`.

> Let's say you make a lot of changes in your `new-branch`, and while on that branch you type `git checkout -b additional-branch`, the `additional-branch` will adopt the code from `new-branch` NOT from `master`.

> It is important to type `git branch` before you make a new branch so you can see which branch you are currently on.

* Git cloning

> You can get any code from other public Git repositories.

> Running `git clone git@github.com:twbs/bootstrap.git` will clone the Bootstrap repo to your local machine

> You have the ability to modify files

> Github lets you modify settings to prevent others from deleting or modifying certain branches, as well as restricting user access

* Pull requests

> When working with teams, almost never should work be performed using the `master` branch. Master branch is usually production level code, not code that is in-progress

> All work should be merged into `master` by creating a "pull request"

> You can do this by navigating to your repository using Chrome, selecting the "pull requests" tab and pressing the "new pull request" button

> You can select which branch you want to merge from and to

> Pull requests should be reviewed by the owner to ensure the code is proper, if not you can tell the person making the request to modify their code

### 4. Partner Do (25 minutes)

* Navigate to your partners repo that they just made in the previous exercise using Chrome
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
* Using Chrome, navigate to the repository and make a pull request to master

### 5. Student Do (5 minutes)

* Review your partners pull request
* If all looks good, merge in their pull request
* After merged, making sure you are in your master branch, type `git pull origin master` to pull down their changes locally
* Review on your computer to make sure you have their changes

----

# Copyright
Rutgers Coding Boot Camp (C) 2015. All Rights Reserved.
