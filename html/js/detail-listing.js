$(document).ready(() => {

    getOneBook(bookId)
        .done((data, text) => {

            let details = JSON.parse(data);

            console.log(details);

            const authorCont = document.querySelector('.authorCont');
            const isbnCont = document.querySelector('.isbnCont');
            const priceCont = document.querySelector('.priceCont');
            const descriptionCont = document.querySelector('.descriptionCont');

            const authorDiv = document.createElement('div');
            authorDiv.textContent = details.author_id;

            const isbnDiv = document.createElement('div');
            isbnDiv.textContent = details.isbn;

            const priceDiv = document.createElement('div');
            priceDiv.textContent = details.price;

            const descriptionDiv = document.createElement('div');
            descriptionDiv.textContent = details.description;

            authorCont.appendChild(authorDiv);
            isbnCont.appendChild(isbnDiv);
            priceCont.appendChild(priceDiv);
            descriptionCont.appendChild(descriptionDiv);
        })
        .fail((request, status, error) =>
        {
            console.log(request);
        });
});