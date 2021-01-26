// Задание 1
const mainCategoriesRef = document.querySelectorAll('ul#categories > li.item');
const quantityOfmainCategories = `В списке ${mainCategoriesRef.length} категории.`;
console.log(quantityOfmainCategories);

const categoriesRef = document.querySelectorAll('ul#categories > li.item');
const categoriesDescription = categoriesRef.forEach(category => {
  console.log(`Категория: ${category.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${category.lastElementChild.children.length}`);
});
