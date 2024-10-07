const hamMenu = document.querySelector(".hammenu");
const hamIcon = document.querySelector(".hamicon");
const closeIcon = document.querySelector(".closeicon");

hamIcon.addEventListener("click", () => {
  hamMenu.classList.toggle("hidden");
});
closeIcon.addEventListener("click", () => {
  hamMenu.classList.toggle("hidden");
});
