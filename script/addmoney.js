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
  // if (addAmount < 100 || addAmount > 999999) {
  //   alert("Enter an amount minimum 100 and maximum 999999.");
  //   return;
  // }

  // 4: Get the pin and set new balance:
  const addmoneyPin = getValueFromInput("add-money-pin");
  if (addmoneyPin === "1234") {
    alert(`Add Money Success from 
      ${bankAccount} 
      at ${new Date()}`);
    setBalance(addNewBalance);
  } else {
    alert("Invalid Pin");
    return;
  }
});
