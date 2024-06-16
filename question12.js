// . Write a function that takes an array of numbers and returns a new array with all duplicate
// items removed. (Use Set Object)



function removeDuplicates(arr) {
    // your code here
    let sets = new Set(arr);
    let array = [];
    for (const i of sets) {
        array.push(i);
    }
    return array;


}

let numbers = [1, 2, 2, 3, 4, 4, 5];

console.log(removeDuplicates(numbers));
// Output: [1, 2, 3, 4, 5]
