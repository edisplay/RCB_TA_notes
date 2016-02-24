var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var mongojs = require('mongojs');
var db = mongojs('newsDB');
var mycollection = db.collection('headlines');

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

//download indeed webpage to scrape
/*
var indeed = function() {
	var url = "http://www.indeed.com/cmp/El-Media-Group/jobs/Director-Music-Programming-cf81fd78479c2899?q=DJ";
	request(url, function(err, res, body) {
		var $ = cheerio.load(body);
		// $('.company').filter(function() {
		// 	var companyName = $(this);
		// 	companyNameText = companyName.text();
		// })
		var companyName = $('.company');
		var companyNameText = companyName.text();
		var jobTitle = $('.jobtitle font');
		var jobTitleText = jobTitle.text();
		var location = $('.location'); 
		var locationText = jobTitle.text(); 
		var summary = $('#job_summary p');
		var summaryText = summary.text();

		var job = {
			jobTitle: jobTitleText,
			location: locationText,
			companyName: companyNameText,
			summary: summaryText
		};

		console.log(job);
	});
}
*/
/*
request('https://news.ycombinator.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('span.comhead').each(function(i, element){
      var a = $(this).prev();
      console.log(a.text());
    });
  }
});
*/

//scrape ny times
var times = function(input, cb) {
	if (input == 'grab') {
		var url = "http://www.nytimes.com";
		request(url, function(err, res, body) {
			var $ = cheerio.load(body);

			// var headline = $(".story-heading");
			// var headlineText = headline.eq(0).text();;
			// var read = {
			// 	headline: headlineText
			// }
			// console.log(read);

			var obj = {};

			/*
			var str = "one thing\\\'s for certain: power blackouts and surges can damage your equipment.";
			alert(str.replace(/\\/g, ''))
			*/
			//str.replace(/\s+/g, ' ').trim()
		    $('.story-heading').each(function(i, element){
		    	var msg = $(this).text();
		     	var msgNeat = msg.replace(/(\r\n|\n|\r|\t|\s+)/gm," ").trim();
		     	obj[i] = [msgNeat]
		    });

		    //appending the summary
		    $('.summary').each(function(i, element){
		    	var sumy = $(this).text();
		     	var sumyNeat = sumy.replace(/(\r\n|\n|\r|\t|\s+)/gm," ").trim();
		     	obj[i].push(sumyNeat);
		    });  

		    //console.log(obj);

		    //storing into db
		    mycollection.save({
		    	"nyt": obj,
		    	date: new Date()
		    });
		});

	}else if (input == 'check') {

		// mycollection.find(function (err, docs) {
		//     // docs is an array of all the documents in mycollection
		//     console.log(docs.nyt);
		// })

		// mycollection.findOne({
		//     // _id: mongojs.ObjectId('56cb8e77c628e17c45c59d3a')
		// }, function(err, doc) {
		//     cb(doc);
		// });

		mycollection.find().sort({lastModifiedDate:1}, function(err, doc){
			cb(doc);
		});

	};
	
}

/* scrape ny times */
// times('grab');
// times('check');

//basic route use cb return json data from mongodb
app.get('/home', function(req, res) {
	res.render('home');
});

app.get('/check', function(req, res) {
	times('check', function(data) {
		res.json(data)
	})
});

app.listen(port, function(){
	console.log("lisenting on port:"+port);
});