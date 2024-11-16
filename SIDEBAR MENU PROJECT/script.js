"use strict";

const open = document.getElementById("open");
const close = document.getElementById("close");
const navbar = document.querySelector(".navbar");

open.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

close.addEventListener("click", () => {
  navbar.classList.remove("show");
});
