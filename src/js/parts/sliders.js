import Swiper from 'swiper';
import { Pagination, Autoplay, Thumbs, Navigation } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');
        let prev = section.querySelector('.prev')
        let next = section.querySelector('.next')
        let pagination = section.querySelector('.pagination')

        if (slider.closest('.works') && window.innerWidth <= 1024) {
            new Swiper(slider, {
                modules: [Autoplay, Pagination],
                slidesPerView: 1,
                spaceBetween: 10,
                autoplay: {
                    delay: 3000,
                    pauseOnMouseEnter: true
                },
                pagination: {
                    el: pagination,
                    type: 'bullets',
                    clickable: true,
                },
            })
        }

        if (slider.closest('.reviews')) {
            new Swiper(slider, {
                modules: [Autoplay, Navigation],
                slidesPerView: 2,
                autoplay: {
                    delay: 3000,
                    pauseOnMouseEnter: true
                },
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                grabCursor: true,
                breakpoints: {
                    300: {
                        spaceBetween: 10,
                        slidesPerView: 1,
                    },
                    1025: {
                        spaceBetween: 20,
                        slidesPerView: 2,
                    },
                }
            })
        }

        if (slider.closest('.manufacturing') && window.innerWidth <= 1024) {
            new Swiper(slider, {
                modules: [Autoplay, Pagination],
                slidesPerView: 1,
                spaceBetween: 10,
                autoplay: {
                    delay: 3000,
                    pauseOnMouseEnter: true
                },
                pagination: {
                    el: pagination,
                    type: 'bullets',
                    clickable: true,
                },
            })
        }

        if (slider.closest('.steps') && window.innerWidth <= 1024) {
            new Swiper(slider, {
                modules: [Autoplay, Pagination],
                slidesPerView: 1,
                spaceBetween: 10,
                autoplay: {
                    delay: 3000,
                    pauseOnMouseEnter: true
                },
                pagination: {
                    el: pagination,
                    type: 'bullets',
                    clickable: true,
                },
            })
        }

        if (slider.closest('.components') && window.innerWidth <= 1024) {
            new Swiper(slider, {
                modules: [Autoplay, Pagination],
                slidesPerView: 1,
                spaceBetween: 10,
                autoplay: {
                    delay: 3000,
                    pauseOnMouseEnter: true
                },
                pagination: {
                    el: pagination,
                    type: 'bullets',
                    clickable: true,
                },
                breakpoints: {
                    300: {
                        spaceBetween: 10,
                        slidesPerView: 1,
                    },
                    769: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                    },
                }
            })
        }
    })
}


