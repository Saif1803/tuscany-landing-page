const hamMenu = document.querySelector(".hammenu");
const hamIcon = document.querySelector(".hamicon");
const closeIcon = document.querySelector(".closeicon");

hamIcon.addEventListener("click", () => {
  hamMenu.classList.toggle("hidden");
});
closeIcon.addEventListener("click", () => {
  hamMenu.classList.toggle("hidden");
});

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  let navbar = document.querySelector(".nav-bar");
  let mobileNav = document.querySelector(".mobile-nav");
  let links = document.querySelectorAll("a");
  if (scroll > 0) {
    navbar.classList.add("scrolled");
    mobileNav.classList.add("scrolled");
    links.forEach((link) => {
      link.style.color = "black";
    });
  } else {
    navbar.classList.remove("scrolled");
    mobileNav.classList.remove("scrolled");
    links.forEach((link) => {
      link.style.color = "white";
    });
  }
});

const carousel = document.querySelector(".carousel");
const right = document.querySelector(".right");
const left = document.querySelector(".left");

right.addEventListener("click", () => {
  carousel.scrollLeft += 200;
});

left.addEventListener("click", () => {
  carousel.scrollLeft -= 200;
});
