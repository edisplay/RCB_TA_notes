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
TBD

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

### 1. Instructor Do (10 minutes)

***Recap last weeks class QUICKLY. Say one or two sentences about the following***

* Terminal
    * Terminal Commands
        * navigate to the home directory.
            + `cd ~`
        * go back a directory
            + `cd ..`
        * print the current working directory.
            + `pwd`
        * create a new folder.
            + `mkdir folder_name`
        * create a new html file.
            + `touch my-first-example-page.html`
        * delete a file
            + `rm my-first-example-page.html`
        * delete a folder
            + `rm -r folder_name`
        * list files in a folder
            + `ls` - list files
            + `ls -a` - list all files, even hidden ones without filenames
            + `ls -la` - list all files and permissions in a list format

* Git
    * Git Commands
        + `git add filename` vs `git add .`
        + `git commit -m "Commit Message"`
        + `git push`
        + `git pull`
    * Made first repo called `week-one-repo`

* Inspector
    * Elements panel and style side panel

* Heroku
    * Deploying to the web

* HTML
    * Doctype
    * HTML indentation and syntax e.g. open and closing tags, self closing tags, double quotations (never single quotes)*
    * Core html tags (e.g. doctype, html, head, title, body)
    * Other html tags (e.g. headings, paragraphs, anchors, lists, divs, tables)
    * html5 tags (e.g. header, section, article, footer)

* CSS
    * Types of style sheets (e.g. inline vs internal vs external) and how the order that the CSS is written is important
    * CSS properties (e.g. font-family, background-color)
    * ID's vs classes
    * CSS box model
    * Floats
    * Positioning (e.g. relative, static, absolute, fixed)
    * CSS resets

* Coded 3 in-class html and css pages
    * student-bio.html
    * floats.html
    * positioning.html

* Coded 3 page portfolio site for homework

* *answer any questions students might have about these things*

* *Show [this html file](in-class-exercises-1.1/index-1.html){:target="_blank"} on the projector. It is what the students must code out in the next exercise.*

----

### 2. Student Do (20 minutes)

* *Show [this html file](in-class-exercises-1.1/index-1.html){:target="_blank"} on the projector. It is what the students must code out in the next exercise.*

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

### 3. Instructor Do (15 minutes)

**Spend 3-4 minutes on each of the following (git branching, git cloning, pull requests)**

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

### 4. Partner Do (15 minutes)

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

### 6. Instructor Do (15 minutes)

**Spend only 1-2 minutes talking about each of the following ( typography, line-height, font-size, line length, font colors, letter spacing, font files / @font-face, google fonts)**

* Typography

> Serif fonts have lines on the edges of the characters

> Sans-serif fonts have no lines

> [show this example on projector that shows different between sans-serif and serif](in-class-exercises-1.1/font-example.html)

> It is generally considered that sans-serif fonts are easier to read online

* Line-height

> golden ratio of line height is 1.5 times the font size

> depending on the font, you may need to increase the line height, but always make sure there is plenty of room between the lines of text

* Font-size

