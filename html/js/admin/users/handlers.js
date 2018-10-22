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