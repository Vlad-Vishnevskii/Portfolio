const sliderWrapper = document.querySelector('.certificates__wrapper');
const sliderList = document.querySelectorAll('.certificates__item');
let currentIndex = 0;
const startIndex = 0;
const lengthOfList = sliderList.length;
const btnRight = document.querySelector('.certificates__btn-right');
const btnLeft = document.querySelector('.certificates__btn-left');

const moveToRight = function () {
  currentIndex +=1;
  if (currentIndex > sliderList.length - 1 ) {
    currentIndex = 0;
  }
}

const moveToLeft = function () {
  currentIndex -=1;
  if (currentIndex < startIndex) {
    currentIndex = sliderList.length - 1;
  }
}

const onSliderButtonClick = function (evt) {
  const target = evt.target;
  sliderList[currentIndex].classList.remove('certificates__item_current');
  if (target.closest('.certificates__arrow-btn_right')) {
    moveToRight();
  }
  if (target.closest('.certificates__arrow-btn_left')) {
    moveToLeft();
  }
  sliderList[currentIndex].classList.add('certificates__item_current');
}

sliderWrapper.addEventListener('click', onSliderButtonClick);
