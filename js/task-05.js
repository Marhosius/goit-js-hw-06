const inputEl = document.querySelector('#name-input');
const spanNameEl = document.querySelector('#name-output');

inputEl.addEventListener("input", (e) => {
    if (inputEl.value === '') {
        spanNameEl.textContent = `Anonymous`;
        return
    }
    spanNameEl.textContent = e.target.value;
});

