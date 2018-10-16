$(document).ready(() => {

    getSuggestions()
        .done((data, text) => {
            // Display all suggestions in short, being just the name, date, and subject.
            let suggestions = JSON.parse(data);

            suggestions.forEach(function(suggestion) {
                const constructedInboxSuggestion = constructInboxSuggestion(suggestion);

                const inbox = document.querySelector('.inboxDiv');
                inbox.appendChild(constructedInboxSuggestion);

                determineIfRead(suggestion.id, constructedInboxSuggestion, 'suggestion');

                constructedInboxSuggestion.addEventListener('click', (event) => {
                    // If the target clicked is the delete button.
                    if (event.target.classList.contains('inboxDeleteButton')) {
                        event.stopPropagation();
                        deleteThisSuggestion(constructedInboxSuggestion, suggestion.id);
                    }
                    // If the target clicked is the suggestion itself.
                    else {
                        const constructedSuggestion = constructFullSuggestion(suggestion);

                        const suggestionDisplay = document.querySelector('.clickedsuggestion');
                            removeChildNodes(suggestionDisplay);
                        suggestionDisplay.setAttribute('class', 'clickedsuggestion order-1 order-lg-2 mb-3 col-12 col-lg-8');
                        suggestionDisplay.appendChild(constructedSuggestion);

                        saveAsRead(suggestion.id, 'suggestion');
                        determineIfRead(suggestion.id, constructedInboxSuggestion, 'suggestion');
                    }
                });
            });
        })
        .fail((request, status, error) => {
            console.log(request);
        });
});