// "use strict";
exports.name = "Samrood";

console.log(this); //module object, {name:'Samrood'} // even in strict mode

function logThisInStrictMode() {
  "use strict";
  console.log(this); //undefined
}

logThisInStrictMode();

function logThis() {
  console.log(this); //global object
}

logThis();

// in browsers
// it's almost the same but except for global objects, you get window object
// and instead of module object, you still get window object.

// use strict behaves the same way unless it is a module.
// even if we use strict mode,
// console.this(this) out in global will output the window object, but it will be undefined in a module.
// inside functions in strict mode, we get undefined, just like in nodejs
