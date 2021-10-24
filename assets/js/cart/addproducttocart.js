$('.add-to-cart').on('click', (e) => {
addToCart(e.currentTarget)
})

const addToCart = (product) => {
const productId = $(product).attr('productId');
const isAlreadyInCart = $.grep(productsInCart, el => {return el.id == productId}).length;

if (isAlreadyInCart) {
    $.each(storageData, (i, el) => {
    if (productId == el.id) {
        el.itemsNumber += 1;
    }
    })
} else {
    const newProduct = {
    id: Number(productId),
    itemsNumber: 1
    }

    storageData.push(newProduct);
}

updateCart();
updateProductList();
}