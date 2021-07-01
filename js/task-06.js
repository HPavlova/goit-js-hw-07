const input = document.querySelector('#validation-input');

const inputLength = input.getAttribute('data-length');

input.addEventListener('focus', onInputFocus);
input.addEventListener('blur', onInputBlur);

function onInputFocus() {
  console.log('focus event');
}

function onInputBlur() {
  console.log('blur event');

  if (input.value.length === inputLength) {
    input.classList.add('valid');
  }
  input.classList.add('invalid');
}
