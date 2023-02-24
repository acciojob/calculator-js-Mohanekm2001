//your JS code here. If required.
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let displayValue = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonValue = button.id;
    
    if (buttonValue === "clear") {
      displayValue = "";
      display.textContent = displayValue;
    } else if (buttonValue === "back") {
      displayValue = displayValue.slice(0, -1);
      display.textContent = displayValue;
    } else if (buttonValue === "equal") {
      try {
        displayValue = eval

