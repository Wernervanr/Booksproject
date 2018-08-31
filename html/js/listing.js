$(document).ready(() => {
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



    // CONDITIONELE WELKOMTEKST

    const listingHeading = document.querySelector('.listingHeading');

    const headingText = document.createElement('p');

    if (profile === 'logged in') {
        headingText.textContent = 'Hi! Welcome to the editting part of the book catalog. Click to see details and edit them!';
    } else {
        headingText.textContent = 'Hi! Welcome to the "read only" book catalog. Click our books to see their details!';
    }

    headingText.setAttribute('class', 'col');
    listingHeading.appendChild(headingText);

    // GET BOOKS

    getBooks()
        .done((data, text) => {

            let books = JSON.parse(data);

            const table = document.querySelector('.table');

            books.map(function(book) {
                const tableRow = document.createElement('tr');

                tableRow.onclick = () => {
                    window.location = '?route=show&id=' + book.id;
                };

                const titleCol = document.createElement('td');
                titleCol.textContent = book.title;

                const authorCol = document.createElement('td');
                authorCol.textContent = book.author_id;
                authorCol.setAttribute('class','d-none d-sm-table-cell');

                const isbnCol = document.createElement('td');
                isbnCol.textContent = book.isbn;
                isbnCol.setAttribute('class','d-none d-sm-table-cell');

                const priceCol = document.createElement('td');
                priceCol.textContent = '€ ' + book.price;

                tableRow.appendChild(titleCol);
                tableRow.appendChild(authorCol);
                tableRow.appendChild(isbnCol);
                tableRow.appendChild(priceCol);

                // DELETEKNOP ALLEEN BIJ LOGIN ZICHTBAAR
                if (profile === 'logged in') {
                    const deleteCol = document.createElement('td');
                    deleteCol.setAttribute('class', 'd-none d-sm-table-cell');

                    const delForm = document.createElement('form');
                    delForm.setAttribute('id', 'deleteBtn');

                    const delBtn = document.createElement('button');
                    delBtn.setAttribute('class', 'btn btn-info');
                    delBtn.setAttribute('type', 'submit');
                    delBtn.textContent = 'Delete';

                    delForm.appendChild(delBtn);
                    deleteCol.appendChild(delForm);

                    tableRow.appendChild(deleteCol);

                    table.appendChild(tableRow);

                    // DELETE KNOP EVENTLISTENER
                    const bookId = book.id;

                    tableRow.addEventListener('submit', () => {
                        confirmDelete = confirm('Are you sure you want to delete this book?');

                        if (confirmDelete === true) {
                            deleteBook(bookId);
                        }
                    });

                } else {
                    table.appendChild(tableRow);
                }
            });
        })
        .fail((request, status, error) =>
        {
            console.log(request);
        });
});