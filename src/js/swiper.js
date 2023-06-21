const swiper = new Swiper('.swiper', {
  effect: 'cards',
  cardsEffect: {
    perSlideOffset: 15,
    perSlideRotate: 4,
    rotate: true,
    slideShadows: true,
  },
  // Optional parameters
  direction: 'horizontal', // что бы расположить точки снизу
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // что-бы сделать пагинацию кликабельной
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
