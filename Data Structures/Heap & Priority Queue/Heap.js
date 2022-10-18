/*
    It's true for complete binary heap

    Left Child => 2 * i
    Right Child => 2 * i + 1
    Parent => Math.floor(i / 2)
*/

class Heap {
  constructor() {
    this.heap = [0];
  }

  push(val) {
    this.heap.push(val);

    let index = this.heap.length - 1;

    while (this.heap[i] < this.heap[Math.floor(i / 2)]) {
      let temp = this.heap[i];
      this.heap[i] = this.heap[Math.floor(i / 2)];
      this.heap[Math.floor(i / 2)] = temp;
      i = Math.floor(i / 2);
    }
  }

  pop() {
    if (this.heap.length == 1) return null;

    if (this.heap.length == 2) return this.heap.pop();

    const result = this.heap[1];

    this.heap[1] = this.heap.pop(); // Move last value to the root

    let i = 1;

    while (2 * i < this.heap.length) {
      // There is left child
      if (
        2 * i + 1 < this.heap.length && // There is right child
        this.heap[2 * i + 1] < this.heap[2 * i] && // Right child is smaller than left child
        this.heap[i] > this.heap[2 * i + 1] // Right child is smaller than parent
      ) {
        // Swap right child
        let temp = this.heap[i];
        this.heap[i] = this.heap[2 * i + 1];
        this.heap[2 * i + 1] = temp;
        i = 2 * i + 1;
      } else if (this.heap[i] > this.heap[2 * i]) {
        // Left child is smaller than parent
        let temp = this.heap[i];
        this.heap[i] = this.heap[2 * i];
        this.heap[2 * i] = temp;
        i = 2 * i;
      } else {
        break;
      }
    }

    return result;
  }
}
