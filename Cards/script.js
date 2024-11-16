"use strict";

const shoes = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
];

// Main img
const mainShoes = document.getElementById("main");

// Imgs
const firstImg = document.getElementById("one");
const secondImg = document.getElementById("two");
const thirdImg = document.getElementById("three");

// Index
let index = 0;

// Default img
mainShoes.src = shoes[index];
firstImg.classList.add("active");

// Change index
firstImg.addEventListener("click", () => {
  mainShoes.src = shoes[index];
  firstImg.classList.add("active");
  secondImg.classList.remove("active");
  thirdImg.classList.remove("active");
});

secondImg.addEventListener("click", () => {
  mainShoes.src = shoes[index + 1];
  secondImg.classList.add("active");
  firstImg.classList.remove("active");
  thirdImg.classList.remove("active");
});

thirdImg.addEventListener("click", () => {
  mainShoes.src = shoes[index + 2];
  thirdImg.classList.add("active");
  firstImg.classList.remove("active");
  secondImg.classList.remove("active");
});
