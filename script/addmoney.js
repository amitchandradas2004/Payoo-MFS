document.getElementById("add-money-btn").addEventListener("click", function () {
  // 1: Get the bank:
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Select bank") {
    alert("Select a bank name.");
    return;
  }
  // 2: Get the bank account number:
  const accountNumber = getValueFromInput("add-money-number");
  if (accountNumber.length != 13) {
    alert(
      "Account Number's length is less then 13 digits! Please Enter 13 digit account number to proceed.",
    );
    return;
  }
  if (accountNumber === "0123456789012") {
  } else {
    alert("Invalid Acount Number! Plesase enter the correct account number.");
    return;
  }
  // 3: Get the amount to add
  const addAmount = Number(getValueFromInput("add-money-amount"));
  const addNewBalance = getBalance() + Number(addAmount);
  // 4: Get the pin and set new balance:
  const addmoneyPin = getValueFromInput("add-money-pin");
  if (addmoneyPin === "1234") {
    alert(`Add Money Success from 
      ${bankAccount} 
      at ${new Date()}`);
    setBalance(addNewBalance);
    // 1: Get the history-container
    const history = document.getElementById("history-container");
    // 2: Create new div
    const newHistory = document.createElement("div");
    // 3: Add innerHTML in new div
    newHistory.innerHTML = `
    <div class="transtion-card px-5 py-3 w-full rounded-3xl bg-[#624ede] text-white font-semibold mb-2">
    Add Money Success from ${bankAccount} Account No: ${accountNumber} at ${new Date()}</div>
    `;
    // 4: Append new div in the history-container
    history.append(newHistory);
  } else {
    alert("Invalid Pin");
    return;
  }
});