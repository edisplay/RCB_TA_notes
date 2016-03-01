var connection = require('../config/connection.js');

var orm = {
    selectAll: function(tableInput, cb) {
        var s = 'SELECT * FROM ' + tableInput + ';';
        connection.query(s, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableInput, nameInput, devourInput, cb) {	
    	var s = 'INSERT INTO ' + tableInput + ' (burger_name, devoured) VALUES (?, ?)';
	  	connection.query(s, [nameInput, devourInput], function(err, result) {
			if (err) throw err;
			cb(result);
		});
    },
    updateOne: function(tableInput, colInput, idInput, cb) {
    	var s = 'UPDATE ' + tableInput + ' SET devoured = ? WHERE id = ?';
     	connection.query(s, [colInput, idInput], function(err, result) {
			if (err) throw err;
			cb(result);
		});
    }
};
    
module.exports = orm;