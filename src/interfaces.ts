// interface Greetings {
//   name: string;
//   age: number;
// }

// const greetings: Greetings = {
//   name: "Devam",
//   age: 20,
// };
// console.log(greetings);

// interface Product1 {
//   name: string;
//   price: number;
//   quantity: number;
// }
// const prodData: Product1 = {
//   name: "Laptop",
//   price: 20000,
//   quantity: 5,
// };
// const calTotalPrice = () => {
//   return prodData.price * prodData.quantity;
// };
// console.log(calTotalPrice());
// console.log(prodData);

interface Products {
  name: string;
  price: number;
  quantity: number;
}
const proDuct1: Products = {
  name: "Laptop",
  price: 20000,
  quantity: 5,
};
const proDuct2: Products = {
  name: "pc",
  price: 10000,
  quantity: 5,
};
const calTotalPrice = (product:Products):number => {
  const {price, quantity} = product;
  return(price*quantity)
}
console.log(calTotalPrice(proDuct1));
console.log(calTotalPrice(proDuct2));
// console.log(proDuct1);
