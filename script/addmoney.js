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
  const addAmount = getValueFromInput("add-money-amount");
  if (addAmount >= 100 && addAmount <= 999999) {
    alert("Enter an amount of minumum 100 and maximum 999999.");
    return;
  }
  // if (addAmount.length <= 6) {
  //   alert("Enter an amount of maximun 6 digits of numbers.");
  //   return;
  // }
  const addNewBalance = getBalance() + Number(addAmount);

  // 4: Get the pin and set new balance:
  const addmoneyPin = getValueFromInput("add-money-pin");
  if (addmoneyPin === "1234") {
    alert("Add money Succesful!");
    setBalance(addNewBalance);
  } else {
    alert("Invalid Pin");
    return;
  }
});
