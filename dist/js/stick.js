$(window).load(function() {
	var start_pos=$('.menu-container').offset().top;
 	$(window).scroll(function(){
  		if ($(window).scrollTop()>=start_pos) {
      		if ($('.menu-container').hasClass()==false) $('.menu-container').addClass('to-top');
  		}
  		else $('.menu-container').removeClass('to-top');
 	});
});