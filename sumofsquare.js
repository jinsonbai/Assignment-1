let array = [1, 2, 3, 4, 5];
let result = sumOfSquares(array);
console.log("Sum of squares =", result);
function sumOfSquares(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum = sum + (array[i] * array[i]);
    }
    return sum;
}