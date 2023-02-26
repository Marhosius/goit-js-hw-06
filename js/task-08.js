const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handelFormSubmit);

function handelFormSubmit(ev) {
    ev.preventDefault();
    const email = ev.currentTarget.elements.email.value;
    const password = ev.currentTarget.elements.password.value;

    if (email === `` || password === ``) {
        return alert('fill in all fields of the form')
    } else {
        const formData = {
            email,
            password,
        }
        console.log(formData)
        ev.currentTarget.reset();

    }
    return

};
