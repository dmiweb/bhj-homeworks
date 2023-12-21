const reveal = document.querySelectorAll('.reveal');

function isVisible(element) {
  const { top, bottom } = element.getBoundingClientRect();
  
  if (bottom < 0) {
    return false;
  }
  if (top > window.innerHeight) {
    return false;
  }
  return true;
}

setInterval(() => {
  reveal.forEach((item, index) => {
    if (isVisible(reveal[index])) {
      reveal[index].classList.add('reveal_active');
    } else {
      reveal[index].classList.remove('reveal_active');
    }
  });
}, 100);
