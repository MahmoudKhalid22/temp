const icon = document.querySelector(".menu-icon");
const list = document.querySelector(".navigation ul ");
const close = document.querySelector(".fa-x");
const preloader = document.querySelector(".preloader");

icon.addEventListener("click", () => {
  list.style.display = "block";
  close.style.display = "flex";
  icon.style.display = "none";
});
close.addEventListener("click", () => {
  list.style.display = "none";
  close.style.display = "none";
  icon.style.display = "block";
});

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});
