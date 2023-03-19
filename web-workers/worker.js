console.log("slow operation started in a worker thread");
const now = Date.now();
while (Date.now() - now <= 3000) {}
console.log("slow operation finished"); // we need to move this to the worker thread
