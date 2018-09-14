$(document).ready(() => {

    const table = document.querySelector('.table');

    getBooks()
        .done((data, text) => {

            let books = JSON.parse(data);

            const bookTableRows = createBookTableRows('#tableRowTemplate',books);

            bookTableRows.map((bookTableRow) => {
                table.appendChild(bookTableRow);
            });
        })
        .fail((request, status, error) =>
        {
            console.log(request);
        });

    getLastBook()
        .done((data, text) => {

            let book = JSON.parse(data);

            const newlyAdded = document.querySelector('.newlyAdded');
            newlyAdded.style.cursor = "pointer";

            const newlyAddedImage = document.querySelector('.newlyAddedImage');
            newlyAddedImage.setAttribute('src', 'img/' + book.id + '.jpg');

            const infoDiv = document.createElement('div');
            infoDiv.setAttribute('class', 'card-body');

            const infoParagraph = document.createElement('p');
            infoParagraph.setAttribute('class', 'card-text');
            infoParagraph.innerHTML =
                '<b>' + book.title + '</b>' + '<br>' +
                'Priced at only €' + book.price + '<br>' +
                'Added on ' + book.created_at + '<br>' + '<br>' +
                'Click to see details';

            infoDiv.appendChild(infoParagraph);
            newlyAdded.appendChild(infoDiv);

            newlyAdded.addEventListener('click', (event) => {
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
            mostPopulair.style.cursor = "pointer";

            const mostPopulairImage = document.querySelector('.mostPopulairImage');
            mostPopulairImage.setAttribute('src', 'img/' + book.id + '.jpg');

            const infoDiv = document.createElement('div');
            infoDiv.setAttribute('class', 'card-body');

            const infoParagraph = document.createElement('p');
            infoParagraph.setAttribute('class', 'card-text');
            infoParagraph.innerHTML =
                '<b>' + book.title + '</b>' + '<br>' +
                'Priced at only €' + book.price + '<br>' +
                'Added on ' + book.created_at + '<br>' + '<br>' +
                'Click to see details';

            infoDiv.appendChild(infoParagraph);
            mostPopulair.appendChild(infoDiv);

            mostPopulair.addEventListener('click', (event) => {
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

            const recommendedSlidesWrapper = document.createElement('div');
            recommendedSlidesWrapper.setAttribute('class', 'slidesRecommended ');

            recommendedDiv.appendChild(recommendedSlidesWrapper);

            books.forEach(function (book) {
                const recommendedSlide = document.createElement('div');
                recommendedSlide.setAttribute('class', 'slide p-2');

                const recommendedSlideImageWrapper = document.createElement('div');
                recommendedSlideImageWrapper.setAttribute('class', 'recommendedimage');

                const recommendedSlideImage = document.createElement('img');
                recommendedSlideImage.setAttribute('src', 'img/' + book.id + '.jpg');

                const recommendedSlideTextContent = document.createElement('p');
                // recommendedSlideTextContent.setAttribute('class', 'border');

                recommendedSlideTextContent.innerHTML =
                    '<b>' + book.title + '</b>' + '<br>' +
                    '<b>' + 'Price:' + '</b> €' + book.price + '<br>' +
                    '<b>' + 'Description:' + '</b>' + '<br>' + book.description;

                recommendedSlideImageWrapper.appendChild(recommendedSlideImage);

                recommendedSlide.appendChild(recommendedSlideImageWrapper);
                recommendedSlide.appendChild(recommendedSlideTextContent);
                recommendedSlidesWrapper.appendChild(recommendedSlide);
            })
        });





    // CONDITIONELE WELKOMTEKST
    const listingHeading = document.querySelector('.listingHeading');

    const headingText = document.createElement('div');

    if (profile === 'logged in') {
        headingText.textContent = 'Welcome to the editting section of the Comics catalog. Select a comic in the listing below to see details and edit them!';
    } else {
        headingText.textContent = 'Welcome to the Comics catalog. Select a comic in the listing below to see their details!';
    }

    headingText.setAttribute('class', 'welcometext text-center');
    listingHeading.appendChild(headingText);

});