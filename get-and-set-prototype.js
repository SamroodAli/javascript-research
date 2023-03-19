const person = {
  isHuman: true,
};

{
  // using __proto__ ( NOT RECOMMENDED, deprecated)
  const child = {
    isStudying: true,
    __proto__: person,
  };

  console.log(child.isStudying); // true
  console.log(child.isHuman); // true
}

{
  // using Object.create and direct assignments
  const child = Object.create(person);
  child.isStudying = true;

  console.log(child.isStudying); // true
  console.log(child.isHuman); // true
}

{
  // using Object.assign and Object.create together
  const child = Object.assign(Object.create(person), {
    isStudying: true,
  });

  console.log(child.isStudying); // true
  console.log(child.isHuman); // true
}

{
  // using Object.create configurable values
  const child = Object.create(person, {
    // each key needs to be given configurations
    isStudying: {
      value: true, // the value for the key
      writable: true, // whether writable key-value pair or not,
      enumerable: true, //whether this key shows up while enumerating,
      configurable: true, // whether this object with value,writable, enumerable, configurable is configurable
    },
  });

  console.log(child.isStudying); // true
  console.log(child.isHuman); // true
}

{
  // using Object.setPrototypeOf , NOT RECOMMENDED, slow api. prototypes are not meant to be changed after object creation
  const child = {
    isStudying: true,
  };

  Object.setPrototypeOf(child, person);

  console.log(child.isStudying); // true
  console.log(child.isHuman); // true
}

// GETTING Prototype with Object.getPrototypeOf // Recommended way

{
  const child = Object.assign(Object.create(person), {
    isStudying: true,
  });

  console.log(Object.getPrototypeOf(child) === person);
}

// GETTING Prototype with __proto // Not Recommended

{
  const child = Object.assign(Object.create(person), {
    isStudying: true,
  });

  console.log(child.__proto__ === person);
}
