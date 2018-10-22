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
                        determineIfRead(suggestion.id, constructedInboxSuggestion, 'suggestion');

                        const constructedSuggestion = constructFullSuggestion(suggestion);

                        if (constructedInboxSuggestion.childNodes.length > 4) {
                            constructedInboxSuggestion.removeChild(constructedInboxSuggestion.lastChild);
                        } else {
                            constructedInboxSuggestion.appendChild(constructedSuggestion);
                        }

                        saveAsRead(suggestion.id, 'suggestion');
                    }
                });
            });
        })
        .fail((request, status, error) => {
            console.log(request);
        });
});