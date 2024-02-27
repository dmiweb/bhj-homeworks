const currencyList = document.querySelector('#items');
const loader = document.querySelector('.loader');

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    const exchangeRates = JSON.parse(xhr.responseText);

    loader.classList.remove('loader_active');

    for (let i in exchangeRates.response.Valute) {
      const CharCode = exchangeRates.response.Valute[i].CharCode;
      const Value = exchangeRates.response.Valute[i].Value;

      addCurrency(CharCode, Value);
    }
  }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

const addCurrency = (code, value) => {
  const newCurrency = `
    <div class="item">
      <div class="item__code">${code}</div>
      <div class="item__value">${value}</div>
      <div class="item__currency">руб.</div>
    </div>`;

    currencyList.insertAdjacentHTML('beforeEnd', newCurrency);
} 