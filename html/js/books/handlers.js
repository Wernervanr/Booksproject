// HOMEPAGE
const constructCard = (book) => {
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

    return infoDiv;
};

const constructImage = (book) => {
    const imageTag = document.createElement('img');
    imageTag.setAttribute('class', 'card-img-top');
    imageTag.setAttribute('alt', book.title + ' Cover');
    imageTag.style.cursor = "pointer";
    imageTag.addEventListener('click', (event) => {
        window.location = '?route=show&id=' + book.id;
    });

    const imageExist = 'img/' + book.id + '.jpg';
    $.get(imageExist)
        .done(function() {
            imageTag.setAttribute('src', 'img/' + book.id + '.jpg');
        })
        .fail(function() {
            imageTag.setAttribute('src', 'slides/unavailable.jpg');
        });

    return imageTag;
};

const constructRecommended = (book) => {
    const recommended = document.createElement('div');
    recommended.setAttribute('class', 'p-2');

        // Image constructor component
        const recommendedImageWrapper = document.createElement('div');
        recommendedImageWrapper.setAttribute('class', 'recommendedimage mx-auto d-block mb-2');

            const recommendedImage = document.createElement('img');
            recommendedImage.setAttribute('class', 'px-2');
            recommendedImage.setAttribute('src', 'img/' + book.id + '.jpg');
            recommendedImage.style.cursor = "pointer";
            recommendedImage.addEventListener('click', (event) => {
                window.location = '?route=show&id=' + book.id;
            });

        recommendedImageWrapper.appendChild(recommendedImage);

        // Textcontent constructor component
        const recommendedTextContent = document.createElement('p');
        recommendedTextContent.innerHTML = `<b> ${book.title} </b><br>
                                            <b>Series No: </b> ${book.series_no} <br>
                                            <b>Description: </b><br> ${book.description}`;

    recommended.appendChild(recommendedImageWrapper);
    recommended.appendChild(recommendedTextContent);

    return recommended;
};

const submitSuggestion = (form) => {
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
};

// LISTING
const createBookTableRows = (templateSelector, books) => {
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

// DETAIL
const constructBook = (details) => {
    const allDetails = document.createElement('div');

        const publisherCont = document.createElement('div');
        publisherCont.setAttribute('class', 'mb-2');
        publisherCont.innerHTML =`<b>Publisher</b>
                                  <div>${details.publisher}</div>`;

        const seriesNoCont = document.createElement('div');
        seriesNoCont.setAttribute('class', 'mb-2');
        seriesNoCont.innerHTML =`<b>Series No.</b>
                                 <div>${details.series_no}</div>`;

        const priceCont = document.createElement('div');
        priceCont.setAttribute('class', 'mb-2');
        priceCont.innerHTML =`<b>Price</b>
                              <div>&euro; ${details.price}</div>`;

        const descriptionCont = document.createElement('div');
        descriptionCont.setAttribute('class', 'mb-2');
        descriptionCont.innerHTML =`<b>Description</b>
                                    <div>${details.description}</div>`;

    allDetails.appendChild(publisherCont);
    allDetails.appendChild(seriesNoCont);
    allDetails.appendChild(priceCont);
    allDetails.appendChild(descriptionCont);

    return allDetails;
};

const deleteThisBook = (bookId) => {
    if (window.confirm('Are you sure you want to delete this comic book?')) {
        deleteBook(bookId)
            .done((data) => {
                window.alert('Book was succesfully deleted.');
                window.location = '?route=listing';
            })
            .fail((request, status, error) => {
                window.alert('Unfortunately an error occurred during the deletion of this book');
            })
    } else {
        event.preventDefault();
    }
};

// NEW-BOOK / UPDATE-BOOK
const submitBook = (bookId, form, method) => {
    if (form.checkValidity()) {

        const book = {
            title: form.title.value,
            publisher: form.publisher.value,
            series_no: form.series_no.value,
            price: form.price.value,
            description: form.description.value
        };

        if (method === 'create') {
            createBook(book)
                .done((data, text) => {
                    form.reset();
                    appendSuccessMessage('Book succesfully added to the library!', '.message-container');
                    window.location = '?route=show&id=' + JSON.parse(data);
                })
                .fail((request, status, error) => {
                    console.log(request);
                });
        } else if (method === 'update') {
            updateBook(bookId, book)
                .done((data, text) => {
                    window.location = '?route=show&id=' + bookId;
                })
                .fail((request,status, error) => {
                    console.log(request);
                });
        }
    }
};