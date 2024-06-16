// Write a function that takes a birthdate as input and calculates the person's age.

function calculateAge(birthdate) {

    let currentDate = new Date();
    let birthDate = new Date(birthdate)
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    return age;
}


console.log(calculateAge("1990-06-15"));