> Font size should be atleast 16 pixels. Anything smaller is hard to read.
[source](https://www.smashingmagazine.com/2011/10/16-pixels-body-copy-anything-less-costly-mistake/){:target="_blank"}

* Line length 

> This isnt a CSS property, but rather a standard. The optimal length for body text should be around 50-75 characters per line on desktop and about 30-40 characters per line on mobile
[source](http://baymard.com/blog/line-length-readability){:target="_blank"}

* Font colors

> Keep a good contrast between font color and background color, but sometimes too much contrast isn't good either. A pure white background (#fff) with pure black text (#000) is harder to read and can cause more eye fatigue than a pure white background with a softer shade of grey like (#333)

* Letter spacing

> You can define letter spacing in css like this `letter-spacing: 1px`

> You should adjust letter spacing if your chosen font looks too cramped

* Font files

> If hosting your own fonts, you will need to include font file formats to enable support across browsers

> Embedded OpenType (EOT) - A Microsoft font format used for Internet Explorer [caniuse](http://caniuse.com/#search=eot){:target="_blank"}

> Web Open Font Format (WOFF) - Is generally supported by modern browsers [caniuse](http://caniuse.com/#search=woff){:target="_blank"}

> WOFF2 - A newer version of WOFF but is not widely supported yet [caniuse](http://caniuse.com/#search=woff2){:target="_blank"}

> TTF - Created by Apple and Microsoft, has wide support [caniuse](http://caniuse.com/#feat=ttf){:target="_blank"}

> OTF - Used for special characters [caniuse](http://caniuse.com/#feat=ttf){:target="_blank"}

> SVG - Not much support yet [caniuse](http://caniuse.com/#feat=svg-fonts){:target="_blank"} 

> In your CSS you would define your fonts like this:

**Slack this to students**
```
@font-face {
    font-family: font-name;
    src: url('webfont.eot?#iefix') format('embedded-opentype'),
         url('font-name.woff2') format('woff2'),
         url('font-name.woff') format('woff'),
         url('font-name.ttf') format('truetype'), 
         url('font-name.otf') format('opentype'), 
         url('font-name.svg#svgFontName') format('svg'); 
}
```

* Google Fonts

> Free fonts can be found here https://www.google.com/fonts

> You can link to Googles CSS file which hosts the fonts for you


### 7. Student Do (15 minutes)

* Go to Google Fonts https://www.google.com/fonts
* Find two fonts from Google that you like. One font MUST be serif, the other MUST be sans-serif
* While on the master branch type `git pull origin master`
* Make a new branch `git checkout -b ##-fonts` replacing ## with your own initials
* Inside your `index.html` used in the previous exercise, reference the Google fonts BEFORE your `style.css` file
* Inside your `style.css` file do the following
    * Update all headings (e.g. h1, h2, h3, h4, h5, h6) to use the sans-serif font
    * Make the `h1` have a font size of 30px with a line-height of...do the math!
    * Make the `h2` have a font-size of 25px with a line-height of...do the math!
    * Inside the `body` css selector add the serif font. This should make all other tags use this font, except the heading tags
    * Inside the `body` css selector make the font atleast 16 pixels, you can make it larger if needed
    * Inside the `body` css selector make the `line-height` atleast 1.5 times your base font size, or larger if needed
* Stage, commit, and push `git push origin ##-fonts` replacing ## with your intials
* Make a pull request and merge your own pull request into master

* BONUS
    * adjust any margins or paddings so it looks more pleasing
    * adjust any font-weights as needed

----
###### Break (15 minutes) 110 minutes went by including break
----


### 8. Instructor Do (15 minutes)

**Spend 2-3 minutes on each of the following (Pseudo classes, pseudo elements, content property)**

* Psuedo classes

> A pseudo-class is used to define a special state of an element. For example, this would make the text red when hovering over it:
```
a:hover {
  color: red
}
```

> You can also style links based on :visited, :active, :focus 

> [full list of pseudo classes here](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes){:target="_blank"}

> nth-child you can style even or odd occurrences, or specific occurrences like `:nth-child(2)`
```
tr:nth-child(even) {
  background-color: red
}
```

> Uses single colon

* Pseudo elements

> Pseudo-elements are added to selectors but instead of describing a special state, they allow you to style certain parts of a document.
[source](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements){:target="_blank"}

> Uses double colons like `element::after`

> [full list of pseudo classes here](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements){:target="_blank"}

* Inserting cosmetic content using the `content` property


> Content property is an inline element by default, but you can make it block using css

> You can insert `content` before or after an element

** Example - [Display this in Chrome](in-class-exercises-1.1/pseudo-element-example.html){:target="_blank"} **
    ```
    <!doctype html>
    <html>
    <head>
      <title>Serif vs Sans-Serif</title>
      <link rel="stylesheet" type="text/css" href="css/reset.css">
      <style type="text/css">
        body {
          background: #eee;
        }
        div {
          background: #ccc;
        }
        div::before {
          content: "Hello World";
          background: red;
        }
      </style>
    </head>
    <body>
      <div></div>
    </body>
    </html>
    ```
> Special characters use hex http://www.evotech.net/articles/testjsentities.html


### 9. Partner Do (15 minutes)

* *Show [exercise](in-class-exercises-1.1/index-4.html){:target="_blank"} on the projector. It is what the students must code out in the next exercise.*

* Inside your partners repo, switch to the `master` branch
* `git pull origin master` to get you up to date
* While on the `master` branch, run `git checkout -b ##-blockquote` exchanging ## with your initials
* Blockquote styling
    * Inside the `style.css` file give the `blockquote` a margin-left of around 60 pixels. Note, you can adjust this amount if you think it is more pleasing aesthetically
    * Make your blockquote element `position: relative`
    * Now, make a pseudo element for your blockquote e.g. with that has containing a double quote special character `content: "\201C";` like this:
    ```
    blockquote::before {
      content: "\201C";
    }
    ```
    * Make the pseudo element absolutely positioned 65 pixels to the left of the block quote (more or less if needed). Also make it positioned around 20 pixels from the top (more or less if needed)
    * Preview all these changes as you go to see what is happening
    * Give the psuedo element a font size of around 80 pixels
    * Notice how the font used to display the quotation mark is the SAME as the blockquote. IF this looks odd to you, try changing the font of the blockquote
    * Make sure all your styling is aesthetically pleasing, make any adjustments as necessary
* List styling
    * Give the sidebar list items a left margin of 30 pixels
    * Make a psuedo element `before` for the list items
    * Make it have `content: "\2600";`
    * Make it positioned absolutely
    * Position if left by negative 30 pixels
    * Adjust the font size as needed
    * Make the second list item bold using `nth-child`
* Stage, commit, and push to your branch
* Make a pull request

----

### 10. Instructor do (15 minutes)

* CSS3 Concepts

**Spend about 3-4 minutes on each of the following (text-shadow, box-shadow, rounded corners/border-radius)**

* Shadows

> `text-shadow` - values are: horizontal vertical blur color. example: `text-shadow: 3px 3px 8px #999`

> `box-shadow` - values are: horizontal vertical blur color

* Rounded corners

> Shorthand for all 4 corners is `border-radius: 5px`

> Single corners `border-top-left-radius: 5px`

* *Show [exercise](in-class-exercises-1.1/index-5.html){:target="_blank"} on the projector. It is what the students must code out in the next exercise.*

----

### 11. Student Do (20 minutes)

* *Show [exercise](in-class-exercises-1.1/index-5.html){:target="_blank"} on the projector. It is what the students must code out in the next exercise.*

* Review pull request with partner made, if all looks good then merge it. If it looks off then pair program (work together) to make it nicer
* Merge the pull request
* While on the master branch, `git pull origin master`
* Style the assignment on the projector
* Specs
    * Make the #main-header have a bottom border of 1 pixel with the color of #bbb
    * Make the `#main-header` have a `box-shadow: 0 2px 6px #ccc;`
    * Make both sections have a `border-radius` of 15 pixels on all sides
    * Make both sections have a one pixel border with the color of #d7d7d7
    * Make the h1 have a text shadow `text-shadow: 2px 2px 1px #aaa;`
    * Make the h1 and h2's have a font color `#336699`
    * Try adjusting the `letter-spacing` as needed
    * Adjust the margins as needed
* Code what is on the screen

----
# Copyright
Rutgers Coding Boot Camp (C) 2015. All Rights Reserved.
