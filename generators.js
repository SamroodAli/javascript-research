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
