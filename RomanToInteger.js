function RomantoInteger(para) {
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < para.length; i++) {
    let cur = obj[para[i]];
    let next = obj[para[i + 1]];

    if (cur) {
      result += cur;
    }
  }
  return result;
}
console.log(RomantoInteger("III"));
console.log(RomantoInteger("LVIII"));
