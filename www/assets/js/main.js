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

    // VIDEO на главной
    $('.video-play').on('click', function() {
        $(this).parent().addClass('play')
        $('#video')[0].play()
        $('#video')[0].controls = true
    })

});