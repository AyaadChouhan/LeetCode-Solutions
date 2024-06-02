function nums(arr, original) {
  let num = original;
  let updatedValue;
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(num)) {
      updatedValue = num * 2;
      num = updatedValue;
    }
  }
  return arr.includes(original) ? updatedValue : original;
}
console.log(nums([8, 19, 4, 2, 15, 3], 2));
console.log(nums([5, 3, 6, 1, 12], 3));
console.log(nums([2, 7, 9], 4));
