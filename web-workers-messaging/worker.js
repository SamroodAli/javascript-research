/** There are two ways to add listeners for messages from the main thread*/

// self is like the window object, represents the global worker scope

// 1. using self.onmessage or just onmessage.
// like window.setTimeout or just setTimeout

// self.onmessage = onMessageFromTheMainThread;
// onmessage = onMessageFromTheMainThread

// 2. using self.addEventListener or just addEventListener
// self.addEventListener("message", onMessageFromTheMainThread);
addEventListener("message", onMessageFromTheMainThread);

function onMessageFromTheMainThread(event) {
  console.log(event.data);
}

// publish messages with self.postMessage or just postMessage
// self.postMessage("message from the worker thread");
postMessage("message from the worker thread");
