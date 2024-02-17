const progress = document.getElementById('progress');
progress.value = 0;
const file = document.getElementById('file');

const formFile = new FormData(document.forms.file);
console.log(formFile);