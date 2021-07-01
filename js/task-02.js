const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const ingredientsEl = document.querySelector('ul');

const elements = ingredients.map(option => {
  const itemEl = document.createElement('li');
  itemEl.textContent = option;
  return itemEl;
});

ingredientsEl.append(...elements);

console.log(ingredientsEl);
