(() => {
const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = document.querySelectorAll('.dropdown__item');
const dropdownLink = document.querySelectorAll('.dropdown__link');

dropdownValue.addEventListener('click', function() {
  dropdownList.classList.toggle('dropdown__list_active');
});

for(let i = 0; i < dropdownItem.length; i++) {
  dropdownItem[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    dropdownList.classList.remove('dropdown__list_active');
    // dropdownValue.textContent = dropdownLink[i].textContent;
    dropdownValue.textContent = dropdownLink[i].closest('.dropdown__item').textContent;
  });
}
})();




