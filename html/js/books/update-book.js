document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('updateBookForm');
    const inputTitle = document.getElementById('title');
    const inputFields = form.querySelectorAll('input, textarea');


    form.addEventListener('submit', (event) => {
        validateFieldsWhenSubmit(inputFields);
        event.preventDefault();

        if (form.checkValidity()) {

            const book = {
                title: form.title.value,
                publisher: form.publisher.value,
                series_no: form.series_no.value,
                price: form.price.value,
                description: form.description.value,
            };

            updateBook(bookId, book)
                .done((data, text) => {
                    window.location = '?route=show&id=' + bookId;
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
        inputFields[i].addEventListener('blur', fieldValidationWhenBlur);
    }
});