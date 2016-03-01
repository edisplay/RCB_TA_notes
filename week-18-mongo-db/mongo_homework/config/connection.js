var mongojs = require('mongojs');
var db = mongojs('newsDB');

var myheadlines = db.collection('headlines');
var mynotes = db.collection('notes');

module.exports = {
    headlines: myheadlines,
    notes: mynotes
};