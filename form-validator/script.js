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
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// show success outline
function showSuccess(input){
    // gets parent form control and adds success class
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// submit form event listener
form.addEventListener('submit', function(e){
    // prevents form from submitting
    e.preventDefault();
    
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
    }
});