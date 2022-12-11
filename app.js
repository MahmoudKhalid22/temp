const icon = document.querySelector(".menu-icon");
const list = document.querySelector(".navigation ul ");
const close = document.querySelector(".fa-x");

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
