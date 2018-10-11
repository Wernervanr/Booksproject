$(document).ready(() => {

    getLastBook()
        .done((data, text) => {

            let book = JSON.parse(data);

            const newlyAdded = document.querySelector('.newlyAdded');

            const newlyAddedImage = document.querySelector('.newlyAddedImage');
            const imageExist = 'img/' + book.id + '.jpg';
            $.get(imageExist)
                .done(function() {
                    newlyAddedImage.setAttribute('src', 'img/' + book.id + '.jpg');
                }).fail(function() {
                    newlyAddedImage.setAttribute('src', 'slides/unavailable.jpg');
            });
            newlyAddedImage.style.cursor = "pointer";

            const infoDiv = document.createElement('div');
            infoDiv.setAttribute('class', 'card-body');

            const infoParagraph = document.createElement('p');
            infoParagraph.setAttribute('class', 'card-text');
            infoParagraph.innerHTML =
                `<b>${book.title}</b><br>
                Priced at only €${book.price} <br>
                Added on ${book.created_at} <br> <br>
                Click image to see details`;

            infoDiv.appendChild(infoParagraph);
            newlyAdded.appendChild(infoDiv);

            newlyAddedImage.addEventListener('click', (event) => {
                window.location = '?route=show&id=' + book.id;
            });
        })
        .fail((request, status, error) =>
        {
            console.log(request);
        });

    getMostPopulair()
        .done((data, text) => {

            let book = JSON.parse(data);

            const mostPopulair = document.querySelector('.mostPopulair');

            const mostPopulairImage = document.querySelector('.mostPopulairImage');
            mostPopulairImage.setAttribute('src', 'img/' + book.id + '.jpg');
            mostPopulairImage.style.cursor = "pointer";

            const infoDiv = document.createElement('div');
            infoDiv.setAttribute('class', 'card-body');

            const infoParagraph = document.createElement('p');
            infoParagraph.setAttribute('class', 'card-text');
            infoParagraph.innerHTML =
                `<b>${book.title}</b><br>
                Priced at only €${book.price} <br>
                Added on ${book.created_at} <br> <br>
                Click image to see details`;

            infoDiv.appendChild(infoParagraph);
            mostPopulair.appendChild(infoDiv);

            mostPopulairImage.addEventListener('click', (event) => {
                window.location = '?route=show&id=' + book.id;
            });
        })
        .fail((request, status, error) =>
        {
            console.log(request);
        });

    getRecommended()
        .done((data, text) => {

            let books = JSON.parse(data);

            const recommendedDiv = document.querySelector('.recommended');

            const recommendedWrapper = document.createElement('div');
            recommendedWrapper.setAttribute('class', 'Recommended bg-white');

            recommendedDiv.appendChild(recommendedWrapper);

            books.forEach(function (book) {
                const recommended = document.createElement('div');
                recommended.setAttribute('class', 'slide p-2');

                const recommendedImageWrapper = document.createElement('div');
                recommendedImageWrapper.setAttribute('class', 'recommendedimage mx-auto d-block mb-2');

                const recommendedImage = document.createElement('img');
                recommendedImage.setAttribute('class', 'px-2');
                recommendedImage.setAttribute('src', 'img/' + book.id + '.jpg');
                recommendedImage.style.cursor = "pointer";

                const recommendedTextContent = document.createElement('p');
                recommendedTextContent.innerHTML =
                    `<b> ${book.title} </b><br>
                    <b>Series No: </b> ${book.series_no} <br>
                    <b>Description: </b><br> ${book.description}`;

                recommendedImageWrapper.appendChild(recommendedImage);

                recommended.appendChild(recommendedImageWrapper);
                recommended.appendChild(recommendedTextContent);
                recommendedWrapper.appendChild(recommended);

                recommendedImage.addEventListener('click', (event) => {
                    window.location = '?route=show&id=' + book.id;
                });
            })
        });

    // Contact

    const form = document.getElementById('contactForm');
    const inputFields = form.querySelectorAll('input, textarea');

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
        inputFields[i].addEventListener('blur', fieldValidation);
    }
});