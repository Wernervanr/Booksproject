const constructInboxSuggestion = (suggestion) => {
    const inboxDivContent = document.createElement('div');
    inboxDivContent.setAttribute('class', 'row inboxContent border-bottom py-2');
    inboxDivContent.style.cursor = "pointer";

        const fullName = document.createElement('div');
        fullName.setAttribute('class', 'col-4 col-md-3 col-lg-3 font-weight-bold');
        fullName.textContent = suggestion.fullname;

        const subject = document.createElement('div');
        subject.setAttribute('class', 'col-6 col-md-5 col-lg-6');
        subject.textContent = suggestion.subject;

        const date = document.createElement('div');
        date.setAttribute('class', 'd-none d-md-block col-md-3 col-lg-2 font-weight-bold');
        date.textContent = suggestion.created_at;

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'btn-comic inboxDeleteButton mt-1');
        deleteBtn.setAttribute('type', 'submit');
        deleteBtn.innerText = 'Delete';

    inboxDivContent.appendChild(fullName);
    inboxDivContent.appendChild(subject);
    inboxDivContent.appendChild(date);
    inboxDivContent.appendChild(deleteBtn);

    return inboxDivContent;
};

const constructFullSuggestion = (suggestion) => {

    const fullSuggestion = document.createElement('div');
    fullSuggestion.setAttribute('class', 'pb-2');

    const email = document.createElement('div');
    email.setAttribute('class', 'col-12 ');
    email.textContent = 'E-mail: ' + suggestion.email;

    const message = document.createElement('div');
    message.setAttribute('class', 'col-12');
    message.textContent = suggestion.message_content;

    const backToInbox = document.createElement('button');
    backToInbox.setAttribute('class', 'btn btn-comic mt-3 ml-3 mr-auto');
    backToInbox.textContent = 'hide';

    fullSuggestion.appendChild(email);
    fullSuggestion.appendChild(message);

    return fullSuggestion;
};

const deleteThisSuggestion = (suggestionDiv, suggestionId) => {
    if (window.confirm('Are you sure you want to delete this suggestion?')) {
        deleteSuggestion(suggestionId)
            .done((data) => {
                suggestionDiv.parentNode.removeChild(suggestionDiv);
                removeAsRead(suggestionId, 'suggestion');
            })
            .fail((request, status, error) => {
                window.alert('Unfortunately an error occurred during the deletion of this suggestion');
            })
    }
};