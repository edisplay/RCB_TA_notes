var orm = require('./config/orm.js');

/* The following commands will run every time once the Node server is started.*/

//Find all animals by name order by price
orm.selectAll('pet_buyers');

//Find an animal by the name of the buyer
orm.FindByName('pets','Red13');

//Find the buyer with the most animal
orm.FindbyMostAnimal();