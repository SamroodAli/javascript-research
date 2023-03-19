const slowButton = document.getElementById("slow");
const sayHelloButton = document.getElementById("say-hello");

slowButton.addEventListener("click", slowOperation);
sayHelloButton.addEventListener("click", sayHello);

function slowOperation() {
  const worker = new Worker("worker.js");

  setTimeout(() => {
    // we can terminate our worker by calling worker.terminate api
    worker.terminate();
    console.log("worker terminated");
  }, 1000);
}

function sayHello() {
  console.log("Hello world");
}
