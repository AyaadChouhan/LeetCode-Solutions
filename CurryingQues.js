function mainFunc(num1) {
    return function inner(num2) {
      return num1 + num2;
    }
}
const datas = mainFunc(10)(20);
console.log(datas)
