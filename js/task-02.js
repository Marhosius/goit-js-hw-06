const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeTask2 = (options) => {
  const ulList = document.querySelector('#ingredients');
  const mapRes = options.map(option => {
    const createdItem = document.createElement('li');
    createdItem.textContent = option;
    createdItem.classList.add('item');
    return createdItem;
  })
  ulList.append(...mapRes);
}

makeTask2(ingredients);
