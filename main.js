import './assets/css/app.css';


/*
 * Swiper
 */
const swiper = new Swiper('.slider__block', {
  slideClass: "slider__item",
  spaceBetween: 30,
  centeredSlides: true,
  centeredSlidesBounds: true,
  navigation: {
    nextEl: '.slider__nav.--next',
    prevEl: '.slider__nav.--prev',
  },
});


/* 
 * Open / closing menu
 */

let menuBtn = document.querySelector('.menu__button');
menuBtn.onclick = () => {
  // just toggle a class ;)
  let menuElem = document.querySelector('.nav__block');
  menuElem.classList.toggle('box-hide');
}