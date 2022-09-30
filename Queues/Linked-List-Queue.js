class MyQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new ListNode(val);

    if (!this.size) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (!this.size) {
      return null;
    }

    let node = this.head;
    this.head = this.head.next;
    node.next = null;
    this.size--;
    return node.val;
  }
  peek() {
    return this.head.val;
  }

  empty() {
    return this.size === 0;
  }

  print() {
    let current = this.head;
    let s = "";
    while (current) {
      s += current.val + "=>";
      current = current.next;
    }
    console.log(s);
  }
}
