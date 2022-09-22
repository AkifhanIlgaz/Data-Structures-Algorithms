class StaticArray {
  // Insert n into arr at the next available position
  // Length is the number values that is actually stored in arr
  // Capacity is the size ( memory allocated for the fixed size array)

  // Time-Complexity => O(1)
  insertEnd(arr, n, length, capacity) {
    // If length exceeds capacity , this means our array is full and we cannot store elements anymore
    if (length < capacity) {
      arr[length] = n;
    }
  }

  // Remove from the last position in the array if the array is not empty
  // Time-Complexity => O(1)
  removeEnd(arr, length) {
    if (length > 0) {
      // Overwrites the last element with default value which is 0
      arr[length - 1] = 0;
      length--;
    }
  }

  // Insert n into the index i after shifting elements to the right
  // i should be valid index and arr shouldn't be full
  insertMiddle(arr, i, n, length) {
    // Shift all elements starting from i to the right
    for (let index = arr.length - 1; index > i - 1; index--) {
      arr[index + 1] = arr[index];
    }
    // Insert
    arr[i] = n;
  }

  // Remove value at index i before shifting elements to the left
  // i should be valid index
  removeMiddle(arr, i, length) {
    for (let index = i + 1; index < length; index++) {
      arr[index - 1] = arr[index];
    }

    // Since we already shifted , there is no need to remove arr[i]
  }

  printArray(arr) {
    let str = "";
    arr.forEach((element) => {
      str += element + " ";
    });
    console.log(str);
  }
}
