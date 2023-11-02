const inputValue = (val:number | string ):string | number => {
    if (typeof val === 'number'){
        return val * 23
    }else if(typeof val === "string"){
        return val.toUpperCase();
    }else{
        throw new Error("Invalid inputs");
    }
}
console.log(inputValue(55));
console.log(inputValue("devam"));

