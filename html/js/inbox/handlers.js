const constructInboxSuggestion = (suggestion) => {
    const inboxDivContent = document.createElement('div');
    inboxDivContent.setAttribute('class', 'row inboxContent border-bottom py-3');
    inboxDivContent.style.cursor = "pointer";

        const fullName = document.createElement('div');
        fullName.setAttribute('class', 'col-7 font-weight-bold');
        fullName.textContent = suggestion.fullname;

        const date = document.createElement('div');
        date.setAttribute('class', 'col-5 font-weight-bold');
        date.textContent = suggestion.created_at;

        const subject = document.createElement('div');
        subject.setAttribute('class', 'col-12');
        subject.textContent = suggestion.subject;

        const deleteBtnDiv = document.createElement('div');
        deleteBtnDiv.setAttribute('class', 'col-12 d-flex justify-content-start');
            const deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('class', 'btn-comic inboxDeleteButton mt-1');
            deleteBtn.setAttribute('type', 'submit');
            deleteBtn.innerText = 'Delete';
        deleteBtnDiv.appendChild(deleteBtn);

    inboxDivContent.appendChild(fullName);
    inboxDivContent.appendChild(date);
    inboxDivContent.appendChild(subject);
    inboxDivContent.append(deleteBtnDiv);

    return inboxDivContent;
};

const constructFullSuggestion = (suggestion) => {

    const fullSuggestion = document.createElement('div');
    fullSuggestion.setAttribute('class', 'row pl-3 pb-2 pt-2');

        const fullName = document.createElement('div');
        fullName.setAttribute('class', 'col-8 font-weight-bold');
        fullName.textContent = suggestion.fullname;

        const date = document.createElement('div');
        date.setAttribute('class', 'col-4 font-weight-bold');
        date.textContent = suggestion.created_at;

        const email = document.createElement('div');
        email.setAttribute('class', 'col-lg-12 ');
        email.textContent = 'E-mail: ' + suggestion.email;

        const subject = document.createElement('div');
        subject.setAttribute('class', 'col-lg-12 mb-2 ');
        subject.textContent = 'Subject: ' + suggestion.subject;

        const message = document.createElement('div');
        message.setAttribute('class', 'col-lg-12');
        message.textContent = suggestion.message_content;

    fullSuggestion.appendChild(fullName);
    fullSuggestion.appendChild(date);
    fullSuggestion.appendChild(email);
    fullSuggestion.appendChild(subject);
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
                window.alert('Unfortunately an error occurred during the deletion of this book');
            })
    }
};