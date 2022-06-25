let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = " ";
for (let key of buttons) {

    key.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}