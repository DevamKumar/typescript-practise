// number annotaions
let myfavnum: number = 6;
let nyfullname: string = `Devam Kumar`;
console.log(myfavnum.toString());
console.log(nyfullname.toUpperCase());

let sum1 = myfavnum + 10;
console.log(sum1.toString());

let sqrt: number = Math.sqrt(sum1);
console.log(sqrt.toString());
let nanvalue:number = NaN;
console.log(nanvalue.toString());

// string annotations
let  myfullname: string = "Devam Kumar";
let  myfname:    string = "Devam";
let  mylname:    string = "Kumar" ;
myfullname = myfname + mylname;
console.log(myfullname);
console.log(myfullname.length);
console.log(myfullname.toLowerCase());
console.log(myfullname.toUpperCase());


let longtext:string = "hi hello my name is devam kumar and this is the directory where i study typescript";
let shorttext:string = longtext.substring(0,10);
console.log(shorttext);


let str1:string = "devam kumar and this is the directory";
let str2:string = "nd this is the directory where i study typescript";
let areEqual:Boolean = str1 === str2;
console.log(areEqual);


let product:string = "Iphone";
let price:number = 1399;
console.log(`The product, new ${product} is priced at $${price}.`);