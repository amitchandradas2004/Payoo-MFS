document.getElementById("trasnfer-btn").addEventListener("click", function () {
  // 1: Get the account number and validate it
  const transferNumber = getValueFromInput("trasnfer-number");
  if (transferNumber.length != 11) {
    alert("Invalid Number");
    return;
  }
  // 2: Get the transfer amount and convert to number
  const transferAmmount = getValueFromInput("trasnfer-amount");
  // 3: Get the current balance and convert to number
  const currentBalnce = getBalance();
  // 4: Calculate the new balance
  const newBalance = currentBalnce - Number(transferAmmount);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
  // 5: Get the pin number and verify it
  const transferpin = getValueFromInput("transfer-pin");
  if (transferpin === "1234") {
    if (transferAmmount < 1) {
      alert("Invalid amount");
    } else {
      alert("Transfer Succesful");
      // document.getElementById('balance').innerText = newBalance;
      setBalance(newBalance);
      // 1: Get the history-container
      const transferoney = document.getElementById("history-container");
      // 2: Create new div
      const newTransferMoney = document.createElement("div");
      // 3: Add innerHTML in new div
      newTransferMoney.innerHTML = `
    <div class="transtion-card px-5 py-3 w-full rounded-3xl bg-[#624ede] text-white font-semibold mb-2">
    CashOut ${transferAmmount} Taka Success to ${transferNumber} , at ${new Date()}</div>
    `;
      // 4: Append new div in the history-container
      transferoney.append(newTransferMoney);
    }
  } else {
    alert("Invalid pin");
    return;
  }
});
