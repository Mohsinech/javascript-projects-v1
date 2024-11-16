const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
let counter = document.querySelector(".counter")


let count = 0;

plusBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

minusBtn.addEventListener("click", () =>  {
  count--;
  counter.textContent = count;
})