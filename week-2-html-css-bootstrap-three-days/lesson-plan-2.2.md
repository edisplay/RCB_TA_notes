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
ALL or they won't be able to do the homework.
```

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one is read)

* Develop your vision for a website -- and then build it!
* Expertly navigate the file system and terminal basics
* Work independently or in a group on complex projects throughout the entire development lifecycle
* Communicate the basics of serving a webpage and how the browser renders code
* Understand and implement the mechanics of Git flow (including branching, merging, pull requests)
* Deploy static websites to a cloud provider

----


### 1. Instructor Do (30 minutes)

**Spend only 2-3 minutes talking about each of the following (line-height, font-size, line length, font colors, letter spacing, typography, font files / @font-face, google fonts)**

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

* Typography

> [show this example on projector that shows different between sans-serif and serif](in-class-exercises-2.1/font-example.html)

> Serif fonts have lines on the edges of the characters

> Sans-serif fonts have no lines

> It is generally considered that sans-serif fonts are easier to read online

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


### 2. Student Do (30 minutes)

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

### 3. Instructor Do (20 minutes)

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

** Example - [Display this in Chrome](in-class-exercises-2.1/pseudo-element-example.html){:target="_blank"} **
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


### 4. Partner Do (20 minutes)

* *Show [exercise](in-class-exercises-2.1/index-4.html){:target="_blank"} on the projector. It is what the students must code out in the next exercise.*

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
###### Break (15 minutes) 115 minutes went by including break
----

### 5. Instructor do (30 minutes)

* CSS3 Concepts

**Spend about 3-4 minutes on each of the following (text-shadow, box-shadow, rounded corners/border-radius)**

* Shadows

> `text-shadow` - values are: horizontal vertical blur color. example: `text-shadow: 3px 3px 8px #999`

> `box-shadow` - values are: horizontal vertical blur color

* Rounded corners

> Shorthand for all 4 corners is `border-radius: 5px`

> Single corners `border-top-left-radius: 5px`

* *Show [exercise](in-class-exercises-2.1/index-5.html){:target="_blank"} on the projector. It is what the students must code out in the next exercise.*

----

### 6. Student Do (35 minutes)

* *Show [exercise](in-class-exercises-2.1/index-5.html){:target="_blank"} on the projector. It is what the students must code out in the next exercise.*

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
