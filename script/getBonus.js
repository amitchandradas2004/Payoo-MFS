document.getElementById("bonus-btn").addEventListener("click", function () {
  const bonusNumberAmmount = Number(getValueFromInput("bonus-ammout"));
  const addBonusAmmount = getBalance() + Number(bonusNumberAmmount);
  // console.log(addBonusAmmount);
  const getBonusPinNumber = getValueFromInput("bonus-pin");
  if (getBonusPinNumber === "1234") {
    alert(`
      Get Bonus Success at ${new Date()}`);
    setBalance(addBonusAmmount);
    // 1: Get the history-container
    const history = document.getElementById("history-container");
    // 2: Create new div
    const newHistory = document.createElement("div");
    // 3: Add innerHTML in new div
    newHistory.innerHTML = `
    <div class="transtion-card px-5 py-3 w-full rounded-3xl bg-[#624ede] text-white font-semibold mb-2">
   Get Bonus Success at ${new Date()}</div>
    `;
    // 4: Append new div in the history-container
    history.append(newHistory);
  } else {
    alert("Invalid Pin");
    return;
  }
});
