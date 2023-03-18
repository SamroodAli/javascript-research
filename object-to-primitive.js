//TODO: do more research on this if the topics here are used
// https://262.ecma-international.org/6.0/#sec-toprimitive

/** Object.valueOf  */
//  gives us a primitive value for the object */
//  by default, it returns the same object literal form

const object = {
  foo: "bar",
};

console.log(object.valueOf());

// this results in a NaN because the value of object is an object
console.log(object - 2); // NaN

// but we can change that

object.valueOf = function () {
  return 7;
};

console.log(object - 2); // 7 - 2 = 5, object evaluates to 7 from object.valueOf
console.log(object + 2); // 7 + 2 = 9, object evaluates to 7 from object.valueOf

/** Using Symbol.toPrimitive */

const anotherObject = {
  foo: "bar",
  [Symbol.toPrimitive]: function toPrimitive(hint) {
    // hint is like type, several cases where object is being converted to a primitive

    console.log(hint, "hint");

    switch (hint) {
      case "number": {
        return 100;
      }

      case "string": {
        return "hello world";
      }

      // case to handle '+' operator
      // case "default": {
      //   return 13;
      // }

      default: {
        return null;
      }
    }
  },
};

/** THIS SEEMS TO BE IGNORED IF Symbol.toPrimitive is present */
// TODO: since there are cases like this, more research is needed in this topic if we are monkey patching like this
anotherObject.valueOf = function () {
  return 999;
};

/** THIS SEEMS TO BE IGNORED IF Symbol.toPrimitive is present */
anotherObject.toString = function () {
  return "hello from toString";
};

console.log(anotherObject - 10); // 90 because anotherObject evaluated to 100  (case number)

console.log(Number(anotherObject)); // 100 because anotherObject evaluated to 100 (case number)

console.log(String(anotherObject)); //hello world - because anotherObject evaluated to hello world ( case string)

console.log(anotherObject + 12); // 12 because anotherObject evaluated to null (case default) ( null + 12 = 12, coz null evaluated to 0) // '+' operation gives hint as 'default'. case 'default' was not available, so it fell to default case
