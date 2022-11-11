$(document).ready(function() {

    // MOBILE MENU
    $('.header__mob-menu').on('click', function() {
        $('body').addClass('overflow-hidden');
        $('.header__nav').addClass('mobile-menu');
    })

    $('.mobile-close-menu').on('click', function() {
        $('body').removeClass('overflow-hidden');
        $('.header__nav').removeClass('mobile-menu');
    })

    // MENU DESKTOP
    $('#menu').on('click', function(e) {
        if ($(window).width() >= 1024 && e.target.className == 'nav__menu-link') {
            $(this).addClass('active')
            $('body').addClass('overflow-hidden')
        } else if (e.target.className == 'close-popup-menu') {
            $(this).removeClass('active')
            $('body').removeClass('overflow-hidden')
        }
    })

    // VIDEO на главной
    $('.video-play').on('click', function() {
        $(this).parent().addClass('play')
        $('#video')[0].play()
        $('#video')[0].controls = true
    })

    // FAQ
    $('.faq__slide-btn').on('click', function() {
        $(this).closest('.faq__block').toggleClass('open')
        $(this).closest('.faq__block').find('.faq__answer').slideToggle()
    })

});