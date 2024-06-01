function JewelsandStones(jewels, stones) {
  let str = "";
  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (jewels[i] === stones[j]) {
        str += stones[j];
      }
    }
  }
  return str.length;
}
const jewels = "badc";
const stones = "ccc";
console.log(JewelsandStones(jewels, stones));
console.log(JewelsandStones("z", "ZZ"));
console.log(JewelsandStones("badc", "ccc"));


