// Imediately invoked function expression. -> self executing function
(function () {
    console.log("Imediately invoked function expression.");
})();

//IIFE
(function() {
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
(function(){
    firstName ="David";
    lastName ="Miller";
})();

console.log(firstName, lastName);