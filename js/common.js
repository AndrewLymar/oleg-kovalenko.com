$(document).ready(function () {
	$(".fancybox-thumb").fancybox({
		prevEffect: 'none',
		nextEffect: 'none',
		helpers: {
			title: {
				type: 'inside'
			},
			thumbs: {
				width: 50,
				height: 50
			}
		}
	});

	$('.fancybox-media').fancybox({
		openEffect: 'none',
		closeEffect: 'none',
		helpers: {
			media: {}
		}
	});

	try {
		$.browserSelector();
		if ($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch (err) {

	};

	var num = 1;
	var isClicked = false;
	$(".more-button").click(function () {
		if (!isClicked) {
			isClicked = true;
			if (num == 1) {
				$(".more-button").before("<div class='anim-container clearfix'><img src='img/animation/robot/robot.jpg' class='anim-static'><div class='callbacks_container'><ul class='rslides' id='slider2'><li><img src='img/animation/robot/animations/idle_1.gif' alt='Idle1'><p class='caption'>Idle</p></li><li><img src='img/animation/robot/animations/idle_2.gif' alt='Idle2'><p class='caption'>Idle 2</p></li><li><img src='img/animation/robot/animations/idle_opened.gif' alt='opened'><p class='caption'>Idle opened</p></li><li><img src='img/animation/robot/animations/open_or_drop.gif' alt='open'><p class='caption'>Open or drop</p></li></ul></div></div>");
				$('#slider2').responsiveSlides({
					auto: false,
					pager: false,
					nav: true,
					speed: 500,
					namespace: 'callbacks',
					before: function () {
						$('.events').append('<li>before event fired.</li>');
					},
					after: function () {
						$('.events').append('<li>after event fired.</li>');
					}
				});
			}
			if (num == 2) {
				$(".more-button").before("<div class='anim-container clearfix'><img src='img/animation/box/box.jpg' class='anim-static'><div class='callbacks_container'><ul class='rslides' id='slider3'><li><img src='img/animation/box/animations/box_anim.gif' alt='Idle1'><p class='caption'>Box</p></li></ul></div></div>");
				$('#slider3').responsiveSlides({
					auto: false,
					pager: false,
					nav: true,
					speed: 500,
					namespace: 'callbacks',
					before: function () {
						$('.events').append('<li>before event fired.</li>');
					},
					after: function () {
						$('.events').append('<li>after event fired.</li>');
					}
				});
			}
			if (num == 2) {
				$(".more-button").hide();
			}
			num = num + 1;
			setTimeout(function () {
				isClicked = false;
			}, 1000);
		}
	});
	$('#slider1').responsiveSlides({
		auto: false,
		pager: false,
		nav: true,
		speed: 500,
		namespace: 'callbacks',
		before: function () {
			$('.events').append('<li>before event fired.</li>');
		},
		after: function () {
			$('.events').append('<li>after event fired.</li>');
		}
	});
	$(".contact-form").submit(function (e) {
		e.preventDefault();
		var $form = $(this);
		$(".success").fadeIn(0);
		$.post($form.attr("action"), $form.serialize()).then(function () {
			$(".success").text("Thank you! Your message has been sent");
			setTimeout(function () {
				$(".success ").fadeOut();
			}, 2000);
		});
	});
});
