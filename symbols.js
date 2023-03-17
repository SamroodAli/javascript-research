const symbol1 = Symbol("value");
const symbol2 = Symbol("value");

console.log(symbol1);
console.log(symbol2);

console.log(symbol1 === symbol2); //false
console.log(symbol1 == symbol2); // false

// if we want symbols that are the same for the same values, we can use Symbol.for
// Symbol.for first checks if the symbol is already there in the 'global symbol registry'

const symbol3 = Symbol.for("value");
const symbol4 = Symbol.for("value");

console.log(symbol3 === symbol4); //true

// symbols as keys
const child = {
  [symbol1]: "one",
  [symbol2]: "two",
  [symbol3]: "three", //overridden
  [symbol4]: "four", // overrides the line above
};

console.log(child[Symbol("value")]); //undefined

console.log(child[symbol1]); // one

console.log(child[symbol2]); // two

console.log(child[symbol3]); //four

console.log(child[Symbol.for("value")]); //four
