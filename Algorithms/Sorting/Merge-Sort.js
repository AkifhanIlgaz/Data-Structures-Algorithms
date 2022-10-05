/**
 *
 * @param {Number[]} arr
 * @param {Number} left
 * @param {Number} right
 */
const mergeSort = (arr, left, right) => {
  if (left < right) {
    // Find the middle point of arr
    let middle = Math.floor((right - left) / 2);

    mergeSort(arr, left, middle); // Sort left half
    mergeSort(arr, middle + 1, right); // Sort right half
    merge(arr, left, middle, right); // Merge sorted halfs
  }

  return arr;
};
/**
 *
 * @param {Number[]} arr
 * @param {Number} left
 * @param {Number} middle
 * @param {Number} right
 * Merges two subarrays of arr
 * First Half => [left..middle]
 * Second Half => [middle+1..right]
 */
const merge = (arr, left, middle, right) => {
  // Find lengths of sub-arrays
  let length1 = middle - left + 1;
  let length2 = right - middle;

  // Create temp arrays
  let L = new Array(length1);
  let R = new Array(length2);

  // Copy the sorted left & right halfs to the temp arrays
  for (let i = 0; i < length1; i++) {
    L[i] = arr[left + i];
  }
  for (let i = 0; i < length1; i++) {
    R[i] = arr[middle + i + 1];
  }

  // initial indexes of left and right sub-arrays
  let i = 0; // index for left
  let j = 0; // index for right
  let k = left; // Initial index of merged subarray array

  // Merge two halfs to the original array
  while (i < length1 && j < length2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // One of the halfs have elements remaining
  while (i < length1) {
    arr[k] = L[i];
    k++;
    i++;
  }

  while (j < length2) {
    arr[k] = R[j];
    k++;
    j++;
  }
};
