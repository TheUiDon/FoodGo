$(document).ready(() => {
let storageData = [];

$.get("product.json", (res) => {
    productList = res;

    const isStorageEmpty = Cookies.getStorage('cart').length === 0;

    if (!isStorageEmpty) {
    storageData = Cookies.getStorage('cart');
    }

    updateCart();
    buildProductList();
    buildDropdownCart();
    bindProductEvents();
});
});