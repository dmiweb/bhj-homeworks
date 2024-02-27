(() => {
  const productAddButtons = document.querySelectorAll('.product__add');
  const productItems = document.getElementsByClassName('product');
  const productImages = document.querySelectorAll('.product__image');
  const productDec = document.querySelectorAll('.product__quantity-control_dec');
  const productInc = document.querySelectorAll('.product__quantity-control_inc');
  const productCounts = document.querySelectorAll('.product__quantity-value');
  const productCart = document.querySelector('.cart__products');
  const productItemsCart = document.getElementsByClassName('cart__product');
  const productCountsCart = document.getElementsByClassName('cart__product-count');

  const articleCache = [];

  for (let i = 0; i < productInc.length; i++) {
    productInc[i].addEventListener('click', () => {
      productCounts[i] = productCounts[i].textContent++
    });
  }

  for (let i = 0; i < productDec.length; i++) {
    productDec[i].addEventListener('click', () => {
      if (Number(productCounts[i].textContent) === 1) {
        return;
      } else {
        productCounts[i] = productCounts[i].textContent--;
      }
    });
  }

  for (let i = 0; i < productAddButtons.length; i++) {
    productAddButtons[i].addEventListener('click', () => {
      const articleProduct = productItems[i].getAttribute('data-id');

      const createProduct = `
        <div class="cart__product" data-id="${articleProduct}">
          <img src="${productImages[i].src}" class="cart__product-image" alt="">
          <div class="cart__product-count">${Number(productCounts[i].textContent)}</div>
          <a class="task__remove" href="#">&times;</a>
        </div>`;

      let productIndex = articleCache.indexOf(articleProduct);

      if (!articleCache.includes(articleProduct)) {
        productCart.insertAdjacentHTML('beforeEnd', createProduct);
        productCart.parentElement.classList.remove('visually-hidden');
        articleCache.push(articleProduct);
      } else {
        productCountsCart[productIndex].textContent = Number(productCountsCart[productIndex].textContent) + Number(productCounts[i].textContent);

        // Добавление анимации //
        const cloneProductImage = productImages[i].cloneNode(false);
        cloneProductImage.style.position = 'absolute';
        const addProductImage = productItems[i].appendChild(cloneProductImage);

        const startPositionImg = addProductImage.getBoundingClientRect();
        const finishPositionImg = productItemsCart[productIndex].getBoundingClientRect();
        const stepX = (finishPositionImg.left - startPositionImg.left) / 100;
        const stepY = (finishPositionImg.top - startPositionImg.top) / 100;
        let countX = 0;
        let countY = 0;

        function productAddAnimation() {
          countX = countX + stepX;
          countY = countY + stepY;
          cloneProductImage.style.marginLeft = countX + 'px';
          cloneProductImage.style.marginTop = countY + 'px';

          if (countX > finishPositionImg.left) {
            clearInterval(id);
            addProductImage.remove();
          }
        }

        let id = setInterval(productAddAnimation, 0);
      }
    });
  }

  document.addEventListener('click', (e) => {
    const button = e.target.closest('.task__remove');
    if (button) {
      button.parentElement.remove();

      const articleProductRemove = button.parentElement.getAttribute('data-id');
      const productIndexRemove = articleCache.indexOf(articleProductRemove);
      articleCache.splice(productIndexRemove, 1);

      if (articleCache.length === 0) {
        productCart.parentElement.classList.add('visually-hidden');
      }
    }
  });
})();

