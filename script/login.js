document.getElementById("login-btn").addEventListener("click", function () {
  // console.log("btn clicked");
  // 1: Get the Mobile Number:
  const numberInput = document.getElementById("input-number");
  const contactNumber = numberInput.value;
  numberInput.value = "";
  // console.log(contactNumber);
  // 2: Get the 4 Digit Pin:
  const pinInput = document.getElementById("input-pin");
  const pin = pinInput.value;
  pinInput.value = "";

  // console.log(pin);
  // 3: Match both Mobile number and 4 digit pin
  if (contactNumber === "01234567890" && pin === "1234") {
    // console.log("success");
    // 3.1: true::: alert-> New homepage
    alert("Login Succes");
    // window.location.replace("/HomePage.html");
    window.location.assign("./home.html");
  } else {
    // 3.2: false::: alert-> return
    alert("Login Failed");
    return;
  }
});
