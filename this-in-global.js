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

// modules are always in strict mode. they always give undefined for thisArg for global scope and global functions

// for normal scripts not in strict mode:
// thisArg in global scope and in inside global functions is the window object.

// for normal scripts in strict mode:
// thisArg in global will still output the window object.
// for inside functions in global scope, we get undefined just like in nodejs

// of course this is when this is not manually bound or it's an object method. we are talking about
// console.log(this) //out in global scope
// functions like the logThis function above
