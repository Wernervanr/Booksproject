$(document).ready(() => {

    getOneBook()
        .done((data, text) => {

            let details = JSON.parse(data);

            const authorCont = document.querySelector('.authorCont');
            const isbnCont = document.querySelector('.isbnCont');
            const priceCont = document.querySelector('.priceCont');
            const descriptionCont = document.querySelector('.descriptionCont');

            details.map(function(book) {
                const authorDiv = document.createElement('div');
                authorDiv.textContent = book.author_id;

                const isbnDiv = document.createElement('div');
                isbnDiv.textContent = book.isbn;

                const priceDiv = document.createElement('div');
                priceDiv.textContent = book.price;

                const descriptionDiv = document.createElement('div');
                descriptionDiv.textContent = book.title;

                authorCont.appendChild(authorDiv);
                isbnCont.appendChild(isbnDiv);
                priceCont.appendChild(priceDiv);
                descriptionCont.appendChild(descriptionDiv);

                getOneBook(book);
            });
        })
        .fail((request, status, error) =>
        {
            console.log(request);
        });
});