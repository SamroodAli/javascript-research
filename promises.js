// state  -> pending, fulfilled or rejected
//TODO: finish learning promise chaining

{
  const originalPromise = promiseFactory(new Error("something went wrong"));

  const promiseFromThen = originalPromise.then();
  const promiseFromCatch = originalPromise.catch((error) => {});
  // console.log(promiseFromThen === originalPromise); // false, promise.then returns a new promise
  // console.log(promiseFromCatch === originalPromise); // false, promise.catch returns a new promise
}

{
  const originalPromise = promiseFactory(10);

  originalPromise
    .then((value) => value + 10)
    .then((value) => value + 10)
    .then((value) => value + 10)
    .then(console.log);
}

/** Helper functions */

// create a promise that either resolves to a value or rejects to an error
function promiseFactory(value) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value instanceof Error) {
        reject(value);
      } else {
        resolve(value);
      }
    }, 1000);
  });

  return promise;
}
