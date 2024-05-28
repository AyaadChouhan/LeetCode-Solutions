function plusOne(arr) {
  let n = "";
  arr.forEach((element) => {
    n += element;
  });
  let num = +n + 1;
  return num.toString().split("")
}
console.log(plusOne([1, 2, 3]));
console.log(plusOne([4,3,2,2]));
