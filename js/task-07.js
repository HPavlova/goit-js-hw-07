const refs = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

console.log(refs.span);

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log('change event');
  refs.span.style.fontSize = event.currentTarget.value + 'px';
}
