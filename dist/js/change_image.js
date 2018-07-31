$(document).ready(function(){
    var isClicked = false;
    $('.more-button').click( function() {
        if (!isClicked) {
            $('.more-button').attr('src', 'img/load_more_button_2.png');
            isClicked = true;
            setTimeout(function() {
                $('.more-button').attr('src', 'img/load_more_button.png');
                isClicked = false;
            }, 1000);
        }
    });

});