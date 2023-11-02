"use strict";
function IsEven(_x) {
    return _x % 2 === 0;
}
console.log(IsEven(5384734));
function isDivisible(_a) {
    return _a % 4 === 0 && _a % 8 === 0;
}
console.log(isDivisible(72));
let bigNumber = 9007199254740991n;
console.log(bigNumber);
let anotherBignumber = BigInt("9007199254740991567");
console.log(anotherBignumber);
let sum3 = bigNumber + anotherBignumber;
let diff = bigNumber - anotherBignumber;
let prod = bigNumber * anotherBignumber;
let div = bigNumber / anotherBignumber;
console.log("sum is " + sum3);
console.log("diff is " + diff);
console.log("prod is " + prod);
console.log("quotient is " + div);
//# sourceMappingURL=bollean&bigiint.js.map