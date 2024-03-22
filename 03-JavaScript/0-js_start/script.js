//ES5
var teacher = "Chris";

//ES7
let firstName = "James Bond";
console.log(firstName);

firstName = "Dia";

console.log(firstName);

//ES7
const numberOfDogs = 7;

//ES5
var statement =
  "The Customer named " + firstName + " owns " + numberOfDogs + " Dogs.";

console.log(statement);

//ES7
const statement2 = `The Customer name ${firstName}, owns ${numberOfDogs} Dogs.`;
console.log(statement2);

firstName = "Justin";

const statement3 = `This is ${firstName} he is a student that owns ${numberOfDogs} dogs.`;
console.log(statement3);

const numberOne = 6;
const numberTwo = 9;

const total = numberOne * numberTwo;
console.log(total);
