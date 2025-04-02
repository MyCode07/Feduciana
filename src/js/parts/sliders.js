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
            const fraction = section.querySelector('.fraction span')
            const btns = section.querySelector('.quiz__btns');

            new Swiper(slider, {
                modules: [Navigation, Pagination],
                slidesPerView: 1,
                spaceBetween: 10,

                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },

                on: {
                    slideChange: (swiper) => {
                        let index = swiper.activeIndex + 1

                        fraction.textContent = index;

                        if (index == swiper.slides.length) {
                            console.log('final');
                            section.classList.add('_final')
                        }
                    }
                },
                allowTouchMove: false,

                pagination: {
                    el: pagination,
                    type: 'progressbar'
                }
            })
        }

    })
}


