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

    let item_cart_pagination = new Swiper('.swiper-item-pagination', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
          470: {
            spaceBetween: 40
          }
        }
    });

    let item_cart = new Swiper('.swiper-item', {
        slidesPerView: "auto",
        centeredSlides: true,
        slidesPerView: 1,
        thumbs: {
          swiper: item_cart_pagination,
        },
    });

});