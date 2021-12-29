// Rest Parameters : lets you represent an infinite numbers of argument as an array.
function addNumbers(...numbers) {
    console.log(numbers);
    let total = 0;
    for(let num of numbers){
        total += num;
    }
    console.log("The total is : "+total);
}

addNumbers(10,20,30);

addNumbers(10,20,30,40, 50, 60 , 70);

addNumbers(10,20,30,40, 50, 60 , 70, 80, 90 ,100);