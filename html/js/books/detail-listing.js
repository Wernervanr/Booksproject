$(document).ready(() => {

    getOneBook(bookId)
        .done((data, text) => {

            let details = JSON.parse(data);

            const titleCont = document.querySelector('.titleCont');
            const detailContainer = document.querySelector('.detailContainer');

            let titleDiv = document.createElement('h2');
            titleDiv.textContent = details.title;
            titleDiv.setAttribute('class', 'subtitle mt-2');

            let constructedBook = constructBook(details);

            titleCont.appendChild(titleDiv);
            detailContainer.appendChild(constructedBook);
        })
        .fail((request, status, error) =>
        {
            console.log(request);
        });
});