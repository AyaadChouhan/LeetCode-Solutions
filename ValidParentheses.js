function validParentheses(paran) {
let p = "()";
let c = "{}";
let sb = "[]";
let pcsb = "(){}[]";
let csbp = "{}[]()";
let sbpc = "[](){}";
let sbcp = "[]{}()";
switch (paran) {
  case p:
    return true;
    break;
  case c:
    return true;
    break;
  case sb:
    return true;
    break;
  case sbpc:
    return true;
    break;
  case csbp:
    return true;
    break;
  case pcsb:
    return true;
    break;
  case sbcp:
    return true;
    break;
  default:
    break;
}
return false;
}
console.log(validParentheses("[}"));
