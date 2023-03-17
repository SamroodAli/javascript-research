const symbol1 = Symbol("value");
const symbol2 = Symbol("value");

console.log(symbol1);
console.log(symbol2);

console.log(symbol1 === symbol2); //false
console.log(symbol1 == symbol2); // false

// symbols as keys
const obj = {
  [symbol1]: "one",
  [symbol2]: "two",
};

console.log(obj[Symbol("value")]); //undefined

console.log(obj[symbol1]); // one

console.log(obj[symbol2]); // two
