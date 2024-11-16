const span1 = document.getElementById("xPos");
const span2 = document.getElementById("yPos");

document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  span1.innerText = x;
  span2.innerText = y;
});
