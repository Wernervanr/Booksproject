// API calls

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



// contact

const getSuggestions = () => {
    return $.get(env.api + '?route=suggestions')
};

const getOneSuggestion = (suggestionId) => {
    return $.get(env.api + '?route=suggestion&id=' + suggestionId);
};

const createSuggestion = (suggestion) => {
    return $.post(env.api + '?route=suggestions', JSON.stringify(suggestion));
};

const deleteSuggestion = (suggestionId) => {
    return $.post(env.api + '?route=deletesuggestion&id=' + suggestionId);
};

// end contact



const fieldValidation = (event) => {
    const inputField = event.target;

    if (!inputField.checkValidity()) {
        addErrorMessageForElement(inputField);
    } else {
        clearErrorMessageForElement(inputField);
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

// DOM helper functions

const appendSuccessMessage = (message, elementSelector) => {
    const successAlert = $(`<div class="alert contactmessage alert-dismissible fade show" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        ${message}
    </div>`);

    $(elementSelector).append(successAlert);
};

// VOTES

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