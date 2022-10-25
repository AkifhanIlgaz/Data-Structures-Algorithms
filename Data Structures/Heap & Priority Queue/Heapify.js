/**
 * Left Child = 2 * i
 * Right Child = 2 * i + 1
 * Parent = i / 2
 */

class Heap {
  constructor() {
    this.heap = new Array();
    this.heap.push(0);
  }

  /**
   *
   * @param {number[]} arr
   */
  heapify(arr) {
    // Move first element to the end
    arr.push(arr[0]);

    this.heap = arr;

    // Last node that has child
    let cur = Math.floor((this.heap.length - 1) / 2);

    while (cur > 0) {
      // Percolate Down
      let i = cur;

      while (2 * i < this.heap.length) {
        if (
          2 * i + 1 < this.heap.length &&
          this.heap[2 * i + 1] < this.heap[2 * i] &&
          this.heap[2 * i + 1] < this.heap[i]
        ) {
          // Swap right child
          let temp = this.heap[i];
          this.heap[i] = this.heap[2 * i + 1];
          this.heap[2 * i + 1] = temp;
          i = 2 * i + 1;
        } else if (this.heap[2 * i] < this.heap[i]) {
          // Swap left child
          let temp = this.heap[i];
          this.heap[i] = this.heap[2 * i];
          this.heap[2 * i] = temp;
          i = 2 * i;
        } else {
          break;
        }
      }
      cur--;
    }

    return;
  }
}
