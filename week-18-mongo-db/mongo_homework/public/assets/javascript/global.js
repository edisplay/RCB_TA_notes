$(document).ready(function() {

    console.log('hihi');
    //put data in here
    var mongoData;
    var dataCount = 0;
    var dataDate;

    var state = 0;
    var cubeRotateAry = ['show-front', 'show-back', 'show-right', 'show-left', 'show-top', 'show-bottom'];
    var sideAry = ['back', 'right', 'left', 'top', 'bottom', 'front'];

    //ajax get data function
    var populate = function() {
        // jQuery AJAX call for JSON
        $.getJSON('/check', function(data) {
            //mongoData = data;
            mongoData = data[0];
            dataDate = mongoData.date; 
            // For each item in our JSON, add a table row and cells to the content string
            console.log(mongoData, "gotem");
        });
    }

    //save notes and clear note taking area
    var saveNote = function() {
        $("#note-text").on('click', function() {
            var t = $("#input-box").val();
            //console.log(t)
            var idCount = dataCount - 1;

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
        var print = mongoData.nyt[dataCount][1];
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
            //start the notes 
            $("#input-area").show();
            $("#saved-text").show();
            saveNote();
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

    $("#seek-box").click(function() {
        //put data into html
        populate();
        //show stuff
        $('.container').show();
        $("#seek-box").hide();

    })

    /* running the functions*/
    clickBox();

    /* note box */
});
