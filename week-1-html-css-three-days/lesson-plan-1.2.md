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
1, 5, 7 
```
- or they will be behind

2 is not important 


# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one being read)

* Students will be able to explain the importance of Version Control (GIT) and how to use it
* Students will make a github respository, push their code to it, and share it with their partners
* Students will make a basic HTML document
* Students will be able to use basic HTML tags appropriately
* Students will be able to implement basic CSS styling to HTML documents

----

### 1. Instructor Do (15 minutes)

> If you have problems with git or github - then stay after class. Come to office hours on Saturday morning. 

> Our main focus today is to get better with HTML and CSS

* Discuss Git
    + What it is 
    + Why it is important
* Discuss Github
    + What it is
    + Why it is important
* Discuss difference between Git and Github
* Discuss what a github repository is
    + What it is 
    + Why it is important
* Demonstrate git commands
    + `git add filename` vs `git add .`
    + `git commit -m "Commit Message"`
    + `git push`
    + `git pull`

### 2. Student Do (20 minutes)

* *Slack out to students*

* If you haven't already, go to https://github.com/ and make an account
* Install Git to your machine if you haven't already http://git-scm.com/downloads
    + Follow instructions here to do so: https://help.github.com/articles/set-up-git/

* Make a new repository called `first-week-repo`
    + do not check the checkbox in front of "Initialize this repository with a README" 
        + if you do then make a new repo and don't check the checkbox this time.
    + using the terminal make a new folder in the place where you store all your code for the class
    + navigate to that folder in the terminal
    + in your terminal run the commands listed on your github repository 

* Make a basic html file called `test.html` that contains the core structure of an html file (e.g. doctype, head, title, body) and include an image. You can find a cute image online or grab a placeholder image http://lorempixel.com/
* Stage, commit, and push `test.html` to Github by using `git add test.html`, and `git commit -m "initial commit"` and `git push origin master`

* **Bonus 1**
    + If you haven't already, generate your SSH keys https://help.github.com/articles/generating-a-new-ssh-key/

* **Bonus 2**
    + Add additional HTML tags to your page and read up on all of them:
https://developer.mozilla.org/en-US/docs/Web/HTML/Element

* **Bonus 3**
    + Find a tag that the instructors don't know about and try to stump them with what it is used for

### 3. Instructor Do (10 minutes)

* *Go over the previous exercise*

### 4. Partners Do (5 minutes)

> Discuss step by step what happened in the previous exercise. If the people around you are lost, YOU ARE RESPONSIBLE for the people around you.

### 5. Everyone Do (10 minutes)

* *Combine all the html code on one line with holding down the following command on an html file on the first line of it*

on Mac:

```
cmd+j 
```

or on Windows:

```
ctrl+j
```

* *save the code*

>How will this look different in the browser? Discuss with your partners

* *Go around the room until you get the answer you want*
        * It won't look different.

* *Open the html file in the browser by right clicking on the file in Sublime Text and going to "Open in Browser"* 

#### Break (15 minutes)

###### 75 minutes so far

### 6 Instructor Do (10 minutes)

* *Discuss what a doctype is and why it is important*

* *Explain indentation and syntax e.g. open and closing tags, self closing tags, double quotations (never single quotes)*

* *Emphasis the importance of semantic markup*
    + https://validator.w3.org/#validate_by_input
    + Copy paste this example to W3.org to show what happens if the markup is invalid
    + Go over what's wrong with the code to the students error by error
            + for the most part, errors include
                    + missing closing tags
                    + tags not being closed in the right order
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

### 7. Instructor Do (5 minutes)

* *Use the html file below. Explain what each tag does and how it correlates to what happens in the browser. Have sublime text up and the browser up split screen*

* doctype 
    HTML5  = `<!DOCTYPE html>`
        * Older doctypes found [here](http://www.w3schools.com/tags/tag_doctype.asp){:target="_blank"}

* body (mention how browsers input their own styling and by default the body tag has margins)
        * `<body></body>`
* basic structure looks like this

```html
<!doctype html>
<html>
    <head>
        <title>Title of Page</title>
    </head>
    <body>
        <h1>Heading One</h1>
        <h2>Heading Two</h2>
        <h3>Heading Three</h3>

        <p>paragraph tag</p>
        <a href="http://www.google.com">Google</a>
        <strong>strong tells browsers that it is important</strong>
        <b>b is for style</b>
    </body>
