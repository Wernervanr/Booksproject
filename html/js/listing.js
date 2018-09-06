$(document).ready(() => {

    const table = document.querySelector('.table');

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



    //
    // const getBooksXml = () => {
    //     const request = new XMLHttpRequest();
    //     request.onreadystatechange = () => {
    //         if (request.readyState === 4) {
    //             if (request.status >= 200 && request.status < 300) {
    //                 let response = JSON.parse(request.response);
    //                 console.log(response);
    //             } else {
    //                 console.log(request);
    //             }
    //         }
    //     };
    //     request.open('GET',env.api + '?route=books');
    //     request.send();
    // };
    //
    // const getBooksFetch = () => {
    //     fetch(env.api + '?route=books', {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //             //'X-XSRF-TOKEN': getCookieValue('XSRF-TOKEN')
    //         }
    //     }).then(response => {
    //         if (response.ok) {
    //             response.json().then(data => {
    //                 console.log(data);
    //             });
    //         }
    //         else {
    //             console.log(response);
    //         }
    //     });
    // };


    // Table erbij halen
    // For loop over alle books heen
    //  - Table row maken
    //  - onclick event op de table row (als laatste doen)
    //  - Per kolom:
    //         - een table data (TD) maken
    //         - vullen met een waarde
    //        - class zetten
    //      - append aan table row
    //    - append aan table


    // getBooksJquery()
    //     .done((data, text) => {
    //
    //         let books = JSON.parse(data);
    //         let table = $('.table');
    //
    //         console.log(table);
    //
    //         $.each(books, function(index, book){
    //             let tr = '<?php' + '<tr>';
    //             tr += '<td>' + "<a href=\"?route=show&id={$book['id']}\">" + book.title + '</td>';
    //             tr += '<td>' + book.author_id + '</td>';
    //             tr += '<td>' + book.isbn + '</td>';
    //             tr += '<td>' + '&euro' + book.price + '</td>';
    //             tr += '</tr>' + '?>';
    //
    //             $(table).append(tr);
    //         });
    //
    //         console.log();
    //
    //     })
    //     .fail((request, status, error) =>
    //     {
    //         console.log(request);
    //     });

    const listingHeading = document.querySelector('.listingHeading');

    // CONDITIONELE WELKOMTEKST
    const headingText = document.createElement('p');

    if (profile === 'logged in') {
        headingText.textContent = 'Hi! Welcome to the editting part of the book catalog. Click to see details and edit them!';
    } else {
        headingText.textContent = 'Hi! Welcome to the "read only" book catalog. Click our books to see their details!';
    }

    headingText.setAttribute('class', 'col');
    listingHeading.appendChild(headingText);

});