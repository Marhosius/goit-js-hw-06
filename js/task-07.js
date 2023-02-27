const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = `56px`;

fontSizeControlEl.addEventListener('input', (el) => {
    textEl.style.fontSize = `${el.target.value}px`;
})



