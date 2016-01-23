#Week of 12 homework for Node.js & mySQL

### Introduction

* You will be creating a Zoo app.

* Building it with an object.

* Using an mySQL database

* It will be a command line node app that will take in prompted text as an input.


## Part 0: Setup

Make sure to download or aquire the file
```
zooDB.sql
```
Install npm packages

```
npm install prompt --save
npm install mysql --save
```

launch: MySQL 5.7 Command Line Client
enter your password
```
CREATE DATABASE myTestDB;
```

launch: gitbash
Example command:
```
C:/xampp/mysql/bin/mysql –u root -p myTestDB < C:/zooDB.sql
```
In this example mySQL is connect via XAMPP and mysql database is located with in path:

-u for your mySQL user name, my user name "root", it may also ask for your password.

myTestDB is the name of the DB you created
zooDB is located in C folder

Test to see if import worked, inside MyySQL Client:
Use myTestDB

run the following command
```
SELECT * FROM careTaker;
```
You should get back 99 rows in set.

With the database imported, you are ready to create the node app.

## Part 1: Creating the Node.js connection to mySQL






# Copyright
Rutgers Coding Boot Camp (C) 2016. All Rights Reserved.