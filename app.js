const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-pills");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});
