const updateProductList = () => {
    $('#product-list').empty();
    buildProductList();
    $('#dropdown-cart').empty();
    buildDropdownCart();
    bindProductEvents();
}