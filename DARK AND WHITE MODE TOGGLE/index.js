const toggle = document.querySelector(".toggle");
const span = document.querySelector("span");
const body = document.querySelector("body");

span.addEventListener("click", () => {
  span.classList.toggle("active");
  body.classList.toggle("active");
  toggle.classList.toggle("active");
  return;
});
