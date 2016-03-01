var mongojs = require('mongojs');
var db = mongojs('newsDB');
var headlines = db.collection('headlines');

module.exports = headlines;