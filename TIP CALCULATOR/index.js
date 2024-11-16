"use strict";

const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const btn = document.querySelector("button");
const total = document.querySelector(".output");

function calculateTip() {
  const billValue = bill.value;
  const tipValue = tip.value;
  const calculateTotal = billValue * 1.15;
  total.innerHTML = `Total: ${calculateTotal.toFixed(2)}`;
}

btn.addEventListener("click", calculateTip);
