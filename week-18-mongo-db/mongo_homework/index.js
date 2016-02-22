var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

// var mongoose = require('mongoose');
// var Headline = require('./Headline.model')
// var db = 'mongodb://localhost/headlineDB';
// mongoose.connect(db);

var mongojs = require('mongojs');
var db = mongojs('mydb');
var mycollection = db.collection('headlines');

var app = express();
var port = 3000;

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
var times = function(input) {
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
		    mycollection.save(obj);
		});

	}else if (input == 'check') {
		//var f = mycollection.find('headlines');
		mycollection.find(function (err, docs) {
		    // docs is an array of all the documents in mycollection
		    console.log(docs);
		})
	};
	
}

//scrape ny times
times('check');

app.listen(port, function(){
	console.log("lisenting on port:"+port);
});