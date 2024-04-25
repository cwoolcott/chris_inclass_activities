//Destructuring Arrays

const fruits = ["Apple", "Peach", "Orange", "Tomato", "Bananna"];

// const fruitOne = fruits[0];
// const fruitTwo = fruits[1];
// const fruitThree = fruits[2];

const [fruitOne,fruitTwo,fruitThree] = fruits;
//const [...morefruits] = fruits;


const cars = ["Mazda", "Ford", "Toyota", "Jeep"];

const [car, anotherCar, ...otherCars] = cars;

console.log(otherCars)
const [otherCar1, otherCar2] = otherCars;



//Destructuring Objects

const teacherInfo = {
    firstName:"Chris",
    lastName: "Woolcott",
    hobbies: {
        firstHobby: "Teaching",
        secondHobby: "Computers",
        thirdHobby: "Music"
    }
}

// const firstName = teacherInfo.firstName;
// const lastName = teacherInfo.lastName;
const {firstName, lastName} = teacherInfo;
const {firstHobby, secondHobby, thirdHobby:monkey} = teacherInfo.hobbies;

console.log("hobby1", monkey)




