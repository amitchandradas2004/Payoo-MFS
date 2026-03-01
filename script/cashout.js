document.getElementById("cashout-btn").addEventListener("click", function () {
  // 1: Get the agent number and validate it
  const cashoutNumber = getValueFromInput("cashout-number");
  if (cashoutNumber.length != 11) {
    alert("Invalid Number");
    return;
  }
  // 2: Get the withrawal amount and convert to number
  const cashoutAmount = getValueFromInput("cashout-amount");
  // 3: Get the current balance and convert to number
  const currentBalnce = getBalance();
  // 4: Calculate the new balance
  const newBalance = currentBalnce - Number(cashoutAmount);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
  // 5: Get the pin number and verify it
  const cashoutPin = getValueFromInput("cashout-pin");
  if (cashoutPin === "1234") {
    if (cashoutAmount < 1) {
      alert("Invalid amount");
    } else {
      alert("Cash Out Succesful");
      // document.getElementById('balance').innerText = newBalance;
      setBalance(newBalance);
    }
  } else {
    alert("Invalid pin");
    return;
  }
});

// This section is the basic level coding:
// document.getElementById("cashout-btn").addEventListener("click", function () {
//   // console.log('cashout btn clicked');
//   // 1: Get the agent number and validate it
//   const cashoutNumberInput = document.getElementById("cashout-number");
//   const cashoutNumber = cashoutNumberInput.value;
//   // console.log(cashoutNumber);
//   if (cashoutNumber.length !== 11) {
//     alert("Invaild Agent Number! Enter the valid agent number");
//     return;
//   }
//   if (cashoutNumber === "01234567890") {
//   } else {
//     alert("Invalid Agent Number");
//     return;
//   }
//   // 2: Get the withrawal amount and convert to number
//   const cashoutAmountInput = document.getElementById("cashout-amount");
//   const cashoutAmount = cashoutAmountInput.value;
//   // console.log(cashoutAmount);
//   // 3: Get the current balance and convert to number
//   const balanceElement = document.getElementById("balance");
//   const balance = balanceElement.innerText;
//   // console.log(balance);
//   // 4: Calculate the new balance
//   const newBalance = Number(balance) - Number(cashoutAmount);
//   if (newBalance < 0) {
//     alert("Invalid Amount");
//     return;
//   }
//   // console.log(newBalance);
//   // 5: Get the pin number and verify it
//   const cashoutPinInput = document.getElementById("cashout-pin");
//   const cashoutPin = cashoutPinInput.value;
//   if (cashoutPin === "1234") {
//     // 5.1: true: Show an alert > set Balance
//     alert("Cash Out Succesful");
//     console.log(cashoutPin);
//     balanceElement.innerText = newBalance;
//     cashoutNumberInput.value = "";
//     cashoutAmountInput.value = "";
//     cashoutPinInput.value = "";
//   } else {
//     // 5.2: false: Show an error alert > retuern
//     alert("Invalid Pin Number");
//     cashoutPinInput.value = "";
//     return;
//   }
// });
