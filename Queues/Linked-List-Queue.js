class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new ListNode(val);

    if (this.size) {
      // Queue is not empty
      this.end.next = newNode;
      this.end = this.end.next;
    } else {
      // Queue is empty
      this.start = this.end = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (!this.size) {
      // Queue is empty
      return null;
    }

    const value = this.start.val;
    this.start = this.start.next;

    if (this.start == null) {
      // Queue has become empty
      this.end = null;
    }

    return value;
  }
  peek() {
    return this.start.val;
  }

  empty() {
    return this.size === 0;
  }

  print() {
    let current = this.start;
    let s = "";
    while (current) {
      s += current.val + "=>";
      current = current.next;
    }
    console.log(s);
  }
}
