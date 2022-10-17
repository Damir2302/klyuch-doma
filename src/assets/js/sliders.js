$(document).ready(function() {

    let heroSlider = new Swiper('.hero-slider', {
        slidesPerView: 1,
        spaceBetween: 50,
        effect: 'fade',

        pagination: {
            el: '.swiper-pagination',
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

});