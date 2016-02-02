var connection = require('../config/connection.js');

var orm = {
    selectAll: function(table, cb) {
        var s = 'SELECT * FROM ' + table + ';'
        connection.query(s, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};
    
module.exports = orm;