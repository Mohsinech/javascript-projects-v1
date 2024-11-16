const btn = document.querySelector("button");
const colorTitle = document.querySelector(".title");
const body = document.querySelector("body");

function changeColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  colorTitle.innerHTML = `The New Background Color: #${randomColor}`;
  body.style.backgroundColor = `#${randomColor}`;
}

btn.addEventListener("click", changeColor);
