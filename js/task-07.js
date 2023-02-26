const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeControlEl.addEventListener('input', (el) => {
    textEl.style.fontSize = `${el.target.value}px`;
})