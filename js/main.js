(function($) {
    $.fn.bootnavbar = function() {
        $(this).find('.dropdown').hover(function() {
            $(this).addClass('show');
            $(this).find('.dropdown-menu').first().addClass('show').addClass('animated fadeIn').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd', function () {
            	$(this).removeClass('animated fadeIn');      	
            });
        }, function() {
            $(this).removeClass('show');
            $(this).find('.dropdown-menu').first().removeClass('show');
        });
    };    
})(jQuery);