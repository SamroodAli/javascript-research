// if sum(10,20,30) returns 10 + 20 + 30
// as a curried function, it will be of the pattern sum(10)(20)(30) returning 10 + 20 + 30

function sum(a, b, c) {
  return a + b + c;
}

function multiply(a, b) {
  return a * b;
}

function curriedSum(a) {
  return function (b) {
    return function (c) {
      return sum(a, b, c);
    };
  };
}

console.log(sum(10, 20, 30) === curriedSum(10)(20)(30));

// writing a curry function that automates this

function curry(func) {
  let args = [];

  return function curryReturnedFunction(value) {
    if (args.length === func.length - 1) {
      return func(...args, value);
    } else {
      args.push(value);

      return curryReturnedFunction;
    }
  };
}

const myCurriedSum = curry(sum);
console.log(myCurriedSum(10)(20)(30));

const myCurriedMultiply = curry(multiply);
console.log(myCurriedMultiply(10)(20));
