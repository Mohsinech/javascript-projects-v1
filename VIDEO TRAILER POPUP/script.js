"use strict";

const btn = document.querySelector("button");
const videoPopup = document.querySelector(".video_popup");
const exit = document.querySelector("span");

btn.addEventListener("click", () => {
  videoPopup.classList.toggle("show");
});

exit.addEventListener("click", () => {
  videoPopup.classList.remove("show");
});
