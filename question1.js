let transactions = [
    { type: "deposit", amount: 100 },
    { type: "withdrawal", amount: 50 },
    { type: "deposit", amount: 200 },
    { type: "withdrawal", amount: 30 }
];
function groupByType(transactions) {
    let grouped = {};

    // your code here...
    let deposit = transactions.filter((a, b) => {
        let x = a.type
        return x === "deposit";
    });
    let withdrawal = transactions.filter((a, b) => {
        let x = a.type
        return x === "deposit";
    })

    grouped = {
        deposit: deposit,
        withdrawal: withdrawal
    }

    return grouped;
}
console.log(groupByType(transactions));


// Output: { deposit: [{ type: "deposit", amount: 100 }, { type: "deposit",
// amount: 200 }], withdrawal: [{ type: "withdrawal", amount: 50 }, {
//     type:
//         "withdrawal", amount: 30
// }] }