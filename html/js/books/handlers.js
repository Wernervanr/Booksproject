// LISTING

const createBookTableRows = (templateSelector,books) => {
    const rowTemplate = document.querySelector(templateSelector);

    const bookTableRows = [];

    books.map((book) => {

        const bookTableRow = rowTemplate.content.cloneNode(true).querySelector('tr');

        ['title','publisher','series_no','price'].map((columnSelector) => {
            const col = bookTableRow.querySelector('.' + columnSelector);
            if (col) {
                col.textContent += book[columnSelector];
            }
        });

        bookTableRow.addEventListener('click',(event) => {
            if (event.target.classList.contains('btn-delete')) {
                event.stopPropagation();
                if (window.confirm('Are you sure you want to delete this book?')) {
                    deleteBook(book.id)
                        .done((data) => {
                            bookTableRow.parentNode.removeChild(bookTableRow);
                        })
                        .fail((request, status, error) => {
                            window.alert('Unfortunately an error occurred during the deletion of this book');
                        })
                }
            } else {
                window.location = '?route=show&id=' + book.id;
            }
        });
        bookTableRows.push(bookTableRow);
    });

    return bookTableRows;
};

const getConditionalListingText = () => {
    const listingHeading = document.querySelector('.listingHeading');

    const headingText = document.createElement('div');
        if (profile === 'logged in') {
            headingText.textContent = 'Welcome to the editting section of the Comics catalog. Select a comic in the listing below to see details and edit them!';
        } else {
            headingText.textContent = 'Welcome to the Comics catalog. Select a comic in the listing below to see their details!';
        }
    headingText.setAttribute('class', 'welcometext text-center');

    listingHeading.appendChild(headingText);
};

// DETAIL

const constructBook = (details) => {

    const allDetails = document.createElement('div');

        const publisherCont = document.createElement('div');
        publisherCont.innerHTML =   '<b>' + "Publisher" + '</b>' +
            '<div>' + details.publisher + '</div>';
        publisherCont.setAttribute('class', 'mb-2');

        const seriesNoCont = document.createElement('div');
        seriesNoCont.innerHTML =   '<b>' + "Series No." + '</b>' +
            '<div>' + details.series_no + '</div>';
        seriesNoCont.setAttribute('class', 'mb-2');

        const priceCont = document.createElement('div');
        priceCont.innerHTML =   '<b>' + "Price" + '</b>' +
            '<div>' + details.price + '</div>';
        priceCont.setAttribute('class', 'mb-2');

        const descriptionCont = document.createElement('div');
        descriptionCont.innerHTML =   '<b>' + "Description" + '</b>' +
            '<div>' + details.description + '</div>';
        descriptionCont.setAttribute('class', 'mb-2');

    allDetails.appendChild(publisherCont);
    allDetails.appendChild(seriesNoCont);
    allDetails.appendChild(priceCont);
    allDetails.appendChild(descriptionCont);

    return allDetails;
};