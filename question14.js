// Write a function that takes multiple arrays and returns a new array containing all unique
// elements from all arrays.

function union(...arrays) {
    let resultSet = new Set();
    let array = [];
    for (const i of arrays) {
        for (const x of i) {
            resultSet.add(x);
        }
    }
    for (const x of resultSet) {
        array.push(x);
    }
    return array;
    // your code here
}
let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
let array3 = [5, 6, 7];
console.log(union(array1, array2, array3));
// Output: [1, 2, 3, 4, 5, 6, 7]
