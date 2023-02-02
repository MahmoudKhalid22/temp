const menuIcon = document.querySelector(".menu-icon");
list = document.querySelector(".nav-links");
const preloader = document.querySelector(".preloader");
const scroller = document.querySelector(".scroller");
const features = document.querySelectorAll(".feature_one");
const featureLeft = document.querySelector(".feature_left")
const featureRight = document.querySelector(".feature_right")
const serviceBoxes = document.querySelectorAll(".s-h");
// const 
// const 


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

// animation
window.addEventListener("scroll", animationBoxes);

function animationBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  features.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop > triggerBottom) {
      box.classList.add("feature_remove_blur");
    }
  });
  const leftBottom = featureLeft.getBoundingClientRect().top;
  const rightBottom = featureRight.getBoundingClientRect().top;

  if (leftBottom > triggerBottom){
    featureLeft.classList.toggle("feature_remove_left")
  }
  if (rightBottom > triggerBottom){
    featureRight.classList.toggle("feature_remove_right")
  }
}

window.addEventListener("scroll", animationServiceBoxes);
function animationServiceBoxes() {
  const serviceBottomTrigger = (window.innerHeight / 5) * 4;
  serviceBoxes.forEach(box =>{
    const boxTop = box.getBoundingClientRect().top;
    if(serviceBottomTrigger < boxTop){
        box.classList.add("s-h_remove_blur");
        box.classList.add("s-h_remove_left")
    }
  })
}

