const fontSizeLinks = document.querySelector('.book__control_font-size');
const fontSizeArray = document.querySelectorAll('.font-size');
const colorTextLinks = document.querySelector('.book__control_color');
const colorTextArray = document.querySelectorAll('.color');
const backgroundColorLinks = document.querySelector('.book__control_background');
const backgroundColorArray = colorTextArray;
const book = document.querySelector('.book');

fontSizeLinks.addEventListener('click', (e) => {
  e.preventDefault();
  const link = e.target;

  for (let i = 0; i < fontSizeArray.length; i++) {
    
    if (fontSizeArray[i].classList.contains('font-size_active')) {
      fontSizeArray[i].classList.remove('font-size_active');
    }
    if (!link.classList.contains('font-size_active')) {
      link.classList.add('font-size_active')
    }
  }

  if(link.getAttribute('data-size') === 'small'){
    book.classList.add('font-size_small');
    book.classList.remove('font-size_big');
  }
  if(link.getAttribute('data-size') === 'big') {
    book.classList.add('font-size_big');
    book.classList.remove('font-size_small');
  } 
  if(link.getAttribute('data-size') === null) {
    book.classList.remove('font-size_big');
    book.classList.remove('font-size_small');
  } 
});

colorTextLinks.addEventListener('click', (e) => {
  e.preventDefault();
  const link = e.target;

  for (let i = 0; i < colorTextArray.length - 3; i++) {
    
    if (colorTextArray[i].classList.contains('color_active')) {
      colorTextArray[i].classList.remove('color_active');
    }
    if (!link.classList.contains('color_active')) {
      link.classList.add('color_active')
    }
  }

  if(link.getAttribute('data-text-color') === 'black'){
    book.classList.add('book_color-black');
    book.classList.remove('book_color-whitesmoke');
    book.classList.remove('book_color-gray');
  }
  if(link.getAttribute('data-text-color') === 'gray') {
    book.classList.add('book_color-gray');
    book.classList.remove('book_color-whitesmoke');
    book.classList.remove('book_color-black');
  } 
  if(link.getAttribute('data-text-color') === 'whitesmoke') {
    book.classList.add('book_color-whitesmoke');
    book.classList.remove('book_color-black');
    book.classList.remove('book_color-gray');
  } 
});

backgroundColorLinks.addEventListener('click', (e) => {
  e.preventDefault();
  const link = e.target;
  console.log(link);
  console.log(book);

  for (let i = 3; i < backgroundColorArray.length; i++) {
    
    if (backgroundColorArray[i].classList.contains('color_active')) {
      backgroundColorArray[i].classList.remove('color_active');
    }
    if (!link.classList.contains('color_active')) {
      link.classList.add('color_active')
    }
  }

  if(link.getAttribute('data-bg-color') === 'black'){
    book.classList.add('book_bg-black');
    book.classList.remove('book_bg-gray');
    book.classList.remove('book_bg-white');
  }
  if(link.getAttribute('data-bg-color') === 'gray') {
    book.classList.add('book_bg-gray');
    book.classList.remove('book_bg-black');
    book.classList.remove('book_bg-white');
  } 
  if(link.getAttribute('data-bg-color') === 'white') {
    book.classList.add('book_bg-white');
    book.classList.remove('book_bg-black');
    book.classList.remove('book_bg-gray');
  } 
});
