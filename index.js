// 1
// const processArray = (array, callback) => callback(array);
// const getSum = (arr) => {
//   let sum = 0;

//   for (let num of arr) {
//     sum += num;
//   }
//   return sum;
// };
// const getMin = (arr) => {
//   let min = arr[0];
//   for (let num of arr) {
//     if (num < min) {
//       min = num;
//     }
//   }
//   return min;
// };
// const getMax = (arr) => {
//   let max = arr[0];
//   for (let num of arr) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   return max;
// };
// const numbers = [1, 2, 3, 4, 5];
// console.log(processArray(getSum, numbers));
// 2
const operate = (a, b, callback) => callback(a, b);
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiple = (a, b) => a * b;
const dived = (a, b) => a / b;
console.log(operate(10,5, add));
console.log(operate(10,5, subtract));
console.log(operate(10,5, multiple));
console.log(operate(10,5, dived));