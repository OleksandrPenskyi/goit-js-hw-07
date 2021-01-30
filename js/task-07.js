// ссылка на Input
const inputRef = document.querySelector('input#font-size-control');

// ссылка на span
const spanRef = document.querySelector('span#text');

// callback - функция
const changeFontSize = event => {
  const inputValue = event.target.value; //текущее значение ползунка инпута
  //   задаем атрибут для span в виде инлайн стиля для размера шрифта, значение которого привязано к значению ползунка input
  spanRef.setAttribute('style', `font-size:${inputValue}px`);
};

// вешаем слушатель событий на input на input
const spanFontSize = inputRef.addEventListener('input', changeFontSize);
