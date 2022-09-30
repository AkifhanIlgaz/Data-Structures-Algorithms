class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
  }

  enqueue(val) {
    const newNode = new ListNode(val);

    if (this.end !== null) {
      // Queue is not empty
      this.end.next = newNode;
      this.end = this.end.next;
    } else {
      // Queue is empty
      this.start = this.end = newNode;
    }
  }

  dequeue() {
    if (this.start == null) {
      // Queue is empty
      return;
    }

    const value = this.start.val;
    this.start = this.start.next;

    if (this.start == null) {
      // Queue has become empty
      this.end = null;
    }

    return value;
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
