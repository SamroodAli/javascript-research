// state  -> pending, fulfilled or rejected

{
  const originalPromise = promiseFactory(new Error("something went wrong"));

  const promise1 = originalPromise.then(onData); // promise1 will be evaluated
  // with whatever onData returns but this will throw as originalPromise throws and there is no catch statement here

  const promise2 = originalPromise.catch(onError); // promise2 will be evaluated with whatever onError returns

  promise2.then(console.log); // this will run with whatever onError returns because the .then is after .catch
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

function onError(error) {
  return "Error from onError";
}

function onData(data) {
  return data;
}
