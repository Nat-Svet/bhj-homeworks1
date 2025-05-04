let quantityIncreaseButtons = document.querySelectorAll(".product__quantity-control.product__quantity-control_inc");
let quantityDecreaseButtons = document.querySelectorAll(".product__quantity-control.product__quantity-control_dec");

// для каждой кнопки "+"" добавляем обработчик
quantityIncreaseButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Находим родительский блок товара
        let product = button.closest(".product");
        if (!product) return; // если не нашли — ничего не делаем

        // Находим элемент с количеством  товара
        let quantityValue = product.querySelector(".product__quantity-value");
        if (!quantityValue) return; // если не нашли - ничего не делаем

        // Увеличиваем значение на 1
        quantityValue.textContent = Number(quantityValue.textContent) + 1;
    });
});

// для каждой кнопки "-"" добавляем обработчик
quantityDecreaseButtons.forEach(button => {
    button.addEventListener("click", () => {
        // аналогично предыдущему
        let product = button.closest(".product");
        if (!product) return;

        let quantityValue = product.querySelector(".product__quantity-value");
        if (!quantityValue) return;

        let currentValue = Number(quantityValue.textContent);
        // нельзя уйти в минус
        if (currentValue > 1) {
            quantityValue.textContent = currentValue - 1;
        }
    });
});

let cartProducts = document.querySelector(".cart__products");
let productAddButtons = document.querySelectorAll(".product__add");

//на каждую кнопку "добавить в корзину" вешаем обработчик
productAddButtons.forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        //разбираемся с Id
        let productChosen = event.target.closest(".product");
        let productChosenId = productChosen.dataset.id;// Id
        let cartProduct = cartProducts.querySelector(`.cart__product[data-id="${productChosenId}"]`);

        //разбираемся с количеством товара
        let productQuantityElem = productChosen.querySelector(".product__quantity-value");
        let productQuantity = Number(productQuantityElem.textContent);

        if (cartProduct) {
            //если в корзине есть уже товар, добавляем к нему еще
            let cartProductCountElem = cartProduct.querySelector(".cart__product-count");
            let cartProductCount = Number(cartProductCountElem.textContent);
            cartProductCountElem.textContent = cartProductCount + productQuantity;
        } else {
            //если новый товар  добавляем его в корзину

            //создаем новый товар
            let newCartProduct = document.createElement("div");
            newCartProduct.className = "cart__product";
            newCartProduct.dataset.id = productChosenId;

            //клонируем фото и добавляем к товару
            let productImg = productChosen.querySelector("img").cloneNode(true);
            newCartProduct.append(productImg);

            //создаем счетчик товара и добавляем к товару
            let newProductCount = document.createElement("div");
            newProductCount.className = "cart__product-count";
            newProductCount.textContent = productQuantity;
            newCartProduct.append(newProductCount);

                      
            //добавляем новый товар в корзину
            cartProducts.append(newCartProduct);
        }
    });
});











