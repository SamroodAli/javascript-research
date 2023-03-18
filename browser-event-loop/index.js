//  microtask queue

// all the microtask has to be finished before running macro tasks

queueMicrotask(function () {
  console.log("Microtask 1");
});

queueMicrotask(function () {
  console.log("Microtask 2");
});

// macrotask queue
setTimeout(function () {
  console.log("Macrotask 1");
}, 0);

setTimeout(function () {
  console.log("Macrotask 2");
}, 0);

setTimeout(function () {
  console.log("Macrotask 3");
}, 0);

setTimeout(function () {
  console.log("Macrotask 4");
}, 0);

queueMicrotask(function () {
  console.log("Microtask 3");
});

queueMicrotask(function () {
  console.log("Microtask 4");
});

queueMicrotask(function () {
  console.log("Microtask 5");
});

queueMicrotask(function () {
  console.log("Microtask 6");
});
