const products = Array.from(document.querySelectorAll('.product'));
const addToCartBtn = Array.from(document.querySelectorAll('.product__add'));
const cart = document.querySelector('.cart');
const productsInCart = document.querySelector('.cart__products');


products.forEach(product => {
    const increaseButton = product.querySelector('.product__quantity-control_inc');
    const decreaseButton = product.querySelector('.product__quantity-control_dec');
    const quantity = product.querySelector('.product__quantity-value');

    increaseButton.addEventListener('click', () => {
        quantity.textContent++;
    })

    decreaseButton.addEventListener('click', () => {
        if (quantity.textContent > 1) {
            quantity.textContent--;
        }
    })
})

addToCartBtn.forEach(button => {
    button.addEventListener('click', addToCart);
})

function addToCart(event) {
    cart.classList.remove('.hidden_element');

    const product = event.target.closest('.product');
    const productId = product.getAttribute('data-id');
    const productImg = product.querySelector('img');
    const productImgSrc = productImg.getAttribute('src');
    const productQuantity = product.querySelector('.product__quantity-value');
    const itemInCart = Array.from(document.querySelectorAll('.cart__product')).find(el => el.getAttribute('data-id') === productId);

    if (!itemInCart) {
        productsInCart.insertAdjacentHTML('beforeend', `
        <div class="cart__product" data-id="${productId}">
            <img class="cart__product-image" src="${productImgSrc}">
            <div class="cart__product-count">${productQuantity.textContent}</div>
            <div class="cart__product-remove">
                <button>Удалить товар</button>
            </div>
        </div>
        `);
    } else {
        const cartProductCount = itemInCart.querySelector('.cart__product-count');
        cartProductCount.textContent = (+cartProductCount.textContent) + (+productQuantity.textContent);
    }

    removeProductFromCart();
}

function removeProductFromCart() {
    const removers = Array.from(productsInCart.querySelectorAll('.cart__product-remove'));

    removers.forEach(remover => {
        remover.addEventListener('click', (e) => {
            e.target.closest('.cart__product').remove();
            if (productsInCart.length === 0) {
                cart.classList.add('hidden_element');
            }
        })
    })
}
