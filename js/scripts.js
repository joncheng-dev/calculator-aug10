//business logic
function add(numOne, numTwo) {
    let sum = numOne + numTwo;
    return sum;
}
function sub(numOne, numTwo) {
    let diff = numOne - numTwo;
    return diff;
}
function multiply(numOne, numTwo) {
    let mult = numOne * numTwo;
    return mult;
}
function div(numOne, numTwo) {
    let divide = numOne / numTwo;
    return divide;
}

function calculator(n1, n2, operator) {
    let result;
    if (operator === "add") {
        result = add(n1, n2);
    } else if (operator === "subtract") {
        result = sub(n1, n2);
    } else if (operator === "multiply") {
        result = multiply(n1, n2);
    } else if (operator === "divide") {
        result = div(n1, n2);
    }
    return result;
}


//user logic
function calculate(event) {
    let userNumber1 = parseInt(document.getElementById("number1").value);
    let userNumber2 = parseInt(document.getElementById("number2").value);
    let userOperator = document.getElementById("operation").value;

    let result = calculator(userNumber1, userNumber2, userOperator);

    document.getElementById("results").innerText = result;
    event.preventDefault();
}

// window.onload = function (){
//     console.log("site load");
//     let userEnteredForm = document.querySelector("#user-input-form");
//     userEnteredForm.addEventListener("submit", calculate);
// }

function uponSiteLoad () {
    let userEnteredForm = document.querySelector("#user-input-form");
    userEnteredForm.addEventListener("submit", calculate);
    }

window.addEventListener("load", uponSiteLoad);