// Write a function that takes an array of strings and returns a Map where the keys are the
// unique strings and the values are the number of times each string appears in the array.
// (Use Map Object)
function countOccurrences(arr) {
    // your code here
    let shortOutMap = new Map();

    arr.forEach((value) => {
        if (shortOutMap.has(value)) {

            shortOutMap.set(value, shortOutMap.get(value) + 1)

        }
        else {
            shortOutMap.set(value, 1);
        }
    });
    return shortOutMap;

}
// Example usage:
let strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(countOccurrences(strings));
// Output: Map { 'apple' => 3, 'banana' => 2, 'orange' => 1 };
