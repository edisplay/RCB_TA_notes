var request = require('request');
var cheerio = require('cheerio');

//scrape times
var scrape = function(url, cb) {

    if (url == "http://www.nytimes.com") {
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
       			
            cb(obj);
        })
    }
};

module.exports = scrape;
