var mongojs = require('mongojs');
var db = mongojs('newsDB');
var mynotes = db.collection('notes');

module.exports = mynotes;