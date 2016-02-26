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

	if (input == 'fetch') {
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

			//db.dropDatabase()
			var d = new Date();
		 	//	console.log( d.getMonth() );
			//	console.log( d.getDate() );
		 	//	console.log( d.getFullYear() );
		    
		    var formatedDate = "";
		    formatedDate = formatedDate + (d.getMonth() + 1) + "_";
		    formatedDate = formatedDate + d.getDate() + "_";
		    formatedDate = formatedDate + d.getFullYear();
		    //console.log(formatedDate);
			
			var myCount = function(cb) {
			    //check if date already exit in the database
				mycollection.find().count(function(err, doc_count){
					//console.log(doc_count, "total items")
					cb( doc_count );
					//console.log(num, "is the new num");
				});
			}

			//use callback to grab the count
			myCount(function(c){
				console.log(c, "this is the db count");
		
				mycollection.findOne({
				    myId: c
				}, function(err, doc) {
				    //console.log(doc.date);
				    if (doc.date != formatedDate) {
				    	console.log("this is a new item need to be saved");
				    }else{
				    	console.log("we already got this, go on");
				    }
				});

			})


		});
	}else if (input == 'check') {

		// mycollection.find(function (err, docs) {
		//     // docs is an array of all the documents in mycollection
		//     console.log(docs.nyt);
		// })

		// mycollection.findOne({
		//     _id: mongojs.ObjectId('56cf11ffadd9c2540842870c')
		// }, function(err, doc) {
		//     cb(doc);
		// });

		// mycollection.find().sort({lastModifiedDate:1}, function(err, doc){
		// 	console.log(doc[0].date, "popluate data date");
		// 	cb(doc);
		// });

		mycollection.find().sort({ myId: -1 }, function(err, doc){
			console.log(doc[0].date, doc[0].myId);
			
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

//get save data
app.post('/fetch', function(req, res) {
	times('fetch');
	res.send('success');
});

app.listen(port, function(){
	console.log("lisenting on port:"+port);
});