const constructSuggestion = (data) => {
    let inboxDivSmallContent = document.createElement('div');
    inboxDivSmallContent.setAttribute('class', 'row inboxContent border-bottom py-3');
    inboxDivSmallContent.style.cursor = "pointer";

        let fullName = document.createElement('div');
        fullName.setAttribute('class', 'col-7 font-weight-bold');
        fullName.textContent = data.fullname;

        let date = document.createElement('div');
        date.setAttribute('class', 'col-5 font-weight-bold');
        date.textContent = data.created_at;

        let subject = document.createElement('div');
        subject.setAttribute('class', 'col-12');
        subject.textContent = data.subject;

        let deleteBtnDiv = document.createElement('div');
        deleteBtnDiv.setAttribute('class', 'col-12 d-flex justify-content-start');
            let deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('class', 'btn-comic inboxDeleteButton mt-1');
            deleteBtn.setAttribute('type', 'submit');
            deleteBtn.innerText = 'Delete';
        deleteBtnDiv.appendChild(deleteBtn);

    inboxDivSmallContent.append(deleteBtnDiv);
    inboxDivSmallContent.appendChild(fullName);
    inboxDivSmallContent.appendChild(date);
    inboxDivSmallContent.appendChild(subject);
    inboxDivSmallContent.append(deleteBtnDiv);

    return inboxDivSmallContent;
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