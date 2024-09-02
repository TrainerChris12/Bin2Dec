/*  This challenge requires that the developer implementing it follow these constraints:
  \--------------------------------------------------------------------------------------\
    - Arrays may not be used to contain the binary digits entered by the user

    - Determining the decimal equivalent of a particular binary digit in
        the sequence must be calculated using a single mathematical function,
        for example the natural logarithm. It's up to you to figure out which function to use. */

const digitInputs = document.querySelectorAll('form input');
const digitForm = document.getElementById('digitForm');
const convertBtn = document.querySelector('.convertBtn');
const numberTypeMenu = document.getElementById('numberType');

// function that can handle base conversion for a given base
function convertNumberBaseOf(base) {

    // for each input from the user calculate the value in base 10,
    // and add it to the previous value found
        let acc = 0;
        for (let i = 0; i < digitInputs.length; i++) {
            let exponent =  (digitInputs.length - 1) - i;
            let current = Number(digitInputs[i].value) * (base ** exponent);
            acc += current;
            console.log(acc);
        }
}



digitForm.addEventListener('input', e => {
    const input = e.target;

    // limits the user input to only one input
    if (input.value.length > 1) {
        input.value = input.value.slice(0, 1);
    }
    // ensures that the input is either '1' or '0'
        if (input.value !== '1' && input.value !== '0') {
            input.value = '';
        }

    //auto tabs cursor
        if (input.value !== '') {
            if (input.nextElementSibling) {
                input.nextElementSibling.focus();
            }
        }
});

// I don't think this is the right approach, I want to check when the select menu is a certain option
// and apply the correct parameter to the function accordingly.
numberTypeMenu.addEventListener('change', (e) => {
    const base = e.target;
    if (e.target.options.value === 'Base 2') {
        convertNumberBaseOf(2);
    }
})

convertBtn.addEventListener('click', (e) => {
    digitInputs.forEach(input => {
        if (input.value === '') {
            input.value = 0;
        }
    })
    convertNumberBaseOf(2);
})
