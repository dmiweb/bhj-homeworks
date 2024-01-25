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
  const item = document.createElement('div');
  const itemCode = document.createElement('div');
  const itemValue = document.createElement('div');
  const itemCurrency = document.createElement('div');
  
  item.classList.add('item');
  itemCode.classList.add('item__code');
  itemValue.classList.add('item__value');
  itemCurrency.classList.add('item__currency');

  itemCode.textContent = code;
  itemValue.textContent = value;
  itemCurrency.textContent = 'руб.';

  currencyList.appendChild(item);
  item.appendChild(itemCode);
  item.appendChild(itemValue);
  item.appendChild(itemCurrency);
} 