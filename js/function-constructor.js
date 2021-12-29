// JavaScript Constructor : a "blueprint" for creating many objects of the same "type".
// 1. Non Parametrised Constructor  // 2. Parametrised Constructor

// 1. Non Parametrised Constructor
function Person() { }; // zero argument constructor => return empty object.

let person = new Person();  // empty object
console.log(person);

// 2. Parametrised Constructor
function Account(id,name,balance,email) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.email = email;
}

let accountOne = new Account(1001, "Mike Smith",34545.456,"mike.smith@gmail.com");
console.log(accountOne);

// access properties & methods dot (.)
console.log(accountOne.id);
console.log(accountOne.name);
console.log(accountOne.balance);
console.log(accountOne.email);
console.log("---------------------");
// set or change values
accountOne.balance = 45456.567;
accountOne.email = 'mike@gmail.com';
console.log(accountOne.balance);
console.log(accountOne.email);


let accountTwo = new Account(1002, "John Smith",894545.456,"john.smith@gmail.com");
console.log(accountTwo);