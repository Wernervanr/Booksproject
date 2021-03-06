$(document).ready(() => {

    const listingHeading = document.querySelector('.listingHeading');

        const headingText = document.createElement('div');
        headingText.setAttribute('class', 'welcometext text-center');

    listingHeading.appendChild(headingText);

    if (profile === 'logged in') {
        headingText.textContent = 'Welcome to the editting section of the Comics catalog. Select a comic in the listing below to see details and edit them!';
    } else {
        headingText.textContent = 'Welcome to the Comics catalog. Select a comic in the listing below to see their details!';
    }

    getBooks()
        .done((data, text) => {

            const table = document.querySelector('.table');
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
});