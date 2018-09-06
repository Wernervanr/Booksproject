const createBookTableRows = (templateSelector,books) => {
    const rowTemplate = document.querySelector(templateSelector);

    const bookTableRows = [];

    books.map((book) => {

        const bookTableRow = rowTemplate.content.cloneNode(true).querySelector('tr');

        ['title','author_id','isbn','price'].map((columnSelector) => {
            const col = bookTableRow.querySelector('.' + columnSelector);
            if (col) {
                col.textContent += book[columnSelector];
            }
        });

        bookTableRow.addEventListener('click',(event) => {
            if (event.target.classList.contains('btn-delete')) {
                event.stopPropagation();
                if (window.confirm('Are you sure you want to delete this book?')) {
                    deleteBook(book.id)
                        .done((data) => {
                            bookTableRow.parentNode.removeChild(bookTableRow);
                        })
                        .fail((request, status, error) => {
                            window.alert('Unfortunately an error occurred during the deletion of this book');
                        })
                }
            } else {
                window.location = '?route=show&id=' + book.id;
            }
        });

        bookTableRows.push(bookTableRow);
    });

    return bookTableRows;
};

const bookRowClickHandler = (bookTableRow,book,event) => {
	if (event.target.classList.contains('btn-delete')) {
		event.stopPropagation();
		if (window.confirm('Are you sure you want to delete this book?')) {
			deleteBook(book.id)
				.done((data) => {
					bookTableRow.parentNode.removeChild(bookTableRow);
				})
				.fail((request, status, error) => {
					window.alert('Unfortunately an error occurred during the deletion of this book');
				})
		}
	} else {
		window.location = '?route=show&id=' + book.id;
	}
};