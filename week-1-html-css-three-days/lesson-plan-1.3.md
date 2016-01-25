# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

Look at this file at the root of the repository:
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide.md)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)

* Develop your vision for a website -- and then build it!
* Expertly navigate the file system and terminal basics
* Work independently or in a group on complex projects throughout the entire development lifecycle
* Communicate the basics of serving a webpage and how the browser renders code
* Understand and implement the mechanics of Git flow (including branching, merging, pull requests)
* Deploy static websites to a cloud provider


# Theme
HTML / CSS

# INSTRUCTOR MUST COVER!!!

```
ALL or they won't be able to do the homework.
```

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one being read)

* Students will open up Chrome DevTools and use Inspector.
* Students will learn more advanced CSS styling to make more beautiful web pages
* Students will understand the html box-model and how it impacts CSS styling
* Students will be able to make multi-column websites
* Students will learn how to use Heroku and deploy their code to it

----

### 1. Instructor Do (5 minutes)

+ Recap last class
    + Went over HTML and CSS.
    + Students created a `student-bio.html` page


### 2. Everyone Do (5 minutes)

* Open up last weeks `student-bio.html` file in Google Chrome
* Right click anywhere on the page and select "Inspect". This is Chrome Developer Tools.
* Look at the `Elements` tab specifically and hover over the various HTML elements and  watch it highlight to it's corresponding rendered part in the page.


### 3. Instructor Do (10 minutes)

