const navbar = () => {
  const burger = document.querySelector(".nav__burger");
  const navUl = document.querySelector(".nav__ul");
  burger.addEventListener("click", () => {
    navUl.classList.toggle("nav__show");
    burger.classList.toggle("nav__toggle");
  });
};

const topBottom = () => {
  const top_bottom = document.querySelector(".top-bottom");
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 500) {
      top_bottom.classList.add("top-bottom__show");
    } else {
      top_bottom.classList.remove("top-bottom__show");
    }
  });
};

// scroll
let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 700,
});

// slider

const sliderFunction = (className) => {
  const slides = document.querySelectorAll(`.${className}`);
  let currSlide = 0;
  const maxSlide = slides.length - 1;
  const goToSlide = (slide) => {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };
  goToSlide(0);
  const nextSlide = () => {
    if (currSlide === maxSlide) {
      currSlide = 0;
    } else {
      currSlide++;
    }
    goToSlide(currSlide);
  };
  setInterval(nextSlide, 3000);
};
sliderFunction("slide");
sliderFunction("slide-1");
sliderFunction("slide-2");
const init = () => {
  navbar();
  topBottom();
};

init();
