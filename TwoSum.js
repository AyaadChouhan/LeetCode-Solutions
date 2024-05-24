function nums(arr, target) {
    let indices = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                 indices.push(i ,j)
            }
        }
    }
    return indices;
}
console.log(nums([2,7,11,15], 9));


