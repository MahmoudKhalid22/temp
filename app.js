const menuIcon = document.querySelector(".menu-icon");
list = document.querySelector(".nav-links");
const preloader = document.querySelector(".preloader");
const scroller = document.querySelector(".scroller");
// preloader
window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});
// navbar
menuIcon.addEventListener("click", () => {
  list.classList.toggle("showList");
});

// scroll
function updateProgressBar() {
  const { scrollTop, scrollHeight } = document.documentElement;
  const scrollPercentage = `${
    (scrollTop / (scrollHeight - window.innerHeight)) * 100
  }%`;
  scroller.style.width = scrollPercentage;
}

window.addEventListener("scroll", updateProgressBar);
