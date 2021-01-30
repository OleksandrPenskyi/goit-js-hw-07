const inputRef = document.querySelector('input[type="number"]');

const createBtnRef = document.querySelector('[data-action="render"]');

const clearBtnRef = document.querySelector('[data-action="destroy"]');

const resultDivRef = document.querySelector('#boxes');

const createDivCollection = amount => {
  let width = 30; // начальная ширина div
  let heigth = 30; // начальная высота div
  // начальный div
  let innerStr = `<div class="divChild" style="background: 
    rgb(
      ${Math.floor(Math.random() * 256)}, 
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)}
    ); 
    width: ${width}px; height: ${heigth}px; margin: 10px"></div>`;

  // перебираем массив и добавляем новые  div
  for (let i = 1; i < amount; i += 1) {
    innerStr += `<div class="divChild" style="background: 
    rgb(
      ${Math.floor(Math.random() * 256)}, 
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)}
    ); 
    width: ${(width += 10)}px; height: ${(heigth += 10)}px; margin: 10px"></div>`;
  }

  resultDivRef.insertAdjacentHTML('afterbegin', innerStr);
};

const destroyCollection = () => {
  const newDiv = document.querySelectorAll('.divChild');
  console.log(newDiv);
};

// Работает
createBtnRef.addEventListener('click', () => {
  inputRef.addEventListener('input', createDivCollection.call(inputRef, inputRef.value));
});

// Работает
clearBtnRef.addEventListener('click', () => {
  const allNewDiv = resultDivRef.querySelectorAll('.divChild');
  allNewDiv.forEach(oneDiv => {
    oneDiv.remove();
  });
});
