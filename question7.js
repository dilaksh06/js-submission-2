// Write a function that calculates the number of days between two given dates.
// (Hint: use Math function in JavaScrpt & Date object to write the function)


function dateDifference(date1, date2) {
    // Your code here
    const dates1 = new Date(date1);
    const dates2 = new Date(date2);
    const differnece = Math.abs(dates2 - dates1);
    const day = (differnece / (1000 * 60 * 60 * 24));
    return day

}
console.log(dateDifference("2022-06-15", "2023-06-15")); // Example dates
