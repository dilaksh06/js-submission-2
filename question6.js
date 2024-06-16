// Write a function that takes a date and a number of days as input and returns the new
// date after adding the specified number of days.  const d = new Date("2022-03-25");

// const d = new Date(2018, 11, 10);

// console.log(d)
// const ds = new Date("2022-03-25");
// console.log(ds)



function addDays(date, days) {
    // YOUR CODE HERE  
    let dates = new Date(date);
    let addDate = new Date(dates.getFullYear(), dates.getMonth(), dates.getDate() + days)
    return addDate
}
console.log(addDays("2022-06-15", 10));

