new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1,
  
  spaceBetween: 24,
  
  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    }
  }

});