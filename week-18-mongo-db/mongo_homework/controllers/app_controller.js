var express = require('express');
var router = express.Router();
var scrape = require('../scripts/scrape.js');
var headlinesMaker = require('../models/headlines.js');
var notesMaker = require('../models/notes.js');

//route for testing scrape
router.get('/', function(req,res) {
    scrape("http://www.nytimes.com", function(data) {
        res.json(data);
    })
});

//basic route use cb return json data from mongodb
router.get('/home', function(req, res) {
    res.render('home');
});

//get grab web scrape
router.post('/fetch', function(req, res) {
    headlinesMaker('fetch');
    res.send('success');
});

//check the mongodb for data
router.get('/check', function(req, res) {
    headlinesMaker('check', function(data) {
        res.json(data)
    })
});

//get notes from mongodb
router.post('/gather', function(req, res) {
    notesMaker('check', req.body, function(data) {
        res.json(data)
    })
});

//post save note into mongodb
router.post('/save', function(req, res) {
    notesMaker('save', req.body, function(data) {
        res.json(data)
    })
});

//delete note from mongodb
router.delete('/delete', function(req, res) {
    notesMaker('delete', req.body, function(data) {
        res.json(data)
    })
});


module.exports = router;