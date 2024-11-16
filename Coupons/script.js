"use strict";
document.addEventListener("DOMContentLoaded", function () {
  alert("Use it as your coupon code: HELLO25");
});

const price = document.querySelector(".price");
const newPrice = document.querySelector(".new-price");
const input = document.querySelector("input");
const button = document.querySelector("button");
const success = document.querySelector(".success");
const faild = document.querySelector(".faild");

//   Initial Value
let initialValue = 100;
price.innerHTML = `${initialValue}$`;

//   Add Coupons
function addCoupon() {
  let inputValue = input.value;

  const coupon = inputValue;
  switch (coupon) {
    case "HELLO25": // You can change this value.
      success.style.display = "block";
      faild.style.display = "none";
      // Will remove 50% of the original price in this case.
      price.classList.add("line");
      newPrice.innerHTML = `${initialValue / 2}$`;

      break;
    default:
      success.style.display = "none";
      faild.style.display = "block";
  }
}

button.addEventListener("click", addCoupon);
