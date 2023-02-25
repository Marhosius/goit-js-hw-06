const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

const counter = {
    value: 0,
    increaced() {
        this.value++;
    },
    decreaced() {
        this.value--;
    },
}


incrBtn.addEventListener("click", () => {
    counter.increaced();
    valueEl.textContent = counter.value;
});
decrBtn.addEventListener("click", () => {
    counter.decreaced();
    valueEl.textContent = counter.value;
});

