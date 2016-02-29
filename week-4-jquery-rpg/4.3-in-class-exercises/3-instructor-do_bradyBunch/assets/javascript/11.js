$(document).ready(function() {

    var count = 0;

    var positions = ["slot-top-left", "slot-top-mid", "slot-top-right", "slot-mid-left", "slot-mid-mid", "slot-mid-right", "slot-bot-left", "slot-bot-mid", "slot-bot-right"];

    var charsUsed = [];

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

    var chars = Object.keys(characters);

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

    for (var key in characters) {

        var buttonTag = $('<button>');
        buttonTag.addClass('charButton');
        buttonTag.attr('data-char', key);

        var nameModified = key.split('_').join(' '); //replace underscores with spaces
        buttonTag.text(nameModified);

        $('#container').append(buttonTag);
    }

    var render = function(name, character, renderArea) {

        var charDiv = $('<div>');
        charDiv.attr('data-name', name);

        var charImage = $("<img alt='brady bunch member' class='character'>");
        charImage.attr("src", character.imageUrl);

        charDiv.append(charImage);

        $("#" + renderArea).append(charDiv);
    };

    $('.charButton').on('click', function() {
        var name = $(this).data('char');

        if (charsUsed.indexOf(name) === -1) {
            render(name, characters[name], positions[count]);
            
            count++;

            charsUsed.push(name);
        } else {
            alert("Character already used.");
        }

    });

});