document.addEventListener('DOMContentLoaded', () => {

// Variabele aanmaken waarin de tweede submitknop(delete, niet add image) op de detailpagina wordt geselecteerd
    const form = document.getElementById('deleteBtn');

// Eventlistener aanmaken dat wanneer op de delete knop gedrukt wordt, de delete functie in de bookController geactiveerd wordt.
    form.addEventListener('submit', () => {
        confirmDelete = confirm('Are you sure you want to delete this book?');
        if (confirmDelete === true) {
            deleteBook(bookId);
        }
    });
});