function mergeTwoSortedList(list1, list2) {
  return list1.concat(list2).sort();
}
console.log(mergeTwoSortedList([1, 2, 4], [1, 3, 4]));

function removeDuplicate(arr) {
  let remove = new Set(arr);
  return remove;
}
let val = removeDuplicate(mergeTwoSortedList([1, 2, 4], [1, 3, 4]));
console.log(val);
