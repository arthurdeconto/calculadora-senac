let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function appendNumber(number) {
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    let lastChar = display.innerText.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.innerText = display.innerText.slice(0, -1) + operator;
    } else {
        display.innerText += operator;
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace(/x/g, '*'));
    } catch (error) {
        display.innerText = 'Erro';
    }
}
