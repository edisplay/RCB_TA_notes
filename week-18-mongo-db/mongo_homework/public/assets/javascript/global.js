$(document).ready(function() {

    console.log('hihi');
    //put data in here
    var mongoData;
    var dataCount = 0;

    var state = 0;
    var cubeRotateAry = ['show-front','show-back','show-right','show-left','show-top','show-bottom'];
    var sideAry = ['back','right','left','top','bottom','front'];

    //ajax get data function
    function populate() {
        // jQuery AJAX call for JSON
        $.getJSON('/check', function(data) {
            // Stick our chickenspots data array into a friedChickenList variable in the global object
            // For large apps, this is a bad idea, there should be a limit of chicken spots that get displayed and pagination built in
            
            mongoData = data;
            //mongoData = data[0];

            // For each item in our JSON, add a table row and cells to the content string
            console.log(mongoData);
        });
    };

    //type animation function
    var typeIt = function() {
        if (state > 0) {
            side = state - 1;
        }else {
            side = 5;
        }
        $( "#typewriter" ).remove();
        $( "."+sideAry[side] ).append( "<div id='typewriter'></div>" );
        
        var str = "<p>This is my <span style='color:red;'>special string</span> with an <img src='http://placehold.it/150x150'> image !</p>",
            i = 0,
            isTag,
            text;

        // var writeTxt = "<p>This is the news are you are reading it now!</p>";
        // var noTag = "This is the news are you are reading it now!";

        //cycle to different story
        //var print = mongoData.nyt[dataCount][0] + '     ' + mongoData.nyt[dataCount][1];
        var print = mongoData.nyt[dataCount][1];
        dataCount++;

        (function type() {
            text = print.slice(0, ++i);
            //return stop when text is equal to the writeTxt
            if (text === print) return;
            
            //put in the text via javascript
            document.getElementById('typewriter').innerHTML = text;
            // var char = text.slice(-1);
            // if( char === '<' ) isTag = true;
            // if( char === '>' ) isTag = false;
            // if (isTag) return type();
            //recur the function type to add html with setTimeout wait of 30 min seconds
            setTimeout(type, 30);
        }());
    }

    //add click event function
    var clickBox = function() {  

        // $('#cube').removeClass().addClass('show-front');
        $( "#cube" ).on( "click", function() {
            //rotate cycle
            if (state <= 5) {
                state++;
            }else{
                state = 0;   
            }
            $('#cube').removeClass().addClass(cubeRotateAry[state]);
            
            //animte text
            typeIt();
        });
    }

    var fetchData = function() {
        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            url: '/fetch'
        });
        //populate();
    };
    
    /* running before user action*/
    $('.container').hide();
    $("#seek-box").click(function(){
        //getch da data
        fetchData();
        $('.container').show();
        $("#seek-box").hide();
    });

    /* running the functions*/
    clickBox();


});