const form = document.getElementById('form');
const file = document.querySelector('input[type="file"]');
const progress = document.getElementById('progress');
progress.value = 0;


const formData = new FormData(form);

const xhr = new XMLHttpRequest();
xhr.open('POST', form.action);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  xhr.send(formData);
});

xhr.upload.addEventListener('progress', (e) => {
  progress.value = (e.loaded / e.total) * 100;
console.log(e.loaded);
});
