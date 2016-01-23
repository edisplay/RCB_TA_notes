mySQL hw 
C-R-U-D
node mySQL app
commandline 

1,000,000 rwos
one database
indexed

1. see all the records 
2. delete a single record based off the primary key 
3. update a single record based off the primary key 
4. delete a record based off the primary key 
5. return a certain amount of records based off a where on a certain column 
6. two table left joins

DB breakdown:

Table: careTaker
| pk | Zoo | name  |
|----|-----|-------|
|  1 |  NY |   John|
|  2 |  NY |   Mary|
|  3 |  SF |   Sara|

Table: animal
| pk | CareTaker_fk |  name | Type  | Age |
|----|--------------|-------|-------|-----|
|  1 |      1       |  Bobo |  Bear |  4  |
|  1 |      1       |  Link |  Lion |  3  |
|  1 |      2       |  CiCi |  Cat  |  1  |