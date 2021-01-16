const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
const expensesList = document.querySelector("#expenses-list");
const totalExpensesOutput = document.querySelector("#total-expenses");

let totalExpenses = 0;

confirmBtn.addEventListener("click", () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;
  if (
    enteredReason.trim().length <= 0 ||
    enteredReason <= 0 ||
    enteredReason.trim().length <= 0
  ) {
    const alert = document.createElement("ion-alert");
    alert.header = "Invalid inputs";
    alert.message = "Please enter valid reason and amount!";
    alert.buttons = ["Okay"];
    document.body.appendChild(alert);
    alert.present();
    return;
  }
  const newItem = document.createElement("ion-item");
  newItem.textContent = enteredReason + ": $" + enteredAmount;

  totalExpenses += +enteredAmount;
  totalExpensesOutput.textContent = totalExpenses;

  expensesList.appendChild(newItem);

  console.log(enteredReason, enteredAmount);
});
