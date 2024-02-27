const form = document.getElementById('form');
const file = document.getElementById('file');
const progressBar = document.getElementById('progress');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData();
  const xhr = new XMLHttpRequest();

  formData.append('uploadFile', file.files[0]);

  xhr.upload.addEventListener('progress', (event) => {
    progressBar.value = event.loaded / event.total;
  });

  xhr.open('POST', form.action);
  xhr.send(formData);
});
