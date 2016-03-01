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

//save notes into mongodb
var notes = function(input, data, cb) {

    if (input == "save") {
        console.log(data.id, data.date, "is what we are checking");

        notes.find({
            //mongodb find sucks ugh
            "articleId": data.id,
            "articleDate": data.date
        }, function(err, doc) {
            console.log(doc, data.id, "this is what notes we found")
            if (!doc[0]) {
                console.log("this is a new notes need to be saved");
                notes.save({
                    articleId: data.id,
                    articleDate: data.date,
                    articleNote: data.note
                });
            } else {
                //console.log(doc[0]["_id"]);
                console.log("we already got a note but we can replace it");
                notes.remove({
                    "_id": doc[0]["_id"]
                });
                notes.save({
                    articleId: data.id,
                    articleDate: data.date,
                    articleNote: data.note
                });
            }
        });

        cb(data);

    } else if (input == "check") {
        console.log(data, "got the data needed for notes");

        notes.find({
            articleDate: data.date
        }).sort({ articleId: 1 }, function(err, doc) {
            cb(doc);
        });

    } else if (input == "delete") {
        console.log(data, "for replace into empty note");
        notes.find({
            //mongodb find sucks ugh
            "articleId": data.id,
            "articleDate": data.date
        }, function(err, doc) {
            console.log(doc, data.id, "this is what notes we found")
            if (!doc[0]) {
                console.log("this is a new notes need to be saved");
                notes.save({
                    articleId: data.id,
                    articleDate: data.date,
                    articleNote: data.note
                });
            } else {
                //console.log(doc[0]["_id"]);
                console.log("we already got a note but we can replace it");
                notes.remove({
                    "_id": doc[0]["_id"]
                });
                notes.save({
                    articleId: data.id,
                    articleDate: data.date,
                    articleNote: " "
                });
            }
        });
        
    	cb(data);
    };

}