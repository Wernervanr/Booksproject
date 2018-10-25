$(document).ready(() => {

    getUsers()
        .done((data, text) => {
            // Display all suggestions in short, being just the name, date, and subject.
            let users = JSON.parse(data);

            users.forEach(function(user) {
                const constructedUser = constructUser(user);

                const userListing = document.querySelector('.userListing');
                userListing.appendChild(constructedUser);

                constructedUser.addEventListener('click', (event) => {
                    // If the target clicked is the delete button.
                    if (event.target.classList.contains('userDeleteButton')) {
                        event.stopPropagation();
                        deleteThisUser(constructedUser, user.id);
                    }
                    // If the target clicked is the suggestion itself.
                    else {
                        const userUpdateForm = constructUserUpdateForm(user);

                        if (constructedUser.childNodes.length > 5) {
                            constructedUser.removeChild(constructedUser.lastChild);
                        } else {
                            constructedUser.appendChild(userUpdateForm);
                        }
                    }
                });
            });
        })
        .fail((request, status, error) => {
            console.log(request);
        });
});