var tempScrollTop, currentScrollTop = 0;
var angle = 0;
var currentChainOnePosition;
var currentChainTwoPosition;
$(document).scroll(function() {
    currentChainOnePosition = $('.chain-one').css('left');
    currentChainTwoPosition = $('.chain-two').css('right');
    currentChainOnePosition = parseFloat(currentChainOnePosition);
    currentChainTwoPosition = parseFloat(currentChainTwoPosition);
    currentScrollTop = jQuery(document).scrollTop();

	if (tempScrollTop < currentScrollTop ) {
		angle += 3;
  	    $(".cogwheel-first").rotate(angle);
  	    $(".cogwheel-second").rotate(angle);
        checkPosition(currentChainOnePosition, currentChainTwoPosition);
  	    $(".chain-one").animate({left: "+=5"}, 1);
        $(".chain-two").animate({right: "+=5"}, 1);  
	}

	else if (tempScrollTop > currentScrollTop ) {
		angle -= 3;
  	    $(".cogwheel-first").rotate(angle);
  	    $(".cogwheel-second").rotate(angle);
        checkPosition(currentChainOnePosition, currentChainTwoPosition);
        $(".chain-one").animate({left: "-=5"}, 1);
  	    $(".chain-two").animate({right: "-=5"}, 1);
	}

	tempScrollTop = currentScrollTop;
    							
});

function checkPosition(currentChainOnePosition, currentChainTwoPosition) {
    if (currentChainOnePosition >= -100) {
            $(".chain-one").animate({left: "-=500"}, 0);
    }
    else if(currentChainOnePosition <= -2400) {
            $(".chain-one").animate({left: "+=500"}, 0);
    }
    if (currentChainTwoPosition >= -100) {
            $(".chain-two").animate({right: "-=500"}, 0);
    }
    if (currentChainTwoPosition <= -2400) {
            $(".chain-two").animate({right: "+=500"}, 0);
    }
}