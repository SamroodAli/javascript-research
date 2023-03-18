function* generate3numbers() {
  yield 1;
  yield 2;
  yield 3;

  // return also is never reached if we are using a for loop
  return 4; // this will be returned along with done false {value:4,done:false}
}

{
  const generator = generate3numbers();
  console.log(generator.next()); //{value:1,done:false}

  console.log(generator.next()); //{value:2,done:false}

  console.log(generator.next()); //{value:3,done:false}

  console.log(generator.next()); //{value:4,done:true}
}

{
  const generator = generate3numbers();

  for (const value of generator) {
    console.log(value); // 1,2,3 // we will never reach 4
  }
}

// they are like normal functions otherwise, we can also pass in arguments

function* generateNumbers(max) {
  for (let i = 1; i <= max; i++) {
    yield i;
  }

  return;
}

{
  const generator = generateNumbers(10);

  for (const value of generator) {
    console.log(value); // logs 1 to 10
  }
}

// generators exhaust themselves
{
  const generator = generateNumbers(10);

  // exhausting first two
  console.log(generator.next());
  console.log(generator.next());

  for (const value of generator) {
    console.log(value); // logs 3 to 10 // because 1 and 2 are already over
  }
}

// Some special features of generators

/** yield can return a value that is acquired from the respective next method call*/

function* generatorYieldReturns() {
  const value = yield "first value"; // yield here return the value from the second next call

  console.log(value, ":value from the second next call");

  yield value;
}

{
  const generator = generatorYieldReturns();

  console.log(generator.next()); // {value:'first value', done:false}

  console.log(generator.next("value for second yield")); // the previous yield evaluates to this value
}

function* anotherGeneratorYieldReturns() {
  let i = 0;

  while (true) {
    i += yield i;

    if (i >= 100) break;
  }

  return i;
}

{
  const generator = anotherGeneratorYieldReturns();

  console.log(generator.next()); // {value:0, done:false}
  console.log(generator.next(15)); // {value:15, done:false}
  // this is 15 because the previous yield is replaced by 15, and i gets incremented by 15 in i+= 15,
  //and we yield i in the next iteration where i is 15

  console.log(generator.next(5)); // {value:20, done:false}
  console.log(generator.next(0)); // {value:20, done:false} // 20 because we are just incrementing by zero
}
