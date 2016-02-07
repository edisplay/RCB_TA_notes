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
HTML, CSS, Github, Heroku

# INSTRUCTOR MUST COVER!!!

```
1-15
```

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one being read)

* Students will open up Chrome DevTools and use Inspector.
* Students will use advanced CSS styling to make beautiful web pages
* Students will understand the html box-model and how it impacts CSS styling
* Students will make multi-column websites
* Students will use Heroku and deploy their code to it

----

### 1. Instructor Do (5 minutes)

+ *Recap last class*
    + Went over HTML and CSS.
    + Students created a `student-bio.html` page


### 2. Everyone Do (10 minutes)

* *Instructor does this while the students do this*

> Theodore_Roosevelt: Far better is it to dare mighty things, to win glorious triumphs, even though checkered by failure... than to rank with those poor spirits who neither enjoy nor suffer much, because they live in a gray twilight that knows not victory nor defeat.

> you all try the hw - you all try these exercises - you all do what i say - and that is your triumph

> Theodore_Roosevelt: Nobody cares how much you know, until they know how much you care."

> team atmosphere - help thy neighbors - the stronger everyone is - the stronger our group projects are

* *Slack this: https://en.wikipedia.org/wiki/Theodore_Roosevelt*
> Open up https://en.wikipedia.org/wiki/Theodore_Roosevelt in Google Chrome

> Right click anywhere on the page and select "Inspect". This is Chrome Developer Tools.

> Look at the `Elements` tab specifically and hover over the various HTML elements and  watch it highlight to it's corresponding rendered part in the page.


### 3. Instructor Do (15 minutes)

* ***PLEASE DO NOT DRONE ON ABOUT EACH PART OF INSPECTOR! Only discuss the Elements panel.***

