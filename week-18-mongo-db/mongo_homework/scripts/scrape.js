var request = require('request');
var cheerio = require('cheerio');

//scrape times
var scrape = function(url, cb) {

    if (url == "http://www.nytimes.com") {
        request(url, function(err, res, body) {
            var $ = cheerio.load(body);
            var obj = {};

            $('.story-heading').each(function(i, element) {
                var msg = $(this).text();
                //this allows to filter out the below things from the data to make it look nicer
                    //like extra lines, extra spacing, extra tabs, ...
                //we also trim it, to remove spacing on both sides of the data
                var msgNeat = msg.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                obj[i] = [msgNeat]; //initialize an array and put msgNeat into it and we ill push more data into obj[i] below
            });

            //appending the summary
            $('.summary').each(function(i, element) {
                var sumy = $(this).text();
                var sumyNeat = sumy.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                obj[i].push(sumyNeat);
            });

            //console.log(obj); //good for testing
            
            cb(obj);
        })
    }
};

module.exports = scrape;
