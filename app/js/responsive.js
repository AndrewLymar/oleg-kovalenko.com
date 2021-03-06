/*
Responsive Floats Plugin
Author: Artem Polikarpov  | http://artgorbunov.ru/
*/

(function ($) {
	$.fn.responsiveFloats = function (options) {
		var o = $.extend({
			minWidth: 200,
			maxWidth: false,
			rows: 20,
			itemClass: 'portfolio-img-container'
		}, options);

		this.each(function () {
			var floats = $(this);
			if (!floats.data('initialized')) {
				doFloats(floats, o);
			}
		});

		return this;
	};

	var doFloats = function (floats, o) {
		var parent = floats.parent();

		var item = $('.' + o.itemClass, floats);
		item.css({
			'float': 'left',
			'min-width': o.minWidth,
			'max-width': o.maxWidth
		});

		var clear = [];
		for (var _i = 0; _i < o.rows - 1; _i++) {
			clear[_i] = $('<div style="clear: both;"></div>');
		}

		var overWidth = 2;

		floats
			.css('width', overWidth * 100 + '%')
			.wrap('<div style="position: relative; overflow: hidden;"></div>')
			.data('initialized', true);

		var parentWidth, cols, colsCache;

		$(window).resize(function () {
			parentWidth = parent.width();
			cols = Math.max(Math.floor(parentWidth / o.minWidth), 1);

			if (cols != colsCache) {
				item.css('width', 100 / cols / overWidth + '%');
				for (var _i = 0; _i < o.rows - 1; _i++) {
					clear[_i].insertBefore(item.eq(cols * (_i + 1)));
				}

				item.each(function (index) {
					$(this)[index > cols * o.rows - 1 ? 'hide' : 'show']();
				});

				colsCache = cols;
			}
		}).resize();
	}
})(jQuery);
