"use strict";
/** Call */

// func.bind(thisArg) returns a new function with this bound to the argument passed
function logThis(x, y) {
  console.log(this);
  console.log(x, y);
}

const object = {
  name: "Samrood",
};

{
  // we can optionally pass in arguments as extra arguments
  const boundLogThis = logThis.bind(object, 10, 20);

  boundLogThis(); // will log 'object' as well as 10,20

  // arguments here are ignored as we already bound the arguments with .bind passing in 10,20
  boundLogThis(30, 40);
}

{
  // passing only one argument
  const boundLogThis = logThis.bind(object, 10);

  boundLogThis(); // will log 'object' as well as 10, undefined

  // 30 here becomes the second argument, 40 is ignored as the function is expecting only two
  boundLogThis(30, 40);
}

/** Apply */
// calls the target function with the 'thisArg' as firstArgument and arguments as an array

{
  const object = { name: "Samrood" };

  logThis.apply(object, [25, 35]);

  // Note that 'this' doesn't necessarily have to be an object
  // this behaves differently in strict mode and normal mode
  // in strict mode, the argument is passed as is
  // in normal mode:
  // for null or undefined, we get the global object
  // for other primitives are wrapped in an object

  logThis.apply(123, [15, 20]);

  logThis.apply(undefined, [14, 32]);
}

/** Call */
// call works like apply but takes arguments as variable arity arguments ( any number of arguments)
// calls the target function with the 'thisArg' as firstArgument and arguments as an array

{
  const object = { name: "samrood" };

  // Note that 'this' doesn't necessarily have to be an object
  // this behaves differently in strict mode and normal mode
  // in strict mode, the argument is passed as is
  // in normal mode:
  // for null or undefined, we get the global object
  // for other primitives are wrapped in an object

  logThis.call(123, 15, 20);

  logThis.call(undefined, 14, 32);
}
