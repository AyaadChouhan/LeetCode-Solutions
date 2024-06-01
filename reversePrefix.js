function reversePrefix(word, ch) {
  const ind = word.indexOf(ch);
  let str1 = "";

  for (let i = ind; i >= 0; i--) {
    str1 += word[i];
  }
  for (let j = ind + 1; j < word.length; j++) {
    str1 += word[j];
  }
  return str1;
}
console.log(reversePrefix("xyxzxe", "z")); //"zxyxxe"
console.log(reversePrefix("abcdefd", "d")); //"dcbaefd"
console.log(reversePrefix("abcd", "z")); //"dcbaefd"
