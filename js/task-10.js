function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputEL = document.querySelector('#controls input');
const boxesDiv = document.querySelector('#boxes');


createBtn.addEventListener('click', handleCreate);
destroyBtn.addEventListener('click', handleDestroy);

function handleCreate() {
  createBoxes(inputEL.value);
  inputEL.value = ``;
};

function handleDestroy() {
  boxesDiv.innerHTML = ``;
}

function createBoxes(amount) {
  let step = 30;
  let boxesArray = [];
  for (let index = 0; index < amount; index++) {
    boxesArray.push(`<div style="width: ${step}px;height: ${step}px;background-color: ${getRandomHexColor()};" ></div>`);
    step += 10;
  }
  boxesDiv.innerHTML = `${(boxesArray).join("")}`;
};




