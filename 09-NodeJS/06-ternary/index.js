const num1 = 50;
const num2 = 30;

let isGreater;

//ES5 IF Statement
if (num1 > num2){
    isGreater = true;
}
else{
    isGreater = false;
}

//console.log("isGreater", isGreater);

//ES6 IF Statement
isGreater = (num1 > num2) ? true : false;


//          condition       true    false

isGreater = (num1 > num2) ? "Num1 is Greater!" : "Num1 is not greater!";

//console.log("isGreater", isGreater);

const day = false;

//console.log(day ? "It's Daytime" : "It's Night time!");

const isDayTime = (clock) => (clock > 12) ? "Night Time" : "Morning Time"; 

console.log(isDayTime(15));

const isInClass = true;

let attendence = (isInClass) ? "Present" : "Absent";

console.log(attendence);

const cars = (true) ? ["madza", "ford"] : ["Honda", "Jeep"]

const isNum1Fifty = (num1 === 50) ? "Yes" : "No";








