const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// ? Стандартное добавление разметки через createElement и append
// const listOfimages = images.map(item => {
//   const addImgTag = document.createElement('img'); // !создаем тег <img> на каждой итерации по массиву images
//   addImgTag.src = item.url; // !создаем для тега <img> атрибут src и присваиваем значение из item.url - как результат итерации
//   addImgTag.alt = item.alt; // !создаем для тега <img> атрибут alt и присваиваем значение из item.alt - как результат итерации
//   addImgTag.classList.add('gallery-img'); // !добавил клас для тега, чтобы изменить его свойства через CSS
//   const addLiTag = document.createElement('li'); // !создаем тег <li> на каждой итерации по массиву images
//   addLiTag.classList.add('gallery-item'); // !добавил клас для тега, чтобы изменить его свойства через CSS
//   addLiTag.append(addImgTag); // !вставляем результативный код тега <img> внутрь тега <li> на каждой итерации по массиву images
//   return addLiTag; // !записываем в переменную listOfimages результат выполнения кода, а именно тег <img> (с необходимыми атрибутами) внутрь тега <li>
// }); // результат listOfimages - массив элементов со значениями

// // console.log(listOfimages);
// // !ищем ссылку на элемент galleryRef в HTML документе
// const galleryRef = document.querySelector('#gallery');

// // console.log(galleryRef);
// // !распыляем содержимое массива listOfimages в имеющийся элемент в HTML документе
// galleryRef.append(...listOfimages);

// ? метод через шаблонные строки и insertAdjacentHTML()

// !перебираем массив через reduce, чтобы получить через шаблоную строку в аккумулятор одну строку со всеми тегами и классами
const listOfimages = images.reduce((acc, item) => {
  return (
    acc +
    `<li class="gallery-item"><img class="gallery-img" src="${item.url}", alt="${item.alt}"></li>`
  );
}, '');
// console.log(listOfimages); //!получаем строку тегов

const galleryRef = document.querySelector('#gallery'); //!получаем ссылку на наш элемент UL - HTML документа
galleryRef.insertAdjacentHTML('afterbegin', listOfimages); //!добалвяем в начало єлемента нашу строку listOfimages со всеми тегами
