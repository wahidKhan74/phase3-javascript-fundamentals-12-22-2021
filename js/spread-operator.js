// The spread operator (...) helps you expand iterables into individual elements.

let numbers =[10,20,30,40];
function addNumbers(a,b,c,d) {
    return a + b + c + d;
}

console.log("The total : ", addNumbers(10,20,30,40));
console.log("The total : ", addNumbers(numbers[0],numbers[1],numbers[2],numbers[3]));

// sread operator
console.log("The total :> ", addNumbers(...numbers));

//slip string into character array.
let username = "John Marry Smith";
console.log([...username]);

let companies = ["Dell", "Google","Microsoft","Infosys"];
let otherComp = ["Amazon", ...companies];

console.log(otherComp);