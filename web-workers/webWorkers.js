const slowButton = document.getElementById("slow");
const sayHelloButton = document.getElementById("say-hello");

slowButton.addEventListener("click", slowOperation);
sayHelloButton.addEventListener("click", sayHello);

function slowOperation() {
  // const now = Date.now();
  // while (Date.now() - now <= 3000) {}
  // console.log("slow operation finished"); // we need to move this to the worker thread
  // we do that by moving this work to a new file that we run on a worker thread
  const worker = new Worker("worker.js");
}

function sayHello() {
  console.log("Hello world");
}
