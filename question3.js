let classes = [
    ["Alice", "Bob", "Charlie"],
    ["David", "Alice", "Eve"],
    ["Frank", "George", "Bob"]
];

function checkDuplicates(classes) {
    let nameSet = new Set();
    for (value in classes) {
        for (value2 in classes[value]) {
            let values = classes[value][value2];
            if (nameSet.has(values)) {
                return true
            }
            nameSet.add(values)

        }
    }
    return false;

}
console.log(checkDuplicates(classes));
// Output: true
