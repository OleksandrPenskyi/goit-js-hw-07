// ссылка на input
const inputRef = document.querySelector('#validation-input');

// callback-функция
const onValidateInput = event => {
  //   Значение длины текущего введенного пароля, т.е. значение event.target.value.length
  const currentInputValueLength = event.target.value.length;

  //   Значение атрибута 'data-length', т.е. для проверки
  const ckeckedLengthValue = event.target.getAttribute('data-length');

  //   если введенное значение в input больше или равно 6 символов,
  //   то єлементу input при потере фокуса добавляется CSS клас "valid",
  //   в противном случае добавляется CSS клас "invalid"
  currentInputValueLength == ckeckedLengthValue
    ? inputRef.setAttribute('class', 'valid')
    : inputRef.setAttribute('class', 'invalid');
};

// слушатель события на потерю фокуса у элемента input
const validateInput = inputRef.addEventListener('blur', onValidateInput);
