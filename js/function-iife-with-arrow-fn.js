// Imediately invoked function expression with arrow function. -> self executing function
(()=> {
    console.log("Imediately invoked function expression.");
})();

//IIFE with arrow
(() => {
    let username ="John Smith";
    let age = 30;
    console.log("Hello user : ", username);
    console.log("User age : ",age);

    // nested function
    function display() {
        console.log(`The user ${username} & age ${age}`);
    }
    display();
})();

// display();  // Uncaught ReferenceError: display is not defined

let firstName ;
let lastName ;
// IIFE as intializer.
(()=>{
    firstName ="David";
    lastName ="Miller";
})();

console.log(firstName, lastName);