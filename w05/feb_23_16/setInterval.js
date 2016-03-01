var number = 100;
    $('#stop').click(stop);
    $('#resume').click(run);

    function run(){
    	counter = setInterval(increment, 1000); //setInterval runs the function "interval" every second
    };
    function increment(){
    	number--;
    	document.getElementById('show-number').innerHTML = ('<h2>' + number + '</h2>');
	    if (number === 0){
		    stop();
		    alert('Time Up!');
	    };
    };

    function stop(){
    	clearInterval(counter); //stop "setInterval"
    };

    run();