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

    getLastBook()
        .done((data, text) => {

            let book = JSON.parse(data);

            const newlyAdded = document.querySelector('.newlyAdded');

            const newlyAddedImage = document.querySelector('.newlyAddedImage');
            newlyAddedImage.setAttribute('src', 'img/' + book.id + '.jpg');

            const infoDiv = document.createElement('div');
            infoDiv.setAttribute('class', 'card-body');

            const infoParagraph = document.createElement('p');
            infoParagraph.setAttribute('class', 'card-text');
            infoParagraph.innerHTML =
                '<b>' + book.title + '</b>' + '<br>' +
                'Priced at only €' + book.price + '<br>' +
                'Added on ' + book.created_at + '<br>' + '<br>' +
                '<a href=""> Click to see details </a>';

            infoDiv.appendChild(infoParagraph);
            newlyAdded.appendChild(infoDiv);

            newlyAdded.addEventListener('click', (event) => {
                window.location = '?route=show&id=' + book.id;
            });
        })
        .fail((request, status, error) =>
        {
            console.log(request);
        });

    getMostPopulair()
        .done((data, text) => {

            let book = JSON.parse(data);

            const mostPopulair = document.querySelector('.mostPopulair');

            const mostPopulairImage = document.querySelector('.mostPopulairImage');
            mostPopulairImage.setAttribute('src', 'img/' + book.id + '.jpg');

            const infoDiv = document.createElement('div');
            infoDiv.setAttribute('class', 'card-body');

            const infoParagraph = document.createElement('p');
            infoParagraph.setAttribute('class', 'card-text');
            infoParagraph.innerHTML =
                '<b>' + book.title + '</b>' + '<br>' +
                'Priced at only €' + book.price + '<br>' +
                'Added on ' + book.created_at + '<br>' + '<br>' +
                '<a href=""> Click to see details </a>';

            infoDiv.appendChild(infoParagraph);
            mostPopulair.appendChild(infoDiv);

            mostPopulair.addEventListener('click', (event) => {
                window.location = '?route=show&id=' + book.id;
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
    const headingText = document.createElement('div');

    if (profile === 'logged in') {
        headingText.textContent = 'Hi! Welcome to the editting section of the Comics catalog. Select a comic in the listing below to see details and edit them!';
    } else {
        headingText.textContent = 'Hi! Welcome to the Comics catalog. Select a comic in the listing below to see their details!';
    }

    headingText.setAttribute('class', 'welcometext text-center');
    listingHeading.appendChild(headingText);

});