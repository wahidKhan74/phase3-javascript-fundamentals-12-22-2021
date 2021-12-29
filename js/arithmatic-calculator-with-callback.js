// Arithmatic Operations
let add = function(num1, num2) {
    return num1 + num2;
}

let sub = function(num1, num2) {
    return num1 - num2;
}

let mul = function(num1, num2) {
    return num1 * num2;
}

let div = function(num1, num2) {
    return num1 / num2;
}

let avg = function(num1, num2) {
    return (num1 + num2 ) / 2;
}

let calculator =  function (num1, num2, callback){
    return callback(num1,num2);
}

let x = 1000;
let y = 300;
console.log(`The Addition of ${x} + ${y} = `, calculator(x,y,add));
console.log(`The Substraction of ${x} - ${y} = `, calculator(x,y,sub));
console.log(`The Multiplication of ${x} * ${y} = `, calculator(x,y,mul));
console.log(`The Division of ${x} / ${y} = `, calculator(x,y,div));
console.log(`The Avg of ${x} & ${y} avg = `, calculator(x,y,avg));


// calculator(x,y,function(num1, num2) {
//     return num1 + num2;
// });