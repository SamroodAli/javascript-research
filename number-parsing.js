// difference between Number() and parseInt()

// Number() tries to convert the value into a number

console.log(Number(10)); //10
console.log(Number(10.5)); // 10.5

// but if something is not convertible to a number, it gives you NaN
console.log(Number("10px")); // NaN

// but with parseInt, it parses left part number from the value
console.log(parseInt("10px")); //10

console.log(parseInt("value10px")); // this will be a NaN, it has to start with a number

console.log(parseInt("10.5rem")); // 10 floating points are ignored

// there is also parseFloat, which parses floating point numbers
console.log(parseFloat("10.5rem")); // 10.5
