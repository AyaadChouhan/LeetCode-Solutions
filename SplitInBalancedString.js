function splitword(s) {
    let counter = 0;
    let result = 0;
  
    for (const char of s) {
      if (char === "R") counter++;
      else counter--;
  
      if (counter === 0) result++;
    }
    return result;
  }
  console.log(splitword("RLRRLLRLRL"));
  console.log(splitword("RLRRRLLRLL"));
  console.log(splitword("LLLLRRRR"));