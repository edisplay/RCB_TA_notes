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

/*
var str = "one thing\\\'s for certain: power blackouts and surges can damage your equipment.";
alert(str.replace(/\\/g, ''))
*/

//db.dropDatabase()	


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


		        // var str = "<p>This is my <span style='color:red;'>special string</span> with an <img src='http://placehold.it/150x150'> image !</p>",
          //   i = 0,
          //   isTag,
          //   text;