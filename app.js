const menuIcon = document.querySelector(".menu-icon");
list = document.querySelector(".nav-links");
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});

menuIcon.addEventListener("click", () => {
  list.classList.toggle("showList");
});
