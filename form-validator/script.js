// form
const form = document.getElementById('form-id');
// inputs
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show input error message
function showError(input, message){
    // gets parent form control and adds error class. this affects also <small> 
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    // gets small tag and change error message text
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// check valid email
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(input.value.trim()).toLowerCase())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

// show success outline
function showSuccess(input){
    // gets parent form control and adds success class
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// check required form fields
function checkRequired(inputArray) {
    // high order array methods
    inputArray.forEach(input => {
        if (input.value.trim() === ''){
            // use ES6 template string instead of concatenating
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// check input length
function checkLength(input, min, max){
    if (input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// check passwords match
function checkPasswordsMatch(input1, input2){
    if (input1.value !== input2.value){
        showError(input2, 'Passwords do not match');
    }
}

// get fieldname uppercasing first letter
function getFieldName(input){
    // TODO slice vs substring?
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// submit form event listener
form.addEventListener('submit', function(e){
    // prevents form from submitting
    e.preventDefault();
    // check required fields
    checkRequired([username, email, password, password2]);
    // check field lengths (min max)
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
    /** ugly
    if (username.value === ''){
        // show error
        showError(username, 'Username is required');
    } else {
        // green outline
        showSuccess(username);
    }

    // email
    if (email.value === ''){
        showError(email, 'Email is required');
    } else if (!isValidEmail(email.value)){
        showError(email, 'Email is not valid');
    } else {
        showSuccess(email);
    }

    // password
    if (password.value === ''){
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }

    // password2
    if (password2.value === ''){
        showError(password2, 'Password 2 is required');
    } else {
        showSuccess(password2);
    } */
});