//  when we click the button, we should have a prompt
// that tell us to add our names, then change the "HELLO" word
// with what we have input

const btn = document.querySelector("button");
const text = document.querySelector("span");

function changeText() {
  let askForName = prompt("What's your name?");
  text.innerHTML = askForName;
}

btn.addEventListener("click", changeText);
