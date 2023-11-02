function logandreturn <T>(value:T):T{
    return value;
}

const numberResult = logandreturn<number>(42);
const stringResult = logandreturn<string>('Devam');
const booleanResult = logandreturn<boolean>(true);

console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);
