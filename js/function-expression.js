// function expression : A expression syntax is used to declare a fuction with vairable assignment.
// 1. labled function expression  2. Anonymous function expression

// 1. labled function expression
let showData = function showMessage() {
    console.log("Hello user welcome to JavaScript function expression");
    return "Function Expression";
}

console.log(showData);
//function expression calling
let response = showData();  // return values is associated with function call.
console.log(response);
// showMessage(); // Uncaught ReferenceError: showMessage is not defined

// 2. Anonymous function expression
let createBox = function (width, height){
    return width * height;
}

console.log(createBox);
let res = createBox(100,100);
console.log(res);