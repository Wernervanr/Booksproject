$(document).ready(() => {

    const changeDetailsButton = document.querySelector('.changeDetailsButton');
    changeDetailsButton.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();

        const formCheck = document.querySelector('.changePasswordDisplay');

        if (formCheck === null) {

            // Add inputfields to change User Details

            const usernameDisplay = document.querySelector('.userNameDisplay');
                const userNameChangeField = document.createElement('input');
                userNameChangeField.setAttribute('type', 'text');
                userNameChangeField.setAttribute('id', 'username');
                userNameChangeField.setAttribute('name', 'username');
            usernameDisplay.appendChild(userNameChangeField);

            const emailDisplay = document.querySelector('.emailDisplay');
                const emailChangeField = document.createElement('input');
                emailChangeField.setAttribute('type', 'text');
                emailChangeField.setAttribute('id', 'email');
                emailChangeField.setAttribute('name', 'email');
            emailDisplay.appendChild(emailChangeField);

            const firstNameDisplay = document.querySelector('.firstNameDisplay');
                const firstNameChangeField = document.createElement('input');
                firstNameChangeField.setAttribute('type', 'text');
                firstNameChangeField.setAttribute('id', 'userFirstName');
                firstNameChangeField.setAttribute('name', 'userFirstName');
            firstNameDisplay.appendChild(firstNameChangeField);

            const lastNameDisplay = document.querySelector('.lastNameDisplay');
                const lastNameChangeField = document.createElement('input');
                lastNameChangeField.setAttribute('type', 'text');
                lastNameChangeField.setAttribute('id', 'userLastName');
                lastNameChangeField.setAttribute('name', 'userLastName');
            lastNameDisplay.appendChild(lastNameChangeField);

            // Add inputfield to Change Password

            const changePasswordDisplay = document.createElement('div');
            changePasswordDisplay.setAttribute('class', 'col-12 mb-1 changePasswordDisplay');
            changePasswordDisplay.innerHTML = '<div>' + "Change password: " + '</div>' +
                                              '<div class="font-weight-bold">' + "New Password" + '</div>';

                const changePasswordField = document.createElement('input');
                changePasswordField.setAttribute('type', 'text');
                changePasswordField.setAttribute('id', 'password');
                changePasswordField.setAttribute('name', 'password');

            changePasswordDisplay.appendChild(changePasswordField);

            const userDetails = document.querySelector('.userDetails');
            userDetails.appendChild(changePasswordDisplay);

            // Add Buttons

            const buttonContainer = document.querySelector('.buttonContainer');

            const submitButton = document.createElement('button');
            submitButton.setAttribute('class', 'btn-comic userSubmitButton mr-1');
            submitButton.innerText = 'Submit';

            const userHideButton = document.createElement('button');
            userHideButton.setAttribute('class', 'btn-comic userHideButton');
            userHideButton.innerText = 'Hide';

            buttonContainer.appendChild(submitButton);
            buttonContainer.appendChild(userHideButton);

            // Hide Inputfields and Submit/Hide button

            userHideButton.addEventListener('click', (event) => {
                event.stopPropagation();
                event.preventDefault();

                let allInputFields = document.querySelectorAll('input');
                allInputFields.forEach(function(inputField) {
                    inputField.parentNode.removeChild(inputField);
                });

                userDetails.removeChild(userDetails.lastChild);

                while (buttonContainer.childNodes.length > 2) {
                    buttonContainer.removeChild(buttonContainer.lastChild);
                }
            });

            // Submit Inputfields and change details

            submitButton.addEventListener('click', (event) => {
                event.stopPropagation();
                event.preventDefault();

                const updateUserDetailsForm = document.getElementById('updateUserDetailsForm');
                const inputs = updateUserDetailsForm.querySelectorAll('input');

                inputs.forEach(function(input) {
                    if (input.value !== '') {
                        updateUserByUser(input.value, userId)
                            .done((data, text) => {
                                window.location = '?route=userprofile';
                            })
                            .fail((request,status, error) => {
                                console.log(request);
                            });
                    }
                });

                // const updatedUser = {
                //     username: updateUserDetailsForm.username.value,
                //     userFirstName: updateUserDetailsForm.userFirstName.value,
                //     userLastName: updateUserDetailsForm.userLastName.value,
                //     password: updateUserDetailsForm.password.value,
                //     email: updateUserDetailsForm.email.value
                // };
            });
        }
    });
});