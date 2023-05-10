const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const sliderList = $(".slider-list");
const prevArrow = $(".prev-arrow");
const nextArrow = $(".next-arrow");
const sliderDots = $$(".slider-dot");
let currentSliderIndex = 0;

const prevSlider = () => {
  currentSliderIndex =
    currentSliderIndex - 1 >= 0
      ? currentSliderIndex - 1
      : sliderDots.length - 1;
  setSlider();
};
const nextSlider = () => {
  currentSliderIndex =
    currentSliderIndex + 1 < sliderDots.length ? currentSliderIndex + 1 : 0;
  setSlider();
};

let intervalId = setInterval(nextSlider, 8000);

const setSlider = () => {
  clearInterval(intervalId);
  intervalId = setInterval(nextSlider, 8000);

  sliderList.style.transform = `translateX(-${currentSliderIndex * 1380}px)`;
  let dotActive = $(".slider-dot.dot-active");
  sliderDots[currentSliderIndex].classList.add("dot-active");
  dotActive.classList.remove("dot-active");
};

sliderDots.forEach((dot, index) => {
  dot.onclick = function (e) {
    currentSliderIndex = index;
    setSlider();
  };
});
