const calculatorMathLine = document.querySelector("#calculator-math-line");
const calculatorResult = document.querySelector("#calculator-result");
const calculatorButtons = document.querySelector("#calculator-buttons");

let firstNumber = "";
let secondNumber = "";
let operator = "";

function resetVars() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
}

calculatorButtons.addEventListener("click", function (e) {
  const button = e.target;
  const buttonValue = button.textContent;
  calculatorMathLine.textContent = buttonValue;
  if (buttonValue === "C") {
    calculatorMathLine.textContent = "";
    calculatorResult.textContent = "";
    resetVars();
  } else if (button.classList.contains("number")) {
    if (operator.length > 0) {
      secondNumber += buttonValue;
    } else {
      firstNumber += buttonValue;
    }
  } else if (button.classList.contains("operator")) {
    if (firstNumber.length > 0) {
      operator = buttonValue;
    }
  } else if (buttonValue === "=") {
    console.log(secondNumber.length);
    if (secondNumber.length === 0) {
      return;
    }
    firstNumber = +firstNumber;
    secondNumber = +secondNumber;
    switch (operator) {
      case "+":
        calculatorResult.textContent = firstNumber + secondNumber;
        break;
      case "-":
        calculatorResult.textContent = firstNumber - secondNumber;
        break;
      case "/":
        calculatorResult.textContent = firstNumber / secondNumber;
        break;
      case "*":
        calculatorResult.textContent = firstNumber * secondNumber;
        break;
    }
    resetVars();
  } else if (buttonValue === ".") {
    let number = operator.length > 0 ? secondNumber : firstNumber;

    if (number.length === 0 || number.includes(".")) {
      return;
    }
    if (operator.length > 0) {
      secondNumber += buttonValue;
    } else {
      firstNumber += buttonValue;
    }
  } else if (buttonValue === "%" && operator.length > 0) {
    secondNumber = (secondNumber * firstNumber) / 100;
  } else {
    firstNumber = firstNumber / 100;
    calculatorResult.textContent = firstNumber;
    resetVars();
  }
  calculatorMathLine.textContent = firstNumber + operator + secondNumber;
});
