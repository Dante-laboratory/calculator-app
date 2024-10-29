let display = document.getElementById("display");
let currentInput = "";
let operator = null;
let firstOperand = null;
let secondOperand = null;

function appendNumber(number) {
    if (display.innerText === "0" || display.innerText === "Error") {
        display.innerText = "";
    }
    display.innerText += number;
    currentInput += number;
}

function appendOperator(op) {
    if (currentInput === "" && firstOperand === null) return;

    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
        operator = op;
        display.innerText += ` ${op} `;
        currentInput = "";
    } else if (currentInput !== "") {
        calculateResult(); // If there's already an operator, calculate the result first
        operator = op;
        display.innerText += ` ${op} `;
    }
}

function clearDisplay() {
    display.innerText = "0";
    currentInput = "";
    operator = null;
    firstOperand = null;
    secondOperand = null;
}

function deleteLast() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        display.innerText = display.innerText.slice(0, -1);
    }
    if (display.innerText === "" || display.innerText === " ") display.innerText = "0";
}

function calculateResult() {
    if (operator && currentInput !== "") {
        secondOperand = parseFloat(currentInput);
        let result;
        switch (operator) {
            case "+":
                result = firstOperand + secondOperand;
                break;
            case "-":
                result = firstOperand - secondOperand;
                break;
            case "*":
                result = firstOperand * secondOperand;
                break;
            case "/":
                if (secondOperand === 0) {
                    display.innerText = "Error";
                    resetCalculator();
                    return;
                }
                result = firstOperand / secondOperand;
                break;
            default:
                return;
        }
        display.innerText = result;
        currentInput = result.toString();
        firstOperand = result;
        operator = null;
    }
}

function resetCalculator() {
    currentInput = "";
    operator = null;
    firstOperand = null;
    secondOperand = null;
}
