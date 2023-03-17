const parent = {
  name: "Samrood",
};

const child = Object.create(parent);

child.age = 26;

// check if a property exists in an object
console.log("name" in child); // true // 'in' checks both parent and child

console.log("age" in child); // true

console.log(child.hasOwnProperty("name")); // false //checks only 'own' object, child here.

console.log(child.hasOwnProperty("age")); // true

// 'in' checks inheritance also but 'hasOwnProperty' only checks the target object and not it's parents

console.log("toString" in child); //true because toString is available in every object
