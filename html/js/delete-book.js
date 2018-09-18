document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('deleteBtn');

    form.addEventListener('submit', () => {
        confirmDelete = confirm('Are you sure you want to delete this book?');
        if (confirmDelete === true) {
            deleteBook(bookId);
        } else {
            event.preventDefault();
        }
    });
});