</html>
```

### 8. Partners Do (2 minutes)

> explain to your partners what each line does. Go. 

### 9. Cold Call (3 minutes)

* *call on random student to go over each part*

### 10. Instructor Do (10 minutes)

* *Use the html file below. Explain what each tag does and how it correlates to what happens in the browser. Have sublime text up and the browser up split screen*

> In Sublime text you can type `command + /` or `ctrl + /` on the line or a selected section to comment it out

* go over every tag *

* the same class can be applied to many elements

* but the same id can be applied to only one element
    * will your page break if you don't follow these rules? Not immediately.
        * but your page will later once we get into JavaScript. 
            * get used to doing things the right way now.

```html
<!doctype html>
<html>
    <head>
        <title>Title of Page</title>
    </head>
    <body>
        <h1>Heading One</h1>
        <h2>Heading Two</h2>
        <h3>Heading Three</h3>
        <!-- <h4>Heading Four</h4> -->

        <ul>
            <li id="iHaveTwo">Cat</li>
            <li>Rabbit</li>
        </ul>

        <ol>
            <li class="scrambledEggs">Heat up pan & put in olive oil</li>
            <li class="scrambledEggs">Crack eggs in pan</li>
        </ol>

        <div>Division of content</div>

        <img src="url to image path"> <br>
        <img src="url to image path"> <br>

        <table>
            <thead>
                <tr>
                    <th>Table Heading</th>
                    <th>Table Heading</th>
                </tr>   
            </thead>  
            <tbody>
                <tr>
                    <td>Table column content</td>
                    <td>Table column content</td>
                </tr>   
            </tbody>      
        </table>
    </body>
