const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    let inputControl = element.parentElement;
    let errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};



let isValidUsername = username => {
    const re = /^[a-zA-Z]+$/;
    return re.test(String(username).toLowerCase());
}


let isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

let validateInputs = () => {
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();



    if (usernameValue === '') {
        setError(username, 'veuillez entrer votre nom');
    } else if (!isValidUsername(usernameValue)) {
        setError(username, 'nom invalide');
    } else {
        setSuccess(username);
    }


    if (emailValue === '') {
        setError(email, 'veuillez entrer votre adree mail');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'adress mail invalide');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'veuillez entrer votre mot de pass');
    } else if (passwordValue.length < 8) {
        setError(password, 'le mot de pass doit contenir au moins 8 caracteres.')
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'veuillez confirmer votre mot de pass');
    } else if (password2Value !== passwordValue) {
        setError(password2, "mot de pass incorrect");
    } else {
        setSuccess(password2);
    }

};

