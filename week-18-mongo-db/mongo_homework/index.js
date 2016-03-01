var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var mongojs = require('mongojs');
var db = mongojs('newsDB');
var mycollection = db.collection('headlines');
var mynotes = db.collection('notes');

var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

var port = 3000;

//handlebars
var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//bodyparser & cookieparser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));

//custom date 
var makeDate = function() {

    var d = new Date();
    var formatedDate = "";
    formatedDate = formatedDate + (d.getMonth() + 1) + "_";
    formatedDate = formatedDate + d.getDate() + "_";
    formatedDate = formatedDate + d.getFullYear();
    //console.log(formatedDate);

	return formatedDate;
}

//scrape ny times
var times = function(input, cb) {

    if (input == 'fetch') {
        var url = "http://www.nytimes.com";
        request(url, function(err, res, body) {

            var $ = cheerio.load(body);
            var obj = {};

            //str.replace(/\s+/g, ' ').trim()
            $('.story-heading').each(function(i, element) {
                var msg = $(this).text();
                var msgNeat = msg.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                obj[i] = [msgNeat]
            });

            //appending the summary
            $('.summary').each(function(i, element) {
                var sumy = $(this).text();
                var sumyNeat = sumy.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                obj[i].push(sumyNeat);
            });
            //console.log(obj);

            console.log("start fetching");
            var myCount = function(cb) {
                //check if date already exit in the database
                mycollection.find().count(function(err, doc_count) {
                    //count the collection
                    console.log(doc_count, "total items");
                    //use the callback to return the count
                    cb(doc_count);
                });
            }

            var formatedDate = makeDate();

            //use callback to grab the count
            myCount(function(c) {
                //callback c returns the doc_count
                console.log(c, "this is the db count");
                // if collection empty
                if (c == 0) {
                    console.log("Didn't find any object in collection, do the scrape.");
                    mycollection.save({
                        "nyt": obj,
                        date: formatedDate,
                        myId: 1
                    });
                } else {
                    //if database doesn't have it save it as new
                    mycollection.findOne({
                        myId: c
                    }, function(err, doc) {
                        console.log(doc.date);
                        if (doc.date != formatedDate) {
                            console.log("this is a new item need to be saved");
                            var newId = c + 1;
                            mycollection.save({
                                "nyt": obj,
                                date: formatedDate,
                                myId: newId
                            });
                        } else {
                            console.log("we already got this, go on");
                        }
                    });
                }

            })
        });
    } else if (input == 'check') {
        //descending sort
        mycollection.find().sort({ myId: -1 }, function(err, doc) {
            console.log(doc[0].date, doc[0].myId);
            cb(doc);
        });

    } else if (input == 'update') {
        //descending sort
        mycollection.find().sort({ myId: -1 }, function(err, doc) {
            console.log(doc[0].date, doc[0].myId);
            //cb(doc);
        });
    }
}

//save notes into mongodb
var notes = function(input, data, cb) {

    if (input == "save") {
    	console.log(data);

        mynotes.save({
			articleId: data.id,
			articleDate: data.date,
			articleNote: data.note
        });

    	cb(data);
    };
    //finish the save

}

//basic route use cb return json data from mongodb
app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/check', function(req, res) {
    times('check', function(data) {
        res.json(data)
    })
});

//get grab web scrape
app.post('/fetch', function(req, res) {
    times('fetch');
    res.send('success');
});

//get save note
app.post('/save', function(req, res) {
    notes('save', req.body, function(data) {
    	// post req must give back resopnce as json??? wat..ok..
        res.json(data)
    })
});


app.listen(port, function() {
    console.log("lisenting on port:" + port);
});