* Explain Inspector
    + There are 8 Main Panels
        + Elements
            + This is the panel you use to examine your HTML
            + This lets you see everything in one DOM tree
            + Lets you edit your HTML on the fly to test things out
            + [reference](https://developer.chrome.com/devtools/docs/dom-and-styles)
        + Console 
            + You use this for Javascript.
            + Console will be discussed later on when it is more relevant to the course
            + [reference](https://developer.chrome.com/devtools/docs/console)
        + Sources
            + You use for Javascript.
            + Sources will be discussed later on when it is more relevant to the course
        + Network
            + This panel records information about each network operation in your application, including detailed timing data, HTTP request and response headers, cookies, WebSocket data, and more. The Network panel helps you answer questions about the network performance of your web application
            + Network will be discussed later on when it is more relevant to the course
            + [reference](https://developer.chrome.com/devtools/docs/network)
        + Timeline
            + The Timeline panel lets you record and analyze all the activity in your application as it runs. It's the best place to start investigating perceived performance issues in your application.
            + Timeline will be discussed later on when it is more relevant to the course
            + [reference](https://developer.chrome.com/devtools/docs/timeline)
        + Profiles
            + The Profiles panel lets you profile the execution time and memory usage of a web app or page
            + Profiles will be discussed later on when it is more relevant to the course
            + [reference](https://developer.chrome.com/devtools/docs/profiles)
        + Audits
            + The Audit panel can analyze a page as it loads.
            + Audits will be discussed later on when it is more relevant to the course

  + Elements is the main panel you will be using in todays class and next week. It is what you use to view and make quick on the fly changes to your html and css

  + On the right side panel there is information pertaining to your CSS
      + Styles
          + This shows you all your CSS that pertains to the element you have highlighted in the main Elements panel
          + You have the ability to edit the CSS to preview what it would look like
          + **Warning**: refreshing the browser will delete all your changes. It is important to not make too many changes because nothing is saved
      + Computed
          + This shows how the browser is interpreting the element you have selected in the Elements panel

  + Instructor - Do some samples of you editing the html and css [the student-bio.html page](in-class-exercises-1.2/1.2.9-in-class-exercise.html)
    + Change some text
    + Change some styling

### 4. Student Do (5 minutes)

1. Highilight the `<div class="container">` element in the Elements panel
2. In the Styles side panel change the width from `1024px` to `600px`
    * Observe what happens
3. In the Elements panel highlight the `<h1>` tag. Right click and select "Edit Text" OR you can double click on the text to edit it. Change the text to say "My Biography". Press "enter" to finalize your changes.
    * Observe what happens

* Bonus:
    * Make a new `section` tag with an id of `#new` using Inspector
    * Make your new section tag appear just below the #contact-info section
    * Now make it appear below both #main-bio and #contact-info
    * Make it have a `background-color` of red

----

### 5. Instructor Do (15 minutes)

* Discuss CSS in more detail
  + Concepts
    + block vs inline vs inline-block
    + box model
        + The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.
        + [box model example](css-box-model-visual.html)
    + padding, margins, borders
        + shorthand is clockwise (top, right, bottom, left), if there are only 3 values, then the last value (left), assumes the same value as the right side. If there is only one value, it applies to all sides.
        + how padding and margins work on inline elements vs block elements
        + css display property
            + `display: block'
            + `display: inline`
            + `display: inline-block`
            + `display: none`


### 6. Student Do (5 minutes)

* *Show [this html file](in-class-exercises-1.3/box.html) on the projector. It is what the students must see.*

* *Slack this out*

* Calculate the width and height of the blue #box div
```html
#box {
  background-color: #1E5792;
  width: 400px;
  height: 440px;
  margin: 10px 30px 20px 50px;
  color: #fff;
  padding: 25px 10px 30px 20px;
  border-style: solid;
  border-width: 22px;
  border-color: #113152;
}
```
* Slack your answer
* Remember: the margin and padding values are clockwise (top, right, bottom, left)
* Remember: the border values apply to all 4 sides


### 7. Instructor Do (5 minutes)

Answer to previous exercise: The blue #box is 554 pixels wide, and 569 pixels tall

```html
* {
  box-sizing: border-box;
}
```

Pro-tip: Use the above snippet have the padding and border included in the element's total width and height. This makes styling a lot easier. Put this at the top of your css files.

* *Slack this to students*

```html
* {
  box-sizing: border-box;
}
```

----

### 7. Instructor Do (20 minutes)

+ Browser rendering for CSS and how it is different in each browser
    + CSS styles for Webkit (Chrome and Safari) http://stackoverflow.com/questions/6867254/browsers-default-css-for-html-elements
    + CSS Styles for Firefox http://mxr.mozilla.org/mozilla-central/source/layout/style/html.css
    
+ CSS Resets (http://meyerweb.com/eric/tools/css/reset/)
    + CSS resets make styling more consistent across browsers
    + You reference a css file before you reference your own style sheet, because of the order that CSS renders (remember that whatever CSS is closest to the element is the most dominant, you want your own styling to be more dominant than the reset file)

+ Styling properties
  + float
  + clear
  + overflow

### 2. Student Do (20 minutes)

Practice floats

* Inside your first-week-repo repository, make a file called `floats.html` using terminal
* Inside floats.html, write the core tags for a basic html page (e.g. doctype, html, head, title, body)
* Inside your `css` folder, make a file called `reset.css` and paste in the code from here http://meyerweb.com/eric/tools/css/reset/reset.css, reference this file in the head tag in your floats.html
* Make another file inside your `css folder called `floats.css`, reference this file in the head tag in your `floats.html` file
* Stage, commit, and push to github
* Style the image on the projector
* Stage, commit, and push to github

### 3. Partner Do (10 minutes)

* Share your Github code with your partner
* Take your partners code and validate it using https://validator.w3.org/#validate_by_input AND http://www.css-validator.org/#validate_by_input
* Compare work and discuss with partner to see how similar your code is. If not the same, work together to make it the same and valid and discuss.

----
#### Break (15 minutes)

----
###### 100 minutes so far

### 4. Instructor Do (15 minutes)

* Discuss CSS positioning
    + absolute, relative, fixed, static
    + z-index

* give another example on the projector for the students to code


### 5. Student Do (15 minutes)

Practice positioning

* Inside the repo make a new file called `positioning.html` using terminal
* Make another file called `positioning.css`, reference this file in your `positioning.html1 file
* git push to github
* Style the image on the projector
* git push to github

### 6. Partner Do (10 minutes)

* Share your Github code with your partner
* Take your partners code and validate it using https://validator.w3.org/#validate_by_input AND http://www.css-validator.org/#validate_by_input
* Compare work and discuss with partner to see how similar your code is. If not the same, work together to make it the same and valid and discuss.
 
----

### 7. Instructor Do (20 minutes)

* Heroku setup

### 8. Student Do (20 minutes)

* Setup Heroku
* push all code in github to heroku

# Copyright
Rutgers Coding Boot Camp (C) 2015. All Rights Reserved.