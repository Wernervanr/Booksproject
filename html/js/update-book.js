document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('updateBookForm');
    const inputTitle = document.getElementById('title');
    const inputFields = form.querySelectorAll('.form-control');


    form.addEventListener('submit', (event) => {

        for (let i = 0; i < inputFields.length; i++) {
            if (!inputFields[i].checkValidity()) {
                addErrorMessageForElement(inputFields[i]);
            } else {
                clearErrorMessageForElement(inputFields[i]);
            }
        }

        event.preventDefault();

        if (form.checkValidity()) {

            const book = {
                title: form.title.value,
                author_id: form.author.value,
                category_id: form.category.value,
                isbn: form.isbn.value,
                price: form.price.value,
                description: form.description.value,
            };

            updateBook(book)
                .done((data, text) => {
                    form.reset();
                    appendSuccessMessage('Book succesfully editted!', '.message-container');
                    window.location = '?route=show&id=' + JSON.parse(data);
                })
                .fail((request,status, error) => {
                    console.log(request);
                });
        }
    });

    inputTitle.addEventListener('blur', (event) => {
        if (event.target.value.length < 5 && inputTitle.checkValidity()) {
            event.target.setCustomValidity('Titel moet meer dan vier karakters hebben')
        } else {
            event.target.setCustomValidity('')
        }
    });

    for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].addEventListener('blur', fieldValidation);
    };
});