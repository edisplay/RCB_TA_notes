var makeDate = require('../scripts/date.js');
var mynotes = require('../config/notes_connect.js');

//save notes into mongodb
var notesMaker = function(input, data, cb) {
    //create date
    var formatedDate = makeDate();

    if (input == "save") {
        console.log(data.id, data.date, "is what we are checking");

        mynotes.find({
            //mongodb find sucks ugh
            "articleId": data.id,
            "articleDate": data.date
        }, function(err, doc) {
            console.log(doc, data.id, "this is what notes we found")
            if (!doc[0]) {
                console.log("this is a new notes need to be saved");
                mynotes.save({
                    articleId: data.id,
                    articleDate: data.date,
                    articleNote: data.note
                });
            } else {
                //console.log(doc[0]["_id"]);
                console.log("we already got a note but we can replace it");
                mynotes.remove({
                    "_id": doc[0]["_id"]
                });
                mynotes.save({
                    articleId: data.id,
                    articleDate: data.date,
                    articleNote: data.note
                });
            }
        });
        cb(data);
    } else if (input == "check") {
        console.log(data, "got the data needed for notes");

        mynotes.find({
            articleDate: data.date
        }).sort({ articleId: 1 }, function(err, doc) {
            cb(doc);
        });

    } else if (input == "delete") {
        console.log(data, "for replace into empty note");
        mynotes.find({
            //mongodb find sucks ugh
            "articleId": data.id,
            "articleDate": data.date
        }, function(err, doc) {
            console.log(doc, data.id, "this is what notes we found")
            if (!doc[0]) {
                console.log("this is a new notes need to be saved");
                mynotes.save({
                    articleId: data.id,
                    articleDate: data.date,
                    articleNote: data.note
                });
            } else {
                //console.log(doc[0]["_id"]);
                console.log("we already got a note but we can replace it");
                mynotes.remove({
                    "_id": doc[0]["_id"]
                });
                mynotes.save({
                    articleId: data.id,
                    articleDate: data.date,
                    articleNote: " "
                });
            }
        });
        
    	cb(data);
    };

}

module.exports = notesMaker;