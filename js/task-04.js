// Ссылка на счетчик
const counterValue = document.querySelector('#value');
// Ссылка на кнопку увеличения
const incrementRef = document.querySelector('[data-action="increment"]');
// Ссылка на кнопку уменшения
const decrementRef = document.querySelector('[data-action="decrement"]');

// callback-функция увеличения значения counterValue.textContent
// .textContent всегда строка
const increment = () => (counterValue.textContent = Number(counterValue.textContent) + 1);
// callback-функция уменшения значения counterValue.textContent
// .textContent всегда строка
const decrement = () => (counterValue.textContent = Number(counterValue.textContent) - 1);

// Слушатель событий по клику на увеличение значения
const increaseBtn = incrementRef.addEventListener('click', increment);
// Слушатель событий по клику на уменшения значения
const decreaseBtn = decrementRef.addEventListener('click', decrement);
