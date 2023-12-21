let rotator = document.querySelector('.rotator__case_active');
rotator.style.color = rotator.getAttribute('data-color');
let rotatorCase = document.querySelectorAll('.rotator__case');
let speed = null;
console.log(speed);


function adRotator(element) {
  element = document.querySelector('.rotator__case_active');
  // dataSpeed = Number(element.getAttribute('data-speed'));
  element.classList.remove('rotator__case_active');
   
  if (!element.nextElementSibling) {
    element = document.querySelector('.rotator__case');
    element.classList.add('rotator__case_active');
  } else {
    element = element.nextElementSibling;
    element.classList.add('rotator__case_active');
    element.style.color = element.getAttribute('data-color');
  }   

  rotatorCase.forEach((element, index) => {
  element = document.querySelector('.rotator__case_active');
  speed = Number(element.getAttribute('data-speed'));
  
  });

}

setInterval(() => {
  adRotator(rotator);
}, speed);