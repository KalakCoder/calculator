let screen = document.getElementById("screen");
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventlistener('click', (e) => {
        buttonText = e.target.innerTex;
        console.log('Button text is ', buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == ('AC')) {
            screenValue = "";
            screen.value = screenValue;

        } else if (buttonText == ('=')) {
            screen.value = eval;
            (screenValue);

        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}