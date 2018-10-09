$(document).ready(() => {

    const inboxDivSmall = document.querySelector('.inboxDivSmall');
    const inboxDivLarge = document.querySelector('.inboxDivLarge');

    getSuggestions()
        .done((data, text) => {

            let suggestions = JSON.parse(data);

            suggestions.forEach(function(suggestion) {
                let inboxDivSmallContent = document.createElement('div');
                inboxDivSmallContent.setAttribute('class', 'row inboxContent');
                inboxDivSmallContent.style.cursor = "pointer";

                let fullName = document.createElement('div');
                fullName.setAttribute('class', 'col-7 font-weight-bold');
                fullName.textContent = suggestion.fullname;

                let date = document.createElement('div');
                date.setAttribute('class', 'col-5 font-weight-bold');
                date.textContent = suggestion.created_at;

                let subject = document.createElement('div');
                subject.setAttribute('class', 'col-lg-12');
                subject.textContent = suggestion.subject;

                let hrBreak = document.createElement('hr');

                inboxDivSmallContent.appendChild(fullName);
                inboxDivSmallContent.appendChild(date);
                inboxDivSmallContent.appendChild(subject);

                inboxDivSmall.appendChild(inboxDivSmallContent);
                inboxDivSmall.appendChild(hrBreak);

                inboxDivSmallContent.addEventListener('click', (event) => {



                    while (inboxDivLarge.hasChildNodes()) {
                        inboxDivLarge.removeChild(inboxDivLarge.firstChild);
                    }

                    let inboxDivLargeContent = document.createElement('div');
                    inboxDivLargeContent.setAttribute('class', 'row pl-3');

                    let fullNameLarge = document.createElement('div');
                    fullNameLarge.setAttribute('class', 'col-9 font-weight-bold');
                    fullNameLarge.textContent = suggestion.fullname;

                    let dateLarge = document.createElement('div');
                    dateLarge.setAttribute('class', 'col-3 font-weight-bold');
                    dateLarge.textContent = suggestion.created_at;

                    let emailLarge = document.createElement('div');
                    emailLarge.setAttribute('class', 'col-lg-12 ');
                    emailLarge.textContent = 'E-mail: ' + suggestion.email;

                    let subjectLarge = document.createElement('div');
                    subjectLarge.setAttribute('class', 'col-lg-12 mb-2 ');
                    subjectLarge.textContent = 'Subject: ' + suggestion.subject;

                    let messageLarge = document.createElement('div');
                    messageLarge.setAttribute('class', 'col-lg-12');
                    messageLarge.textContent = suggestion.message_content;

                    inboxDivLargeContent.appendChild(fullNameLarge);
                    inboxDivLargeContent.appendChild(dateLarge);
                    inboxDivLargeContent.appendChild(emailLarge);
                    inboxDivLargeContent.appendChild(subjectLarge);
                    inboxDivLargeContent.appendChild(messageLarge);

                    inboxDivLarge.appendChild(inboxDivLargeContent);



                });

            });
        })
        .fail((request, status, error) =>
        {
            console.log(request);
        });
});