document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('deleteBtn');

    form.addEventListener('submit', () => {
        const confirmDelete = confirm('Are you sure you want to delete this book?');
        if (confirmDelete === true) {
            deleteBook(bookId);
            console.log('test');
        } else {
            event.preventDefault();
        }
    });
});