// callback function  ->  When we pass a function as an argument to another function.

let x = function () {
    console.log("This is a X - function");
}

let y = function (callback) {
    console.log("This is a Y - function");
    // console.log(a);
    callback();
}

y(x);