// Stacks are basically constrained type of arrays that can only allow pop() push() and peek() functions
// You can implement stacks by using dynamic arrays or static arrays.It depends on the programmer
// We will implement stack with dynamic arrays
class Stack {
  constructor() {
    this.stack = new Array();
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  size() {
    return this.stack.length;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}
