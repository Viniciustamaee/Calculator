const numberButtons = document.querySelectorAll('.number');
const charSpecialButtons = document.querySelectorAll('.charSpecial');
const sendButton = document.querySelector('.send');
const clear = document.querySelector('#deleteAll');
const backSpace = document.querySelector('#delete');
const screen = document.querySelector('h2');
const point = document.querySelector('#point');
clickButton = 0


numberButtons.forEach(function (numberButton) {
    numberButton.addEventListener('click', function () {
        clickButton = 0
        const number = this.textContent;
        screen.textContent += number;

    });
});

charSpecialButtons.forEach(function (specialButton) {
    specialButton.addEventListener('click', function () {
        clickButton = 0
        const special = this.textContent;
        const size = screen.textContent.length - 1
        if (!['+', '-', '/', '*'].includes(screen.textContent[size])) {
            if (special === '-' && screen.textContent === '') {
                screen.textContent += special
            } else if (size === 1) {
                screen.textContent += special
            }
        }
    });
});

clear.addEventListener('click', () => {
    screen.textContent = ''
    clickButton = 0
})


sendButton.addEventListener('click', () => {
    let currentResult = eval(screen.textContent);
    console.log(currentResult);
    clickButton++;
    if (clickButton >= 2) {
        screen.textContent = currentResult * 2
    } else {
        screen.textContent = currentResult;
    }

});

backSpace.addEventListener('click', () => {
    screen.textContent = screen.textContent.slice(0, -1);
    clickButton = 0
})

point.addEventListener('click', () => {
    clickButton = 0
    const size = screen.textContent.length - 1
    if (screen.textContent[size].includes(globalNumber))
        screen.textContent += point.textContent
})


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

