const parent = {
  name: "Samrood",
  // ignored in object.keys, object.values,object,entries, for in loop
  [Symbol("parent")]: "foo",
};

const child = {
  profession: "Software engineer",

  // ignored in object.keys, object.values,object,entries, for in loop
  [Symbol("child")]: "bar",

  // inheritance
  __proto__: parent,
};

console.log(child.name); // Samrood

/** Object.keys, values and entries */

// Object.keys,values,entires ignore both parent properties and symbols and non enumerable properties like 'toString'
// i.e, only enumerate over 'own' properties only

console.log(Object.keys(child)); // ['profession']
console.log(Object.values(child)); // ['Software engineer']
console.log(Object.entries(child)); // ['profession','Software engineer']

/** For in loop */

// For in loop ignores both symbols and non enumerable properties like 'toString'
// i.e, only enumerate over 'own' and 'parent' properties

for (const key in child) {
  console.log(key); // profession, name
}

/** Object.getOwnPropertySymbols */

// Object.getOwnPropertySymbols enumerates over 'own' symbol properties only
// ignores parent symbols, non symbol properties and non enumerable properties

console.log(Object.getOwnPropertySymbols(child)); // [ Symbol('child') ]

/** Reflect.ownKeys */
// Reflect.ownKeys gives you both 'own' properties and 'own' symbols
//  but ignores parent properties, parent symbols and non enumerable properties

console.log(Reflect.ownKeys(child)); // ['profession', Symbol('child')]
