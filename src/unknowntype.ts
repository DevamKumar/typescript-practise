let num2:unknown;
num2 = 5;
num2 = "devam";
num2 = true;

if(typeof num2 === "number"){
    console.log(num2 + 5);
}else if(typeof num2 === "string"){
    console.log(num2 + " Kumar")
}else if(typeof num2 === "boolean"){
    console.log(num2)
}