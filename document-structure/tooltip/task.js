(() => {
  const hasTooltip = document.querySelectorAll('.has-tooltip');
  
  const hint = document.createElement('div');
  hint.classList.add('tooltip');

  for (let i = 0; i < hasTooltip.length; i++) {

    hasTooltip[i].addEventListener('click', (e) => {
      e.preventDefault();
      const { top, bottom, left } = hasTooltip[i].getBoundingClientRect();
      hasTooltip[i].appendChild(hint);
      hint.classList.toggle('tooltip_active');
      hint.textContent = hasTooltip[i].title;
      hint.style.left = left + 'px';
      hint.style.top = top + (bottom - top) + 'px';
    });
  }

  document.addEventListener('scroll', () => {
    hint.classList.remove('tooltip_active');
  })
})();







