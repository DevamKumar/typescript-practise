type Product = {
  name: string;
  price: number;
  quantity: number;
  specifications: {
    processor: string;
    cores: number;
  };
};
const product1: Product = {
  name: "Google",
  price: 6567,
  quantity: 4,
  specifications: {
    processor: "tensor",
    cores: 4,
  },
};
const product2: Product = {
  name: "Google",
  price: 8977,
  quantity: 4,
  specifications: {
    processor: "tensor",
    cores: 2,
  },
};
const product3: Product = {
  name: "Google",
  price: 8999,
  quantity: 4,
  specifications: {
    processor: "tensor",
    cores: 6,
  },
};
const product4: Product = {
  name: "Google",
  price: 8976,
  quantity: 4,
  specifications: {
    processor: "tensor",
    cores: 8,
  },
};
// console.log(product1);
// console.log(product2);
// console.log(product3);
// console.log(product4);

const calculateTotalPrice = (product:Product) => {
    return `Total cost for the product ${product.name} is ${product.price * product.quantity}`;
};
console.log(calculateTotalPrice(product1));