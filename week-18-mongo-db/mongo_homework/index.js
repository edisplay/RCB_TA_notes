var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var app = express();
var port = 3000;

//download indeed webpage to scrape
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
var times = function() {
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
	     	obj[i] = msg.replace(/(\r\n|\n|\r|\t|\s+)/gm," ").trim();
	    });

	    //console.log(obj);
	});
	
}
times();

app.listen(port, function(){
	console.log("lisentin on port:"+port);
});