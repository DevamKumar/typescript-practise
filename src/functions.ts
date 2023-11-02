// function greet(_name:string, _empid:string){
//     console.log(`Welcome! ${_name}, your employee id is ${_empid}`)
// }
// greet("Devam","23emp12");

// const greet = (_name:string, _empid:string): string => {
//     return `Welcome! ${_name}, your employee id is ${_empid}`
// }
// const mygreet = greet("Devam","23emp12");
// console.log(mygreet);

const greet = (_name:string, _empid:string): string => `Welcome! ${_name}, your employee id is ${_empid}`

const mygreet = greet("Devam","23emp1");
console.log(mygreet);