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

    // E-COMMERCE CATALOG
    $('.e-navbar-mobile').on('click', function() {
        $('.e-catalog-aside').addClass('open')
        $('body').addClass('overflow-hidden')
        $('#page').addClass('bg-overlay')
    })

    $('.e-navbar-back-mobile').on('click', function() {
        $('.e-catalog-aside').removeClass('open')
        $('body').removeClass('overflow-hidden')
        $('#page').removeClass('bg-overlay')
    })

    $('.e-navbar__item').on('click', function(e) {
        if (e.target.classList != 'e-navbar__link') {
            $(this).toggleClass('active')
            $(this).find('.e-subnav').slideToggle()
        }
    })

    $('.e-item-nav__lnk').on('click', function() {
        $('.e-item-nav__lnk').removeClass('active')
        $(this).addClass('active')

        $('.e-item-info-content').removeClass('active')
        $(`.e-item-info-content[data-show=${$(this).attr('data-show')}]`).addClass('active')
    })

});