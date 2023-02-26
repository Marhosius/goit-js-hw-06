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
  const createdList = [];
  options.map(option => {
    const createdItem = document.createElement('li');
    createdItem.textContent = option;
    createdItem.classList.add('item');
    createdList.push(createdItem);
  })
  ulList.append(...createdList);
}

makeTask2(ingredients);
