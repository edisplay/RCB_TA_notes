$(document).ready(function() {

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

    var count = 0;

    var positions = ["slot-top-left", "slot-top-mid", "slot-top-right", "slot-mid-left", "slot-mid-mid", "slot-mid-right", "slot-bot-left", "slot-bot-mid", "slot-bot-right"];

    var chars = ["mom", "dad", "brother_big", "brother_mid", "brother_small", "sister_big", "sister_mid", "sister_small", "logo"];

    var charsUsed = [];

    for (var i = 0; i < chars.length; i++) {
        $('[data-char="' + chars[i] + '"]').on('click', function() {
            var name = ($(this).data('char'));

            if(charsUsed.indexOf(name)===-1){
                 alert('we should render to the dom here');
                 count++;
                 charsUsed.push(name);
             }else{
                 alert("Character already used.");
             }

        });
    };

});