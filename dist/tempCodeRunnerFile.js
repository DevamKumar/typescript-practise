const calculateTotalPrice = (product) => {
    return `Total cost for the product ${product.name} is ${product.price * product.quantity}`;
};
console.log(calculateTotalPrice(product1));