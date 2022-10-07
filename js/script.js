const prev = document.querySelector(".carousel-left");
const next = document.querySelector(".carousel-right");
const slider = document.querySelector(".slider");

const autoBtn = document.querySelector(".auto-btn");
const autoLeft = document.querySelector(".auto-left");
const autoRight = document.querySelector(".auto-right");

const autoSlider = document.querySelector(".auto-slider");
const autoSlide2 = document.querySelector(".auto-slide2");
const autoSlide3 = document.querySelector(".auto-slide3");

const menuBtn = document.querySelector(".icon3");
const mainMenu = document.querySelector(".main-menu");
const body = document.querySelector("body");

// if (next || prev) {

// }

next.addEventListener("click", function () {
  console.log("next");
  slider.style.scrollBehavior = "smooth";
  slider.scrollLeft += 400;
});

prev.addEventListener("click", function () {
  console.log("prev");
  slider.style.scrollBehavior = "smooth";
  slider.scrollLeft += -400;
});

function autoScroll() {
  autoSlider.style.scrollBehavior = "smooth";
  autoSlider.scrollLeft += 400;
  autoRight.style.backgroundColor = "#47093e";
  autoLeft.style.backgroundColor = "transparent";
}
function autoScroll2() {
  autoSlider.style.scrollBehavior = "smooth";
  autoSlider.scrollLeft -= 400;
  autoLeft.style.backgroundColor = "#47093e";
  autoRight.style.backgroundColor = "transparent";
}

setInterval(autoScroll, 2000);
setInterval(autoScroll2, 4000);

menuBtn.addEventListener("click", function () {
  mainMenu.classList.toggle("flex-style");
  body.classList.toggle("active");
});
