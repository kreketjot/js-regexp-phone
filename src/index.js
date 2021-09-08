import fixPhone from './fixPhone';

document.getElementById('phone').addEventListener('input', (evt) => {
  const input = evt.currentTarget;
  const newPhone = fixPhone(input.value);
  input.value = newPhone;
});
