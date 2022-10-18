$(document).ready(function() {

    // ДЛЯ ВСПЛЫВАЮЩИХ ОКОН
    $('html').on('click', function(e) {
        if (!$(e.target).closest('#menu').length &&
            !$(e.target).closest('.popup__inner').length &&
            !$(e.target).closest('#project-dwld').length) {
            $('body').removeClass('overflow-hidden')
            $('#page').removeClass('bg-overlay')
            $('#menu').removeClass('active')
            $('.popup').removeClass('show')
            $('.popup__inner').removeClass('active')
        }
    })

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

});