(() => {
  const rotator = document.querySelector('.rotator__case_active');
  let rotatorSpeed = Number(rotator.getAttribute('data-speed'));
  rotator.style.color = rotator.getAttribute('data-color');

  function adRotator(element) {
    element = document.querySelector('.rotator__case_active');
    element.classList.remove('rotator__case_active');

    if (!element.nextElementSibling) {
      element = document.querySelector('.rotator__case');
      element.classList.add('rotator__case_active');
      rotatorSpeed = Number(element.getAttribute('data-speed'));
    } else {
      element = element.nextElementSibling;
      element.classList.add('rotator__case_active');
      element.style.color = element.getAttribute('data-color');
      rotatorSpeed = Number(element.getAttribute('data-speed'));
    }
  }

  let rotatorId = setTimeout(function adTimeout() {
    adRotator(rotator);
    rotatorId = setTimeout(adTimeout, rotatorSpeed);
  }, rotatorSpeed);
})();