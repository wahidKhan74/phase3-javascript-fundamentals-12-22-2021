// Closures : Nested Function
// closures has access to three different scope chain.
// 1. inner variable/parameters  2.outer varaible/parameters  3. global varibles
let firstName = "John";  // global varaible.

function fullNameMaker() {
    let middleName = "William";  // local varaible or outer variable

    // nested function or closures
    function combine() {
        let lastName = "Smith";  // local varaible or inner varaible.
        return `${firstName} ${middleName} ${lastName}`;
    }

    return combine();
}

let response = fullNameMaker();
console.log(response);