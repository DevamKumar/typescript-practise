"use strict";
const proDuct1 = {
    name: "Laptop",
    price: 20000,
    quantity: 5,
};
const proDuct2 = {
    name: "pc",
    price: 10000,
    quantity: 5,
};
const calTotalPrice = (product) => {
    const { price, quantity } = product;
    return (price * quantity);
};
console.log(calTotalPrice(proDuct1));
console.log(calTotalPrice(proDuct2));
//# sourceMappingURL=interfaces.js.map