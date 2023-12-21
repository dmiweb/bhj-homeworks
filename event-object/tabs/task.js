(() => {
  let tab = document.querySelectorAll('.tab');
  let tabContent = document.querySelectorAll('.tab__content');

  for (let i = 0; i < tab.length; i++) {
    tab[i].onclick = function () {
      const serchTab = tab[i].classList.contains('tab_active')
      if (!serchTab) {
        tab[i].classList.add('tab_active');
        tabContent[i].classList.add('tab__content_active');
      }
      for (let j = 0; j < tab.length; j++) {
        if (i !== j) {
          tab[j].classList.remove('tab_active');
          tabContent[j].classList.remove('tab__content_active');
        }
      }
    }
  }
})();





