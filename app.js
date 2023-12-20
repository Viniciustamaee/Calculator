const numberButtons = document.querySelectorAll('.number');
const charSpecialButtons = document.querySelectorAll('.charSpecial');
const sendButton = document.querySelector('.send');
const clear = document.querySelector('#deleteAll')
const backSpace = document.querySelector('#delete')
const screen = document.querySelector('h2')
const point = document.querySelector('#point')


numberButtons.forEach(function (numberButton) {
    numberButton.addEventListener('click', function () {
        const number = this.textContent;
        if (screen.textContent == '0') {
            screen.textContent = number;
        } else {
            screen.textContent += number;
        }
    });
});


charSpecialButtons.forEach(function (specialButton) {
    specialButton.addEventListener('click', function () {
        const special = this.textContent;
        screen.textContent += special;
    });
});

clear.addEventListener('click', () => {
    screen.innerText = '0'
    point.disabled = false
})

sendButton.addEventListener('click', () => {
    let result = eval(screen.innerText);
    console.log(result);
    screen.innerText = result
});


backSpace.addEventListener('click', () => {
    screen.innerText = screen.innerText.slice(0, -1);
})


point.addEventListener('click', () => {
    screen.innerText += point.innerText

})


window.addEventListener('keydown', (e) => {
    if (!isNaN(e.key) || ['+', '-', '*', '/'].includes(e.key)) {
        if (screen.textContent == '0') {
            screen.textContent = e.key;
        } else {
            screen.textContent += e.key;
        }
    } else if (e.key === 'Enter') {
        sendButton.click();
    } else if (e.key === 'c') {
        screen.textContent = '0'
    } else if (e.key === 'Backspace') {
        screen.textContent = screen.textContent.slice(0, -1);
    }
})

