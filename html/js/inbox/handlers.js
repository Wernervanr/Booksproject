// SAVE AS READ / DETERMINE IF READ

const saveAsRead = (data) => { // DATA = SUGGESTION
    localStorage.setItem('isRead' + data, true);
};

const determineIfRead = (data) => { // DATA = SUGGESTION
    let isRead = localStorage.getItem('isRead' + data);
    if (isRead !== null) {
        return true;
    } else {
        return false;
    }
};

const constructInbox = (data) => {
    let inboxDivSmallContent = document.createElement('div');
    inboxDivSmallContent.setAttribute('class', 'row inboxContent border-bottom py-3');
    inboxDivSmallContent.style.cursor = "pointer";

    // Filling of the inboxDivSmallContent with the actual data.

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

    let isRead = determineIfRead(data.id);
    if (isRead === true) {
        inboxDivSmallContent.classList.toggle('readSuggestion');
    }

    inboxDivSmallContent.append(deleteBtnDiv);
    inboxDivSmallContent.appendChild(fullName);
    inboxDivSmallContent.appendChild(date);
    inboxDivSmallContent.appendChild(subject);
    inboxDivSmallContent.append(deleteBtnDiv);

    return inboxDivSmallContent;
};