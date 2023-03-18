while (true) {
  if (!taskQueue.isEmpty()) {
    // task queue is also called callback queue or message queue or macro task queue
    execute(taskQueue.dequeue()); // so setTimeout are all executed in the next iteration even if there is tasks in the microtask queue but just one
  }

  while (!microtaskQueue.isEmpty()) {
    // after one macro task, we wait for all the microtask queue to be over
    execute(microtaskQueue.dequeue()); // microtask queue is also called job queue
  }

  rerender();
}
