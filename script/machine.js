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
// machine id -> hide all -> show specfic id
function showOnly(id) {
  const addmoney = document.getElementById("addmoney");
  const cashout = document.getElementById("cashout");
  const history = document.getElementById("history");
  // hide all
  addmoney.classList.add("hidden");
  cashout.classList.add("hidden");
  history.classList.add("hidden");
  // show only if it contains the id element
  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}