// function decleration  : define a task by a function
// syntax : function functName(params)  { // body }
// 1. Non Parametrised function  // 2. Parametrised function

// 1. Non Parametrised function
function showMessage() {    
    console.log("Hello user, welcome to Javascript !");
}

// function calling
showMessage();

// 2. One Parametrised function
function displayMessage(username) {
    console.log("Hello user, '"+username +"' welcome to Javascript !");
}

displayMessage("Mike Smith");
displayMessage("John Smith");
displayMessage("Will Smith");
displayMessage();

// 3. Multi Parametrised function
function fetchContent(id,name,age) {
    console.log(`Hello user ${id} with name ' ${name} ' your age ${age}`);
}

fetchContent(100,"mike smith",20);
fetchContent(101,"will smith",55);
fetchContent();

// 4. default Parametrised function
function displayContent(name="Tony",phone=10101010, status=false){
    console.log(`Hello user ${name} , your phone number is ${phone} your status is ${status}`);
}

displayContent();
displayContent("Mike Smith",8783434,true);
displayContent("Mike Smith");
