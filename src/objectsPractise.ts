const productNew:{
    name:string;
    price:number;
    quantity:string;
    specifications:{
        processor:string;
        cores:number;
    }
}={
    name:"Laptop",
    price:80000,
    quantity: "2 nos", 
    specifications:{
        processor:"M2 ProMax",
        cores:32
    }
}
console.log(productNew);