let display = document.getElementById('display')
let operator = document.getElementById('operator')

let numberButtons = document.getElementsByClassName('number')
let operatorButtons = document.getElementsByClassName('operator')
let eraseButton = document.getElementById('erase-last')
let deleteAllButton = document.getElementById('delete-all')

eraseButton.onclick = () => {
    display.innerText = display.innerText.slice(0, -1)
}

deleteAllButton.onclick = () => {
    display.innerText = display.innerText.slice(display.innerText.length)
    operator.innerText = operator.innerText.slice(operator.innerText.length)
}



for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', function () {
        if(display.innerText.length > 5) {
            return
        } else if (operator.innerText.length -1 >= 0) {
            console.log(operator.innerText.length)
            display.innerText = display.innerText.slice(display.innerText.length)
            display.innerText = display.innerText + numberButtons[i].innerText
        } else {
            display.innerText = display.innerText + numberButtons[i].innerText
            console.log(display.innerText)
        }
    });
}

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function () {
        operator.innerText = display.innerText + ' ' + operatorButtons[i].innerText
    });
}

function handleButton() {
}


