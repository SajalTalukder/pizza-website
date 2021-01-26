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

const init = () => {
  navbar();
  topBottom();
};

init();
