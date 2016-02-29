$(document).ready(function() {

    console.log('hihi');
    //put data in here
    var mongoData;
    var dataCount = 0;

    var state = 0;
    var cubeRotateAry = ['show-front', 'show-back', 'show-right', 'show-left', 'show-top', 'show-bottom'];
    var sideAry = ['back', 'right', 'left', 'top', 'bottom', 'front'];

    //ajax get data function
    function populate() {
        // jQuery AJAX call for JSON
        $.getJSON('/check', function(data) {
            //mongoData = data;
            mongoData = data[0];

            // For each item in our JSON, add a table row and cells to the content string
            console.log(mongoData);
        });
    };

    //type animation function
    var typeIt = function() {
        if (state > 0) {
            side = state - 1;
        } else {
            side = 5;
        }
        $("#typewriter").remove();
        $("." + sideAry[side]).append("<div id='typewriter'></div>");

        var i = 0;
        var newsText;

        //cycle to different story
        var show = mongoData.nyt[dataCount][0];
        var print = mongoData.nyt[dataCount][1];
        dataCount++;

        // type animation for new summary
        (function type() {
            console.log(newsText);
            newsText = print.slice(0, ++i);
            //return stop when text is equal to the writeTxt
            if (newsText === print) return;

            //put in the text via javascript
            $("#typewriter").text(newsText);
            setTimeout(type, 30);
        }());
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

            //animte text
            typeIt();
        });
    }

    var fetchData = function() {

        $.ajax({
            type: "POST",
            url: '/fetch'
        }).done(function() {
            $("#seek-box").show();
        }).fail(function() {
            alert("Sorry. Server unavailable. ");
        });

    };

    /* running before user action*/
    $('.container').hide();
    
    //getch da data
    fetchData();

    //hide stuff before everything
    $("#seek-box").hide();

    $("#seek-box").click(function() {
        //put data into html
        populate();
        $('.container').show();
        $("#seek-box").hide();
    });

    /* running the functions*/
    clickBox();

});
