$(document).ready(function () {

	$('a[href^="#"], a[href^="."]').click(function () {
		var menuHeight;
		if ($(".menu-container").hasClass("to-top")) {
			menuHeight = $(".menu-container").height();
		} else {
			menuHeight = $(".menu-container").height();
			menuHeight = menuHeight * 2;
		}
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({
				scrollTop: $(scroll_el).offset().top - menuHeight
			}, 1000);
		}
		return false;
	});
});
