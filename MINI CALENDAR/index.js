// -> BRING HTML ELEMENTS
const monthTitle = document.getElementById("month");
const dayTitle = document.getElementById("days");
const dayNumber = document.getElementById("day_number");
const yearTitle = document.getElementById("year");

getTheTime();
function getTheTime() {
  const date = new Date();

  let mm = date.getMonth() + 1;
  let dd = date.getDate();
  let yyyy = date.getFullYear();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayName = days[new Date().getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthName = months[new Date().getMonth()];

  // REPLACE THE VARS TO THE HTML CONTENT

  yearTitle.innerText = yyyy;
  dayNumber.innerText = dd;
  dayTitle.innerHTML = dayName;
  monthTitle.innerText = monthName;
}
