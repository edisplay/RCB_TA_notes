$(document).ready(function() {

    console.log('hihi');
    //put data in here
    var mongoData;
    var dataCount = 0;
    var dataDate;
    var notesData;

    //rotating cube state
    var state = 0;
    var cubeRotateAry = ['show-front', 'show-back', 'show-right', 'show-left', 'show-top', 'show-bottom'];
    var sideAry = ['back', 'right', 'left', 'top', 'bottom', 'front'];

    //ajax get news data function
    var populate = function() {
        // jQuery AJAX call for JSON
        $.getJSON('/check', function(data) {
            //mongoData = data;
            mongoData = data[0];
            dataDate = mongoData.date; 
            // For each item in our JSON, add a table row and cells to the content string
            console.log(mongoData, "gotem new");
        }).done(function() {
            // running clickBox functions
            clickBox();
            saveNote();
        });
    }

    //ajax get notes data
    var gather = function() {
        // jQuery AJAX call for JSON
        console.log(dataCount, "current dataCount");
        var idCount = dataCount - 1;

        $.ajax({
            type: "POST",
            dataType: "json",
            url: '/gather',
            data: {
                id: idCount,
                date: dataDate
            }
        }).done(function(response) {
            notesData = response;
            console.log(notesData, "gotem notes");
            postNote();
        }).fail(function() {
            console.log("Sorry. Server unavailable. ");
        });
    }

    //render notes from data
    var postNote = function() {
        $("#note-box").val("");
        var currentData = dataCount - 1;
        if (notesData.length > currentData) {        
            console.log(notesData.length, currentData);
            var currentNote = notesData[currentData].articleNote;
            if (currentNote) {
                $("#note-box").val(currentNote);
            };
        };
    }

    //save notes and clear note taking area
    var saveNote = function() {
        $("#note-button").on('click', function() {
            var t = $("#input-box").val();
            //console.log(t)
            var idCount = dataCount - 1;
            console.log(dataCount, "current dataCount");

            $.ajax({
                type: "POST",
                dataType: "json",
                url: '/save',
                data: {
                    id: idCount,
                    date: dataDate,
                    note: t
                }
            }).done(function() {
                $("#input-box").val("");
                // grab the notes again because we just saved note
                gather();
            }).fail(function() {
                console.log("Sorry. Server unavailable. ");
            });

        });
    }
    //delete notes and clear note taking area
    var deleteNote = function() {
        $("#delete-button").on('click', function() {
            var idCount = dataCount - 1;
            console.log(dataCount, "current dataCount");

            $.ajax({
                type: "DELETE",
                dataType: "json",
                url: '/delete',
                data: {
                    id: idCount,
                    date: dataDate
                }
            }).done(function() {
                gather();
            }).fail(function() {
                console.log("Sorry. Server unavailable. ");
            });

        });
    }

    //type animation function
    var typeIt = function() {
        $("#typewriter").remove();
        var i = 0;
        var newsText;
        
        if (state > 0) {
            side = state - 1;
        } else {
            side = 5;
        }

        $("." + sideAry[side]).append("<div id='typewriter'></div>");
        //cycle to different story
        var print = mongoData.nyt[dataCount][0] + mongoData.nyt[dataCount][1];
        dataCount++;
        // type animation for new summary
        (function type() {
            //console.log(newsText);
            newsText = print.slice(0, ++i);
            //return stop when text is equal to the writeTxt
            if (newsText === print) return;

            //put in the text via javascript
            $("#typewriter").text(newsText);
            setTimeout(type, 35);
        }());
    }

    //render headline
    var headline = function() {
        var show = "|| Article:" + (dataCount + 1) + " ||";
        $("#headline").text(show);
        $("#headline").fadeIn()
            .css({
                top: 500,
                position: 'absolute',
                left: 855
            })
            .animate({
                top: 255
            });
    }

    //add click event function
    var clickBox = function() {
        // $('#cube').removeClass().addClass('show-front');
        $("#cube").on("click", function() {
            //rotate cycle
            if (state <= 5) {
                state++;
            } else {
                state = 0;
            }
            $('#cube').removeClass().addClass(cubeRotateAry[state]);

            //animte headline
            headline();
            //animte text
            typeIt();
            //render note
            gather();
            //enable delete
            deleteNote();

            //start the notes 
            $("#input-area").show();
            $("#saved-area").show();
        });
    }

    // ajax call to do the scrape
    var fetchData = function() {
        $.ajax({
            type: "POST",
            url: '/fetch'
        }).done(function() {
            $("#seek-box").show();
        }).fail(function() {
            alert("Sorry. Server unavailable. ");
        });
    }

    /* running before user action*/
    $('.container').hide();

    //getch da data
    fetchData();

    //hide stuff before everything
    $("#seek-box").hide();
    $("#input-area").hide();
    $("#saved-text").hide();
    $("#saved-area").hide();

    $("#seek-box").click(function() {
        //put data into html
        populate();
        //show stuff
        $('.container').show();
        $("#seek-box").hide();

    })


});
