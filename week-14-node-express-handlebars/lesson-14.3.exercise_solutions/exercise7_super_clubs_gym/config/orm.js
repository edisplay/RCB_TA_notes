var connection = require('../config/connection.js');

var orm = {
    selectAll: function(tableInput, cb) {
        var s = 'SELECT * FROM ' + tableInput + ';';
        connection.query(s, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableInput, nameInput, activeInput, cb) {	
    	var s = 'INSERT INTO ' + tableInput + ' (name, active, visit_count) VALUES (?, ?, ?)';
	  	connection.query(s, [nameInput, activeInput, 0], function(err, result) {
			if (err) throw err;
			cb(result);
		});
    },
    updateOne: function(tableInput, colInput, idInput, cb) {
    	var s = 'UPDATE ' + tableInput + ' SET visit_count = visit_count + 1  WHERE id = ?';
     	connection.query(s, [idInput], function(err, result) {
			if (err) throw err;
			cb(result);
		});
    },
    deleteOne: function(tableInput, colInput, idInput, cb) {
        var s = 'DELETE FROM '+tableInput+' WHERE ID = ?';
        connection.query(s, [idInput], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
};
    
module.exports = orm;