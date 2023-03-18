console.log(Number(null));

console.log(null + 12); //12 as null is evaluated to 0 here // Number(null) is being called
console.log(null - 12); // -12, same as null is evaluated to 0 //Number(null) is being called

// but this doesn't work with undefined as Number(undefined ) = NaN
// and we get NaN if we try to do a math operation on a number and undefined
console.log(Number(undefined));
console.log(undefined + 10); // NaN + 10 => NaN
console.log(undefined - 10); // Nan - 10 => NaN

console.log(Number(true)); //1
console.log(Number(false)); //0

console.log(Boolean(12)); //true
console.log(Boolean(-22)); //true
console.log(Boolean(0)); //false
console.log(Boolean(-0)); //false

console.log(NaN == NaN); //false
console.log(NaN === NaN); //false
console.log(Number.isNaN(NaN)); //true

console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(null == 0); // false
console.log(null == ""); //false //
// so null only == to undefined or null
