$(document).ready(() => {

    getOneBook(bookId)
        .done((data, text) => {

            let details = JSON.parse(data);

            const titleDiv = document.createElement('h2');
            titleDiv.textContent = details.title;
            titleDiv.setAttribute('class', 'subtitle mt-2');

            let constructedBook = constructBook(details);

            const titleCont = document.querySelector('.titleCont');
            titleCont.appendChild(titleDiv);

            const detailContainer = document.querySelector('.detailContainer');
            detailContainer.appendChild(constructedBook);
        })
        .fail((request, status, error) =>
        {
            console.log(request);
        });

    const deleteButton = document.getElementById('deleteBtn');
    deleteButton.addEventListener('click', (event) => {
        event.stopPropagation();
        deleteThisBook(bookId);
    });
});