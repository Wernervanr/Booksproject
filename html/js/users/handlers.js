const submitRegistration = (form) => {
    if (form.checkValidity()) {
        const user = {
            first_name: form.firstName.value,
            last_name: form.lastName.value,
            email: form.email.value,
            username: form.username.value,
            password: form.password.value
        };

        createUser(user)
            .done((data, text) => {
                form.reset();
                appendSuccessMessage('Your registration was succesfull!', '.message-container');
            })
            .fail((request,status, error) => {
                console.log(request);
            });
    }
};