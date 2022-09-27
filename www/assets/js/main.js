$(document).ready(function() {

    // Yandex карта на главной,
    ymaps.ready(function () {
        var myMap = new ymaps.Map('yaMap', {
                center: [56.170526, 40.415482],
                zoom: 15,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            }),

            myPlacemark = new ymaps.Placemark([56.170581, 40.414522], {
                iconContent: '<div style="background: #fff;width: 134px;padding: 5px 8px;height: 15px;border-radius: 15px;margin-top: -4px;margin-left: 20px;">Выставочная площадка</div>'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                preset: 'islands#icon',
                iconColor: 'red'
            });

        myMap.geoObjects
            .add(myPlacemark);

        myMap.behaviors.disable('scrollZoom')
    });

    // MOBILE MENU
    $('.header__mob-menu').on('click', function() {
        $('body').addClass('overflow-hidden');
        $('.header__nav').addClass('mobile-menu');
    })

    $('.mobile-close-menu').on('click', function() {
        $('body').removeClass('overflow-hidden');
        $('.header__nav').removeClass('mobile-menu');
    })

});