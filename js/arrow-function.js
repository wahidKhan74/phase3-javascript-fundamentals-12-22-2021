// function expression syntax 
let showData = function () {
    console.log("Today is a good day!");
}
showData();

// zero param arrow function
let displayData =  () => {
    console.log("Today is a greate day!");
}
displayData();

// multi param arrow function
let ageCalculator = (username,yearOfBith) => {
    let currentYear = 2021;
    let age = currentYear - yearOfBith;
    console.log(`The user ${username}, has age ${age} years`);
    return age;
}

let retirementCalculator = (username,yearOfBith) => {
    let age = ageCalculator(username,yearOfBith);
    if(age> 60) {
        console.log("Your are already retired !");
    } else{
        let remYear = 60-age;
        console.log("Remaining years for retirement : ",remYear);
    }
}

retirementCalculator("Mike Smith", 1990);

// one line arrow
let onelineData = () => console.log("This is one line arrow function");
onelineData();
console.log("-------------------");

// one line arrow implicit return
let fullNameMaker = (firstName, middleName, lastName) => `${firstName} ${middleName} ${lastName}`;

console.log(fullNameMaker("John","William","Smith"));