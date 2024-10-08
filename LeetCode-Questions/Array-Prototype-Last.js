// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

// Example 1:

// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.

Array.prototype.last = function () {
    let val;
    if (this.length === 0) {
      return -1
    }
    for (const el of this) {
     if (el !== undefined) {
      val = el;
     }
    }
    return val
  };