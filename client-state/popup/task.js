const openModalWindow = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal__close');

const arrayPairsCookies = document.cookie.split('; ');
const cookie = arrayPairsCookies.find(element => {
  if(element === 'closeModal=ok'){
    return element;
  }
});

console.log(arrayPairsCookies)
console.log(cookie)

if (cookie === undefined) {
  openModalWindow.classList.add('modal_active');
}

modalCloseButton.addEventListener('click', () => {
  openModalWindow.classList.remove('modal_active');
  document.cookie = 'closeModal=ok';
});

// document.cookie = 'closeModal=ok; Expires=Thu, 01 Jan 1970 00:00:00 GTM';