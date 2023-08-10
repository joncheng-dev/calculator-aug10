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
    } else if (operator === "subtraction") {
        result = sub(n1, n2);
    } else if (operator === "multiply") {
        result = multiply(n1, n2);
    } else if (operator === "divide") {
        result = div(n1, n2);
    }
    return result;
}

// let userNumber1 = parseInt(prompt("Enter a number: "));
// let userNumber2 = parseInt(prompt("Enter another number: "));
// let userOperator = prompt("Enter an operator: ");

// let answer = calculator(userNumber1, userNumber2, userOperator);

// alert("Your answer is: " + answer);

//user logic
