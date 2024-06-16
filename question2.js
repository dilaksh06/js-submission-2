let employees = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 30 }
];
let ageLimit = 30;
function filterEmployees(employees, ageLimit) {
    // your code here

    let age = employees.filter((a, b) => {
        let x = a.age;
        return x > ageLimit;
    })
    return age;


}
console.log(filterEmployees(employees, ageLimit));
// Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]
