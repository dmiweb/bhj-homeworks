const form = document.getElementById('form');
const progress = document.getElementById('progress');
progress.value = 0;



form.addEventListener("submit",
  function (e) {
    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    
    xhr.open("POST", form.action, true);
    xhr.onload = function (e) {
      if (xhr.status == 200) {
        
      } else {
        console.log(e.loaded);
        console.log('error');
        console.log(xhr.status);
      }
    };

    xhr.send(formData);
    e.preventDefault();
  },
);














// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const xhr = new XMLHttpRequest();

//   xhr.upload.addEventListener('progress', (e) => {


//     if (xhr.status === 200) {
//       console.log('ok');
//     } else {
//       console.log('error');
// console.log(xhr.status);
//     }

//     // progress.value = (e.loaded / e.total) * 100;
//     // if (xhr.readyState === xhr.DONE) {
//     //   alert('Загружено');
//     // }
//   });

//   xhr.open('POST', form.action);
//   const formData = new FormData(form);
//   xhr.send(formData);
// });






// const formData = new FormData(form);

// xhr.open('POST', form.action);
// xhr.send(formData);


// xhr.upload.addEventListener('progress', (e) => {
//   progress.value = (e.loaded / e.total) * 100;
// console.log(e.loaded);
// });
