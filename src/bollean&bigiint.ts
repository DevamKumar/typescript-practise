function IsEven(_x: number): boolean {
  return _x % 2 === 0;
}
console.log(IsEven(5384734));

function isDivisible(_a: number): boolean {
  return _a % 4 === 0 && _a % 8 === 0;
}
console.log(isDivisible(72));

// const maxNumber = Number.MAX_SAFE_INTEGER;
let bigNumber: bigint = 9007199254740991n;
console.log(bigNumber);

let anotherBignumber = BigInt("9007199254740991567");
console.log(anotherBignumber);

let sum3: BigInt = bigNumber + anotherBignumber;
let diff: BigInt = bigNumber - anotherBignumber;
let prod: BigInt = bigNumber * anotherBignumber;
let div: BigInt = bigNumber / anotherBignumber;
console.log("sum is " + sum3);
console.log("diff is " + diff);
console.log("prod is " + prod);
console.log("quotient is " + div);
