$(document).ready(() => {

    const getBooksXml = () => {
        const request = new XMLHttpRequest();
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    let response = JSON.parse(request.response);
                    console.log(response);
                } else {
                    console.log(request);
                }
            }
        };
        request.open('GET',env.api + '?route=books');
        request.send();
    };

    const getBooksFetch = () => {
        fetch(env.api + '?route=books', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                //'X-XSRF-TOKEN': getCookieValue('XSRF-TOKEN')
            }
        }).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    console.log(data);
                });
            }
            else {
                console.log(response);
            }
        });
    };





    // NEW opdracht

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