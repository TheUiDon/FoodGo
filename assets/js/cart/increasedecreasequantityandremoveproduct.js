const increaseProductQuantity = (product) => {
const productId = $(product).parents('.product').get(0).id
const price = $.grep(productsInCart, el => { return el.id == productId })[0].price;

$.each(storageData, (i, el) => {
    if (el.id == productId) {
    el.itemsNumber += 1
    $(product).siblings('.quantity').val(el.itemsNumber);
    $(`#${productId}`).find('.price').html(`$${(price * el.itemsNumber).toFixed(2)}`);
    $(`#${productId}-dropdown`).find('.price').html(`$${(price * el.itemsNumber).toFixed(2)}`);
    }
});

updateCart();
}

const subtractProductQuantity = (product) => {
const productId = $(product).parents('.product').get(0).id
const price = $.grep(productsInCart, el => { return el.id == productId })[0].price;
let itemsInCart = $.grep(productsInCart, el => { return el.id == productId })[0].itemsNumber;

if (itemsInCart > 0 ) {
    storageData.map( el => {
    if (el.id == productId) {
        el.itemsNumber -= 1
        $(product).siblings('.quantity').val(el.itemsNumber)
        $(`#${productId}`).find('.price').html(`$${(price * el.itemsNumber).toFixed(2)}`);
        $(`#${productId}-dropdown`).find('.price').html(`$${(price * el.itemsNumber).toFixed(2)}`);
    }
    });

    updateCart();
};
}

const removeProduct = (product) => {
const productId = $(product).parents('.product').get(0).id

storageData = $.grep(storageData, (el, i) => {
    return el.id != productId
});

updateCart();
updateProductList();
}