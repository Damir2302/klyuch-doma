$(document).ready(function() {

    let heroSlider = new Swiper('.hero-slider', {
        slidesPerView: 1,
        spaceBetween: 50,
        effect: 'fade',

        pagination: {
            el: '.hero-slider-pagination',
            clickable: true
          },

        navigation: {
            nextEl: '.hero-slider-buttons .button-next',
            prevEl: '.hero-slider-buttons .button-prev',
        }
    })

    let infoNav = new Swiper('.info__nav', {
        slidesPerView: 'auto',
        freeMode: true
    })

    let objectsSlider = new Swiper('.f-objects-slider', {
        slidesPerView: 1,
        spaceBetween: 50,

        breakpoints: {
            744: {
                slidesPerView: 2,
                spaceBetween: 30,
            },

            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },

        pagination: {
            el: '.objects-slider-pagination',
            clickable: true
          },

        navigation: {
            nextEl: '.objects-slider-buttons .button-next',
            prevEl: '.objects-slider-buttons .button-prev',
        }
    })

});