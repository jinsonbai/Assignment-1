function findMostFrequentItem(arr) {
    let frequencyCounter = {};
    arr.forEach(item => {
        frequencyCounter[item] = (frequencyCounter[item] || 0) + 1;
    });
    let mostFrequentItem;
    let maxFrequency = 0;  
    for (let item in frequencyCounter) {
        if (frequencyCounter[item] > maxFrequency) {
            maxFrequency = frequencyCounter[item];
            mostFrequentItem = item;
        }
    }
    return mostFrequentItem;
}
const array = [1, 2, 3, 4, 2, 2, 4, 4, 4];
const mostFrequent = findMostFrequentItem(array);
console.log("Most frequent item:", mostFrequent);
