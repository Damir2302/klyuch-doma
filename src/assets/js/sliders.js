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

    let item_cart_pagination = new Swiper('.e-item-slider__nav', {
        spaceBetween: 20,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,

        breakpoints: {
          744: {
            slidesPerView: 6,
            spaceBetween: 20
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }
    })

    let item_cart = new Swiper('.e-item-slider__main', {
        slidesPerView: "auto",
        centeredSlides: true,
        slidesPerView: 1,

        thumbs: {
          swiper: item_cart_pagination,
        },

        navigation: {
            nextEl: '.e-item-btn-next',
            prevEl: '.e-item-btn-prev',
        }
    })

    let itemInfoNav = new Swiper('.e-item-info-nav .swiper', {
        spaceBetween: 20,
        slidesPerView: 'auto',
        freeMode: true,

        breakpoints: {
            744: {
              spaceBetween: 'auto'
            }
        }
    })

});