let rotator = document.querySelector('.rotator__case_active');
rotator.style.color = rotator.getAttribute('data-color');
let rotatorCase = document.querySelectorAll('.rotator__case');
let dataSpeed = 0;



function adRotator(element) {
  element = document.querySelector('.rotator__case_active');
  element.classList.remove('rotator__case_active');
  dataSpeed = 0;
   
  if (!element.nextElementSibling) {
    element = document.querySelector('.rotator__case');
    element.classList.add('rotator__case_active');
    // dataSpeed = Number(element.getAttribute('data-speed'));
    // console.log(dataSpeed);
  } else {
    element = element.nextElementSibling;
    element.classList.add('rotator__case_active');
    element.style.color = element.getAttribute('data-color');
    // dataSpeed = Number(element.getAttribute('data-speed'));
    // console.log(dataSpeed);
  }   
}

console.log(dataSpeed);
setInterval(() => {
  adRotator(rotator);
}, dataSpeed);