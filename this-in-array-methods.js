// this argument in forEach, map, reduce etc
console.log("for Each example:");

[1, 2, 3, 4].forEach(
  function () {
    // if this was an array function, there is no this binding even if pass the second argument
    console.log(this.name); // Samrood
    // forEach, map,filter takes in a second argument which is the 'this' binding, but not in arrow functions
  },
  { name: "Samrood" }
);

console.log("map example:");

[1, 2, 3, 4].map(
  function () {
    // if this was an array function, there is no this binding even if pass the second argument
    console.log(this.name); // Samrood
    // forEach, map ,filter takes in a second argument which is the 'this' binding, but not in arrow functions
  },
  { name: "Samrood" }
);

// other apis that takes'this' argument

console.log(
  "Array find,findIndex, filter, index all takes in a function and the 'thisArg' ('this' binding)"
);

console.log("This is different in Array.reduce");
console.log("reduce example");

[1, 2, 3, 4].reduce(
  function (acc, curr) {
    // if this was an array function, there is no this binding even if pass the second argument
    console.log(this.name); // undefined

    return acc;
    // reduce doesn't have 'this' argument
  },
  // acc
  { name: "this is the accumulator and not the bound 'this'" }
);
