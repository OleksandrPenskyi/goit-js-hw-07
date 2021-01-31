const inputRef = document.querySelector('input[type="number"]');
const createBtnRef = document.querySelector('[data-action="render"]');
const clearBtnRef = document.querySelector('[data-action="destroy"]');
const resultDivRef = document.querySelector('#boxes');

const onCreateDivCollection = amount => {
  let width = 30; // начальная ширина div
  let heigth = 30; // начальная высота div
  // нулевой (начальный) div в виде строки
  let innerStr = `<div class="divChild" style="background: 
    rgb(
      ${Math.floor(Math.random() * 256)}, 
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)}
    ); 
    width: ${width}px; height: ${heigth}px; margin: 10px"></div>`;

  // перебираем массив (по кол-ву amount) и создаем новые div (нулевой уже есть)
  for (let i = 1; i < amount; i += 1) {
    innerStr += `<div class="divChild" style="background: 
    rgb(
      ${Math.floor(Math.random() * 256)}, 
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)}
    ); 
    width: ${(width += 10)}px; height: ${(heigth += 10)}px; margin: 10px"></div>`;
  }

  // console.log(innerStr); // строка innerStr с разметкой div
  resultDivRef.insertAdjacentHTML('afterbegin', innerStr);
};

const onDestroyDivCollection = () => {
  // нахожим по селектору класса новые DIV в resultDivRef, и получаем массив ссылок на новые DIV
  const allNewDiv = resultDivRef.querySelectorAll('.divChild');
  // Переьираем новый массив ссылок на DIV и удаляем каждый из них
  allNewDiv.forEach(oneDiv => {
    oneDiv.remove();
  });
};

// Кнопка создания DIV
const createDivCollection = createBtnRef.addEventListener('click', () => {
  inputRef.addEventListener('input', onCreateDivCollection.call(inputRef, inputRef.value));
});

// Кнопка удаления DIV
const destroyDivCollection = clearBtnRef.addEventListener('click', onDestroyDivCollection);
