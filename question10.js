// You are given an array of employee objects with id and name properties. Write a
// function to create a Map that maps employee IDs to their names.

let employees = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

function mapEmployeeIdsToNames(employees) {
    // use Map Object here
    let map = new Map();

    employees.forEach((value, index) => {
        map.set(value.id, value.name)
    })
    return map;
}



let employeeMap = mapEmployeeIdsToNames(employees);
console.log(employeeMap);
// Output: Map { 1 => 'Alice', 2 => 'Bob', 3 => 'Charlie' }
