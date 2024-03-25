let display = document.getElementById('display')
let operator = document.getElementById('operator')
let equal = document.getElementById('equal')
let operation = document.getElementById('operation')


let numberButtons = document.getElementsByClassName('number')
let operatorButtons = document.getElementsByClassName('operator')
let eraseButton = document.getElementById('erase-last')
let deleteAllButton = document.getElementById('delete-all')

eraseButton.onclick = () => {
    display.innerText = display.innerText.slice(0, -1)
}

deleteAllButton.onclick = () => {
    handleDelete()
}

function handleDelete() {
    display.innerText = display.innerText.slice(display.innerText.length)
    operator.innerText = operator.innerText.slice(operator.innerText.length)
    operation.innerText = operation.innerText.slice(operation.innerText.length)
}


for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', function () {
        if (display.innerText.length > 6) {
            return
        } else if (operation.innerText === '=') {
            handleDelete()
            display.innerText = display.innerText + numberButtons[i].innerText
        } else if (operator.innerText.length - 1 >= 0) {
            console.log(operator.innerText.length)
            display.innerText = display.innerText + numberButtons[i].innerText
        } else {
            display.innerText = display.innerText + numberButtons[i].innerText
            console.log(display.innerText)
        }
    });
}

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function () {
        operator.innerText = display.innerText
        display.innerText = display.innerText.slice(display.innerText.length)
        operation.innerText = operatorButtons[i].innerText
    });
}

equal.onclick = () => {
    handleOperation()
}

function handleOperation() {
    let result
    console.log(Number(operator.innerText))
    console.log(operation.innerText)
    if (operation.innerText === '-') {
        result = Number(operator.innerText) - Number(display.innerText)
        display.innerText = result
    }
    if (operation.innerText === '+') {
        result = Number(operator.innerText) + Number(display.innerText)
        display.innerText = result
    }
    if (operation.innerText === '/') {
        if (display.innerText === '0') {
            handleDelete()
            display.innerText = 'Ошибка'
        } else {
            result = Number(operator.innerText) / Number(display.innerText)
            display.innerText = result
        }

    }
    if (operation.innerText === '*') {
        result = Number(operator.innerText) * Number(display.innerText)
        display.innerText = result
    }
    if (operation.innerText === '%') {
        result = Number(operator.innerText) * Number(display.innerText)
        display.innerText = result
    }
    operator.innerText = operator.innerText.slice(operator.innerText.length)
    operation.innerText = '='
}




