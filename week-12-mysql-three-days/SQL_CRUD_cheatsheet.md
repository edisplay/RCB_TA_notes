### Learning Objectives
**Students will be able to...**

* Differentiate between a language and a DSL
* write basic queries to facilitate CRUD operations
* write sql statements to query a provided data set
* Conceptualize entries stored as rows in a table

## Part One - Introduce SQL
**5 minutes** 

- Instructor: Leading discussion
- $tudents: Working alone

* DSL - What is a DSL? DSL stands for Domain Specific Language
* GPL - What is a GPL? GPL stands for General Purpose Language
* JavaScript is a GPL. It is a language that can be written to serve various applications. 
* DSLs are computer languages that specialize in a particular domain. For the next few days we will be learning about SQL
* SQL stands for Structured Query Language. It is a domain specific language because it's main purpose is to manage relational databases. 
* This is a database language that allows us to store and persist data so we can access it even after our server restarts. 
* Today we will be using a library called sqlite to write our queries. Let's begin our CODE ALONG

## Part Two - Start CRUDDIN (C and R)
**15 minutes**

* Instructor: Code Along
* Students: Code Along

* Write CRUD on the board vertically and fill it out as you code along
	* C - POST - INSERT INTO
	* R - GET - SELECT something FROM somewhere WHERE a condition is true
	* U - PUT - UPDATE WHERE
	* D - DELETE - DELETE WHERE

* Let's start but creating a new directory

```
mkdir tomCRUD
```
* Install `psql`
* Go into that directory and start Postgres

```
psql
```
* Let's create a database for practicing
* All SQL Commands are Capitalized
* Make sure you include the `;`

```
CREATE DATABASE crudpractice;
```
* Let's list our databases
* You can use this using the command `\l`
* Let's connect to that database

```
\c crudpractice;
```
* Check out this command: `\dt`
* Let's create a table for tommy

```
CREATE TABLE tomcrud (id SERIAL PRIMARY KEY, character TEXT, movie TEXT, year INTEGER);
```
* Commands in SQL should be written in CAPS. This is to distinguish them from the names of tables and columns.
* `tomCRUD` is the name of the table
* `id` / `character` / `movie` are the names of the columns
* `charater` and `movie` columns are specified as a type `TEXT`
* `id` is an integer but also a primary key. This ensures that it is unique. 
* Sqlite will automatcially insert an id into rows 

* Show your schema. This will give you your create statement for this table. It is useful if you forget the format of your columns or value types.

```
\dt - only shows my 

SELECT * FROM tomcrud; //Shows your columns
```
* Now let's start adding information to our table

```
INSERT INTO tomcrud (character, movie, year) VALUES ('Maverick', 'Top Gun', 1986);
```
* Fill out the `C` part of CRUD on the board. 
	* This is similar to how we used "POST" 
	* C - POST - INSERT INTO

* Show them their new information!

```
SELECT * FROM tomcrud
```
* `*` is a wildcard that allows us to grab everything from the table `tomcrud`
* Fill out the 'R' part of the CRUD on the board.
	* This is similar to how we use "GET"
	* R - GET - SELECT something FROM somewhere WHERE a condition is met

## Part Three - They Do
**10 minutes**

* Instructor: walk around
* Student: Do some shit

Alright now that we know how to read and write to our database lets add the following information below. 

| character  | movie  | year |
|------------| ------ |-------|
|Cage   | Edge of Tomorrow | 2014 |
|Ethan Hunt | Mission Impossible | 1996 |
|Vincent | Jack Reacher  | 2012 |
|Vincent  | Collateral  | 2004 | 
|Joel Goodson | Risky Business| 1983 |
|Brian Flanagan| Cocktail   | 1988 |
|Steve Randle | The Outsiders| 1983 |
|Jerry Maccgiree | Jerry Maguire| 1996 |
|Lt. Daniel Kaffee| A Few Good Men| 1992 |

Run SELECT * FROM to see all the movies in the tomcrud database


## Part Four - Back to CRUD Code Along (U and D)
**10 minutes**
Instructor: Code Along
Student: Code Along

* Run `SELECT * FROM tomcrud;`
* What if we want to only show one? 

```
SELECT * FROM tomcrud WHERE movie = "Collateral";

SELECT * FROM tomcrud WHERE id = 3;
``` 

* This is similar to `GET /tomcrud/:id`
* WHERE command adds conditions for you to narrow down your results. We can search by the "movie" column, or by "id"

* Let's add more movies that are not accurate, some that carry the same title or character name

```
INSERT INTO tomcrud (character, movie, year) VALUES ("Reacher", "The Aviator", 2004), ("Brad Pitt", "Days of Thunder", 1990);
```
* Now lets search for these redundancies using the select from where method

```
SELECT * FROM tomcrud WHERE character ="Reacher";
```
* How about a more accurate search?

```
SELECT * FROM tomcrud WHERE character = "Reacher" AND year = 2012
```
* Now lets UPDATE our Days of Thunder

```
UPDATE tomcrud SET character="Cole Trickle" WHERE movie = "Days of Thunder";
```

* Fill out the `U` for CRUD on the board
	* U - PUT - Update table SET column WHERE something

* Lets Delete that Reacher value

```
DELETE FROM tomcrud WHERE id=2 OR id=3 OR id=5 OR id=6; 
```