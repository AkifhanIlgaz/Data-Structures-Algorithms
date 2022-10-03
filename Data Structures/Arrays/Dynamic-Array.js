class DynamicArray {
  constructor() {
    this.arr = new Array(2);
    this.capacity = 2;
    this.length = 0;
  }

  // Insert "value" in the last position of the array
  push(value) {
    // If capacity is reached call resize()
    if (this.length == this.capacity) {
      this.resize();
    }

    // Length pointer will point to the next available index
    this.arr[this.length] = value;
    this.length++;
  }

  resize() {
    // Create a new array of double capacity
    this.capacity = 2 * this.capacity;
    const newArr = new Array(this.capacity);

    // Copy all elements to the newArr
    for (let i = 0; i < this.length; i++) {
      newArr[i] = this.arr[i];
    }

    this.arr = newArr;
  }

  // Remove the last element of the array
  pop() {
    // Decrementing the length pointer is enough
    // New element will overwrite
    if (this.length > 0) {
      this.length--;
    }
  }

  // Get value at i-th index
  get(i) {
    if (i < this.length) {
      return this.arr[i];
    }

    throw Error("Out of bounds");
  }

  // Insert n at i-th index
  // Careful!! If there is a value at that index, n will overwrite it
  // This is not splice method
  insert(i, n) {
    if (i < this.length) {
      this.arr[i] = n;
      return;
    }
    throw Error("Out of bounds");
  }

  print() {
    let s = "";
    for (let i = 0; i < this.length; i++) {
      s += this.arr[i] + " ";
    }
    console.log(s);
  }
}
