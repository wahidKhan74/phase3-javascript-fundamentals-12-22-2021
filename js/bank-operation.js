// array of banks accounts
let accounts =[
    { accNo:1001, name:"John Smith", balance:3453453.446},
    { accNo:1002, name:"Will Smith", balance:45643453.456},
    { accNo:1003, name:"David Miller", balance:7873453.46},
    { accNo:1004, name:"Aria Stark", balance:983453.45},
    { accNo:1005, name:"John Snow", balance:3232453.546},
];

// find account
function findAccount(accId){
    for(let acc of accounts) {
        if(acc.accNo==accId) {
            return acc;
        }
    }
    return null;
}

// show balance
function showBalance() {
    let accId = prompt("Enter your Account Id");
    let fAcc = findAccount(accId);
    if(fAcc!=null) {
        console.log(`Hello user ${fAcc.accNo} - ${fAcc.name} Your balance is ${fAcc.balance}`);
    } else {
        console.log("Account Not Found !");
    }
}

// deposit amount
function depositAmount() {
    let accId = prompt("Enter your Account Id");
    let depositAmt = Number(prompt("Enter your deposit Amount"));
    let fAcc = findAccount(accId);
    if(fAcc!=null) {
        if(depositAmt>0)
            fAcc.balance += depositAmt;
        console.log(`Hello user  After deposit ${fAcc.accNo} - ${fAcc.name} Your balance is ${fAcc.balance}`);
    } else {
        console.log("Account Not Found !");
    }
}

// withdraw amount
function withdrawAmount() {
    let accId = prompt("Enter your Account Id");
    let withdrawAmt = Number(prompt("Enter your withdraw Amount"));
    let fAcc = findAccount(accId);
    if(fAcc!=null) {
        if(withdrawAmt>0 && withdrawAmt < fAcc.balance)
            fAcc.balance -= withdrawAmt;
        console.log(`Hello user  After withdraw ${fAcc.accNo} - ${fAcc.name} Your balance is ${fAcc.balance}`);
    } else {
        console.log("Account Not Found !");
    }
}