function add(a,b){
    return a + b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}
function subtract(a,b){
    return a - b
}

function operate(operator,a,b){
    return operator(a,b);
}

function displayOperate(operatorSelect){
    if (firstNumber && operatorSelect){
        console.log("true")
        secondNumber = display.textContent * 1
        result = operate(operatorSelect, firstNumber, secondNumber)
        display.textContent = result
        operating = 1
        firstNumber = result
    } else {
        operatorSelect = add;
        firstNumber = display.textContent * 1
        display.textContent = 0
    }
}
let firstNumber
let secondNumber
let operatorSelect
let newNumber = 0
const container = document.querySelector("#container")
let display = document.querySelector("#display")
display.textContent = 0
let result = 0
let operating = 0
container.addEventListener("click", (event) =>{
    target = event.target;
    switch (target.id) {
        case 'add':
            operatorSelect = add;
            displayOperate(operatorSelect);
            break;
        case 'subtract':
            if (display.textContent == 0){
                display.textContent ="-"
            } else {
                operatorSelect = subtract
                firstNumber = display.textContent * 1
                display.textContent = 0
            }
            break;
        case 'multiply':
            operatorSelect = multiply
            firstNumber = display.textContent * 1
            display.textContent = 0
            break;

        case 'divide':
            operatorSelect = divide;
            firstNumber = display.textContent * 1
            display.textContent = 0

            break;
        case 'equals':
            if (firstNumber && operatorSelect){
                secondNumber = display.textContent * 1
                result = operate(operatorSelect, firstNumber, secondNumber)
                display.textContent = result
            } else if (!firstNumber && operatorSelect){
                result = 0
                display.textContent = result
            } else {
                result = 0
                display.textContent = result
            }
            break;

        case 'decimal':
            display.textContent +=".";
            break;
        case '9':
            if (display.textContent != "0" && operating != 1){
                display.textContent += "9"
            } else if (operating == 1) {
                display.textContent = "9"
                operating = 0
            } else {
                display.textContent = "9"
            }
            console.log("9")
            break;
        case '8':
            if (display.textContent != "0" && operating != 1){
                display.textContent +="8"
            } else if (operating == 1) {
                display.textContent = "8"
                operating = 0
            } else {
                display.textContent = "8"
            }
            break;
        case '7':
            if (display.textContent != "0" && operating != 1){
                display.textContent += "7"
            } else if (operating == 1) {
                display.textContent = "7"
                operating = 0
            } else {
                display.textContent = "7"
            }
            break;
        case '6':
            if (display.textContent != "0" && operating != 1){
                display.textContent += "6"
            } else if (operating == 1) {
                display.textContent = "6"
                operating = 0
            } else {
                display.textContent = "6"
            }
            break;
        case '5':
            if (display.textContent != "0" && operating != 1){
                display.textContent +="5"
            } else if (operating == 1){
                display.textContent = "5"
                operating = 0
            } else {
                display.textContent = "5"
            }
            break;
        case '4':
            if (display.textContent != "0" && operating != 1){
                display.textContent +="4"
            } else if (operating == 1) {
                display.textContent = "4"
                operating = 0
            } else {
                display.textContent = "4"
            }
            break;
        case '3':
            if (display.textContent != "0" && operating != 1){
                display.textContent += "3"
            } else if (operating == 1) {
                display.textContent = "3"
                operating = 0
            } else {
                display.textContent = "3"
            }
            break;
        case '2':
            if (display.textContent != "0" && operating != 1){
                display.textContent +="2"
            } else if (operating == 1) {
                display.textContent = "2"
                operating = 0
            } else {
                display.textContent = "2"
            }
            break;
        case '1':
            if (display.textContent != "0" && operating != 1){
                display.textContent +="1"
            } else if (operating == 1) {
                display.textContent = "1"
                operating = 0
            } else {
                display.textContent = "1"
            }
            break;
        case '0':
            if (display.textContent != "0" && operating != 1){
                display.textContent +="0"
            } else if (operating == 1) {
                display.textContent = "0"
                operating = 0
            } else {
                display.textContent = "0"
            }
            break;
    }
});

/** const container = document.querySelector("#container")
let display = document.querySelector("#display")
container.addEventListener("click", (event) =>{
    target = event.target;
    let splitInput = display.textContent.split(' ');
    console.log(splitInput)
    switch (target.id) {
        case 'add':
            if (display.textContent != "0"){
                let result = extractInput(splitInput);
                if (result){
                    display.textContent = result
                }
                display.textContent += " + "
            } else {
                display.textContent = "+" 
            }
            console.log("add")
            break;
        case 'subtract':
            if (splitInput[splitInput.length - 2] == "x"){
                display.textContent +="-"
                console.log(splitInput)
            } else if (display.textContent != "0") {
                display.textContent +=" - "
            }
            else {
                display.textContent = "-" 
                console.log(splitInput)
            }
            console.log(splitInput)
            break;
        case 'multiply':
            if (display.textContent != "0"){
                display.textContent +=" x "
            } else {
                display.textContent = "x" 
            }
            break;
        case 'divide':
            if (display.textContent != "0"){
                display.textContent +=" ÷ "
            } else {
                display.textContent = "÷"
            }
            break;
        case 'equals':
            const result = extractInput(splitInput)
            display.textContent = result
            console.log("run operate")
            break;
        case 'decimal':
            display.textContent +=".";
            break;
        case '9':
            if (display.textContent != "0"){
                display.textContent += "9"
            } else {
                display.textContent = "9"
            }
            console.log("9")
            break;
        case '8':
            if (display.textContent != "0"){
                display.textContent +="8"
            } else {
                display.textContent = "8"
            }
            break;
        case '7':
            if (display.textContent != "0"){
                display.textContent += "7"
            } else {
                display.textContent = "7"
            }
            break;
        case '6':
            if (display.textContent != "0"){
                display.textContent += "6"
            } else {
                display.textContent = "6"
            }
            break;
        case '5':
            if (display.textContent != "0"){
                display.textContent +="5"
            } else {
                display.textContent = "5"
            }
            break;
        case '4':
            if (display.textContent != "0"){
                display.textContent +="4"
            } else {
                display.textContent = "4"
            }
            break;
        case '3':
            if (display.textContent != "0"){
                display.textContent += "3"
            } else {
                display.textContent = "3"
            }
            break;
        case '2':
            if (display.textContent != "0"){
                display.textContent +="2"
            } else {
                display.textContent = "2"
            }
            break;
        case '1':
            if (display.textContent != "0"){
                display.textContent +="1"
            } else {
                display.textContent = "1"
            }
            break;
        case '0':
            if (display.textContent != "0"){
                display.textContent +="0"
            } else {
                display.textContent = "0"
            }
            break;
    }


});
/** For the calculation: Split display.textContent into an array, using spaces as delimiter. Afterwards reduce the array one by one. 
 * If element == operator and curIndex is the index of the operator, return operate(operator, sum, nextelement)
 */
/** Method 2: Everytime an operator button is pressed, the previous number is stored (let firstNumber = display.textContent) and an operator 
 * is added to the display, the operator is stored in a variable. Afterwards, the user types a second number and once an operator button is pressed or equals is pressed
 * the secondNumber is assigned and operate(operator, firstNumber, secondNumber) is called, the result is added to the display.
 */