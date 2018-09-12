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
                '<a href=""> Click to see details </a>';

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
                '<a href=""> Click to see details </a>';

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