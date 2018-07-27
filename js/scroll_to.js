$(document).ready(function(){
    
    $('a[href^="#"], a[href^="."]').click( function(){ // если в href начинается с # или ., то ловим клик
        var menuHeight; 
        if( $(".menu-container").hasClass("to-top") ) {
            menuHeight = $(".menu-container").height();
        }
        else {
            menuHeight = $(".menu-container").height();
            menuHeight = menuHeight*2;
        }
	    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top-menuHeight }, 1000); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});