$(document).ready(() => {

    const table = document.querySelector('.table');

    getConditionalListingText();

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
});