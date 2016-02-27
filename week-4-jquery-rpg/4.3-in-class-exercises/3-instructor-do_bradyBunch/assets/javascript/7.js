$(document).ready(function() {

    /* Create the object "characters" and storing all the names and the images of all characters */
    var characters = {
        'brother_big': {
            imageUrl: "assets/images/brother_big.png"
        },
        'brother_mid': {
            imageUrl: "assets/images/brother_mid.png"
        },
        'brother_small': {
            imageUrl: "assets/images/brother_small.png"
        },
        'dad': {
            imageUrl: "assets/images/dad.png"
        },
        'logo': {
            imageUrl: "assets/images/logo.png"
        },
        'mom': {
            imageUrl: "assets/images/mom.png"
        },
        'sister_big': {
            imageUrl: "assets/images/sister_big.png"
        },
        'sister_mid': {
            imageUrl: "assets/images/sister_mid.png"
        },
        'sister_small': {
            imageUrl: "assets/images/sister_small.png"
        },
    };

    // Create the variable "count" that will keep track how many divs are created
    var count = 0;

    // Create the array "positions" that will store all the id names of divs that we will be appending to as Strings
    var positions = ["slot-top-left", "slot-top-mid", "slot-top-right", "slot-mid-left", "slot-mid-mid", "slot-mid-right", "slot-bot-left", "slot-bot-mid", "slot-bot-right"];

    // Create the array "chars" that will store all the names of our characters as String
    var chars = ["mom", "dad", "brother_big", "brother_mid", "brother_small", "sister_big", "sister_mid", "sister_small", "logo"];

    // Create an empty array for the characters we've already used
    var charsUsed = [];

    // Create a function called "render" that will take 2 inputs: character and render
    // This is a reuseable function that will be called to create divs of character image for us
    var render = function(character, renderArea) {
        //character will be inputed as an object and will be use for different things
        //renderArea will be inputed as a string and will be use select the div we will append to

        // Create the variable "charDiv" that will store the div with our data-name
        var charDiv = $('<div>');
        // Converting the character object to String to use as data-name
        charDiv.attr('data-name', String(character));

        // Create the variable "charImage" that will store the div that contains our image
        var charImage = $("<img alt='image' class='character'>");
        charImage.attr("src", character.imageUrl);
        // Adding the image to "charDiv"
        charDiv.append(charImage);

        // Using jQuery to render the divs onto the HTML
        $("#"+renderArea).append(charDiv);
    };

    // Create a for loop that will create the jQuery add event listener for all the characters in "chars"
    for (var i = 0; i < chars.length; i++) {
        // Target select the div with the data-name that matches the character in our "chars" array
        $('[data-char="' + chars[i] + '"]').on('click', function() {
            // Whenever this div is clicked 
            var name = ($(this).data('char'));

            // Check to see if this character has already been used
            if(charsUsed.indexOf(name)===-1){
                // Call the "render" function to add the div onto HTML
                 render(characters[name], positions[count]);
                // Add 1 to our "count"
                 count++;
                // Add this character to our used characters array
                 charsUsed.push(name);
             }else{
                 alert("Character already used.");
             }

        });
    };

});