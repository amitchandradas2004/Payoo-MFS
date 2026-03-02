// Machine id -> input value
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);
  return value;
}
// Machine -> Balance:
function getBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log("Current Balance:", Number(balance));
  return Number(balance);
}
// Machine value -> set balance
function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}

// Button Switch Section Here:
// machine id -> hide all -> show specfic id
function showOnly(id) {
  const addmoney = document.getElementById("addmoney");
  const cashout = document.getElementById("cashout");
  const history = document.getElementById("history");
  const transfer = document.getElementById("transfer-money");
  const getBonus = document.getElementById("get-bonus");
  const payBill = document.getElementById("pay-bill");
  // hide all
  addmoney.classList.add("hidden");
  cashout.classList.add("hidden");
  history.classList.add("hidden");
  transfer.classList.add("hidden");
  getBonus.classList.add("hidden");
  payBill.classList.add("hidden");
  // show only if it contains the id element
  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
