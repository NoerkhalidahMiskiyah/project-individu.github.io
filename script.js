let prevNumber = '';
let calculationOperator = '';
let currentNumber = 0;

const inputOperator = (operator) => {
    if (calculationOperator == '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0';
}

const operator = document.querySelectorAll(".operator")

operator.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

const inputNumber = (number) => {
    if (currentNumber == '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', (event) => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseInt(currentNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
    }

    currentNumber = result
    calculationOperator = '';
}

const clearbtn = document.querySelector('.all-clear')

clearbtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
       return 
    }
    currentNumber += dot
}