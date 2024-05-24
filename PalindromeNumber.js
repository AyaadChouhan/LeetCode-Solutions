function findPalindromeNum(x) {
  let str = x.toString().split("");
  let joined = str.reverse().join("");
  let conversion = Number(joined);
  if (x === conversion) {
    return true;
  } else {
    return false;
  }
}
console.log(findPalindromeNum(121));