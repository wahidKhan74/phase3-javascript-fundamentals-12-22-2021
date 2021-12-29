let listOfCompanies = ["Dell","BOA","Infosys","Simplilearn","Wipro"];
let listOfItems = ["Oil",534,true, { id: 12, name:"oil", price:3434}];

// arrays methods
// push : add data at the end of array.
listOfCompanies.push("Microsoft");

// unshift : add data at the start of array
listOfCompanies.unshift("Google");

// pop : remove data from the last of the array
listOfCompanies.pop();

// shift : remove data from the start of an array.
listOfCompanies.shift();

// iterate over each items
for (let index = 0; index < listOfCompanies.length; index++) {
    const element = listOfCompanies[index];
    console.log(element);
}

console.log("------------");

listOfItems.forEach((element) => {
    console.log(element);
});

console.log("------------");

for(let item of listOfItems) {
    console.log(item);
}