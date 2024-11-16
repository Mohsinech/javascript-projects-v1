"use strict";
// Get Values
const textarea = document.getElementById("text-area");
let total = document.getElementById("total");
const remain = document.getElementById("remain");

let remainValue = 50; // Setting remainValue to 50

function write() {
  let textareaValue = textarea.value;
  let textLimit = textareaValue.length;

  if (textLimit > remainValue) {
    textarea.value = textareaValue.slice(0, remainValue); // Limit the value to 50 characters
  }

  total.innerHTML = textarea.value.length; // Update total characters displayed
  remain.innerHTML = remainValue - textarea.value.length; // Update remaining characters
}

// Add event listener to update character count on input
textarea.addEventListener("input", write);
