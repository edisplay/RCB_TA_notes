'use strict';

var mongoose = require('mongoose');
//set mongoose schema
var Schema = mongoose.Schema;

var HeadlineSchema = new Schema({
	date: { type: Date, default: Date.now },
	headline: []
});

//export pass in schema
module.exports = mongoose.model('Headline', HeadlineSchema);