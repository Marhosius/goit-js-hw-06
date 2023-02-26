const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener("blur", (el) => {
    if (el.target.value.length === Number(inputEl.dataset.length)) {
        if (el.target.classList.contains('invalid')) {
            el.target.classList.replace('invalid', 'valid');
        }
        el.target.classList.add('valid');
        return
    }
    if (el.target.classList.contains('valid')) {
        el.target.classList.replace('valid', 'invalid');
    }
    el.target.classList.add('invalid');
    return

});