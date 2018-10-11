$(document).ready(() => {

    getOneBook(bookId)
        .done((data, text) => {

            let details = JSON.parse(data);

            const publisherCont = document.querySelector('.publisherCont');
            const seriesNoCont = document.querySelector('.seriesNoCont');
            const priceCont = document.querySelector('.priceCont');
            const descriptionCont = document.querySelector('.descriptionCont');
            const titleCont = document.querySelector('.titleCont');

            const publisherDiv = document.createElement('div');
            publisherDiv.textContent = details.publisher;
            publisherDiv.setAttribute('class', 'mb-2');

            const seriesNoDiv = document.createElement('div');
            seriesNoDiv.textContent = details.series_no;
            seriesNoDiv.setAttribute('class', 'mb-2');

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
            publisherCont.appendChild(publisherDiv);
            seriesNoCont.appendChild(seriesNoDiv);
            priceCont.appendChild(priceDiv);
            descriptionCont.appendChild(descriptionDiv);
        })
        .fail((request, status, error) =>
        {
            console.log(request);
        });
});