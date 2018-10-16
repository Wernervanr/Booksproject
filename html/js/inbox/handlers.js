const constructSuggestion = (suggestion) => {
    let inboxDivContent = document.createElement('div');
    inboxDivContent.setAttribute('class', 'row inboxContent border-bottom py-3');
    inboxDivContent.style.cursor = "pointer";

        let fullName = document.createElement('div');
        fullName.setAttribute('class', 'col-7 font-weight-bold');
        fullName.textContent = suggestion.fullname;

        let date = document.createElement('div');
        date.setAttribute('class', 'col-5 font-weight-bold');
        date.textContent = suggestion.created_at;

        let subject = document.createElement('div');
        subject.setAttribute('class', 'col-12');
        subject.textContent = suggestion.subject;

        let deleteBtnDiv = document.createElement('div');
        deleteBtnDiv.setAttribute('class', 'col-12 d-flex justify-content-start');
            let deleteBtn = document.createElement('button');
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

    let fullSuggestion = document.createElement('div');
    fullSuggestion.setAttribute('class', 'row pl-3 pb-2 pt-2');

        let fullName = document.createElement('div');
        fullName.setAttribute('class', 'col-8 font-weight-bold');
        fullName.textContent = suggestion.fullname;

        let date = document.createElement('div');
        date.setAttribute('class', 'col-4 font-weight-bold');
        date.textContent = suggestion.created_at;

        let email = document.createElement('div');
        email.setAttribute('class', 'col-lg-12 ');
        email.textContent = 'E-mail: ' + suggestion.email;

        let subject = document.createElement('div');
        subject.setAttribute('class', 'col-lg-12 mb-2 ');
        subject.textContent = 'Subject: ' + suggestion.subject;

        let message = document.createElement('div');
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

function renderFullSuggestion(suggestionDisplay) {
    const fullSuggestion = suggestionDisplay;
    removeChildNodes(fullSuggestion);
    fullSuggestion.setAttribute('class', 'clickedsuggestion order-1 order-lg-2 mb-3 col-12 col-lg-8');

    return fullSuggestion;
}