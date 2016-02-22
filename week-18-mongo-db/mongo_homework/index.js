var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var app = express();
var port = 3000;

//download targeted webpage to scrape
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


app.listen(port, function(){
	console.log("lisentin on port:"+port);
});