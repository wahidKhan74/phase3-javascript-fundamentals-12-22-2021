// JavaScript class : It is added from es6 , as a new syntax to declare OOP
// class decleration syntax.
class Person {
    // properties
    id;
    name;
    email;

    // constructor 
    constructor(id,name,email){
        this.id =id;
        this.name= name;
        this.email = email;
    }

    // methods
    showDetails() {
        console.log(`The person - ${this.id} has name -  ${this.name} with email - ${this.email}`);
    }

}
//create object
let person = new Person(10001, "John Smith","john.smith@gmail.com");
console.log(person);

console.log("Person Id : ", person.id);
console.log("Person Name : ", person.name);
console.log("Person Email : ", person.email);

person.showDetails();