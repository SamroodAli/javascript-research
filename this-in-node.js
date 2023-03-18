exports.name = "Samrood";

console.log(this); //module object, {name:'Samrood'}

function logThisInStrictMode() {
  "use strict";
  console.log(this); //undefined
}

logThisInStrictMode();

function logThis() {
  console.log(this); //global object
}

logThis();
