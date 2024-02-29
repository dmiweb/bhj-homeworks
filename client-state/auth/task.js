const authorizationForm = document.querySelector('#signin__form');
const userLogin = document.querySelector('input[name="login"]');
const userPassword = document.querySelector('input[name="password"]');
const welcomBlock = document.querySelector('.welcome');
const userId = document.querySelector('#user_id');
const logoutButton = document.querySelector('.logout');

if(localStorage.user_id){
  authorizationForm.closest('.signin').classList.remove('signin_active');
  welcomBlock.classList.add('welcome_active');
  userId.textContent = localStorage.user_id;
}

authorizationForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!userLogin.value.trim() || !userPassword.value) {
    alert('Нужно ввести логин или пароль');
    authorizationForm.reset();
    return;
  }

  const authFormData = new FormData(authorizationForm);
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.addEventListener('loadend', () => {
    const authResponse = xhr.response;

    if (authResponse.success) {
      authorizationForm.closest('.signin').classList.remove('signin_active');
      welcomBlock.classList.add('welcome_active');

      if (localStorage.user_id) {
        userId.textContent = localStorage.user_id;
      } else {
        userId.textContent = authResponse.user_id;
        localStorage.setItem('user_id', authResponse.user_id);
      }
    } else {
      alert('Неверный логин/пароль');
    }
  });

  xhr.open('POST', authorizationForm.action);
  xhr.send(authFormData);
});

logoutButton.addEventListener('click', () => {
  authorizationForm.closest('.signin').classList.add('signin_active');
  welcomBlock.classList.remove('welcome_active');
  authorizationForm.reset();
  delete localStorage.user_id;
});