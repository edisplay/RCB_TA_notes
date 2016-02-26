// #cube .front  { transform: rotateY(   0deg ); }
// #cube .back   { transform: rotateX( 180deg ); }
// #cube .right  { transform: rotateY(  90deg ); }
// #cube .left   { transform: rotateY( -90deg ); }
// #cube .top    { transform: rotateX(  90deg ); }
// #cube .bottom { transform: rotateX( -90deg ); }

// $('.front').animate({
//     step: function(now,fx) {
//       $(this).css('transform','rotateY( 0deg)');  
//       $(this).css('transform','translateZ( 100px)');  
//     },
//     duration:'slow'
// },'linear');


// $('.front').animate({
//     myRotationProperty: 90
// }, {
//     step: function(now, tween) {
//         if (tween.prop === "myRotationProperty") {
//             $(this).css('-webkit-transform', 'rotateY(' + now + 'deg)');
//             $(this).css('transform', 'rotate(' + now + 'deg)');
//         }
//     }
// });
/*
$('#cube').addClass('show-front');
$('#cube').addClass('show-back');
$('#cube').addClass('show-right');
$('#cube').addClass('show-left');
$('#cube').addClass('show-top');
$('#cube').addClass('show-bottom');

$('#cube').removeClass().addClass('show-front');
$('#cube').removeClass().addClass('show-back');
*/