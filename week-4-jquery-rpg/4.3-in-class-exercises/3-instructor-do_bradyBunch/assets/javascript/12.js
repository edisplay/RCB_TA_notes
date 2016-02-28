$(document).ready(function() {

    // Create the variable "count" that will keep track how many divs are created
    var count = 0;

    // Create the array "positions" that will store all the ids of divs
    var positions = ["slot-top-left", "slot-top-mid", "slot-top-right", "slot-mid-left", "slot-mid-mid", "slot-mid-right", "slot-bot-left", "slot-bot-mid", "slot-bot-right"];

    // Create an empty array for the characters we've already used
    var charsUsed = [];

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

    // Create the array "chars" that will store all the names of our characters from the characters object
    var chars = Object.keys(characters);

    /* create the following divs and add to the div with an id of container: */
    // <div id="slot-top-left"></div>
    // <div id="slot-top-mid"></div>
    // <div id="slot-top-right"></div>
    // <div class="clear"></div>
    // <div id="slot-mid-left"></div>
    // <div id="slot-mid-mid"></div>
    // <div id="slot-mid-right"></div>
    // <div class="clear"></div>
    // <div id="slot-bot-left"></div>
    // <div id="slot-bot-mid"></div>
    // <div id="slot-bot-right"></div>
    // <div class="clear"></div>

    for (var i = 0; i < positions.length; i++) {
        //if ((i == 2) || (i == 5) || (i == 8)) {
        if ((i+1) % 3 == 0) {
            var divTag = $('<div>');
            divTag.attr('id', positions[i]);
            $('#container').append(divTag);

            var divTag = $('<div>');
            divTag.addClass('clear');
            $('#container').append(divTag);
        } else {
            var divTag = $('<div>');
            divTag.attr('id', positions[i]);
            $('#container').append(divTag);
        }
    }

    /* create the following buttons and add to the div with an id of container: */
    // <button class="charButton" data-char="sister_big">sister big</p>
    // <button class="charButton" data-char="mom">mom</p>
    // <button class="charButton" data-char="brother_big">brother big</p>
    // <button class="charButton" data-char="sister_small">sister small</p>
    // <button class="charButton" data-char="logo">logo</p>
    // <button class="charButton" data-char="brother_mid">brother mid</p>
    // <button class="charButton" data-char="sister_mid">sister mid</p>
    // <button class="charButton" data-char="dad">dad</p>
    // <button class="charButton" data-char="brother_small">brother small</p>
    for (var key in characters) {

        var buttonTag = $('<button>');
        buttonTag.addClass('charButton');
        buttonTag.attr('data-char', key);

        var nameModified = key.split('_').join(' '); //replace underscores with spaces
        buttonTag.text(nameModified);

        $('#container').append(buttonTag);
    }

    // Create a function called "render" that will take 2 inputs: character and renderArea
    // This is a reuseable function that will be called to create divs of character images for us
    var render = function(name, character, renderArea) {
        //character will be inputed as an object and will be use for different things
        //renderArea will be inputed as a string and will be use select the div we will append to

        // Create the variable "charDiv" that will store the div with our data-name
        var charDiv = $('<div>');
        // Converting the character object to String to use as data-name
        charDiv.attr('data-name', name);

        // Create the variable "charImage" that will store the image
        var charImage = $("<img alt='brady bunch member' class='character'>");
        charImage.attr("src", character.imageUrl);

        // Adding the image to "charDiv"
        charDiv.append(charImage);

        // Using jQuery to render the divs onto the HTML
        $("#" + renderArea).append(charDiv);
    };

    $('.charButton').on('click', function() {
        // Whenever this div is clicked 
        var name = $(this).data('char');

        // Check to see if this character has already been used
        if (charsUsed.indexOf(name) === -1) {
            // Call the "render" function to add the div onto HTML
            render(name, characters[name], positions[count]);
            
            // Add 1 to our "count"
            count++;

            // Add this character to our used characters array
            charsUsed.push(name);
        } else {
            alert("Character already used.");
        }

    });

});