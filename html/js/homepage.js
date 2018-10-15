$(document).ready(() => {

    getLastBook()
        .done((data, text) => {

            let book = JSON.parse(data);
            let constructedNewlyAdded = constructCard(book);

            const newlyAdded = document.querySelector('.newlyAdded');
            newlyAdded.appendChild(constructedNewlyAdded);

            const newlyAddedImage = document.querySelector('#newlyAddedImage');
            let constructedImage = constructImage(newlyAddedImage, book);
        })
        .fail((request, status, error) =>
        {
            console.log(request);
        });

    getMostPopulair()
        .done((data, text) => {

            let book = JSON.parse(data);
            let constructedMostPopulair = constructCard(book);

            const mostPopulair = document.querySelector('.mostPopulair');
            mostPopulair.appendChild(constructedMostPopulair);

            const mostPopulairImage = document.querySelector('#mostPopulairImage');
            let constructedImage = constructImage(mostPopulairImage, book);
        })
        .fail((request, status, error) =>
        {
            console.log(request);
        });

    getRecommended()
        .done((data, text) => {

            let books = JSON.parse(data);

            const recommendedWrapper = document.createElement('div');
            recommendedWrapper.setAttribute('class', 'bg-white');

            const recommendedDiv = document.querySelector('.recommended');
            recommendedDiv.appendChild(recommendedWrapper);

            books.forEach(function (book) {
                let constructedRecommended = constructRecommended(book);
                recommendedWrapper.appendChild(constructedRecommended);
            })
        });

    // Contact

    const form = document.getElementById('contactForm');
    const inputFields = form.querySelectorAll('input, textarea');

    form.addEventListener('submit', (event) => {
        validateFieldsWhenSubmit(inputFields);
        event.preventDefault();

        if (form.checkValidity()) {

            const suggestion = {
                fullname: form.fullname.value,
                email: form.email.value,
                subject: form.subject.value,
                message_content: form.message_content.value
            };

            createSuggestion(suggestion)
                .done((data, text) => {
                    form.reset();
                    appendSuccessMessage('Your suggestion has been sent!', '.message-container');
                })
                .fail((request,status, error) => {
                    console.log(request);
                });
        }
    });

    for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].addEventListener('blur', fieldValidationWhenBlur);
    }
});