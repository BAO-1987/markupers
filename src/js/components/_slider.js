import Swiper, {
  Navigation,
  Pagination,
  Scrollbar
} from 'swiper/bundle';

const portfolioSlider = new Swiper(".portfolio-slider", {
  slidesPerView: 1,
  mousewheelControl: true,
  keyboardControl: true,

  a11y: {
    prevSlideMessage: 'Next',
    nextSlideMessage: 'Prev',
  },

  navigation: {
    nextEl: ".portfolio__next",
    prevEl: ".portfolio__prev",
  },


  // breakpoints: {

  //   430: {
  //     slidesPerView: 2,
  //     spaceBetween: 10,
  //   },

  //   580: {
  //     slidesPerView: 2,
  //     spaceBetween: 10,
  //   },

  //   750: {
  //     slidesPerView: 3,
  //     spaceBetween: 10,
  //   },

  //   992: {
  //     slidesPerView: 4,
  //     spaceBetween: 20,
  //   },
  // }

});

const reviewsSlider = new Swiper(".reviews-slider", {
  slidesPerView: 1,
  mousewheelControl: true,
  keyboardControl: true,
  // autoplay: {
  //   delay: 2000,
  // },


  a11y: {
    prevSlideMessage: 'Next',
    nextSlideMessage: 'Prev',
  },

  navigation: {
    nextEl: ".reviews__next",
    prevEl: ".reviews__prev",
  },


  // breakpoints: {
  //   475: {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //   },

  //   620: {
  //     slidesPerView: 2,
  //   },

  //   992: {
  //     slidesPerView: 3,
  //     spaceBetween: 15,
  //   },

  //   1600: {
  //     slidesPerView: 3,
  //     spaceBetween: 50,
  //   },
  // },
});


const blogSlider = new Swiper(".blog-slider", {
  slidesPerView: "auto",
  spaceBetween: 30,
  mousewheelControl: true,
  keyboardControl: true,

  a11y: {
    prevSlideMessage: 'Next',
    nextSlideMessage: 'Prev',
  },

  // navigation: {
  //   nextEl: ".portfolio__next",
  //   prevEl: ".portfolio__prev",
  // },


  // breakpoints: {

  //   430: {
  //     slidesPerView: 2,
  //     spaceBetween: 10,
  //   },

  //   580: {
  //     slidesPerView: 2,
  //     spaceBetween: 10,
  //   },

  //   750: {
  //     slidesPerView: 3,
  //     spaceBetween: 10,
  //   },

  //   992: {
  //     slidesPerView: 4,
  //     spaceBetween: 20,
  //   },
  // }

});