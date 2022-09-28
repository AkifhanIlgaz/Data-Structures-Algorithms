class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // We use dummyNode
    this.head = new ListNode(-1);
    this.tail = this.head;
  }

  // O(1)
  insertEnd(val) {
    const newNode = new ListNode(val);
    this.tail.next = newNode;
    this.tail = newNode;
  }

  // O(n)
  remove(index) {
    let i = 0;
    let curr = this.head;

    // Find the preceding one node
    while (i < index && curr.next != null) {
      i++;
      curr = curr.next;
    }

    // Remove the node
    if (curr !== null) {
      curr.next = curr.next.next;
    }
  }

  print() {
    let s = "";
    let curr = this.head.next;

    while (curr) {
      s += curr.val + "->";
      curr = curr.next;
    }
    console.log(s);
  }
}
