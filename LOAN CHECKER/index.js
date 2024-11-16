let checkIncome = document.getElementById("income");
let checkBalance = document.getElementById("bank");
const submitBtn = document.querySelector("input[type=submit]");
const output = document.querySelector("p");
let incomeRequired = 100;
let bankBalanceRequired = 100;

function check() {
  let incomeValue = parseFloat(checkIncome.value); // Convert input values to numbers
  let bankBalanceValue = parseFloat(checkBalance.value);

  if (
    !isNaN(incomeValue) && // Check if the input is a valid number
    !isNaN(bankBalanceValue) &&
    incomeValue >= incomeRequired &&
    bankBalanceValue >= bankBalanceRequired
  ) {
    output.innerHTML = "Congratulations! You can get a loan";
    output.style.color = "green";
  } else {
    output.innerHTML = "Sorry! You cannot get a loan";
    output.style.color = "red";
  }
}

// Add event listener to the document for keyup event
document.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    // Check if Enter key is pressed

    check(); // Call the check function
  }
});
submitBtn.addEventListener("click", check);
