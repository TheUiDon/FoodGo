const updateCart = () => {
Cookies.setStorage('cart', storageData);
productsInCart = [];

parseStorageDataWithProduct();
updatePill();
updateTotalAmount();
}

const parseStorageDataWithProduct = () => {
$.each(storageData, (i, el) => {
    const id = el.id;
    const itemsNumber = el.itemsNumber;

    $.each(productList, (i, el) => {
    if (id == el.id) {
        el.itemsNumber = itemsNumber;
        productsInCart.push(el)
    }
    });
});
}

const updatePill = () => {
let itemsInCart = 0;

$.each(productsInCart, (i, el) => {
    itemsInCart += el.itemsNumber;
});

$('.badge-pill').html(itemsInCart);
}

const updateTotalAmount = () => {
let total = 0;
const shippingCost = 0;
let summary = (total + shippingCost).toFixed(2);

$.each(productsInCart, (i, el) => {
    total += el.itemsNumber * el.price;
});

$('#total-price').html(`$${total.toFixed(2)}`);
$('#shipping-price').html(shippingCost === 0 ? 'Free' : `$${shippingCost}`);
$('#summary').html(`$${summary}`);
}