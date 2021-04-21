const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 2,
  loop: true,
  spaceBetween: 10,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 980px
    980: {
      slidesPerView: 2,
      spaceBetween: 10
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 5000,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
