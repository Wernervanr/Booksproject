$(document).ready(() => {

    const inboxDivSmall = document.querySelector('.inboxDivSmall');
    const inboxDivLarge = document.querySelector('.inboxDivLarge');

    const smallScreenDiv = document.createElement('div');
    smallScreenDiv.setAttribute('class', 'd-lg-none');

    getSuggestions()
        .done((data, text) => {

            // Display all suggestions in short, being just the name, date, and subject.

            let suggestions = JSON.parse(data);

            suggestions.forEach(function(suggestion) {

                let constructedSuggestion = constructInbox(suggestion);
                inboxDivSmall.appendChild(constructedSuggestion);

            // End display all suggestions in short.

                // Upon click, either the e-mail address and the message content will show, or message will be deleted.

                constructedSuggestion.addEventListener('click', (event) => {

                    // If the target clicked is the delete button.

                    if (event.target.classList.contains('inboxDeleteButton')) {
                        event.stopPropagation();
                        if (window.confirm('Are you sure you want to delete this suggestion?')) {
                            deleteSuggestion(suggestion.id)
                                .done((data) => {
                                    inboxDivSmallContent.parentNode.removeChild(inboxDivSmallContent);
                                    inboxDivLarge.removeChild(inboxDivLarge.firstChild);
                                    localStorage.removeItem('isRead' + suggestion.id);
                                })
                                .fail((request, status, error) => {
                                    window.alert('Unfortunately an error occurred during the deletion of this book');
                                })
                        }

                    // If the target clicked is the suggestion itself.

                    } else {

                        // Mark the suggestion as being read when clicked upon.

                        localStorage.setItem('isRead' + suggestion.id, true);
                        constructedSuggestion.classList.toggle('readSuggestion');

                        // Display on Small Screen.
                        while (smallScreenDiv.hasChildNodes()) {
                            smallScreenDiv.removeChild(smallScreenDiv.lastChild);
                        }

                        let emailSmall = document.createElement('div');
                        emailSmall.setAttribute('class', 'col-12');
                        emailSmall.textContent = suggestion.email;

                        let messageSmall = document.createElement('div');
                        messageSmall.setAttribute('class', 'col-12 mt-2');
                        messageSmall.textContent = suggestion.message_content;

                        smallScreenDiv.appendChild(emailSmall);
                        smallScreenDiv.appendChild(messageSmall);

                        inboxDivSmallContent.insertBefore(smallScreenDiv, inboxDivSmallContent.lastChild);

                        // Display on Large Screen.
                        while (inboxDivLarge.hasChildNodes()) {
                            inboxDivLarge.removeChild(inboxDivLarge.firstChild);
                        }

                        let inboxDivLargeContent = document.createElement('div');
                        inboxDivLargeContent.setAttribute('class', 'row pl-3');

                        let fullNameLarge = document.createElement('div');
                        fullNameLarge.setAttribute('class', 'col-9 font-weight-bold');
                        fullNameLarge.textContent = suggestion.fullname;

                        let dateLarge = document.createElement('div');
                        dateLarge.setAttribute('class', 'col-3 font-weight-bold');
                        dateLarge.textContent = suggestion.created_at;

                        let emailLarge = document.createElement('div');
                        emailLarge.setAttribute('class', 'col-lg-12 ');
                        emailLarge.textContent = 'E-mail: ' + suggestion.email;

                        let subjectLarge = document.createElement('div');
                        subjectLarge.setAttribute('class', 'col-lg-12 mb-2 ');
                        subjectLarge.textContent = 'Subject: ' + suggestion.subject;

                        let messageLarge = document.createElement('div');
                        messageLarge.setAttribute('class', 'col-lg-12');
                        messageLarge.textContent = suggestion.message_content;

                        inboxDivLargeContent.appendChild(fullNameLarge);
                        inboxDivLargeContent.appendChild(dateLarge);
                        inboxDivLargeContent.appendChild(emailLarge);
                        inboxDivLargeContent.appendChild(subjectLarge);
                        inboxDivLargeContent.appendChild(messageLarge);

                        inboxDivLarge.appendChild(inboxDivLargeContent);
                    }
                });
            });
        })
        .fail((request, status, error) =>
        {
            console.log(request);
        });
});