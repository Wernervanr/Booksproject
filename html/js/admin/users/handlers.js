const constructUser = (user) => {
    const userInfoDiv = document.createElement('div');
    userInfoDiv.setAttribute('class', 'row userInfo border-bottom py-2');
    userInfoDiv.style.cursor = "pointer";

    const userName = document.createElement('div');
    userName.setAttribute('class', 'col-3 col-md-2 font-weight-bold');
    userName.textContent = user.username;

    const email = document.createElement('div');
    email.setAttribute('class', 'col-6 col-md-3 col-lg-4');
    email.textContent = user.email;

    const lastName = document.createElement('div');
    lastName.setAttribute('class', 'd-none d-md-block col-md-3 col-lg-3 font-weight-bold');
    lastName.textContent = user.last_name;

    const role = document.createElement('div');
    role.setAttribute('class', 'd-none d-md-block col-md-2 col-lg-2 font-weight-bold');
    role.textContent = user.role;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'btn-comic userDeleteButton my-auto');
    deleteBtn.setAttribute('type', 'submit');
    deleteBtn.innerText = 'Delete';

    userInfoDiv.appendChild(userName);
    userInfoDiv.appendChild(email);
    userInfoDiv.appendChild(lastName);
    userInfoDiv.appendChild(role);
    userInfoDiv.appendChild(deleteBtn);

    return userInfoDiv;
};

const constructUserUpdateForm = (user) => {
    const updateForm = document.createElement('form');
    updateForm.setAttribute('novalidate', 'novalidate');
    updateForm.setAttribute('class', 'col-12 updateForm');

    const updateFormDiv = document.createElement('div');
        updateFormDiv.setAttribute('class', 'mt-2');

            const userNameInput = document.createElement('input');
            userNameInput.setAttribute('type', 'text');
            userNameInput.setAttribute('id', 'username');
            userNameInput.setAttribute('name', 'username');
            userNameInput.setAttribute('class', 'form-control mb-1 col-12');
            userNameInput.setAttribute('value', user.username);

            const roleInput = document.createElement('input');
            roleInput.setAttribute('type', 'text');
            roleInput.setAttribute('id', 'role');
            roleInput.setAttribute('name', 'role');
            roleInput.setAttribute('class', 'form-control mb-1 col-12');
            roleInput.setAttribute('value', user.role);

            const passwordInput = document.createElement('input');
            passwordInput.setAttribute('type', 'text');
            passwordInput.setAttribute('id', 'password');
            passwordInput.setAttribute('name', 'password');
            passwordInput.setAttribute('class', 'form-control mb-1 col-12');
            passwordInput.setAttribute('placeholder', 'Enter new password');

            const emailInput = document.createElement('input');
            emailInput.setAttribute('type', 'text');
            emailInput.setAttribute('id', 'email');
            emailInput.setAttribute('name', 'email');
            emailInput.setAttribute('class', 'form-control mb-1 col-12');
            emailInput.setAttribute('value', user.email);

        updateFormDiv.appendChild(userNameInput);
        updateFormDiv.appendChild(roleInput);
        updateFormDiv.appendChild(passwordInput);
        updateFormDiv.appendChild(emailInput);

        const submitButton = document.createElement('button');
        submitButton.setAttribute('class', 'userSaveButton btn-comic');
        submitButton.setAttribute('type', 'submit');
        submitButton.innerText = 'Save';

    updateForm.appendChild(updateFormDiv);
    updateForm.appendChild(submitButton);

    updateForm.addEventListener('click', (event) => {
        if (event.target.classList.contains('userSaveButton')) {
            event.stopPropagation();

            const updatedUser = {
                username: updateForm.username.value,
                role: updateForm.role.value,
                password: updateForm.password.value,
                email: updateForm.email.value
            };

            updateUserByAdmin(updatedUser, user.id)
                .done((data, text) => {
                    console.log('hey');
                    window.location = '?route=admin';
                })
                .fail((request,status, error) => {
                    console.log(request);
                });
        }
    });

    return updateForm;
};

const deleteThisUser = (userDiv, userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
        deleteUser(userId)
            .done((data) => {
                userDiv.parentNode.removeChild(userDiv);
            })
            .fail((request, status, error) => {
                window.alert('Unfortunately an error occurred during the deletion of this user');
            })
    }
};