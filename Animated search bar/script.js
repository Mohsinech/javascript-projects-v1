const search = document.getElementById("search");
const container = document.getElementById("bar");

search.addEventListener("click", () => {
  container.classList.toggle("active");
});
