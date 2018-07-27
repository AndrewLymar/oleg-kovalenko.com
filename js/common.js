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
	$(function () {
		$(".more-button").click(function () {
			if (!isClicked) {
				isClicked = true;
				$.ajax({
					url: "animations.php",
					type: "GET",
					data: {
						"num": num
					},
					cache: false,
					success: function (response) {
						if (response == 0) {
							$(".more-button").hide();
						} else {
							$(".more-button").before(response);
							num = num + 1;
						}
					}
				});
				setTimeout(function () {
					isClicked = false;
				}, 1000);
			}
		});
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

});
