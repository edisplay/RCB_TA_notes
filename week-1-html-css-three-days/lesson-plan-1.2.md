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

### 2. Student Do (20 minutes)

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
----
70 minutes so far
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
* Explain indentation and syntax e.g. open and closing tags, self closing tags, double quotations (never single quotes)
* Emphasis the importance of semantic markup 
  + https://validator.w3.org/#validate_by_input
  + Copy paste in this example to W3.org to show what happens if the markup is invalid
  ```
  <!doctype html>
  <html>
  <head>
    <title>Broken HTML</title>
  </head>
  <body>

    <div>
      <h1>Heading 1</h1>

      <p>
        Test paragraph
      </div>
    </p>

    <p>Another test paragraph</p>

  </p>

    <li>
    <ul> List Item
      </li>

    <table>
      <td>
        <tr>
          <td>Table Contents</td>
        </tr>
      </td>
    </table>

  </body>
  </html>
  ```
* Go over how to write the following tags
  + Core tags
    + doctype
    + html
    + head
    + title
    + body
  + Other tags
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

* Show an image on the projector of what they need to code out in the student exercise

### 6. Student Do (15 minutes)
* Make a new file called `sample-page.html` using terminal
* Commit the file and push to github
* Inside your `sample-page.html` file code the example on the projector
* If your forgot how to write the html tags, you can reference all html tags here https://developer.mozilla.org/en-US/docs/Web/HTML/Element
* Commit code and push to github

### 7. Partner Do (10 minutes)

* Share your Github code with your partner
* Take your partners code and validate it using https://validator.w3.org/#validate_by_input
* Compare work and discuss with partner to see how similar your code is. If not the same, work together to make it the same and valid and discuss.

--
130 minutes so far
--

### 8. Instructor Do (20 minutes)

+ Discuss CSS
  + What is CSS
  + What is a style sheet
    + inline vs internal vs external
  + ID vs Class
    + Where id's and classes go in the html
    + How id's and classes are is written in the css
  + Show basic styling examples for   
    + font-family
    + font-weight
    + text-align
    + line-height
    + color
    + background-color
    + border

* show an image on the projector of what they need to code out in the student exercise

### 9. Student Do (20 minutes)

* Make a folder called `css` using terminal
* Inside the `css` folder make a file called `style.css` using terminal
* Git commit and push this new file to Github
* Reference the `style.css` in your `sample-page.html` file
* Style the example on the projector
* If your forgot how to write the css properties, you can reference all css properties here https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
* Git commit and push this new file to Github

### 10. Partner Do (10 minutes)

* Share your Github code with your partner
* Take your partners code and validate it using https://validator.w3.org/#validate_by_input
* Compare work and discuss with partner to see how similar your code is. If not the same, work together to make it the same and valid and discuss.
