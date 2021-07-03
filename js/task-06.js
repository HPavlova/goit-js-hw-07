const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length');

input.addEventListener('focus', onInputFocus);
input.addEventListener('blur', onInputBlur);

function onInputFocus() {
  console.log('focus event');
}

function onInputBlur(event) {
  console.log('blur event');

  if (event.currentTarget.value.length == inputLength) {
    input.classList.remove('invalid');
    return input.classList.add('valid');
  }
  input.classList.remove('valid');
  return input.classList.add('invalid');
}
