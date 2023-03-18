const parent = {
  parentProp1: "foo parent",
};

const copied = {
  otherProp: "bar",
  [Symbol("otherProp")]: "symbol value",

  // inheritance
  __proto__: parent,
};

const original = {
  originalKey: "foo",
};

/** Object.assign */
// Object.assign takes in a target object and a source object and
// copies 'own' properties including symbols but ignores parent properties and
// non enumerable properties like 'toString'
// MUTATES target object
// Returns the target object

const newObject = Object.assign(original, copied);

console.log(newObject); // { originalKey: 'foo', otherProp: 'bar', [Symbol(otherProp)]: 'symbol value' }

console.log(newObject === original); // false

// this would copy one object to a new object we created with literal syntax
const reallyNewObject = Object.assign({}, copied);

console.log(reallyNewObject);

console.log(reallyNewObject === copied); // false
