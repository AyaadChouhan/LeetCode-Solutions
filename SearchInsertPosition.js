function searchInsertPosition(nums,target) {
    if (nums.includes(target)) {
        return nums.indexOf(target)
    }else if(!nums.includes(target)){
      let UpdatedArr = nums.push(target);
      return nums.indexOf(target);
    }
}
const nums = [1,3,5,6]
console.log(searchInsertPosition(nums, 5));
console.log(searchInsertPosition(nums, 7));