document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('updateBookForm');
    const inputTitle = document.getElementById('title');
    const inputFields = form.querySelectorAll('input, textarea');


    form.addEventListener('submit', (event) => {
        validateFieldsWhenSubmit(inputFields);
        event.preventDefault();
        submitBook(bookId, form, 'update');
    });

    inputTitle.addEventListener('blur', (event) => {
        if (event.target.value.length < 5 && inputTitle.checkValidity()) {
            event.target.setCustomValidity('Title should include more than four characters')
        } else {
            event.target.setCustomValidity('')
        }
    });

    for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].addEventListener('blur', fieldValidationWhenBlur);
    }
});