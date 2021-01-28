// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// ссылка на Инпут
const inputRef = document.querySelector('input#name-input');
console.log(inputRef.textContent);

// ссылка на Спан имя
const spanNameRef = document.querySelector('span#name-output');

// callback-функция для события input
const changeSpanName = event => {
  // !event - это то на чем мы запускаем обработчик событий с этой callback-функцией, т.е. - наш input
  //   console.log(event.target); // ссылка на input
  //   console.log(event.target.value); // ссылка на значение input, введенное в input

  // значение текстового поля спана = значение input, введенное в input
  spanNameRef.textContent = event.target.value;

  // если значение input, введенное в input имеет нулевую длину, т.е. в ней нет текста,
  //   то имя спана = 'незнакомец', т.е. первоначальное значение
  if (event.target.value.length === 0) {
    spanNameRef.textContent = 'незнакомец';
  }
};

// слушатель события 'input' на наш input?
inputRef.addEventListener('input', changeSpanName);
