$(document).ready(() => {

    const form = document.getElementById('registerForm');
    const inputFields = form.querySelectorAll('input');

    form.addEventListener('submit', (event) => {
        validateFieldsWhenSubmit(inputFields);
        event.preventDefault();
        submitRegistration(form);
    });

    for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].addEventListener('blur', fieldValidationWhenBlur);
    }

});