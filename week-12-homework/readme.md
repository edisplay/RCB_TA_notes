mySQL hw 
100,000 records
C-R-U-D
node mySQL app
commandline 
one database
indexing

1. see all the records 
2. delete a single record based off the primary key 
3. update a single record based off the primary key 
4. delete a record based off the primary key 
5. return a certain amount of records based off a where on a certain column 
6. two table left join that returns all the zoo keepers for the zoos (if zoos and zoo keepers are seperate tables)


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

