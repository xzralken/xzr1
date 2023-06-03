'use strict';

$(document).ready(function () {
    
})
(function ($) {
    let services = $('.spa__services-list');
    let topMenuBtn = $('.header__top-menu-mobile');
    let navMenuBtn = $('.header__navigation-mobile');
    let upBtn = $('.contacts__up');

    function toggleActiveService(e) {
        let target = e.target;
        let activeServ = $(this).find('.spa__service--active');
        if (activeServ.length > 0) {
            activeServ.removeClass('spa__service--active');
        }
        while (target !== this) {
            if ($(target).hasClass('spa__service-desc')) {
            $(target).parent().addClass('spa__service--active');
            }
            target = target.parentNode;
        }
    }

    function toggleMenu(e) {
        let menuItems = $(e.currentTarget).parent().children().eq(1);
        menuItems.toggleClass('visible');
    }

    function goUp() {
        let header = $('.header');
        header[0].scrollIntoView({
            behavior: 'smooth'
        });
    }

    function checkScroll(e) {
        if ($(e.target).scrollTop() >= $(e.target).height() / 2) {
            upBtn.addClass('contacts__up--visible');
        } else {
            upBtn.removeClass('contacts__up--visible');
        }
    }

    $(window).scroll(checkScroll);
    upBtn.click(goUp);
    services.click(toggleActiveService);
    topMenuBtn.click(toggleMenu);
    navMenuBtn.click(toggleMenu);

})(jQuery);
