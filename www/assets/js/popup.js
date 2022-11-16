$(document).ready(function() {

    // ДЛЯ ВСЕХ(!!!!!!) ВСПЛЫВАЮЩИХ ОКОН [Если кликаем вне всплывающего поля, представленных ниже]
    $('html').on('click', function(e) {
        if (!$(e.target).closest('#menu').length &&
            !$(e.target).closest('.popup__inner').length &&
            !$(e.target).closest('#project-dwld').length &&
            !$(e.target).closest('.c-price__item-spec').length &&
            !$(e.target).closest('.c-price-s-inner').length &&
            !$(e.target).closest('.e-catalog-aside').length &&
            !$(e.target).closest('.e-navbar-mobile').length) {
            $('body').removeClass('overflow-hidden')
            $('#page').removeClass('bg-overlay')
            $('#menu').removeClass('active')
            $('.popup').removeClass('show')
            $('.popup__inner').removeClass('active')
            $('.c-price-specification').removeClass('show')
        }
    })

    // ДЛЯ POPUP
    $('#popup-close').on('click', function() {
        $('body').removeClass('overflow-hidden')
        $('#page').removeClass('bg-overlay')
        $('.popup').removeClass('show')
        $('.popup__inner').removeClass('active')
    })

    // ФОРМА СКАЧИВАНИЯ ПРОЕКТА
    $('#project-dwld').on('click', function() {
        $('body').addClass('overflow-hidden')
        $('#page').addClass('bg-overlay')
        $('.popup').addClass('show')
        $('.popup__inner').addClass('active')
    })

    // СТРАНИЦА CATEGORY ЦЕНЫ ПРОЕКТА
    $('.c-price__item-spec').on('click', function() {
        $('body').addClass('overflow-hidden')
        $('#page').addClass('bg-overlay')
        $(`.c-price-specification[data-spec-active="${$(this).attr('data-spec')}"]`).addClass('show')
    })

    $('.c-price-specification-close').on('click', function() {
        $('body').removeClass('overflow-hidden')
        $('#page').removeClass('bg-overlay')
        $('.c-price-specification').removeClass('show')
    })

});