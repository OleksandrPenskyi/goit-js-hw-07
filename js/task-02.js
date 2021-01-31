const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

// !перебираю массив ingredients
const arrayOfLiItem = ingredients.map(item => {
  const liItem = document.createElement('li'); // !на каждой итерации цикла создаю отдельный, пустой <li>
  liItem.textContent = item; // !в каждой итерации цикла, в отдельный <li>, добавляю текстовое значение item (которое есть результатом перебора массива)
  return liItem; // !результат итерации возращаю в переменную arrayOfLiItem и записываю ее как отедльный элемент массива, т.е. массив массивов
});
// console.log(arrayOfLiItem);

// !Нахожу ссылку на объект в html-код
const listUlRef = document.querySelector('#ingredients');
// console.log(listUlRef);

// !Распыляем наш массив li-шек со значениями в объект UL в html-код
listUlRef.append(...arrayOfLiItem);
