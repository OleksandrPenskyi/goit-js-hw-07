// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().

const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

// !перебираю массив ingredients
const arrayOfLiItem = ingredients.map(item => {
  const liItem = document.createElement('li'); // !на каждой итерации цикла создаю отдельный, пустой <li>
  liItem.textContent = item; // !в каждой итерации цикла, в отдельный <li>, добавляю текстовое значение item (которое есть результатом перебора массива)
  return liItem; // !результат итерации возращаю в переменную arrayOfLiItem и записіваю ее как отедльній элемент массива, т.е. массив массивов
});
// console.log(arrayOfLiItem);

// !Нахожу ссылку на объект в html-код
const listUlRef = document.querySelector('#ingredients');
// console.log(listUl);

// !Распыляем наш массив li-шек со значениями в объект UL в html-код
listUlRef.append(...arrayOfLiItem);
