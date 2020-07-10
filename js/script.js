"use strict";
let sliderViewSlider = document.getElementById("slider__view-slider").offsetWidth;
let btnNext = document.getElementById("slider__btn_next");
let btnPrev = document.getElementById("slider__btn_prev");
let sliderWrapper = document.querySelector("div.slider__wrapper");
let viewSliders = document.querySelectorAll(".slider__view-point");
let viewSlide = 0;
viewSliders[0].style.opacity = "0";
viewSliders[0].style.border = "solid 1px white"
btnNext.addEventListener("click", function () {
    viewSliders[viewSlide].style.opacity = ".6";
    if (viewSlide < 4) {
        viewSlide++;
    } else {
        viewSlide = 0;
    }
    viewSliders[viewSlide].style.opacity = "0";
     viewSliders[viewSlide].style.border = "solid 1px white"
    sliderWrapper.style.left = -viewSlide * sliderViewSlider + "px";
});
 

btnPrev.addEventListener("click", function () {
    viewSliders[viewSlide].style.opacity = ".6";
    if (viewSlide > 0) {
        viewSlide--; 
    } else {
        viewSlide = 4; 
    }
    viewSliders[viewSlide].style.opacity = "0";
    viewSliders[viewSlide].style.border = "solid 1px white";
    sliderWrapper.style.left = -viewSlide * sliderViewSlider + "px";
});