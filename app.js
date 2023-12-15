const numberButtons = document.querySelectorAll('#number');
const charSpecialButtons = document.querySelectorAll('#charSpecial');
const sendButton = document.querySelector('#send');
const screen = document.querySelector('input');
const clear = document.querySelector('#c')


numberButtons.forEach(function (numberButton) {
    numberButton.addEventListener('click', function () {
        const number = this.textContent;
        screen.value += number;

    });
});

charSpecialButtons.forEach(function (specialButton) {
    specialButton.addEventListener('click', function () {
        const special = this.textContent;
        screen.value += special;

    });
});

clear.addEventListener('click', () => {
    screen.value = ''
})

sendButton.addEventListener('click', () => {
    let result = eval(screen.value)
    console.log(result)
    screen.value = result
})
