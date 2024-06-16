// Date in js

// const d = new Date();
// d.toString();

// console.log(d.toString())
// console.log(d)

// console.log(d.toDateString())

// console.log(d.toUTCString())
// console.log(d.toISOString())

let date = new Date()

let dateFormat = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

console.log(dateFormat);
