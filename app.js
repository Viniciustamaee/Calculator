const numberButtons = document.querySelectorAll('#number');
const charSpecialButtons = document.querySelectorAll('#charSpecial');
const sendButton = document.querySelector('#send');
const screen = document.querySelector('input');
const clear = document.querySelector('#c')


numberButtons.forEach(function (numberButton) {
    numberButton.addEventListener('click', function () {
        screen.value += numberButton;
    });
});

clear.addEventListener('click', () => {
    screen.value = ''
})
