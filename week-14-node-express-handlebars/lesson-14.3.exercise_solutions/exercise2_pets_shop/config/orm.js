var connection = require('../config/connection.js');

var orm = {
    selectAll: function(tableInput) {
        var s = 'SELECT * FROM ' + tableInput + ';';
        connection.query(s, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    FindByName: function(tableInput, petName) {	
        var s = 'SELECT * FROM ' + tableInput + ' WHERE animal_name = ?';
        connection.query(s, [petName], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    FindbyMostAnimal: function(tableOne, tableTwo, tableOneId, tableTwoId) {
        var s = 'SELECT buyer_name FROM pet_buyers LEFT JOIN pets ON pets.buyer_id = pet_buyers.id HAVING count(*) = 3';
        connection.query(s, function(err, result) {
          if (err) throw err;
            console.log(result);
        });
    }
};
    
module.exports = orm;