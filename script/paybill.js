// // 1: Get the bank:
//   const payBillBank = getValueFromInput("pay-bill-bank");
//   if (payBillBank == "Select bank") {
//     alert("Select a bank name.");
//     return;
//   }
//   // 2: Get the billar account number:
//   const payBillNumber = getValueFromInput("pay-bill-number");
//   if (payBillNumber.length != 13) {
//     alert(
//       "Billaer Account Number's length is less then 13 digits! Please Enter 13 digit account number to proceed.",
//     );
//     return;
//   }
//   if (payBillNumber === "0123456789012") {
//   } else {
//     alert("Invalid Acount Number! Plesase enter the correct account number.");
//     return;
//   }
//   // 3: Get the amount to pay
//   const payBillAmount = Number(getValueFromInput("pay-bill-amount"));
//   const addpayBillAmount = getBalance() + Number(payBillAmount);
//   // 4: Get the pin and set new balance:
//   const payBillPin = getValueFromInput("pay-bill-pin");
//   if (payBillPin === "1234") {
//     alert(`Pay Bill Success from
//       ${payBillNumber}
//       at ${new Date()}`);
//     setBalance(addpayBillAmount);
//     // 1: Get the history-container
//     const history = document.getElementById("history-container");
//     // 2: Create new div
//     const newHistory = document.createElement("div");
//     // 3: Add innerHTML in new div
//     newHistory.innerHTML = `
//     <div class="transtion-card px-5 py-3 w-full rounded-3xl bg-[#624ede] text-white font-semibold mb-2">
//     Add Money Success from ${payBillBank} Account No: ${payBillNumber} at ${new Date()}</div>
//     `;
//     // 4: Append new div in the history-container
//     history.append(newHistory);
//   } else {
//     alert("Invalid Pin");
//     return;
//   }
