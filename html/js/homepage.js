$(document).ready(() => {

    getLastBook()
        .done((data, text) => {

            let book = JSON.parse(data);
            let constructedNewlyAdded = constructCard(book);
            let constructedImage = constructImage(book);

            const newlyAdded = document.querySelector('.newlyAdded');
            newlyAdded.appendChild(constructedImage);
            newlyAdded.appendChild(constructedNewlyAdded);
        })
        .fail((request, status, error) =>
        {
            console.log(request);
        });

    getMostPopulair()
        .done((data, text) => {

            let book = JSON.parse(data);
            let constructedMostPopulair = constructCard(book);
            let constructedImage = constructImage(book);

            const mostPopulair = document.querySelector('.mostPopulair');
            mostPopulair.appendChild(constructedImage);
            mostPopulair.appendChild(constructedMostPopulair);
        })
        .fail((request, status, error) =>
        {
            console.log(request);
        });

    getRecommended()
        .done((data, text) => {

            let books = JSON.parse(data);

            const recommendedDiv = document.querySelector('.recommended');

            books.forEach(function (book) {
                let constructedRecommended = constructRecommended(book);
                recommendedDiv.appendChild(constructedRecommended);
            })
        })
        .fail((request, status, error) =>
        {
            console.log(request);
        });

    // Contact

    const form = document.getElementById('contactForm');
    const inputFields = form.querySelectorAll('input, textarea');

    form.addEventListener('submit', (event) => {
        validateFieldsWhenSubmit(inputFields);
        event.preventDefault();
        submitSuggestion(form);
    });

    for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].addEventListener('blur', fieldValidationWhenBlur);
    }
});