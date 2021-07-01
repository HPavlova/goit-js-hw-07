const counterValue = document.querySelector('#value');
const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');

let counter = 0;

function onTargetButtonClick() {
  console.log('Клик по целевой кнопке.');
}

increment.addEventListener('click', () => {
  counterValue.addEventListener('click', onTargetButtonClick);
  console.log('Добавлен слушатель событий.');

  counter += 1;
  console.log(counter);

  counterValue.textContent = counter;
});

decrement.addEventListener('click', () => {
  counterValue.removeEventListener('click', onTargetButtonClick);
  console.log('Снят слушатель событий.');

  counter -= 1;
  console.log(counter);

  counterValue.textContent = counter;
});
