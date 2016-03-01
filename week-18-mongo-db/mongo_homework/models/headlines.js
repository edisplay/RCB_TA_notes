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


            console.log("start fetching");
            var myCount = function(cb) {
                //check if date already exit in the database
                headlines.find().count(function(err, doc_count) {
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
                    headlines.save({
                        "nyt": obj,
                        date: formatedDate,
                        myId: 1
                    });
                } else {
                    //if database doesn't have it save it as new
                    headlines.findOne({
                        myId: c
                    }, function(err, doc) {
                        console.log(doc.date);
                        if (doc.date != formatedDate) {
                            console.log("this is a new item need to be saved");
                            var newId = c + 1;
                            headlines.save({
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
        headlines.find().sort({ myId: -1 }, function(err, doc) {
            console.log(doc[0].date, doc[0].myId);
            cb(doc);
        });

    } else if (input == 'update') {
        //descending sort
        headlines.find().sort({ myId: -1 }, function(err, doc) {
            console.log(doc[0].date, doc[0].myId);
            //cb(doc);
        });
    }