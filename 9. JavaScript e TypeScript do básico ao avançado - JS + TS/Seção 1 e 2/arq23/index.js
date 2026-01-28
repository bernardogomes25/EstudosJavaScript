const numbers = [10, 20, 30, 40, 50, 60, 70, 80];
const [firstNum, secondNum, ...left] = numbers;
console.log(firstNum, secondNum);
console.log(left);