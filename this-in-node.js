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
