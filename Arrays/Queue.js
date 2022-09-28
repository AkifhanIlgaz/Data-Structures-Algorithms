// Queue implementation with stack
class Queue {
  constructor() {
    this.queue = new Array();
  }

  enqueue(val) {
    this.queue.push(val);
  }

  dequeue() {
    return this.queue.shift();
  }

  front() {
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  print() {
    console.log(this.queue.toString());
  }
}
