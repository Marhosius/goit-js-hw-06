function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const backndColorInfoEl = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener('click', handleColor);

function handleColor() {
  const newBG = getRandomHexColor();
  bodyEl.style.backgroundColor = newBG;
  backndColorInfoEl.textContent = newBG;
}
