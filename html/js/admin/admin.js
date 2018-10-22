$(document).ready(() => {

    const suggestions = document.getElementById('suggestionList');
    const users = document.getElementById('userList');
    const suggestionDisplay = document.getElementById('suggestionDisplay');
    const usersDisplay = document.getElementById('usersDisplay');

    suggestions.addEventListener('click', (event) => {
        suggestions.setAttribute('class', 'col-md-6 comic order-2 order-md-1');
        users.setAttribute('class', 'col-md-6 text-muted order-1 order-md-2');
        usersDisplay.setAttribute('class', 'd-none');
        suggestionDisplay.setAttribute('class', 'order-3');
    });

    users.addEventListener('click', (event) => {
        suggestions.setAttribute('class', 'col-md-6 text-muted order-1 order-md-2');
        users.setAttribute('class', 'col-md-6 comic order-2 order-md-1');
        suggestionDisplay.setAttribute('class', 'd-none');
        usersDisplay.setAttribute('class', 'order-3');
    });
});