/*  const btn = document.querySelectorAll('.calc-btn');
const result = document.querySelector('.result');

btn.forEach(e => {
    e.addEventListener('click', typeValue(e.value));
});

function typeValue(value) {
    console.log(value);
} */

ITS FUCKING BROKEN



/* 
let runningTotal = 0;
let buffer = "0";
let prevOperator;
const screen = document.querySelector('result');
let btns = document.querySelectorAll('.calc-btn');

btns.forEach(e => {
    e.addEventListener('click', function(event) {
        console.log("here");
        buttonClick(event.target.innerText);
    });
});

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
}

function handleNumber(value) {
    if (value === 0) {
        buffer = value;
    } else {
        buffer += value;
    }
    renderer(buffer);
}

function handleSymbol(value) {
    switch(value) {
        case 'C':
            buffer = "0";
            runningTotal = 0;
            prevOperator = null;
            break;
        case "=":
            if (prevOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            prevOperator = null;
            buffer = " " + runningTotal;
            runningTotal = 0;
        case "<-":
            if (buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length-1);
            }
            break;
        default:
            handleMath(value);
            break;
    }
}

function handleMath(value) {
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
}

function flushOperation (intBuffer) {
    if (prevOperator === "+") {
        runningTotal += intBuffer;
    } else if (prevOperator === "-"){
        runningTotal -= intBuffer;  
    } else if (prevOperator === "x") {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
}

function renderer(buffer) {
    if (typeof(buffer) == String) {
        parseInt(buffer);
    }
    screen.innerText = String(buffer);
}  */