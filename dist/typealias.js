"use strict";
const product1 = {
    name: "Google",
    price: 6567,
    quantity: 4,
    specifications: {
        processor: "tensor",
        cores: 4,
    },
};
const product2 = {
    name: "Google",
    price: 8977,
    quantity: 4,
    specifications: {
        processor: "tensor",
        cores: 2,
    },
};
const product3 = {
    name: "Google",
    price: 8999,
    quantity: 4,
    specifications: {
        processor: "tensor",
        cores: 6,
    },
};
const product4 = {
    name: "Google",
    price: 8976,
    quantity: 4,
    specifications: {
        processor: "tensor",
        cores: 8,
    },
};
const calculateTotalPrice = (product) => {
    return `Total cost for the product ${product.name} is ${product.price * product.quantity}`;
};
console.log(calculateTotalPrice(product1));
//# sourceMappingURL=typealias.js.map