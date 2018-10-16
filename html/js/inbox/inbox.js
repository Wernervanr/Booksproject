$(document).ready(() => {

    getSuggestions()
        .done((data, text) => {
            // Display all suggestions in short, being just the name, date, and subject.
            let suggestions = JSON.parse(data);

            suggestions.forEach(function(suggestion) {
                const constructedSuggestion = constructSuggestion(suggestion);

                const smallSuggestionDisplay = document.querySelector('.inboxDiv');
                smallSuggestionDisplay.appendChild(constructedSuggestion);

                determineIfRead(suggestion.id, constructedSuggestion, 'suggestion');

                constructedSuggestion.addEventListener('click', (event) => {
                    // If the target clicked is the delete button.
                    if (event.target.classList.contains('inboxDeleteButton')) {
                        event.stopPropagation();
                        deleteThisSuggestion(constructedSuggestion, suggestion.id);
                    }
                    // If the target clicked is the suggestion itself.
                    else {
                        const constructedFullSuggestion = constructFullSuggestion(suggestion);
                        const fullSuggestionDisplay = document.querySelector('.clickedsuggestion');

                        const renderedFullSuggestion = renderFullSuggestion(fullSuggestionDisplay);
                        renderedFullSuggestion.appendChild(constructedFullSuggestion);

                        saveAsRead(suggestion.id, 'suggestion');
                        determineIfRead(suggestion.id, constructedSuggestion, 'suggestion');
                    }
                });
            });
        })
        .fail((request, status, error) => {
            console.log(request);
        });
});