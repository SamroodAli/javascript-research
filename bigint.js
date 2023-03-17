const bigOne = BigInt(1000);

console.log(bigOne);

const bigTwo = 1000n;

console.log(bigTwo);

console.log(bigOne == bigTwo); // true

console.log(bigOne === bigTwo); // true

console.log(typeof bigOne);
