$(document).ready(() => {

    getOneBook(bookId)
        .done((data, text) => {

            let details = JSON.parse(data);

            const authorCont = document.querySelector('.authorCont');
            const isbnCont = document.querySelector('.isbnCont');
            const priceCont = document.querySelector('.priceCont');
            const descriptionCont = document.querySelector('.descriptionCont');
            const titleCont = document.querySelector('.titleCont');

            const authorDiv = document.createElement('div');
            authorDiv.textContent = details.author_id;
            authorDiv.setAttribute('class', 'mb-2');

            const isbnDiv = document.createElement('div');
            isbnDiv.textContent = details.isbn;
            isbnDiv.setAttribute('class', 'mb-2');

            const priceDiv = document.createElement('div');
            priceDiv.textContent = '€ ' + details.price;
            priceDiv.setAttribute('class', 'mb-2');

            const descriptionDiv = document.createElement('div');
            descriptionDiv.textContent = details.description;
            descriptionDiv.setAttribute('class', 'mb-2');

            const titleDiv = document.createElement('h2');
            titleDiv.textContent = details.title;
            titleDiv.setAttribute('class', 'subtitle mt-2');

            titleCont.appendChild(titleDiv);
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