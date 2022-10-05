const mergeSort = (arr, left, right) => {
  if (left < right) {
    // Base case
    let middle = Math.floor((right + left) / 2);

    mergeSort(arr, left, middle);
    mergeSort(arr, middle + 1, right);
    merge(arr, left, right, middle);
  }

  return arr;
};

const merge = (arr, left, right, middle) => {
  // Find lengths of two subarrays
  let length1 = middle - left + 1;
  let length2 = right - middle;

  // Two temporary array
  let L = new Array(length1);
  let R = new Array(length2);

  // Copy sorted left and right halfs to temporary arrays
  for (let i = 0; i < length1; i++) {
    L[i] = arr[left + i];
  }

  for (let i = 0; i < length2; i++) {
    R[i] = arr[m + 1 + i];
  }

  // initial indexes of left and right sub-arrays
  let i = 0; // index for left
  let j = 0; // index for right
  let k = left; // Initial index of merged subarray array

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

  while (i < length1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < length2) {
    arr[k] = R[j];
    j++;
    k++;
  }
};
