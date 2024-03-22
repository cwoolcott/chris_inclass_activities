const cars = ["Honda", "Acura", "Toyota", "Mazda", "Yugo", "Chrysler", "Pinto"];

console.log(cars[4]);//Yugo
console.log(cars[0]);//Honda
console.log(cars[6]);//undefined

cars[1] = "Lexus";

console.log("cars:", cars)


console.log(`My Favorite car is the ${cars[0]}.`);

const lastCar = cars[cars.length - 1];  //cars[5]
console.log(lastCar);

