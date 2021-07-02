const refs = {
  buttonRender: document.querySelector('[data-action="render"]'),
  buttonDestroy: document.querySelector('[data-action="destroy"]'),
  boxesWrapper: document.querySelector('#boxes'),
  baseSize: 30,
};

refs.buttonRender.addEventListener('click', onGetAmount);
refs.buttonDestroy.addEventListener('click', onDestroyBoxes);

// =====onGetAmount=====

function onGetAmount() {
  let amount = +document.querySelector('#controls input').value;

  onCreateBoxes(amount);
}

// =====onCreateBoxes=====

function onCreateBoxes(amount) {
  const boxesNew = [];

  for (let i = 0; i < amount; i++) {
    const listEl = document.createElement('div');
    listEl.classList.add('boxes__list');

    let size = refs.baseSize + i * 10;
    let color = '#' + ((Math.random() * 0xffffff) << 0).toString(16);

    listEl.style.cssText = `width:${size}px; height: ${size}px; background: ${color}`;

    boxesNew.push(listEl);
    console.log(boxesNew);
  }

  refs.boxesWrapper.append(...boxesNew);
}
console.log(refs.boxesWrapper);

// =====onDestroyBoxes=====

function onDestroyBoxes() {
  refs.boxesWrapper.innerHTML = '';
  document.querySelector('#controls input').value = '';
}
console.log(refs.boxesWrapper);
