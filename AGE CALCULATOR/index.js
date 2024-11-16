const date = document.getElementById("date");
const btn = document.querySelector("button");
const output = document.querySelector(".output");

function ageCalculator() {
  const dateValue = date.value;

  if (!dateValue) {
    alert("Please enter a date.");
    return;
  }

  const inputDate = new Date(dateValue);
  const today = new Date();

  let yearsDifference = today.getFullYear() - inputDate.getFullYear();
  const monthDifference = today.getMonth() - inputDate.getMonth();
  const dayDifference = today.getDate() - inputDate.getDate();

  // Adjust years difference if the input date hasn't occurred yet this year
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    alert("Please enter your birth date");
    yearsDifference--;
  }

  output.innerHTML = `you have ${yearsDifference} years old`;
}

btn.addEventListener("click", ageCalculator);
