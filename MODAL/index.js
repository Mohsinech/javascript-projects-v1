const btn = document.querySelector("button");
const modal = document.querySelector(".modal");

function openModal() {
  modal.style.display = "block";
}
btn.addEventListener("click", openModal);

function closeModal() {
  modal.style.display = "none";
}
modal.addEventListener("click", closeModal);
