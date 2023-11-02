// fun define
function greet1(name:string, id?:number) {
if (id){
    return `Welcome! ${name}, your id is ${id}`
}else{

    return `Welcome! ${name}`
}}


// fun call
const emp = greet1("Devam",1);
const emp2 = greet1("Ayush")
console.log(emp);
console.log(emp2);