class SomeClass {
  // This function IS SAVED in the class prototype object,i,e SomeClass.prototype here
  // because this is method defined using normal function declaration and not an arrow function.
  // 'this' depends on the context on how and where it is called.
  foo() {}

  // this function is NOT SAVED in the class prototype object,i,e not present in the SomeClass.prototype here
  // because this is a method defined using an arrow function.
  // Methods defined using the arrow function show up in every instance and are not memory efficient.
  // We can saving a function instead of some other value but they are not different from the other fields in the class
  // But in arrow functions, 'this' always refer to the the instance if they are defined inside the class block.
  bar = () => {};
}

console.log(typeof SomeClass.prototype.foo === "function"); // the function exists because it is not
