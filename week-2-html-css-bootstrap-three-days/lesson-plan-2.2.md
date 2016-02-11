# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

Look at this file at the root of the repository:
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)

* Develop your vision for a website -- and then build it!
* Work independently or in a group on complex projects throughout the entire development lifecycle
* Build a frontend website either from scratch or utilizing a frontend framework (such as Bootstrap)


# Theme

Branching - Deployment - Bootstrap

# INSTRUCTOR MUST COVER!!!

```
The Bootstrap part for their homework
```

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one is read)

students will make pull requests with branching in groups

students will use bootstrap to style their pages using the grid system 

### 1. Student Do 5 minutes

explain to your partners the below code. Why do you need the div with a class of clear there?

What would happen if it went away?


``` css
#main_container {
 width: 400px;
 margin: 20px auto;
 border: 2px solid #cccccc;
 padding: 5px;
}

.floated_box {
 float: left;
 width: 100px;
 height: 100px;
 border: 1px solid #990000;
 margin: 10px;
}

.clear {
	clear: both;
}
```

``` html
<div id="main_container">
 <p>Some content.</p>
 <div class="floated_box"></div>
 <div class="floated_box"></div>
 <div class="floated_box"></div>
 <div class="floated_box"></div>
 <div class="floated_box"></div>

 <div class="clear"></div>
</div>
```

### 2. Everyone Do 5 minutes

go over the last exercise

### 3. Instructor and TA demo

do the next exercise with a TA - verbatim

### 1. Student Do - 25 minutes

* *Instructor picks groups - make sure the group has 1 strong, 1 average, 1 weak. Distribute everyone equally.*

* *Instructor walk around and look at people's screens - they better be working - or you'll give it to them!*

1. get in teams of 3 - one is the project leader, the others are collaborators

2. project leader makes a repo and adds the others as collaborators. 

3. project leader makes a branch off master called project-lead

4. one collaborator makes a branch off master called collab-one 
another collaborator makes a branch off master called collab-two

5. everyone push up your branches. 

6. project leader will work on the project-lead branch and make an index.html file, an index.php file, a composer.json file

7. project leader will fill in the files appropriately

8. inside the index.html file, project leader will make a page with three columns. The first column will include a picture of his/her favorite band, and a youtube video, along with a h2 tag saying the band's name

9. project leader pushes up this code to the project-lead branch and submits a pull request to master, project-leader assigns the pull request to one of the collaborators. 

10. the collaborator will look over the pull request and accept it if things look ok. If they don't, then the collaborator will make comments on the file on the github.com pull request and ask the project leader to make edits. The project leader will make those edits and then push up to their project-lead branch. The pull request will automatically update. No need to make a new pull request! The collaborator will then merge it into master.

11. the collaborators will now do git pull origin master to get the changes that were pushed to master

12. each collaborator will put their own favorit eband image, h2 of the band name and band youtube video into another column, and push up their code to their branches and then make a pull request to master with it. Then they'll assign it to each other to go over.

13. If you run into a merging conflict (you probably will) then fix it on the project leader's computer and merge to master.

14. deploy to heroku.


### 2. Groups Do 15 minutes

* *walk around and find the groups that completed the exercise completely.*

* *have all the groups that didn't finish the exercise move *

##### break 15 minutes

### 3. Instructor Do 20 minutes

show/talk about a deployment process you used in your experience that is similar to what the students are doing now with git branching

* from Pavan to instructors: My deployment process for inrtracker is like this:

	developers make feature breanches with initials-feature-date

	pull requests to master

	if accepted, then Pavan merges master into staging and then deploys staging 

	staging is a replica of production except that the servers have less memory (they cost less)

	if things look good on staging then Pavan merges master into production and then deploys to production

	Pavan uses github, digital ocean and cloud66 to push deployments digital ocean.


### 4. Force Questions Out Strategy

I won't move forward until I get 3 good questions


### Instructor do - Go over bootstrap grid

make a div row

and 3 columns of col-md-4 in it

put in an image inside each one - put widths and heights on the images

highlight the divs with inspector - show their width

modify one of the divs in inspector to be col-md-9

what happened

highlight the divs with inspector and show their widths now

change them all to be col-md-3

highlight the divs with inspector and show their widths now


### Student Leaders Teach

keep your code up from the previous demo

Pick 4 students (avg level) send them to 4 corners of room

Tell students that they are the leaders

Tell students to go to whoever is closest

Now, leaders explain to your groups the code on the board line by line - then discuss it as a group

### Exercise on bootstrap grid 


make three columns with a class of col-md-4 inside of a div with a class of row

above the div with a class of row put in an h1 saying my top three favorite bands/musicians

inside of the divs that have a class of col-md-4 put 
	- in a h2 of one of your favorite band/musician
	- in an image of the band/musician into each one
	- in a short sentence about the band in a paragraph tag


# Copyright
Coding Boot Camp (C) 2015. All Rights Reserved.