function nums(arr) {
    let n = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 2; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return arr[i];
        }
      }
    }
  }
  console.log(nums([5, 1, 5, 2, 5, 3, 5, 4]));
  console.log(nums([1, 1, 4, 2, 1, 3, 5, 4]));
  console.log(nums([4, 1, 4, 2, 4, 3, 5, 4]));