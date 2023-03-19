const slowButton = document.getElementById("slow");
const sayHelloButton = document.getElementById("say-hello");

slowButton.addEventListener("click", slowOperation);
sayHelloButton.addEventListener("click", sayHello);

function slowOperation() {
  const worker = new Worker("worker.js");

  // there are two ways to add a listener for messages from the worker thread

  // 1. with onmessage

  // worker.onmessage = onMessageFromWorker;

  // 2. with the worker.addEventListener

  worker.addEventListener("message", onMessageFromWorker);

  // publish messages using the postMessage api

  worker.postMessage("message from the main thread");
}

function onMessageFromWorker(event) {
  console.log(event.data);
}

function sayHello() {
  console.log("Hello world");
}
