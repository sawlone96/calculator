var lastNumber = "0";
var operator = "";
var operand = "0";

function clearText() {
    document.getElementById("display").value = "0"
    lastNumber = "0"
}

function numberDisplay(value) {
    if (lastNumber === "0") {
        document.getElementById("display").value = value
        lastNumber = value
    } else {
        document.getElementById("display").value = lastNumber + value
        lastNumber = lastNumber + value
    }
}

function operation(opr) {
    operator = opr
    operand = lastNumber
    lastNumber = "0"
}

function result() {
    var result;
    if (operator === "plus") {
        result = +operand + +lastNumber
    } else if (operator === "minus") {
        result = +operand - +lastNumber
    } else if (operator === "multiply") {
        result = +operand * +lastNumber
    } else if (operator === "divide") {
        result = +operand / +lastNumber
    }
    document.getElementById("display").value = result
}