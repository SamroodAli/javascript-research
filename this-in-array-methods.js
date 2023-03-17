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

console.log("filter example");
[1, 2, 3].filter(
  function foo() {
    console.log(this.name); // 'Samrood'
  },
  { name: "Samrood" }
);

console.log("find example");
[1, 2, 3].find(
  function foo() {
    console.log(this.name); // 'Samrood'
  },
  { name: "Samrood" }
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
