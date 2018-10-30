// -- API CALLS -- //

    // Comic Books

const getBooks = () => {
    return $.get(env.api + '?route=books')
};

const createBook = (book) => {
    return $.post(env.api + '?route=books', JSON.stringify(book));
};

const updateBook = (bookId, book) => {
    return $.post(env.api + '?route=update&id=' + bookId, JSON.stringify(book));
};

const deleteBook = (bookId) => {
    console.log(bookId);
    return $.post(env.api + '?route=delete&id=' + bookId);
};

const getOneBook = (bookId) => {
    return $.get(env.api + '?route=book&id=' + bookId);
};

const getLastBook = () => {
    return $.get(env.api + '?route=lastbook')
};

const getMostPopulair = () => {
    return $.get(env.api + '?route=mostpopulair')
};

const getRecommended = () => {
    return $.get(env.api + '?route=recommended')
};

    // Suggestions

const getSuggestions = () => {
    return $.get(env.api + '?route=suggestions')
};

const createSuggestion = (suggestion) => {
    return $.post(env.api + '?route=suggestions', JSON.stringify(suggestion));
};

const deleteSuggestion = (suggestionId) => {
    return $.post(env.api + '?route=deletesuggestion&id=' + suggestionId);
};

    // End suggestions

    // Users

const getUsers = () => {
    return $.get(env.api + '?route=allusers');
};

const createUser = (user) => {
    return $.post(env.api + '?route=registeruser', JSON.stringify(user));
};

const updateUserByAdmin = (updatedUser, userId) => {
    return $.post(env.api + '?route=updateuserbyadmin&id=' + userId, JSON.stringify(updatedUser));
};

const updateUserByUser = (updatedUser, userId) => {
    return $.post(env.api + '?route=updateuserbyuser&id=' + userId, JSON.stringify(updatedUser));
};

const deleteUser = (userId) => {
    return $.post(env.api + '?route=deleteuser&id=' + userId);
};


    // End Users

// -- END API CALLS -- //

// -- MARK ITEMS AS READ -- //

const saveAsRead = (data, dataItem) => {
    localStorage.setItem(dataItem + 'IsRead' + data, true);
};

const removeAsRead = (data, dataItem) => {
    localStorage.removeItem(dataItem + 'IsRead' + data);
};

const determineIfRead = (dataId, dataDisplay, dataItem) => {
    let isRead = localStorage.getItem(dataItem + 'IsRead' + dataId);
    let alreadyMarkedAsRead = dataDisplay.classList.contains('read');
    if (isRead !== null && alreadyMarkedAsRead === false) {
        dataDisplay.classList.toggle('read');
    }
};

// -- END MARK ITEMS AS READ -- //

// -- FIELD VALIDATION, SUCCESS AND ERROR MESSAGE -- //

const fieldValidationWhenBlur = (event) => {
    const inputField = event.target;

    if (!inputField.checkValidity()) {
        addErrorMessageForElement(inputField);
    } else {
        clearErrorMessageForElement(inputField);
    }
};

const validateFieldsWhenSubmit = (inputFields) => {
    for (let i = 0; i < inputFields.length; i++) {
        if (!inputFields[i].checkValidity()) {
            addErrorMessageForElement(inputFields[i]);
        } else {
            clearErrorMessageForElement(inputFields[i]);
        }
    }
};

const addErrorMessageForElement = (element) => {
    clearErrorMessageForElement(element);
    const parent = element.parentNode;

    const errorMessage = getErrorMessageForElement(element);

    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = errorMessage;

    parent.appendChild(errorDiv);
};

const clearErrorMessageForElement = (element) => {
    const parent = element.parentNode;

    const errorDiv = parent.querySelector('div.error-message');
    if (errorDiv) {
        parent.removeChild(errorDiv);
    }
};

const getErrorMessageForElement = (element) => {
    if (element.validity.customError) {
        return element.validationMessage;
    } else if (element.validity.valueMissing) {
        return 'This field is compulsary';
    } else {
        return 'This field was filled incorrectly';
    }
};

const appendSuccessMessage = (message, elementSelector) => {
    const successAlert = $(`<div class="alert contactmessage alert-dismissible fade show" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        ${message}
    </div>`);

    $(elementSelector).append(successAlert);
};

// -- END FIELD VALIDATION, SUCCESS AND ERROR MESSAGE -- //

// -- REMOVE CHILD NODES -- //

const removeChildNodes = (div) => {
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
};

// -- END REMOVE CHILD NODES -- //

// -- VOTES -- //

function upVote(id){
    $.ajax({
        url: env.api + "?route=votes&id=" + id,
        type: "POST"
    }).done(function( data ) {
        if (data) {
            response = $.parseJSON(data);
            votes = response;
            $(".vote-count").html(votes);
        }
    });
}

function downVote(id){
    $.ajax({
        url: env.api + "?route=votes&id=" + id,
        type: "DELETE"
    }).done(function( data ) {
        if (data) {
            response = $.parseJSON(data);
            votes = response;
            $(".vote-count").html(votes);
        }
    });
}

function getVotes(id){
    $.ajax({
        url: env.api + "?route=votes&id=" + id,
        type: "GET"
    }).done(function( data ) {
        if (data) {
            response = $.parseJSON(data);
            votes = response;
            $(".vote-count").html(votes);
        }
    });
}

$( document ).ready(function() {
    voteElement = $(".votes");
    if (voteElement){
        let bookId = $(voteElement).find(".vote-count").data("id");
        if (bookId>0){
            // setInterval("getVotes(" + bookId + ")", 1000);
            $(voteElement).find(".up-vote").click(function (){
                upVote(bookId);
            });
            $(voteElement).find(".down-vote").click(function (){
                downVote(bookId);
            });
        }
    }
});

// -- END VOTES -- //