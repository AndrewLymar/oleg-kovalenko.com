/*
Responsive Floats Plugin
Author: Artem Polikarpov  | http://artgorbunov.ru/
*/

(function ($) {
  $.fn.responsiveFloats = function (options) {
    var o = $.extend({
      // Минимальная ширина колонки в пикселях
      minWidth: 200,
      // Максимальная ширина
      maxWidth: false,
      // Сколько строк
      rows: 20,
      // Класс блоков
      itemClass: 'portfolio-img-container'
    }, options);

    this.each(function () {
      var floats = $(this);
      if (!floats.data('initialized')) {
        // Если ещё не инициализировано
        doFloats(floats, o);
      }
    });

    // Чейнабилити
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

    // При ресайзе окна
    $(window).resize(function () {
      // Доступная ширина
      parentWidth = parent.width();
      // Количество колонок, минимум одна
      cols = Math.max(Math.floor(parentWidth / o.minWidth), 1);

      if (cols != colsCache) {
        // Выполняю манипуляции с блоками,
        // только если количество колонок изменилось

        // Ширина одной колонки
        item.css('width', 100 / cols / overWidth + '%');

        // Очищаю поток после каждой строки блоков
        for (var _i = 0; _i < o.rows - 1; _i++) {
          clear[_i].insertBefore(item.eq(cols * (_i + 1)));
        }

        item.each(function (index) {
          // Скрываю блоки после последней строки
          $(this)[index > cols * o.rows - 1 ? 'hide' : 'show']();
        });

        colsCache = cols;
      }
    }).resize();
  }
})(jQuery);