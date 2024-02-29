const textInputField = document.querySelector('#editor');
const clearButton = document.querySelector('.clear_button');

textInputField.addEventListener('input', () => {
  localStorage.setItem('text', textInputField.value);
});

document.addEventListener('DOMContentLoaded', () => {
  textInputField.value = localStorage.getItem('text');
});

clearButton.addEventListener('click', () => {
  textInputField.value = '';
  localStorage.removeItem('text');
});