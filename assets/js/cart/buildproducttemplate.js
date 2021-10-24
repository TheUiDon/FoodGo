const dropdownProductsTemplate = (product) => {
return `
    <div id="${product.id}-dropdown" class="product row">
    <div class="col-4 px-2">
        <div class="view zoom overlay z-depth-1 rounded mb-md-0">
        <img class="img-fluid w-100" src="${product.image}" alt="Sample">
        </div>
    </div>
    <div class="col-5 px-2">
        <span>${product.name}</span>
        <p class="mb-0"><span><strong class="price">$${(product.price * product.itemsNumber).toFixed(2)}</strong></span></p>
    </div>
    <div class="col-2 pl-0 pr-2">
        <a href="#!" type="button" class="remove-product"><i class="fas fa-trash-alt"></i></a>
    </div>
    </div>
    </div>
    <hr class="mb-4">
`
}

const productsTemplate = (product) => {
return `
    <div id="${product.id}" class="product row mb-4">
    <div class="col-md-5 col-lg-3 col-xl-3">
        <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
        <img class="img-fluid w-100" src="${product.image}" alt="Sample">
        <a href="#!">
            <div class="mask waves-effect waves-light">
            <img class="img-fluid w-100" src="${product.image}">
            <div class="mask rgba-black-slight waves-effect waves-light"></div>
            </div>
        </a>
        </div>
    </div>
    <div class="col-md-7 col-lg-9 col-xl-9">
        <div>
        <div class="d-flex justify-content-between">
            <div>
            <h5>${product.name}</h5>
            <p class="mb-3 text-muted text-uppercase small">${product.category} - ${product.color}</p>
            <p class="mb-2 text-muted text-uppercase small">Color: ${product.color}</p>
            <p class="mb-3 text-muted text-uppercase small">Size: ${product.size}</p>
            </div>
            <div>
            <div class="def-number-input number-input safari_only mb-0 w-100">
                <button class="minus decrease"></button>
                <input class="quantity" min="0" name="quantity" value="${product.itemsNumber}" type="number">
                <button class="plus increase"></button>
            </div>
            <small id="passwordHelpBlock" class="form-text text-muted text-center"> (Note, 1 piece) </small>
            </div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
            <div>
            <a href="#!" type="button" class="remove-product card-link-secondary small text-uppercase mr-3"><i class="fas fa-trash-alt mr-1"></i> Remove item </a>
            <a href="#!" type="button" class="card-link-secondary small text-uppercase"><i class="fas fa-heart mr-1"></i> Move to wish list </a>
            </div>
            <p class="mb-0"><span><strong class="price">$${(product.price * product.itemsNumber).toFixed(2)}</strong></span></p>
        </div>
        </div>
    </div>
    </div>
    <hr class="mb-4">
`
};