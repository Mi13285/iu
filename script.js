function createPhoneNumber(numbers) {
  let number1 = numbers.slice(0, 3);
  let p = number1.join("");
  let number2 = numbers.slice(3, 6);
  let t = number2.join("");
  let j = numbers.slice(-4);
  return "(" + p + ")" + " " + t + "-" + j;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
