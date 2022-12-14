AOS.init({
    duration: 600
});


(function ($) {
    'use strict';

    // SCROLL TO TOP
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 70) {
            $('.backtop').addClass('reveal');
        } else {
            $('.backtop').removeClass('reveal');
        }
    });

    // Sticky Menu
    // 
    $(window).on('scroll', function () {
        if ($('.navigation').offset().top > 100) {
            $('.navigation').addClass('fixed-nav');
        } else {
            $('.navigation').removeClass('fixed-nav');
        }
    });

    /* Closes the Responsive Menu on Menu Item Click*/
    $('.navbar-collapse .navbar-nav a').on('click', function () {
        $('.navbar-toggler:visible').click();
    });

    $('a.smoth-scroll').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
        e.preventDefault();
    });

    // $('.testimonial-slider').slick({
    //     slidesToShow: 1,
    //     infinite: true,
    //     dots: true,
    //     arrows: false,
    //     autoplay: true,
    //     autoplaySpeed: 5000
    // });

    $(window).on('load', function () { // makes sure the whole site is loaded
        // ----------------------- Progress Bar -------------------- //
        $('.progress-bar').each(function () {
            var width = $(this).data('percent');
            $(this).css({ 'transition': 'width 3s' });
            $(this).appear(function () {
                $(this).css('width', width + '%');
                $(this).find('.count').countTo({
                    from: 0,
                    to: width,
                    speed: 3000,
                    refreshInterval: 50
                });
            });
        });
    });  //End On Load Function
})(jQuery);