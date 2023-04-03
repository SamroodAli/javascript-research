async function* generateNumbers(start, end) {
  for (let i = start; i <= end; i++) {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    yield i;
  }
}

async function main() {
  for await (let value of generateNumbers(1, 10)) {
    console.log(value);
  }
}

main();
