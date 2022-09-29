class DoublyListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// Implementation for Doubly Linked List
class DoublyLinkedList {
  constructor() {
    // Initiating the list with "dummy" head and tail will make easy edge cases for insert and remove
    this.head = new DoublyListNode(-1);
    this.tail = new DoublyListNode(-1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // We use "dummy" heads and tails, so we don't need to change head or tail

  insertFront(val) {
    const newNode = new DoublyListNode(val);
    newNode.prev = this.head;
    newNode.next = this.head.next;

    this.head.next.prev = newNode;
    this.head.next = newNode;
  }

  insertEnd(val) {
    const newNode = new DoublyListNode(val);
    newNode.next = this.tail;
    newNode.prev = this.tail.prev;

    this.tail.prev.next = newNode;
    this.tail.prev = newNode;
  }

  // Remove first node after dummy head( assume it exists)
  removeFront() {
    this.head.next.next.prev = this.head;
    this.head.next = this.head.next.next;
  }

  // Remove last node before dummy tail( assume it exists)
  removeEnd() {
    this.tail.prev.prev.next = this.tail;
    this.tail.prev = this.tail.prev.prev;
  }

  print() {
    let current = this.head.next;
    let s = "";

    while (current != this.tail) {
      s += current.val + "=>";
      current = current.next;
    }

    console.log(s);
  }
}
