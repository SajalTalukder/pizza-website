const burger = document.querySelector(".nav__burger");
const navUl = document.querySelector(".nav__ul");
burger.addEventListener("click", () => {
  navUl.classList.toggle("nav__show");
  burger.classList.toggle("nav__toggle");
});
