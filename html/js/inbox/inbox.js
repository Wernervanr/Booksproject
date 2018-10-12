$(document).ready(() => {

    const inboxDivSmall = document.querySelector('.inboxDivSmall');
    const inboxDivLarge = document.querySelector('.inboxDivLarge');

    getSuggestions()
        .done((data, text) => {
            // Display all suggestions in short, being just the name, date, and subject.
            let suggestions = JSON.parse(data);

            suggestions.forEach(function(suggestion) {

                let constructedSuggestion = constructSuggestion(suggestion);
                constructedSuggestion.addEventListener('click', (event) => {

                    // If the target clicked is the delete button.
                    if (event.target.classList.contains('inboxDeleteButton')) {
                        event.stopPropagation();
                        deleteThisSuggestion(constructedSuggestion, suggestion.id);

                    // If the target clicked is the suggestion itself.
                    } else {


                        saveAsRead(suggestion.id, 'suggestion');
                        determineIfRead(suggestion.id, constructedSuggestion, 'suggestion');
                    }
                });
                inboxDivSmall.appendChild(constructedSuggestion);
                determineIfRead(suggestion.id, constructedSuggestion, 'suggestion');
            });
        })
        .fail((request, status, error) => {
            console.log(request);
        });
});