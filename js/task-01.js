// ==================== количество категорий в ul#categories ==================== //

const categoriesEl = document.querySelectorAll('.item');
console.log('В списке', categoriesEl.length, 'категории.');

// ==================== Текст заголовка элемента (тега h2) и количество элементов ==================== //

const titleCategoriesEl = document.querySelectorAll('.item h2');
// console.log(titleCategoriesEl);

for (let index = 0; index < titleCategoriesEl.length; index++) {
  const element = titleCategoriesEl[index];

  console.log(
    'Категория:',
    element.textContent,
    'Количество элементов:',
    element.nextElementSibling.children.length,
  );
}
