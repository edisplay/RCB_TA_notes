# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

Look at this file at the root of the repository:
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide.md)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)

* Expertly navigate the file system and terminal basics
* Work independently or in a group on complex projects throughout the entire development lifecycle
* Understand and implement the mechanics of Git flow (including branching, merging, pull requests)


# Theme

HTML/CSS Intro

# INSTRUCTOR MUST COVER!!!

```
ALL or they won't be able to do the homework.
```

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one being read)

* Students will the importance of Version Control (Git) and how to use it
* Students will learn how to make a basic html document
* Students will understand basic html tags and when to use them
* Students will learn how to make and implement basic CSS styling

----

### 1. Instructor Do (20 minutes)

+ Discuss Git
  + What it is 
  + Why it is important
+ Discuss Github
  + What it is
  + Why it is important
+ Discuss difference between Git and Github
+ Discuss what a github repository is
  + What it is 
  + Why it is important
+ Discuss git commands
  + `git add`
  + `git commit`
  + `git push`
  + `git pull`

### 2. Student Do (30 minutes)

* If you haven't already, go to https://github.com/ and make an account

* Install Git to your machine if you haven't already http://git-scm.com/downloads
  + Follow instructions here to do so: https://help.github.com/articles/set-up-git/
  + If you haven't already, generate your SSH keys https://help.github.com/articles/generating-a-new-ssh-key/

* Make a new repository called `first-week-repo`
  + check box to "Initialize this repository with a README"

* Make a basic html file called `test.html` that contains the core structure of an html file (e.g. doctype, head, title, body) and include an image. You can find a cute image online or grab a placeholder image http://lorempixel.com/
* Commit test.html using `git add test.html`, and `git commit -m "initial commit"` and `git push`

Bonus 1:
Add additional HTML tags to your page and read up on all of them:
https://developer.mozilla.org/en-US/docs/Web/HTML/Element

Bonus 2: 
Find a tag that the instructors don't know about and try to stump them

### 3. Everyone Do (10 minutes)
* Go over the previous exercise

### 3. Partners Do (10 minutes)
* "Discuss line by line what happened. If the people around you are lost, YOU ARE RESPONSIBLE for the people around you."

### 4. Instructor Do (10 minutes)
* Walk around room and make sure everyone is caught up

----
Break (15 minutes)
----

### 5. Everyone Do (5 minutes)
Let's go over html 

* Combine all the html code on one line with holding down the following command on an html file on the first line of it

on Mac:

```
cmd+j 
```

or on Windows:

```
ctrl+j
```

* save the code *

"How will this look different in the browser? Discuss with your partners"

### 5. Everyone do (10 minutes)

Go around the room until you get the answer you want

It won't look different.

* Open the html file in the browser by right clicking on the file in SublimeText and going to "Open in Browser" * 

### 6. Instructor Do (20 minutes)

* Discuss what a doctype is and why it is important
* Emphasis the importance of semantic markup 
  + w3validator.com
* Explain indentation and syntax e.g. open and closing tags, self closing tags, double quotations (never single quotes)
* Go over how to write the following tags
  + headings (h1, h2, h3 etc) and when to use them
  + paragraphs
  + anchors
  + unordered/ordered lists
  + divs
  + img
  + tables - thead, tbody, tr, td, th
  + html5 tags - header, nag, footer, article, figure
  + form
  + label
  + br
  + input - types - email, text, phone etc
  + textarea
  + address attributes - alt for example, width

### 6. Student Do (15 minutes)
* Make a new file called `html-tags.html` using terminal
* Commit the file and push to github
* Inside your `html-tags.html` file code out the following (show an image on the project of what they need to code out)

### 7. Partner Do (5 minutes)

* Compare work and discuss with partner to see if the code is the same. If not work together to make it the same and discuss

### 8. Student Do (5 minutes)

* Commit code and push to github

--
135 minutes so far
--

### 9. Instructor Do (30 minutes)

* Discuss CSS
  * What it is
  * What is a style sheet
    * inline vs internal vs external
  * ID vs Class
    * Where it goes in the html
    * What happens in the CSS
  * Show basic styling examples for   
    * font-family
    * font-weight
    * text-align
    * line-height
    * color
    * background-color
    * border

### 10. Student Do (30 minutes)

* Using terminal make a folder called `css` using terminal
* Inside the `css` folder make a file called `style.css` using terminal
* Git commit and push this new file to Github
* Reference the `style.css` in your `html-tags.html` file
* Style the example on the projector
* Git commit and push this new file to Github

### 11. Partner Do (10 minutes)

* See if what you did matches what your partner did. Help each other out.
