/** Object.feeze */
// takes an object, makes it immutable
// no new properties, cannot update existing properties
// returns the same object
{
  const originalObject = {
    foo: "bar",
  };

  const frozenObject = Object.freeze(originalObject);

  originalObject.alpha = "omega";

  originalObject.foo = "buzz";

  console.log(originalObject);

  console.log(frozenObject === originalObject); // true

  /** Object.isFrozen */
  // we can check whether an object is frozen with Object.isFrozen
  console.log(Object.isFrozen(frozenObject)); //true
}

/** Object.seal */
// takes in an object
// cannot add new properties but can update existing properties
// returns the same object

{
  const originalObject = {
    foo: "bar",
  };

  const sealedObject = Object.seal(originalObject);

  // wont work
  sealedObject.alpha = "omega";

  // works
  sealedObject.foo = "buzz";

  console.log(sealedObject); // {foo:'buzz'}

  console.log(sealedObject === originalObject); // true

  /** Object.isSealed */
  // we can check whether an object is sealed with Object.isSealed

  console.log(Object.isSealed(sealedObject)); // true
}
