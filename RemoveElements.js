function removeElement(nums, val) {
    let k = 0;
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        newArr.push(nums[i]);
        k++;
      }
    }
    for (let i = 0; i < nums.length - k; i++) {
      newArr.push("_");
    }
    // return `val = ${k},nums = ${newArr}`
    console.log("k is " + k);
    return newArr;
  }
  let nums = [3, 2, 2, 3];
  console.log(removeElement(nums, 3));
  console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));