</html>
```

### 11. Partners Do (2 minutes)

Explain what's happening in the html file

### 12. Cold Call (3 minutes)

* *call on random student to go over each part*

### 13. Instructor Do (10 minutes)

pull up this example for the students:
[html5-tag-structure.html](in-class-exercises-1.2/html5-tag-structure.html){:target="_blank"}

for your reference:

+ html5 tags - header, nav, footer, article, section, main
    + `<header></header>` - [description](http://www.w3schools.com/tags/tag_header.asp){:target="_blank"}
    + `<nav></nav>` - [description](http://www.w3schools.com/tags/tag_nav.asp){:target="_blank"}
    + `<footer></footer>` - [description](http://www.w3schools.com/tags/tag_footer.asp){:target="_blank"}
    + `<article></article>` - [description](http://www.w3schools.com/tags/tag_article.asp){:target="_blank"}
    + `<section></section>` - [description](http://www.w3schools.com/tags/tag_section.asp){:target="_blank"}
    + `<aside></aside>` - [description](http://www.w3schools.com/tags/tag_aside.asp){:target="_blank"}

### 13. Student Do (10 minutes)

> Explain to your partners what each line does in this html5 tag structure file


### Student Do (20 minutes)
* *Show [this html file](in-class-exercises-1.2/1.2.6-in-class-exercise.html){:target="_blank"} on the projector. It is what the students must code out in this exercise.*

* *Slack this out*

* Make a new file called `student-bio.html` using terminal
* Stage, commit, and push to first-week-repo
* Inside your `student-bio.html` file do the following:
    + Make a `header` tag, inside the header, make an img tag that uses this image:
    https://github.com/RutgersCodingBootcamp/All-Classwork-Homework/blob/master/week-1-html-css-git-heroku/in-class-exercises-1.2/RutgersBanner.png 
        + The `alt` text for the image should read "Rutgers Coding Bootcamp"
    + Underneath the image (and inside the `header` tag) make a `h1` tag that says "Student Bio"
    + Below the header, make a `div` tag
        + Inside this `div` tag make two `section` tags
    + Inside the first `section` tag do the following: 
        + Make an `h2` that contains your name
        + Underneath the `h2`, make an image tag. Include an image of yourself or use a placeholder http://placehold.it/200x200 - be sure to include alt text
        + Undernearth the image tag, make a paragraph (or two) and write a short bio about yourself. You don't have to overthink this. Just something quick. If you can't think of anything right now you can use some placeholder text found http://www.lipsum.com/
    + Inside the second `section` tag do the following:
        + Make a `h2` that says "Contact Info"
        + Underneath the `h2`, make an unordered list that contains three elements: "Email: Youremail@address.com", "Github: github.com/<your github username goes here>", and "Portfolio: coming soon". 
            + Make the part before the colon bold. e.g. "Email:" bold, but the text after it should not be bold
            + Make the content after "Github:" a link. e.g. github.com/your github username goes here> should be a link
            + Make the content after "Portfolio:" (e.g. "coming soon") a link that points to "#"

* If you forgot how to write the html tags, you can reference all html tags here https://developer.mozilla.org/en-US/docs/Web/HTML/Element
* **Do not use any CSS**

Bonus:
* Stage, commit, and push to github


### Instructor Do (20 minutes)

+ Discuss CSS
    + What is CSS
    + What is a style sheet
        + inline vs internal vs external
        + Explain that the order of which the CSS is written is important. Whatever CSS property is closest to the element is the most powerful (e.g. inline overrides internal, internal overrides external, etc.)
  + ID vs Class
    + Where id's and classes go in the html
    + How id's and classes are written in the css
    + Classes are used for multiple elements on a page
    + Id's are used for one element on a page only
  + Explain basic styling properties  
    + font-family
    + font-weight
    + text-align
    + line-height
    + color (uses hex, rgb, and words e.g. white)
    + background-color ( uses hex, rgb/rgba, and words e.g. red)
    + padding (talk about short hand e.g. it goes clockwise: top right bottom left)
    + margin (go over margin: 0 auto; for centering so they can use it in the exercise)
    + border
    + width
    + height
    + floats (briefly discuss so they can use it in the exercise)
+ CSS comments
    + `/* comment */`
        + In Sublime text you can type `command + /` on the line or a selected section to comment it out


### Student Do (20 minutes)

* *Show [this html file](in-class-exercises-1.2/1.2.9-in-class-exercise.html){:target="_blank"} on the projector. It is what the students must code out in the next exercise.*

* *Slack this out*

* Make a folder called `css` using terminal
* Inside the `css` folder make a file called `style.css` using terminal
* Stage, commit, and push this code to Github
* Reference the `style.css` in your `student-bio.html` file. You do this by placing `<link rel="stylesheet" type="text/css" href="css/style.css">` inside the `<head>` tag
* Style the example on the projector
    + Add a class called "container" on the `div` tag
    + Add an id called "main-bio" for the first `section` tag
    + Add an id called "contact-info" for the second `section` tag
    + Add an id called "bio-image" for the bio image
* Style specs
    + body
        + The background color is `#efeee7`
        + The font used `"Georgia",Times New Roman,Times,serif;`
        + The font color is `#333333`
        + Be sure to zero out the body margins and padding so the page is flush to the top of the page, like this:
        ```
        body {
            margin: 0;
            padding: 0;
        }
        ```
    + header
        + The background color is `#d21034`
    + h1
        + The background color is `#333333`, try to figure out the font color
        + The font size is `28px`
        + Look at the example on the screen and eyeball the padding and/or margins and positioning of the text. 
    + h2
        + The font size is `24px`
    + Make the container have a width of 1024 pixels and center it. You do this using `margin: 0 auto;`
    + Make "#main-bio", #contact-info, #bio-image all `float: left`
    + Make the "#bio-image" have a width of 200 pixels
    + Be sure to include alt text in all images
    + "#main-bio" should have a width of `70%`
        + Add margins to the image so there is distance between it and the bio text
    + "#content-info" should have a width of `30%`
    + Adjust the line height so it is 1.5 times the size of the font
    + Make the link color `#d21034`

* If your forgot how to write the css properties, you can reference all css properties here https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

Bonus 1:
* Stage, commit, and push this new file to Github

### Instructor Do (10 minutes)

* *Slack the following to students*


# Copyright
Coding Boot Camp (C) 2015. All Rights Reserved.