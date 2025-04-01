import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        let section = slider.closest('section');

        if (slider.closest('.quiz')) {
            section = slider.closest('.quiz');
        }
        let prev = section.querySelector('.prev')
        let next = section.querySelector('.next')
        let pagination = section.querySelector('.pagination')



        if (slider.closest('.story')) {
            new Swiper(slider, {
                modules: [Navigation],
                slidesPerView: 1,
                spaceBetween: 10,

                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
            })
        }

        if (slider.closest('.quiz')) {
            new Swiper(slider, {
                modules: [Navigation, Pagination],
                slidesPerView: 1,
                spaceBetween: 10,

                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },

                pagination: {
                    el: pagination,
                    type: 'progressbar'
                }
            })
        }

    })
}


