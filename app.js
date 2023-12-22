const numberButtons = document.querySelectorAll('.number');
const charSpecialButtons = document.querySelectorAll('.charSpecial');
const sendButton = document.querySelector('.send');
const clear = document.querySelector('#deleteAll');
const backSpace = document.querySelector('#delete');
const screen = document.querySelector('h2');
let point = document.querySelector('#point');
let pointActive = false;

numberButtons.forEach(function (numberButton) {
    numberButton.addEventListener('click', function () {
        clickButton = 0;
        const number = this.textContent;
        screen.textContent += number;
        pointActive = true;
    });
});

charSpecialButtons.forEach(function (specialButton) {
    specialButton.addEventListener('click', function () {
        clickButton = 0;
        const special = this.textContent;
        const size = screen.textContent.length - 1;
        if (!['+', '-', '/', '*'].includes(screen.textContent[size])) {
            if (special === '-' && screen.textContent === '') {
                screen.textContent += special;
            } else if (typeof screen.textContent[size] == 'string') {
                screen.textContent += special;
                pointActive = false

            }
        }
    });
});

clear.addEventListener('click', () => {
    screen.textContent = '';
    clickButton = 0;
    pointActive = false;
});

sendButton.addEventListener('click', () => {
    let currentResult = eval(screen.textContent);
    console.log(currentResult);
    clickButton++;
    if (clickButton >= 2) {
        screen.textContent = currentResult * 2;
    } else {
        screen.textContent = currentResult;
        pointActive = false;

    }
});

backSpace.addEventListener('click', () => {
    screen.textContent = screen.textContent.slice(0, -1);
    clickButton = 0;
    pointActive = false;
});

point.addEventListener('click', () => {
    if (screen.textContent == '') {
    } else if (pointActive == true) {
        screen.textContent += point.textContent;
        pointActive = false
    }
});


// window.addEventListener('keydown', (e) => {
//     if (!isNaN(e.key) || ['+', '-', '*', '/'].includes(e.key)) {
//         if (screen.textContent == '0') {
//             screen.textContent = e.key;
//         } else {
//             screen.textContent += e.key;
//         }
//     } else if (e.key === 'Enter') {
//         sendButton.click();
//     } else if (e.key === 'c') {
//         screen.textContent = '0'
//     } else if (e.key === 'Backspace') {
//         screen.textContent = screen.textContent.slice(0, -1);
//     }
// })

