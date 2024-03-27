let array1 = [2,5,8,11,14];
isFirstElementPrime(array1);
function isFirstElementPrime(arr) {

    if (arr.length === 0) {
        console.log("Array is empty");
        return false;
    }
    
    console.log(arr);
    let firstElement = arr[0];
console.log(firstElement, "is the first element in the array");

    if (isPrime(firstElement)) {
        console.log(firstElement + " is a prime number");
        return true;
    } else {
        console.log(firstElement + " is not a prime number");
        return false;
    }
}
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}
