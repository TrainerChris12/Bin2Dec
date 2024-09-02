/*  This challenge requires that the developer implementing it follow these constraints:
  \--------------------------------------------------------------------------------------\
    - Arrays may not be used to contain the binary digits entered by the user

    - Determining the decimal equivalent of a particular binary digit in
        the sequence must be calculated using a single mathematical function,
        for example the natural logarithm. It's up to you to figure out which function to use. */

let digitInputs = document.querySelectorAll('#digitForm input');
const digitForm = document.getElementById('digitForm');
const convertBtn = document.querySelector('.convertBtn');
const numberLengthInput = document.getElementById('numberLength');

// function that can handle base conversion for a given base
function convertNumberBaseOf(base) {

    // for each input from the user calculate the value in base 10,
    // and add it to the previous value found
    let acc = 0;
    for (let i = 0; i < digitInputs.length; i++) {
        let exponent =  (digitInputs.length - 1) - i;
        let current = Number(digitInputs[i].value) * (base ** exponent);
        acc += current;
    }
    return acc;
}


// event listener that creates n amount of input fields
numberLengthInput.addEventListener('input', e => {
    //reset each time to ensure the amount of input fields does NOT accumulate with each input change
    digitForm.innerHTML = ` <input 
        class="digitFormInput" 
        type="number" 
        min="0" 
        max="1" 
        maxlength="1" 
        required 
        name="digit1"> `

    // loop that creates a new digit input field n times, where n = numberLength
    let numberLength = e.target.value;
    for (let i = 0; i < numberLength; i++) {
        if (numberLengthInput.value === '') continue;
        if (numberLengthInput.value === '') continue;
        const inputElementClone = digitInputs[0].cloneNode(true);
        digitForm.appendChild(inputElementClone);
    }
    digitInputs = document.querySelectorAll('#digitForm input');
})


/*              Validate Input              */
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


convertBtn.addEventListener('click', (e) => {
    digitInputs.forEach(input => {
        if (input.value === '') {
            input.value = 0;
        }
    });

    if (numberLengthInput.value === '') {
        numberLengthInput.value = 1;
    }
    const result = convertNumberBaseOf(2);
    const resultContainer = document
        .querySelector('.resultContainer');

    resultContainer.firstElementChild.innerText = String(result);
})
