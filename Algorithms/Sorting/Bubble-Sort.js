/**
 *
 * @param {Number[]} nums
 */
const bubbleSort = (nums) => {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (let index = 1; index < nums.length; index++) {
      console.log("comparing " + nums[index] + " and " + nums[index - 1]);

      if (nums[index] < nums[index - 1]) {
        isSorted = false;
        console.log("SWAPPING " + nums[index] + " and " + nums[index - 1]);

        let temp = nums[index - 1];
        nums[index - 1] = nums[index];
        nums[index] = temp;
      }

      console.log("array is now ", nums);
    }
    console.log("**one full pass through array**");
    console.log("***is array sorted? ", isSorted);
  }

  return nums;
};

bubbleSort([9, 7, 4, 1, 2]);