* *Explain Inspector*
    + There are 8 Main Panels, but Elements is all we will use for now
        + "Elements" is the main panel you will be using in todays class and next week. It is what you use to view and make quick on the fly changes to your html and css
            + This is the panel you use to examine your HTML
            + This lets you see everything in one DOM tree
            + Lets you edit your HTML on the fly to test things out
            + [reference](https://developer.chrome.com/devtools/docs/dom-and-styles){:target="_blank"}


  + On the right side panel there is information pertaining to your CSS
      + Styles
          + This shows you all your CSS that pertains to the element you have highlighted in the main Elements panel
          + You have the ability to edit the CSS to preview what it would look like
          + **Warning**: refreshing the browser will delete all your changes. It is important to not make too many changes because nothing is saved
      + Computed
          + This shows how the browser is interpreting the element you have selected in the Elements panel

  + *Instructor - Change the styling of the page via the left and right part of the elements tab of inspector the student-bio.html page: in-class-exercises-1.2/14-student-do.html using Inspector*
    + Change some text
    + Change some styling

### 4. Student Do (10 minutes)

* *slack them code from this folder: in-class-exercises-1.2*
  * 16-student-do.html, assets/style.css, assets/RutgersBanner.png

1. Highlight the `<div class="container">` element in the Elements panel
2. In the Styles side panel, change the width from `1024px` to `600px`
    * Observe what happens
3. In the Elements panel, highlight the `<h1>` tag. Right click and select "Edit Text" OR you can double click on the text to edit it. Change the text to say "My Biography". Press "enter" to finalize your changes or mouse click away.
    * Observe what happens

* Bonus:
    * Using Inspector, make a new `section` tag with an id of `#new`
    * Make your new section tag appear just below the #contact-info section
    * Now make it appear below both #main-bio and #contact-info
    * Make it have a `background-color` of red

----

### 5. Instructor Do (5 minutes)

* ***reminder to instructor: commit and push your code to your in class code repository***

* *Demonstrate these one at a time to the students on a single html page. DO NOT CODE ALL OF IT AND THEN SHOW IT. Code a little bit, show it to the students, explain it.*

* *** DO NOT DRONE ON ABOUT THESE CONCEPTS. Talk about them at a high level to the class.***

* *Slack these out to the students*

* Discuss CSS in more detail
  + Concepts
    + block vs inline vs inline-block
        + Block elements:
            + A block-level element occupies the entire width of its parent element (container), thereby creating a "block." Nothing can go next to this element.
            + Examples of block elements
                + `<div></div>`
                + `h1-h6`
                + `<p></p>`
                + `<form></form>`
                + `<ul><li></li></ul>` and `<ol><li></li></ol>`
                + `<table></table>`
                + `<header></header>`
                + `<nav></nav>`
                + `<footer></footer>`
                + [view more block elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements){:target="_blank"}
        + Inline elements:
            + An inline element occupies only the space bounded by the tags that define the inline element. Other inline elements can go next to inline elements.
            + padding top/bottom and margin top/bottom DO NOT work on inline elements
            + Examples of inline elements
                + `<span></span>`
                + `<a href="http://www.google.com">Google</a>`
                + [view more inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements){:target="_blank"}
        + Inline-block elements:
            + Padding top/bottom and margin top/bottom DO   work on inline elements, but content from other inline or inline-block elements can rest beside them. Therefore, they are a combination of inline and block, hence inline-block
            + Examples of inline block elements
                + `<img>`
                + `<input type="text">`
                + `<textarea></textarea>`
    + CSS display property
        + `display: block`
        + `display: inline`
        + `display: inline-block`
        + `display: none`


### 6. Instructor Do (10 minutes)

* *Open this file that shows these block elements to the students: in-class-exercises-1.3/element-examples.html*
    1. *open up the file in sublime text and open up the file in the browser - split your screen*
    2. *move the block elements around show how they take up the full width of the page, so whatever element comes after them moves beneath them*
    3. *move the inline elements around to show how they stack next to each other because they don't take the full width of the page*
    4. *show how the inline-block and block elements can have padding and margins on the top and bottom BUT inline can not.*

### 7. Instructor Do (10 minutes)

+ CSS Box Model

* *Instructor - open this box model example: in-class-exercises-1.3/css-box-model-visual.html on the projector*

> The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.
    

+ Padding, margins, borders

> Writing shorthand for margin and padding is clockwise (top, right, bottom, left e.g. `padding: 20px 30px 20px 30px`). 

> If there are only 3 values, then the last value (left), assumes the same value as the right side. 

> If there are 2 values, the first two apply to top and bottom, the second two apply to left and right. 

> If there is only one value, it applies to all sides. 

> Or you can write just one side at a time like `padding-right: 20px`


### 8. Student Do (5 minutes)

* *Instructor - Show in-class-exercises-1.3/box.html on the projector. It is what the students must see.*

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
* Remember: the margin and padding values are clockwise (top, right, bottom, left)
* Remember: the border values apply to all 4 sides


### 9. Instructor Do (5 minutes)

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

### 10. Instructor Do (5 minutes)

* *Talk about how browser rendering for CSS and how it is different in each browser*
    + Refer to these resources to learn what to talk about
        + CSS styles for Webkit (Chrome and Safari) http://stackoverflow.com/questions/6867254/browsers-default-css-for-html-elements
        + CSS Styles for Firefox http://mxr.mozilla.org/mozilla-central/source/layout/style/html.css
    
* *Talk about CSS Resets* (http://meyerweb.com/eric/tools/css/reset/)

> CSS resets make styling more consistent across browsers

> You reference a css file before you reference your own style sheet, because of the order that CSS renders (remember that whatever CSS is closest to the element is the most dominant, you want your own styling to be more dominant than the reset file)


#### 11. Instructor do (10 minutes)

+ Styling properties
    
    + *Instructor - use this html file in-class-exercises-1.3/floats.html example on the screen. Use inspector, comment and uncomment the overflow property on `#full`, and the clear on the footer. Show how they do similar things and what happens when they aren't there.*

    + floats
        + The float CSS property specifies that an element should be taken from the normal flow and placed along the left or right side of its container, where text and inline elements will wrap around it. [reference](https://developer.mozilla.org/en-US/docs/Web/CSS/float){:target="_blank"}
            + `float: left`
            + `float: right`
            + `float: inherit`
            + `float: none`
    + clear
        + `clear: both`
        + `<div class="clearfix"></div>`
    + overflow
        + `overflow: auto` on the parent element will contain the floats

### 12. Student Do (15 minutes)

* *Instructor - Show this html file in-class-exercises-1.3/floats.html on the projector. It is what the students must code out in this exercise.*

* *Slack this out*

* Inside your first-week-repo repository, make a file called `floats.html` using terminal
* Inside your `css` folder, make a file called `reset.css` and paste in the code from here http://meyerweb.com/eric/tools/css/reset/reset.css
* Make another file inside your `css `folder called `floats.css`
* Inside `floats.html`, write the core tags for a basic html page (e.g. doctype, html, head, title, body). If you forgot how to do this, you can read more here: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Introduction
* Inside floats.html reference the reset.css file and your floats.css file. Be sure to reference reset.css before floats.css because you want your styles to be more important and override reset.css if needed. It would look something like this
```
<head>
  <title>Floats</title>
  <link rel="stylesheet" type="text/css" href="css/reset.css">
  <link rel="stylesheet" type="text/css" href="css/floats.css">
</head>

```
* At the top of your floats.css file include
```
* {
  box-sizing: border-box;
}
```
* Stage, commit, and push to github
* Style the image on the projector
    * Look at the image on the projector, the colors and tags are on there. Eyeball the widths, padding, margins, and font sizes.
* Stage, commit, and push to github

* Bonus:
    + Make it so the div doesnt extend behind the aside tag

### 13. Partner Do (10 minutes)

* Share your Github code with your partner
* Take your partners code and validate it using https://validator.w3.org/#validate_by_input AND http://www.css-validator.org/#validate_by_input
* Compare work and discuss with partner to see how similar your code is. If not the same, work together to make it the same and valid and discuss.

----
#### Break (40 minutes)

----
###### 165 minutes so far including break

----

### 14. Instructor Do (10 minutes)

* Discuss CSS positioning
    + absolute, relative, fixed, static
        + `position: static` is the default positioning for every single element. It means the element will flow the way it was intended
        + `position: relative` can enable and element to be positioned RELATIVE to its original position. You can reposition it using `top: -20px` etc. It will then move -20px upwards
        + `position: fixed` positions the element relative to the viewport, or browser screen. This means it will remain when scrolling because its position is based on the viewport and not on its surrounding html elements
        + `position: absolute` positions itself based on the nearest relatively positioned ancestor (meaning the tags it is inside of).
    + z-index
    + `top, right, bottom, left`
        + you can use negative values
    + `display: none ` vs `visibility: hidden`


* *Instructor - Show this html file: in-class-exercises-1.3/positioning.html on the projector. It is what the students must code out in the next exercise.*


### 15. Student Do (15 minutes)

* *Show this html file: in-class-exercises-1.3/positioning.html on the projector. It is what the students must code out in the next exercise.*

* *Slack this out*

* Make a new file called `positioning.html` using terminal
* Inside the `css` folder, make another file called `positioning.css`, reference the `reset.css` this file and the `positioning.css` file in `positioning.html`
* Stage, commit, and push to github
* Style the image on the projector
* Colors used are `#eee` and `#999`
* Grab 5 paragraphs worth of lorem ipsum text http://www.lipsum.com/feed/html. You need to make this page scroll to see how the fixed position element behaves.
* Stage, commit, and push to github


# If there is time left over - there should be


### 16. Partner Do (10 minutes)

* Share your Github code with your partner
* Take your partners code and validate it using https://validator.w3.org/#validate_by_input AND http://www.css-validator.org/#validate_by_input
* Compare work and discuss with partner to see how similar your code is. If not the same, work together to make it the same and valid and discuss.
 
----

### 17. Instructor Do (20 minutes)

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

10. Next run the command `git add -A`.  This is to add the index.php file and the composer.json file to git.

11. Next run the command `git commit -m "added heroku components"`. 

12. `git push heroku master`

push up your master branch from your github repository to heroku

you'll see the url to your heroku link in the terminal after pushing to heroku, visit it!

### 18. Student Do (20 minutes)

* Setup Heroku
* push one of your html creations to heroku using the above steps.

# Copyright
Coding Boot Camp (C) 2015. All Rights Reserved.
